import React from 'react';
import { Checkbox } from '../../Checkbox';
import { TableHeaderLabel, TableHeaderLabelArrowDirection } from './TableHeaderLabel';
import './tableHeaderCell.css';

export type TableHeaderCellType = 'empty' | 'select-only' | 'default' | 'lead';
export type TableHeaderCellState = 'default' | 'selected' | 'hover';
export type TableHeaderCellBackground = 'default' | 'blue-100' | 'yellow-50' | 'gray-600' | 'dark-seafoam';
export type TableHeaderCellSelectType = 'none' | 'selected' | 'some-selected';

export interface TableHeaderCellProps {
  /**
   * Type of header cell
   */
  type?: TableHeaderCellType;
  /**
   * State of the cell
   */
  state?: TableHeaderCellState;
  /**
   * Background color variant
   */
  background?: TableHeaderCellBackground;
  /**
   * Selection type for checkboxes
   */
  selectType?: TableHeaderCellSelectType;
  /**
   * Label text for the column header
   */
  label?: string;
  /**
   * Arrow direction for sorting
   */
  arrowDirection?: TableHeaderLabelArrowDirection;
  /**
   * Show help icon in label
   */
  showHelpIcon?: boolean;
  /**
   * Show arrow icon in label
   */
  showArrowIcon?: boolean;
  /**
   * Number of selected items (for display in label)
   */
  selectedCount?: number;
  /**
   * Show action buttons when items are selected
   */
  showActions?: boolean;
  /**
   * Checkbox change handler
   */
  onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Click handler for label/sorting
   */
  onLabelClick?: () => void;
  /**
   * Help icon click handler
   */
  onHelpClick?: (e: React.MouseEvent) => void;
  /**
   * Edit button click handler
   */
  onEditClick?: () => void;
  /**
   * Delete button click handler
   */
  onDeleteClick?: () => void;
  /**
   * Additional CSS class
   */
  className?: string;
}

/**
 * TableHeaderCell component for table column headers
 * 
 * Provides:
 * - Optional checkbox for column selection
 * - Header label with sorting arrows
 * - Action buttons (Edit/Delete) when items are selected
 * - Multiple background color variants
 * - Support for hover and selected states
 */
export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  type = 'lead',
  state = 'default',
  background = 'default',
  selectType = 'none',
  label = 'Company',
  arrowDirection = 'down',
  showHelpIcon = false,
  showArrowIcon = true,
  selectedCount = 0,
  showActions = false,
  onCheckboxChange,
  onLabelClick,
  onHelpClick,
  onEditClick,
  onDeleteClick,
  className = '',
}) => {
  const classNames = [
    'table-header-cell',
    `type-${type}`,
    `state-${state}`,
    `bg-${background}`,
    `select-type-${selectType}`,
    className
  ].filter(Boolean).join(' ');

  const isChecked = selectType === 'selected';
  const isIndeterminate = selectType === 'some-selected';
  const displayLabel = selectedCount > 0 ? `${selectedCount} selected` : label;
  const labelFontWeight = state === 'selected' || state === 'hover' ? 'bold' : 
    (background === 'blue-100' || background === 'gray-600' || background === 'dark-seafoam') ? 'medium' : 'light';
  const shouldShowActions = showActions && (selectType === 'selected' || selectType === 'some-selected');

  // Empty type cells have no content
  if (type === 'empty') {
    return <div className={classNames} />;
  }

  // Select-only cells show only checkbox
  if (type === 'select-only') {
    return (
      <div className={classNames}>
        <Checkbox
          variant="default"
          size="default"
          checked={isChecked}
          indeterminate={isIndeterminate}
          onChange={onCheckboxChange}
        />
      </div>
    );
  }

  // Default type shows label with optional checkbox on right
  if (type === 'default') {
    return (
      <div className={classNames}>
        <TableHeaderLabel
          label={displayLabel}
          size="default"
          arrowDirection={arrowDirection}
          showHelpIcon={showHelpIcon}
          showArrowIcon={showArrowIcon}
          hover={state === 'hover'}
          onClick={onLabelClick}
          onHelpClick={onHelpClick}
        />
        {selectType !== 'none' && (
          <Checkbox
            variant="default"
            size="default"
            checked={isChecked}
            indeterminate={isIndeterminate}
            onChange={onCheckboxChange}
          />
        )}
      </div>
    );
  }

  // Lead type shows checkbox on left, label in middle, optional actions on right
  return (
    <div className={classNames}>
      {selectType !== 'none' && (
        <Checkbox
          variant="default"
          size="default"
          checked={isChecked}
          indeterminate={isIndeterminate}
          onChange={onCheckboxChange}
        />
      )}
      
      <TableHeaderLabel
        label={displayLabel}
        size="default"
        arrowDirection={showArrowIcon ? arrowDirection : 'none'}
        showHelpIcon={showHelpIcon}
        showArrowIcon={showArrowIcon}
        hover={state === 'hover'}
        onClick={onLabelClick}
        onHelpClick={onHelpClick}
      />

      {shouldShowActions && (
        <div className="table-header-actions">
          <button
            className="table-header-action-button"
            onClick={onEditClick}
            aria-label="Edit selected items"
          >
            <svg
              className="action-icon"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6">
                <path
                  d="M12.0808 4.10666C12.3083 3.87916 12.3083 3.49999 12.0808 3.28416L10.7158 1.91916C10.5 1.69166 10.1208 1.69166 9.89333 1.91916L8.82 2.98666L11.0075 5.17416M1.75 10.0625V12.25H3.9375L10.3892 5.79249L8.20167 3.60499L1.75 10.0625Z"
                  fill="#4B5563"
                />
              </g>
            </svg>
            <span className="action-label">Edit</span>
            <svg
              className="action-dropdown-icon"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.7">
                <path
                  d="M6.4165 3.49996V8.16663L4.37484 6.12496L3.5465 6.95329L6.99984 10.4066L10.4532 6.95329L9.62484 6.12496L7.58317 8.16663V3.49996H6.4165ZM6.99984 12.8333C6.23379 12.8333 5.47525 12.6824 4.76752 12.3893C4.05978 12.0961 3.41672 11.6664 2.87505 11.1247C1.78109 10.0308 1.1665 8.54706 1.1665 6.99996C1.1665 5.45286 1.78109 3.96913 2.87505 2.87517C3.96901 1.78121 5.45274 1.16663 6.99984 1.16663C7.76588 1.16663 8.52442 1.31751 9.23216 1.61066C9.93989 1.90381 10.583 2.33349 11.1246 2.87517C11.6663 3.41684 12.096 4.05991 12.3891 4.76764C12.6823 5.47537 12.8332 6.23391 12.8332 6.99996C12.8332 8.54706 12.2186 10.0308 11.1246 11.1247C10.0307 12.2187 8.54693 12.8333 6.99984 12.8333Z"
                  fill="#374151"
                />
              </g>
            </svg>
          </button>

          <button
            className="table-header-action-button"
            onClick={onDeleteClick}
            aria-label="Delete selected items"
          >
            <svg
              className="action-icon"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.6">
                <path
                  d="M5.25016 1.75V2.33333H2.3335V3.5H2.91683V11.0833C2.91683 11.3928 3.03975 11.6895 3.25854 11.9083C3.47733 12.1271 3.77408 12.25 4.0835 12.25H9.91683C10.2262 12.25 10.523 12.1271 10.7418 11.9083C10.9606 11.6895 11.0835 11.3928 11.0835 11.0833V3.5H11.6668V2.33333H8.75016V1.75H5.25016ZM5.25016 4.66667H6.41683V9.91667H5.25016V4.66667ZM7.5835 4.66667H8.75016V9.91667H7.5835V4.66667Z"
                  fill="#4B5563"
                />
              </g>
            </svg>
            <span className="action-label">Delete</span>
            <svg
              className="action-dropdown-icon"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.7">
                <path
                  d="M6.4165 3.49996V8.16663L4.37484 6.12496L3.5465 6.95329L6.99984 10.4066L10.4532 6.95329L9.62484 6.12496L7.58317 8.16663V3.49996H6.4165ZM6.99984 12.8333C6.23379 12.8333 5.47525 12.6824 4.76752 12.3893C4.05978 12.0961 3.41672 11.6664 2.87505 11.1247C1.78109 10.0308 1.1665 8.54706 1.1665 6.99996C1.1665 5.45286 1.78109 3.96913 2.87505 2.87517C3.96901 1.78121 5.45274 1.16663 6.99984 1.16663C7.76588 1.16663 8.52442 1.31751 9.23216 1.61066C9.93989 1.90381 10.583 2.33349 11.1246 2.87517C11.6663 3.41684 12.096 4.05991 12.3891 4.76764C12.6823 5.47537 12.8332 6.23391 12.8332 6.99996C12.8332 8.54706 12.2186 10.0308 11.1246 11.1247C10.0307 12.2187 8.54693 12.8333 6.99984 12.8333Z"
                  fill="#374151"
                />
              </g>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
