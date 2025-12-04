import type { Meta as StorybookMeta, StoryObj } from '@storybook/react';
import BuildingBlocksAccordion from './BuildingBlocksAccordion';
import './BuildingBlocksAccordion.module.css';

const meta: StorybookMeta<typeof BuildingBlocksAccordion> = {
  title: 'Atoms/🧱 Building Blocks/Building Blocks Accordion',
  component: BuildingBlocksAccordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Building blocks accordion status indicators matching Figma design exactly. Features dashed circle borders in empty state and solid colored backgrounds when active, across all types, sizes and disabled states.',
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
  },
};

export default meta;

type Story = StoryObj<typeof BuildingBlocksAccordion>;

export const Default: Story = {
  args: {
    type: 'warning',
    size: 'small',
    disabled: false,
  },
};

export const AllTypesSmallSize: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: '16px',
      alignItems: 'center',
    }}>
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
        story: 'All status types in small size (26px).',
      },
    },
  },
};

export const AllTypesDefaultSize: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: '16px',
      alignItems: 'center',
    }}>
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
        story: 'All status types in default size (36px).',
      },
    },
  },
};

export const AllTypesLargeSize: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: '16px',
      alignItems: 'center',
    }}>
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
        story: 'All status types in large size (48px).',
      },
    },
  },
};

export const SizeComparison: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <div>
        <BuildingBlocksAccordion type="warning" size="small" />
        <div style={{ fontSize: '14px', marginTop: '8px', fontWeight: '500' }}>Small (26px)</div>
      </div>
      <div>
        <BuildingBlocksAccordion type="warning" size="default" />
        <div style={{ fontSize: '14px', marginTop: '8px', fontWeight: '500' }}>Default (36px)</div>
      </div>
      <div>
        <BuildingBlocksAccordion type="warning" size="large" />
        <div style={{ fontSize: '14px', marginTop: '8px', fontWeight: '500' }}>Large (48px)</div>
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
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: '16px',
      alignItems: 'center',
    }}>
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
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '32px',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <div>
        <BuildingBlocksAccordion type="warning" size="default" disabled={false} />
        <div style={{ fontSize: '14px', marginTop: '8px', fontWeight: '500' }}>Enabled</div>
      </div>
      <div>
        <BuildingBlocksAccordion type="warning" size="default" disabled={true} />
        <div style={{ fontSize: '14px', marginTop: '8px', fontWeight: '500' }}>Disabled</div>
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
