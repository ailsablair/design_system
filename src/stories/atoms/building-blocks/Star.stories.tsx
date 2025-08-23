import type { Meta, StoryObj } from '@storybook/react';
import { Star } from './Star';

const meta = {
  title: 'Atoms/Building Blocks/Star',
  component: Star,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A star rating component with various fill percentages and sizes. Perfect for displaying ratings, reviews, or favorites.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    fill: {
      control: { type: 'select' },
      options: ['empty', '5%', '15%', '25%', '40%', '50%', '60%', '75%', '85%', '95%', '100%'],
      description: 'Fill percentage of the star'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant of the star'
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler'
    }
  }
} satisfies Meta<typeof Star>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    fill: '50%',
    size: 'default'
  }
};

// Fill variants
export const Empty: Story = {
  args: {
    fill: 'empty',
    size: 'default'
  }
};

export const FivePercent: Story = {
  args: {
    fill: '5%',
    size: 'default'
  }
};

export const FifteenPercent: Story = {
  args: {
    fill: '15%',
    size: 'default'
  }
};

export const TwentyFivePercent: Story = {
  args: {
    fill: '25%',
    size: 'default'
  }
};

export const FortyPercent: Story = {
  args: {
    fill: '40%',
    size: 'default'
  }
};

export const HalfFilled: Story = {
  args: {
    fill: '50%',
    size: 'default'
  }
};

export const SixtyPercent: Story = {
  args: {
    fill: '60%',
    size: 'default'
  }
};

export const SeventyFivePercent: Story = {
  args: {
    fill: '75%',
    size: 'default'
  }
};

export const EightyFivePercent: Story = {
  args: {
    fill: '85%',
    size: 'default'
  }
};

export const NinetyFivePercent: Story = {
  args: {
    fill: '95%',
    size: 'default'
  }
};

export const FullyFilled: Story = {
  args: {
    fill: '100%',
    size: 'default'
  }
};

// Size variants
export const Small: Story = {
  args: {
    fill: '75%',
    size: 'small'
  }
};

export const Large: Story = {
  args: {
    fill: '75%',
    size: 'large'
  }
};

// Interactive example
export const Interactive: Story = {
  args: {
    fill: '75%',
    size: 'default',
    onClick: () => console.log('Star clicked!')
  }
};

// All sizes comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Small</div>
        <Star fill="75%" size="small" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Default</div>
        <Star fill="75%" size="default" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Large</div>
        <Star fill="75%" size="large" />
      </div>
    </div>
  )
};

// Rating examples
export const RatingExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <div>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>5 Stars (Full Rating)</div>
        <div style={{ display: 'flex', gap: '4px' }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill="100%" size="default" />
          ))}
        </div>
      </div>
      
      <div>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>4.5 Stars</div>
        <div style={{ display: 'flex', gap: '4px' }}>
          <Star fill="100%" size="default" />
          <Star fill="100%" size="default" />
          <Star fill="100%" size="default" />
          <Star fill="100%" size="default" />
          <Star fill="50%" size="default" />
        </div>
      </div>
      
      <div>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>3.2 Stars</div>
        <div style={{ display: 'flex', gap: '4px' }}>
          <Star fill="100%" size="default" />
          <Star fill="100%" size="default" />
          <Star fill="100%" size="default" />
          <Star fill="25%" size="default" />
          <Star fill="empty" size="default" />
        </div>
      </div>
      
      <div>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>2.7 Stars</div>
        <div style={{ display: 'flex', gap: '4px' }}>
          <Star fill="100%" size="default" />
          <Star fill="100%" size="default" />
          <Star fill="75%" size="default" />
          <Star fill="empty" size="default" />
          <Star fill="empty" size="default" />
        </div>
      </div>
      
      <div>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>1 Star</div>
        <div style={{ display: 'flex', gap: '4px' }}>
          <Star fill="100%" size="default" />
          <Star fill="empty" size="default" />
          <Star fill="empty" size="default" />
          <Star fill="empty" size="default" />
          <Star fill="empty" size="default" />
        </div>
      </div>
      
      <div>
        <div style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>No Rating</div>
        <div style={{ display: 'flex', gap: '4px' }}>
          <Star fill="empty" size="default" />
          <Star fill="empty" size="default" />
          <Star fill="empty" size="default" />
          <Star fill="empty" size="default" />
          <Star fill="empty" size="default" />
        </div>
      </div>
    </div>
  )
};

// All fill percentages
export const AllFillPercentages: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>All Fill Percentages</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', width: '100%' }}>
        {['empty', '5%', '15%', '25%', '40%', '50%', '60%', '75%', '85%', '95%', '100%'].map((fill) => (
          <div key={fill} style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px', fontSize: '12px', fontWeight: '500' }}>{fill}</div>
            <Star fill={fill as any} size="default" />
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded'
  }
};
