import React, { useState, useMemo, useCallback } from 'react';
import { Table, TableColumn, TableData, TableProps } from '../atoms/Table';
import { SearchBar } from './SearchBar';
import { FilterGroup, FilterOption } from './FilterGroup';
import { ActionBar, ActionItem } from './ActionBar';
import './dataDisplay.css';

export interface DataDisplayProps extends Omit<TableProps, 'data' | 'currentPage' | 'onPageChange'> {
  /** All data (before filtering/searching) */
  data: TableData[];
  /** Show search functionality */
  showSearch?: boolean;
  /** Search placeholder text */
  searchPlaceholder?: string;
  /** Show filters */
  showFilters?: boolean;
  /** Filter groups configuration */
  filterGroups?: Array<{
    title: string;
    key: string;
    options: FilterOption[];
    type?: 'checkbox' | 'radio';
  }>;
  /** Show actions bar */
  showActions?: boolean;
  /** Actions configuration */
  actions?: ActionItem[];
  /** Search fields (columns to search in) */
  searchFields?: string[];
  /** Page size options */
  pageSizeOptions?: number[];
  /** Title for the data display */
  title?: string;
  /** Subtitle/description */
  subtitle?: string;
  /** Show export functionality */
  showExport?: boolean;
  /** Layout variant */
  layout?: 'default' | 'compact' | 'comfortable';
  /** Additional CSS classes */
  className?: string;
  /** Search handler */
  onSearch?: (searchTerm: string) => void;
  /** Filter change handler */
  onFilterChange?: (filters: Record<string, string | string[]>) => void;
  /** Export handler */
  onExport?: (data: TableData[]) => void;
}

export const DataDisplay: React.FC<DataDisplayProps> = ({
  data,
  columns,
  showSearch = true,
  searchPlaceholder = 'Search...',
  showFilters = false,
  filterGroups = [],
  showActions = false,
  actions = [],
  searchFields = [],
  pageSizeOptions = [10, 25, 50, 100],
  title,
  subtitle,
  showExport = false,
  layout = 'default',
  className = '',
  onSearch,
  onFilterChange,
  onExport,
  ...tableProps
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<Record<string, string | string[]>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(tableProps.itemsPerPage || 10);

  // Determine which fields to search in
  const fieldsToSearch = searchFields.length > 0 
    ? searchFields 
    : columns.map(col => col.key);

  // Filter and search data
  const filteredData = useMemo(() => {
    let result = [...data];

    // Apply search filter
    if (searchTerm.trim()) {
      result = result.filter(row =>
        fieldsToSearch.some(field => {
          const value = row[field];
          return value && 
            value.toString().toLowerCase().includes(searchTerm.toLowerCase());
        })
      );
    }

    // Apply filters
    Object.entries(filters).forEach(([filterKey, filterValue]) => {
      if (!filterValue || 
          (Array.isArray(filterValue) && filterValue.length === 0)) {
        return;
      }

      result = result.filter(row => {
        const rowValue = row[filterKey];
        if (Array.isArray(filterValue)) {
          return filterValue.includes(rowValue);
        } else {
          return rowValue === filterValue;
        }
      });
    });

    return result;
  }, [data, searchTerm, filters, fieldsToSearch]);

  // Handle search
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page
    if (onSearch) {
      onSearch(term);
    }
  };

  // Handle filter changes
  const handleFilterChange = (filterKey: string, value: string | string[]) => {
    const newFilters = { ...filters, [filterKey]: value };
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  // Handle export
  const handleExport = useCallback(() => {
    if (onExport) {
      onExport(filteredData);
    }
  }, [onExport, filteredData]);

  // Create export action if needed
  const allActions = useMemo(() => {
    const exportAction: ActionItem = {
      id: 'export',
      label: 'Export',
      type: 'secondary',
      onAction: handleExport,
    };

    return showExport 
      ? [exportAction, ...actions]
      : actions;
  }, [actions, showExport, handleExport]);

  const dataDisplayClasses = [
    'data-display',
    `data-display--${layout}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={dataDisplayClasses}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="data-display-header">
          {title && <h2 className="data-display-title">{title}</h2>}
          {subtitle && <p className="data-display-subtitle">{subtitle}</p>}
        </div>
      )}

      {/* Controls */}
      <div className="data-display-controls">
        {/* Search and Actions Row */}
        <div className="data-display-controls-row">
          {showSearch && (
            <div className="data-display-search">
              <SearchBar
                placeholder={searchPlaceholder}
                value={searchTerm}
                showButton={false}
                onChange={handleSearch}
                onClear={() => handleSearch('')}
              />
            </div>
          )}
          
          {allActions.length > 0 && (
            <div className="data-display-actions">
              <ActionBar
                actions={allActions}
                alignment="right"
                spacing="compact"
              />
            </div>
          )}
        </div>

        {/* Filters Row */}
        {showFilters && filterGroups.length > 0 && (
          <div className="data-display-filters">
            {filterGroups.map((group) => (
              <FilterGroup
                key={group.key}
                title={group.title}
                options={group.options}
                type={group.type}
                layout="horizontal"
                size="small"
                selectedValues={
                  Array.isArray(filters[group.key]) 
                    ? filters[group.key] as string[]
                    : []
                }
                selectedValue={
                  typeof filters[group.key] === 'string' 
                    ? filters[group.key] as string
                    : undefined
                }
                onSelectionChange={(values) => handleFilterChange(group.key, values)}
                onValueChange={(value) => handleFilterChange(group.key, value)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="data-display-meta">
        <span className="data-display-count">
          {filteredData.length} {filteredData.length === 1 ? 'result' : 'results'}
          {searchTerm && ` for "${searchTerm}"`}
        </span>
      </div>

      {/* Table */}
      <div className="data-display-table">
        <Table
          {...tableProps}
          columns={columns}
          data={filteredData}
          currentPage={currentPage}
          itemsPerPage={pageSize}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};
