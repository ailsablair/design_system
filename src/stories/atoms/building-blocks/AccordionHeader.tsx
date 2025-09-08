import React from 'react';
import './accordionHeader.css';

export interface AccordionHeaderProps {
  /** Size of the accordion header */
  size?: 'small' | 'default' | 'large';
  /** Icon style for expand/collapse */
  iconStyle?: 'plus' | 'chevron';
  /** Position variant affecting visual alignment */
  position?: 'top' | 'middle' | 'bottom';
  /** Content type variant */
  contentType?: 'default' | 'header';
  /** Whether the accordion is open */
  open?: boolean;
  /** Visual state */
  state?: 'default' | 'hover' | 'selected';
  /** Title text content */
  title?: string;
  /** Custom bell notification icon */
  bellIcon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Custom CSS class */
  className?: string;
  /** Accessibility label */
  'aria-label'?: string;
  /** Whether this header is part of a group */
  grouped?: boolean;
}

/**
 * AccordionHeader component implementing exact Figma design specifications
 * 
 * This component represents the header portion of an accordion with:
 * - Bell notification icon on the left
 * - Title text in the middle  
 * - Expand/collapse icon on the right
 * - Multiple size, state, and style variants
 * - Pixel-perfect match to Figma design
 */
export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  size = 'default',
  iconStyle = 'plus',
  position = 'middle',
  contentType = 'default',
  open = false,
  state = 'default',
  title = 'This is a section title or a long question taking up a lot of space...',
  bellIcon,
  onClick,
  className = '',
  'aria-label': ariaLabel,
  grouped = false,
}) => {
  // Generate CSS classes
  const headerClasses = [
    'accordion-header',
    `accordion-header--size-${size}`,
    `accordion-header--icon-${iconStyle}`,
    `accordion-header--position-${position}`,
    `accordion-header--content-${contentType}`,
    open ? 'accordion-header--open' : 'accordion-header--closed',
    `accordion-header--state-${state}`,
    grouped && 'accordion-header--grouped',
    onClick && 'accordion-header--interactive',
    className
  ].filter(Boolean).join(' ');

  // Bell notification icon
  const BellRingIcon = () => (
    <svg 
      className="accordion-header__bell-icon"
      viewBox="0 0 18 18" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <path 
          d="M15.75 14.25V15H2.25V14.25L3.75 12.75V8.25C3.75 5.925 5.2725 3.8775 7.5 3.2175C7.5 3.1425 7.5 3.075 7.5 3C7.5 2.60218 7.65804 2.22064 7.93934 1.93934C8.22064 1.65804 8.60218 1.5 9 1.5C9.39782 1.5 9.77936 1.65804 10.0607 1.93934C10.342 2.22064 10.5 2.60218 10.5 3C10.5 3.075 10.5 3.1425 10.5 3.2175C12.7275 3.8775 14.25 5.925 14.25 8.25V12.75L15.75 14.25ZM10.5 15.75C10.5 16.1478 10.342 16.5294 10.0607 16.8107C9.77936 17.092 9.39782 17.25 9 17.25C8.60218 17.25 8.22064 17.092 7.93934 16.8107C7.65804 16.5294 7.5 16.1478 7.5 15.75M14.8125 2.3925L13.7475 3.4575C15.03 4.725 15.75 6.45 15.75 8.25H17.25C17.25 6.0525 16.38 3.9375 14.8125 2.3925ZM0.75 8.25H2.25C2.25 6.45 2.97 4.725 4.2525 3.4575L3.1875 2.3925C1.62 3.9375 0.75 6.0525 0.75 8.25Z" 
          fill="#2F42BD"
        />
      </g>
    </svg>
  );

  // Plus icon
  const PlusIcon = () => (
    <svg 
      className="accordion-header__toggle-icon"
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M15.8334 10.8332H10.8334V15.8332H9.16675V10.8332H4.16675V9.1665H9.16675V4.1665H10.8334V9.1665H15.8334V10.8332Z" 
        fill="#2F42BD"
      />
    </svg>
  );

  // Minus icon
  const MinusIcon = () => (
    <svg 
      className="accordion-header__toggle-icon"
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M15.8334 10.8332H4.16675V9.1665H15.8334V10.8332Z" 
        fill="#2F42BD"
      />
    </svg>
  );

  // Chevron down icon
  const ChevronDownIcon = () => (
    <svg 
      className="accordion-header__toggle-icon"
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M6.175 7.1499L10 10.9749L13.825 7.1499L15 8.33324L10 13.3332L5 8.33324L6.175 7.1499Z" 
        fill="#2F42BD"
      />
    </svg>
  );

  // Chevron up icon
  const ChevronUpIcon = () => (
    <svg 
      className="accordion-header__toggle-icon"
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M6.175 12.8415L10 9.02484L13.825 12.8415L15 11.6665L10 6.6665L5 11.6665L6.175 12.8415Z" 
        fill="#2F42BD"
      />
    </svg>
  );

  // Get the appropriate toggle icon
  const getToggleIcon = () => {
    if (iconStyle === 'plus') {
      return open ? <MinusIcon /> : <PlusIcon />;
    }
    return open ? <ChevronUpIcon /> : <ChevronDownIcon />;
  };

  // Handle click
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // Handle keyboard interaction
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (onClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={headerClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={ariaLabel || `${title}${open ? ' (expanded)' : ' (collapsed)'}`}
      aria-expanded={onClick ? open : undefined}
    >
      <div className="accordion-header__content">
        {/* Left bell icon */}
        <div className="accordion-header__bell">
          {bellIcon || <BellRingIcon />}
        </div>

        {/* Main content area */}
        <div className="accordion-header__main">
          <div className="accordion-header__title">
            {title}
          </div>
        </div>

        {/* Right toggle icon */}
        <div className="accordion-header__toggle">
          {getToggleIcon()}
        </div>
      </div>
    </div>
  );
};

export default AccordionHeader;
