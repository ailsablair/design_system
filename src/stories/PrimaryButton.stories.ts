import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

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
    onClick: fn(),
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
  render: () => {
    return (
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '16px', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <PrimaryButton state="default" label="Default" />
          <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>Default</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <PrimaryButton state="hover" label="Hover" />
          <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>Hover</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <PrimaryButton state="pressed" label="Pressed" />
          <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>Pressed</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <PrimaryButton state="focused" label="Focused" />
          <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>Focused</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <PrimaryButton state="loading" label="Loading" />
          <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>Loading</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <PrimaryButton state="disabled" label="Disabled" />
          <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>Disabled</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'A showcase of all button states side by side for easy comparison.',
      },
    },
  },
};