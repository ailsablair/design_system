import type { Meta, StoryObj } from '@storybook/react';
import { StepperGroup } from './StepperGroup';
import './stepperGroup.css';

const meta: Meta<typeof StepperGroup> = {
  title: 'Atoms/ZZ Building Blocks/Stepper Group',
  component: StepperGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'The StepperGroup component displays complete multi-step workflows with connecting lines. It supports various step counts (4-8 steps), different sizes, and multiple states to guide users through sequential processes.',
      },
    },
  },
  argTypes: {
    steps: {
      control: false,
      description: 'Array of steps to display',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'large'],
      description: 'Size variant for all steps',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'in progress', 'complete'],
      description: 'Overall state of the stepper',
    },
    currentStep: {
      control: { type: 'number', min: 0, max: 7 },
      description: 'Current active step index (0-based)',
    },
    showLabels: {
      control: { type: 'boolean' },
      description: 'Show step labels',
    },
    onStepClick: {
      action: 'step-clicked',
      description: 'Click handler for step interactions',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StepperGroup>;

// Default steps data
const defaultSteps = [
  { stepNumber: '01', label: 'Step One' },
  { stepNumber: '02', label: 'Step Two' },
  { stepNumber: '03', label: 'Step Three' },
  { stepNumber: '04', label: 'Step Four' },
];

const fiveSteps = [
  { stepNumber: '01', label: 'Step One' },
  { stepNumber: '02', label: 'Step Two' },
  { stepNumber: '03', label: 'Step Three' },
  { stepNumber: '04', label: 'Step Four' },
  { stepNumber: '05', label: 'Step Five' },
];

const sixSteps = [
  { stepNumber: '01', label: 'Step One' },
  { stepNumber: '02', label: 'Step Two' },
  { stepNumber: '03', label: 'Step Three' },
  { stepNumber: '04', label: 'Step Four' },
  { stepNumber: '05', label: 'Step Five' },
  { stepNumber: '06', label: 'Step Six' },
];

const sevenSteps = [
  { stepNumber: '01', label: 'Step One' },
  { stepNumber: '02', label: 'Step Two' },
  { stepNumber: '03', label: 'Step Three' },
  { stepNumber: '04', label: 'Step Four' },
  { stepNumber: '05', label: 'Step Five' },
  { stepNumber: '06', label: 'Step Six' },
  { stepNumber: '07', label: 'Step Seven' },
];

const eightSteps = [
  { stepNumber: '01', label: 'Step One' },
  { stepNumber: '02', label: 'Step Two' },
  { stepNumber: '03', label: 'Step Three' },
  { stepNumber: '04', label: 'Step Four' },
  { stepNumber: '05', label: 'Step Five' },
  { stepNumber: '06', label: 'Step Six' },
  { stepNumber: '07', label: 'Step Seven' },
  { stepNumber: '08', label: 'Step Eight' },
];

// FIGMA SHOWCASE STORIES - Default Size
export const FigmaDefaultFourSteps: Story = {
  args: {
    steps: defaultSteps,
    size: 'default',
    state: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default size stepper with four steps - matches Figma design exactly.',
      },
    },
  },
};

export const FigmaDefaultEightSteps: Story = {
  args: {
    steps: eightSteps,
    size: 'default',
    state: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default size stepper with eight steps - matches Figma design exactly.',
      },
    },
  },
};

export const FigmaDefaultSevenSteps: Story = {
  args: {
    steps: sevenSteps,
    size: 'default',
    state: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default size stepper with seven steps - matches Figma design exactly.',
      },
    },
  },
};

export const FigmaDefaultSixSteps: Story = {
  args: {
    steps: sixSteps,
    size: 'default',
    state: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default size stepper with six steps - matches Figma design exactly.',
      },
    },
  },
};

export const FigmaDefaultFiveSteps: Story = {
  args: {
    steps: fiveSteps,
    size: 'default',
    state: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default size stepper with five steps - matches Figma design exactly.',
      },
    },
  },
};

// FIGMA SHOWCASE STORIES - Large Size
export const FigmaLargeEightSteps: Story = {
  args: {
    steps: eightSteps,
    size: 'large',
    state: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size stepper with eight steps (1440px only) - matches Figma design exactly.',
      },
    },
  },
};

export const FigmaLargeSevenSteps: Story = {
  args: {
    steps: sevenSteps,
    size: 'large',
    state: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size stepper with seven steps - matches Figma design exactly.',
      },
    },
  },
};

export const FigmaLargeSixSteps: Story = {
  args: {
    steps: sixSteps,
    size: 'large',
    state: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size stepper with six steps - matches Figma design exactly.',
      },
    },
  },
};

export const FigmaLargeFiveSteps: Story = {
  args: {
    steps: fiveSteps,
    size: 'large',
    state: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size stepper with five steps - matches Figma design exactly.',
      },
    },
  },
};

export const FigmaLargeDefaultFourSteps: Story = {
  args: {
    steps: defaultSteps,
    size: 'large',
    state: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size stepper with four steps - matches Figma design exactly.',
      },
    },
  },
};

// STATE VARIATIONS
export const FigmaInProgressState: Story = {
  args: {
    steps: defaultSteps,
    size: 'default',
    state: 'in progress',
    currentStep: 1, // Step 2 is active
  },
  parameters: {
    docs: {
      description: {
        story: 'In progress state with first step completed, second step active - matches Figma design exactly.',
      },
    },
  },
};

export const FigmaCompleteState: Story = {
  args: {
    steps: defaultSteps,
    size: 'default',
    state: 'complete',
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete state with all steps completed - matches Figma design exactly.',
      },
    },
  },
};

export const FigmaLargeInProgressState: Story = {
  args: {
    steps: defaultSteps,
    size: 'large',
    state: 'in progress',
    currentStep: 1, // Step 2 is active
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size in progress state - matches Figma design exactly.',
      },
    },
  },
};

export const FigmaLargeCompleteState: Story = {
  args: {
    steps: defaultSteps,
    size: 'large',
    state: 'complete',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size complete state - matches Figma design exactly.',
      },
    },
  },
};

// COMPREHENSIVE SHOWCASE
export const AllStepCounts: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '48px', 
      padding: '24px',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa'
    }}>
      <div>
        <h3 style={{ 
          marginBottom: '24px', 
          fontFamily: 'Archivo', 
          fontSize: '20px', 
          fontWeight: '600',
          color: '#1C1C1C'
        }}>Default Size - All Step Counts</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Four Steps</h4>
            <StepperGroup steps={defaultSteps} size="default" />
          </div>
          <div>
            <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Five Steps</h4>
            <StepperGroup steps={fiveSteps} size="default" />
          </div>
          <div>
            <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Six Steps</h4>
            <StepperGroup steps={sixSteps} size="default" />
          </div>
          <div>
            <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Seven Steps</h4>
            <StepperGroup steps={sevenSteps} size="default" />
          </div>
          <div>
            <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Eight Steps</h4>
            <StepperGroup steps={eightSteps} size="default" />
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ 
          marginBottom: '24px', 
          fontFamily: 'Archivo', 
          fontSize: '20px', 
          fontWeight: '600',
          color: '#1C1C1C'
        }}>Large Size - All Step Counts</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Four Steps</h4>
            <StepperGroup steps={defaultSteps} size="large" />
          </div>
          <div>
            <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Five Steps</h4>
            <StepperGroup steps={fiveSteps} size="large" />
          </div>
          <div>
            <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Six Steps</h4>
            <StepperGroup steps={sixSteps} size="large" />
          </div>
          <div>
            <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Seven Steps</h4>
            <StepperGroup steps={sevenSteps} size="large" />
          </div>
          <div>
            <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Eight Steps</h4>
            <StepperGroup steps={eightSteps} size="large" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all step counts in both sizes, exactly matching the Figma design variations.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '48px', 
      padding: '24px',
      backgroundColor: '#f8f9fa'
    }}>
      <div>
        <h3 style={{ 
          marginBottom: '24px', 
          fontFamily: 'Archivo', 
          fontSize: '20px', 
          fontWeight: '600',
          color: '#1C1C1C'
        }}>Default Size - All States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Default State</h4>
            <StepperGroup steps={defaultSteps} size="default" state="default" />
          </div>
          <div>
            <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>In Progress State</h4>
            <StepperGroup steps={defaultSteps} size="default" state="in progress" currentStep={1} />
          </div>
          <div>
            <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Complete State</h4>
            <StepperGroup steps={defaultSteps} size="default" state="complete" />
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ 
          marginBottom: '24px', 
          fontFamily: 'Archivo', 
          fontSize: '20px', 
          fontWeight: '600',
          color: '#1C1C1C'
        }}>Large Size - All States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Default State</h4>
            <StepperGroup steps={defaultSteps} size="large" state="default" />
          </div>
          <div>
            <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>In Progress State</h4>
            <StepperGroup steps={defaultSteps} size="large" state="in progress" currentStep={1} />
          </div>
          <div>
            <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Complete State</h4>
            <StepperGroup steps={defaultSteps} size="large" state="complete" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All stepper states in both sizes, showing default, in progress, and complete states exactly as shown in Figma.',
      },
    },
  },
};

// INTERACTIVE EXAMPLES
export const Interactive: Story = {
  args: {
    steps: defaultSteps,
    size: 'default',
    state: 'in progress',
    currentStep: 2,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive stepper that responds to step clicks. Try clicking on different steps to see state changes.',
      },
    },
  },
};

export const ResponsiveShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px', 
      padding: '24px'
    }}>
      <div>
        <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Desktop (Default)</h4>
        <div style={{ width: '100%', minWidth: '1200px' }}>
          <StepperGroup steps={eightSteps} size="default" currentStep={3} />
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Tablet</h4>
        <div style={{ width: '768px', margin: '0 auto' }}>
          <StepperGroup steps={sixSteps} size="default" currentStep={2} />
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Mobile</h4>
        <div style={{ width: '480px', margin: '0 auto' }}>
          <StepperGroup steps={defaultSteps} size="default" currentStep={1} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive behavior demonstration across different screen sizes.',
      },
    },
  },
};

// EDGE CASES
export const WithoutLabels: Story = {
  args: {
    steps: defaultSteps,
    size: 'default',
    showLabels: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Stepper without text labels, showing only the step indicators.',
      },
    },
  },
};

export const CustomStepStates: Story = {
  args: {
    steps: [
      { stepNumber: '01', label: 'Completed', state: 'completed' },
      { stepNumber: '02', label: 'Active', state: 'active' },
      { stepNumber: '03', label: 'Pending', state: 'default' },
      { stepNumber: '04', label: 'Pending', state: 'default' },
    ],
    size: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom step states override the overall stepper state for individual steps.',
      },
    },
  },
};
