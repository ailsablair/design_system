import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Divider component for creating visual separations with various line styles, thicknesses, orientations, and optional text labels. Implements the exact Figma design specifications with two component sets: building-blocks/dividers (simple dividers) and divider (labeled dividers).',
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        padding: '40px',
        width: '100%',
        maxWidth: '1400px',
        fontFamily:
          'var(--type-typeface-roboto-flex), -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* Header Section */}
      <div
        style={{
          padding: '40px',
          background: 'var(--base-peach-cream-50)',
          borderRadius: '8px',
          borderTop: '8px solid var(--color-Uqkth)',
          position: 'relative',
        }}
      >
        <h1
          style={{
            margin: '0',
            fontSize: '60px',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: 'var(--color-Uqkth)',
            fontFamily: 'var(--type-typeface-roboto-flex)',
            lineHeight: '100%',
          }}
        >
          DIVIDERS
        </h1>
        <p
          style={{
            margin: '20px 0 0 0',
            fontSize: '20px',
            color: 'var(--color-JdFAw)',
            fontFamily: 'Certia, -apple-system, sans-serif',
          }}
        >
          A collection of dividers to use within Echo.
        </p>
      </div>

      {/* Building Blocks Section */}
      <div>
        <h2
          style={{
            margin: '0 0 40px 0',
            fontSize: '32px',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: 'var(--base-black)',
            fontFamily: 'var(--type-typeface-roboto-flex)',
            lineHeight: '36px',
            letterSpacing: '0.5px',
          }}
        >
          BUILDING-BLOCKS
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '40px',
          }}
        >
          {/* Horizontal Dividers */}
          <div>
            <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: 500 }}>
              Horizontal Dividers
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Different thickness variants */}
              {(['0.5px', '1px', '2px', '4px', '8px'] as const).map((thickness) => (
                <div
                  key={thickness}
                  style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                >
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
            <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: 500 }}>
              Vertical Dividers
            </h3>
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              {/* Different thickness variants */}
              {(['0.5px', '1px', '2px', '3px', '4px', '8px'] as const).map((thickness) => (
                <div
                  key={thickness}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    alignItems: 'center',
                  }}
                >
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
        <h2
          style={{
            margin: '0 0 40px 0',
            fontSize: '32px',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: 'var(--base-black)',
            fontFamily: 'var(--type-typeface-roboto-flex)',
            lineHeight: '36px',
            letterSpacing: '0.5px',
          }}
        >
          HORIZONTAL & VERTICAL DIVIDERS
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          {/* Horizontal Labeled Dividers */}
          <div>
            <h3 style={{ margin: '0 0 32px 0', fontSize: '20px', fontWeight: 600 }}>
              Horizontal with Labels
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {/* Label-sm style */}
              <div>
                <h4 style={{ margin: '0 0 24px 0', fontSize: '16px', fontWeight: 500, color: '#333' }}>
                  Label Small Style
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div>
                    <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>Left aligned</p>
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
                  <div>
                    <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>Center aligned</p>
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
                  <div>
                    <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>Right aligned</p>
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
                </div>
              </div>

              {/* Title style */}
              <div>
                <h4 style={{ margin: '0 0 24px 0', fontSize: '16px', fontWeight: 500, color: '#333' }}>
                  Title Style
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div>
                    <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>Left aligned</p>
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
                  <div>
                    <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>Center aligned</p>
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
                  <div>
                    <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>Right aligned</p>
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
          </div>

          {/* Vertical Labeled Dividers */}
          <div>
            <h3 style={{ margin: '0 0 32px 0', fontSize: '20px', fontWeight: 600 }}>
              Vertical with Labels
            </h3>
            <div style={{ display: 'flex', gap: '60px', justifyContent: 'space-around' }}>
              {/* Label-sm style */}
              <div>
                <h4
                  style={{
                    margin: '0 0 24px 0',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#333',
                    textAlign: 'center',
                  }}
                >
                  Label Small
                </h4>
                <div style={{ display: 'flex', gap: '32px', alignItems: 'end' }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#666' }}>Top</p>
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
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#666' }}>Middle</p>
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
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#666' }}>Bottom</p>
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
                </div>
              </div>

              {/* Title style */}
              <div>
                <h4
                  style={{
                    margin: '0 0 24px 0',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#333',
                    textAlign: 'center',
                  }}
                >
                  Title
                </h4>
                <div style={{ display: 'flex', gap: '32px', alignItems: 'end' }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#666' }}>Top</p>
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
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#666' }}>Middle</p>
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
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#666' }}>Bottom</p>
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
                </div>
              </div>
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
        story:
          'Complete implementation of the Figma design showcasing all divider variants organized into two component sets: building-blocks/dividers (simple dividers) and divider (labeled dividers with various positioning options).',
      },
    },
  },
};

// === COMPONENT SET EXAMPLES === //

export const BuildingBlocksDividers: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '20px' }}>
      <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>
        Building-blocks/dividers Component Set
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 500 }}>
            Horizontal Variants
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {(['solid', 'dashed', 'dotted'] as const).map((line) =>
              (['0.5px', '1px', '2px', '4px', '8px'] as const).map((thickness) => (
                <div
                  key={`${line}-${thickness}`}
                  style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                >
                  <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>
                    {line}, {thickness}, horizontal
                  </p>
                  <Divider line={line} thickness={thickness} alignment="horizontal" width="400px" />
                </div>
              )),
            )}
          </div>
        </div>

        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 500 }}>
            Vertical Variants
          </h4>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {(['solid', 'dashed', 'dotted'] as const).map((line) =>
              (['0.5px', '1px', '2px', '3px', '4px', '8px'] as const).map((thickness) => (
                <div
                  key={`${line}-${thickness}`}
                  style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}
                >
                  <p
                    style={{
                      margin: '0',
                      fontSize: '10px',
                      color: '#666',
                      textAlign: 'center',
                      width: '60px',
                    }}
                  >
                    {line}, {thickness}
                  </p>
                  <Divider line={line} thickness={thickness} alignment="vertical" height="100px" />
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All variants of the building-blocks/dividers component set with different line styles, thicknesses, and alignments.',
      },
    },
  },
};

export const LabeledDividers: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '20px' }}>
      <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>
        Divider Component Set (with labels)
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
        <div>
          <h4 style={{ margin: '0 0 24px 0', fontSize: '16px', fontWeight: 500 }}>
            Horizontal Label Positions
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {(['left', 'centre', 'right'] as const).map((alignment) =>
              (['label-sm', 'title'] as const).map((textStyle) => (
                <div key={`${alignment}-${textStyle}`}>
                  <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>
                    {alignment}, {textStyle}
                  </p>
                  <Divider
                    line="solid"
                    thickness="0.5px"
                    alignment="horizontal"
                    label="Divider Label"
                    textAlign={alignment}
                    textStyle={textStyle}
                    width="100%"
                  />
                </div>
              )),
            )}
          </div>
        </div>

        <div>
          <h4 style={{ margin: '0 0 24px 0', fontSize: '16px', fontWeight: 500 }}>
            Vertical Label Positions
          </h4>
          <div style={{ display: 'flex', gap: '40px', justifyContent: 'space-around' }}>
            {(['top', 'middle', 'bottom'] as const).map((alignment) => (
              <div key={alignment} style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
                <p style={{ margin: '0', fontSize: '14px', color: '#666', textAlign: 'center' }}>
                  {alignment}
                </p>
                {(['label-sm', 'title'] as const).map((textStyle) => (
                  <div key={textStyle} style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                    <p style={{ margin: '0', fontSize: '12px', color: '#999' }}>{textStyle}</p>
                    <Divider
                      line="solid"
                      thickness="0.5px"
                      alignment="vertical"
                      label="Divider Label"
                      textAlign={alignment}
                      textStyle={textStyle}
                      height="200px"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All variants of the divider component set with different label alignments and text styles for both horizontal and vertical orientations.',
      },
    },
  },
};

// === USAGE EXAMPLES === //

export const UsageInLayouts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px', maxWidth: '600px' }}>
      <h3 style={{ margin: '0', fontSize: '18px', fontWeight: 600 }}>Usage in Content Layouts</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Section 1</h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
            Content for the first section goes here.
          </p>
        </div>

        <Divider
          line="solid"
          thickness="0.5px"
          alignment="horizontal"
          label="Section Divider"
          textAlign="centre"
          textStyle="title"
        />

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

      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 500 }}>Vertical Layout</h4>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '4px', flex: 1 }}>
            <p style={{ margin: '0', fontSize: '14px', textAlign: 'center' }}>Left Content</p>
          </div>

          <Divider
            line="solid"
            thickness="0.5px"
            alignment="vertical"
            label="OR"
            textAlign="middle"
            textStyle="label-sm"
            height="60px"
          />

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
        story:
          'Examples of how dividers can be used in real content layouts to separate sections and create visual hierarchy.',
      },
    },
  },
};
