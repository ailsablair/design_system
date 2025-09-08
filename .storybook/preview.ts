import type { Preview } from '@storybook/react';

// Import ResizeObserver error suppression utilities
import {
  setupResizeObserverErrorHandler,
  forceSupressResizeObserverErrors,
  initEarlyErrorSuppression
} from '../src/utils/resizeObserverHandler';
import { initImmediateSuppression } from '../src/utils/immediateResizeObserverSuppression';

// Initialize ResizeObserver error suppression for Storybook
if (typeof window !== 'undefined') {
  // Apply immediate suppression first
  initImmediateSuppression();

  // Then apply comprehensive error handling
  initEarlyErrorSuppression();
  setupResizeObserverErrorHandler();
  forceSupressResizeObserverErrors();

  console.debug('🔧 ResizeObserver error suppression initialized for Storybook');
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
