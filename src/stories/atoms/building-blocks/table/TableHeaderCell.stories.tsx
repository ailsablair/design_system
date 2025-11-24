import type { Meta, StoryObj } from '@storybook/react';
import { TableHeaderCell } from './TableHeaderCell';

const meta: Meta<typeof TableHeaderCell> = {
  title: 'Atoms/Building Blocks/Table/TableHeaderCell',
  component: TableHeaderCell,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Table header cell component with selection, sorting, and action capabilities.

**Features:**
- Multiple types: lead (checkbox + label + actions), default (label + checkbox), select-only, empty
- Selection states: none, selected, some-selected (indeterminate)
- Background color variants: default, blue-100, yellow-50, gray-600, dark-seafoam
- Sortable columns with up/down arrows
- Action buttons (Edit/Delete) when items are selected
- Hover states with visual feedback

**Design System:**
- Uses Echo design tokens for colors, spacing, and typography
- Supports responsive layouts
- Accessible with proper ARIA labels
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['empty', 'select-only', 'default', 'lead'],
      description: 'Type of header cell',
    },
    state: {
      control: 'select',
      options: ['default', 'selected', 'hover'],
      description: 'Visual state of the cell',
    },
    background: {
      control: 'select',
      options: ['default', 'blue-100', 'yellow-50', 'gray-600', 'dark-seafoam'],
      description: 'Background color variant',
    },
    selectType: {
      control: 'select',
      options: ['none', 'selected', 'some-selected'],
      description: 'Checkbox selection state',
    },
    label: {
      control: 'text',
      description: 'Label text for the column header',
    },
    arrowDirection: {
      control: 'select',
      options: ['up', 'down', 'none'],
      description: 'Arrow direction for sorting indicator',
    },
    showHelpIcon: {
      control: 'boolean',
      description: 'Show help icon in label',
    },
    showArrowIcon: {
      control: 'boolean',
      description: 'Show arrow icon for sorting',
    },
    selectedCount: {
      control: 'number',
      description: 'Number of selected items (shown in label)',
    },
    showActions: {
      control: 'boolean',
      description: 'Show action buttons when items are selected',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TableHeaderCell>;

// Default lead column with checkbox and label
export const Default: Story = {
  args: {
    type: 'lead',
    state: 'default',
    background: 'default',
    selectType: 'none',
    label: 'Company',
    arrowDirection: 'down',
    showArrowIcon: true,
    showHelpIcon: false,
  },
};

// Selected state with actions
export const Selected: Story = {
  args: {
    type: 'lead',
    state: 'selected',
    background: 'default',
    selectType: 'selected',
    label: 'Company',
    arrowDirection: 'down',
    showArrowIcon: true,
    showHelpIcon: false,
    selectedCount: 20,
    showActions: true,
  },
};

// Some items selected (indeterminate checkbox)
export const SomeSelected: Story = {
  args: {
    type: 'lead',
    state: 'default',
    background: 'default',
    selectType: 'some-selected',
    label: 'Company',
    arrowDirection: 'down',
    showArrowIcon: false,
    showHelpIcon: false,
    selectedCount: 6,
    showActions: true,
  },
};

// Hover state
export const Hover: Story = {
  args: {
    type: 'lead',
    state: 'hover',
    background: 'default',
    selectType: 'none',
    label: 'Company',
    arrowDirection: 'down',
    showArrowIcon: true,
    showHelpIcon: false,
  },
};

// Blue background variant
export const BlueBackground: Story = {
  args: {
    type: 'lead',
    state: 'default',
    background: 'blue-100',
    selectType: 'selected',
    label: 'Company',
    arrowDirection: 'down',
    showArrowIcon: true,
    showHelpIcon: false,
    selectedCount: 20,
    showActions: true,
  },
};

// Yellow background variant
export const YellowBackground: Story = {
  args: {
    type: 'lead',
    state: 'default',
    background: 'yellow-50',
    selectType: 'selected',
    label: 'Company',
    arrowDirection: 'down',
    showArrowIcon: true,
    showHelpIcon: false,
    selectedCount: 20,
    showActions: true,
  },
};

// Gray background variant
export const GrayBackground: Story = {
  args: {
    type: 'lead',
    state: 'default',
    background: 'gray-600',
    selectType: 'selected',
    label: 'Company',
    arrowDirection: 'down',
    showArrowIcon: true,
    showHelpIcon: false,
    selectedCount: 20,
    showActions: true,
  },
};

// Dark seafoam background variant
export const DarkSeafoamBackground: Story = {
  args: {
    type: 'lead',
    state: 'default',
    background: 'dark-seafoam',
    selectType: 'selected',
    label: 'Company',
    arrowDirection: 'down',
    showArrowIcon: true,
    showHelpIcon: false,
    selectedCount: 20,
    showActions: true,
  },
};

// Select-only type (just checkbox)
export const SelectOnly: Story = {
  args: {
    type: 'select-only',
    state: 'default',
    background: 'default',
    selectType: 'none',
  },
};

// Default type (label on left, checkbox on right)
export const DefaultType: Story = {
  args: {
    type: 'default',
    state: 'default',
    background: 'default',
    selectType: 'selected',
    label: 'Company',
    arrowDirection: 'up',
    showArrowIcon: true,
    showHelpIcon: false,
  },
};

// Empty type
export const EmptyType: Story = {
  args: {
    type: 'empty',
    state: 'default',
    background: 'default',
    selectType: 'none',
  },
};

// With help icon
export const WithHelpIcon: Story = {
  args: {
    type: 'lead',
    state: 'default',
    background: 'default',
    selectType: 'none',
    label: 'Company',
    arrowDirection: 'down',
    showArrowIcon: true,
    showHelpIcon: true,
  },
};

// Sort ascending
export const SortAscending: Story = {
  args: {
    type: 'default',
    state: 'selected',
    background: 'default',
    selectType: 'selected',
    label: 'Company',
    arrowDirection: 'up',
    showArrowIcon: true,
    showHelpIcon: false,
  },
};

// Sort descending
export const SortDescending: Story = {
  args: {
    type: 'default',
    state: 'selected',
    background: 'default',
    selectType: 'selected',
    label: 'Company',
    arrowDirection: 'down',
    showArrowIcon: true,
    showHelpIcon: false,
  },
};

// All states comparison
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '100%' }}>
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600' }}>Default Background</h3>
        <TableHeaderCell
          type="lead"
          background="default"
          selectType="none"
          label="Company"
          arrowDirection="down"
        />
        <TableHeaderCell
          type="lead"
          background="default"
          selectType="selected"
          label="Company"
          arrowDirection="down"
          state="selected"
          selectedCount={20}
          showActions={true}
        />
        <TableHeaderCell
          type="lead"
          background="default"
          selectType="some-selected"
          selectedCount={6}
          showActions={true}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600' }}>Blue Background</h3>
        <TableHeaderCell
          type="lead"
          background="blue-100"
          selectType="none"
          label="Company"
          arrowDirection="down"
        />
        <TableHeaderCell
          type="lead"
          background="blue-100"
          selectType="selected"
          state="hover"
          label="Company"
          arrowDirection="down"
          selectedCount={20}
          showActions={true}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600' }}>Dark Backgrounds</h3>
        <TableHeaderCell
          type="lead"
          background="gray-600"
          selectType="selected"
          label="Company"
          arrowDirection="down"
          selectedCount={20}
          showActions={true}
        />
        <TableHeaderCell
          type="lead"
          background="dark-seafoam"
          selectType="selected"
          label="Company"
          arrowDirection="down"
          selectedCount={20}
          showActions={true}
        />
      </div>
    </div>
  ),
};

// Complete table header example
export const CompleteTableHeader: Story = {
  render: () => (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <TableHeaderCell
              type="lead"
              background="default"
              selectType="some-selected"
              label="Contact Name"
              arrowDirection="down"
              selectedCount={6}
              showActions={true}
            />
            <TableHeaderCell
              type="default"
              background="default"
              selectType="none"
              label="Company"
              arrowDirection="up"
              showHelpIcon={true}
            />
            <TableHeaderCell
              type="default"
              background="default"
              selectType="none"
              label="Email"
              arrowDirection="none"
            />
            <TableHeaderCell
              type="default"
              background="default"
              selectType="none"
              label="Phone"
              arrowDirection="none"
            />
            <TableHeaderCell
              type="default"
              background="default"
              selectType="none"
              label="Status"
              arrowDirection="none"
            />
            <TableHeaderCell
              type="empty"
              background="default"
            />
          </tr>
        </thead>
      </table>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of a complete table header with multiple column types and sorting',
      },
    },
  },
};
