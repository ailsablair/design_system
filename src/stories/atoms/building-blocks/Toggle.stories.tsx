import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Atoms/ZZ Building Blocks/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toggle switch component based on the building-blocks/toggle Figma design. Supports multiple sizes (small, default, large), states (default, hover, focused, clicked, disabled, inactive), and can show/hide icons. Features precise positioning and animations matching the Figma specification.',
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
      options: ['default', 'hover', 'focused', 'clicked', 'disabled', 'inactive'],
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

// Size Variants - Enabled True
export const SmallSizeEnabled: Story = {
  args: {
    enabled: true,
    size: 'small',
    state: 'default',
    icon: true,
    disabled: false,
  },
};

export const DefaultSizeEnabled: Story = {
  args: {
    enabled: true,
    size: 'default',
    state: 'default',
    icon: true,
    disabled: false,
  },
};

export const LargeSizeEnabled: Story = {
  args: {
    enabled: true,
    size: 'large',
    state: 'default',
    icon: true,
    disabled: false,
  },
};

// Size Variants - Enabled False
export const SmallSizeDisabled: Story = {
  args: {
    enabled: false,
    size: 'small',
    state: 'default',
    icon: true,
    disabled: false,
  },
};

export const DefaultSizeDisabled: Story = {
  args: {
    enabled: false,
    size: 'default',
    state: 'default',
    icon: true,
    disabled: false,
  },
};

export const LargeSizeDisabled: Story = {
  args: {
    enabled: false,
    size: 'large',
    state: 'default',
    icon: true,
    disabled: false,
  },
};

// State Variants - Small Size, Enabled True
export const SmallEnabledHover: Story = {
  args: {
    enabled: true,
    size: 'small',
    state: 'hover',
    icon: true,
    disabled: false,
  },
};

export const SmallEnabledFocused: Story = {
  args: {
    enabled: true,
    size: 'small',
    state: 'focused',
    icon: true,
    disabled: false,
  },
};

export const SmallEnabledClicked: Story = {
  args: {
    enabled: true,
    size: 'small',
    state: 'clicked',
    icon: true,
    disabled: false,
  },
};

export const SmallEnabledDisabled: Story = {
  args: {
    enabled: true,
    size: 'small',
    state: 'disabled',
    icon: true,
    disabled: true,
  },
};

// State Variants - Small Size, Enabled False
export const SmallDisabledHover: Story = {
  args: {
    enabled: false,
    size: 'small',
    state: 'hover',
    icon: true,
    disabled: false,
  },
};

export const SmallDisabledFocused: Story = {
  args: {
    enabled: false,
    size: 'small',
    state: 'focused',
    icon: true,
    disabled: false,
  },
};

export const SmallDisabledClicked: Story = {
  args: {
    enabled: false,
    size: 'small',
    state: 'clicked',
    icon: true,
    disabled: false,
  },
};

export const SmallDisabledDisabled: Story = {
  args: {
    enabled: false,
    size: 'small',
    state: 'disabled',
    icon: true,
    disabled: true,
  },
};

// Comprehensive showcases
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px', fontWeight: '500' }}>Small:</div>
        <Toggle size="small" enabled={false} icon={true} />
        <Toggle size="small" enabled={true} icon={true} />
        <Toggle size="small" enabled={false} icon={true} disabled={true} />
        <Toggle size="small" enabled={true} icon={true} disabled={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px', fontWeight: '500' }}>Default:</div>
        <Toggle size="default" enabled={false} icon={true} />
        <Toggle size="default" enabled={true} icon={true} />
        <Toggle size="default" enabled={false} icon={true} disabled={true} />
        <Toggle size="default" enabled={true} icon={true} disabled={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px', fontWeight: '500' }}>Large:</div>
        <Toggle size="large" enabled={false} icon={true} />
        <Toggle size="large" enabled={true} icon={true} />
        <Toggle size="large" enabled={false} icon={true} disabled={true} />
        <Toggle size="large" enabled={true} icon={true} disabled={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Overview of all toggle sizes showing disabled/enabled and normal/disabled states.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexDirection: 'column' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Enabled True States</h3>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Default:</div>
        <Toggle enabled={true} state="default" icon={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Hover:</div>
        <Toggle enabled={true} state="hover" icon={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Focused:</div>
        <Toggle enabled={true} state="focused" icon={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Clicked:</div>
        <Toggle enabled={true} state="clicked" icon={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Disabled:</div>
        <Toggle enabled={true} state="disabled" icon={true} disabled={true} />
      </div>
      
      <h3 style={{ margin: '24px 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Enabled False States</h3>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Default:</div>
        <Toggle enabled={false} state="default" icon={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Hover:</div>
        <Toggle enabled={false} state="hover" icon={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Focused:</div>
        <Toggle enabled={false} state="focused" icon={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Clicked:</div>
        <Toggle enabled={false} state="clicked" icon={true} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Disabled:</div>
        <Toggle enabled={false} state="disabled" icon={true} disabled={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete overview of all toggle states for both enabled and disabled variations.',
      },
    },
  },
};

export const FigmaShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexDirection: 'column' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Large Size Variants</h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Toggle size="large" enabled={true} state="default" icon={true} />
          <Toggle size="large" enabled={false} state="inactive" icon={true} />
          <Toggle size="large" enabled={false} state="disabled" icon={true} disabled={true} />
          <Toggle size="large" enabled={false} state="hover" icon={true} />
          <Toggle size="large" enabled={false} state="focused" icon={true} />
          <Toggle size="large" enabled={false} state="clicked" icon={true} />
          <Toggle size="large" enabled={true} state="disabled" icon={true} disabled={true} />
          <Toggle size="large" enabled={true} state="hover" icon={true} />
          <Toggle size="large" enabled={true} state="focused" icon={true} />
          <Toggle size="large" enabled={true} state="clicked" icon={true} />
        </div>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Default Size Variants</h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Toggle size="default" enabled={true} state="default" icon={true} />
          <Toggle size="default" enabled={false} state="inactive" icon={true} />
          <Toggle size="default" enabled={false} state="disabled" icon={true} disabled={true} />
          <Toggle size="default" enabled={false} state="hover" icon={true} />
          <Toggle size="default" enabled={false} state="focused" icon={true} />
          <Toggle size="default" enabled={false} state="clicked" icon={true} />
          <Toggle size="default" enabled={true} state="disabled" icon={true} disabled={true} />
          <Toggle size="default" enabled={true} state="hover" icon={true} />
          <Toggle size="default" enabled={true} state="focused" icon={true} />
          <Toggle size="default" enabled={true} state="clicked" icon={true} />
        </div>
      </div>
      
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Small Size Variants</h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Toggle size="small" enabled={true} state="default" icon={true} />
          <Toggle size="small" enabled={false} state="default" icon={true} />
          <Toggle size="small" enabled={false} state="disabled" icon={true} disabled={true} />
          <Toggle size="small" enabled={false} state="hover" icon={true} />
          <Toggle size="small" enabled={false} state="focused" icon={true} />
          <Toggle size="small" enabled={false} state="clicked" icon={true} />
          <Toggle size="small" enabled={true} state="disabled" icon={true} disabled={true} />
          <Toggle size="small" enabled={true} state="hover" icon={true} />
          <Toggle size="small" enabled={true} state="focused" icon={true} />
          <Toggle size="small" enabled={true} state="clicked" icon={true} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete Figma showcase displaying all toggle variants organized by size, matching the original Figma design layout and specifications.',
      },
    },
  },
};
