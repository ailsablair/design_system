import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from './MenuItem';

const meta: Meta<typeof MenuItem> = {
  title: 'Atoms/🧱 Building Blocks/MenuItem/Figma Showcase',
  component: MenuItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Updated MenuItem component showcasing the exact implementation from Figma designs. Features precise styling, borders, padding, and menu structure matching the building-blocks/split-button/menu design specifications.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

// Complete menu structure as shown in Figma
export const CompleteFigmaMenu: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px', 
      padding: '32px',
      background: '#f8f9fa',
      borderRadius: '12px'
    }}>
      <div>
        <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
          Menu Items - Figma Design Implementation
        </h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#666', marginBottom: '32px' }}>
          Complete implementation of building-blocks/split-button/menu/parts from Figma designs
        </p>
      </div>
      
      {/* Default Size Menu */}
      <div>
        <h5 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#888', marginBottom: '16px' }}>
          Default Size Menu
        </h5>
        <div className="menu-container" style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          minWidth: '140px',
          maxWidth: '200px',
          background: 'var(--base-white)',
          borderRadius: 'var(--spacing-radius-6px)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}>
          <MenuItem type="top" size="default" state="default">
            This is the top
          </MenuItem>
          <MenuItem type="default" size="default" state="default">
            This is the middle
          </MenuItem>
          <MenuItem type="default" size="default" state="default">
            This is the middle
          </MenuItem>
          <MenuItem type="bottom" size="default" state="default">
            This is the bottom
          </MenuItem>
        </div>
      </div>
      
      {/* Small Size Menu */}
      <div>
        <h5 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#888', marginBottom: '16px' }}>
          Small Size Menu
        </h5>
        <div className="menu-container" style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          minWidth: '140px',
          maxWidth: '200px',
          background: 'var(--base-white)',
          borderRadius: 'var(--spacing-radius-6px)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}>
          <MenuItem type="top" size="small" state="default">
            This is the top
          </MenuItem>
          <MenuItem type="default" size="small" state="default">
            This is the middle
          </MenuItem>
          <MenuItem type="default" size="small" state="default">
            This is the middle
          </MenuItem>
          <MenuItem type="bottom" size="small" state="default">
            This is the bottom
          </MenuItem>
        </div>
      </div>
      
      {/* Large Size Menu */}
      <div>
        <h5 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#888', marginBottom: '16px' }}>
          Large Size Menu
        </h5>
        <div className="menu-container" style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          minWidth: '140px',
          maxWidth: '200px',
          background: 'var(--base-white)',
          borderRadius: 'var(--spacing-radius-6px)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}>
          <MenuItem type="top" size="large" state="default">
            This is the top
          </MenuItem>
          <MenuItem type="default" size="large" state="default">
            This is the middle
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
        story: 'Complete showcase of menu items in different sizes as they appear in the Figma designs, with proper borders, padding, and container styling.',
      },
    },
  },
};

// State variations showcase
export const MenuStatesShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px', 
      padding: '32px',
      background: '#f8f9fa',
      borderRadius: '12px'
    }}>
      <div>
        <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
          Menu Item States
        </h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#666', marginBottom: '32px' }}>
          All interactive states for menu items matching Figma specifications
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
        {/* Default State */}
        <div>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888', marginBottom: '12px' }}>
            Default State
          </h6>
          <div className="menu-container" style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            minWidth: '140px',
            maxWidth: '200px',
            background: 'var(--base-white)',
            borderRadius: 'var(--spacing-radius-6px)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}>
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
        
        {/* Hover State */}
        <div>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888', marginBottom: '12px' }}>
            Hover State
          </h6>
          <div className="menu-container" style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            minWidth: '140px',
            maxWidth: '200px',
            background: 'var(--base-white)',
            borderRadius: 'var(--spacing-radius-6px)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}>
            <MenuItem type="top" size="default" state="default">
              This is the top
            </MenuItem>
            <MenuItem type="default" size="default" state="hover" className="force-hover">
              This is the middle
            </MenuItem>
            <MenuItem type="bottom" size="default" state="default">
              This is the bottom
            </MenuItem>
          </div>
        </div>
        
        {/* Clicked State */}
        <div>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888', marginBottom: '12px' }}>
            Clicked State
          </h6>
          <div className="menu-container" style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            minWidth: '140px',
            maxWidth: '200px',
            background: 'var(--base-white)',
            borderRadius: 'var(--spacing-radius-6px)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}>
            <MenuItem type="top" size="default" state="default">
              This is the top
            </MenuItem>
            <MenuItem type="default" size="default" state="clicked" className="force-clicked">
              This is the middle
            </MenuItem>
            <MenuItem type="bottom" size="default" state="default">
              This is the bottom
            </MenuItem>
          </div>
        </div>
        
        {/* Disabled State */}
        <div>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888', marginBottom: '12px' }}>
            Disabled State
          </h6>
          <div className="menu-container" style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            minWidth: '140px',
            maxWidth: '200px',
            background: 'var(--base-white)',
            borderRadius: 'var(--spacing-radius-6px)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}>
            <MenuItem type="top" size="default" state="default">
              This is the top
            </MenuItem>
            <MenuItem type="default" size="default" disabled>
              This is the middle
            </MenuItem>
            <MenuItem type="bottom" size="default" state="default">
              This is the bottom
            </MenuItem>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all interactive states for menu items as specified in the Figma designs.',
      },
    },
  },
};

// Interactive menu with all features
export const InteractiveFigmaMenu: Story = {
  render: () => {
    const [selectedItem, setSelectedItem] = React.useState<string>('');
    
    const handleItemClick = (item: string) => {
      setSelectedItem(item);
      setTimeout(() => setSelectedItem(''), 2000); // Reset after 2 seconds
    };

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '24px', 
        padding: '32px',
        alignItems: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
            Interactive Figma Menu
          </h4>
          <p style={{ margin: 0, fontSize: '14px', color: '#666', marginBottom: '16px' }}>
            Click any menu item to see the interaction
          </p>
          {selectedItem && (
            <p style={{ 
              margin: 0, 
              fontSize: '12px', 
              color: '#28a745',
              fontWeight: '600',
              padding: '8px 16px',
              background: '#d4edda',
              borderRadius: '4px',
              border: '1px solid #c3e6cb'
            }}>
              Selected: {selectedItem}
            </p>
          )}
        </div>
        
        <div className="menu-container" style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          minWidth: '140px',
          maxWidth: '200px',
          background: 'var(--base-white)',
          borderRadius: 'var(--spacing-radius-6px)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}>
          <MenuItem 
            type="top" 
            size="default" 
            onClick={() => handleItemClick('This is the top')}
          >
            This is the top
          </MenuItem>
          <MenuItem 
            type="default" 
            size="default" 
            onClick={() => handleItemClick('This is the middle (1)')}
          >
            This is the middle
          </MenuItem>
          <MenuItem 
            type="default" 
            size="default" 
            onClick={() => handleItemClick('This is the middle (2)')}
          >
            This is the middle
          </MenuItem>
          <MenuItem 
            type="bottom" 
            size="default" 
            onClick={() => handleItemClick('This is the bottom')}
          >
            This is the bottom
          </MenuItem>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive menu demonstrating the complete implementation with click handlers and visual feedback.',
      },
    },
  },
};
