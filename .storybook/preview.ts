import type { Preview } from '@storybook/react';

// Suppress ResizeObserver loop completed errors (harmless in development)
const suppressResizeObserverErrors = () => {
  const originalError = console.error;
  console.error = (...args: any[]) => {
    const message = args[0];
    if (
      typeof message === 'string' && 
      message.includes('ResizeObserver loop completed with undelivered notifications')
    ) {
      // Suppress this specific error as it's harmless
      return;
    }
    originalError.apply(console, args);
  };

  // Also handle window error events
  window.addEventListener('error', (event) => {
    if (
      event.message && 
      event.message.includes('ResizeObserver loop completed with undelivered notifications')
    ) {
      event.preventDefault();
      event.stopPropagation();
    }
  });
};

// Initialize error suppression
suppressResizeObserverErrors();

const preview: Preview = {
  parameters: {
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
