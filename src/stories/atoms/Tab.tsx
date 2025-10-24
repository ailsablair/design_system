import React from 'react';
import './tab.css';

export interface TabProps {
  /** Tab text content */
  children?: React.ReactNode;
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Tab type/variant */
  type?: 'default' | 'secondary' | 'contained' | 'dark-contained';
  /** Visual state */
  state?: 'default' | 'hover' | 'active' | 'disabled';
  /** Disabled state */
  disabled?: boolean;
  /** Leading icon */
  leadingIcon?: React.ReactNode;
  /** Trailing icon */
  trailingIcon?: React.ReactNode;
  /** Badge/notification number */
  badge?: number | string;
  /** Show badge */
  showBadge?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Active state (controlled) */
  active?: boolean;
}

// Default icons for tabs (Figma exact SVGs)
const HomeIcon: React.FC<{ size: number }> = ({ size }) => {
  // Scale viewBox based on size for pixel-perfect rendering
  if (size === 16) {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
          <path d="M6.66659 13.3333V9.33333H9.33325V13.3333H12.6666V8H14.6666L7.99992 2L1.33325 8H3.33325V13.3333H6.66659Z" fill="currentColor"/>
        </g>
      </svg>
    );
  } else if (size === 18) {
    return (
      <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
          <path d="M7.5 15V10.5H10.5V15H14.25V9H16.5L9 2.25L1.5 9H3.75V15H7.5Z" fill="currentColor"/>
        </g>
      </svg>
    );
  } else {
    // size === 22 (large)
    return (
      <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
          <path d="M9.16658 18.3333V12.8333H12.8333V18.3333H17.4166V11H20.1666L10.9999 2.75L1.83325 11H4.58325V18.3333H9.16658Z" fill="currentColor"/>
        </g>
      </svg>
    );
  }
};

const ChevronDownIcon: React.FC<{ size: number }> = ({ size }) => {
  // Scale viewBox based on size for pixel-perfect rendering
  if (size === 16) {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
          <path d="M4.94 5.71997L8 8.77997L11.06 5.71997L12 6.66664L8 10.6666L4 6.66664L4.94 5.71997Z" fill="currentColor"/>
        </g>
      </svg>
    );
  } else if (size === 18) {
    return (
      <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
          <path d="M5.5575 6.435L9 9.8775L12.4425 6.435L13.5 7.5L9 12L4.5 7.5L5.5575 6.435Z" fill="currentColor"/>
        </g>
      </svg>
    );
  } else {
    // size === 22 (large)
    return (
      <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6">
          <path d="M6.7925 7.86499L11 12.0725L15.2075 7.86499L16.5 9.16666L11 14.6667L5.5 9.16666L6.7925 7.86499Z" fill="currentColor"/>
        </g>
      </svg>
    );
  }
};

export const Tab: React.FC<TabProps> = ({
  children = 'Tab label',
  size = 'default',
  type = 'default',
  state = 'default',
  disabled = false,
  leadingIcon,
  trailingIcon,
  badge,
  showBadge = true,
  onClick,
  className = '',
  active = false,
}) => {
  // Determine the actual state
  const actualState = disabled ? 'disabled' : (active ? 'active' : state);
  
  // Get icon sizes based on tab size (Figma exact specifications)
  const getIconSize = () => {
    switch (size) {
      case 'small': return 16;
      case 'default': return 18;
      case 'large': return 22;
      default: return 18;
    }
  };

  // Get badge size based on tab size (Figma specifications)
  const getBadgeSize = () => {
    switch (size) {
      case 'small': return 'x-small';
      case 'default': return 'small';
      case 'large': return 'default';
      default: return 'small';
    }
  };

  const iconSize = getIconSize();
  const badgeSize = getBadgeSize();

  // Handle click
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  // Use provided icons or defaults
  const leadingIconElement = leadingIcon || <HomeIcon size={iconSize} />;
  const trailingIconElement = trailingIcon || <ChevronDownIcon size={iconSize} />;

  // For contained and dark-contained types, render as a self-contained button-like component
  if (type === 'contained' || type === 'dark-contained') {
    return (
      <button
        className={`tab-contained ${size} ${type} ${actualState} ${className}`}
        onClick={handleClick}
        disabled={disabled}
        role="tab"
        aria-selected={actualState === 'active'}
        aria-disabled={disabled}
        type="button"
      >
        <div className="tab-contained-content">
          {leadingIcon && (
            <span className="tab-contained-icon tab-contained-leading-icon">
              {leadingIconElement}
            </span>
          )}
          
          <span className="tab-contained-text">{children}</span>

          {trailingIcon && (
            <span className="tab-contained-icon tab-contained-trailing-icon">
              {trailingIconElement}
            </span>
          )}

          {showBadge && badge && (
            <span className={`tab-contained-badge ${badgeSize}`}>
              {badge}
            </span>
          )}
        </div>
      </button>
    );
  }

  // For default and secondary types, render as traditional tabs with bottom line
  return (
    <div
      className={`tab-wrapper ${size} ${type} ${actualState} ${className}`}
      onClick={handleClick}
      role="tab"
      aria-selected={actualState === 'active'}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <div className="tab-label">
        <div className="tab-label-content">
          <span className="tab-icon tab-leading-icon">
            {leadingIconElement}
          </span>

          <span className="tab-text">{children}</span>

          <span className="tab-icon tab-trailing-icon">
            {trailingIconElement}
          </span>

          {showBadge && badge && (
            <div className={`tab-badge ${badgeSize} ${type}`}>
              <div className="tab-badge-number">{badge}</div>
            </div>
          )}
        </div>
      </div>

      <div className="tab-spacer"></div>

      <div className={`tab-line ${size} ${type} ${actualState}`}></div>
    </div>
  );
};

// Export icons for convenience
export { HomeIcon, ChevronDownIcon };
