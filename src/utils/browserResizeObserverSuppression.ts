/**
 * Browser-only ResizeObserver error suppression
 * This file suppresses ResizeObserver errors without interfering with Storybook's startup
 */

// Only run in browser environment after DOM is ready
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  
  // Store original console methods
  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;

  /**
   * Check if error message is ResizeObserver related
   */
  function isResizeObserverError(message: string): boolean {
    const msg = message.toLowerCase();
    return (
      msg.includes('resizeobserver loop completed with undelivered notifications') ||
      msg.includes('resizeobserver loop limit exceeded') ||
      (msg.includes('resizeobserver') && msg.includes('undelivered'))
    );
  }

  /**
   * Enhanced console.error that suppresses ResizeObserver errors
   */
  console.error = function(...args: any[]) {
    const message = args.join(' ');
    if (!isResizeObserverError(message)) {
      originalConsoleError.apply(console, args);
    }
    // ResizeObserver errors are silently suppressed
  };

  /**
   * Enhanced console.warn that suppresses ResizeObserver warnings
   */
  console.warn = function(...args: any[]) {
    const message = args.join(' ');
    if (!isResizeObserverError(message)) {
      originalConsoleWarn.apply(console, args);
    }
    // ResizeObserver warnings are silently suppressed
  };

  /**
   * Global error handler for ResizeObserver errors
   */
  window.addEventListener('error', (event) => {
    if (event.message && isResizeObserverError(event.message)) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }, true);

  /**
   * Handle unhandled promise rejections
   */
  window.addEventListener('unhandledrejection', (event) => {
    const reason = String(event.reason || '');
    if (isResizeObserverError(reason)) {
      event.preventDefault();
    }
  });

  /**
   * Wrap ResizeObserver constructor to prevent loops
   */
  if (window.ResizeObserver) {
    const OriginalResizeObserver = window.ResizeObserver;
    
    window.ResizeObserver = class SafeResizeObserver extends OriginalResizeObserver {
      constructor(callback: ResizeObserverCallback) {
        const safeCallback: ResizeObserverCallback = (entries, observer) => {
          try {
            // Use requestAnimationFrame to break synchronous loops
            window.requestAnimationFrame(() => {
              try {
                callback(entries, observer);
              } catch (error) {
                // Only suppress ResizeObserver errors, re-throw others
                if (!isResizeObserverError(String(error))) {
                  throw error;
                }
              }
            });
          } catch (error) {
            // Only suppress ResizeObserver errors, re-throw others
            if (!isResizeObserverError(String(error))) {
              throw error;
            }
          }
        };
        
        super(safeCallback);
      }
    };
  }
}

export {};
