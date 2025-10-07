import type { Meta, StoryObj } from '@storybook/react';
import { AccordionStatus } from './AccordionStatus';

const meta = {
  title: 'Atoms/Building Blocks/Accordion Status',
  component: AccordionStatus,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Accordion Status Indicators

Status indicators for accordion components based on Figma design specifications.

## Status Types

- **warning**: Triangle alert icon (yellow) - for warning states
- **complete**: Checkmark with dashed circle (green) - for completed states  
- **locked**: Lock icon (light purple) - for locked/restricted content
- **comments**: Comment bubble icon (light blue) - for items with comments
- **notifications**: Bell icon (light purple) - for notification indicators
- **error**: X close icon (red) - for error states
- **note**: Document icon (purple) - for notes or documentation

## Sizes

- **small**: 22-26px icons for compact layouts
- **default**: 48-50px icons for standard layouts
- **large**: 62-64px icons for prominent layouts

## States

Each status type supports disabled state with different colors and opacity.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['warning', 'complete', 'locked', 'comments', 'notifications', 'error', 'note'],
      description: 'Status indicator type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'warning' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof AccordionStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Warning: Story = {
  args: {
    type: 'warning',
    size: 'default',
    disabled: false,
  },
};

export const Complete: Story = {
  args: {
    type: 'complete',
    size: 'default',
    disabled: false,
  },
};

export const Locked: Story = {
  args: {
    type: 'locked',
    size: 'default',
    disabled: false,
  },
};

export const Comments: Story = {
  args: {
    type: 'comments',
    size: 'default',
    disabled: false,
  },
};

export const Notifications: Story = {
  args: {
    type: 'notifications',
    size: 'default',
    disabled: false,
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    size: 'default',
    disabled: false,
  },
};

export const Note: Story = {
  args: {
    type: 'note',
    size: 'default',
    disabled: false,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '18px' }}>Small Size</h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <AccordionStatus type="warning" size="small" />
          <AccordionStatus type="complete" size="small" />
          <AccordionStatus type="locked" size="small" />
          <AccordionStatus type="comments" size="small" />
          <AccordionStatus type="notifications" size="small" />
          <AccordionStatus type="error" size="small" />
          <AccordionStatus type="note" size="small" />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '18px' }}>Default Size</h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <AccordionStatus type="warning" size="default" />
          <AccordionStatus type="complete" size="default" />
          <AccordionStatus type="locked" size="default" />
          <AccordionStatus type="comments" size="default" />
          <AccordionStatus type="notifications" size="default" />
          <AccordionStatus type="error" size="default" />
          <AccordionStatus type="note" size="default" />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '18px' }}>Large Size</h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <AccordionStatus type="warning" size="large" />
          <AccordionStatus type="complete" size="large" />
          <AccordionStatus type="locked" size="large" />
          <AccordionStatus type="comments" size="large" />
          <AccordionStatus type="notifications" size="large" />
          <AccordionStatus type="error" size="large" />
          <AccordionStatus type="note" size="large" />
        </div>
      </div>
    </div>
  ),
};

export const DisabledStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '18px' }}>Disabled - Small</h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <AccordionStatus type="warning" size="small" disabled />
          <AccordionStatus type="complete" size="small" disabled />
          <AccordionStatus type="locked" size="small" disabled />
          <AccordionStatus type="comments" size="small" disabled />
          <AccordionStatus type="notifications" size="small" disabled />
          <AccordionStatus type="error" size="small" disabled />
          <AccordionStatus type="note" size="small" disabled />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '18px' }}>Disabled - Default</h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <AccordionStatus type="warning" size="default" disabled />
          <AccordionStatus type="complete" size="default" disabled />
          <AccordionStatus type="locked" size="default" disabled />
          <AccordionStatus type="comments" size="default" disabled />
          <AccordionStatus type="notifications" size="default" disabled />
          <AccordionStatus type="error" size="default" disabled />
          <AccordionStatus type="note" size="default" disabled />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Archivo', fontSize: '18px' }}>Disabled - Large</h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <AccordionStatus type="warning" size="large" disabled />
          <AccordionStatus type="complete" size="large" disabled />
          <AccordionStatus type="locked" size="large" disabled />
          <AccordionStatus type="comments" size="large" disabled />
          <AccordionStatus type="notifications" size="large" disabled />
          <AccordionStatus type="error" size="large" disabled />
          <AccordionStatus type="note" size="large" disabled />
        </div>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '24px' }}>
      {/* Warning */}
      <div>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '24px', fontWeight: 500 }}>Warning</h2>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Small</p>
            <AccordionStatus type="warning" size="small" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Default</p>
            <AccordionStatus type="warning" size="default" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Large</p>
            <AccordionStatus type="warning" size="large" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Small Disabled</p>
            <AccordionStatus type="warning" size="small" disabled />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Default Disabled</p>
            <AccordionStatus type="warning" size="default" disabled />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Large Disabled</p>
            <AccordionStatus type="warning" size="large" disabled />
          </div>
        </div>
      </div>

      {/* Complete */}
      <div>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '24px', fontWeight: 500 }}>Complete</h2>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Small</p>
            <AccordionStatus type="complete" size="small" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Default</p>
            <AccordionStatus type="complete" size="default" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Large</p>
            <AccordionStatus type="complete" size="large" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Small Disabled</p>
            <AccordionStatus type="complete" size="small" disabled />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Default Disabled</p>
            <AccordionStatus type="complete" size="default" disabled />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Large Disabled</p>
            <AccordionStatus type="complete" size="large" disabled />
          </div>
        </div>
      </div>

      {/* Locked */}
      <div>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '24px', fontWeight: 500 }}>Locked</h2>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Small</p>
            <AccordionStatus type="locked" size="small" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Default</p>
            <AccordionStatus type="locked" size="default" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Large</p>
            <AccordionStatus type="locked" size="large" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Small Disabled</p>
            <AccordionStatus type="locked" size="small" disabled />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Default Disabled</p>
            <AccordionStatus type="locked" size="default" disabled />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Large Disabled</p>
            <AccordionStatus type="locked" size="large" disabled />
          </div>
        </div>
      </div>

      {/* Comments */}
      <div>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '24px', fontWeight: 500 }}>Comments</h2>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Small</p>
            <AccordionStatus type="comments" size="small" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Default</p>
            <AccordionStatus type="comments" size="default" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Large</p>
            <AccordionStatus type="comments" size="large" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Small Disabled</p>
            <AccordionStatus type="comments" size="small" disabled />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Default Disabled</p>
            <AccordionStatus type="comments" size="default" disabled />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Large Disabled</p>
            <AccordionStatus type="comments" size="large" disabled />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '24px', fontWeight: 500 }}>Notifications</h2>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Small</p>
            <AccordionStatus type="notifications" size="small" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Default</p>
            <AccordionStatus type="notifications" size="default" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Large</p>
            <AccordionStatus type="notifications" size="large" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Small Disabled</p>
            <AccordionStatus type="notifications" size="small" disabled />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Default Disabled</p>
            <AccordionStatus type="notifications" size="default" disabled />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Large Disabled</p>
            <AccordionStatus type="notifications" size="large" disabled />
          </div>
        </div>
      </div>

      {/* Error */}
      <div>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '24px', fontWeight: 500 }}>Error</h2>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Small</p>
            <AccordionStatus type="error" size="small" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Default</p>
            <AccordionStatus type="error" size="default" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Large</p>
            <AccordionStatus type="error" size="large" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Small Disabled</p>
            <AccordionStatus type="error" size="small" disabled />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Default Disabled</p>
            <AccordionStatus type="error" size="default" disabled />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Large Disabled</p>
            <AccordionStatus type="error" size="large" disabled />
          </div>
        </div>
      </div>

      {/* Note */}
      <div>
        <h2 style={{ marginBottom: '24px', fontFamily: 'Archivo', fontSize: '24px', fontWeight: 500 }}>Note</h2>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Small</p>
            <AccordionStatus type="note" size="small" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Default</p>
            <AccordionStatus type="note" size="default" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Large</p>
            <AccordionStatus type="note" size="large" />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Small Disabled</p>
            <AccordionStatus type="note" size="small" disabled />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Default Disabled</p>
            <AccordionStatus type="note" size="default" disabled />
          </div>
          <div>
            <p style={{ marginBottom: '8px', fontSize: '14px', color: '#6D7280' }}>Large Disabled</p>
            <AccordionStatus type="note" size="large" disabled />
          </div>
        </div>
      </div>
    </div>
  ),
};
