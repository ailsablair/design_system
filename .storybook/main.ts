import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/stories/01-DesignSystemOverview.stories.tsx",
    "../src/stories/test/MinimalTest.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "typescript": {
    "reactDocgen": "react-docgen",
    "reactDocgenTypescriptOptions": {
      "shouldExtractLiteralValuesFromEnum": true,
      "propFilter": (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
    "check": false,
  },
  "core": {
    "disableTelemetry": true,
  },
  "docs": {
    "autodocs": false,
  },
  "viteFinal": async (config) => {
    // Minimal config for build stability
    if (config.build) {
      config.build.chunkSizeWarningLimit = 2000;
      config.build.sourcemap = false;
    }
    return config;
  },
};

export default config;
