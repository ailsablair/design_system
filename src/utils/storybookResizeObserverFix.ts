/**
 * ResizeObserver Error Suppression for Storybook
 * 
 * This utility suppresses the harmless "ResizeObserver loop completed with undelivered notifications"
 * error that commonly occurs in Storybook environments. This error is typically caused by rapid
 * resize events and doesn't affect functionality.
 */

// Import the main handler
import { setupResizeObserverErrorHandler } from './resizeObserverHandler';

/**
 * Setup ResizeObserver error suppression for Storybook
 * Call this in your Storybook preview.js/ts file
 */
export const setupStorybookResizeObserverFix = (): void => {
  // Early setup to catch errors during Storybook initialization
  if (typeof window !== 'undefined') {
    // Immediate console.error override for early errors
    const originalError = window.console.error;
    window.console.error = (...args: any[]) => {
      const errorMessage = args.join(' ').toLowerCase();
      
      // Check for ResizeObserver related errors
      if (
        errorMessage.includes('resizeobserver') ||
        errorMessage.includes('undelivered notifications') ||
        errorMessage.includes('loop completed')
      ) {
        // Suppress ResizeObserver errors silently
        return;
      }
      
      // Log other errors normally
      originalError.apply(window.console, args);
    };
    
    // Set up the comprehensive error handler
    setupResizeObserverErrorHandler();
    
    // Additional Storybook-specific error suppression
    window.addEventListener('error', (event) => {
      if (event.message && event.message.toLowerCase().includes('resizeobserver')) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }, { capture: true });
    
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      const reason = event.reason;
      if (reason && typeof reason === 'string' && reason.toLowerCase().includes('resizeobserver')) {
        event.preventDefault();
      }
    }, { capture: true });
    
    // Log setup completion
    console.debug('🔧 Storybook ResizeObserver error suppression initialized');
  }
};

/**
 * Alternative manual setup that can be called directly in components
 * if the preview.js setup doesn't catch all errors
 */
export const suppressResizeObserverErrors = (): void => {
  if (typeof window !== 'undefined') {
    const originalConsoleError = window.console.error;
    
    window.console.error = (...args: any[]) => {
      // Check if any argument contains ResizeObserver error patterns
      const hasResizeObserverError = args.some(arg => {
        const str = String(arg).toLowerCase();
        return (
          str.includes('resizeobserver') ||
          str.includes('undelivered notifications') ||
          str.includes('loop completed') ||
          str.includes('loop limit exceeded')
        );
      });
      
      if (!hasResizeObserverError) {
        originalConsoleError.apply(window.console, args);
      }
    };
  }
};

// Auto-setup if not already done
if (typeof window !== 'undefined' && !window.__resizeObserverSetupComplete) {
  setupStorybookResizeObserverFix();
}

export default setupStorybookResizeObserverFix;
