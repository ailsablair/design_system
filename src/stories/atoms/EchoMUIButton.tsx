import React from 'react';
import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Approach 1: Styled Components with Echo Tokens
 * 
 * Use MUI Button as foundation, completely override styling with Echo tokens
 */

interface EchoMUIButtonProps extends Omit<MUIButtonProps, 'size' | 'color'> {
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
}

const StyledEchoButton = styled(MUIButton, {
  shouldForwardProp: (prop) => !['variant', 'size', 'leadingIcon', 'trailingIcon'].includes(prop as string),
})<{ variant?: string; size?: string }>(({ theme, variant = 'primary', size = 'default' }) => {
  
  // Size mappings using Echo tokens
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
  };

  // Variant mappings using Echo tokens
  const variantStyles = {
    primary: {
      backgroundColor: 'var(--primary-blue-blue)',
      color: 'var(--base-white)',
      border: '1px solid var(--primary-blue-blue)',
      
      '&:hover': {
        backgroundColor: 'var(--primary-blue-blue-600)',
        borderColor: 'var(--primary-blue-blue-600)',
      },
      
      '&:active': {
        backgroundColor: 'var(--primary-blue-blue-700)',
        borderColor: 'var(--primary-blue-blue-700)',
      },
      
      '&:focus-visible': {
        outline: '2px solid var(--primary-blue-blue)',
        outlineOffset: '2px',
      },
    },
    secondary: {
      backgroundColor: 'var(--base-white)',
      color: 'var(--primary-blue-blue)',
      border: '1px solid var(--primary-blue-blue)',
      
      '&:hover': {
        backgroundColor: 'var(--primary-blue-blue-50)',
        borderColor: 'var(--primary-blue-blue-600)',
      },
      
      '&:active': {
        backgroundColor: 'var(--primary-blue-blue-100)',
        borderColor: 'var(--primary-blue-blue-700)',
      },
    },
    tertiary: {
      backgroundColor: 'transparent',
      color: 'var(--primary-blue-blue)',
      border: '1px solid transparent',
      
      '&:hover': {
        backgroundColor: 'var(--primary-blue-blue-50)',
      },
      
      '&:active': {
        backgroundColor: 'var(--primary-blue-blue-100)',
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--neutral-gray-gray-700)',
      border: '1px solid var(--neutral-gray-gray-300)',
      
      '&:hover': {
        backgroundColor: 'var(--neutral-gray-gray-50)',
        borderColor: 'var(--neutral-gray-gray-400)',
      },
    },
    error: {
      backgroundColor: 'var(--status-red)',
      color: 'var(--base-white)',
      border: '1px solid var(--status-red)',
      
      '&:hover': {
        backgroundColor: 'var(--status-dark-red)',
        borderColor: 'var(--status-dark-red)',
      },
    },
    warning: {
      backgroundColor: 'var(--status-orange)',
      color: 'var(--base-white)',
      border: '1px solid var(--status-orange)',
      
      '&:hover': {
        backgroundColor: 'var(--status-dark-orange)',
        borderColor: 'var(--status-dark-orange)',
      },
    },
    success: {
      backgroundColor: 'var(--status-green)',
      color: 'var(--base-white)',
      border: '1px solid var(--status-green)',
      
      '&:hover': {
        backgroundColor: 'var(--status-dark-green)',
        borderColor: 'var(--status-dark-green)',
      },
    },
  };

  return {
    // Base styles using Echo tokens
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
    
    // Apply size styles
    ...sizeStyles[size as keyof typeof sizeStyles],
    
    // Apply variant styles
    ...variantStyles[variant as keyof typeof variantStyles],
    
    // Disabled state
    '&:disabled': {
      opacity: 'var(--opacity-disabled)',
      cursor: 'not-allowed',
      backgroundColor: 'var(--neutral-gray-gray-100)',
      color: 'var(--neutral-gray-gray-400)',
      borderColor: 'var(--neutral-gray-gray-200)',
    },
    
    // Remove MUI's default ripple effect styling if you want custom
    '& .MuiTouchRipple-root': {
      color: 'currentColor',
    },
  };
});

export const EchoMUIButton: React.FC<EchoMUIButtonProps> = ({
  children,
  variant = 'primary',
  size = 'default',
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledEchoButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      {...props}
    >
      {leadingIcon && <span style={{ display: 'flex', alignItems: 'center' }}>{leadingIcon}</span>}
      {children}
      {trailingIcon && <span style={{ display: 'flex', alignItems: 'center' }}>{trailingIcon}</span>}
    </StyledEchoButton>
  );
};

export default EchoMUIButton;
