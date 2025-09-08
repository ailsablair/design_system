import type { Preview } from '@storybook/react';
import { initImmediateSuppression } from '../src/utils/immediateResizeObserverSuppression';
import { setupResizeObserverErrorHandler, forceSupressResizeObserverErrors, initEarlyErrorSuppression } from '../src/utils/resizeObserverHandler';
import { withErrorBoundary } from '../src/stories/chromatic/Debug/ErrorBoundary';

// Initialize ResizeObserver error handling for Storybook runtime
if (typeof window !== 'undefined') {
  // Initialize all error suppression layers
  initEarlyErrorSuppression();
  initImmediateSuppression();
  setupResizeObserverErrorHandler();
  forceSupressResizeObserverErrors();
}

const preview: Preview = {
  decorators: [
    // Add error boundary to all stories for better error handling
    (Story) => withErrorBoundary(Story),
  ],
  parameters: {
    // Optimized story sorting for better performance
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Design System',
          'Foundations', 
          'Atoms',
          'Molecules',
          'Organisms',
          '*'
        ],
      },
    },
    // Performance optimizations for controls
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: false,
    },
    // Optimize docs for better performance  
    docs: {
      // Canvas optimization
      canvas: {
        sourceState: 'hidden', // Hide source by default for better performance
      },
    },
    // Optimize backgrounds
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
