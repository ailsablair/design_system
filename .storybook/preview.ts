// ===================================================================
// EMERGENCY RESIZEOBSERVER ERROR SUPPRESSION - MUST BE FIRST
// ===================================================================
// This runs before ANY other code to catch ResizeObserver errors

// Store originals before any other code runs
const _console_error = console.error;
const _console_warn = console.warn;

// Immediate aggressive suppression
console.error = function(...args: any[]) {
  const msg = String(args.join(' ')).toLowerCase();
  if (
    msg.includes('resizeobserver') ||
    msg.includes('undelivered notifications') ||
    msg.includes('loop completed') ||
    msg.includes('loop limit exceeded') ||
    msg.includes('observer loop') ||
    msg.includes('resize loop')
  ) {
    return; // COMPLETELY SUPPRESS
  }
  _console_error.apply(console, args);
};

console.warn = function(...args: any[]) {
  const msg = String(args.join(' ')).toLowerCase();
  if (
    msg.includes('resizeobserver') ||
    msg.includes('undelivered notifications') ||
    msg.includes('loop completed')
  ) {
    return; // COMPLETELY SUPPRESS
  }
  _console_warn.apply(console, args);
};

// Window error suppression
if (typeof window !== 'undefined') {
  window.onerror = function(message: any) {
    if (String(message).toLowerCase().includes('resizeobserver')) {
      return true; // Suppress
    }
    return false;
  };

  window.onunhandledrejection = function(event: PromiseRejectionEvent) {
    if (String(event.reason).toLowerCase().includes('resizeobserver')) {
      event.preventDefault();
      return;
    }
  };

  // Event listeners for additional coverage
  window.addEventListener('error', function(e) {
    if (String(e.message).toLowerCase().includes('resizeobserver')) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }, { capture: true, passive: false });

  window.addEventListener('unhandledrejection', function(e) {
    if (String(e.reason).toLowerCase().includes('resizeobserver')) {
      e.preventDefault();
    }
  }, { capture: true, passive: false });
}

// Override ResizeObserver constructor to prevent loops
if (typeof window !== 'undefined' && window.ResizeObserver) {
  const OriginalResizeObserver = window.ResizeObserver;
  window.ResizeObserver = class extends OriginalResizeObserver {
    constructor(callback: ResizeObserverCallback) {
      const safeCallback: ResizeObserverCallback = (entries, observer) => {
        try {
          // Add small delay to prevent rapid loops
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
// ADDITIONAL SAFETY MEASURES
// ===================================================================

// Apply additional fixes after Storybook loads
if (typeof window !== 'undefined') {
  // Additional console override in case something restored the original
  setTimeout(() => {
    if (console.error !== _console_error) {
      const current = console.error;
      console.error = function(...args: any[]) {
        const msg = String(args.join(' ')).toLowerCase();
        if (msg.includes('resizeobserver') || msg.includes('undelivered notifications')) {
          return;
        }
        current.apply(console, args);
      };
    }
  }, 100);

  // Make emergency suppression globally available
  (window as any).emergencyResizeObserverSuppress = function() {
    console.log('🚨 Emergency ResizeObserver suppression activated');
    
    ['error', 'warn', 'log', 'info', 'debug'].forEach(method => {
      const original = (console as any)[method];
      (console as any)[method] = function(...args: any[]) {
        const msg = String(args.join(' ')).toLowerCase();
        if (!msg.includes('resizeobserver') && !msg.includes('undelivered notifications')) {
          original.apply(console, args);
        }
      };
    });
  };

  console.debug('🔧 ResizeObserver error suppression activated');
}
