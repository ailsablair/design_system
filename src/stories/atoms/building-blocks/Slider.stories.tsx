import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Atoms/Slider Component',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Slider component based on the building-blocks/slider Figma design. Supports multiple sizes, filled/unfilled states, and optional number displays.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant of the slider',
    },
    filled: {
      control: { type: 'boolean' },
      description: 'Whether the track shows progress (filled)',
    },
    showStart: {
      control: { type: 'boolean' },
      description: 'Whether to show start number',
    },
    showEnd: {
      control: { type: 'boolean' },
      description: 'Whether to show end number',
    },
    showNumber: {
      control: { type: 'boolean' },
      description: 'Whether to show numbers above dots',
    },
    startValue: {
      control: { type: 'number' },
      description: 'Start value to display',
    },
    endValue: {
      control: { type: 'number' },
      description: 'End value to display',
    },
    value: {
      control: { type: 'number', min: 0, max: 1, step: 0.1 },
      description: 'Current slider value',
    },
    min: {
      control: { type: 'number' },
      description: 'Minimum value',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value',
    },
    step: {
      control: { type: 'number', min: 0.01, max: 1, step: 0.01 },
      description: 'Step size',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the slider is disabled',
    },
    onChange: { action: 'changed' },
    onInput: { action: 'input' },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    size: 'default',
    filled: false,
    showStart: true,
    showEnd: true,
    showNumber: true,
    startValue: 0,
    endValue: 1,
    value: 0.5,
    min: 0,
    max: 1,
    step: 0.1,
    disabled: false,
  },
};

export const Filled: Story = {
  args: {
    size: 'default',
    filled: true,
    showStart: true,
    showEnd: true,
    showNumber: true,
    startValue: 0,
    endValue: 1,
    value: 0.7,
    min: 0,
    max: 1,
    step: 0.1,
    disabled: false,
  },
};

export const WithoutNumbers: Story = {
  args: {
    size: 'default',
    filled: true,
    showStart: false,
    showEnd: false,
    showNumber: false,
    value: 0.3,
    min: 0,
    max: 1,
    step: 0.1,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    size: 'default',
    filled: true,
    showStart: true,
    showEnd: true,
    showNumber: true,
    startValue: 0,
    endValue: 1,
    value: 0.4,
    min: 0,
    max: 1,
    step: 0.1,
    disabled: true,
  },
};

// Size Variants
export const SmallSize: Story = {
  args: {
    size: 'small',
    filled: true,
    showStart: true,
    showEnd: true,
    showNumber: true,
    startValue: 0,
    endValue: 1,
    value: 0.6,
    min: 0,
    max: 1,
    step: 0.1,
    disabled: false,
  },
};

export const LargeSize: Story = {
  args: {
    size: 'large',
    filled: true,
    showStart: true,
    showEnd: true,
    showNumber: true,
    startValue: 0,
    endValue: 1,
    value: 0.8,
    min: 0,
    max: 1,
    step: 0.1,
    disabled: false,
  },
};

// Custom Range
export const CustomRange: Story = {
  args: {
    size: 'default',
    filled: true,
    showStart: true,
    showEnd: true,
    showNumber: true,
    startValue: 10,
    endValue: 100,
    value: 55,
    min: 10,
    max: 100,
    step: 5,
    disabled: false,
  },
};

// Comprehensive showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexDirection: 'column', width: '400px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%' }}>
        <div style={{ fontSize: '14px', minWidth: '60px' }}>Small:</div>
        <Slider size="small" filled={false} showStart={true} showEnd={true} showNumber={true} startValue={0} endValue={1} value={0.3} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%' }}>
        <div style={{ fontSize: '14px', minWidth: '60px' }}>Default:</div>
        <Slider size="default" filled={false} showStart={true} showEnd={true} showNumber={true} startValue={0} endValue={1} value={0.5} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%' }}>
        <div style={{ fontSize: '14px', minWidth: '60px' }}>Large:</div>
        <Slider size="large" filled={false} showStart={true} showEnd={true} showNumber={true} startValue={0} endValue={1} value={0.7} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Overview of all slider sizes showing unfilled state.',
      },
    },
  },
};

export const FilledVsUnfilled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexDirection: 'column', width: '400px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Unfilled:</div>
        <Slider size="default" filled={false} showStart={true} showEnd={true} showNumber={true} startValue={0} endValue={1} value={0.4} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Filled:</div>
        <Slider size="default" filled={true} showStart={true} showEnd={true} showNumber={true} startValue={0} endValue={1} value={0.4} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison between filled and unfilled slider states.',
      },
    },
  },
};

export const AllSizesAndStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexDirection: 'column', width: '500px' }}>
      <h3 style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>Small Size</h3>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Unfilled:</div>
        <Slider size="small" filled={false} showStart={true} showEnd={true} showNumber={true} startValue={0} endValue={1} value={0.3} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Filled:</div>
        <Slider size="small" filled={true} showStart={true} showEnd={true} showNumber={true} startValue={0} endValue={1} value={0.3} />
      </div>
      
      <h3 style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>Default Size</h3>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Unfilled:</div>
        <Slider size="default" filled={false} showStart={true} showEnd={true} showNumber={true} startValue={0} endValue={1} value={0.5} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Filled:</div>
        <Slider size="default" filled={true} showStart={true} showEnd={true} showNumber={true} startValue={0} endValue={1} value={0.5} />
      </div>
      
      <h3 style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>Large Size</h3>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Unfilled:</div>
        <Slider size="large" filled={false} showStart={true} showEnd={true} showNumber={true} startValue={0} endValue={1} value={0.7} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', width: '100%' }}>
        <div style={{ fontSize: '14px', minWidth: '80px' }}>Filled:</div>
        <Slider size="large" filled={true} showStart={true} showEnd={true} showNumber={true} startValue={0} endValue={1} value={0.7} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete overview of all slider sizes and states.',
      },
    },
  },
};
