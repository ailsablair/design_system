import type { Preview } from '@storybook/react\';\nimport \'./docs.css';

// Enhanced global error handler to suppress ResizeObserver loop warnings
// This is a common Storybook issue and doesn't affect functionality
const originalError = window.console.error;
const originalWarn = window.console.warn;

// Comprehensive ResizeObserver error patterns
const resizeObserverPatterns = [
  'ResizeObserver loop completed with undelivered notifications',
  'ResizeObserver loop limit exceeded',
  'ResizeObserver callback threw an exception',
];

const isResizeObserverError = (message: any): boolean => {
  if (typeof message !== 'string') return false;
  return resizeObserverPatterns.some(pattern => message.includes(pattern));
};

// Enhanced error suppression
window.console.error = (...args) => {
  const firstArg = args[0];
  if (!isResizeObserverError(firstArg)) {
    originalError(...args);
  }
};

// Also suppress warnings related to ResizeObserver
window.console.warn = (...args) => {
  const firstArg = args[0];
  if (!isResizeObserverError(firstArg)) {
    originalWarn(...args);
  }
};

// Handle uncaught ResizeObserver errors
window.addEventListener('error', (event) => {
  if (isResizeObserverError(event.message)) {
    event.preventDefault();
    return false;
  }
});

// Handle unhandled promise rejections from ResizeObserver
window.addEventListener('unhandledrejection', (event) => {
  if (isResizeObserverError(event.reason)) {
    event.preventDefault();
    return false;
  }
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      defaultName: 'Documentation',
      // Enhanced docs configuration for better MDX rendering
      source: {
        type: 'code',
      },
    },
    layout: 'centered',
    viewport: {
      viewports: {
        smallMobile: {
          name: 'Small Mobile',
          styles: {
            width: '320px',
            height: '568px',
          },
        },
        largeMobile: {
          name: 'Large Mobile',
          styles: {
            width: '414px',
            height: '896px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
        largeDesktop: {
          name: 'Large Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
  },
};

export default preview;
