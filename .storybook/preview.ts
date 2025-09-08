import type { Preview } from '@storybook/react';

// Immediate ResizeObserver error suppression (runs before any component loading)
// This must run immediately to catch early errors
(function() {
  // Override console.error immediately
  if (typeof console !== 'undefined' && console.error) {
    const originalError = console.error;
    console.error = function(...args) {
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
      originalError.apply(console, args);
    };
  }

  // Override console.warn for ResizeObserver warnings
  if (typeof console !== 'undefined' && console.warn) {
    const originalWarn = console.warn;
    console.warn = function(...args) {
      const message = args.join(' ').toLowerCase();
      if (
        message.includes('resizeobserver') ||
        message.includes('undelivered notifications') ||
        message.includes('loop completed')
      ) {
        return;
      }
      originalWarn.apply(console, args);
    };
  }

  // Set up error event suppression when window becomes available
  function setupWindowErrorHandling() {
    if (typeof window !== 'undefined') {
      // Override window.onerror
      window.onerror = function(message, source, lineno, colno, error) {
        if (typeof message === 'string' && message.toLowerCase().includes('resizeobserver')) {
          return true; // Prevent default browser error handling
        }
        return false;
      };

      // Override window.onunhandledrejection
      window.onunhandledrejection = function(event) {
        const reason = String(event.reason).toLowerCase();
        if (reason.includes('resizeobserver')) {
          event.preventDefault();
          return;
        }
      };

      // Error event listeners
      window.addEventListener('error', function(event) {
        if (event.message && event.message.toLowerCase().includes('resizeobserver')) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
        }
      }, { capture: true, passive: false });

      window.addEventListener('unhandledrejection', function(event) {
        const reason = String(event.reason).toLowerCase();
        if (reason.includes('resizeobserver')) {
          event.preventDefault();
        }
      }, { capture: true, passive: false });

      console.debug('🔧 Immediate ResizeObserver error suppression activated');
    } else {
      // If window is not available yet, try again in next tick
      setTimeout(setupWindowErrorHandling, 0);
    }
  }

  // Start setup immediately
  setupWindowErrorHandling();
})();

// Import comprehensive ResizeObserver error fix
import { applyResizeObserverFix } from '../src/utils/resizeObserverFix';

// Apply comprehensive fix when window is available
if (typeof window !== 'undefined') {
  applyResizeObserverFix();
}

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
