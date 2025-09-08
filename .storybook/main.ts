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

    return config;
  },
};

export default config;
