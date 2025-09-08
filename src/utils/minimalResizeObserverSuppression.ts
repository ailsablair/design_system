/**
 * Minimal ResizeObserver error suppression
 * Uses global error handlers to catch and suppress ResizeObserver errors
 */

// Only run in browser environment
if (typeof window !== 'undefined') {
  // Suppress ResizeObserver errors in global error handler
  window.addEventListener('error', (event) => {
    const message = event.message?.toLowerCase() || '';
    if (
      message.includes('resizeobserver loop completed with undelivered notifications') ||
      message.includes('resizeobserver') && message.includes('undelivered')
    ) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }, true);

  // Suppress in unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const reason = String(event.reason || '').toLowerCase();
    if (reason.includes('resizeobserver') && reason.includes('undelivered')) {
      event.preventDefault();
    }
  });
}

export {};
