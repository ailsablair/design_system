import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';
// Mock functions for Storybook args

const meta: Meta<typeof DataTable> = {
  title: 'Molecules/DataTable/Figma Showcase',
  component: DataTable,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# DataTable - Figma Design Implementation

This showcases the exact implementation of the DataTable component as designed in Figma, featuring:

- **Team Members Table** with all specified cell types
- **Alternating row backgrounds** (white and seafoam-25)
- **Multiple selection states** (none, some, all)
- **Comprehensive cell types**: checkboxes, text, tags, links, ratings, avatars, progress bars, buttons
- **Pagination** with ellipsis and navigation
- **Header with title, count badge, and more actions**
- **Sortable columns** with visual indicators

## Figma Design Features Implemented:
- ✅ Header with "Team members" title
- ✅ "100 items" count badge
- ✅ More actions button (dots vertical)
- ✅ Contact name column with checkboxes and sorting
- ✅ Company column with help icon
- ✅ Preferences column with multi-tags (alarm icon, close icon, +4 overflow)
- ✅ Actions column with Edit/Delete links
- ✅ Rating column with 5-star display
- ✅ Status column with avatar groups and overflow count
- ✅ Progress column with progress bars and percentages
- ✅ Action buttons column with Edit/Delete buttons
- ✅ Footer pagination with Previous/Next and page numbers
- ✅ Alternating row backgrounds
- ✅ Responsive design and accessibility support
        `,
      },
    },
  },
  argTypes: {
    title: { control: false },
    itemCount: { control: false },
    columns: { control: false },
    data: { control: false },
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

// Exact Figma design columns
const figmaColumns = [
  {
    key: 'contact_name',
    title: 'Contact name',
    type: 'title' as const,
    isLead: true,
    sortable: true,
    sortDirection: 'down' as const,
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
    key: 'actions',
    title: '', // Empty title as in Figma
    type: 'actions' as const,
  },
];

// Exact Figma design data
const figmaData = [
  {
    id: 'row-1',
    contact_name: 'Olivia Rhye',
    company: 'Olivia Rhye',
    preferences: ['Label', '+4'],
    rating: 5,
    status: [
      { src: '/api/placeholder/46/46', name: 'User 1' },
      { src: '/api/placeholder/46/46', name: 'User 2' },
      { src: '/api/placeholder/46/46', name: 'User 3' },
      { src: '/api/placeholder/46/46', name: 'User 4' },
      { src: '/api/placeholder/46/46', name: 'User 5' },
    ],
    progress: 30,
  },
  {
    id: 'row-2',
    contact_name: 'Olivia Rhye',
    company: 'Olivia Rhye',
    preferences: ['Label', '+4'],
    rating: 5,
    status: [
      { src: '/api/placeholder/46/46', name: 'User 1' },
      { src: '/api/placeholder/46/46', name: 'User 2' },
      { src: '/api/placeholder/46/46', name: 'User 3' },
      { src: '/api/placeholder/46/46', name: 'User 4' },
      { src: '/api/placeholder/46/46', name: 'User 5' },
    ],
    progress: 30,
  },
  {
    id: 'row-3',
    contact_name: 'Olivia Rhye',
    company: 'Olivia Rhye',
    preferences: ['Label', '+4'],
    rating: 5,
    status: [
      { src: '/api/placeholder/46/46', name: 'User 1' },
      { src: '/api/placeholder/46/46', name: 'User 2' },
      { src: '/api/placeholder/46/46', name: 'User 3' },
      { src: '/api/placeholder/46/46', name: 'User 4' },
      { src: '/api/placeholder/46/46', name: 'User 5' },
    ],
    progress: 30,
  },
  {
    id: 'row-4',
    contact_name: 'Olivia Rhye',
    company: 'Olivia Rhye',
    preferences: ['Label', '+4'],
    rating: 5,
    status: [
      { src: '/api/placeholder/46/46', name: 'User 1' },
      { src: '/api/placeholder/46/46', name: 'User 2' },
      { src: '/api/placeholder/46/46', name: 'User 3' },
      { src: '/api/placeholder/46/46', name: 'User 4' },
      { src: '/api/placeholder/46/46', name: 'User 5' },
    ],
    progress: 30,
  },
];

export const FigmaExactMatch: Story = {
  name: '🎨 Figma Exact Match',
  args: {
    title: 'Team members',
    itemCount: 100,
    columns: figmaColumns,
    data: figmaData,
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
        story: `
**Exact Figma Design Implementation**

This story represents the pixel-perfect implementation of the DataTable as designed in Figma:

- Header: "Team members" title with "100 items" badge and more actions button
- Lead column: Contact name with checkboxes and sort indicator
- Company column: with help icon tooltip
- Preferences: Multi-tags with alarm and close icons, plus overflow count
- Actions: Edit/Delete text links
- Rating: 5-star rating display
- Status: Avatar groups with +4 overflow indicator
- Progress: 30% progress bars with percentage labels
- Actions: Edit/Delete button group
- Pagination: Shows "Previous", page numbers 1-3, ellipsis, 8-10, "Next"
- Alternating row backgrounds for better readability
        `,
      },
    },
  },
};

export const FigmaWithSelection: Story = {
  name: '✅ With Row Selection',
  args: {
    ...FigmaExactMatch.args,
    selectedRowIds: ['row-1'],
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the selection state with one row selected (indeterminate checkbox state in header).',
      },
    },
  },
};

export const FigmaAllSelected: Story = {
  name: '☑️ All Rows Selected',
  args: {
    ...FigmaExactMatch.args,
    allRowsSelected: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the state when all rows are selected (checked checkbox in header).',
      },
    },
  },
};

export const FigmaPageNavigation: Story = {
  name: '📄 Different Page States',
  args: {
    ...FigmaExactMatch.args,
    currentPage: 5,
    totalPages: 10,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows pagination in the middle of a large dataset with ellipsis on both sides.',
      },
    },
  },
};

export const FigmaSmallSize: Story = {
  name: '📱 Small Size Variant',
  args: {
    ...FigmaExactMatch.args,
    size: 'small',
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact version of the Figma design with smaller fonts and padding.',
      },
    },
  },
};

export const FigmaAlternativeData: Story = {
  name: '📊 Alternative Data Set',
  args: {
    title: 'Team members',
    itemCount: 47,
    columns: figmaColumns,
    data: [
      {
        id: 'user-1',
        contact_name: 'Sarah Chen',
        company: 'TechCorp Inc.',
        preferences: ['Notifications', '+2'],
        rating: 4,
        status: [
          { src: '/api/placeholder/46/46', name: 'Manager' },
          { src: '/api/placeholder/46/46', name: 'Team Lead' },
        ],
        progress: 85,
      },
      {
        id: 'user-2',
        contact_name: 'Marcus Johnson',
        company: 'Design Studio',
        preferences: ['Email', 'SMS', '+3'],
        rating: 5,
        status: [
          { src: '/api/placeholder/46/46', name: 'Designer' },
          { src: '/api/placeholder/46/46', name: 'Developer' },
          { src: '/api/placeholder/46/46', name: 'Manager' },
        ],
        progress: 42,
      },
      {
        id: 'user-3',
        contact_name: 'Elena Rodriguez',
        company: 'StartupXYZ',
        preferences: ['Push', '+1'],
        rating: 3,
        status: [
          { src: '/api/placeholder/46/46', name: 'Product Manager' },
        ],
        progress: 67,
      },
    ],
    size: 'default',
    variant: 'default',
    showMoreActions: true,
    showPagination: true,
    currentPage: 1,
    totalPages: 5,
    loading: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Same Figma design structure but with different, more realistic data to show flexibility.',
      },
    },
  },
};

export const FigmaResponsiveMobile: Story = {
  name: '📱 Mobile Responsive',
  args: {
    ...FigmaExactMatch.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Figma design adapted for mobile viewports with responsive behavior.',
      },
    },
  },
};

export const FigmaWithRealImages: Story = {
  name: '🖼️ With Real Avatar Images',
  args: {
    title: 'Team members',
    itemCount: 100,
    columns: figmaColumns,
    data: [
      {
        id: 'real-1',
        contact_name: 'Olivia Rhye',
        company: 'Untitled UI',
        preferences: ['Email', 'Slack', '+2'],
        rating: 5,
        status: [
          { src: 'https://images.unsplash.com/photo-1494790108755-2616b8ad8a06?w=46&h=46&fit=crop&crop=face', name: 'Olivia' },
          { src: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=46&h=46&fit=crop&crop=face', name: 'James' },
          { src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=46&h=46&fit=crop&crop=face', name: 'Alex' },
          { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=46&h=46&fit=crop&crop=face', name: 'Maria' },
          { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=46&h=46&fit=crop&crop=face', name: 'John' },
        ],
        progress: 78,
      },
      {
        id: 'real-2',
        contact_name: 'Phoenix Baker',
        company: 'Figma Inc.',
        preferences: ['Push', 'Email', '+1'],
        rating: 4,
        status: [
          { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=46&h=46&fit=crop&crop=face', name: 'Phoenix' },
          { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=46&h=46&fit=crop&crop=face', name: 'Sarah' },
          { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=46&h=46&fit=crop&crop=face', name: 'Mike' },
        ],
        progress: 45,
      },
      {
        id: 'real-3',
        contact_name: 'Lana Steiner',
        company: 'Linear Corp',
        preferences: ['SMS', '+3'],
        rating: 5,
        status: [
          { src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=46&h=46&fit=crop&crop=face', name: 'Lana' },
          { src: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=46&h=46&fit=crop&crop=face', name: 'Tom' },
        ],
        progress: 92,
      },
    ],
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
        story: 'Figma design with real profile images from Unsplash to show how it looks with actual data.',
      },
    },
  },
};
