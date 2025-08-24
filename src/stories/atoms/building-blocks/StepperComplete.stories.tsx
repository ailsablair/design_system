import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';
import { StepperLine } from './StepperLine';
import './stepper.css';
import './stepperLine.css';

const meta: Meta = {
  title: 'Atoms/Building Blocks/Stepper Complete',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Complete stepper workflows combining Stepper components with StepperLine connectors to create cohesive multi-step user interfaces.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Horizontal workflow
export const HorizontalWorkflow: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '0px',
      padding: '40px',
      flexWrap: 'wrap'
    }}>
      <Stepper stepNumber="01" label="Account" state="completed" />
      <StepperLine type="solid" stroke="2px" width="80px" />
      <Stepper stepNumber="02" label="Personal" state="completed" />
      <StepperLine type="solid" stroke="2px" width="80px" />
      <Stepper stepNumber="03" label="Payment" state="active" current={true} />
      <StepperLine type="solid" stroke="2px" width="80px" />
      <Stepper stepNumber="04" label="Review" state="default" />
      <StepperLine type="solid" stroke="2px" width="80px" />
      <Stepper stepNumber="05" label="Complete" state="default" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Horizontal workflow showing completed, active, and pending steps with connecting lines.',
      },
    },
  },
};

// Large horizontal workflow
export const LargeHorizontalWorkflow: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '0px',
      padding: '40px',
      flexWrap: 'wrap'
    }}>
      <Stepper size="large" stepNumber="01" label="Setup" state="completed" />
      <StepperLine type="solid" stroke="2px" width="100px" />
      <Stepper size="large" stepNumber="02" label="Configure" state="active" current={true} />
      <StepperLine type="solid" stroke="2px" width="100px" />
      <Stepper size="large" stepNumber="03" label="Deploy" state="default" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Large size workflow for prominent stepper displays.',
      },
    },
  },
};

// Vertical workflow
export const VerticalWorkflow: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '0px',
      padding: '40px'
    }}>
      <Stepper stepNumber="01" label="Start" state="completed" />
      <StepperLine type="solid" stroke="2px" orientation="vertical" height="60px" />
      <Stepper stepNumber="02" label="Process" state="completed" />
      <StepperLine type="solid" stroke="2px" orientation="vertical" height="60px" />
      <Stepper stepNumber="03" label="Review" state="active" current={true} />
      <StepperLine type="solid" stroke="2px" orientation="vertical" height="60px" />
      <Stepper stepNumber="04" label="Finish" state="default" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical workflow layout with vertical connecting lines.',
      },
    },
  },
};

// Dashed line workflow
export const DashedLineWorkflow: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '0px',
      padding: '40px',
      flexWrap: 'wrap'
    }}>
      <Stepper stepNumber="01" label="Begin" state="completed" />
      <StepperLine type="dashed" stroke="2px" width="80px" />
      <Stepper stepNumber="02" label="Progress" state="active" current={true} />
      <StepperLine type="dashed" stroke="2px" width="80px" />
      <Stepper stepNumber="03" label="End" state="default" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Workflow using dashed lines for a softer visual connection.',
      },
    },
  },
};

// Dotted line workflow
export const DottedLineWorkflow: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '0px',
      padding: '40px',
      flexWrap: 'wrap'
    }}>
      <Stepper stepNumber="01" label="Alpha" state="completed" />
      <StepperLine type="dotted" stroke="2px" width="80px" />
      <Stepper stepNumber="02" label="Beta" state="completed" />
      <StepperLine type="dotted" stroke="2px" width="80px" />
      <Stepper stepNumber="03" label="Release" state="active" current={true} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Workflow using dotted lines for subtle step connections.',
      },
    },
  },
};

// Complex workflow with mixed states
export const ComplexWorkflow: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '0px',
      padding: '40px',
      flexWrap: 'wrap'
    }}>
      <Stepper stepNumber="01" label="Registration" state="completed" />
      <StepperLine type="solid" stroke="2px" width="60px" />
      <Stepper stepNumber="02" label="Verification" state="completed" />
      <StepperLine type="solid" stroke="2px" width="60px" />
      <Stepper stepNumber="03" label="Profile Setup" state="completed" />
      <StepperLine type="solid" stroke="2px" width="60px" />
      <Stepper stepNumber="04" label="Payment Info" state="active" current={true} />
      <StepperLine type="dashed" stroke="2px" width="60px" />
      <Stepper stepNumber="05" label="Preferences" state="default" />
      <StepperLine type="dashed" stroke="2px" width="60px" />
      <Stepper stepNumber="06" label="Welcome" state="default" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complex workflow with multiple steps and mixed line styles to indicate progress.',
      },
    },
  },
};

// Interactive workflow
export const InteractiveWorkflow: Story = {
  render: () => {
    const handleStepClick = (stepNumber: string) => {
      alert(`Clicked step ${stepNumber}`);
    };

    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '0px',
        padding: '40px',
        flexWrap: 'wrap'
      }}>
        <Stepper 
          stepNumber="01" 
          label="Login" 
          state="completed" 
          onClick={() => handleStepClick('01')}
        />
        <StepperLine type="solid" stroke="2px" width="80px" />
        <Stepper 
          stepNumber="02" 
          label="Dashboard" 
          state="active" 
          current={true}
          onClick={() => handleStepClick('02')}
        />
        <StepperLine type="solid" stroke="2px" width="80px" />
        <Stepper 
          stepNumber="03" 
          label="Settings" 
          state="default"
          onClick={() => handleStepClick('03')}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive workflow where users can click on steps to navigate.',
      },
    },
  },
};

// Responsive workflow
export const ResponsiveWorkflow: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '100%' }}>
      {/* Desktop view */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ 
          textAlign: 'center', 
          marginBottom: '24px', 
          fontFamily: 'Archivo', 
          fontSize: '18px', 
          fontWeight: '600' 
        }}>
          Desktop Layout
        </h3>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '0px',
          flexWrap: 'wrap'
        }}>
          <Stepper size="large" stepNumber="01" label="Plan" state="completed" />
          <StepperLine type="solid" stroke="2px" width="100px" />
          <Stepper size="large" stepNumber="02" label="Build" state="active" current={true} />
          <StepperLine type="solid" stroke="2px" width="100px" />
          <Stepper size="large" stepNumber="03" label="Test" state="default" />
          <StepperLine type="solid" stroke="2px" width="100px" />
          <Stepper size="large" stepNumber="04" label="Deploy" state="default" />
        </div>
      </div>

      {/* Mobile view */}
      <div>
        <h3 style={{ 
          textAlign: 'center', 
          marginBottom: '24px', 
          fontFamily: 'Archivo', 
          fontSize: '18px', 
          fontWeight: '600' 
        }}>
          Mobile Layout
        </h3>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '0px',
          flexWrap: 'wrap'
        }}>
          <Stepper stepNumber="01" label="Plan" state="completed" />
          <StepperLine type="solid" stroke="2px" width="60px" />
          <Stepper stepNumber="02" label="Build" state="active" current={true} />
          <StepperLine type="solid" stroke="2px" width="60px" />
          <Stepper stepNumber="03" label="Test" state="default" />
          <StepperLine type="solid" stroke="2px" width="60px" />
          <Stepper stepNumber="04" label="Deploy" state="default" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive workflow showing how the stepper adapts to different screen sizes.',
      },
    },
  },
};

// All states showcase
export const AllStatesShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      gap: '48px',
      padding: '40px'
    }}>
      {/* Default size showcase */}
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ 
          marginBottom: '24px', 
          fontFamily: 'Archivo', 
          fontSize: '18px', 
          fontWeight: '600' 
        }}>
          Default Size
        </h3>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '0px',
          flexWrap: 'wrap'
        }}>
          <Stepper stepNumber="01" label="Complete" state="completed" />
          <StepperLine type="solid" stroke="2px" width="80px" />
          <Stepper stepNumber="02" label="Active" state="active" current={true} />
          <StepperLine type="solid" stroke="2px" width="80px" />
          <Stepper stepNumber="03" label="Pending" state="default" />
        </div>
      </div>

      {/* Large size showcase */}
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ 
          marginBottom: '24px', 
          fontFamily: 'Archivo', 
          fontSize: '18px', 
          fontWeight: '600' 
        }}>
          Large Size
        </h3>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '0px',
          flexWrap: 'wrap'
        }}>
          <Stepper size="large" stepNumber="01" label="Complete" state="completed" />
          <StepperLine type="solid" stroke="2px" width="100px" />
          <Stepper size="large" stepNumber="02" label="Active" state="active" current={true} />
          <StepperLine type="solid" stroke="2px" width="100px" />
          <Stepper size="large" stepNumber="03" label="Pending" state="default" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all stepper states in both sizes.',
      },
    },
  },
};
