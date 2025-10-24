import type { Meta, StoryObj } from '@storybook/react';
import { InputNumbers } from './InputNumbers';

const meta: Meta<typeof InputNumbers> = {
  title: 'Atoms/InputNumbers',
  component: InputNumbers,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# InputNumbers Component

The InputNumbers component is a specialized input control for numeric values with increment/decrement functionality, built on the Echo design system.

## Key Features

### Two Variants
- **Simple**: Counter-only interface with plus/minus controls and value display
- **Default**: Input field with placeholder text plus counter controls on the right

### Size Options
- **Small**: Compact design for dense layouts (height: 32px)
- **Default**: Standard comfortable sizing (height: 44px)  
- **Large**: Prominent sizing for emphasis (height: 54px)

### Interactive States
- **Default**: Ready for user interaction
- **Focus**: Active state with sky blue border and shadow
- **Pressed**: Active press state with dark sky blue border
- **Filled**: When value is greater than 0
- **Disabled**: Non-interactive state with muted colors

### Smart Controls
- **Plus Button**: Increments value, shows focused/pressed visual states
- **Minus Button**: Decrements value, shows trash icon when value is 1
- **Value Display**: Shows current numeric value prominently
- **Min/Max Validation**: Respects minimum and maximum value constraints

### Advanced Features
- **Accessibility**: Full keyboard navigation and screen reader support
- **Event Handlers**: onChange, onIncrement, onDecrement callbacks
- **Responsive Design**: Adapts to mobile and tablet layouts
- **High Contrast Support**: Enhanced visibility for accessibility needs
- **Reduced Motion**: Respects user's motion preferences

### Design Token Integration
Uses the comprehensive Echo color palette and typography tokens for consistent theming.

Perfect for quantity selectors, settings panels, and any interface requiring numeric input controls.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'simple'],
      description: 'Component variant type',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant of the component',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'focus', 'pressed', 'disabled'],
      description: 'Visual state of the component',
    },
    value: {
      control: { type: 'number' },
      description: 'Current numeric value',
    },
    min: {
      control: { type: 'number' },
      description: 'Minimum allowed value',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum allowed value',
    },
    step: {
      control: { type: 'number' },
      description: 'Increment/decrement step',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
  },
  args: {
    type: 'simple',
    size: 'default',
    state: 'default',
    value: 0,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Type Stories
export const DefaultSmallDefault: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'small',
    state: 'default',
    value: 0,
    placeholder: 'Standard licence',
  },
  name: 'Default / Small / Zero / Default',
};

export const DefaultSmallDisabled: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'small',
    state: 'disabled',
    disabled: true,
    value: 0,
    placeholder: 'Standard licence',
  },
  name: 'Default / Small / Zero / Disabled',
};

export const DefaultSmallFocus: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'small',
    state: 'focus',
    value: 0,
    placeholder: 'Standard licence',
  },
  name: 'Default / Small / Zero / Focus',
};

export const DefaultSmallPressed: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'small',
    state: 'pressed',
    value: 0,
    placeholder: 'Standard licence',
  },
  name: 'Default / Small / Zero / Clicked',
};

export const DefaultSmallFilled4: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'small',
    state: 'default',
    value: 4,
    placeholder: 'Standard licence',
  },
  name: 'Default / Small / Four / Filled',
};

export const DefaultSmallFilled1: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'small',
    state: 'default',
    value: 1,
    placeholder: 'Standard licence',
  },
  name: 'Default / Small / One / Filled',
};

export const DefaultDefaultDefault: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'default',
    state: 'default',
    value: 0,
    placeholder: 'Standard licence',
  },
  name: 'Default / Default / Zero / Default',
};

export const DefaultDefaultDisabled: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'default',
    state: 'disabled',
    disabled: true,
    value: 0,
    placeholder: 'Standard licence',
  },
  name: 'Default / Default / Zero / Disabled',
};

export const DefaultDefaultFocus: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'default',
    state: 'focus',
    value: 0,
    placeholder: 'Standard licence',
  },
  name: 'Default / Default / Zero / Focus',
};

export const DefaultDefaultPressed: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'default',
    state: 'pressed',
    value: 0,
    placeholder: 'Standard licence',
  },
  name: 'Default / Default / Zero / Clicked',
};

export const DefaultDefaultFilled4: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'default',
    state: 'default',
    value: 4,
    placeholder: 'Standard licence',
  },
  name: 'Default / Default / Four / Filled',
};

export const DefaultDefaultFilled1: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'default',
    state: 'default',
    value: 1,
    placeholder: 'Standard licence',
  },
  name: 'Default / Default / One / Filled',
};

export const DefaultLargeDefault: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'large',
    state: 'default',
    value: 0,
    placeholder: 'Standard licence',
  },
  name: 'Default / Large / Zero / Default',
};

export const DefaultLargeDisabled: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'large',
    state: 'disabled',
    disabled: true,
    value: 0,
    placeholder: 'Standard licence',
  },
  name: 'Default / Large / Zero / Disabled',
};

export const DefaultLargeFocus: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'large',
    state: 'focus',
    value: 0,
    placeholder: 'Standard licence',
  },
  name: 'Default / Large / Zero / Focus',
};

export const DefaultLargePressed: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'large',
    state: 'pressed',
    value: 0,
    placeholder: 'Standard licence',
  },
  name: 'Default / Large / Zero / Clicked',
};

export const DefaultLargeFilled4: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'large',
    state: 'default',
    value: 4,
    placeholder: 'Standard licence',
  },
  name: 'Default / Large / Four / Filled',
};

export const DefaultLargeFilled1: Story = {
  args: {
    label: 'Select',
    type: 'default',
    size: 'large',
    state: 'default',
    value: 1,
    placeholder: 'Standard licence',
  },
  name: 'Default / Large / One / Filled',
};

// Simple Type Stories
export const SimpleSmallDefault: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'small',
    state: 'default',
    value: 0,
  },
  name: 'Simple / Small / Zero / Default',
};

export const SimpleSmallDisabled: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'small',
    state: 'disabled',
    disabled: true,
    value: 0,
  },
  name: 'Simple / Small / Zero / Disabled',
};

export const SimpleSmallFocus: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'small',
    state: 'focus',
    value: 0,
  },
  name: 'Simple / Small / Zero / Focus',
};

export const SimpleSmallPressed: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'small',
    state: 'pressed',
    value: 0,
  },
  name: 'Simple / Small / Zero / Clicked',
};

export const SimpleSmallFilled4: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'small',
    state: 'default',
    value: 4,
  },
  name: 'Simple / Small / Four / Filled',
};

export const SimpleSmallFilled1: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'small',
    state: 'default',
    value: 1,
  },
  name: 'Simple / Small / One / Filled',
};

export const SimpleDefaultDefault: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'default',
    state: 'default',
    value: 0,
  },
  name: 'Simple / Default / Zero / Default',
};

export const SimpleDefaultDisabled: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'default',
    state: 'disabled',
    disabled: true,
    value: 0,
  },
  name: 'Simple / Default / Zero / Disabled',
};

export const SimpleDefaultFocus: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'default',
    state: 'focus',
    value: 0,
  },
  name: 'Simple / Default / Zero / Focus',
};

export const SimpleDefaultPressed: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'default',
    state: 'pressed',
    value: 0,
  },
  name: 'Simple / Default / Zero / Clicked',
};

export const SimpleDefaultFilled4: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'default',
    state: 'default',
    value: 4,
  },
  name: 'Simple / Default / Four / Filled',
};

export const SimpleDefaultFilled1: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'default',
    state: 'default',
    value: 1,
  },
  name: 'Simple / Default / One / Filled',
};

export const SimpleLargeDefault: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'large',
    state: 'default',
    value: 0,
  },
  name: 'Simple / Large / Zero / Default',
};

export const SimpleLargeDisabled: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'large',
    state: 'disabled',
    disabled: true,
    value: 0,
  },
  name: 'Simple / Large / Zero / Disabled',
};

export const SimpleLargeFocus: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'large',
    state: 'focus',
    value: 0,
  },
  name: 'Simple / Large / Zero / Focus',
};

export const SimpleLargePressed: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'large',
    state: 'pressed',
    value: 0,
  },
  name: 'Simple / Large / Zero / Clicked',
};

export const SimpleLargeFilled4: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'large',
    state: 'default',
    value: 4,
  },
  name: 'Simple / Large / Four / Filled',
};

export const SimpleLargeFilled1: Story = {
  args: {
    label: 'Select',
    type: 'simple',
    size: 'large',
    state: 'default',
    value: 1,
  },
  name: 'Simple / Large / One / Filled',
};

// Interactive Examples
export const Interactive: Story = {
  args: {
    label: 'Select quantity',
    type: 'simple',
    size: 'default',
    state: 'default',
    value: 0,
    min: 0,
    max: 10,
    step: 1,
  },
};

export const WithCustomRange: Story = {
  args: {
    label: 'Custom range',
    type: 'default',
    size: 'default',
    state: 'default',
    value: 5,
    min: 1,
    max: 20,
    step: 1,
    placeholder: 'Premium licence',
  },
};
