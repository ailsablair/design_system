import React from 'react';
import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material';
import type { CheckboxProps } from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

/**
 * Echo MUI Checkbox
 * 
 * MUI Checkbox component styled with Echo design tokens
 */

interface EchoMUICheckboxProps extends Omit<CheckboxProps, 'size' | 'color'> {
  /** Checkbox label text */
  label?: string;
  /** Echo size variants */
  size?: 'small' | 'default' | 'large';
  /** Echo state variants */
  state?: 'default' | 'checked' | 'indeterminate' | 'error' | 'warning' | 'success' | 'disabled';
  /** Echo color variants */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  /** Validation message */
  message?: string;
  /** Required field indicator */
  required?: boolean;
  /** Checkbox shape */
  shape?: 'round' | 'square';
}

const StyledCheckbox = styled(Checkbox, {
  shouldForwardProp: (prop) => !['echoSize', 'echoVariant', 'echoShape'].includes(prop as string),
})<{
  echoSize?: string;
  echoVariant?: string;
  echoShape?: string;
}>(({ theme, echoSize = 'default', echoVariant = 'primary', echoShape = 'square' }) => {
  
  // Size variants using Echo tokens
  const sizeStyles = {
    small: {
      '& .MuiSvgIcon-root': {
        fontSize: 'var(--icon-size-md)', // 16px
      },
    },
    default: {
      '& .MuiSvgIcon-root': {
        fontSize: 'var(--icon-size-lg)', // 20px
      },
    },
    large: {
      '& .MuiSvgIcon-root': {
        fontSize: 'var(--icon-size-xl)', // 24px
      },
    },
  };

  // Variant colors using Echo tokens
  const variantColors = {
    default: 'var(--neutral-gray-gray-600)',
    primary: 'var(--primary-blue-blue)',
    success: 'var(--status-green)',
    warning: 'var(--status-orange)',
    error: 'var(--status-red)',
  };

  const activeColor = variantColors[echoVariant as keyof typeof variantColors];

  return {
    color: 'var(--neutral-gray-gray-300)',
    padding: 'var(--spacing-sizing-4px)',
    borderRadius: echoShape === 'round' ? '50%' : 'var(--spacing-radius-2px)',
    transition: 'all var(--transition-fast)',
    
    '&:hover': {
      backgroundColor: `${activeColor}10`, // 10% opacity
    },
    
    '&.Mui-checked': {
      color: activeColor,
      
      '&:hover': {
        backgroundColor: `${activeColor}15`, // 15% opacity
      },
    },
    
    '&.MuiCheckbox-indeterminate': {
      color: activeColor,
      
      '&:hover': {
        backgroundColor: `${activeColor}15`,
      },
    },
    
    '&.Mui-disabled': {
      color: 'var(--neutral-gray-gray-200)',
      opacity: 'var(--opacity-disabled)',
    },
    
    '&.Mui-focusVisible': {
      outline: `2px solid ${activeColor}`,
      outlineOffset: '2px',
    },
    
    // Apply size styles
    ...sizeStyles[echoSize as keyof typeof sizeStyles],
    
    // Override MUI's ripple to match Echo theme
    '& .MuiTouchRipple-root': {
      color: activeColor,
    },
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
  margin: 'var(--spacing-sizing-4px) 0 0 var(--spacing-sizing-28px)', // Align with label
  
  '&.Mui-error': {
    color: 'var(--status-red)',
  },
}));

export const EchoMUICheckbox: React.FC<EchoMUICheckboxProps> = ({
  label,
  size = 'default',
  state = 'default',
  variant = 'primary',
  message,
  required = false,
  shape = 'square',
  checked,
  indeterminate,
  disabled,
  onChange,
  ...props
}) => {
  const isDisabled = disabled || state === 'disabled';
  const isChecked = checked || state === 'checked';
  const isIndeterminate = indeterminate || state === 'indeterminate';
  const isError = state === 'error';

  // Determine variant based on state
  const finalVariant = state === 'success' ? 'success' : 
                      state === 'warning' ? 'warning' : 
                      state === 'error' ? 'error' : variant;

  const checkbox = (
    <StyledCheckbox
      checked={isChecked}
      indeterminate={isIndeterminate}
      disabled={isDisabled}
      onChange={onChange}
      echoSize={size}
      echoVariant={finalVariant}
      echoShape={shape}
      {...props}
    />
  );

  if (!label) {
    return (
      <>
        {checkbox}
        {message && (
          <StyledFormHelperText error={isError}>
            {message}
          </StyledFormHelperText>
        )}
      </>
    );
  }

  return (
    <>
      <StyledFormControlLabel
        control={checkbox}
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
        disabled={isDisabled}
      />
      {message && (
        <StyledFormHelperText error={isError}>
          {message}
        </StyledFormHelperText>
      )}
    </>
  );
};

export default EchoMUICheckbox;
