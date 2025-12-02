import type { Meta, StoryObj } from '@storybook/react-vite';
import { AutoSaveButton, type AutoSaveStatus } from './AutoSaveButton';
import './autoSave.css';
import './autoSaveStories.css';
import '../button.css';

const meta: Meta<typeof AutoSaveButton> = {
  title: 'Atoms/Button/AutoSave',
  component: AutoSaveButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'AutoSave button component with status-driven visual states (default, disabled, hover, saving, auto-saving, saved, error-saving). Matches the Figma auto-save button design with pill-shaped layout, icons, and Echo design tokens.',
      },
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'disabled', 'hover', 'saving', 'auto-saving', 'saved', 'error-saving'],
      description: 'Visual status of the auto-save button',
    },
    saveText: {
      control: 'text',
      description: 'Label text for the default state',
    },
    savingText: {
      control: 'text',
      description: 'Label text for the saving state',
    },
    autoSavingText: {
      control: 'text',
      description: 'Label text for the auto-saving state',
    },
    savedText: {
      control: 'text',
      description: 'Label text for the saved state',
    },
    errorText: {
      control: 'text',
      description: 'Label text for the error-saving state',
    },
  },
};

export default meta;

type Story = StoryObj<typeof AutoSaveButton>;

export const Default: Story = {
  args: {
    status: 'default',
  },
};

export const Disabled: Story = {
  args: {
    status: 'disabled',
  },
};

export const Hover: Story = {
  args: {
    status: 'hover',
  },
};

export const Saving: Story = {
  args: {
    status: 'saving',
  },
};

export const AutoSaving: Story = {
  args: {
    status: 'auto-saving',
  },
};

export const Saved: Story = {
  args: {
    status: 'saved',
  },
};

export const ErrorSaving: Story = {
  args: {
    status: 'error-saving',
  },
};

const statusOrder: AutoSaveStatus[] = [
  'default',
  'disabled',
  'hover',
  'saving',
  'auto-saving',
  'saved',
  'error-saving',
];

const statusLabels: Record<AutoSaveStatus, string> = {
  default: 'Default',
  disabled: 'Disabled',
  hover: 'Hover',
  saving: 'Saving draft',
  'auto-saving': 'Auto-saving',
  saved: 'Draft saved',
  'error-saving': 'Unable to save',
};

export const AllStates: Story = {
  render: () => (
    <div className="autosave-story-grid">
      {statusOrder.map((status) => (
        <div key={status} className="autosave-story-item">
          <p className="autosave-story-label">{statusLabels[status]}</p>
          <AutoSaveButton status={status} />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Side-by-side view of all AutoSave button statuses, useful for visual QA and Figma alignment.',
      },
    },
  },
};
