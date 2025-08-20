import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Design System/RadioButton Figma Showcase',
  component: RadioButton,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete Figma design showcase of all RadioButton variants, colors, and states.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      padding: '40px', 
      backgroundColor: '#f8f9fa',
      fontFamily: 'var(--type-typeface-roboto-flex)'
    }}>
      <h1 style={{ 
        marginBottom: '32px', 
        fontSize: '24px', 
        fontWeight: 600,
        color: '#1a1a1a'
      }}>
        RadioButton Component - Figma Design System
      </h1>
      
      {/* Radio Buttons - Main Grid */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          marginBottom: '24px', 
          fontSize: '18px', 
          fontWeight: 500,
          color: '#333'
        }}>
          Radio Button Variants
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gap: '16px',
          marginBottom: '24px',
          alignItems: 'center'
        }}>
          {/* Row 1 - Black variants */}
          <RadioButton variant="black" />
          <RadioButton variant="black" />
          <RadioButton variant="black" selected />
          <RadioButton variant="black" selected />
          <RadioButton variant="black" />
          <RadioButton variant="black" />
          <RadioButton variant="black" />
          <RadioButton variant="black" />
          <RadioButton variant="black" />
          <RadioButton variant="black" />
          <RadioButton variant="black" />
          <RadioButton variant="black" />
          
          {/* Row 2 - Blue variants */}
          <RadioButton variant="blue" />
          <RadioButton variant="blue" />
          <RadioButton variant="blue" selected />
          <RadioButton variant="blue" selected />
          <RadioButton variant="blue" />
          <RadioButton variant="blue" />
          <RadioButton variant="blue" />
          <RadioButton variant="blue" />
          <RadioButton variant="blue" />
          <RadioButton variant="blue" />
          <RadioButton variant="blue" />
          <RadioButton variant="blue" />
          
          {/* Row 3 - Cyan variants */}
          <RadioButton variant="cyan" />
          <RadioButton variant="cyan" />
          <RadioButton variant="cyan" selected />
          <RadioButton variant="cyan" selected />
          <RadioButton variant="cyan" />
          <RadioButton variant="cyan" />
          <RadioButton variant="cyan" />
          <RadioButton variant="cyan" />
          <RadioButton variant="cyan" />
          <RadioButton variant="cyan" />
          <RadioButton variant="cyan" />
          <RadioButton variant="cyan" />
          
          {/* Row 4 - Yellow variants */}
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" selected />
          <RadioButton variant="yellow" selected />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          
          {/* Row 5 - Gray variants */}
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          <RadioButton variant="gray" selected />
          <RadioButton variant="gray" selected />
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          
          {/* Row 6 - Red variants */}
          <RadioButton variant="red" />
          <RadioButton variant="red" />
          <RadioButton variant="red" selected />
          <RadioButton variant="red" selected />
          <RadioButton variant="red" />
          <RadioButton variant="red" />
          <RadioButton variant="red" />
          <RadioButton variant="red" />
          <RadioButton variant="red" />
          <RadioButton variant="red" />
          <RadioButton variant="red" />
          <RadioButton variant="red" />
          
          {/* Row 7 - Green variants */}
          <RadioButton variant="green" />
          <RadioButton variant="green" />
          <RadioButton variant="green" selected />
          <RadioButton variant="green" selected />
          <RadioButton variant="green" />
          <RadioButton variant="green" />
          <RadioButton variant="green" />
          <RadioButton variant="green" />
          <RadioButton variant="green" />
          <RadioButton variant="green" />
          <RadioButton variant="green" />
          <RadioButton variant="green" />
          
          {/* Row 8 - Purple variants */}
          <RadioButton variant="purple" />
          <RadioButton variant="purple" />
          <RadioButton variant="purple" selected />
          <RadioButton variant="purple" selected />
          <RadioButton variant="purple" />
          <RadioButton variant="purple" />
          <RadioButton variant="purple" />
          <RadioButton variant="purple" />
          <RadioButton variant="purple" />
          <RadioButton variant="purple" />
          <RadioButton variant="purple" />
          <RadioButton variant="purple" />
          
          {/* Row 9 - Seafoam variants */}
          <RadioButton variant="seafoam" />
          <RadioButton variant="seafoam" />
          <RadioButton variant="seafoam" selected />
          <RadioButton variant="seafoam" selected />
          <RadioButton variant="seafoam" />
          <RadioButton variant="seafoam" />
          <RadioButton variant="seafoam" />
          <RadioButton variant="seafoam" />
          <RadioButton variant="seafoam" />
          <RadioButton variant="seafoam" />
          <RadioButton variant="seafoam" />
          <RadioButton variant="seafoam" />
          
          {/* Row 10 - Yellow variants */}
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" selected />
          <RadioButton variant="yellow" selected />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
        </div>
        
        {/* Right Section (Smaller grid) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '16px',
          maxWidth: '200px',
          marginLeft: '100px'
        }}>
          {/* Additional radio button variants */}
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          
          <RadioButton variant="cyan" />
          <RadioButton variant="cyan" />
          <RadioButton variant="cyan" />
          <RadioButton variant="cyan" />
          
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          <RadioButton variant="gray" />
          
          <RadioButton variant="red" />
          <RadioButton variant="red" />
          <RadioButton variant="red" />
          <RadioButton variant="red" />
          
          <RadioButton variant="green" />
          <RadioButton variant="green" />
          <RadioButton variant="green" />
          <RadioButton variant="green" />
          
          <RadioButton variant="purple" />
          <RadioButton variant="purple" />
          <RadioButton variant="purple" />
          <RadioButton variant="purple" />
          
          <RadioButton variant="seafoam" />
          <RadioButton variant="seafoam" />
          <RadioButton variant="seafoam" />
          <RadioButton variant="seafoam" />
          
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
          <RadioButton variant="yellow" />
        </div>
      </section>
      
      {/* Interactive Example */}
      <section>
        <h2 style={{ 
          marginBottom: '24px', 
          fontSize: '18px', 
          fontWeight: 500,
          color: '#333'
        }}>
          Interactive Color Groups
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '32px',
          maxWidth: '800px'
        }}>
          {/* Primary Colors Group */}
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '16px' }}>Primary Colors</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <RadioButton variant="black" label="Black" name="primary-group" />
              <RadioButton variant="blue" label="Blue" name="primary-group" />
              <RadioButton variant="cyan" label="Cyan" name="primary-group" selected />
              <RadioButton variant="yellow" label="Yellow" name="primary-group" />
            </div>
          </div>
          
          {/* Status Colors Group */}
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '16px' }}>Status Colors</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <RadioButton variant="red" label="Error" name="status-group" />
              <RadioButton variant="green" label="Success" name="status-group" selected />
              <RadioButton variant="yellow" label="Warning" name="status-group" />
              <RadioButton variant="gray" label="Neutral" name="status-group" />
            </div>
          </div>
          
          {/* Extended Colors Group */}
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '16px' }}>Extended Colors</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <RadioButton variant="purple" label="Purple" name="extended-group" />
              <RadioButton variant="seafoam" label="Seafoam" name="extended-group" selected />
              <RadioButton variant="primary" label="Primary" name="extended-group" />
              <RadioButton variant="default" label="Default" name="extended-group" />
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all RadioButton variants matching the Figma design system, including all available color variants and interactive examples.',
      },
    },
  },
};
