import type { Meta, StoryObj } from '@storybook/react';
import { Tab, HomeIcon, ChevronDownIcon } from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Atoms/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tab component with multiple sizes, states, and types. Supports default, secondary, contained, and dark-contained variants with optional badges and icons. Matches the Figma design system specifications.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Tab size variant',
    },
    type: {
      control: 'select',
      options: ['default', 'secondary', 'contained', 'dark-contained'],
      description: 'Tab type/variant',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'active', 'disabled'],
      description: 'Visual state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    active: {
      control: 'boolean',
      description: 'Active state (controlled)',
    },
    showBadge: {
      control: 'boolean',
      description: 'Show badge/notification',
    },
    badge: {
      control: 'text',
      description: 'Badge content (number or text)',
    },
    children: {
      control: 'text',
      description: 'Tab text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

// Basic tab examples
export const Default: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'default',
    badge: '7',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'secondary',
    badge: '7',
  },
};

// Size variants
export const Small: Story = {
  args: {
    children: 'Tab label',
    size: 'small',
    type: 'default',
    badge: '7',
  },
};

export const Large: Story = {
  args: {
    children: 'Tab label',
    size: 'large',
    type: 'default',
    badge: '7',
  },
};

// State variants
export const HoverState: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'default',
    state: 'hover',
    className: 'force-hover',
    badge: '7',
  },
};

export const ActiveState: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'default',
    state: 'active',
    badge: '7',
  },
};

export const DisabledState: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'default',
    disabled: true,
    badge: '7',
  },
};

// Secondary variants
export const SecondarySmall: Story = {
  args: {
    children: 'Tab label',
    size: 'small',
    type: 'secondary',
    badge: '7',
  },
};

export const SecondaryLarge: Story = {
  args: {
    children: 'Tab label',
    size: 'large',
    type: 'secondary',
    badge: '7',
  },
};

export const SecondaryHover: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'secondary',
    state: 'hover',
    className: 'force-hover',
    badge: '7',
  },
};

export const SecondaryActive: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'secondary',
    state: 'active',
    badge: '7',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'secondary',
    disabled: true,
    badge: '7',
  },
};

// Contained variants
export const ContainedDefault: Story = {
  args: {
    children: 'Tab label',
    size: 'small',
    type: 'contained',
    badge: '7',
  },
};

export const ContainedDefaultMedium: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'contained',
    badge: '7',
  },
};

export const ContainedLarge: Story = {
  args: {
    children: 'Tab label',
    size: 'large',
    type: 'contained',
    badge: '7',
  },
};

export const ContainedActive: Story = {
  args: {
    children: 'Tab label',
    size: 'small',
    type: 'contained',
    state: 'active',
    badge: '7',
  },
};

export const ContainedActiveDefault: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'contained',
    state: 'active',
    badge: '7',
  },
};

export const ContainedActiveLarge: Story = {
  args: {
    children: 'Tab label',
    size: 'large',
    type: 'contained',
    state: 'active',
    badge: '7',
  },
};

export const ContainedHover: Story = {
  args: {
    children: 'Tab label',
    size: 'small',
    type: 'contained',
    state: 'hover',
    className: 'force-hover',
    badge: '7',
  },
};

export const ContainedDisabled: Story = {
  args: {
    children: 'Tab label',
    size: 'small',
    type: 'contained',
    disabled: true,
    badge: '7',
  },
};

// Dark contained variants
export const DarkContainedDefault: Story = {
  args: {
    children: 'Tab label',
    size: 'small',
    type: 'dark-contained',
    badge: '7',
  },
};

export const DarkContainedDefaultMedium: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'dark-contained',
    badge: '7',
  },
};

export const DarkContainedLarge: Story = {
  args: {
    children: 'Tab label',
    size: 'large',
    type: 'dark-contained',
    badge: '7',
  },
};

export const DarkContainedActive: Story = {
  args: {
    children: 'Tab label',
    size: 'small',
    type: 'dark-contained',
    state: 'active',
    badge: '7',
  },
};

export const DarkContainedActiveDefault: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'dark-contained',
    state: 'active',
    badge: '7',
  },
};

export const DarkContainedActiveLarge: Story = {
  args: {
    children: 'Tab label',
    size: 'large',
    type: 'dark-contained',
    state: 'active',
    badge: '7',
  },
};

export const DarkContainedHover: Story = {
  args: {
    children: 'Tab label',
    size: 'small',
    type: 'dark-contained',
    state: 'hover',
    className: 'force-hover',
    badge: '7',
  },
};

export const DarkContainedDisabled: Story = {
  args: {
    children: 'Tab label',
    size: 'small',
    type: 'dark-contained',
    disabled: true,
    badge: '7',
  },
};

// Without badge
export const WithoutBadge: Story = {
  args: {
    children: 'Tab label',
    size: 'default',
    type: 'default',
    showBadge: false,
  },
};

// Custom icons
export const CustomIcons: Story = {
  args: {
    children: 'Custom Tab',
    size: 'default',
    type: 'default',
    badge: '42',
    leadingIcon: <HomeIcon size={18} />,
    trailingIcon: <ChevronDownIcon size={18} />,
  },
};

// All sizes comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Small</h4>
        <Tab size="small" type="default" badge="7">
          Tab label
        </Tab>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <Tab size="default" type="default" badge="7">
          Tab label
        </Tab>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <Tab size="large" type="default" badge="7">
          Tab label
        </Tab>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available tab sizes with badges.',
      },
    },
  },
};

// All types comparison
export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <Tab size="default" type="default" badge="7">
          Tab label
        </Tab>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Secondary</h4>
        <Tab size="default" type="secondary" badge="7">
          Tab label
        </Tab>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Contained</h4>
        <Tab size="default" type="contained" badge="7">
          Tab label
        </Tab>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Dark Contained</h4>
        <Tab size="default" type="dark-contained" badge="7">
          Tab label
        </Tab>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available tab types.',
      },
    },
  },
};

// All states comparison
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px', alignItems: 'center', padding: '24px' }}>
      {/* Header row */}
      <div style={{ fontWeight: '600', fontSize: '14px' }}>Type</div>
      <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
      <div style={{ fontWeight: '600', fontSize: '14px' }}>Hover</div>
      <div style={{ fontWeight: '600', fontSize: '14px' }}>Active</div>
      <div style={{ fontWeight: '600', fontSize: '14px' }}>Disabled</div>

      {/* Default row */}
      <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
      <Tab size="default" type="default" badge="7">Tab label</Tab>
      <Tab size="default" type="default" state="hover" className="force-hover" badge="7">Tab label</Tab>
      <Tab size="default" type="default" state="active" badge="7">Tab label</Tab>
      <Tab size="default" type="default" disabled badge="7">Tab label</Tab>

      {/* Secondary row */}
      <div style={{ fontSize: '14px', fontWeight: '500' }}>Secondary</div>
      <Tab size="default" type="secondary" badge="7">Tab label</Tab>
      <Tab size="default" type="secondary" state="hover" className="force-hover" badge="7">Tab label</Tab>
      <Tab size="default" type="secondary" state="active" badge="7">Tab label</Tab>
      <Tab size="default" type="secondary" disabled badge="7">Tab label</Tab>

      {/* Contained row */}
      <div style={{ fontSize: '14px', fontWeight: '500' }}>Contained</div>
      <Tab size="default" type="contained" badge="7">Tab label</Tab>
      <Tab size="default" type="contained" state="hover" className="force-hover" badge="7">Tab label</Tab>
      <Tab size="default" type="contained" state="active" badge="7">Tab label</Tab>
      <Tab size="default" type="contained" disabled badge="7">Tab label</Tab>

      {/* Dark Contained row */}
      <div style={{ fontSize: '14px', fontWeight: '500' }}>Dark Contained</div>
      <Tab size="default" type="dark-contained" badge="7">Tab label</Tab>
      <Tab size="default" type="dark-contained" state="hover" className="force-hover" badge="7">Tab label</Tab>
      <Tab size="default" type="dark-contained" state="active" badge="7">Tab label</Tab>
      <Tab size="default" type="dark-contained" disabled badge="7">Tab label</Tab>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all tab states for all types.',
      },
    },
  },
};

// Tab group simulation
export const TabGroup: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState(0);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '0', alignItems: 'flex-end' }}>
          <Tab
            size="default"
            type="default"
            active={activeTab === 0}
            onClick={() => setActiveTab(0)}
            badge="7"
          >
            Home
          </Tab>
          <Tab
            size="default"
            type="default"
            active={activeTab === 1}
            onClick={() => setActiveTab(1)}
            badge="3"
          >
            Dashboard
          </Tab>
          <Tab
            size="default"
            type="default"
            active={activeTab === 2}
            onClick={() => setActiveTab(2)}
            badge="12"
          >
            Settings
          </Tab>
          <Tab
            size="default"
            type="default"
            disabled
            badge="0"
          >
            Disabled
          </Tab>
        </div>
        
        <div style={{ padding: '16px', background: '#f8f9fa', borderRadius: '4px' }}>
          <p style={{ margin: 0 }}>
            Current active tab: <strong>{['Home', 'Dashboard', 'Settings'][activeTab]}</strong>
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive tab group simulation with click handlers.',
      },
    },
  },
};

// Secondary tab group simulation
export const SecondaryTabGroup: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState(0);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '0', alignItems: 'flex-end' }}>
          <Tab
            size="default"
            type="secondary"
            active={activeTab === 0}
            onClick={() => setActiveTab(0)}
            badge="5"
          >
            Projects
          </Tab>
          <Tab
            size="default"
            type="secondary"
            active={activeTab === 1}
            onClick={() => setActiveTab(1)}
            badge="8"
          >
            Team
          </Tab>
          <Tab
            size="default"
            type="secondary"
            active={activeTab === 2}
            onClick={() => setActiveTab(2)}
            badge="2"
          >
            Reports
          </Tab>
        </div>
        
        <div style={{ padding: '16px', background: '#f0f9ff', borderRadius: '4px' }}>
          <p style={{ margin: 0 }}>
            Current active tab: <strong>{['Projects', 'Team', 'Reports'][activeTab]}</strong>
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive secondary tab group simulation.',
      },
    },
  },
};

// Figma design showcase
export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Tab Components - Figma Design</h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Complete implementation of tab components matching the exact Figma specifications.
          Features multiple sizes, types, states, and interactive badges.
        </p>
      </div>

      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Default Tabs - All Sizes</h4>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <Tab size="small" type="default" badge="7">Tab label</Tab>
          <Tab size="default" type="default" badge="7">Tab label</Tab>
          <Tab size="large" type="default" badge="7">Tab label</Tab>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Secondary Tabs - All Sizes</h4>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <Tab size="small" type="secondary" badge="7">Tab label</Tab>
          <Tab size="default" type="secondary" badge="7">Tab label</Tab>
          <Tab size="large" type="secondary" badge="7">Tab label</Tab>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Contained Tabs - All Sizes</h4>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end', flexWrap: 'wrap', background: '#2F42BD', padding: '16px', borderRadius: '8px' }}>
          <Tab size="small" type="contained" badge="7">Tab label</Tab>
          <Tab size="default" type="contained" badge="7">Tab label</Tab>
          <Tab size="large" type="contained" badge="7">Tab label</Tab>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Dark Contained Tabs - All Sizes</h4>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end', flexWrap: 'wrap', background: '#191E3C', padding: '16px', borderRadius: '8px' }}>
          <Tab size="small" type="dark-contained" badge="7">Tab label</Tab>
          <Tab size="default" type="dark-contained" badge="7">Tab label</Tab>
          <Tab size="large" type="dark-contained" badge="7">Tab label</Tab>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Active States Comparison</h4>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <Tab size="default" type="default" state="active" badge="7">Default Active</Tab>
          <Tab size="default" type="secondary" state="active" badge="7">Secondary Active</Tab>
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Interactive Demo</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <Tab
            size="default"
            type="default"
            onClick={() => alert('Default tab clicked!')}
            badge="7"
          >
            Click Me
          </Tab>
          <Tab
            size="default"
            type="secondary"
            onClick={() => alert('Secondary tab clicked!')}
            badge="3"
          >
            Secondary
          </Tab>
          <Tab size="default" type="default" disabled badge="0">Disabled</Tab>
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
          <div style={{ marginBottom: '8px' }}><strong>Icons:</strong> Home (leading), Chevron Down (trailing)</div>
          <div style={{ marginBottom: '8px' }}><strong>Badge:</strong> Circular with number, size varies by tab size</div>
          <div style={{ marginBottom: '8px' }}><strong>Colors:</strong> Blue theme (default), Green theme (secondary)</div>
          <div style={{ marginBottom: '8px' }}><strong>States:</strong> Default, Hover, Active, Disabled</div>
          <div style={{ marginBottom: '8px' }}><strong>Line:</strong> 2px bottom border, changes color on active</div>
          <div><strong>Font:</strong> Archivo, weight changes with state</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of tab components matching the exact Figma design specifications with all variants and interactive features.',
      },
    },
  },
};

// Interactive examples
export const Interactive: Story = {
  render: () => {
    const handleClick = (type: string) => {
      alert(`${type} tab clicked!`);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default Tabs</h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
            <Tab
              size="default"
              type="default"
              onClick={() => handleClick('Default')}
              badge="7"
            >
              Tab 1
            </Tab>

            <Tab
              size="default"
              type="default"
              onClick={() => handleClick('Default')}
              badge="3"
            >
              Tab 2
            </Tab>

            <Tab
              size="default"
              type="default"
              state="active"
              onClick={() => handleClick('Active Default')}
              badge="12"
            >
              Active Tab
            </Tab>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Secondary Tabs</h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
            <Tab
              size="default"
              type="secondary"
              onClick={() => handleClick('Secondary')}
              badge="5"
            >
              Projects
            </Tab>

            <Tab
              size="default"
              type="secondary"
              state="active"
              onClick={() => handleClick('Active Secondary')}
              badge="8"
            >
              Active
            </Tab>

            <Tab
              size="default"
              type="secondary"
              onClick={() => handleClick('Secondary')}
              badge="2"
            >
              Reports
            </Tab>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive tabs with click handlers, showcasing default and secondary types.',
      },
    },
  },
};

// React import for interactive examples
const React = { useState: (initial: any) => {
  const [state, setState] = (globalThis as any).React?.useState?.(initial) || [initial, () => {}];
  return [state, setState];
}};
