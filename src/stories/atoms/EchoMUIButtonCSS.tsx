import React from 'react';
import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material';
import './echoMUIButton.css';

/**
 * Approach 2: CSS Classes with Echo Tokens
 * 
 * Use MUI Button as foundation, apply Echo styling via CSS classes
 * This approach is similar to your current Button component structure
 */

interface EchoMUIButtonCSSProps extends Omit<MUIButtonProps, 'size' | 'color' | 'variant'> {
  /** Echo button variants */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'error' | 'warning' | 'success';
  /** Echo size variants */
  size?: 'extra-small' | 'small' | 'default' | 'large';
  /** Leading icon */
  leadingIcon?: React.ReactNode;
  /** Trailing icon */
  trailingIcon?: React.ReactNode;
  /** Loading state */
  loading?: boolean;
  /** Icon only variant */
  iconOnly?: boolean;
  /** Icon for icon-only variant */
  icon?: React.ReactNode;
}

export const EchoMUIButtonCSS: React.FC<EchoMUIButtonCSSProps> = ({
  children,
  variant = 'primary',
  size = 'default',
  leadingIcon,
  trailingIcon,
  loading = false,
  iconOnly = false,
  icon,
  disabled = false,
  className = '',
  ...props
}) => {
  // Build CSS classes
  const classes = [
    'echo-mui-button',
    `echo-mui-button--${variant}`,
    `echo-mui-button--${size}`,
    loading && 'echo-mui-button--loading',
    iconOnly && 'echo-mui-button--icon-only',
    disabled && 'echo-mui-button--disabled',
    className,
  ].filter(Boolean).join(' ');

  // Content rendering logic
  const renderContent = () => {
    if (loading) {
      return (
        <div className="echo-mui-button__loading-content">
          <div className="echo-mui-button__spinner" />
          {children}
        </div>
      );
    }

    if (iconOnly) {
      return (
        <div className="echo-mui-button__icon-only-content">
          {icon}
        </div>
      );
    }

    return (
      <div className="echo-mui-button__content">
        {leadingIcon && (
          <span className="echo-mui-button__icon echo-mui-button__icon--leading">
            {leadingIcon}
          </span>
        )}
        {children && (
          <span className="echo-mui-button__text">
            {children}
          </span>
        )}
        {trailingIcon && (
          <span className="echo-mui-button__icon echo-mui-button__icon--trailing">
            {trailingIcon}
          </span>
        )}
      </div>
    );
  };

  return (
    <MUIButton
      className={classes}
      disabled={disabled || loading}
      disableRipple={false} // Keep MUI's ripple effect
      disableElevation={true} // Remove MUI's elevation
      {...props}
    >
      {renderContent()}
    </MUIButton>
  );
};

export default EchoMUIButtonCSS;
