import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SplitButton } from './SplitButton';
import type { SplitButtonMenuItem } from './SplitButton';
import { AlarmIcon } from './Button';

const meta: Meta<typeof SplitButton> = {
  title: 'Atoms/SplitButton',
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
      options: ['primary', 'secondary', 'ghost'],
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

// Auto-open demonstration
export const AutoOpenDemo: Story = {
  render: () => {
    const [openStates, setOpenStates] = React.useState<Record<string, boolean>>({});

    const handleMainClick = (buttonId: string) => {
      console.log(`${buttonId} main button clicked - dropdown will auto-open`);
    };

    const handleToggle = (buttonId: string, isOpen: boolean) => {
      setOpenStates(prev => ({
        ...prev,
        [buttonId]: isOpen
      }));
    };

    const menuItems: SplitButtonMenuItem[] = [
      {
        id: 'option1',
        label: 'Option 1',
        onClick: () => console.log('Option 1 clicked'),
      },
      {
        id: 'option2',
        label: 'Option 2',
        onClick: () => console.log('Option 2 clicked'),
      },
      {
        id: 'option3',
        label: 'Option 3',
        onClick: () => console.log('Option 3 clicked'),
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', padding: '24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '500px' }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Auto-Open Functionality Demo</h3>
          <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
            Click the main button area (not the dropdown arrow) to see the dropdown automatically open.
            The button will also show visual feedback with enhanced shadows and styling when active.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <SplitButton
            size="default"
            type="primary"
            isOpen={openStates['primary'] || false}
            onToggle={(isOpen) => handleToggle('primary', isOpen)}
            onClick={() => handleMainClick('Primary')}
            menuItems={menuItems}
          >
            Primary Button
          </SplitButton>

          <SplitButton
            size="default"
            type="secondary"
            isOpen={openStates['secondary'] || false}
            onToggle={(isOpen) => handleToggle('secondary', isOpen)}
            onClick={() => handleMainClick('Secondary')}
            menuItems={menuItems}
          >
            Secondary Button
          </SplitButton>

          <SplitButton
            size="default"
            type="ghost"
            isOpen={openStates['ghost'] || false}
            onToggle={(isOpen) => handleToggle('ghost', isOpen)}
            onClick={() => handleMainClick('Ghost')}
            menuItems={menuItems}
          >
            Ghost Button
          </SplitButton>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the automatic dropdown opening functionality when the main button is pressed, with proper effects tokens for hover states and enhanced visual feedback when active.',
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

// Complete design system showcase
export const DesignSystemShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Primary Split Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <SplitButton size="extra-small" type="primary" menuItems={defaultMenuItems}>
            Extra Small
          </SplitButton>
          <SplitButton size="small" type="primary" menuItems={defaultMenuItems}>
            Small
          </SplitButton>
          <SplitButton size="default" type="primary" menuItems={defaultMenuItems}>
            Default
          </SplitButton>
          <SplitButton size="large" type="primary" menuItems={defaultMenuItems}>
            Large
          </SplitButton>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Secondary Split Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <SplitButton size="extra-small" type="secondary" menuItems={defaultMenuItems}>
            Extra Small
          </SplitButton>
          <SplitButton size="small" type="secondary" menuItems={defaultMenuItems}>
            Small
          </SplitButton>
          <SplitButton size="default" type="secondary" menuItems={defaultMenuItems}>
            Default
          </SplitButton>
          <SplitButton size="large" type="secondary" menuItems={defaultMenuItems}>
            Large
          </SplitButton>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Ghost Split Buttons - All Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <SplitButton size="extra-small" type="ghost" menuItems={defaultMenuItems}>
            Extra Small
          </SplitButton>
          <SplitButton size="small" type="ghost" menuItems={defaultMenuItems}>
            Small
          </SplitButton>
          <SplitButton size="default" type="ghost" menuItems={defaultMenuItems}>
            Default
          </SplitButton>
          <SplitButton size="large" type="ghost" menuItems={defaultMenuItems}>
            Large
          </SplitButton>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Split Button States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ minWidth: '80px', fontSize: '14px', fontWeight: '500' }}>Primary:</span>
            <SplitButton size="default" type="primary" menuItems={defaultMenuItems}>
              Default
            </SplitButton>
            <SplitButton size="default" type="primary" loading menuItems={defaultMenuItems}>
              Loading
            </SplitButton>
            <SplitButton size="default" type="primary" disabled menuItems={defaultMenuItems}>
              Disabled
            </SplitButton>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ minWidth: '80px', fontSize: '14px', fontWeight: '500' }}>Secondary:</span>
            <SplitButton size="default" type="secondary" menuItems={defaultMenuItems}>
              Default
            </SplitButton>
            <SplitButton size="default" type="secondary" loading menuItems={defaultMenuItems}>
              Loading
            </SplitButton>
            <SplitButton size="default" type="secondary" disabled menuItems={defaultMenuItems}>
              Disabled
            </SplitButton>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ minWidth: '80px', fontSize: '14px', fontWeight: '500' }}>Ghost:</span>
            <SplitButton size="default" type="ghost" menuItems={defaultMenuItems}>
              Default
            </SplitButton>
            <SplitButton size="default" type="ghost" loading menuItems={defaultMenuItems}>
              Loading
            </SplitButton>
            <SplitButton size="default" type="ghost" disabled menuItems={defaultMenuItems}>
              Disabled
            </SplitButton>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Open Dropdown States</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <SplitButton size="small" type="primary" isOpen menuItems={defaultMenuItems}>
            Small Open
          </SplitButton>
          <SplitButton size="default" type="secondary" isOpen menuItems={defaultMenuItems}>
            Default Open
          </SplitButton>
          <SplitButton size="large" type="ghost" isOpen menuItems={defaultMenuItems}>
            Large Open
          </SplitButton>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>With Leading Icons</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <SplitButton size="default" type="primary" leadingIcon={<AlarmIcon size={18} />} menuItems={defaultMenuItems}>
            Primary
          </SplitButton>
          <SplitButton size="default" type="secondary" leadingIcon={<AlarmIcon size={18} />} menuItems={defaultMenuItems}>
            Secondary
          </SplitButton>
          <SplitButton size="default" type="ghost" leadingIcon={<AlarmIcon size={18} />} menuItems={defaultMenuItems}>
            Ghost
          </SplitButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete design system showcase with all split button variants, sizes, and states, matching the Figma specifications.',
      },
    },
  },
};

// Comprehensive states showcase that matches the Figma design grid
export const ComprehensiveSplitButtonsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Primary Split Buttons</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', alignItems: 'center' }}>
          {/* Header row */}
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Open</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Loading</div>

          {/* Extra Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Extra Small</div>
          <SplitButton size="extra-small" type="primary" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="extra-small" type="primary" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="extra-small" type="primary" loading menuItems={defaultMenuItems}>Label</SplitButton>

          {/* Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <SplitButton size="small" type="primary" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="small" type="primary" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="small" type="primary" loading menuItems={defaultMenuItems}>Label</SplitButton>

          {/* Default row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <SplitButton size="default" type="primary" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="default" type="primary" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="default" type="primary" loading menuItems={defaultMenuItems}>Label</SplitButton>

          {/* Large row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <SplitButton size="large" type="primary" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="large" type="primary" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="large" type="primary" loading menuItems={defaultMenuItems}>Label</SplitButton>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Secondary Split Buttons</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', alignItems: 'center' }}>
          {/* Header row */}
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Open</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Loading</div>

          {/* Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <SplitButton size="small" type="secondary" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="small" type="secondary" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="small" type="secondary" loading menuItems={defaultMenuItems}>Label</SplitButton>

          {/* Default row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <SplitButton size="default" type="secondary" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="default" type="secondary" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="default" type="secondary" loading menuItems={defaultMenuItems}>Label</SplitButton>

          {/* Large row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <SplitButton size="large" type="secondary" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="large" type="secondary" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="large" type="secondary" loading menuItems={defaultMenuItems}>Label</SplitButton>
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Ghost Split Buttons</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', alignItems: 'center' }}>
          {/* Header row */}
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Size</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Default</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Open</div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Loading</div>

          {/* Small row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Small</div>
          <SplitButton size="small" type="ghost" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="small" type="ghost" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="small" type="ghost" loading menuItems={defaultMenuItems}>Label</SplitButton>

          {/* Default row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Default</div>
          <SplitButton size="default" type="ghost" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="default" type="ghost" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="default" type="ghost" loading menuItems={defaultMenuItems}>Label</SplitButton>

          {/* Large row */}
          <div style={{ fontSize: '14px', fontWeight: '500' }}>Large</div>
          <SplitButton size="large" type="ghost" menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="large" type="ghost" isOpen menuItems={defaultMenuItems}>Label</SplitButton>
          <SplitButton size="large" type="ghost" loading menuItems={defaultMenuItems}>Label</SplitButton>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all split button variants in a grid format, matching the exact Figma design layout.',
      },
    },
  },
};
