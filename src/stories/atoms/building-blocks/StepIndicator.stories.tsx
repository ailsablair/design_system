import type { Meta, StoryObj } from '@storybook/react';
import { StepIndicator } from './StepIndicator';

const meta: Meta<typeof StepIndicator> = {
  title: 'Atoms/🧱 Building Blocks/StepIndicator',
  component: StepIndicator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A step indicator component that displays different types of workflow statuses with circular indicators and icons. Based on the Figma design system for nuclear power industry applications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['warning', 'locked', 'comments', 'complete', 'notifications', 'error', 'note'],
      description: 'Type of step indicator',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant of the indicator',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the indicator is disabled',
    },
    complete: {
      control: 'boolean',
      description: 'Whether this step is complete (overrides type to show check icon)',
    },
    current: {
      control: 'boolean',
      description: 'Whether this is the current step (adds highlight border)',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for interactive indicators',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessibility label',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    type: 'warning',
    size: 'default',
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    type: 'warning',
    size: 'small',
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    type: 'warning',
    size: 'large',
    disabled: false,
  },
};

export const Complete: Story = {
  args: {
    type: 'complete',
    size: 'default',
    disabled: false,
  },
};

export const Current: Story = {
  args: {
    type: 'warning',
    size: 'default',
    disabled: false,
    current: true,
  },
};

export const Disabled: Story = {
  args: {
    type: 'warning',
    size: 'default',
    disabled: true,
  },
};

export const Interactive: Story = {
  args: {
    type: 'warning',
    size: 'default',
    disabled: false,
    onClick: () => console.log('Step indicator clicked'),
  },
};

// All types showcase
export const AllTypes: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
      gap: '32px',
      padding: '32px',
      alignItems: 'center',
      justifyItems: 'center'
    }}>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="warning" size="default" />
        <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>Warning</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="locked" size="default" />
        <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>Locked</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="comments" size="default" />
        <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>Comments</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="complete" size="default" />
        <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>Complete</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="notifications" size="default" />
        <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>Notifications</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="error" size="default" />
        <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>Error</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="note" size="default" />
        <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>Note</div>
      </div>
    </div>
  ),
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '48px',
      padding: '32px',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="warning" size="small" />
        <div style={{ marginTop: '16px', fontSize: '14px', fontWeight: '500' }}>Small</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="warning" size="default" />
        <div style={{ marginTop: '16px', fontSize: '14px', fontWeight: '500' }}>Default</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="warning" size="large" />
        <div style={{ marginTop: '16px', fontSize: '14px', fontWeight: '500' }}>Large</div>
      </div>
    </div>
  ),
};

// States showcase
export const AllStates: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
      gap: '32px',
      padding: '32px',
      alignItems: 'center',
      justifyItems: 'center'
    }}>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="warning" size="default" />
        <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>Default</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="warning" size="default" current={true} />
        <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>Current</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="warning" size="default" complete={true} />
        <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>Complete</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="warning" size="default" disabled={true} />
        <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>Disabled</div>
      </div>
    </div>
  ),
};

// Complete Figma Matrix - All combinations
export const FigmaMatrix: Story = {
  render: () => (
    <div style={{ 
      padding: '32px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      minHeight: '100vh'
    }}>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '48px',
        padding: '32px',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: '32px', 
          fontWeight: '700', 
          marginBottom: '12px',
          background: 'linear-gradient(135deg, #2F42BD 0%, #0BA7EA 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Step Indicator Component
        </h1>
        <p style={{ 
          margin: 0, 
          fontSize: '18px', 
          color: '#6B7280',
          fontWeight: '400'
        }}>
          Complete matrix showing all types, sizes, and states from Figma design
        </p>
      </div>

      {/* Size sections */}
      {['small', 'default', 'large'].map((size) => (
        <div key={size} style={{ marginBottom: '48px' }}>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '32px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
          }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '600', 
              marginBottom: '32px',
              color: '#1F2937',
              textTransform: 'capitalize'
            }}>
              {size} Size
            </h2>
            
            {/* State rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Enabled row */}
              <div>
                <h3 style={{ 
                  fontSize: '16px', 
                  fontWeight: '500', 
                  marginBottom: '16px',
                  color: '#374151'
                }}>
                  Enabled
                </h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
                  gap: '24px',
                  alignItems: 'center',
                  justifyItems: 'center'
                }}>
                  {['warning', 'locked', 'comments', 'complete', 'notifications', 'error', 'note'].map((type) => (
                    <div key={`${size}-enabled-${type}`} style={{ textAlign: 'center' }}>
                      <StepIndicator 
                        type={type as any} 
                        size={size as any} 
                        disabled={false}
                        onClick={() => console.log(`Clicked ${type} ${size}`)}
                      />
                      <div style={{ 
                        marginTop: '8px', 
                        fontSize: '12px', 
                        fontWeight: '500',
                        color: '#6B7280',
                        textTransform: 'capitalize'
                      }}>
                        {type}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disabled row */}
              <div>
                <h3 style={{ 
                  fontSize: '16px', 
                  fontWeight: '500', 
                  marginBottom: '16px',
                  color: '#374151'
                }}>
                  Disabled
                </h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
                  gap: '24px',
                  alignItems: 'center',
                  justifyItems: 'center'
                }}>
                  {['warning', 'locked', 'comments', 'complete', 'notifications', 'error', 'note'].map((type) => (
                    <div key={`${size}-disabled-${type}`} style={{ textAlign: 'center' }}>
                      <StepIndicator 
                        type={type as any} 
                        size={size as any} 
                        disabled={true}
                      />
                      <div style={{ 
                        marginTop: '8px', 
                        fontSize: '12px', 
                        fontWeight: '500',
                        color: '#9CA3AF',
                        textTransform: 'capitalize'
                      }}>
                        {type}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Interactive examples */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '32px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
      }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '16px',
          color: '#1F2937'
        }}>
          Interactive Examples
        </h2>
        <p style={{ 
          marginBottom: '32px',
          color: '#6B7280',
          fontSize: '16px'
        }}>
          Click these indicators to test interactivity
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
          gap: '32px',
          alignItems: 'center',
          justifyItems: 'center'
        }}>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator 
              type="warning" 
              size="default" 
              onClick={() => alert('Warning step clicked!')}
            />
            <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>
              Warning (Click me)
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator 
              type="complete" 
              size="default" 
              current={true}
              onClick={() => alert('Current step clicked!')}
            />
            <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>
              Current Step
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator 
              type="error" 
              size="default" 
              onClick={() => alert('Error step clicked!')}
            />
            <div style={{ marginTop: '8px', fontSize: '14px', fontWeight: '500' }}>
              Error (Click me)
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Workflow example
export const WorkflowExample: Story = {
  render: () => (
    <div style={{ 
      padding: '48px',
      background: '#f8f9fa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px'
    }}>
      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: '600', 
        marginBottom: '16px',
        color: '#1F2937'
      }}>
        Nuclear Safety Workflow Example
      </h2>
      
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        gap: '48px',
        padding: '32px',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <StepIndicator type="complete" size="default" complete={true} />
          <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: '500' }}>
            Safety Check
          </div>
          <div style={{ fontSize: '12px', color: '#22C55E' }}>Complete</div>
        </div>
        
        <div style={{ width: '40px', height: '2px', background: '#E5E7EB' }}></div>
        
        <div style={{ textAlign: 'center' }}>
          <StepIndicator type="notifications" size="default" current={true} />
          <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: '500' }}>
            Review
          </div>
          <div style={{ fontSize: '12px', color: '#2F42BD' }}>Current</div>
        </div>
        
        <div style={{ width: '40px', height: '2px', background: '#E5E7EB' }}></div>
        
        <div style={{ textAlign: 'center' }}>
          <StepIndicator type="locked" size="default" disabled={true} />
          <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: '500' }}>
            Approval
          </div>
          <div style={{ fontSize: '12px', color: '#9CA3AF' }}>Locked</div>
        </div>
        
        <div style={{ width: '40px', height: '2px', background: '#E5E7EB' }}></div>
        
        <div style={{ textAlign: 'center' }}>
          <StepIndicator type="warning" size="default" disabled={true} />
          <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: '500' }}>
            Deploy
          </div>
          <div style={{ fontSize: '12px', color: '#9CA3AF' }}>Pending</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
