import type { Meta as StorybookMeta, StoryObj } from '@storybook/react';
import BuildingBlocksAccordion from './BuildingBlocksAccordion';
import styles from './BuildingBlocksAccordion.module.css';

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
    <div className={styles.statusGrid}>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="warning" size="small" />
        <div className={styles.statusLabelSmall}>Warning</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="complete" size="small" />
        <div className={styles.statusLabelSmall}>Complete</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="locked" size="small" />
        <div className={styles.statusLabelSmall}>Locked</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="comments" size="small" />
        <div className={styles.statusLabelSmall}>Comments</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="notifications" size="small" />
        <div className={styles.statusLabelSmall}>Notifications</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="error" size="small" />
        <div className={styles.statusLabelSmall}>Error</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="note" size="small" />
        <div className={styles.statusLabelSmall}>Note</div>
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
    <div className={styles.statusGrid}>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="warning" size="default" />
        <div className={styles.statusLabelSmall}>Warning</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="complete" size="default" />
        <div className={styles.statusLabelSmall}>Complete</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="locked" size="default" />
        <div className={styles.statusLabelSmall}>Locked</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="comments" size="default" />
        <div className={styles.statusLabelSmall}>Comments</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="notifications" size="default" />
        <div className={styles.statusLabelSmall}>Notifications</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="error" size="default" />
        <div className={styles.statusLabelSmall}>Error</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="note" size="default" />
        <div className={styles.statusLabelSmall}>Note</div>
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
    <div className={styles.statusGrid}>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="warning" size="large" />
        <div className={styles.statusLabelSmall}>Warning</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="complete" size="large" />
        <div className={styles.statusLabelSmall}>Complete</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="locked" size="large" />
        <div className={styles.statusLabelSmall}>Locked</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="comments" size="large" />
        <div className={styles.statusLabelSmall}>Comments</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="notifications" size="large" />
        <div className={styles.statusLabelSmall}>Notifications</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="error" size="large" />
        <div className={styles.statusLabelSmall}>Error</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="note" size="large" />
        <div className={styles.statusLabelSmall}>Note</div>
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
    <div className={styles.sizeComparisonGrid}>
      <div>
        <BuildingBlocksAccordion type="warning" size="small" />
        <div className={styles.sizeComparisonLabel}>Small (26px)</div>
      </div>
      <div>
        <BuildingBlocksAccordion type="warning" size="default" />
        <div className={styles.sizeComparisonLabel}>Default (36px)</div>
      </div>
      <div>
        <BuildingBlocksAccordion type="warning" size="large" />
        <div className={styles.sizeComparisonLabel}>Large (48px)</div>
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
    <div className={styles.statusGrid}>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="warning" size="small" disabled />
        <div className={styles.statusLabelSmall}>Warning</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="complete" size="small" disabled />
        <div className={styles.statusLabelSmall}>Complete</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="locked" size="small" disabled />
        <div className={styles.statusLabelSmall}>Locked</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="comments" size="small" disabled />
        <div className={styles.statusLabelSmall}>Comments</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="notifications" size="small" disabled />
        <div className={styles.statusLabelSmall}>Notifications</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="error" size="small" disabled />
        <div className={styles.statusLabelSmall}>Error</div>
      </div>
      <div className={styles.statusItem}>
        <BuildingBlocksAccordion type="note" size="small" disabled />
        <div className={styles.statusLabelSmall}>Note</div>
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
    <div className={styles.enabledDisabledGrid}>
      <div>
        <BuildingBlocksAccordion type="warning" size="default" disabled={false} />
        <div className={styles.sizeComparisonLabel}>Enabled</div>
      </div>
      <div>
        <BuildingBlocksAccordion type="warning" size="default" disabled />
        <div className={styles.sizeComparisonLabel}>Disabled</div>
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
