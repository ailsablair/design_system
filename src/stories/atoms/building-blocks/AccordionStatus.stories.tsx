import type { Meta, StoryObj } from '@storybook/react';
import AccordionStatus, {
  AccordionStatusProps,
  AccordionStatusType,
  AccordionStatusSize,
} from './AccordionStatus';
import './accordionStatus.css';

const meta: Meta<typeof AccordionStatus> = {
  title: 'Atoms/🧱 Building Blocks/Accordion Status',
  component: AccordionStatus,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Accordion status building block showing warning, complete, locked, comments, notifications, error and note states across sizes and disabled states.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['warning', 'complete', 'locked', 'comments', 'notifications', 'error', 'note'] satisfies AccordionStatusType[],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'] satisfies AccordionStatusSize[],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<AccordionStatusProps>;

export const Default: Story = {
  args: {
    type: 'warning',
    size: 'small',
    disabled: false,
  },
};

export const Matrix: Story = {
  render: () => {
    const types: AccordionStatusType[] = [
      'warning',
      'complete',
      'locked',
      'comments',
      'notifications',
      'error',
      'note',
    ];

    const sizes: AccordionStatusSize[] = ['small', 'default', 'large'];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {types.map((type) => (
          <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ fontSize: 24, fontWeight: 500, color: '#2C2C30' }}>{type}</div>
            <div style={{ display: 'flex', gap: 64, alignItems: 'center' }}>
              <div style={{ color: '#72747D', minWidth: 120 }}>default</div>
              <div style={{ display: 'flex', gap: 32 }}>
                {sizes.map((size) => (
                  <div key={`${type}-${size}-enabled`} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <AccordionStatus type={type} size={size} disabled={false} />
                    <div style={{ color: '#72747D', fontSize: 16 }}>{size}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 64, alignItems: 'center' }}>
              <div style={{ color: '#72747D', minWidth: 120 }}>disabled true</div>
              <div style={{ display: 'flex', gap: 32 }}>
                {sizes.map((size) => (
                  <div key={`${type}-${size}-disabled`} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <AccordionStatus type={type} size={size} disabled={true} />
                    <div style={{ color: '#72747D', fontSize: 16 }}>{size}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
