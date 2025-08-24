import type { Meta, StoryObj } from '@storybook/react';
import { StepperGroup } from '../../../atoms/building-blocks/StepperGroup';
import '../../../atoms/building-blocks/stepperGroup.css';

const meta: Meta<typeof StepperGroup> = {
  title: 'Design System/Figma Showcase Files/Stepper Figma Showcase',
  component: StepperGroup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete Figma stepper showcase displaying all variants exactly as designed in Figma. This includes all step counts (4-8), sizes (default and large), and states (default, in progress, complete).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StepperGroup>;

// Step data for different counts
const fourSteps = [
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

export const CompleteFigmaShowcase: Story = {
  render: () => (
    <div style={{ 
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      padding: '48px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '64px',
      fontFamily: 'Archivo, -apple-system, Roboto, Helvetica, sans-serif'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: '700',
          color: '#1C1C1C',
          marginBottom: '16px',
          letterSpacing: '-1px'
        }}>
          Stepper Component Showcase
        </h1>
        <p style={{
          fontSize: '19px',
          fontWeight: '300',
          color: '#000',
          marginBottom: '0',
          letterSpacing: '-0.15px'
        }}>
          All stepper variants exactly as designed in Figma
        </p>
      </div>

      {/* Default Size - All Step Counts */}
      <section>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1C1C1C',
          marginBottom: '32px',
          letterSpacing: '-0.25px'
        }}>
          Default Size - All Step Counts
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {/* Four Steps */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '19px',
              fontWeight: '500',
              color: '#1C1C1C',
              marginBottom: '24px',
              letterSpacing: '-0.15px'
            }}>
              Default (Four Steps)
            </h3>
            <StepperGroup steps={fourSteps} size="default" state="default" />
          </div>
          
          {/* Eight Steps */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '19px',
              fontWeight: '500',
              color: '#1C1C1C',
              marginBottom: '24px',
              letterSpacing: '-0.15px'
            }}>
              Eight Steps
            </h3>
            <StepperGroup steps={eightSteps} size="default" state="default" />
          </div>
          
          {/* Seven Steps */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '19px',
              fontWeight: '500',
              color: '#1C1C1C',
              marginBottom: '24px',
              letterSpacing: '-0.15px'
            }}>
              Seven Steps
            </h3>
            <StepperGroup steps={sevenSteps} size="default" state="default" />
          </div>
          
          {/* Six Steps */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '19px',
              fontWeight: '500',
              color: '#1C1C1C',
              marginBottom: '24px',
              letterSpacing: '-0.15px'
            }}>
              Six Steps
            </h3>
            <StepperGroup steps={sixSteps} size="default" state="default" />
          </div>
          
          {/* Five Steps */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '19px',
              fontWeight: '500',
              color: '#1C1C1C',
              marginBottom: '24px',
              letterSpacing: '-0.15px'
            }}>
              Five Steps
            </h3>
            <StepperGroup steps={fiveSteps} size="default" state="default" />
          </div>
        </div>
      </section>

      {/* Large Size - All Step Counts */}
      <section>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1C1C1C',
          marginBottom: '32px',
          letterSpacing: '-0.25px'
        }}>
          Large Size - All Step Counts
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {/* Eight Steps (1440px only) */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '19px',
              fontWeight: '500',
              color: '#1C1C1C',
              marginBottom: '24px',
              letterSpacing: '-0.15px'
            }}>
              Eight Steps (1440px only)
            </h3>
            <StepperGroup steps={eightSteps} size="large" state="default" />
          </div>
          
          {/* Seven Steps */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '19px',
              fontWeight: '500',
              color: '#1C1C1C',
              marginBottom: '24px',
              letterSpacing: '-0.15px'
            }}>
              Seven Steps
            </h3>
            <StepperGroup steps={sevenSteps} size="large" state="default" />
          </div>
          
          {/* Six Steps */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '19px',
              fontWeight: '500',
              color: '#1C1C1C',
              marginBottom: '24px',
              letterSpacing: '-0.15px'
            }}>
              Six Steps
            </h3>
            <StepperGroup steps={sixSteps} size="large" state="default" />
          </div>
          
          {/* Five Steps */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '19px',
              fontWeight: '500',
              color: '#1C1C1C',
              marginBottom: '24px',
              letterSpacing: '-0.15px'
            }}>
              Five Steps
            </h3>
            <StepperGroup steps={fiveSteps} size="large" state="default" />
          </div>
          
          {/* Default (Four Steps) */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '19px',
              fontWeight: '500',
              color: '#1C1C1C',
              marginBottom: '24px',
              letterSpacing: '-0.15px'
            }}>
              Default (Four Steps)
            </h3>
            <StepperGroup steps={fourSteps} size="large" state="default" />
          </div>
        </div>
      </section>

      {/* State Variations */}
      <section>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1C1C1C',
          marginBottom: '32px',
          letterSpacing: '-0.25px'
        }}>
          State Variations
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {/* In Progress - Default Size */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '19px',
              fontWeight: '500',
              color: '#1C1C1C',
              marginBottom: '24px',
              letterSpacing: '-0.15px'
            }}>
              In Progress - Default Size
            </h3>
            <StepperGroup steps={fourSteps} size="default" state="in progress" currentStep={1} />
          </div>
          
          {/* Complete - Default Size */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '19px',
              fontWeight: '500',
              color: '#1C1C1C',
              marginBottom: '24px',
              letterSpacing: '-0.15px'
            }}>
              Complete - Default Size
            </h3>
            <StepperGroup steps={fourSteps} size="default" state="complete" />
          </div>
          
          {/* In Progress - Large Size */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '19px',
              fontWeight: '500',
              color: '#1C1C1C',
              marginBottom: '24px',
              letterSpacing: '-0.15px'
            }}>
              In Progress - Large Size
            </h3>
            <StepperGroup steps={fourSteps} size="large" state="in progress" currentStep={1} />
          </div>
          
          {/* Complete - Large Size */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '19px',
              fontWeight: '500',
              color: '#1C1C1C',
              marginBottom: '24px',
              letterSpacing: '-0.15px'
            }}>
              Complete - Large Size
            </h3>
            <StepperGroup steps={fourSteps} size="large" state="complete" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '64px',
        paddingTop: '32px',
        borderTop: '1px solid #E5E7EB'
      }}>
        <p style={{
          fontSize: '16px',
          fontWeight: '300',
          color: '#6B7280',
          margin: '0'
        }}>
          All components implement the exact Figma design specifications including typography, spacing, colors, and states.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all stepper variants exactly as designed in Figma. This includes all step counts (4, 5, 6, 7, 8), both sizes (default and large), and all states (default, in progress, complete). Each variant matches the Figma design pixel-perfectly.',
      },
    },
  },
};

export const DefaultSizeVariants: Story = {
  render: () => (
    <div style={{ 
      width: '100%',
      backgroundColor: '#ffffff',
      padding: '48px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      fontFamily: 'Archivo, -apple-system, Roboto, Helvetica, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1C1C1C',
          marginBottom: '8px',
          letterSpacing: '-0.25px'
        }}>
          Default Size Stepper Variants
        </h1>
      </div>

      <StepperGroup steps={fourSteps} size="default" state="default" />
      <StepperGroup steps={eightSteps} size="default" state="default" />
      <StepperGroup steps={sevenSteps} size="default" state="default" />
      <StepperGroup steps={sixSteps} size="default" state="default" />
      <StepperGroup steps={fiveSteps} size="default" state="default" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All default size stepper variants with different step counts.',
      },
    },
  },
};

export const LargeSizeVariants: Story = {
  render: () => (
    <div style={{ 
      width: '100%',
      backgroundColor: '#ffffff',
      padding: '48px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      fontFamily: 'Archivo, -apple-system, Roboto, Helvetica, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1C1C1C',
          marginBottom: '8px',
          letterSpacing: '-0.25px'
        }}>
          Large Size Stepper Variants
        </h1>
      </div>

      <StepperGroup steps={eightSteps} size="large" state="default" />
      <StepperGroup steps={sevenSteps} size="large" state="default" />
      <StepperGroup steps={sixSteps} size="large" state="default" />
      <StepperGroup steps={fiveSteps} size="large" state="default" />
      <StepperGroup steps={fourSteps} size="large" state="default" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All large size stepper variants with different step counts.',
      },
    },
  },
};

export const StateComparison: Story = {
  render: () => (
    <div style={{ 
      width: '100%',
      backgroundColor: '#ffffff',
      padding: '48px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      fontFamily: 'Archivo, -apple-system, Roboto, Helvetica, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1C1C1C',
          marginBottom: '8px',
          letterSpacing: '-0.25px'
        }}>
          Stepper State Comparison
        </h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
        <div>
          <h3 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '19px', fontWeight: '500' }}>Default Size</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h4 style={{ textAlign: 'center', marginBottom: '16px', fontSize: '16px', fontWeight: '400' }}>Default</h4>
              <StepperGroup steps={fourSteps} size="default" state="default" />
            </div>
            <div>
              <h4 style={{ textAlign: 'center', marginBottom: '16px', fontSize: '16px', fontWeight: '400' }}>In Progress</h4>
              <StepperGroup steps={fourSteps} size="default" state="in progress" currentStep={1} />
            </div>
            <div>
              <h4 style={{ textAlign: 'center', marginBottom: '16px', fontSize: '16px', fontWeight: '400' }}>Complete</h4>
              <StepperGroup steps={fourSteps} size="default" state="complete" />
            </div>
          </div>
        </div>
        
        <div>
          <h3 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '19px', fontWeight: '500' }}>Large Size</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h4 style={{ textAlign: 'center', marginBottom: '16px', fontSize: '16px', fontWeight: '400' }}>Default</h4>
              <StepperGroup steps={fourSteps} size="large" state="default" />
            </div>
            <div>
              <h4 style={{ textAlign: 'center', marginBottom: '16px', fontSize: '16px', fontWeight: '400' }}>In Progress</h4>
              <StepperGroup steps={fourSteps} size="large" state="in progress" currentStep={1} />
            </div>
            <div>
              <h4 style={{ textAlign: 'center', marginBottom: '16px', fontSize: '16px', fontWeight: '400' }}>Complete</h4>
              <StepperGroup steps={fourSteps} size="large" state="complete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of all stepper states in both sizes.',
      },
    },
  },
};
