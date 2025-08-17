import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../Slider';

const meta: Meta<typeof Slider> = {
  title: 'Atoms/Building Blocks/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Slider building block - a fundamental UI element with sky-blue dots and connecting track that can be filled or unfilled. Used as a building block for progressive sliders and other components.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant',
    },
    filled: {
      control: 'boolean',
      description: 'Whether the track is filled (shows progress)',
    },
    showStart: {
      control: 'boolean',
      description: 'Show start number and dot',
    },
    showEnd: {
      control: 'boolean',
      description: 'Show end number and dot',
    },
    showNumber: {
      control: 'boolean',
      description: 'Show numbers on dots',
    },
    startValue: {
      control: { type: 'number' },
      description: 'Start value',
    },
    endValue: {
      control: { type: 'number' },
      description: 'End value',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

// Basic building blocks
export const UnfilledDefault: Story = {
  args: {
    size: 'default',
    filled: false,
    showStart: true,
    showEnd: true,
    showNumber: true,
    startValue: 0,
    endValue: 1,
    value: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default unfilled slider building block with grey track between sky-blue dots.',
      },
    },
  },
};

export const FilledDefault: Story = {
  args: {
    size: 'default',
    filled: true,
    showStart: true,
    showEnd: true,
    showNumber: true,
    startValue: 0,
    endValue: 1,
    value: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default filled slider building block with dark-blue track between sky-blue dots.',
      },
    },
  },
};

// Size variants - unfilled
export const SmallUnfilled: Story = {
  args: {
    size: 'small',
    filled: false,
    showStart: true,
    showEnd: true,
    showNumber: true,
    startValue: 0,
    endValue: 1,
  },
};

export const LargeUnfilled: Story = {
  args: {
    size: 'large',
    filled: false,
    showStart: true,
    showEnd: true,
    showNumber: true,
    startValue: 0,
    endValue: 1,
  },
};

// Size variants - filled
export const SmallFilled: Story = {
  args: {
    size: 'small',
    filled: true,
    showStart: true,
    showEnd: true,
    showNumber: true,
    startValue: 0,
    endValue: 1,
    value: 1,
  },
};

export const LargeFilled: Story = {
  args: {
    size: 'large',
    filled: true,
    showStart: true,
    showEnd: true,
    showNumber: true,
    startValue: 0,
    endValue: 1,
    value: 1,
  },
};

// Track only (no numbers)
export const TrackOnlyUnfilled: Story = {
  args: {
    size: 'default',
    filled: false,
    showStart: false,
    showEnd: false,
    showNumber: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Track-only building block without numbers or dots - just the grey connecting line.',
      },
    },
  },
};

export const TrackOnlyFilled: Story = {
  args: {
    size: 'default',
    filled: true,
    showStart: false,
    showEnd: false,
    showNumber: false,
    value: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Track-only building block without numbers or dots - just the dark-blue connecting line.',
      },
    },
  },
};

// Start dot only
export const StartDotOnly: Story = {
  args: {
    size: 'default',
    filled: false,
    showStart: true,
    showEnd: false,
    showNumber: true,
    startValue: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Start dot building block - single sky-blue dot with number for beginning of sequences.',
      },
    },
  },
};

// End dot only
export const EndDotOnly: Story = {
  args: {
    size: 'default',
    filled: false,
    showStart: false,
    showEnd: true,
    showNumber: true,
    endValue: 10,
  },
  parameters: {
    docs: {
      description: {
        story: 'End dot building block - single sky-blue dot with number for end of sequences.',
      },
    },
  },
};

// Disabled states
export const DisabledUnfilled: Story = {
  args: {
    size: 'default',
    filled: false,
    disabled: true,
    showStart: true,
    showEnd: true,
    showNumber: true,
    startValue: 0,
    endValue: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled unfilled slider building block with reduced opacity.',
      },
    },
  },
};

export const DisabledFilled: Story = {
  args: {
    size: 'default',
    filled: true,
    disabled: true,
    showStart: true,
    showEnd: true,
    showNumber: true,
    startValue: 0,
    endValue: 1,
    value: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled filled slider building block with reduced opacity.',
      },
    },
  },
};

// Building blocks showcase
export const AllBuildingBlocks: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px',
      padding: '20px',
      fontFamily: 'var(--type-typeface-archivo)',
      maxWidth: '600px'
    }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
        Slider Building Blocks - All States
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#666' }}>Unfilled (Grey Track)</h4>
          <Slider size="default" filled={false} showStart={true} showEnd={true} showNumber={true} startValue={0} endValue={1} />
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#666' }}>Filled (Dark-Blue Track)</h4>
          <Slider size="default" filled={true} showStart={true} showEnd={true} showNumber={true} startValue={0} endValue={1} value={1} />
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#666' }}>Track Only - Unfilled</h4>
          <Slider size="default" filled={false} showStart={false} showEnd={false} showNumber={false} />
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#666' }}>Track Only - Filled</h4>
          <Slider size="default" filled={true} showStart={false} showEnd={false} showNumber={false} value={1} />
        </div>
        
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#666' }}>Start Dot Only</h4>
            <Slider size="default" filled={false} showStart={true} showEnd={false} showNumber={true} startValue={0} />
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500', color: '#666' }}>End Dot Only</h4>
            <Slider size="default" filled={false} showStart={false} showEnd={true} showNumber={true} endValue={10} />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all slider building block configurations used to construct progressive sliders and other components.',
      },
    },
  },
};
