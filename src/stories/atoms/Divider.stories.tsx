import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Divider component for creating visual separations with various line styles, thicknesses, orientations, and optional text labels. Implements the exact Figma design specifications with two component sets: building-blocks/dividers (simple dividers) and divider (labeled dividers).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    line: {
      control: { type: 'select' },
      options: ['solid', 'dashed', 'dotted'],
      description: 'Line style of the divider',
    },
    thickness: {
      control: { type: 'select' },
      options: ['0.5px', '1px', '2px', '3px', '4px', '8px'],
      description: 'Thickness of the divider line',
    },
    alignment: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider',
    },
    label: {
      control: { type: 'text' },
      description: 'Text label to display with the divider',
    },
    textAlign: {
      control: { type: 'select' },
      options: ['none', 'left', 'centre', 'center', 'right', 'middle', 'top', 'bottom'],
      description: 'Position of the text label (matches Figma design alignment options)',
    },
    textStyle: {
      control: { type: 'select' },
      options: ['none', 'label-sm', 'title'],
      description: 'Text style variant',
    },
    width: {
      control: { type: 'text' },
      description: 'Custom width (for horizontal dividers)',
    },
    height: {
      control: { type: 'text' },
      description: 'Custom height (for vertical dividers)',
    },
    color: {
      control: { type: 'color' },
      description: 'Custom color override',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

// === BASIC EXAMPLES === //

export const Default: Story = {
  args: {
    line: 'solid',
    thickness: '0.5px',
    alignment: 'horizontal',
  },
};

export const WithLabel: Story = {
  args: {
    line: 'solid',
    thickness: '0.5px',
    alignment: 'horizontal',
    label: 'Divider Label',
    textAlign: 'left',
    textStyle: 'label-sm',
    width: '400px',
  },
};

export const VerticalDefault: Story = {
  args: {
    line: 'solid',
    thickness: '0.5px',
    alignment: 'vertical',
  },
};

export const VerticalWithLabel: Story = {
  args: {
    line: 'solid',
    thickness: '0.5px',
    alignment: 'vertical',
    label: 'Divider Label',
    textAlign: 'middle',
    textStyle: 'label-sm',
    height: '306px',
  },
};

// === FIGMA DESIGN SHOWCASE === //

export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '60px', 
      padding: '40px', 
      width: '100%', 
      maxWidth: '1400px',
      fontFamily: 'var(--type-typeface-roboto-flex), -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      {/* Header Section */}
      <div style={{
        padding: '40px',
        background: 'var(--base-peach-cream-50)',
        borderRadius: '8px',
        borderTop: '8px solid var(--color-Uqkth)',
        position: 'relative'
      }}>
        <h1 style={{ 
          margin: '0', 
          fontSize: '60px', 
          fontWeight: 700, 
          textTransform: 'uppercase',
          color: 'var(--color-Uqkth)',
          fontFamily: 'var(--type-typeface-roboto-flex)',
          lineHeight: '100%'
        }}>
          DIVIDERS
        </h1>
        <p style={{
          margin: '20px 0 0 0',
          fontSize: '20px',
          color: 'var(--color-JdFAw)',
          fontFamily: 'Certia, -apple-system, sans-serif'
        }}>
          A collection of dividers to use within Echo.
        </p>
      </div>

      {/* Building Blocks Section */}
      <div>
        <h2 style={{ 
          margin: '0 0 40px 0', 
          fontSize: '32px', 
          fontWeight: 700, 
          textTransform: 'uppercase',
          color: 'var(--base-black)',
          fontFamily: 'var(--type-typeface-roboto-flex)',
          lineHeight: '36px',
          letterSpacing: '0.5px'
        }}>
          BUILDING-BLOCKS
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '40px' }}>
          {/* Horizontal Dividers */}
          <div>
            <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: 500 }}>Horizontal Dividers</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Different thickness variants */}
              {(['0.5px', '1px', '2px', '4px', '8px'] as const).map(thickness => (
                <div key={thickness} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h4 style={{ margin: '0', fontSize: '14px', fontWeight: 500, color: '#666' }}>
                    {thickness} thickness
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Divider line="solid" thickness={thickness} alignment="horizontal" width="500px" />
                    <Divider line="dashed" thickness={thickness} alignment="horizontal" width="500px" />
                    <Divider line="dotted" thickness={thickness} alignment="horizontal" width="500px" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Dividers */}
          <div>
            <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: 500 }}>Vertical Dividers</h3>
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              {/* Different thickness variants */}
              {(['0.5px', '1px', '2px', '3px', '4px', '8px'] as const).map(thickness => (
                <div key={thickness} style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                  <h4 style={{ margin: '0', fontSize: '14px', fontWeight: 500, color: '#666' }}>
                    {thickness}
                  </h4>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'end' }}>
                    <Divider line="solid" thickness={thickness} alignment="vertical" height="306px" />
                    <Divider line="dashed" thickness={thickness} alignment="vertical" height="306px" />
                    <Divider line="dotted" thickness={thickness} alignment="vertical" height="306px" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Labeled Dividers Section */}
      <div>
        <h2 style={{ 
          margin: '0 0 40px 0', 
          fontSize: '32px', 
          fontWeight: 700, 
          textTransform: 'uppercase',
          color: 'var(--base-black)',
          fontFamily: 'var(--type-typeface-roboto-flex)',
          lineHeight: '36px',
          letterSpacing: '0.5px'
        }}>
          HORIZONTAL & VERTICAL DIVIDERS
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          {/* Horizontal Labeled Dividers */}
          <div>
            <h3 style={{ margin: '0 0 32px 0', fontSize: '20px', fontWeight: 600 }}>Horizontal with Labels</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              
              {/* Label-sm style */}
              <div>
                <h4 style={{ margin: '0 0 24px 0', fontSize: '16px', fontWeight: 500, color: '#333' }}>Label Small Style</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div>
                    <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>Left aligned</p>
                    <Divider 
                    ... (file continues)