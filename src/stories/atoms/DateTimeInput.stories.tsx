import type { Meta, StoryObj } from '@storybook/react';
import { DateTimeInput } from './DateTimeInput';

const meta: Meta<typeof DateTimeInput> = {
  title: 'Design System/Atoms/DateTimeInput',
  component: DateTimeInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive date and time input component with multiple sizes and states, based on Figma design specifications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text for the input field',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text (optional - has defaults for date/time)',
    },
    value: {
      control: { type: 'text' },
      description: 'Input value',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'focus', 'typing', 'filled'],
      description: 'Visual state of the input',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant',
    },
    type: {
      control: { type: 'select' },
      options: ['date', 'time'],
      description: 'Input type - determines icon and default placeholder',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Date Input Stories
export const DateDefault: Story = {
  args: {
    label: 'Date',
    type: 'date',
    size: 'default',
    state: 'default',
  },
};

export const DateSmall: Story = {
  args: {
    label: 'Date',
    type: 'date',
    size: 'small',
    state: 'default',
  },
};

export const DateLarge: Story = {
  args: {
    label: 'Date',
    type: 'date',
    size: 'large',
    state: 'default',
  },
};

export const DateFocus: Story = {
  args: {
    label: 'Date',
    type: 'date',
    size: 'default',
    state: 'focus',
  },
};

export const DateTyping: Story = {
  args: {
    label: 'Date',
    type: 'date',
    size: 'default',
    state: 'typing',
    value: '01 / JAN / |',
  },
};

export const DateFilled: Story = {
  args: {
    label: 'Date',
    type: 'date',
    size: 'default',
    state: 'filled',
    value: '01 / JAN / 2000',
  },
};

// Time Input Stories
export const TimeDefault: Story = {
  args: {
    label: 'Time',
    type: 'time',
    size: 'default',
    state: 'default',
  },
};

export const TimeSmall: Story = {
  args: {
    label: 'Time',
    type: 'time',
    size: 'small',
    state: 'default',
  },
};

export const TimeLarge: Story = {
  args: {
    label: 'Time',
    type: 'time',
    size: 'large',
    state: 'default',
  },
};

export const TimeFocus: Story = {
  args: {
    label: 'Time',
    type: 'time',
    size: 'default',
    state: 'focus',
  },
};

export const TimeTyping: Story = {
  args: {
    label: 'Time',
    type: 'time',
    size: 'default',
    state: 'typing',
    value: '08 : 01 : |  PM',
  },
};

export const TimeFilled: Story = {
  args: {
    label: 'Time',
    type: 'time',
    size: 'default',
    state: 'filled',
    value: '08 : 01 : 54 PM',
  },
};

// Comprehensive Showcase
export const AllSizesAndStates = () => {
  const dateStates: Array<{ state: 'default' | 'focus' | 'typing' | 'filled'; label: string; value?: string }> = [
    { state: 'default', label: 'Default' },
    { state: 'filled', label: 'Filled', value: '01 / JAN / 2000' },
    { state: 'focus', label: 'Focus' },
    { state: 'typing', label: 'Typing', value: '01 / JAN / |' },
  ];

  const timeStates: Array<{ state: 'default' | 'focus' | 'typing' | 'filled'; label: string; value?: string }> = [
    { state: 'default', label: 'Default' },
    { state: 'filled', label: 'Filled', value: '08 : 01 : 54 PM' },
    { state: 'focus', label: 'Focus' },
    { state: 'typing', label: 'Typing', value: '08 : 01 : |  PM' },
  ];

  const sizes: Array<'small' | 'default' | 'large'> = ['small', 'default', 'large'];

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '40px',
      padding: '24px',
      fontFamily: 'var(--type-typeface-archivo)',
    }}>
      <div>
        <h2 style={{ 
          marginBottom: '24px', 
          color: 'var(--base-black)',
          fontSize: '24px',
          fontWeight: 600
        }}>
          Date Inputs - All Sizes and States
        </h2>
        
        {sizes.map((size) => (
          <div key={`date-${size}`} style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              marginBottom: '16px', 
              color: 'var(--secondary-blue-gray)',
              fontSize: '18px',
              fontWeight: 500,
              textTransform: 'capitalize'
            }}>
              {size} Size
            </h3>
            <div style={{ 
              display: 'flex', 
              gap: '24px', 
              flexWrap: 'wrap',
              alignItems: 'flex-start'
            }}>
              {dateStates.map((stateConfig) => (
                <div key={`date-${size}-${stateConfig.state}`} style={{ minWidth: '200px' }}>
                  <p style={{ 
                    fontSize: '14px', 
                    color: 'var(--secondary-blue-gray)',
                    marginBottom: '8px',
                    fontWeight: 500
                  }}>
                    {stateConfig.label}
                  </p>
                  <DateTimeInput
                    label="Date"
                    type="date"
                    size={size}
                    state={stateConfig.state}
                    value={stateConfig.value}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 style={{ 
          marginBottom: '24px', 
          color: 'var(--base-black)',
          fontSize: '24px',
          fontWeight: 600
        }}>
          Time Inputs - All Sizes and States
        </h2>
        
        {sizes.map((size) => (
          <div key={`time-${size}`} style={{ marginBottom: '32px' }}>
            <h3 style={{ 
              marginBottom: '16px', 
              color: 'var(--secondary-blue-gray)',
              fontSize: '18px',
              fontWeight: 500,
              textTransform: 'capitalize'
            }}>
              {size} Size
            </h3>
            <div style={{ 
              display: 'flex', 
              gap: '24px', 
              flexWrap: 'wrap',
              alignItems: 'flex-start'
            }}>
              {timeStates.map((stateConfig) => (
                <div key={`time-${size}-${stateConfig.state}`} style={{ minWidth: '200px' }}>
                  <p style={{ 
                    fontSize: '14px', 
                    color: 'var(--secondary-blue-gray)',
                    marginBottom: '8px',
                    fontWeight: 500
                  }}>
                    {stateConfig.label}
                  </p>
                  <DateTimeInput
                    label="Time"
                    type="time"
                    size={size}
                    state={stateConfig.state}
                    value={stateConfig.value}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Figma Design Recreation
export const FigmaDesignShowcase = () => {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '24px',
      fontFamily: 'var(--type-typeface-archivo)',
      backgroundColor: 'var(--base-white)',
    }}>
      <div>
        <h2 style={{ 
          marginBottom: '24px', 
          color: 'var(--base-black)',
          fontSize: '24px',
          fontWeight: 600
        }}>
          Figma Design Recreation - Date/Time Inputs
        </h2>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '40px'
        }}>
          {/* Date Inputs */}
          <div>
            <h3 style={{ 
              marginBottom: '20px', 
              color: 'var(--secondary-blue-gray)',
              fontSize: '18px',
              fontWeight: 500
            }}>
              Date Inputs
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <DateTimeInput label="Date" type="date" size="default" state="default" />
              <DateTimeInput label="Date" type="date" size="default" state="filled" value="01 / JAN / 2000" />
              <DateTimeInput label="Date" type="date" size="large" state="default" />
              <DateTimeInput label="Date" type="date" size="large" state="filled" value="01 / JAN / 2000" />
              <DateTimeInput label="Date" type="date" size="small" state="default" />
              <DateTimeInput label="Date" type="date" size="small" state="filled" value="01 / JAN / 2000" />
            </div>
          </div>

          {/* Date Focus States */}
          <div>
            <h3 style={{ 
              marginBottom: '20px', 
              color: 'var(--secondary-blue-gray)',
              fontSize: '18px',
              fontWeight: 500
            }}>
              Date Focus States
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <DateTimeInput label="Date" type="date" size="default" state="focus" />
              <DateTimeInput label="Date" type="date" size="large" state="focus" />
              <DateTimeInput label="Date" type="date" size="small" state="focus" />
            </div>
          </div>

          {/* Date Typing States */}
          <div>
            <h3 style={{ 
              marginBottom: '20px', 
              color: 'var(--secondary-blue-gray)',
              fontSize: '18px',
              fontWeight: 500
            }}>
              Date Typing States
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <DateTimeInput label="Date" type="date" size="default" state="typing" value="01 / JAN / |" />
              <DateTimeInput label="Date" type="date" size="large" state="typing" value="01 / JAN / |" />
              <DateTimeInput label="Date" type="date" size="small" state="typing" value="01 / JAN / |" />
            </div>
          </div>

          {/* Time Inputs */}
          <div>
            <h3 style={{ 
              marginBottom: '20px', 
              color: 'var(--secondary-blue-gray)',
              fontSize: '18px',
              fontWeight: 500
            }}>
              Time Inputs
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <DateTimeInput label="Time" type="time" size="default" state="default" />
              <DateTimeInput label="Time" type="time" size="default" state="filled" value="08 : 01 : 54 PM" />
              <DateTimeInput label="Time" type="time" size="large" state="default" />
              <DateTimeInput label="Time" type="time" size="large" state="filled" value="08 : 01 : 54 PM" />
              <DateTimeInput label="Time" type="time" size="small" state="default" />
              <DateTimeInput label="Time" type="time" size="small" state="filled" value="08 : 01 : 54 PM" />
            </div>
          </div>

          {/* Time Focus States */}
          <div>
            <h3 style={{ 
              marginBottom: '20px', 
              color: 'var(--secondary-blue-gray)',
              fontSize: '18px',
              fontWeight: 500
            }}>
              Time Focus States
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <DateTimeInput label="Time" type="time" size="default" state="focus" />
              <DateTimeInput label="Time" type="time" size="large" state="focus" />
              <DateTimeInput label="Time" type="time" size="small" state="focus" />
            </div>
          </div>

          {/* Time Typing States */}
          <div>
            <h3 style={{ 
              marginBottom: '20px', 
              color: 'var(--secondary-blue-gray)',
              fontSize: '18px',
              fontWeight: 500
            }}>
              Time Typing States
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <DateTimeInput label="Time" type="time" size="default" state="typing" value="08 : 01 : |  PM" />
              <DateTimeInput label="Time" type="time" size="large" state="typing" value="08 : 01 : |  PM" />
              <DateTimeInput label="Time" type="time" size="small" state="typing" value="08 : 01 : |  PM" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
