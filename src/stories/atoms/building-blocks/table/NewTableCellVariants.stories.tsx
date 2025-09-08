import type { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Atoms/~ Building Blocks/Table/New Table Cell Variants',
  component: TableCell,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# New Table Cell Variants from Figma

This showcases the newly implemented table cell variants based on Figma designs:

## Icon Group Cells
- **Multiple Icons**: Email, Edit, Link, Share icons in horizontal layout
- **Size Variants**: Default (72px) and Small (52px) height
- **Background Options**: Seafoam, White, Gray, Disabled, Hover states

## CTA Button Cells  
- **Single Action**: Edit button aligned to the right
- **Responsive Sizing**: Adapts button size based on cell size
- **State Management**: Supports disabled and hover states

## Button Group Cells
- **Multiple Actions**: Edit and Delete buttons with proper spacing
- **Consistent Styling**: Matches design system button patterns
- **Full State Support**: All background variants and interaction states

Each variant maintains pixel-perfect alignment with the Figma specifications and includes proper hover effects, disabled states, and responsive behavior.
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default'],
    },
    type: {
      control: { type: 'select' },
      options: ['icon-group', 'cta-button', 'button-group'],
    },
    background: {
      control: { type: 'select' },
      options: ['default', 'alt-seafoam-25', 'alt-gray-50', 'disabled', 'hover'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    size: 'default',
    type: 'icon-group',
    background: 'default',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

// Basic variants
export const IconGroupDefault: Story = {
  args: {
    type: 'icon-group',
    background: 'default',
  },
};

export const CTAButtonDefault: Story = {
  args: {
    type: 'cta-button',
    background: 'default',
  },
};

export const ButtonGroupDefault: Story = {
  args: {
    type: 'button-group',
    background: 'default',
  },
};

// Complete Figma Implementation
export const FigmaImplementation: Story = {
  render: () => (
    <div style={{ 
      padding: '24px',
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px',
      background: '#F9FAFB',
      minHeight: '100vh'
    }}>
      <div>
        <h1 style={{ 
          margin: '0 0 8px 0', 
          fontSize: '24px', 
          fontWeight: '600',
          color: '#111827'
        }}>
          New Table Cell Variants - Figma Implementation
        </h1>
        <p style={{ 
          margin: '0 0 24px 0', 
          color: '#6B7280', 
          fontSize: '16px' 
        }}>
          Pixel-perfect implementation of icon group, CTA button, and button group table cell variants
        </p>
      </div>

      {/* Icon Group Cells */}
      <div>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '20px', 
          fontWeight: '600',
          color: '#374151'
        }}>
          Icon Group Cells
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '16px' 
        }}>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Default Size - Seafoam
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell size="default" type="icon-group" background="alt-seafoam-25" />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Default Size - White
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell size="default" type="icon-group" background="default" />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Small Size - Seafoam
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell size="small" type="icon-group" background="alt-seafoam-25" />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Small Size - White
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell size="small" type="icon-group" background="default" />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Gray Background
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell size="default" type="icon-group" background="alt-gray-50" />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Disabled State
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell size="default" type="icon-group" background="disabled" disabled={true} />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Hover State
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell size="default" type="icon-group" background="hover" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button Cells */}
      <div>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '20px', 
          fontWeight: '600',
          color: '#374151'
        }}>
          CTA Button Cells
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '16px' 
        }}>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Default Size - Seafoam
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell 
                size="default" 
                type="cta-button" 
                background="alt-seafoam-25"
                onEdit={() => console.log('Edit clicked')}
              />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Default Size - White
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell 
                size="default" 
                type="cta-button" 
                background="default"
                onEdit={() => console.log('Edit clicked')}
              />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Small Size - Seafoam
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell 
                size="small" 
                type="cta-button" 
                background="alt-seafoam-25"
                onEdit={() => console.log('Edit clicked')}
              />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Small Size - White
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell 
                size="small" 
                type="cta-button" 
                background="default"
                onEdit={() => console.log('Edit clicked')}
              />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Gray Background
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell 
                size="default" 
                type="cta-button" 
                background="alt-gray-50"
                onEdit={() => console.log('Edit clicked')}
              />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Disabled State
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell 
                size="default" 
                type="cta-button" 
                background="disabled" 
                disabled={true}
                onEdit={() => console.log('Edit clicked')}
              />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Hover State
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell 
                size="default" 
                type="cta-button" 
                background="hover"
                onEdit={() => console.log('Edit clicked')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Button Group Cells */}
      <div>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '20px', 
          fontWeight: '600',
          color: '#374151'
        }}>
          Button Group Cells
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '16px' 
        }}>
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Default Size - Seafoam
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell 
                size="default" 
                type="button-group" 
                background="alt-seafoam-25"
                onEdit={() => console.log('Edit clicked')}
                onDelete={() => console.log('Delete clicked')}
              />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Default Size - White
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell 
                size="default" 
                type="button-group" 
                background="default"
                onEdit={() => console.log('Edit clicked')}
                onDelete={() => console.log('Delete clicked')}
              />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Small Size - Seafoam
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell 
                size="small" 
                type="button-group" 
                background="alt-seafoam-25"
                onEdit={() => console.log('Edit clicked')}
                onDelete={() => console.log('Delete clicked')}
              />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Small Size - White
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell 
                size="small" 
                type="button-group" 
                background="default"
                onEdit={() => console.log('Edit clicked')}
                onDelete={() => console.log('Delete clicked')}
              />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Gray Background
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell 
                size="default" 
                type="button-group" 
                background="alt-gray-50"
                onEdit={() => console.log('Edit clicked')}
                onDelete={() => console.log('Delete clicked')}
              />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Disabled State
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell 
                size="default" 
                type="button-group" 
                background="disabled" 
                disabled={true}
                onEdit={() => console.log('Edit clicked')}
                onDelete={() => console.log('Delete clicked')}
              />
            </div>
          </div>
          
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              Hover State
            </h3>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
              <TableCell 
                size="default" 
                type="button-group" 
                background="hover"
                onEdit={() => console.log('Edit clicked')}
                onDelete={() => console.log('Delete clicked')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Complete Layout Example */}
      <div>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '20px', 
          fontWeight: '600',
          color: '#374151'
        }}>
          Complete Table Layout Example
        </h2>
        <p style={{ 
          margin: '0 0 16px 0', 
          color: '#6B7280', 
          fontSize: '14px' 
        }}>
          Example showing how these cell variants would appear in an actual table layout
        </p>
        <div style={{ 
          border: '1px solid #E5E7EB', 
          borderRadius: '8px', 
          overflow: 'hidden',
          background: 'white'
        }}>
          <TableCell size="default" type="icon-group" background="alt-seafoam-25" />
          <TableCell size="default" type="icon-group" background="default" />
          <TableCell size="small" type="icon-group" background="alt-seafoam-25" />
          <TableCell size="small" type="icon-group" background="default" />
          <TableCell size="default" type="cta-button" background="alt-seafoam-25" onEdit={() => console.log('Edit')} />
          <TableCell size="default" type="cta-button" background="default" onEdit={() => console.log('Edit')} />
          <TableCell size="small" type="cta-button" background="alt-seafoam-25" onEdit={() => console.log('Edit')} />
          <TableCell size="small" type="cta-button" background="default" onEdit={() => console.log('Edit')} />
          <TableCell size="default" type="button-group" background="alt-seafoam-25" onEdit={() => console.log('Edit')} onDelete={() => console.log('Delete')} />
          <TableCell size="default" type="button-group" background="default" onEdit={() => console.log('Edit')} onDelete={() => console.log('Delete')} />
          <TableCell size="small" type="button-group" background="alt-seafoam-25" onEdit={() => console.log('Edit')} onDelete={() => console.log('Delete')} />
          <TableCell size="small" type="button-group" background="default" onEdit={() => console.log('Edit')} onDelete={() => console.log('Delete')} />
          <TableCell size="default" type="icon-group" background="alt-gray-50" />
          <TableCell size="default" type="icon-group" background="disabled" disabled={true} />
          <TableCell size="default" type="icon-group" background="hover" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete implementation of all new table cell variants exactly matching the Figma designs. This includes icon group cells with 4 icons, CTA button cells with single Edit button, and button group cells with Edit and Delete buttons. All variants support multiple sizes, backgrounds, and states.',
      },
    },
  },
};

// State Demonstration
export const StateDemonstration: Story = {
  render: () => (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
          Interactive States Demonstration
        </h3>
        <p style={{ margin: '0 0 16px 0', color: '#6D7280', fontSize: '14px' }}>
          Click the buttons to see interactive behavior in action
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Default State</h4>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell 
                type="cta-button" 
                background="default"
                onEdit={() => alert('Edit action triggered!')}
              />
            </div>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell 
                type="button-group" 
                background="default"
                onEdit={() => alert('Edit action triggered!')}
                onDelete={() => alert('Delete action triggered!')}
              />
            </div>
          </div>
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Hover State (Simulated)</h4>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell 
                type="cta-button" 
                background="hover"
                onEdit={() => alert('Edit action triggered!')}
              />
            </div>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell 
                type="button-group" 
                background="hover"
                onEdit={() => alert('Edit action triggered!')}
                onDelete={() => alert('Delete action triggered!')}
              />
            </div>
          </div>
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Disabled State</h4>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell 
                type="cta-button" 
                background="disabled"
                disabled={true}
                onEdit={() => alert('This should not trigger')}
              />
            </div>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
              <TableCell 
                type="button-group" 
                background="disabled"
                disabled={true}
                onEdit={() => alert('This should not trigger')}
                onDelete={() => alert('This should not trigger')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration of all button states including working click handlers, hover effects, and disabled states.',
      },
    },
  },
};
