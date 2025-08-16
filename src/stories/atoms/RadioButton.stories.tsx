import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Design System/Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A radio button input component with multiple states and color variants for form interactions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'Color variant of the radio button',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant of the radio button',
    },
    label: {
      control: 'text',
      description: 'Label text for the radio button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    selected: {
      control: 'boolean',
      description: 'Selected state (controlled)',
    },
    name: {
      control: 'text',
      description: 'Input name for grouping radio buttons',
    },
    value: {
      control: 'text',
      description: 'Input value',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Radio button label',
  },
};

export const Selected: Story = {
  args: {
    label: 'Selected radio button',
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled radio button',
    disabled: true,
  },
};

export const DisabledSelected: Story = {
  args: {
    label: 'Disabled selected',
    disabled: true,
    selected: true,
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <RadioButton size="small" label="Small" selected />
      <RadioButton size="default" label="Default" selected />
      <RadioButton size="large" label="Large" selected />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <RadioButton variant="default" label="Default variant" selected />
      <RadioButton variant="primary" label="Primary variant" selected />
      <RadioButton variant="success" label="Success variant" selected />
      <RadioButton variant="warning" label="Warning variant" selected />
      <RadioButton variant="error" label="Error variant" selected />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', minWidth: '600px' }}>
      {/* Default variant states */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Default</h4>
        <RadioButton variant="default" label="Unselected" />
        <RadioButton variant="default" label="Selected" selected />
        <RadioButton variant="default" label="Disabled" disabled />
        <RadioButton variant="default" label="Disabled selected" disabled selected />
      </div>
      
      {/* Primary variant states */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Primary</h4>
        <RadioButton variant="primary" label="Unselected" />
        <RadioButton variant="primary" label="Selected" selected />
        <RadioButton variant="primary" label="Disabled" disabled />
        <RadioButton variant="primary" label="Disabled selected" disabled selected />
      </div>
      
      {/* Success variant states */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Success</h4>
        <RadioButton variant="success" label="Unselected" />
        <RadioButton variant="success" label="Selected" selected />
        <RadioButton variant="success" label="Disabled" disabled />
        <RadioButton variant="success" label="Disabled selected" disabled selected />
      </div>
      
      {/* Warning variant states */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Warning</h4>
        <RadioButton variant="warning" label="Unselected" />
        <RadioButton variant="warning" label="Selected" selected />
        <RadioButton variant="warning" label="Disabled" disabled />
        <RadioButton variant="warning" label="Disabled selected" disabled selected />
      </div>
      
      {/* Error variant states */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Error</h4>
        <RadioButton variant="error" label="Unselected" />
        <RadioButton variant="error" label="Selected" selected />
        <RadioButton variant="error" label="Disabled" disabled />
        <RadioButton variant="error" label="Disabled selected" disabled selected />
      </div>
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState('option1');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Choose an option:</h4>
        <RadioButton
          name="demo-group"
          value="option1"
          label="Option 1"
          selected={selectedValue === 'option1'}
          onChange={handleChange}
          variant="primary"
        />
        <RadioButton
          name="demo-group"
          value="option2"
          label="Option 2"
          selected={selectedValue === 'option2'}
          onChange={handleChange}
          variant="primary"
        />
        <RadioButton
          name="demo-group"
          value="option3"
          label="Option 3"
          selected={selectedValue === 'option3'}
          onChange={handleChange}
          variant="primary"
        />
        <RadioButton
          name="demo-group"
          value="option4"
          label="Option 4 (Disabled)"
          disabled
        />
      </div>
    );
  },
};

export const MultipleGroups: Story = {
  render: () => {
    const [group1Value, setGroup1Value] = React.useState('size-medium');
    const [group2Value, setGroup2Value] = React.useState('color-blue');

    return (
      <div style={{ display: 'flex', gap: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Size:</h4>
          <RadioButton
            name="size-group"
            value="size-small"
            label="Small"
            selected={group1Value === 'size-small'}
            onChange={(e) => setGroup1Value(e.target.value)}
            variant="success"
          />
          <RadioButton
            name="size-group"
            value="size-medium"
            label="Medium"
            selected={group1Value === 'size-medium'}
            onChange={(e) => setGroup1Value(e.target.value)}
            variant="success"
          />
          <RadioButton
            name="size-group"
            value="size-large"
            label="Large"
            selected={group1Value === 'size-large'}
            onChange={(e) => setGroup1Value(e.target.value)}
            variant="success"
          />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>Color:</h4>
          <RadioButton
            name="color-group"
            value="color-blue"
            label="Blue"
            selected={group2Value === 'color-blue'}
            onChange={(e) => setGroup2Value(e.target.value)}
            variant="primary"
          />
          <RadioButton
            name="color-group"
            value="color-red"
            label="Red"
            selected={group2Value === 'color-red'}
            onChange={(e) => setGroup2Value(e.target.value)}
            variant="error"
          />
          <RadioButton
            name="color-group"
            value="color-green"
            label="Green"
            selected={group2Value === 'color-green'}
            onChange={(e) => setGroup2Value(e.target.value)}
            variant="success"
          />
        </div>
      </div>
    );
  },
};
