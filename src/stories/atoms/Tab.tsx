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

// Default icons for tabs
const HomeIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="currentColor"/>
  </svg>
);

const ChevronDownIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="currentColor"/>
  </svg>
);

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
  
  // Get icon sizes based on tab size
  const getIconSize = () => {
    switch (size) {
      case 'small': return 14;
      case 'default': return 16;
      case 'large': return 20;
      default: return 16;
    }
  };

  // Get badge size based on tab size
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

  return (
    <div className={`tab-container ${className}`}>
      <div
        className={`tab ${size} ${type} ${actualState}`}
        onClick={handleClick}
        role="tab"
        aria-selected={actualState === 'active'}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        <div className="tab-content">
          {defaultLeadingIcon && (
            <span className="tab-icon tab-leading-icon">
              {defaultLeadingIcon}
            </span>
          )}
          
          <div className="tab-label">
            <span className="tab-text">{children}</span>
          </div>

          {defaultTrailingIcon && (
            <span className="tab-icon tab-trailing-icon">
              {defaultTrailingIcon}
            </span>
          )}

          {showBadge && badge && (
            <div className={`tab-badge ${badgeSize} ${type}`}>
              <span className="tab-badge-text">{badge}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="tab-spacer"></div>
      <div className={`tab-line ${type} ${actualState}`}></div>
    </div>
  );
};

// Export icons for convenience
export { HomeIcon, ChevronDownIcon };
