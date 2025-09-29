import type { Meta, StoryObj } from '@storybook/react-vite';
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
      options: ['default', 'primary', 'success', 'warning', 'error', 'black', 'blue', 'cyan', 'yellow', 'gray', 'red', 'green', 'purple', 'seafoam'],
      description: 'Color variant of the checkbox',
    },
    shape: {
      control: 'select',
      options: ['round', 'square'],
      description: 'Shape variant of the checkbox',
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
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '600px' }}>
      {/* Original Variants */}
      <Checkbox variant="default" label="Default variant" checked />
      <Checkbox variant="primary" label="Primary variant" checked />
      <Checkbox variant="success" label="Success variant" checked />
      <Checkbox variant="warning" label="Warning variant" checked />
      <Checkbox variant="error" label="Error variant" checked />

      {/* Extended Color Variants */}
      <Checkbox variant="black" label="Black variant" checked />
      <Checkbox variant="blue" label="Blue variant" checked />
      <Checkbox variant="cyan" label="Cyan variant" checked />
      <Checkbox variant="yellow" label="Yellow variant" checked />
      <Checkbox variant="gray" label="Gray variant" checked />
      <Checkbox variant="red" label="Red variant" checked />
      <Checkbox variant="green" label="Green variant" checked />
      <Checkbox variant="purple" label="Purple variant" checked />
      <Checkbox variant="seafoam" label="Seafoam variant" checked />
    </div>
  ),
};

export const AllShapes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 500 }}>Round Checkboxes</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', maxWidth: '400px' }}>
          <Checkbox shape="round" variant="black" label="Black" checked />
          <Checkbox shape="round" variant="blue" label="Blue" checked />
          <Checkbox shape="round" variant="cyan" label="Cyan" checked />
          <Checkbox shape="round" variant="yellow" label="Yellow" checked />
          <Checkbox shape="round" variant="red" label="Red" checked />
          <Checkbox shape="round" variant="green" label="Green" checked />
          <Checkbox shape="round" variant="purple" label="Purple" checked />
          <Checkbox shape="round" variant="seafoam" label="Seafoam" checked />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 500 }}>Square Checkboxes</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', maxWidth: '400px' }}>
          <Checkbox shape="square" variant="black" label="Black" checked />
          <Checkbox shape="square" variant="blue" label="Blue" checked />
          <Checkbox shape="square" variant="cyan" label="Cyan" checked />
          <Checkbox shape="square" variant="yellow" label="Yellow" checked />
          <Checkbox shape="square" variant="red" label="Red" checked />
          <Checkbox shape="square" variant="green" label="Green" checked />
          <Checkbox shape="square" variant="purple" label="Purple" checked />
          <Checkbox shape="square" variant="seafoam" label="Seafoam" checked />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes support both round and square shapes with all color variants.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', minWidth: '800px' }}>
      {/* Core variant states */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Default</h4>
        <Checkbox variant="default" label="Unchecked" />
        <Checkbox variant="default" label="Checked" checked />
        <Checkbox variant="default" label="Indeterminate" indeterminate />
        <Checkbox variant="default" label="Disabled" disabled />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Black</h4>
        <Checkbox variant="black" label="Unchecked" />
        <Checkbox variant="black" label="Checked" checked />
        <Checkbox variant="black" label="Indeterminate" indeterminate />
        <Checkbox variant="black" label="Disabled" disabled />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Blue</h4>
        <Checkbox variant="blue" label="Unchecked" />
        <Checkbox variant="blue" label="Checked" checked />
        <Checkbox variant="blue" label="Indeterminate" indeterminate />
        <Checkbox variant="blue" label="Disabled" disabled />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Red</h4>
        <Checkbox variant="red" label="Unchecked" />
        <Checkbox variant="red" label="Checked" checked />
        <Checkbox variant="red" label="Indeterminate" indeterminate />
        <Checkbox variant="red" label="Disabled" disabled />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Green</h4>
        <Checkbox variant="green" label="Unchecked" />
        <Checkbox variant="green" label="Checked" checked />
        <Checkbox variant="green" label="Indeterminate" indeterminate />
        <Checkbox variant="green" label="Disabled" disabled />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Purple</h4>
        <Checkbox variant="purple" label="Unchecked" />
        <Checkbox variant="purple" label="Checked" checked />
        <Checkbox variant="purple" label="Indeterminate" indeterminate />
        <Checkbox variant="purple" label="Disabled" disabled />
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

import React from 'react';
