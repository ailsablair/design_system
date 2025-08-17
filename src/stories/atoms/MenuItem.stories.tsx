import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MenuItem } from './MenuItem';

const meta: Meta<typeof MenuItem> = {
  title: 'Molecules/Building Blocks/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A menu item component for dropdown menus and navigation. Supports different sizes, states, and icon configurations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Menu item label text',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant of the menu item',
    },
    position: {
      control: 'select',
      options: ['top', 'default', 'bottom', 'submenu-top'],
      description: 'Position of the item in the menu',
    },
    type: {
      control: 'select',
      options: ['simple', 'back', 'section', 'sub-section'],
      description: 'Type of menu item',
    },
    sectionName: {
      control: 'text',
      description: 'Section name for sub-section type',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'active', 'disabled'],
      description: 'Visual state of the menu item',
    },
    showLeadingIcon: {
      control: 'boolean',
      description: 'Show leading icon',
    },
    showTrailingIcon: {
      control: 'boolean',
      description: 'Show trailing chevron icon for expandable items',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Section Header
export const SectionHeader: Story = {
  args: {
    label: 'Section name',
    type: 'section',
    size: 'default',
    position: 'top',
    showLeadingIcon: false,
  },
};

// Sub-section Header
export const SubSectionHeader: Story = {
  args: {
    label: 'Back',
    sectionName: 'Section name',
    type: 'sub-section',
    size: 'default',
    position: 'submenu-top',
    showLeadingIcon: true,
  },
};

// Section Headers by Size
export const SectionSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '276px' }}>
      <MenuItem label="Section name" type="section" size="small" position="top" showLeadingIcon={false} />
      <MenuItem label="Section name" type="section" size="default" position="top" showLeadingIcon={false} />
      <MenuItem label="Section name" type="section" size="large" position="top" showLeadingIcon={false} />
    </div>
  ),
};

// Sub-section Headers by Size
export const SubSectionSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '276px' }}>
      <MenuItem label="Back" sectionName="Section name" type="sub-section" size="small" position="submenu-top" />
      <MenuItem label="Back" sectionName="Section name" type="sub-section" size="default" position="submenu-top" />
      <MenuItem label="Back" sectionName="Section name" type="sub-section" size="large" position="submenu-top" />
    </div>
  ),
};

export const Default: Story = {
  args: {
    label: 'Menu item',
  },
};

export const BackButton: Story = {
  args: {
    label: 'Back',
    type: 'back',
  },
};

export const WithoutIcon: Story = {
  args: {
    label: 'Menu item',
    showLeadingIcon: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Menu item',
    disabled: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '276px' }}>
      <MenuItem size="small" label="Small menu item" position="top" />
      <MenuItem size="default" label="Default menu item" />
      <MenuItem size="large" label="Large menu item" position="bottom" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '276px' }}>
      <MenuItem label="Default state" state="default" />
      <MenuItem label="Hover state" state="hover" />
      <MenuItem label="Focus state" state="focus" />
      <MenuItem label="Active state" state="active" />
      <MenuItem label="Disabled state" state="disabled" />
    </div>
  ),
};

export const AllPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '276px' }}>
      <MenuItem label="Top position" position="top" />
      <MenuItem label="Default position" position="default" />
      <MenuItem label="Bottom position" position="bottom" />
      <MenuItem label="Submenu top" position="submenu-top" type="back" />
    </div>
  ),
};

export const BackButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '276px' }}>
      <MenuItem size="small" label="Back" type="back" position="submenu-top" />
      <MenuItem size="default" label="Back" type="back" position="submenu-top" />
      <MenuItem size="large" label="Back" type="back" position="submenu-top" />
    </div>
  ),
};

export const CustomIcon: Story = {
  render: () => {
    const CustomIcon = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" fill="#6D7280"/>
      </svg>
    );
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '276px' }}>
        <MenuItem label="Custom icon" icon={CustomIcon} />
        <MenuItem label="Default icon" />
        <MenuItem label="No icon" showLeadingIcon={false} />
      </div>
    );
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
    const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '276px' }}>
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#6B7280' }}>
          Selected: {selectedItem || 'None'} | Hovered: {hoveredItem || 'None'}
        </p>
        
        {['Option 1', 'Option 2', 'Option 3'].map((option, index) => (
          <MenuItem
            key={option}
            label={option}
            position={index === 0 ? 'top' : index === 2 ? 'bottom' : 'default'}
            state={selectedItem === option ? 'active' : hoveredItem === option ? 'hover' : 'default'}
            onClick={() => setSelectedItem(option)}
            onMouseEnter={() => setHoveredItem(option)}
            onMouseLeave={() => setHoveredItem(null)}
          />
        ))}
      </div>
    );
  },
};
