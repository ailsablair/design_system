import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Textarea component provides a multi-line text input with comprehensive validation states,
interactive feedback, and responsive design. Built to match Figma design specifications exactly.

## Features
- **3 Sizes**: Small, Default, and Large variants with consistent spacing
- **7 States**: Default, Filled, Focus, Typing, Error, Warning, and Success
- **Interactive Elements**: Clear button, character counting, validation messages
- **Accessible**: Full keyboard navigation, screen reader support, ARIA compliance
- **Responsive**: Adapts gracefully to different screen sizes
- **Design System**: Uses consistent design tokens and typography

## States Overview
- **Default**: Ready for user interaction with placeholder text
- **Filled**: Contains user input content
- **Focus**: Clear visual indication of active textarea with cursor
- **Typing**: Real-time typing simulation with cursor animation
- **Error**: Red border with error message below
- **Warning**: Orange border with warning message below
- **Success**: Green border with success message below

## Usage
Perfect for forms, comments, descriptions, and any multi-line text input scenarios.
The component maintains brand consistency while providing excellent user experience.
        `
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the textarea'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when empty'
    },
    value: {
      control: 'text',
      description: 'Current textarea value'
    },
    state: {
      control: 'select',
      options: ['default', 'filled', 'focus', 'typing', 'error', 'warning', 'success'],
      description: 'Visual state of the textarea'
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant of the textarea'
    },
    message: {
      control: 'text',
      description: 'Validation or helper message'
    },
    showClose: {
      control: 'boolean',
      description: 'Show clear button'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    required: {
      control: 'boolean',
      description: 'Required field indicator'
    }
  },
  args: {
    label: 'Input name',
    placeholder: 'Placeholder text',
    size: 'default',
    state: 'default',
    showClose: true
  }
};

export default meta;
type Story = StoryObj<typeof Textarea>;

// Basic Examples
export const Default: Story = {
  args: {
    state: 'default'
  }
};

export const Filled: Story = {
  args: {
    state: 'filled',
    value: 'This is a filled input'
  }
};

export const Focus: Story = {
  args: {
    state: 'focus'
  }
};

export const Typing: Story = {
  args: {
    state: 'typing',
    value: 'This is me typin|'
  }
};

// Size Variants - Figma Design Showcase
export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Textarea Size Variants
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          Three sizes available: Small, Default, and Large
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <Textarea 
            label="Small Textarea"
            size="small" 
            state="default"
            placeholder="Placeholder text"
          />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Small (14px)</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Textarea 
            label="Default Textarea"
            size="default" 
            state="default"
            placeholder="Placeholder text"
          />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Default (16px)</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Textarea 
            label="Large Textarea"
            size="large" 
            state="default"
            placeholder="Placeholder text"
          />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Large (18px)</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All three size variants showing consistent spacing and typography scaling.'
      }
    }
  }
};

// All States Showcase - Figma Design
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Textarea Component States
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          Comprehensive showcase of all interaction and validation states
        </p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '24px',
        width: '100%',
        maxWidth: '1200px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <Textarea state="default" />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Default</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Textarea state="filled" value="This is a filled input" />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Filled</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Textarea state="focus" />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Focus</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Textarea state="typing" value="This is me typin|" />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Typing</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Textarea state="error" value="This is a filled input" />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Error</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Textarea state="warning" value="This is a filled input" />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Warning</div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Textarea state="success" value="This is a filled input" />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Success</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all textarea states including validation and interaction states.'
      }
    }
  }
};

// Small Size States
export const SmallSizeStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Small Size - All States
        </h3>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '24px',
        width: '100%'
      }}>
        <Textarea size="small" state="default" />
        <Textarea size="small" state="filled" value="This is a filled input" />
        <Textarea size="small" state="focus" />
        <Textarea size="small" state="typing" value="This is me typin|" />
        <Textarea size="small" state="error" value="This is a filled input" />
        <Textarea size="small" state="warning" value="This is a filled input" />
        <Textarea size="small" state="success" value="This is a filled input" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Small size variant showing all possible states and interactions.'
      }
    }
  }
};

// Default Size States
export const DefaultSizeStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Default Size - All States
        </h3>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '24px',
        width: '100%'
      }}>
        <Textarea size="default" state="default" />
        <Textarea size="default" state="filled" value="This is a filled input" />
        <Textarea size="default" state="focus" />
        <Textarea size="default" state="typing" value="This is me typin|" />
        <Textarea size="default" state="error" value="This is a filled input" />
        <Textarea size="default" state="warning" value="This is a filled input" />
        <Textarea size="default" state="success" value="This is a filled input" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default size variant showing all possible states and interactions.'
      }
    }
  }
};

// Large Size States
export const LargeSizeStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Large Size - All States
        </h3>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '24px',
        width: '100%'
      }}>
        <Textarea size="large" state="default" />
        <Textarea size="large" state="filled" value="This is a filled input" />
        <Textarea size="large" state="focus" />
        <Textarea size="large" state="typing" value="This is me typin|" />
        <Textarea size="large" state="error" value="This is a filled input" />
        <Textarea size="large" state="warning" value="This is a filled input" />
        <Textarea size="large" state="success" value="This is a filled input" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Large size variant showing all possible states and interactions.'
      }
    }
  }
};

// Validation States
export const ValidationStates: Story = {
  args: {
    state: 'error',
    value: 'This is a filled input'
  }
};

export const ErrorState: Story = {
  args: {
    state: 'error',
    value: 'This is a filled input'
  }
};

export const WarningState: Story = {
  args: {
    state: 'warning',
    value: 'This is a filled input'
  }
};

export const SuccessState: Story = {
  args: {
    state: 'success',
    value: 'This is a filled input'
  }
};

// Interactive Example
export const Interactive: Story = {
  args: {
    state: 'default',
    showClose: true,
    onChange: (e) => console.log('Textarea changed:', e.target.value),
    onClose: () => console.log('Close button clicked'),
    onFocus: () => console.log('Textarea focused'),
    onBlur: () => console.log('Textarea blurred')
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive textarea with event handlers. Check the console for event logs.'
      }
    }
  }
};

// Disabled State
export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'This is a disabled textarea',
    showClose: false
  }
};

// Required Field
export const Required: Story = {
  args: {
    required: true,
    state: 'default'
  }
};

// Custom Messages
export const CustomMessages: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <Textarea 
        state="error" 
        value="This has an error"
        message="Custom error message for this textarea"
      />
      <Textarea 
        state="warning" 
        value="This has a warning"
        message="Custom warning message for this textarea"
      />
      <Textarea 
        state="success" 
        value="This is successful"
        message="Custom success message for this textarea"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Textareas with custom validation messages instead of default ones.'
      }
    }
  }
};

// Character Count
export const WithCharacterCount: Story = {
  args: {
    value: 'This textarea shows character count',
    showCharacterCount: true,
    maxLength: 100
  }
};

// Complete Feature Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 16px 0', fontSize: '24px', fontWeight: '600' }}>
          Textarea Component - Complete Showcase
        </h2>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          Comprehensive demonstration of all features, states, and variations matching Figma design specifications.
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
        <Textarea 
          label="Basic Example"
          placeholder="Enter your message here..."
          size="default"
          state="default"
        />
        
        <Textarea 
          label="Required Field"
          placeholder="This field is required"
          required={true}
          state="error"
          value=""
        />
        
        <Textarea 
          label="With Character Count"
          value="This textarea demonstrates character counting functionality."
          showCharacterCount={true}
          maxLength={200}
          state="default"
        />
        
        <Textarea 
          label="Success State"
          value="Perfect! Your input looks great."
          state="success"
          showCharacterCount={true}
        />
        
        <Textarea 
          label="Large Size Example"
          placeholder="This is a large textarea for longer content..."
          size="large"
          state="focus"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase demonstrating all features including character counting, validation states, and size variants working together.'
      }
    }
  }
};
