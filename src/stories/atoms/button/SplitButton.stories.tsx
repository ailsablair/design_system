import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SplitButton } from './SplitButton';
import type { SplitButtonMenuItem } from './SplitButton';
import { AlarmIcon } from '../Button';

const meta: Meta<typeof SplitButton> = {
  title: 'Atoms/Button/SplitButton',
  component: SplitButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Split button component with dropdown menu functionality. Includes primary, secondary, and ghost variants across all sizes with keyboard navigation support. Matches the Figma design system specifications.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['extra-small', 'small', 'default', 'large'],
      description: 'Split button size variant',
    },
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'warning'],
      description: 'Split button type/variant',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'clicked', 'focused', 'loading', 'disabled'],
      description: 'Visual state (for controlled states)',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    width: {
      control: 'select',
      options: ['auto', 'full'],
      description: 'Width style',
    },
    isOpen: {
      control: 'boolean',
      description: 'Controlled open state for dropdown',
    },
    children: {
      control: 'text',
      description: 'Split button text content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SplitButton>;

// Default menu items for stories
const defaultMenuItems: SplitButtonMenuItem[] = [
  {
    id: 'top',
    label: 'This is the top',
    onClick: () => console.log('Top item clicked'),
  },
  {
    id: 'middle1',
    label: 'This is the middle',
    onClick: () => console.log('Middle 1 item clicked'),
  },
  {
    id: 'middle2',
    label: 'This is the middle',
    onClick: () => console.log('Middle 2 item clicked'),
  },
  {
    id: 'bottom',
    label: 'This is the bottom',
    onClick: () => console.log('Bottom item clicked'),
  },
];

// Basic split button examples
export const Default: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const WithLeadingIcon: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    leadingIcon: <AlarmIcon size={18} />,
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

// Size variants - Primary
export const PrimaryExtraSmall: Story = {
  args: {
    children: 'Label',
    size: 'extra-small',
    type: 'primary',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const PrimarySmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'primary',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const PrimaryDefault: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const PrimaryLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'primary',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

// Size variants - Secondary
export const SecondaryExtraSmall: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'secondary',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const SecondarySmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'secondary',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const SecondaryDefault: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'secondary',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const SecondaryLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'secondary',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

// Size variants - Ghost
export const GhostExtraSmall: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'ghost',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const GhostSmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'ghost',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const GhostDefault: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'ghost',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const GhostLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'ghost',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

// Size variants - Warning
export const WarningExtraSmall: Story = {
  args: {
    children: 'Label',
    size: 'extra-small',
    type: 'warning',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const WarningSmall: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'warning',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const WarningDefault: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'warning',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const WarningLarge: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'warning',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

// Open state examples
export const PrimarySmallOpen: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'primary',
    isOpen: true,
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const PrimaryDefaultOpen: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    isOpen: true,
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const PrimaryLargeOpen: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'primary',
    isOpen: true,
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const SecondarySmallOpen: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'secondary',
    isOpen: true,
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const SecondaryDefaultOpen: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'secondary',
    isOpen: true,
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const SecondaryLargeOpen: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'secondary',
    isOpen: true,
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const GhostSmallOpen: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'ghost',
    isOpen: true,
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const GhostDefaultOpen: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'ghost',
    isOpen: true,
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const GhostLargeOpen: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'ghost',
    isOpen: true,
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const WarningSmallOpen: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'warning',
    isOpen: true,
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const WarningDefaultOpen: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'warning',
    isOpen: true,
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const WarningLargeOpen: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'warning',
    isOpen: true,
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

// State variants
export const LoadingState: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    loading: true,
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

export const DisabledState: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'primary',
    disabled: true,
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};

// Extra small with long text example
export const ExtraSmallWithLongText: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'ghost',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
};


// Figma Design Showcase
export const FigmaWarningExtraSmall: Story = {
  args: {
    children: 'Label',
    size: 'extra-small',
    type: 'warning',
    menuItems: defaultMenuItems,
    onClick: () => console.log('Main button clicked'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning split button in extra-small size matching the Figma design specification (button/extra-small/default (primary)/default/split).',
      },
    },
  },
};

// Interactive examples
export const Interactive: Story = {
  render: () => {
    const handleMainClick = (label: string) => {
      alert(`${label} main button clicked!`);
    };

    const handleMenuItemClick = (buttonLabel: string, itemLabel: string) => {
      alert(`${buttonLabel} - ${itemLabel} clicked!`);
    };

    const createMenuItems = (buttonLabel: string): SplitButtonMenuItem[] => [
      {
        id: 'top',
        label: 'This is the top',
        onClick: () => handleMenuItemClick(buttonLabel, 'Top'),
      },
      {
        id: 'middle1',
        label: 'This is the middle',
        onClick: () => handleMenuItemClick(buttonLabel, 'Middle 1'),
      },
      {
        id: 'middle2',
        label: 'This is the middle',
        onClick: () => handleMenuItemClick(buttonLabel, 'Middle 2'),
      },
      {
        id: 'bottom',
        label: 'This is the bottom',
        onClick: () => handleMenuItemClick(buttonLabel, 'Bottom'),
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Primary Split Buttons</h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <SplitButton
              size="small"
              type="primary"
              onClick={() => handleMainClick('Primary Small')}
              menuItems={createMenuItems('Primary Small')}
            >
              Small
            </SplitButton>
            
            <SplitButton
              size="default"
              type="primary"
              onClick={() => handleMainClick('Primary Default')}
              menuItems={createMenuItems('Primary Default')}
            >
              Default
            </SplitButton>
            
            <SplitButton
              size="large"
              type="primary"
              onClick={() => handleMainClick('Primary Large')}
              menuItems={createMenuItems('Primary Large')}
            >
              Large
            </SplitButton>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Secondary Split Buttons</h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <SplitButton
              size="small"
              type="secondary"
              onClick={() => handleMainClick('Secondary Small')}
              menuItems={createMenuItems('Secondary Small')}
            >
              Small
            </SplitButton>
            
            <SplitButton
              size="default"
              type="secondary"
              onClick={() => handleMainClick('Secondary Default')}
              menuItems={createMenuItems('Secondary Default')}
            >
              Default
            </SplitButton>
            
            <SplitButton
              size="large"
              type="secondary"
              onClick={() => handleMainClick('Secondary Large')}
              menuItems={createMenuItems('Secondary Large')}
            >
              Large
            </SplitButton>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Ghost Split Buttons</h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <SplitButton
              size="small"
              type="ghost"
              onClick={() => handleMainClick('Ghost Small')}
              menuItems={createMenuItems('Ghost Small')}
            >
              Small
            </SplitButton>

            <SplitButton
              size="default"
              type="ghost"
              onClick={() => handleMainClick('Ghost Default')}
              menuItems={createMenuItems('Ghost Default')}
            >
              Default
            </SplitButton>

            <SplitButton
              size="large"
              type="ghost"
              onClick={() => handleMainClick('Ghost Large')}
              menuItems={createMenuItems('Ghost Large')}
            >
              Large
            </SplitButton>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '600' }}>Warning Split Buttons</h4>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <SplitButton
              size="small"
              type="warning"
              onClick={() => handleMainClick('Warning Small')}
              menuItems={createMenuItems('Warning Small')}
            >
              Small
            </SplitButton>

            <SplitButton
              size="default"
              type="warning"
              onClick={() => handleMainClick('Warning Default')}
              menuItems={createMenuItems('Warning Default')}
            >
              Default
            </SplitButton>

            <SplitButton
              size="large"
              type="warning"
              onClick={() => handleMainClick('Warning Large')}
              menuItems={createMenuItems('Warning Large')}
            >
              Large
            </SplitButton>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive split buttons with click handlers for both main button and menu items.',
      },
    },
  },
};
