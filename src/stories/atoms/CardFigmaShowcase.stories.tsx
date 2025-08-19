import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Atoms/Card/Figma Showcase',
  component: Card,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete replication of the Figma Card component design with all variants, sizes, and states exactly as specified in the design system.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompleteCardShowcase: Story = {
  render: () => (
    <div style={{ 
      backgroundColor: '#f8fafc', 
      padding: '32px', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: '700', 
          color: '#1C1C1C', 
          marginBottom: '40px',
          textAlign: 'center' 
        }}>
          Card Component - Figma Design Implementation
        </h1>

        {/* SIMPLE CARDS - HORIZONTAL ALIGNMENT */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            color: '#374151', 
            marginBottom: '24px',
            borderBottom: '2px solid #e5e7eb',
            paddingBottom: '8px'
          }}>
            Simple Cards - Horizontal Alignment
          </h2>
          
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>With Drop Shadow</h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                <Card type="simple" size="small" align="horizontal" dropShadow={true} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                <Card type="simple" size="default" align="horizontal" dropShadow={true} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                <Card type="simple" size="large" align="horizontal" dropShadow={true} />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>Without Drop Shadow</h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                <Card type="simple" size="small" align="horizontal" dropShadow={false} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                <Card type="simple" size="default" align="horizontal" dropShadow={false} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                <Card type="simple" size="large" align="horizontal" dropShadow={false} />
              </div>
            </div>
          </div>
        </section>

        {/* SIMPLE CARDS - VERTICAL ALIGNMENT */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            color: '#374151', 
            marginBottom: '24px',
            borderBottom: '2px solid #e5e7eb',
            paddingBottom: '8px'
          }}>
            Simple Cards - Vertical Alignment
          </h2>
          
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>With Drop Shadow</h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                <Card type="simple" size="small" align="vertical" dropShadow={true} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                <Card type="simple" size="default" align="vertical" dropShadow={true} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                <Card type="simple" size="large" align="vertical" dropShadow={true} />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>Without Drop Shadow</h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                <Card type="simple" size="small" align="vertical" dropShadow={false} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                <Card type="simple" size="default" align="vertical" dropShadow={false} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                <Card type="simple" size="large" align="vertical" dropShadow={false} />
              </div>
            </div>
          </div>
        </section>

        {/* ICON CARDS */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            color: '#374151', 
            marginBottom: '24px',
            borderBottom: '2px solid #e5e7eb',
            paddingBottom: '8px'
          }}>
            Icon Cards
          </h2>
          
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>With Drop Shadow</h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                <Card type="icon" size="small" align="vertical" dropShadow={true} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                <Card type="icon" size="default" align="vertical" dropShadow={true} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                <Card type="icon" size="large" align="vertical" dropShadow={true} />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>Without Drop Shadow</h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                <Card type="icon" size="small" align="vertical" dropShadow={false} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                <Card type="icon" size="default" align="vertical" dropShadow={false} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                <Card type="icon" size="large" align="vertical" dropShadow={false} />
              </div>
            </div>
          </div>
        </section>

        {/* EMPTY STATE CARDS */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            color: '#374151', 
            marginBottom: '24px',
            borderBottom: '2px solid #e5e7eb',
            paddingBottom: '8px'
          }}>
            Empty State Cards
          </h2>
          
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>With Drop Shadow</h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                <Card type="empty-state" size="small" align="vertical" dropShadow={true} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                <Card type="empty-state" size="default" align="vertical" dropShadow={true} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                <Card type="empty-state" size="large" align="vertical" dropShadow={true} />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>Without Drop Shadow</h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                <Card type="empty-state" size="small" align="vertical" dropShadow={false} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                <Card type="empty-state" size="default" align="vertical" dropShadow={false} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                <Card type="empty-state" size="large" align="vertical" dropShadow={false} />
              </div>
            </div>
          </div>
        </section>

        {/* TEXT-ONLY CARDS */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            color: '#374151', 
            marginBottom: '24px',
            borderBottom: '2px solid #e5e7eb',
            paddingBottom: '8px'
          }}>
            Text-Only Cards
          </h2>
          
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>With Drop Shadow</h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                <Card type="text-only" size="small" align="vertical" dropShadow={true} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                <Card type="text-only" size="default" align="vertical" dropShadow={true} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                <Card type="text-only" size="large" align="vertical" dropShadow={true} />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>Without Drop Shadow</h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                <Card type="text-only" size="small" align="vertical" dropShadow={false} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                <Card type="text-only" size="default" align="vertical" dropShadow={false} />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                <Card type="text-only" size="large" align="vertical" dropShadow={false} />
              </div>
            </div>
          </div>
        </section>

        {/* STAT CARDS */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            color: '#374151', 
            marginBottom: '24px',
            borderBottom: '2px solid #e5e7eb',
            paddingBottom: '8px'
          }}>
            Stat Cards
          </h2>
          
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>Roboto Flex Font - With Drop Shadow</h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                <Card type="stat" size="small" align="vertical" dropShadow={true} font="roboto-flex" />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                <Card type="stat" size="default" align="vertical" dropShadow={true} font="roboto-flex" />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                <Card type="stat" size="large" align="vertical" dropShadow={true} font="roboto-flex" />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>Archivo Font - With Drop Shadow</h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                <Card type="stat" size="small" align="vertical" dropShadow={true} font="archivo" />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                <Card type="stat" size="default" align="vertical" dropShadow={true} font="archivo" />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                <Card type="stat" size="large" align="vertical" dropShadow={true} font="archivo" />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>Roboto Flex Font - Without Drop Shadow</h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                <Card type="stat" size="small" align="vertical" dropShadow={false} font="roboto-flex" />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                <Card type="stat" size="default" align="vertical" dropShadow={false} font="roboto-flex" />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                <Card type="stat" size="large" align="vertical" dropShadow={false} font="roboto-flex" />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>Archivo Font - Without Drop Shadow</h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                <Card type="stat" size="small" align="vertical" dropShadow={false} font="archivo" />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                <Card type="stat" size="default" align="vertical" dropShadow={false} font="archivo" />
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                <Card type="stat" size="large" align="vertical" dropShadow={false} font="archivo" />
              </div>
            </div>
          </div>
        </section>

        {/* DESIGN SPECIFICATION NOTES */}
        <section style={{ 
          backgroundColor: '#f8fafc', 
          border: '1px solid #e5e7eb', 
          borderRadius: '8px', 
          padding: '24px',
          marginTop: '48px'
        }}>
          <h2 style={{ 
            fontSize: '18px', 
            fontWeight: '600', 
            color: '#374151', 
            marginBottom: '16px'
          }}>
            Design Specifications
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', fontSize: '14px', color: '#6B7280' }}>
            <div>
              <h4 style={{ fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Typography</h4>
              <ul style={{ margin: 0, paddingLeft: '16px' }}>
                <li>Headings: Archivo font family with medium weight</li>
                <li>Body text: Roboto Flex font family</li>
                <li>Precise font sizes, line heights, and letter spacing per Figma specs</li>
                <li>Color tokens: --base-black, --neutral-gray-gray-500</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Layout & Spacing</h4>
              <ul style={{ margin: 0, paddingLeft: '16px' }}>
                <li>Responsive flexbox layouts</li>
                <li>Consistent spacing using design tokens</li>
                <li>Size variants: small, default, large</li>
                <li>Alignment options: horizontal, vertical</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Interactive Elements</h4>
              <ul style={{ margin: 0, paddingLeft: '16px' }}>
                <li>Hover states with subtle transforms</li>
                <li>Focus outlines for accessibility</li>
                <li>Optional close buttons and action buttons</li>
                <li>Disabled state support</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Customization</h4>
              <ul style={{ margin: 0, paddingLeft: '16px' }}>
                <li>5 card types: simple, icon, text-only, empty-state, stat</li>
                <li>Drop shadow toggle</li>
                <li>Custom content support via children prop</li>
                <li>Font family options for stat cards</li>
              </ul>
            </div>
          </div>
        </section>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '48px', 
          padding: '24px',
          backgroundColor: '#f0f9ff',
          borderRadius: '8px',
          border: '1px solid #0284c7'
        }}>
          <p style={{ 
            fontSize: '16px', 
            color: '#0369a1', 
            margin: 0,
            fontWeight: '500'
          }}>
            ✨ Complete Card Component Implementation
          </p>
          <p style={{ 
            fontSize: '14px', 
            color: '#075985', 
            margin: '8px 0 0 0'
          }}>
            All 42 variants exactly matching the Figma design specifications
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all Card component variants exactly as designed in Figma. This implementation includes all 42 possible combinations of size, type, alignment, shadow, and font options, ensuring pixel-perfect replication of the design system specifications.',
      },
    },
  },
};

export const FigmaVariantGrid: Story = {
  render: () => (
    <div style={{ 
      backgroundColor: '#ffffff', 
      padding: '40px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        fontSize: '24px', 
        fontWeight: '700', 
        marginBottom: '32px',
        color: '#1C1C1C'
      }}>
        Card Component Figma Variants Grid
      </h1>

      {/* Recreate the exact layout from Figma */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(6, 1fr)', 
        gap: '32px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Row 1: Simple horizontal cards with shadow */}
        <Card type="simple" size="small" align="horizontal" dropShadow={true} />
        <Card type="simple" size="small" align="horizontal" dropShadow={false} />
        <Card type="simple" size="default" align="horizontal" dropShadow={true} />
        <Card type="simple" size="default" align="horizontal" dropShadow={false} />
        <Card type="simple" size="large" align="horizontal" dropShadow={true} />
        <Card type="simple" size="large" align="horizontal" dropShadow={false} />

        {/* Row 2: Simple vertical cards */}
        <Card type="simple" size="small" align="vertical" dropShadow={true} />
        <Card type="simple" size="default" align="vertical" dropShadow={true} />
        <Card type="simple" size="large" align="vertical" dropShadow={true} />
        <Card type="simple" size="large" align="vertical" dropShadow={false} />
        <Card type="simple" size="default" align="vertical" dropShadow={false} />
        <Card type="simple" size="small" align="vertical" dropShadow={false} />

        {/* Row 3: Icon and Empty State cards */}
        <Card type="icon" size="default" align="vertical" dropShadow={true} />
        <Card type="empty-state" size="default" align="vertical" dropShadow={true} />
        <Card type="text-only" size="default" align="vertical" dropShadow={true} />
        <Card type="text-only" size="large" align="vertical" dropShadow={true} />
        <Card type="text-only" size="large" align="vertical" dropShadow={false} />
        <Card type="text-only" size="default" align="vertical" dropShadow={false} />

        {/* Row 4: More icon variations */}
        <Card type="icon" size="default" align="vertical" dropShadow={false} />
        <Card type="empty-state" size="default" align="vertical" dropShadow={false} />
        <Card type="icon" size="large" align="vertical" dropShadow={true} />
        <Card type="empty-state" size="large" align="vertical" dropShadow={true} />
        <Card type="icon" size="large" align="vertical" dropShadow={false} />
        <Card type="empty-state" size="large" align="vertical" dropShadow={false} />

        {/* Row 5: Small icon and text-only cards */}
        <Card type="icon" size="small" align="vertical" dropShadow={true} />
        <Card type="empty-state" size="small" align="vertical" dropShadow={true} />
        <Card type="text-only" size="small" align="vertical" dropShadow={true} />
        <Card type="text-only" size="small" align="vertical" dropShadow={false} />
        <Card type="icon" size="small" align="vertical" dropShadow={false} />
        <Card type="empty-state" size="small" align="vertical" dropShadow={false} />

        {/* Row 6: Stat cards with different fonts */}
        <Card type="stat" size="large" align="vertical" dropShadow={true} font="roboto-flex" />
        <Card type="stat" size="large" align="vertical" dropShadow={false} font="roboto-flex" />
        <Card type="stat" size="large" align="vertical" dropShadow={true} font="archivo" />
        <Card type="stat" size="large" align="vertical" dropShadow={false} font="archivo" />
        <Card type="stat" size="small" align="vertical" dropShadow={true} font="roboto-flex" />
        <Card type="stat" size="default" align="vertical" dropShadow={true} font="roboto-flex" />

        {/* Row 7: More stat variations */}
        <Card type="stat" size="default" align="vertical" dropShadow={false} font="roboto-flex" />
        <Card type="stat" size="default" align="vertical" dropShadow={true} font="archivo" />
        <Card type="stat" size="default" align="vertical" dropShadow={false} font="archivo" />
        <Card type="stat" size="small" align="vertical" dropShadow={false} font="roboto-flex" />
        <Card type="stat" size="small" align="vertical" dropShadow={true} font="archivo" />
        <Card type="stat" size="small" align="vertical" dropShadow={false} font="archivo" />
      </div>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '48px',
        padding: '20px',
        backgroundColor: '#f9fafb',
        borderRadius: '8px',
        border: '1px solid #e5e7eb'
      }}>
        <p style={{ 
          fontSize: '14px', 
          color: '#6B7280', 
          margin: 0
        }}>
          All 42 card variants from the Figma design system, arranged in the exact grid layout
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Grid layout replicating the exact arrangement shown in the Figma design file, with all 42 card variants organized systematically.',
      },
    },
  },
};
