import type { StorybookConfig } from '@storybook/react-vite';

// Import ResizeObserver error suppression
import '../src/utils/resizeObserverSuppression';

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
    // Basic optimizations
    if (config.build) {
      config.build.chunkSizeWarningLimit = 3000;
      config.build.sourcemap = false;
      config.build.minify = 'esbuild';
    }

    return config;
  },
};

export default config;
