import type { Meta, StoryObj } from '@storybook/react';
import { StepIndicator } from './StepIndicator';
import './stepIndicator.css';

const meta: Meta<typeof StepIndicator> = {
  title: 'Atoms/🧱 Building Blocks/Step Indicator',
  component: StepIndicator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Step indicator component for showing workflow status in accordions and multi-step processes. Supports multiple types (warning, complete, locked, comments, notifications, error, note) and sizes (small, default, large).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['warning', 'locked', 'comments', 'complete', 'notifications', 'error', 'note'],
      description: 'Type of step indicator',
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
      description: 'Whether the indicator is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    complete: {
      control: 'boolean',
      description: 'Whether this step is complete',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    current: {
      control: 'boolean',
      description: 'Whether this is the current step',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StepIndicator>;

export const Default: Story = {
  args: {
    type: 'warning',
    size: 'default',
    disabled: false,
    complete: false,
    current: false,
  },
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="warning" size="default" />
        <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: 500, color: '#666' }}>Warning</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="complete" size="default" />
        <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: 500, color: '#666' }}>Complete</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="locked" size="default" />
        <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: 500, color: '#666' }}>Locked</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="comments" size="default" />
        <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: 500, color: '#666' }}>Comments</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="notifications" size="default" />
        <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: 500, color: '#666' }}>Notifications</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="error" size="default" />
        <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: 500, color: '#666' }}>Error</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="note" size="default" />
        <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: 500, color: '#666' }}>Note</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available step indicator types in default size.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '48px', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="warning" size="small" />
        <div style={{ marginTop: '12px', fontSize: '12px', fontWeight: 500, color: '#666' }}>Small</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="warning" size="default" />
        <div style={{ marginTop: '12px', fontSize: '12px', fontWeight: 500, color: '#666' }}>Default</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="warning" size="large" />
        <div style={{ marginTop: '12px', fontSize: '12px', fontWeight: 500, color: '#666' }}>Large</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Size variations of the step indicator.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', padding: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="warning" size="default" />
        <div style={{ marginTop: '12px', fontSize: '12px', fontWeight: 500, color: '#666' }}>Default</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="warning" size="default" current={true} />
        <div style={{ marginTop: '12px', fontSize: '12px', fontWeight: 500, color: '#2F42BD' }}>Current</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="warning" size="default" complete={true} />
        <div style={{ marginTop: '12px', fontSize: '12px', fontWeight: 500, color: '#22C55E' }}>Complete</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StepIndicator type="warning" size="default" disabled={true} />
        <div style={{ marginTop: '12px', fontSize: '12px', fontWeight: 500, color: '#9CA3AF' }}>Disabled</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states of the step indicator: default, current, complete, and disabled.',
      },
    },
  },
};

export const ComprehensiveMatrix: Story = {
  render: () => (
    <div style={{ padding: '40px', background: '#f9fafb', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '32px', textAlign: 'center', color: '#2F42BD' }}>
        Step Indicator Complete Matrix
      </h1>
      
      {/* Warning Type */}
      <div style={{ marginBottom: '48px', padding: '24px', background: 'white', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#333' }}>Warning Type</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="warning" size="small" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Small</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="warning" size="default" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Default</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="warning" size="large" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Large</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="warning" size="small" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Small Disabled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="warning" size="default" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Default Disabled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="warning" size="large" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Large Disabled</div>
          </div>
        </div>
      </div>

      {/* Complete Type */}
      <div style={{ marginBottom: '48px', padding: '24px', background: 'white', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#333' }}>Complete Type</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="complete" size="small" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Small</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="complete" size="default" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Default</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="complete" size="large" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Large</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="complete" size="small" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Small Disabled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="complete" size="default" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Default Disabled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="complete" size="large" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Large Disabled</div>
          </div>
        </div>
      </div>

      {/* Locked Type */}
      <div style={{ marginBottom: '48px', padding: '24px', background: 'white', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#333' }}>Locked Type</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="locked" size="small" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Small</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="locked" size="default" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Default</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="locked" size="large" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Large</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="locked" size="small" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Small Disabled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="locked" size="default" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Default Disabled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="locked" size="large" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Large Disabled</div>
          </div>
        </div>
      </div>

      {/* Comments Type */}
      <div style={{ marginBottom: '48px', padding: '24px', background: 'white', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#333' }}>Comments Type</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="comments" size="small" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Small</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="comments" size="default" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Default</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="comments" size="large" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Large</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="comments" size="small" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Small Disabled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="comments" size="default" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Default Disabled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="comments" size="large" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Large Disabled</div>
          </div>
        </div>
      </div>

      {/* Notifications Type */}
      <div style={{ marginBottom: '48px', padding: '24px', background: 'white', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#333' }}>Notifications Type</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="notifications" size="small" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Small</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="notifications" size="default" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Default</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="notifications" size="large" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Large</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="notifications" size="small" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Small Disabled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="notifications" size="default" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Default Disabled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="notifications" size="large" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Large Disabled</div>
          </div>
        </div>
      </div>

      {/* Error Type */}
      <div style={{ marginBottom: '48px', padding: '24px', background: 'white', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#333' }}>Error Type</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="error" size="small" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Small</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="error" size="default" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Default</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="error" size="large" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Large</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="error" size="small" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Small Disabled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="error" size="default" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Default Disabled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="error" size="large" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Large Disabled</div>
          </div>
        </div>
      </div>

      {/* Note Type */}
      <div style={{ marginBottom: '48px', padding: '24px', background: 'white', borderRadius: '12px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#333' }}>Note Type</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="note" size="small" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Small</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="note" size="default" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Default</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="note" size="large" />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Large</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="note" size="small" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Small Disabled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="note" size="default" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Default Disabled</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <StepIndicator type="note" size="large" disabled />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#666' }}>Large Disabled</div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete matrix showing all step indicator types in all sizes and states.',
      },
    },
  },
};

export const NuclearWorkflowExample: Story = {
  render: () => (
    <div style={{ padding: '40px', background: '#f9fafb', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '900px', width: '100%' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '32px', textAlign: 'center', color: '#2F42BD' }}>
          Nuclear Safety Approval Workflow
        </h2>
        
        <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', flex: '1', minWidth: '100px' }}>
              <StepIndicator type="complete" size="default" complete={true} />
              <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: 600, color: '#227F1A' }}>Safety Check</div>
              <div style={{ marginTop: '4px', fontSize: '12px', color: '#666' }}>Completed</div>
            </div>

            <div style={{ height: '2px', background: '#e9ecef', flex: '0 0 32px' }}></div>

            <div style={{ textAlign: 'center', flex: '1', minWidth: '100px' }}>
              <StepIndicator type="notifications" size="default" current={true} />
              <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: 600, color: '#2F42BD' }}>Review</div>
              <div style={{ marginTop: '4px', fontSize: '12px', color: '#666' }}>In Progress</div>
            </div>

            <div style={{ height: '2px', background: '#e9ecef', flex: '0 0 32px' }}></div>

            <div style={{ textAlign: 'center', flex: '1', minWidth: '100px' }}>
              <StepIndicator type="locked" size="default" disabled={true} />
              <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: 500, color: '#9CA3AF' }}>Approval</div>
              <div style={{ marginTop: '4px', fontSize: '12px', color: '#9CA3AF' }}>Locked</div>
            </div>

            <div style={{ height: '2px', background: '#e9ecef', flex: '0 0 32px' }}></div>

            <div style={{ textAlign: 'center', flex: '1', minWidth: '100px' }}>
              <StepIndicator type="warning" size="default" disabled={true} />
              <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: 500, color: '#9CA3AF' }}>Deploy</div>
              <div style={{ marginTop: '4px', fontSize: '12px', color: '#9CA3AF' }}>Pending</div>
            </div>
          </div>

          <div style={{ marginTop: '32px', padding: '16px', background: '#f3f4f6', borderRadius: '8px', borderLeft: '4px solid #2F42BD' }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#374151' }}>
              <strong>Current Step:</strong> Document review in progress. 2 reviewers have approved, awaiting final approval.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Example of step indicators used in a nuclear safety approval workflow.',
      },
    },
  },
};
