import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta: Meta = {
  title: 'Test/Simple',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => <div>Hello Storybook!</div>,
};
