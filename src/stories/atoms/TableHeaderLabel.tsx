import React from 'react';
import './building-blocks/table/tableHeaderLabel.css';

export interface TableHeaderLabelProps {
  /** Header label text */
  label?: string;
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Interaction state */
  state?: 'default' | 'hover';
  /** Sort direction */
  sortDirection?: 'up' | 'down' | null;
  /** Show help icon */
  showHelpIcon?: boolean;
  /** Show sort arrow */
  showSortArrow?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Click handler for sorting */
  onClick?: () => void;
  /** Help icon click handler */
  onHelpClick?: () => void;
}

const HelpIcon = ({ size = 'default', state = 'default' }: { size?: string; state?: string }) => {
  const iconSize = size === 'small' ? '14' : size === 'large' ? '18' : '16';
  const fillColor = state === 'hover' ? '#6171DF' : '#9CA3AF';

  return (
    <svg 
      width={iconSize} 
      height={iconSize} 
      viewBox={`0 0 ${iconSize} ${iconSize}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      {size === 'small' ? (
        <path d="M8.79067 6.56246L8.26567 7.09913C7.84567 7.51913 7.58317 7.87496 7.58317 8.74996H6.4165V8.45829C6.4165 7.81079 6.679 7.22746 7.099 6.80746L7.82234 6.07246C8.03817 5.86246 8.1665 5.57079 8.1665 5.24996C8.1665 4.60246 7.6415 4.08329 6.99984 4.08329C6.69042 4.08329 6.39367 4.20621 6.17488 4.425C5.95609 4.64379 5.83317 4.94054 5.83317 5.24996H4.6665C4.6665 4.63112 4.91234 4.03763 5.34992 3.60004C5.78751 3.16246 6.381 2.91663 6.99984 2.91663C7.61868 2.91663 8.21217 3.16246 8.64975 3.60004C9.08734 4.03763 9.33317 4.63112 9.33317 5.24996C9.33317 5.76329 9.12317 6.22413 8.79067 6.56246ZM7.58317 11.0833H6.4165V9.91663H7.58317M6.99984 1.16663C6.23379 1.16663 5.47525 1.31751 4.76752 1.61066C4.05978 1.90381 3.41672 2.33349 2.87505 2.87517C1.78109 3.96913 1.1665 5.45286 1.1665 6.99996C1.1665 8.54706 1.78109 10.0308 2.87505 11.1247C3.41672 11.6664 4.05978 12.0961 4.76752 12.3893C5.47525 12.6824 6.23379 12.8333 6.99984 12.8333C8.54693 12.8333 10.0307 12.2187 11.1246 11.1247C12.2186 10.0308 12.8332 8.54706 12.8332 6.99996C12.8332 3.77413 10.2082 1.16663 6.99984 1.16663Z" fill={fillColor} />
      ) : size === 'large' ? (
        <path d="M11.3025 8.4375L10.6275 9.1275C10.0875 9.6675 9.75 10.125 9.75 11.25H8.25V10.875C8.25 10.0425 8.5875 9.2925 9.1275 8.7525L10.0575 7.8075C10.335 7.5375 10.5 7.1625 10.5 6.75C10.5 5.9175 9.825 5.25 9 5.25C8.60218 5.25 8.22064 5.40804 7.93934 5.68934C7.65804 5.97064 7.5 6.35218 7.5 6.75H6C6 5.95435 6.31607 5.19129 6.87868 4.62868C7.44129 4.06607 8.20435 3.75 9 3.75C9.79565 3.75 10.5587 4.06607 11.1213 4.62868C11.6839 5.19129 12 5.95435 12 6.75C12 7.41 11.73 8.0025 11.3025 8.4375ZM9.75 14.25H8.25V12.75H9.75M9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9C1.5 10.9891 2.29018 12.8968 3.6967 14.3033C4.39314 14.9997 5.21993 15.5522 6.12987 15.9291C7.03982 16.306 8.01509 16.5 9 16.5C10.9891 16.5 12.8968 15.7098 14.3033 14.3033C15.7098 12.8968 16.5 10.9891 16.5 9C16.5 4.8525 13.125 1.5 9 1.5Z" fill={fillColor} />
      ) : (
        <path d="M10.0468 7.50004L9.44683 8.11337C8.96683 8.59337 8.66683 9.00004 8.66683 10H7.3335V9.66671C7.3335 8.92671 7.6335 8.26004 8.1135 7.78004L8.94016 6.94004C9.18683 6.70004 9.3335 6.36671 9.3335 6.00004C9.3335 5.26004 8.7335 4.66671 8.00016 4.66671C7.64654 4.66671 7.3074 4.80718 7.05735 5.05723C6.80731 5.30728 6.66683 5.64642 6.66683 6.00004H5.3335C5.3335 5.2928 5.61445 4.61452 6.11454 4.11442C6.61464 3.61433 7.29292 3.33337 8.00016 3.33337C8.70741 3.33337 9.38568 3.61433 9.88578 4.11442C10.3859 4.61452 10.6668 5.2928 10.6668 6.00004C10.6668 6.58671 10.4268 7.11337 10.0468 7.50004ZM8.66683 12.6667H7.3335V11.3334H8.66683M8.00016 1.33337C7.12468 1.33337 6.25778 1.50581 5.44894 1.84084C4.6401 2.17588 3.90517 2.66694 3.28612 3.286C2.03588 4.53624 1.3335 6.23193 1.3335 8.00004C1.3335 9.76815 2.03588 11.4638 3.28612 12.7141C3.90517 13.3331 4.6401 13.8242 5.44894 14.1592C6.25778 14.4943 7.12468 14.6667 8.00016 14.6667C9.76827 14.6667 11.464 13.9643 12.7142 12.7141C13.9645 11.4638 14.6668 9.76815 14.6668 8.00004C14.6668 4.31337 11.6668 1.33337 8.00016 1.33337Z" fill={fillColor} />
      )}
    </svg>
  );
};

const ArrowIcon = ({ direction, size = 'default', state = 'default' }: { direction: 'up' | 'down'; size?: string; state?: string }) => {
  const iconSize = size === 'small' ? '12' : size === 'large' ? '16' : '14';
  const fillColor = state === 'hover' ? '#6171DF' : '#9CA3AF';

  if (direction === 'up') {
    return (
      <svg 
        width={iconSize} 
        height={iconSize} 
        viewBox={`0 0 ${iconSize} ${iconSize}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
      >
        {size === 'small' ? (
          <path d="M6.50004 9.99996H5.50004V3.99996L2.75004 6.74996L2.04004 6.03996L6.00004 2.07996L9.96004 6.03996L9.25004 6.74996L6.50004 3.99996V9.99996Z" fill={fillColor} />
        ) : size === 'large' ? (
          <path d="M8.66688 13.3333H7.33355V5.33332L3.66688 8.99998L2.72021 8.05332L8.00021 2.77332L13.2802 8.05332L12.3335 8.99998L8.66688 5.33332V13.3333Z" fill={fillColor} />
        ) : (
          <path d="M7.58322 11.6666H6.41655V4.66664L3.20822 7.87497L2.37988 7.04664L6.99988 2.42664L11.6199 7.04664L10.7915 7.87497L7.58322 4.66664V11.6666Z" fill={fillColor} />
        )}
      </svg>
    );
  } else {
    return (
      <svg 
        width={iconSize} 
        height={iconSize} 
        viewBox={`0 0 ${iconSize} ${iconSize}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
      >
        {size === 'small' ? (
          <path d="M5.50004 2H6.50004V8L9.25004 5.25L9.96004 5.96L6.00004 9.92L2.04004 5.96L2.75004 5.25L5.50004 8V2Z" fill={fillColor} />
        ) : size === 'large' ? (
          <path d="M7.33355 2.66663H8.66688V10.6666L12.3335 6.99996L13.2802 7.94663L8.00021 13.2266L2.72021 7.94663L3.66688 6.99996L7.33355 10.6666V2.66663Z" fill={fillColor} />
        ) : (
          <path d="M6.41655 2.33337H7.58322V9.33337L10.7915 6.12504L11.6199 6.95337L6.99988 11.5734L2.37988 6.95337L3.20822 6.12504L6.41655 9.33337V2.33337Z" fill={fillColor} />
        )}
      </svg>
    );
  }
};

export const TableHeaderLabel: React.FC<TableHeaderLabelProps> = ({
  label = 'Company',
  size = 'default',
  state = 'default',
  sortDirection = null,
  showHelpIcon = true,
  showSortArrow = true,
  disabled = false,
  className = '',
  onClick,
  onHelpClick,
}) => {
  const headerClasses = [
    'table-header-label',
    `table-header-label--${size}`,
    `table-header-label--${state}`,
    onClick && !disabled ? 'table-header-label--clickable' : '',
    disabled ? 'table-header-label--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleHelpClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!disabled && onHelpClick) {
      onHelpClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if ((event.key === 'Enter' || event.key === ' ') && !disabled && onClick) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={headerClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick && !disabled ? 0 : -1}
      role={onClick ? 'button' : undefined}
      aria-label={onClick ? `Sort by ${label}` : undefined}
      aria-disabled={disabled}
    >
      <span className={`table-header-label__text table-header-label__text--${size}`}>
        {label}
      </span>
      
      {showHelpIcon && (
        <button
          type="button"
          className="table-header-label__help-button"
          onClick={handleHelpClick}
          disabled={disabled}
          aria-label={`Help for ${label}`}
          tabIndex={-1}
        >
          <HelpIcon size={size} state={state} />
        </button>
      )}
      
      {showSortArrow && sortDirection && (
        <div className="table-header-label__sort-icon">
          <ArrowIcon direction={sortDirection} size={size} state={state} />
        </div>
      )}
    </div>
  );
};

export default TableHeaderLabel;
