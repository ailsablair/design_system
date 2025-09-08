import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/stories/01-DesignSystemOverview.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-docs"
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
};

export default config;
