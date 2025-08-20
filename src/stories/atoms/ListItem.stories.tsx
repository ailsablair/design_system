import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from './ListItem';

const meta: Meta<typeof ListItem> = {
  title: 'Atoms/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible list item component with customizable elements including icons, separators, text, and notification badges.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large', 'x-large'],
      description: 'Size variant of the list item',
    },
    label: {
      control: 'text',
      description: 'Text content for the list item',
    },
    showStaticIcon: {
      control: 'boolean',
      description: 'Show the static icon (checkmark)',
    },
    showDisc: {
      control: 'boolean',
      description: 'Show the separator dot',
    },
    showPreText: {
      control: 'boolean',
      description: 'Show the pre-text (forward slash)',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show the main icon (bell)',
    },
    showBadge: {
      control: 'boolean',
      description: 'Show the notification badge',
    },
    badgeNumber: {
      control: 'number',
      description: 'Badge number to display',
    },
    showHorizontalDivider: {
      control: 'boolean',
      description: 'Show horizontal divider',
    },
    showVerticalDivider: {
      control: 'boolean',
      description: 'Show vertical divider',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'List Item',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'List Item',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'List Item',
  },
};

export const XLarge: Story = {
  args: {
    size: 'x-large',
    label: 'List Item',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', width: '400px' }}>
      <ListItem size="small" label="Small List Item" />
      <ListItem size="default" label="Default List Item" />
      <ListItem size="large" label="Large List Item" />
      <ListItem size="x-large" label="X-Large List Item" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All size variants of the list item component displayed together.',
      },
    },
  },
};

export const WithoutElements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Without Static Icon</h4>
        <ListItem label="List Item" showStaticIcon={false} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Without Separator</h4>
        <ListItem label="List Item" showDisc={false} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Without Pre-text</h4>
        <ListItem label="List Item" showPreText={false} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Without Main Icon</h4>
        <ListItem label="List Item" showIcon={false} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Without Badge</h4>
        <ListItem label="List Item" showBadge={false} />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 600 }}>Without Dividers</h4>
        <ListItem label="List Item" showHorizontalDivider={false} showVerticalDivider={false} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples showing the list item with various elements hidden.',
      },
    },
  },
};

export const DifferentBadgeNumbers: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', width: '400px' }}>
      <ListItem label="New Messages" badgeNumber={1} />
      <ListItem label="Notifications" badgeNumber={5} />
      <ListItem label="Alerts" badgeNumber={12} />
      <ListItem label="Updates" badgeNumber={99} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'List items with different badge numbers.',
      },
    },
  },
};

export const CustomLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', width: '400px' }}>
      <ListItem label="Dashboard" />
      <ListItem label="User Profile" />
      <ListItem label="Settings & Preferences" />
      <ListItem label="Notification Center" />
      <ListItem label="Help & Support" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'List items with different custom labels.',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => {
    const handleClick = (itemName: string) => {
      alert(`Clicked on ${itemName}`);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', width: '400px' }}>
        <ListItem 
          label="Clickable Item 1" 
          onClick={() => handleClick('Item 1')}
          badgeNumber={3}
        />
        <ListItem 
          label="Clickable Item 2" 
          onClick={() => handleClick('Item 2')}
          badgeNumber={7}
        />
        <ListItem 
          label="Clickable Item 3" 
          onClick={() => handleClick('Item 3')}
          badgeNumber={1}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive list items that respond to clicks.',
      },
    },
  },
};

export const MinimalVariation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', width: '400px' }}>
      <ListItem 
        label="Simple Item"
        showStaticIcon={false}
        showDisc={false}
        showPreText={false}
        showIcon={false}
        showBadge={false}
        showHorizontalDivider={false}
        showVerticalDivider={false}
      />
      <ListItem 
        label="With Icon Only"
        showStaticIcon={false}
        showDisc={false}
        showPreText={false}
        showBadge={false}
        showHorizontalDivider={false}
        showVerticalDivider={false}
      />
      <ListItem 
        label="With Badge Only"
        showStaticIcon={false}
        showDisc={false}
        showPreText={false}
        showIcon={false}
        showHorizontalDivider={false}
        showVerticalDivider={false}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Minimal variations showing selective element display.',
      },
    },
  },
};

export const FigmaShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '0px', 
      width: '500px',
      backgroundColor: '#f8f9fa',
      padding: '24px',
      borderRadius: '8px',
      border: '2px dashed #6171DF'
    }}>
      <h3 style={{ 
        margin: '0 0 16px 0', 
        fontSize: '18px', 
        fontWeight: 600,
        color: '#1a1a1a'
      }}>
        List Item Component - All Sizes
      </h3>
      
      <ListItem size="small" label="List Item" />
      <ListItem size="default" label="List Item" />
      <ListItem size="large" label="List Item" />
      <ListItem size="x-large" label="List Item" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase matching the Figma design with all size variants.',
      },
    },
  },
};
