import React from 'react';
import type { Decorator, Preview as StorybookPreview } from '@storybook/react';
// Minimal, targeted suppression of the noisy ResizeObserver console errors
import '../src/utils/minimalResizeObserverSuppression';
// Additional browser-level suppression and safe observer wrapper
import '../src/utils/browserResizeObserverSuppression';
// Storybook-wide early suppression utility (auto-inits on import)
import '../src/utils/storybookResizeObserverFix';
// Emergency-level immediate suppression (initialize early)
import { initImmediateSuppression } from '../src/utils/immediateResizeObserverSuppression';
// Story-level decorator suppression
import { withResizeObserverSuppression } from '../src/utils/resizeObserverDecorator';

// Initialize immediate suppression as early as possible in the preview context
if (typeof window !== 'undefined' && !(window as any).__RO_IMMEDIATE_INIT) {
  (window as any).__RO_IMMEDIATE_INIT = true;
  initImmediateSuppression();
}

if (typeof window !== 'undefined' && !(window as any).__RO_SUPPRESS_PATCHED) {
  (window as any).__RO_SUPPRESS_PATCHED = true;
  const originalError = window.console.error.bind(window.console);
  const originalWarn = window.console.warn.bind(window.console);
  const shouldSuppress = (args: any[]): boolean => {
    try {
      const text = args
        .map((a) => (typeof a === 'string' ? a : (a && (a.message || a.toString())) || ''))
        .join(' ')
        .toLowerCase();
      return (
        text.includes('resizeobserver loop completed with undelivered notifications') ||
        text.includes('resizeobserver loop limit exceeded') ||
        (text.includes('resizeobserver') && (text.includes('undelivered') || text.includes('loop completed')))
      );
    } catch {
      return false;
    }
  };
  window.console.error = (...args: any[]) => {
    if (shouldSuppress(args)) return;
    originalError(...args);
  };
  window.console.warn = (...args: any[]) => {
    if (shouldSuppress(args)) return;
    originalWarn(...args);
  };
}

// Minimal decorator that calls Story with context to avoid rendering issues
const withSafeBoundary: Decorator = (Story, context) => (
  React.createElement(React.Fragment, null, Story(context))
);

const preview: StorybookPreview = {
  decorators: [withResizeObserverSuppression],
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
