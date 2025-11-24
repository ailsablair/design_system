import React from 'react';
import './tableHeaderLabel.css';

export type TableHeaderLabelSize = 'small' | 'default' | 'large';
export type TableHeaderLabelArrowDirection = 'up' | 'down' | 'none';

export interface TableHeaderLabelProps {
  /**
   * Label text to display
   */
  label?: string;
  /**
   * Size of the header label
   */
  size?: TableHeaderLabelSize;
  /**
   * Arrow direction for sorting indicator
   */
  arrowDirection?: TableHeaderLabelArrowDirection;
  /**
   * Show help icon
   */
  showHelpIcon?: boolean;
  /**
   * Show arrow icon
   */
  showArrowIcon?: boolean;
  /**
   * Hover state - makes text bold
   */
  hover?: boolean;
  /**
   * Click handler for sorting
   */
  onClick?: () => void;
  /**
   * Help icon click handler
   */
  onHelpClick?: (e: React.MouseEvent) => void;
  /**
   * Additional CSS class names
   */
  className?: string;
  /**
   * ARIA label for accessibility
   */
  ariaLabel?: string;
}

/**
 * TableHeaderLabel component for table column headers with sorting and help functionality
 * 
 * Supports multiple sizes, hover states, and optional help/sort icons.
 * Designed for use in table headers with full accessibility support.
 */
export const TableHeaderLabel: React.FC<TableHeaderLabelProps> = ({
  label = 'Company',
  size = 'default',
  arrowDirection = 'none',
  showHelpIcon = true,
  showArrowIcon = true,
  hover = false,
  onClick,
  onHelpClick,
  className = '',
  ariaLabel,
}) => {
  const classNames = [
    'table-header-label',
    `size-${size}`,
    arrowDirection !== 'none' && `arrow-${arrowDirection}`,
    hover && 'state-hover',
    onClick && 'clickable',
    className
  ].filter(Boolean).join(' ');

  const iconDimensions = {
    small: { help: 14, arrow: 12 },
    default: { help: 16, arrow: 14 },
    large: { help: 18, arrow: 16 }
  };

  const { help: helpSize, arrow: arrowSize } = iconDimensions[size];

  const handleHelpClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onHelpClick?.(e);
  };

  return (
    <div 
      className={classNames}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={ariaLabel || (onClick ? `Sort by ${label}` : label)}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="header-text">{label}</div>
      
      {showHelpIcon && (
        <button
          className="help-icon-button"
          onClick={handleHelpClick}
          aria-label={`Help for ${label}`}
          type="button"
        >
          <svg
            className="help-icon"
            width={helpSize}
            height={helpSize}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3025 8.4375L10.6275 9.1275C10.0875 9.6675 9.75 10.125 9.75 11.25H8.25V10.875C8.25 10.0425 8.5875 9.2925 9.1275 8.7525L10.0575 7.8075C10.335 7.5375 10.5 7.1625 10.5 6.75C10.5 5.9175 9.825 5.25 9 5.25C8.60218 5.25 8.22064 5.40804 7.93934 5.68934C7.65804 5.97064 7.5 6.35218 7.5 6.75H6C6 5.95435 6.31607 5.19129 6.87868 4.62868C7.44129 4.06607 8.20435 3.75 9 3.75C9.79565 3.75 10.5587 4.06607 11.1213 4.62868C11.6839 5.19129 12 5.95435 12 6.75C12 7.41 11.73 8.0025 11.3025 8.4375ZM9.75 14.25H8.25V12.75H9.75M9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9C1.5 10.9891 2.29018 12.8968 3.6967 14.3033C4.39314 14.9997 5.21993 15.5522 6.12987 15.9291C7.03982 16.306 8.01509 16.5 9 16.5C10.9891 16.5 12.8968 15.7098 14.3033 14.3033C15.7098 12.8968 16.5 10.9891 16.5 9C16.5 4.8525 13.125 1.5 9 1.5Z"
              fill="currentColor"
            />
          </svg>
        </button>
      )}
      
      {showArrowIcon && arrowDirection !== 'none' && (
        <div className="arrow-icon" aria-hidden="true">
          {arrowDirection === 'up' ? (
            <svg
              width={arrowSize}
              height={arrowSize}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.66688 13.3333H7.33355V5.33332L3.66688 8.99998L2.72021 8.05332L8.00021 2.77332L13.2802 8.05332L12.3335 8.99998L8.66688 5.33332V13.3333Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg
              width={arrowSize}
              height={arrowSize}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.33355 2.66663H8.66688V10.6666L12.3335 6.99996L13.2802 7.94663L8.00021 13.2266L2.72021 7.94663L3.66688 6.99996L7.33355 10.6666V2.66663Z"
                fill="currentColor"
              />
            </svg>
          )}
        </div>
      )}
    </div>
  );
};
