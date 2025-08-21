import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Atoms/Progress Bar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ProgressBar component for displaying progress with percentage indicators, matching the Figma design specifications.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100)',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size of the progress bar',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error'],
      description: 'Visual variant',
    },
    showPercentage: {
      control: { type: 'boolean' },
      description: 'Whether to show the percentage text',
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['inside', 'outside', 'none'],
      description: 'Position of the label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 30,
  },
};

export const ThirtyPercent: Story = {
  args: {
    value: 30,
  },
  parameters: {
    docs: {
      description: {
        story: 'Matches the Figma design showing 30% progress.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    value: 30,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    value: 30,
    size: 'large',
  },
};

export const SuccessVariant: Story = {
  args: {
    value: 85,
    variant: 'success',
  },
};

export const WarningVariant: Story = {
  args: {
    value: 60,
    variant: 'warning',
  },
};

export const ErrorVariant: Story = {
  args: {
    value: 15,
    variant: 'error',
  },
};

export const WithoutPercentage: Story = {
  args: {
    value: 45,
    showPercentage: false,
  },
};

export const WithCustomLabel: Story = {
  args: {
    value: 75,
    label: '3 of 4 completed',
    showPercentage: false,
  },
};

export const InsideLabel: Story = {
  args: {
    value: 65,
    labelPosition: 'inside',
  },
};

export const NoLabel: Story = {
  args: {
    value: 40,
    labelPosition: 'none',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Small</h4>
        <ProgressBar value={30} size="small" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <ProgressBar value={30} size="default" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <ProgressBar value={30} size="large" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available sizes.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <ProgressBar value={30} variant="default" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Success</h4>
        <ProgressBar value={85} variant="success" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Warning</h4>
        <ProgressBar value={60} variant="warning" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Error</h4>
        <ProgressBar value={15} variant="error" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of different color variants.',
      },
    },
  },
};

export const ProgressStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <ProgressBar value={0} label="Not started" showPercentage={false} />
      <ProgressBar value={25} />
      <ProgressBar value={50} />
      <ProgressBar value={75} />
      <ProgressBar value={100} variant="success" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different progress states from 0% to 100%.',
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
        Figma Design - Progress Bar Variants
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '320px' }}>
        <div>
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#64748B',
            marginBottom: '12px'
          }}>
            30% Progress (Figma Design Match)
          </div>
          <ProgressBar value={30} />
        </div>
        
        <div>
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#64748B',
            marginBottom: '12px'
          }}>
            Different Progress Values
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ProgressBar value={15} />
            <ProgressBar value={45} />
            <ProgressBar value={70} />
            <ProgressBar value={90} variant="success" />
          </div>
        </div>
        
        <div>
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#64748B',
            marginBottom: '12px'
          }}>
            Size Variants
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ProgressBar value={30} size="small" />
            <ProgressBar value={30} size="default" />
            <ProgressBar value={30} size="large" />
          </div>
        </div>
        
        <div>
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#64748B',
            marginBottom: '12px'
          }}>
            Color Variants
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ProgressBar value={30} variant="default" />
            <ProgressBar value={30} variant="success" />
            <ProgressBar value={30} variant="warning" />
            <ProgressBar value={30} variant="error" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase matching the Figma design specifications with 30% progress and various configurations.',
      },
    },
  },
};
