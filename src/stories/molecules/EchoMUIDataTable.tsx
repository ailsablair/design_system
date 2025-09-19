import React, { useState, useMemo } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  Chip,
  Typography,
  Toolbar,
  alpha,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Search as SearchIcon,
  FilterList as FilterIcon,
  GetApp as ExportIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

import { EchoMUITable, EchoTableColumn, EchoTableAction } from '../atoms/EchoMUITable';
import { EchoMUIPagination } from '../atoms/EchoMUIPagination';
import { EchoMUIButton } from '../atoms/EchoMUIButton';

/**
 * Echo MUI DataTable
 * 
 * Complete data table with search, filtering, pagination, and bulk actions
 */

export interface DataTableFilter {
  id: string;
  label: string;
  value: any;
  type: 'text' | 'select' | 'date' | 'boolean';
  options?: Array<{ label: string; value: any }>;
}

interface EchoMUIDataTableProps<T = any> {
  /** Table title */
  title?: string;
  /** Table columns configuration */
  columns: EchoTableColumn<T>[];
  /** Table data */
  data: T[];
  /** Enable search */
  searchable?: boolean;
  /** Search placeholder */
  searchPlaceholder?: string;
  /** Search value */
  searchValue?: string;
  /** Search change handler */
  onSearchChange?: (value: string) => void;
  /** Enable row selection */
  selectable?: boolean;
  /** Selected row IDs */
  selectedIds?: string[];
  /** Row selection change handler */
  onSelectionChange?: (selectedIds: string[]) => void;
  /** Row ID accessor */
  getRowId?: (row: T) => string;
  /** Enable sorting */
  sortable?: boolean;
  /** Current sort configuration */
  sortBy?: string;
  /** Sort direction */
  sortDirection?: 'asc' | 'desc';
  /** Sort change handler */
  onSortChange?: (column: string, direction: 'asc' | 'desc') => void;
  /** Row actions */
  actions?: EchoTableAction<T>[];
  /** Bulk actions for selected rows */
  bulkActions?: Array<{
    label: string;
    icon: React.ReactNode;
    onClick: (selectedIds: string[]) => void;
    color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success';
  }>;
  /** Enable pagination */
  pagination?: boolean;
  /** Current page (0-indexed) */
  page?: number;
  /** Rows per page */
  rowsPerPage?: number;
  /** Total row count (for server-side pagination) */
  totalRows?: number;
  /** Page change handler */
  onPageChange?: (page: number) => void;
  /** Rows per page change handler */
  onRowsPerPageChange?: (rowsPerPage: number) => void;
  /** Filters configuration */
  filters?: DataTableFilter[];
  /** Active filters */
  activeFilters?: Record<string, any>;
  /** Filter change handler */
  onFiltersChange?: (filters: Record<string, any>) => void;
  /** Loading state */
  loading?: boolean;
  /** Empty state message */
  emptyMessage?: string;
  /** Enable export functionality */
  exportable?: boolean;
  /** Export handler */
  onExport?: () => void;
  /** Table density */
  dense?: boolean;
  /** Enable hover effects */
  hover?: boolean;
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: 'var(--base-white)',
  borderBottom: '1px solid var(--neutral-gray-gray-200)',
  padding: 'var(--spacing-sizing-16px) var(--spacing-sizing-24px)',
  minHeight: 'auto',
  
  '&.DataTable-selected': {
    backgroundColor: alpha('var(--primary-blue-blue)', 0.08),
    borderBottom: '1px solid var(--primary-blue-blue-200)',
  },
}));

const SearchField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'var(--base-white)',
    borderRadius: 'var(--spacing-radius-4px)',
    fontSize: 'var(--type-size-sm)',
    
    '& fieldset': {
      borderColor: 'var(--neutral-gray-gray-300)',
    },
    
    '&:hover fieldset': {
      borderColor: 'var(--neutral-gray-gray-400)',
    },
    
    '&.Mui-focused fieldset': {
      borderColor: 'var(--primary-blue-blue)',
      borderWidth: '1px',
    },
  },
}));

const FilterChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'var(--primary-blue-blue-50)',
  color: 'var(--primary-blue-blue)',
  border: '1px solid var(--primary-blue-blue-200)',
  fontFamily: 'var(--type-typeface-roboto-flex)',
  fontSize: 'var(--type-size-sm)',
  
  '& .MuiChip-deleteIcon': {
    color: 'var(--primary-blue-blue)',
    '&:hover': {
      color: 'var(--primary-blue-blue-600)',
    },
  },
}));

export function EchoMUIDataTable<T = any>({
  title,
  columns,
  data,
  searchable = true,
  searchPlaceholder = 'Search...',
  searchValue = '',
  onSearchChange,
  selectable = false,
  selectedIds = [],
  onSelectionChange,
  getRowId = (row: any) => row.id || row._id || JSON.stringify(row),
  sortable = true,
  sortBy,
  sortDirection = 'asc',
  onSortChange,
  actions = [],
  bulkActions = [],
  pagination = true,
  page = 0,
  rowsPerPage = 10,
  totalRows,
  onPageChange,
  onRowsPerPageChange,
  filters = [],
  activeFilters = {},
  onFiltersChange,
  loading = false,
  emptyMessage = 'No data available',
  exportable = false,
  onExport,
  dense = false,
  hover = true,
}: EchoMUIDataTableProps<T>) {
  const [localSearchValue, setLocalSearchValue] = useState(searchValue);

  // Handle search with debouncing
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLocalSearchValue(value);
    
    if (onSearchChange) {
      // Simple debouncing - in a real app, you might want to use a proper debounce function
      setTimeout(() => {
        onSearchChange(value);
      }, 300);
    }
  };

  // Filter data locally if no server-side filtering
  const filteredData = useMemo(() => {
    let result = data;
    
    // Apply search filter
    if (localSearchValue && !onSearchChange) {
      result = result.filter((row) =>
        columns.some((column) => {
          const value = (row as any)[column.id];
          return String(value).toLowerCase().includes(localSearchValue.toLowerCase());
        })
      );
    }
    
    // Apply other filters
    if (Object.keys(activeFilters).length > 0 && !onFiltersChange) {
      result = result.filter((row) =>
        Object.entries(activeFilters).every(([filterId, filterValue]) => {
          if (!filterValue || filterValue === '') return true;
          const rowValue = (row as any)[filterId];
          return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase());
        })
      );
    }
    
    return result;
  }, [data, localSearchValue, activeFilters, columns, onSearchChange, onFiltersChange]);

  // Pagination calculations
  const paginatedData = useMemo(() => {
    if (!pagination || onPageChange) return filteredData; // Server-side pagination
    
    const startIndex = page * rowsPerPage;
    return filteredData.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredData, pagination, page, rowsPerPage, onPageChange]);

  const totalCount = totalRows || filteredData.length;
  const hasSelection = selectedIds.length > 0;

  const removeFilter = (filterId: string) => {
    if (onFiltersChange) {
      const newFilters = { ...activeFilters };
      delete newFilters[filterId];
      onFiltersChange(newFilters);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Toolbar */}
      <StyledToolbar 
        className={hasSelection ? 'DataTable-selected' : ''}
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {hasSelection ? (
          // Selection toolbar
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
            <Typography variant="subtitle1" sx={{ color: 'var(--primary-blue-blue)' }}>
              {selectedIds.length} selected
            </Typography>
            {bulkActions.map((action, index) => (
              <EchoMUIButton
                key={index}
                variant={action.color || 'secondary'}
                size="small"
                leadingIcon={action.icon}
                onClick={() => action.onClick(selectedIds)}
              >
                {action.label}
              </EchoMUIButton>
            ))}
          </Box>
        ) : (
          // Normal toolbar
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
              {title && (
                <Typography variant="h6" sx={{ fontFamily: 'var(--type-typeface-archivo)' }}>
                  {title}
                </Typography>
              )}
              
              {searchable && (
                <SearchField
                  size="small"
                  placeholder={searchPlaceholder}
                  value={localSearchValue}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'var(--neutral-gray-gray-500)', fontSize: 'var(--icon-size-md)' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ minWidth: 250 }}
                />
              )}
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {exportable && (
                <EchoMUIButton
                  variant="tertiary"
                  size="small"
                  leadingIcon={<ExportIcon />}
                  onClick={onExport}
                >
                  Export
                </EchoMUIButton>
              )}
            </Box>
          </>
        )}
      </StyledToolbar>

      {/* Active Filters */}
      {Object.keys(activeFilters).length > 0 && (
        <Box sx={{ p: 2, borderBottom: '1px solid var(--neutral-gray-gray-200)' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
            <Typography variant="body2" sx={{ color: 'var(--neutral-gray-gray-600)', mr: 1 }}>
              Active filters:
            </Typography>
            {Object.entries(activeFilters).map(([filterId, value]) => {
              const filter = filters.find(f => f.id === filterId);
              if (!value || !filter) return null;
              
              return (
                <FilterChip
                  key={filterId}
                  label={`${filter.label}: ${value}`}
                  onDelete={() => removeFilter(filterId)}
                  size="small"
                />
              );
            })}
          </Box>
        </Box>
      )}

      {/* Table */}
      <EchoMUITable
        columns={columns}
        data={paginatedData}
        selectable={selectable}
        selectedIds={selectedIds}
        onSelectionChange={onSelectionChange}
        getRowId={getRowId}
        sortable={sortable}
        sortBy={sortBy}
        sortDirection={sortDirection}
        onSortChange={onSortChange}
        actions={actions}
        loading={loading}
        emptyMessage={emptyMessage}
        hover={hover}
        size={dense ? 'small' : 'medium'}
      />

      {/* Pagination */}
      {pagination && totalCount > rowsPerPage && (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, borderTop: '1px solid var(--neutral-gray-gray-200)' }}>
          <EchoMUIPagination
            page={page + 1} // Convert from 0-indexed to 1-indexed
            count={Math.ceil(totalCount / rowsPerPage)}
            onChange={(event, newPage) => onPageChange?.(newPage - 1)} // Convert back to 0-indexed
            showFirstLast={totalCount > rowsPerPage * 10}
          />
        </Box>
      )}
    </Box>
  );
}

export default EchoMUIDataTable;
