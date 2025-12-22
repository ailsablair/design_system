import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import type { TagData } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Input Component

The Input component is a comprehensive form element built on the Echo design system with extensive customization options and built-in accessibility features.

## Key Features

### Multiple Variants
- **Simple Input**: Traditional text input with optional leading icons
- **Tag Input**: Multi-select input with tag functionality for complex data entry

### Size Options
- **Small**: Compact design for dense layouts (height: 32px)
- **Default**: Standard comfortable sizing (height: 44px)
- **Large**: Prominent sizing for emphasis (height: 54px)

### Comprehensive States
- **Default**: Ready for user interaction
- **Focus**: Active input with clear visual indication
- **Typing**: Real-time feedback during text entry
- **Filled**: Distinguishes populated from empty fields
- **Error**: Validation failure with descriptive messaging
- **Warning**: Caution states with helpful guidance
- **Success**: Confirmation of valid input

### Advanced Features
- **Leading Icons**: Optional icons for context and branding
- **Tag Management**: Add, display, and remove multiple selections
- **Validation Integration**: Built-in error, warning, and success states
- **Responsive Design**: Adapts to all screen sizes and devices
- **Accessibility**: Full keyboard navigation and screen reader support

### Design Token Integration
Uses the comprehensive Echo color palette with 67+ design tokens for consistent theming and customization.

### Performance Optimizations
- CSS containment for efficient rendering
- Hardware-accelerated animations
- Optimized for React 19 and modern browsers
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'focus', 'typing', 'error', 'warning', 'success'],
      description: 'Visual state of the input',
    },
    variant: {
      control: { type: 'select' },
      options: ['simple', 'tags'],
      description: 'Input variant type',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant of the input',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number'],
      description: 'HTML input type',
    },
    showClose: {
      control: { type: 'boolean' },
      description: 'Show close/clear button',
    },
    showLeadingIcon: {
      control: { type: 'boolean' },
      description: 'Show leading alarm icon',
    },
    showDropdown: {
      control: { type: 'boolean' },
      description: 'Show dropdown chevron (for tags variant)',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
  },
  args: {
    placeholder: 'Placeholder text',
    showClose: true,
    showLeadingIcon: true,
    showDropdown: false,
    disabled: false,
    variant: 'simple',
    size: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTags: TagData[] = [
  { id: '1', label: 'Label' },
  { id: '2', label: 'Label' },
];

// Simple Input Stories
export const Default: Story = {
  args: {
    label: 'Input name',
    state: 'default',
    variant: 'simple',
  },
};

export const SmallFilled: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    state: 'default',
    value: 'This is a filled input',
    variant: 'simple',
  },
};

export const SmallTyping: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    state: 'typing',
    value: 'This is me typin|',
    variant: 'simple',
  },
};

export const DefaultPlaceholder: Story = {
  args: {
    label: 'Input name',
    size: 'default',
    state: 'default',
    variant: 'simple',
  },
};

export const DefaultError: Story = {
  args: {
    label: 'Input name',
    size: 'default',
    state: 'error',
    value: 'This is a filled input',
    message: 'This is an error associated with the input',
    variant: 'simple',
  },
};

export const DefaultWarning: Story = {
  args: {
    label: 'Input name',
    size: 'default',
    state: 'warning',
    value: 'This is a filled input',
    message: 'This is a warning associated with the input',
    variant: 'simple',
  },
};

export const DefaultSuccess: Story = {
  args: {
    label: 'Input name',
    size: 'default',
    state: 'success',
    value: 'This is a filled input',
    message: 'This is a success associated with the input',
    variant: 'simple',
  },
};

export const DefaultFocus: Story = {
  args: {
    label: 'Input name',
    size: 'default',
    state: 'focus',
    placeholder: '|',
    variant: 'simple',
  },
};

export const DefaultTyping: Story = {
  args: {
    label: 'Input name',
    size: 'default',
    state: 'typing',
    value: 'This is me typin|',
    variant: 'simple',
  },
};

export const DefaultFilled: Story = {
  args: {
    label: 'Input name',
    size: 'default',
    state: 'default',
    value: 'This is a filled input',
    variant: 'simple',
  },
};

export const LargePlaceholder: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    state: 'default',
    variant: 'simple',
  },
};

export const LargeError: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    state: 'error',
    value: 'This is a filled input',
    message: 'This is an error associated with the input',
    variant: 'simple',
  },
};

export const LargeWarning: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    state: 'warning',
    value: 'This is a filled input',
    message: 'This is a warning associated with the input',
    variant: 'simple',
  },
};

export const LargeSuccess: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    state: 'success',
    value: 'This is a filled input',
    message: 'This is a success associated with the input',
    variant: 'simple',
  },
};

export const LargeFilled: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    state: 'default',
    value: 'This is a filled input',
    variant: 'simple',
  },
};

export const LargeFocus: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    state: 'focus',
    placeholder: '|',
    variant: 'simple',
  },
};

export const LargeTyping: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    state: 'typing',
    value: 'This is me typin|',
    variant: 'simple',
  },
};

export const SmallFocus: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    state: 'focus',
    placeholder: '|',
    variant: 'simple',
  },
};

export const SmallDefault: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    state: 'default',
    variant: 'simple',
  },
};

export const SmallError: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    state: 'error',
    value: 'This is a filled input',
    message: 'This is an error associated with the input',
    variant: 'simple',
  },
};

export const SmallWarning: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    state: 'warning',
    value: 'This is a filled input',
    message: 'This is a warning associated with the input',
    variant: 'simple',
  },
};

export const SmallSuccess: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    state: 'success',
    value: 'This is a filled input',
    message: 'This is a success associated with the input',
    variant: 'simple',
  },
};

// Tag Input Stories
export const TagsSmallFocus: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    state: 'focus',
    variant: 'tags',
    tags: sampleTags,
    showDropdown: true,
    placeholder: '|',
  },
};

export const TagsDefaultFocus: Story = {
  args: {
    label: 'Input name',
    size: 'default',
    state: 'focus',
    variant: 'tags',
    tags: sampleTags,
    showDropdown: true,
    placeholder: '|',
  },
};

export const TagsLargeFocus: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    state: 'focus',
    variant: 'tags',
    tags: sampleTags,
    showDropdown: true,
    placeholder: '|',
  },
};

// States without icons or close buttons
export const WithoutLeadingIcon: Story = {
  args: {
    label: 'Input name',
    state: 'default',
    showLeadingIcon: false,
    variant: 'simple',
  },
};

export const WithoutCloseButton: Story = {
  args: {
    label: 'Input name',
    state: 'default',
    showClose: false,
    variant: 'simple',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Input name',
    state: 'default',
    disabled: true,
    value: 'Disabled input value',
    variant: 'simple',
  },
};

export const WithoutLabel: Story = {
  args: {
    state: 'default',
    variant: 'simple',
  },
};
