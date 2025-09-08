import type { Preview } from '@storybook/react';

// Inline ResizeObserver error suppression
if (typeof console !== 'undefined') {
  const originalError = console.error;
  console.error = function(...args: any[]) {
    const message = args.join(' ').toLowerCase();
    if (message.includes('resizeobserver') && message.includes('undelivered notifications')) {
      return; // Suppress ResizeObserver errors
    }
    originalError.apply(console, args);
  };
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
