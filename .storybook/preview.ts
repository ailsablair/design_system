import type { Preview } from '@storybook/react';

// ===== RESIZE OBSERVER ERROR SUPPRESSION =====
// Immediate suppression to prevent ResizeObserver errors during Storybook startup
const suppressResizeObserverErrors = (): void => {
  if (typeof window === 'undefined') return;

  // Store original console methods
  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;

  // Enhanced pattern matching for ResizeObserver errors
  const isResizeObserverError = (message: any): boolean => {
    if (!message) return false;
    const str = String(message).toLowerCase();
    return str.includes('resizeobserver') ||
           str.includes('resize observer') ||
           str.includes('undelivered notifications') ||
           str.includes('loop completed') ||
           str.includes('observer loop') ||
           str.includes('resize loop');
  };

  // Override console.error
  console.error = (...args: any[]) => {
    const hasResizeError = args.some(arg => isResizeObserverError(arg));
    if (!hasResizeError) {
      originalConsoleError.apply(console, args);
    }
  };

  // Override console.warn
  console.warn = (...args: any[]) => {
    const hasResizeError = args.some(arg => isResizeObserverError(arg));
    if (!hasResizeError) {
      originalConsoleWarn.apply(console, args);
    }
  };

  // Global error event handling
  window.addEventListener('error', (event) => {
    if (isResizeObserverError(event.message)) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    }
  }, { capture: true });

  // Unhandled rejection handling
  window.addEventListener('unhandledrejection', (event) => {
    if (isResizeObserverError(event.reason)) {
      event.preventDefault();
    }
  }, { capture: true });

  // Override window.onerror
  const originalOnError = window.onerror;
  window.onerror = (message, source, lineno, colno, error) => {
    if (isResizeObserverError(message)) {
      return true; // Prevent default error handling
    }
    return originalOnError ? originalOnError(message, source, lineno, colno, error) : false;
  };

  // Override ResizeObserver constructor with safer callback
  if (window.ResizeObserver) {
    const OriginalResizeObserver = window.ResizeObserver;
    window.ResizeObserver = class SafeResizeObserver extends OriginalResizeObserver {
      constructor(callback: ResizeObserverCallback) {
        const safeCallback: ResizeObserverCallback = (entries, observer) => {
          // Use requestAnimationFrame to prevent loops
          requestAnimationFrame(() => {
            try {
              callback(entries, observer);
            } catch (error) {
              // Silently suppress ResizeObserver callback errors
              if (!isResizeObserverError(error)) {
                originalConsoleError('ResizeObserver callback error:', error);
              }
            }
          });
        };
        super(safeCallback);
      }
    };
  }

  console.log('🔧 ResizeObserver error suppression activated in Storybook preview');
};

// Apply suppression immediately when preview loads
suppressResizeObserverErrors();

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
