import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Design System/Atoms/Progressive Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Progressive slider showcase as shown in the Figma design. Demonstrates sliders with 0-10 scales and various fill percentages.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

// Helper component for creating a row of connected sliders
const SliderRow = ({ 
  size, 
  totalSteps = 10, 
  filledSteps = 0 
}: { 
  size: 'small' | 'default' | 'large';
  totalSteps?: number;
  filledSteps?: number;
}) => {
  const sliders = [];
  
  for (let i = 0; i <= totalSteps; i++) {
    const isStart = i === 0;
    const isEnd = i === totalSteps;
    const isFilled = i <= filledSteps;
    const showStart = isStart;
    const showEnd = isEnd;
    
    sliders.push(
      <Slider
        key={i}
        size={size}
        filled={isFilled}
        showStart={showStart}
        showEnd={showEnd}
        showNumber={true}
        startValue={isStart ? 0 : i}
        endValue={isEnd ? totalSteps : i}
        value={isFilled ? 1 : 0}
        min={0}
        max={1}
        step={0.1}
        disabled={false}
      />
    );
  }
  
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-end',
      gap: '0px',
      width: 'fit-content',
      marginBottom: '12px'
    }}>
      {sliders}
    </div>
  );
};

export const SmallUnfilled: Story = {
  render: () => <SliderRow size="small" totalSteps={10} filledSteps={0} />,
  parameters: {
    docs: {
      description: {
        story: 'Small size slider row (0-10) with no fill - unfilled state.',
      },
    },
  },
};

export const SmallTwentyPercent: Story = {
  render: () => <SliderRow size="small" totalSteps={10} filledSteps={2} />,
  parameters: {
    docs: {
      description: {
        story: 'Small size slider row (0-10) with 20% fill (0-2).',
      },
    },
  },
};

export const SmallFortyPercent: Story = {
  render: () => <SliderRow size="small" totalSteps={10} filledSteps={4} />,
  parameters: {
    docs: {
      description: {
        story: 'Small size slider row (0-10) with 40% fill (0-4).',
      },
    },
  },
};

export const SmallSixtyPercent: Story = {
  render: () => <SliderRow size="small" totalSteps={10} filledSteps={6} />,
  parameters: {
    docs: {
      description: {
        story: 'Small size slider row (0-10) with 60% fill (0-6).',
      },
    },
  },
};

export const SmallEightyPercent: Story = {
  render: () => <SliderRow size="small" totalSteps={10} filledSteps={8} />,
  parameters: {
    docs: {
      description: {
        story: 'Small size slider row (0-10) with 80% fill (0-8).',
      },
    },
  },
};

export const SmallFullyFilled: Story = {
  render: () => <SliderRow size="small" totalSteps={10} filledSteps={10} />,
  parameters: {
    docs: {
      description: {
        story: 'Small size slider row (0-10) with 100% fill (0-10).',
      },
    },
  },
};

export const DefaultUnfilled: Story = {
  render: () => <SliderRow size="default" totalSteps={10} filledSteps={0} />,
  parameters: {
    docs: {
      description: {
        story: 'Default size slider row (0-10) with no fill - unfilled state.',
      },
    },
  },
};

export const DefaultTwentyPercent: Story = {
  render: () => <SliderRow size="default" totalSteps={10} filledSteps={2} />,
  parameters: {
    docs: {
      description: {
        story: 'Default size slider row (0-10) with 20% fill (0-2).',
      },
    },
  },
};

export const DefaultFortyPercent: Story = {
  render: () => <SliderRow size="default" totalSteps={10} filledSteps={4} />,
  parameters: {
    docs: {
      description: {
        story: 'Default size slider row (0-10) with 40% fill (0-4).',
      },
    },
  },
};

export const DefaultSixtyPercent: Story = {
  render: () => <SliderRow size="default" totalSteps={10} filledSteps={6} />,
  parameters: {
    docs: {
      description: {
        story: 'Default size slider row (0-10) with 60% fill (0-6).',
      },
    },
  },
};

export const DefaultEightyPercent: Story = {
  render: () => <SliderRow size="default" totalSteps={10} filledSteps={8} />,
  parameters: {
    docs: {
      description: {
        story: 'Default size slider row (0-10) with 80% fill (0-8).',
      },
    },
  },
};

export const DefaultFullyFilled: Story = {
  render: () => <SliderRow size="default" totalSteps={10} filledSteps={10} />,
  parameters: {
    docs: {
      description: {
        story: 'Default size slider row (0-10) with 100% fill (0-10).',
      },
    },
  },
};

export const LargeUnfilled: Story = {
  render: () => <SliderRow size="large" totalSteps={10} filledSteps={0} />,
  parameters: {
    docs: {
      description: {
        story: 'Large size slider row (0-10) with no fill - unfilled state.',
      },
    },
  },
};

export const LargeTwentyPercent: Story = {
  render: () => <SliderRow size="large" totalSteps={10} filledSteps={2} />,
  parameters: {
    docs: {
      description: {
        story: 'Large size slider row (0-10) with 20% fill (0-2).',
      },
    },
  },
};

export const LargeFortyPercent: Story = {
  render: () => <SliderRow size="large" totalSteps={10} filledSteps={4} />,
  parameters: {
    docs: {
      description: {
        story: 'Large size slider row (0-10) with 40% fill (0-4).',
      },
    },
  },
};

export const LargeSixtyPercent: Story = {
  render: () => <SliderRow size="large" totalSteps={10} filledSteps={6} />,
  parameters: {
    docs: {
      description: {
        story: 'Large size slider row (0-10) with 60% fill (0-6).',
      },
    },
  },
};

export const LargeEightyPercent: Story = {
  render: () => <SliderRow size="large" totalSteps={10} filledSteps={8} />,
  parameters: {
    docs: {
      description: {
        story: 'Large size slider row (0-10) with 80% fill (0-8).',
      },
    },
  },
};

export const LargeFullyFilled: Story = {
  render: () => <SliderRow size="large" totalSteps={10} filledSteps={10} />,
  parameters: {
    docs: {
      description: {
        story: 'Large size slider row (0-10) with 100% fill (0-10).',
      },
    },
  },
};

export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px',
      padding: '40px',
      border: '2px dashed #8B5CF6',
      borderRadius: '8px',
      backgroundColor: '#F8FAFC',
      width: 'fit-content'
    }}>
      <div style={{
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '16px',
        color: '#1E293B'
      }}>
        Figma Design - Progressive Sliders
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>Small Size</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <SliderRow size="small" totalSteps={10} filledSteps={0} />
          <SliderRow size="small" totalSteps={10} filledSteps={2} />
          <SliderRow size="small" totalSteps={10} filledSteps={4} />
          <SliderRow size="small" totalSteps={10} filledSteps={6} />
          <SliderRow size="small" totalSteps={10} filledSteps={8} />
          <SliderRow size="small" totalSteps={10} filledSteps={10} />
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>Default Size</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <SliderRow size="default" totalSteps={10} filledSteps={0} />
          <SliderRow size="default" totalSteps={10} filledSteps={2} />
          <SliderRow size="default" totalSteps={10} filledSteps={4} />
          <SliderRow size="default" totalSteps={10} filledSteps={6} />
          <SliderRow size="default" totalSteps={10} filledSteps={8} />
          <SliderRow size="default" totalSteps={10} filledSteps={10} />
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>Large Size</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <SliderRow size="large" totalSteps={10} filledSteps={0} />
          <SliderRow size="large" totalSteps={10} filledSteps={2} />
          <SliderRow size="large" totalSteps={10} filledSteps={4} />
          <SliderRow size="large" totalSteps={10} filledSteps={6} />
          <SliderRow size="large" totalSteps={10} filledSteps={8} />
          <SliderRow size="large" totalSteps={10} filledSteps={10} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase matching the Figma design with all slider sizes and progressive fill states from 0% to 100%.',
      },
    },
  },
};
