import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';
import { StepperLine } from './StepperLine';

const meta: Meta<typeof Stepper> = {
  title: 'Atoms/Building Blocks/Stepper/Comprehensive Showcase',
  component: Stepper,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Pixel-perfect comprehensive showcase of all Stepper variants matching Figma design specifications. Demonstrates individual steps, multi-step progressions, and various states.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const StepperRow = ({ 
  children, 
  title 
}: { 
  children: React.ReactNode; 
  title: string;
}) => (
  <div style={{ marginBottom: '80px' }}>
    <h3 style={{
      fontFamily: 'Archivo, sans-serif',
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: '32px',
      color: '#374151',
      letterSpacing: '-0.25px',
    }}>
      {title}
    </h3>
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0',
      flexWrap: 'wrap',
    }}>
      {children}
    </div>
  </div>
);

export const PixelPerfectShowcase: Story = {
  name: '🎯 Pixel-Perfect Figma Showcase',
  render: () => (
    <div style={{
      padding: '60px 40px',
      background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)',
      minHeight: '100vh',
    }}>
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
      }}>
        {/* Header */}
        <div style={{
          marginBottom: '64px',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: '36px',
            fontWeight: 700,
            marginBottom: '16px',
            color: '#1C1C1C',
            letterSpacing: '-1px',
            lineHeight: '38px',
          }}>
            Stepper Component Showcase
          </h1>
          <p style={{
            fontFamily: 'Roboto Flex, sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            color: '#6D7280',
            lineHeight: '22px',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            Complete demonstration of all stepper states, sizes, and multi-step progressions. 
            Designed for nuclear power industry applications with precision and clarity.
          </p>
        </div>

        {/* Section 1: Four Steps - Default Size */}
        <section style={{
          background: 'white',
          borderRadius: '12px',
          padding: '48px',
          marginBottom: '48px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: '28px',
            fontWeight: 700,
            marginBottom: '40px',
            color: '#1C1C1C',
            letterSpacing: '-0.5px',
          }}>
            Default Size (100px) - Four Steps
          </h2>

          <StepperRow title="All Default State">
            <Stepper type="number" state="default" size="default" stepNumber="01" label="Step One" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="249px" />
            <Stepper type="number" state="default" size="default" stepNumber="02" label="Step Two" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="249px" />
            <Stepper type="number" state="default" size="default" stepNumber="03" label="Step Three" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="249px" />
            <Stepper type="number" state="default" size="default" stepNumber="04" label="Step Four" current={false} text={true} />
          </StepperRow>

          <StepperRow title="In Progress (Step 2 Active)">
            <Stepper type="number" state="completed" size="default" stepNumber="check" label="Complete" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="249px" />
            <Stepper type="number" state="active" size="default" stepNumber="02" label="Step Two" current={true} text={true} />
            <StepperLine type="solid" stroke="2px" width="249px" />
            <Stepper type="number" state="default" size="default" stepNumber="03" label="Step Three" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="249px" />
            <Stepper type="number" state="default" size="default" stepNumber="04" label="Step Four" current={false} text={true} />
          </StepperRow>

          <StepperRow title="All Completed">
            <Stepper type="number" state="completed" size="default" stepNumber="check" label="Complete" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="249px" />
            <Stepper type="number" state="completed" size="default" stepNumber="check" label="Complete" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="249px" />
            <Stepper type="number" state="completed" size="default" stepNumber="check" label="Complete" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="249px" />
            <Stepper type="number" state="completed" size="default" stepNumber="check" label="Complete" current={false} text={true} />
          </StepperRow>
        </section>

        {/* Section 2: Four Steps - Large Size */}
        <section style={{
          background: 'white',
          borderRadius: '12px',
          padding: '48px',
          marginBottom: '48px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: '28px',
            fontWeight: 700,
            marginBottom: '40px',
            color: '#1C1C1C',
            letterSpacing: '-0.5px',
          }}>
            Large Size (140px) - Four Steps
          </h2>

          <StepperRow title="All Default State">
            <Stepper type="number" state="default" size="large" stepNumber="01" label="Step One" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="196px" />
            <Stepper type="number" state="default" size="large" stepNumber="02" label="Step Two" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="196px" />
            <Stepper type="number" state="default" size="large" stepNumber="03" label="Step Three" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="196px" />
            <Stepper type="number" state="default" size="large" stepNumber="04" label="Step Four" current={false} text={true} />
          </StepperRow>

          <StepperRow title="In Progress (Step 2 Active)">
            <Stepper type="number" state="completed" size="large" stepNumber="check" label="Complete" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="196px" />
            <Stepper type="number" state="active" size="large" stepNumber="02" label="Step Two" current={true} text={true} />
            <StepperLine type="solid" stroke="2px" width="196px" />
            <Stepper type="number" state="default" size="large" stepNumber="03" label="Step Three" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="196px" />
            <Stepper type="number" state="default" size="large" stepNumber="04" label="Step Four" current={false} text={true} />
          </StepperRow>

          <StepperRow title="All Completed">
            <Stepper type="number" state="completed" size="large" stepNumber="check" label="Complete" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="196px" />
            <Stepper type="number" state="completed" size="large" stepNumber="check" label="Complete" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="196px" />
            <Stepper type="number" state="completed" size="large" stepNumber="check" label="Complete" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="196px" />
            <Stepper type="number" state="completed" size="large" stepNumber="check" label="Complete" current={false} text={true} />
          </StepperRow>
        </section>

        {/* Section 3: Extended Step Counts */}
        <section style={{
          background: 'white',
          borderRadius: '12px',
          padding: '48px',
          marginBottom: '48px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: '28px',
            fontWeight: 700,
            marginBottom: '40px',
            color: '#1C1C1C',
            letterSpacing: '-0.5px',
          }}>
            Extended Step Progressions
          </h2>

          <StepperRow title="Five Steps - Default Size">
            <Stepper type="number" state="default" size="default" stepNumber="01" label="Step One" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="167px" />
            <Stepper type="number" state="default" size="default" stepNumber="02" label="Step Two" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="167px" />
            <Stepper type="number" state="default" size="default" stepNumber="03" label="Step Three" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="167px" />
            <Stepper type="number" state="default" size="default" stepNumber="04" label="Step Four" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="167px" />
            <Stepper type="number" state="default" size="default" stepNumber="05" label="Step Five" current={false} text={true} />
          </StepperRow>

          <StepperRow title="Six Steps - Default Size">
            <Stepper type="number" state="default" size="default" stepNumber="01" label="Step One" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="108px" />
            <Stepper type="number" state="default" size="default" stepNumber="02" label="Step Two" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="108px" />
            <Stepper type="number" state="default" size="default" stepNumber="03" label="Step Three" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="108px" />
            <Stepper type="number" state="default" size="default" stepNumber="04" label="Step Four" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="108px" />
            <Stepper type="number" state="default" size="default" stepNumber="05" label="Step Five" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="108px" />
            <Stepper type="number" state="default" size="default" stepNumber="06" label="Step Six" current={false} text={true} />
          </StepperRow>

          <StepperRow title="Seven Steps - Default Size">
            <Stepper type="number" state="default" size="default" stepNumber="01" label="Step One" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="68px" />
            <Stepper type="number" state="default" size="default" stepNumber="02" label="Step Two" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="68px" />
            <Stepper type="number" state="default" size="default" stepNumber="03" label="Step Three" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="68px" />
            <Stepper type="number" state="default" size="default" stepNumber="04" label="Step Four" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="68px" />
            <Stepper type="number" state="default" size="default" stepNumber="05" label="Step Five" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="68px" />
            <Stepper type="number" state="default" size="default" stepNumber="06" label="Step Six" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="68px" />
            <Stepper type="number" state="default" size="default" stepNumber="07" label="Step Seven" current={false} text={true} />
          </StepperRow>

          <StepperRow title="Eight Steps - Default Size">
            <Stepper type="number" state="default" size="default" stepNumber="01" label="Step One" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="40px" />
            <Stepper type="number" state="default" size="default" stepNumber="02" label="Step Two" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="40px" />
            <Stepper type="number" state="default" size="default" stepNumber="03" label="Step Three" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="40px" />
            <Stepper type="number" state="default" size="default" stepNumber="04" label="Step Four" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="40px" />
            <Stepper type="number" state="default" size="default" stepNumber="05" label="Step Five" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="40px" />
            <Stepper type="number" state="default" size="default" stepNumber="06" label="Step Six" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="40px" />
            <Stepper type="number" state="default" size="default" stepNumber="07" label="Step Seven" current={false} text={true} />
            <StepperLine type="solid" stroke="2px" width="40px" />
            <Stepper type="number" state="default" size="default" stepNumber="08" label="Step Eight" current={false} text={true} />
          </StepperRow>
        </section>

        {/* Section 4: Line Variants */}
        <section style={{
          background: 'white',
          borderRadius: '12px',
          padding: '48px',
          marginBottom: '48px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: '28px',
            fontWeight: 700,
            marginBottom: '40px',
            color: '#1C1C1C',
            letterSpacing: '-0.5px',
          }}>
            Connector Line Variants
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {/* Solid Lines */}
            <div>
              <h4 style={{
                fontFamily: 'Archivo, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                marginBottom: '24px',
                color: '#6D7280',
              }}>
                Solid Lines
              </h4>
              <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '13px', marginBottom: '8px', color: '#9CA3AF' }}>1px</div>
                  <StepperLine type="solid" stroke="1px" width="300px" />
                </div>
                <div>
                  <div style={{ fontSize: '13px', marginBottom: '8px', color: '#9CA3AF' }}>2px</div>
                  <StepperLine type="solid" stroke="2px" width="300px" />
                </div>
                <div>
                  <div style={{ fontSize: '13px', marginBottom: '8px', color: '#9CA3AF' }}>3px</div>
                  <StepperLine type="solid" stroke="3px" width="300px" />
                </div>
              </div>
            </div>

            {/* Dashed Lines */}
            <div>
              <h4 style={{
                fontFamily: 'Archivo, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                marginBottom: '24px',
                color: '#6D7280',
              }}>
                Dashed Lines
              </h4>
              <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '13px', marginBottom: '8px', color: '#9CA3AF' }}>1px</div>
                  <StepperLine type="dashed" stroke="1px" width="300px" />
                </div>
                <div>
                  <div style={{ fontSize: '13px', marginBottom: '8px', color: '#9CA3AF' }}>2px</div>
                  <StepperLine type="dashed" stroke="2px" width="300px" />
                </div>
                <div>
                  <div style={{ fontSize: '13px', marginBottom: '8px', color: '#9CA3AF' }}>3px</div>
                  <StepperLine type="dashed" stroke="3px" width="300px" />
                </div>
              </div>
            </div>

            {/* Dotted Lines */}
            <div>
              <h4 style={{
                fontFamily: 'Archivo, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                marginBottom: '24px',
                color: '#6D7280',
              }}>
                Dotted Lines
              </h4>
              <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '13px', marginBottom: '8px', color: '#9CA3AF' }}>1px</div>
                  <StepperLine type="dotted" stroke="1px" width="300px" />
                </div>
                <div>
                  <div style={{ fontSize: '13px', marginBottom: '8px', color: '#9CA3AF' }}>2px</div>
                  <StepperLine type="dotted" stroke="2px" width="300px" />
                </div>
                <div>
                  <div style={{ fontSize: '13px', marginBottom: '8px', color: '#9CA3AF' }}>3px</div>
                  <StepperLine type="dotted" stroke="3px" width="300px" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: State Comparison */}
        <section style={{
          background: 'white',
          borderRadius: '12px',
          padding: '48px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: '28px',
            fontWeight: 700,
            marginBottom: '40px',
            color: '#1C1C1C',
            letterSpacing: '-0.5px',
          }}>
            State Comparison
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '64px',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '24px',
                color: '#6D7280',
              }}>
                Default State
              </div>
              <Stepper
                type="number"
                state="default"
                size="default"
                stepNumber="01"
                label="Step One"
                current={false}
                text={true}
              />
              <div style={{ marginTop: '24px', fontSize: '13px', color: '#9CA3AF', lineHeight: '1.5' }}>
                2px gray border<br/>
                White background<br/>
                Black text
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '24px',
                color: '#6D7280',
              }}>
                Active State
              </div>
              <Stepper
                type="number"
                state="active"
                size="default"
                stepNumber="02"
                label="Step Two"
                current={true}
                text={true}
              />
              <div style={{ marginTop: '24px', fontSize: '13px', color: '#9CA3AF', lineHeight: '1.5' }}>
                4px blue border<br/>
                White background<br/>
                Blue text (medium weight)
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '24px',
                color: '#6D7280',
              }}>
                Completed State
              </div>
              <Stepper
                type="number"
                state="completed"
                size="default"
                stepNumber="check"
                label="Complete"
                current={false}
                text={true}
              />
              <div style={{ marginTop: '24px', fontSize: '13px', color: '#9CA3AF', lineHeight: '1.5' }}>
                3px dark blue border<br/>
                Blue background<br/>
                White check icon
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  ),
};

export const InteractiveDemo: Story = {
  name: '⚡ Interactive Demo',
  render: () => {
    const [currentStep, setCurrentStep] = React.useState(1);
    const totalSteps = 5;

    const handleStepClick = (step: number) => {
      setCurrentStep(step);
    };

    const handleNext = () => {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
    };

    const handlePrev = () => {
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
      }
    };

    const handleReset = () => {
      setCurrentStep(1);
    };

    return (
      <div style={{
        padding: '60px 40px',
        background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)',
        minHeight: '100vh',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <h1 style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: '36px',
            fontWeight: 700,
            marginBottom: '16px',
            color: '#1C1C1C',
            textAlign: 'center',
          }}>
            Interactive Stepper Demo
          </h1>
          <p style={{
            fontFamily: 'Roboto Flex, sans-serif',
            fontSize: '18px',
            color: '#6D7280',
            textAlign: 'center',
            marginBottom: '64px',
          }}>
            Click on steps or use the controls to navigate
          </p>

          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '64px 48px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginBottom: '48px',
            }}>
              {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step, index) => (
                <React.Fragment key={step}>
                  <div 
                    onClick={() => handleStepClick(step)}
                    style={{ cursor: 'pointer' }}
                  >
                    <Stepper
                      type="number"
                      state={
                        step < currentStep ? 'completed' :
                        step === currentStep ? 'active' : 'default'
                      }
                      size="large"
                      stepNumber={step < currentStep ? 'check' : String(step).padStart(2, '0')}
                      label={`Step ${step}`}
                      current={step === currentStep}
                      text={true}
                    />
                  </div>
                  {index < totalSteps - 1 && (
                    <StepperLine type="solid" stroke="2px" width="125px" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <button
                onClick={handlePrev}
                disabled={currentStep === 1}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontFamily: 'Archivo, sans-serif',
                  fontWeight: 500,
                  border: '2px solid #E5E7EB',
                  borderRadius: '8px',
                  background: 'white',
                  color: '#374151',
                  cursor: currentStep === 1 ? 'not-allowed' : 'pointer',
                  opacity: currentStep === 1 ? 0.5 : 1,
                  transition: 'all 0.2s ease',
                }}
              >
                ← Previous
              </button>

              <div style={{
                padding: '12px 24px',
                fontSize: '16px',
                fontFamily: 'Archivo, sans-serif',
                fontWeight: 600,
                color: '#2F42BD',
              }}>
                Step {currentStep} of {totalSteps}
              </div>

              <button
                onClick={handleNext}
                disabled={currentStep === totalSteps}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontFamily: 'Archivo, sans-serif',
                  fontWeight: 500,
                  border: 'none',
                  borderRadius: '8px',
                  background: '#2F42BD',
                  color: 'white',
                  cursor: currentStep === totalSteps ? 'not-allowed' : 'pointer',
                  opacity: currentStep === totalSteps ? 0.5 : 1,
                  transition: 'all 0.2s ease',
                }}
              >
                Next →
              </button>

              <button
                onClick={handleReset}
                style={{
                  padding: '12px 24px',
                  fontSize: '16px',
                  fontFamily: 'Archivo, sans-serif',
                  fontWeight: 500,
                  border: '2px solid #E5E7EB',
                  borderRadius: '8px',
                  background: 'white',
                  color: '#6D7280',
                  cursor: 'pointer',
                  marginLeft: '16px',
                  transition: 'all 0.2s ease',
                }}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
