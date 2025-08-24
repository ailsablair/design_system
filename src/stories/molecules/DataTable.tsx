import React, { useState, useCallback } from 'react';
import { Button } from '../atoms/Button';
import { Tag } from '../atoms/Tag';
import { Checkbox } from '../atoms/Checkbox';
import { AvatarGroup } from '../atoms/AvatarGroup';
import { Star } from '../atoms/Star';
import { ProgressBar } from '../atoms/ProgressBar';
import { Icon } from '../foundations/Icon';
import './dataTable.css';

export interface DataTableColumn {
  /** Unique column identifier */
  key: string;
  /** Column header text */
  title: string;
  /** Column type for rendering */
  type: 'text' | 'title' | 'multi-tag' | 'links' | 'rating' | 'avatars' | 'progress' | 'actions';
  /** Column width */
  width?: string | number;
  /** Minimum column width */
  minWidth?: string | number;
  /** Whether column is sortable */
  sortable?: boolean;
  /** Sort direction */
  sortDirection?: 'asc' | 'desc' | null;
  /** Whether this is the lead column with checkboxes */
  isLead?: boolean;
  /** Whether to show help icon in header */
  showHelpIcon?: boolean;
  /** Custom render function for cell content */
  render?: (value: any, record: DataTableRow, index: number) => React.ReactNode;
}

export interface DataTableRow {
  /** Unique row identifier */
  id: string;
  /** Whether row is selected */
  selected?: boolean;
  /** Row data */
  [key: string]: any;
}

export interface DataTableProps {
  /** Table title */
  title: string;
  /** Number of total items */
  itemCount: number;
  /** Table columns configuration */
  columns: DataTableColumn[];
  /** Table data */
  data: DataTableRow[];
  /** Whether table is loading */
  loading?: boolean;
  /** Size variant */
  size?: 'default' | 'small';
  /** Whether to show more actions in header */
  showMoreActions?: boolean;
  /** Whether to show pagination */
  showPagination?: boolean;
  /** Current page (1-based) */
  currentPage?: number;
  /** Total number of pages */
  totalPages?: number;
  /** Number of items per page */
  pageSize?: number;
  /** Selected row IDs */
  selectedRowIds?: string[];
  /** Whether all rows are selected */
  allRowsSelected?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Style variant */
  variant?: 'default' | 'compact';
  /** Callback when column is sorted */
  onSort?: (columnKey: string, direction: 'asc' | 'desc') => void;
  /** Callback when row selection changes */
  onRowSelect?: (rowId: string, selected: boolean) => void;
  /** Callback when all rows selection changes */
  onSelectAll?: (selected: boolean) => void;
  /** Callback when page changes */
  onPageChange?: (page: number) => void;
  /** Callback for edit action */
  onEdit?: (rowId: string) => void;
  /** Callback for delete action */
  onDelete?: (rowId: string) => void;
  /** Callback for more actions button */
  onMoreActions?: () => void;
}

/**
 * DataTable component - A comprehensive, production-ready table component
 * 
 * Features:
 * - Multiple cell types (text, tags, avatars, ratings, progress bars, actions)
 * - Row selection with checkbox states
 * - Column sorting with visual indicators
 * - Pagination controls
 * - Responsive design
 * - Accessibility support
 * - Customizable appearance and behavior
 */
export const DataTable: React.FC<DataTableProps> = ({
  title,
  itemCount,
  columns,
  data,
  loading = false,
  size = 'default',
  showMoreActions = true,
  showPagination = true,
  currentPage = 1,
  totalPages = 1,
  pageSize = 10,
  selectedRowIds = [],
  allRowsSelected = false,
  className = '',
  variant = 'default',
  onSort,
  onRowSelect,
  onSelectAll,
  onPageChange,
  onEdit,
  onDelete,
  onMoreActions,
}) => {
  const [internalSelectedRows, setInternalSelectedRows] = useState<Set<string>>(
    new Set(selectedRowIds)
  );

  const selectedRows = selectedRowIds.length > 0 ? new Set(selectedRowIds) : internalSelectedRows;
  const selectedCount = selectedRows.size;
  const totalCount = data.length;
  const isAllSelected = allRowsSelected || (selectedCount > 0 && selectedCount === totalCount);
  const isIndeterminate = selectedCount > 0 && selectedCount < totalCount && !allRowsSelected;

  const handleSelectAll = useCallback((checked: boolean) => {
    if (onSelectAll) {
      onSelectAll(checked);
    } else {
      if (checked) {
        setInternalSelectedRows(new Set(data.map(row => row.id)));
      } else {
        setInternalSelectedRows(new Set());
      }
    }
  }, [data, onSelectAll]);

  const handleRowSelect = useCallback((rowId: string, selected: boolean) => {
    if (onRowSelect) {
      onRowSelect(rowId, selected);
    } else {
      const newSelectedRows = new Set(selectedRows);
      if (selected) {
        newSelectedRows.add(rowId);
      } else {
        newSelectedRows.delete(rowId);
      }
      setInternalSelectedRows(newSelectedRows);
    }
  }, [selectedRows, onRowSelect]);

  const handleSort = useCallback((columnKey: string) => {
    const column = columns.find(col => col.key === columnKey);
    if (!column?.sortable || !onSort) return;

    const newDirection = column.sortDirection === 'asc' ? 'desc' : 'asc';
    onSort(columnKey, newDirection);
  }, [columns, onSort]);

  const renderCellContent = (column: DataTableColumn, row: DataTableRow, rowIndex: number) => {
    const value = row[column.key];

    // Use custom render function if provided
    if (column.render) {
      return column.render(value, row, rowIndex);
    }

    switch (column.type) {
      case 'title':
        return <span className="data-table__cell-title">{value}</span>;

      case 'text':
        return <span className="data-table__cell-text">{value}</span>;

      case 'multi-tag':
        return (
          <div className="data-table__cell-tags">
            <Tag
              size={size === 'small' ? 'small' : 'default'}
              variant="outline-black"
              shape="rounded"
              leadingIcon={<Icon name="alarm-light" size="sm" />}
              trailingIcon={<Icon name="close" size="sm" />}
            >
              Label
            </Tag>
            <Tag
              size={size === 'small' ? 'small' : 'default'}
              variant="light-gray"
              shape="rounded"
              leadingIcon={<Icon name="plus" size="sm" />}
            >
              +4
            </Tag>
          </div>
        );

      case 'links':
        return (
          <div className="data-table__cell-links">
            <button 
              className="data-table__link"
              onClick={() => onEdit?.(row.id)}
              type="button"
            >
              Edit
            </button>
            <button 
              className="data-table__link"
              onClick={() => onDelete?.(row.id)}
              type="button"
            >
              Delete
            </button>
          </div>
        );

      case 'rating':
        const rating = typeof value === 'number' ? value : 5;
        return (
          <div className="data-table__cell-rating">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                fill={index < rating ? "100%" : "0%"}
                size="large"
              />
            ))}
          </div>
        );

      case 'avatars':
        const avatars = Array.isArray(value) ? value : [
          { src: '/api/placeholder/46/46', name: 'User 1' },
          { src: '/api/placeholder/46/46', name: 'User 2' },
          { src: '/api/placeholder/46/46', name: 'User 3' },
          { src: '/api/placeholder/46/46', name: 'User 4' },
          { src: '/api/placeholder/46/46', name: 'User 5' },
        ];
        
        return (
          <div className="data-table__cell-avatars">
            <AvatarGroup
              avatars={avatars}
              maxCount={5}
              size="default"
              showOverflow={true}
            />
            <Tag
              size={size === 'small' ? 'small' : 'default'}
              variant="light-gray"
              shape="rounded"
              leadingIcon={<Icon name="plus" size="sm" />}
            >
              +4
            </Tag>
          </div>
        );

      case 'progress':
        const progressValue = typeof value === 'number' ? value : 30;
        return (
          <div className="data-table__cell-progress">
            <ProgressBar
              value={progressValue}
              size={size === 'small' ? 'small' : 'default'}
              showPercentage={true}
              width={200}
            />
          </div>
        );

      case 'actions':
        return (
          <div className="data-table__cell-actions">
            <Button
              size="small"
              variant="ghost"
              leadingIcon={<Icon name="pencil" size="sm" />}
              onClick={() => onEdit?.(row.id)}
            >
              Edit
            </Button>
            <Button
              size="small"
              variant="ghost"
              leadingIcon={<Icon name="trash-can" size="sm" />}
              onClick={() => onDelete?.(row.id)}
            >
              Delete
            </Button>
          </div>
        );

      default:
        return <span>{value}</span>;
    }
  };

  const renderPaginationNumbers = () => {
    const pages: (number | string)[] = [];
    const showEllipsis = totalPages > 7;
    
    // Always show page 1
    pages.push(1);
    
    if (showEllipsis && currentPage > 4) {
      pages.push('...');
    }
    
    // Show pages around current page
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    
    for (let i = start; i <= end; i++) {
      if (i !== 1 && i !== totalPages) {
        pages.push(i);
      }
    }
    
    if (showEllipsis && currentPage < totalPages - 3) {
      pages.push('...');
    }
    
    // Always show last page if more than 1 page
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages.map((page, index) => {
      if (page === '...') {
        return (
          <Icon 
            key={`ellipsis-${index}`}
            name="dots-horizontal" 
            size="md"
          />
        );
      }
      
      const isActive = page === currentPage;
      return (
        <button
          key={page}
          className={`data-table__page-number ${isActive ? 'data-table__page-number--active' : ''}`}
          onClick={() => onPageChange?.(page as number)}
          type="button"
        >
          {page}
        </button>
      );
    });
  };

  const tableClasses = [
    'data-table',
    `data-table--${size}`,
    `data-table--${variant}`,
    loading && 'data-table--loading',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={tableClasses}>
      {/* Header */}
      <div className="data-table__header">
        <div className="data-table__header-content">
          <div className="data-table__title-section">
            <div className="data-table__title-row">
              <h2 className="data-table__title">{title}</h2>
              <Tag size="small" variant="white" shape="rounded">
                {itemCount} items
              </Tag>
            </div>
          </div>
          
          {showMoreActions && (
            <Button
              size={size === 'small' ? 'small' : 'default'}
              variant="ghost"
              onClick={onMoreActions}
            >
              <Icon name="dots-vertical" size="md" />
            </Button>
          )}
        </div>
      </div>

      {/* Table Container */}
      <div className="data-table__container">
        <table className="data-table__table">
          <thead className="data-table__thead">
            <tr className="data-table__header-row">
              {columns.map((column, index) => (
                <th
                  key={column.key}
                  className={`data-table__header-cell ${column.isLead ? 'data-table__header-cell--lead' : ''}`}
                  style={{ 
                    width: column.width, 
                    minWidth: column.minWidth 
                  }}
                >
                  <div className="data-table__header-cell-content">
                    {column.isLead && (
                      <Checkbox
                        checked={isAllSelected}
                        indeterminate={isIndeterminate}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                        size="default"
                        variant="default"
                      />
                    )}
                    
                    <div 
                      className={`data-table__header-label ${column.sortable ? 'data-table__header-label--sortable' : ''}`}
                      onClick={() => column.sortable && handleSort(column.key)}
                    >
                      <span className="data-table__header-text">{column.title}</span>
                      {column.showHelpIcon && (
                        <Icon name="help-circle" size="sm" />
                      )}
                      {column.sortable && column.sortDirection && (
                        <Icon 
                          name="arrow-down-thick" 
                          size="sm" 
                          className={`data-table__sort-icon ${column.sortDirection === 'asc' ? 'data-table__sort-icon--asc' : ''}`}
                        />
                      )}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody className="data-table__tbody">
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="data-table__loading-cell">
                  <div className="data-table__loading">Loading...</div>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="data-table__empty-cell">
                  <div className="data-table__empty">No data available</div>
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => {
                const isSelected = selectedRows.has(row.id);
                const isAlternate = rowIndex % 2 === 1;
                
                return (
                  <tr
                    key={row.id}
                    className={`data-table__row ${isSelected ? 'data-table__row--selected' : ''} ${isAlternate ? 'data-table__row--alternate' : ''}`}
                  >
                    {columns.map((column) => (
                      <td
                        key={`${row.id}-${column.key}`}
                        className={`data-table__cell ${column.isLead ? 'data-table__cell--lead' : ''}`}
                      >
                        <div className="data-table__cell-content">
                          {column.isLead && (
                            <Checkbox
                              checked={isSelected}
                              onChange={(e) => handleRowSelect(row.id, e.target.checked)}
                              size="default"
                              variant="default"
                            />
                          )}
                          {renderCellContent(column, row, rowIndex)}
                        </div>
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Footer with Pagination */}
      {showPagination && totalPages > 1 && (
        <div className="data-table__footer">
          <div className="data-table__footer-content">
            <div className="data-table__footer-left">
              <Button
                size={size === 'small' ? 'small' : 'default'}
                variant="ghost"
                leadingIcon={<Icon name="arrow-left" size="sm" />}
                onClick={() => currentPage > 1 && onPageChange?.(currentPage - 1)}
                disabled={currentPage <= 1}
              >
                Previous
              </Button>
            </div>
            
            <div className="data-table__pagination">
              {renderPaginationNumbers()}
            </div>
            
            <div className="data-table__footer-right">
              <Button
                size={size === 'small' ? 'small' : 'default'}
                variant="ghost"
                trailingIcon={<Icon name="arrow-right" size="sm" />}
                onClick={() => currentPage < totalPages && onPageChange?.(currentPage + 1)}
                disabled={currentPage >= totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
