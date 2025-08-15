import type { Meta, StoryObj } from '@storybook/react';

import { PrimaryButton } from './PrimaryButton';

const meta = {
  title: 'Design System/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A primary button component with multiple states including default, hover, pressed, focused, loading, and disabled. Based on the Figma design system with proper responsive behavior and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'pressed', 'focused', 'loading', 'disabled'],
      description: 'The visual state of the button',
    },
    label: {
      control: 'text',
      description: 'The text content of the button',
    },
    leadingIcon: {
      control: 'boolean',
      description: 'Show the leading alarm icon',
    },
    trailingIcon: {
      control: 'boolean',
      description: 'Show the trailing arrow down icon',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
  args: {
    onClick: () => console.log('Button clicked'),
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
    label: 'Label',
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const Hover: Story = {
  args: {
    state: 'hover',
    label: 'Label',
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const Pressed: Story = {
  args: {
    state: 'pressed',
    label: 'Label',
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const Focused: Story = {
  args: {
    state: 'focused',
    label: 'Label',
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const Loading: Story = {
  args: {
    state: 'loading',
    label: 'Label',
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    label: 'Label',
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const WithoutIcons: Story = {
  args: {
    state: 'default',
    label: 'Button Text',
    leadingIcon: false,
    trailingIcon: false,
  },
};

export const OnlyLeadingIcon: Story = {
  args: {
    state: 'default',
    label: 'Download',
    leadingIcon: true,
    trailingIcon: false,
  },
};

export const OnlyTrailingIcon: Story = {
  args: {
    state: 'default',
    label: 'More Options',
    leadingIcon: false,
    trailingIcon: true,
  },
};

export const CustomText: Story = {
  args: {
    state: 'default',
    label: 'Get Started',
    leadingIcon: true,
    trailingIcon: true,
  },
};

// Interactive showcase showing all states
export const AllStates: Story = {
  args: {
    state: 'default',
    label: 'All States Example',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the controls to test different states and configurations of the primary button.',
      },
    },
  },
};
