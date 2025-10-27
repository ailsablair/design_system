import type { Meta, StoryObj } from '@storybook/react';
import { ImpactTable } from './ImpactTable';

const meta: Meta<typeof ImpactTable> = {
  title: 'Atoms/🧱 Building Blocks/Tables/Impact/ImpactTable',
  component: ImpactTable,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Impact Table component is a comprehensive table for displaying and editing impact assessment data, assembled from ImpactTableCell components.

## Features

- **Category Headers**: Headers with optional subtexts and lock icons
- **Row Headers**: Right-aligned titles with optional subtexts  
- **Multiple Column Types**: Support for special columns (0A) and regular columns (U1-U4)
- **Various Cell Types**: 
  - Populated cells with decimal or scale values
  - Dropdown cells for selecting values
  - Input cells for entering data
  - Total cells for displaying read-only calculated values
- **Visual Hierarchy**: 
  - Green border separates special "Impact values" column
  - Dark seafoam borders for header and total rows
  - Light blue background for total cells
  - Light green background for 0A column cells
- **Pixel-Perfect Design**: Matches Figma specifications exactly

## Structure

The table consists of:
1. **Header row**: Category name, Impact values (with lock), and column headers (0A, U1-U4)
2. **Body rows**: Row headers and data cells across all columns
3. **Total row**: Summary row with calculated totals

Perfect for impact assessments, risk matrices, financial planning, and other structured data entry.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImpactTable>;

/**
 * Default Impact Table showing the complete structure with all cell types.
 * 
 * This example demonstrates:
 * - Category headers with and without lock icons
 * - Row headers with subtexts
 * - Populated decimal and scale values
 * - Dropdown and input cells
 * - Total row with various formatting
 */
export const Default: Story = {
  args: {},
};

/**
 * Impact Table in a container to show responsive behavior.
 */
export const InContainer: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ 
        padding: '24px', 
        background: 'var(--neutral-gray-gray-50, #F9FAFB)',
        borderRadius: '8px'
      }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Impact Table at different viewport sizes to demonstrate responsiveness.
 */
export const Responsive: Story = {
  args: {},
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1440px', height: '900px' },
        },
      },
    },
  },
};

/**
 * Impact Table with custom className for styling.
 */
export const WithCustomClass: Story = {
  args: {
    className: 'custom-impact-table',
  },
  decorators: [
    (Story) => (
      <div>
        <style>
          {`
            .custom-impact-table {
              box-shadow: 0px 5px 10px 0px rgba(39, 39, 39, 0.1);
              border-radius: 4px;
            }
          `}
        </style>
        <Story />
      </div>
    ),
  ],
};

/**
 * Impact Table demonstrating the full design with all variants visible.
 * This matches the exact Figma design provided.
 */
export const FigmaDesign: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
This story showcases the Impact Table exactly as designed in Figma, featuring:

- **Header Row**: 
  - "Category name" with subtitle
  - "Impact values" with lock icon and subtitle
  - Column headers: 0A (special), U1, U2, U3, U4

- **Body Rows** (4 rows):
  - Row headers: "Row title goes here" with "This is subtext"
  - Impact values column: Two populated decimals (2.65), one dropdown, one input
  - 0A column: All populated with 5.67
  - U1 column: All scale values (3)
  - U2, U3, U4 columns: All populated with 5.67

- **Total Row**:
  - "Total amount ($M)" with subtext
  - Mixed value types across columns

The design uses:
- Custom design tokens for colors, spacing, and typography
- Seafoam green accent for special column border
- Light blue backgrounds for total cells
- Light green backgrounds for 0A cells
        `,
      },
    },
  },
};
