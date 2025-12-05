import type { Meta, StoryObj } from '@storybook/react';
import { BuildingBlocksAccordion } from './BuildingBlocksAccordion';
import './buildingBlocksAccordion.css';

const meta: Meta<typeof BuildingBlocksAccordion> = {
  title: 'Atoms/🧱 Building Blocks/Building Blocks Accordion',
  component: BuildingBlocksAccordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Circular status indicators for accordion components. Features dashed border circles in empty state with icons. Supports all status types (warning, complete, locked, comments, notifications, error, note) in multiple sizes with disabled states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['warning', 'complete', 'locked', 'comments', 'notifications', 'error', 'note'],
      description: 'Status type variant',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    complete: {
      control: 'boolean',
      description: 'Show complete state',
    },
    current: {
      control: 'boolean',
      description: 'Show current state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BuildingBlocksAccordion>;

export const Default: Story = {
  args: {
    type: 'warning',
    size: 'small',
    disabled: false,
    complete: false,
    current: false,
  },
};

export const AllTypesSmallSize: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="warning" size="small" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Warning</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="complete" size="small" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Complete</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="locked" size="small" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Locked</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="comments" size="small" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Comments</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="notifications" size="small" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Notifications</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="error" size="small" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Error</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="note" size="small" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Note</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All status types in small size (26px circle with 16px/14px icons).',
      },
    },
  },
};

export const AllTypesDefaultSize: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="warning" size="default" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Warning</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="complete" size="default" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Complete</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="locked" size="default" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Locked</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="comments" size="default" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Comments</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="notifications" size="default" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Notifications</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="error" size="default" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Error</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="note" size="default" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Note</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All status types in default size (36px circle with 22px icons).',
      },
    },
  },
};

export const AllTypesLargeSize: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="warning" size="large" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Warning</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="complete" size="large" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Complete</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="locked" size="large" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Locked</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="comments" size="large" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Comments</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="notifications" size="large" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Notifications</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="error" size="large" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Error</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="note" size="large" />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Note</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All status types in large size (48px circle with 28px icons).',
      },
    },
  },
};

export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', alignItems: 'center', textAlign: 'center' }}>
      <div>
        <BuildingBlocksAccordion type="warning" size="small" />
        <div style={{ fontSize: '14px', marginTop: '8px', fontWeight: 500 }}>Small (26px)</div>
      </div>
      <div>
        <BuildingBlocksAccordion type="warning" size="default" />
        <div style={{ fontSize: '14px', marginTop: '8px', fontWeight: 500 }}>Default (36px)</div>
      </div>
      <div>
        <BuildingBlocksAccordion type="warning" size="large" />
        <div style={{ fontSize: '14px', marginTop: '8px', fontWeight: 500 }}>Large (48px)</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Size comparison showing small, default, and large variants.',
      },
    },
  },
};

export const DisabledStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="warning" size="small" disabled />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Warning</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="complete" size="small" disabled />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Complete</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="locked" size="small" disabled />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Locked</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="comments" size="small" disabled />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Comments</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="notifications" size="small" disabled />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Notifications</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="error" size="small" disabled />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Error</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BuildingBlocksAccordion type="note" size="small" disabled />
        <div style={{ fontSize: '12px', marginTop: '4px' }}>Note</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All status types in disabled state with muted colors.',
      },
    },
  },
};

export const EnabledVsDisabled: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', alignItems: 'center', textAlign: 'center' }}>
      <div>
        <BuildingBlocksAccordion type="warning" size="default" disabled={false} />
        <div style={{ fontSize: '14px', marginTop: '8px', fontWeight: 500 }}>Enabled</div>
      </div>
      <div>
        <BuildingBlocksAccordion type="warning" size="default" disabled />
        <div style={{ fontSize: '14px', marginTop: '8px', fontWeight: 500 }}>Disabled</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison between enabled and disabled states.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 600 }}>Small Size</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px', marginBottom: '40px' }}>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="warning" size="small" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Warning</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="complete" size="small" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Complete</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="locked" size="small" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Locked</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="comments" size="small" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Comments</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="notifications" size="small" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Notifications</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="error" size="small" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Error</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="note" size="small" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Note</div>
        </div>
      </div>

      <h3 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 600 }}>Default Size</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px', marginBottom: '40px' }}>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="warning" size="default" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Warning</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="complete" size="default" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Complete</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="locked" size="default" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Locked</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="comments" size="default" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Comments</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="notifications" size="default" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Notifications</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="error" size="default" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Error</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="note" size="default" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Note</div>
        </div>
      </div>

      <h3 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 600 }}>Large Size</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px', marginBottom: '40px' }}>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="warning" size="large" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Warning</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="complete" size="large" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Complete</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="locked" size="large" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Locked</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="comments" size="large" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Comments</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="notifications" size="large" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Notifications</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="error" size="large" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Error</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="note" size="large" />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Note</div>
        </div>
      </div>

      <h3 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 600 }}>Disabled States (Small)</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px' }}>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="warning" size="small" disabled />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Warning</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="complete" size="small" disabled />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Complete</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="locked" size="small" disabled />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Locked</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="comments" size="small" disabled />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Comments</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="notifications" size="small" disabled />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Notifications</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="error" size="small" disabled />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Error</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <BuildingBlocksAccordion type="note" size="small" disabled />
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Note</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all variants: all types in all sizes plus disabled states.',
      },
    },
  },
};
