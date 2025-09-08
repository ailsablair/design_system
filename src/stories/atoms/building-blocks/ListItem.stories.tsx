import type { Meta, StoryObj } from '@storybook/react';
import { ListItem } from './ListItem';

const meta = {
  title: 'Atoms/Building Blocks/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A list item component for displaying search results with work order/request numbers, descriptions, tags, and timestamps. Supports multiple sizes and states.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size variant of the list item'
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'selected'],
      description: 'State variant of the list item'
    },
    woNumber: {
      control: { type: 'text' },
      description: 'Work Order number'
    },
    wrNumber: {
      control: { type: 'text' },
      description: 'Work Request number'
    },
    description: {
      control: { type: 'text' },
      description: 'Description text for the list item'
    },
    timestamp: {
      control: { type: 'text' },
      description: 'Timestamp text'
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler'
    }
  }
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    woNumber: '000000',
    wrNumber: '000000',
    description: 'This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context.',
    size: 'default',
    state: 'default',
    timestamp: 'Last updated 3 mins ago'
  }
};

// Size variants
export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large'
  }
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small'
  }
};

// State variants
export const Selected: Story = {
  args: {
    ...Default.args,
    state: 'selected'
  }
};

export const SelectedLarge: Story = {
  args: {
    ...Default.args,
    size: 'large',
    state: 'selected'
  }
};

export const SelectedSmall: Story = {
  args: {
    ...Default.args,
    size: 'small',
    state: 'selected'
  }
};

// Custom content
export const CustomNumbers: Story = {
  args: {
    ...Default.args,
    woNumber: '123456',
    wrNumber: '789012'
  }
};

export const LongDescription: Story = {
  args: {
    ...Default.args,
    description: 'This is a much longer description that demonstrates how the component handles multiple lines of text. It should wrap properly and maintain good readability across all size variants. This text is intentionally long to test the layout behavior.'
  }
};

export const ShortDescription: Story = {
  args: {
    ...Default.args,
    description: 'Short description.'
  }
};

// Different timestamps
export const RecentUpdate: Story = {
  args: {
    ...Default.args,
    timestamp: 'Last updated just now'
  }
};

export const OldUpdate: Story = {
  args: {
    ...Default.args,
    timestamp: 'Last updated 2 days ago'
  }
};

// Custom tags
export const SingleTag: Story = {
  args: {
    ...Default.args,
    tags: [
      { label: "Priority", color: "yellow" as const }
    ]
  }
};

export const MultipleTags: Story = {
  args: {
    ...Default.args,
    tags: [
      { label: "Applied", color: "yellow" as const },
      { label: "Evaluated", color: "outline-gray" as const },
      { label: "In Progress", color: "yellow" as const }
    ]
  }
};

export const NoTags: Story = {
  args: {
    ...Default.args,
    tags: []
  }
};

// Interactive examples
export const Interactive: Story = {
  args: {
    ...Default.args,
    onClick: () => console.log('List item clicked!')
  }
};

// All sizes comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      <div>
        <h3>Large</h3>
        <ListItem size="large" />
      </div>
      <div>
        <h3>Default</h3>
        <ListItem size="default" />
      </div>
      <div>
        <h3>Small</h3>
        <ListItem size="small" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded'
  }
};

// All states comparison
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      <div>
        <h3>Default State</h3>
        <ListItem state="default" />
      </div>
      <div>
        <h3>Selected State</h3>
        <ListItem state="selected" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded'
  }
};
