/**
 * Comprehensive utility to handle ResizeObserver loop errors gracefully
 * These errors are usually harmless and occur when rapid resize events trigger loops,
 * especially common in Storybook and when using CSS transforms
 */

// Extend window interface for tracking
declare global {
  interface Window {
    __resizeObserverErrorLogged?: boolean;
    __resizeObserverOriginalError?: typeof console.error;
    __resizeObserverSetupComplete?: boolean;
  }
}

/**
 * Check if an error message is related to ResizeObserver
 */
const isResizeObserverError = (message: any): boolean => {
  if (!message) return false;

  // Convert to string and normalize
  const messageStr = String(message).toLowerCase();

  const resizeObserverPatterns = [
    'resizeobserver loop completed with undelivered notifications',
    'resizeobserver loop limit exceeded',
    'resizeobserver loop',
    'resizeobserver callback threw an exception',
    'resizeobserver',
    'non-finite css pixel',
    'resize observer loop',
    'resize observer callback',
    'loop completed with undelivered notifications',
    'undelivered notifications'
  ];

  return resizeObserverPatterns.some(pattern =>
    messageStr.includes(pattern)
  );
};

/**
 * Enhanced ResizeObserver error suppression with immediate setup
 */
export const setupResizeObserverErrorHandler = (): void => {
  // Only run in browser environment
  if (typeof window === 'undefined') return;

  // Prevent multiple setups
  if (window.__resizeObserverSetupComplete) return;

  // Set up immediately to catch early errors
  window.__resizeObserverSetupComplete = true;
  
  // Store original console.error if not already stored
  if (!window.__resizeObserverOriginalError) {
    window.__resizeObserverOriginalError = window.console.error;
  }

  // Override console.error to catch ResizeObserver errors
  window.console.error = (...args: any[]) => {
    // Check all arguments for ResizeObserver patterns
    const isResizeError = args.some(arg => isResizeObserverError(arg));

    if (isResizeError) {
      // In development, show a friendly warning once
      if (process.env.NODE_ENV === 'development' && !window.__resizeObserverErrorLogged) {
        console.warn(
          '🔧 ResizeObserver loops detected and suppressed.\n' +
          'These are typically harmless warnings caused by CSS transforms or Storybook.\n' +
          'For more info: https://github.com/WICG/ResizeObserver/issues/38'
        );
        window.__resizeObserverErrorLogged = true;
      }
      return; // Suppress the error
    }

    // For all other errors, use the original error handler
    if (window.__resizeObserverOriginalError) {
      window.__resizeObserverOriginalError.apply(window.console, args);
    }
  };

  // Handle uncaught errors
  window.addEventListener('error', (event) => {
    if (isResizeObserverError(event.message)) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      
      if (process.env.NODE_ENV === 'development' && !window.__resizeObserverErrorLogged) {
        console.warn('ResizeObserver error caught and suppressed in error handler');
        window.__resizeObserverErrorLogged = true;
      }
    }
  }, true); // Use capture phase

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    
    if (
      reason &&
      (typeof reason === 'string' && isResizeObserverError(reason)) ||
      (reason instanceof Error && isResizeObserverError(reason.message))
    ) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      
      if (process.env.NODE_ENV === 'development' && !window.__resizeObserverErrorLogged) {
        console.warn('ResizeObserver promise rejection caught and suppressed');
        window.__resizeObserverErrorLogged = true;
      }
    }
  }, true); // Use capture phase

  // Additional safety net: try to catch any remaining ResizeObserver errors
  // that might slip through with a more aggressive pattern
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  window.requestAnimationFrame = (callback) => {
    return originalRequestAnimationFrame.call(window, (...args) => {
      try {
        return callback(...args);
      } catch (error) {
        if (error instanceof Error && isResizeObserverError(error.message)) {
          // Silently suppress ResizeObserver errors in animation frames
          return;
        }
        throw error;
      }
    });
  };
};

/**
 * Debounced ResizeObserver wrapper to prevent rapid firing and loops
 */
export const createDebouncedResizeObserver = (
  callback: ResizeObserverCallback,
  delay: number = 16 // ~60fps
): ResizeObserver => {
  let timeoutId: number | null = null;
  let isProcessing = false;
  
  const debouncedCallback: ResizeObserverCallback = (entries, observer) => {
    // Prevent recursive calls
    if (isProcessing) return;
    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = window.setTimeout(() => {
      isProcessing = true;
      try {
        callback(entries, observer);
      } catch (error) {
        if (error instanceof Error && !isResizeObserverError(error.message)) {
          console.error('ResizeObserver callback error:', error);
        }
      } finally {
        isProcessing = false;
        timeoutId = null;
      }
    }, delay);
  };
  
  return new ResizeObserver(debouncedCallback);
};

/**
 * Safe ResizeObserver that catches and handles errors gracefully
 */
export const createSafeResizeObserver = (
  callback: ResizeObserverCallback
): ResizeObserver => {
  let isProcessing = false;
  
  const safeCallback: ResizeObserverCallback = (entries, observer) => {
    // Prevent recursive calls
    if (isProcessing) return;
    
    isProcessing = true;
    try {
      // Use requestAnimationFrame to prevent layout thrashing
      requestAnimationFrame(() => {
        try {
          callback(entries, observer);
        } catch (error) {
          if (error instanceof Error && !isResizeObserverError(error.message)) {
            console.error('ResizeObserver callback error:', error);
          }
        } finally {
          isProcessing = false;
        }
      });
    } catch (error) {
      isProcessing = false;
      if (error instanceof Error && !isResizeObserverError(error.message)) {
        console.error('ResizeObserver setup error:', error);
      }
    }
  };
  
  return new ResizeObserver(safeCallback);
};

/**
 * Utility to temporarily disable ResizeObserver error logging
 * Useful for testing or specific scenarios
 */
export const temporarilyDisableResizeObserverLogging = (duration: number = 5000): void => {
  if (typeof window === 'undefined') return;
  
  const wasLogged = window.__resizeObserverErrorLogged;
  window.__resizeObserverErrorLogged = true;
  
  setTimeout(() => {
    window.__resizeObserverErrorLogged = wasLogged;
  }, duration);
};

/**
 * Reset ResizeObserver error handler (useful for testing)
 */
export const resetResizeObserverErrorHandler = (): void => {
  if (typeof window === 'undefined') return;
  
  if (window.__resizeObserverOriginalError) {
    window.console.error = window.__resizeObserverOriginalError;
    delete window.__resizeObserverOriginalError;
  }
  
  delete window.__resizeObserverErrorLogged;
  delete window.__resizeObserverSetupComplete;
};
