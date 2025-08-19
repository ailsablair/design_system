import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tile, AlarmIcon } from './Tile';

const meta: Meta<typeof Tile> = {
  title: 'Atoms/Tile',
  component: Tile,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible tile component with support for different sizes, alignments, colors, and icons. Perfect for dashboard cards, navigation tiles, and feature blocks.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Tile text content',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size of the tile',
    },
    align: {
      control: { type: 'select' },
      options: ['centre', 'left', 'right'],
      description: 'Content alignment within the tile',
    },
    colour: {
      control: { type: 'select' },
      options: ['default', 'blue', 'yellow', 'light-gray', 'info-blue', 'blue-gray'],
      description: 'Color variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic tile stories
export const Default: Story = {
  args: {
    children: 'Label',
    size: 'default',
    align: 'centre',
    colour: 'default',
    icon: <AlarmIcon size={28} />,
  },
};

export const Blue: Story = {
  args: {
    children: 'Label',
    size: 'default',
    align: 'centre',
    colour: 'blue',
    icon: <AlarmIcon size={28} />,
  },
};

export const Yellow: Story = {
  args: {
    children: 'Label',
    size: 'default',
    align: 'centre',
    colour: 'yellow',
    icon: <AlarmIcon size={28} />,
  },
};

export const LightGray: Story = {
  args: {
    children: 'Label',
    size: 'default',
    align: 'centre',
    colour: 'light-gray',
    icon: <AlarmIcon size={28} />,
  },
};

export const InfoBlue: Story = {
  args: {
    children: 'Label',
    size: 'default',
    align: 'centre',
    colour: 'info-blue',
    icon: <AlarmIcon size={28} />,
  },
};

export const BlueGray: Story = {
  args: {
    children: 'Label',
    size: 'default',
    align: 'centre',
    colour: 'blue-gray',
    icon: <AlarmIcon size={28} />,
  },
};

// Size variants
export const Small: Story = {
  args: {
    children: 'Label',
    size: 'small',
    align: 'centre',
    colour: 'default',
    icon: <AlarmIcon size={24} />,
  },
};

export const Large: Story = {
  args: {
    children: 'Label',
    size: 'large',
    align: 'centre',
    colour: 'default',
    icon: <AlarmIcon size={32} />,
  },
};

// Alignment variants
export const LeftAligned: Story = {
  args: {
    children: 'Label',
    size: 'default',
    align: 'left',
    colour: 'default',
    icon: <AlarmIcon size={28} />,
  },
};

export const RightAligned: Story = {
  args: {
    children: 'Label',
    size: 'default',
    align: 'right',
    colour: 'default',
    icon: <AlarmIcon size={28} />,
  },
};

// Interactive tile
export const Clickable: Story = {
  args: {
    children: 'Clickable Tile',
    size: 'default',
    align: 'centre',
    colour: 'blue',
    icon: <AlarmIcon size={28} />,
    onClick: () => alert('Tile clicked!'),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Tile',
    size: 'default',
    align: 'centre',
    colour: 'default',
    icon: <AlarmIcon size={28} />,
    disabled: true,
    onClick: () => alert('This should not fire'),
  },
};

// Comprehensive showcase matching Figma design
export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Tile Component Showcase</h3>
      
      {/* Default Size - Centre Alignment */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500, minWidth: '120px' }}>Default - Centre:</h4>
        <Tile size="default" align="centre" colour="default" icon={<AlarmIcon size={28} />}>Label</Tile>
        <Tile size="default" align="centre" colour="blue" icon={<AlarmIcon size={28} />}>Label</Tile>
        <Tile size="default" align="centre" colour="yellow" icon={<AlarmIcon size={28} />}>Label</Tile>
        <Tile size="default" align="centre" colour="light-gray" icon={<AlarmIcon size={28} />}>Label</Tile>
        <Tile size="default" align="centre" colour="info-blue" icon={<AlarmIcon size={28} />}>Label</Tile>
        <Tile size="default" align="centre" colour="blue-gray" icon={<AlarmIcon size={28} />}>Label</Tile>
      </div>

      {/* Large Size - Centre Alignment */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500, minWidth: '120px' }}>Large - Centre:</h4>
        <Tile size="large" align="centre" colour="default" icon={<AlarmIcon size={32} />}>Label</Tile>
        <Tile size="large" align="centre" colour="blue" icon={<AlarmIcon size={32} />}>Label</Tile>
        <Tile size="large" align="centre" colour="yellow" icon={<AlarmIcon size={32} />}>Label</Tile>
        <Tile size="large" align="centre" colour="light-gray" icon={<AlarmIcon size={32} />}>Label</Tile>
        <Tile size="large" align="centre" colour="info-blue" icon={<AlarmIcon size={32} />}>Label</Tile>
        <Tile size="large" align="centre" colour="blue-gray" icon={<AlarmIcon size={32} />}>Label</Tile>
      </div>

      {/* Small Size - Centre Alignment */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500, minWidth: '120px' }}>Small - Centre:</h4>
        <Tile size="small" align="centre" colour="default" icon={<AlarmIcon size={24} />}>Label</Tile>
        <Tile size="small" align="centre" colour="blue" icon={<AlarmIcon size={24} />}>Label</Tile>
        <Tile size="small" align="centre" colour="yellow" icon={<AlarmIcon size={24} />}>Label</Tile>
        <Tile size="small" align="centre" colour="light-gray" icon={<AlarmIcon size={24} />}>Label</Tile>
        <Tile size="small" align="centre" colour="info-blue" icon={<AlarmIcon size={24} />}>Label</Tile>
        <Tile size="small" align="centre" colour="blue-gray" icon={<AlarmIcon size={24} />}>Label</Tile>
      </div>

      {/* Default Size - Left Alignment */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500, minWidth: '120px' }}>Default - Left:</h4>
        <Tile size="default" align="left" colour="default" icon={<AlarmIcon size={28} />}>Label</Tile>
        <Tile size="default" align="left" colour="blue" icon={<AlarmIcon size={28} />}>Label</Tile>
        <Tile size="default" align="left" colour="yellow" icon={<AlarmIcon size={28} />}>Label</Tile>
        <Tile size="default" align="left" colour="light-gray" icon={<AlarmIcon size={28} />}>Label</Tile>
        <Tile size="default" align="left" colour="info-blue" icon={<AlarmIcon size={28} />}>Label</Tile>
        <Tile size="default" align="left" colour="blue-gray" icon={<AlarmIcon size={28} />}>Label</Tile>
      </div>

      {/* Default Size - Right Alignment */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500, minWidth: '120px' }}>Default - Right:</h4>
        <Tile size="default" align="right" colour="default" icon={<AlarmIcon size={28} />}>Label</Tile>
        <Tile size="default" align="right" colour="blue" icon={<AlarmIcon size={28} />}>Label</Tile>
        <Tile size="default" align="right" colour="yellow" icon={<AlarmIcon size={28} />}>Label</Tile>
        <Tile size="default" align="right" colour="light-gray" icon={<AlarmIcon size={28} />}>Label</Tile>
        <Tile size="default" align="right" colour="info-blue" icon={<AlarmIcon size={28} />}>Label</Tile>
        <Tile size="default" align="right" colour="blue-gray" icon={<AlarmIcon size={28} />}>Label</Tile>
      </div>

      {/* Interactive Examples */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500, minWidth: '120px' }}>Interactive:</h4>
        <Tile 
          size="default" 
          align="centre" 
          colour="blue" 
          icon={<AlarmIcon size={28} />}
          onClick={() => alert('Blue tile clicked!')}
        >
          Clickable
        </Tile>
        <Tile 
          size="default" 
          align="centre" 
          colour="yellow" 
          icon={<AlarmIcon size={28} />}
          disabled={true}
          onClick={() => alert('This should not fire')}
        >
          Disabled
        </Tile>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all tile variants, sizes, alignments, and colors as shown in the Figma design.',
      },
    },
  },
};
