import type { Meta, StoryObj } from '@storybook/react';
import { TableHeaderLabel } from './TableHeaderLabel';

const meta: Meta<typeof TableHeaderLabel> = {
  title: 'Atoms/🧱 Building Blocks/Table/Header Label',
  component: TableHeaderLabel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Table Header Label Component

A flexible table header label component with sorting indicators and help functionality.

## Features

- **Three Sizes**: Small (14px), Default (16px), Large (18px)
- **Sorting Indicators**: Up/Down arrows for column sorting
- **Help Icon**: Optional contextual help
- **Hover States**: Bold text and blue icons on hover
- **Fully Accessible**: Keyboard navigation and screen reader support
- **Responsive**: Adapts to mobile and tablet screens

## Usage in Tables

Perfect for:
- Sortable table columns
- Column headers with tooltips
- Interactive data grids
- Filterable tables

## Customization

The component uses design tokens for all styling:
- Text: Archivo font family with light/bold weights
- Colors: Base black, neutral gray, and primary blue
- Spacing: Consistent 4px gap between elements
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text to display',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Company' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size of the header label',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    arrowDirection: {
      control: 'select',
      options: ['none', 'up', 'down'],
      description: 'Arrow direction for sorting indicator',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
    showHelpIcon: {
      control: 'boolean',
      description: 'Show help icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    showArrowIcon: {
      control: 'boolean',
      description: 'Show arrow icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    hover: {
      control: 'boolean',
      description: 'Hover state - makes text bold',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableHeaderLabel>;

export const Default: Story = {
  args: {
    label: 'Company',
    size: 'default',
    arrowDirection: 'up',
    showHelpIcon: true,
    showArrowIcon: true,
  },
};

export const DefaultHover: Story = {
  args: {
    label: 'Company',
    size: 'default',
    arrowDirection: 'up',
    showHelpIcon: true,
    showArrowIcon: true,
    hover: true,
  },
};

export const ArrowDown: Story = {
  args: {
    label: 'Company',
    size: 'default',
    arrowDirection: 'down',
    showHelpIcon: true,
    showArrowIcon: true,
  },
};

export const ArrowDownHover: Story = {
  args: {
    label: 'Company',
    size: 'default',
    arrowDirection: 'down',
    showHelpIcon: true,
    showArrowIcon: true,
    hover: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Company',
    size: 'small',
    arrowDirection: 'up',
    showHelpIcon: true,
    showArrowIcon: true,
  },
};

export const SmallHover: Story = {
  args: {
    label: 'Company',
    size: 'small',
    arrowDirection: 'up',
    showHelpIcon: true,
    showArrowIcon: true,
    hover: true,
  },
};

export const Large: Story = {
  args: {
    label: 'Company',
    size: 'large',
    arrowDirection: 'up',
    showHelpIcon: true,
    showArrowIcon: true,
  },
};

export const LargeHover: Story = {
  args: {
    label: 'Company',
    size: 'large',
    arrowDirection: 'down',
    showHelpIcon: true,
    showArrowIcon: true,
    hover: true,
  },
};

export const NoIcons: Story = {
  args: {
    label: 'Name',
    size: 'default',
    arrowDirection: 'none',
    showHelpIcon: false,
    showArrowIcon: false,
  },
};

export const OnlyHelp: Story = {
  args: {
    label: 'Status',
    size: 'default',
    arrowDirection: 'none',
    showHelpIcon: true,
    showArrowIcon: false,
  },
};

export const OnlySort: Story = {
  args: {
    label: 'Date',
    size: 'default',
    arrowDirection: 'up',
    showHelpIcon: false,
    showArrowIcon: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '2rem',
      padding: '2rem'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h3 style={{ 
          margin: 0, 
          fontFamily: 'var(--type-typeface-archivo, sans-serif)',
          fontSize: '1.25rem',
          fontWeight: 700,
          color: 'var(--neutral-gray-gray-900, #111827)'
        }}>
          Small Size
        </h3>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <TableHeaderLabel label="Company" size="small" arrowDirection="up" />
          <TableHeaderLabel label="Company" size="small" arrowDirection="up" hover />
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <TableHeaderLabel label="Company" size="small" arrowDirection="down" />
          <TableHeaderLabel label="Company" size="small" arrowDirection="down" hover />
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h3 style={{ 
          margin: 0, 
          fontFamily: 'var(--type-typeface-archivo, sans-serif)',
          fontSize: '1.25rem',
          fontWeight: 700,
          color: 'var(--neutral-gray-gray-900, #111827)'
        }}>
          Default Size
        </h3>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <TableHeaderLabel label="Company" size="default" arrowDirection="up" />
          <TableHeaderLabel label="Company" size="default" arrowDirection="up" hover />
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <TableHeaderLabel label="Company" size="default" arrowDirection="down" />
          <TableHeaderLabel label="Company" size="default" arrowDirection="down" hover />
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h3 style={{ 
          margin: 0, 
          fontFamily: 'var(--type-typeface-archivo, sans-serif)',
          fontSize: '1.25rem',
          fontWeight: 700,
          color: 'var(--neutral-gray-gray-900, #111827)'
        }}>
          Large Size
        </h3>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <TableHeaderLabel label="Company" size="large" arrowDirection="up" />
          <TableHeaderLabel label="Company" size="large" arrowDirection="up" hover />
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <TableHeaderLabel label="Company" size="large" arrowDirection="down" />
          <TableHeaderLabel label="Company" size="large" arrowDirection="down" hover />
        </div>
      </div>
    </div>
  ),
};

export const InteractiveTable: Story = {
  render: () => {
    const [sortConfig, setSortConfig] = React.useState<{
      column: string;
      direction: 'up' | 'down';
    }>({ column: 'company', direction: 'up' });

    const handleSort = (column: string) => {
      setSortConfig(prev => ({
        column,
        direction: prev.column === column && prev.direction === 'up' ? 'down' : 'up'
      }));
    };

    return (
      <div style={{ padding: '2rem', maxWidth: '1000px' }}>
        <h3 style={{ 
          margin: '0 0 1rem 0', 
          fontFamily: 'var(--type-typeface-archivo, sans-serif)',
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--neutral-gray-gray-900, #111827)'
        }}>
          Interactive Sortable Table
        </h3>
        
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          background: 'var(--base-white, white)',
          border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <thead>
            <tr style={{ 
              background: 'var(--neutral-gray-gray-50, #F9FAFB)',
              borderBottom: '1px solid var(--neutral-gray-gray-200, #E5E7EB)'
            }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>
                <TableHeaderLabel 
                  label="Company" 
                  size="default"
                  arrowDirection={sortConfig.column === 'company' ? sortConfig.direction : 'none'}
                  onClick={() => handleSort('company')}
                />
              </th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>
                <TableHeaderLabel 
                  label="Industry" 
                  size="default"
                  arrowDirection={sortConfig.column === 'industry' ? sortConfig.direction : 'none'}
                  onClick={() => handleSort('industry')}
                />
              </th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>
                <TableHeaderLabel 
                  label="Revenue" 
                  size="default"
                  arrowDirection={sortConfig.column === 'revenue' ? sortConfig.direction : 'none'}
                  onClick={() => handleSort('revenue')}
                />
              </th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>
                <TableHeaderLabel 
                  label="Employees" 
                  size="default"
                  arrowDirection={sortConfig.column === 'employees' ? sortConfig.direction : 'none'}
                  onClick={() => handleSort('employees')}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { company: 'Acme Corp', industry: 'Technology', revenue: '$2.5M', employees: 150 },
              { company: 'Beta Industries', industry: 'Manufacturing', revenue: '$5.1M', employees: 280 },
              { company: 'Gamma Solutions', industry: 'Consulting', revenue: '$1.8M', employees: 95 },
              { company: 'Delta Systems', industry: 'Technology', revenue: '$3.2M', employees: 180 },
            ].map((row, idx) => (
              <tr 
                key={idx}
                style={{ 
                  borderBottom: idx < 3 ? '1px solid var(--neutral-gray-gray-200, #E5E7EB)' : 'none'
                }}
              >
                <td style={{ 
                  padding: '1rem',
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-900, #111827)'
                }}>
                  {row.company}
                </td>
                <td style={{ 
                  padding: '1rem',
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.875rem',
                  color: 'var(--neutral-gray-gray-700, #374151)'
                }}>
                  {row.industry}
                </td>
                <td style={{ 
                  padding: '1rem',
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.875rem',
                  color: 'var(--neutral-gray-gray-700, #374151)'
                }}>
                  {row.revenue}
                </td>
                <td style={{ 
                  padding: '1rem',
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.875rem',
                  color: 'var(--neutral-gray-gray-700, #374151)'
                }}>
                  {row.employees}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <p style={{
          marginTop: '1rem',
          fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
          fontSize: '0.875rem',
          color: 'var(--neutral-gray-gray-600, #4B5563)'
        }}>
          Click on any column header to sort. Currently sorting by: <strong>{sortConfig.column}</strong> ({sortConfig.direction === 'up' ? 'ascending' : 'descending'})
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing how table header labels work with sorting functionality',
      },
    },
  },
};
