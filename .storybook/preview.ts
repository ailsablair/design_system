import type { Preview } from '@storybook/react';

// Global error handler to suppress ResizeObserver loop warnings
// This is a common Storybook issue and doesn't affect functionality
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
const originalError = window.console.error;
window.console.error = (...args) => {
  const firstArg = args[0];
  const isResizeObserverLoopError = 
    typeof firstArg === 'string' && 
    firstArg.includes('ResizeObserver loop completed with undelivered notifications');
  
  if (!isResizeObserverLoopError) {
    originalError(...args);
  }
};

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
