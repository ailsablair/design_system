import type { Meta, StoryObj } from '@storybook/react';
import { ImpactTable } from './ImpactTable';

/**
 * ImpactTable is a comprehensive table component designed for nuclear power impact assessment.
 * It features:
 * - Sticky header and first column for easy navigation
 * - Multiple cell types (dropdown, input, total, populated, locked)
 * - Full design token integration
 * - Responsive layout for all screen sizes
 * - Accessible markup
 */
const meta: Meta<typeof ImpactTable> = {
  title: 'Atoms/🧱 Building Blocks/Tables/Impact/ImpactTable',
  component: ImpactTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A fully-featured impact assessment table with sticky headers and columns, multiple cell types, and responsive design.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImpactTable>;

/**
 * Default Impact Table
 * 
 * Shows the complete table with all features:
 * - Header row with category and unit headers
 * - Data rows with dropdowns, inputs, and locked cells
 * - Total row at the bottom
 * - Responsive scrolling for smaller screens
 */
export const Default: Story = {
  args: {},
};

/**
 * Interactive Example
 * 
 * Try scrolling horizontally to see the sticky first column in action.
 * The header and total rows also remain visible when scrolling vertically.
 */
export const Interactive: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Scroll horizontally and vertically to see sticky positioning in action.',
      },
    },
  },
};

/**
 * Responsive View
 * 
 * Resize your browser window to see how the table adapts to different screen sizes.
 * On smaller screens, horizontal scrolling is enabled automatically.
 */
export const Responsive: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'The table is fully responsive and maintains usability on all screen sizes.',
      },
    },
  },
};
