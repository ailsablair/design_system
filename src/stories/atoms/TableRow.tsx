import React from 'react';
import './building-blocks/table/tableRow.css';
import { Icon } from '../foundations/Icons/Icon';

export interface TableRowProps {
  /** Row content */
  children?: React.ReactNode;
  /** Row state */
  state?: 'default' | 'hover' | 'selected' | 'disabled';
  /** Show selection checkbox */
  showSelection?: boolean;
  /** Selection state */
  isSelected?: boolean;
  /** Show action buttons (edit, delete, duplicate) */
  showActions?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Row size variant */
  size?: 'compact' | 'default' | 'comfortable';
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Selection change handler */
  onSelectionChange?: (selected: boolean) => void;
  /** Edit action handler */
  onEdit?: () => void;
  /** Delete action handler */
  onDelete?: () => void;
  /** Duplicate action handler */
  onDuplicate?: () => void;
}

export interface TableCellProps {
  /** Cell content */
  children: React.ReactNode;
  /** Cell type */
  type?: 'text' | 'status' | 'action';
  /** Status variant for status cells */
  status?: 'active' | 'inactive' | 'pending' | 'error' | 'success';
  /** Cell width */
  width?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Table Cell component for use within Table Rows
 */
export const TableCell: React.FC<TableCellProps> = ({
  children,
  type = 'text',
  status,
  width,
  align = 'left',
  className = '',
}) => {
  const cellClasses = [
    'table-cell',
    `table-cell-type-${type}`,
    status && `table-cell-status-${status}`,
    `table-cell-align-${align}`,
    className
  ].filter(Boolean).join(' ');

  const cellStyle = width ? { width } : undefined;

  if (type === 'status' && status) {
    return (
      <td className={cellClasses} style={cellStyle}>
        <div className={`status-indicator status-${status}`}>
          <span className="status-dot" />
          <span className="status-text">{children}</span>
        </div>
      </td>
    );
  }

  return (
    <td className={cellClasses} style={cellStyle}>
      {children}
    </td>
  );
};

/**
 * Table Row component with selection, actions, and multiple states
 * 
 * Supports:
 * - Row selection with checkbox
 * - Action buttons (edit, delete, duplicate)
 * - Multiple visual states (default, hover, selected, disabled)
 * - Different size variants
 * - Status indicators
 */
export const TableRow: React.FC<TableRowProps> = ({
  children,
  state = 'default',
  showSelection = false,
  isSelected = false,
  showActions = true,
  disabled = false,
  size = 'default',
  className = '',
  onClick,
  onSelectionChange,
  onEdit,
  onDelete,
  onDuplicate,
}) => {
  const rowClasses = [
    'table-row',
    `table-row-${state}`,
    `table-row-size-${size}`,
    disabled && 'table-row-disabled',
    isSelected && 'table-row-selected',
    className
  ].filter(Boolean).join(' ');

  const handleRowClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleSelectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    if (!disabled && onSelectionChange) {
      onSelectionChange(event.target.checked);
    }
  };

  const handleActionClick = (action: () => void) => (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!disabled) {
      action();
    }
  };

  return (
    <tr className={rowClasses} onClick={handleRowClick}>
      {showSelection && (
        <td className="table-cell table-cell-selection">
          <div className="selection-wrapper">
            <input
              type="checkbox"
              className="selection-checkbox"
              checked={isSelected}
              onChange={handleSelectionChange}
              disabled={disabled}
              aria-label="Select row"
            />
          </div>
        </td>
      )}
      
      {children}
      
      {showActions && (
        <td className="table-cell table-cell-actions">
          <div className="action-buttons">
            {onEdit && (
              <button
                type="button"
                className="action-button action-edit"
                onClick={handleActionClick(onEdit)}
                disabled={disabled}
                aria-label="Edit"
              >
                <Icon name="edit-outlined" size="sm" />
              </button>
            )}
            {onDuplicate && (
              <button
                type="button"
                className="action-button action-duplicate"
                onClick={handleActionClick(onDuplicate)}
                disabled={disabled}
                aria-label="Duplicate"
              >
                <Icon name="content-copy-outlined" size="sm" />
              </button>
            )}
            {onDelete && (
              <button
                type="button"
                className="action-button action-delete"
                onClick={handleActionClick(onDelete)}
                disabled={disabled}
                aria-label="Delete"
              >
                <Icon name="delete-outlined" size="sm" />
              </button>
            )}
          </div>
        </td>
      )}
    </tr>
  );
};

export default TableRow;
