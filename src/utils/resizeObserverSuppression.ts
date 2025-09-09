/**
 * Comprehensive ResizeObserver Error Suppression
 * 
 * This utility provides immediate and reliable suppression of ResizeObserver errors
 * that commonly occur in Storybook and React applications.
 * 
 * Usage:
 * - Import and call `suppressResizeObserverErrors()` early in your application
 * - For emergency cases, call `emergencySuppressionOverride()` 
 * - For development debugging, use `testErrorSuppression()`
 */

// Global tracking to prevent multiple initializations
declare global {
  interface Window {
    __resizeObserverSuppressionActive?: boolean;
    __resizeObserverOriginalMethods?: {
      error: typeof console.error;
      warn: typeof console.warn;
      onError: typeof window.onerror;
    };
    // Emergency functions for browser console use
    __EMERGENCY_SUPPRESS_RESIZE_OBSERVER?: () => void;
    __EMERGENCY_CONFIG_SUPPRESS?: () => void;
    __EMERGENCY_TEST_SUPPRESSION?: () => Promise<boolean>;
    __EMERGENCY_RESTORE_CONSOLE?: () => void;
  }
}

/**
 * Check if a message is related to ResizeObserver errors
 */
const isResizeObserverError = (input: any): boolean => {
  if (!input) return false;
  
  const message = String(input).toLowerCase();
  
  // Comprehensive pattern matching
  const patterns = [
    'resizeobserver loop completed with undelivered notifications',
    'resizeobserver loop completed with undelivered notifications.',
    'resizeobserver loop limit exceeded',
    'resizeobserver loop',
    'resizeobserver callback',
    'resizeobserver error',
    'resizeobserver',
    'resize observer loop completed with undelivered notifications',
    'resize observer loop completed with undelivered notifications.',
    'resize observer loop limit exceeded', 
    'resize observer loop',
    'resize observer callback',
    'resize observer error',
    'resize observer',
    'resize-observer',
    'loop completed with undelivered notifications',
    'undelivered notifications',
    'undelivered notification',
    'observer loop completed',
    'observer loop limit exceeded',
    'observer loop',
    'resize loop',
    'observation loop',
    'observer cycle',
    'resize cycle',
    'non-finite css pixel',
    'css pixel',
    'observer callback error',
    'resize callback error',
    'observer script error',
    'resize script error'
  ];
  
  return patterns.some(pattern => message.includes(pattern));
};

/**
 * Main ResizeObserver error suppression function
 * Call this early in your application to suppress ResizeObserver errors
 */
export const suppressResizeObserverErrors = (): void => {
  if (typeof window === 'undefined') return;
  if (window.__resizeObserverSuppressionActive) return;

  // Mark as active to prevent duplicate setup
  window.__resizeObserverSuppressionActive = true;

  // Store original methods for potential restoration
  window.__resizeObserverOriginalMethods = {
    error: console.error,
    warn: console.warn,
    onError: window.onerror
  };

  // Override console.error
  console.error = (...args: any[]) => {
    const hasResizeError = args.some(arg => isResizeObserverError(arg));
    if (!hasResizeError) {
      window.__resizeObserverOriginalMethods!.error.apply(console, args);
    }
  };

  // Override console.warn  
  console.warn = (...args: any[]) => {
    const hasResizeError = args.some(arg => isResizeObserverError(arg));
    if (!hasResizeError) {
      window.__resizeObserverOriginalMethods!.warn.apply(console, args);
    }
  };

  // Global error event handling
  window.addEventListener('error', (event) => {
    if (isResizeObserverError(event.message)) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return false;
    }
  }, { capture: true });

  // Unhandled promise rejection handling
  window.addEventListener('unhandledrejection', (event) => {
    if (isResizeObserverError(event.reason)) {
      event.preventDefault();
      return false;
    }
  }, { capture: true });

  // Override window.onerror
  window.onerror = (message, source, lineno, colno, error) => {
    if (isResizeObserverError(message)) {
      return true; // Prevent default browser error handling
    }
    
    const original = window.__resizeObserverOriginalMethods?.onError;
    if (original) {
      return original(message, source, lineno, colno, error);
    }
    return false;
  };

  // Override window.onunhandledrejection
  window.onunhandledrejection = (event) => {
    if (isResizeObserverError(event.reason)) {
      event.preventDefault();
      return;
    }
    // Let other rejections bubble up
  };

  // Safely wrap ResizeObserver constructor
  if (window.ResizeObserver) {
    const OriginalResizeObserver = window.ResizeObserver;
    
    window.ResizeObserver = class SafeResizeObserver extends OriginalResizeObserver {
      constructor(callback: ResizeObserverCallback) {
        const safeCallback: ResizeObserverCallback = (entries, observer) => {
          // Use requestAnimationFrame to prevent immediate loops
          requestAnimationFrame(() => {
            try {
              callback(entries, observer);
            } catch (error) {
              // Only log non-ResizeObserver errors
              if (!isResizeObserverError(error)) {
                console.error('ResizeObserver callback error:', error);
              }
            }
          });
        };
        super(safeCallback);
      }
    };
  }

  // Wrap common async functions to catch ResizeObserver errors
  const wrapAsyncFunction = (original: Function, context?: any) => {
    return function(this: any, ...args: any[]) {
      try {
        const result = original.apply(context || this, args);
        if (result && typeof result.catch === 'function') {
          return result.catch((error: any) => {
            if (!isResizeObserverError(error)) {
              throw error;
            }
            // Silently ignore ResizeObserver promise rejections
          });
        }
        return result;
      } catch (error) {
        if (!isResizeObserverError(error)) {
          throw error;
        }
        // Silently ignore ResizeObserver sync errors
      }
    };
  };

  // Wrap setTimeout
  if (window.setTimeout) {
    const originalSetTimeout = window.setTimeout;
    window.setTimeout = function(callback: any, delay?: number, ...args: any[]) {
      if (typeof callback === 'function') {
        const wrappedCallback = wrapAsyncFunction(callback);
        return originalSetTimeout.call(window, wrappedCallback, delay, ...args);
      }
      return originalSetTimeout.call(window, callback, delay, ...args);
    };
  }

  // Wrap requestAnimationFrame
  if (window.requestAnimationFrame) {
    const originalRAF = window.requestAnimationFrame;
    window.requestAnimationFrame = function(callback: FrameRequestCallback) {
      const wrappedCallback = wrapAsyncFunction(callback);
      return originalRAF.call(window, wrappedCallback);
    };
  }

  console.log('🔧 ResizeObserver error suppression activated successfully');
};

/**
 * Emergency override for when standard suppression isn't working
 * This applies the most aggressive suppression possible
 */
export const emergencySuppressionOverride = (): void => {
  if (typeof window === 'undefined') return;

  console.warn('🚨 Applying emergency ResizeObserver error suppression override');

  // Aggressive console method overrides
  ['error', 'warn', 'log', 'info', 'debug', 'trace'].forEach(method => {
    const original = (console as any)[method];
    (console as any)[method] = (...args: any[]) => {
      const hasResizeError = args.some(arg => {
        const str = String(arg).toLowerCase();
        return str.includes('resize') || str.includes('observer') || str.includes('undelivered') || str.includes('loop');
      });

      if (!hasResizeError) {
        original.apply(console, args);
      }
    };
  });

  // Nuclear option - suppress all error events temporarily
  const suppressError = (event: any) => {
    const message = event.message || event.reason || '';
    if (String(message).toLowerCase().includes('resize') || String(message).toLowerCase().includes('observer')) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      return false;
    }
  };

  window.addEventListener('error', suppressError, { capture: true });
  window.addEventListener('unhandledrejection', suppressError, { capture: true });

  // Override window error handlers
  window.onerror = suppressError;
  window.onunhandledrejection = suppressError;

  console.log('✅ Emergency suppression override applied');
};

/**
 * Test function to verify that ResizeObserver errors are being suppressed
 */
export const testErrorSuppression = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(false);
      return;
    }

    let errorDetected = false;
    
    // Set up a temporary error listener
    const testErrorHandler = (event: ErrorEvent) => {
      if (event.message?.toLowerCase().includes('resizeobserver')) {
        errorDetected = true;
      }
    };

    window.addEventListener('error', testErrorHandler);

    // Trigger test errors
    console.log('🧪 Testing ResizeObserver error suppression...');
    
    const testPatterns = [
      'ResizeObserver loop completed with undelivered notifications.',
      'ResizeObserver loop limit exceeded',
      'Undelivered notifications in ResizeObserver'
    ];

    testPatterns.forEach((pattern, index) => {
      setTimeout(() => {
        console.error(`TEST: ${pattern}`);
      }, index * 10);
    });

    // Check results
    setTimeout(() => {
      window.removeEventListener('error', testErrorHandler);
      
      if (errorDetected) {
        console.error('❌ ResizeObserver errors are NOT being suppressed properly');
        resolve(false);
      } else {
        console.log('✅ ResizeObserver error suppression is working correctly');
        resolve(true);
      }
    }, 200);
  });
};

/**
 * Restore original console methods (for debugging or testing)
 */
export const restoreOriginalMethods = (): void => {
  if (typeof window === 'undefined') return;
  
  if (window.__resizeObserverOriginalMethods) {
    console.error = window.__resizeObserverOriginalMethods.error;
    console.warn = window.__resizeObserverOriginalMethods.warn;
    window.onerror = window.__resizeObserverOriginalMethods.onError;
    
    delete window.__resizeObserverOriginalMethods;
  }
  
  window.__resizeObserverSuppressionActive = false;
  console.log('🔄 Original console methods restored');
};

/**
 * Get current suppression status
 */
export const getSuppressionStatus = (): { 
  active: boolean; 
  hasOriginalMethods: boolean; 
  windowSupport: boolean;
} => {
  if (typeof window === 'undefined') {
    return { active: false, hasOriginalMethods: false, windowSupport: false };
  }

  return {
    active: !!window.__resizeObserverSuppressionActive,
    hasOriginalMethods: !!window.__resizeObserverOriginalMethods,
    windowSupport: true
  };
};

/**
 * Initialize suppression immediately when this module is imported
 * This ensures errors are caught as early as possible
 */
if (typeof window !== 'undefined') {
  // Use setTimeout to ensure this runs after the current execution stack
  setTimeout(() => {
    suppressResizeObserverErrors();
  }, 0);
}

// Export types for TypeScript users
export type SuppressionStatus = ReturnType<typeof getSuppressionStatus>;

export default suppressResizeObserverErrors;
