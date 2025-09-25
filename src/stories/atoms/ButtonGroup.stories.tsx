import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from './Button';
import { SplitButton } from './button/SplitButton';

// Import the alarm icon for examples
const AlarmIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M4.5 5.175L2.9025 3.585L3.96 2.5275L5.55 4.125L4.5 5.175ZM9.75 0.75V3H8.25V0.75H9.75ZM15.0975 3.585L13.5 5.175L12.45 4.125L14.04 2.5275L15.0975 3.585ZM3.375 7.875V9.375H1.125V7.875H3.375ZM14.625 7.875H16.875V9.375H14.625V7.875ZM4.5 15H13.5C13.8978 15 14.2794 15.158 14.5607 15.4393C14.842 15.7206 15 16.1022 15 16.5H3C3 16.1022 3.15804 15.7206 3.43934 15.4393C3.72064 15.158 4.10218 15 4.5 15ZM9 3.75C10.1935 3.75 11.3381 4.22411 12.182 5.06802C13.0259 5.91193 13.5 7.05653 13.5 8.25V14.25H4.5V8.25C4.5 7.05653 4.97411 5.91193 5.81802 5.06802C6.66193 4.22411 7.80653 3.75 9 3.75Z" fill="currentColor"/>
    </g>
  </svg>
);

const meta: Meta<typeof ButtonGroup> = {
  title: 'Atoms/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ButtonGroup component for organizing multiple buttons in cohesive layouts. Supports different sizes, orientations, and gap configurations. Matches the Figma design specifications for button/group layouts.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['extra-small', 'small', 'default', 'large'],
      description: 'Size variant for all buttons in the group',
    },
    type: {
      control: 'select',
      options: ['default', 'split', 'icon-only'],
      description: 'Group layout type',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the button group',
    },
    gap: {
      control: 'select',
      options: ['none', 'small', 'default', 'large'],
      description: 'Gap between buttons',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width styling',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

// Menu items for split button examples
const menuItems = [
  { id: 'option1', label: 'Option 1', onClick: () => console.log('Option 1') },
  { id: 'option2', label: 'Option 2', onClick: () => console.log('Option 2') },
  { id: 'option3', label: 'Option 3', onClick: () => console.log('Option 3') },
];

// Basic button group examples
export const Default: Story = {
  render: () => (
    <ButtonGroup size="default" type="default">
      <Button type="primary" leadingIcon={<AlarmIcon />} trailingIcon={<AlarmIcon />}>
        Label
      </Button>
      <Button type="ghost" leadingIcon={<AlarmIcon />} trailingIcon={<AlarmIcon />}>
        Label
      </Button>
    </ButtonGroup>
  ),
};

export const SplitButtonGroup: Story = {
  render: () => (
    <ButtonGroup size="default" type="split">
      <SplitButton type="primary" menuItems={menuItems}>
        Label
      </SplitButton>
      <Button type="ghost">
        Label
      </Button>
    </ButtonGroup>
  ),
};

export const IconOnlyGroup: Story = {
  render: () => (
    <ButtonGroup size="default" type="icon-only">
      <Button type="primary" iconOnly icon={<AlarmIcon />} />
      <Button type="ghost" iconOnly icon={<AlarmIcon />} />
    </ButtonGroup>
  ),
};

// Size variants showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
          Button Group Sizes
        </h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#666', marginBottom: '24px' }}>
          All available size variants for button groups
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        {/* Extra Small */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888' }}>Extra Small</h6>
          <ButtonGroup size="extra-small" type="default">
            <Button type="primary" leadingIcon={<AlarmIcon size={14} />}>
              Button w/ leading icon
            </Button>
            <Button type="ghost" leadingIcon={<AlarmIcon size={14} />}>
              Button w/ leading icon
            </Button>
          </ButtonGroup>
        </div>
        
        {/* Small */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888' }}>Small</h6>
          <ButtonGroup size="small" type="default">
            <Button type="primary" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<AlarmIcon size={14} />}>
              Label
            </Button>
            <Button type="ghost" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<AlarmIcon size={14} />}>
              Label
            </Button>
          </ButtonGroup>
        </div>
        
        {/* Default */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888' }}>Default</h6>
          <ButtonGroup size="default" type="default">
            <Button type="primary" leadingIcon={<AlarmIcon />} trailingIcon={<AlarmIcon />}>
              Label
            </Button>
            <Button type="ghost" leadingIcon={<AlarmIcon />} trailingIcon={<AlarmIcon />}>
              Label
            </Button>
          </ButtonGroup>
        </div>
        
        {/* Large */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888' }}>Large</h6>
          <ButtonGroup size="large" type="default">
            <Button type="primary" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<AlarmIcon size={20} />}>
              Label
            </Button>
            <Button type="ghost" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<AlarmIcon size={20} />}>
              Label
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all available button group sizes with consistent button styling.',
      },
    },
  },
};

// Type variants showcase
export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
          Button Group Types
        </h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#666', marginBottom: '24px' }}>
          Different layout types for button groups
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {/* Default Type */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888' }}>Default</h6>
          <ButtonGroup size="default" type="default">
            <Button type="primary" leadingIcon={<AlarmIcon />} trailingIcon={<AlarmIcon />}>
              Label
            </Button>
            <Button type="ghost" leadingIcon={<AlarmIcon />} trailingIcon={<AlarmIcon />}>
              Label
            </Button>
          </ButtonGroup>
        </div>
        
        {/* Split Type */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888' }}>Split</h6>
          <ButtonGroup size="default" type="split">
            <SplitButton type="primary" menuItems={menuItems}>
              Label
            </SplitButton>
            <Button type="ghost">
              Label
            </Button>
          </ButtonGroup>
        </div>
        
        {/* Icon Only Type */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <h6 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: '#888' }}>Icon Only</h6>
          <ButtonGroup size="default" type="icon-only">
            <Button type="primary" iconOnly icon={<AlarmIcon />} />
            <Button type="ghost" iconOnly icon={<AlarmIcon />} />
          </ButtonGroup>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all available button group types with their specific layouts.',
      },
    },
  },
};

// Figma Design Showcase
export const FigmaShowcase: Story = {
  render: () => (
    <div className="button-group-showcase">
      <div>
        <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
          Button Groups - Figma Implementation
        </h4>
        <p style={{ margin: 0, fontSize: '14px', color: '#666', marginBottom: '32px' }}>
          Complete implementation of button/group component from Figma designs
        </p>
      </div>
      
      {/* Small Size Groups */}
      <div className="button-group-showcase-section">
        <h5 className="button-group-showcase-title">Small Size Groups</h5>
        <div className="button-group-showcase-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Default</span>
            <ButtonGroup size="small" type="default" className="figma-layout">
              <Button type="primary" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<AlarmIcon size={14} />}>
                Label
              </Button>
              <Button type="ghost" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<AlarmIcon size={14} />}>
                Label
              </Button>
            </ButtonGroup>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Split</span>
            <ButtonGroup size="small" type="split" className="figma-layout">
              <SplitButton type="primary" size="small" menuItems={menuItems}>
                Label
              </SplitButton>
              <Button type="ghost" size="small">
                Label
              </Button>
            </ButtonGroup>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Icon Only</span>
            <ButtonGroup size="small" type="icon-only" className="figma-layout">
              <Button type="primary" size="small" iconOnly icon={<AlarmIcon size={14} />} />
              <Button type="ghost" size="small" iconOnly icon={<AlarmIcon size={14} />} />
            </ButtonGroup>
          </div>
        </div>
      </div>
      
      {/* Default Size Groups */}
      <div className="button-group-showcase-section">
        <h5 className="button-group-showcase-title">Default Size Groups</h5>
        <div className="button-group-showcase-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Default</span>
            <ButtonGroup size="default" type="default" className="figma-layout">
              <Button type="primary" leadingIcon={<AlarmIcon />} trailingIcon={<AlarmIcon />}>
                Label
              </Button>
              <Button type="ghost" leadingIcon={<AlarmIcon />} trailingIcon={<AlarmIcon />}>
                Label
              </Button>
            </ButtonGroup>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Split</span>
            <ButtonGroup size="default" type="split" className="figma-layout">
              <SplitButton type="primary" size="default" menuItems={menuItems}>
                Label
              </SplitButton>
              <Button type="ghost" size="default">
                Label
              </Button>
            </ButtonGroup>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Icon Only</span>
            <ButtonGroup size="default" type="icon-only" className="figma-layout">
              <Button type="primary" size="default" iconOnly icon={<AlarmIcon />} />
              <Button type="ghost" size="default" iconOnly icon={<AlarmIcon />} />
            </ButtonGroup>
          </div>
        </div>
      </div>
      
      {/* Large Size Groups */}
      <div className="button-group-showcase-section">
        <h5 className="button-group-showcase-title">Large Size Groups</h5>
        <div className="button-group-showcase-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Default</span>
            <ButtonGroup size="large" type="default" className="figma-layout">
              <Button type="primary" size="large" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<AlarmIcon size={20} />}>
                Label
              </Button>
              <Button type="ghost" size="large" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<AlarmIcon size={20} />}>
                Label
              </Button>
            </ButtonGroup>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Split</span>
            <ButtonGroup size="large" type="split" className="figma-layout">
              <SplitButton type="primary" size="large" menuItems={menuItems}>
                Label
              </SplitButton>
              <Button type="ghost" size="large">
                Label
              </Button>
            </ButtonGroup>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Icon Only</span>
            <ButtonGroup size="large" type="icon-only" className="figma-layout">
              <Button type="primary" size="large" iconOnly icon={<AlarmIcon size={20} />} />
              <Button type="ghost" size="large" iconOnly icon={<AlarmIcon size={20} />} />
            </ButtonGroup>
          </div>
        </div>
      </div>
      
      {/* Extra Small Size Groups */}
      <div className="button-group-showcase-section">
        <h5 className="button-group-showcase-title">Extra Small Size Groups</h5>
        <div className="button-group-showcase-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Default</span>
            <ButtonGroup size="extra-small" type="default" className="figma-layout">
              <Button type="primary" size="extra-small" leadingIcon={<AlarmIcon size={14} />}>
                Button w/ leading icon
              </Button>
              <Button type="ghost" size="extra-small" leadingIcon={<AlarmIcon size={14} />}>
                Button w/ leading icon
              </Button>
            </ButtonGroup>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Split</span>
            <ButtonGroup size="extra-small" type="split" className="figma-layout">
              <SplitButton type="primary" size="extra-small" menuItems={menuItems}>
                Label
              </SplitButton>
              <Button type="ghost" size="extra-small">
                Label
              </Button>
            </ButtonGroup>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>Icon Only</span>
            <ButtonGroup size="extra-small" type="icon-only" className="figma-layout">
              <Button type="primary" size="extra-small" iconOnly icon={<AlarmIcon size={14} />} />
              <Button type="ghost" size="extra-small" iconOnly icon={<AlarmIcon size={14} />} />
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all button group configurations matching the Figma button/group designs with accurate sizing, spacing, and layout.',
      },
    },
  },
};

// Interactive examples
export const Interactive: Story = {
  render: () => {
    const [selectedAction, setSelectedAction] = React.useState<string>('');
    
    const handleAction = (action: string) => {
      setSelectedAction(action);
      setTimeout(() => setSelectedAction(''), 2000);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
            Interactive Button Groups
          </h4>
          <p style={{ margin: 0, fontSize: '14px', color: '#666', marginBottom: '16px' }}>
            Click any button to see the interaction
          </p>
          {selectedAction && (
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
              Action: {selectedAction}
            </p>
          )}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <ButtonGroup size="default" type="default">
            <Button type="primary" onClick={() => handleAction('Primary Action')}>
              Primary
            </Button>
            <Button type="secondary" onClick={() => handleAction('Secondary Action')}>
              Secondary
            </Button>
            <Button type="ghost" onClick={() => handleAction('Ghost Action')}>
              Ghost
            </Button>
          </ButtonGroup>
          
          <ButtonGroup size="default" type="split">
            <SplitButton 
              type="primary" 
              menuItems={[
                { id: 'save', label: 'Save', onClick: () => handleAction('Save from menu') },
                { id: 'save-as', label: 'Save As', onClick: () => handleAction('Save As from menu') },
                { id: 'export', label: 'Export', onClick: () => handleAction('Export from menu') },
              ]}
              onClick={() => handleAction('Split Button Main')}
            >
              Actions
            </SplitButton>
            <Button type="ghost" onClick={() => handleAction('Cancel')}>
              Cancel
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive button groups with working click handlers and visual feedback.',
      },
    },
  },
};
