import type { Meta, StoryObj } from '@storybook/react';
import { ListGroup } from './ListGroup';
import type { ListItemProps } from './ListItem';

const meta = {
  title: 'Atoms/Building Blocks/ListGroup',
  component: ListGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A container component for displaying multiple list items with support for loading states, empty states, and pagination.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant for all list items'
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading skeleton state'
    },
    emptyMessage: {
      control: { type: 'text' },
      description: 'Message to show when no items are present'
    },
    maxItems: {
      control: { type: 'number' },
      description: 'Maximum number of items to display'
    },
    onItemClick: {
      action: 'item-clicked',
      description: 'Callback when an item is clicked'
    }
  }
} satisfies Meta<typeof ListGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleItems: ListItemProps[] = [
  {
    woNumber: '123456',
    wrNumber: '789012',
    description: 'This is a description for the first search result. It provides context about the work order and helps users identify the correct item.',
    timestamp: 'Last updated 5 mins ago',
    state: 'selected'
  },
  {
    woNumber: '234567',
    wrNumber: '890123',
    description: 'Second work order description that shows how multiple items look in a list. This demonstrates the spacing and layout.',
    timestamp: 'Last updated 15 mins ago'
  },
  {
    woNumber: '345678',
    wrNumber: '901234',
    description: 'Third item in the list with different content to show variety in the data presentation.',
    timestamp: 'Last updated 1 hour ago'
  },
  {
    woNumber: '456789',
    wrNumber: '012345',
    description: 'Fourth work order with a longer description to demonstrate how the component handles varying content lengths and maintains consistent layout.',
    timestamp: 'Last updated 2 hours ago'
  },
  {
    woNumber: '567890',
    wrNumber: '123456',
    description: 'Fifth item showing more data variety.',
    timestamp: 'Last updated 1 day ago'
  }
];

// Default story
export const Default: Story = {
  args: {
    items: sampleItems.slice(0, 3),
    size: 'default'
  }
};

// Size variants
export const Large: Story = {
  args: {
    items: sampleItems.slice(0, 3),
    size: 'large'
  }
};

export const Small: Story = {
  args: {
    items: sampleItems.slice(0, 3),
    size: 'small'
  }
};

// States
export const Loading: Story = {
  args: {
    loading: true,
    size: 'default'
  }
};

export const LoadingLarge: Story = {
  args: {
    loading: true,
    size: 'large'
  }
};

export const LoadingSmall: Story = {
  args: {
    loading: true,
    size: 'small'
  }
};

export const Empty: Story = {
  args: {
    items: [],
    emptyMessage: 'No search results found. Try adjusting your search criteria.'
  }
};

export const EmptyCustomMessage: Story = {
  args: {
    items: [],
    emptyMessage: 'No work orders match your current filters. Please modify your search or clear all filters to see available items.'
  }
};

// Pagination
export const WithMaxItems: Story = {
  args: {
    items: sampleItems,
    maxItems: 3,
    size: 'default'
  }
};

// With header and footer
export const WithHeaderAndFooter: Story = {
  args: {
    items: sampleItems.slice(0, 3),
    header: (
      <div style={{ 
        padding: '16px', 
        background: '#f3f4f6', 
        borderRadius: '8px',
        fontWeight: '600',
        color: '#374151'
      }}>
        Search Results (3 items found)
      </div>
    ),
    footer: (
      <div style={{ 
        padding: '12px', 
        textAlign: 'center',
        color: '#6b7280',
        fontSize: '14px'
      }}>
        Showing results 1-3 of 3
      </div>
    ),
    size: 'default'
  }
};

// Single item
export const SingleItem: Story = {
  args: {
    items: [sampleItems[0]],
    size: 'default'
  }
};

// Many items
export const ManyItems: Story = {
  args: {
    items: [
      ...sampleItems,
      {
        woNumber: '678901',
        wrNumber: '234567',
        description: 'Additional work order for testing with many items.',
        timestamp: 'Last updated 3 days ago'
      },
      {
        woNumber: '789012',
        wrNumber: '345678',
        description: 'Another work order in the extended list.',
        timestamp: 'Last updated 1 week ago'
      }
    ],
    size: 'default'
  },
  parameters: {
    layout: 'padded'
  }
};

// Interactive example
export const Interactive: Story = {
  args: {
    items: sampleItems.slice(0, 4),
    size: 'default',
    onItemClick: (item, index) => {
      console.log('Clicked item:', item, 'at index:', index);
    }
  }
};

// All sizes comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', width: '100%' }}>
      <div>
        <h3>Large</h3>
        <ListGroup items={sampleItems.slice(0, 2)} size="large" />
      </div>
      <div>
        <h3>Default</h3>
        <ListGroup items={sampleItems.slice(0, 2)} size="default" />
      </div>
      <div>
        <h3>Small</h3>
        <ListGroup items={sampleItems.slice(0, 2)} size="small" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded'
  }
};

// Complex example with filtering
export const SearchResults: Story = {
  args: {
    items: sampleItems,
    header: (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '16px 0',
        borderBottom: '1px solid #d1d5db'
      }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Search Results</h3>
          <p style={{ margin: '4px 0 0 0', color: '#6b7280', fontSize: '14px' }}>
            Found {sampleItems.length} work orders matching your criteria
          </p>
        </div>
        <button style={{
          padding: '8px 16px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          background: 'white',
          cursor: 'pointer'
        }}>
          Filter
        </button>
      </div>
    ),
    footer: (
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0'
      }}>
        <button style={{
          padding: '12px 24px',
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          background: 'white',
          cursor: 'pointer',
          fontWeight: '500'
        }}>
          Load More Results
        </button>
      </div>
    ),
    maxItems: 3,
    size: 'default'
  },
  parameters: {
    layout: 'padded'
  }
};
