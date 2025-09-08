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

  // Additional Storybook-specific console method overrides
  ['error', 'warn', 'log', 'info', 'debug'].forEach(method => {
    const original = (window.console as any)[method];
    (window.console as any)[method] = (...args: any[]) => {
      const hasResizeError = args.some(arg => {
        const str = String(arg).toLowerCase();
        return str.includes('resizeobserver') ||
               str.includes('resize observer') ||
               str.includes('undelivered notifications') ||
               str.includes('observer loop') ||
               str.includes('loop completed') ||
               str.includes('resize loop') ||
               str.includes('css pixel');
      });
      if (!hasResizeError) {
        original.apply(window.console, args);
      }
    };
  });

  // Additional Storybook-specific error event suppression
  ['error', 'unhandledrejection'].forEach(eventType => {
    window.addEventListener(eventType, (event: any) => {
      const message = event.message || event.reason || '';
      if (String(message).toLowerCase().includes('resizeobserver')) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
    }, { capture: true, passive: false });
  });
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
