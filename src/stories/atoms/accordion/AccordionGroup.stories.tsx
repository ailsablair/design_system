import type { Meta, StoryObj } from '@storybook/react';
import { AccordionGroup } from './AccordionGroup';

const meta = {
  title: 'Atoms/Accordion/AccordionGroup',
  component: AccordionGroup,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# AccordionGroup Component

Based on exact Figma design specifications for grouped accordions with two distinct types:

## Group Types

### Attached
Accordions seamlessly connected with shared borders:
- First item has top border radius only
- Middle items have no radius and share top border
- Last item has bottom border radius only

### Gap
Accordions with spacing between them:
- Each item is standalone with full border and radius
- Visual spacing between items

## Features
- Three size variants (small, default, large)
- Automatic border and radius management
- Responsive layout with flexbox
- Accessible keyboard navigation
- Follows Echo design system tokens
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size variant for the accordion group',
    },
    type: {
      control: 'select',
      options: ['attached', 'gap'],
      description: 'Type of grouping - attached or with gaps',
    },
    items: {
      control: 'object',
      description: 'Array of accordion items to display',
    },
  },
} satisfies Meta<typeof AccordionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default items for stories
const defaultItems = [
  { id: '1', title: 'This is an accordion section title' },
  { id: '2', title: 'This is an accordion section title' },
  { id: '3', title: 'This is an accordion section title' },
  { id: '4', title: 'This is an accordion section title' },
  { id: '5', title: 'This is an accordion section title' },
];

const gapItems = [
  { id: '1', title: 'This is an accordion section title' },
  { id: '2', title: 'This is an accordion section title' },
  { id: '3', title: 'This is an accordion section title' },
  { id: '4', title: 'This is an accordion section title' },
  { id: '5', title: 'This is an accordion section title' },
  { id: '6', title: 'This is an accordion section title' },
];

// ===== DEFAULT SIZE - ATTACHED =====

export const DefaultAttached: Story = {
  args: {
    size: 'default',
    type: 'attached',
    items: defaultItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default size accordion group with attached type - accordions seamlessly connected.',
      },
    },
  },
};

// ===== DEFAULT SIZE - GAP =====

export const DefaultGap: Story = {
  args: {
    size: 'default',
    type: 'gap',
    items: gapItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default size accordion group with gap type - accordions with spacing between them.',
      },
    },
  },
};

// ===== LARGE SIZE - ATTACHED =====

export const LargeAttached: Story = {
  args: {
    size: 'large',
    type: 'attached',
    items: defaultItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size accordion group with attached type.',
      },
    },
  },
};

// ===== LARGE SIZE - GAP =====

export const LargeGap: Story = {
  args: {
    size: 'large',
    type: 'gap',
    items: gapItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large size accordion group with gap type.',
      },
    },
  },
};

// ===== SMALL SIZE - ATTACHED =====

export const SmallAttached: Story = {
  args: {
    size: 'small',
    type: 'attached',
    items: defaultItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size accordion group with attached type.',
      },
    },
  },
};

// ===== SMALL SIZE - GAP =====

export const SmallGap: Story = {
  args: {
    size: 'small',
    type: 'gap',
    items: gapItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Small size accordion group with gap type.',
      },
    },
  },
};

// ===== CUSTOM ITEMS =====

export const CustomItems: Story = {
  args: {
    size: 'default',
    type: 'attached',
    items: [
      { 
        id: '1', 
        title: 'System Settings',
        onClick: () => console.log('Settings clicked')
      },
      { 
        id: '2', 
        title: 'User Preferences',
        onClick: () => console.log('Preferences clicked')
      },
      { 
        id: '3', 
        title: 'Security Options',
        showBellIcon: false,
        onClick: () => console.log('Security clicked')
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom accordion items with different titles and click handlers.',
      },
    },
  },
};

// ===== SINGLE ITEM =====

export const SingleItem: Story = {
  args: {
    size: 'default',
    type: 'attached',
    items: [
      { id: '1', title: 'Single accordion item' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Single accordion item - automatically gets full border radius.',
      },
    },
  },
};

// ===== WITHOUT ICONS =====

export const WithoutIcons: Story = {
  args: {
    size: 'default',
    type: 'attached',
    items: [
      { id: '1', title: 'Item without icons', showStatusIcon: false, showBellIcon: false },
      { id: '2', title: 'Item without icons', showStatusIcon: false, showBellIcon: false },
      { id: '3', title: 'Item without icons', showStatusIcon: false, showBellIcon: false },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Accordion group without status and bell icons.',
      },
    },
  },
};

// ===== INTERACTIVE EXAMPLE =====

export const Interactive: Story = {
  args: {
    size: 'default',
    type: 'attached',
    items: defaultItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example - use controls to experiment with different configurations.',
      },
    },
  },
};
