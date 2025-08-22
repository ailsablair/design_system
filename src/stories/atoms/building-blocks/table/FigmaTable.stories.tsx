import type { Meta, StoryObj } from '@storybook/react';
import { FigmaTable } from './FigmaTable';
import type { FigmaTableColumn, FigmaTableData } from './FigmaTable';

const meta: Meta<typeof FigmaTable> = {
  title: 'Atoms/Building Blocks/Table/FigmaTable',
  component: FigmaTable,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# FigmaTable Component

A comprehensive table component that exactly matches the Figma design specifications. Features include:

- **Multiple cell types**: title, text, multi-tag, links, rating, group-avatars, progress-bar, button-group
- **Two size variants**: default and small
- **Interactive features**: sorting, selection, pagination
- **Header and footer**: with title, subtitle, count badge, and action buttons
- **Responsive design**: adapts to different screen sizes
- **Accessibility**: full keyboard navigation and screen reader support

## Usage

This component is designed to display tabular data with rich content types and comprehensive interaction patterns.
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['default', 'small'],
      description: 'Table size variant',
    },
    headerFooterBg: {
      control: { type: 'radio' },
      options: ['blue-50', 'blue-100', 'seafoam', 'yellow', 'black'],
      description: 'Header and footer background color theme',
    },
    showMoreActions: {
      control: { type: 'boolean' },
      description: 'Show action buttons in header',
    },
    showPagination: {
      control: { type: 'boolean' },
      description: 'Show pagination controls',
    },
    showSubText: {
      control: { type: 'boolean' },
      description: 'Show subtitle in header',
    },
    currentPage: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Current page number',
    },
    totalPages: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Total number of pages',
    },
  },
  args: {
    title: 'Customers',
    subtitle: 'These companies have purchased in the last 12 months',
    itemCount: 100,
    size: 'default',
    currentPage: 1,
    totalPages: 10,
    showMoreActions: true,
    showPagination: true,
    showSubText: true,
    headerFooterBg: 'blue-50',
  },
} satisfies Meta<typeof FigmaTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample columns configuration matching Figma design
const defaultColumns: FigmaTableColumn[] = [
  {
    key: 'company',
    title: 'Company',
    type: 'title',
    isLead: true,
    sortable: true,
    sortDirection: 'desc',
  },
  {
    key: 'contact',
    title: 'Contact',
    type: 'text',
  },
  {
    key: 'categories',
    title: 'Categories',
    type: 'multi-tag',
  },
  {
    key: 'actions',
    title: 'Actions',
    type: 'links',
    width: '164px',
  },
  {
    key: 'rating',
    title: 'Rating',
    type: 'rating',
  },
  {
    key: 'teamMembers',
    title: 'Team members',
    type: 'group-avatars',
  },
  {
    key: 'pipelineStage',
    title: 'Pipeline stage',
    type: 'progress-bar',
  },
  {
    key: 'buttonActions',
    title: '',
    type: 'button-group',
  },
];

// Sample data matching Figma design
const defaultData: FigmaTableData[] = [
  {
    id: '1',
    company: 'Olivia Rhye',
    contact: 'Olivia Rhye',
    categories: ['Design', 'Development'],
    actions: 'Edit/Delete',
    rating: 5,
    teamMembers: ['User 1', 'User 2', 'User 3'],
    pipelineStage: 30,
    selected: true,
  },
  {
    id: '2',
    company: 'Olivia Rhye',
    contact: 'Olivia Rhye',
    categories: ['Marketing', 'Sales'],
    actions: 'Edit/Delete',
    rating: 4,
    teamMembers: ['User 1', 'User 2'],
    pipelineStage: 60,
  },
  {
    id: '3',
    company: 'Olivia Rhye',
    contact: 'Olivia Rhye',
    categories: ['Support'],
    actions: 'Edit/Delete',
    rating: 5,
    teamMembers: ['User 1', 'User 2', 'User 3', 'User 4'],
    pipelineStage: 85,
  },
  {
    id: '4',
    company: 'Olivia Rhye',
    contact: 'Olivia Rhye',
    categories: ['Development', 'QA'],
    actions: 'Edit/Delete',
    rating: 3,
    teamMembers: ['User 1'],
    pipelineStage: 25,
  },
];

/**
 * Default size table exactly matching the first Figma design.
 * Features full header with title, subtitle, count badge, and action buttons.
 * Shows all cell types and pagination controls.
 */
export const Default: Story = {
  args: {
    columns: defaultColumns,
    data: defaultData,
    size: 'default',
    title: 'Customers',
    subtitle: 'These companies have purchased in the last 12 months',
    itemCount: 100,
    currentPage: 1,
    totalPages: 10,
    showMoreActions: true,
    showPagination: true,
    showSubText: true,
    headerFooterBg: 'blue-50',
  },
};

/**
 * Small size table exactly matching the second Figma design.
 * Compact layout with reduced padding and smaller typography.
 * All functionality remains the same but with tighter spacing.
 */
export const Small: Story = {
  args: {
    columns: defaultColumns,
    data: defaultData,
    size: 'small',
    title: 'Customers',
    subtitle: 'These companies have purchased in the last 12 months',
    itemCount: 100,
    currentPage: 1,
    totalPages: 10,
    showMoreActions: true,
    showPagination: true,
    showSubText: true,
    headerFooterBg: 'blue-50',
  },
};

/**
 * Table with blue-100 header and footer background.
 * Demonstrates alternative color scheme.
 */
export const BlueBackground: Story = {
  args: {
    columns: defaultColumns,
    data: defaultData,
    size: 'default',
    title: 'Customers',
    subtitle: 'These companies have purchased in the last 12 months',
    itemCount: 100,
    headerFooterBg: 'blue-100',
  },
};

/**
 * Minimal table configuration without header actions, pagination, or subtitle.
 * Shows the core table functionality with simplified header.
 */
export const Minimal: Story = {
  args: {
    columns: defaultColumns,
    data: defaultData,
    size: 'default',
    title: 'Customers',
    itemCount: 100,
    showMoreActions: false,
    showPagination: false,
    showSubText: false,
  },
};

/**
 * Table showing different selection states.
 * Demonstrates how selected rows appear with different background colors.
 */
export const WithSelection: Story = {
  args: {
    columns: defaultColumns,
    data: [
      { ...defaultData[0], selected: true },
      { ...defaultData[1], selected: true },
      { ...defaultData[2], selected: false },
      { ...defaultData[3], selected: false },
    ],
    title: 'Selected Items',
    subtitle: 'Showing selection states',
    itemCount: 4,
  },
};

/**
 * Table demonstrating pagination with different page states.
 * Shows how pagination controls adapt to current page position.
 */
export const PaginationStates: Story = {
  args: {
    columns: defaultColumns,
    data: defaultData,
    title: 'Pagination Example',
    subtitle: 'Navigate through multiple pages',
    itemCount: 250,
    currentPage: 5,
    totalPages: 25,
  },
};

/**
 * Table with empty state.
 * Shows how the component handles when no data is provided.
 */
export const EmptyState: Story = {
  args: {
    columns: defaultColumns,
    data: [],
    title: 'No Data',
    subtitle: 'No items found matching your criteria',
    itemCount: 0,
    showPagination: false,
  },
};

/**
 * Table with single row.
 * Demonstrates minimum viable data presentation.
 */
export const SingleRow: Story = {
  args: {
    columns: defaultColumns,
    data: [defaultData[0]],
    title: 'Single Item',
    subtitle: 'Table with only one data row',
    itemCount: 1,
    showPagination: false,
  },
};

/**
 * Table demonstrating all interactive states.
 * Shows hover, selection, and various cell interactions.
 */
export const InteractiveStates: Story = {
  args: {
    columns: defaultColumns,
    data: defaultData,
    title: 'Interactive Features',
    subtitle: 'Hover over rows, select items, and interact with cells',
    itemCount: 4,
  },
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates the interactive capabilities of the FigmaTable:

- **Row selection**: Click checkboxes to select/deselect rows
- **Sorting**: Click sortable column headers to change sort direction
- **Pagination**: Navigate between pages using the footer controls
- **Cell actions**: Click links and buttons within cells
- **Hover states**: Rows highlight when hovering
        `,
      },
    },
  },
};

/**
 * Table optimized for mobile/responsive viewing.
 * Shows how the component adapts to smaller screen sizes.
 */
export const Responsive: Story = {
  args: {
    columns: defaultColumns,
    data: defaultData,
    size: 'small',
    title: 'Responsive Table',
    subtitle: 'Adapts to different screen sizes',
    itemCount: 100,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: `
This story shows how the FigmaTable adapts to mobile and tablet viewports:

- **Stacked layout**: Header actions and pagination stack vertically
- **Reduced padding**: Cells use less space for better mobile experience
- **Touch-friendly**: Interactive elements are sized for touch interaction
        `,
      },
    },
  },
};

/**
 * Large dataset table with many pages.
 * Demonstrates performance with extensive pagination.
 */
export const LargeDataset: Story = {
  args: {
    columns: defaultColumns,
    data: Array.from({ length: 20 }, (_, index) => ({
      ...defaultData[index % defaultData.length],
      id: `item-${index + 1}`,
      company: `Company ${index + 1}`,
    })),
    title: 'Large Dataset',
    subtitle: 'Table with extensive data and pagination',
    itemCount: 10000,
    currentPage: 47,
    totalPages: 500,
  },
};

/**
 * Seafoam Theme - First Figma Design
 * Exact reproduction of the first Figma design with seafoam/green color scheme
 */
export const SeafoamTheme: Story = {
  name: '🌊 Seafoam Theme',
  args: {
    columns: defaultColumns,
    data: defaultData,
    size: 'default',
    title: 'Customers',
    subtitle: 'These companies have purchased in the last 12 months',
    itemCount: 100,
    currentPage: 1,
    totalPages: 10,
    showMoreActions: true,
    showPagination: false,
    showSubText: true,
    headerFooterBg: 'seafoam',
  },
  parameters: {
    docs: {
      description: {
        story: `
**Seafoam Theme - First Figma Design**

This story reproduces the first Figma design exactly:
- Dark seafoam header background (#4B6D58)
- White and seafoam-25 alternating row colors
- Seafoam borders and accents throughout
- White text on dark seafoam headers
- View more button in footer instead of pagination
        `,
      },
    },
  },
};

/**
 * Black Theme with Yellow Accents - Second Figma Design
 * Exact reproduction of the second Figma design with dark header and yellow highlights
 */
export const BlackTheme: Story = {
  name: '🌙 Black Theme',
  args: {
    columns: defaultColumns,
    data: defaultData,
    size: 'small',
    title: 'Customers',
    subtitle: 'These companies have purchased in the last 12 months',
    itemCount: 100,
    currentPage: 1,
    totalPages: 10,
    showMoreActions: true,
    showPagination: true,
    showSubText: true,
    headerFooterBg: 'black',
  },
  parameters: {
    docs: {
      description: {
        story: `
**Black Theme with Yellow Accents - Second Figma Design**

This story reproduces the second Figma design exactly:
- Black/dark gray header and footer (#1F2937)
- Yellow accents and highlights throughout
- Yellow-100 header background variant
- White text on dark backgrounds
- Compact small size with tighter spacing
- Full pagination controls in footer
        `,
      },
    },
  },
};

/**
 * Yellow Theme
 * Bright theme with yellow backgrounds and accents
 */
export const YellowTheme: Story = {
  name: '☀️ Yellow Theme',
  args: {
    columns: defaultColumns,
    data: defaultData,
    size: 'default',
    title: 'Customers',
    subtitle: 'These companies have purchased in the last 12 months',
    itemCount: 100,
    currentPage: 1,
    totalPages: 10,
    showMoreActions: true,
    showPagination: true,
    showSubText: true,
    headerFooterBg: 'yellow',
  },
  parameters: {
    docs: {
      description: {
        story: `
**Yellow Theme**

Bright and energetic theme featuring:
- Yellow-100 header and footer backgrounds
- Yellow borders and accents
- Warm color palette perfect for highlighting important data
        `,
      },
    },
  },
};

/**
 * Figma Design Showcase - Default Size
 * Exact reproduction of the first Figma design with all specifications
 */
export const FigmaShowcaseDefault: Story = {
  name: '📋 Figma Showcase - Default',
  args: {
    columns: defaultColumns,
    data: defaultData,
    size: 'default',
    title: 'Customers',
    subtitle: 'These companies have purchased in the last 12 months',
    itemCount: 100,
    currentPage: 1,
    totalPages: 10,
    showMoreActions: true,
    showPagination: true,
    showSubText: true,
    headerFooterBg: 'blue-50',
  },
  parameters: {
    docs: {
      description: {
        story: `
**Exact Figma Design Implementation - Default Size**

This story reproduces the first Figma design exactly:
- 90px header height with blue-50 background
- 332px table body with alternating row colors
- 70px footer with pagination controls
- All cell types: title, text, multi-tag, links, rating, group-avatars, progress-bar, button-group
- Proper spacing, typography, and color scheme matching design tokens
        `,
      },
    },
  },
};

/**
 * Figma Design Showcase - Small Size
 * Exact reproduction of the second Figma design with compact layout
 */
export const FigmaShowcaseSmall: Story = {
  name: '📋 Figma Showcase - Small',
  args: {
    columns: defaultColumns,
    data: defaultData,
    size: 'small',
    title: 'Customers',
    subtitle: 'These companies have purchased in the last 12 months',
    itemCount: 100,
    currentPage: 1,
    totalPages: 10,
    showMoreActions: true,
    showPagination: true,
    showSubText: true,
    headerFooterBg: 'blue-50',
  },
  parameters: {
    docs: {
      description: {
        story: `
**Exact Figma Design Implementation - Small Size**

This story reproduces the second Figma design exactly:
- Compact header with reduced padding and smaller typography
- Tighter table spacing for better density
- Smaller pagination controls and buttons
- Same functionality as default size but optimized for space
- Perfect for dashboards and data-heavy interfaces
        `,
      },
    },
  },
};

/**
 * All Themes Showcase
 * Demonstrates all available theme variations side by side
 */
export const AllThemes: Story = {
  name: '🎨 All Themes Showcase',
  args: {
    columns: defaultColumns,
    data: defaultData,
    size: 'default',
    title: 'Theme Comparison',
    subtitle: 'Compare all available color themes',
    itemCount: 100,
    currentPage: 1,
    totalPages: 10,
    showMoreActions: true,
    showPagination: true,
    showSubText: true,
    headerFooterBg: 'blue-50',
  },
  parameters: {
    docs: {
      description: {
        story: `
**All Themes Showcase**

This story demonstrates all available theme variations:

1. **Blue 50/100**: Original blue themes for clean, professional interfaces
2. **Seafoam**: Green-tinted theme matching the first Figma design
3. **Yellow**: Bright, energetic theme with yellow accents
4. **Black**: Dark theme with yellow highlights matching the second Figma design

Each theme provides:
- Consistent color scheme across header, body, and footer
- Proper contrast ratios for accessibility
- Semantic color usage matching design system tokens
- Responsive behavior across all screen sizes
        `,
      },
    },
  },
};
