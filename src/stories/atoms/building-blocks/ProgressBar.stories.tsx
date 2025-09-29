import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ProgressBar } from './ProgressBar';

const meta = {
  title: 'Atoms/Building Blocks/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The ProgressBar component displays progress using a series of milestone circles with an optional percentage indicator. 
It's built using the ProgressCircle building block to create consistent, accessible progress visualization.

**Key Features:**
- **Milestone Visualization**: Uses multiple circles to show step-by-step progress
- **Percentage Display**: Optional percentage text with size-appropriate typography
- **Flexible Configuration**: Customizable number of steps and progress values
- **Responsive Design**: Adapts gracefully to different screen sizes
- **Accessibility**: Full ARIA progressbar support with descriptive labels

**Use Cases:**
- Multi-step form progress
- Loading states with milestones
- Task completion tracking
- Process workflow indicators
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress percentage (0-100)',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant affecting circles and text',
    },
    totalSteps: {
      control: { type: 'range', min: 3, max: 20, step: 1 },
      description: 'Number of milestone circles to display',
    },
    showPercentage: {
      control: 'boolean',
      description: 'Whether to display percentage text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state for the entire component',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// === BASIC STORIES ===

export const Default: Story = {
  args: {
    progress: 0,
    size: 'default',
    totalSteps: 10,
    showPercentage: true,
    disabled: false,
  },
};

export const InProgress: Story = {
  args: {
    progress: 40,
    size: 'default',
    totalSteps: 10,
    showPercentage: true,
    disabled: false,
  },
};

export const Complete: Story = {
  args: {
    progress: 100,
    size: 'default',
    totalSteps: 10,
    showPercentage: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    progress: 30,
    size: 'default',
    totalSteps: 10,
    showPercentage: true,
    disabled: true,
  },
};

// === SIZE VARIANTS ===

export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '400px' }}>
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>Small Size</h4>
        <ProgressBar size="small" progress={60} totalSteps={10} />
      </div>
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>Default Size</h4>
        <ProgressBar size="default" progress={60} totalSteps={10} />
      </div>
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '14px', fontWeight: 600 }}>Large Size</h4>
        <ProgressBar size="large" progress={60} totalSteps={10} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all size variants showing the differences in circle size and typography.',
      },
    },
  },
};

// === PROGRESS STATES ===

export const ProgressStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((progress) => (
        <div key={progress}>
          <h5 style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>
            {progress}% Progress
          </h5>
          <ProgressBar progress={progress} totalSteps={10} size="large" />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of all progress percentage states matching the Figma design specifications.',
      },
    },
  },
};

// === INTERACTIVE DEMO ===

export const InteractiveDemo: Story = {
  render: () => {
    const [progress, setProgress] = useState(30);
    const [totalSteps, setTotalSteps] = useState(10);
    const [size, setSize] = useState<'small' | 'default' | 'large'>('default');
    const [showPercentage, setShowPercentage] = useState(true);
    const [disabled, setDisabled] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '500px' }}>
        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>
            Interactive Progress Bar
          </h4>
          <ProgressBar 
            progress={progress}
            totalSteps={totalSteps}
            size={size}
            showPercentage={showPercentage}
            disabled={disabled}
          />
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '16px',
          padding: '16px',
          backgroundColor: '#F9FAFB',
          borderRadius: '8px'
        }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>
              Progress: {progress}%
            </label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>
              Total Steps: {totalSteps}
            </label>
            <input 
              type="range" 
              min="3" 
              max="15" 
              value={totalSteps}
              onChange={(e) => setTotalSteps(Number(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>
              Size
            </label>
            <select 
              value={size} 
              onChange={(e) => setSize(e.target.value as 'small' | 'default' | 'large')}
              style={{ width: '100%', padding: '4px' }}
            >
              <option value="small">Small</option>
              <option value="default">Default</option>
              <option value="large">Large</option>
            </select>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
              <input 
                type="checkbox" 
                checked={showPercentage}
                onChange={(e) => setShowPercentage(e.target.checked)}
              />
              Show Percentage
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
              <input 
                type="checkbox" 
                checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}
              />
              Disabled
            </label>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demonstration allowing you to test different configurations and see how the component responds.',
      },
    },
  },
};

// === FIGMA DESIGN SHOWCASE ===

export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600 }}>
          Figma Design Implementation
        </h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666', lineHeight: 1.5 }}>
          Faithful recreation of the Figma design with all specified states and sizes.
        </p>
      </div>

      {/* Large Size States */}
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Large Size (16px circles)</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <ProgressBar size="large" progress={0} totalSteps={10} />
          <ProgressBar size="large" progress={10} totalSteps={10} />
          <ProgressBar size="large" progress={20} totalSteps={10} />
          <ProgressBar size="large" progress={30} totalSteps={10} />
          <ProgressBar size="large" progress={40} totalSteps={10} />
          <ProgressBar size="large" progress={50} totalSteps={10} />
          <ProgressBar size="large" progress={60} totalSteps={10} />
          <ProgressBar size="large" progress={70} totalSteps={10} />
          <ProgressBar size="large" progress={80} totalSteps={10} />
          <ProgressBar size="large" progress={90} totalSteps={10} />
          <ProgressBar size="large" progress={100} totalSteps={10} />
          <ProgressBar size="large" progress={0} totalSteps={10} disabled />
        </div>
      </div>

      {/* Default Size States */}
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Default Size (12px circles)</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <ProgressBar size="default" progress={0} totalSteps={10} />
          <ProgressBar size="default" progress={10} totalSteps={10} />
          <ProgressBar size="default" progress={20} totalSteps={10} />
          <ProgressBar size="default" progress={30} totalSteps={10} />
          <ProgressBar size="default" progress={40} totalSteps={10} />
          <ProgressBar size="default" progress={50} totalSteps={10} />
          <ProgressBar size="default" progress={60} totalSteps={10} />
          <ProgressBar size="default" progress={70} totalSteps={10} />
          <ProgressBar size="default" progress={80} totalSteps={10} />
          <ProgressBar size="default" progress={90} totalSteps={10} />
          <ProgressBar size="default" progress={100} totalSteps={10} />
          <ProgressBar size="default" progress={0} totalSteps={10} disabled />
        </div>
      </div>

      {/* Small Size States */}
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>Small Size (8px circles)</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <ProgressBar size="small" progress={0} totalSteps={10} />
          <ProgressBar size="small" progress={10} totalSteps={10} />
          <ProgressBar size="small" progress={20} totalSteps={10} />
          <ProgressBar size="small" progress={30} totalSteps={10} />
          <ProgressBar size="small" progress={40} totalSteps={10} />
          <ProgressBar size="small" progress={50} totalSteps={10} />
          <ProgressBar size="small" progress={60} totalSteps={10} />
          <ProgressBar size="small" progress={70} totalSteps={10} />
          <ProgressBar size="small" progress={80} totalSteps={10} />
          <ProgressBar size="small" progress={90} totalSteps={10} />
          <ProgressBar size="small" progress={100} totalSteps={10} />
          <ProgressBar size="small" progress={0} totalSteps={10} disabled />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase matching the Figma design specifications with all size variants and progress states.',
      },
    },
  },
};

// === USE CASES ===

export const UseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '500px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Multi-Step Form</h4>
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>
          Step 2 of 5: Personal Information
        </p>
        <ProgressBar progress={40} totalSteps={5} size="large" />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Loading Process</h4>
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>
          Uploading files... 7 of 12 complete
        </p>
        <ProgressBar progress={58} totalSteps={12} size="default" />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Task Completion</h4>
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>
          Daily goals progress
        </p>
        <ProgressBar progress={75} totalSteps={8} size="small" />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Workflow Status</h4>
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>
          Document approval process - currently paused
        </p>
        <ProgressBar progress={40} totalSteps={6} size="default" disabled />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world use case examples showing how the ProgressBar component can be applied in different contexts.',
      },
    },
  },
};

// === ACCESSIBILITY ===

export const AccessibilityDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 600 }}>
          Accessibility Features
        </h4>
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#666' }}>
          The ProgressBar includes comprehensive accessibility support with proper ARIA attributes.
        </p>
      </div>
      
      <ProgressBar 
        progress={65} 
        totalSteps={10} 
        size="large"
        aria-label="Document processing progress: 65% complete, step 7 of 10"
      />
      
      <div style={{ 
        padding: '16px', 
        backgroundColor: '#F3F4F6', 
        borderRadius: '8px',
        fontSize: '12px',
        color: '#374151'
      }}>
        <strong>ARIA Implementation:</strong>
        <ul style={{ margin: '8px 0 0 0', paddingLeft: '16px' }}>
          <li><code>role="progressbar"</code> for the main container</li>
          <li><code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code> for progress values</li>
          <li>Individual circle labels describing step completion status</li>
          <li>Keyboard focus support with visible focus indicators</li>
          <li>Screen reader friendly progress announcements</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of accessibility features including ARIA attributes, keyboard navigation, and screen reader support.',
      },
    },
  },
};
