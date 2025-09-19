import type { Preview } from '@storybook/react';
import React from 'react';

// Safe ResizeObserver error suppression decorator
const withResizeObserverErrorSuppression = (StoryFn: any) => {
  React.useEffect(() => {
    // Only suppress specific ResizeObserver error messages
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      const message = args.join(' ');
      if (message.includes('ResizeObserver loop completed with undelivered notifications') ||
          message.includes('ResizeObserver loop limit exceeded')) {
        // Silently ignore ResizeObserver errors
        return;
      }
      // Let all other errors through normally
      originalConsoleError.apply(console, args);
    };

    return () => {
      // Restore original console.error when component unmounts
      console.error = originalConsoleError;
    };
  }, []);

  return React.createElement(StoryFn);
};

const preview: Preview = {
  decorators: [withResizeObserverErrorSuppression],
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
