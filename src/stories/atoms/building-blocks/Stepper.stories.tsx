import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';
import './stepper.css';

const meta: Meta<typeof Stepper> = {
  title: 'Atoms/Building Blocks/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The Stepper component displays step indicators for multi-step processes. It supports numbered steps, completion indicators, and various visual states to guide users through sequential workflows.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['number', 'icon'],
      description: 'Type of step indicator - number shows step numbers, icon shows checkmarks for completed steps',
    },
    state: {
      control: 'select',
      options: ['default', 'active', 'completed'],
      description: 'Visual state of the step',
    },
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Size variant of the stepper',
    },
    stepNumber: {
      control: 'text',
      description: 'Step number or identifier',
    },
    label: {
      control: 'text',
      description: 'Label text displayed below the step indicator',
    },
    current: {
      control: 'boolean',
      description: 'Whether this is the current step (affects styling)',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for interactive steppers',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

// Default story
export const Default: Story = {
  args: {
    type: 'number',
    state: 'default',
    size: 'default',
    stepNumber: '01',
    label: 'Step Name',
    current: false,
  },
};

// Active state
export const Active: Story = {
  args: {
    type: 'number',
    state: 'active',
    size: 'default',
    stepNumber: '01',
    label: 'Current Step',
    current: true,
  },
};

// Completed state
export const Completed: Story = {
  args: {
    type: 'number',
    state: 'completed',
    size: 'default',
    stepNumber: '01',
    label: 'Complete',
    current: false,
  },
};

// Large size
export const Large: Story = {
  args: {
    type: 'number',
    state: 'default',
    size: 'large',
    stepNumber: '01',
    label: 'Large Step',
    current: false,
  },
};

// Large active
export const LargeActive: Story = {
  args: {
    type: 'number',
    state: 'active',
    size: 'large',
    stepNumber: '02',
    label: 'Current Step',
    current: true,
  },
};

// Large completed
export const LargeCompleted: Story = {
  args: {
    type: 'number',
    state: 'completed',
    size: 'large',
    stepNumber: '01',
    label: 'Complete',
    current: false,
  },
};

// Interactive stepper
export const Interactive: Story = {
  args: {
    type: 'number',
    state: 'default',
    size: 'default',
    stepNumber: '01',
    label: 'Click Me',
    current: false,
    onClick: () => alert('Step clicked!'),
  },
};

// All step numbers showcase
export const AllStepNumbers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Stepper stepNumber="01" label="Step 1" state="completed" />
      <Stepper stepNumber="02" label="Step 2" state="completed" />
      <Stepper stepNumber="03" label="Step 3" state="active" current={true} />
      <Stepper stepNumber="04" label="Step 4" state="default" />
      <Stepper stepNumber="05" label="Step 5" state="default" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing a typical multi-step process with different states.',
      },
    },
  },
};

// All large step numbers
export const AllStepNumbersLarge: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Stepper size="large" stepNumber="01" label="Step 1" state="completed" />
      <Stepper size="large" stepNumber="02" label="Step 2" state="completed" />
      <Stepper size="large" stepNumber="03" label="Step 3" state="active" current={true} />
      <Stepper size="large" stepNumber="04" label="Step 4" state="default" />
      <Stepper size="large" stepNumber="05" label="Step 5" state="default" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Large size variant showing a multi-step process.',
      },
    },
  },
};

// Size comparison
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '48px', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Default Size</h4>
        <Stepper stepNumber="01" label="Default" state="active" current={true} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Large Size</h4>
        <Stepper size="large" stepNumber="01" label="Large" state="active" current={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of default and large size variants.',
      },
    },
  },
};

// State variations
export const StateVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Default</h4>
        <Stepper stepNumber="01" label="Pending" state="default" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Active</h4>
        <Stepper stepNumber="02" label="Current" state="active" current={true} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '14px', fontWeight: '500' }}>Completed</h4>
        <Stepper stepNumber="03" label="Complete" state="completed" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states available for the stepper component.',
      },
    },
  },
};

// Complete workflow example
export const CompleteWorkflow: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '24px',
      padding: '40px',
      flexWrap: 'wrap'
    }}>
      <Stepper stepNumber="01" label="Account" state="completed" />
      <div style={{ width: '80px', height: '2px', backgroundColor: '#E5E7EB', margin: '0 8px' }} />
      <Stepper stepNumber="02" label="Personal" state="completed" />
      <div style={{ width: '80px', height: '2px', backgroundColor: '#E5E7EB', margin: '0 8px' }} />
      <Stepper stepNumber="03" label="Payment" state="active" current={true} />
      <div style={{ width: '80px', height: '2px', backgroundColor: '#E5E7EB', margin: '0 8px' }} />
      <Stepper stepNumber="04" label="Review" state="default" />
      <div style={{ width: '80px', height: '2px', backgroundColor: '#E5E7EB', margin: '0 8px' }} />
      <Stepper stepNumber="05" label="Complete" state="default" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of a complete workflow with connecting lines between steps.',
      },
    },
  },
};

// Responsive showcase
export const ResponsiveShowcase: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '800px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Desktop (Large)</h4>
        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Stepper size="large" stepNumber="01" label="Step 1" state="completed" />
          <Stepper size="large" stepNumber="02" label="Step 2" state="active" current={true} />
          <Stepper size="large" stepNumber="03" label="Step 3" state="default" />
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '16px', fontWeight: '500' }}>Mobile (Default)</h4>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Stepper stepNumber="01" label="Step 1" state="completed" />
          <Stepper stepNumber="02" label="Step 2" state="active" current={true} />
          <Stepper stepNumber="03" label="Step 3" state="default" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive behavior showing different sizes for different screen sizes.',
      },
    },
  },
};

// Accessibility demo
export const AccessibilityDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Stepper 
        stepNumber="01" 
        label="Accessible Step" 
        state="active" 
        current={true}
        aria-label="Step 1 of 3: Account Setup, currently active"
        onClick={() => console.log('Step 1 clicked')}
      />
      <Stepper 
        stepNumber="02" 
        label="Next Step" 
        state="default"
        aria-label="Step 2 of 3: Personal Information, not yet reached"
      />
      <Stepper 
        stepNumber="03" 
        label="Final Step" 
        state="default"
        aria-label="Step 3 of 3: Confirmation, not yet reached"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example with proper ARIA labels and keyboard navigation support.',
      },
    },
  },
};
