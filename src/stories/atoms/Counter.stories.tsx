import type { Meta, StoryObj } from '@storybook/react-vite';
import { Counter } from './Counter';
import { useState } from 'react';

const meta: Meta<typeof Counter> = {
  title: 'Atoms/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A numeric counter component with increment/decrement controls. Supports different types, sizes, and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['default', 'simple'],
      description: 'Counter type - default shows label and placeholder, simple is compact',
    },
    size: {
      control: 'radio',
      options: ['small', 'default', 'large'],
      description: 'Size variant',
    },
    state: {
      control: 'radio',
      options: ['default', 'focus', 'clicked', 'disabled', 'filled'],
      description: 'Visual state',
    },
    value: {
      control: 'number',
      description: 'Current count value',
    },
    label: {
      control: 'text',
      description: 'Label text (for default type)',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text (for default type)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when value changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const SimpleDefault: Story = {
  args: {
    type: 'simple',
    size: 'default',
    value: 0,
    label: 'Select quantity',
  },
};

export const DefaultWithLabel: Story = {
  args: {
    type: 'default',
    size: 'default',
    value: 0,
    label: 'Additional users',
    placeholder: 'Standard licence',
  },
};

export const SmallSize: Story = {
  args: {
    type: 'simple',
    size: 'small',
    value: 0,
    label: 'Select quantity',
  },
};

export const LargeSize: Story = {
  args: {
    type: 'simple',
    size: 'large',
    value: 0,
    label: 'Select quantity',
  },
};

export const WithValue: Story = {
  args: {
    type: 'simple',
    size: 'default',
    value: 4,
    label: 'Select quantity',
  },
};

export const DisabledState: Story = {
  args: {
    type: 'simple',
    size: 'default',
    value: 0,
    label: 'Select quantity',
    disabled: true,
  },
};

export const FocusState: Story = {
  args: {
    type: 'simple',
    size: 'default',
    value: 0,
    label: 'Select quantity',
    state: 'focus',
  },
};

export const ClickedState: Story = {
  args: {
    type: 'simple',
    size: 'default',
    value: 0,
    label: 'Select quantity',
    state: 'clicked',
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || 0);
    
    return (
      <Counter
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  args: {
    type: 'simple',
    size: 'default',
    value: 0,
    label: 'Select quantity',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <Counter type="simple" size="small" value={0} label="Select quantity" />
      <Counter type="simple" size="default" value={0} label="Select quantity" />
      <Counter type="simple" size="large" value={0} label="Select quantity" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 500 }}>Default</p>
        <Counter type="simple" size="default" value={0} label="Select quantity" state="default" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 500 }}>Disabled</p>
        <Counter type="simple" size="default" value={0} label="Select quantity" disabled={true} />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 500 }}>Focus</p>
        <Counter type="simple" size="default" value={0} label="Select quantity" state="focus" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 500 }}>Clicked</p>
        <Counter type="simple" size="default" value={0} label="Select quantity" state="clicked" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 500 }}>With Value</p>
        <Counter type="simple" size="default" value={4} label="Select quantity" />
      </div>
    </div>
  ),
};

export const DefaultTypeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <Counter 
        type="default" 
        size="small" 
        value={0} 
        label="Additional users" 
        placeholder="Standard licence" 
      />
      <Counter 
        type="default" 
        size="default" 
        value={4} 
        label="Additional users" 
        placeholder="Standard licence" 
      />
      <Counter 
        type="default" 
        size="large" 
        value={1} 
        label="Additional users" 
        placeholder="Standard licence" 
      />
    </div>
  ),
};

export const TrashIconDemo: Story = {
  render: () => {
    const [value, setValue] = useState(1);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p style={{ fontWeight: 500 }}>When value is 1, minus button shows trash icon</p>
        <Counter
          type="simple"
          size="default"
          value={value}
          onChange={setValue}
          label="Select quantity"
        />
      </div>
    );
  },
};
