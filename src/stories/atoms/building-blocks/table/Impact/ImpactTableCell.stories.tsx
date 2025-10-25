import type { Meta, StoryObj } from '@storybook/react';
import { ImpactTableCell } from './ImpactTableCell';

const meta: Meta<typeof ImpactTableCell> = {
  title: 'Tables/Impact/ImpactTableCell',
  component: ImpactTableCell,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Impact Table Cell component is a specialized cell for impact assessment tables. It supports various types including:

- **Dropdown cells**: For selecting impact values from predefined options
- **Input cells**: For entering numerical or text data
- **Header cells**: For displaying category names with optional lock icons
- **Row headers**: For displaying row titles with optional subtexts
- **Column headers**: For displaying year and unit information
- **Total cells**: For displaying calculated read-only values

The component follows the Echo Design System guidelines and uses only custom design tokens.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    role: {
      control: 'select',
      options: ['cell', 'cell-0', 'row'],
      description: 'Cell role variant',
    },
    type: {
      control: 'select',
      options: ['dropdown', 'input', 'header', 'header-w-subtext', 'header-subtext', 'bolded', 'bolded-w-subtext', 'total'],
      description: 'Cell type determines the layout and content',
    },
    width: {
      control: 'select',
      options: ['sm', 'lg'],
      description: 'Cell width variant',
    },
    state: {
      control: 'select',
      options: ['default', 'filled', 'empty', 'disabled', 'disabled-empty', 'hover', 'decimal', 'text', 'scale'],
      description: 'Cell state',
    },
    hover: {
      control: 'boolean',
      description: 'Hover state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImpactTableCell>;

// Dropdown Cell Variants
export const DropdownFilledLarge: Story = {
  args: {
    role: 'cell',
    type: 'dropdown',
    width: 'lg',
    state: 'filled',
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

export const DropdownDefaultLarge: Story = {
  args: {
    role: 'cell',
    type: 'dropdown',
    width: 'lg',
    state: 'default',
    placeholder: 'Select an option',
    options: [
      { label: '1 - Negligible', value: '1 - Negligible' },
      { label: '2 - Minor', value: '2 - Minor' },
      { label: '3 - Significant', value: '3 - Significant' },
      { label: '4 - Major', value: '4 - Major' },
      { label: '5 - Critical', value: '5 - Critical' },
    ],
  },
};

export const DropdownEmptyLarge: Story = {
  args: {
    role: 'cell',
    type: 'dropdown',
    width: 'lg',
    state: 'empty',
  },
};

export const DropdownDisabledLarge: Story = {
  args: {
    role: 'cell',
    type: 'dropdown',
    width: 'lg',
    state: 'disabled',
    disabled: true,
    placeholder: 'Select an option',
  },
};

export const DropdownFilledSmall: Story = {
  args: {
    role: 'cell',
    type: 'dropdown',
    width: 'sm',
    state: 'filled',
    value: '3',
    options: [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '5', value: '5' },
    ],
  },
};

export const DropdownDefaultSmall: Story = {
  args: {
    role: 'cell',
    type: 'dropdown',
    width: 'sm',
    state: 'default',
    placeholder: '0.00',
    options: [
      { label: '0.00', value: '0.00' },
      { label: '1.00', value: '1.00' },
      { label: '2.00', value: '2.00' },
    ],
  },
};

// Input Cell Variants
export const InputFilledLarge: Story = {
  args: {
    role: 'cell',
    type: 'input',
    width: 'lg',
    state: 'filled',
    value: '2.65',
  },
};

export const InputDefaultLarge: Story = {
  args: {
    role: 'cell',
    type: 'input',
    width: 'lg',
    state: 'default',
    placeholder: 'Enter initial value',
  },
};

export const InputEmptyLarge: Story = {
  args: {
    role: 'cell',
    type: 'input',
    width: 'lg',
    state: 'empty',
  },
};

export const InputDisabledLarge: Story = {
  args: {
    role: 'cell',
    type: 'input',
    width: 'lg',
    state: 'disabled',
    disabled: true,
    placeholder: 'Enter initial value',
  },
};

export const InputFilledSmall: Story = {
  args: {
    role: 'cell-0',
    type: 'input',
    width: 'sm',
    state: 'filled',
    value: '5.67',
  },
};

export const InputDefaultSmall: Story = {
  args: {
    role: 'cell',
    type: 'input',
    width: 'sm',
    state: 'default',
    placeholder: '0.00',
  },
};

// Total Cell Variants
export const TotalDecimal: Story = {
  args: {
    role: 'cell',
    type: 'total',
    width: 'sm',
    state: 'decimal',
    value: '5.67',
    readOnly: true,
  },
};

export const TotalText: Story = {
  args: {
    role: 'cell',
    type: 'total',
    width: 'sm',
    state: 'text',
    value: 'Text',
    readOnly: true,
  },
};

export const TotalScale: Story = {
  args: {
    role: 'cell',
    type: 'total',
    width: 'sm',
    state: 'scale',
    value: '3',
    readOnly: true,
  },
};

export const TotalDefault: Story = {
  args: {
    role: 'cell',
    type: 'total',
    width: 'sm',
    state: 'default',
    value: '$0.00 M',
    readOnly: true,
  },
};

// Header Cell Variants
export const HeaderCategoryLarge: Story = {
  args: {
    role: 'cell',
    type: 'header',
    width: 'lg',
    title: 'Category name',
    showLock: true,
  },
};

export const HeaderCategoryWithSubtext: Story = {
  args: {
    role: 'cell',
    type: 'header-w-subtext',
    width: 'lg',
    title: 'Category name',
    subtext: 'This is a subtitle',
    showLock: true,
  },
};

export const HeaderCategoryDisabled: Story = {
  args: {
    role: 'cell',
    type: 'header',
    width: 'lg',
    title: 'Category name',
    showLock: true,
    disabled: true,
  },
};

export const HeaderColumnSmall: Story = {
  args: {
    role: 'cell',
    type: 'header',
    width: 'sm',
    unitLabel: 'U1',
  },
};

export const HeaderColumnWithYear: Story = {
  args: {
    role: 'cell-0',
    type: 'header',
    width: 'sm',
    yearLabel: '2025',
    unitLabel: '0A',
  },
};

export const HeaderColumnDisabled: Story = {
  args: {
    role: 'cell-0',
    type: 'header',
    width: 'sm',
    yearLabel: '2025',
    unitLabel: '0A',
    disabled: true,
  },
};

// Row Header Variants
export const RowHeaderDefault: Story = {
  args: {
    role: 'row',
    type: 'header',
    title: 'Row title goes here',
  },
};

export const RowHeaderWithSubtext: Story = {
  args: {
    role: 'row',
    type: 'header-subtext',
    title: 'Row title goes here',
    subtext: 'This is subtext',
  },
};

export const RowHeaderBolded: Story = {
  args: {
    role: 'row',
    type: 'bolded',
    title: 'Total amount ($M)',
  },
};

export const RowHeaderBoldedWithSubtext: Story = {
  args: {
    role: 'row',
    type: 'bolded-w-subtext',
    title: 'Total amount ($M)',
    subtext: 'This is subtext',
  },
};

export const RowHeaderDisabled: Story = {
  args: {
    role: 'row',
    type: 'header',
    title: 'Row title goes here',
    disabled: true,
  },
};

// Interactive Examples
export const DropdownHoverState: Story = {
  args: {
    role: 'cell',
    type: 'dropdown',
    width: 'lg',
    state: 'filled',
    value: '3 - Significant',
    hover: true,
    options: [
      { label: '1 - Negligible', value: '1 - Negligible' },
      { label: '2 - Minor', value: '2 - Minor' },
      { label: '3 - Significant', value: '3 - Significant' },
      { label: '4 - Major', value: '4 - Major' },
      { label: '5 - Critical', value: '5 - Critical' },
    ],
  },
};

export const InputHoverState: Story = {
  args: {
    role: 'cell-0',
    type: 'input',
    width: 'sm',
    state: 'filled',
    value: '5.67',
    hover: true,
  },
};

export const HeaderHoverState: Story = {
  args: {
    role: 'cell',
    type: 'header',
    width: 'lg',
    title: 'Category name',
    showLock: true,
    hover: true,
  },
};
