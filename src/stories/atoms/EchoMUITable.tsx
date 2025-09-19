import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TableSortLabel,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  TablePagination,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  MoreVert as MoreVertIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon,
} from '@mui/icons-material';

/**
 * Echo MUI Table
 * 
 * Enhanced table component using MUI Table with Echo design tokens
 */

export interface EchoTableColumn<T = any> {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
}

export interface EchoTableAction<T = any> {
  icon: React.ReactNode;
  label: string;
  onClick: (row: T) => void;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'success';
}

interface EchoMUITableProps<T = any> {
  /** Table columns configuration */
  columns: EchoTableColumn<T>[];
  /** Table data */
  data: T[];
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
  /** Enable pagination */
  pagination?: boolean;
  /** Current page (0-indexed) */
  page?: number;
  /** Rows per page */
  rowsPerPage?: number;
  /** Total row count */
  totalRows?: number;
  /** Page change handler */
  onPageChange?: (page: number) => void;
  /** Rows per page change handler */
  onRowsPerPageChange?: (rowsPerPage: number) => void;
  /** Loading state */
  loading?: boolean;
  /** Empty state message */
  emptyMessage?: string;
  /** Table size */
  size?: 'small' | 'medium';
  /** Enable hover effects */
  hover?: boolean;
  /** Dense padding */
  dense?: boolean;
}

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: 'var(--spacing-radius-8px)',
  border: '1px solid var(--neutral-gray-gray-200)',
  boxShadow: 'var(--shadow-sm)',
  overflow: 'hidden',
}));

const StyledTable = styled(Table)(({ theme }) => ({
  '& .MuiTableCell-root': {
    fontFamily: 'var(--type-typeface-roboto-flex)',
    borderBottom: '1px solid var(--neutral-gray-gray-200)',
  },
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: 'var(--neutral-gray-gray-50)',
  
  '& .MuiTableCell-head': {
    fontFamily: 'var(--type-typeface-archivo)',
    fontSize: 'var(--type-size-sm)',
    fontWeight: 'var(--type-weight-semibold)',
    color: 'var(--neutral-gray-gray-700)',
    padding: 'var(--spacing-sizing-12px) var(--spacing-sizing-16px)',
    textTransform: 'none',
    letterSpacing: '0.025em',
  },
}));

const StyledTableRow = styled(TableRow, {
  shouldForwardProp: (prop) => prop !== 'hover',
})<{ hover?: boolean }>(({ theme, hover = true }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: 'var(--neutral-gray-gray-25)',
  },
  
  ...(hover && {
    '&:hover': {
      backgroundColor: 'var(--primary-blue-blue-50)',
      cursor: 'pointer',
    },
  }),
  
  '&.Mui-selected': {
    backgroundColor: 'var(--primary-blue-blue-100)',
    
    '&:hover': {
      backgroundColor: 'var(--primary-blue-blue-150)',
    },
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 'var(--type-size-base)',
  color: 'var(--base-black)',
  padding: 'var(--spacing-sizing-12px) var(--spacing-sizing-16px)',
  
  '&.MuiTableCell-head': {
    backgroundColor: 'var(--neutral-gray-gray-50)',
  },
}));

const StyledTableSortLabel = styled(TableSortLabel)(({ theme }) => ({
  '&.MuiTableSortLabel-root': {
    color: 'var(--neutral-gray-gray-700)',
    
    '&:hover': {
      color: 'var(--primary-blue-blue)',
    },
    
    '&.Mui-active': {
      color: 'var(--primary-blue-blue)',
      
      '& .MuiTableSortLabel-icon': {
        color: 'var(--primary-blue-blue)',
      },
    },
  },
}));

const ActionButton = styled(IconButton)(({ theme }) => ({
  padding: 'var(--spacing-sizing-4px)',
  borderRadius: 'var(--spacing-radius-4px)',
  transition: 'all var(--transition-fast)',
  
  '&:hover': {
    backgroundColor: 'var(--neutral-gray-gray-100)',
  },
}));

export function EchoMUITable<T = any>({
  columns,
  data,
  selectable = false,
  selectedIds = [],
  onSelectionChange,
  getRowId = (row: any) => row.id || row._id || JSON.stringify(row),
  sortable = false,
  sortBy,
  sortDirection = 'asc',
  onSortChange,
  actions = [],
  pagination = false,
  page = 0,
  rowsPerPage = 10,
  totalRows,
  onPageChange,
  onRowsPerPageChange,
  loading = false,
  emptyMessage = 'No data available',
  size = 'medium',
  hover = true,
  dense = false,
}: EchoMUITableProps<T>) {
  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSelectionChange) {
      if (event.target.checked) {
        const allIds = data.map(getRowId);
        onSelectionChange(allIds);
      } else {
        onSelectionChange([]);
      }
    }
  };

  const handleSelectRow = (rowId: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSelectionChange) {
      if (event.target.checked) {
        onSelectionChange([...selectedIds, rowId]);
      } else {
        onSelectionChange(selectedIds.filter(id => id !== rowId));
      }
    }
  };

  const handleSort = (column: string) => () => {
    if (onSortChange) {
      const newDirection = sortBy === column && sortDirection === 'asc' ? 'desc' : 'asc';
      onSortChange(column, newDirection);
    }
  };

  const isAllSelected = data.length > 0 && selectedIds.length === data.length;
  const isIndeterminate = selectedIds.length > 0 && selectedIds.length < data.length;

  return (
    <Box>
      <StyledTableContainer component={Paper}>
        <StyledTable size={size} sx={{ minWidth: 650 }}>
          <StyledTableHead>
            <TableRow>
              {selectable && (
                <StyledTableCell padding="checkbox">
                  <Checkbox
                    indeterminate={isIndeterminate}
                    checked={isAllSelected}
                    onChange={handleSelectAll}
                    sx={{
                      color: 'var(--primary-blue-blue)',
                      '&.Mui-checked': {
                        color: 'var(--primary-blue-blue)',
                      },
                    }}
                  />
                </StyledTableCell>
              )}
              
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {sortable && column.sortable ? (
                    <StyledTableSortLabel
                      active={sortBy === column.id}
                      direction={sortBy === column.id ? sortDirection : 'asc'}
                      onClick={handleSort(column.id)}
                    >
                      {column.label}
                    </StyledTableSortLabel>
                  ) : (
                    column.label
                  )}
                </StyledTableCell>
              ))}
              
              {actions.length > 0 && (
                <StyledTableCell align="center" style={{ width: 60 }}>
                  Actions
                </StyledTableCell>
              )}
            </TableRow>
          </StyledTableHead>
          
          <TableBody>
            {loading ? (
              <TableRow>
                <StyledTableCell 
                  colSpan={columns.length + (selectable ? 1 : 0) + (actions.length > 0 ? 1 : 0)}
                  align="center"
                  sx={{ py: 4 }}
                >
                  Loading...
                </StyledTableCell>
              </TableRow>
            ) : data.length === 0 ? (
              <TableRow>
                <StyledTableCell 
                  colSpan={columns.length + (selectable ? 1 : 0) + (actions.length > 0 ? 1 : 0)}
                  align="center"
                  sx={{ py: 4, color: 'var(--neutral-gray-gray-500)' }}
                >
                  {emptyMessage}
                </StyledTableCell>
              </TableRow>
            ) : (
              data.map((row) => {
                const rowId = getRowId(row);
                const isSelected = selectedIds.includes(rowId);
                
                return (
                  <StyledTableRow 
                    key={rowId} 
                    hover={hover}
                    selected={isSelected}
                  >
                    {selectable && (
                      <StyledTableCell padding="checkbox">
                        <Checkbox
                          checked={isSelected}
                          onChange={handleSelectRow(rowId)}
                          sx={{
                            color: 'var(--primary-blue-blue)',
                            '&.Mui-checked': {
                              color: 'var(--primary-blue-blue)',
                            },
                          }}
                        />
                      </StyledTableCell>
                    )}
                    
                    {columns.map((column) => {
                      const value = (row as any)[column.id];
                      return (
                        <StyledTableCell key={column.id} align={column.align}>
                          {column.render ? column.render(value, row) : value}
                        </StyledTableCell>
                      );
                    })}
                    
                    {actions.length > 0 && (
                      <StyledTableCell align="center">
                        <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'center' }}>
                          {actions.map((action, index) => (
                            <Tooltip key={index} title={action.label}>
                              <ActionButton
                                size="small"
                                onClick={() => action.onClick(row)}
                                sx={{
                                  color: action.color ? `var(--status-${action.color === 'primary' ? 'blue' : action.color})` : 'var(--neutral-gray-gray-600)',
                                }}
                              >
                                {action.icon}
                              </ActionButton>
                            </Tooltip>
                          ))}
                        </Box>
                      </StyledTableCell>
                    )}
                  </StyledTableRow>
                );
              })
            )}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
      
      {pagination && (
        <TablePagination
          component="div"
          count={totalRows || data.length}
          page={page}
          onPageChange={(event, newPage) => onPageChange?.(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(event) => onRowsPerPageChange?.(parseInt(event.target.value, 10))}
          rowsPerPageOptions={[5, 10, 25, 50]}
          sx={{
            borderTop: '1px solid var(--neutral-gray-gray-200)',
            '& .MuiTablePagination-toolbar': {
              fontFamily: 'var(--type-typeface-roboto-flex)',
            },
            '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
              fontSize: 'var(--type-size-sm)',
              color: 'var(--neutral-gray-gray-600)',
            },
          }}
        />
      )}
    </Box>
  );
}

export default EchoMUITable;
