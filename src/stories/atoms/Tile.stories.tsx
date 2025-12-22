import type { Meta, StoryObj } from '@storybook/react';
import { Tile } from './Tile';

const meta = {
  title: 'Atoms/Tile',
  component: Tile,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tile component that displays an icon and label with various size, alignment, and color variants. Perfect for creating dashboard widgets, category tiles, or action cards.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size of the tile',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'centre', 'right'],
      description: 'Text alignment within the tile',
    },
    colour: {
      control: { type: 'select' },
      options: ['default', 'blue', 'yellow', 'light-gray', 'info-blue', 'blue-gray'],
      description: 'Color variant of the tile',
    },
    children: {
      control: { type: 'text' },
      description: 'Label text content',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Label',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Label',
  },
};

// Alignment Variants
export const LeftAligned: Story = {
  args: {
    align: 'left',
    children: 'Label',
  },
};

export const RightAligned: Story = {
  args: {
    align: 'right',
    children: 'Label',
  },
};

// Color Variants
export const Blue: Story = {
  args: {
    colour: 'blue',
    children: 'Label',
  },
};

export const Yellow: Story = {
  args: {
    colour: 'yellow',
    children: 'Label',
  },
};

export const LightGray: Story = {
  args: {
    colour: 'light-gray',
    children: 'Label',
  },
};

export const InfoBlue: Story = {
  args: {
    colour: 'info-blue',
    children: 'Label',
  },
};

export const BlueGray: Story = {
  args: {
    colour: 'blue-gray',
    children: 'Label',
  },
};

// Interactive States
export const Clickable: Story = {
  args: {
    children: 'Clickable Tile',
    onClick: () => console.log('Tile clicked!'),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Tile',
    disabled: true,
    onClick: () => console.log('This should not fire'),
  },
};

// Custom Icon Example
const CustomIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
  </svg>
);

export const WithCustomIcon: Story = {
  args: {
    children: 'Custom',
    colour: 'blue',
    icon: <CustomIcon size={28} />,
  },
};

// Comprehensive Showcase
export const AllSizesShowcase: Story = {
  args: {
    children: 'Label',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'end' }}>
      <Tile size="small" children="Small" />
      <Tile size="default" children="Default" />
      <Tile size="large" children="Large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all tile sizes.',
      },
    },
  },
};

export const AllAlignmentsShowcase: Story = {
  args: {
    children: 'Label',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tile align="left" children="Left" />
      <Tile align="centre" children="Centre" />
      <Tile align="right" children="Right" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all text alignments.',
      },
    },
  },
};

export const AllColorsShowcase: Story = {
  args: {
    children: 'Label',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Tile colour="default" children="Default" />
      <Tile colour="blue" children="Blue" />
      <Tile colour="yellow" children="Yellow" />
      <Tile colour="light-gray" children="Light Gray" />
      <Tile colour="info-blue" children="Info Blue" />
      <Tile colour="blue-gray" children="Blue Gray" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all color variants.',
      },
    },
  },
};

// Complete Design System Showcase
export const DesignSystemShowcase: Story = {
  args: {
    children: 'Label',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Size variants with center alignment */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Centre Alignment</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {/* Default size */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <Tile size="default" align="centre" colour="default" children="Label" />
            <Tile size="default" align="centre" colour="blue" children="Label" />
            <Tile size="default" align="centre" colour="yellow" children="Label" />
            <Tile size="default" align="centre" colour="light-gray" children="Label" />
            <Tile size="default" align="centre" colour="info-blue" children="Label" />
            <Tile size="default" align="centre" colour="blue-gray" children="Label" />
          </div>
        </div>
      </div>

      {/* Large size variants */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Large Size</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Tile size="large" align="centre" colour="default" children="Label" />
            <Tile size="large" align="centre" colour="blue" children="Label" />
            <Tile size="large" align="centre" colour="yellow" children="Label" />
            <Tile size="large" align="centre" colour="light-gray" children="Label" />
            <Tile size="large" align="centre" colour="info-blue" children="Label" />
            <Tile size="large" align="centre" colour="blue-gray" children="Label" />
          </div>
        </div>
      </div>

      {/* Small size variants */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Small Size</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Tile size="small" align="centre" colour="default" children="Label" />
            <Tile size="small" align="centre" colour="blue" children="Label" />
            <Tile size="small" align="centre" colour="yellow" children="Label" />
            <Tile size="small" align="centre" colour="light-gray" children="Label" />
            <Tile size="small" align="centre" colour="info-blue" children="Label" />
            <Tile size="small" align="centre" colour="blue-gray" children="Label" />
          </div>
        </div>
      </div>

      {/* Left alignment */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Left Alignment</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Tile size="default" align="left" colour="default" children="Label" />
            <Tile size="default" align="left" colour="blue" children="Label" />
            <Tile size="default" align="left" colour="yellow" children="Label" />
            <Tile size="default" align="left" colour="light-gray" children="Label" />
            <Tile size="default" align="left" colour="info-blue" children="Label" />
            <Tile size="default" align="left" colour="blue-gray" children="Label" />
          </div>
        </div>
      </div>

      {/* Right alignment */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Right Alignment</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Tile size="default" align="right" colour="default" children="Label" />
            <Tile size="default" align="right" colour="blue" children="Label" />
            <Tile size="default" align="right" colour="yellow" children="Label" />
            <Tile size="default" align="right" colour="light-gray" children="Label" />
            <Tile size="default" align="right" colour="info-blue" children="Label" />
            <Tile size="default" align="right" colour="blue-gray" children="Label" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all tile variants from the design system.',
      },
    },
  },
};
