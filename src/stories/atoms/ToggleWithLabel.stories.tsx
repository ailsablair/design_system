import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Toggle } from './building-blocks/Toggle';
import './toggleWithLabel.css';

type ToggleSize = 'small' | 'default' | 'large';

type ToggleWithLabelProps = {
  size: ToggleSize;
  defaultEnabled?: boolean;
  label?: string;
};

const meta: Meta<typeof Toggle> = {
  title: 'Atoms/Toggle with Label',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toggle components with labels as shown in the Figma design. Showcasing the building-blocks toggle in all sizes with proper labeling.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

const sizeClassMap: Record<ToggleSize, string> = {
  small: 'toggle-with-label-row--small',
  default: 'toggle-with-label-row--default',
  large: 'toggle-with-label-row--large',
};

const ToggleWithLabel = ({ size, defaultEnabled = true, label = 'This is the toggle label' }: ToggleWithLabelProps) => {
  const [isEnabled, setIsEnabled] = useState(defaultEnabled);

  const handleToggle = () => {
    setIsEnabled((previous) => !previous);
  };

  return (
    <div className={`toggle-with-label-row ${sizeClassMap[size]}`}>
      <Toggle
        size={size}
        enabled={isEnabled}
        icon
        state="default"
        aria-label={label}
        onChange={(event) => setIsEnabled(event.target.checked)}
      />
      <button
        type="button"
        className="toggle-with-label-text"
        onClick={handleToggle}
      >
        {label}
      </button>
    </div>
  );
};

export const SmallToggleWithLabel: Story = {
  render: () => <ToggleWithLabel size="small" defaultEnabled />,
  parameters: {
    docs: {
      description: {
        story: 'Small toggle with label as shown in Figma design.',
      },
    },
  },
};

export const DefaultToggleWithLabel: Story = {
  render: () => <ToggleWithLabel size="default" defaultEnabled />,
  parameters: {
    docs: {
      description: {
        story: 'Default toggle with label as shown in Figma design.',
      },
    },
  },
};

export const LargeToggleWithLabel: Story = {
  render: () => <ToggleWithLabel size="large" defaultEnabled />,
  parameters: {
    docs: {
      description: {
        story: 'Large toggle with label as shown in Figma design.',
      },
    },
  },
};

export const FigmaDesignShowcase: Story = {
  render: () => (
    <div className="toggle-with-label-showcase">
      <h2 className="toggle-with-label-heading">Figma Design - Toggle with Labels</h2>
      <ToggleWithLabel size="default" defaultEnabled />
      <ToggleWithLabel size="large" defaultEnabled />
      <ToggleWithLabel size="small" defaultEnabled />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase matching the Figma design with all toggle sizes and their labels.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="toggle-with-label-size-showcase">
      <div className="toggle-with-label-size-row">
        <span className="toggle-with-label-size-title">Small:</span>
        <Toggle size="small" enabled={false} icon />
        <Toggle size="small" enabled={true} icon />
        <Toggle size="small" enabled={false} icon disabled={true} />
        <Toggle size="small" enabled={true} icon disabled={true} />
      </div>
      <div className="toggle-with-label-size-row">
        <span className="toggle-with-label-size-title">Default:</span>
        <Toggle size="default" enabled={false} icon />
        <Toggle size="default" enabled={true} icon />
        <Toggle size="default" enabled={false} icon disabled={true} />
        <Toggle size="default" enabled={true} icon disabled={true} />
      </div>
      <div className="toggle-with-label-size-row">
        <span className="toggle-with-label-size-title">Large:</span>
        <Toggle size="large" enabled={false} icon />
        <Toggle size="large" enabled={true} icon />
        <Toggle size="large" enabled={false} icon disabled={true} />
        <Toggle size="large" enabled={true} icon disabled={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Overview of all toggle sizes showing disabled/enabled and normal/disabled states.',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="toggle-state-showcase">
      <h3 className="toggle-state-heading">Enabled True States</h3>
      <div className="toggle-state-section">
        <div className="toggle-state-row">
          <span className="toggle-state-label">Default:</span>
          <Toggle enabled={true} state="default" icon />
        </div>
        <div className="toggle-state-row">
          <span className="toggle-state-label">Hover:</span>
          <Toggle enabled={true} state="hover" icon />
        </div>
        <div className="toggle-state-row">
          <span className="toggle-state-label">Focused:</span>
          <Toggle enabled={true} state="focused" icon />
        </div>
        <div className="toggle-state-row">
          <span className="toggle-state-label">Clicked:</span>
          <Toggle enabled={true} state="clicked" icon />
        </div>
        <div className="toggle-state-row">
          <span className="toggle-state-label">Disabled:</span>
          <Toggle enabled={true} state="disabled" icon disabled={true} />
        </div>
      </div>

      <h3 className="toggle-state-heading toggle-state-heading--spaced">Enabled False States</h3>
      <div className="toggle-state-section">
        <div className="toggle-state-row">
          <span className="toggle-state-label">Default:</span>
          <Toggle enabled={false} state="default" icon />
        </div>
        <div className="toggle-state-row">
          <span className="toggle-state-label">Hover:</span>
          <Toggle enabled={false} state="hover" icon />
        </div>
        <div className="toggle-state-row">
          <span className="toggle-state-label">Focused:</span>
          <Toggle enabled={false} state="focused" icon />
        </div>
        <div className="toggle-state-row">
          <span className="toggle-state-label">Clicked:</span>
          <Toggle enabled={false} state="clicked" icon />
        </div>
        <div className="toggle-state-row">
          <span className="toggle-state-label">Disabled:</span>
          <Toggle enabled={false} state="disabled" icon disabled={true} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete overview of all toggle states for both enabled and disabled variations.',
      },
    },
  },
};
