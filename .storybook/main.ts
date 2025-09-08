import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {
      "builder": {
        "viteConfigPath": undefined,
      },
    },
  },
  "typescript": {
    "reactDocgen": "react-docgen",
    "reactDocgenTypescriptOptions": {
      "shouldExtractLiteralValuesFromEnum": true,
      "propFilter": (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      "savePropValueAsString": true,
      "skipChildrenPropWithoutDoc": false,
    },
    "check": false, // Disable TypeScript checking during build for better performance
    "checkOptions": {},
  },
  "core": {
    "disableTelemetry": true,
    "disableWhatsNewNotifications": true,
  },
  "features": {
    "buildStoriesJson": true,
    "storyStoreV7": true,
    "modernInlineRender": true,
  },
  "docs": {
    "autodocs": false, // Disable autodocs for better performance
    "defaultName": "Documentation",
  },
  "refs": {},
  "viteFinal": async (config, { configType }) => {
    const isProduction = configType === 'PRODUCTION';

    return mergeConfig(config, {
      // Optimize Vite configuration for better build performance
      define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      },
      build: {
        // Memory optimization for large projects
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
          output: {
            // Split large chunks for better loading performance
            manualChunks: {
              'react-vendor': ['react', 'react-dom'],
              'storybook-vendor': ['@storybook/react'],
              'ui-vendor': ['@mui/material', '@emotion/react', '@emotion/styled'],
            },
            // Optimize chunk naming
            chunkFileNames: isProduction ? 'assets/chunk-[hash].js' : 'assets/chunk-[name]-[hash].js',
            entryFileNames: isProduction ? 'assets/entry-[hash].js' : 'assets/entry-[name]-[hash].js',
            assetFileNames: isProduction ? 'assets/asset-[hash].[ext]' : 'assets/asset-[name]-[hash].[ext]',
          },
          // Memory optimization
          maxParallelFileOps: 2,
        },
        // Target modern browsers for better performance
        target: 'es2020',
        // Source maps only in development
        sourcemap: !isProduction,
        // Minimize in production
        minify: isProduction ? 'esbuild' : false,
        // Memory management
        assetsInlineLimit: 4096,
      },
      optimizeDeps: {
        // Include dependencies for better caching
        include: [
          'react',
          'react-dom',
          '@storybook/react',
          '@emotion/react',
          '@emotion/styled',
          '@mui/material',
        ],
        // Exclude problematic dependencies
        exclude: ['@storybook/addon-docs/node_modules'],
      },
      esbuild: {
        // Optimize for modern browsers
        target: 'es2020',
        // Drop console logs in production
        drop: isProduction ? ['console', 'debugger'] : [],
      },
      server: {
        fs: {
          // Allow serving files from outside the root
          allow: ['..'],
        },
      },
      plugins: [
        // Remove conflicting plugins
        ...(config.plugins || []).filter((plugin) => {
          if (plugin && typeof plugin === 'object' && 'name' in plugin) {
            return !plugin.name?.includes('react-docgen-typescript');
          }
          return true;
        }),
      ],
    });
  },
  "managerHead": (head) => `
    ${head}
    <style>
      /* Optimize manager performance */
      .sidebar-item[data-nodetype="story"] {
        contain: layout style;
      }

      /* Reduce reflow during story switching */
      .sb-main-padded {
        contain: layout;
      }

      /* Memory optimization for large story lists */
      .sidebar-container {
        contain: strict;
        height: 100%;
        overflow: auto;
      }
    </style>
    <script>
      // Optimize manager performance
      if (typeof window !== 'undefined') {
        // Debounce resize events for better performance
        let resizeTimeout;
        const originalResize = window.onresize;
        window.onresize = function(event) {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(() => {
            if (originalResize) originalResize.call(this, event);
          }, 100);
        };

        // Optimize story switching
        window.__STORYBOOK_CLIENT_API__?.configure?.(() => {
          // Configure any additional optimizations
        }, module);
      }
    </script>
  `,
};

export default config;
