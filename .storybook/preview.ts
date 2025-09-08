import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Design System',
          'Foundations',
          ['Foundations', '*', 'Foundations/Building Blocks'],
          'Atoms',
          ['Atoms', '*', 'Atoms/Building Blocks'],
          'Molecules',
          ['Molecules', '*', 'Molecules/Building Blocks'],
          'Chromatic',
          'Test',
          '*'
        ],
        locales: 'en-US',
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
