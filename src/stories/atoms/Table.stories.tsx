import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { useState } from 'react';

const meta: Meta<typeof Table> = {
  title: 'Atoms/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Table component provides a comprehensive data table solution combining headers, rows, and pagination.
Based on the Figma design system with multiple visual variants and full functionality.

## Features
- **5 Visual Variants**: Default, Blue, Green, Gray, and Dark themes
- **Sortable Columns**: Click headers to sort data
- **Row Selection**: Individual and bulk selection with checkboxes
- **Action Buttons**: Edit, Delete, and Duplicate actions
- **Built-in Pagination**: Automatic page management
- **Responsive Design**: Works on all device sizes
- **Full Accessibility**: ARIA compliant with keyboard navigation

## Usage
Perfect for displaying structured data with user interactions like sorting, filtering, and actions.
Combines all table components into a single, cohesive interface.
        `
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'blue', 'green', 'gray', 'dark'],
      description: 'Visual variant based on Figma design'
    },
    rowSize: {
      control: 'select',
      options: ['compact', 'default', 'comfortable'],
      description: 'Row size variant'
    },
    headerSize: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Header size variant'
    },
    showSelection: {
      control: 'boolean',
      description: 'Show selection checkboxes'
    },
    showActions: {
      control: 'boolean',
      description: 'Show action buttons'
    },
    showPagination: {
      control: 'boolean',
      description: 'Show pagination controls'
    },
    itemsPerPage: {
      control: { type: 'number', min: 1, max: 100 },
      description: 'Items per page'
    },
    paginationSize: {
      control: 'select',
      options: ['small', 'default'],
      description: 'Pagination size variant'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Table>;

// Sample data
const sampleColumns = [
  { key: 'company', label: 'Company', sortable: true, showHelp: true },
  { key: 'status', label: 'Status', type: 'status' as const, sortable: true },
  { key: 'users', label: 'Users', sortable: true, align: 'right' as const },
  { key: 'created', label: 'Created', sortable: true }
];

const sampleData = [
  { id: '1', company: 'Acme Corp', status: { status: 'active', label: 'Active' }, users: 150, created: '2024-01-15' },
  { id: '2', company: 'Tech Solutions', status: { status: 'pending', label: 'Pending' }, users: 89, created: '2024-01-14' },
  { id: '3', company: 'Global Inc', status: { status: 'inactive', label: 'Inactive' }, users: 245, created: '2024-01-13' },
  { id: '4', company: 'StartupXYZ', status: { status: 'active', label: 'Active' }, users: 45, created: '2024-01-12' },
  { id: '5', company: 'Enterprise Ltd', status: { status: 'error', label: 'Error' }, users: 320, created: '2024-01-11' },
  { id: '6', company: 'Innovation Hub', status: { status: 'success', label: 'Success' }, users: 78, created: '2024-01-10' },
  { id: '7', company: 'Digital Agency', status: { status: 'pending', label: 'Pending' }, users: 125, created: '2024-01-09' },
  { id: '8', company: 'Cloud Systems', status: { status: 'active', label: 'Active' }, users: 198, created: '2024-01-08' },
  { id: '9', company: 'Data Corp', status: { status: 'inactive', label: 'Inactive' }, users: 67, created: '2024-01-07' },
  { id: '10', company: 'Future Tech', status: { status: 'active', label: 'Active' }, users: 134, created: '2024-01-06' },
  { id: '11', company: 'Smart Solutions', status: { status: 'pending', label: 'Pending' }, users: 92, created: '2024-01-05' },
  { id: '12', company: 'Web Dynamics', status: { status: 'success', label: 'Success' }, users: 156, created: '2024-01-04' }
];

// Basic Examples
export const Default: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData.slice(0, 5),
    showPagination: false
  }
};

export const WithPagination: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    itemsPerPage: 5,
    currentPage: 1
  }
};

// Figma Design Variants
export const FigmaVariants: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<string[]>(['2']);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
            Table Variants from Figma Design
          </h3>
          <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
            All visual variants matching the Figma design system
          </p>
        </div>
        
        {/* Default Variant */}
        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Default Variant</h4>
          <Table
            columns={sampleColumns}
            data={sampleData.slice(0, 4)}
            variant="default"
            selectedRows={selectedRows}
            onSelectionChange={setSelectedRows}
            showPagination={false}
            onEdit={(row) => console.log('Edit:', row)}
            onDelete={(row) => console.log('Delete:', row)}
            onDuplicate={(row) => console.log('Duplicate:', row)}
          />
        </div>
        
        {/* Blue Variant */}
        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Blue Variant</h4>
          <Table
            columns={sampleColumns}
            data={sampleData.slice(0, 4)}
            variant="blue"
            selectedRows={selectedRows}
            onSelectionChange={setSelectedRows}
            showPagination={false}
            onEdit={(row) => console.log('Edit:', row)}
            onDelete={(row) => console.log('Delete:', row)}
            onDuplicate={(row) => console.log('Duplicate:', row)}
          />
        </div>
        
        {/* Green Variant */}
        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Green Variant</h4>
          <Table
            columns={sampleColumns}
            data={sampleData.slice(0, 4)}
            variant="green"
            selectedRows={selectedRows}
            onSelectionChange={setSelectedRows}
            showPagination={false}
            onEdit={(row) => console.log('Edit:', row)}
            onDelete={(row) => console.log('Delete:', row)}
            onDuplicate={(row) => console.log('Duplicate:', row)}
          />
        </div>
        
        {/* Gray Variant */}
        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Gray Variant</h4>
          <Table
            columns={sampleColumns}
            data={sampleData.slice(0, 4)}
            variant="gray"
            selectedRows={selectedRows}
            onSelectionChange={setSelectedRows}
            showPagination={false}
            onEdit={(row) => console.log('Edit:', row)}
            onDelete={(row) => console.log('Delete:', row)}
            onDuplicate={(row) => console.log('Duplicate:', row)}
          />
        </div>
        
        {/* Dark Variant */}
        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Dark Variant</h4>
          <Table
            columns={sampleColumns}
            data={sampleData.slice(0, 4)}
            variant="dark"
            selectedRows={selectedRows}
            onSelectionChange={setSelectedRows}
            showPagination={false}
            onEdit={(row) => console.log('Edit:', row)}
            onDelete={(row) => console.log('Delete:', row)}
            onDuplicate={(row) => console.log('Duplicate:', row)}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All visual variants from the Figma design showing different color themes and selected states.'
      }
    }
  }
};

// Size Variants
export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
          Size Variants
        </h3>
        <p style={{ margin: '0 0 32px 0', fontSize: '14px', color: '#666' }}>
          Different row and header size combinations
        </p>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Compact Rows</h4>
        <Table
          columns={sampleColumns}
          data={sampleData.slice(0, 3)}
          rowSize="compact"
          headerSize="small"
          showPagination={false}
        />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Default Rows</h4>
        <Table
          columns={sampleColumns}
          data={sampleData.slice(0, 3)}
          rowSize="default"
          headerSize="default"
          showPagination={false}
        />
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Comfortable Rows</h4>
        <Table
          columns={sampleColumns}
          data={sampleData.slice(0, 3)}
          rowSize="comfortable"
          headerSize="large"
          showPagination={false}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of different size variants for rows and headers.'
      }
    }
  }
};

// Interactive Features
export const InteractiveFeatures: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [sortConfig, setSortConfig] = useState<{ column: string; direction: 'up' | 'down' } | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
            Interactive Table
          </h3>
          <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
            Full functionality with sorting, selection, and pagination
          </p>
          <div style={{ fontSize: '12px', color: '#888', marginBottom: '16px' }}>
            Selected: {selectedRows.length} rows | 
            Sort: {sortConfig ? `${sortConfig.column} (${sortConfig.direction})` : 'None'} | 
            Page: {currentPage}
          </div>
        </div>
        
        <Table
          columns={sampleColumns}
          data={sampleData}
          selectedRows={selectedRows}
          sortConfig={sortConfig}
          currentPage={currentPage}
          itemsPerPage={5}
          onSelectionChange={setSelectedRows}
          onSortChange={(column, direction) => setSortConfig({ column, direction })}
          onPageChange={setCurrentPage}
          onRowClick={(row) => console.log('Row clicked:', row)}
          onEdit={(row) => console.log('Edit:', row)}
          onDelete={(row) => console.log('Delete:', row)}
          onDuplicate={(row) => console.log('Duplicate:', row)}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive table with all features enabled. Check console for action events.'
      }
    }
  }
};

// Minimal Configuration
export const Minimal: Story = {
  args: {
    columns: [
      { key: 'company', label: 'Company' },
      { key: 'users', label: 'Users', align: 'right' }
    ],
    data: sampleData.slice(0, 3),
    showSelection: false,
    showActions: false,
    showPagination: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal table configuration without selection, actions, or pagination.'
      }
    }
  }
};

// Status Indicators
export const StatusIndicators: Story = {
  args: {
    columns: [
      { key: 'company', label: 'Company', sortable: true },
      { key: 'status', label: 'Status', type: 'status', sortable: true },
      { key: 'users', label: 'Users', sortable: true, align: 'right' }
    ],
    data: [
      { id: '1', company: 'Active Company', status: { status: 'active', label: 'Active' }, users: 150 },
      { id: '2', company: 'Pending Company', status: { status: 'pending', label: 'Pending' }, users: 89 },
      { id: '3', company: 'Inactive Company', status: { status: 'inactive', label: 'Inactive' }, users: 245 },
      { id: '4', company: 'Error Company', status: { status: 'error', label: 'Error' }, users: 45 },
      { id: '5', company: 'Success Company', status: { status: 'success', label: 'Success' }, users: 320 }
    ],
    showPagination: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Table showcasing different status indicator variants with color-coded dots.'
      }
    }
  }
};

// Large Dataset with Pagination
export const LargeDataset: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    
    // Generate larger dataset
    const largeData = Array.from({ length: 50 }, (_, i) => ({
      id: `${i + 1}`,
      company: `Company ${i + 1}`,
      status: { 
        status: ['active', 'pending', 'inactive', 'error', 'success'][i % 5],
        label: ['Active', 'Pending', 'Inactive', 'Error', 'Success'][i % 5]
      },
      users: Math.floor(Math.random() * 500) + 10,
      created: `2024-01-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`
    }));

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 24px 0', fontSize: '18px', fontWeight: '600' }}>
            Large Dataset with Pagination
          </h3>
          <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: '#666' }}>
            50 items with 8 items per page
          </p>
        </div>
        
        <Table
          columns={sampleColumns}
          data={largeData}
          currentPage={currentPage}
          itemsPerPage={8}
          onPageChange={setCurrentPage}
          onEdit={(row) => console.log('Edit:', row)}
          onDelete={(row) => console.log('Delete:', row)}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with a large dataset demonstrating pagination functionality.'
      }
    }
  }
};

// Blue Variant (Matching Figma)
export const BlueVariant: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData.slice(0, 5),
    variant: 'blue',
    selectedRows: ['2', '4'],
    showPagination: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Blue variant matching the Figma design with selected rows.'
      }
    }
  }
};

// Dark Theme
export const DarkTheme: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData.slice(0, 5),
    variant: 'dark',
    selectedRows: ['1', '3'],
    showPagination: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Dark theme variant for use in dark interfaces.'
      }
    }
  }
};

// Small Pagination
export const SmallPagination: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    itemsPerPage: 4,
    paginationSize: 'small',
    rowSize: 'compact',
    headerSize: 'small'
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact table with small pagination for space-constrained layouts.'
      }
    }
  }
};
