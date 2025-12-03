import type { Meta, StoryObj } from '@storybook/react';
import type { Meta as StorybookMeta, StoryObj } from '@storybook/react';
import AccordionStatus from './AccordionStatus';
import './accordionStatus.css';
import './accordionStatus.stories.css';

const meta: StorybookMeta<typeof AccordionStatus> = {
  title: 'Atoms/🧱 Building Blocks/Accordion Status',
  component: AccordionStatus,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Status icons for accordion headers, matching Figma designs for warning, complete, locked, comments, notifications, error, and note states across small, default, and large sizes.',
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

export const Default: Story = {
  args: {
    type: 'warning',
    size: 'default',
    disabled: false,
  },
};

export const AllTypesDefaultSize: Story = {
  render: () => (
    <div className="accordion-status-story-grid">
      <div className="accordion-status-story-item">
        <AccordionStatus type="warning" size="default" />
        <div className="accordion-status-story-label">Warning</div>
      </div>
      <div className="accordion-status-story-item">
        <AccordionStatus type="complete" size="default" />
        <div className="accordion-status-story-label">Complete</div>
      </div>
      <div className="accordion-status-story-item">
        <AccordionStatus type="locked" size="default" />
        <div className="accordion-status-story-label">Locked</div>
      </div>
      <div className="accordion-status-story-item">
        <AccordionStatus type="comments" size="default" />
        <div className="accordion-status-story-label">Comments</div>
      </div>
      <div className="accordion-status-story-item">
        <AccordionStatus type="notifications" size="default" />
        <div className="accordion-status-story-label">Notifications</div>
      </div>
      <div className="accordion-status-story-item">
        <AccordionStatus type="error" size="default" />
        <div className="accordion-status-story-label">Error</div>
      </div>
      <div className="accordion-status-story-item">
        <AccordionStatus type="note" size="default" />
        <div className="accordion-status-story-label">Note</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All accordion status types in the default size.',
      },
    },
  },
};

export const SizeComparison: Story = {
  render: () => (
    <div className="accordion-status-story-columns">
      <div className="accordion-status-story-column">
        <div className="accordion-status-story-column-title">Small</div>
        <AccordionStatus type="warning" size="small" />
      </div>
      <div className="accordion-status-story-column">
        <div className="accordion-status-story-column-title">Default</div>
        <AccordionStatus type="warning" size="default" />
      </div>
      <div className="accordion-status-story-column">
        <div className="accordion-status-story-column-title">Large</div>
        <AccordionStatus type="warning" size="large" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Size comparison for the warning status icon.',
      },
    },
  },
};

export const StatesMatrix: Story = {
  render: () => (
    <div className="accordion-status-story-matrix">
      <div className="accordion-status-story-matrix-row">
        <div className="accordion-status-story-matrix-label">Enabled</div>
        <div className="accordion-status-story-matrix-icons">
          <AccordionStatus type="warning" size="default" />
          <AccordionStatus type="complete" size="default" />
          <AccordionStatus type="locked" size="default" />
          <AccordionStatus type="comments" size="default" />
          <AccordionStatus type="notifications" size="default" />
          <AccordionStatus type="error" size="default" />
          <AccordionStatus type="note" size="default" />
        </div>
      </div>
      <div className="accordion-status-story-matrix-row">
        <div className="accordion-status-story-matrix-label">Disabled</div>
        <div className="accordion-status-story-matrix-icons">
          <AccordionStatus type="warning" size="default" disabled />
          <AccordionStatus type="complete" size="default" disabled />
          <AccordionStatus type="locked" size="default" disabled />
          <AccordionStatus type="comments" size="default" disabled />
          <AccordionStatus type="notifications" size="default" disabled />
          <AccordionStatus type="error" size="default" disabled />
          <AccordionStatus type="note" size="default" disabled />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Enabled and disabled state comparison for all status types.',
      },
    },
  },
};
