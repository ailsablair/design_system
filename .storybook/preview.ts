import type { Preview } from '@storybook/react';
import { setupResizeObserverErrorHandler, forceSupressResizeObserverErrors } from '../src/utils/resizeObserverHandler';
import { withErrorBoundary } from '../src/stories/chromatic/Debug/ErrorBoundary';

// Early ResizeObserver error suppression for Storybook
if (typeof window !== 'undefined') {
  // Quick early suppression before full setup
  const originalError = window.console.error;
  window.console.error = (...args: any[]) => {
    const hasResizeError = args.some(arg =>
      String(arg).toLowerCase().includes('resizeobserver') ||
      String(arg).toLowerCase().includes('undelivered notifications') ||
      String(arg).toLowerCase().includes('loop completed')
    );
    if (!hasResizeError) {
      originalError.apply(window.console, args);
    }
  };
}

// Initialize enhanced ResizeObserver error handling for Storybook
setupResizeObserverErrorHandler();

// Apply force suppression for Storybook environment (where ResizeObserver errors are common)
if (typeof window !== 'undefined') {
  setTimeout(() => {
    forceSupressResizeObserverErrors();
  }, 100);
}

const preview: Preview = {
  decorators: [
    // Add error boundary to all stories for better error handling in Chromatic
    (Story) => withErrorBoundary(Story),
  ],
  parameters: {
    options: {
      storySort: {
        order: [
          'Design System',
          'Foundations',
          'Atoms',
          'Molecules',
          '*'
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h1, h2, h3',
        ignoreSelector: '#primary',
        title: 'Table of Contents',
        disable: false,
        unsafeTocbotOptions: {
          orderedList: false,
        },
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
