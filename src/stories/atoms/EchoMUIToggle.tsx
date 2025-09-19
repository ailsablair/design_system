import React from 'react';
import { Switch, FormControlLabel, FormHelperText } from '@mui/material';
import type { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

/**
 * Echo MUI Toggle (Switch)
 * 
 * MUI Switch component styled with Echo design tokens
 */

interface EchoMUIToggleProps extends Omit<SwitchProps, 'size' | 'color'> {
  /** Toggle label text */
  label?: string;
  /** Echo size variants */
  size?: 'small' | 'default' | 'large';
  /** Echo color variants */
  variant?: 'primary' | 'success' | 'warning' | 'error';
  /** Label position */
  labelPlacement?: 'start' | 'end' | 'top' | 'bottom';
  /** Validation message */
  message?: string;
  /** Error state */
  error?: boolean;
  /** Required field */
  required?: boolean;
  /** Description text */
  description?: string;
}

const StyledSwitch = styled(Switch, {
  shouldForwardProp: (prop) => !['echoSize', 'echoVariant'].includes(prop as string),
})<{
  echoSize?: string;
  echoVariant?: string;
}>(({ theme, echoSize = 'default', echoVariant = 'primary' }) => {
  
  // Size variants using Echo tokens
  const sizeStyles = {
    small: {
      width: 38,
      height: 22,
      '& .MuiSwitch-switchBase': {
        padding: 1,
        '&.Mui-checked': {
          transform: 'translateX(16px)',
        },
      },
      '& .MuiSwitch-thumb': {
        width: 20,
        height: 20,
      },
      '& .MuiSwitch-track': {
        borderRadius: 11,
      },
    },
    default: {
      width: 50,
      height: 28,
      '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
          transform: 'translateX(22px)',
        },
      },
      '& .MuiSwitch-thumb': {
        width: 24,
        height: 24,
      },
      '& .MuiSwitch-track': {
        borderRadius: 14,
      },
    },
    large: {
      width: 58,
      height: 32,
      '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
          transform: 'translateX(26px)',
        },
      },
      '& .MuiSwitch-thumb': {
        width: 28,
        height: 28,
      },
      '& .MuiSwitch-track': {
        borderRadius: 16,
      },
    },
  };

  // Variant colors using Echo tokens
  const variantColors = {
    primary: 'var(--primary-blue-blue)',
    success: 'var(--status-green)',
    warning: 'var(--status-orange)',
    error: 'var(--status-red)',
  };

  const activeColor = variantColors[echoVariant as keyof typeof variantColors];

  return {
    padding: 'var(--spacing-sizing-8px)',
    
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(2px)',
      transition: 'transform var(--transition-fast)',
      
      '&.Mui-checked': {
        color: 'var(--base-white)',
        
        '& + .MuiSwitch-track': {
          backgroundColor: activeColor,
          opacity: 1,
          border: 0,
        },
        
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 'var(--opacity-disabled)',
        },
      },
      
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: activeColor,
        border: `2px solid var(--base-white)`,
        outline: `2px solid ${activeColor}`,
        outlineOffset: '2px',
      },
      
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: 'var(--neutral-gray-gray-100)',
      },
      
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 'var(--opacity-disabled)',
      },
    },
    
    '& .MuiSwitch-thumb': {
      backgroundColor: 'var(--base-white)',
      boxSizing: 'border-box',
      boxShadow: 'var(--shadow-sm)',
      transition: 'all var(--transition-fast)',
    },
    
    '& .MuiSwitch-track': {
      backgroundColor: 'var(--neutral-gray-gray-300)',
      opacity: 1,
      transition: 'background-color var(--transition-fast)',
    },
    
    // Apply size styles
    ...sizeStyles[echoSize as keyof typeof sizeStyles],
  };
});

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  margin: 0,
  alignItems: 'flex-start',
  
  '& .MuiFormControlLabel-label': {
    fontFamily: 'var(--type-typeface-roboto-flex)',
    fontSize: 'var(--type-size-base)',
    color: 'var(--base-black)',
    marginLeft: 'var(--spacing-sizing-8px)',
    lineHeight: 'var(--type-leading-relaxed)',
    
    '&.Mui-disabled': {
      color: 'var(--neutral-gray-gray-400)',
    },
  },
}));

const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
  fontFamily: 'var(--type-typeface-roboto-flex)',
  fontSize: 'var(--type-size-sm)',
  margin: 'var(--spacing-sizing-4px) 0 0 0',
  
  '&.Mui-error': {
    color: 'var(--status-red)',
  },
}));

const DescriptionText = styled('div')(({ theme }) => ({
  fontFamily: 'var(--type-typeface-roboto-flex)',
  fontSize: 'var(--type-size-sm)',
  color: 'var(--neutral-gray-gray-600)',
  marginTop: 'var(--spacing-sizing-2px)',
  lineHeight: 'var(--type-leading-relaxed)',
}));

export const EchoMUIToggle: React.FC<EchoMUIToggleProps> = ({
  label,
  size = 'default',
  variant = 'primary',
  labelPlacement = 'end',
  message,
  error = false,
  required = false,
  description,
  checked,
  disabled,
  onChange,
  ...props
}) => {
  const toggle = (
    <StyledSwitch
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      echoSize={size}
      echoVariant={variant}
      {...props}
    />
  );

  if (!label) {
    return (
      <>
        {toggle}
        {description && (
          <DescriptionText>
            {description}
          </DescriptionText>
        )}
        {message && (
          <StyledFormHelperText error={error}>
            {message}
          </StyledFormHelperText>
        )}
      </>
    );
  }

  return (
    <div>
      <StyledFormControlLabel
        control={toggle}
        label={
          <>
            {label}
            {required && (
              <span style={{ color: 'var(--status-red)', marginLeft: 'var(--spacing-sizing-2px)' }}>
                *
              </span>
            )}
          </>
        }
        labelPlacement={labelPlacement}
        disabled={disabled}
      />
      {description && (
        <DescriptionText>
          {description}
        </DescriptionText>
      )}
      {message && (
        <StyledFormHelperText error={error}>
          {message}
        </StyledFormHelperText>
      )}
    </div>
  );
};

export default EchoMUIToggle;
