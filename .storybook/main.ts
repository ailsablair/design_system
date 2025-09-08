import type { StorybookConfig } from '@storybook/react-vite';

// Immediate ResizeObserver error suppression at config level
if (typeof global !== 'undefined' && global.console) {
  const originalError = global.console.error;
  global.console.error = function(...args) {
    const message = args.join(' ').toLowerCase();
    if (
      message.includes('resizeobserver') ||
      message.includes('undelivered notifications') ||
      message.includes('loop completed')
    ) {
      return; // Suppress ResizeObserver errors
    }
    originalError.apply(global.console, args);
  };
}

const config: StorybookConfig = {
  "stories": [
    "../src/stories/*.stories.tsx",
    "../src/stories/**/*.stories.tsx",
    "../src/stories/**/*.stories.ts"
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
    // Optimize for memory and performance
    if (config.build) {
      config.build.chunkSizeWarningLimit = 3000;
      config.build.sourcemap = false;
      config.build.minify = 'esbuild';
      config.build.rollupOptions = {
        ...config.build.rollupOptions,
        output: {
          ...config.build.rollupOptions?.output,
          manualChunks: {
            vendor: ['react', 'react-dom'],
            storybook: ['@storybook/react'],
          },
        },
      };
    }

    // Reduce memory usage
    if (config.optimizeDeps) {
      config.optimizeDeps.force = true;
    }

    // Add ResizeObserver error suppression for Vite dev server
    if (config.define) {
      config.define['process.env.SUPPRESS_RESIZE_OBSERVER_ERRORS'] = '"true"';
    } else {
      config.define = {
        'process.env.SUPPRESS_RESIZE_OBSERVER_ERRORS': '"true"'
      };
    }

    // Configure esbuild to handle ResizeObserver errors during build
    if (config.esbuild) {
      config.esbuild.logOverride = {
        ...config.esbuild.logOverride,
        'this-is-undefined-in-esm': 'silent'
      };
    }

    return config;
  },
};

export default config;
