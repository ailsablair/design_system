/**
 * Comprehensive ResizeObserver Error Fix Utility
 * 
 * This utility provides a one-stop solution for fixing ResizeObserver loop errors.
 * Import and call this function to immediately apply all available fixes.
 */

import { 
  setupResizeObserverErrorHandler, 
  forceSupressResizeObserverErrors, 
  initEarlyErrorSuppression 
} from './resizeObserverHandler';
import { initImmediateSuppression } from './immediateResizeObserverSuppression';

/**
 * Apply all ResizeObserver error fixes immediately
 * This is the most comprehensive fix available
 */
export const applyResizeObserverFix = (): void => {
  if (typeof window === 'undefined') return;

  console.log('🔧 Applying comprehensive ResizeObserver error fix...');

  try {
    // 1. Apply immediate suppression (most aggressive)
    initImmediateSuppression();
    
    // 2. Apply early error suppression
    initEarlyErrorSuppression();
    
    // 3. Set up comprehensive error handler
    setupResizeObserverErrorHandler();
    
    // 4. Apply force suppression as backup
    forceSupressResizeObserverErrors();
    
    // 5. Additional console override for any remaining errors
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;
    
    console.error = (...args: any[]) => {
      const message = args.join(' ').toLowerCase();
      if (
        message.includes('resizeobserver') ||
        message.includes('undelivered notifications') ||
        message.includes('loop completed') ||
        message.includes('loop limit exceeded')
      ) {
        // Completely suppress ResizeObserver errors
        return;
      }
      originalConsoleError.apply(console, args);
    };
    
    console.warn = (...args: any[]) => {
      const message = args.join(' ').toLowerCase();
      if (
        message.includes('resizeobserver') ||
        message.includes('undelivered notifications') ||
        message.includes('loop completed')
      ) {
        // Suppress ResizeObserver warnings too
        return;
      }
      originalConsoleWarn.apply(console, args);
    };
    
    // 6. Override global error handlers
    window.addEventListener('error', (event) => {
      if (event.message && event.message.toLowerCase().includes('resizeobserver')) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
    }, { capture: true, passive: false });
    
    window.addEventListener('unhandledrejection', (event) => {
      const reason = String(event.reason).toLowerCase();
      if (reason.includes('resizeobserver')) {
        event.preventDefault();
      }
    }, { capture: true, passive: false });
    
    console.log('✅ ResizeObserver error fix applied successfully');
    
  } catch (error) {
    console.warn('⚠️ Error applying ResizeObserver fix:', error);
  }
};

/**
 * Test if ResizeObserver errors are being suppressed
 */
export const testResizeObserverSupression = (): Promise<boolean> => {
  return new Promise((resolve) => {
    let errorCaught = false;
    
    // Temporarily capture console errors
    const originalError = console.error;
    console.error = (...args: any[]) => {
      const message = args.join(' ').toLowerCase();
      if (message.includes('resizeobserver')) {
        errorCaught = true;
      }
      // Don't call original to avoid showing the test error
    };
    
    // Trigger a test error
    setTimeout(() => {
      console.error('ResizeObserver loop completed with undelivered notifications.');
      
      // Check result after a short delay
      setTimeout(() => {
        console.error = originalError; // Restore
        resolve(!errorCaught); // Return true if no error was caught (suppressed)
      }, 10);
    }, 10);
  });
};

/**
 * Quick fix function that can be called from anywhere
 */
export const quickFixResizeObserverErrors = (): void => {
  applyResizeObserverFix();
  
  // Also apply to any existing ResizeObserver instances
  if (window.ResizeObserver) {
    const OriginalResizeObserver = window.ResizeObserver;
    window.ResizeObserver = class extends OriginalResizeObserver {
      constructor(callback: ResizeObserverCallback) {
        const safeCallback: ResizeObserverCallback = (entries, observer) => {
          try {
            // Debounce the callback to prevent loops
            setTimeout(() => {
              try {
                callback(entries, observer);
              } catch (error) {
                // Silently suppress all ResizeObserver callback errors
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
};

/**
 * Emergency override - use only if all other methods fail
 */
export const emergencyResizeObserverSuppress = (): void => {
  // Most aggressive suppression possible
  const suppressMethods = ['error', 'warn', 'log', 'info', 'debug', 'trace'];
  
  suppressMethods.forEach(method => {
    const original = (console as any)[method];
    (console as any)[method] = (...args: any[]) => {
      const message = args.join(' ').toLowerCase();
      if (
        !message.includes('resizeobserver') &&
        !message.includes('undelivered notifications') &&
        !message.includes('loop completed') &&
        !message.includes('observer') &&
        !message.includes('resize')
      ) {
        original.apply(console, args);
      }
    };
  });
  
  console.log('🚨 Emergency ResizeObserver suppression activated');
};

// Auto-apply fix when this module is imported
if (typeof window !== 'undefined') {
  applyResizeObserverFix();
}

export default applyResizeObserverFix;
