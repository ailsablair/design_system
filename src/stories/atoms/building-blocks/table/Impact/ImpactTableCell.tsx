import React, { useState } from 'react';
import { Icon } from '../../../../foundations/Icon';
import './impactTableCell.css';

export interface ImpactTableCellProps {
  /** Cell role variant */
  role?: 'cell' | 'cell-0' | 'row';
  /** Cell type determines the layout and content */
  type?: 
    | 'dropdown' 
    | 'input' 
    | 'header' 
    | 'header-w-subtext' 
    | 'header-subtext' 
    | 'bolded' 
    | 'bolded-w-subtext'
    | 'total';
  /** Cell width variant */
  width?: 'sm' | 'lg';
  /** Cell state */
  state?: 
    | 'default' 
    | 'filled' 
    | 'empty' 
    | 'disabled' 
    | 'disabled-empty' 
    | 'hover' 
    | 'decimal' 
    | 'text' 
    | 'scale';
  /** Hover state */
  hover?: boolean;
  /** Cell value */
  value?: string | number;
  /** Placeholder text */
  placeholder?: string;
  /** Title text (for row headers) */
  title?: string;
  /** Subtext (for row headers with subtext) */
  subtext?: string;
  /** Whether to show lock icon */
  showLock?: boolean;
  /** Year label (for column headers) */
  yearLabel?: string;
  /** Unit label (for column headers) */
  unitLabel?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Read only state */
  readOnly?: boolean;
  /** Dropdown options */
  options?: Array<{ label: string; value: string | number }>;
  /** Additional CSS classes */
  className?: string;
  /** Change handler */
  onChange?: (value: string | number) => void;
  /** Click handler */
  onClick?: () => void;
}

/**
 * Impact Table Cell component based on Figma designs
 * 
 * Supports various cell types for impact assessment tables:
 * - Dropdown cells for selecting values
 * - Input cells for entering data
 * - Header cells with category names and lock icons
 * - Row headers with titles and optional subtexts
 * - Total cells for displaying calculated values
 * - Column headers with year and unit information
 */
export const ImpactTableCell: React.FC<ImpactTableCellProps> = ({
  role = 'cell',
  type = 'input',
  width = 'lg',
  state = 'default',
  hover = false,
  value = '',
  placeholder = '',
  title = '',
  subtext = '',
  showLock = false,
  yearLabel = '',
  unitLabel = '',
  disabled = false,
  readOnly = false,
  options = [],
  className = '',
  onChange,
  onClick,
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const cellClasses = [
    'impact-table-cell',
    `impact-table-cell--role-${role}`,
    `impact-table-cell--type-${type}`,
    `impact-table-cell--width-${width}`,
    `impact-table-cell--state-${state}`,
    (hover || isHovered) && 'impact-table-cell--hover',
    disabled && 'impact-table-cell--disabled',
    readOnly && 'impact-table-cell--readonly',
    className
  ].filter(Boolean).join(' ');

  const handleChange = (newValue: string | number) => {
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleDropdownToggle = () => {
    if (!disabled && !readOnly) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const handleOptionSelect = (option: { label: string; value: string | number }) => {
    handleChange(option.value);
    setIsDropdownOpen(false);
  };

  const renderContent = () => {
    // Row header types
    if (role === 'row') {
      if (type === 'header-subtext' || type === 'header-w-subtext') {
        return (
          <div className="impact-table-cell__row-content">
            <div className="impact-table-cell__row-title">{title || 'Row title goes here'}</div>
            <div className="impact-table-cell__row-subtext">{subtext || 'This is subtext'}</div>
          </div>
        );
      }

      if (type === 'bolded' || type === 'bolded-w-subtext') {
        return (
          <div className="impact-table-cell__row-content">
            <div className="impact-table-cell__row-title impact-table-cell__row-title--bold">
              {title || 'Total amount ($M)'}
            </div>
            {type === 'bolded-w-subtext' && (
              <div className="impact-table-cell__row-subtext">{subtext || 'This is subtext'}</div>
            )}
          </div>
        );
      }

      return (
        <div className="impact-table-cell__row-content">
          <div className="impact-table-cell__row-title">{title || 'Row title goes here'}</div>
        </div>
      );
    }

    // Column header for cell-0 role with year/unit
    if (role === 'cell-0' && type === 'header') {
      return (
        <div className="impact-table-cell__header-content">
          <div className="impact-table-cell__year-label">{yearLabel || '2025'}</div>
          <div className="impact-table-cell__unit-label">{unitLabel || '0A'}</div>
        </div>
      );
    }

    // Column header for cell role
    if (type === 'header' || type === 'header-w-subtext') {
      return (
        <div className="impact-table-cell__header-content">
          <div className="impact-table-cell__category-lock">
            <div className="impact-table-cell__category">{title || 'Category name'}</div>
            {showLock && (
              <Icon name="lock" size="sm" className="impact-table-cell__lock-icon" />
            )}
          </div>
          {type === 'header-w-subtext' && (
            <div className="impact-table-cell__subtitle">{subtext || 'This is a subtitle'}</div>
          )}
        </div>
      );
    }

    // Simple column header for sm width cells
    if (type === 'header' && width === 'sm') {
      return (
        <div className="impact-table-cell__simple-header">
          {unitLabel || 'U1'}
        </div>
      );
    }

    // Dropdown cell
    if (type === 'dropdown') {
      const displayValue = state === 'filled' 
        ? (value || internalValue || '3 - Significant')
        : (state === 'default' || state === 'disabled' ? 'Select an option' : '');

      return (
        <div className="impact-table-cell__dropdown-wrapper">
          <div
            className="impact-table-cell__dropdown"
            onClick={handleDropdownToggle}
          >
            {displayValue && (
              <div className="impact-table-cell__dropdown-text">{displayValue}</div>
            )}
            <Icon 
              name="chevron-down" 
              size="sm" 
              className="impact-table-cell__dropdown-icon"
            />
          </div>
          {isDropdownOpen && options.length > 0 && (
            <div className="impact-table-cell__dropdown-menu">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="impact-table-cell__dropdown-option"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    // Input cell
    if (type === 'input') {
      const displayValue = value !== undefined && value !== '' ? value : internalValue;
      
      return (
        <input
          type="text"
          className="impact-table-cell__input"
          value={displayValue}
          placeholder={placeholder || '0.00'}
          disabled={disabled}
          readOnly={readOnly}
          onChange={(e) => handleChange(e.target.value)}
        />
      );
    }

    // Total cell (read-only display)
    if (type === 'total') {
      let displayValue = value || internalValue;
      
      if (state === 'decimal') {
        displayValue = displayValue || '5.67';
      } else if (state === 'text') {
        displayValue = displayValue || 'Text';
      } else if (state === 'scale') {
        displayValue = displayValue || '3';
      } else {
        displayValue = displayValue || '$0.00 M';
      }

      return (
        <div className="impact-table-cell__total">
          {displayValue}
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className={cellClasses}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {renderContent()}
    </div>
  );
};

export default ImpactTableCell;
