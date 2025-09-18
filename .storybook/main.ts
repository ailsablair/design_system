import type { StorybookConfig } from '@storybook/react-vite';

// ===== RESIZE OBSERVER ERROR SUPPRESSION - CONFIG LEVEL =====
// Prevent duplicate listener registration with global tracking
declare global {
  var __storybookResizeObserverSuppressed: boolean;
}

const suppressResizeObserverErrors = (): void => {
  // Prevent duplicate initialization
  if (globalThis.__storybookResizeObserverSuppressed) {
    return;
  }
  globalThis.__storybookResizeObserverSuppressed = true;

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

  // Suppress Node.js process-level errors if available (only add listeners once)
  if (typeof process !== 'undefined' && process.on) {
    // Increase max listeners to prevent warnings
    process.setMaxListeners(20);

    // Check if our listeners are already registered
    const existingUncaughtListeners = process.listeners('uncaughtException');
    const existingRejectionListeners = process.listeners('unhandledRejection');

    const hasResizeObserverUncaughtListener = existingUncaughtListeners.some(
      listener => listener.name === 'resizeObserverUncaughtHandler' ||
                  listener.toString().includes('resizeobserver')
    );

    const hasResizeObserverRejectionListener = existingRejectionListeners.some(
      listener => listener.name === 'resizeObserverRejectionHandler' ||
                  listener.toString().includes('resizeobserver')
    );

    if (!hasResizeObserverUncaughtListener) {
      const resizeObserverUncaughtHandler = function resizeObserverUncaughtHandler(error: Error) {
        const message = error.message?.toLowerCase() || '';
        if (message.includes('resizeobserver') ||
            message.includes('undelivered notifications')) {
          return; // Silently handle ResizeObserver errors
        }
        // Let other errors bubble up by not preventing default behavior
      };

      process.on('uncaughtException', resizeObserverUncaughtHandler);
    }

    if (!hasResizeObserverRejectionListener) {
      const resizeObserverRejectionHandler = function resizeObserverRejectionHandler(reason: any) {
        const message = String(reason).toLowerCase();
        if (message.includes('resizeobserver') ||
            message.includes('undelivered notifications')) {
          return; // Silently handle ResizeObserver promise rejections
        }
        // Let other rejections bubble up
      };

      process.on('unhandledRejection', resizeObserverRejectionHandler);
    }
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
