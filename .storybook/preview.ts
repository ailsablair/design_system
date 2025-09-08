import type { Preview } from '@storybook/react';

// Dynamic import of ResizeObserver suppression (browser-only)
if (typeof window !== 'undefined') {
  // Use dynamic import to avoid SSR issues
  import('../src/utils/browserResizeObserverSuppression').catch(() => {
    // Silently handle import errors
  });
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
