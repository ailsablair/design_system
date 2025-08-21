import type { Meta, StoryObj } from '@storybook/react';
import { Tile } from '../../atoms/Tile';

const meta = {
  title: 'Design System/Figma Showcase Files/Tile Figma Showcase',
  component: Tile,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Exact replication of the Tile component as shown in the Figma design. This showcases all size, alignment, and color variants in the exact layout from the design system.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FigmaDesignReplication: Story = {
  render: () => (
    <div style={{
      padding: '40px',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      /* Performance optimizations for large showcases */
      contain: 'layout style',
      willChange: 'scroll-position'
    }}>
      <div style={{ 
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
        
        {/* Title */}
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: 600, 
          color: '#1a1a1a',
          margin: '0 0 24px 0'
        }}>
          Tile Component - Figma Design Replication
        </h1>

        {/* Center Aligned Tiles */}
        <div>
          <h2 style={{ 
            fontSize: '18px', 
            fontWeight: 500, 
            color: '#333',
            margin: '0 0 16px 0'
          }}>
            Centre Alignment
          </h2>
          
          {/* Default Size - Centre */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#666', margin: '0 0 12px 0' }}>
              Default Size
            </h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Tile size="default" align="centre" colour="default" children="Label" />
              <Tile size="default" align="centre" colour="blue" children="Label" />
              <Tile size="default" align="centre" colour="yellow" children="Label" />
              <Tile size="default" align="centre" colour="light-gray" children="Label" />
              <Tile size="default" align="centre" colour="info-blue" children="Label" />
              <Tile size="default" align="centre" colour="blue-gray" children="Label" />
            </div>
          </div>

          {/* Large Size - Centre */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#666', margin: '0 0 12px 0' }}>
              Large Size
            </h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Tile size="large" align="centre" colour="default" children="Label" />
              <Tile size="large" align="centre" colour="blue" children="Label" />
              <Tile size="large" align="centre" colour="yellow" children="Label" />
              <Tile size="large" align="centre" colour="light-gray" children="Label" />
              <Tile size="large" align="centre" colour="info-blue" children="Label" />
              <Tile size="large" align="centre" colour="blue-gray" children="Label" />
            </div>
          </div>

          {/* Small Size - Centre */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#666', margin: '0 0 12px 0' }}>
              Small Size
            </h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Tile size="small" align="centre" colour="default" children="Label" />
              <Tile size="small" align="centre" colour="blue" children="Label" />
              <Tile size="small" align="centre" colour="yellow" children="Label" />
              <Tile size="small" align="centre" colour="light-gray" children="Label" />
              <Tile size="small" align="centre" colour="info-blue" children="Label" />
              <Tile size="small" align="centre" colour="blue-gray" children="Label" />
            </div>
          </div>
        </div>

        {/* Left Aligned Tiles */}
        <div>
          <h2 style={{ 
            fontSize: '18px', 
            fontWeight: 500, 
            color: '#333',
            margin: '0 0 16px 0'
          }}>
            Left Alignment
          </h2>
          
          {/* Default Size - Left */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#666', margin: '0 0 12px 0' }}>
              Default Size
            </h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Tile size="default" align="left" colour="default" children="Label" />
              <Tile size="default" align="left" colour="blue" children="Label" />
              <Tile size="default" align="left" colour="yellow" children="Label" />
              <Tile size="default" align="left" colour="light-gray" children="Label" />
              <Tile size="default" align="left" colour="info-blue" children="Label" />
              <Tile size="default" align="left" colour="blue-gray" children="Label" />
            </div>
          </div>

          {/* Large Size - Left */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#666', margin: '0 0 12px 0' }}>
              Large Size
            </h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Tile size="large" align="left" colour="default" children="Label" />
              <Tile size="large" align="left" colour="blue" children="Label" />
              <Tile size="large" align="left" colour="yellow" children="Label" />
              <Tile size="large" align="left" colour="light-gray" children="Label" />
              <Tile size="large" align="left" colour="info-blue" children="Label" />
              <Tile size="large" align="left" colour="blue-gray" children="Label" />
            </div>
          </div>

          {/* Small Size - Left */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#666', margin: '0 0 12px 0' }}>
              Small Size
            </h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Tile size="small" align="left" colour="default" children="Label" />
              <Tile size="small" align="left" colour="blue" children="Label" />
              <Tile size="small" align="left" colour="yellow" children="Label" />
              <Tile size="small" align="left" colour="light-gray" children="Label" />
              <Tile size="small" align="left" colour="info-blue" children="Label" />
              <Tile size="small" align="left" colour="blue-gray" children="Label" />
            </div>
          </div>
        </div>

        {/* Right Aligned Tiles */}
        <div>
          <h2 style={{ 
            fontSize: '18px', 
            fontWeight: 500, 
            color: '#333',
            margin: '0 0 16px 0'
          }}>
            Right Alignment
          </h2>
          
          {/* Default Size - Right */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#666', margin: '0 0 12px 0' }}>
              Default Size
            </h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Tile size="default" align="right" colour="default" children="Label" />
              <Tile size="default" align="right" colour="blue" children="Label" />
              <Tile size="default" align="right" colour="yellow" children="Label" />
              <Tile size="default" align="right" colour="light-gray" children="Label" />
              <Tile size="default" align="right" colour="info-blue" children="Label" />
              <Tile size="default" align="right" colour="blue-gray" children="Label" />
            </div>
          </div>

          {/* Large Size - Right */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#666', margin: '0 0 12px 0' }}>
              Large Size
            </h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Tile size="large" align="right" colour="default" children="Label" />
              <Tile size="large" align="right" colour="blue" children="Label" />
              <Tile size="large" align="right" colour="yellow" children="Label" />
              <Tile size="large" align="right" colour="light-gray" children="Label" />
              <Tile size="large" align="right" colour="info-blue" children="Label" />
              <Tile size="large" align="right" colour="blue-gray" children="Label" />
            </div>
          </div>

          {/* Small Size - Right */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#666', margin: '0 0 12px 0' }}>
              Small Size
            </h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Tile size="small" align="right" colour="default" children="Label" />
              <Tile size="small" align="right" colour="blue" children="Label" />
              <Tile size="small" align="right" colour="yellow" children="Label" />
              <Tile size="small" align="right" colour="light-gray" children="Label" />
              <Tile size="small" align="right" colour="info-blue" children="Label" />
              <Tile size="small" align="right" colour="blue-gray" children="Label" />
            </div>
          </div>
        </div>

        {/* Interactive Examples */}
        <div>
          <h2 style={{ 
            fontSize: '18px', 
            fontWeight: 500, 
            color: '#333',
            margin: '0 0 16px 0'
          }}>
            Interactive Examples
          </h2>
          
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#666', margin: '0 0 8px 0' }}>
                Clickable
              </h3>
              <Tile 
                size="default" 
                align="centre" 
                colour="blue" 
                children="Click Me"
                onClick={() => alert('Tile clicked!')}
              />
            </div>
            
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 500, color: '#666', margin: '0 0 8px 0' }}>
                Disabled
              </h3>
              <Tile 
                size="default" 
                align="centre" 
                colour="default" 
                children="Disabled"
                disabled={true}
                onClick={() => alert('This should not fire')}
              />
            </div>
          </div>
        </div>

        {/* Usage Notes */}
        <div style={{ 
          backgroundColor: '#fff',
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid #e0e0e0'
        }}>
          <h2 style={{ 
            fontSize: '16px', 
            fontWeight: 600, 
            color: '#333',
            margin: '0 0 12px 0'
          }}>
            Design System Notes
          </h2>
          <ul style={{ 
            margin: 0,
            paddingLeft: '20px',
            color: '#666',
            lineHeight: 1.6
          }}>
            <li>Tiles use consistent 16px padding and 8px gap between icon and text</li>
            <li>Icon sizes scale with tile size: 24px (small), 28px (default), 32px (large)</li>
            <li>Typography follows the design system tokens for consistent sizing</li>
            <li>All color variants provide appropriate contrast for accessibility</li>
            <li>Hover and focus states enhance interactivity</li>
            <li>Responsive design ensures usability across all screen sizes</li>
          </ul>
        </div>

      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete replication of the Tile component design from Figma, showing all size, alignment, and color combinations exactly as specified in the design system.',
      },
    },
  },
};
