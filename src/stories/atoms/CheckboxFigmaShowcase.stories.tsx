import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Design System/Checkbox Figma Showcase',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete Figma design showcase of all Checkbox variants, colors, shapes, and states.',
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
        Checkbox Component - Figma Design System
      </h1>
      
      {/* Round Checkboxes */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          marginBottom: '24px', 
          fontSize: '18px', 
          fontWeight: 500,
          color: '#333'
        }}>
          Round Checkboxes
        </h2>
        
        {/* Round - Top Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gap: '16px',
          marginBottom: '24px',
          alignItems: 'center'
        }}>
          {/* Row 1 - Black variants */}
          <Checkbox shape="round" variant="black" />
          <Checkbox shape="round" variant="black" />
          <Checkbox shape="round" variant="black" checked />
          <Checkbox shape="round" variant="black" checked />
          <Checkbox shape="round" variant="black" />
          <Checkbox shape="round" variant="black" />
          <Checkbox shape="round" variant="black" />
          <Checkbox shape="round" variant="black" />
          <Checkbox shape="round" variant="black" />
          <Checkbox shape="round" variant="black" />
          <Checkbox shape="round" variant="black" />
          <Checkbox shape="round" variant="black" />
          
          {/* Row 2 - Blue variants */}
          <Checkbox shape="round" variant="blue" />
          <Checkbox shape="round" variant="blue" />
          <Checkbox shape="round" variant="blue" checked />
          <Checkbox shape="round" variant="blue" checked />
          <Checkbox shape="round" variant="blue" />
          <Checkbox shape="round" variant="blue" />
          <Checkbox shape="round" variant="blue" />
          <Checkbox shape="round" variant="blue" />
          <Checkbox shape="round" variant="blue" />
          <Checkbox shape="round" variant="blue" />
          <Checkbox shape="round" variant="blue" />
          <Checkbox shape="round" variant="blue" />
          
          {/* Row 3 - Cyan variants */}
          <Checkbox shape="round" variant="cyan" />
          <Checkbox shape="round" variant="cyan" />
          <Checkbox shape="round" variant="cyan" checked />
          <Checkbox shape="round" variant="cyan" checked />
          <Checkbox shape="round" variant="cyan" />
          <Checkbox shape="round" variant="cyan" />
          <Checkbox shape="round" variant="cyan" />
          <Checkbox shape="round" variant="cyan" />
          <Checkbox shape="round" variant="cyan" />
          <Checkbox shape="round" variant="cyan" />
          <Checkbox shape="round" variant="cyan" />
          <Checkbox shape="round" variant="cyan" />
          
          {/* Row 4 - Yellow variants */}
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" checked />
          <Checkbox shape="round" variant="yellow" checked />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          
          {/* Row 5 - Gray variants */}
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" checked />
          <Checkbox shape="round" variant="gray" checked />
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          
          {/* Row 6 - Red variants */}
          <Checkbox shape="round" variant="red" />
          <Checkbox shape="round" variant="red" />
          <Checkbox shape="round" variant="red" checked />
          <Checkbox shape="round" variant="red" checked />
          <Checkbox shape="round" variant="red" />
          <Checkbox shape="round" variant="red" />
          <Checkbox shape="round" variant="red" />
          <Checkbox shape="round" variant="red" />
          <Checkbox shape="round" variant="red" />
          <Checkbox shape="round" variant="red" />
          <Checkbox shape="round" variant="red" />
          <Checkbox shape="round" variant="red" />
          
          {/* Row 7 - Green variants */}
          <Checkbox shape="round" variant="green" />
          <Checkbox shape="round" variant="green" />
          <Checkbox shape="round" variant="green" checked />
          <Checkbox shape="round" variant="green" checked />
          <Checkbox shape="round" variant="green" />
          <Checkbox shape="round" variant="green" />
          <Checkbox shape="round" variant="green" />
          <Checkbox shape="round" variant="green" />
          <Checkbox shape="round" variant="green" />
          <Checkbox shape="round" variant="green" />
          <Checkbox shape="round" variant="green" />
          <Checkbox shape="round" variant="green" />
          
          {/* Row 8 - Purple variants */}
          <Checkbox shape="round" variant="purple" />
          <Checkbox shape="round" variant="purple" />
          <Checkbox shape="round" variant="purple" checked />
          <Checkbox shape="round" variant="purple" checked />
          <Checkbox shape="round" variant="purple" />
          <Checkbox shape="round" variant="purple" />
          <Checkbox shape="round" variant="purple" />
          <Checkbox shape="round" variant="purple" />
          <Checkbox shape="round" variant="purple" />
          <Checkbox shape="round" variant="purple" />
          <Checkbox shape="round" variant="purple" />
          <Checkbox shape="round" variant="purple" />
          
          {/* Row 9 - Seafoam variants */}
          <Checkbox shape="round" variant="seafoam" />
          <Checkbox shape="round" variant="seafoam" />
          <Checkbox shape="round" variant="seafoam" checked />
          <Checkbox shape="round" variant="seafoam" checked />
          <Checkbox shape="round" variant="seafoam" />
          <Checkbox shape="round" variant="seafoam" />
          <Checkbox shape="round" variant="seafoam" />
          <Checkbox shape="round" variant="seafoam" />
          <Checkbox shape="round" variant="seafoam" />
          <Checkbox shape="round" variant="seafoam" />
          <Checkbox shape="round" variant="seafoam" />
          <Checkbox shape="round" variant="seafoam" />
          
          {/* Row 10 - Yellow variants */}
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" checked />
          <Checkbox shape="round" variant="yellow" checked />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
        </div>
        
        {/* Round - Right Section (Smaller grid) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '16px',
          maxWidth: '200px',
          marginLeft: '100px'
        }}>
          {/* Additional round variants */}
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          
          <Checkbox shape="round" variant="cyan" />
          <Checkbox shape="round" variant="cyan" />
          <Checkbox shape="round" variant="cyan" />
          <Checkbox shape="round" variant="cyan" />
          
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          <Checkbox shape="round" variant="gray" />
          
          <Checkbox shape="round" variant="red" />
          <Checkbox shape="round" variant="red" />
          <Checkbox shape="round" variant="red" />
          <Checkbox shape="round" variant="red" />
          
          <Checkbox shape="round" variant="green" />
          <Checkbox shape="round" variant="green" />
          <Checkbox shape="round" variant="green" />
          <Checkbox shape="round" variant="green" />
          
          <Checkbox shape="round" variant="purple" />
          <Checkbox shape="round" variant="purple" />
          <Checkbox shape="round" variant="purple" />
          <Checkbox shape="round" variant="purple" />
          
          <Checkbox shape="round" variant="seafoam" />
          <Checkbox shape="round" variant="seafoam" />
          <Checkbox shape="round" variant="seafoam" />
          <Checkbox shape="round" variant="seafoam" />
          
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
          <Checkbox shape="round" variant="yellow" />
        </div>
      </section>
      
      {/* Square Checkboxes */}
      <section>
        <h2 style={{ 
          marginBottom: '24px', 
          fontSize: '18px', 
          fontWeight: 500,
          color: '#333'
        }}>
          Square Checkboxes
        </h2>
        
        {/* Square - Main Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gap: '16px',
          marginBottom: '24px',
          alignItems: 'center'
        }}>
          {/* Row 1 - Black variants */}
          <Checkbox shape="square" variant="black" />
          <Checkbox shape="square" variant="black" />
          <Checkbox shape="square" variant="black" checked />
          <Checkbox shape="square" variant="black" checked />
          <Checkbox shape="square" variant="black" />
          <Checkbox shape="square" variant="black" />
          <Checkbox shape="square" variant="black" />
          <Checkbox shape="square" variant="black" />
          <Checkbox shape="square" variant="black" />
          <Checkbox shape="square" variant="black" />
          <Checkbox shape="square" variant="black" />
          <Checkbox shape="square" variant="black" />
          
          {/* Row 2 - Blue variants */}
          <Checkbox shape="square" variant="blue" />
          <Checkbox shape="square" variant="blue" />
          <Checkbox shape="square" variant="blue" checked />
          <Checkbox shape="square" variant="blue" checked />
          <Checkbox shape="square" variant="blue" />
          <Checkbox shape="square" variant="blue" />
          <Checkbox shape="square" variant="blue" />
          <Checkbox shape="square" variant="blue" />
          <Checkbox shape="square" variant="blue" />
          <Checkbox shape="square" variant="blue" />
          <Checkbox shape="square" variant="blue" />
          <Checkbox shape="square" variant="blue" />
          
          {/* Row 3 - Cyan variants */}
          <Checkbox shape="square" variant="cyan" />
          <Checkbox shape="square" variant="cyan" />
          <Checkbox shape="square" variant="cyan" checked />
          <Checkbox shape="square" variant="cyan" checked />
          <Checkbox shape="square" variant="cyan" />
          <Checkbox shape="square" variant="cyan" />
          <Checkbox shape="square" variant="cyan" />
          <Checkbox shape="square" variant="cyan" />
          <Checkbox shape="square" variant="cyan" />
          <Checkbox shape="square" variant="cyan" />
          <Checkbox shape="square" variant="cyan" />
          <Checkbox shape="square" variant="cyan" />
          
          {/* Row 4 - Yellow variants */}
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" checked />
          <Checkbox shape="square" variant="yellow" checked />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          
          {/* Row 5 - Gray variants */}
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" checked />
          <Checkbox shape="square" variant="gray" checked />
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          
          {/* Row 6 - Red variants */}
          <Checkbox shape="square" variant="red" />
          <Checkbox shape="square" variant="red" />
          <Checkbox shape="square" variant="red" checked />
          <Checkbox shape="square" variant="red" checked />
          <Checkbox shape="square" variant="red" />
          <Checkbox shape="square" variant="red" />
          <Checkbox shape="square" variant="red" />
          <Checkbox shape="square" variant="red" />
          <Checkbox shape="square" variant="red" />
          <Checkbox shape="square" variant="red" />
          <Checkbox shape="square" variant="red" />
          <Checkbox shape="square" variant="red" />
          
          {/* Row 7 - Green variants */}
          <Checkbox shape="square" variant="green" />
          <Checkbox shape="square" variant="green" />
          <Checkbox shape="square" variant="green" checked />
          <Checkbox shape="square" variant="green" checked />
          <Checkbox shape="square" variant="green" />
          <Checkbox shape="square" variant="green" />
          <Checkbox shape="square" variant="green" />
          <Checkbox shape="square" variant="green" />
          <Checkbox shape="square" variant="green" />
          <Checkbox shape="square" variant="green" />
          <Checkbox shape="square" variant="green" />
          <Checkbox shape="square" variant="green" />
          
          {/* Row 8 - Purple variants */}
          <Checkbox shape="square" variant="purple" />
          <Checkbox shape="square" variant="purple" />
          <Checkbox shape="square" variant="purple" checked />
          <Checkbox shape="square" variant="purple" checked />
          <Checkbox shape="square" variant="purple" />
          <Checkbox shape="square" variant="purple" />
          <Checkbox shape="square" variant="purple" />
          <Checkbox shape="square" variant="purple" />
          <Checkbox shape="square" variant="purple" />
          <Checkbox shape="square" variant="purple" />
          <Checkbox shape="square" variant="purple" />
          <Checkbox shape="square" variant="purple" />
          
          {/* Row 9 - Seafoam variants */}
          <Checkbox shape="square" variant="seafoam" />
          <Checkbox shape="square" variant="seafoam" />
          <Checkbox shape="square" variant="seafoam" checked />
          <Checkbox shape="square" variant="seafoam" checked />
          <Checkbox shape="square" variant="seafoam" />
          <Checkbox shape="square" variant="seafoam" />
          <Checkbox shape="square" variant="seafoam" />
          <Checkbox shape="square" variant="seafoam" />
          <Checkbox shape="square" variant="seafoam" />
          <Checkbox shape="square" variant="seafoam" />
          <Checkbox shape="square" variant="seafoam" />
          <Checkbox shape="square" variant="seafoam" />
          
          {/* Row 10 - Yellow variants */}
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" checked />
          <Checkbox shape="square" variant="yellow" checked />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
        </div>
        
        {/* Square - Right Section (Smaller grid) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '16px',
          maxWidth: '200px',
          marginLeft: '100px'
        }}>
          {/* Additional square variants */}
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          
          <Checkbox shape="square" variant="cyan" />
          <Checkbox shape="square" variant="cyan" />
          <Checkbox shape="square" variant="cyan" />
          <Checkbox shape="square" variant="cyan" />
          
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          <Checkbox shape="square" variant="gray" />
          
          <Checkbox shape="square" variant="red" />
          <Checkbox shape="square" variant="red" />
          <Checkbox shape="square" variant="red" />
          <Checkbox shape="square" variant="red" />
          
          <Checkbox shape="square" variant="green" />
          <Checkbox shape="square" variant="green" />
          <Checkbox shape="square" variant="green" />
          <Checkbox shape="square" variant="green" />
          
          <Checkbox shape="square" variant="purple" />
          <Checkbox shape="square" variant="purple" />
          <Checkbox shape="square" variant="purple" />
          <Checkbox shape="square" variant="purple" />
          
          <Checkbox shape="square" variant="seafoam" />
          <Checkbox shape="square" variant="seafoam" />
          <Checkbox shape="square" variant="seafoam" />
          <Checkbox shape="square" variant="seafoam" />
          
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
          <Checkbox shape="square" variant="yellow" />
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all Checkbox variants matching the Figma design system, including both round and square shapes with all available color variants.',
      },
    },
  },
};
