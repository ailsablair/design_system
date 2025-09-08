import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Table } from './Table';
import type { TableColumn, TableData } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Atoms/~ Building Blocks/Table/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Table molecule component with comprehensive functionality.

**Features:**
- Column configuration with custom renderers
- Row selection with checkboxes (individual and select all)
- Action buttons (edit, delete, duplicate)
- Multiple visual states and sizes  
- Loading and empty states
- Responsive design
- Status indicators
- Interactive row selection

**Building Blocks:**
- Uses TableRow atoms for each data row
- TableCell components for structured content
- Built-in loading and empty state handling
        `
      }
    }
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['compact', 'default', 'comfortable'],
      description: 'Size variant of the table'
    },
    showSelection: {
      control: 'boolean',
      description: 'Show selection checkboxes'
    },
    showActions: {
      control: 'boolean',
      description: 'Show action buttons'
    },
    loading: {
      control: 'boolean',
      description: 'Loading state'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    title: {
      control: 'text',
      description: 'Table title'
    },
    emptyMessage: {
      control: 'text',
      description: 'Empty state message'
    },
    onRowClick: { action: 'row clicked' },
    onSelectionChange: { action: 'selection changed' },
    onEdit: { action: 'edit clicked' },
    onDelete: { action: 'delete clicked' },
    onDuplicate: { action: 'duplicate clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// Sample data
const sampleColumns: TableColumn[] = [
  {
    key: 'name',
    title: 'Name',
    width: '200px',
  },
  {
    key: 'role',
    title: 'Role',
    width: '180px',
  },
  {
    key: 'status',
    title: 'Status',
    type: 'status',
    width: '120px',
    align: 'center',
  },
  {
    key: 'email',
    title: 'Email',
    width: '250px',
  },
  {
    key: 'salary',
    title: 'Salary',
    align: 'right',
    width: '120px',
    render: (value) => `$${value?.toLocaleString()}`,
  },
];

const sampleData: TableData[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Software Engineer',
    status: 'active',
    email: 'john.doe@company.com',
    salary: 75000,
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Product Manager',
    status: 'active',
    email: 'jane.smith@company.com',
    salary: 85000,
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'Designer',
    status: 'pending',
    email: 'mike.johnson@company.com',
    salary: 65000,
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    role: 'Data Scientist',
    status: 'inactive',
    email: 'sarah.wilson@company.com',
    salary: 90000,
  },
  {
    id: '5',
    name: 'Alex Brown',
    role: 'DevOps Engineer',
    status: 'error',
    email: 'alex.brown@company.com',
    salary: 80000,
  },
];

// Default table with all features
export const Default: Story = {
  args: {
    title: 'Employee Directory',
    columns: sampleColumns,
    data: sampleData,
    showSelection: true,
    showActions: true,
  },
};

// With selection controlled externally
export const WithSelection: Story = {
  render: (args) => {
    const [selectedRows, setSelectedRows] = useState<string[]>(['1', '3']);
    
    return (
      <Table
        {...args}
        selectedRows={selectedRows}
        onSelectionChange={setSelectedRows}
      />
    );
  },
  args: {
    title: 'Employee Directory - With Selection',
    columns: sampleColumns,
    data: sampleData,
    showSelection: true,
    showActions: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with externally controlled selection state. Rows 1 and 3 are pre-selected.'
      }
    }
  }
};

// Loading state
export const Loading: Story = {
  args: {
    title: 'Loading Data',
    columns: sampleColumns,
    data: [],
    loading: true,
    showSelection: true,
    showActions: true,
  },
};

// Empty state
export const Empty: Story = {
  args: {
    title: 'No Data Available',
    columns: sampleColumns,
    data: [],
    emptyMessage: 'No employees found. Add some employees to get started.',
    showSelection: true,
    showActions: true,
  },
};

// Compact size
export const Compact: Story = {
  args: {
    title: 'Compact Table',
    columns: sampleColumns,
    data: sampleData,
    size: 'compact',
    showSelection: true,
    showActions: true,
  },
};

// Comfortable size
export const Comfortable: Story = {
  args: {
    title: 'Comfortable Table',
    columns: sampleColumns,
    data: sampleData,
    size: 'comfortable',
    showSelection: true,
    showActions: true,
  },
};

// Without selection
export const NoSelection: Story = {
  args: {
    title: 'Read-Only Table',
    columns: sampleColumns,
    data: sampleData,
    showSelection: false,
    showActions: true,
  },
};

// Without actions
export const NoActions: Story = {
  args: {
    title: 'View-Only Table',
    columns: sampleColumns,
    data: sampleData,
    showSelection: true,
    showActions: false,
  },
};

// Minimal table (no selection, no actions)
export const Minimal: Story = {
  args: {
    title: 'Basic Data Table',
    columns: sampleColumns,
    data: sampleData,
    showSelection: false,
    showActions: false,
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    title: 'Disabled Table',
    columns: sampleColumns,
    data: sampleData,
    disabled: true,
    showSelection: true,
    showActions: true,
  },
};

// Custom rendering example
export const CustomRendering: Story = {
  args: {
    title: 'Table with Custom Rendering',
    columns: [
      {
        key: 'name',
        title: 'Employee',
        render: (value, record) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#E0F6FE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: '600',
                color: '#0284C7',
              }}
            >
              {value?.charAt(0)}
            </div>
            <div>
              <div style={{ fontWeight: '500' }}>{value}</div>
              <div style={{ fontSize: '12px', color: '#6B7280' }}>
                {record.email}
              </div>
            </div>
          </div>
        ),
      },
      {
        key: 'role',
        title: 'Position',
        render: (value, record) => (
          <div>
            <div style={{ fontWeight: '500' }}>{value}</div>
            <div style={{ fontSize: '12px', color: '#6B7280' }}>
              {record.status === 'active' ? 'Full-time' : 'Part-time'}
            </div>
          </div>
        ),
      },
      {
        key: 'status',
        title: 'Status',
        type: 'status',
        align: 'center',
      },
      {
        key: 'salary',
        title: 'Compensation',
        align: 'right',
        render: (value) => (
          <div>
            <div style={{ fontWeight: '600' }}>${value?.toLocaleString()}</div>
            <div style={{ fontSize: '12px', color: '#6B7280' }}>Annual</div>
          </div>
        ),
      },
    ],
    data: sampleData,
    showSelection: true,
    showActions: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with custom column renderers showing avatars, multi-line content, and formatted data.'
      }
    }
  }
};

// Status variants showcase
export const StatusVariants: Story = {
  args: {
    title: 'Status Indicators',
    columns: [
      { key: 'item', title: 'Item', width: '200px' },
      { key: 'status', title: 'Status', type: 'status', width: '150px', align: 'center' },
      { key: 'description', title: 'Description' },
    ],
    data: [
      { id: '1', item: 'Project Alpha', status: 'active', description: 'Currently active and running' },
      { id: '2', item: 'Project Beta', status: 'inactive', description: 'Temporarily paused' },
      { id: '3', item: 'Project Gamma', status: 'pending', description: 'Waiting for approval' },
      { id: '4', item: 'Project Delta', status: 'error', description: 'Encountered critical issues' },
      { id: '5', item: 'Project Epsilon', status: 'success', description: 'Successfully completed' },
    ],
    showSelection: false,
    showActions: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all status indicator variants with color-coded dots and labels.'
      }
    }
  }
};

// Interactive example with state management
export const Interactive: Story = {
  render: () => {
    const [data, setData] = useState(sampleData);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    const handleEdit = (record: TableData) => {
      alert(`Editing: ${record.name}`);
    };

    const handleDelete = (record: TableData) => {
      if (confirm(`Delete ${record.name}?`)) {
        setData(prev => prev.filter(item => item.id !== record.id));
        setSelectedRows(prev => prev.filter(id => id !== record.id));
      }
    };

    const handleDuplicate = (record: TableData) => {
      const newItem = {
        ...record,
        id: Date.now().toString(),
        name: `${record.name} (Copy)`,
      };
      setData(prev => [...prev, newItem]);
    };

    return (
      <Table
        title={`Interactive Table (${selectedRows.length} selected)`}
        columns={sampleColumns}
        data={data}
        selectedRows={selectedRows}
        onSelectionChange={setSelectedRows}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onDuplicate={handleDuplicate}
        showSelection
        showActions
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Fully interactive table with working selection, edit, delete, and duplicate actions.'
      }
    }
  }
};
