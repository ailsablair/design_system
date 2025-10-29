import type { Meta, StoryObj } from '@storybook/react';
import { ProgressCircle } from './ProgressCircle';

const meta = {
  title: 'Atoms/🧱 Building Blocks/ProgressCircle',
  component: ProgressCircle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The ProgressCircle is a fundamental building block component used to represent individual progress indicators. 
It supports different sizes and states to create flexible progress visualization patterns.

**Key Features:**
- **Sizes**: Small (8px), Default (12px), Large (16px)
- **States**: Default (unfilled), Filled (completed), Error, Disabled
- **Accessibility**: Full ARIA support with role and state attributes
- **Design System Integration**: Uses Echo design tokens for consistent styling
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'filled', 'error', 'disabled'],
      description: 'Visual state of the progress circle',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant of the circle',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

// === BASIC STORIES ===

export const Default: Story = {
  args: {
    state: 'default',
    size: 'default',
  },
};

export const Filled: Story = {
  args: {
    state: 'filled',
    size: 'default',
  },
};

export const Error: Story = {
  args: {
    state: 'error',
    size: 'default',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    size: 'default',
  },
};

// === SIZE VARIANTS ===

export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <ProgressCircle size="small" state="filled" />
        <span style={{ fontSize: '12px', color: '#666' }}>Small (8px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <ProgressCircle size="default" state="filled" />
        <span style={{ fontSize: '12px', color: '#666' }}>Default (12px)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <ProgressCircle size="large" state="filled" />
        <span style={{ fontSize: '12px', color: '#666' }}>Large (16px)</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available size variants with their pixel dimensions.',
      },
    },
  },
};

// === STATE SHOWCASE ===

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {(['small', 'default', 'large'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600, textTransform: 'capitalize' }}>
            {size} Size
          </h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <ProgressCircle size={size} state="default" />
              <span style={{ fontSize: '12px', color: '#666' }}>Default</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <ProgressCircle size={size} state="filled" />
              <span style={{ fontSize: '12px', color: '#666' }}>Filled</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <ProgressCircle size={size} state="error" />
              <span style={{ fontSize: '12px', color: '#666' }}>Error</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <ProgressCircle size={size} state="disabled" />
              <span style={{ fontSize: '12px', color: '#666' }}>Disabled</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all state and size combinations available for the ProgressCircle component.',
      },
    },
  },
};

// === DESIGN SYSTEM SHOWCASE ===

export const DesignSystemShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 600 }}>
          Building Block Component
        </h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666', lineHeight: 1.5 }}>
          ProgressCircle serves as a fundamental building block for creating complex progress indicators, 
          milestone trackers, and step indicators throughout the Echo design system.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '24px',
          marginTop: '24px'
        }}>
          <div style={{ 
            padding: '16px', 
            border: '1px solid #E5E7EB', 
            borderRadius: '8px',
            backgroundColor: '#FAFAFA'
          }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>Default State</h4>
            <ProgressCircle size="large" state="default" />
            <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>
              Unfilled state for incomplete steps
            </p>
          </div>
          
          <div style={{ 
            padding: '16px', 
            border: '1px solid #E5E7EB', 
            borderRadius: '8px',
            backgroundColor: '#FAFAFA'
          }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>Filled State</h4>
            <ProgressCircle size="large" state="filled" />
            <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>
              Completed state using primary color
            </p>
          </div>
          
          <div style={{ 
            padding: '16px', 
            border: '1px solid #E5E7EB', 
            borderRadius: '8px',
            backgroundColor: '#FAFAFA'
          }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>Error State</h4>
            <ProgressCircle size="large" state="error" />
            <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>
              Error state for failed steps
            </p>
          </div>
          
          <div style={{ 
            padding: '16px', 
            border: '1px solid #E5E7EB', 
            borderRadius: '8px',
            backgroundColor: '#FAFAFA'
          }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>Disabled State</h4>
            <ProgressCircle size="large" state="disabled" />
            <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>
              Inactive state for disabled progress
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Design system showcase demonstrating the ProgressCircle as a versatile building block component.',
      },
    },
  },
};

// === ACCESSIBILITY DEMO ===

export const AccessibilityDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Accessibility Features</h4>
      <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
        Try using keyboard navigation (Tab) and screen reader to test accessibility features.
      </p>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '16px' }}>
        <ProgressCircle 
          size="large" 
          state="default" 
          aria-label="Step 1 of 5 - Not completed"
        />
        <ProgressCircle 
          size="large" 
          state="filled" 
          aria-label="Step 2 of 5 - Completed"
        />
        <ProgressCircle 
          size="large" 
          state="error" 
          aria-label="Step 3 of 5 - Failed with error"
        />
        <ProgressCircle 
          size="large" 
          state="disabled" 
          aria-label="Step 4 of 5 - Disabled"
        />
      </div>
      
      <div style={{ 
        padding: '16px', 
        backgroundColor: '#F3F4F6', 
        borderRadius: '8px',
        fontSize: '12px',
        color: '#374151'
      }}>
        <strong>ARIA Attributes:</strong>
        <ul style={{ margin: '8px 0 0 0', paddingLeft: '16px' }}>
          <li>Uses appropriate <code>role</code> attributes (progressbar/img)</li>
          <li>Includes <code>aria-label</code> for descriptive text</li>
          <li>Supports <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code></li>
          <li>Focus indicators for keyboard navigation</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of accessibility features including ARIA attributes and keyboard navigation support.',
      },
    },
  },
};
