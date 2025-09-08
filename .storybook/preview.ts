// Basic ResizeObserver error suppression
const originalError = console.error;
console.error = function(...args) {
  const message = args.join(' ');
  if (message.includes('ResizeObserver loop completed with undelivered notifications')) {
    return; // Suppress this specific error
  }
  originalError.apply(console, args);
};

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
