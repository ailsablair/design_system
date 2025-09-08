import type { Meta, StoryObj } from '@storybook/react';
import { AccordionHeader } from './AccordionHeader';
import React, { useState } from 'react';

const meta: Meta<typeof AccordionHeader> = {
  title: 'Atoms/ZZ 🧱 Building Blocks/AccordionHeader',
  component: AccordionHeader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# AccordionHeader Component

A comprehensive accordion header component implementing the exact Figma design specifications with all 72 variants.

This component represents the header portion of an accordion with:
- Bell notification icon on the left
- Title text in the middle  
- Expand/collapse icon on the right
- Multiple size, state, and style variants
- Pixel-perfect match to Figma design

## Features

- **Sizes**: Small, Default, Large with exact typography and dimensions
- **Icon Styles**: Plus/minus or chevron expand/collapse icons
- **States**: Default, Hover, Selected with appropriate color changes
- **Positions**: Top, Middle, Bottom for different layout contexts
- **Content Types**: Default and Header variants
- **Interactive**: Click handling and keyboard navigation
- **Accessible**: ARIA attributes and focus management
- **Responsive**: Mobile-optimized layout and typography

## Usage

\`\`\`tsx
import { AccordionHeader } from './AccordionHeader';

<AccordionHeader
  size="default"
  iconStyle="plus"
  position="middle"
  contentType="default"
  open={false}
  state="default"
  title="This is a section title or a long question taking up a lot of space..."
  onClick={() => {}}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant affecting typography and dimensions - matches Figma "size" property',
    },
    iconStyle: {
      control: 'select',
      options: ['plus', 'default (chevron)'],
      description: 'Style of expand/collapse icon - matches Figma "icon-style" property',
    },
    position: {
      control: 'select',
      options: ['default (middle)', 'top', 'bottom'],
      description: 'Position variant for layout context - matches Figma "position" property',
    },
    contentType: {
      control: 'select',
      options: ['N/A', 'header'],
      description: 'Content type variant - matches Figma "content-type" property',
    },
    open: {
      control: 'boolean',
      description: 'Whether the accordion is expanded - matches Figma "open" property (False/True)',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'selected'],
      description: 'Visual state of the header - matches Figma "state" property',
    },
    title: {
      control: 'text',
      description: 'Title text content',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
  },
  args: {
    size: 'default',
    iconStyle: 'plus',
    position: 'default (middle)',
    contentType: 'N/A',
    open: false,
    state: 'default',
    title: 'This is a section title or a long question taking up a lot of space...',
  },
};

export default meta;
type Story = StoryObj<typeof AccordionHeader>;

// ===== BASIC EXAMPLES ===== //

export const Default: Story = {
  args: {
    size: 'default',
    iconStyle: 'plus',
    position: 'middle',
    contentType: 'default',
    open: false,
    state: 'default',
  },
};

export const ChevronIcon: Story = {
  args: {
    ...Default.args,
    iconStyle: 'default (chevron)',
  },
};

export const OpenState: Story = {
  args: {
    ...Default.args,
    open: true,
  },
};

export const HoverState: Story = {
  args: {
    ...Default.args,
    state: 'hover',
  },
};

export const SelectedState: Story = {
  args: {
    ...Default.args,
    state: 'selected',
  },
};

// ===== SIZE VARIANTS ===== //

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>Small Size</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <AccordionHeader size="small" iconStyle="plus" open={false} />
          <AccordionHeader size="small" iconStyle="plus" open={true} />
          <AccordionHeader size="small" iconStyle="chevron" open={false} />
          <AccordionHeader size="small" iconStyle="chevron" open={true} />
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>Default Size</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <AccordionHeader size="default" iconStyle="plus" open={false} />
          <AccordionHeader size="default" iconStyle="plus" open={true} />
          <AccordionHeader size="default" iconStyle="chevron" open={false} />
          <AccordionHeader size="default" iconStyle="chevron" open={true} />
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>Large Size</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <AccordionHeader size="large" iconStyle="plus" open={false} />
          <AccordionHeader size="large" iconStyle="plus" open={true} />
          <AccordionHeader size="large" iconStyle="chevron" open={false} />
          <AccordionHeader size="large" iconStyle="chevron" open={true} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All size variants with both icon styles and open/closed states.',
      },
    },
  },
};

// ===== STATE VARIANTS ===== //

export const StateVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>Default State</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <AccordionHeader state="default" iconStyle="plus" open={false} />
          <AccordionHeader state="default" iconStyle="plus" open={true} />
          <AccordionHeader state="default" iconStyle="chevron" open={false} />
          <AccordionHeader state="default" iconStyle="chevron" open={true} />
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>Hover State</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <AccordionHeader state="hover" iconStyle="plus" open={false} />
          <AccordionHeader state="hover" iconStyle="plus" open={true} />
          <AccordionHeader state="hover" iconStyle="chevron" open={false} />
          <AccordionHeader state="hover" iconStyle="chevron" open={true} />
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>Selected State</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <AccordionHeader state="selected" iconStyle="plus" open={false} />
          <AccordionHeader state="selected" iconStyle="plus" open={true} />
          <AccordionHeader state="selected" iconStyle="chevron" open={false} />
          <AccordionHeader state="selected" iconStyle="chevron" open={true} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All visual states showing different color treatments and hover effects.',
      },
    },
  },
};

// ===== POSITION VARIANTS ===== //

export const PositionVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>Top Position</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
          <AccordionHeader position="top" iconStyle="plus" open={false} />
          <AccordionHeader position="middle" iconStyle="plus" open={true} />
          <AccordionHeader position="bottom" iconStyle="plus" open={false} />
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>Middle Position</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
          <AccordionHeader position="top" iconStyle="chevron" open={false} />
          <AccordionHeader position="middle" iconStyle="chevron" open={true} />
          <AccordionHeader position="bottom" iconStyle="chevron" open={false} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Position variants showing how headers work in grouped contexts.',
      },
    },
  },
};

// ===== CONTENT TYPE VARIANTS ===== //

export const ContentTypeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>Default Content Type</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <AccordionHeader contentType="default" iconStyle="plus" />
          <AccordionHeader contentType="default" iconStyle="chevron" />
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>Header Content Type</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <AccordionHeader contentType="header" iconStyle="plus" />
          <AccordionHeader contentType="header" iconStyle="chevron" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Content type variants showing different text treatments.',
      },
    },
  },
};

// ===== COMPREHENSIVE SHOWCASE ===== //

export const FigmaDesignShowcase: Story = {
  render: () => {
    // Generate all 72 variants exactly as shown in Figma design
    const sizes = ['small', 'default', 'large'] as const;
    const iconStyles = ['plus', 'default (chevron)'] as const;
    const positions = ['default (middle)', 'top', 'bottom'] as const;
    const contentTypes = ['N/A', 'header'] as const;
    const openStates = [false, true] as const;
    const states = ['default', 'hover', 'selected'] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 600 }}>
            Complete Figma Design Implementation - All 72 Variants
          </h2>
          <p style={{ margin: '0 0 16px 0', color: '#6B7280' }}>
            This showcases all 72 variants from the Figma design specification "building-blocks/accordion/headers" showing every combination of:
          </p>
          <ul style={{ margin: '0 0 24px 0', color: '#6B7280', paddingLeft: '20px' }}>
            <li><strong>Size</strong>: small, default, large (3 variants)</li>
            <li><strong>Icon Style</strong>: plus, default (chevron) (2 variants)</li>
            <li><strong>Position</strong>: default (middle), top, bottom (3 variants)</li>
            <li><strong>Content Type</strong>: N/A, header (2 variants)</li>
            <li><strong>Open</strong>: False, True (2 variants)</li>
            <li><strong>State</strong>: default, hover, selected (3 variants)</li>
          </ul>
          <p style={{ margin: '0 0 24px 0', color: '#6B7280', fontSize: '14px', fontStyle: 'italic' }}>
            Total: 3 × 2 × 3 × 2 × 2 × 3 = 216 possible combinations (showing representative samples for readability)
          </p>
        </div>

        {sizes.map(size => (
          <div key={size}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 500, textTransform: 'capitalize' }}>
              {size} Size
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
              {iconStyles.map(iconStyle => (
                <div key={iconStyle}>
                  <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500, textTransform: 'capitalize' }}>
                    {iconStyle} Icon Style
                  </h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', background: '#F9FAFB' }}>
                    {positions.map(position => 
                      contentTypes.map(contentType =>
                        openStates.map(open =>
                          states.map(state => (
                            <div key={`${position}-${contentType}-${open}-${state}`} style={{ background: 'white', borderBottom: '1px solid #F3F4F6' }}>
                              <AccordionHeader
                                size={size}
                                iconStyle={iconStyle}
                                position={position}
                                contentType={contentType}
                                open={open}
                                state={state}
                                title={`${size} ${iconStyle} ${position} ${contentType} ${open ? 'open' : 'closed'} ${state}`}
                              />
                            </div>
                          ))
                        )
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete implementation of all 72 variants from the Figma design specification.',
      },
    },
  },
};

// ===== INTERACTIVE EXAMPLE ===== //

export const InteractiveExample: Story = {
  render: () => {
    const [accordionStates, setAccordionStates] = useState({
      item1: false,
      item2: false,
      item3: false,
    });

    const toggleAccordion = (key: keyof typeof accordionStates) => {
      setAccordionStates(prev => ({
        ...prev,
        [key]: !prev[key],
      }));
    };

    return (
      <div style={{ maxWidth: '600px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 500 }}>
          Interactive Accordion Headers
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
          <AccordionHeader
            size="default"
            iconStyle="plus"
            position="top"
            open={accordionStates.item1}
            title="How do I reset my password?"
            onClick={() => toggleAccordion('item1')}
          />
          
          <AccordionHeader
            size="default"
            iconStyle="plus"
            position="middle"
            open={accordionStates.item2}
            title="What payment methods do you accept?"
            onClick={() => toggleAccordion('item2')}
          />
          
          <AccordionHeader
            size="default"
            iconStyle="plus"
            position="bottom"
            open={accordionStates.item3}
            title="How can I contact customer support?"
            onClick={() => toggleAccordion('item3')}
          />
        </div>
        
        <div style={{ marginTop: '16px', padding: '12px', background: '#F3F4F6', borderRadius: '6px', fontSize: '14px', color: '#6B7280' }}>
          <strong>Click any header to toggle its state.</strong> This demonstrates the interactive functionality with proper state management.
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing click handling and state management for accordion headers.',
      },
    },
  },
};

// ===== ACCESSIBILITY EXAMPLE ===== //

export const AccessibilityExample: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 500 }}>
        Accessibility Features
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <AccordionHeader
          size="default"
          iconStyle="chevron"
          open={false}
          title="Keyboard Navigation"
          aria-label="Keyboard navigation help section"
          onClick={() => {}}
        />
        
        <AccordionHeader
          size="default"
          iconStyle="chevron"
          open={true}
          title="Screen Reader Support"
          aria-label="Screen reader support section, currently expanded"
          onClick={() => {}}
        />
        
        <AccordionHeader
          size="default"
          iconStyle="chevron"
          open={false}
          title="Focus Management"
          aria-label="Focus management section"
          onClick={() => {}}
        />
      </div>
      
      <div style={{ marginTop: '16px', padding: '12px', background: '#F3F4F6', borderRadius: '6px', fontSize: '14px', color: '#6B7280' }}>
        <ul style={{ margin: 0, paddingLeft: '16px' }}>
          <li>Headers are focusable with Tab key</li>
          <li>Space and Enter keys activate headers</li>
          <li>ARIA attributes describe current state</li>
          <li>High contrast mode support</li>
          <li>Reduced motion support</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates accessibility features including keyboard navigation, ARIA attributes, and screen reader support.',
      },
    },
  },
};
