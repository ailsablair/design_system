import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Foundations/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The Echo logo is available in multiple variants and color schemes. Use the appropriate variant based on your layout needs and ensure proper contrast for accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['logomark', 'wordmark', 'full'],
      description: 'Choose between logomark (icon only), wordmark (text only), or full logo',
    },
    color: {
      control: 'select',
      options: ['brand', 'dark-blue', 'sky-blue', 'white', 'black'],
      description: 'Color scheme for the logo',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Predefined size options',
    },
    width: {
      control: 'number',
      description: 'Custom width (overrides size preset)',
    },
    height: {
      control: 'number',
      description: 'Custom height (overrides size preset)',
    },
  },
  args: {
    variant: 'full',
    color: 'brand',
    size: 'medium',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'full',
    color: 'brand',
    size: 'medium',
  },
};

export const Logomark: Story = {
  args: {
    variant: 'logomark',
    color: 'brand',
    size: 'medium',
  },
};

export const Wordmark: Story = {
  args: {
    variant: 'wordmark',
    color: 'dark-blue',
    size: 'medium',
  },
};

export const CustomSize: Story = {
  args: {
    variant: 'full',
    color: 'brand',
    width: 500,
    height: 200,
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom width and height override the size presets',
      },
    },
  },
};
