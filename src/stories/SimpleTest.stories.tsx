import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta: Meta = {
  title: 'Test/Simple',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Simple Test Story

Basic smoke test used to verify that the Storybook environment is healthy.

- Purpose: quick render/preview check
- Expected: text renders and no runtime errors
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => <div>Hello Storybook!</div>,
};
