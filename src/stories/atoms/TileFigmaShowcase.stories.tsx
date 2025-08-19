import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tile, AlarmIcon } from './Tile';

const meta: Meta<typeof Tile> = {
  title: 'Atoms/Tile',
  component: Tile,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FigmaDesignReplication: Story = {
  render: () => (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#f8f9fa',
      fontFamily: 'Archivo, -apple-system, Roboto, Helvetica, sans-serif'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '16px',
        maxWidth: '2976px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}>
        
        {/* Row 1: Default size, centre alignment */}
        <Tile size="default" align="centre" colour="default" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>
        <Tile size="default" align="centre" colour="blue" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>
        <Tile size="default" align="centre" colour="yellow" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>
        <Tile size="default" align="centre" colour="light-gray" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>
        <Tile size="default" align="centre" colour="info-blue" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>
        <Tile size="default" align="centre" colour="blue-gray" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>

        {/* Row 2: Large size, centre alignment */}
        <Tile size="large" align="centre" colour="default" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>
        <Tile size="large" align="centre" colour="blue" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>
        <Tile size="large" align="centre" colour="yellow" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>
        <Tile size="large" align="centre" colour="light-gray" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>
        <Tile size="large" align="centre" colour="info-blue" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>
        <Tile size="large" align="centre" colour="blue-gray" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>

        {/* Row 3: Small size, centre alignment */}
        <Tile size="small" align="centre" colour="default" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>
        <Tile size="small" align="centre" colour="blue" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>
        <Tile size="small" align="centre" colour="yellow" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>
        <Tile size="small" align="centre" colour="light-gray" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>
        <Tile size="small" align="centre" colour="info-blue" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>
        <Tile size="small" align="centre" colour="blue-gray" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>

        {/* Row 4: Default size, left alignment */}
        <Tile size="default" align="left" colour="default" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>
        <Tile size="default" align="left" colour="blue" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>
        <Tile size="default" align="left" colour="yellow" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>
        <Tile size="default" align="left" colour="light-gray" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>
        <Tile size="default" align="left" colour="info-blue" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>
        <Tile size="default" align="left" colour="blue-gray" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>

        {/* Row 5: Large size, left alignment */}
        <Tile size="large" align="left" colour="default" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>
        <Tile size="large" align="left" colour="blue" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>
        <Tile size="large" align="left" colour="yellow" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>
        <Tile size="large" align="left" colour="light-gray" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>
        <Tile size="large" align="left" colour="info-blue" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>
        <Tile size="large" align="left" colour="blue-gray" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>

        {/* Row 6: Small size, left alignment */}
        <Tile size="small" align="left" colour="default" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>
        <Tile size="small" align="left" colour="blue" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>
        <Tile size="small" align="left" colour="yellow" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>
        <Tile size="small" align="left" colour="light-gray" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>
        <Tile size="small" align="left" colour="info-blue" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>
        <Tile size="small" align="left" colour="blue-gray" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>

        {/* Row 7: Default size, right alignment */}
        <Tile size="default" align="right" colour="default" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>
        <Tile size="default" align="right" colour="blue" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>
        <Tile size="default" align="right" colour="yellow" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>
        <Tile size="default" align="right" colour="light-gray" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>
        <Tile size="default" align="right" colour="info-blue" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>
        <Tile size="default" align="right" colour="blue-gray" icon={<AlarmIcon size={28} />}>
          Label
        </Tile>

        {/* Row 8: Large size, right alignment */}
        <Tile size="large" align="right" colour="default" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>
        <Tile size="large" align="right" colour="blue" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>
        <Tile size="large" align="right" colour="yellow" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>
        <Tile size="large" align="right" colour="light-gray" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>
        <Tile size="large" align="right" colour="info-blue" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>
        <Tile size="large" align="right" colour="blue-gray" icon={<AlarmIcon size={32} />}>
          Label
        </Tile>

        {/* Row 9: Small size, right alignment */}
        <Tile size="small" align="right" colour="default" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>
        <Tile size="small" align="right" colour="blue" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>
        <Tile size="small" align="right" colour="yellow" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>
        <Tile size="small" align="right" colour="light-gray" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>
        <Tile size="small" align="right" colour="info-blue" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>
        <Tile size="small" align="right" colour="blue-gray" icon={<AlarmIcon size={24} />}>
          Label
        </Tile>
      </div>

      {/* Title and description */}
      <div style={{ marginTop: '32px', maxWidth: '2976px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#1f2937'
        }}>
          Tile Component Design System
        </h2>
        <p style={{ 
          fontSize: '16px', 
          color: '#6b7280', 
          lineHeight: 1.6,
          marginBottom: '24px'
        }}>
          A comprehensive tile component that supports multiple sizes (small, default, large), 
          alignments (centre, left, right), and color variants. Perfect for dashboard cards, 
          navigation tiles, and feature blocks. This implementation exactly matches the Figma design specifications.
        </p>

        <h3 style={{ 
          fontSize: '18px', 
          fontWeight: 600, 
          marginBottom: '12px',
          color: '#1f2937'
        }}>
          Features:
        </h3>
        <ul style={{ 
          fontSize: '14px', 
          color: '#6b7280', 
          lineHeight: 1.6,
          paddingLeft: '20px'
        }}>
          <li>Three size variants: small (80x80px), default (100px width), and large (100px width)</li>
          <li>Three alignment options: centre, left, and right</li>
          <li>Six color variants: default, blue, yellow, light-gray, info-blue, and blue-gray</li>
          <li>Icon and text content support with proper sizing</li>
          <li>Interactive states with hover effects and click handlers</li>
          <li>Full accessibility support with keyboard navigation</li>
          <li>Responsive design with proper breakpoints</li>
          <li>Disabled state support</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exact replication of the Figma design showing all tile variants in a 6x9 grid layout.',
      },
    },
  },
};
