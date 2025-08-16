import React, { useState } from 'react';
import './table.css';
import '../atoms/tableRow.css';
import { TableRow, TableCell, TableRowProps } from '../atoms/TableRow';

export interface TableColumn {
  /** Column key */
  key: string;
  /** Column header text */
  title: string;
  /** Column width */
  width?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Column type */
  type?: 'text' | 'status' | 'action';
  /** Render function for custom content */
  render?: (value: any, record: any, index: number) => React.ReactNode;
}

export interface TableData {
  /** Unique identifier */
  id: string;
  /** Data object with column keys */
  [key: string]: any;
}

export interface TableProps {
  /** Table columns configuration */
  columns: TableColumn[];
  /** Table data */
  data: TableData[];
  /** Table title */
  title?: string;
  /** Show selection column */
  showSelection?: boolean;
  /** Show action buttons */
  showActions?: boolean;
  /** Table size variant */
  size?: 'compact' | 'default' | 'comfortable';
  /** Loading state */
  loading?: boolean;
  /** Empty state message */
  emptyMessage?: string;
  /** Selected row IDs */
  selectedRows?: string[];
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Row click handler */
  onRowClick?: (record: TableData, index: number) => void;
  /** Selection change handler */
  onSelectionChange?: (selectedIds: string[]) => void;
  /** Edit action handler */
  onEdit?: (record: TableData, index: number) => void;
  /** Delete action handler */
  onDelete?: (record: TableData, index: number) => void;
  /** Duplicate action handler */
  onDuplicate?: (record: TableData, index: number) => void;
}

/**
 * Table molecule component with comprehensive functionality
 * 
 * Features:
 * - Column configuration with custom renderers
 * - Row selection with checkboxes
 * - Action buttons (edit, delete, duplicate)
 * - Multiple visual states and sizes
 * - Loading and empty states
 * - Responsive design
 * - Status indicators
 */
export const Table: React.FC<TableProps> = ({
  columns,
  data,
  title,
  showSelection = false,
  showActions = true,
  size = 'default',
  loading = false,
  emptyMessage = 'No data available',
  selectedRows = [],
  disabled = false,
  className = '',
  onRowClick,
  onSelectionChange,
  onEdit,
  onDelete,
  onDuplicate,
}) => {
  const [internalSelectedRows, setInternalSelectedRows] = useState<string[]>(selectedRows);
  
  const currentSelectedRows = onSelectionChange ? selectedRows : internalSelectedRows;

  const tableClasses = [
    'table-container',
    `table-size-${size}`,
    disabled && 'table-disabled',
    loading && 'table-loading',
    className
  ].filter(Boolean).join(' ');

  const handleSelectAll = (checked: boolean) => {
    const newSelection = checked ? data.map(item => item.id) : [];
    if (onSelectionChange) {
      onSelectionChange(newSelection);
    } else {
      setInternalSelectedRows(newSelection);
    }
  };

  const handleRowSelection = (rowId: string, selected: boolean) => {
    let newSelection: string[];
    if (selected) {
      newSelection = [...currentSelectedRows, rowId];
    } else {
      newSelection = currentSelectedRows.filter(id => id !== rowId);
    }
    
    if (onSelectionChange) {
      onSelectionChange(newSelection);
    } else {
      setInternalSelectedRows(newSelection);
    }
  };

  const isAllSelected = data.length > 0 && currentSelectedRows.length === data.length;
  const isIndeterminate = currentSelectedRows.length > 0 && currentSelectedRows.length < data.length;

  const renderCell = (column: TableColumn, record: TableData, index: number) => {
    const value = record[column.key];
    
    if (column.render) {
      return column.render(value, record, index);
    }

    if (column.type === 'status') {
      return (
        <TableCell
          type="status"
          status={value?.toLowerCase()}
          align={column.align}
        >
          {value}
        </TableCell>
      );
    }

    return (
      <TableCell
        type={column.type}
        align={column.align}
        width={column.width}
      >
        {value}
      </TableCell>
    );
  };

  if (loading) {
    return (
      <div className={tableClasses}>
        {title && <h3 className="table-title">{title}</h3>}
        <div className="table-loading-state">
          <div className="loading-spinner" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={tableClasses}>
        {title && <h3 className="table-title">{title}</h3>}
        <div className="table-empty-state">
          <p>{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={tableClasses}>
      {title && <h3 className="table-title">{title}</h3>}
      
      <div className="table-wrapper">
        <table className="table">
          <thead className="table-header">
            <tr className="table-header-row">
              {showSelection && (
                <th className="table-header-cell table-header-selection">
                  <div className="selection-wrapper">
                    <input
                      type="checkbox"
                      className="selection-checkbox"
                      checked={isAllSelected}
                      ref={(input) => {
                        if (input) input.indeterminate = isIndeterminate;
                      }}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      disabled={disabled}
                      aria-label="Select all rows"
                    />
                  </div>
                </th>
              )}
              
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`table-header-cell table-header-align-${column.align || 'left'}`}
                  style={column.width ? { width: column.width } : undefined}
                >
                  {column.title}
                </th>
              ))}
              
              {showActions && (
                <th className="table-header-cell table-header-actions">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          
          <tbody className="table-body">
            {data.map((record, index) => (
              <TableRow
                key={record.id}
                showSelection={showSelection}
                isSelected={currentSelectedRows.includes(record.id)}
                showActions={showActions}
                size={size}
                disabled={disabled}
                onClick={() => onRowClick?.(record, index)}
                onSelectionChange={(selected) => handleRowSelection(record.id, selected)}
                onEdit={() => onEdit?.(record, index)}
                onDelete={() => onDelete?.(record, index)}
                onDuplicate={() => onDuplicate?.(record, index)}
              >
                {columns.map((column) => renderCell(column, record, index))}
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
