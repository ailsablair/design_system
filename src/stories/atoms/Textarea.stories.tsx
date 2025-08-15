import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Textarea component with validation states, multiple sizes, and interactive elements based on Echo design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'warning', 'success'],
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

export const Default: Story = {
  args: {
    label: 'Input name',
    state: 'default',
  },
};

export const Small: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    state: 'default',
  },
};

export const Large: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    state: 'default',
  },
};

export const Filled: Story = {
  args: {
    label: 'Input name',
    value: 'This is a filled input',
    state: 'default',
  },
};

export const Focus: Story = {
  args: {
    label: 'Input name',
    value: '',
    state: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Focused state with blue border and shadow. Click on the textarea to see the focus state.',
      },
    },
  },
};

export const Error: Story = {
  args: {
    label: 'Input name',
    value: 'This is a filled input',
    state: 'error',
    message: 'This is an error associated with the input',
  },
};

export const Warning: Story = {
  args: {
    label: 'Input name',
    value: 'This is a filled input',
    state: 'warning',
    message: 'This is a warning associated with the input',
  },
};

export const Success: Story = {
  args: {
    label: 'Input name',
    value: 'This is a filled input',
    state: 'success',
    message: 'This is a success associated with the input',
  },
};

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

export const HorizontalResize: Story = {
  args: {
    label: 'Input name',
    state: 'default',
    resize: 'horizontal',
  },
};

export const LargeError: Story = {
  args: {
    label: 'Input name',
    size: 'large',
    value: 'This is a filled input',
    state: 'error',
    message: 'This is an error associated with the input',
  },
};

export const SmallSuccess: Story = {
  args: {
    label: 'Input name',
    size: 'small',
    value: 'This is a filled input',
    state: 'success',
    message: 'This is a success associated with the input',
  },
};
