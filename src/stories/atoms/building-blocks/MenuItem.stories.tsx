import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from './MenuItem';

const meta: Meta<typeof MenuItem> = {
  title: 'Atoms/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MenuItem component for dropdown menus and split buttons. Supports different types (top, default, bottom), sizes, and interactive states.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['top', 'default', 'bottom'],
      description: 'Position type in menu',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'clicked', 'disabled'],
      description: 'Interactive state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    children: {
      control: 'text',
      description: 'Menu item content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

// Basic examples
export const Default: Story = {
  args: {
    children: 'This is the middle',
    type: 'default',
    size: 'default',
    state: 'default',
  },
};

export const TopItem: Story = {
  args: {
    children: 'This is the top',
    type: 'top',
    size: 'default',
    state: 'default',
  },
};

export const BottomItem: Story = {
  args: {
    children: 'This is the bottom',
    type: 'bottom',
    size: 'default',
    state: 'default',
  },
};

// Size variants
export const SmallSize: Story = {
  args: {
    children: 'This is the middle',
    type: 'default',
    size: 'small',
    state: 'default',
  },
};

export const LargeSize: Story = {
  args: {
    children: 'This is the middle',
    type: 'default',
    size: 'large',
    state: 'default',
  },
};

// State variants
export const HoverState: Story = {
  args: {
    children: 'This is the middle',
    type: 'default',
    size: 'default',
    state: 'hover',
    className: 'force-hover',
  },
};

export const ClickedState: Story = {
  args: {
    children: 'This is the middle',
    type: 'default',
    size: 'default',
    state: 'clicked',
    className: 'force-clicked',
  },
};

export const DisabledState: Story = {
  args: {
    children: 'This is the middle',
    type: 'default',
    size: 'default',
    disabled: true,
  },
};

// All types showcase
export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '200px' }}>
      <MenuItem type="top" size="default" state="default">
        This is the top
      </MenuItem>
      <MenuItem type="default" size="default" state="default">
        This is the middle
      </MenuItem>
      <MenuItem type="bottom" size="default" state="default">
        This is the bottom
      </MenuItem>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu items shown as they would appear in a complete menu with proper top, middle, and bottom positioning.',
      },
    },
  },
};

// All sizes comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Small</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '180px' }}>
          <MenuItem type="top" size="small" state="default">
            This is the top
          </MenuItem>
          <MenuItem type="default" size="small" state="default">
            This is the middle
          </MenuItem>
          <MenuItem type="bottom" size="small" state="default">
            This is the bottom
          </MenuItem>
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '200px' }}>
          <MenuItem type="top" size="default" state="default">
            This is the top
          </MenuItem>
          <MenuItem type="default" size="default" state="default">
            This is the middle
          </MenuItem>
          <MenuItem type="bottom" size="default" state="default">
            This is the bottom
          </MenuItem>
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '220px' }}>
          <MenuItem type="top" size="large" state="default">
            This is the top
          </MenuItem>
          <MenuItem type="default" size="large" state="default">
            This is the middle
          </MenuItem>
          <MenuItem type="bottom" size="large" state="default">
            This is the bottom
          </MenuItem>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available sizes for menu items.',
      },
    },
  },
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default State</h4>
        <MenuItem type="default" size="default" state="default">
          This is the middle
        </MenuItem>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Hover State</h4>
        <MenuItem type="default" size="default" state="hover" className="force-hover">
          This is the middle
        </MenuItem>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Clicked State</h4>
        <MenuItem type="default" size="default" state="clicked" className="force-clicked">
          This is the middle
        </MenuItem>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Disabled State</h4>
        <MenuItem type="default" size="default" disabled>
          This is the middle
        </MenuItem>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available interactive states for menu items.',
      },
    },
  },
};

// Interactive menu example
export const InteractiveMenu: Story = {
  render: () => {
    const handleItemClick = (item: string) => {
      alert(`Clicked: ${item}`);
    };

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '2px', 
        width: '220px',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '4px',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <MenuItem 
          type="top" 
          size="default" 
          onClick={() => handleItemClick('Edit Profile')}
        >
          Edit Profile
        </MenuItem>
        <MenuItem 
          type="default" 
          size="default" 
          onClick={() => handleItemClick('Account Settings')}
        >
          Account Settings
        </MenuItem>
        <MenuItem 
          type="default" 
          size="default" 
          onClick={() => handleItemClick('Preferences')}
        >
          Preferences
        </MenuItem>
        <MenuItem 
          type="default" 
          size="default" 
          disabled
        >
          Premium Features (Disabled)
        </MenuItem>
        <MenuItem 
          type="bottom" 
          size="default" 
          onClick={() => handleItemClick('Sign Out')}
        >
          Sign Out
        </MenuItem>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a complete interactive menu using MenuItem components with click handlers.',
      },
    },
  },
};

// Complete variant matrix (for comprehensive testing)
export const VariantMatrix: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', padding: '16px' }}>
      {/* Header */}
      <div></div>
      <div style={{ fontWeight: 'bold', textAlign: 'center' }}>Default</div>
      <div style={{ fontWeight: 'bold', textAlign: 'center' }}>Hover</div>
      <div style={{ fontWeight: 'bold', textAlign: 'center' }}>Clicked</div>
      
      {/* Small size row */}
      <div style={{ fontWeight: 'bold' }}>Small</div>
      <MenuItem type="default" size="small" state="default">Small Default</MenuItem>
      <MenuItem type="default" size="small" state="hover" className="force-hover">Small Hover</MenuItem>
      <MenuItem type="default" size="small" state="clicked" className="force-clicked">Small Clicked</MenuItem>
      
      {/* Default size row */}
      <div style={{ fontWeight: 'bold' }}>Default</div>
      <MenuItem type="default" size="default" state="default">Default Default</MenuItem>
      <MenuItem type="default" size="default" state="hover" className="force-hover">Default Hover</MenuItem>
      <MenuItem type="default" size="default" state="clicked" className="force-clicked">Default Clicked</MenuItem>
      
      {/* Large size row */}
      <div style={{ fontWeight: 'bold' }}>Large</div>
      <MenuItem type="default" size="large" state="default">Large Default</MenuItem>
      <MenuItem type="default" size="large" state="hover" className="force-hover">Large Hover</MenuItem>
      <MenuItem type="default" size="large" state="clicked" className="force-clicked">Large Clicked</MenuItem>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete matrix showing all size and state combinations.',
      },
    },
  },
};
