import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Atoms/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toggle switch component based on the building-blocks/toggle Figma design. Supports multiple sizes, states, and can show/hide icons.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant of the toggle',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'focused', 'pressed', 'disabled', 'inactive'],
      description: 'Visual state of the toggle',
    },
    enabled: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is enabled (on) or disabled (off)',
    },
    icon: {
      control: { type: 'boolean' },
      description: 'Whether to show icon inside the toggle',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is disabled',
    },
    onChange: { action: 'changed' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    enabled: false,
    size: 'default',
    state: 'default',
    icon: true,
    disabled: false,
  },
};

export const Enabled: Story = {
  args: {
    enabled: true,
    size: 'default',
    state: 'default',
    icon: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    enabled: false,
    size: 'default',
    state: 'disabled',
    icon: true,
    disabled: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    enabled: true,
    size: 'default',
    state: 'default',
    icon: false,
    disabled: false,
  },
};

// Size Variants
export const SmallSize: Story = {
  args: {
    enabled: true,
    size: 'small',
    state: 'default',
    icon: true,
    disabled: false,
  },
};

export const LargeSize: Story = {
  args: {
    enabled: true,
    size: 'large',
    state: 'default',
    icon: true,
    disabled: false,
  },
};

// State Variants - Enabled
export const EnabledHover: Story = {
  args: {
    enabled: true,
    size: 'default',
    state: 'hover',
    icon: true,
    disabled: false,
  },
};

export const EnabledFocused: Story = {
  args: {
    enabled: true,
    size: 'default',
    state: 'focused',
    icon: true,
    disabled: false,
  },
};

export const EnabledPressed: Story = {
  args: {
    enabled: true,
    size: 'default',
    state: 'pressed',
    icon: true,
    disabled: false,
  },
};

// State Variants - Disabled
export const DisabledHover: Story = {
  args: {
    enabled: false,
    size: 'default',
    state: 'hover',
    icon: true,
    disabled: false,
  },
};

export const DisabledFocused: Story = {
  args: {
    enabled: false,
    size: 'default',
    state: 'focused',
    icon: true,
    disabled: false,
  },
};

export const DisabledPressed: Story = {
  args: {
    enabled: false,
    size: 'default',
    state: 'pressed',
    icon: true,
    disabled: false,
  },
};

// Comprehensive showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '60px' }}>Small:</div>
        <Toggle size="small" enabled={false} icon={true} />
        <Toggle size="small" enabled={true} icon={true} />
        <Toggle size="small" enabled={false} icon={true} disabled={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '60px' }}>Default:</div>
        <Toggle size="default" enabled={false} icon={true} />
        <Toggle size="default" enabled={true} icon={true} />
        <Toggle size="default" enabled={false} icon={true} disabled={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '60px' }}>Large:</div>
        <Toggle size="large" enabled={false} icon={true} />
        <Toggle size="large" enabled={true} icon={true} />
        <Toggle size="large" enabled={false} icon={true} disabled={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Overview of all toggle sizes showing disabled, enabled, and disabled states.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Default:</div>
        <Toggle enabled={false} state="default" icon={true} />
        <Toggle enabled={true} state="default" icon={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Hover:</div>
        <Toggle enabled={false} state="hover" icon={true} />
        <Toggle enabled={true} state="hover" icon={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Focused:</div>
        <Toggle enabled={false} state="focused" icon={true} />
        <Toggle enabled={true} state="focused" icon={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Pressed:</div>
        <Toggle enabled={false} state="pressed" icon={true} />
        <Toggle enabled={true} state="pressed" icon={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Disabled:</div>
        <Toggle enabled={false} state="disabled" icon={true} disabled={true} />
        <Toggle enabled={true} state="disabled" icon={true} disabled={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Overview of all toggle states showing both enabled and disabled variations.',
      },
    },
  },
};
