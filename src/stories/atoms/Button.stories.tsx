import type { Meta, StoryObj } from '@storybook/react';
import { Button, AlarmIcon, ArrowDownIcon } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Primary button component with multiple sizes, states, and icon support. Matches the Figma design system specifications.',
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
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Button type/variant',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'clicked', 'focused', 'loading', 'disabled'],
      description: 'Visual state (for controlled states)',
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

export const ClickedState: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const FocusedState: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    state: 'focused',
    className: 'force-focused',
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

// All sizes comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Extra Small</h4>
        <Button size="extra-small" type="primary" leadingIcon={<AlarmIcon size={14} />}>
          Button w/ leading icon
        </Button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Small</h4>
        <Button size="small" type="primary" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <Button size="default" type="primary" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
          Label
        </Button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <Button size="large" type="primary" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
          Label
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available button sizes with appropriate icons.',
      },
    },
  },
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'center' }}>
      {/* Small size row */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Small - Default</h4>
        <Button size="small" type="primary" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Small - Hover</h4>
        <Button size="small" type="primary" className="force-hover" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Small - Clicked</h4>
        <Button size="small" type="primary" className="force-clicked" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>
      
      {/* Default size row */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Default - Focused</h4>
        <Button size="default" type="primary" className="force-focused" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
          Label
        </Button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Default - Loading</h4>
        <Button size="default" type="primary" loading>
          Label
        </Button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Default - Disabled</h4>
        <Button size="default" type="primary" disabled leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
          Label
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of different button states across various sizes.',
      },
    },
  },
};

// Loading states for all sizes
export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Loading States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button size="small" type="primary" loading>Label</Button>
          <Button size="default" type="primary" loading>Label</Button>
          <Button size="large" type="primary" loading>Label</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading states with animated spinner icons for all button sizes.',
      },
    },
  },
};

// Interactive examples
export const Interactive: Story = {
  render: () => {
    const handleClick = () => {
      alert('Button clicked!');
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <Button 
          size="default" 
          type="primary" 
          onClick={handleClick}
          leadingIcon={<AlarmIcon size={18} />}
        >
          Click me!
        </Button>
        
        <Button 
          size="small" 
          type="primary" 
          onClick={handleClick}
          trailingIcon={<ArrowDownIcon size={14} />}
        >
          Small Button
        </Button>
        
        <Button 
          size="large" 
          type="primary" 
          onClick={handleClick}
          leadingIcon={<AlarmIcon size={20} />}
          trailingIcon={<ArrowDownIcon size={20} />}
        >
          Large Button
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive buttons with click handlers.',
      },
    },
  },
};

// Width variants
export const WidthVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Auto Width</h4>
        <Button size="default" type="primary" width="auto" leadingIcon={<AlarmIcon size={18} />}>
          Auto Width
        </Button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Full Width</h4>
        <Button size="default" type="primary" width="full" leadingIcon={<AlarmIcon size={18} />}>
          Full Width Button
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with different width configurations.',
      },
    },
  },
};

// Icon only buttons
export const IconButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="small" type="primary" leadingIcon={<AlarmIcon size={14} />}>
        Leading
      </Button>
      
      <Button size="default" type="primary" trailingIcon={<ArrowDownIcon size={18} />}>
        Trailing
      </Button>
      
      <Button size="large" type="primary" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
        Both Icons
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with different icon configurations.',
      },
    },
  },
};

// Complete design system showcase
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
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Interactive States</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="default" type="primary" leadingIcon={<AlarmIcon size={18} />}>
            Default
          </Button>
          <Button size="default" type="primary" className="force-hover" leadingIcon={<AlarmIcon size={18} />}>
            Hover
          </Button>
          <Button size="default" type="primary" loading>
            Loading
          </Button>
          <Button size="default" type="primary" disabled leadingIcon={<AlarmIcon size={18} />}>
            Disabled
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete design system showcase with all button variants and states.',
      },
    },
  },
};
