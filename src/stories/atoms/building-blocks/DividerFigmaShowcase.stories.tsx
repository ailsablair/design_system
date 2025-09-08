import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
  title: 'Design System/Figma Showcase Files/Divider Figma Showcase',
  component: Divider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Exact replica of the Figma design showcasing all divider variants as specified in the design system. This implementation demonstrates both component sets: building-blocks/dividers (simple dividers) and divider (labeled dividers with various positioning options).',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FigmaDesignExactReplica: Story = {
  render: () => (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: 'var(--base-white)',
      position: 'relative',
      fontFamily: 'var(--type-typeface-roboto-flex), -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      {/* Header Section - Exact Figma Style */}
      <div style={{
        width: '100%',
        height: '414px',
        borderBottom: '1px solid var(--neutral-gray-gray-200)',
        background: 'var(--base-peach-cream-50)',
        position: 'relative'
      }}>
        {/* Top Bar */}
        <div style={{
          width: '100%',
          height: '8px',
          background: 'var(--color-Uqkth)',
          position: 'absolute',
          left: '0px',
          top: '0px'
        }}></div>
        
        {/* Title */}
        <h1 style={{
          color: 'var(--color-Uqkth)',
          fontFamily: 'var(--type-typeface-roboto-flex)',
          fontSize: '60px',
          fontWeight: 700,
          lineHeight: '100%',
          textTransform: 'uppercase',
          position: 'absolute',
          left: '40px',
          top: '266px',
          margin: 0
        }}>
          DIVIDERS
        </h1>
      </div>

      {/* Section 1 - Simple Height */}
      <div style={{
        position: 'absolute',
        left: '94px',
        top: '502px',
        width: '1547px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          <h2 style={{
            color: 'var(--color-Uqkth)',
            fontFamily: 'var(--type-typeface-roboto-flex)',
            fontSize: '48px',
            fontWeight: 400,
            lineHeight: '100%',
            margin: 0
          }}>
            Simple (height)
          </h2>
          <p style={{
            color: 'var(--color-JdFAw)',
            fontFamily: 'Certia',
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '100%',
            margin: 0
          }}>
            A collection of dividers to use within Echo.
          </p>
        </div>
      </div>

      {/* Building-blocks Section */}
      <div style={{
        position: 'absolute',
        left: '74px',
        top: '670px'
      }}>
        <h3 style={{
          color: 'var(--base-black)',
          fontFamily: 'var(--type-typeface-roboto-flex)',
          fontSize: '32px',
          fontWeight: 600,
          lineHeight: '36px',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          margin: 0
        }}>
          BUILDING-BLOCKS
        </h3>
      </div>

      {/* Building-blocks/dividers Component Set */}
      <div style={{
        position: 'absolute',
        left: '74px',
        top: '773px',
        width: '2512px',
        height: '747px'
      }}>
        {/* Horizontal dividers grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 500px)',
          gridTemplateRows: 'repeat(3, auto)',
          gap: '40px 100px'
        }}>
          {/* Row 1: 0.5px thickness */}
          <Divider line="solid" thickness="0.5px" alignment="horizontal" width="500px" />
          <Divider line="dashed" thickness="0.5px" alignment="horizontal" width="500px" />
          <Divider line="dotted" thickness="0.5px" alignment="horizontal" width="500px" />
          <Divider line="solid" thickness="1px" alignment="horizontal" width="500px" />
          <Divider line="dashed" thickness="1px" alignment="horizontal" width="500px" />
          
          {/* Row 2: Medium thickness */}
          <Divider line="dotted" thickness="1px" alignment="horizontal" width="500px" />
          <Divider line="solid" thickness="2px" alignment="horizontal" width="500px" />
          <Divider line="dashed" thickness="2px" alignment="horizontal" width="500px" />
          <Divider line="dotted" thickness="2px" alignment="horizontal" width="500px" />
          <Divider line="solid" thickness="4px" alignment="horizontal" width="500px" />
          
          {/* Row 3: Thick variants */}
          <Divider line="dashed" thickness="3px" alignment="horizontal" width="500px" />
          <Divider line="dotted" thickness="3px" alignment="horizontal" width="500px" />
          <Divider line="solid" thickness="8px" alignment="horizontal" width="500px" />
          <Divider line="dashed" thickness="4px" alignment="horizontal" width="500px" />
          <Divider line="dotted" thickness="4px" alignment="horizontal" width="500px" />
        </div>

        {/* Vertical dividers */}
        <div style={{
          position: 'absolute',
          left: '1800px',
          top: '0',
          display: 'flex',
          gap: '80px'
        }}>
          {/* Column 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Divider line="solid" thickness="0.5px" alignment="vertical" height="306px" />
            <Divider line="dashed" thickness="0.5px" alignment="vertical" height="306px" />
            <Divider line="dotted" thickness="0.5px" alignment="vertical" height="306px" />
          </div>
          
          {/* Column 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Divider line="solid" thickness="1px" alignment="vertical" height="306px" />
            <Divider line="dashed" thickness="1px" alignment="vertical" height="306px" />
            <Divider line="dotted" thickness="1px" alignment="vertical" height="306px" />
          </div>
          
          {/* Column 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Divider line="solid" thickness="2px" alignment="vertical" height="306px" />
            <Divider line="dashed" thickness="2px" alignment="vertical" height="306px" />
            <Divider line="dotted" thickness="2px" alignment="vertical" height="306px" />
          </div>
          
          {/* Column 4 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Divider line="solid" thickness="3px" alignment="vertical" height="306px" />
            <Divider line="dashed" thickness="3px" alignment="vertical" height="306px" />
            <Divider line="dotted" thickness="3px" alignment="vertical" height="306px" />
          </div>
          
          {/* Column 5 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Divider line="solid" thickness="4px" alignment="vertical" height="306px" />
            <Divider line="dashed" thickness="4px" alignment="vertical" height="306px" />
            <Divider line="dotted" thickness="4px" alignment="vertical" height="306px" />
          </div>
          
          {/* Column 6 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Divider line="solid" thickness="8px" alignment="vertical" height="306px" />
            <Divider line="dashed" thickness="8px" alignment="vertical" height="306px" />
            <Divider line="dotted" thickness="8px" alignment="vertical" height="306px" />
          </div>
        </div>
      </div>

      {/* Horizontal & Vertical Dividers Section */}
      <div style={{
        position: 'absolute',
        left: '74px',
        top: '2030px'
      }}>
        <h3 style={{
          color: 'var(--base-black)',
          fontFamily: 'var(--type-typeface-roboto-flex)',
          fontSize: '32px',
          fontWeight: 600,
          lineHeight: '36px',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          margin: 0
        }}>
          HORIZONTAL & VERTICAL DIVIDERS
        </h3>
      </div>

      {/* Divider Component Set (with labels) */}
      <div style={{
        position: 'absolute',
        left: '74px',
        top: '2105px',
        width: '5072px',
        height: '646px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '60px',
          width: '100%'
        }}>
          {/* Simple divider (no text) */}
          <div style={{ gridColumn: '1', display: 'flex', alignItems: 'center' }}>
            <Divider line="solid" thickness="0.5px" alignment="horizontal" width="100%" />
          </div>

          {/* Vertical with label-sm middle */}
          <div style={{ gridColumn: '2', display: 'flex', justifyContent: 'center' }}>
            <Divider 
              line="solid" 
              thickness="0.5px" 
              alignment="vertical" 
              label="Divider Label" 
              textAlign="middle" 
              textStyle="label-sm"
              height="306px"
            />
          </div>

          {/* Vertical with title middle */}
          <div style={{ gridColumn: '3', display: 'flex', justifyContent: 'center' }}>
            <Divider 
              line="solid" 
              thickness="0.5px" 
              alignment="vertical" 
              label="Divider Label" 
              textAlign="middle" 
              textStyle="title"
              height="306px"
            />
          </div>

          {/* Vertical with title top */}
          <div style={{ gridColumn: '4', display: 'flex', justifyContent: 'center' }}>
            <Divider 
              line="solid" 
              thickness="0.5px" 
              alignment="vertical" 
              label="Divider Label" 
              textAlign="top" 
              textStyle="title"
              height="306px"
            />
          </div>

          {/* Vertical with title bottom */}
          <div style={{ gridColumn: '5', display: 'flex', justifyContent: 'center' }}>
            <Divider 
              line="solid" 
              thickness="0.5px" 
              alignment="vertical" 
              label="Divider Label" 
              textAlign="bottom" 
              textStyle="title"
              height="306px"
            />
          </div>

          {/* Vertical with label-sm top */}
          <div style={{ gridColumn: '6', display: 'flex', justifyContent: 'center' }}>
            <Divider 
              line="solid" 
              thickness="0.5px" 
              alignment="vertical" 
              label="Divider Label" 
              textAlign="top" 
              textStyle="label-sm"
              height="306px"
            />
          </div>

          {/* Vertical with label-sm bottom */}
          <div style={{ gridColumn: '7', display: 'flex', justifyContent: 'center' }}>
            <Divider 
              line="solid" 
              thickness="0.5px" 
              alignment="vertical" 
              label="Divider Label" 
              textAlign="bottom" 
              textStyle="label-sm"
              height="306px"
            />
          </div>

          {/* Horizontal with label-sm left */}
          <div style={{ gridColumn: '1', gridRow: '2', display: 'flex', alignItems: 'center' }}>
            <Divider 
              line="solid" 
              thickness="0.5px" 
              alignment="horizontal" 
              label="Divider Label" 
              textAlign="left" 
              textStyle="label-sm"
              width="100%"
            />
          </div>

          {/* Horizontal with label-sm center */}
          <div style={{ gridColumn: '2', gridRow: '2', display: 'flex', alignItems: 'center' }}>
            <Divider 
              line="solid" 
              thickness="0.5px" 
              alignment="horizontal" 
              label="Divider Label" 
              textAlign="centre" 
              textStyle="label-sm"
              width="100%"
            />
          </div>

          {/* Horizontal with label-sm right */}
          <div style={{ gridColumn: '3', gridRow: '2', display: 'flex', alignItems: 'center' }}>
            <Divider 
              line="solid" 
              thickness="0.5px" 
              alignment="horizontal" 
              label="Divider Label" 
              textAlign="right" 
              textStyle="label-sm"
              width="100%"
            />
          </div>

          {/* Horizontal with title left */}
          <div style={{ gridColumn: '4', gridRow: '2', display: 'flex', alignItems: 'center' }}>
            <Divider 
              line="solid" 
              thickness="0.5px" 
              alignment="horizontal" 
              label="Divider Label" 
              textAlign="left" 
              textStyle="title"
              width="100%"
            />
          </div>

          {/* Horizontal with title center */}
          <div style={{ gridColumn: '5', gridRow: '2', display: 'flex', alignItems: 'center' }}>
            <Divider 
              line="solid" 
              thickness="0.5px" 
              alignment="horizontal" 
              label="Divider Label" 
              textAlign="centre" 
              textStyle="title"
              width="100%"
            />
          </div>

          {/* Horizontal with title right */}
          <div style={{ gridColumn: '6', gridRow: '2', display: 'flex', alignItems: 'center' }}>
            <Divider 
              line="solid" 
              thickness="0.5px" 
              alignment="horizontal" 
              label="Divider Label" 
              textAlign="right" 
              textStyle="title"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pixel-perfect replica of the Figma design showing the complete divider system with all variants and positioning options exactly as specified in the design.',
      },
    },
  },
};

export const InteractiveDemo: Story = {
  render: () => (
    <div style={{ padding: '40px', maxWidth: '800px' }}>
      <h2 style={{ marginBottom: '40px' }}>Interactive Divider Component Demo</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* Simple Dividers */}
        <section>
          <h3 style={{ marginBottom: '20px' }}>Simple Dividers (building-blocks/dividers)</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Solid, 0.5px</p>
              <Divider line="solid" thickness="0.5px" alignment="horizontal" />
            </div>
            <div>
              <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Dashed, 1px</p>
              <Divider line="dashed" thickness="1px" alignment="horizontal" />
            </div>
            <div>
              <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Dotted, 2px</p>
              <Divider line="dotted" thickness="2px" alignment="horizontal" />
            </div>
          </div>
        </section>

        {/* Labeled Horizontal Dividers */}
        <section>
          <h3 style={{ marginBottom: '20px' }}>Horizontal Labeled Dividers</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Divider 
              line="solid" 
              thickness="0.5px" 
              alignment="horizontal" 
              label="Left Aligned" 
              textAlign="left" 
              textStyle="label-sm"
            />
            <Divider 
              line="solid" 
              thickness="0.5px" 
              alignment="horizontal" 
              label="Center Aligned" 
              textAlign="centre" 
              textStyle="title"
            />
            <Divider 
              line="solid" 
              thickness="0.5px" 
              alignment="horizontal" 
              label="Right Aligned" 
              textAlign="right" 
              textStyle="label-sm"
            />
          </div>
        </section>

        {/* Vertical Dividers */}
        <section>
          <h3 style={{ marginBottom: '20px' }}>Vertical Dividers</h3>
          <div style={{ display: 'flex', gap: '60px', justifyContent: 'center', alignItems: 'end' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>Top Label</p>
              <Divider 
                line="solid" 
                thickness="0.5px" 
                alignment="vertical" 
                label="Top" 
                textAlign="top" 
                textStyle="label-sm"
                height="200px"
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>Middle Label</p>
              <Divider 
                line="solid" 
                thickness="0.5px" 
                alignment="vertical" 
                label="Middle" 
                textAlign="middle" 
                textStyle="title"
                height="200px"
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>Bottom Label</p>
              <Divider 
                line="solid" 
                thickness="0.5px" 
                alignment="vertical" 
                label="Bottom" 
                textAlign="bottom" 
                textStyle="label-sm"
                height="200px"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration of the key divider variants for quick testing and understanding.',
      },
    },
  },
};
