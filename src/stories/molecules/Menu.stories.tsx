import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';
import { MenuItem } from '../atoms/building-blocks/MenuItem';

const meta: Meta<typeof Menu> = {
  title: 'Molecules/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Menu component for grouping MenuItem components with proper borders, styling, and layout. Perfect for dropdown menus and split button menus.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant affecting padding and spacing',
    },
    open: {
      control: 'boolean',
      description: 'Whether the menu is visible',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position for dropdown positioning',
    },
    minWidth: {
      control: { type: 'number', min: 100, max: 400 },
      description: 'Minimum width in pixels',
    },
    maxWidth: {
      control: { type: 'number', min: 150, max: 500 },
      description: 'Maximum width in pixels',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

// Basic menu examples
export const Default: Story = {
  args: {
    size: 'default',
    open: true,
  },
  render: (args) => (
    <Menu {...args}>
      <MenuItem type="top">This is the top</MenuItem>
      <MenuItem type="default">This is the middle</MenuItem>
      <MenuItem type="default">This is the middle</MenuItem>
      <MenuItem type="bottom">This is the bottom</MenuItem>
    </Menu>
  ),
};

export const SmallSize: Story = {
  args: {
    size: 'small',
    open: true,
  },
  render: (args) => (
    <Menu {...args}>
      <MenuItem type="top" size="small">This is the top</MenuItem>
      <MenuItem type="default" size="small">This is the middle</MenuItem>
      <MenuItem type="default" size="small">This is the middle</MenuItem>
      <MenuItem type="bottom" size="small">This is the bottom</MenuItem>
    </Menu>
  ),
};

export const LargeSize: Story = {
  args: {
    size: 'large',
    open: true,
  },
  render: (args) => (
    <Menu {...args}>
      <MenuItem type="top" size="large">This is the top</MenuItem>
      <MenuItem type="default" size="large">This is the middle</MenuItem>
      <MenuItem type="default" size="large">This is the middle</MenuItem>
      <MenuItem type="bottom" size="large">This is the bottom</MenuItem>
    </Menu>
  ),
};

// All sizes comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Small</h4>
        <Menu size="small">
          <MenuItem type="top" size="small">This is the top</MenuItem>
          <MenuItem type="default" size="small">This is the middle</MenuItem>
          <MenuItem type="default" size="small">This is the middle</MenuItem>
          <MenuItem type="bottom" size="small">This is the bottom</MenuItem>
        </Menu>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <Menu size="default">
          <MenuItem type="top" size="default">This is the top</MenuItem>
          <MenuItem type="default" size="default">This is the middle</MenuItem>
          <MenuItem type="default" size="default">This is the middle</MenuItem>
          <MenuItem type="bottom" size="default">This is the bottom</MenuItem>
        </Menu>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <Menu size="large">
          <MenuItem type="top" size="large">This is the top</MenuItem>
          <MenuItem type="default" size="large">This is the middle</MenuItem>
          <MenuItem type="default" size="large">This is the middle</MenuItem>
          <MenuItem type="bottom" size="large">This is the bottom</MenuItem>
        </Menu>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available menu sizes with properly sized MenuItems.',
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
      <Menu size="default">
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
      </Menu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive menu with click handlers and disabled states.',
      },
    },
  },
};

// Simple menu with fewer items
export const SimpleMenu: Story = {
  render: () => (
    <Menu size="default">
      <MenuItem type="top" size="default">Copy</MenuItem>
      <MenuItem type="default" size="default">Paste</MenuItem>
      <MenuItem type="bottom" size="default">Delete</MenuItem>
    </Menu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Simple menu with just three items.',
      },
    },
  },
};

// Single item menu
export const SingleItem: Story = {
  render: () => (
    <Menu size="default">
      <MenuItem type="default" size="default">Single Action</MenuItem>
    </Menu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu with only one item (automatically gets proper border radius).',
      },
    },
  },
};

// Long menu example
export const LongMenu: Story = {
  render: () => (
    <div style={{ maxHeight: '300px', overflow: 'auto' }}>
      <Menu size="default">
        <MenuItem type="top" size="default">First Item</MenuItem>
        <MenuItem type="default" size="default">Second Item</MenuItem>
        <MenuItem type="default" size="default">Third Item</MenuItem>
        <MenuItem type="default" size="default">Fourth Item</MenuItem>
        <MenuItem type="default" size="default">Fifth Item</MenuItem>
        <MenuItem type="default" size="default">Sixth Item</MenuItem>
        <MenuItem type="default" size="default">Seventh Item</MenuItem>
        <MenuItem type="default" size="default">Eighth Item</MenuItem>
        <MenuItem type="bottom" size="default">Last Item</MenuItem>
      </Menu>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of a longer menu with many items.',
      },
    },
  },
};

// Different states showcase
export const MenuStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default States</h4>
        <Menu size="default">
          <MenuItem type="top" size="default" state="default">Normal Item</MenuItem>
          <MenuItem type="default" size="default" state="hover" className="force-hover">Hovered Item</MenuItem>
          <MenuItem type="default" size="default" state="clicked" className="force-clicked">Clicked Item</MenuItem>
          <MenuItem type="bottom" size="default" disabled>Disabled Item</MenuItem>
        </Menu>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu showing different MenuItem states.',
      },
    },
  },
};

// Custom width menu
export const CustomWidth: Story = {
  args: {
    size: 'default',
    minWidth: 200,
    maxWidth: 300,
  },
  render: (args) => (
    <Menu {...args}>
      <MenuItem type="top" size="default">This is a longer menu item</MenuItem>
      <MenuItem type="default" size="default">Another item</MenuItem>
      <MenuItem type="bottom" size="default">Final item</MenuItem>
    </Menu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Menu with custom width constraints.',
      },
    },
  },
};

// Dropdown simulation
export const DropdownSimulation: Story = {
  render: () => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button style={{ 
        padding: '8px 16px',
        backgroundColor: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontSize: '14px',
        cursor: 'pointer'
      }}>
        Actions ▼
      </button>
      <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: '4px', zIndex: 1000 }}>
        <Menu size="default">
          <MenuItem type="top" size="default">Edit</MenuItem>
          <MenuItem type="default" size="default">Duplicate</MenuItem>
          <MenuItem type="default" size="default">Share</MenuItem>
          <MenuItem type="bottom" size="default">Delete</MenuItem>
        </Menu>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing how the menu would look as a dropdown.',
      },
    },
  },
};
