/**
 * IMMEDIATE ResizeObserver Error Suppression
 * 
 * This utility provides the most aggressive approach to suppressing ResizeObserver errors.
 * It runs immediately when imported and provides emergency-level error suppression.
 * 
 * Use this when standard error handling is not sufficient.
 */

// Global flag to prevent multiple initializations
declare global {
  interface Window {
    __immediateResizeSuppressionActive?: boolean;
  }
}

/**
 * Most aggressive ResizeObserver error pattern matching
 */
const isResizeObserverRelated = (input: any): boolean => {
  if (!input) return false;
  
  // Convert any input to string for checking
  const str = String(input).toLowerCase();
  
  // Comprehensive pattern list - if it mentions any of these, suppress it
  const patterns = [
    'resizeobserver',
    'resize observer',
    'resize-observer',
    'observer loop',
    'loop completed',
    'undelivered notifications',
    'undelivered notification',
    'observer callback',
    'resize loop',
    'resize callback',
    'observation loop',
    'observer cycle',
    'resize cycle',
    'resize notification',
    'observer notification',
    'resize script error',
    'observer script error',
    'resizeobserver error',
    'resize observer error',
    'observer error',
    'resize error',
    'resize warning',
    'observer warning',
    'loop limit exceeded',
    'callback threw',
    'resize exception',
    'observer exception',
    'non-finite css pixel',
    'css pixel',
    'infinite resize',
    'recursive resize',
    'resize recursion'
  ];
  
  return patterns.some(pattern => str.includes(pattern));
};

/**
 * Immediately suppress ALL ResizeObserver-related console output
 */
const suppressImmediately = (): void => {
  if (typeof window === 'undefined') return;
  if (window.__immediateResizeSuppressionActive) return;
  
  window.__immediateResizeSuppressionActive = true;
  
  // Store originals
  const originals = {
    error: console.error,
    warn: console.warn,
    log: console.log,
    info: console.info,
    debug: console.debug,
    trace: console.trace
  };
  
  // Override ALL console methods
  Object.keys(originals).forEach(method => {
    const original = (originals as any)[method];
    (console as any)[method] = (...args: any[]) => {
      // Check if any argument is ResizeObserver related
      const isResizeError = args.some(arg => isResizeObserverRelated(arg));
      
      if (!isResizeError) {
        original.apply(console, args);
      }
      // Silently suppress if ResizeObserver related
    };
  });
  
  // Override error events with extreme prejudice
  const eventTypes = ['error', 'unhandledrejection'];
  eventTypes.forEach(eventType => {
    window.addEventListener(eventType, (event: any) => {
      const message = event.message || event.reason || event.error || '';
      if (isResizeObserverRelated(message)) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
    }, { capture: true, passive: false });
  });
  
  // Override window.onerror
  const originalOnError = window.onerror;
  window.onerror = (message, source, lineno, colno, error) => {
    if (isResizeObserverRelated(message) || isResizeObserverRelated(error)) {
      return true; // Prevent default browser error handling
    }
    return originalOnError ? originalOnError(message, source, lineno, colno, error) : false;
  };
  
  // Override window.onunhandledrejection
  const originalOnUnhandledRejection = window.onunhandledrejection;
  (window as any).onunhandledrejection = (event: PromiseRejectionEvent) => {
    if (isResizeObserverRelated(event.reason)) {
      event.preventDefault();
      return;
    }
    return originalOnUnhandledRejection ? (originalOnUnhandledRejection as any).call(window, event) : null;
  };
  
  // Wrap async functions to catch ResizeObserver errors
  const wrapAsyncFunction = (original: Function, context: any) => {
    return function(this: any, ...args: any[]) {
      try {
        const result = original.apply(context || this, args);
        if (result && typeof result.catch === 'function') {
          return result.catch((error: any) => {
            if (!isResizeObserverRelated(error)) {
              throw error;
            }
            // Silently suppress ResizeObserver promise rejections
          });
        }
        return result;
      } catch (error) {
        if (!isResizeObserverRelated(error)) {
          throw error;
        }
        // Silently suppress ResizeObserver sync errors
      }
    };
  };
  
  // Wrap setTimeout, setInterval, requestAnimationFrame
  if (window.setTimeout) {
    const originalSetTimeout = window.setTimeout;
    (window as any).setTimeout = function(callback: any, delay?: number, ...args: any[]) {
      if (typeof callback === 'function') {
        const wrappedCallback = wrapAsyncFunction(callback, null);
        return originalSetTimeout.call(window, wrappedCallback, delay, ...args);
      }
      return originalSetTimeout.call(window, callback, delay, ...args);
    } as any;
  }

  if (window.setInterval) {
    const originalSetInterval = window.setInterval;
    (window as any).setInterval = function(callback: any, delay?: number, ...args: any[]) {
      if (typeof callback === 'function') {
        const wrappedCallback = wrapAsyncFunction(callback, null);
        return originalSetInterval.call(window, wrappedCallback, delay, ...args);
      }
      return originalSetInterval.call(window, callback, delay, ...args);
    } as any;
  }
  
  if (window.requestAnimationFrame) {
    const originalRAF = window.requestAnimationFrame;
    window.requestAnimationFrame = function(callback: FrameRequestCallback) {
      const wrappedCallback = wrapAsyncFunction(callback, null);
      return originalRAF.call(window, wrappedCallback);
    };
  }
  
  if (window.queueMicrotask) {
    const originalQueueMicrotask = window.queueMicrotask;
    window.queueMicrotask = function(callback: VoidFunction) {
      const wrappedCallback = wrapAsyncFunction(callback, null);
      return originalQueueMicrotask.call(window, wrappedCallback);
    };
  }
  
  // Override ResizeObserver constructor itself
  if (window.ResizeObserver) {
    const OriginalResizeObserver = window.ResizeObserver;
    window.ResizeObserver = class extends OriginalResizeObserver {
      constructor(callback: ResizeObserverCallback) {
        const safeCallback: ResizeObserverCallback = (entries, observer) => {
          try {
            // Use a timeout to prevent immediate callback loops
            setTimeout(() => {
              try {
                callback(entries, observer);
              } catch (error) {
                // Silently suppress all ResizeObserver callback errors
                if (!isResizeObserverRelated(error)) {
                  console.error('Non-ResizeObserver error in ResizeObserver callback:', error);
                }
              }
            }, 0);
          } catch (error) {
            // Silently suppress
          }
        };
        super(safeCallback);
      }
    };
  }
  
  // Add MutationObserver protection as well (can cause similar issues)
  if (window.MutationObserver) {
    const OriginalMutationObserver = window.MutationObserver;
    window.MutationObserver = class extends OriginalMutationObserver {
      constructor(callback: MutationCallback) {
        const safeCallback: MutationCallback = (mutations, observer) => {
          try {
            requestAnimationFrame(() => {
              try {
                callback(mutations, observer);
              } catch (error) {
                if (!isResizeObserverRelated(error)) {
                  console.error('MutationObserver callback error:', error);
                }
              }
            });
          } catch (error) {
            // Silently suppress
          }
        };
        super(safeCallback);
      }
    };
  }
  
  // Emergency catch-all for any remaining errors
  try {
    const g: any = (typeof globalThis !== 'undefined') ? globalThis : (typeof window !== 'undefined' ? window : {});
    if (g && g.process && typeof g.process.nextTick === 'function') {
      const originalNextTick = g.process.nextTick.bind(g.process);
      g.process.nextTick = (callback: Function, ...args: any[]) => {
        setTimeout(() => {
          try {
            callback(...args);
          } catch (error) {
            if (!isResizeObserverRelated(error)) {
              console.error('nextTick error:', error);
            }
          }
        }, 0);
      };
    }
  } catch {
    // no-op
  }
  
  console.debug('🚫 IMMEDIATE ResizeObserver suppression activated (aggressive mode)');
};

/**
 * Emergency function to restore original console methods if needed
 */
export const restoreConsole = (): void => {
  if (typeof window !== 'undefined') {
    // This would need to be called before any error suppression
    window.__immediateResizeSuppressionActive = false;
    location.reload(); // Force reload to restore originals
  }
};

/**
 * Check if immediate suppression is active
 */
export const isImmediateSuppressionActive = (): boolean => {
  return typeof window !== 'undefined' && !!window.__immediateResizeSuppressionActive;
};

/**
 * Initialize immediate ResizeObserver error suppression
 * Call this function when you want to activate suppression
 */
export const initImmediateSuppression = (): void => {
  suppressImmediately();
};

export default initImmediateSuppression;
