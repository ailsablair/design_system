import React from 'react';
import type { Decorator, Preview as StorybookPreview } from '@storybook/react';
// Keep a single, safe suppression that runs inside the preview iframe
import '../src/utils/storybookResizeObserverFix';

// Minimal no-op decorator to ensure standard React rendering path
const withSafeBoundary: Decorator = (Story) => (
  React.createElement(React.Fragment, null, React.createElement(Story))
);

const preview: StorybookPreview = {
  decorators: [withSafeBoundary],
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
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: false },
          { id: 'focusable-content', enabled: true },
          { id: 'heading-order', enabled: true },
          { id: 'image-alt', enabled: true },
          { id: 'landmark-one-main', enabled: true },
          { id: 'label', enabled: true },
          { id: 'keyboard', enabled: true },
          { id: 'button-name', enabled: true },
          { id: 'link-name', enabled: true },
        ],
      },
      options: { checks: { 'color-contrast': { enabled: false } }, restoreScroll: true },
    },
  },
};

export default preview;
