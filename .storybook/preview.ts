import type { Preview } from '@storybook/react';

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
        method: (a, b) => {
          // Extract section and story parts
          const aKind = a[1].kind;
          const bKind = b[1].kind;

          // Split by "/" to get section and component parts
          const aParts = aKind.split('/');
          const bParts = bKind.split('/');

          // If different sections, sort by section order
          if (aParts[0] !== bParts[0]) {
            const sectionOrder = [
              'Design System',
              'Foundations',
              'Atoms',
              'Molecules',
              'Chromatic',
              'Test'
            ];
            const aIndex = sectionOrder.indexOf(aParts[0]);
            const bIndex = sectionOrder.indexOf(bParts[0]);
            return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
          }

          // Same section - check if either is Building Blocks
          const aIsBuildingBlocks = aParts.some(part =>
            part.toLowerCase().includes('building') && part.toLowerCase().includes('blocks')
          );
          const bIsBuildingBlocks = bParts.some(part =>
            part.toLowerCase().includes('building') && part.toLowerCase().includes('blocks')
          );

          // Building Blocks always goes last
          if (aIsBuildingBlocks && !bIsBuildingBlocks) return 1;
          if (!aIsBuildingBlocks && bIsBuildingBlocks) return -1;

          // Both or neither are Building Blocks - sort alphabetically
          return aKind.localeCompare(bKind);
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
