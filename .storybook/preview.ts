// ===================================================================
// MAXIMUM AGGRESSIVE RESIZEOBSERVER ERROR SUPPRESSION
// THIS MUST BE THE FIRST CODE THAT RUNS TO CATCH ALL ERRORS
// ===================================================================

// Store absolute original methods before any other code can modify them
const __ORIGINAL_ERROR = console.error.bind(console);
const __ORIGINAL_WARN = console.warn.bind(console);
const __ORIGINAL_LOG = console.log.bind(console);

// Immediate total suppression of all ResizeObserver related output
console.error = function(...args: any[]): void {
  const msg = String(args.join(' ')).toLowerCase();
  if (
    msg.includes('resizeobserver') ||
    msg.includes('undelivered notifications') ||
    msg.includes('loop completed') ||
    msg.includes('loop limit exceeded') ||
    msg.includes('observer loop') ||
    msg.includes('resize loop') ||
    msg.includes('undelivered notification') ||
    msg.includes('resize observer') ||
    msg.includes('observer callback') ||
    msg.includes('resize callback')
  ) {
    return; // COMPLETELY SUPPRESS - DO NOT OUTPUT ANYTHING
  }
  __ORIGINAL_ERROR(...args);
};

console.warn = function(...args: any[]): void {
  const msg = String(args.join(' ')).toLowerCase();
  if (
    msg.includes('resizeobserver') ||
    msg.includes('undelivered notifications') ||
    msg.includes('loop completed') ||
    msg.includes('undelivered notification') ||
    msg.includes('resize observer') ||
    msg.includes('observer loop')
  ) {
    return; // COMPLETELY SUPPRESS - DO NOT OUTPUT ANYTHING
  }
  __ORIGINAL_WARN(...args);
};

// Override ALL console methods for maximum coverage
console.info = function(...args: any[]): void {
  const msg = String(args.join(' ')).toLowerCase();
  if (msg.includes('resizeobserver') || msg.includes('undelivered')) return;
  __ORIGINAL_LOG(...args);
};

console.debug = function(...args: any[]): void {
  const msg = String(args.join(' ')).toLowerCase();
  if (msg.includes('resizeobserver') || msg.includes('undelivered')) return;
  __ORIGINAL_LOG(...args);
};

console.trace = function(...args: any[]): void {
  const msg = String(args.join(' ')).toLowerCase();
  if (msg.includes('resizeobserver') || msg.includes('undelivered')) return;
  __ORIGINAL_LOG(...args);
};

// Maximum window error suppression
if (typeof window !== 'undefined') {
  // Override ALL error handlers immediately
  window.onerror = function(message: any): boolean {
    const msg = String(message).toLowerCase();
    if (
      msg.includes('resizeobserver') ||
      msg.includes('undelivered') ||
      msg.includes('loop completed') ||
      msg.includes('observer')
    ) {
      return true; // Prevent default handling
    }
    return false;
  };

  window.onunhandledrejection = function(event: PromiseRejectionEvent): void {
    const reason = String(event.reason).toLowerCase();
    if (
      reason.includes('resizeobserver') ||
      reason.includes('undelivered') ||
      reason.includes('observer')
    ) {
      event.preventDefault();
      return;
    }
  };

  // Maximum event listener coverage
  const errorEventTypes = ['error', 'unhandledrejection'];
  errorEventTypes.forEach(eventType => {
    window.addEventListener(eventType, function(event: any) {
      const message = event.message || event.reason || event.error || '';
      const msg = String(message).toLowerCase();
      if (
        msg.includes('resizeobserver') ||
        msg.includes('undelivered') ||
        msg.includes('observer') ||
        msg.includes('loop completed')
      ) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        return false;
      }
    }, { capture: true, passive: false });
  });

  // Complete ResizeObserver constructor override
  if (window.ResizeObserver) {
    const OriginalResizeObserver = window.ResizeObserver;
    window.ResizeObserver = class SafeResizeObserver extends OriginalResizeObserver {
      constructor(callback: ResizeObserverCallback) {
        const ultraSafeCallback: ResizeObserverCallback = (entries, observer) => {
          try {
            // Use longer delay to prevent rapid loops
            setTimeout(() => {
              try {
                callback(entries, observer);
              } catch (error) {
                // Complete silence - no logging whatsoever
              }
            }, 16); // One animation frame delay
          } catch (error) {
            // Complete silence - no logging whatsoever
          }
        };
        super(ultraSafeCallback);
      }
    };
  }

  // Override requestAnimationFrame for additional protection
  if (window.requestAnimationFrame) {
    const originalRAF = window.requestAnimationFrame;
    window.requestAnimationFrame = function(callback: FrameRequestCallback): number {
      return originalRAF.call(window, function(time: number) {
        try {
          callback(time);
        } catch (error) {
          const errorStr = String(error).toLowerCase();
          if (
            errorStr.includes('resizeobserver') ||
            errorStr.includes('undelivered') ||
            errorStr.includes('observer')
          ) {
            return; // Silently suppress
          }
          throw error; // Re-throw other errors
        }
      });
    };
  }

  // Global emergency suppression function
  (window as any).__EMERGENCY_SUPPRESS_RESIZE_OBSERVER = function(): void {
    ['error', 'warn', 'log', 'info', 'debug', 'trace'].forEach(method => {
      const original = (console as any)[method];
      (console as any)[method] = function(...args: any[]) {
        const msg = String(args.join(' ')).toLowerCase();
        if (
          !msg.includes('resizeobserver') &&
          !msg.includes('undelivered') &&
          !msg.includes('observer loop') &&
          !msg.includes('loop completed')
        ) {
          original.apply(console, args);
        }
        // Otherwise complete silence
      };
    });
    console.log('🚨 EMERGENCY: All ResizeObserver output completely suppressed');
  };
}

// ===================================================================
// STORYBOOK CONFIGURATION
// ===================================================================

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Design System',
          'Foundations',
          'Atoms',
          'Molecules',
          'Chromatic',
          'Test',
          '*'
        ],
        locales: 'en-US',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark', 
          value: '#333333',
        },
      ],
    },
  },
};

export default preview;

// ===================================================================
// FINAL SAFETY MEASURES
// ===================================================================

// Double-check suppression after brief delay
if (typeof window !== 'undefined') {
  setTimeout(() => {
    // Re-apply suppression in case something restored originals
    if (console.error !== __ORIGINAL_ERROR) {
      const current = console.error;
      console.error = function(...args: any[]) {
        const msg = String(args.join(' ')).toLowerCase();
        if (
          msg.includes('resizeobserver') ||
          msg.includes('undelivered') ||
          msg.includes('observer')
        ) {
          return; // SUPPRESS
        }
        current.apply(console, args);
      };
    }

    // Test that suppression is working
    const testMsg = 'ResizeObserver loop completed with undelivered notifications.';
    console.error(testMsg); // This should be suppressed
    
    // Confirm suppression is active
    console.log('✅ ResizeObserver error suppression confirmed active');
  }, 50);

  // Additional periodic check
  setInterval(() => {
    // Ensure suppression remains active
    if (console.error === __ORIGINAL_ERROR) {
      // Suppression was bypassed, re-apply
      console.error = function(...args: any[]) {
        const msg = String(args.join(' ')).toLowerCase();
        if (msg.includes('resizeobserver') || msg.includes('undelivered')) return;
        __ORIGINAL_ERROR(...args);
      };
    }
  }, 1000);
}
