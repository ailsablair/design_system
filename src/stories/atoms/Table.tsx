import React, { useState } from 'react';
import { TableHeaderLabel } from './TableHeaderLabel';
import { TableRow, TableCell } from './TableRow';
import { Pagination } from './Pagination';
import './building-blocks/table/table.css';

export interface TableColumn {
  /** Column key */
  key: string;
  /** Column label */
  label: string;
  /** Column type */
  type?: 'text' | 'status' | 'action';
  /** Column width */
  width?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Whether column is sortable */
  sortable?: boolean;
  /** Show help icon */
  showHelp?: boolean;
}

export interface TableData {
  /** Unique row ID */
  id: string;
  /** Row data */
  [key: string]: any;
}

export interface TableProps {
  /** Table columns configuration */
  columns: TableColumn[];
  /** Table data */
  data: TableData[];
  /** Show selection column */
  showSelection?: boolean;
  /** Show action buttons */
  showActions?: boolean;
  /** Row size variant */
  rowSize?: 'compact' | 'default' | 'comfortable';
  /** Header size variant */
  headerSize?: 'small' | 'default' | 'large';
  /** Show pagination */
  showPagination?: boolean;
  /** Items per page */
  itemsPerPage?: number;
  /** Current page */
  currentPage?: number;
  /** Pagination size */
  paginationSize?: 'small' | 'default';
  /** Selected row IDs */
  selectedRows?: string[];
  /** Sort configuration */
  sortConfig?: {
    column: string;
    direction: 'up' | 'down';
  } | null;
  /** Table variant based on Figma states */
  variant?: 'default' | 'blue' | 'green' | 'gray' | 'dark';
  /** Additional CSS classes */
  className?: string;
  /** Selection change handler */
  onSelectionChange?: (selectedIds: string[]) => void;
  /** Row click handler */
  onRowClick?: (row: TableData) => void;
  /** Sort change handler */
  onSortChange?: (column: string, direction: 'up' | 'down') => void;
  /** Page change handler */
  onPageChange?: (page: number) => void;
  /** Edit action handler */
  onEdit?: (row: TableData) => void;
  /** Delete action handler */
  onDelete?: (row: TableData) => void;
  /** Duplicate action handler */
  onDuplicate?: (row: TableData) => void;
}

/**
 * Comprehensive Table component combining header labels, rows, and pagination
 * 
 * Supports:
 * - Sortable columns with help icons
 * - Row selection and actions
 * - Multiple visual variants matching Figma design
 * - Built-in pagination
 * - Responsive design
 * - Full accessibility
 */
export const Table: React.FC<TableProps> = ({
  columns,
  data,
  showSelection = true,
  showActions = true,
  rowSize = 'default',
  headerSize = 'default',
  showPagination = true,
  itemsPerPage = 10,
  currentPage = 1,
  paginationSize = 'default',
  selectedRows = [],
  sortConfig = null,
  variant = 'default',
  className = '',
  onSelectionChange,
  onRowClick,
  onSortChange,
  onPageChange,
  onEdit,
  onDelete,
  onDuplicate,
}) => {
  const [internalSelectedRows, setInternalSelectedRows] = useState<string[]>(selectedRows);
  const [internalSortConfig, setInternalSortConfig] = useState(sortConfig);

  const selectedRowIds = onSelectionChange ? selectedRows : internalSelectedRows;
  const currentSortConfig = onSortChange ? sortConfig : internalSortConfig;

  // Calculate pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = showPagination ? data.slice(startIndex, endIndex) : data;

  const tableClasses = [
    'table-container',
    `table-container--${variant}`,
    className
  ].filter(Boolean).join(' ');

  const handleRowSelection = (rowId: string, isSelected: boolean) => {
    const newSelection = isSelected
      ? [...selectedRowIds, rowId]
      : selectedRowIds.filter(id => id !== rowId);

    if (onSelectionChange) {
      onSelectionChange(newSelection);
    } else {
      setInternalSelectedRows(newSelection);
    }
  };

  const handleSelectAll = (isSelected: boolean) => {
    const newSelection = isSelected ? paginatedData.map(row => row.id) : [];
    
    if (onSelectionChange) {
      onSelectionChange(newSelection);
    } else {
      setInternalSelectedRows(newSelection);
    }
  };

  const handleSort = (columnKey: string) => {
    const column = columns.find(col => col.key === columnKey);
    if (!column?.sortable) return;

    const isCurrentSorted = currentSortConfig?.column === columnKey;
    const currentDirection = currentSortConfig?.direction;
    
    let newDirection: 'up' | 'down';
    if (!isCurrentSorted || currentDirection === 'down') {
      newDirection = 'up';
    } else {
      newDirection = 'down';
    }

    const newSortConfig = { column: columnKey, direction: newDirection };

    if (onSortChange) {
      onSortChange(columnKey, newDirection);
    } else {
      setInternalSortConfig(newSortConfig);
    }
  };

  const renderCellContent = (row: TableData, column: TableColumn) => {
    const value = row[column.key];
    
    if (column.type === 'status') {
      return (
        <TableCell type="status" status={value?.status || value} align={column.align}>
          {value?.label || value}
        </TableCell>
      );
    }
    
    return (
      <TableCell type={column.type} align={column.align} width={column.width}>
        {value}
      </TableCell>
    );
  };

  const getRowState = (row: TableData): 'default' | 'hover' | 'selected' | 'disabled' => {
    if (selectedRowIds.includes(row.id)) return 'selected';
    return 'default';
  };

  const allPaginatedSelected = paginatedData.length > 0 && paginatedData.every(row => selectedRowIds.includes(row.id));
  const someSelected = paginatedData.some(row => selectedRowIds.includes(row.id));

  return (
    <div className={tableClasses}>
      <div className="table-wrapper">
        <table className="table">
          <thead className="table-header">
            <tr>
              {showSelection && (
                <th className="table-header-cell table-header-cell--selection">
                  <input
                    type="checkbox"
                    className="selection-checkbox"
                    checked={allPaginatedSelected}
                    ref={(el) => {
                      if (el) el.indeterminate = someSelected && !allPaginatedSelected;
                    }}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    aria-label="Select all rows"
                  />
                </th>
              )}
              
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="table-header-cell"
                  style={{ width: column.width }}
                >
                  <TableHeaderLabel
                    label={column.label}
                    size={headerSize}
                    sortDirection={
                      currentSortConfig?.column === column.key
                        ? currentSortConfig.direction
                        : null
                    }
                    showHelpIcon={column.showHelp}
                    showSortArrow={column.sortable}
                    onClick={column.sortable ? () => handleSort(column.key) : undefined}
                  />
                </th>
              ))}
              
              {showActions && (
                <th className="table-header-cell table-header-cell--actions">
                  <TableHeaderLabel
                    label="Actions"
                    size={headerSize}
                    showHelpIcon={false}
                    showSortArrow={false}
                  />
                </th>
              )}
            </tr>
          </thead>
          
          <tbody className="table-body">
            {paginatedData.map((row) => (
              <TableRow
                key={row.id}
                state={getRowState(row)}
                size={rowSize}
                showSelection={showSelection}
                isSelected={selectedRowIds.includes(row.id)}
                showActions={showActions}
                onClick={() => onRowClick?.(row)}
                onSelectionChange={(selected) => handleRowSelection(row.id, selected)}
                onEdit={() => onEdit?.(row)}
                onDelete={() => onDelete?.(row)}
                onDuplicate={() => onDuplicate?.(row)}
              >
                {columns.map((column) => renderCellContent(row, column))}
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
      
      {showPagination && totalPages > 1 && (
        <div className="table-pagination">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            size={paginationSize}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
