/**
 * IMMEDIATE ResizeObserver Error Fix
 * 
 * This provides the most immediate and effective suppression of ResizeObserver errors.
 * Apply this as early as possible in your application.
 */

// Global flag to prevent duplicate initialization
declare global {
  interface Window {
    __immediateResizeObserverFixed?: boolean;
  }
}

/**
 * Immediately suppress all ResizeObserver errors with maximum effectiveness
 */
export const immediateResizeObserverFix = (): void => {
  // Prevent duplicate initialization
  if (typeof window !== 'undefined' && window.__immediateResizeObserverFixed) {
    return;
  }

  // Browser environment
  if (typeof window !== 'undefined') {
    window.__immediateResizeObserverFixed = true;
    
    // Store original console methods
    const originalError = console.error;
    const originalWarn = console.warn;
    
    // Aggressive console.error override
    console.error = (...args: any[]) => {
      const message = args.join(' ').toLowerCase();
      
      // Comprehensive ResizeObserver pattern matching
      if (message.includes('resizeobserver') ||
          message.includes('resize observer') ||
          message.includes('undelivered notifications') ||
          message.includes('loop completed') ||
          message.includes('loop limit exceeded') ||
          message.includes('observer loop') ||
          message.includes('resize loop')) {
        return; // Completely suppress
      }
      
      // Allow other errors through
      originalError.apply(console, args);
    };
    
    // Override console.warn as well
    console.warn = (...args: any[]) => {
      const message = args.join(' ').toLowerCase();
      
      if (message.includes('resizeobserver') ||
          message.includes('resize observer') ||
          message.includes('undelivered notifications')) {
        return; // Completely suppress
      }
      
      originalWarn.apply(console, args);
    };
    
    // Override window.onerror
    window.onerror = (message, source, lineno, colno, error) => {
      const msg = String(message).toLowerCase();
      if (msg.includes('resizeobserver') ||
          msg.includes('undelivered notifications') ||
          msg.includes('observer loop')) {
        return true; // Suppress error
      }
      return false; // Allow other errors
    };
    
    // Override unhandled rejection
    window.onunhandledrejection = (event) => {
      const reason = String(event.reason).toLowerCase();
      if (reason.includes('resizeobserver') ||
          reason.includes('undelivered notifications')) {
        event.preventDefault();
        return;
      }
    };
    
    // Event listeners for error events
    window.addEventListener('error', (event) => {
      if (event.message && event.message.toLowerCase().includes('resizeobserver')) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
    }, { capture: true });
    
    window.addEventListener('unhandledrejection', (event) => {
      if (String(event.reason).toLowerCase().includes('resizeobserver')) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
    }, { capture: true });
    
    // Wrap ResizeObserver constructor to prevent loops
    if (window.ResizeObserver) {
      const OriginalResizeObserver = window.ResizeObserver;
      
      window.ResizeObserver = class SafeResizeObserver extends OriginalResizeObserver {
        constructor(callback: ResizeObserverCallback) {
          const safeCallback: ResizeObserverCallback = (entries, observer) => {
            // Debounce with RAF to prevent loops
            requestAnimationFrame(() => {
              try {
                callback(entries, observer);
              } catch (error) {
                // Silently catch all ResizeObserver callback errors
                const errorMsg = String(error).toLowerCase();
                if (!errorMsg.includes('resizeobserver')) {
                  console.error('Non-ResizeObserver error in callback:', error);
                }
              }
            });
          };
          super(safeCallback);
        }
      };
    }
    
    console.log('✅ Immediate ResizeObserver error fix applied');
  }
  
  // Node.js environment (for SSR/Storybook)
  if (typeof global !== 'undefined' && global.process) {
    global.process.setMaxListeners(30); // Prevent MaxListeners warnings
    
    // Only add if not already added
    const existingListeners = global.process.listeners('uncaughtException');
    const hasResizeObserverHandler = existingListeners.some(listener => 
      listener.toString().includes('resizeobserver') || listener.toString().includes('undelivered')
    );
    
    if (!hasResizeObserverHandler) {
      global.process.on('uncaughtException', (error) => {
        const message = error.message?.toLowerCase() || '';
        if (message.includes('resizeobserver') || 
            message.includes('undelivered notifications')) {
          // Silently ignore ResizeObserver errors
          return;
        }
        // Let other errors through
        throw error;
      });
    }
    
    const existingRejectionListeners = global.process.listeners('unhandledRejection');
    const hasResizeObserverRejectionHandler = existingRejectionListeners.some(listener => 
      listener.toString().includes('resizeobserver') || listener.toString().includes('undelivered')
    );
    
    if (!hasResizeObserverRejectionHandler) {
      global.process.on('unhandledRejection', (reason) => {
        const message = String(reason).toLowerCase();
        if (message.includes('resizeobserver') || 
            message.includes('undelivered notifications')) {
          // Silently ignore ResizeObserver rejections
          return;
        }
        // Let other rejections through
        throw reason;
      });
    }
  }
};

/**
 * Test that ResizeObserver errors are being suppressed
 */
export const testResizeObserverSuppression = (): void => {
  console.log('🧪 Testing ResizeObserver error suppression...');
  
  // These should be suppressed
  console.error('TEST: ResizeObserver loop completed with undelivered notifications.');
  console.error('TEST: ResizeObserver loop limit exceeded');
  console.warn('TEST: ResizeObserver undelivered notifications');
  
  // This should appear
  console.log('✅ TEST: This normal message should appear');
  
  console.log('🔍 Check above - only the normal message should be visible');
};

/**
 * Emergency function available globally
 */
if (typeof window !== 'undefined') {
  (window as any).__IMMEDIATE_RESIZE_OBSERVER_FIX = immediateResizeObserverFix;
  (window as any).__TEST_RESIZE_OBSERVER_SUPPRESSION = testResizeObserverSuppression;
}

// Auto-apply the fix when this module is imported
immediateResizeObserverFix();

export default immediateResizeObserverFix;
