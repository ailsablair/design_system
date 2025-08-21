import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label, AlarmIcon, ArrowDownCircleIcon } from '../../atoms/Label';

const meta: Meta<typeof Label> = {
  title: 'Design System/Figma Showcase Files/Label Extended Figma Showcase',
  component: Label,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample menu items for split variant
const sampleMenuItems = [
  { id: '1', label: 'Option 1', onClick: () => console.log('Option 1 clicked') },
  { id: '2', label: 'Option 2', onClick: () => console.log('Option 2 clicked') },
  { id: '3', label: 'Option 3', onClick: () => console.log('Option 3 clicked') },
];

export const FigmaDesignReplication: Story = {
  render: () => (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#f8f9fa',
      fontFamily: 'Archivo, -apple-system, Roboto, Helvetica, sans-serif'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '16px',
        maxWidth: '978px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}>
        
        {/* Small Size Row */}
        {/* Default with both icons */}
        <Label 
          size="small" 
          type="default" 
          leadingIcon={<AlarmIcon size={14} />} 
          trailingIcon={<ArrowDownCircleIcon size={14} />}
        >
          Label
        </Label>
        
        {/* Ghost with both icons */}
        <Label 
          size="small" 
          type="ghost" 
          leadingIcon={<AlarmIcon size={14} />} 
          trailingIcon={<ArrowDownCircleIcon size={14} />}
        >
          Label
        </Label>
        
        {/* Split default */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <Label 
            size="small" 
            type="default" 
            split={true} 
            menuItems={sampleMenuItems}
          >
            Label
          </Label>
          <Label 
            size="small" 
            type="ghost"
          >
            Label
          </Label>
        </div>
        
        {/* Icon only variants */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <Label 
            size="small" 
            type="default" 
            iconOnly={true} 
            icon={<AlarmIcon size={14} />} 
          />
          <Label 
            size="small" 
            type="ghost" 
            iconOnly={true} 
            icon={<AlarmIcon size={14} />} 
          />
        </div>

        {/* Default Size Row */}
        {/* Default with both icons */}
        <Label 
          size="default" 
          type="default" 
          leadingIcon={<AlarmIcon size={18} />} 
          trailingIcon={<ArrowDownCircleIcon size={18} />}
        >
          Label
        </Label>
        
        {/* Ghost with both icons */}
        <Label 
          size="default" 
          type="ghost" 
          leadingIcon={<AlarmIcon size={18} />} 
          trailingIcon={<ArrowDownCircleIcon size={18} />}
        >
          Label
        </Label>
        
        {/* Split default */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <Label 
            size="default" 
            type="default" 
            split={true} 
            menuItems={sampleMenuItems}
          >
            Label
          </Label>
          <Label 
            size="default" 
            type="ghost"
          >
            Label
          </Label>
        </div>
        
        {/* Icon only variants */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <Label 
            size="default" 
            type="default" 
            iconOnly={true} 
            icon={<AlarmIcon size={18} />} 
          />
          <Label 
            size="default" 
            type="ghost" 
            iconOnly={true} 
            icon={<AlarmIcon size={18} />} 
          />
        </div>

        {/* Large Size Row */}
        {/* Default with both icons */}
        <Label 
          size="large" 
          type="default" 
          leadingIcon={<AlarmIcon size={20} />} 
          trailingIcon={<ArrowDownCircleIcon size={20} />}
        >
          Label
        </Label>
        
        {/* Ghost with both icons */}
        <Label 
          size="large" 
          type="ghost" 
          leadingIcon={<AlarmIcon size={20} />} 
          trailingIcon={<ArrowDownCircleIcon size={20} />}
        >
          Label
        </Label>
        
        {/* Split default */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <Label 
            size="large" 
            type="default" 
            split={true} 
            menuItems={sampleMenuItems}
          >
            Label
          </Label>
          <Label 
            size="large" 
            type="ghost"
          >
            Label
          </Label>
        </div>
        
        {/* Icon only variants */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <Label 
            size="large" 
            type="default" 
            iconOnly={true} 
            icon={<AlarmIcon size={20} />} 
          />
          <Label 
            size="large" 
            type="ghost" 
            iconOnly={true} 
            icon={<AlarmIcon size={20} />} 
          />
        </div>

        {/* Extra Small Size Row */}
        {/* Default with leading icon */}
        <Label 
          size="extra-small" 
          type="default" 
          leadingIcon={<AlarmIcon size={14} />}
        >
          Button w/ leading icon
        </Label>
        
        {/* Ghost with leading icon */}
        <Label 
          size="extra-small" 
          type="ghost" 
          leadingIcon={<AlarmIcon size={14} />}
        >
          Button w/ leading icon
        </Label>
        
        {/* Split extra-small */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <Label 
            size="extra-small" 
            type="default" 
            split={true} 
            menuItems={sampleMenuItems}
          >
            Label
          </Label>
          <Label 
            size="extra-small" 
            type="ghost"
          >
            Label
          </Label>
        </div>
        
        {/* Icon only variants */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <Label 
            size="extra-small" 
            type="default" 
            iconOnly={true} 
            icon={<AlarmIcon size={14} />} 
          />
          <Label 
            size="extra-small" 
            type="ghost" 
            iconOnly={true} 
            icon={<AlarmIcon size={14} />} 
          />
        </div>
      </div>

      {/* Title and description */}
      <div style={{ marginTop: '32px', maxWidth: '978px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#1f2937'
        }}>
          Label Component Design System
        </h2>
        <p style={{ 
          fontSize: '16px', 
          color: '#6b7280', 
          lineHeight: 1.6,
          marginBottom: '24px'
        }}>
          A comprehensive label component that supports multiple sizes (extra-small, small, default, large), 
          types (default, ghost), and configurations including icon-only and split variants with dropdown functionality. 
          This implementation exactly matches the Figma design specifications.
        </p>

        <h3 style={{ 
          fontSize: '18px', 
          fontWeight: 600, 
          marginBottom: '12px',
          color: '#1f2937'
        }}>
          Features:
        </h3>
        <ul style={{ 
          fontSize: '14px', 
          color: '#6b7280', 
          lineHeight: 1.6,
          paddingLeft: '20px'
        }}>
          <li>Four size variants: extra-small, small, default, and large</li>
          <li>Two type variants: default (primary blue) and ghost (white with border)</li>
          <li>Leading and trailing icon support</li>
          <li>Icon-only variant for compact interfaces</li>
          <li>Split variant with dropdown menu functionality</li>
          <li>Full keyboard navigation and accessibility support</li>
          <li>Responsive design with proper hover and focus states</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exact replication of the Figma design showing all label variants and sizes in a grid layout.',
      },
    },
  },
};
