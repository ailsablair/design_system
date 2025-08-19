/**
 * Utility to handle ResizeObserver loop errors gracefully
 * These errors are usually harmless and occur when rapid resize events trigger loops
 */

// Extend window interface for tracking
declare global {
  interface Window {
    __resizeObserverErrorLogged?: boolean;
  }
}

export const setupResizeObserverErrorHandler = (): void => {
  // Only run in development or when needed
  if (typeof window === 'undefined') return;

  const originalError = window.console.error;

  window.console.error = (...args: any[]) => {
    const message = args[0];

    // Check if this is a ResizeObserver loop error
    if (
      typeof message === 'string' &&
      (message.includes('ResizeObserver loop completed with undelivered notifications') ||
       message.includes('ResizeObserver loop limit exceeded'))
    ) {
      // Silently ignore these errors in development as they're usually harmless
      if (process.env.NODE_ENV === 'development') {
        // Only log once per session to avoid spam
        if (!window.__resizeObserverErrorLogged) {
          console.warn(
            '⚠️ ResizeObserver loop detected - this is usually harmless in Storybook. ' +
            'These errors are now suppressed for cleaner console output.'
          );
          window.__resizeObserverErrorLogged = true;
        }
      }
      return;
    }

    // For all other errors, use the original error handler
    originalError.apply(window.console, args);
  };

  // Handle unhandled errors that might include ResizeObserver issues
  window.addEventListener('error', (event) => {
    if (
      event.message && 
      event.message.includes('ResizeObserver loop completed with undelivered notifications')
    ) {
      event.preventDefault();
      event.stopPropagation();
      
      if (process.env.NODE_ENV === 'development') {
        console.warn('ResizeObserver error caught and handled gracefully');
      }
    }
  });

  // Handle unhandled promise rejections that might be related
  window.addEventListener('unhandledrejection', (event) => {
    if (
      event.reason &&
      typeof event.reason === 'string' &&
      event.reason.includes('ResizeObserver')
    ) {
      event.preventDefault();
      
      if (process.env.NODE_ENV === 'development') {
        console.warn('ResizeObserver promise rejection caught and handled');
      }
    }
  });
};

/**
 * Debounced ResizeObserver wrapper to prevent rapid firing
 */
export const createDebouncedResizeObserver = (
  callback: ResizeObserverCallback,
  delay: number = 16 // ~60fps
): ResizeObserver => {
  let timeoutId: number | null = null;
  
  const debouncedCallback: ResizeObserverCallback = (entries, observer) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = window.setTimeout(() => {
      callback(entries, observer);
      timeoutId = null;
    }, delay);
  };
  
  return new ResizeObserver(debouncedCallback);
};

/**
 * Safe ResizeObserver that catches and handles errors
 */
export const createSafeResizeObserver = (
  callback: ResizeObserverCallback
): ResizeObserver => {
  const safeCallback: ResizeObserverCallback = (entries, observer) => {
    try {
      callback(entries, observer);
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes('ResizeObserver loop')
      ) {
        console.warn('ResizeObserver loop error caught and handled:', error.message);
      } else {
        throw error; // Re-throw non-ResizeObserver errors
      }
    }
  };
  
  return new ResizeObserver(safeCallback);
};
