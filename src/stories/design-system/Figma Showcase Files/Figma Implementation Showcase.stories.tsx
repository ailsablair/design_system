import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../../atoms/Toggle';
import { Slider } from '../../atoms/Slider';
import { DateTimeInput } from '../../atoms/DateTimeInput';
import { Tag } from '../../atoms/Tag';
import { Badge } from '../../atoms/Badge';
import { InputNumbers } from '../../atoms/InputNumbers';

const meta: Meta = {
  title: 'Design System/Figma Showcase Files/Figma Implementation Showcase',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete showcase of UI elements exactly as shown in the Figma design. Features toggle components with labels, progressive slider displays, and comprehensive date/time input components.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Toggle with label component
const ToggleWithLabel = ({ 
  size, 
  enabled = true 
}: { 
  size: 'small' | 'default' | 'large'; 
  enabled?: boolean;
}) => {
  const getFontSize = (size: string) => {
    switch (size) {
      case 'small': return '14px';
      case 'large': return '18px';
      default: return '16px';
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '12px',
      fontFamily: 'var(--type-typeface-archivo)',
      fontSize: getFontSize(size),
      fontWeight: '300',
      lineHeight: size === 'small' ? '17px' : size === 'large' ? '24px' : '22px',
      letterSpacing: '0.15px',
      color: 'var(--base-black)'
    }}>
      <Toggle 
        size={size} 
        enabled={enabled} 
        icon={true} 
        state="default"
      />
      <span>This is the toggle label</span>
    </div>
  );
};

// Helper component for creating a row of connected sliders
const SliderRow = ({ 
  size, 
  totalSteps = 10, 
  filledSteps = 0 
}: { 
  size: 'small' | 'default' | 'large';
  totalSteps?: number;
  filledSteps?: number;
}) => {
  const sliders = [];
  
  for (let i = 0; i <= totalSteps; i++) {
    const isStart = i === 0;
    const isEnd = i === totalSteps;
    const isFilled = i <= filledSteps;
    const showStart = isStart;
    const showEnd = isEnd;
    
    sliders.push(
      <Slider
        key={i}
        size={size}
        filled={isFilled}
        showStart={showStart}
        showEnd={showEnd}
        showNumber={true}
        startValue={isStart ? 0 : i}
        endValue={isEnd ? totalSteps : i}
        value={isFilled ? 1 : 0}
        min={0}
        max={1}
        step={0.1}
        disabled={false}
      />
    );
  }
  
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'flex-end',
      gap: '0px',
      width: 'fit-content'
    }}>
      {sliders}
    </div>
  );
};

export const CompleteFigmaDesign: Story = {
  render: () => (
    <div style={{ 
      padding: '48px',
      backgroundColor: '#F8FAFC',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '64px'
      }}>
        
        {/* Header */}
        <div style={{
          textAlign: 'center',
          borderBottom: '2px solid #E2E8F0',
          paddingBottom: '24px'
        }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            margin: '0 0 8px 0',
            color: '#1E293B'
          }}>
            Building Blocks Design System
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#64748B',
            margin: '0'
          }}>
            Figma Design Implementation - Toggle & Slider Components
          </p>
        </div>

        {/* Toggle Section */}
        <section style={{
          padding: '32px',
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '600',
            margin: '0 0 24px 0',
            color: '#1E293B',
            borderBottom: '1px solid #E2E8F0',
            paddingBottom: '12px'
          }}>
            Toggle Components with Labels
          </h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'flex-start'
          }}>
            <ToggleWithLabel size="default" enabled={true} />
            <ToggleWithLabel size="large" enabled={true} />
            <ToggleWithLabel size="small" enabled={true} />
          </div>
        </section>

        {/* Slider Section */}
        <section style={{
          padding: '32px',
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '600',
            margin: '0 0 32px 0',
            color: '#1E293B',
            borderBottom: '1px solid #E2E8F0',
            paddingBottom: '12px'
          }}>
            Progressive Slider Components
          </h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '48px'
          }}>
            
            {/* Small Size Sliders */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                margin: '0 0 16px 0',
                color: '#374151'
              }}>
                Small Size (0-10 Scale)
              </h3>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '12px',
                backgroundColor: '#F8FAFC',
                padding: '20px',
                borderRadius: '8px',
                border: '1px solid #E2E8F0'
              }}>
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Unfilled (0%)</div>
                <SliderRow size="small" totalSteps={10} filledSteps={0} />
                
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>20% Fill</div>
                <SliderRow size="small" totalSteps={10} filledSteps={2} />
                
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>40% Fill</div>
                <SliderRow size="small" totalSteps={10} filledSteps={4} />
                
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>60% Fill</div>
                <SliderRow size="small" totalSteps={10} filledSteps={6} />
                
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>80% Fill</div>
                <SliderRow size="small" totalSteps={10} filledSteps={8} />
                
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Fully Filled (100%)</div>
                <SliderRow size="small" totalSteps={10} filledSteps={10} />
              </div>
            </div>
            
            {/* Default Size Sliders */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                margin: '0 0 16px 0',
                color: '#374151'
              }}>
                Default Size (0-10 Scale)
              </h3>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '12px',
                backgroundColor: '#F8FAFC',
                padding: '20px',
                borderRadius: '8px',
                border: '1px solid #E2E8F0'
              }}>
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Unfilled (0%)</div>
                <SliderRow size="default" totalSteps={10} filledSteps={0} />
                
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>20% Fill</div>
                <SliderRow size="default" totalSteps={10} filledSteps={2} />
                
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>40% Fill</div>
                <SliderRow size="default" totalSteps={10} filledSteps={4} />
                
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>60% Fill</div>
                <SliderRow size="default" totalSteps={10} filledSteps={6} />
                
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>80% Fill</div>
                <SliderRow size="default" totalSteps={10} filledSteps={8} />
                
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Fully Filled (100%)</div>
                <SliderRow size="default" totalSteps={10} filledSteps={10} />
              </div>
            </div>
            
            {/* Large Size Sliders */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                margin: '0 0 16px 0',
                color: '#374151'
              }}>
                Large Size (0-10 Scale)
              </h3>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '12px',
                backgroundColor: '#F8FAFC',
                padding: '20px',
                borderRadius: '8px',
                border: '1px solid #E2E8F0'
              }}>
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Unfilled (0%)</div>
                <SliderRow size="large" totalSteps={10} filledSteps={0} />
                
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>20% Fill</div>
                <SliderRow size="large" totalSteps={10} filledSteps={2} />
                
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>40% Fill</div>
                <SliderRow size="large" totalSteps={10} filledSteps={4} />
                
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>60% Fill</div>
                <SliderRow size="large" totalSteps={10} filledSteps={6} />
                
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>80% Fill</div>
                <SliderRow size="large" totalSteps={10} filledSteps={8} />
                
                <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '4px' }}>Fully Filled (100%)</div>
                <SliderRow size="large" totalSteps={10} filledSteps={10} />
              </div>
            </div>
            
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '24px 0',
          borderTop: '1px solid #E2E8F0',
          color: '#64748B',
          fontSize: '14px'
        }}>
          <p style={{ margin: '0' }}>
            Design System Components • Built with React & TypeScript • Styled with CSS Custom Properties
          </p>
        </footer>
        
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete implementation of the Figma design featuring toggle components with labels and progressive slider displays across all sizes. This showcases the exact UI elements from the provided Figma design with proper typography, spacing, and interactive states.',
      },
    },
  },
};

export const ToggleSection: Story = {
  render: () => (
    <div style={{ 
      padding: '32px',
      backgroundColor: 'white',
      borderRadius: '12px',
      border: '2px dashed #8B5CF6',
      maxWidth: '500px'
    }}>
      <h2 style={{
        fontSize: '20px',
        fontWeight: '600',
        margin: '0 0 24px 0',
        color: '#1E293B',
        textAlign: 'center'
      }}>
        Toggle Components (Figma Design)
      </h2>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        alignItems: 'flex-start'
      }}>
        <ToggleWithLabel size="default" enabled={true} />
        <ToggleWithLabel size="large" enabled={true} />
        <ToggleWithLabel size="small" enabled={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toggle components with labels section from the Figma design.',
      },
    },
  },
};

export const SliderSection: Story = {
  render: () => (
    <div style={{ 
      padding: '32px',
      backgroundColor: 'white',
      borderRadius: '12px',
      border: '2px dashed #8B5CF6',
      width: 'fit-content'
    }}>
      <h2 style={{
        fontSize: '20px',
        fontWeight: '600',
        margin: '0 0 24px 0',
        color: '#1E293B',
        textAlign: 'center'
      }}>
        Progressive Sliders (Figma Design)
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px'
      }}>
        
        {/* Small */}
        <div>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>Small</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SliderRow size="small" totalSteps={10} filledSteps={0} />
            <SliderRow size="small" totalSteps={10} filledSteps={2} />
            <SliderRow size="small" totalSteps={10} filledSteps={4} />
            <SliderRow size="small" totalSteps={10} filledSteps={6} />
            <SliderRow size="small" totalSteps={10} filledSteps={8} />
            <SliderRow size="small" totalSteps={10} filledSteps={10} />
          </div>
        </div>
        
        {/* Default */}
        <div>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>Default</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SliderRow size="default" totalSteps={10} filledSteps={0} />
            <SliderRow size="default" totalSteps={10} filledSteps={2} />
            <SliderRow size="default" totalSteps={10} filledSteps={4} />
            <SliderRow size="default" totalSteps={10} filledSteps={6} />
            <SliderRow size="default" totalSteps={10} filledSteps={8} />
            <SliderRow size="default" totalSteps={10} filledSteps={10} />
          </div>
        </div>
        
        {/* Large */}
        <div>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>Large</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SliderRow size="large" totalSteps={10} filledSteps={0} />
            <SliderRow size="large" totalSteps={10} filledSteps={2} />
            <SliderRow size="large" totalSteps={10} filledSteps={4} />
            <SliderRow size="large" totalSteps={10} filledSteps={6} />
            <SliderRow size="large" totalSteps={10} filledSteps={8} />
            <SliderRow size="large" totalSteps={10} filledSteps={10} />
          </div>
        </div>
        
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Progressive slider components section from the Figma design.',
      },
    },
  },
};

// Comprehensive showcase with all Figma components
export const CompleteFigmaShowcase: Story = {
  render: () => (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--base-white)',
      padding: '40px',
      fontFamily: 'var(--type-typeface-archivo)',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: '600',
            color: 'var(--base-black)',
            marginBottom: '8px',
            lineHeight: '1.2'
          }}>
            Complete Figma Design System
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--secondary-blue-gray)',
            fontWeight: '300',
            margin: 0
          }}>
            All UI components as designed in Figma - Toggles, Sliders, Date/Time Inputs, Tags, Badges, and Input Numbers
          </p>
        </div>

        {/* Toggle Components Section */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '500',
            color: 'var(--base-black)',
            marginBottom: '24px',
            paddingBottom: '8px',
            borderBottom: '1px solid var(--neutral-gray-gray-200)'
          }}>
            Toggle Components with Labels
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}>
            {(['small', 'default', 'large'] as const).map((size) => (
              <div key={`toggle-${size}`}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: 'var(--secondary-blue-gray)',
                  marginBottom: '16px',
                  textTransform: 'capitalize'
                }}>
                  {size} Size
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <ToggleWithLabel size={size} enabled={true} />
                  <ToggleWithLabel size={size} enabled={false} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Components Section */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '500',
            color: 'var(--base-black)',
            marginBottom: '24px',
            paddingBottom: '8px',
            borderBottom: '1px solid var(--neutral-gray-gray-200)'
          }}>
            Progressive Slider Components
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}>
            {(['small', 'default', 'large'] as const).map((size) => (
              <div key={`slider-${size}`}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: 'var(--secondary-blue-gray)',
                  marginBottom: '16px',
                  textTransform: 'capitalize'
                }}>
                  {size} Size
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <SliderRow size={size} totalSteps={10} filledSteps={0} />
                  <SliderRow size={size} totalSteps={10} filledSteps={3} />
                  <SliderRow size={size} totalSteps={10} filledSteps={7} />
                  <SliderRow size={size} totalSteps={10} filledSteps={10} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tags Components Section */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '500',
            color: 'var(--base-black)',
            marginBottom: '24px',
            paddingBottom: '8px',
            borderBottom: '1px solid var(--neutral-gray-gray-200)'
          }}>
            Tag Components
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}>
            {/* All Colors */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'var(--secondary-blue-gray)',
                marginBottom: '20px'
              }}>
                All Color Variants
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {['light-gray', 'primary', 'secondary', 'blue', 'cyan', 'orange', 'gray', 'purple', 'green', 'red', 'yellow', 'black'].map(color => (
                  <Tag key={color} label={color.charAt(0).toUpperCase() + color.slice(1)} variant={color as any} />
                ))}
              </div>
            </div>

            {/* Without Close Buttons */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'var(--secondary-blue-gray)',
                marginBottom: '20px'
              }}>
                Without Close Buttons
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {['blue', 'cyan', 'orange', 'gray', 'purple', 'green', 'red', 'yellow', 'black'].map(color => (
                  <Tag key={color} label={color.charAt(0).toUpperCase() + color.slice(1)} variant={color as any} showClose={false} />
                ))}
              </div>
            </div>

            {/* Size Variants */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'var(--secondary-blue-gray)',
                marginBottom: '20px'
              }}>
                Size Variants
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['small', 'default', 'large'].map(size => (
                  <div key={size} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ minWidth: '60px', fontSize: '12px', color: '#666', textTransform: 'capitalize' }}>{size}:</span>
                    <Tag label="Blue" variant="blue" size={size as any} />
                    <Tag label="Green" variant="green" size={size as any} />
                    <Tag label="Red" variant="red" size={size as any} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Badge Components Section */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '500',
            color: 'var(--base-black)',
            marginBottom: '24px',
            paddingBottom: '8px',
            borderBottom: '1px solid var(--neutral-gray-gray-200)'
          }}>
            Badge Components
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}>
            {/* Dot Badges */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'var(--secondary-blue-gray)',
                marginBottom: '20px'
              }}>
                Notification Dots
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                {['blue', 'cyan', 'orange', 'gray', 'purple', 'green', 'red', 'yellow', 'black'].map(color => (
                  <div key={color} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Badge variant="dot" color={color as any} size="medium" />
                    <span style={{ fontSize: '10px', color: '#666' }}>{color}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Count Badges */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'var(--secondary-blue-gray)',
                marginBottom: '20px'
              }}>
                Count Badges
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                <Badge variant="count" color="red" size="small" count={3} />
                <Badge variant="count" color="blue" size="medium" count={12} />
                <Badge variant="count" color="green" size="large" count={99} />
                <Badge variant="count" color="orange" size="medium" count={150} maxCount={99} />
              </div>
            </div>

            {/* Badge Sizes */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'var(--secondary-blue-gray)',
                marginBottom: '20px'
              }}>
                Size Comparison
              </h3>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Badge variant="dot" color="blue" size="small" />
                  <span style={{ fontSize: '10px', color: '#666' }}>Small</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Badge variant="dot" color="blue" size="medium" />
                  <span style={{ fontSize: '10px', color: '#666' }}>Medium</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <Badge variant="dot" color="blue" size="large" />
                  <span style={{ fontSize: '10px', color: '#666' }}>Large</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* InputNumbers Components Section */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '500',
            color: 'var(--base-black)',
            marginBottom: '24px',
            paddingBottom: '8px',
            borderBottom: '1px solid var(--neutral-gray-gray-200)'
          }}>
            Input Numbers Components
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}>
            {/* Default Type */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'var(--secondary-blue-gray)',
                marginBottom: '20px'
              }}>
                Default Type - All Sizes
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <InputNumbers type="default" size="small" value={1} />
                <InputNumbers type="default" size="default" value={5} />
                <InputNumbers type="default" size="large" value={10} />
              </div>
            </div>

            {/* Simple Type */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'var(--secondary-blue-gray)',
                marginBottom: '20px'
              }}>
                Simple Type - All Sizes
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <InputNumbers type="simple" size="small" value={2} />
                <InputNumbers type="simple" size="default" value={7} />
                <InputNumbers type="simple" size="large" value={15} />
              </div>
            </div>

            {/* Different States */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'var(--secondary-blue-gray)',
                marginBottom: '20px'
              }}>
                Component States
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '500', color: '#666', margin: '0 0 8px 0' }}>Default State</h4>
                  <InputNumbers type="default" size="default" value={3} />
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '500', color: '#666', margin: '0 0 8px 0' }}>Disabled State</h4>
                  <InputNumbers type="default" size="default" value={3} disabled={true} />
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '500', color: '#666', margin: '0 0 8px 0' }}>With Custom Range</h4>
                  <InputNumbers type="default" size="default" value={50} min={0} max={100} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Date/Time Input Components Section */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '500',
            color: 'var(--base-black)',
            marginBottom: '24px',
            paddingBottom: '8px',
            borderBottom: '1px solid var(--neutral-gray-gray-200)'
          }}>
            Date & Time Input Components
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}>
            {/* Date Inputs */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'var(--secondary-blue-gray)',
                marginBottom: '20px'
              }}>
                Date Inputs - All States
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {(['small', 'default', 'large'] as const).map((size) => (
                  <div key={`date-${size}`}>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'var(--neutral-gray-gray-600)',
                      marginBottom: '12px',
                      textTransform: 'capitalize'
                    }}>
                      {size}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <DateTimeInput label="Date" type="date" size={size} state="default" />
                      <DateTimeInput label="Date" type="date" size={size} state="filled" value="01 / JAN / 2000" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Date Focus States */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'var(--secondary-blue-gray)',
                marginBottom: '20px'
              }}>
                Date Focus & Typing States
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {(['small', 'default', 'large'] as const).map((size) => (
                  <div key={`date-focus-${size}`}>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'var(--neutral-gray-gray-600)',
                      marginBottom: '12px',
                      textTransform: 'capitalize'
                    }}>
                      {size}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <DateTimeInput label="Date" type="date" size={size} state="focus" />
                      <DateTimeInput label="Date" type="date" size={size} state="typing" value="01 / JAN / |" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Time Inputs */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'var(--secondary-blue-gray)',
                marginBottom: '20px'
              }}>
                Time Inputs - All States
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {(['small', 'default', 'large'] as const).map((size) => (
                  <div key={`time-${size}`}>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'var(--neutral-gray-gray-600)',
                      marginBottom: '12px',
                      textTransform: 'capitalize'
                    }}>
                      {size}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <DateTimeInput label="Time" type="time" size={size} state="default" />
                      <DateTimeInput label="Time" type="time" size={size} state="filled" value="08 : 01 : 54 PM" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Time Focus States */}
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'var(--secondary-blue-gray)',
                marginBottom: '20px'
              }}>
                Time Focus & Typing States
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {(['small', 'default', 'large'] as const).map((size) => (
                  <div key={`time-focus-${size}`}>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'var(--neutral-gray-gray-600)',
                      marginBottom: '12px',
                      textTransform: 'capitalize'
                    }}>
                      {size}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <DateTimeInput label="Time" type="time" size={size} state="focus" />
                      <DateTimeInput label="Time" type="time" size={size} state="typing" value="08 : 01 : |  PM" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '64px',
          padding: '24px',
          backgroundColor: 'var(--neutral-gray-gray-50)',
          borderRadius: 'var(--spacing-radius-8px)',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '16px',
            color: 'var(--secondary-blue-gray)',
            margin: 0,
            fontWeight: '300'
          }}>
            All components designed to match Figma specifications with full responsiveness and accessibility support.
          </p>
        </div>

      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all Figma design components including toggles, sliders, and date/time inputs in all sizes and states.',
      },
    },
  },
};
