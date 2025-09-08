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

// ResizeObserver error suppression (runs after preview loads)
if (typeof window !== 'undefined') {
  const originalError = console.error;
  console.error = function(...args: any[]) {
    const message = args.join(' ');
    if (message.includes('ResizeObserver loop completed with undelivered notifications')) {
      return; // Suppress ResizeObserver errors
    }
    originalError.apply(console, args);
  };

  // Global error handler
  window.addEventListener('error', (event) => {
    if (event.message?.includes('ResizeObserver loop completed with undelivered notifications')) {
      event.preventDefault();
      return false;
    }
  }, true);
}
