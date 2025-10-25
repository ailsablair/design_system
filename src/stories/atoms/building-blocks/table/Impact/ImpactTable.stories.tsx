import type { Meta, StoryObj } from '@storybook/react';
import { ImpactTable } from './ImpactTable';

const meta: Meta<typeof ImpactTable> = {
  title: 'Atoms/🧱 Building Blocks/Tables/Impact/ImpactTable',
  component: ImpactTable,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The Impact Table component is a comprehensive table for displaying and editing impact assessment data.

## Features

- **Multi-column layout**: Support for multiple columns with year/unit headers
- **Row headers**: Titles with optional subtexts and lock icons
- **Flexible cell types**: Dropdown, input, and total (read-only) cells
- **Category headers**: Optional category grouping with colspan support
- **Responsive design**: Adapts to different screen sizes
- **Accessible**: Keyboard navigation and screen reader support
- **Customizable**: Support for various states (default, filled, disabled, etc.)

## Usage

The table organizes data in a matrix format with:
- Column headers showing years and units
- Row headers showing categories and metrics
- Data cells for user input or display
- Optional category headers spanning multiple columns

Perfect for impact assessments, financial planning, resource allocation, and other data-intensive applications.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImpactTable>;

const impactScaleOptions = [
  { label: '1 - Negligible', value: '1' },
  { label: '2 - Minor', value: '2' },
  { label: '3 - Significant', value: '3' },
  { label: '4 - Major', value: '4' },
  { label: '5 - Critical', value: '5' },
];

export const BasicTable: Story = {
  args: {
    title: 'Impact Assessment Table',
    columns: [
      { id: 'col1', yearLabel: '2025', unitLabel: '0A', width: 'sm', isSpecial: true },
      { id: 'col2', unitLabel: 'U1', width: 'sm' },
      { id: 'col3', unitLabel: 'U1', width: 'sm' },
      { id: 'col4', yearLabel: '2026', unitLabel: '0A', width: 'sm', isSpecial: true },
    ],
    rows: [
      { id: 'row1', title: 'Row title goes here', type: 'header' },
      { id: 'row2', title: 'Total amount ($M)', type: 'bolded' },
      { id: 'row3', title: 'Row title goes here', subtext: 'This is subtext', type: 'header-subtext' },
    ],
    data: {
      row1: {
        col1: { type: 'dropdown', state: 'filled', value: '3 - Significant', options: impactScaleOptions },
        col2: { type: 'input', state: 'filled', value: '5.67' },
        col3: { type: 'input', state: 'default', placeholder: '0.00' },
        col4: { type: 'dropdown', state: 'default', options: impactScaleOptions },
      },
      row2: {
        col1: { type: 'total', state: 'decimal', value: '2.65', readOnly: true },
        col2: { type: 'total', state: 'decimal', value: '5.67', readOnly: true },
        col3: { type: 'total', state: 'decimal', value: '5.67', readOnly: true },
        col4: { type: 'total', state: 'decimal', value: '5.67', readOnly: true },
      },
      row3: {
        col1: { type: 'input', state: 'empty' },
        col2: { type: 'dropdown', state: 'empty', options: impactScaleOptions },
        col3: { type: 'input', state: 'filled', value: '2.65' },
        col4: { type: 'input', state: 'default', placeholder: 'Enter value' },
      },
    },
  },
};

export const WithCategoryHeaders: Story = {
  args: {
    title: 'Impact Assessment with Categories',
    showCategoryHeader: true,
    categoryHeaders: [
      { id: 'cat1', title: 'Category name', showLock: true, colspan: 2 },
      { id: 'cat2', title: 'Category name', subtext: 'This is a subtitle', showLock: true, colspan: 2 },
    ],
    columns: [
      { id: 'col1', yearLabel: '2025', unitLabel: '0A', width: 'sm', isSpecial: true },
      { id: 'col2', unitLabel: 'U1', width: 'sm' },
      { id: 'col3', yearLabel: '2025', unitLabel: '0A', width: 'sm', isSpecial: true },
      { id: 'col4', unitLabel: 'U1', width: 'sm' },
    ],
    rows: [
      { id: 'row1', title: 'Row title goes here', type: 'header' },
      { id: 'row2', title: 'Total amount ($M)', type: 'bolded' },
      { id: 'row3', title: 'Row title goes here', subtext: 'This is subtext', type: 'header-subtext' },
    ],
    data: {
      row1: {
        col1: { type: 'dropdown', state: 'filled', value: '3 - Significant', options: impactScaleOptions },
        col2: { type: 'input', state: 'filled', value: '5.67' },
        col3: { type: 'dropdown', state: 'filled', value: '3', options: impactScaleOptions },
        col4: { type: 'input', state: 'filled', value: '5.67' },
      },
      row2: {
        col1: { type: 'total', state: 'decimal', value: '2.65', readOnly: true },
        col2: { type: 'total', state: 'decimal', value: '5.67', readOnly: true },
        col3: { type: 'total', state: 'scale', value: '3', readOnly: true },
        col4: { type: 'total', state: 'text', value: 'Test', readOnly: true },
      },
      row3: {
        col1: { type: 'input', state: 'default', placeholder: 'Enter value' },
        col2: { type: 'dropdown', state: 'default', options: impactScaleOptions },
        col3: { type: 'input', state: 'default', placeholder: '0.00' },
        col4: { type: 'input', state: 'default', placeholder: '0.00' },
      },
    },
  },
};

export const LargeTable: Story = {
  args: {
    title: 'Comprehensive Impact Assessment',
    showCategoryHeader: true,
    categoryHeaders: [
      { id: 'cat1', title: 'Environmental Impact', showLock: false, colspan: 3 },
      { id: 'cat2', title: 'Social Impact', subtext: 'Community & Workforce', showLock: true, colspan: 3 },
      { id: 'cat3', title: 'Economic Impact', showLock: false, colspan: 2 },
    ],
    columns: [
      { id: 'col1', yearLabel: '2025', unitLabel: 'Q1', width: 'sm', isSpecial: true },
      { id: 'col2', unitLabel: 'Q2', width: 'sm' },
      { id: 'col3', unitLabel: 'Q3', width: 'sm' },
      { id: 'col4', yearLabel: '2025', unitLabel: 'Q4', width: 'sm', isSpecial: true },
      { id: 'col5', unitLabel: 'Q1', width: 'sm' },
      { id: 'col6', unitLabel: 'Q2', width: 'sm' },
      { id: 'col7', yearLabel: '2026', unitLabel: 'Q1', width: 'sm', isSpecial: true },
      { id: 'col8', unitLabel: 'Q2', width: 'sm' },
    ],
    rows: [
      { id: 'row1', title: 'Carbon Emissions (tCO₂e)', type: 'header' },
      { id: 'row2', title: 'Water Usage (ML)', type: 'header' },
      { id: 'row3', title: 'Waste Generated (tonnes)', type: 'header' },
      { id: 'row4', title: 'Employment Impact', type: 'header' },
      { id: 'row5', title: 'Community Investment ($M)', type: 'header' },
      { id: 'row6', title: 'Training Hours', type: 'header' },
      { id: 'row7', title: 'Total Investment ($M)', type: 'bolded' },
      { id: 'row8', title: 'ROI (%)', type: 'header' },
    ],
    data: {
      row1: {
        col1: { type: 'input', state: 'filled', value: '125.5' },
        col2: { type: 'input', state: 'filled', value: '130.2' },
        col3: { type: 'input', state: 'filled', value: '128.7' },
        col4: { type: 'input', state: 'filled', value: '132.1' },
        col5: { type: 'input', state: 'default', placeholder: '0.00' },
        col6: { type: 'input', state: 'default', placeholder: '0.00' },
        col7: { type: 'input', state: 'default', placeholder: '0.00' },
        col8: { type: 'input', state: 'default', placeholder: '0.00' },
      },
      row2: {
        col1: { type: 'input', state: 'filled', value: '45.2' },
        col2: { type: 'input', state: 'filled', value: '47.8' },
        col3: { type: 'input', state: 'filled', value: '46.5' },
        col4: { type: 'input', state: 'filled', value: '48.1' },
        col5: { type: 'input', state: 'default', placeholder: '0.00' },
        col6: { type: 'input', state: 'default', placeholder: '0.00' },
        col7: { type: 'input', state: 'default', placeholder: '0.00' },
        col8: { type: 'input', state: 'default', placeholder: '0.00' },
      },
      row3: {
        col1: { type: 'input', state: 'filled', value: '12.3' },
        col2: { type: 'input', state: 'filled', value: '11.9' },
        col3: { type: 'input', state: 'filled', value: '13.1' },
        col4: { type: 'input', state: 'filled', value: '12.7' },
        col5: { type: 'input', state: 'default', placeholder: '0.00' },
        col6: { type: 'input', state: 'default', placeholder: '0.00' },
        col7: { type: 'input', state: 'default', placeholder: '0.00' },
        col8: { type: 'input', state: 'default', placeholder: '0.00' },
      },
      row4: {
        col1: { type: 'dropdown', state: 'filled', value: '3 - Significant', options: impactScaleOptions },
        col2: { type: 'dropdown', state: 'filled', value: '3 - Significant', options: impactScaleOptions },
        col3: { type: 'dropdown', state: 'filled', value: '4 - Major', options: impactScaleOptions },
        col4: { type: 'dropdown', state: 'filled', value: '4 - Major', options: impactScaleOptions },
        col5: { type: 'dropdown', state: 'default', options: impactScaleOptions },
        col6: { type: 'dropdown', state: 'default', options: impactScaleOptions },
        col7: { type: 'dropdown', state: 'default', options: impactScaleOptions },
        col8: { type: 'dropdown', state: 'default', options: impactScaleOptions },
      },
      row5: {
        col1: { type: 'input', state: 'filled', value: '2.5' },
        col2: { type: 'input', state: 'filled', value: '2.8' },
        col3: { type: 'input', state: 'filled', value: '3.1' },
        col4: { type: 'input', state: 'filled', value: '2.9' },
        col5: { type: 'input', state: 'default', placeholder: '0.00' },
        col6: { type: 'input', state: 'default', placeholder: '0.00' },
        col7: { type: 'input', state: 'default', placeholder: '0.00' },
        col8: { type: 'input', state: 'default', placeholder: '0.00' },
      },
      row6: {
        col1: { type: 'input', state: 'filled', value: '1250' },
        col2: { type: 'input', state: 'filled', value: '1320' },
        col3: { type: 'input', state: 'filled', value: '1280' },
        col4: { type: 'input', state: 'filled', value: '1350' },
        col5: { type: 'input', state: 'default', placeholder: '0' },
        col6: { type: 'input', state: 'default', placeholder: '0' },
        col7: { type: 'input', state: 'default', placeholder: '0' },
        col8: { type: 'input', state: 'default', placeholder: '0' },
      },
      row7: {
        col1: { type: 'total', state: 'decimal', value: '15.5', readOnly: true },
        col2: { type: 'total', state: 'decimal', value: '16.2', readOnly: true },
        col3: { type: 'total', state: 'decimal', value: '15.8', readOnly: true },
        col4: { type: 'total', state: 'decimal', value: '16.5', readOnly: true },
        col5: { type: 'total', state: 'decimal', value: '0.00', readOnly: true },
        col6: { type: 'total', state: 'decimal', value: '0.00', readOnly: true },
        col7: { type: 'total', state: 'decimal', value: '0.00', readOnly: true },
        col8: { type: 'total', state: 'decimal', value: '0.00', readOnly: true },
      },
      row8: {
        col1: { type: 'total', state: 'decimal', value: '12.5', readOnly: true },
        col2: { type: 'total', state: 'decimal', value: '13.1', readOnly: true },
        col3: { type: 'total', state: 'decimal', value: '12.8', readOnly: true },
        col4: { type: 'total', state: 'decimal', value: '13.3', readOnly: true },
        col5: { type: 'total', state: 'decimal', value: '0.0', readOnly: true },
        col6: { type: 'total', state: 'decimal', value: '0.0', readOnly: true },
        col7: { type: 'total', state: 'decimal', value: '0.0', readOnly: true },
        col8: { type: 'total', state: 'decimal', value: '0.0', readOnly: true },
      },
    },
  },
};

export const MixedStates: Story = {
  args: {
    title: 'Table with Mixed Cell States',
    columns: [
      { id: 'col1', yearLabel: '2025', unitLabel: '0A', width: 'sm', isSpecial: true },
      { id: 'col2', unitLabel: 'U1', width: 'sm' },
      { id: 'col3', unitLabel: 'U2', width: 'sm' },
      { id: 'col4', unitLabel: 'U3', width: 'sm' },
    ],
    rows: [
      { id: 'row1', title: 'Filled Cells', type: 'header' },
      { id: 'row2', title: 'Default/Empty Cells', type: 'header' },
      { id: 'row3', title: 'Disabled Cells', type: 'header', disabled: true },
      { id: 'row4', title: 'Total Row', type: 'bolded' },
    ],
    data: {
      row1: {
        col1: { type: 'dropdown', state: 'filled', value: '3 - Significant', options: impactScaleOptions },
        col2: { type: 'input', state: 'filled', value: '5.67' },
        col3: { type: 'dropdown', state: 'filled', value: '4 - Major', options: impactScaleOptions },
        col4: { type: 'input', state: 'filled', value: '8.92' },
      },
      row2: {
        col1: { type: 'dropdown', state: 'default', options: impactScaleOptions },
        col2: { type: 'input', state: 'empty' },
        col3: { type: 'dropdown', state: 'empty', options: impactScaleOptions },
        col4: { type: 'input', state: 'default', placeholder: 'Enter value' },
      },
      row3: {
        col1: { type: 'dropdown', state: 'disabled', options: impactScaleOptions },
        col2: { type: 'input', state: 'disabled-empty' },
        col3: { type: 'dropdown', state: 'disabled-empty', options: impactScaleOptions },
        col4: { type: 'input', state: 'disabled', placeholder: '0.00' },
      },
      row4: {
        col1: { type: 'total', state: 'scale', value: '3', readOnly: true },
        col2: { type: 'total', state: 'decimal', value: '5.67', readOnly: true },
        col3: { type: 'total', state: 'scale', value: '4', readOnly: true },
        col4: { type: 'total', state: 'decimal', value: '8.92', readOnly: true },
      },
    },
  },
};

export const InteractiveExample: Story = {
  args: {
    title: 'Interactive Impact Table (Try editing values!)',
    columns: [
      { id: 'col1', yearLabel: '2025', unitLabel: 'Q1', width: 'sm', isSpecial: true },
      { id: 'col2', unitLabel: 'Q2', width: 'sm' },
      { id: 'col3', unitLabel: 'Q3', width: 'sm' },
    ],
    rows: [
      { id: 'row1', title: 'Impact Level', type: 'header' },
      { id: 'row2', title: 'Financial Impact ($M)', type: 'header' },
      { id: 'row3', title: 'Total', type: 'bolded' },
    ],
    data: {
      row1: {
        col1: { type: 'dropdown', state: 'default', options: impactScaleOptions },
        col2: { type: 'dropdown', state: 'default', options: impactScaleOptions },
        col3: { type: 'dropdown', state: 'default', options: impactScaleOptions },
      },
      row2: {
        col1: { type: 'input', state: 'default', placeholder: '0.00' },
        col2: { type: 'input', state: 'default', placeholder: '0.00' },
        col3: { type: 'input', state: 'default', placeholder: '0.00' },
      },
      row3: {
        col1: { type: 'total', state: 'default', value: '$0.00 M', readOnly: true },
        col2: { type: 'total', state: 'default', value: '$0.00 M', readOnly: true },
        col3: { type: 'total', state: 'default', value: '$0.00 M', readOnly: true },
      },
    },
    onCellChange: (rowId: string, columnId: string, value: string | number) => {
      console.log(`Cell changed: ${rowId}, ${columnId}, ${value}`);
    },
  },
};
