import React from 'react';
import type { Decorator, Preview as StorybookPreview } from '@storybook/react';
import { initImmediateSuppression } from '../src/utils/immediateResizeObserverSuppression';
import { setupStorybookResizeObserverFix } from '../src/utils/storybookResizeObserverFix';

// Early, focused suppression of noisy ResizeObserver errors for Storybook preview
const applyResizeObserverSuppression = (): void => {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { __RO_STORYBOOK_SUPPRESSION_APPLIED?: boolean } & Window;

  if (w.__RO_STORYBOOK_SUPPRESSION_APPLIED) return;
  w.__RO_STORYBOOK_SUPPRESSION_APPLIED = true;

  try {
    initImmediateSuppression();
  } catch {
    // no-op
  }

  try {
    setupStorybookResizeObserverFix();
  } catch {
    // no-op; do not break Storybook if suppression setup fails
  }

  const originalError = console.error.bind(console);
  const originalWarn = console.warn.bind(console);

  const shouldSuppress = (args: Parameters<typeof console.error>): boolean => {
    try {
      const text = args
        .map((a) => {
          if (typeof a === 'string') return a;
          if (a && typeof a.message === 'string') return a.message;
          try {
            return String(a);
          } catch {
            return '';
          }
        })
        .join(' ')
        .toLowerCase();

      return (
        text.includes('resizeobserver loop completed with undelivered notifications') ||
        text.includes('resizeobserver loop limit exceeded') ||
        text.includes('resizeobserver') && (text.includes('undelivered') || text.includes('loop completed'))
      );
    } catch {
      return false;
    }
  };

  console.error = (...args: Parameters<typeof console.error>) => {
    if (shouldSuppress(args)) return;
    originalError(...args);
  };

  console.warn = (...args: Parameters<typeof console.warn>) => {
    if (shouldSuppress(args)) return;
    originalWarn(...args);
  };

  window.addEventListener(
    'error',
    (event: ErrorEvent) => {
      const message = (event.message || '').toLowerCase();
      if (
        message.includes('resizeobserver loop completed with undelivered notifications') ||
        message.includes('resizeobserver loop limit exceeded') ||
        message.includes('resizeobserver') && (message.includes('undelivered') || message.includes('loop completed'))
      ) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
    },
    true,
  );

  window.addEventListener(
    'unhandledrejection',
    (event: PromiseRejectionEvent) => {
      const reason = String(event.reason || '').toLowerCase();
      if (
        reason.includes('resizeobserver loop completed with undelivered notifications') ||
        reason.includes('resizeobserver loop limit exceeded') ||
        reason.includes('resizeobserver') && (reason.includes('undelivered') || reason.includes('loop completed'))
      ) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
    },
    true,
  );
};

applyResizeObserverSuppression();

// Minimal decorator that calls Story with context to avoid rendering issues
const withSafeBoundary: Decorator = (Story, context) => (
  React.createElement(React.Fragment, null, Story(context))
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
          '*',
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
