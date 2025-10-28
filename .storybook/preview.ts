import React, { type PropsWithChildren, useEffect } from 'react';
import type { Decorator, Preview as StorybookPreview } from '@storybook/react-vite';
import '../src/utils/storybookResizeObserverFix';
import '../src/utils/browserResizeObserverSuppression';
import '../src/utils/minimalResizeObserverSuppression';

const ResizeObserverErrorBoundary: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const originalConsoleError = console.error;

    console.error = (...args: Parameters<typeof originalConsoleError>) => {
      const message = args
        .filter((arg): arg is string => typeof arg === 'string')
        .join(' ');

      if (
        message.includes('ResizeObserver loop completed with undelivered notifications') ||
        message.includes('ResizeObserver loop limit exceeded')
      ) {
        return;
      }

      originalConsoleError(...args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return React.createElement(React.Fragment, null, children);
};

// Safe ResizeObserver error suppression decorator
const withResizeObserverErrorSuppression: Decorator = (Story, context) =>
  React.createElement(
    ResizeObserverErrorBoundary,
    null,
    Story(context)
  );

const preview: StorybookPreview = {
  decorators: [withResizeObserverErrorSuppression],
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
    a11y: {
      config: {
        rules: [
          // Enable color contrast checking but allow user to override
          {
            id: 'color-contrast',
            enabled: false, // Disabled per user request
          },
          // Ensure all interactive elements are focusable
          {
            id: 'focusable-content',
            enabled: true,
          },
          // Ensure proper heading hierarchy
          {
            id: 'heading-order',
            enabled: true,
          },
          // Ensure images have alt text
          {
            id: 'image-alt',
            enabled: true,
          },
          // Ensure proper landmark usage
          {
            id: 'landmark-one-main',
            enabled: true,
          },
          // Ensure form labels
          {
            id: 'label',
            enabled: true,
          },
          // Ensure keyboard accessibility
          {
            id: 'keyboard',
            enabled: true,
          },
          // Check for proper button naming
          {
            id: 'button-name',
            enabled: true,
          },
          // Check for proper link naming
          {
            id: 'link-name',
            enabled: true,
          },
        ],
      },
      options: {
        checks: { 'color-contrast': { enabled: false } },
        restoreScroll: true,
      },
    },
  },
};

export default preview;
