import React from 'react';
import { Button as MUIButton, Tooltip } from '@mui/material';
import type { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

/**
 * Approach 1: Styled Components with Echo Tokens
 *
 * Use MUI Button as foundation, completely override styling with Echo tokens
 */

interface EchoMUIButtonProps extends Omit<MUIButtonProps, 'size' | 'color' | 'variant'> {
  /** Echo button variants */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'error' | 'warning' | 'success';
  /** Echo size variants */
  size?: 'extra-small' | 'small' | 'default' | 'large';
  /** Leading icon */
  leadingIcon?: React.ReactNode;
  /** Trailing icon */
  trailingIcon?: React.ReactNode;
  /** Full width */
  fullWidth?: boolean;
  /** Icon for icon-only variant */
  icon?: React.ReactNode;
  /** Icon-only variant (removes text content) */
  iconOnly?: boolean;
  /** Tooltip text for accessibility (required for icon-only buttons) */
  tooltip?: string;
}

const StyledEchoButton = styled(MUIButton, {
  shouldForwardProp: (prop) => !['echoVariant', 'echoSize', 'leadingIcon', 'trailingIcon'].includes(prop as string),
})<{ echoVariant?: string; echoSize?: string }>(({ echoVariant = 'primary', echoSize = 'default' }) => {
  const sizeStyles = {
    'extra-small': {
      padding: 'var(--spacing-sizing-4px) var(--spacing-sizing-8px)',
      fontSize: 'var(--type-size-xs)',
      minHeight: 'var(--sizing-button-height-extra-small)',
      gap: 'var(--spacing-sizing-4px)',
    },
    small: {
      padding: 'var(--spacing-sizing-6px) var(--spacing-sizing-12px)',
      fontSize: 'var(--type-size-sm)',
      minHeight: 'var(--sizing-button-height-small)',
      gap: 'var(--spacing-sizing-6px)',
    },
    default: {
      padding: 'var(--spacing-sizing-8px) var(--spacing-sizing-16px)',
      fontSize: 'var(--type-size-sm)',
      minHeight: 'var(--sizing-button-height-default)',
      gap: 'var(--spacing-sizing-8px)',
    },
    large: {
      padding: 'var(--spacing-sizing-12px) var(--spacing-sizing-20px)',
      fontSize: 'var(--type-size-base)',
      minHeight: 'var(--sizing-button-height-large)',
      gap: 'var(--spacing-sizing-8px)',
    },
  } as const;

  const variantStyles = {
    primary: {
      backgroundColor: '#2F42BD',
      color: '#FFFFFF',
      border: '1px solid #2F42BD',

      '&:hover': {
        backgroundColor: '#253699',
        borderColor: '#253699',
      },

      '&:active': {
        backgroundColor: '#1B2B75',
        borderColor: '#1B2B75',
      },

      '&:focus-visible': {
        outline: '2px solid #2F42BD',
        outlineOffset: '2px',
      },
    },
    secondary: {
      backgroundColor: '#FFFFFF',
      color: '#2F42BD',
      border: '1px solid #2F42BD',

      '&:hover': {
        backgroundColor: '#F9F9FE',
        borderColor: '#253699',
      },

      '&:active': {
        backgroundColor: '#E8EBFA',
        borderColor: '#1B2B75',
      },
    },
    tertiary: {
      backgroundColor: 'transparent',
      color: '#2F42BD',
      border: '1px solid transparent',

      '&:hover': {
        backgroundColor: '#F9F9FE',
      },

      '&:active': {
        backgroundColor: '#E8EBFA',
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#374151',
      border: '1px solid #D2D5DA',

      '&:hover': {
        backgroundColor: '#F9FAFB',
        borderColor: '#9CA3AF',
      },
    },
    error: {
      backgroundColor: '#CE2031',
      color: '#FFFFFF',
      border: '1px solid #CE2031',

      '&:hover': {
        backgroundColor: '#B91C1C',
        borderColor: '#B91C1C',
      },
    },
    warning: {
      backgroundColor: '#F4A403',
      color: '#FFFFFF',
      border: '1px solid #F4A403',

      '&:hover': {
        backgroundColor: '#D07C06',
        borderColor: '#D07C06',
      },
    },
    success: {
      backgroundColor: '#70CC67',
      color: '#FFFFFF',
      border: '1px solid #70CC67',

      '&:hover': {
        backgroundColor: '#227F1A',
        borderColor: '#227F1A',
      },
    },
  } as const;

  return {
    fontFamily: 'var(--type-typeface-archivo)',
    fontWeight: 'var(--type-weight-medium)',
    borderRadius: 'var(--spacing-radius-4px)',
    textTransform: 'none',
    transition: 'all var(--transition-fast)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
    ...sizeStyles[echoSize as keyof typeof sizeStyles],
    ...variantStyles[echoVariant as keyof typeof variantStyles],
    '&:disabled': {
      opacity: 'var(--opacity-disabled)',
      cursor: 'not-allowed',
      backgroundColor: '#F3F4F6',
      color: '#9CA3AF',
      borderColor: '#E5E7EB',
    },
    '& .MuiTouchRipple-root': {
      color: 'currentColor',
    },
  };
});

const IconWrapper = styled('span')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const EchoMUIButton: React.FC<EchoMUIButtonProps> = ({
  children,
  variant = 'primary',
  size = 'default',
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  icon,
  iconOnly = false,
  tooltip,
  ...props
}) => {
  if (iconOnly && !tooltip && !props['aria-label']) {
    console.warn(
      'EchoMUIButton: Icon-only buttons should have a tooltip or aria-label for accessibility',
    );
  }

  const buttonContent = (
    <StyledEchoButton
      echoVariant={variant}
      echoSize={size}
      fullWidth={fullWidth}
      aria-label={iconOnly ? (tooltip || props['aria-label']) : props['aria-label']}
      {...props}
    >
      {iconOnly ? (
        icon && <IconWrapper>{icon}</IconWrapper>
      ) : (
        <>
          {leadingIcon && <IconWrapper>{leadingIcon}</IconWrapper>}
          {children}
          {trailingIcon && <IconWrapper>{trailingIcon}</IconWrapper>}
        </>
      )}
    </StyledEchoButton>
  );

  if (tooltip) {
    return (
      <Tooltip title={tooltip} arrow>
        {buttonContent}
      </Tooltip>
    );
  }

  return buttonContent;
};

export default EchoMUIButton;
