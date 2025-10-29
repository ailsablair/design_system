import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Atoms/🧱 Building Blocks/Stepper/Figma Showcase',
  component: Stepper,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete showcase of all Stepper/Steps variants matching Figma design specifications. This component represents individual steps in a multi-step process.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const AllVariants: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '80px',
      padding: '60px 40px',
      background: '#FFFFFF',
      minHeight: '100vh',
    }}>
      {/* DEFAULT SIZE VARIANTS */}
      <section>
        <h2 style={{
          fontFamily: 'Archivo, sans-serif',
          fontSize: '28px',
          fontWeight: 700,
          marginBottom: '48px',
          color: '#1C1C1C',
        }}>
          Default Size (100px)
        </h2>
        
        {/* Row 1: Steps 01-05 in default state + Complete */}
        <div style={{
          display: 'flex',
          gap: '40px',
          marginBottom: '80px',
          flexWrap: 'wrap',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '24px',
              color: '#374151',
            }}>
              Default State (Not Current)
            </h3>
            <div style={{ display: 'flex', gap: '48px' }}>
              <Stepper
                type="number"
                state="default"
                size="default"
                stepNumber="01"
                label="Text"
                current={false}
                text={true}
              />
              <Stepper
                type="number"
                state="default"
                size="default"
                stepNumber="02"
                label="Text"
                current={false}
                text={true}
              />
              <Stepper
                type="number"
                state="default"
                size="default"
                stepNumber="03"
                label="Text"
                current={false}
                text={true}
              />
              <Stepper
                type="number"
                state="default"
                size="default"
                stepNumber="04"
                label="Text"
                current={false}
                text={true}
              />
              <Stepper
                type="number"
                state="default"
                size="default"
                stepNumber="05"
                label="Text"
                current={false}
                text={true}
              />
              <Stepper
                type="number"
                state="completed"
                size="default"
                stepNumber="check"
                label="Complete"
                current={false}
                text={true}
              />
            </div>
          </div>
        </div>

        {/* Row 2: Steps 01-05 in active/current state + Complete */}
        <div style={{
          display: 'flex',
          gap: '40px',
          flexWrap: 'wrap',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '24px',
              color: '#374151',
            }}>
              Active State (Current Step)
            </h3>
            <div style={{ display: 'flex', gap: '48px' }}>
              <Stepper
                type="number"
                state="active"
                size="default"
                stepNumber="01"
                label="Text"
                current={true}
                text={true}
              />
              <Stepper
                type="number"
                state="active"
                size="default"
                stepNumber="02"
                label="Text"
                current={true}
                text={true}
              />
              <Stepper
                type="number"
                state="active"
                size="default"
                stepNumber="03"
                label="Text"
                current={true}
                text={true}
              />
              <Stepper
                type="number"
                state="active"
                size="default"
                stepNumber="04"
                label="Text"
                current={true}
                text={true}
              />
              <Stepper
                type="number"
                state="active"
                size="default"
                stepNumber="05"
                label="Text"
                current={true}
                text={true}
              />
              <Stepper
                type="number"
                state="completed"
                size="default"
                stepNumber="check"
                label="Complete"
                current={false}
                text={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LARGE SIZE VARIANTS */}
      <section>
        <h2 style={{
          fontFamily: 'Archivo, sans-serif',
          fontSize: '28px',
          fontWeight: 700,
          marginBottom: '48px',
          color: '#1C1C1C',
        }}>
          Large Size (140px)
        </h2>
        
        {/* Row 1: Steps 01-05 in default state + Complete */}
        <div style={{
          display: 'flex',
          gap: '40px',
          marginBottom: '80px',
          flexWrap: 'wrap',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '24px',
              color: '#374151',
            }}>
              Default State (Not Current)
            </h3>
            <div style={{ display: 'flex', gap: '64px' }}>
              <Stepper
                type="number"
                state="default"
                size="large"
                stepNumber="01"
                label="Text"
                current={false}
                text={true}
              />
              <Stepper
                type="number"
                state="default"
                size="large"
                stepNumber="02"
                label="Text"
                current={false}
                text={true}
              />
              <Stepper
                type="number"
                state="default"
                size="large"
                stepNumber="03"
                label="Text"
                current={false}
                text={true}
              />
              <Stepper
                type="number"
                state="default"
                size="large"
                stepNumber="04"
                label="Text"
                current={false}
                text={true}
              />
              <Stepper
                type="number"
                state="default"
                size="large"
                stepNumber="05"
                label="Text"
                current={false}
                text={true}
              />
              <Stepper
                type="number"
                state="completed"
                size="large"
                stepNumber="check"
                label="Complete"
                current={false}
                text={true}
              />
            </div>
          </div>
        </div>

        {/* Row 2: Steps 01-05 in active/current state + Complete */}
        <div style={{
          display: 'flex',
          gap: '40px',
          flexWrap: 'wrap',
        }}>
          <div>
            <h3 style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              marginBottom: '24px',
              color: '#374151',
            }}>
              Active State (Current Step)
            </h3>
            <div style={{ display: 'flex', gap: '64px' }}>
              <Stepper
                type="number"
                state="active"
                size="large"
                stepNumber="01"
                label="Text"
                current={true}
                text={true}
              />
              <Stepper
                type="number"
                state="active"
                size="large"
                stepNumber="02"
                label="Text"
                current={true}
                text={true}
              />
              <Stepper
                type="number"
                state="active"
                size="large"
                stepNumber="03"
                label="Text"
                current={true}
                text={true}
              />
              <Stepper
                type="number"
                state="active"
                size="large"
                stepNumber="04"
                label="Text"
                current={true}
                text={true}
              />
              <Stepper
                type="number"
                state="active"
                size="large"
                stepNumber="05"
                label="Text"
                current={true}
                text={true}
              />
              <Stepper
                type="number"
                state="completed"
                size="large"
                stepNumber="check"
                label="Complete"
                current={false}
                text={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL COMPARISON - Exact Figma Layout */}
      <section>
        <h2 style={{
          fontFamily: 'Archivo, sans-serif',
          fontSize: '28px',
          fontWeight: 700,
          marginBottom: '48px',
          color: '#1C1C1C',
        }}>
          Exact Figma Layout
        </h2>
        
        <div style={{
          border: '2px dashed #E5E7EB',
          padding: '40px',
          borderRadius: '8px',
          background: '#F9FAFB',
        }}>
          {/* Replicating the exact Figma screenshot layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, auto)',
            gap: '48px',
            justifyContent: 'start',
            marginBottom: '60px',
          }}>
            <Stepper type="number" state="default" size="default" stepNumber="01" label="Text" current={false} text={true} />
            <Stepper type="number" state="default" size="default" stepNumber="02" label="Text" current={false} text={true} />
            <Stepper type="number" state="default" size="default" stepNumber="03" label="Text" current={false} text={true} />
            <Stepper type="number" state="default" size="default" stepNumber="04" label="Text" current={false} text={true} />
            <Stepper type="number" state="default" size="default" stepNumber="05" label="Text" current={false} text={true} />
            <Stepper type="number" state="completed" size="default" stepNumber="check" label="Complete" current={false} text={true} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, auto)',
            gap: '60px',
            justifyContent: 'start',
            marginBottom: '60px',
          }}>
            <Stepper type="number" state="default" size="large" stepNumber="01" label="Text" current={false} text={true} />
            <Stepper type="number" state="default" size="large" stepNumber="02" label="Text" current={false} text={true} />
            <Stepper type="number" state="default" size="large" stepNumber="03" label="Text" current={false} text={true} />
            <Stepper type="number" state="default" size="large" stepNumber="04" label="Text" current={false} text={true} />
            <Stepper type="number" state="default" size="large" stepNumber="05" label="Text" current={false} text={true} />
            <Stepper type="number" state="completed" size="large" stepNumber="check" label="Complete" current={false} text={true} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, auto)',
            gap: '48px',
            justifyContent: 'start',
            marginBottom: '60px',
          }}>
            <Stepper type="number" state="active" size="default" stepNumber="01" label="Text" current={true} text={true} />
            <Stepper type="number" state="active" size="default" stepNumber="02" label="Text" current={true} text={true} />
            <Stepper type="number" state="active" size="default" stepNumber="03" label="Text" current={true} text={true} />
            <Stepper type="number" state="active" size="default" stepNumber="04" label="Text" current={true} text={true} />
            <Stepper type="number" state="active" size="default" stepNumber="05" label="Text" current={true} text={true} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, auto)',
            gap: '60px',
            justifyContent: 'start',
          }}>
            <Stepper type="number" state="active" size="large" stepNumber="01" label="Text" current={true} text={true} />
            <Stepper type="number" state="active" size="large" stepNumber="02" label="Text" current={true} text={true} />
            <Stepper type="number" state="active" size="large" stepNumber="03" label="Text" current={true} text={true} />
            <Stepper type="number" state="active" size="large" stepNumber="04" label="Text" current={true} text={true} />
            <Stepper type="number" state="active" size="large" stepNumber="05" label="Text" current={true} text={true} />
          </div>
        </div>
      </section>
    </div>
  ),
};

export const ComparisonGrid: Story = {
  name: 'State Comparison Grid',
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      padding: '40px',
      background: '#F9FAFB',
      minHeight: '100vh',
    }}>
      <h2 style={{
        fontFamily: 'Archivo, sans-serif',
        fontSize: '24px',
        fontWeight: 700,
        marginBottom: '16px',
        color: '#1C1C1C',
      }}>
        State Comparison: Default vs Active vs Completed
      </h2>

      {/* Default Size Comparison */}
      <div style={{
        background: 'white',
        padding: '32px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      }}>
        <h3 style={{
          fontFamily: 'Archivo, sans-serif',
          fontSize: '18px',
          fontWeight: 600,
          marginBottom: '32px',
          color: '#374151',
        }}>
          Default Size (100px)
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          gap: '64px',
          justifyContent: 'start',
        }}>
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#6B7280',
              textAlign: 'center',
            }}>
              Default State
            </div>
            <Stepper
              type="number"
              state="default"
              size="default"
              stepNumber="01"
              label="Text"
              current={false}
              text={true}
            />
          </div>
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#6B7280',
              textAlign: 'center',
            }}>
              Active State
            </div>
            <Stepper
              type="number"
              state="active"
              size="default"
              stepNumber="01"
              label="Text"
              current={true}
              text={true}
            />
          </div>
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#6B7280',
              textAlign: 'center',
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
          </div>
        </div>
      </div>

      {/* Large Size Comparison */}
      <div style={{
        background: 'white',
        padding: '32px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      }}>
        <h3 style={{
          fontFamily: 'Archivo, sans-serif',
          fontSize: '18px',
          fontWeight: 600,
          marginBottom: '32px',
          color: '#374151',
        }}>
          Large Size (140px)
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
          gap: '80px',
          justifyContent: 'start',
        }}>
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#6B7280',
              textAlign: 'center',
            }}>
              Default State
            </div>
            <Stepper
              type="number"
              state="default"
              size="large"
              stepNumber="01"
              label="Text"
              current={false}
              text={true}
            />
          </div>
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#6B7280',
              textAlign: 'center',
            }}>
              Active State
            </div>
            <Stepper
              type="number"
              state="active"
              size="large"
              stepNumber="01"
              label="Text"
              current={true}
              text={true}
            />
          </div>
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '16px',
              color: '#6B7280',
              textAlign: 'center',
            }}>
              Completed State
            </div>
            <Stepper
              type="number"
              state="completed"
              size="large"
              stepNumber="check"
              label="Complete"
              current={false}
              text={true}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
