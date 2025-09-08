import type { Preview } from '@storybook/react';

// Import comprehensive ResizeObserver error fix
import { applyResizeObserverFix } from '../src/utils/resizeObserverFix';

// Initialize ResizeObserver error suppression for Storybook
if (typeof window !== 'undefined') {
  // Apply comprehensive fix
  applyResizeObserverFix();

  console.debug('🔧 Comprehensive ResizeObserver error fix applied for Storybook');
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
