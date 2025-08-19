import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
  title: 'Atoms/Building Blocks/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Divider component for creating visual separations with various line styles, thicknesses, orientations, and optional text labels. These building blocks are used to create clear visual divisions between content sections.',
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
      options: ['left', 'center', 'right'],
      description: 'Position of the text label for horizontal dividers',
    },
    textStyle: {
      control: { type: 'select' },
      options: ['label-sm', 'title'],
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
    thickness: '1px',
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

export const CenterLabel: Story = {
  args: {
    line: 'solid',
    thickness: '0.5px',
    alignment: 'horizontal',
    label: 'Divider Label',
    textAlign: 'center',
    textStyle: 'label-sm',
    width: '400px',
  },
};

export const RightLabel: Story = {
  args: {
    line: 'solid',
    thickness: '0.5px',
    alignment: 'horizontal',
    label: 'Divider Label',
    textAlign: 'right',
    textStyle: 'label-sm',
    width: '400px',
  },
};

export const VerticalDefault: Story = {
  args: {
    line: 'solid',
    thickness: '1px',
    alignment: 'vertical',
  },
};

export const DashedHorizontal: Story = {
  args: {
    line: 'dashed',
    thickness: '1px',
    alignment: 'horizontal',
  },
};

export const DottedVertical: Story = {
  args: {
    line: 'dotted',
    thickness: '2px',
    alignment: 'vertical',
  },
};

// === FIGMA DESIGN SHOWCASE === //

export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '40px', width: '100%', maxWidth: '1200px' }}>
      <h2 style={{ margin: '0', fontSize: '24px', fontWeight: 600 }}>Figma Design Implementation</h2>
      
      {/* Basic Dividers without text */}
      <div>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: 500 }}>Basic Dividers</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Solid</p>
            <Divider line="solid" thickness="0.5px" alignment="horizontal" width="100%" />
          </div>
          
          <div>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Dashed</p>
            <Divider line="dashed" thickness="0.5px" alignment="horizontal" width="100%" />
          </div>
          
          <div>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Dotted</p>
            <Divider line="dotted" thickness="0.5px" alignment="horizontal" width="100%" />
          </div>
        </div>
      </div>

      {/* Text Dividers - Label Small */}
      <div>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: 500 }}>Dividers with Text Labels (Label Small)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Left aligned labels */}
          <div>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 500 }}>Left Aligned</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <Divider 
                line="solid" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="left" 
                textStyle="label-sm"
                width="100%"
              />
              <Divider 
                line="dashed" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="left" 
                textStyle="label-sm"
                width="100%"
              />
              <Divider 
                line="dotted" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="left" 
                textStyle="label-sm"
                width="100%"
              />
            </div>
          </div>

          {/* Center aligned labels */}
          <div>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 500 }}>Center Aligned</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <Divider 
                line="solid" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="center" 
                textStyle="label-sm"
                width="100%"
              />
              <Divider 
                line="dashed" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="center" 
                textStyle="label-sm"
                width="100%"
              />
              <Divider 
                line="dotted" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="center" 
                textStyle="label-sm"
                width="100%"
              />
            </div>
          </div>

          {/* Right aligned labels */}
          <div>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 500 }}>Right Aligned</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <Divider 
                line="solid" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="right" 
                textStyle="label-sm"
                width="100%"
              />
              <Divider 
                line="dashed" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="right" 
                textStyle="label-sm"
                width="100%"
              />
              <Divider 
                line="dotted" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="right" 
                textStyle="label-sm"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Text Dividers - Title Style */}
      <div>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: 500 }}>Dividers with Text Labels (Title Style)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Left aligned title */}
          <div>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 500 }}>Left Aligned</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <Divider 
                line="solid" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="left" 
                textStyle="title"
                width="100%"
              />
              <Divider 
                line="dashed" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="left" 
                textStyle="title"
                width="100%"
              />
              <Divider 
                line="dotted" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="left" 
                textStyle="title"
                width="100%"
              />
            </div>
          </div>

          {/* Center aligned title */}
          <div>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 500 }}>Center Aligned</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <Divider 
                line="solid" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="center" 
                textStyle="title"
                width="100%"
              />
              <Divider 
                line="dashed" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="center" 
                textStyle="title"
                width="100%"
              />
              <Divider 
                line="dotted" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="center" 
                textStyle="title"
                width="100%"
              />
            </div>
          </div>

          {/* Right aligned title */}
          <div>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 500 }}>Right Aligned</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <Divider 
                line="solid" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="right" 
                textStyle="title"
                width="100%"
              />
              <Divider 
                line="dashed" 
                thickness="0.5px" 
                alignment="horizontal" 
                label="Divider Label" 
                textAlign="right" 
                textStyle="title"
                width="100%"
              />
              <Divider 
                line="dotted" 
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
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete implementation of all divider variants as shown in the Figma design, including basic dividers and text-labeled dividers with different alignment and text style options.',
      },
    },
  },
};

// === THICKNESS VARIANTS === //

export const ThicknessVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>Horizontal Dividers - Thickness Variants</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>0.5px thickness</p>
          <Divider line="solid" thickness="0.5px" alignment="horizontal" width="400px" />
        </div>
        
        <div>
          <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>1px thickness</p>
          <Divider line="solid" thickness="1px" alignment="horizontal" width="400px" />
        </div>
        
        <div>
          <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>2px thickness</p>
          <Divider line="solid" thickness="2px" alignment="horizontal" width="400px" />
        </div>
        
        <div>
          <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>3px thickness</p>
          <Divider line="solid" thickness="3px" alignment="horizontal" width="400px" />
        </div>
        
        <div>
          <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>4px thickness</p>
          <Divider line="solid" thickness="4px" alignment="horizontal" width="400px" />
        </div>
        
        <div>
          <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>8px thickness</p>
          <Divider line="solid" thickness="8px" alignment="horizontal" width="400px" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Horizontal dividers showcasing all available thickness options from 0.5px to 8px.',
      },
    },
  },
};

// === LINE STYLE VARIANTS === //

export const LineStyleVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>Horizontal Line Styles</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Solid</p>
            <Divider line="solid" thickness="2px" alignment="horizontal" width="300px" />
          </div>
          
          <div>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Dashed</p>
            <Divider line="dashed" thickness="2px" alignment="horizontal" width="300px" />
          </div>
          
          <div>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Dotted</p>
            <Divider line="dotted" thickness="2px" alignment="horizontal" width="300px" />
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>Vertical Line Styles</h3>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Solid</p>
            <Divider line="solid" thickness="2px" alignment="vertical" height="100px" />
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Dashed</p>
            <Divider line="dashed" thickness="2px" alignment="vertical" height="100px" />
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Dotted</p>
            <Divider line="dotted" thickness="2px" alignment="vertical" height="100px" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different line styles (solid, dashed, dotted) shown in both horizontal and vertical orientations.',
      },
    },
  },
};

// === USAGE EXAMPLES === //

export const UsageInLayouts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px', maxWidth: '600px' }}>
      <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>Usage in Content Layouts</h3>
      
      {/* Content sections separated by dividers */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Section 1</h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
            Content for the first section goes here.
          </p>
        </div>
        
        <Divider line="solid" thickness="1px" alignment="horizontal" label="Section Divider" textAlign="center" />
        
        <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Section 2</h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
            Content for the second section goes here.
          </p>
        </div>
        
        <Divider line="dashed" thickness="1px" alignment="horizontal" />
        
        <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Section 3</h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
            Content for the third section goes here.
          </p>
        </div>
      </div>

      {/* Vertical layout example */}
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 500 }}>Vertical Layout</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '4px', flex: 1 }}>
            <p style={{ margin: '0', fontSize: '14px', textAlign: 'center' }}>Left Content</p>
          </div>
          
          <Divider line="solid" thickness="2px" alignment="vertical" height="60px" />
          
          <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '4px', flex: 1 }}>
            <p style={{ margin: '0', fontSize: '14px', textAlign: 'center' }}>Right Content</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of how dividers can be used in real content layouts to separate sections and create visual hierarchy.',
      },
    },
  },
};

// === CUSTOM STYLING === //

export const CustomStyling: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>Custom Colors & Dimensions</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Custom blue color</p>
          <Divider line="solid" thickness="3px" alignment="horizontal" width="250px" color="#2F42BD" />
        </div>
        
        <div>
          <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Custom red color, dashed</p>
          <Divider line="dashed" thickness="2px" alignment="horizontal" width="250px" color="#e53e3e" />
        </div>
        
        <div>
          <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Custom green color with label</p>
          <Divider 
            line="solid" 
            thickness="2px" 
            alignment="horizontal" 
            width="250px" 
            color="#38a169" 
            label="Custom Label"
            textAlign="center"
            textStyle="title"
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Custom height</p>
          <Divider line="solid" thickness="2px" alignment="vertical" height="80px" color="#9f7aea" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>Extra thick</p>
          <Divider line="solid" thickness="8px" alignment="vertical" height="80px" color="#ed8936" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of custom colors and dimensions to show the flexibility of the divider component.',
      },
    },
  },
};
