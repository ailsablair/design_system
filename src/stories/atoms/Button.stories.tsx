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

export const DefaultOutline: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    outline: true,
  },
};

export const DefaultSecondary: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'secondary',
  },
};

export const DefaultTertiary: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
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
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Primary Loading States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button size="small" type="primary" loading>Label</Button>
          <Button size="default" type="primary" loading>Label</Button>
          <Button size="large" type="primary" loading>Label</Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Primary Outline Loading States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button size="small" type="primary" outline loading>Label</Button>
          <Button size="default" type="primary" outline loading>Label</Button>
          <Button size="large" type="primary" outline loading>Label</Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Secondary Loading States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button size="small" type="secondary" loading>Label</Button>
          <Button size="default" type="secondary" loading>Label</Button>
          <Button size="large" type="secondary" loading>Label</Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Tertiary Loading States</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button size="small" type="tertiary" loading>Label</Button>
          <Button size="default" type="tertiary" loading>Label</Button>
          <Button size="large" type="tertiary" loading>Label</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading states with animated spinner icons for all button types and sizes.',
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
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Secondary Buttons</h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Button
              size="default"
              type="secondary"
              onClick={() => handleClick('Secondary')}
              leadingIcon={<AlarmIcon size={18} />}
            >
              Secondary
            </Button>

            <Button
              size="large"
              type="secondary"
              onClick={() => handleClick('Large secondary')}
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Large Secondary
            </Button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Tertiary Buttons</h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Button
              size="default"
              type="tertiary"
              onClick={() => handleClick('Tertiary')}
              leadingIcon={<AlarmIcon size={18} />}
            >
              Tertiary
            </Button>

            <Button
              size="large"
              type="tertiary"
              onClick={() => handleClick('Large tertiary')}
              leadingIcon={<AlarmIcon size={20} />}
              trailingIcon={<ArrowDownIcon size={20} />}
            >
              Large Tertiary
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

// Width variants
export const WidthVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Primary - Auto Width</h4>
        <Button size="default" type="primary" width="auto" leadingIcon={<AlarmIcon size={18} />}>
          Auto Width
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Primary - Full Width</h4>
        <Button size="default" type="primary" width="full" leadingIcon={<AlarmIcon size={18} />}>
          Full Width Button
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Secondary - Auto Width</h4>
        <Button size="default" type="secondary" width="auto" leadingIcon={<AlarmIcon size={18} />}>
          Auto Width
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Secondary - Full Width</h4>
        <Button size="default" type="secondary" width="full" leadingIcon={<AlarmIcon size={18} />}>
          Full Width Button
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Tertiary - Auto Width</h4>
        <Button size="default" type="tertiary" width="auto" leadingIcon={<AlarmIcon size={18} />}>
          Auto Width
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Tertiary - Full Width</h4>
        <Button size="default" type="tertiary" width="full" leadingIcon={<AlarmIcon size={18} />}>
          Full Width Button
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with different width configurations across all button types.',
      },
    },
  },
};

// Icon configurations
export const IconButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Primary with Icons</h4>
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
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Secondary with Icons</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button size="small" type="secondary" leadingIcon={<AlarmIcon size={14} />}>
            Leading
          </Button>

          <Button size="default" type="secondary" trailingIcon={<ArrowDownIcon size={18} />}>
            Trailing
          </Button>

          <Button size="large" type="secondary" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
            Both Icons
          </Button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Tertiary with Icons</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Button size="small" type="tertiary" leadingIcon={<AlarmIcon size={14} />}>
            Leading
          </Button>

          <Button size="default" type="tertiary" trailingIcon={<ArrowDownIcon size={18} />}>
            Trailing
          </Button>

          <Button size="large" type="tertiary" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
            Both Icons
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with different icon configurations across all button types.',
      },
    },
  },
};

// Outline variants
export const OutlineDefault: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    outline: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const OutlineSmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'primary',
    outline: true,
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownIcon size={14} />,
  },
};

export const OutlineLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'primary',
    outline: true,
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownIcon size={20} />,
  },
};

export const OutlineHover: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    outline: true,
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const OutlineClicked: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    outline: true,
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const OutlineFocused: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    outline: true,
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const OutlineLoading: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    outline: true,
    loading: true,
  },
};

export const OutlineDisabled: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    outline: true,
    disabled: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

// All outline sizes comparison
export const AllOutlineSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Small</h4>
        <Button size="small" type="primary" outline leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <Button size="default" type="primary" outline leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <Button size="large" type="primary" outline leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
          Label
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available outline button sizes with appropriate icons.',
      },
    },
  },
};

// All outline states showcase
export const AllOutlineStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'center' }}>
      {/* Small size row */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Small - Default</h4>
        <Button size="small" type="primary" outline leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Small - Hover</h4>
        <Button size="small" type="primary" outline className="force-hover" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Small - Clicked</h4>
        <Button size="small" type="primary" outline className="force-clicked" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>

      {/* Default size row */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Default - Focused</h4>
        <Button size="default" type="primary" outline className="force-focused" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Default - Loading</h4>
        <Button size="default" type="primary" outline loading>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Default - Disabled</h4>
        <Button size="default" type="primary" outline disabled leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
          Label
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of different outline button states across various sizes.',
      },
    },
  },
};

// Comparison between filled and outline buttons
export const FilledVsOutline: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Filled Primary Buttons</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
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
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Outline Primary Buttons</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="small" type="primary" outline leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
            Small
          </Button>
          <Button size="default" type="primary" outline leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
            Default
          </Button>
          <Button size="large" type="primary" outline leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
            Large
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Interactive States Comparison</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ minWidth: '80px', fontSize: '14px', fontWeight: '500' }}>Filled:</span>
            <Button size="default" type="primary" leadingIcon={<AlarmIcon size={18} />}>Default</Button>
            <Button size="default" type="primary" className="force-hover" leadingIcon={<AlarmIcon size={18} />}>Hover</Button>
            <Button size="default" type="primary" loading>Loading</Button>
            <Button size="default" type="primary" disabled leadingIcon={<AlarmIcon size={18} />}>Disabled</Button>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ minWidth: '80px', fontSize: '14px', fontWeight: '500' }}>Outline:</span>
            <Button size="default" type="primary" outline leadingIcon={<AlarmIcon size={18} />}>Default</Button>
            <Button size="default" type="primary" outline className="force-hover" leadingIcon={<AlarmIcon size={18} />}>Hover</Button>
            <Button size="default" type="primary" outline loading>Loading</Button>
            <Button size="default" type="primary" outline disabled leadingIcon={<AlarmIcon size={18} />}>Disabled</Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of filled and outline button variants with all states.',
      },
    },
  },
};

// Secondary button examples
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

export const SecondaryExtraSmall: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'secondary',
    leadingIcon: <AlarmIcon size={14} />,
  },
};

export const SecondaryHover: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'secondary',
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const SecondaryClicked: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'secondary',
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const SecondaryFocused: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'secondary',
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const SecondaryLoading: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'secondary',
    loading: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'secondary',
    disabled: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

// Tertiary button examples
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

export const TertiaryHover: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    state: 'hover',
    className: 'force-hover',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryClicked: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    state: 'clicked',
    className: 'force-clicked',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryFocused: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    state: 'focused',
    className: 'force-focused',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

export const TertiaryLoading: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    loading: true,
  },
};

export const TertiaryDisabled: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'tertiary',
    disabled: true,
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownIcon size={18} />,
  },
};

// All secondary sizes comparison
export const AllSecondarySizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Extra Small</h4>
        <Button size="extra-small" type="secondary" leadingIcon={<AlarmIcon size={14} />}>
          Button w/ leading icon
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Small</h4>
        <Button size="small" type="secondary" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <Button size="default" type="secondary" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <Button size="large" type="secondary" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
          Label
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available secondary button sizes with appropriate icons.',
      },
    },
  },
};

// All tertiary sizes comparison
export const AllTertiarySizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Small</h4>
        <Button size="small" type="tertiary" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <Button size="default" type="tertiary" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <Button size="large" type="tertiary" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
          Label
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available tertiary button sizes with appropriate icons.',
      },
    },
  },
};

// All secondary states showcase
export const AllSecondaryStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'center' }}>
      {/* Small size row */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Small - Default</h4>
        <Button size="small" type="secondary" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Small - Hover</h4>
        <Button size="small" type="secondary" className="force-hover" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Small - Clicked</h4>
        <Button size="small" type="secondary" className="force-clicked" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>

      {/* Default size row */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Default - Focused</h4>
        <Button size="default" type="secondary" className="force-focused" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Default - Loading</h4>
        <Button size="default" type="secondary" loading>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Default - Disabled</h4>
        <Button size="default" type="secondary" disabled leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
          Label
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of different secondary button states across various sizes.',
      },
    },
  },
};

// All tertiary states showcase
export const AllTertiaryStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'center' }}>
      {/* Small size row */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Small - Default</h4>
        <Button size="small" type="tertiary" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Small - Hover</h4>
        <Button size="small" type="tertiary" className="force-hover" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Small - Clicked</h4>
        <Button size="small" type="tertiary" className="force-clicked" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
          Label
        </Button>
      </div>

      {/* Default size row */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Default - Focused</h4>
        <Button size="default" type="tertiary" className="force-focused" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Default - Loading</h4>
        <Button size="default" type="tertiary" loading>
          Label
        </Button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '12px', fontWeight: '600' }}>Default - Disabled</h4>
        <Button size="default" type="tertiary" disabled leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
          Label
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of different tertiary button states across various sizes.',
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
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>All Sizes - Secondary</h3>
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
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>All Sizes - Tertiary</h3>
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
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive comparison of all button types including primary, secondary, and tertiary variants.',
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
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Primary Outline Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="small" type="primary" outline leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownIcon size={14} />}>
            Small
          </Button>
          <Button size="default" type="primary" outline leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownIcon size={18} />}>
            Default
          </Button>
          <Button size="large" type="primary" outline leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownIcon size={20} />}>
            Large
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
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Interactive States</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="default" type="primary" leadingIcon={<AlarmIcon size={18} />}>
            Primary
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
        story: 'Complete design system showcase with all button variants and states, including primary, secondary, and tertiary buttons.',
      },
    },
  },
};
