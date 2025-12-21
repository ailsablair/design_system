import React from 'react';
import { 
  Button as MUIButton, 
  CircularProgress, 
  Tooltip,
  Box
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

/**
 * EchoMUIButton Props
 */
export interface EchoMUIButtonProps {
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success';
  /** Button size */
  size?: 'extra-small' | 'small' | 'default' | 'large';
  /** Leading icon */
  leadingIcon?: React.ReactNode;
  /** Trailing icon */
  trailingIcon?: React.ReactNode;
  /** Loading state */
  loading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Full width mode */
  fullWidth?: boolean;
  /** Icon only mode */
  iconOnly?: boolean;
  /** Icon for iconOnly mode */
  icon?: React.ReactNode;
  /** Tooltip text */
  tooltip?: string;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Button content */
  children?: React.ReactNode;
  /** Enhanced interactions (ripple, etc.) */
  enhancedInteractions?: boolean;
  /** Type of button */
  type?: 'button' | 'submit' | 'reset';
  /** Additional CSS classes */
  className?: string;
  /** Custom styles */
  sx?: any;
}

const StyledButton = styled(MUIButton, {
  shouldForwardProp: (prop) => !['echoVariant', 'echoSize', 'iconOnly'].includes(prop as string),
})<{
  echoVariant: string;
  echoSize: string;
  iconOnly?: boolean;
}>(({ echoVariant, echoSize, iconOnly }) => {
  // Color mapping based on Echo tokens
  const colors = {
    primary: {
      main: 'var(--primary-blue-blue)',
      hover: 'var(--primary-blue-blue-700)',
      contrast: 'var(--base-white)',
    },
    secondary: {
      main: 'var(--neutral-gray-gray-100)',
      hover: 'var(--neutral-gray-gray-200)',
      contrast: 'var(--neutral-gray-gray-800)',
      border: '1px solid var(--neutral-gray-gray-300)',
    },
    tertiary: {
      main: 'transparent',
      hover: 'var(--neutral-gray-gray-50)',
      contrast: 'var(--primary-blue-blue)',
    },
    error: {
      main: 'var(--feedback-error-error)',
      hover: 'var(--feedback-error-error-700)',
      contrast: 'var(--base-white)',
    },
    success: {
      main: 'var(--feedback-success-success)',
      hover: 'var(--feedback-success-success-700)',
      contrast: 'var(--base-white)',
    },
  };

  const selectedColor = colors[echoVariant as keyof typeof colors] || colors.primary;

  // Size mapping
  const sizes = {
    'extra-small': {
      padding: '4px 8px',
      fontSize: 'var(--type-size-xs, 12px)',
      minHeight: '24px',
    },
    'small': {
      padding: '6px 12px',
      fontSize: 'var(--type-size-sm, 14px)',
      minHeight: '32px',
    },
    'default': {
      padding: '10px 16px',
      fontSize: 'var(--type-size-base, 16px)',
      minHeight: '40px',
    },
    'large': {
      padding: '12px 24px',
      fontSize: 'var(--type-size-lg, 18px)',
      minHeight: '48px',
    },
  };

  const selectedSize = sizes[echoSize as keyof typeof sizes] || sizes.default;

  return {
    textTransform: 'none',
    fontFamily: 'var(--type-typeface-archivo)',
    fontWeight: 500,
    borderRadius: 'var(--spacing-radius-4px)',
    padding: selectedSize.padding,
    fontSize: selectedSize.fontSize,
    minHeight: selectedSize.minHeight,
    minWidth: iconOnly ? selectedSize.minHeight : 'auto',
    backgroundColor: selectedColor.main,
    color: selectedColor.contrast,
    border: (selectedColor as any).border || 'none',
    transition: 'all var(--transition-fast, 0.2s)',
    boxShadow: 'none',

    '&:hover': {
      backgroundColor: selectedColor.hover,
      boxShadow: 'var(--shadow-sm)',
    },

    '&:active': {
      transform: 'scale(0.98)',
    },

    '&.Mui-disabled': {
      backgroundColor: 'var(--neutral-gray-gray-100)',
      color: 'var(--neutral-gray-gray-400)',
      border: 'none',
    },

    ...(iconOnly && {
      padding: 0,
      borderRadius: '50%',
    }),
  };
});

export const EchoMUIButton: React.FC<EchoMUIButtonProps> = ({
  variant = 'primary',
  size = 'default',
  leadingIcon,
  trailingIcon,
  loading = false,
  disabled = false,
  fullWidth = false,
  iconOnly = false,
  icon,
  tooltip,
  onClick,
  children,
  enhancedInteractions = true,
  type = 'button',
  className,
  sx,
}) => {
  const buttonContent = (
    <StyledButton
      type={type}
      echoVariant={variant}
      echoSize={size}
      iconOnly={iconOnly}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      onClick={onClick}
      disableRipple={!enhancedInteractions}
      startIcon={!loading && !iconOnly ? leadingIcon : null}
      endIcon={!loading && !iconOnly ? trailingIcon : null}
      className={className}
      sx={sx}
    >
      {loading ? (
        <CircularProgress size={20} color="inherit" />
      ) : iconOnly ? (
        icon
      ) : (
        children
      )}
    </StyledButton>
  );

  if (tooltip) {
    return (
      <Tooltip title={tooltip} arrow>
        <Box component="span" sx={{ display: fullWidth ? 'block' : 'inline-block' }}>
          {buttonContent}
        </Box>
      </Tooltip>
    );
  }

  return buttonContent;
};
