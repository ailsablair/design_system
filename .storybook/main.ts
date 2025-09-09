import type { StorybookConfig } from '@storybook/react-vite';

// ===== RESIZE OBSERVER ERROR SUPPRESSION - CONFIG LEVEL =====
// Early suppression during Storybook configuration and build phase
const suppressResizeObserverErrors = (): void => {
  if (typeof globalThis !== 'undefined' && globalThis.console) {
    const originalError = globalThis.console.error;

    globalThis.console.error = (...args: any[]) => {
      const message = args.join(' ').toLowerCase();
      if (message.includes('resizeobserver') ||
          message.includes('undelivered notifications') ||
          message.includes('observer loop') ||
          message.includes('resize loop')) {
        return; // Suppress ResizeObserver errors
      }
      originalError.apply(globalThis.console, args);
    };

    console.log('🔧 ResizeObserver error suppression activated at config level');
  }

  // Suppress Node.js process-level errors if available
  if (typeof process !== 'undefined' && process.on) {
    process.on('uncaughtException', (error) => {
      const message = error.message?.toLowerCase() || '';
      if (message.includes('resizeobserver') ||
          message.includes('undelivered notifications')) {
        return; // Silently handle ResizeObserver errors
      }
      // Re-throw non-ResizeObserver errors
      throw error;
    });

    process.on('unhandledRejection', (reason) => {
      const message = String(reason).toLowerCase();
      if (message.includes('resizeobserver') ||
          message.includes('undelivered notifications')) {
        return; // Silently handle ResizeObserver promise rejections
      }
      // Re-throw non-ResizeObserver rejections
      throw reason;
    });
  }
};

// Apply suppression immediately during configuration
suppressResizeObserverErrors();

const config: StorybookConfig = {
  "stories": [
    "../src/stories/**/*.stories.tsx",
    "../src/stories/**/*.mdx"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "typescript": {
    "reactDocgen": false,
    "check": false,
  },
  "core": {
    "disableTelemetry": true,
  },
  "docs": {
    "autodocs": false,
  },
  "viteFinal": async (config) => {
    // Optimizations for large design system
    if (config.build) {
      config.build.chunkSizeWarningLimit = 3000;
      config.build.sourcemap = false;
      config.build.minify = 'esbuild';
    }

    // Improve dev server performance
    if (config.server) {
      config.server.fs = {
        allow: ['..']
      };
    }

    return config;
  },
};

export default config;
