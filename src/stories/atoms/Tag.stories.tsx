import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Design System/Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tag component with multiple sizes, variants, and interactive elements based on Echo design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant of the tag',
    },
    variant: {
      control: { type: 'select' },
      options: ['light-gray', 'primary', 'secondary'],
      description: 'Color variant of the tag',
    },
    showClose: {
      control: { type: 'boolean' },
      description: 'Show close/remove button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
  },
  args: {
    label: 'Label',
    showClose: true,
    disabled: false,
    size: 'default',
    variant: 'light-gray',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    size: 'default',
    variant: 'light-gray',
  },
};

export const Small: Story = {
  args: {
    label: 'Label',
    size: 'small',
    variant: 'light-gray',
  },
};

export const Large: Story = {
  args: {
    label: 'Label',
    size: 'large',
    variant: 'light-gray',
  },
};

export const Primary: Story = {
  args: {
    label: 'Label',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Label',
    variant: 'secondary',
  },
};

export const WithoutClose: Story = {
  args: {
    label: 'Label',
    showClose: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    disabled: true,
  },
};

export const Clickable: Story = {
  args: {
    label: 'Clickable Label',
    onClick: () => alert('Tag clicked!'),
  },
};

export const LongLabel: Story = {
  args: {
    label: 'This is a longer label text',
  },
};

export const SmallPrimary: Story = {
  args: {
    label: 'Small',
    size: 'small',
    variant: 'primary',
  },
};

export const LargeSecondary: Story = {
  args: {
    label: 'Large',
    size: 'large',
    variant: 'secondary',
  },
};
