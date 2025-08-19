import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Atoms/Card/Figma Showcase',
  component: Card,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete replication of all Card component variants as specified in the Figma design. This showcase demonstrates every combination of size, type, alignment, shadow, and other properties exactly as shown in the Figma design system.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FigmaDesignReplication: Story = {
  render: () => (
    <div style={{
      padding: '40px',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{ 
        maxWidth: '1600px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '48px'
      }}>
        
        {/* Title */}
        <div>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: 600, 
            color: '#1a1a1a',
            margin: '0 0 8px 0'
          }}>
            Card Component - Figma Design Replication
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#666',
            margin: '0 0 24px 0'
          }}>
            Complete implementation of all card variants: Simple, Icon, Text-Only, Empty State, and Stat cards
          </p>
        </div>

        {/* === SIMPLE CARDS === */}
        <section>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            color: '#333',
            margin: '0 0 32px 0'
          }}>
            Simple Cards
          </h2>
          
          {/* Horizontal Layout with Shadow */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 500, 
              color: '#555',
              margin: '0 0 16px 0'
            }}>
              Horizontal Layout - With Drop Shadow
            </h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'start', flexWrap: 'wrap' }}>
              <Card type="simple" size="small" align="horizontal" dropShadow={true} />
              <Card type="simple" size="default" align="horizontal" dropShadow={true} />
              <Card type="simple" size="large" align="horizontal" dropShadow={true} />
            </div>
          </div>

          {/* Horizontal Layout without Shadow */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 500, 
              color: '#555',
              margin: '0 0 16px 0'
            }}>
              Horizontal Layout - No Drop Shadow
            </h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'start', flexWrap: 'wrap' }}>
              <Card type="simple" size="small" align="horizontal" dropShadow={false} />
              <Card type="simple" size="default" align="horizontal" dropShadow={false} />
              <Card type="simple" size="large" align="horizontal" dropShadow={false} />
            </div>
          </div>

          {/* Vertical Layout with Shadow */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 500, 
              color: '#555',
              margin: '0 0 16px 0'
            }}>
              Vertical Layout - With Drop Shadow
            </h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'start', flexWrap: 'wrap' }}>
              <Card type="simple" size="small" align="vertical" dropShadow={true} />
              <Card type="simple" size="default" align="vertical" dropShadow={true} />
              <Card type="simple" size="large" align="vertical" dropShadow={true} />
            </div>
          </div>

          {/* Vertical Layout without Shadow */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 500, 
              color: '#555',
              margin: '0 0 16px 0'
            }}>
              Vertical Layout - No Drop Shadow
            </h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'start', flexWrap: 'wrap' }}>
              <Card type="simple" size="small" align="vertical" dropShadow={false} />
              <Card type="simple" size="default" align="vertical" dropShadow={false} />
              <Card type="simple" size="large" align="vertical" dropShadow={false} />
            </div>
          </div>
        </section>

        {/* === ICON CARDS === */}
        <section>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            color: '#333',
            margin: '0 0 32px 0'
          }}>
            Icon Cards
          </h2>
          
          {/* Icon Cards with Shadow */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 500, 
              color: '#555',
              margin: '0 0 16px 0'
            }}>
              With Drop Shadow
            </h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'start', flexWrap: 'wrap' }}>
              <Card type="icon" size="small" align="vertical" dropShadow={true} />
              <Card type="icon" size="default" align="vertical" dropShadow={true} />
              <Card type="icon" size="large" align="vertical" dropShadow={true} />
            </div>
          </div>

          {/* Icon Cards without Shadow */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 500, 
              color: '#555',
              margin: '0 0 16px 0'
            }}>
              No Drop Shadow
            </h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'start', flexWrap: 'wrap' }}>
              <Card type="icon" size="small" align="vertical" dropShadow={false} />
              <Card type="icon" size="default" align="vertical" dropShadow={false} />
              <Card type="icon" size="large" align="vertical" dropShadow={false} />
            </div>
          </div>
        </section>

        {/* === EMPTY STATE CARDS === */}
        <section>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            color: '#333',
            margin: '0 0 32px 0'
          }}>
            Empty State Cards
          </h2>
          
          {/* Empty State Cards with Shadow */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 500, 
              color: '#555',
              margin: '0 0 16px 0'
            }}>
              With Drop Shadow
            </h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'start', flexWrap: 'wrap' }}>
              <Card type="empty-state" size="small" align="vertical" dropShadow={true} />
              <Card type="empty-state" size="default" align="vertical" dropShadow={true} />
              <Card type="empty-state" size="large" align="vertical" dropShadow={true} />
            </div>
          </div>

          {/* Empty State Cards without Shadow */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 500, 
              color: '#555',
              margin: '0 0 16px 0'
            }}>
              No Drop Shadow
            </h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'start', flexWrap: 'wrap' }}>
              <Card type="empty-state" size="small" align="vertical" dropShadow={false} />
              <Card type="empty-state" size="default" align="vertical" dropShadow={false} />
              <Card type="empty-state" size="large" align="vertical" dropShadow={false} />
            </div>
          </div>
        </section>

        {/* === TEXT-ONLY CARDS === */}
        <section>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            color: '#333',
            margin: '0 0 32px 0'
          }}>
            Text-Only Cards
          </h2>
          
          {/* Text-Only Cards with Shadow */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 500, 
              color: '#555',
              margin: '0 0 16px 0'
            }}>
              With Drop Shadow
            </h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'start', flexWrap: 'wrap' }}>
              <Card type="text-only" size="small" align="vertical" dropShadow={true} />
              <Card type="text-only" size="default" align="vertical" dropShadow={true} />
              <Card type="text-only" size="large" align="vertical" dropShadow={true} />
            </div>
          </div>

          {/* Text-Only Cards without Shadow */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 500, 
              color: '#555',
              margin: '0 0 16px 0'
            }}>
              No Drop Shadow
            </h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'start', flexWrap: 'wrap' }}>
              <Card type="text-only" size="small" align="vertical" dropShadow={false} />
              <Card type="text-only" size="default" align="vertical" dropShadow={false} />
              <Card type="text-only" size="large" align="vertical" dropShadow={false} />
            </div>
          </div>
        </section>

        {/* === STAT CARDS === */}
        <section>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            color: '#333',
            margin: '0 0 32px 0'
          }}>
            Stat Cards
          </h2>
          
          {/* Roboto Flex Stats with Shadow */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 500, 
              color: '#555',
              margin: '0 0 16px 0'
            }}>
              Roboto Flex Font - With Drop Shadow
            </h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'start', flexWrap: 'wrap' }}>
              <Card type="stat" size="small" align="vertical" dropShadow={true} font="roboto-flex" />
              <Card type="stat" size="default" align="vertical" dropShadow={true} font="roboto-flex" />
              <Card type="stat" size="large" align="vertical" dropShadow={true} font="roboto-flex" />
            </div>
          </div>

          {/* Roboto Flex Stats without Shadow */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 500, 
              color: '#555',
              margin: '0 0 16px 0'
            }}>
              Roboto Flex Font - No Drop Shadow
            </h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'start', flexWrap: 'wrap' }}>
              <Card type="stat" size="small" align="vertical" dropShadow={false} font="roboto-flex" />
              <Card type="stat" size="default" align="vertical" dropShadow={false} font="roboto-flex" />
              <Card type="stat" size="large" align="vertical" dropShadow={false} font="roboto-flex" />
            </div>
          </div>

          {/* Archivo Stats with Shadow */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 500, 
              color: '#555',
              margin: '0 0 16px 0'
            }}>
              Archivo Font - With Drop Shadow
            </h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'start', flexWrap: 'wrap' }}>
              <Card type="stat" size="small" align="vertical" dropShadow={true} font="archivo" />
              <Card type="stat" size="default" align="vertical" dropShadow={true} font="archivo" />
              <Card type="stat" size="large" align="vertical" dropShadow={true} font="archivo" />
            </div>
          </div>

          {/* Archivo Stats without Shadow */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 500, 
              color: '#555',
              margin: '0 0 16px 0'
            }}>
              Archivo Font - No Drop Shadow
            </h3>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'start', flexWrap: 'wrap' }}>
              <Card type="stat" size="small" align="vertical" dropShadow={false} font="archivo" />
              <Card type="stat" size="default" align="vertical" dropShadow={false} font="archivo" />
              <Card type="stat" size="large" align="vertical" dropShadow={false} font="archivo" />
            </div>
          </div>
        </section>

        {/* === INTERACTIVE EXAMPLES === */}
        <section>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 600, 
            color: '#333',
            margin: '0 0 32px 0'
          }}>
            Interactive Examples
          </h2>
          
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'start' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#555', margin: '0 0 12px 0' }}>
                Clickable Card
              </h3>
              <Card 
                type="simple"
                size="default"
                align="horizontal"
                dropShadow={true}
                title="Click Me"
                subtitle="This card is interactive"
                onClick={() => alert('Card clicked!')}
              />
            </div>
            
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#555', margin: '0 0 12px 0' }}>
                Disabled Card
              </h3>
              <Card 
                type="simple"
                size="default"
                align="horizontal"
                dropShadow={true}
                title="Disabled"
                subtitle="Cannot interact"
                disabled={true}
                onClick={() => alert('This should not fire')}
              />
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#555', margin: '0 0 12px 0' }}>
                No Close Button
              </h3>
              <Card 
                type="simple"
                size="default"
                align="horizontal"
                dropShadow={true}
                showCloseIcon={false}
                title="No Close"
                subtitle="Close button hidden"
              />
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: '#555', margin: '0 0 12px 0' }}>
                No Button Group
              </h3>
              <Card 
                type="simple"
                size="default"
                align="horizontal"
                dropShadow={true}
                showButtonGroup={false}
                title="No Buttons"
                subtitle="Button group hidden"
              />
            </div>
          </div>
        </section>

        {/* === DESIGN SYSTEM SUMMARY === */}
        <section style={{ 
          backgroundColor: '#fff',
          padding: '32px',
          borderRadius: '12px',
          border: '1px solid #e0e0e0',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: 600, 
            color: '#333',
            margin: '0 0 24px 0'
          }}>
            Figma Design System Implementation Summary
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#555', margin: '0 0 12px 0' }}>
                Card Types (5)
              </h3>
              <ul style={{ margin: '0', paddingLeft: '20px', color: '#666', lineHeight: 1.6 }}>
                <li><strong>Simple:</strong> Headers, subtitles, body text, buttons</li>
                <li><strong>Icon:</strong> Large icon with title and body text</li>
                <li><strong>Text-Only:</strong> Title and body text without buttons</li>
                <li><strong>Empty State:</strong> Icon with title for empty states</li>
                <li><strong>Stat:</strong> Large numeric values with labels</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#555', margin: '0 0 12px 0' }}>
                Size Variants (3)
              </h3>
              <ul style={{ margin: '0', paddingLeft: '20px', color: '#666', lineHeight: 1.6 }}>
                <li><strong>Small:</strong> Compact spacing and typography</li>
                <li><strong>Default:</strong> Standard size for most use cases</li>
                <li><strong>Large:</strong> Increased spacing and typography</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#555', margin: '0 0 12px 0' }}>
                Layout Options
              </h3>
              <ul style={{ margin: '0', paddingLeft: '20px', color: '#666', lineHeight: 1.6 }}>
                <li><strong>Horizontal:</strong> Text and buttons side by side</li>
                <li><strong>Vertical:</strong> Stacked content layout</li>
                <li><strong>Shadow:</strong> Optional drop shadow</li>
                <li><strong>Close Icon:</strong> Toggleable close button</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#555', margin: '0 0 12px 0' }}>
                Typography & Accessibility
              </h3>
              <ul style={{ margin: '0', paddingLeft: '20px', color: '#666', lineHeight: 1.6 }}>
                <li>Design token-based typography</li>
                <li>Keyboard navigation support</li>
                <li>ARIA labels and roles</li>
                <li>Focus indicators and states</li>
              </ul>
            </div>
          </div>

          <div style={{ 
            marginTop: '24px', 
            padding: '20px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            border: '1px solid #e9ecef'
          }}>
            <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#495057', margin: '0 0 8px 0' }}>
              Figma Design Compliance
            </h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#6c757d', lineHeight: 1.5 }}>
              This implementation faithfully reproduces all card variants from the Figma design system, 
              including exact spacing, typography, colors, and interactive states. All 42+ variants 
              are supported with pixel-perfect accuracy.
            </p>
          </div>
        </section>

      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all Card component variants as specified in the Figma design. This demonstrates every combination of type, size, alignment, shadow, and font properties, organized by category for comprehensive documentation.',
      },
    },
  },
};
