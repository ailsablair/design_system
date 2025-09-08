import type { Meta, StoryObj } from '@storybook/react';
import { TableRow, TableCell } from './TableRow';
import './building-blocks/table/tableRow.css';

const meta: Meta<typeof TableRow> = {
  title: 'Molecules/~ Building Blocks/TableRow',
  component: TableRow,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Table Row component with selection, actions, and multiple states.

**Features:**
- Row selection with checkbox
- Action buttons (edit, delete, duplicate) 
- Multiple visual states (default, hover, selected, disabled)
- Different size variants
- Status indicators
- Responsive design

**Usage:**
- Use with TableCell components for structured content
- Combine multiple rows in a Table molecule component
- Handle user interactions with provided event handlers
        `
      }
    }
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'selected', 'disabled'],
      description: 'Visual state of the row'
    },
    size: {
      control: 'select',
      options: ['compact', 'default', 'comfortable'],
      description: 'Size variant of the row'
    },
    showSelection: {
      control: 'boolean',
      description: 'Show selection checkbox'
    },
    isSelected: {
      control: 'boolean',
      description: 'Selection state'
    },
    showActions: {
      control: 'boolean',
      description: 'Show action buttons'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    onClick: { action: 'row clicked' },
    onSelectionChange: { action: 'selection changed' },
    onEdit: { action: 'edit clicked' },
    onDelete: { action: 'delete clicked' },
    onDuplicate: { action: 'duplicate clicked' },
  },
  decorators: [
    (Story) => (
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <Story />
        </tbody>
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableRow>;

// Default row with all features
export const Default: Story = {
  args: {
    showSelection: true,
    showActions: true,
    children: (
      <>
        <TableCell>John Doe</TableCell>
        <TableCell>Software Engineer</TableCell>
        <TableCell type="status" status="active">Active</TableCell>
        <TableCell align="right">$75,000</TableCell>
      </>
    ),
  },
};

// Selected state
export const Selected: Story = {
  args: {
    ...Default.args,
    state: 'selected',
    isSelected: true,
  },
};

// Hover state
export const Hover: Story = {
  args: {
    ...Default.args,
    state: 'hover',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    ...Default.args,
    state: 'disabled',
    disabled: true,
  },
};

// Without selection checkbox
export const NoSelection: Story = {
  args: {
    ...Default.args,
    showSelection: false,
  },
};

// Without action buttons
export const NoActions: Story = {
  args: {
    ...Default.args,
    showActions: false,
  },
};

// Compact size
export const Compact: Story = {
  args: {
    ...Default.args,
    size: 'compact',
  },
};

// Comfortable size
export const Comfortable: Story = {
  args: {
    ...Default.args,
    size: 'comfortable',
  },
};

// Different status indicators
export const StatusVariants: Story = {
  render: () => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        <TableRow showSelection showActions>
          <TableCell>User 1</TableCell>
          <TableCell type="status" status="active">Active</TableCell>
          <TableCell>Active status indicator</TableCell>
        </TableRow>
        <TableRow showSelection showActions>
          <TableCell>User 2</TableCell>
          <TableCell type="status" status="inactive">Inactive</TableCell>
          <TableCell>Inactive status indicator</TableCell>
        </TableRow>
        <TableRow showSelection showActions>
          <TableCell>User 3</TableCell>
          <TableCell type="status" status="pending">Pending</TableCell>
          <TableCell>Pending status indicator</TableCell>
        </TableRow>
        <TableRow showSelection showActions>
          <TableCell>User 4</TableCell>
          <TableCell type="status" status="error">Error</TableCell>
          <TableCell>Error status indicator</TableCell>
        </TableRow>
        <TableRow showSelection showActions>
          <TableCell>User 5</TableCell>
          <TableCell type="status" status="success">Success</TableCell>
          <TableCell>Success status indicator</TableCell>
        </TableRow>
      </tbody>
    </table>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows different status indicator variants with color-coded dots and text.'
      }
    }
  }
};

// Different row states
export const AllStates: Story = {
  render: () => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        <TableRow state="default" showSelection showActions>
          <TableCell>Default State</TableCell>
          <TableCell>Normal row appearance</TableCell>
          <TableCell type="status" status="active">Active</TableCell>
        </TableRow>
        <TableRow state="hover" showSelection showActions>
          <TableCell>Hover State</TableCell>
          <TableCell>Highlighted background</TableCell>
          <TableCell type="status" status="pending">Pending</TableCell>
        </TableRow>
        <TableRow state="selected" isSelected showSelection showActions>
          <TableCell>Selected State</TableCell>
          <TableCell>Blue background, checkbox checked</TableCell>
          <TableCell type="status" status="success">Success</TableCell>
        </TableRow>
        <TableRow state="disabled" disabled showSelection showActions>
          <TableCell>Disabled State</TableCell>
          <TableCell>Reduced opacity, no interactions</TableCell>
          <TableCell type="status" status="inactive">Inactive</TableCell>
        </TableRow>
      </tbody>
    </table>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available row states showing visual differences.'
      }
    }
  }
};

// Size comparison
export const SizeComparison: Story = {
  render: () => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        <TableRow size="compact" showSelection showActions>
          <TableCell>Compact Size</TableCell>
          <TableCell>40px height</TableCell>
          <TableCell type="status" status="active">Active</TableCell>
        </TableRow>
        <TableRow size="default" showSelection showActions>
          <TableCell>Default Size</TableCell>
          <TableCell>48px height</TableCell>
          <TableCell type="status" status="pending">Pending</TableCell>
        </TableRow>
        <TableRow size="comfortable" showSelection showActions>
          <TableCell>Comfortable Size</TableCell>
          <TableCell>56px height</TableCell>
          <TableCell type="status" status="success">Success</TableCell>
        </TableRow>
      </tbody>
    </table>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of different size variants showing height differences.'
      }
    }
  }
};

// Minimal row (no selection, no actions)
export const Minimal: Story = {
  args: {
    showSelection: false,
    showActions: false,
    children: (
      <>
        <TableCell>Simple Content</TableCell>
        <TableCell>Basic table row</TableCell>
        <TableCell>No interactions</TableCell>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal table row without selection checkbox or action buttons.'
      }
    }
  }
};
