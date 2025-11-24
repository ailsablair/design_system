import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TableHeaderCell } from '../../atoms/building-blocks/table/TableHeaderCell';

const meta: Meta<typeof TableHeaderCell> = {
  title: 'Design System/Figma Showcase Files/Table Header Cell',
  component: TableHeaderCell,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Table Header Cell - Figma Showcase

This showcase displays all variants of the TableHeaderCell component as designed in Figma.

## Component Variants

### Types
- **Lead**: Checkbox on left, label in middle, optional actions on right
- **Default**: Label on left, optional checkbox on right  
- **Select-only**: Only checkbox (for alignment with body cells)
- **Empty**: Placeholder column (no content)

### States
- **Default**: Normal state
- **Selected**: Active selection with checkbox checked
- **Hover**: Mouse hover state with background change

### Backgrounds
- **Default**: Gray-100 background
- **Blue-100**: Light blue background
- **Yellow-50**: Light yellow background  
- **Gray-600**: Dark gray background (white text)
- **Dark-seafoam**: Dark green background (white text)

### Selection Types
- **None**: No selection (unchecked)
- **Selected**: All items selected (checked)
- **Some-selected**: Partial selection (indeterminate checkbox)

### Features
- Sortable columns with up/down arrows
- Action buttons (Edit/Delete) when items selected
- Help icons for column information
- Responsive design for all screen sizes
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TableHeaderCell>;

// All variants in a grid layout matching Figma design
export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      padding: '24px',
      background: '#f5f5f5',
      minHeight: '100vh',
    }}>
      <div style={{ 
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <h1 style={{ 
          fontSize: '28px',
          fontWeight: '700',
          marginBottom: '32px',
          fontFamily: 'Archivo, sans-serif',
        }}>
          Table Header Cell - All Variants
        </h1>

        {/* Lead Type - Default Background */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
            Lead Type - Default Background
          </h2>
          <div style={{ display: 'grid', gap: '2px', background: '#fff', padding: '2px' }}>
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
              state="selected"
              label="Company"
              arrowDirection="down"
              selectedCount={20}
              showActions={true}
            />
            <TableHeaderCell
              type="lead"
              background="default"
              selectType="selected"
              state="default"
              selectedCount={20}
              showActions={true}
            />
            <TableHeaderCell
              type="lead"
              background="default"
              selectType="selected"
              state="hover"
              selectedCount={20}
              showActions={true}
            />
            <TableHeaderCell
              type="lead"
              background="default"
              selectType="some-selected"
              state="default"
              selectedCount={6}
              showActions={true}
            />
          </div>
        </section>

        {/* Lead Type - Blue Background */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
            Lead Type - Blue Background
          </h2>
          <div style={{ display: 'grid', gap: '2px', background: '#fff', padding: '2px' }}>
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
              state="selected"
              label="Company"
              arrowDirection="down"
              selectedCount={20}
              showActions={true}
            />
            <TableHeaderCell
              type="lead"
              background="blue-100"
              selectType="selected"
              state="hover"
              selectedCount={20}
              showActions={true}
            />
            <TableHeaderCell
              type="lead"
              background="blue-100"
              selectType="some-selected"
              selectedCount={6}
              showActions={true}
            />
          </div>
        </section>

        {/* Lead Type - Yellow Background */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
            Lead Type - Yellow Background
          </h2>
          <div style={{ display: 'grid', gap: '2px', background: '#fff', padding: '2px' }}>
            <TableHeaderCell
              type="lead"
              background="yellow-50"
              selectType="none"
              label="Company"
              arrowDirection="down"
            />
            <TableHeaderCell
              type="lead"
              background="yellow-50"
              selectType="selected"
              state="selected"
              label="Company"
              arrowDirection="down"
              selectedCount={20}
              showActions={true}
            />
            <TableHeaderCell
              type="lead"
              background="yellow-50"
              selectType="selected"
              state="hover"
              selectedCount={20}
              showActions={true}
            />
          </div>
        </section>

        {/* Lead Type - Gray Background */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
            Lead Type - Gray Background
          </h2>
          <div style={{ display: 'grid', gap: '2px', background: '#fff', padding: '2px' }}>
            <TableHeaderCell
              type="lead"
              background="gray-600"
              selectType="none"
              label="Company"
              arrowDirection="down"
            />
            <TableHeaderCell
              type="lead"
              background="gray-600"
              selectType="selected"
              state="selected"
              label="Company"
              arrowDirection="down"
              selectedCount={20}
              showActions={true}
            />
            <TableHeaderCell
              type="lead"
              background="gray-600"
              selectType="selected"
              state="hover"
              selectedCount={20}
              showActions={true}
            />
          </div>
        </section>

        {/* Lead Type - Dark Seafoam Background */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
            Lead Type - Dark Seafoam Background
          </h2>
          <div style={{ display: 'grid', gap: '2px', background: '#fff', padding: '2px' }}>
            <TableHeaderCell
              type="lead"
              background="dark-seafoam"
              selectType="none"
              label="Company"
              arrowDirection="down"
            />
            <TableHeaderCell
              type="lead"
              background="dark-seafoam"
              selectType="selected"
              state="selected"
              label="Company"
              arrowDirection="down"
              selectedCount={20}
              showActions={true}
            />
            <TableHeaderCell
              type="lead"
              background="dark-seafoam"
              selectType="selected"
              state="hover"
              selectedCount={20}
              showActions={true}
            />
          </div>
        </section>

        {/* Other Types */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
            Other Cell Types
          </h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px' }}>
                Select-Only Type
              </h3>
              <div style={{ display: 'grid', gap: '2px', background: '#fff', padding: '2px' }}>
                <TableHeaderCell
                  type="select-only"
                  background="default"
                  selectType="none"
                />
                <TableHeaderCell
                  type="select-only"
                  background="default"
                  selectType="selected"
                />
                <TableHeaderCell
                  type="select-only"
                  background="blue-100"
                  selectType="selected"
                />
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px' }}>
                Default Type (Right-Aligned)
              </h3>
              <div style={{ display: 'grid', gap: '2px', background: '#fff', padding: '2px' }}>
                <TableHeaderCell
                  type="default"
                  background="default"
                  selectType="none"
                  label="Company"
                  arrowDirection="up"
                />
                <TableHeaderCell
                  type="default"
                  background="default"
                  selectType="selected"
                  state="selected"
                  label="Company"
                  arrowDirection="up"
                />
                <TableHeaderCell
                  type="default"
                  background="blue-100"
                  selectType="selected"
                  label="Company"
                  arrowDirection="up"
                />
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '8px' }}>
                Empty Type
              </h3>
              <div style={{ display: 'grid', gap: '2px', background: '#fff', padding: '2px' }}>
                <TableHeaderCell
                  type="empty"
                  background="default"
                />
                <TableHeaderCell
                  type="empty"
                  background="blue-100"
                />
                <TableHeaderCell
                  type="empty"
                  background="dark-seafoam"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all TableHeaderCell variants matching the Figma design specifications.',
      },
    },
  },
};

// Complete table example
export const CompleteTable: Story = {
  render: () => (
    <div style={{ padding: '24px', background: '#fff' }}>
      <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
        Complete Table Header Example
      </h2>
      <div style={{ overflowX: 'auto', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
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
    </div>
  ),
};

// Interactive example with state management
export const InteractiveExample: Story = {
  render: function InteractiveRender() {
    const [sortColumn, setSortColumn] = React.useState<string>('company');
    const [sortDirection, setSortDirection] = React.useState<'up' | 'down'>('down');
    const [selectedCount, setSelectedCount] = React.useState(0);
    const [selectType, setSelectType] = React.useState<'none' | 'selected' | 'some-selected'>('none');

    const handleSort = (column: string) => {
      if (sortColumn === column) {
        setSortDirection(sortDirection === 'up' ? 'down' : 'up');
      } else {
        setSortColumn(column);
        setSortDirection('down');
      }
    };

    const handleSelectAll = () => {
      if (selectType === 'none') {
        setSelectType('selected');
        setSelectedCount(25);
      } else {
        setSelectType('none');
        setSelectedCount(0);
      }
    };

    return (
      <div style={{ padding: '24px', background: '#fff' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>
          Interactive Table Header
        </h2>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
          Click checkboxes to select, click headers to sort
        </p>
        <div style={{ overflowX: 'auto', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <TableHeaderCell
                  type="lead"
                  background="default"
                  selectType={selectType}
                  label="Contact Name"
                  arrowDirection={sortColumn === 'name' ? sortDirection : 'none'}
                  selectedCount={selectedCount}
                  showActions={selectedCount > 0}
                  onCheckboxChange={handleSelectAll}
                  onLabelClick={() => handleSort('name')}
                />
                <TableHeaderCell
                  type="default"
                  background="default"
                  selectType="none"
                  label="Company"
                  arrowDirection={sortColumn === 'company' ? sortDirection : 'none'}
                  showHelpIcon={true}
                  onLabelClick={() => handleSort('company')}
                />
                <TableHeaderCell
                  type="default"
                  background="default"
                  selectType="none"
                  label="Email"
                  arrowDirection={sortColumn === 'email' ? sortDirection : 'none'}
                  onLabelClick={() => handleSort('email')}
                />
                <TableHeaderCell
                  type="default"
                  background="default"
                  selectType="none"
                  label="Status"
                  arrowDirection={sortColumn === 'status' ? sortDirection : 'none'}
                  onLabelClick={() => handleSort('status')}
                />
                <TableHeaderCell
                  type="empty"
                  background="default"
                />
              </tr>
            </thead>
          </table>
        </div>
        <div style={{ marginTop: '16px', fontSize: '14px', color: '#6b7280' }}>
          <div>Selected: {selectedCount} items</div>
          <div>Sorting by: {sortColumn} ({sortDirection === 'up' ? 'ascending' : 'descending'})</div>
        </div>
      </div>
    );
  },
};
