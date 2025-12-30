import type { Meta, StoryObj } from '@storybook/react';
import { StatusIconwLabel } from './StatusIconwLabel';
import type { StatusIconwLabelProps } from './statusIconwLabel.types';

/**
 * StatusIconwLabel Component Stories
 * 
 * Showcases all 144 variants:
 * - 8 status types: warning, error, complete, locked, comments, notifications, note, edit
 * - 3 sizes: small (22px), default (36px), large (48px)
 * - 3 steps: past, future, current
 * - 2 states: default, disabled
 */
const meta: Meta<typeof StatusIconwLabel> = {
  title: 'Atoms/Status Indicators/StatusIconwLabel',
  component: StatusIconwLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['warning', 'error', 'complete', 'locked', 'comments', 'notifications', 'note', 'edit'],
      description: 'The status type (determines icon and color)',
    },
    step: {
      control: 'select',
      options: ['past', 'future', 'current'],
      description: 'The process step (affects border, background, opacity)',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Component size',
    },
    label: {
      control: 'text',
      description: 'The label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the component is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusIconwLabel>;

/* ========================================
   PLAYGROUND
   ======================================== */

export const Playground: Story = {
  args: {
    status: 'warning',
    step: 'current',
    size: 'default',
    label: 'Example',
    disabled: false,
  },
};

/* ========================================
   WARNING STATUS (18 variants)
   ======================================== */

export const WarningAllCombinations: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px', padding: '20px' }}>
      {/* Small */}
      <StatusIconwLabel status="warning" step="past" size="small" label="past-step" />
      <StatusIconwLabel status="warning" step="past" size="small" label="past-step" disabled />
      <StatusIconwLabel status="warning" step="future" size="small" label="future-step" />
      <StatusIconwLabel status="warning" step="future" size="small" label="future-step" disabled />
      <StatusIconwLabel status="warning" step="current" size="small" label="current-step" />
      <StatusIconwLabel status="warning" step="current" size="small" label="current-step" disabled />

      {/* Default */}
      <StatusIconwLabel status="warning" step="past" size="default" label="past-step" />
      <StatusIconwLabel status="warning" step="past" size="default" label="past-step" disabled />
      <StatusIconwLabel status="warning" step="future" size="default" label="future-step" />
      <StatusIconwLabel status="warning" step="future" size="default" label="future-step" disabled />
      <StatusIconwLabel status="warning" step="current" size="default" label="current-step" />
      <StatusIconwLabel status="warning" step="current" size="default" label="current-step" disabled />

      {/* Large */}
      <StatusIconwLabel status="warning" step="past" size="large" label="past-step" />
      <StatusIconwLabel status="warning" step="past" size="large" label="past-step" disabled />
      <StatusIconwLabel status="warning" step="future" size="large" label="future-step" />
      <StatusIconwLabel status="warning" step="future" size="large" label="future-step" disabled />
      <StatusIconwLabel status="warning" step="current" size="large" label="current-step" />
      <StatusIconwLabel status="warning" step="current" size="large" label="current-step" disabled />
    </div>
  ),
};

/* ========================================
   ERROR STATUS (18 variants)
   ======================================== */

export const ErrorAllCombinations: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px', padding: '20px' }}>
      <StatusIconwLabel status="error" step="past" size="small" label="past-step" />
      <StatusIconwLabel status="error" step="past" size="small" label="past-step" disabled />
      <StatusIconwLabel status="error" step="future" size="small" label="future-step" />
      <StatusIconwLabel status="error" step="future" size="small" label="future-step" disabled />
      <StatusIconwLabel status="error" step="current" size="small" label="current-step" />
      <StatusIconwLabel status="error" step="current" size="small" label="current-step" disabled />

      <StatusIconwLabel status="error" step="past" size="default" label="past-step" />
      <StatusIconwLabel status="error" step="past" size="default" label="past-step" disabled />
      <StatusIconwLabel status="error" step="future" size="default" label="future-step" />
      <StatusIconwLabel status="error" step="future" size="default" label="future-step" disabled />
      <StatusIconwLabel status="error" step="current" size="default" label="current-step" />
      <StatusIconwLabel status="error" step="current" size="default" label="current-step" disabled />

      <StatusIconwLabel status="error" step="past" size="large" label="past-step" />
      <StatusIconwLabel status="error" step="past" size="large" label="past-step" disabled />
      <StatusIconwLabel status="error" step="future" size="large" label="future-step" />
      <StatusIconwLabel status="error" step="future" size="large" label="future-step" disabled />
      <StatusIconwLabel status="error" step="current" size="large" label="current-step" />
      <StatusIconwLabel status="error" step="current" size="large" label="current-step" disabled />
    </div>
  ),
};

/* ========================================
   COMPLETE STATUS (18 variants)
   ======================================== */

export const CompleteAllCombinations: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px', padding: '20px' }}>
      <StatusIconwLabel status="complete" step="past" size="small" label="past-step" />
      <StatusIconwLabel status="complete" step="past" size="small" label="past-step" disabled />
      <StatusIconwLabel status="complete" step="future" size="small" label="future-step" />
      <StatusIconwLabel status="complete" step="future" size="small" label="future-step" disabled />
      <StatusIconwLabel status="complete" step="current" size="small" label="current-step" />
      <StatusIconwLabel status="complete" step="current" size="small" label="current-step" disabled />

      <StatusIconwLabel status="complete" step="past" size="default" label="past-step" />
      <StatusIconwLabel status="complete" step="past" size="default" label="past-step" disabled />
      <StatusIconwLabel status="complete" step="future" size="default" label="future-step" />
      <StatusIconwLabel status="complete" step="future" size="default" label="future-step" disabled />
      <StatusIconwLabel status="complete" step="current" size="default" label="current-step" />
      <StatusIconwLabel status="complete" step="current" size="default" label="current-step" disabled />

      <StatusIconwLabel status="complete" step="past" size="large" label="past-step" />
      <StatusIconwLabel status="complete" step="past" size="large" label="past-step" disabled />
      <StatusIconwLabel status="complete" step="future" size="large" label="future-step" />
      <StatusIconwLabel status="complete" step="future" size="large" label="future-step" disabled />
      <StatusIconwLabel status="complete" step="current" size="large" label="current-step" />
      <StatusIconwLabel status="complete" step="current" size="large" label="current-step" disabled />
    </div>
  ),
};

/* ========================================
   LOCKED STATUS (18 variants)
   ======================================== */

export const LockedAllCombinations: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px', padding: '20px' }}>
      <StatusIconwLabel status="locked" step="past" size="small" label="past-step" />
      <StatusIconwLabel status="locked" step="past" size="small" label="past-step" disabled />
      <StatusIconwLabel status="locked" step="future" size="small" label="future-step" />
      <StatusIconwLabel status="locked" step="future" size="small" label="future-step" disabled />
      <StatusIconwLabel status="locked" step="current" size="small" label="current-step" />
      <StatusIconwLabel status="locked" step="current" size="small" label="current-step" disabled />

      <StatusIconwLabel status="locked" step="past" size="default" label="past-step" />
      <StatusIconwLabel status="locked" step="past" size="default" label="past-step" disabled />
      <StatusIconwLabel status="locked" step="future" size="default" label="future-step" />
      <StatusIconwLabel status="locked" step="future" size="default" label="future-step" disabled />
      <StatusIconwLabel status="locked" step="current" size="default" label="current-step" />
      <StatusIconwLabel status="locked" step="current" size="default" label="current-step" disabled />

      <StatusIconwLabel status="locked" step="past" size="large" label="past-step" />
      <StatusIconwLabel status="locked" step="past" size="large" label="past-step" disabled />
      <StatusIconwLabel status="locked" step="future" size="large" label="future-step" />
      <StatusIconwLabel status="locked" step="future" size="large" label="future-step" disabled />
      <StatusIconwLabel status="locked" step="current" size="large" label="current-step" />
      <StatusIconwLabel status="locked" step="current" size="large" label="current-step" disabled />
    </div>
  ),
};

/* ========================================
   COMMENTS STATUS (18 variants)
   ======================================== */

export const CommentsAllCombinations: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px', padding: '20px' }}>
      <StatusIconwLabel status="comments" step="past" size="small" label="past-step" />
      <StatusIconwLabel status="comments" step="past" size="small" label="past-step" disabled />
      <StatusIconwLabel status="comments" step="future" size="small" label="future-step" />
      <StatusIconwLabel status="comments" step="future" size="small" label="future-step" disabled />
      <StatusIconwLabel status="comments" step="current" size="small" label="current-step" />
      <StatusIconwLabel status="comments" step="current" size="small" label="current-step" disabled />

      <StatusIconwLabel status="comments" step="past" size="default" label="past-step" />
      <StatusIconwLabel status="comments" step="past" size="default" label="past-step" disabled />
      <StatusIconwLabel status="comments" step="future" size="default" label="future-step" />
      <StatusIconwLabel status="comments" step="future" size="default" label="future-step" disabled />
      <StatusIconwLabel status="comments" step="current" size="default" label="current-step" />
      <StatusIconwLabel status="comments" step="current" size="default" label="current-step" disabled />

      <StatusIconwLabel status="comments" step="past" size="large" label="past-step" />
      <StatusIconwLabel status="comments" step="past" size="large" label="past-step" disabled />
      <StatusIconwLabel status="comments" step="future" size="large" label="future-step" />
      <StatusIconwLabel status="comments" step="future" size="large" label="future-step" disabled />
      <StatusIconwLabel status="comments" step="current" size="large" label="current-step" />
      <StatusIconwLabel status="comments" step="current" size="large" label="current-step" disabled />
    </div>
  ),
};

/* ========================================
   NOTIFICATIONS STATUS (18 variants)
   ======================================== */

export const NotificationsAllCombinations: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px', padding: '20px' }}>
      <StatusIconwLabel status="notifications" step="past" size="small" label="past-step" />
      <StatusIconwLabel status="notifications" step="past" size="small" label="past-step" disabled />
      <StatusIconwLabel status="notifications" step="future" size="small" label="future-step" />
      <StatusIconwLabel status="notifications" step="future" size="small" label="future-step" disabled />
      <StatusIconwLabel status="notifications" step="current" size="small" label="current-step" />
      <StatusIconwLabel status="notifications" step="current" size="small" label="current-step" disabled />

      <StatusIconwLabel status="notifications" step="past" size="default" label="past-step" />
      <StatusIconwLabel status="notifications" step="past" size="default" label="past-step" disabled />
      <StatusIconwLabel status="notifications" step="future" size="default" label="future-step" />
      <StatusIconwLabel status="notifications" step="future" size="default" label="future-step" disabled />
      <StatusIconwLabel status="notifications" step="current" size="default" label="current-step" />
      <StatusIconwLabel status="notifications" step="current" size="default" label="current-step" disabled />

      <StatusIconwLabel status="notifications" step="past" size="large" label="past-step" />
      <StatusIconwLabel status="notifications" step="past" size="large" label="past-step" disabled />
      <StatusIconwLabel status="notifications" step="future" size="large" label="future-step" />
      <StatusIconwLabel status="notifications" step="future" size="large" label="future-step" disabled />
      <StatusIconwLabel status="notifications" step="current" size="large" label="current-step" />
      <StatusIconwLabel status="notifications" step="current" size="large" label="current-step" disabled />
    </div>
  ),
};

/* ========================================
   NOTE STATUS (18 variants)
   ======================================== */

export const NoteAllCombinations: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px', padding: '20px' }}>
      <StatusIconwLabel status="note" step="past" size="small" label="past-step" />
      <StatusIconwLabel status="note" step="past" size="small" label="past-step" disabled />
      <StatusIconwLabel status="note" step="future" size="small" label="future-step" />
      <StatusIconwLabel status="note" step="future" size="small" label="future-step" disabled />
      <StatusIconwLabel status="note" step="current" size="small" label="current-step" />
      <StatusIconwLabel status="note" step="current" size="small" label="current-step" disabled />

      <StatusIconwLabel status="note" step="past" size="default" label="past-step" />
      <StatusIconwLabel status="note" step="past" size="default" label="past-step" disabled />
      <StatusIconwLabel status="note" step="future" size="default" label="future-step" />
      <StatusIconwLabel status="note" step="future" size="default" label="future-step" disabled />
      <StatusIconwLabel status="note" step="current" size="default" label="current-step" />
      <StatusIconwLabel status="note" step="current" size="default" label="current-step" disabled />

      <StatusIconwLabel status="note" step="past" size="large" label="past-step" />
      <StatusIconwLabel status="note" step="past" size="large" label="past-step" disabled />
      <StatusIconwLabel status="note" step="future" size="large" label="future-step" />
      <StatusIconwLabel status="note" step="future" size="large" label="future-step" disabled />
      <StatusIconwLabel status="note" step="current" size="large" label="current-step" />
      <StatusIconwLabel status="note" step="current" size="large" label="current-step" disabled />
    </div>
  ),
};

/* ========================================
   EDIT STATUS (18 variants)
   ======================================== */

export const EditAllCombinations: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '24px', padding: '20px' }}>
      <StatusIconwLabel status="edit" step="past" size="small" label="past-step" />
      <StatusIconwLabel status="edit" step="past" size="small" label="past-step" disabled />
      <StatusIconwLabel status="edit" step="future" size="small" label="future-step" />
      <StatusIconwLabel status="edit" step="future" size="small" label="future-step" disabled />
      <StatusIconwLabel status="edit" step="current" size="small" label="current-step" />
      <StatusIconwLabel status="edit" step="current" size="small" label="current-step" disabled />

      <StatusIconwLabel status="edit" step="past" size="default" label="past-step" />
      <StatusIconwLabel status="edit" step="past" size="default" label="past-step" disabled />
      <StatusIconwLabel status="edit" step="future" size="default" label="future-step" />
      <StatusIconwLabel status="edit" step="future" size="default" label="future-step" disabled />
      <StatusIconwLabel status="edit" step="current" size="default" label="current-step" />
      <StatusIconwLabel status="edit" step="current" size="default" label="current-step" disabled />

      <StatusIconwLabel status="edit" step="past" size="large" label="past-step" />
      <StatusIconwLabel status="edit" step="past" size="large" label="past-step" disabled />
      <StatusIconwLabel status="edit" step="future" size="large" label="future-step" />
      <StatusIconwLabel status="edit" step="future" size="large" label="future-step" disabled />
      <StatusIconwLabel status="edit" step="current" size="large" label="current-step" />
      <StatusIconwLabel status="edit" step="current" size="large" label="current-step" disabled />
    </div>
  ),
};

/* ========================================
   ALL 144 VARIANTS COMPARISON TABLE
   ======================================== */

export const AllVariantsComparison: Story = {
  render: () => {
    const statuses: StatusIconwLabelProps['status'][] = ['warning', 'error', 'complete', 'locked', 'comments', 'notifications', 'note', 'edit'];
    const steps: StatusIconwLabelProps['step'][] = ['past', 'future', 'current'];
    const sizes: StatusIconwLabelProps['size'][] = ['small', 'default', 'large'];

    return (
      <div style={{ padding: '20px' }}>
        <h2>All 144 Variants Comparison Table</h2>
        <p>8 statuses × 3 sizes × 3 steps × 2 states = 144 total variants</p>
        {statuses.map((status) => (
          <div key={status} style={{ marginBottom: '40px' }}>
            <h3 style={{ textTransform: 'capitalize', marginBottom: '20px' }}>{status} Status</h3>
            {sizes.map((size) => (
              <div key={`${status}-${size}`} style={{ marginBottom: '30px' }}>
                <h4 style={{ textTransform: 'capitalize', marginBottom: '15px', fontSize: '14px', color: '#666' }}>
                  Size: {size}
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px' }}>
                  {steps.flatMap((step) => [
                    <div key={`${status}-${size}-${step}-default`}>
                      <StatusIconwLabel status={status} step={step} size={size} label={step} />
                    </div>,
                    <div key={`${status}-${size}-${step}-disabled`}>
                      <StatusIconwLabel status={status} step={step} size={size} label={step} disabled />
                    </div>,
                  ])}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
