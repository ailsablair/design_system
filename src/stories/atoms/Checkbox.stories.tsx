import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A checkbox input component with multiple states and color variants for form interactions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'checked', 'indeterminate', 'disabled'],
      description: 'Visual state of the checkbox',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'Color variant of the checkbox',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant of the checkbox',
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state (controlled)',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Indeterminate state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Checkbox label',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate checkbox',
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    disabled: true,
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <Checkbox size="small" label="Small" checked />
      <Checkbox size="default" label="Default" checked />
      <Checkbox size="large" label="Large" checked />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox variant="default" label="Default variant" checked />
      <Checkbox variant="primary" label="Primary variant" checked />
      <Checkbox variant="success" label="Success variant" checked />
      <Checkbox variant="warning" label="Warning variant" checked />
      <Checkbox variant="error" label="Error variant" checked />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', minWidth: '600px' }}>
      {/* Default variant states */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Default</h4>
        <Checkbox variant="default" label="Unchecked" />
        <Checkbox variant="default" label="Checked" checked />
        <Checkbox variant="default" label="Indeterminate" indeterminate />
        <Checkbox variant="default" label="Disabled" disabled />
      </div>
      
      {/* Primary variant states */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Primary</h4>
        <Checkbox variant="primary" label="Unchecked" />
        <Checkbox variant="primary" label="Checked" checked />
        <Checkbox variant="primary" label="Indeterminate" indeterminate />
        <Checkbox variant="primary" label="Disabled" disabled />
      </div>
      
      {/* Success variant states */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Success</h4>
        <Checkbox variant="success" label="Unchecked" />
        <Checkbox variant="success" label="Checked" checked />
        <Checkbox variant="success" label="Indeterminate" indeterminate />
        <Checkbox variant="success" label="Disabled" disabled />
      </div>
      
      {/* Warning variant states */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Warning</h4>
        <Checkbox variant="warning" label="Unchecked" />
        <Checkbox variant="warning" label="Checked" checked />
        <Checkbox variant="warning" label="Indeterminate" indeterminate />
        <Checkbox variant="warning" label="Disabled" disabled />
      </div>
      
      {/* Error variant states */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Error</h4>
        <Checkbox variant="error" label="Unchecked" />
        <Checkbox variant="error" label="Checked" checked />
        <Checkbox variant="error" label="Indeterminate" indeterminate />
        <Checkbox variant="error" label="Disabled" disabled />
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [checkboxStates, setCheckboxStates] = React.useState({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
    });

    const handleCheckboxChange = (name: keyof typeof checkboxStates) => (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setCheckboxStates(prev => ({
        ...prev,
        [name]: event.target.checked,
      }));
    };

    // Calculate indeterminate state for "Select all"
    const checkedCount = Object.values(checkboxStates).filter(Boolean).length;
    const allChecked = checkedCount === 3;
    const indeterminate = checkedCount > 0 && checkedCount < 3;

    const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.checked;
      setCheckboxStates({
        checkbox1: newValue,
        checkbox2: newValue,
        checkbox3: newValue,
      });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Checkbox
          label="Select all"
          checked={allChecked}
          indeterminate={indeterminate}
          onChange={handleSelectAllChange}
          variant="primary"
        />
        <div style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Checkbox
            label="Option 1"
            checked={checkboxStates.checkbox1}
            onChange={handleCheckboxChange('checkbox1')}
          />
          <Checkbox
            label="Option 2"
            checked={checkboxStates.checkbox2}
            onChange={handleCheckboxChange('checkbox2')}
          />
          <Checkbox
            label="Option 3"
            checked={checkboxStates.checkbox3}
            onChange={handleCheckboxChange('checkbox3')}
          />
        </div>
      </div>
    );
  },
};

// Add React import
import React from 'react';
