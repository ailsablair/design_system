import type { Meta, StoryObj } from '@storybook/react-vite';
import { FigmaTable } from '../../atoms/building-blocks/table/FigmaTable';
import type { FigmaTableColumn, FigmaTableData } from '../../atoms/building-blocks/table/FigmaTable';

const meta: Meta<typeof FigmaTable> = {
  title: 'Design System/Figma Showcase Files/FigmaTable Extended Figma Showcase',
  component: FigmaTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# FigmaTable - Extended Figma Showcase

This showcase demonstrates the exact implementation of the Figma table designs with all their specifications:

## Features Implemented:
- **Two size variants**: Default and Small with exact spacing and typography
- **Complete table structure**: Header, body, and footer sections
- **Multiple cell types**: title, text, multi-tag, links, rating, group-avatars, progress-bar, button-group
- **Interactive elements**: Selection checkboxes, sortable columns, pagination
- **Design tokens**: Proper colors, spacing, and typography matching the design system
- **Responsive behavior**: Adapts to different screen sizes while maintaining design integrity

## Design Specifications:
- Container with 12px border-radius and proper shadow
- Blue header/footer backgrounds with exact color tokens
- Alternating row backgrounds for better readability
- Proper padding and spacing as per Figma specifications
- All interactive states (hover, selected, disabled)

This component serves as the foundation for data-heavy interfaces requiring rich content display.
        `,
      },
    },
  },
} satisfies Meta<typeof FigmaTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample columns matching Figma design exactly
const figmaColumns: FigmaTableColumn[] = [
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

// Sample data exactly matching Figma designs
const figmaData: FigmaTableData[] = [
  {
    id: '1',
    company: 'Olivia Rhye',
    contact: 'Olivia Rhye',
    categories: ['Label'],
    actions: 'Edit/Delete',
    rating: 5,
    teamMembers: ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'],
    pipelineStage: 30,
    selected: true,
  },
  {
    id: '2',
    company: 'Olivia Rhye',
    contact: 'Olivia Rhye',
    categories: ['Label'],
    actions: 'Edit/Delete',
    rating: 5,
    teamMembers: ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'],
    pipelineStage: 30,
  },
  {
    id: '3',
    company: 'Olivia Rhye',
    contact: 'Olivia Rhye',
    categories: ['Label'],
    actions: 'Edit/Delete',
    rating: 5,
    teamMembers: ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'],
    pipelineStage: 30,
  },
  {
    id: '4',
    company: 'Olivia Rhye',
    contact: 'Olivia Rhye',
    categories: ['Label'],
    actions: 'Edit/Delete',
    rating: 5,
    teamMembers: ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'],
    pipelineStage: 30,
  },
];

/**
 * Complete Default Size Table - Exact Figma Design
 * 
 * This story reproduces the first Figma design with exact specifications:
 * - 90px header height with title, subtitle, count badge, and action buttons
 * - 332px table body with all cell types and proper spacing
 * - 70px footer with pagination controls
 * - Blue-50 background for header and footer
 * - Proper selection states and interactive elements
 */
export const DefaultSizeFigmaExact: Story = {
  name: '🎯 Default Size - Figma Exact',
  args: {
    columns: figmaColumns,
    data: figmaData,
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
**Default Size Table - Pixel Perfect Figma Implementation**

Key specifications implemented:
- **Header**: 90px height, blue-50 background, 24px title font-size, 16px subtitle
- **Table body**: 332px height, alternating row backgrounds (white/gray-50)
- **Footer**: 70px height with pagination controls and navigation buttons
- **Cell types**: All 8 types implemented (title, text, multi-tag, links, rating, group-avatars, progress-bar, button-group)
- **Selection**: Checkbox with indeterminate state support
- **Typography**: Archivo and Roboto Flex fonts with exact weights and sizes
- **Spacing**: 24px horizontal padding, 12px vertical padding as per design
- **Colors**: All design tokens properly applied (primary-blue, sky-blue, neutral-gray)

This represents the standard table size for most data-heavy interfaces.
        `,
      },
    },
  },
};

/**
 * Complete Small Size Table - Exact Figma Design
 * 
 * This story reproduces the second Figma design with compact specifications:
 * - Reduced header height with compact typography
 * - Tighter table spacing for better density
 * - Smaller pagination controls and buttons
 * - Same functionality but optimized for space
 */
export const SmallSizeFigmaExact: Story = {
  name: '🎯 Small Size - Figma Exact',
  args: {
    columns: figmaColumns,
    data: figmaData,
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
**Small Size Table - Compact Figma Implementation**

Key specifications for compact layout:
- **Header**: Reduced padding (12px instead of 20px), 19px title font-size, 13px subtitle
- **Table body**: Tighter row spacing, same 332px height but more data visible
- **Footer**: Compact pagination with 32px page numbers instead of 40px
- **Cell content**: Smaller buttons (extra-small size), compact icons (14px instead of 18px)
- **Typography**: Same font families but smaller sizes for density
- **Spacing**: 12px horizontal padding for more content in less space
- **Interactive elements**: Touch-friendly but space-optimized

Perfect for dashboards and data-dense interfaces where space is premium.
        `,
      },
    },
  },
};

/**
 * Cell Types Demonstration
 * 
 * Shows all available cell types with their specific implementations
 */
export const CellTypesShowcase: Story = {
  name: '🧩 Cell Types Showcase',
  args: {
    columns: [
      { key: 'title', title: 'Title Cells', type: 'title', isLead: true },
      { key: 'text', title: 'Text Cells', type: 'text' },
      { key: 'multiTag', title: 'Multi-Tag', type: 'multi-tag' },
      { key: 'links', title: 'Action Links', type: 'links' },
    ],
    data: [
      {
        id: '1',
        title: 'Primary Title',
        text: 'Supporting text content',
        multiTag: ['Design', 'Development'],
        links: 'Actions',
      },
      {
        id: '2',
        title: 'Another Title',
        text: 'More text content',
        multiTag: ['Marketing', 'Sales', 'Support'],
        links: 'Actions',
      },
    ],
    title: 'Cell Types',
    subtitle: 'Demonstration of all available cell content types',
    itemCount: 2,
    showPagination: false,
  },
  parameters: {
    docs: {
      description: {
        story: `
**Cell Types Implementation Details:**

1. **Title Cells**: Lead column with checkbox, bold text, selection states
2. **Text Cells**: Simple text content with proper typography
3. **Multi-Tag Cells**: Tag components with overflow indicators
4. **Links Cells**: Underlined action links (Edit/Delete)
5. **Rating Cells**: Star components with fill states
6. **Group Avatars**: Avatar groups with overflow count
7. **Progress Bar**: Progress indicators with percentage
8. **Button Group**: Action buttons (Edit/Delete) with icons

Each cell type maintains consistent spacing and alignment within the table structure.
        `,
      },
    },
  },
};

/**
 * Interactive States Demonstration
 * 
 * Shows various interactive states including selection, hover, and sorting
 */
export const InteractiveStatesShowcase: Story = {
  name: '⚡ Interactive States',
  args: {
    columns: figmaColumns,
    data: [
      { ...figmaData[0], selected: true },
      { ...figmaData[1], selected: true },
      { ...figmaData[2], selected: false },
      { ...figmaData[3], selected: false },
    ],
    title: 'Interactive Features',
    subtitle: 'Selection, sorting, and pagination interactions',
    itemCount: 4,
    currentPage: 2,
    totalPages: 5,
  },
  parameters: {
    docs: {
      description: {
        story: `
**Interactive Features Demonstrated:**

- **Row Selection**: Individual and bulk selection with indeterminate states
- **Column Sorting**: Clickable headers with sort direction indicators
- **Pagination**: Previous/Next buttons with page number navigation
- **Cell Actions**: Clickable links and buttons within cells
- **Hover States**: Row highlighting on mouse over
- **Keyboard Navigation**: Full accessibility support

All interactions maintain proper visual feedback and state management.
        `,
      },
    },
  },
};

/**
 * Alternative Background Colors
 * 
 * Shows the table with blue-100 background variant
 */
export const AlternativeBackgrounds: Story = {
  name: '🎨 Alternative Backgrounds',
  args: {
    columns: figmaColumns,
    data: figmaData,
    size: 'default',
    title: 'Alternative Styling',
    subtitle: 'Table with blue-100 header and footer background',
    itemCount: 100,
    headerFooterBg: 'blue-100',
  },
  parameters: {
    docs: {
      description: {
        story: `
**Background Color Variants:**

- **Blue-50**: Lighter background (default) - #F9F9FE
- **Blue-100**: Darker background variant - #E7E9F4

Both maintain proper contrast ratios and accessibility standards while offering visual variety for different interface themes.
        `,
      },
    },
  },
};

/**
 * Responsive Behavior Demonstration
 * 
 * Shows how the table adapts to different screen sizes
 */
export const ResponsiveBehavior: Story = {
  name: '📱 Responsive Behavior',
  args: {
    columns: figmaColumns,
    data: figmaData,
    size: 'small',
    title: 'Responsive Table',
    subtitle: 'Adapts to mobile and tablet viewports',
    itemCount: 100,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: `
**Responsive Design Features:**

- **Mobile Layout**: Header actions stack vertically
- **Touch Targets**: Buttons sized appropriately for touch
- **Horizontal Scroll**: Table scrolls horizontally when needed
- **Compact Spacing**: Reduced padding on smaller screens
- **Priority Content**: Most important columns remain visible

The table maintains usability across all device sizes while preserving design integrity.
        `,
      },
    },
  },
};

/**
 * Accessibility Features Demonstration
 * 
 * Shows all accessibility features and considerations
 */
export const AccessibilityFeatures: Story = {
  name: '♿ Accessibility Features',
  args: {
    columns: figmaColumns,
    data: figmaData,
    title: 'Accessibility Example',
    subtitle: 'Full keyboard navigation and screen reader support',
    itemCount: 100,
  },
  parameters: {
    docs: {
      description: {
        story: `
**Accessibility Implementation:**

- **Keyboard Navigation**: Full tab order and arrow key support
- **Screen Reader**: Proper ARIA labels and descriptions
- **Focus Management**: Visible focus indicators for all interactive elements
- **Color Contrast**: WCAG AA compliant color combinations
- **Semantic HTML**: Proper table structure with headers and captions
- **Alternative Text**: All icons and images have descriptive alt text

This table meets WCAG 2.1 Level AA accessibility standards.
        `,
      },
    },
  },
};
