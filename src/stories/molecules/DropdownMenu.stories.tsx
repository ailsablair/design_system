import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DropdownMenu } from './DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Molecules/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A dropdown menu component that contains multiple menu items. Supports regular menus and submenus with back navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant of the menu',
    },
    type: {
      control: 'select',
      options: ['default', 'submenu', 'sectioned', 'sectioned-submenu'],
      description: 'Type of menu',
    },
    width: {
      control: 'number',
      description: 'Width of the menu in pixels',
    },
    isVisible: {
      control: 'boolean',
      description: 'Show or hide the menu',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  { label: 'Menu item', showLeadingIcon: true },
  { label: 'Menu item', showLeadingIcon: true },
  { label: 'Menu item', showLeadingIcon: true },
  { label: 'Menu item', showLeadingIcon: true },
];

const submenuItems = [
  { label: 'Back', type: 'back' as const, showLeadingIcon: true },
  { label: 'Submenu item', showLeadingIcon: true },
  { label: 'Submenu item', showLeadingIcon: true },
  { label: 'Submenu item', showLeadingIcon: true },
];

const sectionedItems = [
  { label: 'Section name', type: 'section' as const, showLeadingIcon: false },
  { label: 'Menu item', showLeadingIcon: true },
  { label: 'Menu item', showLeadingIcon: true },
  { label: 'Menu item', showLeadingIcon: true },
];

const sectionedSubmenuItems = [
  { label: 'Back', sectionName: 'Section name', type: 'sub-section' as const, showLeadingIcon: true },
  { label: 'Submenu item', showLeadingIcon: true },
  { label: 'Submenu item', showLeadingIcon: true },
  { label: 'Submenu item', showLeadingIcon: true },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    size: 'default',
    type: 'default',
  },
};

export const Submenu: Story = {
  args: {
    items: submenuItems,
    size: 'default',
    type: 'submenu',
  },
};

export const SmallMenu: Story = {
  args: {
    items: defaultItems,
    size: 'small',
    type: 'default',
  },
};

export const LargeMenu: Story = {
  args: {
    items: defaultItems,
    size: 'large',
    type: 'default',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Small</h4>
        <DropdownMenu items={defaultItems} size="small" />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <DropdownMenu items={defaultItems} size="default" />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <DropdownMenu items={defaultItems} size="large" />
      </div>
    </div>
  ),
};

export const AllSubmenuSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Small Submenu</h4>
        <DropdownMenu items={submenuItems} size="small" type="submenu" />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Default Submenu</h4>
        <DropdownMenu items={submenuItems} size="default" type="submenu" />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Large Submenu</h4>
        <DropdownMenu items={submenuItems} size="large" type="submenu" />
      </div>
    </div>
  ),
};

export const WithCustomItems: Story = {
  render: () => {
    const customItems = [
      { label: 'New Document', showLeadingIcon: false },
      { label: 'Open File', showLeadingIcon: false },
      { label: 'Save', showLeadingIcon: false },
      { label: 'Save As...', showLeadingIcon: false, disabled: true },
      { label: 'Export', showLeadingIcon: false },
    ];

    return <DropdownMenu items={customItems} size="default" />;
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ label: 'Single item', showLeadingIcon: true }],
    size: 'default',
  },
};

export const InteractiveMenu: Story = {
  render: () => {
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
    const [showSubmenu, setShowSubmenu] = React.useState(false);

    const mainMenuItems = [
      { 
        label: 'Documents', 
        showLeadingIcon: true,
        onClick: () => setShowSubmenu(true)
      },
      { 
        label: 'Settings', 
        showLeadingIcon: true,
        onClick: () => setSelectedItem('Settings')
      },
      { 
        label: 'Help', 
        showLeadingIcon: true,
        onClick: () => setSelectedItem('Help')
      },
      { 
        label: 'Logout', 
        showLeadingIcon: true,
        onClick: () => setSelectedItem('Logout')
      },
    ];

    const submenuItemsData = [
      { 
        label: 'Back', 
        type: 'back' as const, 
        showLeadingIcon: true,
        onClick: () => setShowSubmenu(false)
      },
      { 
        label: 'Recent Files', 
        showLeadingIcon: true,
        onClick: () => setSelectedItem('Recent Files')
      },
      { 
        label: 'Templates', 
        showLeadingIcon: true,
        onClick: () => setSelectedItem('Templates')
      },
      { 
        label: 'Shared', 
        showLeadingIcon: true,
        onClick: () => setSelectedItem('Shared')
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#6B7280' }}>
          Selected: {selectedItem || 'None'}
        </p>
        
        {!showSubmenu ? (
          <DropdownMenu 
            items={mainMenuItems} 
            size="default" 
            onItemClick={(index, item) => {
              console.log('Main menu item clicked:', item.label);
            }}
          />
        ) : (
          <DropdownMenu 
            items={submenuItemsData} 
            size="default" 
            type="submenu"
            onClose={() => setShowSubmenu(false)}
            onItemClick={(index, item) => {
              console.log('Submenu item clicked:', item.label);
            }}
          />
        )}
        
        <button 
          onClick={() => {
            setShowSubmenu(false);
            setSelectedItem(null);
          }}
          style={{
            padding: '8px 16px',
            border: '1px solid #D2D5DA',
            borderRadius: '4px',
            background: 'white',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </div>
    );
  },
};

export const PositionedMenu: Story = {
  render: () => (
    <div style={{ 
      position: 'relative', 
      width: '400px', 
      height: '300px', 
      border: '1px dashed #D2D5DA',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <p style={{ color: '#6B7280', fontSize: '14px' }}>Container area</p>
      
      <DropdownMenu 
        items={defaultItems} 
        size="default"
        position={{ top: 20, right: 20 }}
        className="absolute"
      />
    </div>
  ),
};
