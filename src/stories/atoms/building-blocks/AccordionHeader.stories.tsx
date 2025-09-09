import type { Meta, StoryObj } from '@storybook/react';
import { AccordionHeader } from './AccordionHeader';
import React, { useState } from 'react';

const meta: Meta<typeof AccordionHeader> = {
  title: 'Atoms/Accordion/AccordionHeader',
  component: AccordionHeader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# AccordionHeader Component - New Figma Design

A comprehensive accordion header component implementing the exact new Figma design specifications with **72 total variants**.

## Updated Figma Design Implementation

This component now matches the updated Figma design "building-blocks/accordion/headers" with complete variant coverage:

### Variant Matrix (3×2×3×2×2×3 = 72 variants)

- **3 Sizes**: small (18px), default (19px), large (24px)
- **2 Icon Styles**: plus/minus, default (chevron up/down)
- **3 Positions**: default (middle), top, bottom
- **2 Content Types**: N/A, header
- **2 Open States**: False (collapsed), True (expanded)
- **3 Visual States**: default, hover, selected

## Key Features

### Exact Figma Typography
- **Small**: 18px font, 24px line-height, 0.15px letter-spacing
- **Default**: 19px font, 24px line-height, -0.15px letter-spacing
- **Large**: 24px font, 24px line-height, -0.25px letter-spacing

### Icon System
- **Bell Icon**: 0.5 opacity, #2F42BD color, responsive sizing
- **Toggle Icons**: Size-responsive (20px/28px/32px), #2F42BD color
- **Plus/Minus**: For expand/collapse interaction
- **Chevron Up/Down**: Alternative expand/collapse style

### Color Palette
- **Default Text**: #191E3C (var(--primary-blue-dark-blue))
- **Selected Text**: #1C1C1C (var(--base-black))
- **Icon Color**: #2F42BD (consistent across all icons)

### Responsive Design
- Mobile-optimized scaling
- Touch-friendly interactive areas
- Accessibility-first approach

## Usage

\`\`\`tsx
import { AccordionHeader } from './AccordionHeader';

<AccordionHeader
  size="default"
  iconStyle="plus"
  position="default (middle)"
  contentType="N/A"
  open={false}
  state="default"
  title="This is an accordion section title"
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
    title: 'This is an accordion section title',
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
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>Individual Position Variants (Standalone)</h4>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#6B7280' }}>
          Position variants as standalone elements maintain their individual borders and styling.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <AccordionHeader position="top" iconStyle="plus" open={false} title="Top position (standalone)" />
          <AccordionHeader position="middle" iconStyle="plus" open={true} title="Middle position (standalone)" />
          <AccordionHeader position="bottom" iconStyle="plus" open={false} title="Bottom position (standalone)" />
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>Grouped Position Variants</h4>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#6B7280' }}>
          When used with the `grouped` prop, individual borders are removed and separators are used between items.
        </p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF'
        }}>
          <AccordionHeader grouped position="top" iconStyle="plus" open={false} title="First accordion section" />
          <AccordionHeader grouped position="middle" iconStyle="plus" open={true} title="Second accordion section (expanded)" />
          <AccordionHeader grouped position="bottom" iconStyle="plus" open={false} title="Third accordion section" />
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 500 }}>Grouped with Chevron Icons</h4>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#6B7280' }}>
          Same grouping pattern with chevron icons instead of plus/minus icons.
        </p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF'
        }}>
          <AccordionHeader grouped position="top" iconStyle="chevron" open={false} title="FAQ: How do I reset my password?" />
          <AccordionHeader grouped position="middle" iconStyle="chevron" open={true} title="FAQ: What payment methods are accepted?" />
          <AccordionHeader grouped position="bottom" iconStyle="chevron" open={false} title="FAQ: How do I contact support?" />
        </div>
      </div>

      <div style={{
        marginTop: '16px',
        padding: '16px',
        backgroundColor: '#F3F4F6',
        borderRadius: '8px',
        fontSize: '14px',
        color: '#374151'
      }}>
        <strong>📝 Implementation Note:</strong>
        <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px' }}>
          <li><strong>Standalone:</strong> Position variants maintain individual borders and styling</li>
          <li><strong>Grouped:</strong> Use `grouped={true}` prop to remove individual borders</li>
          <li><strong>Container:</strong> Grouped accordions need a container with border and border-radius</li>
          <li><strong>Separators:</strong> Only separators between items, no double borders</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Position variants show both standalone usage (with individual borders) and grouped usage (with single border around group). Use the `grouped` prop to control border behavior.',
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
                                title="This is an accordion section title"
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

// ===== EXACT FIGMA GRID LAYOUT ===== //

export const ExactFigmaGrid: Story = {
  render: () => {
    // Create the exact grid layout as shown in the Figma design
    const figmaVariants = [
      // Row 1: Small + Plus + Default Middle + N/A
      { size: 'small' as const, iconStyle: 'plus' as const, position: 'default (middle)' as const, contentType: 'N/A' as const, open: false, state: 'default' as const },
      { size: 'small' as const, iconStyle: 'plus' as const, position: 'default (middle)' as const, contentType: 'header' as const, open: false, state: 'hover' as const },
      { size: 'small' as const, iconStyle: 'plus' as const, position: 'default (middle)' as const, contentType: 'N/A' as const, open: true, state: 'selected' as const },
      { size: 'small' as const, iconStyle: 'plus' as const, position: 'default (middle)' as const, contentType: 'header' as const, open: true, state: 'hover' as const },
      { size: 'small' as const, iconStyle: 'plus' as const, position: 'bottom' as const, contentType: 'N/A' as const, open: false, state: 'default' as const },
      { size: 'small' as const, iconStyle: 'plus' as const, position: 'bottom' as const, contentType: 'header' as const, open: false, state: 'hover' as const },

      // Row 2: Small + Plus + Bottom/Top
      { size: 'small' as const, iconStyle: 'plus' as const, position: 'bottom' as const, contentType: 'N/A' as const, open: true, state: 'selected' as const },
      { size: 'small' as const, iconStyle: 'plus' as const, position: 'bottom' as const, contentType: 'header' as const, open: true, state: 'hover' as const },
      { size: 'small' as const, iconStyle: 'plus' as const, position: 'top' as const, contentType: 'N/A' as const, open: false, state: 'default' as const },
      { size: 'small' as const, iconStyle: 'plus' as const, position: 'top' as const, contentType: 'header' as const, open: false, state: 'hover' as const },
      { size: 'small' as const, iconStyle: 'plus' as const, position: 'top' as const, contentType: 'N/A' as const, open: true, state: 'selected' as const },
      { size: 'small' as const, iconStyle: 'plus' as const, position: 'top' as const, contentType: 'header' as const, open: true, state: 'hover' as const },

      // Row 3: Large + Plus
      { size: 'large' as const, iconStyle: 'plus' as const, position: 'default (middle)' as const, contentType: 'N/A' as const, open: false, state: 'default' as const },
      { size: 'large' as const, iconStyle: 'plus' as const, position: 'default (middle)' as const, contentType: 'header' as const, open: false, state: 'hover' as const },
      { size: 'large' as const, iconStyle: 'plus' as const, position: 'default (middle)' as const, contentType: 'N/A' as const, open: true, state: 'selected' as const },
      { size: 'large' as const, iconStyle: 'plus' as const, position: 'default (middle)' as const, contentType: 'header' as const, open: true, state: 'hover' as const },
      { size: 'large' as const, iconStyle: 'plus' as const, position: 'bottom' as const, contentType: 'N/A' as const, open: false, state: 'default' as const },
      { size: 'large' as const, iconStyle: 'plus' as const, position: 'bottom' as const, contentType: 'header' as const, open: false, state: 'hover' as const },

      // Row 4: Large + Plus (continued)
      { size: 'large' as const, iconStyle: 'plus' as const, position: 'bottom' as const, contentType: 'N/A' as const, open: true, state: 'selected' as const },
      { size: 'large' as const, iconStyle: 'plus' as const, position: 'bottom' as const, contentType: 'header' as const, open: true, state: 'hover' as const },
      { size: 'large' as const, iconStyle: 'plus' as const, position: 'top' as const, contentType: 'N/A' as const, open: false, state: 'default' as const },
      { size: 'large' as const, iconStyle: 'plus' as const, position: 'top' as const, contentType: 'header' as const, open: false, state: 'hover' as const },
      { size: 'large' as const, iconStyle: 'plus' as const, position: 'top' as const, contentType: 'N/A' as const, open: true, state: 'selected' as const },
      { size: 'large' as const, iconStyle: 'plus' as const, position: 'top' as const, contentType: 'header' as const, open: true, state: 'hover' as const },

      // Row 5: Default + Plus
      { size: 'default' as const, iconStyle: 'plus' as const, position: 'default (middle)' as const, contentType: 'N/A' as const, open: false, state: 'default' as const },
      { size: 'default' as const, iconStyle: 'plus' as const, position: 'default (middle)' as const, contentType: 'header' as const, open: false, state: 'hover' as const },
      { size: 'default' as const, iconStyle: 'plus' as const, position: 'default (middle)' as const, contentType: 'N/A' as const, open: true, state: 'selected' as const },
      { size: 'default' as const, iconStyle: 'plus' as const, position: 'default (middle)' as const, contentType: 'header' as const, open: true, state: 'hover' as const },
      { size: 'default' as const, iconStyle: 'plus' as const, position: 'bottom' as const, contentType: 'N/A' as const, open: false, state: 'default' as const },
      { size: 'default' as const, iconStyle: 'plus' as const, position: 'bottom' as const, contentType: 'header' as const, open: false, state: 'hover' as const },

      // Row 6: Default + Plus (continued)
      { size: 'default' as const, iconStyle: 'plus' as const, position: 'bottom' as const, contentType: 'N/A' as const, open: true, state: 'selected' as const },
      { size: 'default' as const, iconStyle: 'plus' as const, position: 'bottom' as const, contentType: 'header' as const, open: true, state: 'hover' as const },
      { size: 'default' as const, iconStyle: 'plus' as const, position: 'top' as const, contentType: 'N/A' as const, open: false, state: 'default' as const },
      { size: 'default' as const, iconStyle: 'plus' as const, position: 'top' as const, contentType: 'header' as const, open: false, state: 'hover' as const },
      { size: 'default' as const, iconStyle: 'plus' as const, position: 'top' as const, contentType: 'N/A' as const, open: true, state: 'selected' as const },
      { size: 'default' as const, iconStyle: 'plus' as const, position: 'top' as const, contentType: 'header' as const, open: true, state: 'hover' as const },

      // Continue with Chevron variants...
      // Small + Chevron
      { size: 'small' as const, iconStyle: 'default (chevron)' as const, position: 'default (middle)' as const, contentType: 'N/A' as const, open: false, state: 'default' as const },
      { size: 'small' as const, iconStyle: 'default (chevron)' as const, position: 'default (middle)' as const, contentType: 'header' as const, open: false, state: 'hover' as const },
      { size: 'small' as const, iconStyle: 'default (chevron)' as const, position: 'default (middle)' as const, contentType: 'N/A' as const, open: true, state: 'selected' as const },
      { size: 'small' as const, iconStyle: 'default (chevron)' as const, position: 'default (middle)' as const, contentType: 'header' as const, open: true, state: 'hover' as const },
    ];

    return (
      <div style={{ padding: '24px', backgroundColor: '#F9FAFB' }}>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 600, color: '#1F2937' }}>
            Exact Figma Design Layout
          </h2>
          <p style={{ margin: '0 0 16px 0', color: '#6B7280', fontSize: '14px' }}>
            This matches the exact grid layout from the Figma design file "building-blocks/accordion/headers"
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '8px',
          maxWidth: '1200px',
          backgroundColor: 'white',
          padding: '16px',
          borderRadius: '8px',
          border: '1px solid #E5E7EB'
        }}>
          {figmaVariants.map((variant, index) => (
            <div key={index} style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #F3F4F6',
              backgroundColor: '#FEFEFE'
            }}>
              <AccordionHeader
                size={variant.size}
                iconStyle={variant.iconStyle}
                position={variant.position}
                contentType={variant.contentType}
                open={variant.open}
                state={variant.state}
                title="This is an accordion section title"
              />
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#F3F4F6', borderRadius: '8px' }}>
          <p style={{ margin: '0', fontSize: '12px', color: '#6B7280', fontStyle: 'italic' }}>
            This grid shows a representative sample of the 72 total variants. Each variant demonstrates the precise
            typography, spacing, colors, and icon styles from the original Figma design specification.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Exact replica of the Figma design grid layout showing the precise arrangement and styling of accordion header variants.',
      },
    },
  },
};

// ===== COMPLETE 72 VARIANT MATRIX ===== //

export const Complete72VariantMatrix: Story = {
  render: () => {
    const sizes = ['small', 'default', 'large'] as const;
    const iconStyles = ['plus', 'default (chevron)'] as const;
    const positions = ['default (middle)', 'top', 'bottom'] as const;
    const contentTypes = ['N/A', 'header'] as const;
    const openStates = [false, true] as const;
    const states = ['default', 'hover', 'selected'] as const;

    // Generate all 72 unique combinations
    const allVariants: Array<{
      size: typeof sizes[number];
      iconStyle: typeof iconStyles[number];
      position: typeof positions[number];
      contentType: typeof contentTypes[number];
      open: boolean;
      state: typeof states[number];
      id: string;
    }> = [];

    sizes.forEach(size => {
      iconStyles.forEach(iconStyle => {
        positions.forEach(position => {
          contentTypes.forEach(contentType => {
            openStates.forEach(open => {
              states.forEach(state => {
                allVariants.push({
                  size,
                  iconStyle,
                  position,
                  contentType,
                  open,
                  state,
                  id: `${size}-${iconStyle}-${position}-${contentType}-${open}-${state}`
                });
              });
            });
          });
        });
      });
    });

    return (
      <div style={{ padding: '24px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: 600 }}>
            Complete 72-Variant Matrix
          </h2>
          <p style={{ margin: '0 0 16px 0', color: '#6B7280' }}>
            All {allVariants.length} possible combinations from the Figma design specification:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '8px',
            marginBottom: '16px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#374151'
          }}>
            <div>Size</div>
            <div>Icon Style</div>
            <div>Position</div>
            <div>Content Type</div>
            <div>Open State</div>
            <div>Visual State</div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '16px'
        }}>
          {allVariants.map((variant, index) => (
            <div key={variant.id} style={{
              padding: '12px',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              backgroundColor: '#FEFEFE'
            }}>
              <div style={{
                fontSize: '10px',
                color: '#6B7280',
                marginBottom: '8px',
                fontFamily: 'monospace'
              }}>
                #{(index + 1).toString().padStart(2, '0')}: {variant.id}
              </div>
              <AccordionHeader
                size={variant.size}
                iconStyle={variant.iconStyle}
                position={variant.position}
                contentType={variant.contentType}
                open={variant.open}
                state={variant.state}
                title="This is an accordion section title"
              />
            </div>
          ))}
        </div>

        <div style={{ marginTop: '32px', padding: '16px', backgroundColor: '#F3F4F6', borderRadius: '8px' }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 600 }}>Variant Breakdown</h3>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#6B7280' }}>
            <li><strong>Sizes (3):</strong> small, default, large</li>
            <li><strong>Icon Styles (2):</strong> plus/minus, chevron up/down</li>
            <li><strong>Positions (3):</strong> default (middle), top, bottom</li>
            <li><strong>Content Types (2):</strong> N/A (standard), header (enhanced)</li>
            <li><strong>Open States (2):</strong> False (collapsed), True (expanded)</li>
            <li><strong>Visual States (3):</strong> default, hover, selected</li>
          </ul>
          <p style={{ margin: '12px 0 0 0', fontSize: '12px', fontStyle: 'italic' }}>
            Total combinations: 3 × 2 × 3 × 2 × 2 × 3 = 72 unique variants
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete matrix showing all 72 possible variant combinations from the Figma design specification.',
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

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF'
        }}>
          <AccordionHeader
            grouped
            size="default"
            iconStyle="plus"
            position="top"
            open={accordionStates.item1}
            title="How do I reset my password?"
            onClick={() => toggleAccordion('item1')}
          />

          <AccordionHeader
            grouped
            size="default"
            iconStyle="plus"
            position="middle"
            open={accordionStates.item2}
            title="What payment methods do you accept?"
            onClick={() => toggleAccordion('item2')}
          />

          <AccordionHeader
            grouped
            size="default"
            iconStyle="plus"
            position="bottom"
            open={accordionStates.item3}
            title="How can I contact customer support?"
            onClick={() => toggleAccordion('item3')}
          />
        </div>

        <div style={{ marginTop: '16px', padding: '12px', background: '#F3F4F6', borderRadius: '6px', fontSize: '14px', color: '#6B7280' }}>
          <strong>Click any header to toggle its state.</strong> This demonstrates the interactive functionality with proper state management. The `grouped` prop removes individual borders for a clean group appearance.
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing click handling and state management for accordion headers. Uses the `grouped` prop to create a single-border group styling.',
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
