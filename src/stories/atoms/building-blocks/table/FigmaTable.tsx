import React, { useState } from 'react';
import { EchoMUIButton as Button } from '../../EchoMUIButton';
import { Tag } from '../../Tag';
import { Checkbox } from '../../Checkbox';
import { AvatarGroup } from '../../AvatarGroup';
import { Star } from '../Star';
import { ProgressBar } from '../ProgressBar';
import { Icon } from '../../../foundations/Icons/Icon';
import './figmaTable.css';

export interface FigmaTableColumn {
  /** Column key */
  key: string;
  /** Column header text */
  title: string;
  /** Column type */
  type: 'title' | 'text' | 'multi-tag' | 'links' | 'rating' | 'group-avatars' | 'progress-bar' | 'button-group';
  /** Column width */
  width?: string;
  /** Whether this is the lead/first column with checkboxes */
  isLead?: boolean;
  /** Whether column is sortable */
  sortable?: boolean;
  /** Sort direction */
  sortDirection?: 'asc' | 'desc' | null;
}

export interface FigmaTableData {
  /** Unique identifier */
  id: string;
  /** Whether this row is selected */
  selected?: boolean;
  /** Data for each column */
  [key: string]: any;
}

export interface FigmaTableProps {
  /** Table title */
  title: string;
  /** Table subtitle/description */
  subtitle?: string;
  /** Item count for badge */
  itemCount: number;
  /** Table columns configuration */
  columns: FigmaTableColumn[];
  /** Table data rows */
  data: FigmaTableData[];
  /** Size variant */
  size?: 'default' | 'small';
  /** Current page number */
  currentPage?: number;
  /** Total number of pages */
  totalPages?: number;
  /** Whether to show more actions button in header */
  showMoreActions?: boolean;
  /** Whether to show pagination in header */
  showPagination?: boolean;
  /** Whether to show subtext in header */
  showSubText?: boolean;
  /** Header/footer background color */
  headerFooterBg?: 'blue-50' | 'blue-100' | 'seafoam' | 'yellow' | 'black';
  /** Additional CSS classes */
  className?: string;
  /** Column sort handler */
  onSort?: (columnKey: string, direction: 'asc' | 'desc') => void;
  /** Row selection handler */
  onRowSelect?: (rowId: string, selected: boolean) => void;
  /** Select all handler */
  onSelectAll?: (selected: boolean) => void;
  /** Page change handler */
  onPageChange?: (page: number) => void;
  /** Edit action handler */
  onEdit?: (rowId: string) => void;
  /** Delete action handler */
  onDelete?: (rowId: string) => void;
}

/**
 * FigmaTable component that exactly matches the Figma design specifications
 * 
 * Features:
 * - Header with title, subtitle, count badge, and action buttons
 * - Multiple cell types: title, text, multi-tag, links, rating, group-avatars, progress-bar, button-group
 * - Checkbox selection with indeterminate states
 * - Sortable columns with visual indicators
 * - Pagination footer
 * - Two size variants: default and small
 * - Responsive design with proper spacing and colors
 */
export const FigmaTable: React.FC<FigmaTableProps> = ({
  title,
  subtitle,
  itemCount,
  columns,
  data,
  size = 'default',
  currentPage = 1,
  totalPages = 10,
  showMoreActions = true,
  showPagination = true,
  showSubText = true,
  headerFooterBg = 'blue-50',
  className = '',
  onSort,
  onRowSelect,
  onSelectAll,
  onPageChange,
  onEdit,
  onDelete,
}) => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

  const containerClasses = [
    'figma-table',
    `figma-table--${size}`,
    `figma-table--${headerFooterBg}`,
    className
  ].filter(Boolean).join(' ');

  const headerClasses = [
    'figma-table__header',
    `figma-table__header--${headerFooterBg}`,
    showMoreActions && 'figma-table__header--with-actions',
    showPagination && 'figma-table__header--with-pagination',
    showSubText && 'figma-table__header--with-subtext'
  ].filter(Boolean).join(' ');

  const footerClasses = [
    'figma-table__footer',
    `figma-table__footer--${headerFooterBg}`,
    showMoreActions && 'figma-table__footer--with-actions',
    showPagination && 'figma-table__footer--with-pagination',
    showSubText && 'figma-table__footer--with-subtext'
  ].filter(Boolean).join(' ');

  const selectedCount = selectedRows.size;
  const totalCount = data.length;
  const isAllSelected = selectedCount > 0 && selectedCount === totalCount;
  const isIndeterminate = selectedCount > 0 && selectedCount < totalCount;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(data.map(row => row.id)));
    } else {
      setSelectedRows(new Set());
    }
    onSelectAll?.(checked);
  };

  const handleRowSelect = (rowId: string, selected: boolean) => {
    const newSelectedRows = new Set(selectedRows);
    if (selected) {
      newSelectedRows.add(rowId);
    } else {
      newSelectedRows.delete(rowId);
    }
    setSelectedRows(newSelectedRows);
    onRowSelect?.(rowId, selected);
  };

  const handleSort = (columnKey: string) => {
    const column = columns.find(col => col.key === columnKey);
    if (!column?.sortable) return;

    const newDirection = column.sortDirection === 'asc' ? 'desc' : 'asc';
    onSort?.(columnKey, newDirection);
  };

  const renderCellContent = (column: FigmaTableColumn, rowData: FigmaTableData) => {
    const value = rowData[column.key];

    switch (column.type) {
      case 'title':
        return <div className="figma-table__cell-title">{value}</div>;

      case 'text':
        return <div className="figma-table__cell-text">{value}</div>;

      case 'multi-tag':
        return (
          <div className="figma-table__cell-multi-tag">
            <Tag
              label="Label"
              size={size === 'small' ? 'small' : 'default'}
              variant="outline-blue"
              leadingIcon={<Icon name="alarm" size="sm" />}
              trailingIcon={<Icon name="close" size="sm" />}
            />
            <Tag
              label="+4"
              size={size === 'small' ? 'small' : 'default'}
              variant="light-gray"
              leadingIcon={<Icon name="add" size="sm" />}
            />
          </div>
        );

      case 'links':
        return (
          <div className="figma-table__cell-links">
            <button 
              className="figma-table__link"
              onClick={() => onEdit?.(rowData.id)}
            >
              Edit
            </button>
            <button 
              className="figma-table__link"
              onClick={() => onDelete?.(rowData.id)}
            >
              Delete
            </button>
          </div>
        );

      case 'rating':
        return (
          <div className="figma-table__cell-rating">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                fill="100%"
                size="large"
              />
            ))}
          </div>
        );

      case 'group-avatars':
        return (
          <div className="figma-table__cell-group-avatars">
            <AvatarGroup
              type="default"
              stroke="default"
              size="default"
              avatars={[
                { src: 'https://placehold.co/46x46', name: 'User 1' },
                { src: 'https://placehold.co/46x46', name: 'User 2' },
                { src: 'https://placehold.co/46x46', name: 'User 3' },
                { src: 'https://placehold.co/46x46', name: 'User 4' },
                { src: 'https://placehold.co/46x46', name: 'User 5' },
              ]}
              maxCount={5}
              showOverflow={true}
            />
            <Tag
              label="+4"
              size={size === 'small' ? 'small' : 'default'}
              variant="light-gray"
              leadingIcon={<Icon name="add" size="sm" />}
            />
          </div>
        );

      case 'progress-bar':
        return (
          <div className="figma-table__cell-progress-bar">
            <ProgressBar
              progress={30}
              size={size === 'small' ? 'small' : 'default'}
              showPercentage={true}
            />
          </div>
        );

      case 'button-group':
        return (
          <div className="figma-table__cell-button-group">
            <Button
              size="small"
              variant="tertiary"
              leadingIcon={<Icon name="edit" size="sm" opacity={0.6} />}
              onClick={() => onEdit?.(rowData.id)}
            >
              Edit
            </Button>
            <Button
              size="small"
              variant="tertiary"
              leadingIcon={<Icon name="delete" size="sm" opacity={0.6} />}
              onClick={() => onDelete?.(rowData.id)}
            >
              Delete
            </Button>
          </div>
        );

      default:
        return <div>{value}</div>;
    }
  };

  const renderPaginationNumbers = () => {
    const pages = [];
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
            name="more-horiz" 
            size={size === 'small' ? 'sm' : 'md'}
            opacity={0.5}
          />
        );
      }
      
      const isActive = page === currentPage;
      return (
        <button
          key={page}
          className={`figma-table__page-number ${isActive ? 'figma-table__page-number--active' : ''}`}
          onClick={() => onPageChange?.(page as number)}
        >
          {page}
        </button>
      );
    });
  };

  return (
    <div className={containerClasses}>
      {/* Header */}
      <div className={headerClasses}>
        <div className="figma-table__header-content">
          <div className="figma-table__header-title-section">
            <div className="figma-table__title-row">
              <h2 className="figma-table__title">{title}</h2>
              <Tag
                label={`${itemCount} items`}
                size="small"
                variant="cyan"
              />
            </div>
            {showSubText && subtitle && (
              <p className="figma-table__subtitle">{subtitle}</p>
            )}
          </div>
          
          {showMoreActions && (
            <div className="figma-table__header-actions">
              <Button
                size={size === 'small' ? 'small' : 'default'}
                variant="secondary"
                trailingIcon={<Icon name="expand-more" size="sm" opacity={0.6} />}
              >
                Label
              </Button>
              <Button
                size={size === 'small' ? 'small' : 'default'}
                variant="tertiary"
                leadingIcon={<Icon name="alarm" size="sm" opacity={0.6} />}
                trailingIcon={<Icon name="arrow-downward" size="sm" opacity={0.6} />}
              >
                Label
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Table Body */}
      <div className="figma-table__body">
        <div className="figma-table__table-container">
          <table className="figma-table__table">
            <thead className="figma-table__thead">
              <tr className="figma-table__header-row">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={`figma-table__header-cell ${column.isLead ? 'figma-table__header-cell--lead' : ''}`}
                    style={column.width ? { width: column.width } : undefined}
                  >
                    <div className="figma-table__header-cell-content">
                      {column.isLead && (
                        <Checkbox
                          size="default"
                          checked={isAllSelected}
                          indeterminate={isIndeterminate}
                          onChange={(e) => handleSelectAll(e.target.checked)}
                          variant="default"
                          shape="square"
                        />
                      )}
                      <div 
                        className={`figma-table__header-label ${column.sortable ? 'figma-table__header-label--sortable' : ''}`}
                        onClick={() => column.sortable && handleSort(column.key)}
                      >
                        <span className="figma-table__header-text">{column.title}</span>
                        {column.sortable && column.sortDirection && (
                          <Icon 
                            name="arrow-downward" 
                            size="sm" 
                            className={`figma-table__sort-icon ${column.sortDirection === 'asc' ? 'figma-table__sort-icon--asc' : ''}`}
                          />
                        )}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="figma-table__tbody">
              {data.map((rowData, rowIndex) => {
                const isSelected = selectedRows.has(rowData.id);
                const isAlternate = rowIndex % 2 === 1;
                
                return (
                  <tr
                    key={rowData.id}
                    className={`figma-table__row ${isSelected ? 'figma-table__row--selected' : ''} ${isAlternate ? 'figma-table__row--alternate' : ''}`}
                  >
                    {columns.map((column) => (
                      <td
                        key={`${rowData.id}-${column.key}`}
                        className={`figma-table__cell ${column.isLead ? 'figma-table__cell--lead' : ''}`}
                      >
                        <div className="figma-table__cell-content">
                          {column.isLead && (
                            <Checkbox
                              size="default"
                              checked={isSelected}
                              onChange={(e) => handleRowSelect(rowData.id, e.target.checked)}
                              variant="default"
                              shape="square"
                            />
                          )}
                          {renderCellContent(column, rowData)}
                        </div>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      {showPagination && (
        <div className={footerClasses}>
          <div className="figma-table__footer-content">
            <div className="figma-table__footer-left">
              <Button
                size={size === 'small' ? 'small' : 'default'}
                variant="tertiary"
                leadingIcon={<Icon name="arrow-back" size="sm" opacity={0.6} />}
                onClick={() => currentPage > 1 && onPageChange?.(currentPage - 1)}
                disabled={currentPage <= 1}
              >
                Previous
              </Button>
            </div>
            
            <div className="figma-table__pagination">
              {renderPaginationNumbers()}
            </div>
            
            <div className="figma-table__footer-right">
              <Button
                size={size === 'small' ? 'small' : 'default'}
                variant="tertiary"
                trailingIcon={<Icon name="arrow-forward" size="sm" opacity={0.6} />}
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

export default FigmaTable;
