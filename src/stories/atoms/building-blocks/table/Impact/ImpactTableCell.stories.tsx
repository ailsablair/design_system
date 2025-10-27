import type { Meta, StoryObj } from '@storybook/react';
import { ImpactTableCell } from './ImpactTableCell';

const meta: Meta<typeof ImpactTableCell> = {
  title: 'Atoms/🧱 Building Blocks/Tables/Impact/ImpactTableCell',
  component: ImpactTableCell,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Impact Table Cell component is a specialized cell for impact assessment tables based on the new Figma design. It supports:

- **Dropdown cells**: For selecting impact values with chevron icon
- **Input cells**: For entering numerical data
- **Header cells**: Category names with optional lock icons and subtitles  
- **Row headers**: Right-aligned titles with optional subtexts
- **Total cells**: Read-only cells displaying calculated values
- **Populated cells**: Read-only cells showing finalized data
- **Locked cells**: Read-only cells with lock indicator
- **Impact cells**: Special category headers with lock icon and subtitle

The component follows the Echo Design System and uses only custom design tokens from Figma.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    role: {
      control: 'select',
      options: ['cell', 'cell-0', 'row'],
      description: 'Cell role variant - determines background color',
    },
    type: {
      control: 'select',
      options: ['dropdown', 'input', 'header', 'header-w-subtext', 'total', 'populated', 'locked', 'impact'],
      description: 'Cell type determines the layout and content',
    },
    width: {
      control: 'select',
      options: ['sm', 'lg'],
      description: 'Cell width variant',
    },
    state: {
      control: 'select',
      options: ['default', 'empty', 'disabled', 'disabled-empty', 'decimal', 'text', 'scale'],
      description: 'Cell state',
    },
    hover: {
      control: 'boolean',
      description: 'Hover state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImpactTableCell>;

// ===== DROPDOWN CELLS =====

export const DropdownScaleLarge: Story = {
  name: 'Dropdown - Scale (Large)',
  args: {
    role: 'cell',
    type: 'dropdown',
    width: 'lg',
    state: 'scale',
    value: '3 - Significant',
    options: [
      { label: '1 - Negligible', value: '1 - Negligible' },
      { label: '2 - Minor', value: '2 - Minor' },
      { label: '3 - Significant', value: '3 - Significant' },
      { label: '4 - Major', value: '4 - Major' },
      { label: '5 - Critical', value: '5 - Critical' },
    ],
  },
};

export const DropdownScaleLargeHover: Story = {
  name: 'Dropdown - Scale Hover (Large)',
  args: {
    role: 'cell',
    type: 'dropdown',
    width: 'lg',
    state: 'scale',
    value: '3 - Significant',
    hover: true,
    options: [
      { label: '1 - Negligible', value: '1 - Negligible' },
      { label: '2 - Minor', value: '2 - Minor' },
      { label: '3 - Significant', value: '3 - Significant' },
    ],
  },
};

export const DropdownEmptyLarge: Story = {
  name: 'Dropdown - Empty (Large)',
  args: {
    role: 'cell',
    type: 'dropdown',
    width: 'lg',
    state: 'empty',
  },
};

export const DropdownDefaultLarge: Story = {
  name: 'Dropdown - Default (Large)',
  args: {
    role: 'cell',
    type: 'dropdown',
    width: 'lg',
    state: 'default',
  },
};

export const DropdownDisabledLarge: Story = {
  name: 'Dropdown - Disabled (Large)',
  args: {
    role: 'cell',
    type: 'dropdown',
    width: 'lg',
    state: 'disabled',
  },
};

export const DropdownDisabledEmptyLarge: Story = {
  name: 'Dropdown - Disabled Empty (Large)',
  args: {
    role: 'cell',
    type: 'dropdown',
    width: 'lg',
    state: 'disabled-empty',
  },
};

export const DropdownScaleSmall: Story = {
  name: 'Dropdown - Scale (Small, Cell-0)',
  args: {
    role: 'cell-0',
    type: 'dropdown',
    width: 'sm',
    state: 'scale',
    value: '3',
  },
};

export const DropdownDefaultSmall: Story = {
  name: 'Dropdown - Default (Small)',
  args: {
    role: 'cell',
    type: 'dropdown',
    width: 'sm',
    state: 'default',
  },
};

// ===== INPUT CELLS =====

export const InputDecimalLarge: Story = {
  name: 'Input - Decimal (Large)',
  args: {
    role: 'cell',
    type: 'input',
    width: 'lg',
    state: 'decimal',
    value: '2.65',
  },
};

export const InputDefaultLarge: Story = {
  name: 'Input - Default (Large)',
  args: {
    role: 'cell',
    type: 'input',
    width: 'lg',
    state: 'default',
    placeholder: 'Enter initial value',
  },
};

export const InputEmptyLarge: Story = {
  name: 'Input - Empty (Large)',
  args: {
    role: 'cell',
    type: 'input',
    width: 'lg',
    state: 'empty',
  },
};

export const InputDisabledLarge: Story = {
  name: 'Input - Disabled (Large)',
  args: {
    role: 'cell',
    type: 'input',
    width: 'lg',
    state: 'disabled',
  },
};

export const InputDisabledEmptyLarge: Story = {
  name: 'Input - Disabled Empty (Large)',
  args: {
    role: 'cell',
    type: 'input',
    width: 'lg',
    state: 'disabled-empty',
  },
};

export const InputDecimalSmall: Story = {
  name: 'Input - Decimal (Small, Cell-0)',
  args: {
    role: 'cell-0',
    type: 'input',
    width: 'sm',
    state: 'decimal',
    value: '5.67',
  },
};

export const InputDefaultSmall: Story = {
  name: 'Input - Default (Small)',
  args: {
    role: 'cell',
    type: 'input',
    width: 'sm',
    state: 'default',
  },
};

export const InputEmptySmall: Story = {
  name: 'Input - Empty (Small, Cell-0)',
  args: {
    role: 'cell-0',
    type: 'input',
    width: 'sm',
    state: 'empty',
  },
};

export const InputDisabledSmall: Story = {
  name: 'Input - Disabled (Small)',
  args: {
    role: 'cell',
    type: 'input',
    width: 'sm',
    state: 'disabled',
  },
};

// ===== TOTAL CELLS =====

export const TotalDecimalSmall: Story = {
  name: 'Total - Decimal (Small)',
  args: {
    role: 'cell',
    type: 'total',
    width: 'sm',
    state: 'decimal',
    value: '5.67',
  },
};

export const TotalTextSmall: Story = {
  name: 'Total - Text (Small)',
  args: {
    role: 'cell',
    type: 'total',
    width: 'sm',
    state: 'text',
    value: 'Text',
  },
};

export const TotalScaleSmall: Story = {
  name: 'Total - Scale (Small)',
  args: {
    role: 'cell',
    type: 'total',
    width: 'sm',
    state: 'scale',
    value: '3',
  },
};

export const TotalDefaultSmall: Story = {
  name: 'Total - Default (Small)',
  args: {
    role: 'cell',
    type: 'total',
    width: 'sm',
    state: 'default',
    value: '$0.00 M',
  },
};

export const TotalDecimalLarge: Story = {
  name: 'Total - Decimal (Large)',
  args: {
    role: 'cell',
    type: 'total',
    width: 'lg',
    state: 'decimal',
    value: '5.67',
  },
};

// ===== POPULATED CELLS =====

export const PopulatedDecimalSmall: Story = {
  name: 'Populated - Decimal (Small)',
  args: {
    role: 'cell',
    type: 'populated',
    width: 'sm',
    state: 'decimal',
    value: '5.67',
  },
};

export const PopulatedTextSmall: Story = {
  name: 'Populated - Text (Small)',
  args: {
    role: 'cell',
    type: 'populated',
    width: 'sm',
    state: 'text',
    value: 'Text',
  },
};

export const PopulatedScaleSmall: Story = {
  name: 'Populated - Scale (Small)',
  args: {
    role: 'cell',
    type: 'populated',
    width: 'sm',
    state: 'scale',
    value: '3',
  },
};

export const PopulatedDefaultSmall: Story = {
  name: 'Populated - Default (Small)',
  args: {
    role: 'cell',
    type: 'populated',
    width: 'sm',
    state: 'default',
    value: '$0.00 M',
  },
};

export const PopulatedTextLarge: Story = {
  name: 'Populated - Text (Large)',
  args: {
    role: 'cell',
    type: 'populated',
    width: 'lg',
    state: 'text',
    value: 'Populated response here',
  },
};

export const PopulatedDecimalLarge: Story = {
  name: 'Populated - Decimal (Large)',
  args: {
    role: 'cell',
    type: 'populated',
    width: 'lg',
    state: 'decimal',
    value: '2.65',
  },
};

export const PopulatedScaleLarge: Story = {
  name: 'Populated - Scale (Large)',
  args: {
    role: 'cell',
    type: 'populated',
    width: 'lg',
    state: 'scale',
    value: '3 - Significant',
  },
};

// ===== LOCKED CELLS =====

export const LockedDefaultSmall: Story = {
  name: 'Locked - Default (Small)',
  args: {
    role: 'cell',
    type: 'locked',
    width: 'sm',
    state: 'default',
    value: '2001',
  },
};

export const LockedDisabledSmall: Story = {
  name: 'Locked - Disabled (Small)',
  args: {
    role: 'cell',
    type: 'locked',
    width: 'sm',
    state: 'disabled',
    value: '5.67',
  },
};

export const LockedScaleSmall: Story = {
  name: 'Locked - Scale (Small)',
  args: {
    role: 'cell',
    type: 'locked',
    width: 'sm',
    state: 'scale',
    value: '3',
  },
};

export const LockedDecimalSmall: Story = {
  name: 'Locked - Decimal (Small, Cell-0)',
  args: {
    role: 'cell-0',
    type: 'locked',
    width: 'sm',
    state: 'decimal',
    value: '5.67',
  },
};

export const LockedEmptyLarge: Story = {
  name: 'Locked - Empty (Large)',
  args: {
    role: 'cell',
    type: 'locked',
    width: 'lg',
    state: 'empty',
  },
};

export const LockedDecimalLarge: Story = {
  name: 'Locked - Decimal (Large)',
  args: {
    role: 'cell',
    type: 'locked',
    width: 'lg',
    state: 'decimal',
    value: '2.65',
  },
};

export const LockedDisabledLarge: Story = {
  name: 'Locked - Disabled (Large)',
  args: {
    role: 'cell',
    type: 'locked',
    width: 'lg',
    state: 'disabled',
  },
};

// ===== HEADER CELLS =====

export const HeaderColumnSmall: Story = {
  name: 'Header - Column (Small)',
  args: {
    role: 'cell',
    type: 'header',
    width: 'sm',
    unitLabel: 'U1',
  },
};

export const HeaderColumnDisabled: Story = {
  name: 'Header - Column Disabled (Small)',
  args: {
    role: 'cell',
    type: 'header',
    width: 'sm',
    unitLabel: 'U1',
    state: 'disabled',
  },
};

export const HeaderColumnWithYear: Story = {
  name: 'Header - Column with Year (Small, Cell-0)',
  args: {
    role: 'cell-0',
    type: 'header',
    width: 'sm',
    yearLabel: '2025',
    unitLabel: '0A',
  },
};

export const HeaderColumnWithYearDisabled: Story = {
  name: 'Header - Column with Year Disabled (Small)',
  args: {
    role: 'cell-0',
    type: 'header',
    width: 'sm',
    yearLabel: '2025',
    unitLabel: '0A',
    state: 'disabled',
  },
};

export const HeaderCategorySmall: Story = {
  name: 'Header - Category (Small, Cell-0)',
  args: {
    role: 'cell-0',
    type: 'header-w-subtext',
    width: 'sm',
    title: 'Category',
    subtext: 'Subtitle',
  },
};

export const HeaderCategoryDisabledSmall: Story = {
  name: 'Header - Category Disabled (Small)',
  args: {
    role: 'cell',
    type: 'header-w-subtext',
    width: 'sm',
    title: 'Category',
    subtext: 'Subtitle',
    state: 'disabled',
  },
};

export const HeaderCategoryLarge: Story = {
  name: 'Header - Category (Large)',
  args: {
    role: 'cell',
    type: 'header',
    width: 'lg',
    title: 'Category name',
  },
};

export const HeaderCategoryDisabledLarge: Story = {
  name: 'Header - Category Disabled (Large)',
  args: {
    role: 'cell',
    type: 'header',
    width: 'lg',
    title: 'Category name',
    state: 'disabled',
  },
};

// ===== IMPACT CELLS (Category with Lock) =====

export const ImpactCategorySmall: Story = {
  name: 'Impact - Category with Lock (Small, Cell-0)',
  args: {
    role: 'cell-0',
    type: 'impact',
    width: 'sm',
    title: 'Category name',
    subtext: 'This is a subtitle',
  },
};

export const ImpactCategoryLarge: Story = {
  name: 'Impact - Category with Lock (Large)',
  args: {
    role: 'cell',
    type: 'impact',
    width: 'lg',
    title: 'Category name',
    subtext: 'This is a subtitle',
  },
};

// ===== ROW HEADERS =====

export const RowHeaderDefault: Story = {
  name: 'Row - Header Default',
  args: {
    role: 'row',
    type: 'header',
    title: 'Row title goes here',
  },
};

export const RowHeaderDisabled: Story = {
  name: 'Row - Header Disabled',
  args: {
    role: 'row',
    type: 'header',
    title: 'Row title goes here',
    state: 'disabled',
  },
};

export const RowHeaderWithSubtext: Story = {
  name: 'Row - Header with Subtext',
  args: {
    role: 'row',
    type: 'header-w-subtext',
    title: 'Row title goes here',
    subtext: 'This is subtext',
  },
};

export const RowHeaderWithSubtextDisabled: Story = {
  name: 'Row - Header with Subtext Disabled',
  args: {
    role: 'row',
    type: 'header-w-subtext',
    title: 'Row title goes here',
    subtext: 'This is subtext',
    state: 'disabled',
  },
};

export const RowImpact: Story = {
  name: 'Row - Impact Total',
  args: {
    role: 'row',
    type: 'impact',
    title: 'Total amount ($M)',
  },
};

export const RowTotal: Story = {
  name: 'Row - Total with Subtext',
  args: {
    role: 'row',
    type: 'total',
    title: 'Total amount ($M)',
    subtext: 'This is subtext',
  },
};

export const RowTotalText: Story = {
  name: 'Row - Total Text',
  args: {
    role: 'row',
    type: 'total',
    title: 'Total amount ($M)',
    subtext: 'This is subtext',
    state: 'text',
  },
};

export const RowTotalDisabled: Story = {
  name: 'Row - Total Disabled',
  args: {
    role: 'row',
    type: 'total',
    title: 'Total amount ($M)',
    subtext: 'This is subtext',
    state: 'disabled',
  },
};
