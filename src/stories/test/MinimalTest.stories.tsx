import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Test/Minimal',
  parameters: {
    layout: 'centered',
    chromatic: { disable: true },
  },
};

export default meta;
type Story = StoryObj;

export const Simple: Story = {
  render: () => {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Minimal Test Component</h1>
        <p>This is a minimal test to isolate build issues.</p>
      </div>
    );
  },
};
