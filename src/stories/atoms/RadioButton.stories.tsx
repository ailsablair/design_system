import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Atoms/RadioButton',
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
      options: ['default', 'primary', 'success', 'warning', 'error', 'black', 'blue', 'cyan', 'yellow', 'gray', 'red', 'green', 'purple', 'seafoam'],
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
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '600px' }}>
      {/* Original Variants */}
      <RadioButton variant="default" label="Default variant" selected />
      <RadioButton variant="primary" label="Primary variant" selected />
      <RadioButton variant="success" label="Success variant" selected />
      <RadioButton variant="warning" label="Warning variant" selected />
      <RadioButton variant="error" label="Error variant" selected />
      
      {/* Extended Color Variants */}
      <RadioButton variant="black" label="Black variant" selected />
      <RadioButton variant="blue" label="Blue variant" selected />
      <RadioButton variant="cyan" label="Cyan variant" selected />
      <RadioButton variant="yellow" label="Yellow variant" selected />
      <RadioButton variant="gray" label="Gray variant" selected />
      <RadioButton variant="red" label="Red variant" selected />
      <RadioButton variant="green" label="Green variant" selected />
      <RadioButton variant="purple" label="Purple variant" selected />
      <RadioButton variant="seafoam" label="Seafoam variant" selected />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', minWidth: '800px' }}>
      {/* Core variant states */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Default</h4>
        <RadioButton variant="default" label="Unselected" />
        <RadioButton variant="default" label="Selected" selected />
        <RadioButton variant="default" label="Disabled" disabled />
        <RadioButton variant="default" label="Disabled selected" disabled selected />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Black</h4>
        <RadioButton variant="black" label="Unselected" />
        <RadioButton variant="black" label="Selected" selected />
        <RadioButton variant="black" label="Disabled" disabled />
        <RadioButton variant="black" label="Disabled selected" disabled selected />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Blue</h4>
        <RadioButton variant="blue" label="Unselected" />
        <RadioButton variant="blue" label="Selected" selected />
        <RadioButton variant="blue" label="Disabled" disabled />
        <RadioButton variant="blue" label="Disabled selected" disabled selected />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Red</h4>
        <RadioButton variant="red" label="Unselected" />
        <RadioButton variant="red" label="Selected" selected />
        <RadioButton variant="red" label="Disabled" disabled />
        <RadioButton variant="red" label="Disabled selected" disabled selected />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Green</h4>
        <RadioButton variant="green" label="Unselected" />
        <RadioButton variant="green" label="Selected" selected />
        <RadioButton variant="green" label="Disabled" disabled />
        <RadioButton variant="green" label="Disabled selected" disabled selected />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Purple</h4>
        <RadioButton variant="purple" label="Unselected" />
        <RadioButton variant="purple" label="Selected" selected />
        <RadioButton variant="purple" label="Disabled" disabled />
        <RadioButton variant="purple" label="Disabled selected" disabled selected />
      </div>
    </div>
  ),
};

export const ColorGroups: Story = {
  render: () => {
    const [primarySelected, setPrimarySelected] = React.useState('blue');
    const [statusSelected, setStatusSelected] = React.useState('green');
    const [extendedSelected, setExtendedSelected] = React.useState('purple');

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', maxWidth: '800px' }}>
        {/* Primary Colors Group */}
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '16px' }}>Primary Colors</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <RadioButton 
              variant="black" 
              label="Black" 
              name="primary-group" 
              value="black"
              selected={primarySelected === 'black'}
              onChange={(e) => setPrimarySelected(e.target.value)}
            />
            <RadioButton 
              variant="blue" 
              label="Blue" 
              name="primary-group" 
              value="blue"
              selected={primarySelected === 'blue'}
              onChange={(e) => setPrimarySelected(e.target.value)}
            />
            <RadioButton 
              variant="cyan" 
              label="Cyan" 
              name="primary-group" 
              value="cyan"
              selected={primarySelected === 'cyan'}
              onChange={(e) => setPrimarySelected(e.target.value)}
            />
            <RadioButton 
              variant="yellow" 
              label="Yellow" 
              name="primary-group" 
              value="yellow"
              selected={primarySelected === 'yellow'}
              onChange={(e) => setPrimarySelected(e.target.value)}
            />
          </div>
        </div>
        
        {/* Status Colors Group */}
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '16px' }}>Status Colors</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <RadioButton 
              variant="red" 
              label="Error" 
              name="status-group" 
              value="red"
              selected={statusSelected === 'red'}
              onChange={(e) => setStatusSelected(e.target.value)}
            />
            <RadioButton 
              variant="green" 
              label="Success" 
              name="status-group" 
              value="green"
              selected={statusSelected === 'green'}
              onChange={(e) => setStatusSelected(e.target.value)}
            />
            <RadioButton 
              variant="yellow" 
              label="Warning" 
              name="status-group" 
              value="yellow"
              selected={statusSelected === 'yellow'}
              onChange={(e) => setStatusSelected(e.target.value)}
            />
            <RadioButton 
              variant="gray" 
              label="Neutral" 
              name="status-group" 
              value="gray"
              selected={statusSelected === 'gray'}
              onChange={(e) => setStatusSelected(e.target.value)}
            />
          </div>
        </div>
        
        {/* Extended Colors Group */}
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '16px' }}>Extended Colors</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <RadioButton 
              variant="purple" 
              label="Purple" 
              name="extended-group" 
              value="purple"
              selected={extendedSelected === 'purple'}
              onChange={(e) => setExtendedSelected(e.target.value)}
            />
            <RadioButton 
              variant="seafoam" 
              label="Seafoam" 
              name="extended-group" 
              value="seafoam"
              selected={extendedSelected === 'seafoam'}
              onChange={(e) => setExtendedSelected(e.target.value)}
            />
            <RadioButton 
              variant="primary" 
              label="Primary" 
              name="extended-group" 
              value="primary"
              selected={extendedSelected === 'primary'}
              onChange={(e) => setExtendedSelected(e.target.value)}
            />
            <RadioButton 
              variant="default" 
              label="Default" 
              name="extended-group" 
              value="default"
              selected={extendedSelected === 'default'}
              onChange={(e) => setExtendedSelected(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  },
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
            variant="blue"
          />
          <RadioButton
            name="color-group"
            value="color-red"
            label="Red"
            selected={group2Value === 'color-red'}
            onChange={(e) => setGroup2Value(e.target.value)}
            variant="red"
          />
          <RadioButton
            name="color-group"
            value="color-green"
            label="Green"
            selected={group2Value === 'color-green'}
            onChange={(e) => setGroup2Value(e.target.value)}
            variant="green"
          />
        </div>
      </div>
    );
  },
};
