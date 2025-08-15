import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Textarea component with multiple sizes, validation states, and interactive elements based on Echo design system.',
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
