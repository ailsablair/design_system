import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/ZZ Building Blocks/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge component for showing notification indicators and status dots. Supports both dot and count variants with multiple color options.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['dot', 'count'],
      description: 'Badge variant type',
    },
    color: {
      control: 'select',
      options: ['blue', 'cyan', 'orange', 'gray', 'purple', 'green', 'red', 'yellow', 'black'],
      description: 'Color variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant (for dots and counts)',
    },
    count: {
      control: { type: 'number', min: 0, max: 999 },
      description: 'Count value for count badges',
    },
    maxCount: {
      control: { type: 'number', min: 1, max: 999 },
      description: 'Maximum count before showing +',
    },
    show: {
      control: 'boolean',
      description: 'Show or hide badge',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Basic dot badges
export const DotDefault: Story = {
  args: {
    variant: 'dot',
    color: 'red',
    size: 'medium',
  },
};

export const DotSmall: Story = {
  args: {
    variant: 'dot',
    color: 'red',
    size: 'small',
  },
};

export const DotLarge: Story = {
  args: {
    variant: 'dot',
    color: 'red',
    size: 'large',
  },
};

// Color variants for dots
export const DotBlue: Story = {
  args: {
    variant: 'dot',
    color: 'blue',
    size: 'medium',
  },
};

export const DotCyan: Story = {
  args: {
    variant: 'dot',
    color: 'cyan',
    size: 'medium',
  },
};

export const DotOrange: Story = {
  args: {
    variant: 'dot',
    color: 'orange',
    size: 'medium',
  },
};

export const DotGray: Story = {
  args: {
    variant: 'dot',
    color: 'gray',
    size: 'medium',
  },
};

export const DotPurple: Story = {
  args: {
    variant: 'dot',
    color: 'purple',
    size: 'medium',
  },
};

export const DotGreen: Story = {
  args: {
    variant: 'dot',
    color: 'green',
    size: 'medium',
  },
};

export const DotYellow: Story = {
  args: {
    variant: 'dot',
    color: 'yellow',
    size: 'medium',
  },
};

export const DotBlack: Story = {
  args: {
    variant: 'dot',
    color: 'black',
    size: 'medium',
  },
};

// Count badges
export const CountDefault: Story = {
  args: {
    variant: 'count',
    color: 'red',
    size: 'medium',
    count: 5,
  },
};

export const CountSmall: Story = {
  args: {
    variant: 'count',
    color: 'red',
    size: 'small',
    count: 3,
  },
};

export const CountLarge: Story = {
  args: {
    variant: 'count',
    color: 'red',
    size: 'large',
    count: 12,
  },
};

export const CountHighNumber: Story = {
  args: {
    variant: 'count',
    color: 'red',
    size: 'medium',
    count: 150,
    maxCount: 99,
  },
};

export const CountMaxReached: Story = {
  args: {
    variant: 'count',
    color: 'blue',
    size: 'medium',
    count: 999,
    maxCount: 99,
  },
};

// Count color variants
export const CountBlue: Story = {
  args: {
    variant: 'count',
    color: 'blue',
    size: 'medium',
    count: 8,
  },
};

export const CountGreen: Story = {
  args: {
    variant: 'count',
    color: 'green',
    size: 'medium',
    count: 4,
  },
};

export const CountOrange: Story = {
  args: {
    variant: 'count',
    color: 'orange',
    size: 'medium',
    count: 2,
  },
};

export const CountPurple: Story = {
  args: {
    variant: 'count',
    color: 'purple',
    size: 'medium',
    count: 7,
  },
};

// All dot colors showcase
export const AllDotColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Badge variant="dot" color="blue" size="medium" />
        <span style={{ fontSize: '12px', color: '#666' }}>Blue</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Badge variant="dot" color="cyan" size="medium" />
        <span style={{ fontSize: '12px', color: '#666' }}>Cyan</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Badge variant="dot" color="orange" size="medium" />
        <span style={{ fontSize: '12px', color: '#666' }}>Orange</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Badge variant="dot" color="gray" size="medium" />
        <span style={{ fontSize: '12px', color: '#666' }}>Gray</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Badge variant="dot" color="purple" size="medium" />
        <span style={{ fontSize: '12px', color: '#666' }}>Purple</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Badge variant="dot" color="green" size="medium" />
        <span style={{ fontSize: '12px', color: '#666' }}>Green</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Badge variant="dot" color="red" size="medium" />
        <span style={{ fontSize: '12px', color: '#666' }}>Red</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Badge variant="dot" color="yellow" size="medium" />
        <span style={{ fontSize: '12px', color: '#666' }}>Yellow</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Badge variant="dot" color="black" size="medium" />
        <span style={{ fontSize: '12px', color: '#666' }}>Black</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available dot badge colors in medium size.',
      },
    },
  },
};

// All sizes comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Dots</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Badge variant="dot" color="blue" size="small" />
            <span style={{ fontSize: '10px', color: '#666' }}>Small</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Badge variant="dot" color="blue" size="medium" />
            <span style={{ fontSize: '10px', color: '#666' }}>Medium</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Badge variant="dot" color="blue" size="large" />
            <span style={{ fontSize: '10px', color: '#666' }}>Large</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Count</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Badge variant="count" color="red" size="small" count={3} />
            <span style={{ fontSize: '10px', color: '#666' }}>Small</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Badge variant="count" color="red" size="medium" count={12} />
            <span style={{ fontSize: '10px', color: '#666' }}>Medium</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Badge variant="count" color="red" size="large" count={99} />
            <span style={{ fontSize: '10px', color: '#666' }}>Large</span>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available sizes for both dot and count variants.',
      },
    },
  },
};

// Usage with content
export const WithContent: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'start' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          backgroundColor: '#f3f4f6', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px'
        }}>
          📧
        </div>
        <div style={{ position: 'absolute', top: '-4px', right: '-4px' }}>
          <Badge variant="count" color="red" size="small" count={5} />
        </div>
      </div>
      
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          backgroundColor: '#f3f4f6', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px'
        }}>
          🔔
        </div>
        <div style={{ position: 'absolute', top: '2px', right: '2px' }}>
          <Badge variant="dot" color="green" size="medium" />
        </div>
      </div>

      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button style={{ 
          padding: '8px 16px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '14px',
          cursor: 'pointer'
        }}>
          Messages
        </button>
        <div style={{ position: 'absolute', top: '-8px', right: '-8px' }}>
          <Badge variant="count" color="red" size="medium" count={23} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of badges used with other UI elements like icons and buttons.',
      },
    },
  },
};
