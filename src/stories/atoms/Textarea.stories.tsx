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
# Textarea Component

A comprehensive multi-line text input component built on the Echo design system, perfect for longer form content like descriptions, comments, and messages.

## Key Features

### Size Variants
- **Small**: Compact design for space-constrained layouts
- **Default**: Standard comfortable sizing for most use cases
- **Large**: Prominent sizing with enhanced readability

### Complete State Management
- **Default**: Ready for user interaction with placeholder text
- **Focus**: Clear visual indication of active textarea
- **Typing**: Real-time cursor animation and interaction feedback
- **Filled**: Visual distinction between empty and populated fields
- **Error**: Validation failure with descriptive error messaging
- **Warning**: Caution states with helpful user guidance
- **Success**: Confirmation of valid input with positive feedback

### Enhanced Functionality
- **Flexible Sizing**: Configurable rows, min/max height, and resize behavior
- **Clear Button**: Optional close/clear functionality for quick content removal
- **Message Support**: Built-in validation messaging system
- **Label Integration**: Semantic label association for accessibility

### Performance & Accessibility
- **ResizeObserver Optimization**: Smooth performance without layout thrashing
- **CSS Containment**: Efficient rendering with layout and style containment
- **Hardware Acceleration**: GPU-accelerated cursor animations
- **Screen Reader Support**: Proper ARIA attributes and semantic markup
- **Keyboard Navigation**: Full functionality without mouse interaction

### Design System Integration
- Uses comprehensive Echo design tokens for consistent styling
- Responsive design adapts to all screen sizes
- Consistent with Input and Tag components for unified form experiences
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'filled', 'focus', 'typing', 'error', 'warning', 'success'],
      description: 'Visual state of the textarea',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant of the textarea',
    },
    resize: {
      control: { type: 'select' },
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Resize behavior',
    },
    showClose: {
      control: { type: 'boolean' },
      description: 'Show close/clear button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    rows: {
      control: { type: 'number', min: 2, max: 10 },
      description: 'Number of visible text lines',
    },
  },
  args: {
    placeholder: 'Placeholder text',
    showClose: true,
    disabled: false,
    size: 'default',
    resize: 'vertical',
    rows: 4,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Small Size Stories
export const SmallDefault: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    state: 'default',
  },
};

export const SmallFilled: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    state: 'filled',
    value: 'This is a filled input',
  },
};

export const SmallFocus: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    state: 'focus',
    placeholder: '|',
  },
};

export const SmallTyping: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    state: 'typing',
    value: 'This is me typin|',
  },
};

export const SmallError: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    state: 'error',
    value: 'This is a filled input',
    message: 'This is an error associated with the input',
  },
};

export const SmallWarning: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    state: 'warning',
    value: 'This is a filled input',
    message: 'This is a warning associated with the input',
  },
};

export const SmallSuccess: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    state: 'success',
    value: 'This is a filled input',
    message: 'This is a success associated with the input',
  },
};

// Default Size Stories
export const Default: Story = {
  args: {
    label: 'Input name',
    size: 'default',
    state: 'default',
  },
};

export const DefaultFilled: Story = {
  args: {
    label: 'Input name',
    size: 'default',
    state: 'filled',
    value: 'This is a filled input',
  },
};

export const DefaultFocus: Story = {
  args: {
    label: 'Input name',
    size: 'default',
    state: 'focus',
    placeholder: '|',
  },
};

export const DefaultTyping: Story = {
  args: {
    label: 'Input name',
    size: 'default',
    state: 'typing',
    value: 'This is me typin|',
  },
};

export const DefaultError: Story = {
  args: {
    label: 'Input name',
    size: 'default',
    state: 'error',
    value: 'This is a filled input',
    message: 'This is an error associated with the input',
  },
};

export const DefaultWarning: Story = {
  args: {
    label: 'Input name',
    size: 'default',
    state: 'warning',
    value: 'This is a filled input',
    message: 'This is a warning associated with the input',
  },
};

export const DefaultSuccess: Story = {
  args: {
    label: 'Input name',
    size: 'default',
    state: 'success',
    value: 'This is a filled input',
    message: 'This is a success associated with the input',
  },
};

// Large Size Stories
export const LargeDefault: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    state: 'default',
  },
};

export const LargeFilled: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    state: 'filled',
    value: 'This is a filled input',
  },
};

export const LargeFocus: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    state: 'focus',
    placeholder: '|',
  },
};

export const LargeTyping: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    state: 'typing',
    value: 'This is me typin|',
  },
};

export const LargeError: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    state: 'error',
    value: 'This is a filled input',
    message: 'This is an error associated with the input',
  },
};

export const LargeWarning: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    state: 'warning',
    value: 'This is a filled input',
    message: 'This is a warning associated with the input',
  },
};

export const LargeSuccess: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    state: 'success',
    value: 'This is a filled input',
    message: 'This is a success associated with the input',
  },
};

// Additional Variants
export const WithoutLabel: Story = {
  args: {
    state: 'default',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Input name',
    state: 'default',
    disabled: true,
    value: 'This is a disabled textarea',
  },
};

export const WithoutCloseButton: Story = {
  args: {
    label: 'Input name',
    state: 'default',
    showClose: false,
  },
};

export const NoResize: Story = {
  args: {
    label: 'Input name',
    state: 'default',
    resize: 'none',
  },
};
