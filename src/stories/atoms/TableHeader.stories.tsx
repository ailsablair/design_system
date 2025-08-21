import type { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from './TableHeader';
import { AlarmIcon, ArrowDownIcon } from './Button';

const meta: Meta<typeof TableHeader> = {
  title: 'Atoms/TableHeader',
  component: TableHeader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The TableHeader component provides flexible table headers based on the Figma design system.
Supports multiple layout types, size variants, and background options.

## Features
- **4 Layout Types**: Default, with subtext, with buttons, with both
- **2 Size Variants**: Default (70-90px height) and Small (54-65px height)
- **2 Background Options**: White and Light Gray
- **Flexible Actions**: Customizable action buttons
- **Count Tags**: Integrated count display with color variants
- **Responsive Design**: Adapts to all screen sizes
- **Full Accessibility**: ARIA compliant with keyboard navigation

## Usage
Perfect for data tables, lists, and any content requiring structured headers with counts and actions.
        `
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Header title text'
    },
    count: {
      control: 'number',
      description: 'Count value for the tag'
    },
    countLabel: {
      control: 'text',
      description: 'Count label (e.g., "items", "members")'
    },
    subtext: {
      control: 'text',
      description: 'Subtext description'
    },
    type: {
      control: 'select',
      options: ['default', 'default-w-subtext', 'default-w-button', 'default-w-subtext-and-buttons'],
      description: 'Header type/variant'
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: 'Size variant'
    },
    background: {
      control: 'select',
      options: ['default', 'light-gray'],
      description: 'Background variant'
    },
    tagVariant: {
      control: 'select',
      options: ['outline-blue', 'outline-info-blue'],
      description: 'Tag color variant'
    },
    showActions: {
      control: 'boolean',
      description: 'Show action buttons'
    },
    showDotsMenu: {
      control: 'boolean',
      description: 'Show dots menu button'
    }
  },
  args: {
    title: 'Team members',
    count: 100,
    countLabel: 'items',
    subtext: 'These companies have purchased in the last 12 months',
    type: 'default',
    size: 'default',
    background: 'default',
    tagVariant: 'outline-blue',
    showActions: false,
    showDotsMenu: true
  }
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

// Basic Examples
export const Default: Story = {
  args: {}
};

export const WithSubtext: Story = {
  args: {
    type: 'default-w-subtext',
    title: 'Customers'
  }
};

export const WithButtons: Story = {
  args: {
    type: 'default-w-button',
    showActions: true
  }
};

export const WithSubtextAndButtons: Story = {
  args: {
    type: 'default-w-subtext-and-buttons',
    title: 'Customers',
    showActions: true
  }
};

// All Type Variants
export const AllTypeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Table Header Types - Figma Design
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          All header layout variants matching the Figma specifications
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Default</h4>
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            type="default"
          />
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>With Subtext</h4>
          <TableHeader
            title="Customers"
            count={100}
            countLabel="items"
            subtext="These companies have purchased in the last 12 months"
            type="default-w-subtext"
          />
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>With Buttons</h4>
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            type="default-w-button"
            showActions={true}
            actionButtons={[
              {
                label: 'Label',
                leadingIcon: <AlarmIcon size={18} />,
                trailingIcon: <ArrowDownIcon size={18} />
              },
              {
                label: 'Label',
                leadingIcon: <AlarmIcon size={18} />,
                trailingIcon: <ArrowDownIcon size={18} />
              }
            ]}
          />
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>With Subtext and Buttons</h4>
          <TableHeader
            title="Customers"
            count={100}
            countLabel="items"
            subtext="These companies have purchased in the last 12 months"
            type="default-w-subtext-and-buttons"
            showActions={true}
            actionButtons={[
              {
                label: 'Label',
                leadingIcon: <AlarmIcon size={18} />,
                trailingIcon: <ArrowDownIcon size={18} />
              },
              {
                label: 'Label',
                leadingIcon: <AlarmIcon size={18} />,
                trailingIcon: <ArrowDownIcon size={18} />
              }
            ]}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All header layout types showing different combinations of content and actions.'
      }
    }
  }
};

// Size Variants
export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Size Variants
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          Default and Small size variants with different heights and typography
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Default Size (70px)</h4>
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            size="default"
          />
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Small Size (54px)</h4>
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            size="small"
          />
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Default with Subtext (90px)</h4>
          <TableHeader
            title="Customers"
            count={100}
            countLabel="items"
            subtext="These companies have purchased in the last 12 months"
            type="default-w-subtext"
            size="default"
          />
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Small with Subtext (65px)</h4>
          <TableHeader
            title="Customers"
            count={100}
            countLabel="items"
            subtext="These companies have purchased in the last 12 months"
            type="default-w-subtext"
            size="small"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Size variants showing height differences and typography scaling.'
      }
    }
  }
};

// Background Variants
export const BackgroundVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Background Variants
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          White and Light Gray background options with Info Blue tags
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Default Background (White)</h4>
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            background="default"
            tagVariant="outline-blue"
          />
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Light Gray Background</h4>
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            background="light-gray"
            tagVariant="outline-info-blue"
          />
        </div>
        
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Light Gray with Subtext and Buttons</h4>
          <TableHeader
            title="Customers"
            count={100}
            countLabel="items"
            subtext="These companies have purchased in the last 12 months"
            type="default-w-subtext-and-buttons"
            background="light-gray"
            tagVariant="outline-info-blue"
            showActions={true}
            actionButtons={[
              {
                label: 'Label',
                leadingIcon: <AlarmIcon size={18} />,
                trailingIcon: <ArrowDownIcon size={18} />
              },
              {
                label: 'Label',
                leadingIcon: <AlarmIcon size={18} />,
                trailingIcon: <ArrowDownIcon size={18} />
              }
            ]}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Background variants showing white and light gray options matching Figma design.'
      }
    }
  }
};

// Complete Matrix
export const CompleteMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Complete Design Matrix
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          All combinations from the Figma design system
        </p>
      </div>
      
      {/* Default Size - White Background */}
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Default Size - White Background</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            type="default"
            size="default"
            background="default"
          />
          <TableHeader
            title="Customers"
            count={100}
            countLabel="items"
            subtext="These companies have purchased in the last 12 months"
            type="default-w-subtext"
            size="default"
            background="default"
          />
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            type="default-w-button"
            size="default"
            background="default"
            showActions={true}
          />
          <TableHeader
            title="Customers"
            count={100}
            countLabel="items"
            subtext="These companies have purchased in the last 12 months"
            type="default-w-subtext-and-buttons"
            size="default"
            background="default"
            showActions={true}
          />
        </div>
      </div>
      
      {/* Small Size - White Background */}
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Small Size - White Background</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            type="default"
            size="small"
            background="default"
          />
          <TableHeader
            title="Customers"
            count={100}
            countLabel="items"
            subtext="These companies have purchased in the last 12 months"
            type="default-w-subtext"
            size="small"
            background="default"
          />
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            type="default-w-button"
            size="small"
            background="default"
            showActions={true}
            actionButtons={[
              {
                label: 'Label',
                leadingIcon: <AlarmIcon size={14} />,
                trailingIcon: <ArrowDownIcon size={14} />
              },
              {
                label: 'Label',
                leadingIcon: <AlarmIcon size={14} />,
                trailingIcon: <ArrowDownIcon size={14} />
              }
            ]}
          />
          <TableHeader
            title="Customers"
            count={100}
            countLabel="items"
            subtext="These companies have purchased in the last 12 months"
            type="default-w-subtext-and-buttons"
            size="small"
            background="default"
            showActions={true}
            actionButtons={[
              {
                label: 'Label',
                leadingIcon: <AlarmIcon size={14} />,
                trailingIcon: <ArrowDownIcon size={14} />
              },
              {
                label: 'Label',
                leadingIcon: <AlarmIcon size={14} />,
                trailingIcon: <ArrowDownIcon size={14} />
              }
            ]}
          />
        </div>
      </div>
      
      {/* Light Gray Background Variants */}
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Light Gray Background Variants</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            type="default"
            size="default"
            background="light-gray"
            tagVariant="outline-info-blue"
          />
          <TableHeader
            title="Customers"
            count={100}
            countLabel="items"
            subtext="These companies have purchased in the last 12 months"
            type="default-w-subtext"
            size="default"
            background="light-gray"
            tagVariant="outline-info-blue"
          />
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            type="default-w-button"
            size="default"
            background="light-gray"
            tagVariant="outline-info-blue"
            showActions={true}
          />
          <TableHeader
            title="Customers"
            count={100}
            countLabel="items"
            subtext="These companies have purchased in the last 12 months"
            type="default-w-subtext-and-buttons"
            size="default"
            background="light-gray"
            tagVariant="outline-info-blue"
            showActions={true}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete matrix showing all possible combinations from the Figma design.'
      }
    }
  }
};

// Interactive Example
export const Interactive: Story = {
  args: {
    type: 'default-w-subtext-and-buttons',
    title: 'Customers',
    subtext: 'These companies have purchased in the last 12 months',
    showActions: true,
    onTitleClick: () => console.log('Title clicked!'),
    onDotsMenuClick: () => console.log('Dots menu clicked!'),
    actionButtons: [
      {
        label: 'Filter',
        leadingIcon: <AlarmIcon size={18} />,
        trailingIcon: <ArrowDownIcon size={18} />,
        onClick: () => console.log('Filter clicked!')
      },
      {
        label: 'Sort',
        leadingIcon: <AlarmIcon size={18} />,
        trailingIcon: <ArrowDownIcon size={18} />,
        onClick: () => console.log('Sort clicked!')
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive header with all click handlers. Check console for event logs.'
      }
    }
  }
};

// Real-world Examples
export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Real-world Usage Examples
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          Common use cases with appropriate content and actions
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <TableHeader
          title="Team Members"
          count={45}
          countLabel="people"
          type="default-w-subtext-and-buttons"
          subtext="Active employees across all departments"
          showActions={true}
          actionButtons={[
            {
              label: 'Add Member',
              leadingIcon: <AlarmIcon size={18} />
            },
            {
              label: 'Export',
              trailingIcon: <ArrowDownIcon size={18} />
            }
          ]}
        />
        
        <TableHeader
          title="Customer Orders"
          count={1247}
          countLabel="orders"
          type="default-w-subtext"
          subtext="Orders placed in the last 30 days"
          size="small"
          background="light-gray"
          tagVariant="outline-info-blue"
        />
        
        <TableHeader
          title="Product Inventory"
          count={856}
          countLabel="items"
          type="default-w-button"
          showActions={true}
          actionButtons={[
            {
              label: 'Filter by Category',
              leadingIcon: <AlarmIcon size={18} />,
              trailingIcon: <ArrowDownIcon size={18} />
            }
          ]}
        />
        
        <TableHeader
          title="Support Tickets"
          count={23}
          countLabel="open"
          type="default"
          size="small"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing appropriate usage in different contexts.'
      }
    }
  }
};

// Custom Action Buttons
export const CustomActionButtons: Story = {
  args: {
    title: 'Advanced Table',
    count: 500,
    countLabel: 'records',
    type: 'default-w-button',
    showActions: true,
    actionButtons: [
      {
        label: 'Download CSV',
        leadingIcon: <ArrowDownIcon size={18} />,
        onClick: () => console.log('Download CSV clicked!')
      },
      {
        label: 'Advanced Filter',
        leadingIcon: <AlarmIcon size={18} />,
        trailingIcon: <ArrowDownIcon size={18} />,
        onClick: () => console.log('Advanced Filter clicked!')
      },
      {
        label: 'Refresh',
        leadingIcon: <AlarmIcon size={18} />,
        onClick: () => console.log('Refresh clicked!')
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with custom action buttons and different labels.'
      }
    }
  }
};

// Responsive Example
export const ResponsiveExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Responsive Behavior
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          How the component adapts to different container widths
        </p>
      </div>
      
      {/* Wide container */}
      <div style={{ border: '1px dashed #ccc', padding: '8px' }}>
        <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>Full Width</div>
        <TableHeader
          title="Full Width Container"
          count={150}
          countLabel="items"
          type="default-w-subtext-and-buttons"
          subtext="This header adapts to the full container width"
          showActions={true}
        />
      </div>
      
      {/* Medium container */}
      <div style={{ maxWidth: '600px', border: '1px dashed #ccc', padding: '8px' }}>
        <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>600px Width</div>
        <TableHeader
          title="Medium Container"
          count={75}
          countLabel="files"
          type="default-w-subtext-and-buttons"
          subtext="Responsive design adapts gracefully"
          showActions={true}
        />
      </div>
      
      {/* Narrow container */}
      <div style={{ maxWidth: '400px', border: '1px dashed #ccc', padding: '8px' }}>
        <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>400px Width</div>
        <TableHeader
          title="Narrow Container"
          count={25}
          countLabel="users"
          type="default-w-subtext-and-buttons"
          subtext="Even narrow containers work well"
          showActions={true}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates responsive behavior in containers of different widths.'
      }
    }
  }
};
