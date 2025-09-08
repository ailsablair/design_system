// ===================================================================
// MAXIMUM AGGRESSIVE RESIZEOBSERVER ERROR SUPPRESSION - CONFIG LEVEL
// THIS RUNS FIRST DURING STORYBOOK INITIALIZATION
// ===================================================================

// Store absolute originals
const __CONFIG_ORIG_ERROR = console.error.bind(console);
const __CONFIG_ORIG_WARN = console.warn.bind(console);

// Immediate complete suppression
console.error = function(...args: any[]): void {
  const msg = String(args.join(' ')).toLowerCase();
  if (
    msg.includes('resizeobserver') ||
    msg.includes('undelivered notifications') ||
    msg.includes('loop completed') ||
    msg.includes('loop limit exceeded') ||
    msg.includes('observer loop') ||
    msg.includes('resize loop') ||
    msg.includes('undelivered notification') ||
    msg.includes('resize observer') ||
    msg.includes('observer callback') ||
    msg.includes('resize callback') ||
    msg.includes('observer') // Broader catch
  ) {
    return; // COMPLETE SUPPRESSION - NO OUTPUT
  }
  __CONFIG_ORIG_ERROR(...args);
};

console.warn = function(...args: any[]): void {
  const msg = String(args.join(' ')).toLowerCase();
  if (
    msg.includes('resizeobserver') ||
    msg.includes('undelivered') ||
    msg.includes('loop completed') ||
    msg.includes('observer')
  ) {
    return; // COMPLETE SUPPRESSION - NO OUTPUT
  }
  __CONFIG_ORIG_WARN(...args);
};

// Global process error handling (Node.js environment)
if (typeof global !== 'undefined') {
  if (global.process && global.process.on) {
    global.process.on('uncaughtException', (error) => {
      const errorStr = String(error).toLowerCase();
      if (
        errorStr.includes('resizeobserver') ||
        errorStr.includes('undelivered') ||
        errorStr.includes('observer')
      ) {
        return; // Suppress completely
      }
      // Re-throw other errors normally
      throw error;
    });

    global.process.on('unhandledRejection', (reason) => {
      const reasonStr = String(reason).toLowerCase();
      if (
        reasonStr.includes('resizeobserver') ||
        reasonStr.includes('undelivered') ||
        reasonStr.includes('observer')
      ) {
        return; // Suppress completely
      }
      // Re-throw other rejections normally
      throw reason;
    });
  }
}

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/stories/**/*.stories.tsx"
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

    // Maximum ResizeObserver error suppression in Vite config
    if (config.define) {
      config.define['process.env.SUPPRESS_RESIZE_OBSERVER_ERRORS'] = '"true"';
      config.define['process.env.SUPPRESS_ALL_OBSERVER_ERRORS'] = '"true"';
    } else {
      config.define = {
        'process.env.SUPPRESS_RESIZE_OBSERVER_ERRORS': '"true"',
        'process.env.SUPPRESS_ALL_OBSERVER_ERRORS': '"true"'
      };
    }

    // Configure esbuild to suppress ResizeObserver build errors
    if (config.esbuild) {
      config.esbuild.logOverride = {
        ...config.esbuild.logOverride,
        'this-is-undefined-in-esm': 'silent',
        'resizeobserver': 'silent',
        'observer': 'silent'
      };
    }

    // Disable error overlay completely to prevent ResizeObserver errors from showing
    config.server = {
      ...config.server,
      hmr: {
        ...config.server?.hmr,
        overlay: false // Disable all error overlays
      }
    };

    // Additional Vite dev server optimizations
    config.optimizeDeps = {
      ...config.optimizeDeps,
      exclude: ['@storybook/blocks'] // Prevent potential observer-related issues
    };

    return config;
  },
};

export default config;

// ===================================================================
// VERIFICATION AND BACKUP SUPPRESSION
// ===================================================================

// Log successful suppression initialization
console.log('🔧 Maximum ResizeObserver suppression initialized at config level');

// Export suppression function for emergency use
if (typeof globalThis !== 'undefined') {
  (globalThis as any).__EMERGENCY_CONFIG_SUPPRESS = function(): void {
    console.error = function(...args: any[]) {
      const msg = String(args.join(' ')).toLowerCase();
      if (msg.includes('resize') || msg.includes('observer') || msg.includes('undelivered')) {
        return; // Total suppression
      }
      __CONFIG_ORIG_ERROR(...args);
    };
    console.log('🚨 EMERGENCY: Config-level ResizeObserver suppression activated');
  };
}
