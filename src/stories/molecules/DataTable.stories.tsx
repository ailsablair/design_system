import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';
import { Button } from '../atoms/Button';
import { ProgressBar } from '../atoms/ProgressBar';
import { Tag, type TagVariant } from '../atoms/Tag';
import { AvatarGroup, type AvatarGroupProps } from '../atoms/AvatarGroup';
import { Icon } from '../foundations/Icon';
// Mock functions for Storybook args

const meta: Meta<typeof DataTable> = {
  title: 'Molecules/DataTable',
  component: DataTable,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A comprehensive data table component that supports multiple cell types, selection, sorting, and pagination.

## Features
- Multiple cell types: text, title, multi-tag, links, rating, avatars, progress, actions
- Row selection with checkbox states (all, some, none)
- Column sorting with visual indicators
- Pagination controls with ellipsis
- Responsive design
- Accessibility support
- Loading and empty states

## Cell Types
- **text**: Basic text content
- **title**: Bold text for primary column
- **multi-tag**: Multiple tags with icons
- **links**: Action links (Edit/Delete)
- **rating**: Star rating display
- **avatars**: Avatar group with overflow count
- **progress**: Progress bar with percentage
- **actions**: Button group for row actions

## Usage
Perfect for data tables, user lists, admin panels, and any interface requiring structured data display with interactions.
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Table title displayed in header',
    },
    itemCount: {
      control: 'number',
      description: 'Total number of items for badge display',
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: 'Size variant of the table',
    },
    variant: {
      control: 'select',
      options: ['default', 'compact'],
      description: 'Style variant of the table',
    },
    loading: {
      control: 'boolean',
      description: 'Whether table is in loading state',
    },
    showMoreActions: {
      control: 'boolean',
      description: 'Whether to show more actions button in header',
    },
    showPagination: {
      control: 'boolean',
      description: 'Whether to show pagination in footer',
    },
    currentPage: {
      control: 'number',
      description: 'Current page number (1-based)',
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages',
    },
  },
  args: {
    onSort: () => {},
    onRowSelect: () => {},
    onSelectAll: () => {},
    onPageChange: () => {},
    onEdit: () => {},
    onDelete: () => {},
    onMoreActions: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

// Sample data matching the Figma design
const sampleColumns = [
  {
    key: 'name',
    title: 'Contact name',
    type: 'title' as const,
    isLead: true,
    sortable: true,
    sortDirection: 'desc' as const,
  },
  {
    key: 'company',
    title: 'Company',
    type: 'text' as const,
    showHelpIcon: true,
  },
  {
    key: 'preferences',
    title: 'Preferences',
    type: 'multi-tag' as const,
  },
  {
    key: 'actions_links',
    title: 'Actions',
    type: 'links' as const,
    width: '164px',
  },
  {
    key: 'rating',
    title: 'Rating',
    type: 'rating' as const,
  },
  {
    key: 'status',
    title: 'Status',
    type: 'avatars' as const,
  },
  {
    key: 'progress',
    title: 'Progress',
    type: 'progress' as const,
  },
  {
    key: 'actions_buttons',
    title: '',
    type: 'actions' as const,
    width: '200px',
  },
];

const sampleData = [
  {
    id: '1',
    name: 'Olivia Rhye',
    company: 'Olivia Rhye',
    preferences: ['Label', '+4'],
    rating: 5,
    status: [],
    progress: 30,
  },
  {
    id: '2',
    name: 'Olivia Rhye',
    company: 'Olivia Rhye',
    preferences: ['Label', '+4'],
    rating: 3,
    status: [],
    progress: 30,
  },
  {
    id: '3',
    name: 'Olivia Rhye',
    company: 'Olivia Rhye',
    preferences: ['Label', '+4'],
    rating: 5,
    status: [],
    progress: 30,
  },
  {
    id: '4',
    name: 'Olivia Rhye',
    company: 'Olivia Rhye',
    preferences: ['Label', '+4'],
    rating: 4,
    status: [],
    progress: 30,
  },
];

export const Default: Story = {
  args: {
    title: 'Team members',
    itemCount: 100,
    columns: sampleColumns,
    data: sampleData,
    size: 'default',
    variant: 'default',
    showMoreActions: true,
    showPagination: true,
    currentPage: 1,
    totalPages: 10,
    loading: false,
  },
};

export const FigmaExactDesign: Story = {
  args: {
    title: 'Team members',
    itemCount: 100,
    columns: sampleColumns,
    data: sampleData,
    size: 'default',
    variant: 'default',
    showMoreActions: true,
    showPagination: true,
    currentPage: 1,
    totalPages: 10,
    loading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Exact implementation of the Figma design with all cell types, alternating row colors, and pagination.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
    title: 'Team members (Small)',
  },
  parameters: {
    docs: {
      description: {
        story: 'Smaller variant with reduced padding and font sizes.',
      },
    },
  },
};

export const Compact: Story = {
  args: {
    ...Default.args,
    variant: 'compact',
    title: 'Team members (Compact)',
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact variant with tighter spacing for dense data display.',
      },
    },
  },
};

export const WithSelection: Story = {
  args: {
    ...Default.args,
    selectedRowIds: ['1', '3'],
    title: 'Team members (With Selection)',
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with some rows selected, showing selection states.',
      },
    },
  },
};

export const AllSelected: Story = {
  args: {
    ...Default.args,
    allRowsSelected: true,
    title: 'Team members (All Selected)',
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with all rows selected state.',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
    title: 'Team members (Loading)',
  },
  parameters: {
    docs: {
      description: {
        story: 'Table in loading state with spinner.',
      },
    },
  },
};

export const EmptyState: Story = {
  args: {
    ...Default.args,
    data: [],
    title: 'Team members (Empty)',
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with no data showing empty state.',
      },
    },
  },
};

export const NoPagination: Story = {
  args: {
    ...Default.args,
    showPagination: false,
    title: 'Team members (No Pagination)',
  },
  parameters: {
    docs: {
      description: {
        story: 'Table without pagination controls.',
      },
    },
  },
};

export const NoMoreActions: Story = {
  args: {
    ...Default.args,
    showMoreActions: false,
    title: 'Team members (No More Actions)',
  },
  parameters: {
    docs: {
      description: {
        story: 'Table without more actions button in header.',
      },
    },
  },
};

// Different cell type showcases
const textOnlyColumns = [
  {
    key: 'name',
    title: 'Name',
    type: 'title' as const,
    isLead: true,
  },
  {
    key: 'email',
    title: 'Email',
    type: 'text' as const,
  },
  {
    key: 'role',
    title: 'Role',
    type: 'text' as const,
  },
  {
    key: 'department',
    title: 'Department',
    type: 'text' as const,
  },
];

const textOnlyData = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    department: 'Engineering',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Product Manager',
    department: 'Product',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'Designer',
    department: 'Design',
  },
];

export const TextOnly: Story = {
  args: {
    title: 'Employee List',
    itemCount: 3,
    columns: textOnlyColumns,
    data: textOnlyData,
    size: 'default',
    showMoreActions: false,
    showPagination: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple table with only text and title cell types.',
      },
    },
  },
};

const ratingsColumns = [
  {
    key: 'product',
    title: 'Product',
    type: 'title' as const,
    isLead: true,
  },
  {
    key: 'rating',
    title: 'Rating',
    type: 'rating' as const,
  },
  {
    key: 'reviews',
    title: 'Reviews',
    type: 'text' as const,
  },
];

const ratingsData = [
  {
    id: '1',
    product: 'Product A',
    rating: 5,
    reviews: '124 reviews',
  },
  {
    id: '2',
    product: 'Product B',
    rating: 4,
    reviews: '89 reviews',
  },
  {
    id: '3',
    product: 'Product C',
    rating: 3,
    reviews: '45 reviews',
  },
];

export const WithRatings: Story = {
  args: {
    title: 'Product Ratings',
    itemCount: 3,
    columns: ratingsColumns,
    data: ratingsData,
    size: 'default',
    showMoreActions: false,
    showPagination: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table featuring star ratings display.',
      },
    },
  },
};

const progressColumns = [
  {
    key: 'project',
    title: 'Project',
    type: 'title' as const,
    isLead: true,
  },
  {
    key: 'progress',
    title: 'Progress',
    type: 'progress' as const,
  },
  {
    key: 'status',
    title: 'Status',
    type: 'text' as const,
  },
];

const progressData = [
  {
    id: '1',
    project: 'Project Alpha',
    progress: 75,
    status: 'On Track',
  },
  {
    id: '2',
    project: 'Project Beta',
    progress: 45,
    status: 'In Progress',
  },
  {
    id: '3',
    project: 'Project Gamma',
    progress: 90,
    status: 'Near Completion',
  },
];

export const WithProgress: Story = {
  args: {
    title: 'Project Progress',
    itemCount: 3,
    columns: progressColumns,
    data: progressData,
    size: 'default',
    showMoreActions: false,
    showPagination: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table featuring progress bars with percentages.',
      },
    },
  },
};

export const LargePagination: Story = {
  args: {
    ...Default.args,
    title: 'Large Dataset',
    itemCount: 1000,
    currentPage: 5,
    totalPages: 100,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with large pagination showing ellipsis handling.',
      },
    },
  },
};

export const ResponsiveBreakpoint: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Table at mobile breakpoint showing responsive behavior.',
      },
    },
  },
};

export const CustomCellRenderer: Story = {
  args: {
    title: 'Custom Rendered Cells',
    itemCount: 3,
    columns: [
      {
        key: 'name',
        title: 'Name',
        type: 'title' as const,
        isLead: true,
      },
      {
        key: 'status',
        title: 'Custom Status',
        type: 'text' as const,
        render: (value: string) => (
          <span 
            style={{ 
              padding: '4px 8px', 
              borderRadius: '4px', 
              backgroundColor: value === 'Active' ? '#dcfce7' : '#fef3c7',
              color: value === 'Active' ? '#166534' : '#92400e',
              fontSize: '12px',
              fontWeight: 'bold'
            }}
          >
            {value}
          </span>
        ),
      },
    ],
    data: [
      { id: '1', name: 'User 1', status: 'Active' },
      { id: '2', name: 'User 2', status: 'Inactive' },
      { id: '3', name: 'User 3', status: 'Active' },
    ],
    showMoreActions: false,
    showPagination: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with custom cell renderer function for specialized content.',
      },
    },
  },
};
