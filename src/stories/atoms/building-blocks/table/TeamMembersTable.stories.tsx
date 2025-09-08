import type { Meta, StoryObj } from '@storybook/react';
import { TeamMembersTable } from './TeamMembersTable';

const meta: Meta<typeof TeamMembersTable> = {
  title: 'Atoms/🧱 Building Blocks/Table/TeamMembersTable',
  component: TeamMembersTable,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Team Members Table

A comprehensive table component that exactly matches the Figma design specifications for displaying team member data.

## Features

- **Header with title, count badge, and more actions button**
- **Multiple cell types**: contact name, company, multi-tag preferences, actions, rating, status avatars, progress
- **Checkbox selection** with indeterminate states
- **Alternating row backgrounds** (seafoam-25)
- **Pagination footer** with previous/next navigation
- **Responsive design** matching Figma specifications
- **Accessibility support** with proper ARIA labels and keyboard navigation

## Cell Types

1. **Title Cell** - Primary contact name with checkbox selection
2. **Text Cell** - Company information
3. **Multi-tag Cell** - Preference tags with icons and overflow
4. **Links Cell** - Edit/Delete action links
5. **Rating Cell** - 5-star rating display
6. **Group Avatars Cell** - Avatar groups with overflow count
7. **Progress Bar Cell** - Progress indicators with percentage
8. **Button Group Cell** - Action buttons for edit/delete

## Usage

The component is designed to handle large datasets with pagination and provides comprehensive interaction capabilities including row selection, sorting, and various action handlers.
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Table title',
    },
    itemCount: {
      control: 'number',
      description: 'Item count for badge',
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: 'Size variant',
    },
    currentPage: {
      control: 'number',
      description: 'Current page number',
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages',
    },
    onRowSelect: { action: 'row-selected' },
    onSelectAll: { action: 'select-all' },
    onPageChange: { action: 'page-changed' },
    onEdit: { action: 'edit-clicked' },
    onDelete: { action: 'delete-clicked' },
    onMoreActions: { action: 'more-actions-clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof TeamMembersTable>;

// Sample data for stories
const sampleTeamMembers = [
  {
    id: '1',
    contactName: 'Olivia Rhye',
    company: 'Olivia Rhye',
    preferences: [
      { label: 'Label', icon: 'alarm-light', closable: true },
    ],
    rating: 5,
    status: {
      avatars: [
        { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1', name: 'User 1' },
        { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2', name: 'User 2' },
        { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3', name: 'User 3' },
        { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4', name: 'User 4' },
        { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5', name: 'User 5' },
      ],
      additionalCount: 4,
    },
    progress: 30,
  },
  {
    id: '2',
    contactName: 'Phoenix Baker',
    company: 'Phoenix Industries',
    preferences: [
      { label: 'Design', icon: 'alarm-light', closable: true },
    ],
    rating: 4,
    status: {
      avatars: [
        { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=6', name: 'User 6' },
        { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=7', name: 'User 7' },
        { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=8', name: 'User 8' },
      ],
      additionalCount: 2,
    },
    progress: 75,
  },
  {
    id: '3',
    contactName: 'Lana Steiner',
    company: 'Steiner Corp',
    preferences: [
      { label: 'Marketing', icon: 'alarm-light', closable: true },
    ],
    rating: 5,
    status: {
      avatars: [
        { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=9', name: 'User 9' },
        { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=10', name: 'User 10' },
      ],
      additionalCount: 1,
    },
    progress: 50,
  },
  {
    id: '4',
    contactName: 'Demi Wilkinson',
    company: 'Wilkinson Tech',
    preferences: [
      { label: 'Development', icon: 'alarm-light', closable: true },
    ],
    rating: 3,
    status: {
      avatars: [
        { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=11', name: 'User 11' },
        { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=12', name: 'User 12' },
        { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=13', name: 'User 13' },
        { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=14', name: 'User 14' },
      ],
      additionalCount: 3,
    },
    progress: 90,
  },
];

/**
 * Default story showcasing the basic Team Members table functionality
 */
export const Default: Story = {
  args: {
    title: 'Team members',
    itemCount: 100,
    data: sampleTeamMembers,
    size: 'small',
    currentPage: 1,
    totalPages: 10,
  },
};

/**
 * Small size variant for compact displays
 */
export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

/**
 * Default size variant for standard displays
 */
export const DefaultSize: Story = {
  args: {
    ...Default.args,
    size: 'default',
  },
};

/**
 * Table with many pages to showcase pagination
 */
export const ManyPages: Story = {
  args: {
    ...Default.args,
    currentPage: 5,
    totalPages: 25,
    itemCount: 500,
  },
};

/**
 * Table on first page
 */
export const FirstPage: Story = {
  args: {
    ...Default.args,
    currentPage: 1,
    totalPages: 10,
  },
};

/**
 * Table on last page
 */
export const LastPage: Story = {
  args: {
    ...Default.args,
    currentPage: 10,
    totalPages: 10,
  },
};

/**
 * Table with different title and count
 */
export const CustomTitle: Story = {
  args: {
    ...Default.args,
    title: 'Active Contributors',
    itemCount: 42,
  },
};

/**
 * Table with extended team data showcasing all cell types
 */
export const ExtendedTeamData: Story = {
  args: {
    ...Default.args,
    data: [
      ...sampleTeamMembers,
      {
        id: '5',
        contactName: 'Candice Wu',
        company: 'Wu Enterprises',
        preferences: [
          { label: 'Sales', icon: 'alarm-light', closable: true },
        ],
        rating: 4,
        status: {
          avatars: [
            { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=15', name: 'User 15' },
            { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=16', name: 'User 16' },
            { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=17', name: 'User 17' },
          ],
          additionalCount: 5,
        },
        progress: 65,
      },
      {
        id: '6',
        contactName: 'Natali Craig',
        company: 'Craig Solutions',
        preferences: [
          { label: 'Support', icon: 'alarm-light', closable: true },
        ],
        rating: 5,
        status: {
          avatars: [
            { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=18', name: 'User 18' },
            { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=19', name: 'User 19' },
          ],
          additionalCount: 2,
        },
        progress: 85,
      },
    ],
    itemCount: 150,
  },
};

/**
 * Table with varying ratings to showcase the star system
 */
export const VaryingRatings: Story = {
  args: {
    ...Default.args,
    data: [
      { ...sampleTeamMembers[0], rating: 5 },
      { ...sampleTeamMembers[1], rating: 4 },
      { ...sampleTeamMembers[2], rating: 3 },
      { ...sampleTeamMembers[3], rating: 2 },
    ],
  },
};

/**
 * Table with different progress values
 */
export const VaryingProgress: Story = {
  args: {
    ...Default.args,
    data: [
      { ...sampleTeamMembers[0], progress: 10 },
      { ...sampleTeamMembers[1], progress: 35 },
      { ...sampleTeamMembers[2], progress: 60 },
      { ...sampleTeamMembers[3], progress: 95 },
    ],
  },
};

/**
 * Interactive story for testing selection functionality
 */
export const InteractiveSelection: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      description: {
        story: 'Test the checkbox selection functionality by clicking on the checkboxes.',
      },
    },
  },
};

/**
 * Interactive story for testing pagination
 */
export const InteractivePagination: Story = {
  args: {
    ...Default.args,
    totalPages: 15,
  },
  parameters: {
    docs: {
      description: {
        story: 'Test the pagination functionality by clicking on page numbers or previous/next buttons.',
      },
    },
  },
};

/**
 * Interactive story for testing action buttons
 */
export const InteractiveActions: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      description: {
        story: 'Test the action functionality by clicking on Edit/Delete links or buttons.',
      },
    },
  },
};

/**
 * Story showcasing alternating row backgrounds
 */
export const AlternatingRows: Story = {
  args: {
    ...Default.args,
    data: [
      ...sampleTeamMembers,
      {
        id: '5',
        contactName: 'Row 5',
        company: 'Company 5',
        preferences: [{ label: 'Label', icon: 'alarm-light', closable: true }],
        rating: 4,
        status: {
          avatars: [{ src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=20', name: 'User 20' }],
          additionalCount: 1,
        },
        progress: 40,
      },
      {
        id: '6',
        contactName: 'Row 6',
        company: 'Company 6',
        preferences: [{ label: 'Label', icon: 'alarm-light', closable: true }],
        rating: 3,
        status: {
          avatars: [{ src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=21', name: 'User 21' }],
          additionalCount: 2,
        },
        progress: 70,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Showcases the alternating seafoam-25 background for odd rows.',
      },
    },
  },
};

/**
 * Minimal data story
 */
export const MinimalData: Story = {
  args: {
    ...Default.args,
    data: [sampleTeamMembers[0]],
    itemCount: 1,
    totalPages: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with minimal data showing single row.',
      },
    },
  },
};

/**
 * Empty state would be handled by parent component,
 * but showing table structure with no data
 */
export const EmptyState: Story = {
  args: {
    ...Default.args,
    data: [],
    itemCount: 0,
    totalPages: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table structure when no data is available.',
      },
    },
  },
};

/**
 * Design System Showcase - All Variants
 */
export const DesignSystemShowcase: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      description: {
        story: `
# Design System Showcase

This story demonstrates all the design system features of the Team Members Table:

## Header Features
- Title with custom typography (Archivo, 19px, medium weight)
- Count badge with proper styling
- More actions button with icon

## Cell Types
1. **Contact Name**: Title cell with checkbox selection
2. **Company**: Text cell with help icon in header
3. **Preferences**: Multi-tag cell with closable tags and overflow
4. **Actions**: Link buttons for edit/delete
5. **Rating**: 5-star rating system
6. **Status**: Avatar groups with overflow count
7. **Progress**: Progress bars with percentage display
8. **Button Actions**: Action buttons in final column

## Visual Features
- Alternating row backgrounds (seafoam-25)
- Proper spacing and typography
- Shadow and border radius matching Figma
- Responsive design for all screen sizes

## Interactive Features
- Checkbox selection with indeterminate states
- Sortable headers with visual indicators
- Pagination with proper navigation
- Action handlers for all interactive elements
        `,
      },
    },
  },
};
