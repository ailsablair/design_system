import React from 'react';
import './button.css';

export interface ButtonProps {
  /**
   * The text content of the button
   */
  children: React.ReactNode;
  /**
   * Button size variant
   */
  size?: 'extra-small' | 'small' | 'default' | 'large';
  /**
   * Button type/variant
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'error' | 'warning' | 'info' | 'success';
  /**
   * Visual state (for controlled states)
   */
  state?: 'default' | 'hover' | 'clicked' | 'focused' | 'loading' | 'disabled';
  /**
   * Alt variant
   */
  alt?: boolean;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Width style
   */
  width?: 'auto' | 'full';
  /**
   * Icon-only variant
   */
  iconOnly?: boolean;
  /**
   * Leading icon
   */
  leadingIcon?: React.ReactNode;
  /**
   * Trailing icon
   */
  trailingIcon?: React.ReactNode;
  /**
   * Position in a group/stack
   */
  position?: 'top' | 'middle' | 'bottom' | 'single';
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'default',
  variant = 'primary',
  state = 'default',
  alt = false,
  loading = false,
  disabled = false,
  width = 'auto',
  iconOnly = false,
  leadingIcon,
  trailingIcon,
  position = 'single',
  onClick,
  className = '',
  ...props
}) => {
  const isDisabled = disabled || loading || state === 'disabled';
  
  const rootClasses = [
    'button',
    variant,
    size,
    state !== 'default' ? state : '',
    alt ? 'alt' : '',
    width === 'full' ? 'full-width' : '',
    iconOnly ? 'icon-only' : '',
    `pos-${position}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={rootClasses}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <span className="button-loader" aria-hidden="true" />
      ) : (
        <>
          {leadingIcon && <span className="button-icon leading">{leadingIcon}</span>}
          {!iconOnly && <span className="button-text">{children}</span>}
          {trailingIcon && <span className="button-icon trailing">{trailingIcon}</span>}
        </>
      )}
    </button>
  );
};
