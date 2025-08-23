import type { Meta, StoryObj } from '@storybook/react';
import { HeaderWithCount } from './HeaderWithCount';

const meta: Meta<typeof HeaderWithCount> = {
  title: 'Atoms/HeaderWithCount',
  component: HeaderWithCount,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The HeaderWithCount component displays section headers with count badges.
Perfect for data lists, tables, and collection overviews.

## Features
- **Flexible Content**: Customizable title and count text
- **Tag Integration**: Uses the existing Tag component for count display
- **3 Sizes**: Small, Default, and Large variants
- **Interactive**: Optional click handlers
- **Responsive**: Adapts gracefully to different screen sizes
- **Accessible**: Proper semantic structure and ARIA compliance

## Usage
Commonly used for section headers that need to display item counts,
such as "Team members (100 items)" or "Active users (25)".
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
      description: 'Count value'
    },
    countLabel: {
      control: 'text',
      description: 'Count label (e.g., "items", "members")'
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant'
    },
    tagVariant: {
      control: 'select',
      options: ['primary', 'blue', 'outline-blue', 'secondary', 'gray'],
      description: 'Tag color variant'
    },
    showCount: {
      control: 'boolean',
      description: 'Show count tag'
    }
  },
  args: {
    title: 'Team members',
    count: 100,
    countLabel: 'items',
    size: 'default',
    tagVariant: 'outline-blue',
    showCount: true
  }
};

export default meta;
type Story = StoryObj<typeof HeaderWithCount>;

// Basic Examples
export const Default: Story = {
  args: {}
};

export const WithoutCount: Story = {
  args: {
    showCount: false
  }
};

export const DifferentTagVariant: Story = {
  args: {
    tagVariant: 'blue'
  }
};

// Size Variants
export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start' }}>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Header with Count Size Variants
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          Three sizes with proportional scaling
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
        <div>
          <HeaderWithCount 
            title="Small Header"
            size="small" 
            count={25}
            countLabel="users"
          />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Small size</div>
        </div>
        
        <div>
          <HeaderWithCount 
            title="Default Header"
            size="default" 
            count={100}
            countLabel="items"
          />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Default size</div>
        </div>
        
        <div>
          <HeaderWithCount 
            title="Large Header"
            size="large" 
            count={250}
            countLabel="entries"
          />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Large size</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All three size variants showing proportional text and tag scaling.'
      }
    }
  }
};

// Tag Variants
export const TagVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start' }}>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Different Tag Variants
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          Various tag colors for different contexts
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
        <HeaderWithCount 
          title="Team members"
          tagVariant="outline-blue"
          count={100}
          countLabel="items"
        />
        
        <HeaderWithCount 
          title="Active users"
          tagVariant="blue"
          count={45}
          countLabel="online"
        />
        
        <HeaderWithCount 
          title="Total projects"
          tagVariant="primary"
          count={12}
          countLabel="active"
        />
        
        <HeaderWithCount 
          title="Pending reviews"
          tagVariant="secondary"
          count={8}
          countLabel="waiting"
        />
        
        <HeaderWithCount 
          title="Archived items"
          tagVariant="gray"
          count={234}
          countLabel="archived"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different tag color variants for various use cases and contexts.'
      }
    }
  }
};

// Real-world Examples
export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'flex-start' }}>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Real-world Usage Examples
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          Common use cases with appropriate labeling
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start', width: '100%', maxWidth: '600px' }}>
        <HeaderWithCount 
          title="Team members"
          count={100}
          countLabel="people"
          tagVariant="outline-blue"
        />
        
        <HeaderWithCount 
          title="Open tickets"
          count={23}
          countLabel="unresolved"
          tagVariant="blue"
        />
        
        <HeaderWithCount 
          title="Products in inventory"
          count={1247}
          countLabel="items"
          tagVariant="primary"
        />
        
        <HeaderWithCount 
          title="Recent uploads"
          count={56}
          countLabel="files"
          tagVariant="secondary"
        />
        
        <HeaderWithCount 
          title="Search results"
          count={89}
          countLabel="matches"
          tagVariant="gray"
        />
        
        <HeaderWithCount 
          title="Active subscriptions"
          count={1}
          countLabel="plan"
          tagVariant="outline-blue"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing appropriate titles, counts, and labels for different contexts.'
      }
    }
  }
};

// Interactive Example
export const Interactive: Story = {
  args: {
    onClick: () => console.log('Header clicked!'),
    count: 142,
    countLabel: 'members'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive header with click handler. Check console for event logs.'
      }
    }
  }
};

// Different Count Labels
export const DifferentCountLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <HeaderWithCount title="Users" count={50} countLabel="active" />
      <HeaderWithCount title="Documents" count={1203} countLabel="files" />
      <HeaderWithCount title="Messages" count={12} countLabel="unread" />
      <HeaderWithCount title="Employees" count={25} countLabel="people" />
      <HeaderWithCount title="Orders" count={89} countLabel="pending" />
      <HeaderWithCount title="Tasks" count={7} countLabel="completed" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples with different count labels showing semantic variety.'
      }
    }
  }
};

// Large Numbers
export const LargeNumbers: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      <HeaderWithCount title="Global users" count={1250000} countLabel="registered" />
      <HeaderWithCount title="Daily pageviews" count={500000} countLabel="views" />
      <HeaderWithCount title="Database records" count={10000} countLabel="entries" />
      <HeaderWithCount title="API calls" count={999999} countLabel="requests" />
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
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Responsive Behavior
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          How the component adapts to different container widths
        </p>
      </div>
      
      {/* Wide container */}
      <div style={{ width: '100%', maxWidth: '800px', border: '1px dashed #ccc', padding: '16px' }}>
        <HeaderWithCount 
          title="Wide container example"
          count={150}
          countLabel="items"
        />
      </div>
      
      {/* Medium container */}
      <div style={{ width: '100%', maxWidth: '400px', border: '1px dashed #ccc', padding: '16px' }}>
        <HeaderWithCount 
          title="Medium container"
          count={75}
          countLabel="files"
        />
      </div>
      
      {/* Narrow container */}
      <div style={{ width: '100%', maxWidth: '250px', border: '1px dashed #ccc', padding: '16px' }}>
        <HeaderWithCount 
          title="Narrow container"
          count={25}
          countLabel="users"
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
