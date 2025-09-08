// ===================================================================
// EMERGENCY RESIZEOBSERVER ERROR SUPPRESSION - CONFIG LEVEL
// ===================================================================

// Immediate suppression at the configuration level
const _orig_error = console.error;
const _orig_warn = console.warn;

console.error = function(...args: any[]) {
  const msg = String(args.join(' ')).toLowerCase();
  if (
    msg.includes('resizeobserver') ||
    msg.includes('undelivered notifications') ||
    msg.includes('loop completed') ||
    msg.includes('loop limit exceeded') ||
    msg.includes('observer loop') ||
    msg.includes('resize loop')
  ) {
    return; // COMPLETELY SUPPRESS
  }
  _orig_error.apply(console, args);
};

console.warn = function(...args: any[]) {
  const msg = String(args.join(' ')).toLowerCase();
  if (
    msg.includes('resizeobserver') ||
    msg.includes('undelivered notifications') ||
    msg.includes('loop completed')
  ) {
    return; // COMPLETELY SUPPRESS
  }
  _orig_warn.apply(console, args);
};

// Global error suppression
if (typeof global !== 'undefined') {
  // Override process error handling if available
  if (global.process && global.process.on) {
    global.process.on('uncaughtException', (error) => {
      const errorStr = String(error).toLowerCase();
      if (errorStr.includes('resizeobserver')) {
        return; // Suppress ResizeObserver errors
      }
      throw error; // Re-throw other errors
    });

    global.process.on('unhandledRejection', (reason) => {
      const reasonStr = String(reason).toLowerCase();
      if (reasonStr.includes('resizeobserver')) {
        return; // Suppress ResizeObserver rejections
      }
      throw reason; // Re-throw other rejections
    });
  }
}

import type { StorybookConfig } from '@storybook/react-vite';

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

    // Additional Vite configuration to suppress ResizeObserver errors
    config.server = {
      ...config.server,
      hmr: {
        ...config.server?.hmr,
        overlay: false // Disable error overlay that might show ResizeObserver errors
      }
    };

    return config;
  },
};

export default config;
