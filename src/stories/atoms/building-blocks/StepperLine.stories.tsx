import type { Meta, StoryObj } from '@storybook/react';
import { StepperLine } from './StepperLine';
import './stepperLine.css';

const meta: Meta<typeof StepperLine> = {
  title: 'Atoms/ZZ Building Blocks/Stepper Line',
  component: StepperLine,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The StepperLine component creates connecting lines between stepper steps. It supports different line styles (solid, dashed, dotted) and stroke weights to visually connect sequential steps in a workflow.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: 'Line style variant',
    },
    stroke: {
      control: 'select',
      options: ['1px', '2px', '3px'],
      description: 'Stroke width of the line',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the line',
    },
    width: {
      control: 'text',
      description: 'Custom width for horizontal lines',
    },
    height: {
      control: 'text',
      description: 'Custom height for vertical lines',
    },
    color: {
      control: 'color',
      description: 'Custom color override',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StepperLine>;

// Default story
export const Default: Story = {
  args: {
    type: 'solid',
    stroke: '2px',
    orientation: 'horizontal',
  },
};

// Solid lines with different strokes
export const SolidLines: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Solid 1px</h4>
        <StepperLine type="solid" stroke="1px" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Solid 2px</h4>
        <StepperLine type="solid" stroke="2px" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Solid 3px</h4>
        <StepperLine type="solid" stroke="3px" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Solid line variants with different stroke weights.',
      },
    },
  },
};

// Dashed lines with different strokes
export const DashedLines: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Dashed 1px</h4>
        <StepperLine type="dashed" stroke="1px" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Dashed 2px</h4>
        <StepperLine type="dashed" stroke="2px" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Dashed 3px</h4>
        <StepperLine type="dashed" stroke="3px" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dashed line variants with different stroke weights.',
      },
    },
  },
};

// Dotted lines with different strokes
export const DottedLines: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Dotted 1px</h4>
        <StepperLine type="dotted" stroke="1px" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Dotted 2px</h4>
        <StepperLine type="dotted" stroke="2px" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Dotted 3px</h4>
        <StepperLine type="dotted" stroke="3px" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dotted line variants with different stroke weights.',
      },
    },
  },
};

// All line types comparison
export const AllLineTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ textAlign: 'center', fontFamily: 'Archivo', fontSize: '18px', fontWeight: '600' }}>2px Stroke Comparison</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Solid</h4>
            <StepperLine type="solid" stroke="2px" />
          </div>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Dashed</h4>
            <StepperLine type="dashed" stroke="2px" />
          </div>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ marginBottom: '8px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Dotted</h4>
            <StepperLine type="dotted" stroke="2px" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all line types with 2px stroke weight.',
      },
    },
  },
};

// Vertical lines
export const VerticalLines: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '40px', alignItems: 'center', justifyContent: 'center', height: '320px' }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Solid</h4>
        <StepperLine type="solid" stroke="2px" orientation="vertical" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Dashed</h4>
        <StepperLine type="dashed" stroke="2px" orientation="vertical" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Dotted</h4>
        <StepperLine type="dotted" stroke="2px" orientation="vertical" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical line variants for vertical stepper layouts.',
      },
    },
  },
};

// Custom widths
export const CustomWidths: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Short (100px)</h4>
        <StepperLine type="solid" stroke="2px" width="100px" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Medium (200px)</h4>
        <StepperLine type="solid" stroke="2px" width="200px" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Long (400px)</h4>
        <StepperLine type="solid" stroke="2px" width="400px" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Custom width examples for different layout requirements.',
      },
    },
  },
};

// Custom colors
export const CustomColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Blue</h4>
        <StepperLine type="solid" stroke="2px" color="#2F42BD" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Green</h4>
        <StepperLine type="solid" stroke="2px" color="#8BBF9F" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '12px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Orange</h4>
        <StepperLine type="solid" stroke="2px" color="#F59E0B" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Custom color examples using design system colors.',
      },
    },
  },
};

// Complete Figma showcase
export const FigmaShowcase: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', padding: '20px' }}>
      {/* Solid variants */}
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '20px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '600' }}>Solid</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <div><span style={{ fontSize: '12px' }}>1px</span><br/><StepperLine type="solid" stroke="1px" /></div>
          <div><span style={{ fontSize: '12px' }}>2px</span><br/><StepperLine type="solid" stroke="2px" /></div>
          <div><span style={{ fontSize: '12px' }}>3px</span><br/><StepperLine type="solid" stroke="3px" /></div>
        </div>
      </div>
      
      {/* Dashed variants */}
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '20px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '600' }}>Dashed</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <div><span style={{ fontSize: '12px' }}>1px</span><br/><StepperLine type="dashed" stroke="1px" /></div>
          <div><span style={{ fontSize: '12px' }}>2px</span><br/><StepperLine type="dashed" stroke="2px" /></div>
          <div><span style={{ fontSize: '12px' }}>3px</span><br/><StepperLine type="dashed" stroke="3px" /></div>
        </div>
      </div>
      
      {/* Dotted variants */}
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '20px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '600' }}>Dotted</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <div><span style={{ fontSize: '12px' }}>1px</span><br/><StepperLine type="dotted" stroke="1px" /></div>
          <div><span style={{ fontSize: '12px' }}>2px</span><br/><StepperLine type="dotted" stroke="2px" /></div>
          <div><span style={{ fontSize: '12px' }}>3px</span><br/><StepperLine type="dotted" stroke="3px" /></div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase matching the Figma design with all line types and stroke weights.',
      },
    },
  },
};

// Responsive behavior
export const ResponsiveBehavior: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Desktop (300px)</h4>
        <StepperLine type="solid" stroke="2px" width="300px" />
      </div>
      <div style={{ marginBottom: '32px' }}>
        <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Tablet (200px)</h4>
        <StepperLine type="solid" stroke="2px" width="200px" />
      </div>
      <div>
        <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Mobile (150px)</h4>
        <StepperLine type="solid" stroke="2px" width="150px" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive behavior showing how lines adapt to different screen sizes.',
      },
    },
  },
};
