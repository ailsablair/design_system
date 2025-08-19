import React from 'react';
import './button.css';

export interface ButtonProps {
  /** Button text content */
  children: React.ReactNode;
  /** Size variant */
  size?: 'extra-small' | 'small' | 'default' | 'large';
  /** Button type/variant */
  type?: 'primary' | 'secondary' | 'tertiary';
  /** Visual state (for controlled states) */
  state?: 'default' | 'hover' | 'clicked' | 'focused' | 'loading' | 'disabled';
  /** Outline variant */
  outline?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Leading icon */
  leadingIcon?: React.ReactNode;
  /** Trailing icon */
  trailingIcon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** HTML button type */
  htmlType?: 'button' | 'submit' | 'reset';
  /** Width style */
  width?: 'auto' | 'full';
}

// Default icons for the design system
const AlarmIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M3.5 4.02498L2.2575 2.78831L3.08 1.96581L4.31667 3.20831L3.5 4.02498ZM7.58333 0.583313V2.33331H6.41667V0.583313H7.58333ZM11.7425 2.78831L10.5 4.02498L9.68333 3.20831L10.92 1.96581L11.7425 2.78831ZM2.625 6.12498V7.29165H0.875V6.12498H2.625ZM11.375 6.12498H13.125V7.29165H11.375V6.12498ZM3.5 11.6666H10.5C10.8094 11.6666 11.1062 11.7896 11.325 12.0084C11.5437 12.2271 11.6667 12.5239 11.6667 12.8333H2.33333C2.33333 12.5239 2.45625 12.2271 2.67504 12.0084C2.89383 11.7896 3.19058 11.6666 3.5 11.6666ZM7 2.91665C7.92826 2.91665 8.8185 3.2854 9.47487 3.94177C10.1313 4.59815 10.5 5.48839 10.5 6.41665V11.0833H3.5V6.41665C3.5 5.48839 3.86875 4.59815 4.52513 3.94177C5.1815 3.2854 6.07174 2.91665 7 2.91665Z" fill="currentColor"/>
    </g>
  </svg>
);

const ArrowDownIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M6.41675 3.50002V8.16669L4.37508 6.12502L3.54675 6.95335L7.00008 10.4067L10.4534 6.95335L9.62508 6.12502L7.58341 8.16669V3.50002H6.41675ZM7.00008 12.8334C6.23404 12.8334 5.47549 12.6825 4.76776 12.3893C4.06003 12.0962 3.41697 11.6665 2.87529 11.1248C1.78133 10.0308 1.16675 8.54712 1.16675 7.00002C1.16675 5.45292 1.78133 3.96919 2.87529 2.87523C3.96925 1.78127 5.45298 1.16669 7.00008 1.16669C7.76613 1.16669 8.52467 1.31757 9.2324 1.61072C9.94013 1.90388 10.5832 2.33356 11.1249 2.87523C11.6665 3.41691 12.0962 4.05997 12.3894 4.7677C12.6825 5.47543 12.8334 6.23398 12.8334 7.00002C12.8334 8.54712 12.2188 10.0308 11.1249 11.1248C10.0309 12.2188 8.54718 12.8334 7.00008 12.8334Z" fill="currentColor"/>
    </g>
  </svg>
);

const LoadingIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="button-loading-icon">
    <path d="M7.99992 2.66665V1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998H2.66659C2.66659 6.58549 3.22849 5.22894 4.22868 4.22874C5.22888 3.22855 6.58543 2.66665 7.99992 2.66665Z" fill="currentColor"/>
  </svg>
);

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'default',
  type = 'primary',
  state = 'default',
  outline = false,
  loading = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  onClick,
  className = '',
  htmlType = 'button',
  width = 'auto',
}) => {
  // Determine the actual state
  const actualState = disabled ? 'disabled' : (loading ? 'loading' : state);
  
  // Get icon sizes based on button size
  const getIconSize = () => {
    switch (size) {
      case 'extra-small': return 14;
      case 'small': return 14;
      case 'default': return 18;
      case 'large': return 20;
      default: return 18;
    }
  };

  const iconSize = getIconSize();

  // Handle click
  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  // Determine if we should show content or loading icon
  const isLoadingState = loading || actualState === 'loading';
  
  return (
    <button
      type={htmlType}
      className={`button ${size} ${type} ${actualState} ${outline ? 'outline' : ''} ${width === 'full' ? 'full-width' : ''} ${className}`}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-label={isLoadingState ? 'Loading...' : undefined}
    >
      {isLoadingState ? (
        <div className="button-loading-content">
          <LoadingIcon size={iconSize} />
        </div>
      ) : (
        <div className="button-content">
          {leadingIcon && (
            <span className="button-icon button-leading-icon">
              {leadingIcon}
            </span>
          )}
          <span className="button-text">{children}</span>
          {trailingIcon && (
            <span className="button-icon button-trailing-icon">
              {trailingIcon}
            </span>
          )}
        </div>
      )}
    </button>
  );
};

// Export default icons for convenience
export { AlarmIcon, ArrowDownIcon, LoadingIcon };
