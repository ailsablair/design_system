import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Input component with validation states and interactive elements based on Echo design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'warning', 'success'],
      description: 'Visual state of the input',
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
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
  },
  args: {
    placeholder: 'This is a filled input',
    showClose: true,
    disabled: false,
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

export const Error: Story = {
  args: {
    label: 'Input name',
    state: 'error',
    message: 'This is an error associated with the input',
  },
};

export const Warning: Story = {
  args: {
    label: 'Input name',
    state: 'warning',
    message: 'This is a warning associated with the input',
  },
};

export const Success: Story = {
  args: {
    label: 'Input name',
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
  },
};

export const WithoutCloseButton: Story = {
  args: {
    label: 'Input name',
    state: 'default',
    showClose: false,
  },
};

export const CustomValue: Story = {
  args: {
    label: 'Input name',
    state: 'default',
    value: 'Custom input value',
  },
};
