import type { Meta, StoryObj } from '@storybook/react';
import { Label, AlarmIcon, ArrowDownCircleIcon } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible label component with support for icons, different sizes, types, and split functionality with dropdowns. Based on the Echo design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Label text content',
    },
    size: {
      control: { type: 'select' },
      options: ['extra-small', 'small', 'default', 'large'],
      description: 'Size of the label',
    },
    type: {
      control: { type: 'select' },
      options: ['default', 'ghost'],
      description: 'Visual style variant',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'clicked', 'focused', 'disabled'],
      description: 'Visual state for testing',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Icon-only variant',
    },
    split: {
      control: 'boolean',
      description: 'Split variant with dropdown',
    },
    onClick: { action: 'clicked' },
    onToggle: { action: 'dropdown toggled' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample menu items for split variant
const sampleMenuItems = [
  { id: '1', label: 'Option 1', onClick: () => console.log('Option 1 clicked') },
  { id: '2', label: 'Option 2', onClick: () => console.log('Option 2 clicked') },
  { id: '3', label: 'Option 3', onClick: () => console.log('Option 3 clicked') },
];

// Basic label stories
export const Default: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'default',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'ghost',
  },
};

export const WithLeadingIcon: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'default',
    leadingIcon: <AlarmIcon size={18} />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'default',
    trailingIcon: <ArrowDownCircleIcon size={18} />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'default',
    leadingIcon: <AlarmIcon size={18} />,
    trailingIcon: <ArrowDownCircleIcon size={18} />,
  },
};

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    icon: <AlarmIcon size={18} />,
    size: 'default',
    type: 'default',
  },
};

export const Split: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'default',
    split: true,
    menuItems: sampleMenuItems,
  },
};

export const SplitWithLeadingIcon: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'default',
    split: true,
    leadingIcon: <AlarmIcon size={18} />,
    menuItems: sampleMenuItems,
  },
};

// Size variants
export const ExtraSmall: Story = {
  args: {
    children: 'Button w/ leading icon',
    size: 'extra-small',
    type: 'default',
    leadingIcon: <AlarmIcon size={14} />,
  },
};

export const Small: Story = {
  args: {
    children: 'Label',
    size: 'small',
    type: 'default',
    leadingIcon: <AlarmIcon size={14} />,
    trailingIcon: <ArrowDownCircleIcon size={14} />,
  },
};

export const Large: Story = {
  args: {
    children: 'Label',
    size: 'large',
    type: 'default',
    leadingIcon: <AlarmIcon size={20} />,
    trailingIcon: <ArrowDownCircleIcon size={20} />,
  },
};

// State variants
export const Disabled: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'default',
    disabled: true,
    leadingIcon: <AlarmIcon size={18} />,
  },
};

export const Hover: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'default',
    state: 'hover',
    leadingIcon: <AlarmIcon size={18} />,
  },
};

export const Clicked: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'default',
    state: 'clicked',
    leadingIcon: <AlarmIcon size={18} />,
  },
};

export const Focused: Story = {
  args: {
    children: 'Label',
    size: 'default',
    type: 'default',
    state: 'focused',
    leadingIcon: <AlarmIcon size={18} />,
  },
};

// Comprehensive showcase matching Figma design
export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Label Component Showcase</h3>
      
      {/* Small size variants */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500, minWidth: '120px' }}>Small Size:</h4>
        <Label size="small" type="default" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownCircleIcon size={14} />}>
          Label
        </Label>
        <Label size="small" type="ghost" leadingIcon={<AlarmIcon size={14} />} trailingIcon={<ArrowDownCircleIcon size={14} />}>
          Label
        </Label>
        <Label size="small" type="default" split={true} menuItems={sampleMenuItems}>
          Label
        </Label>
        <Label size="small" type="ghost">
          Label
        </Label>
        <Label size="small" type="default" iconOnly={true} icon={<AlarmIcon size={14} />} />
        <Label size="small" type="ghost" iconOnly={true} icon={<AlarmIcon size={14} />} />
      </div>

      {/* Default size variants */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500, minWidth: '120px' }}>Default Size:</h4>
        <Label size="default" type="default" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownCircleIcon size={18} />}>
          Label
        </Label>
        <Label size="default" type="ghost" leadingIcon={<AlarmIcon size={18} />} trailingIcon={<ArrowDownCircleIcon size={18} />}>
          Label
        </Label>
        <Label size="default" type="default" split={true} menuItems={sampleMenuItems}>
          Label
        </Label>
        <Label size="default" type="ghost">
          Label
        </Label>
        <Label size="default" type="default" iconOnly={true} icon={<AlarmIcon size={18} />} />
        <Label size="default" type="ghost" iconOnly={true} icon={<AlarmIcon size={18} />} />
      </div>

      {/* Large size variants */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500, minWidth: '120px' }}>Large Size:</h4>
        <Label size="large" type="default" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownCircleIcon size={20} />}>
          Label
        </Label>
        <Label size="large" type="ghost" leadingIcon={<AlarmIcon size={20} />} trailingIcon={<ArrowDownCircleIcon size={20} />}>
          Label
        </Label>
        <Label size="large" type="default" split={true} menuItems={sampleMenuItems}>
          Label
        </Label>
        <Label size="large" type="ghost">
          Label
        </Label>
        <Label size="large" type="default" iconOnly={true} icon={<AlarmIcon size={20} />} />
        <Label size="large" type="ghost" iconOnly={true} icon={<AlarmIcon size={20} />} />
      </div>

      {/* Extra-small size variants */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500, minWidth: '120px' }}>Extra-Small Size:</h4>
        <Label size="extra-small" type="default" leadingIcon={<AlarmIcon size={14} />}>
          Button w/ leading icon
        </Label>
        <Label size="extra-small" type="ghost" leadingIcon={<AlarmIcon size={14} />}>
          Button w/ leading icon
        </Label>
        <Label size="extra-small" type="default" split={true} menuItems={sampleMenuItems}>
          Label
        </Label>
        <Label size="extra-small" type="ghost">
          Label
        </Label>
        <Label size="extra-small" type="default" iconOnly={true} icon={<AlarmIcon size={14} />} />
        <Label size="extra-small" type="ghost" iconOnly={true} icon={<AlarmIcon size={14} />} />
      </div>

      {/* States showcase */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 500, minWidth: '120px' }}>States:</h4>
        <Label size="default" type="default" leadingIcon={<AlarmIcon size={18} />}>
          Default
        </Label>
        <Label size="default" type="default" state="hover" leadingIcon={<AlarmIcon size={18} />}>
          Hover
        </Label>
        <Label size="default" type="default" state="clicked" leadingIcon={<AlarmIcon size={18} />}>
          Clicked
        </Label>
        <Label size="default" type="default" state="focused" leadingIcon={<AlarmIcon size={18} />}>
          Focused
        </Label>
        <Label size="default" type="default" disabled={true} leadingIcon={<AlarmIcon size={18} />}>
          Disabled
        </Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all label variants and sizes as shown in the Figma design.',
      },
    },
  },
};

// Interactive examples
export const InteractiveSplitLabel: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    const menuItems = [
      { id: '1', label: 'Copy', onClick: () => alert('Copy clicked') },
      { id: '2', label: 'Edit', onClick: () => alert('Edit clicked') },
      { id: '3', label: 'Delete', onClick: () => alert('Delete clicked') },
    ];

    return (
      <div style={{ padding: '20px' }}>
        <Label
          size="default"
          type="default"
          split={true}
          leadingIcon={<AlarmIcon size={18} />}
          menuItems={menuItems}
          isOpen={isOpen}
          onToggle={setIsOpen}
          onClick={() => alert('Main label clicked')}
        >
          Actions
        </Label>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive split label with controlled dropdown state.',
      },
    },
  },
};
