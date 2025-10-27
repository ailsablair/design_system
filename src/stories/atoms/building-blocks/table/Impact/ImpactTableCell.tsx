import React, { useState } from 'react';
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
    | 'total'
    | 'populated'
    | 'locked'
    | 'impact';
  /** Cell width variant */
  width?: 'sm' | 'lg';
  /** Cell state */
  state?: 
    | 'default' 
    | 'empty' 
    | 'disabled' 
    | 'disabled-empty' 
    | 'decimal' 
    | 'text' 
    | 'scale';
  /** Hover state */
  hover?: boolean;
  /** Cell value */
  value?: string | number;
  /** Placeholder text */
  placeholder?: string;
  /** Title text (for row and header cells) */
  title?: string;
  /** Subtext (for header-w-subtext and row types) */
  subtext?: string;
  /** Year label (for column headers) */
  yearLabel?: string;
  /** Unit label (for column headers) */
  unitLabel?: string;
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
 * - Dropdown cells for selecting values from predefined options
 * - Input cells for entering numerical data
 * - Header cells with category names and optional lock icons
 * - Row headers with titles and optional subtexts
 * - Total cells for displaying calculated read-only values
 * - Populated cells for displaying finalized data
 * - Locked cells for read-only data with lock indicator
 * - Impact cells for displaying category information
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
  yearLabel = '',
  unitLabel = '',
  options = [],
  className = '',
  onChange,
  onClick,
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const cellClasses = [
    'building-blocks-table-impact',
    `role-${role}`,
    `type-${type}`,
    `width-${width}`,
    `state-${state}`,
    `hover-${hover || isHovered ? 'true' : 'false'}`,
    className
  ].filter(Boolean).join(' ');

  const handleChange = (newValue: string | number) => {
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleDropdownToggle = () => {
    if (state !== 'disabled' && state !== 'disabled-empty') {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const handleOptionSelect = (option: { label: string; value: string | number }) => {
    handleChange(option.value);
    setIsDropdownOpen(false);
  };

  const renderChevronIcon = () => (
    <svg
      className="filled-icons"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6">
        <path
          d="M4.3225 5.00488L7 7.68238L9.6775 5.00488L10.5 5.83322L7 9.33322L3.5 5.83322L4.3225 5.00488Z"
          fill="#61607C"
        />
      </g>
    </svg>
  );

  const renderLockIcon = () => (
    <svg
      className="filled-icons"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6">
        <path
          d="M6.99992 9.91634C7.30934 9.91634 7.60608 9.79342 7.82488 9.57463C8.04367 9.35584 8.16659 9.05909 8.16659 8.74967C8.16659 8.10217 7.64159 7.58301 6.99992 7.58301C6.6905 7.58301 6.39375 7.70592 6.17496 7.92472C5.95617 8.14351 5.83325 8.44025 5.83325 8.74967C5.83325 9.05909 5.95617 9.35584 6.17496 9.57463C6.39375 9.79342 6.6905 9.91634 6.99992 9.91634ZM10.4999 4.66634C10.8093 4.66634 11.1061 4.78926 11.3249 5.00805C11.5437 5.22684 11.6666 5.52359 11.6666 5.83301V11.6663C11.6666 11.9758 11.5437 12.2725 11.3249 12.4913C11.1061 12.7101 10.8093 12.833 10.4999 12.833H3.49992C3.1905 12.833 2.89375 12.7101 2.67496 12.4913C2.45617 12.2725 2.33325 11.9758 2.33325 11.6663V5.83301C2.33325 5.18551 2.85825 4.66634 3.49992 4.66634H4.08325V3.49967C4.08325 2.72613 4.39054 1.98426 4.93752 1.43728C5.48451 0.890299 6.22637 0.583008 6.99992 0.583008C7.38294 0.583008 7.76221 0.65845 8.11608 0.805026C8.46995 0.951602 8.79148 1.16644 9.06231 1.43728C9.33315 1.70812 9.54799 2.02965 9.69457 2.38351C9.84114 2.73738 9.91659 3.11665 9.91659 3.49967V4.66634H10.4999ZM6.99992 1.74967C6.53579 1.74967 6.09067 1.93405 5.76248 2.26224C5.43429 2.59043 5.24992 3.03555 5.24992 3.49967V4.66634H8.74992V3.49967C8.74992 3.03555 8.56554 2.59043 8.23736 2.26224C7.90917 1.93405 7.46405 1.74967 6.99992 1.74967Z"
          fill={state === 'disabled' || state === 'disabled-empty' ? '#D2D5DA' : '#61607C'}
        />
      </g>
    </svg>
  );

  const renderContent = () => {
    // Row header types
    if (role === 'row') {
      if (type === 'header-w-subtext') {
        return (
          <>
            <div className="title">{title || 'Row title goes here'}</div>
            <div className="this-is-subtext">{subtext || 'This is subtext'}</div>
          </>
        );
      }

      if (type === 'total') {
        return (
          <>
            <div className="title">{title || 'Total amount ($M)'}</div>
            {subtext && <div className="this-is-subtext">{subtext || 'This is subtext'}</div>}
          </>
        );
      }

      if (type === 'impact') {
        return <div className="title">{title || 'Total amount ($M)'}</div>;
      }

      return <div className="title">{title || 'Row title goes here'}</div>;
    }

    // Column header for cell-0 role with year/unit
    if (role === 'cell-0' && type === 'header') {
      return (
        <div className="content">
          {yearLabel && <div className="_2025">{yearLabel}</div>}
          <div className="_0-a">{unitLabel || '0A'}</div>
        </div>
      );
    }

    // Column header for cell role
    if (type === 'header' || type === 'header-w-subtext' || type === 'impact') {
      return (
        <div className="content">
          <div className="category-lock">
            <div className="category">{title || 'Category name'}</div>
            {type === 'impact' && renderLockIcon()}
          </div>
          {(type === 'header-w-subtext' || type === 'impact') && (
            <div className="this-is-a-subtitle">{subtext || 'This is a subtitle'}</div>
          )}
        </div>
      );
    }

    // Simple column header for sm width cells
    if (type === 'header' && width === 'sm') {
      return <div className="u-1">{unitLabel || 'U1'}</div>;
    }

    // Dropdown cell
    if (type === 'dropdown') {
      const displayValue = state === 'scale' 
        ? (value || internalValue || '3 - Significant')
        : (state === 'default' ? 'Select an option' : '');

      return (
        <div className="simple">
          <div className="placeholder" onClick={handleDropdownToggle}>
            {displayValue && <div className="placeholder-text">{displayValue}</div>}
            {renderChevronIcon()}
          </div>
          {isDropdownOpen && options.length > 0 && (
            <div className="dropdown-menu">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="dropdown-option"
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

    // Locked cell
    if (type === 'locked') {
      const displayValue = state === 'scale' 
        ? (value || internalValue || '3')
        : state === 'decimal'
        ? (value || internalValue || '2.65')
        : (value || internalValue || '2001');

      return (
        <div className="simple">
          <div className="placeholder">
            {displayValue && <div className="placeholder-text">{displayValue}</div>}
            {renderLockIcon()}
          </div>
        </div>
      );
    }

    // Input cell
    if (type === 'input') {
      const displayValue = state === 'decimal' 
        ? (value || internalValue || '2.65')
        : (value || internalValue || '');

      const placeholderText = state === 'default' 
        ? (placeholder || 'Enter initial value')
        : (placeholder || '0.00');

      return (
        <div className="simple">
          <div className="placeholder">
            {displayValue ? (
              <div className="placeholder-text">{displayValue}</div>
            ) : (
              state !== 'empty' && <div className="placeholder-text">{placeholderText}</div>
            )}
          </div>
        </div>
      );
    }

    // Populated cell
    if (type === 'populated') {
      let displayValue = value || internalValue;
      
      if (state === 'decimal') {
        displayValue = displayValue || '2.65';
      } else if (state === 'text') {
        displayValue = displayValue || 'Populated response here';
      } else if (state === 'scale') {
        displayValue = displayValue || '3 - Significant';
      } else {
        displayValue = displayValue || '$0.00 M';
      }

      return (
        <div className="simple">
          <div className="placeholder">
            <div className="placeholder-text">{displayValue}</div>
          </div>
        </div>
      );
    }

    // Total cell
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
        <div className="simple">
          <div className="placeholder">
            <div className="placeholder-text">{displayValue}</div>
          </div>
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
