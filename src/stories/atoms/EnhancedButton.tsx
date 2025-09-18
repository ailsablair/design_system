import React from 'react';
import { Button as MUIButton, ButtonProps as MUIButtonProps, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { echoTokens } from '../foundations/MUIThemeProvider';

// Import MUI icons instead of custom ones
import {
  NotificationsIcon,
  ArrowDownwardIcon,
  CircularProgress,
  WarningAmberIcon,
  CloseIcon,
  ExpandLessIcon,
  InfoOutlinedIcon,
} from '../foundations/MaterialUIIcons';

export interface EnhancedButtonProps {
  /** Button text content */
  children?: React.ReactNode;
  /** Size variant */
  size?: 'extra-small' | 'small' | 'default' | 'large';
  /** Button type/variant */
  type?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'error' | 'warning' | 'info' | 'success';
  /** Visual state (for controlled states) */
  state?: 'default' | 'hover' | 'clicked' | 'focused' | 'loading' | 'disabled';
  /** Outline variant */
  outline?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Leading icon (can be MUI icon component) */
  leadingIcon?: React.ReactNode;
  /** Trailing icon (can be MUI icon component) */
  trailingIcon?: React.ReactNode;
  /** Icon-only variant */
  iconOnly?: boolean;
  /** Icon for icon-only variant (can be MUI icon component) */
  icon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** HTML button type */
  htmlType?: 'button' | 'submit' | 'reset';
  /** Width style */
  width?: 'auto' | 'full';
  /** Tooltip text for accessibility */
  tooltip?: string;
  /** Enable enhanced MUI interactions (ripple effects, better focus, etc.) */
  enhancedInteractions?: boolean;
}

// Styled MUI Button using Echo design tokens
const StyledEchoButton = styled(MUIButton, {
  shouldForwardProp: (prop) => 
    !['echoSize', 'echoType', 'echoOutline', 'echoWidth'].includes(prop as string),
})<{
  echoSize: 'extra-small' | 'small' | 'default' | 'large';
  echoType: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'error' | 'warning' | 'info' | 'success';
  echoOutline: boolean;
  echoWidth: 'auto' | 'full';
}>(({ theme, echoSize, echoType, echoOutline, echoWidth }) => {
  
  // Size-based styles
  const sizeStyles = {
    'extra-small': {
      fontSize: echoTokens.typography.fontSize.sm,
      padding: `${echoTokens.spacing[2]} ${echoTokens.spacing[8]}`,
      minHeight: 'var(--sizing-button-height-xs)',
      minWidth: 'var(--sizing-button-min-width-xs)',
    },
    'small': {
      fontSize: echoTokens.typography.fontSize.sm,
      padding: `${echoTokens.spacing[4]} ${echoTokens.spacing[12]}`,
      minHeight: 'var(--sizing-button-height-sm)',
      minWidth: 'var(--sizing-button-min-width-sm)',
    },
    'default': {
      fontSize: echoTokens.typography.fontSize.base,
      padding: `${echoTokens.spacing[8]} ${echoTokens.spacing[16]}`,
      minHeight: 'var(--sizing-button-height-default)',
      minWidth: 'var(--sizing-button-min-width-default)',
    },
    'large': {
      fontSize: echoTokens.typography.fontSize.lg,
      padding: `${echoTokens.spacing[12]} ${echoTokens.spacing[20]}`,
      minHeight: 'var(--sizing-button-height-lg)',
      minWidth: 'var(--sizing-button-min-width-lg)',
    },
  };

  // Type-based styles
  const getTypeStyles = () => {
    const baseStyles = {
      primary: {
        background: echoTokens.colors.primary.blue,
        color: echoTokens.colors.base.white,
        borderColor: echoTokens.colors.primary.darkBlue,
        '&:hover': {
          background: echoTokens.colors.primary.darkBlue,
          transform: 'translateY(-1px)',
          boxShadow: echoTokens.shadows.md,
        },
      },
      secondary: {
        background: echoTokens.colors.base.white,
        color: echoTokens.colors.primary.blue,
        borderColor: echoTokens.colors.primary.blue,
        '&:hover': {
          background: echoTokens.colors.primary.blue50,
          borderColor: echoTokens.colors.primary.darkBlue,
          transform: 'translateY(-1px)',
        },
      },
      tertiary: {
        background: echoTokens.colors.neutral.gray100,
        color: echoTokens.colors.base.black,
        borderColor: echoTokens.colors.neutral.gray300,
        '&:hover': {
          background: echoTokens.colors.neutral.gray200,
          transform: 'translateY(-1px)',
        },
      },
      ghost: {
        background: 'transparent',
        color: echoTokens.colors.base.black,
        borderColor: echoTokens.colors.neutral.gray400,
        '&:hover': {
          background: echoTokens.colors.neutral.gray50,
          borderColor: echoTokens.colors.neutral.gray500,
          transform: 'translateY(-1px)',
        },
      },
      error: {
        background: echoTokens.colors.status.red,
        color: echoTokens.colors.base.white,
        borderColor: 'var(--status-red-600)',
        '&:hover': {
          background: 'var(--status-red-600)',
          transform: 'translateY(-1px)',
          boxShadow: echoTokens.shadows.md,
        },
      },
      warning: {
        background: echoTokens.colors.status.orange,
        color: echoTokens.colors.base.white,
        borderColor: 'var(--status-orange-600)',
        '&:hover': {
          background: 'var(--status-orange-600)',
          transform: 'translateY(-1px)',
          boxShadow: echoTokens.shadows.md,
        },
      },
      info: {
        background: echoTokens.colors.status.infoBlue,
        color: echoTokens.colors.base.white,
        borderColor: echoTokens.colors.primary.blue700,
        '&:hover': {
          background: echoTokens.colors.primary.blue700,
          transform: 'translateY(-1px)',
          boxShadow: echoTokens.shadows.md,
        },
      },
      success: {
        background: echoTokens.colors.status.green,
        color: echoTokens.colors.base.white,
        borderColor: 'var(--status-green-600)',
        '&:hover': {
          background: 'var(--status-green-600)',
          transform: 'translateY(-1px)',
          boxShadow: echoTokens.shadows.md,
        },
      },
    };

    if (echoOutline) {
      // Convert to outline versions
      const outlineStyles = { ...baseStyles[echoType] };
      if (echoType === 'primary' || echoType === 'error' || echoType === 'warning' || echoType === 'info' || echoType === 'success') {
        outlineStyles.background = 'transparent';
        outlineStyles.color = baseStyles[echoType].background;
        outlineStyles['&:hover'] = {
          ...outlineStyles['&:hover'],
          background: baseStyles[echoType].background,
          color: baseStyles[echoType].color,
        };
      }
      return outlineStyles;
    }

    return baseStyles[echoType];
  };

  return {
    ...sizeStyles[echoSize],
    ...getTypeStyles(),
    fontFamily: echoTokens.typography.fontFamily.archivo,
    fontWeight: echoTokens.typography.fontWeight.medium,
    borderRadius: echoTokens.borderRadius[4],
    border: `1px solid`,
    textTransform: 'none',
    transition: echoTokens.transitions.normal,
    width: echoWidth === 'full' ? '100%' : 'auto',
    
    // Enhanced focus styles
    '&:focus-visible': {
      outline: `2px solid ${echoTokens.colors.primary.blue}`,
      outlineOffset: '2px',
      boxShadow: echoTokens.shadows.focus,
    },
    
    // Active state
    '&:active': {
      transform: 'translateY(0)',
    },
    
    // Disabled state
    '&:disabled': {
      opacity: 'var(--opacity-disabled)',
      cursor: 'not-allowed',
      transform: 'none',
      '&:hover': {
        transform: 'none',
      },
    },
    
    // Loading state
    '&.loading': {
      position: 'relative',
      '& .MuiButton-startIcon, & .MuiButton-endIcon': {
        opacity: 0,
      },
    },

    // Icon spacing
    '& .MuiButton-startIcon': {
      marginLeft: 0,
      marginRight: echoTokens.spacing[8],
    },
    '& .MuiButton-endIcon': {
      marginLeft: echoTokens.spacing[8],
      marginRight: 0,
    },
  };
});

// Styled Icon Button for icon-only variant
const StyledEchoIconButton = styled(IconButton)<{
  echoSize: 'extra-small' | 'small' | 'default' | 'large';
  echoType: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'error' | 'warning' | 'info' | 'success';
}>(({ echoSize, echoType }) => {
  const sizeMap = {
    'extra-small': echoTokens.spacing[24],
    'small': echoTokens.spacing[32],
    'default': echoTokens.spacing[40],
    'large': echoTokens.spacing[48],
  };

  const typeColors = {
    primary: echoTokens.colors.primary.blue,
    secondary: echoTokens.colors.secondary.skyBlue,
    tertiary: echoTokens.colors.neutral.gray600,
    ghost: echoTokens.colors.neutral.gray500,
    error: echoTokens.colors.status.red,
    warning: echoTokens.colors.status.orange,
    info: echoTokens.colors.status.infoBlue,
    success: echoTokens.colors.status.green,
  };

  return {
    width: sizeMap[echoSize],
    height: sizeMap[echoSize],
    color: typeColors[echoType],
    borderRadius: echoTokens.borderRadius[4],
    transition: echoTokens.transitions.normal,
    
    '&:hover': {
      backgroundColor: `${typeColors[echoType]}0D`, // 5% opacity
      transform: 'translateY(-1px)',
    },
    
    '&:focus-visible': {
      outline: `2px solid ${echoTokens.colors.primary.blue}`,
      outlineOffset: '2px',
    },
    
    '&:active': {
      transform: 'translateY(0)',
    },
  };
});

// Loading overlay component
const LoadingOverlay = styled('div')<{ size: string }>(({ size }) => {
  const sizeMap = {
    'extra-small': '14px',
    'small': '16px',
    'default': '18px',
    'large': '20px',
  };

  return {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    '& .MuiCircularProgress-root': {
      width: `${sizeMap[size as keyof typeof sizeMap]} !important`,
      height: `${sizeMap[size as keyof typeof sizeMap]} !important`,
    },
  };
});

export const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  size = 'default',
  type = 'primary',
  state = 'default',
  outline = false,
  loading = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  iconOnly = false,
  icon,
  onClick,
  className = '',
  htmlType = 'button',
  width = 'auto',
  tooltip,
  enhancedInteractions = true,
}) => {
  // Determine the actual state
  const actualState = disabled ? 'disabled' : (loading ? 'loading' : state);
  const isLoadingState = loading || actualState === 'loading';
  const isDisabled = disabled || isLoadingState;

  // Get appropriate icon size
  const getIconSize = () => {
    switch (size) {
      case 'extra-small': return 'small';
      case 'small': return 'small';
      case 'default': return 'medium';
      case 'large': return 'large';
      default: return 'medium';
    }
  };

  const iconSize = getIconSize();

  // Handle click
  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  // Default icons (using MUI icons now)
  const getDefaultIcon = (iconType: 'leading' | 'trailing' | 'single') => {
    if (iconType === 'leading' || iconType === 'single') {
      if (type === 'warning') return <WarningAmberIcon fontSize={iconSize} />;
      if (type === 'error') return <CloseIcon fontSize={iconSize} />;
      if (type === 'info') return <InfoOutlinedIcon fontSize={iconSize} />;
      return <NotificationsIcon fontSize={iconSize} />;
    }
    if (iconType === 'trailing') {
      return <ArrowDownwardIcon fontSize={iconSize} />;
    }
    return null;
  };

  // For icon-only buttons
  if (iconOnly) {
    const iconElement = icon || leadingIcon || getDefaultIcon('single');
    
    const iconButton = (
      <StyledEchoIconButton
        echoSize={size}
        echoType={type}
        onClick={handleClick}
        disabled={isDisabled}
        className={className}
        aria-label={tooltip || 'Icon button'}
        disableRipple={!enhancedInteractions}
      >
        {isLoadingState ? (
          <CircularProgress 
            size={iconSize === 'small' ? 14 : iconSize === 'large' ? 20 : 16} 
            color="inherit" 
          />
        ) : (
          iconElement
        )}
      </StyledEchoIconButton>
    );

    return tooltip ? (
      <Tooltip title={tooltip} arrow>
        {iconButton}
      </Tooltip>
    ) : iconButton;
  }

  // Regular button
  const button = (
    <StyledEchoButton
      echoSize={size}
      echoType={type}
      echoOutline={outline}
      echoWidth={width}
      onClick={handleClick}
      disabled={isDisabled}
      className={`${className} ${isLoadingState ? 'loading' : ''}`}
      type={htmlType}
      startIcon={!isLoadingState && leadingIcon ? leadingIcon : (!isLoadingState && !leadingIcon && (type === 'warning' || type === 'error' || type === 'info') ? getDefaultIcon('leading') : undefined)}
      endIcon={!isLoadingState && trailingIcon ? trailingIcon : (!isLoadingState && !trailingIcon && type === 'primary' ? getDefaultIcon('trailing') : undefined)}
      disableRipple={!enhancedInteractions}
      disableElevation
      variant="contained"
    >
      {children || 'Button'}
      {isLoadingState && (
        <LoadingOverlay size={size}>
          <CircularProgress color="inherit" />
        </LoadingOverlay>
      )}
    </StyledEchoButton>
  );

  return tooltip ? (
    <Tooltip title={tooltip} arrow>
      <span>{button}</span>
    </Tooltip>
  ) : button;
};

// Export for convenience
export default EnhancedButton;
