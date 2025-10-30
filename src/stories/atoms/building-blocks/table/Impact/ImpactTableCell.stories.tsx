import type { Meta, StoryObj } from '@storybook/react';
import { ImpactTableCell } from './ImpactTableCell';

/**
 * ImpactTableCell is a versatile table cell component with multiple variants.
 * 
 * ## Features
 * - **Multiple types**: dropdown, input, total, populated, locked, header
 * - **Width variants**: small (94px) and large (202px)
 * - **States**: default, empty, disabled, decimal, text, scale
 * - **Roles**: cell, cell-0 (first column), row (header/total)
 * - **Design tokens**: Fully integrated with Echo Design System
 */
const meta: Meta<typeof ImpactTableCell> = {
  title: 'Atoms/🧱 Building Blocks/Tables/Impact/ImpactTableCell',
  component: ImpactTableCell,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible table cell component supporting dropdown, input, total, populated, locked, and header variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    role: {
      control: 'select',
      options: ['cell', 'cell-0', 'row'],
      description: 'Role of the cell in the table',
    },
    type: {
      control: 'select',
      options: ['dropdown', 'header', 'input', 'total', 'header-w-subtext', 'populated', 'locked', 'impact'],
      description: 'Type of cell content',
    },
    width: {
      control: 'select',
      options: ['lg', 'sm'],
      description: 'Width variant',
    },
    state: {
      control: 'select',
      options: ['default', 'empty', 'filled', 'decimal', 'text', 'scale'],
      description: 'State of the cell',
    },
    hover: {
      control: 'boolean',
      description: 'Hover state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state (non-interactive)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImpactTableCell>;

/**
 * Dropdown Cell - Scale State
 * 
 * A dropdown cell showing a selected value (e.g., "3 - Significant").
 * Used for categorical data with predefined options.
 */
export const DropdownScale: Story = {
  args: {
    type: 'dropdown',
    width: 'lg',
    state: 'scale',
    children: '3 - Significant',
  },
};

/**
 * Dropdown Cell - Default State
 * 
 * An empty dropdown cell with placeholder text.
 */
export const DropdownDefault: Story = {
  args: {
    type: 'dropdown',
    width: 'lg',
    state: 'default',
    children: 'Select an option',
  },
};

/**
 * Dropdown Cell - Small Width
 * 
 * A compact dropdown for numerical scale values.
 */
export const DropdownSmall: Story = {
  args: {
    type: 'dropdown',
    width: 'sm',
    state: 'scale',
    children: '3',
  },
};

/**
 * Input Cell - Decimal State
 * 
 * An input cell displaying decimal values.
 * Used for numerical data entry.
 */
export const InputDecimal: Story = {
  args: {
    type: 'input',
    width: 'sm',
    state: 'decimal',
    children: '5.67',
  },
};

/**
 * Input Cell - Default State
 * 
 * An empty input cell with placeholder.
 */
export const InputDefault: Story = {
  args: {
    type: 'input',
    width: 'sm',
    state: 'default',
    children: '0.00',
  },
};

/**
 * Input Cell - Large Width
 * 
 * A larger input field for text or longer numbers.
 */
export const InputLarge: Story = {
  args: {
    type: 'input',
    width: 'lg',
    state: 'default',
    children: 'Enter initial value',
  },
};

/**
 * Total Cell - Decimal
 * 
 * Displays calculated totals with bold formatting.
 */
export const TotalDecimal: Story = {
  args: {
    type: 'total',
    width: 'sm',
    state: 'decimal',
    children: '5.67',
  },
};

/**
 * Total Cell - Currency
 * 
 * Displays monetary totals.
 */
export const TotalCurrency: Story = {
  args: {
    type: 'total',
    width: 'sm',
    state: 'default',
    children: '$0.00 M',
  },
};

/**
 * Populated Cell - Text
 * 
 * Shows static populated data.
 */
export const PopulatedText: Story = {
  args: {
    type: 'populated',
    width: 'lg',
    state: 'text',
    children: 'Populated response here',
  },
};

/**
 * Populated Cell - Decimal
 * 
 * Shows calculated populated values.
 */
export const PopulatedDecimal: Story = {
  args: {
    type: 'populated',
    width: 'sm',
    state: 'decimal',
    children: '5.67',
  },
};

/**
 * Locked Cell - Default
 * 
 * Read-only cell with lock icon.
 * Used for data that cannot be edited.
 */
export const LockedDefault: Story = {
  args: {
    type: 'locked',
    width: 'sm',
    state: 'default',
    children: '2001',
  },
};

/**
 * Locked Cell - Decimal
 * 
 * Read-only numerical value.
 */
export const LockedDecimal: Story = {
  args: {
    type: 'locked',
    width: 'lg',
    state: 'decimal',
    children: '2.65',
  },
};

/**
 * Header Cell - Small
 * 
 * Column header for units (e.g., U1, U2, U3).
 */
export const HeaderSmall: Story = {
  args: {
    type: 'header',
    width: 'sm',
    state: 'default',
    children: 'U1',
  },
};

/**
 * Header Cell - Large
 * 
 * Category header with optional lock icon.
 */
export const HeaderLarge: Story = {
  args: {
    type: 'header',
    width: 'lg',
    state: 'default',
    category: 'Category name',
    showLock: true,
  },
};

/**
 * Header with Subtext - Small
 *
 * Time period header (e.g., year and period).
 */
export const HeaderWithSubtextSmall: Story = {
  args: {
    type: 'header-w-subtext',
    width: 'sm',
    state: 'default',
    subtitle: '2025',
    category: '0A',
  },
};

/**
 * Header with Subtext - Large
 * 
 * Category header with descriptive subtitle.
 */
export const HeaderWithSubtextLarge: Story = {
  args: {
    role: 'row',
    type: 'header-w-subtext',
    width: 'lg',
    state: 'default',
    title: 'Category 1',
    subtitle: 'This is subtext',
  },
};

/**
 * Row Header
 * 
 * Left-aligned row title.
 */
export const RowHeader: Story = {
  args: {
    role: 'row',
    type: 'header',
    width: 'lg',
    state: 'default',
    title: 'Row title goes here',
  },
};

/**
 * Row Total
 * 
 * Total row with bold title and optional subtitle.
 */
export const RowTotal: Story = {
  args: {
    role: 'row',
    type: 'total',
    width: 'lg',
    state: 'default',
    title: 'Total amount ($M)',
    subtitle: 'This is subtext',
  },
};

/**
 * Filled State
 *
 * Dropdown with a selected filled value.
 */
export const DropdownFilled: Story = {
  args: {
    type: 'dropdown',
    width: 'lg',
    state: 'filled',
    children: '3 - Significant',
  },
};

/**
 * Impact Cell - Row Total
 *
 * Impact row with bold title (same as total semantically).
 */
export const ImpactRow: Story = {
  args: {
    role: 'row',
    type: 'impact',
    width: 'lg',
    state: 'default',
    title: 'Total Impact ($M)',
    subtitle: 'This is subtext',
  },
};

/**
 * Disabled State
 *
 * Non-interactive disabled cell.
 */
export const Disabled: Story = {
  args: {
    type: 'dropdown',
    width: 'lg',
    state: 'default',
    disabled: true,
    children: 'Select an option',
  },
};

/**
 * Disabled Filled
 *
 * Disabled cell with filled value.
 */
export const DisabledFilled: Story = {
  args: {
    type: 'dropdown',
    width: 'lg',
    state: 'filled',
    disabled: true,
    children: '3 - Significant',
  },
};

/**
 * Hover State
 * 
 * Cell with hover styling applied.
 */
export const Hover: Story = {
  args: {
    type: 'dropdown',
    width: 'lg',
    state: 'scale',
    hover: true,
    children: '3 - Significant',
  },
};

/**
 * First Column Cell
 *
 * Cell with seafoam background (role: cell-0).
 * Used for the sticky first column.
 */
export const FirstColumn: Story = {
  args: {
    role: 'cell-0',
    type: 'dropdown',
    width: 'sm',
    state: 'scale',
    children: '3',
  },
};

/**
 * First Column Header with Subtext
 *
 * Header cell with year and period for first column.
 */
export const FirstColumnHeader: Story = {
  args: {
    role: 'cell-0',
    type: 'header-w-subtext',
    width: 'sm',
    state: 'default',
    children: '2025',
    category: '0A',
  },
};

/**
 * Disabled First Column Header
 *
 * Disabled header cell for first column.
 */
export const DisabledFirstColumnHeader: Story = {
  args: {
    role: 'cell-0',
    type: 'header-w-subtext',
    width: 'sm',
    state: 'default',
    disabled: true,
    children: '2025',
    category: '0A',
  },
};

/**
 * Locked Cell - Empty State
 *
 * Empty locked cell with only icon.
 */
export const LockedEmpty: Story = {
  args: {
    type: 'locked',
    width: 'sm',
    state: 'empty',
  },
};
