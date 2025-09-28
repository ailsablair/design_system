import type { Meta, StoryObj } from '@storybook/react';
import { Button, AlarmIcon, ArrowDownIcon, AlertIcon, CloseCircleIcon, ChevronUpIcon, InformationIcon } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Primary button component with multiple sizes, states, and icon support. Includes primary, secondary, tertiary, ghost, error, warning, info, and success variants. Supports both regular buttons with text and icon-only variants. Matches the Figma design system specifications.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['extra-small', 'small', 'default', 'large'],
      description: 'Button size variant',
    },
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'error', 'warning', 'info', 'success'],
      description: 'Button type/variant',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'clicked', 'focused', 'loading', 'disabled'],
      description: 'Visual state (for controlled states)',
    },
    outline: {
      control: 'boolean',
      description: 'Outline variant',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    width: {
      control: 'select',
      options: ['auto', 'full'],
      description: 'Width style',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Icon-only variant (removes text content)',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Basic button examples
export const Default: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
  },
};

export const GhostDefault: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'ghost',
    leadingIcon: <AlarmIcon size={14} />,
  },
};

export const ErrorDefault: Story = {
  args: {
    children: 'Error button',
    size: 'small',
    type: 'error',
    leadingIcon: <CloseCircleIcon size={14} />,
  },
};

export const WarningDefault: Story = {
  args: {
    children: 'Warning button',
    size: 'small',
    type: 'warning',
    leadingIcon: <AlertIcon size={14} />,
  },
};

export const WithLeadingIcon: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    leadingIcon: <AlarmIcon size={18} />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

// Size variants
export const ExtraSmall: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'primary',
    leadingIcon: <AlarmIcon size={14} />,
  },
};

export const Small: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'primary',
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const Large: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'primary',
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

// State variants
export const HoverState: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const LoadingState: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    loading: true,
  },
};

export const DisabledState: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    disabled: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

// Ghost button variants
export const GhostSmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'ghost',
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const GhostDefaultSize: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'ghost',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const GhostLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'ghost',
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

export const GhostHover: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'ghost',
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <AlarmIcon size={14} />,
  },
};

export const GhostClicked: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'ghost',
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <AlarmIcon size={14} />,
  },
};

export const GhostFocused: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'ghost',
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <AlarmIcon size={14} />,
  },
};

export const GhostLoading: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'ghost',
    loading: true,
  },
};

export const GhostDisabled: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'ghost',
    disabled: true,
    leadingIcon: <AlarmIcon size={14} />,
  },
};

// Error button variants
export const ErrorDefaultSize: Story = {
  args: {
    children: 'Error button',
    size: 'default',
    type: 'error',
    leadingIcon: <CloseCircleIcon size={18} />,
  },
};

export const ErrorLarge: Story = {
  args: {
    children: 'Error button',
    size: 'large',
    type: 'error',
    leadingIcon: <CloseCircleIcon size={20} />,
  },
};

export const ErrorHover: Story = {
  args: {
    children: 'Error button',
    size: 'small',
    type: 'error',
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <CloseCircleIcon size={14} />,
  },
};

export const ErrorClicked: Story = {
  args: {
    children: 'Error button',
    size: 'small',
    type: 'error',
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <CloseCircleIcon size={14} />,
  },
};

export const ErrorFocused: Story = {
  args: {
    children: 'Error button',
    size: 'small',
    type: 'error',
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <CloseCircleIcon size={14} />,
  },
};

export const ErrorLoading: Story = {
  args: {
    children: 'Error button',
    size: 'small',
    type: 'error',
    loading: true,
  },
};

export const ErrorDisabled: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'error',
    disabled: true,
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

// Warning button variants
export const WarningDefaultSize: Story = {
  args: {
    children: 'Warning button',
    size: 'default',
    type: 'warning',
    leadingIcon: <AlertIcon size={18} />,
  },
};

export const WarningLarge: Story = {
  args: {
    children: 'Warning button',
    size: 'large',
    type: 'warning',
    leadingIcon: <AlertIcon size={20} />,
  },
};

export const WarningHover: Story = {
  args: {
    children: 'Warning button',
    size: 'small',
    type: 'warning',
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <AlertIcon size={14} />,
  },
};

export const WarningClicked: Story = {
  args: {
    children: 'Warning button',
    size: 'small',
    type: 'warning',
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <AlertIcon size={14} />,
  },
};

export const WarningFocused: Story = {
  args: {
    children: 'Warning button',
    size: 'small',
    type: 'warning',
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <AlertIcon size={14} />,
  },
};

export const WarningLoading: Story = {
  args: {
    children: 'Warning button',
    size: 'small',
    type: 'warning',
    loading: true,
  },
};

export const WarningDisabled: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'warning',
    disabled: true,
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

// Secondary button variants
export const SecondaryExtraSmall: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'secondary',
    leadingIcon: <AlarmIcon size={14} />,
  },
};

export const SecondaryExtraSmallHover: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'secondary',
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <AlarmIcon size={14} />,
  },
};

export const SecondaryExtraSmallClicked: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'secondary',
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <AlarmIcon size={14} />,
  },
};

export const SecondaryExtraSmallFocused: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'secondary',
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <AlarmIcon size={14} />,
  },
};

export const SecondaryExtraSmallLoading: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'secondary',
    loading: true,
  },
};

export const SecondaryExtraSmallDisabled: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'secondary',
    disabled: true,
    leadingIcon: <AlarmIcon size={14} />,
  },
};

export const SecondaryDefault: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'secondary',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const SecondarySmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'secondary',
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const SecondaryLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'secondary',
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

// Tertiary button variants
export const TertiaryDefault: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiarySmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'tertiary',
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const TertiaryLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'tertiary',
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

// Tertiary outline button variants
export const TertiaryOutlineSmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'tertiary',
    outline: true,
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const TertiaryOutlineDefault: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryOutlineLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'tertiary',
    outline: true,
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

export const TertiaryOutlineHover: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryOutlineClicked: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryOutlineFocused: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryOutlineLoading: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    loading: true,
  },
};

export const TertiaryOutlineDisabled: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    disabled: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

// Icon-only secondary button variants
export const SecondaryIconOnlySmall: Story = {
  args: {
    size: 'small',
    type: 'secondary',
    iconOnly: true,
    icon: <AlarmIcon size={14} />,
  },
};

export const SecondaryIconOnlyDefault: Story = {
  args: {
    size: 'default',
    type: 'secondary',
    iconOnly: true,
    icon: <AlarmIcon size={18} />,
  },
};

export const SecondaryIconOnlyLarge: Story = {
  args: {
    size: 'large',
    type: 'secondary',
    iconOnly: true,
    icon: <AlarmIcon size={20} />,
  },
};

export const SecondaryIconOnlyHover: Story = {
  args: {
    size: 'default',
    type: 'secondary',
    iconOnly: true,
    state: 'hover',
    className: 'force-hover',
    icon: <AlarmIcon size={18} />,
  },
};

export const SecondaryIconOnlyLoading: Story = {
  args: {
    size: 'default',
    type: 'secondary',
    iconOnly: true,
    loading: true,
  },
};

export const SecondaryIconOnlyDisabled: Story = {
  args: {
    size: 'default',
    type: 'secondary',
    iconOnly: true,
    disabled: true,
    icon: <AlarmIcon size={18} />,
  },
};

// Icon-only tertiary button variants
export const TertiaryIconOnlySmall: Story = {
  args: {
    size: 'small',
    type: 'tertiary',
    iconOnly: true,
    icon: <AlarmIcon size={14} />,
  },
};

export const TertiaryIconOnlyDefault: Story = {
  args: {
    size: 'default',
    type: 'tertiary',
    iconOnly: true,
    icon: <AlarmIcon size={18} />,
  },
};

export const TertiaryIconOnlyLarge: Story = {
  args: {
    size: 'large',
    type: 'tertiary',
    iconOnly: true,
    icon: <AlarmIcon size={20} />,
  },
};

export const TertiaryIconOnlyHover: Story = {
  args: {
    size: 'default',
    type: 'tertiary',
    iconOnly: true,
    state: 'hover',
    className: 'force-hover',
    icon: <AlarmIcon size={18} />,
  },
};

export const TertiaryIconOnlyClicked: Story = {
  args: {
    size: 'default',
    type: 'tertiary',
    iconOnly: true,
    state: 'clicked',
    className: 'force-clicked',
    icon: <AlarmIcon size={18} />,
  },
};

export const TertiaryIconOnlyFocused: Story = {
  args: {
    size: 'default',
    type: 'tertiary',
    iconOnly: true,
    state: 'focused',
    className: 'force-focused',
    icon: <AlarmIcon size={18} />,
  },
};

export const TertiaryIconOnlyLoading: Story = {
  args: {
    size: 'default',
    type: 'tertiary',
    iconOnly: true,
    loading: true,
  },
};

export const TertiaryIconOnlyDisabled: Story = {
  args: {
    size: 'default',
    type: 'tertiary',
    iconOnly: true,
    disabled: true,
    icon: <AlarmIcon size={18} />,
  },
};

// Dropdown-style button with open state
export const DropdownStyleButton: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'ghost',
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ChevronUpIcon size={14} />,
  },
};

// All ghost sizes comparison
export const AllGhostSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Extra Small</h4>
        <Button size="extra-small" type="ghost" leadingIcon={<AlarmIcon size={14} />}>
          Button w/ leading icon
        </Button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Small</h4>
        <Button size="small" type="ghost" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <Button size="default" type="ghost" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
          Label
        </Button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <Button size="large" type="ghost" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
          Label
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available ghost button sizes with appropriate icons.',
      },
    },
  },
};

// All error sizes comparison
export const AllErrorSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Small</h4>
        <Button size="small" type="error" leadingIcon={<CloseCircleIcon size={14} />}>
          Error button
        </Button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <Button size="default" type="error" leadingIcon={<CloseCircleIcon size={18} />}>
          Error button
        </Button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <Button size="large" type="error" leadingIcon={<CloseCircleIcon size={20} />}>
          Error button
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available error button sizes with appropriate icons.',
      },
    },
  },
};

// All warning sizes comparison
export const AllWarningSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Small</h4>
        <Button size="small" type="warning" leadingIcon={<AlertIcon size={14} />}>
          Warning button
        </Button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <Button size="default" type="warning" leadingIcon={<AlertIcon size={18} />}>
          Warning button
        </Button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <Button size="large" type="warning" leadingIcon={<AlertIcon size={20} />}>
          Warning button
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available warning button sizes with appropriate icons.',
      },
    },
  },
};

// Complete button states showcase for all types
export const AllButtonStatesShowcase: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px', alignItems: 'center', padding: '24px' }}>
      {/* Header row */}
      <div style={{ fontWeight: '600', fontSize: '14px' }}>Type</div>
      <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
      <div style={{ fontWeight: '600', fontSize: '14px' }}>Hover</div>
      <div style={{ fontWeight: '600', fontSize: '14px' }}>Clicked</div>
      <div style={{ fontWeight: '600', fontSize: '14px' }}>Focused</div>
      <div style={{ fontWeight: '600', fontSize: '14px' }}>Loading</div>

      {/* Ghost row */}
      <div style={{ fontSize: '14px', fontWeight: '500' }}>Ghost</div>
      <Button size="small" type="ghost" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>Label</Button>
      <Button size="small" type="ghost" className="force-hover" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>Label</Button>
      <Button size="small" type="ghost" className="force-clicked" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>Label</Button>
      <Button size="small" type="ghost" className="force-focused" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>Label</Button>
      <Button size="small" type="ghost" loading>Label</Button>

      {/* Error row */}
      <div style={{ fontSize: '14px', fontWeight: '500' }}>Error</div>
      <Button size="small" type="error" leadingIcon={<CloseCircleIcon size={14} />}>Error button</Button>
      <Button size="small" type="error" className="force-hover" leadingIcon={<CloseCircleIcon size={14} />}>Error button</Button>
      <Button size="small" type="error" className="force-clicked" leadingIcon={<CloseCircleIcon size={14} />}>Error button</Button>
      <Button size="small" type="error" className="force-focused" leadingIcon={<CloseCircleIcon size={14} />}>Error button</Button>
      <Button size="small" type="error" loading>Error button</Button>

      {/* Warning row */}
      <div style={{ fontSize: '14px', fontWeight: '500' }}>Warning</div>
      <Button size="small" type="warning" leadingIcon={<AlertIcon size={14} />}>Warning button</Button>
      <Button size="small" type="warning" className="force-hover" leadingIcon={<AlertIcon size={14} />}>Warning button</Button>
      <Button size="small" type="warning" className="force-clicked" leadingIcon={<AlertIcon size={14} />}>Warning button</Button>
      <Button size="small" type="warning" className="force-focused" leadingIcon={<AlertIcon size={14} />}>Warning button</Button>
      <Button size="small" type="warning" loading>Warning button</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all button states for ghost, error, and warning button types.',
      },
    },
  },
};

// Button type comparison
export const ButtonTypeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Primary Buttons</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="default" type="primary" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
            Primary
          </Button>
          <Button size="default" type="primary" outline leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
            Primary Outline
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Ghost Buttons</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="default" type="ghost" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
            Ghost
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Status Buttons</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="default" type="error" leadingIcon={<CloseCircleIcon size={18} />}>
            Error
          </Button>
          <Button size="default" type="warning" leadingIcon={<AlertIcon size={18} />}>
            Warning
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Secondary Buttons</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="default" type="secondary" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
            Secondary
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Tertiary Buttons</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="default" type="tertiary" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
            Tertiary
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>All Button States Comparison</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ minWidth: '80px', fontSize: '14px', fontWeight: '500' }}>Primary:</span>
            <Button size="default" type="primary" leadingIcon={<AlarmIcon size={18} />}>Default</Button>
            <Button size="default" type="primary" className="force-hover" leadingIcon={<AlarmIcon size={18} />}>Hover</Button>
            <Button size="default" type="primary" loading>Loading</Button>
            <Button size="default" type="primary" disabled leadingIcon={<AlarmIcon size={18} />}>Disabled</Button>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ minWidth: '80px', fontSize: '14px', fontWeight: '500' }}>Ghost:</span>
            <Button size="default" type="ghost" leadingIcon={<AlarmIcon size={18} />}>Default</Button>
            <Button size="default" type="ghost" className="force-hover" leadingIcon={<AlarmIcon size={18} />}>Hover</Button>
            <Button size="default" type="ghost" loading>Loading</Button>
            <Button size="default" type="ghost" disabled leadingIcon={<AlarmIcon size={18} />}>Disabled</Button>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ minWidth: '80px', fontSize: '14px', fontWeight: '500' }}>Error:</span>
            <Button size="default" type="error" leadingIcon={<CloseCircleIcon size={18} />}>Default</Button>
            <Button size="default" type="error" className="force-hover" leadingIcon={<CloseCircleIcon size={18} />}>Hover</Button>
            <Button size="default" type="error" loading>Loading</Button>
            <Button size="default" type="error" disabled leadingIcon={<CloseCircleIcon size={18} />}>Disabled</Button>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ minWidth: '80px', fontSize: '14px', fontWeight: '500' }}>Warning:</span>
            <Button size="default" type="warning" leadingIcon={<AlertIcon size={18} />}>Default</Button>
            <Button size="default" type="warning" className="force-hover" leadingIcon={<AlertIcon size={18} />}>Hover</Button>
            <Button size="default" type="warning" loading>Loading</Button>
            <Button size="default" type="warning" disabled leadingIcon={<AlertIcon size={18} />}>Disabled</Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive comparison of all button types including primary, ghost, error, warning, secondary, and tertiary variants.',
      },
    },
  },
};

// Interactive examples
export const Interactive: Story = {
  render: () => {
    const handleClick = (type: string) => {
      alert(`${type} button clicked!`);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Primary Buttons</h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Button
              size="default"
              type="primary"
              onClick={() => handleClick('Primary')}
              leadingIcon={<AlarmIcon size={18} />}
            >
              Primary
            </Button>

            <Button
              size="default"
              type="primary"
              outline
              onClick={() => handleClick('Primary outline')}
              leadingIcon={<AlarmIcon size={18} />}
            >
              Primary Outline
            </Button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>All Button Types</h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Button
              size="default"
              type="ghost"
              onClick={() => handleClick('Ghost')}
              leadingIcon={<AlarmIcon size={18} />}
            >
              Ghost
            </Button>

            <Button
              size="default"
              type="error"
              onClick={() => handleClick('Error')}
              leadingIcon={<CloseCircleIcon size={18} />}
            >
              Error
            </Button>

            <Button
              size="default"
              type="warning"
              onClick={() => handleClick('Warning')}
              leadingIcon={<AlertIcon size={18} />}
            >
              Warning
            </Button>

            <Button
              size="default"
              type="secondary"
              onClick={() => handleClick('Secondary')}
              leadingIcon={<AlarmIcon size={18} />}
            >
              Secondary
            </Button>

            <Button
              size="default"
              type="tertiary"
              onClick={() => handleClick('Tertiary')}
              leadingIcon={<AlarmIcon size={18} />}
            >
              Tertiary
            </Button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive buttons with click handlers, showcasing all button types.',
      },
    },
  },
};

// Secondary and Tertiary Button Figma Showcase
export const SecondaryTertiaryFigmaShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Secondary & Tertiary Buttons - Figma Design</h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Complete showcase of secondary and tertiary button variants matching exact Figma specifications.
          Features precise colors, borders, shadows, and state transitions.
        </p>
      </div>

      {/* Secondary Buttons Solid */}
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Secondary Buttons - Solid</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', alignItems: 'center' }}>
          {/* Header row */}
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Hover</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Clicked</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Focused</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Loading</div>

          {/* Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <Button size="small" type="secondary" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>Label</Button>
          <Button size="small" type="secondary" state="hover" className="force-hover" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>Label</Button>
          <Button size="small" type="secondary" state="clicked" className="force-clicked" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>Label</Button>
          <Button size="small" type="secondary" state="focused" className="force-focused" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>Label</Button>
          <Button size="small" type="secondary" loading>Label</Button>

          {/* Default row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <Button size="default" type="secondary" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>Label</Button>
          <Button size="default" type="secondary" state="hover" className="force-hover" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>Label</Button>
          <Button size="default" type="secondary" state="clicked" className="force-clicked" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>Label</Button>
          <Button size="default" type="secondary" state="focused" className="force-focused" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>Label</Button>
          <Button size="default" type="secondary" loading>Label</Button>

          {/* Large row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <Button size="large" type="secondary" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>Label</Button>
          <Button size="large" type="secondary" state="hover" className="force-hover" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>Label</Button>
          <Button size="large" type="secondary" state="clicked" className="force-clicked" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>Label</Button>
          <Button size="large" type="secondary" state="focused" className="force-focused" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>Label</Button>
          <Button size="large" type="secondary" loading>Label</Button>
        </div>
      </div>

      {/* Secondary Buttons Outline */}
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Secondary Buttons - Outline</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', alignItems: 'center' }}>
          {/* Header row */}
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Hover</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Clicked</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Focused</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Loading</div>

          {/* Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <Button size="small" type="secondary" outline leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>Label</Button>
          <Button size="small" type="secondary" outline state="hover" className="force-hover" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>Label</Button>
          <Button size="small" type="secondary" outline state="clicked" className="force-clicked" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>Label</Button>
          <Button size="small" type="secondary" outline state="focused" className="force-focused" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>Label</Button>
          <Button size="small" type="secondary" outline loading>Label</Button>

          {/* Default row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <Button size="default" type="secondary" outline leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>Label</Button>
          <Button size="default" type="secondary" outline state="hover" className="force-hover" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>Label</Button>
          <Button size="default" type="secondary" outline state="clicked" className="force-clicked" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>Label</Button>
          <Button size="default" type="secondary" outline state="focused" className="force-focused" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>Label</Button>
          <Button size="default" type="secondary" outline loading>Label</Button>

          {/* Large row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <Button size="large" type="secondary" outline leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>Label</Button>
          <Button size="large" type="secondary" outline state="hover" className="force-hover" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>Label</Button>
          <Button size="large" type="secondary" outline state="clicked" className="force-clicked" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>Label</Button>
          <Button size="large" type="secondary" outline state="focused" className="force-focused" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>Label</Button>
          <Button size="large" type="secondary" outline loading>Label</Button>
        </div>
      </div>

      {/* Tertiary Buttons Solid */}
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Tertiary Buttons - Solid</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', alignItems: 'center' }}>
          {/* Header row */}
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Hover</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Clicked</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Focused</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Loading</div>

          {/* Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <Button size="small" type="tertiary" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>Label</Button>
          <Button size="small" type="tertiary" state="hover" className="force-hover" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>Label</Button>
          <Button size="small" type="tertiary" state="clicked" className="force-clicked" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>Label</Button>
          <Button size="small" type="tertiary" state="focused" className="force-focused" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>Label</Button>
          <Button size="small" type="tertiary" loading>Label</Button>

          {/* Default row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <Button size="default" type="tertiary" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>Label</Button>
          <Button size="default" type="tertiary" state="hover" className="force-hover" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>Label</Button>
          <Button size="default" type="tertiary" state="clicked" className="force-clicked" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>Label</Button>
          <Button size="default" type="tertiary" state="focused" className="force-focused" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>Label</Button>
          <Button size="default" type="tertiary" loading>Label</Button>

          {/* Large row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <Button size="large" type="tertiary" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>Label</Button>
          <Button size="large" type="tertiary" state="hover" className="force-hover" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>Label</Button>
          <Button size="large" type="tertiary" state="clicked" className="force-clicked" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>Label</Button>
          <Button size="large" type="tertiary" state="focused" className="force-focused" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>Label</Button>
          <Button size="large" type="tertiary" loading>Label</Button>
        </div>
      </div>

      {/* Icon-only Tertiary Buttons */}
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Tertiary Icon-Only Buttons</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', alignItems: 'center' }}>
          {/* Header row */}
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Hover</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Clicked</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Focused</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Loading</div>

          {/* Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <Button size="small" type="tertiary" iconOnly icon={<AlarmIcon size={14} />} />
          <Button size="small" type="tertiary" iconOnly state="hover" className="force-hover" icon={<AlarmIcon size={14} />} />
          <Button size="small" type="tertiary" iconOnly state="clicked" className="force-clicked" icon={<AlarmIcon size={14} />} />
          <Button size="small" type="tertiary" iconOnly state="focused" className="force-focused" icon={<AlarmIcon size={14} />} />
          <Button size="small" type="tertiary" iconOnly loading />

          {/* Default row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <Button size="default" type="tertiary" iconOnly icon={<AlarmIcon size={18} />} />
          <Button size="default" type="tertiary" iconOnly state="hover" className="force-hover" icon={<AlarmIcon size={18} />} />
          <Button size="default" type="tertiary" iconOnly state="clicked" className="force-clicked" icon={<AlarmIcon size={18} />} />
          <Button size="default" type="tertiary" iconOnly state="focused" className="force-focused" icon={<AlarmIcon size={18} />} />
          <Button size="default" type="tertiary" iconOnly loading />

          {/* Large row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <Button size="large" type="tertiary" iconOnly icon={<AlarmIcon size={20} />} />
          <Button size="large" type="tertiary" iconOnly state="hover" className="force-hover" icon={<AlarmIcon size={20} />} />
          <Button size="large" type="tertiary" iconOnly state="clicked" className="force-clicked" icon={<AlarmIcon size={20} />} />
          <Button size="large" type="tertiary" iconOnly state="focused" className="force-focused" icon={<AlarmIcon size={20} />} />
          <Button size="large" type="tertiary" iconOnly loading />
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Design Specifications</h4>
        <div style={{
          background: '#f8f9fa',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '14px',
          fontFamily: 'monospace'
        }}>
          <div style={{ marginBottom: '8px' }}><strong>Secondary Solid:</strong> Background #D6F0FB, Border #0BA7EA</div>
          <div style={{ marginBottom: '8px' }}><strong>Secondary Outline:</strong> Background white, Border #0BA7EA</div>
          <div style={{ marginBottom: '8px' }}><strong>Tertiary Solid:</strong> Background #AED2BC, Border #4B6D58</div>
          <div style={{ marginBottom: '8px' }}><strong>Tertiary Icon-only:</strong> Background #8BBF9F, Border #8BBF9F</div>
          <div style={{ marginBottom: '8px' }}><strong>Hover/Clicked:</strong> Box shadow 1px 1px 0 0 #6171DF</div>
          <div style={{ marginBottom: '8px' }}><strong>Font Weight:</strong> Light (300) default, Medium (500) on hover/clicked</div>
          <div><strong>Disabled:</strong> Background #F9FAFB, Border #E5E7EB, Text #D2D5DA</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of secondary and tertiary button variants matching exact Figma design specifications with precise colors, borders, shadows, and state transitions.',
      },
    },
  },
};

// Complete design system showcase
// Error Button Figma Showcase
export const ErrorButtonsFigmaShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Error Buttons - Figma Design</h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Error buttons with distinctive drop shadow effect, matching exact Figma specifications.
          Features #CE2031 background, #FFF3F3 border, and 3px solid drop shadow.
        </p>
      </div>

      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Error Button States - Hover vs Clicked</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'center' }}>
          {/* Header row */}
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Hover (Bold)</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Clicked (Medium)</div>

          {/* Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <Button size="small" type="error" state="hover" leadingIcon={<CloseCircleIcon size={14} />}>
            Error button
          </Button>
          <Button size="small" type="error" state="clicked" leadingIcon={<CloseCircleIcon size={14} />}>
            Error button
          </Button>

          {/* Default row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <Button size="default" type="error" state="hover" leadingIcon={<CloseCircleIcon size={18} />}>
            Error button
          </Button>
          <Button size="default" type="error" state="clicked" leadingIcon={<CloseCircleIcon size={18} />}>
            Error button
          </Button>

          {/* Large row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <Button size="large" type="error" state="hover" leadingIcon={<CloseCircleIcon size={20} />}>
            Error button
          </Button>
          <Button size="large" type="error" state="clicked" leadingIcon={<CloseCircleIcon size={20} />}>
            Error button
          </Button>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>All Error Button Sizes</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="small" type="error" leadingIcon={<CloseCircleIcon size={14} />}>
            Small Error
          </Button>
          <Button size="default" type="error" leadingIcon={<CloseCircleIcon size={18} />}>
            Default Error
          </Button>
          <Button size="large" type="error" leadingIcon={<CloseCircleIcon size={20} />}>
            Large Error
          </Button>
        </div>
        <p style={{ fontSize: '12px', color: '#666', margin: '8px 0 0 0' }}>
          All sizes feature 3px solid drop shadow in #CE2031 and #FFF3F3 border
        </p>
      </div>

      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Interactive Demo</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button
            size="default"
            type="error"
            leadingIcon={<CloseCircleIcon size={18} />}
            onClick={() => alert('Error button clicked!')}
          >
            Click Me
          </Button>
          <Button size="default" type="error" loading>
            Loading...
          </Button>
          <Button size="default" type="error" disabled leadingIcon={<CloseCircleIcon size={18} />}>
            Disabled
          </Button>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Design Specifications</h4>
        <div style={{
          background: '#f8f9fa',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '14px',
          fontFamily: 'monospace'
        }}>
          <div style={{ marginBottom: '8px' }}><strong>Background:</strong> #CE2031 (--status-red)</div>
          <div style={{ marginBottom: '8px' }}><strong>Border:</strong> 2px solid #FFF3F3 (--status-red-light-alt)</div>
          <div style={{ marginBottom: '8px' }}><strong>Box Shadow:</strong> 3px 3px 0 0 #CE2031</div>
          <div style={{ marginBottom: '8px' }}><strong>Text Color:</strong> #FFFFFF (white)</div>
          <div style={{ marginBottom: '8px' }}><strong>Icon:</strong> Close circle, white fill, 0.6 opacity</div>
          <div style={{ marginBottom: '8px' }}><strong>Font Weight Hover:</strong> 700 (bold)</div>
          <div><strong>Font Weight Clicked:</strong> 500 (medium)</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of error buttons matching the exact Figma design specifications with distinctive drop shadow effects and proper font weight variations.',
      },
    },
  },
};

export const DesignSystemShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Primary Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="extra-small" type="primary" leadingIcon={<AlarmIcon size={14} />}>
            Extra Small
          </Button>
          <Button size="small" type="primary" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
            Small
          </Button>
          <Button size="default" type="primary" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
            Default
          </Button>
          <Button size="large" type="primary" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
            Large
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Ghost Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="extra-small" type="ghost" leadingIcon={<AlarmIcon size={14} />}>
            Extra Small
          </Button>
          <Button size="small" type="ghost" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
            Small
          </Button>
          <Button size="default" type="ghost" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
            Default
          </Button>
          <Button size="large" type="ghost" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
            Large
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Error Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="small" type="error" leadingIcon={<CloseCircleIcon size={14} />}>
            Error Small
          </Button>
          <Button size="default" type="error" leadingIcon={<CloseCircleIcon size={18} />}>
            Error Default
          </Button>
          <Button size="large" type="error" leadingIcon={<CloseCircleIcon size={20} />}>
            Error Large
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Warning Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="small" type="warning" leadingIcon={<AlertIcon size={14} />}>
            Warning Small
          </Button>
          <Button size="default" type="warning" leadingIcon={<AlertIcon size={18} />}>
            Warning Default
          </Button>
          <Button size="large" type="warning" leadingIcon={<AlertIcon size={20} />}>
            Warning Large
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Secondary Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="extra-small" type="secondary" leadingIcon={<AlarmIcon size={14} />}>
            Extra Small
          </Button>
          <Button size="small" type="secondary" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
            Small
          </Button>
          <Button size="default" type="secondary" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
            Default
          </Button>
          <Button size="large" type="secondary" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
            Large
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Tertiary Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="small" type="tertiary" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
            Small
          </Button>
          <Button size="default" type="tertiary" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
            Default
          </Button>
          <Button size="large" type="tertiary" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
            Large
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Tertiary Outline Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="small" type="tertiary" outline leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
            Small
          </Button>
          <Button size="default" type="tertiary" outline leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
            Default
          </Button>
          <Button size="large" type="tertiary" outline leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
            Large
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Icon-Only Primary Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="extra-small" type="primary" iconOnly icon={<AlarmIcon size={14} />} />
          <Button size="small" type="primary" iconOnly icon={<AlarmIcon size={14} />} />
          <Button size="default" type="primary" iconOnly icon={<AlarmIcon size={18} />} />
          <Button size="large" type="primary" iconOnly icon={<AlarmIcon size={20} />} />
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Icon-Only Secondary Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="extra-small" type="secondary" iconOnly icon={<AlarmIcon size={14} />} />
          <Button size="small" type="secondary" iconOnly icon={<AlarmIcon size={14} />} />
          <Button size="default" type="secondary" iconOnly icon={<AlarmIcon size={18} />} />
          <Button size="large" type="secondary" iconOnly icon={<AlarmIcon size={20} />} />
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Icon-Only Tertiary Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="small" type="tertiary" iconOnly icon={<AlarmIcon size={14} />} />
          <Button size="default" type="tertiary" iconOnly icon={<AlarmIcon size={18} />} />
          <Button size="large" type="tertiary" iconOnly icon={<AlarmIcon size={20} />} />
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Icon-Only Button States Comparison</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ minWidth: '80px', fontSize: '14px', fontWeight: '500' }}>Primary:</span>
            <Button size="default" type="primary" iconOnly icon={<AlarmIcon size={18} />} />
            <Button size="default" type="primary" iconOnly className="force-hover" icon={<AlarmIcon size={18} />} />
            <Button size="default" type="primary" iconOnly loading />
            <Button size="default" type="primary" iconOnly disabled icon={<AlarmIcon size={18} />} />
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ minWidth: '80px', fontSize: '14px', fontWeight: '500' }}>Secondary:</span>
            <Button size="default" type="secondary" iconOnly icon={<AlarmIcon size={18} />} />
            <Button size="default" type="secondary" iconOnly className="force-hover" icon={<AlarmIcon size={18} />} />
            <Button size="default" type="secondary" iconOnly loading />
            <Button size="default" type="secondary" iconOnly disabled icon={<AlarmIcon size={18} />} />
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Interactive States</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="default" type="primary" leadingIcon={<AlarmIcon size={18} />}>
            Primary
          </Button>
          <Button size="default" type="ghost" leadingIcon={<AlarmIcon size={18} />}>
            Ghost
          </Button>
          <Button size="default" type="error" leadingIcon={<CloseCircleIcon size={18} />}>
            Error
          </Button>
          <Button size="default" type="warning" leadingIcon={<AlertIcon size={18} />}>
            Warning
          </Button>
          <Button size="default" type="info" leadingIcon={<InformationIcon size={18} />}>
            Info
          </Button>
          <Button size="default" type="success" leadingIcon={<InformationIcon size={18} />}>
            Success
          </Button>
          <Button size="default" type="secondary" leadingIcon={<AlarmIcon size={18} />}>
            Secondary
          </Button>
          <Button size="default" type="tertiary" leadingIcon={<AlarmIcon size={18} />}>
            Tertiary
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete design system showcase with all button variants and states, including ghost, error, warning, info, success, primary, secondary, and tertiary buttons.',
      },
    },
  },
};

// Info button examples
export const InfoDefault: Story = {
  args: {
    children: 'Info button',
    size: 'small',
    type: 'info',
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const InfoDefaultMedium: Story = {
  args: {
    children: 'Info button',
    size: 'default',
    type: 'info',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const InfoDefaultLarge: Story = {
  args: {
    children: 'Info button',
    size: 'large',
    type: 'info',
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const InfoHover: Story = {
  args: {
    children: 'Info button',
    size: 'small',
    type: 'info',
    state: 'hover',
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const InfoHoverMedium: Story = {
  args: {
    children: 'Info button',
    size: 'default',
    type: 'info',
    state: 'hover',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const InfoHoverLarge: Story = {
  args: {
    children: 'Info button',
    size: 'large',
    type: 'info',
    state: 'hover',
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const InfoClicked: Story = {
  args: {
    children: 'Info button',
    size: 'small',
    type: 'info',
    state: 'clicked',
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const InfoClickedMedium: Story = {
  args: {
    children: 'Info button',
    size: 'default',
    type: 'info',
    state: 'clicked',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const InfoClickedLarge: Story = {
  args: {
    children: 'Info button',
    size: 'large',
    type: 'info',
    state: 'clicked',
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const InfoFocused: Story = {
  args: {
    children: 'Info button',
    size: 'small',
    type: 'info',
    state: 'focused',
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const InfoFocusedMedium: Story = {
  args: {
    children: 'Info button',
    size: 'default',
    type: 'info',
    state: 'focused',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const InfoFocusedLarge: Story = {
  args: {
    children: 'Info button',
    size: 'large',
    type: 'info',
    state: 'focused',
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const InfoLoading: Story = {
  args: {
    children: 'Info button',
    size: 'small',
    type: 'info',
    loading: true,
  },
};

export const InfoLoadingMedium: Story = {
  args: {
    children: 'Info button',
    size: 'default',
    type: 'info',
    loading: true,
  },
};

export const InfoLoadingLarge: Story = {
  args: {
    children: 'Info button',
    size: 'large',
    type: 'info',
    loading: true,
  },
};

export const InfoDisabled: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'info',
    disabled: true,
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const InfoDisabledMedium: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'info',
    disabled: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const InfoDisabledLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'info',
    disabled: true,
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

// Success button examples
export const SuccessDefault: Story = {
  args: {
    children: 'Success button',
    size: 'small',
    type: 'success',
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const SuccessDefaultMedium: Story = {
  args: {
    children: 'Success button',
    size: 'default',
    type: 'success',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const SuccessDefaultLarge: Story = {
  args: {
    children: 'Success button',
    size: 'large',
    type: 'success',
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const SuccessHover: Story = {
  args: {
    children: 'Success button',
    size: 'small',
    type: 'success',
    state: 'hover',
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const SuccessHoverMedium: Story = {
  args: {
    children: 'Success button',
    size: 'default',
    type: 'success',
    state: 'hover',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const SuccessHoverLarge: Story = {
  args: {
    children: 'Success button',
    size: 'large',
    type: 'success',
    state: 'hover',
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const SuccessClicked: Story = {
  args: {
    children: 'Success button',
    size: 'small',
    type: 'success',
    state: 'clicked',
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const SuccessClickedMedium: Story = {
  args: {
    children: 'Success button',
    size: 'default',
    type: 'success',
    state: 'clicked',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const SuccessClickedLarge: Story = {
  args: {
    children: 'Success button',
    size: 'large',
    type: 'success',
    state: 'clicked',
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const SuccessFocused: Story = {
  args: {
    children: 'Success button',
    size: 'small',
    type: 'success',
    state: 'focused',
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const SuccessFocusedMedium: Story = {
  args: {
    children: 'Success button',
    size: 'default',
    type: 'success',
    state: 'focused',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const SuccessFocusedLarge: Story = {
  args: {
    children: 'Success button',
    size: 'large',
    type: 'success',
    state: 'focused',
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const SuccessLoading: Story = {
  args: {
    children: 'Success button',
    size: 'small',
    type: 'success',
    loading: true,
  },
};

export const SuccessLoadingMedium: Story = {
  args: {
    children: 'Success button',
    size: 'default',
    type: 'success',
    loading: true,
  },
};

export const SuccessLoadingLarge: Story = {
  args: {
    children: 'Success button',
    size: 'large',
    type: 'success',
    loading: true,
  },
};

export const SuccessDisabled: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'success',
    disabled: true,
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const SuccessDisabledMedium: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'success',
    disabled: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const SuccessDisabledLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'success',
    disabled: true,
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

// Info outline button examples
export const InfoOutlineSmall: Story = {
  args: {
    children: 'Info button',
    size: 'small',
    type: 'info',
    outline: true,
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const InfoOutlineDefault: Story = {
  args: {
    children: 'Info button',
    size: 'default',
    type: 'info',
    outline: true,
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const InfoOutlineLarge: Story = {
  args: {
    children: 'Info button',
    size: 'large',
    type: 'info',
    outline: true,
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const InfoOutlineHover: Story = {
  args: {
    children: 'Info button',
    size: 'small',
    type: 'info',
    outline: true,
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const InfoOutlineHoverMedium: Story = {
  args: {
    children: 'Info button',
    size: 'default',
    type: 'info',
    outline: true,
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const InfoOutlineHoverLarge: Story = {
  args: {
    children: 'Info button',
    size: 'large',
    type: 'info',
    outline: true,
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const InfoOutlineClicked: Story = {
  args: {
    children: 'Info button',
    size: 'small',
    type: 'info',
    outline: true,
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const InfoOutlineClickedMedium: Story = {
  args: {
    children: 'Info button',
    size: 'default',
    type: 'info',
    outline: true,
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const InfoOutlineClickedLarge: Story = {
  args: {
    children: 'Info button',
    size: 'large',
    type: 'info',
    outline: true,
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const InfoOutlineFocused: Story = {
  args: {
    children: 'Info button',
    size: 'small',
    type: 'info',
    outline: true,
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const InfoOutlineFocusedMedium: Story = {
  args: {
    children: 'Info button',
    size: 'default',
    type: 'info',
    outline: true,
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const InfoOutlineFocusedLarge: Story = {
  args: {
    children: 'Info button',
    size: 'large',
    type: 'info',
    outline: true,
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const InfoOutlineLoading: Story = {
  args: {
    children: 'Info button',
    size: 'small',
    type: 'info',
    outline: true,
    loading: true,
  },
};

export const InfoOutlineLoadingMedium: Story = {
  args: {
    children: 'Info button',
    size: 'default',
    type: 'info',
    outline: true,
    loading: true,
  },
};

export const InfoOutlineLoadingLarge: Story = {
  args: {
    children: 'Info button',
    size: 'large',
    type: 'info',
    outline: true,
    loading: true,
  },
};

export const InfoOutlineDisabled: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'info',
    outline: true,
    disabled: true,
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const InfoOutlineDisabledMedium: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'info',
    outline: true,
    disabled: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const InfoOutlineDisabledLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'info',
    outline: true,
    disabled: true,
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

// Success outline button examples
export const SuccessOutlineSmall: Story = {
  args: {
    children: 'Success button',
    size: 'small',
    type: 'success',
    outline: true,
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const SuccessOutlineDefault: Story = {
  args: {
    children: 'Success button',
    size: 'default',
    type: 'success',
    outline: true,
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const SuccessOutlineLarge: Story = {
  args: {
    children: 'Success button',
    size: 'large',
    type: 'success',
    outline: true,
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const SuccessOutlineHover: Story = {
  args: {
    children: 'Success button',
    size: 'small',
    type: 'success',
    outline: true,
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const SuccessOutlineHoverMedium: Story = {
  args: {
    children: 'Success button',
    size: 'default',
    type: 'success',
    outline: true,
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const SuccessOutlineHoverLarge: Story = {
  args: {
    children: 'Success button',
    size: 'large',
    type: 'success',
    outline: true,
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const SuccessOutlineClicked: Story = {
  args: {
    children: 'Success button',
    size: 'small',
    type: 'success',
    outline: true,
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const SuccessOutlineClickedMedium: Story = {
  args: {
    children: 'Success button',
    size: 'default',
    type: 'success',
    outline: true,
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const SuccessOutlineClickedLarge: Story = {
  args: {
    children: 'Success button',
    size: 'large',
    type: 'success',
    outline: true,
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const SuccessOutlineFocused: Story = {
  args: {
    children: 'Success button',
    size: 'small',
    type: 'success',
    outline: true,
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <InformationIcon size={14} />,
  },
};

export const SuccessOutlineFocusedMedium: Story = {
  args: {
    children: 'Success button',
    size: 'default',
    type: 'success',
    outline: true,
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <InformationIcon size={18} />,
  },
};

export const SuccessOutlineFocusedLarge: Story = {
  args: {
    children: 'Success button',
    size: 'large',
    type: 'success',
    outline: true,
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <InformationIcon size={20} />,
  },
};

export const SuccessOutlineLoading: Story = {
  args: {
    children: 'Success button',
    size: 'small',
    type: 'success',
    outline: true,
    loading: true,
  },
};

export const SuccessOutlineLoadingMedium: Story = {
  args: {
    children: 'Success button',
    size: 'default',
    type: 'success',
    outline: true,
    loading: true,
  },
};

export const SuccessOutlineLoadingLarge: Story = {
  args: {
    children: 'Success button',
    size: 'large',
    type: 'success',
    outline: true,
    loading: true,
  },
};

export const SuccessOutlineDisabled: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'success',
    outline: true,
    disabled: true,
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const SuccessOutlineDisabledMedium: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'success',
    outline: true,
    disabled: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const SuccessOutlineDisabledLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'success',
    outline: true,
    disabled: true,
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

// Tertiary outline button examples
export const TertiaryOutlineDefaultSmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'tertiary',
    outline: true,
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const TertiaryOutlineDefaultMedium: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryOutlineDefaultLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'tertiary',
    outline: true,
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

export const TertiaryOutlineHoverSmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'tertiary',
    outline: true,
    state: 'hover',
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const TertiaryOutlineHoverMedium: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    state: 'hover',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryOutlineHoverLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'tertiary',
    outline: true,
    state: 'hover',
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

export const TertiaryOutlineClickedSmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'tertiary',
    outline: true,
    state: 'clicked',
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const TertiaryOutlineClickedMedium: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    state: 'clicked',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryOutlineClickedLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'tertiary',
    outline: true,
    state: 'clicked',
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

export const TertiaryOutlineFocusedSmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'tertiary',
    outline: true,
    state: 'focused',
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const TertiaryOutlineFocusedMedium: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    state: 'focused',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryOutlineFocusedLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'tertiary',
    outline: true,
    state: 'focused',
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

export const TertiaryOutlineLoadingSmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'tertiary',
    outline: true,
    loading: true,
  },
};

// Icon-only button variants - Primary
export const IconOnlyPrimaryExtraSmall: Story = {
  args: {
    size: 'extra-small',
    type: 'primary',
    iconOnly: true,
    icon: <AlarmIcon size={14} />,
  },
};

export const IconOnlyPrimarySmall: Story = {
  args: {
    size: 'small',
    type: 'primary',
    iconOnly: true,
    icon: <AlarmIcon size={14} />,
  },
};

export const IconOnlyPrimaryDefault: Story = {
  args: {
    size: 'default',
    type: 'primary',
    iconOnly: true,
    icon: <AlarmIcon size={18} />,
  },
};

export const IconOnlyPrimaryLarge: Story = {
  args: {
    size: 'large',
    type: 'primary',
    iconOnly: true,
    icon: <AlarmIcon size={20} />,
  },
};

// Icon-only button variants - Primary Hover
export const IconOnlyPrimarySmallHover: Story = {
  args: {
    size: 'small',
    type: 'primary',
    iconOnly: true,
    state: 'hover',
    className: 'force-hover',
    icon: <AlarmIcon size={14} />,
  },
};

export const IconOnlyPrimaryDefaultHover: Story = {
  args: {
    size: 'default',
    type: 'primary',
    iconOnly: true,
    state: 'hover',
    className: 'force-hover',
    icon: <AlarmIcon size={18} />,
  },
};

export const IconOnlyPrimaryLargeHover: Story = {
  args: {
    size: 'large',
    type: 'primary',
    iconOnly: true,
    state: 'hover',
    className: 'force-hover',
    icon: <AlarmIcon size={20} />,
  },
};

// Icon-only button variants - Primary Clicked
export const IconOnlyPrimarySmallClicked: Story = {
  args: {
    size: 'small',
    type: 'primary',
    iconOnly: true,
    state: 'clicked',
    className: 'force-clicked',
    icon: <AlarmIcon size={14} />,
  },
};

export const IconOnlyPrimaryDefaultClicked: Story = {
  args: {
    size: 'default',
    type: 'primary',
    iconOnly: true,
    state: 'clicked',
    className: 'force-clicked',
    icon: <AlarmIcon size={18} />,
  },
};

export const IconOnlyPrimaryLargeClicked: Story = {
  args: {
    size: 'large',
    type: 'primary',
    iconOnly: true,
    state: 'clicked',
    className: 'force-clicked',
    icon: <AlarmIcon size={20} />,
  },
};

// Icon-only button variants - Primary Focused
export const IconOnlyPrimarySmallFocused: Story = {
  args: {
    size: 'small',
    type: 'primary',
    iconOnly: true,
    state: 'focused',
    className: 'force-focused',
    icon: <AlarmIcon size={14} />,
  },
};

export const IconOnlyPrimaryDefaultFocused: Story = {
  args: {
    size: 'default',
    type: 'primary',
    iconOnly: true,
    state: 'focused',
    className: 'force-focused',
    icon: <AlarmIcon size={18} />,
  },
};

export const IconOnlyPrimaryLargeFocused: Story = {
  args: {
    size: 'large',
    type: 'primary',
    iconOnly: true,
    state: 'focused',
    className: 'force-focused',
    icon: <AlarmIcon size={20} />,
  },
};

// Icon-only button variants - Primary Loading
export const IconOnlyPrimarySmallLoading: Story = {
  args: {
    size: 'small',
    type: 'primary',
    iconOnly: true,
    loading: true,
  },
};

export const IconOnlyPrimaryDefaultLoading: Story = {
  args: {
    size: 'default',
    type: 'primary',
    iconOnly: true,
    loading: true,
  },
};

export const IconOnlyPrimaryLargeLoading: Story = {
  args: {
    size: 'large',
    type: 'primary',
    iconOnly: true,
    loading: true,
  },
};

// Icon-only button variants - Primary Disabled
export const IconOnlyPrimarySmallDisabled: Story = {
  args: {
    size: 'small',
    type: 'primary',
    iconOnly: true,
    disabled: true,
    icon: <AlarmIcon size={14} />,
  },
};

export const IconOnlyPrimaryDefaultDisabled: Story = {
  args: {
    size: 'default',
    type: 'primary',
    iconOnly: true,
    disabled: true,
    icon: <AlarmIcon size={18} />,
  },
};

export const IconOnlyPrimaryLargeDisabled: Story = {
  args: {
    size: 'large',
    type: 'primary',
    iconOnly: true,
    disabled: true,
    icon: <AlarmIcon size={20} />,
  },
};

// Icon-only button variants - Secondary
export const IconOnlySecondaryExtraSmall: Story = {
  args: {
    size: 'extra-small',
    type: 'secondary',
    iconOnly: true,
    icon: <AlarmIcon size={14} />,
  },
};

export const IconOnlySecondarySmall: Story = {
  args: {
    size: 'small',
    type: 'secondary',
    iconOnly: true,
    icon: <AlarmIcon size={14} />,
  },
};

export const IconOnlySecondaryDefault: Story = {
  args: {
    size: 'default',
    type: 'secondary',
    iconOnly: true,
    icon: <AlarmIcon size={18} />,
  },
};

export const IconOnlySecondaryLarge: Story = {
  args: {
    size: 'large',
    type: 'secondary',
    iconOnly: true,
    icon: <AlarmIcon size={20} />,
  },
};

// Icon-only button variants - Secondary Hover
export const IconOnlySecondarySmallHover: Story = {
  args: {
    size: 'small',
    type: 'secondary',
    iconOnly: true,
    state: 'hover',
    className: 'force-hover',
    icon: <AlarmIcon size={14} />,
  },
};

export const IconOnlySecondaryDefaultHover: Story = {
  args: {
    size: 'default',
    type: 'secondary',
    iconOnly: true,
    state: 'hover',
    className: 'force-hover',
    icon: <AlarmIcon size={18} />,
  },
};

export const IconOnlySecondaryLargeHover: Story = {
  args: {
    size: 'large',
    type: 'secondary',
    iconOnly: true,
    state: 'hover',
    className: 'force-hover',
    icon: <AlarmIcon size={20} />,
  },
};

// Icon-only button variants - Secondary Clicked
export const IconOnlySecondarySmallClicked: Story = {
  args: {
    size: 'small',
    type: 'secondary',
    iconOnly: true,
    state: 'clicked',
    className: 'force-clicked',
    icon: <AlarmIcon size={14} />,
  },
};

export const IconOnlySecondaryDefaultClicked: Story = {
  args: {
    size: 'default',
    type: 'secondary',
    iconOnly: true,
    state: 'clicked',
    className: 'force-clicked',
    icon: <AlarmIcon size={18} />,
  },
};

export const IconOnlySecondaryLargeClicked: Story = {
  args: {
    size: 'large',
    type: 'secondary',
    iconOnly: true,
    state: 'clicked',
    className: 'force-clicked',
    icon: <AlarmIcon size={20} />,
  },
};

// Icon-only button variants - Secondary Focused
export const IconOnlySecondarySmallFocused: Story = {
  args: {
    size: 'small',
    type: 'secondary',
    iconOnly: true,
    state: 'focused',
    className: 'force-focused',
    icon: <AlarmIcon size={14} />,
  },
};

export const IconOnlySecondaryDefaultFocused: Story = {
  args: {
    size: 'default',
    type: 'secondary',
    iconOnly: true,
    state: 'focused',
    className: 'force-focused',
    icon: <AlarmIcon size={18} />,
  },
};

export const IconOnlySecondaryLargeFocused: Story = {
  args: {
    size: 'large',
    type: 'secondary',
    iconOnly: true,
    state: 'focused',
    className: 'force-focused',
    icon: <AlarmIcon size={20} />,
  },
};

// Icon-only button variants - Secondary Loading
export const IconOnlySecondarySmallLoading: Story = {
  args: {
    size: 'small',
    type: 'secondary',
    iconOnly: true,
    loading: true,
  },
};

export const IconOnlySecondaryDefaultLoading: Story = {
  args: {
    size: 'default',
    type: 'secondary',
    iconOnly: true,
    loading: true,
  },
};

export const IconOnlySecondaryLargeLoading: Story = {
  args: {
    size: 'large',
    type: 'secondary',
    iconOnly: true,
    loading: true,
  },
};

// Icon-only button variants - Secondary Disabled
export const IconOnlySecondarySmallDisabled: Story = {
  args: {
    size: 'small',
    type: 'secondary',
    iconOnly: true,
    disabled: true,
    icon: <AlarmIcon size={14} />,
  },
};

export const IconOnlySecondaryDefaultDisabled: Story = {
  args: {
    size: 'default',
    type: 'secondary',
    iconOnly: true,
    disabled: true,
    icon: <AlarmIcon size={18} />,
  },
};

export const IconOnlySecondaryLargeDisabled: Story = {
  args: {
    size: 'large',
    type: 'secondary',
    iconOnly: true,
    disabled: true,
    icon: <AlarmIcon size={20} />,
  },
};

// Comprehensive icon-only button showcase that matches the Figma design
export const IconOnlyButtonsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Primary Icon-Only Buttons</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px', alignItems: 'center' }}>
          {/* Header row */}
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Hover</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Clicked</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Focused</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Loading</div>

          {/* Extra Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Extra Small</div>
          <Button size="extra-small" type="primary" iconOnly icon={<AlarmIcon size={14} />} />
          <Button size="extra-small" type="primary" iconOnly className="force-hover" icon={<AlarmIcon size={14} />} />
          <Button size="extra-small" type="primary" iconOnly className="force-clicked" icon={<AlarmIcon size={14} />} />
          <Button size="extra-small" type="primary" iconOnly className="force-focused" icon={<AlarmIcon size={14} />} />
          <Button size="extra-small" type="primary" iconOnly loading />

          {/* Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <Button size="small" type="primary" iconOnly icon={<AlarmIcon size={14} />} />
          <Button size="small" type="primary" iconOnly className="force-hover" icon={<AlarmIcon size={14} />} />
          <Button size="small" type="primary" iconOnly className="force-clicked" icon={<AlarmIcon size={14} />} />
          <Button size="small" type="primary" iconOnly className="force-focused" icon={<AlarmIcon size={14} />} />
          <Button size="small" type="primary" iconOnly loading />

          {/* Default row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <Button size="default" type="primary" iconOnly icon={<AlarmIcon size={18} />} />
          <Button size="default" type="primary" iconOnly className="force-hover" icon={<AlarmIcon size={18} />} />
          <Button size="default" type="primary" iconOnly className="force-clicked" icon={<AlarmIcon size={18} />} />
          <Button size="default" type="primary" iconOnly className="force-focused" icon={<AlarmIcon size={18} />} />
          <Button size="default" type="primary" iconOnly loading />

          {/* Large row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <Button size="large" type="primary" iconOnly icon={<AlarmIcon size={20} />} />
          <Button size="large" type="primary" iconOnly className="force-hover" icon={<AlarmIcon size={20} />} />
          <Button size="large" type="primary" iconOnly className="force-clicked" icon={<AlarmIcon size={20} />} />
          <Button size="large" type="primary" iconOnly className="force-focused" icon={<AlarmIcon size={20} />} />
          <Button size="large" type="primary" iconOnly loading />
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Secondary Icon-Only Buttons</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px', alignItems: 'center' }}>
          {/* Header row */}
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Hover</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Clicked</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Focused</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Loading</div>

          {/* Extra Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Extra Small</div>
          <Button size="extra-small" type="secondary" iconOnly icon={<AlarmIcon size={14} />} />
          <Button size="extra-small" type="secondary" iconOnly className="force-hover" icon={<AlarmIcon size={14} />} />
          <Button size="extra-small" type="secondary" iconOnly className="force-clicked" icon={<AlarmIcon size={14} />} />
          <Button size="extra-small" type="secondary" iconOnly className="force-focused" icon={<AlarmIcon size={14} />} />
          <Button size="extra-small" type="secondary" iconOnly loading />

          {/* Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <Button size="small" type="secondary" iconOnly icon={<AlarmIcon size={14} />} />
          <Button size="small" type="secondary" iconOnly className="force-hover" icon={<AlarmIcon size={14} />} />
          <Button size="small" type="secondary" iconOnly className="force-clicked" icon={<AlarmIcon size={14} />} />
          <Button size="small" type="secondary" iconOnly className="force-focused" icon={<AlarmIcon size={14} />} />
          <Button size="small" type="secondary" iconOnly loading />

          {/* Default row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <Button size="default" type="secondary" iconOnly icon={<AlarmIcon size={18} />} />
          <Button size="default" type="secondary" iconOnly className="force-hover" icon={<AlarmIcon size={18} />} />
          <Button size="default" type="secondary" iconOnly className="force-clicked" icon={<AlarmIcon size={18} />} />
          <Button size="default" type="secondary" iconOnly className="force-focused" icon={<AlarmIcon size={18} />} />
          <Button size="default" type="secondary" iconOnly loading />

          {/* Large row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <Button size="large" type="secondary" iconOnly icon={<AlarmIcon size={20} />} />
          <Button size="large" type="secondary" iconOnly className="force-hover" icon={<AlarmIcon size={20} />} />
          <Button size="large" type="secondary" iconOnly className="force-clicked" icon={<AlarmIcon size={20} />} />
          <Button size="large" type="secondary" iconOnly className="force-focused" icon={<AlarmIcon size={20} />} />
          <Button size="large" type="secondary" iconOnly loading />
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Disabled States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ minWidth: '120px', fontSize: '14px', fontWeight: '500' }}>Primary Disabled:</span>
            <Button size="extra-small" type="primary" iconOnly disabled icon={<AlarmIcon size={14} />} />
            <Button size="small" type="primary" iconOnly disabled icon={<AlarmIcon size={14} />} />
            <Button size="default" type="primary" iconOnly disabled icon={<AlarmIcon size={18} />} />
            <Button size="large" type="primary" iconOnly disabled icon={<AlarmIcon size={20} />} />
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ minWidth: '120px', fontSize: '14px', fontWeight: '500' }}>Secondary Disabled:</span>
            <Button size="extra-small" type="secondary" iconOnly disabled icon={<AlarmIcon size={14} />} />
            <Button size="small" type="secondary" iconOnly disabled icon={<AlarmIcon size={14} />} />
            <Button size="default" type="secondary" iconOnly disabled icon={<AlarmIcon size={18} />} />
            <Button size="large" type="secondary" iconOnly disabled icon={<AlarmIcon size={20} />} />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all icon-only button variants, sizes, and states for both primary and secondary types, matching the Figma design specifications.',
      },
    },
  },
};

export const TertiaryOutlineLoadingMedium: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    loading: true,
  },
};

export const TertiaryOutlineLoadingLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'tertiary',
    outline: true,
    loading: true,
  },
};

export const TertiaryOutlineDisabledSmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'tertiary',
    outline: true,
    disabled: true,
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const TertiaryOutlineDisabledMedium: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    outline: true,
    disabled: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryOutlineDisabledLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'tertiary',
    outline: true,
    disabled: true,
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};
