import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Example/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'pressed', 'focused', 'loading', 'disabled'],
    },
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
  args: {
    label: 'Label',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
  },
};

export const Hover: Story = {
  args: {
    state: 'hover',
  },
};

export const Pressed: Story = {
  args: {
    state: 'pressed',
  },
};

export const Focused: Story = {
  args: {
    state: 'focused',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <IconButton label="Default" state="default" />
      <IconButton label="Hover" state="hover" />
      <IconButton label="Pressed" state="pressed" />
      <IconButton label="Focused" state="focused" />
      <IconButton label="Loading" loading={true} />
      <IconButton label="Disabled" disabled={true} />
    </div>
  ),
};
