/**
 * Emergency ResizeObserver Error Suppression
 * 
 * This utility provides the most aggressive and immediate approach to suppressing
 * ResizeObserver errors. Use this when all other methods have failed.
 * 
 * This can be called from browser console: emergencySuppress()
 */

/**
 * Most aggressive ResizeObserver error suppression
 * This will completely silence all ResizeObserver-related output
 */
export function emergencySuppress(): void {
  console.log('🚨 Activating emergency ResizeObserver error suppression...');

  // Override ALL console methods
  const consoleMethods = ['error', 'warn', 'log', 'info', 'debug', 'trace'];
  const originals: { [key: string]: Function } = {};

  consoleMethods.forEach(method => {
    const original = (console as any)[method];
    originals[method] = original;
    
    (console as any)[method] = function(...args: any[]) {
      const message = args.join(' ').toLowerCase();
      
      // Check for any ResizeObserver-related content
      const resizeObserverTerms = [
        'resizeobserver',
        'resize observer',
        'resize-observer',
        'undelivered notifications',
        'loop completed',
        'loop limit exceeded',
        'observer loop',
        'resize loop',
        'observer callback',
        'resize callback',
        'observation loop',
        'observer cycle',
        'resize cycle',
        'resize notification',
        'observer notification',
        'resize script error',
        'observer script error'
      ];

      const hasResizeObserverContent = resizeObserverTerms.some(term => 
        message.includes(term)
      );

      if (!hasResizeObserverContent) {
        original.apply(console, args);
      }
      // Otherwise, silently suppress
    };
  });

  // Override global error handlers
  if (typeof window !== 'undefined') {
    // Window error handler
    window.onerror = function(message, source, lineno, colno, error) {
      const msg = String(message).toLowerCase();
      if (msg.includes('resizeobserver') || msg.includes('undelivered notifications')) {
        return true; // Prevent default handling
      }
      return false;
    };

    // Unhandled rejection handler
    window.onunhandledrejection = function(event) {
      const reason = String(event.reason).toLowerCase();
      if (reason.includes('resizeobserver') || reason.includes('undelivered notifications')) {
        event.preventDefault();
        return;
      }
    };

    // Event listeners with extreme capture
    ['error', 'unhandledrejection'].forEach(eventType => {
      window.addEventListener(eventType, function(event: any) {
        const message = event.message || event.reason || '';
        if (String(message).toLowerCase().includes('resizeobserver')) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
        }
      }, { capture: true, passive: false });
    });

    // Override ResizeObserver constructor to prevent loops
    if (window.ResizeObserver) {
      const OriginalResizeObserver = window.ResizeObserver;
      window.ResizeObserver = class extends OriginalResizeObserver {
        constructor(callback: ResizeObserverCallback) {
          const safeCallback: ResizeObserverCallback = (entries, observer) => {
            try {
              // Debounce the callback to prevent rapid firing
              setTimeout(() => {
                try {
                  callback(entries, observer);
                } catch (error) {
                  // Silently catch all ResizeObserver callback errors
                }
              }, 10); // Small delay to prevent loops
            } catch (error) {
              // Silently catch all errors
            }
          };
          super(safeCallback);
        }
      };
    }

    // Also wrap requestAnimationFrame to catch resize-related errors
    if (window.requestAnimationFrame) {
      const originalRAF = window.requestAnimationFrame;
      window.requestAnimationFrame = function(callback: FrameRequestCallback) {
        return originalRAF.call(window, function(time: number) {
          try {
            callback(time);
          } catch (error) {
            const errorStr = String(error).toLowerCase();
            if (!errorStr.includes('resizeobserver')) {
              throw error; // Re-throw non-ResizeObserver errors
            }
            // Silently suppress ResizeObserver errors
          }
        });
      };
    }
  }

  // Global error handling for Node.js environments
  if (typeof global !== 'undefined' && global.process && global.process.on) {
    global.process.on('uncaughtException', (error) => {
      const errorStr = String(error).toLowerCase();
      if (!errorStr.includes('resizeobserver')) {
        throw error; // Re-throw non-ResizeObserver errors
      }
      // Silently suppress ResizeObserver errors
    });

    global.process.on('unhandledRejection', (reason) => {
      const reasonStr = String(reason).toLowerCase();
      if (!reasonStr.includes('resizeobserver')) {
        throw reason; // Re-throw non-ResizeObserver rejections
      }
      // Silently suppress ResizeObserver rejections
    });
  }

  console.log('✅ Emergency ResizeObserver error suppression activated');
  
  // Store reference for restoration if needed
  (window as any).__emergencySuppressionOriginals = originals;
}

/**
 * Restore original console methods (use if emergency suppression is too aggressive)
 */
export function restoreConsole(): void {
  const originals = (window as any).__emergencySuppressionOriginals;
  if (originals) {
    Object.keys(originals).forEach(method => {
      (console as any)[method] = originals[method];
    });
    delete (window as any).__emergencySuppressionOriginals;
    console.log('🔄 Console methods restored');
  }
}

/**
 * Test if ResizeObserver errors are being suppressed
 */
export function testSuppression(): void {
  console.log('🧪 Testing ResizeObserver error suppression...');
  
  // Try to trigger various ResizeObserver errors
  console.error('TEST: ResizeObserver loop completed with undelivered notifications.');
  console.warn('TEST: ResizeObserver loop limit exceeded');
  console.log('TEST: This should appear - non-ResizeObserver message');
  
  // Try to trigger a fake error event
  if (typeof window !== 'undefined') {
    const errorEvent = new ErrorEvent('error', {
      message: 'ResizeObserver loop completed with undelivered notifications.',
      filename: 'test',
      lineno: 1,
      colno: 1
    });
    window.dispatchEvent(errorEvent);
  }
  
  console.log('✅ Test completed. Check above - only non-ResizeObserver messages should appear.');
}

/**
 * Auto-apply emergency suppression when this module is imported
 * Comment out this line if you want manual control
 */
// emergencySuppress();

// Make functions globally available for browser console use
if (typeof window !== 'undefined') {
  (window as any).emergencySuppress = emergencySuppress;
  (window as any).restoreConsole = restoreConsole;
  (window as any).testSuppression = testSuppression;
}

export default emergencySuppress;
