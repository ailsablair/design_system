import type { Meta, StoryObj } from '@storybook/react';
import { Button, CloseCircleIcon } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button/Error Buttons (Figma)',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Error Button variants exactly matching the Figma design specifications.

## Design Specifications
- **Background**: #CE2031 (Red)
- **Border**: 0.5px solid #FFF3F3 (Light red)
- **Text**: White (#FFFFFF)
- **Icon**: Close circle with 0.6 opacity
- **Font Weight**: Medium (500)
- **Border Radius**: 4px

## Size Variants
- **Small**: 30px height, 14px icon
- **Default**: 42px height, 18px icon  
- **Large**: 52px height, 20px icon

## Usage
Use for destructive actions like delete, cancel, or error states.
        `
      }
    }
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Button size variant'
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'clicked', 'focused', 'disabled'],
      description: 'Button state'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

// Individual size examples
export const SmallErrorButton: Story = {
  args: {
    children: 'Error button',
    size: 'small',
    type: 'error',
    leadingIcon: <CloseCircleIcon size={14} />
  }
};

export const DefaultErrorButton: Story = {
  args: {
    children: 'Error button',
    size: 'default',
    type: 'error',
    leadingIcon: <CloseCircleIcon size={18} />
  }
};

export const LargeErrorButton: Story = {
  args: {
    children: 'Error button',
    size: 'large',
    type: 'error',
    leadingIcon: <CloseCircleIcon size={20} />
  }
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Error Button Sizes - Figma Design
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          All size variants with close circle icons and proper typography
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <Button 
            size="small" 
            type="error" 
            leadingIcon={<CloseCircleIcon size={14} />}
          >
            Error button
          </Button>
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Small (30px)</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Button 
            size="default" 
            type="error" 
            leadingIcon={<CloseCircleIcon size={18} />}
          >
            Error button
          </Button>
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Default (42px)</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Button 
            size="large" 
            type="error" 
            leadingIcon={<CloseCircleIcon size={20} />}
          >
            Error button
          </Button>
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Large (52px)</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All three error button sizes matching the Figma specifications exactly.'
      }
    }
  }
};

// States showcase
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Error Button States
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          All interaction states for the default size error button
        </p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(5, 1fr)', 
        gap: '24px',
        alignItems: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <Button 
            size="default" 
            type="error" 
            state="default"
            leadingIcon={<CloseCircleIcon size={18} />}
          >
            Error button
          </Button>
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Default</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Button 
            size="default" 
            type="error" 
            state="hover"
            leadingIcon={<CloseCircleIcon size={18} />}
          >
            Error button
          </Button>
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Hover</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Button 
            size="default" 
            type="error" 
            state="clicked"
            leadingIcon={<CloseCircleIcon size={18} />}
          >
            Error button
          </Button>
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Clicked</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Button 
            size="default" 
            type="error" 
            state="focused"
            leadingIcon={<CloseCircleIcon size={18} />}
          >
            Error button
          </Button>
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Focused</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Button 
            size="default" 
            type="error" 
            disabled={true}
            leadingIcon={<CloseCircleIcon size={18} />}
          >
            Error button
          </Button>
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Disabled</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All interaction states showing proper styling and typography changes.'
      }
    }
  }
};

// Size and state matrix
export const SizeStateMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Error Button Matrix
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          Complete matrix of all sizes and key states
        </p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'auto repeat(3, 1fr)', 
        gap: '16px',
        alignItems: 'center'
      }}>
        {/* Header row */}
        <div></div>
        <div style={{ textAlign: 'center', fontWeight: '600', fontSize: '14px' }}>Default</div>
        <div style={{ textAlign: 'center', fontWeight: '600', fontSize: '14px' }}>Hover</div>
        <div style={{ textAlign: 'center', fontWeight: '600', fontSize: '14px' }}>Disabled</div>
        
        {/* Small row */}
        <div style={{ fontWeight: '600', fontSize: '14px' }}>Small</div>
        <div style={{ textAlign: 'center' }}>
          <Button size="small" type="error" leadingIcon={<CloseCircleIcon size={14} />}>
            Error button
          </Button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Button size="small" type="error" state="hover" leadingIcon={<CloseCircleIcon size={14} />}>
            Error button
          </Button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Button size="small" type="error" disabled leadingIcon={<CloseCircleIcon size={14} />}>
            Error button
          </Button>
        </div>
        
        {/* Default row */}
        <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
        <div style={{ textAlign: 'center' }}>
          <Button size="default" type="error" leadingIcon={<CloseCircleIcon size={18} />}>
            Error button
          </Button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Button size="default" type="error" state="hover" leadingIcon={<CloseCircleIcon size={18} />}>
            Error button
          </Button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Button size="default" type="error" disabled leadingIcon={<CloseCircleIcon size={18} />}>
            Error button
          </Button>
        </div>
        
        {/* Large row */}
        <div style={{ fontWeight: '600', fontSize: '14px' }}>Large</div>
        <div style={{ textAlign: 'center' }}>
          <Button size="large" type="error" leadingIcon={<CloseCircleIcon size={20} />}>
            Error button
          </Button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Button size="large" type="error" state="hover" leadingIcon={<CloseCircleIcon size={20} />}>
            Error button
          </Button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Button size="large" type="error" disabled leadingIcon={<CloseCircleIcon size={20} />}>
            Error button
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete matrix showing all size and state combinations for error buttons.'
      }
    }
  }
};

// Icon variations
export const IconVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Error Button Icon Variations
        </h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Error buttons with and without icons
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button size="default" type="error" leadingIcon={<CloseCircleIcon size={18} />}>
          With Icon
        </Button>
        
        <Button size="default" type="error">
          No Icon
        </Button>
        
        <Button 
          size="default" 
          type="error" 
          iconOnly 
          icon={<CloseCircleIcon size={18} />}
          aria-label="Close error"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Error buttons with different icon configurations including icon-only variant.'
      }
    }
  }
};

// Interactive example
export const Interactive: Story = {
  args: {
    children: 'Delete Item',
    size: 'default',
    type: 'error',
    leadingIcon: <CloseCircleIcon size={18} />,
    onClick: () => alert('Error action triggered!')
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive error button with click handler. Click to see the action.'
      }
    }
  }
};

// Loading state
export const Loading: Story = {
  args: {
    children: 'Deleting...',
    size: 'default',
    type: 'error',
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Error button in loading state, useful for async destructive operations.'
      }
    }
  }
};
