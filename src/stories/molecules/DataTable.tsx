import type { KeyboardEvent as ReactKeyboardEvent, ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, type ButtonProps } from '../atoms/Button';
import { Tag, type TagProps } from '../atoms/Tag';
import { Checkbox } from '../atoms/Checkbox';
import { AvatarGroup } from '../atoms/AvatarGroup';
import { Star } from '../atoms/building-blocks/Star';
import { ProgressBar } from '../atoms/ProgressBar';
import { Icon } from '../foundations/Icon';
import './dataTable.css';

type SortDirection = 'asc' | 'desc';

interface SortState {
  key: string;
  direction: SortDirection;
}

const mapButtonSize = (size: DataTableProps['size']): NonNullable<ButtonProps['size']> =>
  size === 'small' ? 'small' : 'default';

const mapTagSize = (size: DataTableProps['size']): NonNullable<TagProps['size']> =>
  size === 'small' ? 'small' : 'default';

export interface DataTableColumn {
  key: string;
  title: string;
  type: 'text' | 'title' | 'multi-tag' | 'links' | 'rating' | 'avatars' | 'progress' | 'actions';
  width?: string | number;
  minWidth?: string | number;
  sortable?: boolean;
  sortDirection?: SortDirection | null;
  isLead?: boolean;
  showHelpIcon?: boolean;
  render?: (value: unknown, record: DataTableRow, index: number) => ReactNode;
}

export interface DataTableRow {
  id: string;
  selected?: boolean;
  [key: string]: unknown;
}

export interface DataTableProps {
  title: string;
  itemCount: number;
  columns: DataTableColumn[];
  data: DataTableRow[];
  loading?: boolean;
  size?: 'default' | 'small';
  showMoreActions?: boolean;
  showPagination?: boolean;
  currentPage?: number;
  totalPages?: number;
  pageSize?: number;
  selectedRowIds?: string[];
  allRowsSelected?: boolean;
  className?: string;
  variant?: 'default' | 'compact';
  onSort?: (columnKey: string, direction: SortDirection) => void;
  onRowSelect?: (rowId: string, selected: boolean) => void;
  onSelectAll?: (selected: boolean) => void;
  onPageChange?: (page: number) => void;
  onEdit?: (rowId: string) => void;
  onDelete?: (rowId: string) => void;
  onMoreActions?: () => void;
}

interface HeaderSectionProps {
  title: string;
  itemCount: number;
  size: DataTableProps['size'];
  showMoreActions: boolean;
  onMoreActions?: () => void;
}

const DataTableHeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  itemCount,
  size,
  showMoreActions,
  onMoreActions,
}) => (
  <div className="data-table__header">
    <div className="data-table__header-content">
      <div className="data-table__title-section">
        <div className="data-table__title-row">
          <h2 className="data-table__title">{title}</h2>
          <Tag
            size="small"
            variant="light-gray"
            light
            shape="rounded"
            showClose={false}
          >
            {itemCount} items
          </Tag>
        </div>
      </div>

      {showMoreActions && (
        <Button size={mapButtonSize(size)} variant="ghost" onClick={onMoreActions}>
          <Icon name="dots-vertical" size="md" />
        </Button>
      )}
    </div>
  </div>
);

interface FooterSectionProps {
  size: DataTableProps['size'];
  currentPage: number;
  totalPages: number;
  paginationItems: (number | string)[];
  onPageChange?: (page: number) => void;
}

const DataTableFooterSection: React.FC<FooterSectionProps> = ({
  size,
  currentPage,
  totalPages,
  paginationItems,
  onPageChange,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  const handleChange = (page: number) => {
    if (page !== currentPage) {
      onPageChange?.(page);
    }
  };

  return (
    <div className="data-table__footer">
      <div className="data-table__footer-content">
        <div className="data-table__footer-left">
          <Button
            size={mapButtonSize(size)}
            variant="ghost"
            leadingIcon={<Icon name="arrow-left" size="sm" />}
            onClick={() => !isFirstPage && onPageChange?.(currentPage - 1)}
            disabled={isFirstPage}
          >
            Previous
          </Button>
        </div>

        <div className="data-table__pagination">
          {paginationItems.map((page, index) =>
            page === '...' ? (
              <Icon key={`ellipsis-${index}`} name="dots-horizontal" size="md" />
            ) : (
              <button
                key={page}
                type="button"
                className={`data-table__page-number ${
                  page === currentPage ? 'data-table__page-number--active' : ''
                }`}
                onClick={() => handleChange(page as number)}
              >
                {page}
              </button>
            )
          )}
        </div>

        <div className="data-table__footer-right">
          <Button
            size={mapButtonSize(size)}
            variant="ghost"
            trailingIcon={<Icon name="arrow-right" size="sm" />}
            onClick={() => !isLastPage && onPageChange?.(currentPage + 1)}
            disabled={isLastPage}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

interface ContentSectionProps {
  columns: DataTableColumn[];
  rows: DataTableRow[];
  size: DataTableProps['size'];
  loading: boolean;
  selectedRows: Set<string>;
  isAllSelected: boolean;
  isIndeterminate: boolean;
  onSelectAll: (selected: boolean) => void;
  onRowSelect: (rowId: string, selected: boolean) => void;
  renderCellContent: (column: DataTableColumn, row: DataTableRow, rowIndex: number) => React.ReactNode;
  activeSort: SortState | null;
  onSort: (columnKey: string) => void;
}

const DataTableContentSection: React.FC<ContentSectionProps> = ({
  columns,
  rows,
  size,
  loading,
  selectedRows,
  isAllSelected,
  isIndeterminate,
  onSelectAll,
  onRowSelect,
  renderCellContent,
  activeSort,
  onSort,
}) => {
  const handleHeaderKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLDivElement>, columnKey: string, sortable?: boolean) => {
      if (!sortable) {
        return;
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onSort(columnKey);
      }
    },
    [onSort]
  );

  return (
    <div className="data-table__container">
      <table className="data-table__table">
        <thead className="data-table__thead">
          <tr className="data-table__header-row">
            {columns.map((column) => {
              const sortable = Boolean(column.sortable);
              const columnSortDirection =
                column.sortDirection ??
                (activeSort?.key === column.key ? activeSort.direction : null);

              const ariaSort = sortable
                ? columnSortDirection === 'asc'
                  ? 'ascending'
                  : columnSortDirection === 'desc'
                  ? 'descending'
                  : 'none'
                : undefined;

              const sortIconClasses = [
                'data-table__sort-icon',
                columnSortDirection === 'asc' ? 'data-table__sort-icon--asc' : '',
              ]
                .filter(Boolean)
                .join(' ');

              return (
                <th
                  key={column.key}
                  className={`data-table__header-cell ${
                    column.isLead ? 'data-table__header-cell--lead' : ''
                  }`}
                  style={{ width: column.width, minWidth: column.minWidth }}
                  aria-sort={ariaSort as 'ascending' | 'descending' | 'none' | undefined}
                >
                  <div className="data-table__header-cell-content">
                    {column.isLead && (
                      <Checkbox
                        checked={isAllSelected}
                        indeterminate={isIndeterminate}
                        onChange={(event) => onSelectAll(event.target.checked)}
                        size="default"
                        variant="default"
                      />
                    )}

                    <div
                      className={`data-table__header-label ${
                        sortable ? 'data-table__header-label--sortable' : ''
                      }`}
                      onClick={sortable ? () => onSort(column.key) : undefined}
                      onKeyDown={(event) => handleHeaderKeyDown(event, column.key, sortable)}
                      role={sortable ? 'button' : undefined}
                      tabIndex={sortable ? 0 : undefined}
                    >
                      <span className="data-table__header-text">{column.title}</span>
                      {column.showHelpIcon && <Icon name="help-circle" size="sm" />}
                      {sortable && columnSortDirection && (
                        <Icon name="arrow-down-thick" size="sm" className={sortIconClasses} />
                      )}
                    </div>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="data-table__tbody">
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="data-table__loading-cell">
                <div className="data-table__loading">Loading...</div>
              </td>
            </tr>
          ) : rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="data-table__empty-cell">
                <div className="data-table__empty">No data available</div>
              </td>
            </tr>
          ) : (
            rows.map((row, rowIndex) => {
              const isSelected = selectedRows.has(row.id);
              const isAlternate = rowIndex % 2 === 1;

              return (
                <tr
                  key={row.id}
                  className={`data-table__row ${
                    isSelected ? 'data-table__row--selected' : ''
                  } ${isAlternate ? 'data-table__row--alternate' : ''}`}
                >
                  {columns.map((column) => (
                    <td
                      key={`${row.id}-${column.key}`}
                      className={`data-table__cell ${
                        column.isLead ? 'data-table__cell--lead' : ''
                      }`}
                    >
                      <div className="data-table__cell-content">
                        {column.isLead && (
                          <Checkbox
                            checked={isSelected}
                            onChange={(event) => onRowSelect(row.id, event.target.checked)}
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
  );
};

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
  selectedRowIds: selectedRowIdsProp,
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
  const [internalSelectedRows, setInternalSelectedRows] = useState<Set<string>>(new Set());
  const [internalSort, setInternalSort] = useState<SortState | null>(null);

  const selectedRowIds = useMemo(() => selectedRowIdsProp ?? [], [selectedRowIdsProp]);
  const isSelectionControlled = Array.isArray(selectedRowIdsProp);

  useEffect(() => {
    if (isSelectionControlled) {
      setInternalSelectedRows(new Set(selectedRowIds));
    }
  }, [isSelectionControlled, selectedRowIds]);

  const controlledSort = useMemo<SortState | null>(() => {
    const sortedColumn = columns.find((column) => column.sortDirection);
    if (sortedColumn && sortedColumn.sortDirection) {
      return { key: sortedColumn.key, direction: sortedColumn.sortDirection };
    }
    return null;
  }, [columns]);

  const activeSort = controlledSort ?? internalSort;

  const sortedRows = useMemo(() => {
    const sortState = controlledSort ?? internalSort;
    if (!sortState) {
      return data;
    }

    const column = columns.find((col) => col.key === sortState.key);
    if (!column) {
      return data;
    }

    const sorted = [...data].sort((a, b) => {
      const aValue = a[column.key];
      const bValue = b[column.key];

      if (aValue === bValue) {
        return 0;
      }

      if (aValue === undefined || aValue === null) {
        return 1;
      }

      if (bValue === undefined || bValue === null) {
        return -1;
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortState.direction === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return sortState.direction === 'asc'
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });

    return sorted;
  }, [columns, controlledSort, data, internalSort]);

  const selectedRows = isSelectionControlled ? new Set(selectedRowIds) : internalSelectedRows;
  const selectedCount = selectedRows.size;
  const totalCount = sortedRows.length;
  const isAllSelected =
    allRowsSelected || (totalCount > 0 && selectedCount === totalCount);
  const isIndeterminate =
    selectedCount > 0 && selectedCount < totalCount && !allRowsSelected;

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      if (onSelectAll) {
        onSelectAll(checked);
        return;
      }

      setInternalSelectedRows(() =>
        checked ? new Set(sortedRows.map((row) => row.id)) : new Set()
      );
    },
    [onSelectAll, sortedRows]
  );

  const handleRowSelect = useCallback(
    (rowId: string, rowSelected: boolean) => {
      if (onRowSelect) {
        onRowSelect(rowId, rowSelected);
        return;
      }

      setInternalSelectedRows((previous) => {
        const next = new Set(previous);
        if (rowSelected) {
          next.add(rowId);
        } else {
          next.delete(rowId);
        }
        return next;
      });
    },
    [onRowSelect]
  );

  const handleSort = useCallback(
    (columnKey: string) => {
      const column = columns.find((col) => col.key === columnKey);
      if (!column?.sortable) {
        return;
      }

      const currentDirection =
        column.sortDirection ??
        (internalSort?.key === columnKey ? internalSort.direction : null);

      const nextDirection: SortDirection = currentDirection === 'asc' ? 'desc' : 'asc';

      if (onSort) {
        onSort(columnKey, nextDirection);
        return;
      }

      setInternalSort({ key: columnKey, direction: nextDirection });
    },
    [columns, internalSort, onSort]
  );

  const tagSize = mapTagSize(size);

  const renderCellContent = useCallback(
    (column: DataTableColumn, row: DataTableRow, rowIndex: number) => {
      const value = row[column.key];

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
                size={tagSize}
                variant="outline-black"
                shape="rounded"
                leadingIcon={<Icon name="alarm-light" size="sm" />}
                trailingIcon={<Icon name="close" size="sm" />}
                showClose={false}
              >
                Label
              </Tag>
              <Tag
                size={tagSize}
                variant="light-gray"
                shape="rounded"
                leadingIcon={<Icon name="plus" size="sm" />}
                showClose={false}
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

        case 'rating': {
          const rating = typeof value === 'number' ? value : 5;
          return (
            <div className="data-table__cell-rating">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} fill={index < rating ? '100%' : '0%'} size="large" />
              ))}
            </div>
          );
        }

        case 'avatars': {
          const avatars = Array.isArray(value)
            ? value
            : [
                { src: '/api/placeholder/46/46', name: 'User 1' },
                { src: '/api/placeholder/46/46', name: 'User 2' },
                { src: '/api/placeholder/46/46', name: 'User 3' },
                { src: '/api/placeholder/46/46', name: 'User 4' },
                { src: '/api/placeholder/46/46', name: 'User 5' },
              ];

          return (
            <div className="data-table__cell-avatars">
              <AvatarGroup avatars={avatars} maxCount={5} size="default" showOverflow />
              <Tag
                size={tagSize}
                variant="light-gray"
                shape="rounded"
                leadingIcon={<Icon name="plus" size="sm" />}
                showClose={false}
              >
                +4
              </Tag>
            </div>
          );
        }

        case 'progress': {
          const progressValue = typeof value === 'number' ? value : 30;
          return (
            <div className="data-table__cell-progress">
              <ProgressBar
                value={progressValue}
                size={tagSize === 'small' ? 'small' : 'default'}
                showPercentage
                width={200}
              />
            </div>
          );
        }

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
          return <span>{value as ReactNode}</span>;
      }
    },
    [onDelete, onEdit, tagSize]
  );

  const paginationItems = useMemo(() => {
    if (totalPages <= 1) {
      return [] as (number | string)[];
    }

    const pages: (number | string)[] = [1];
    const showEllipsis = totalPages > 7;

    if (showEllipsis && currentPage > 4) {
      pages.push('...');
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let page = start; page <= end; page += 1) {
      if (page !== 1 && page !== totalPages) {
        pages.push(page);
      }
    }

    if (showEllipsis && currentPage < totalPages - 3) {
      pages.push('...');
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  const tableClasses = [
    'data-table',
    `data-table--${size}`,
    `data-table--${variant}`,
    loading && 'data-table--loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={tableClasses}>
      <DataTableHeaderSection
        title={title}
        itemCount={itemCount}
        size={size}
        showMoreActions={showMoreActions}
        onMoreActions={onMoreActions}
      />

      <DataTableContentSection
        columns={columns}
        rows={sortedRows}
        size={size}
        loading={loading}
        selectedRows={selectedRows}
        isAllSelected={isAllSelected}
        isIndeterminate={isIndeterminate}
        onSelectAll={handleSelectAll}
        onRowSelect={handleRowSelect}
        renderCellContent={renderCellContent}
        activeSort={activeSort}
        onSort={handleSort}
      />

      {showPagination && (
        <DataTableFooterSection
          size={size}
          currentPage={currentPage}
          totalPages={totalPages}
          paginationItems={paginationItems}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default DataTable;
