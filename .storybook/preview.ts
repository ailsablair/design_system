import type { Preview } from '@storybook/react';

// Import comprehensive ResizeObserver error fix
import { applyResizeObserverFix } from '../src/utils/resizeObserverFix';

// Initialize ResizeObserver error suppression for Storybook
if (typeof window !== 'undefined') {
  // Apply comprehensive fix
  applyResizeObserverFix();

  console.debug('🔧 Comprehensive ResizeObserver error fix applied for Storybook');
}

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Design System',
          'Foundations',
          'Atoms',
          'Molecules',
          'Chromatic',
          'Test',
          '*'
        ],
        method: 'alphabetical',
        locales: 'en-US',
        compareFn: (a: any, b: any) => {
          // Get the story titles
          const aTitle = a[1].title;
          const bTitle = b[1].title;

          // Extract section and subsection
          const aSections = aTitle.split('/');
          const bSections = bTitle.split('/');

          // If they're in the same main section
          if (aSections[0] === bSections[0]) {
            const aIsBuildingBlocks = aTitle.includes('🧱 Building Blocks');
            const bIsBuildingBlocks = bTitle.includes('🧱 Building Blocks');

            // Building Blocks should come last within each section
            if (aIsBuildingBlocks && !bIsBuildingBlocks) return 1;
            if (!aIsBuildingBlocks && bIsBuildingBlocks) return -1;

            // If both or neither are Building Blocks, sort alphabetically
            return aTitle.localeCompare(bTitle);
          }

          // For different main sections, use the order array
          const orderArray = [
            'Design System',
            'Foundations',
            'Atoms',
            'Molecules',
            'Chromatic',
            'Test'
          ];

          const aIndex = orderArray.indexOf(aSections[0]);
          const bIndex = orderArray.indexOf(bSections[0]);

          if (aIndex === -1 && bIndex === -1) return aTitle.localeCompare(bTitle);
          if (aIndex === -1) return 1;
          if (bIndex === -1) return -1;

          return aIndex - bIndex;
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
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
      ],
    },
  },
};

export default preview;
