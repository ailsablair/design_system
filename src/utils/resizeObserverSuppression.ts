/**
 * Targeted ResizeObserver error suppression
 * 
 * This suppresses only ResizeObserver-related console errors without
 * interfering with Storybook's internal logging systems.
 */

// Store original console methods
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

/**
 * Check if a message is ResizeObserver related
 */
function isResizeObserverError(args: any[]): boolean {
  const message = args.join(' ').toLowerCase();
  return (
    message.includes('resizeobserver') ||
    message.includes('undelivered notifications') ||
    message.includes('loop completed') ||
    message.includes('resize loop') ||
    message.includes('observer loop')
  );
}

/**
 * Suppress ResizeObserver errors in console.error
 */
console.error = function(...args: any[]) {
  // Only suppress ResizeObserver errors, let everything else through
  if (!isResizeObserverError(args)) {
    originalConsoleError.apply(console, args);
  }
};

/**
 * Suppress ResizeObserver warnings in console.warn
 */
console.warn = function(...args: any[]) {
  // Only suppress ResizeObserver warnings, let everything else through
  if (!isResizeObserverError(args)) {
    originalConsoleWarn.apply(console, args);
  }
};

/**
 * Safe ResizeObserver wrapper that prevents error loops
 */
if (typeof window !== 'undefined' && window.ResizeObserver) {
  const OriginalResizeObserver = window.ResizeObserver;
  
  window.ResizeObserver = class SafeResizeObserver extends OriginalResizeObserver {
    constructor(callback: ResizeObserverCallback) {
      const safeCallback: ResizeObserverCallback = (entries, observer) => {
        try {
          // Use requestAnimationFrame to prevent synchronous loops
          requestAnimationFrame(() => {
            try {
              callback(entries, observer);
            } catch (error) {
              // Silently handle ResizeObserver callback errors
              if (!error?.message?.toLowerCase().includes('resizeobserver')) {
                throw error; // Re-throw non-ResizeObserver errors
              }
            }
          });
        } catch (error) {
          // Silently handle ResizeObserver errors
          if (!error?.message?.toLowerCase().includes('resizeobserver')) {
            throw error; // Re-throw non-ResizeObserver errors
          }
        }
      };
      
      super(safeCallback);
    }
  };
}

/**
 * Global error handler for unhandled ResizeObserver errors
 */
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    const message = event.message?.toLowerCase() || '';
    if (
      message.includes('resizeobserver') ||
      message.includes('undelivered notifications') ||
      message.includes('loop completed')
    ) {
      event.preventDefault();
      return false;
    }
  });
  
  window.addEventListener('unhandledrejection', (event) => {
    const reason = String(event.reason).toLowerCase();
    if (
      reason.includes('resizeobserver') ||
      reason.includes('undelivered notifications')
    ) {
      event.preventDefault();
    }
  });
}

export {};
