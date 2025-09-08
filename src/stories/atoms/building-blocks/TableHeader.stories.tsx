import type { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from './TableHeader';
import { Button } from '../Button';

const meta: Meta<typeof TableHeader> = {
  title: 'Atoms/🧱 Building Blocks/TableHeader',
  component: TableHeader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The TableHeader component provides comprehensive table header layouts based on Figma designs.
Perfect for data tables, lists, and collection views with various content and action configurations.

## Features
- **4 Layout Types**: Default, with subtext, with buttons, with subtext and buttons
- **2 Sizes**: Small and Default with proper proportional scaling
- **2 Backgrounds**: Light gray and blue-50 variants
- **Flexible Actions**: Customizable button groups and action menu
- **Count Integration**: Built-in count tags with proper styling
- **Responsive**: Adapts gracefully to different screen sizes
- **Accessible**: Proper semantic structure and ARIA compliance

## Layout Types
- **default**: Basic header with title and count
- **default-w-subtext**: Header with subtitle/description
- **default-w-buttons**: Header with action button group
- **default-w-subtext-and-buttons**: Header with both subtitle and buttons

## Usage
Commonly used for table headers, section headers, and data collection views
that need to display titles, counts, descriptions, and actions.
        `
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Header title text'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle/description text'
    },
    count: {
      control: 'number',
      description: 'Count value'
    },
    countLabel: {
      control: 'text',
      description: 'Count label (e.g., "items", "members")'
    },
    size: {
      control: 'select',
      options: ['small', 'default'],
      description: 'Size variant'
    },
    background: {
      control: 'select',
      options: ['light-gray', 'blue-50', 'black'],
      description: 'Background variant'
    },
    type: {
      control: 'select',
      options: ['default', 'default-w-subtext', 'default-w-buttons', 'default-w-subtext-and-buttons'],
      description: 'Layout type'
    },
    showCount: {
      control: 'boolean',
      description: 'Show count tag'
    },
    showActionMenu: {
      control: 'boolean',
      description: 'Show action menu button'
    }
  },
  args: {
    title: 'Team members',
    subtitle: 'These companies have purchased in the last 12 months',
    count: 100,
    countLabel: 'items',
    size: 'small',
    background: 'light-gray',
    type: 'default',
    showCount: true,
    showActionMenu: true
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
    title: 'Customers',
    subtitle: 'These companies have purchased in the last 12 months'
  }
};

export const WithButtons: Story = {
  args: {
    type: 'default-w-buttons'
  }
};

export const WithSubtextAndButtons: Story = {
  args: {
    type: 'default-w-subtext-and-buttons',
    title: 'Customers',
    subtitle: 'These companies have purchased in the last 12 months'
  }
};

export const BlackBackground: Story = {
  args: {
    background: 'black',
    type: 'default-w-subtext-and-buttons',
    title: 'Customers',
    subtitle: 'These companies have purchased in the last 12 months'
  }
};

// Figma Design Showcase - All Variants
export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', maxWidth: '1216px' }}>
      <div style={{ textAlign: 'left' }}>
        <h2 style={{ margin: '0 0 24px 0', fontSize: '24px', fontWeight: '600' }}>
          Table Header - Figma Design Implementation
        </h2>
        <p style={{ margin: '0 0 32px 0', fontSize: '16px', color: '#666', lineHeight: '1.5' }}>
          Complete implementation of all table header variants from Figma designs.
          Includes different types, sizes, and background colors.
        </p>
      </div>

      {/* Small Size - Light Gray Background */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Small Size - Light Gray Background</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            size="small"
            background="light-gray"
            type="default"
          />
          
          <TableHeader
            title="Customers"
            subtitle="These companies have purchased in the last 12 months"
            count={100}
            countLabel="items"
            size="small"
            background="light-gray"
            type="default-w-subtext"
          />
          
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            size="small"
            background="light-gray"
            type="default-w-buttons"
          />
          
          <TableHeader
            title="Customers"
            subtitle="These companies have purchased in the last 12 months"
            count={100}
            countLabel="items"
            size="small"
            background="light-gray"
            type="default-w-subtext-and-buttons"
          />
        </div>
      </div>

      {/* Default Size - Blue-50 Background */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Default Size - Blue-50 Background</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            size="default"
            background="blue-50"
            type="default"
            buttonGroupProps={{ size: 'default' }}
          />
          
          <TableHeader
            title="Customers"
            subtitle="These companies have purchased in the last 12 months"
            count={100}
            countLabel="items"
            size="default"
            background="blue-50"
            type="default-w-subtext"
            buttonGroupProps={{ size: 'default' }}
          />
          
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            size="default"
            background="blue-50"
            type="default-w-buttons"
            buttonGroupProps={{ size: 'default' }}
          />
          
          <TableHeader
            title="Customers"
            subtitle="These companies have purchased in the last 12 months"
            count={100}
            countLabel="items"
            size="default"
            background="blue-50"
            type="default-w-subtext-and-buttons"
            buttonGroupProps={{ size: 'default' }}
          />
        </div>
      </div>

      {/* Small Size - Blue-50 Background */}
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Small Size - Blue-50 Background</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            size="small"
            background="blue-50"
            type="default"
          />
          
          <TableHeader
            title="Customers"
            subtitle="These companies have purchased in the last 12 months"
            count={100}
            countLabel="items"
            size="small"
            background="blue-50"
            type="default-w-subtext"
          />
          
          <TableHeader
            title="Team members"
            count={100}
            countLabel="items"
            size="small"
            background="blue-50"
            type="default-w-buttons"
          />
          
          <TableHeader
            title="Customers"
            subtitle="These companies have purchased in the last 12 months"
            count={100}
            countLabel="items"
            size="small"
            background="blue-50"
            type="default-w-subtext-and-buttons"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all table header variants matching the Figma designs exactly.'
      }
    }
  }
};

// Size Comparison
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
          Size Comparison
        </h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Small vs Default size with proportional scaling
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TableHeader
          title="Small Header"
          subtitle="Compact header with smaller text and spacing"
          count={25}
          countLabel="users"
          size="small"
          type="default-w-subtext"
        />
        
        <TableHeader
          title="Default Header"
          subtitle="Standard header with default text and spacing"
          count={100}
          countLabel="items"
          size="default"
          type="default-w-subtext"
          buttonGroupProps={{ size: 'default' }}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Direct comparison between small and default sizes showing proportional scaling.'
      }
    }
  }
};

// Background Variants
export const BackgroundVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
          Background Variants
        </h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Light gray vs Blue-50 backgrounds with appropriate tag variants
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TableHeader
          title="Light Gray Background"
          subtitle="Uses blue outline tags for contrast"
          count={150}
          countLabel="entries"
          background="light-gray"
          type="default-w-subtext"
        />
        
        <TableHeader
          title="Blue-50 Background"
          subtitle="Uses white tags for proper contrast"
          count={150}
          countLabel="entries"
          background="blue-50"
          type="default-w-subtext"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of background variants with appropriate tag color adjustments.'
      }
    }
  }
};

// Custom Action Buttons
export const CustomActionButtons: Story = {
  render: () => {
    const customButtons = [
      <Button key="export" size="small" type="ghost">
        Export
      </Button>,
      <Button key="filter" size="small" type="ghost">
        Filter
      </Button>,
      <Button key="sort" size="small" type="ghost">
        Sort
      </Button>
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>
        <div style={{ textAlign: 'left' }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
            Custom Action Buttons
          </h3>
          <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
            Headers with custom action button configurations
          </p>
        </div>
        
        <TableHeader
          title="Custom Actions"
          subtitle="Header with custom export, filter, and sort buttons"
          count={200}
          countLabel="records"
          type="default-w-subtext-and-buttons"
          actionButtons={customButtons}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with custom action buttons replacing the default filter buttons.'
      }
    }
  }
};

// Real-world Examples
export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', maxWidth: '1000px' }}>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
          Real-world Usage Examples
        </h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          Common use cases with appropriate content and configurations
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* User Management */}
        <TableHeader
          title="Active Users"
          subtitle="Users who have logged in within the last 30 days"
          count={1247}
          countLabel="users"
          size="default"
          background="light-gray"
          type="default-w-subtext-and-buttons"
          buttonGroupProps={{ size: 'default' }}
        />
        
        {/* Order Management */}
        <TableHeader
          title="Recent Orders"
          subtitle="Orders placed in the last 7 days"
          count={89}
          countLabel="orders"
          size="small"
          background="blue-50"
          type="default-w-subtext"
        />
        
        {/* File Management */}
        <TableHeader
          title="Uploaded Files"
          count={456}
          countLabel="files"
          size="small"
          background="light-gray"
          type="default-w-buttons"
        />
        
        {/* Analytics Dashboard */}
        <TableHeader
          title="Page Views"
          subtitle="Unique page views from the last 24 hours"
          count={12500}
          countLabel="views"
          size="default"
          background="blue-50"
          type="default-w-subtext"
          buttonGroupProps={{ size: 'default' }}
        />
        
        {/* Team Management */}
        <TableHeader
          title="Team Members"
          subtitle="Active team members with current project assignments"
          count={25}
          countLabel="members"
          size="small"
          background="light-gray"
          type="default-w-subtext-and-buttons"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing different configurations for common use cases.'
      }
    }
  }
};

// Interactive Example
export const Interactive: Story = {
  args: {
    type: 'default-w-subtext-and-buttons',
    title: 'Interactive Header',
    subtitle: 'Click the action menu or buttons to see interactions',
    onActionMenuClick: () => console.log('Action menu clicked!')
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive header with click handlers. Check console for event logs.'
      }
    }
  }
};

// Without Count Tag
export const WithoutCount: Story = {
  args: {
    showCount: false,
    type: 'default-w-subtext'
  },
  parameters: {
    docs: {
      description: {
        story: 'Header without count tag for cases where count is not relevant.'
      }
    }
  }
};

// Without Action Menu
export const WithoutActionMenu: Story = {
  args: {
    showActionMenu: false,
    type: 'default-w-buttons'
  },
  parameters: {
    docs: {
      description: {
        story: 'Header without action menu button for simplified interfaces.'
      }
    }
  }
};

// Large Numbers
export const LargeNumbers: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '800px' }}>
      <TableHeader
        title="Global Users"
        subtitle="Total registered users across all regions"
        count={1250000}
        countLabel="users"
        type="default-w-subtext"
      />
      
      <TableHeader
        title="Database Records"
        count={999999}
        countLabel="records"
        type="default"
      />
      
      <TableHeader
        title="API Calls"
        subtitle="Total API calls processed this month"
        count={10000000}
        countLabel="requests"
        type="default-w-subtext"
        background="blue-50"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples with large numbers showing how the component handles various count sizes.'
      }
    }
  }
};

// Responsive Showcase
export const ResponsiveShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>
          Responsive Behavior
        </h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
          How the component adapts to different container widths
        </p>
      </div>
      
      {/* Wide container */}
      <div style={{ width: '100%', maxWidth: '1000px', border: '1px dashed #ccc', padding: '16px' }}>
        <TableHeader
          title="Wide Container Example"
          subtitle="Full layout with all elements visible"
          count={150}
          countLabel="items"
          type="default-w-subtext-and-buttons"
        />
      </div>
      
      {/* Medium container */}
      <div style={{ width: '100%', maxWidth: '600px', border: '1px dashed #ccc', padding: '16px' }}>
        <TableHeader
          title="Medium Container"
          subtitle="Responsive layout adaptation"
          count={75}
          countLabel="files"
          type="default-w-subtext-and-buttons"
        />
      </div>
      
      {/* Narrow container */}
      <div style={{ width: '100%', maxWidth: '400px', border: '1px dashed #ccc', padding: '16px' }}>
        <TableHeader
          title="Narrow Container"
          subtitle="Stacked layout for mobile"
          count={25}
          countLabel="users"
          type="default-w-subtext-and-buttons"
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
