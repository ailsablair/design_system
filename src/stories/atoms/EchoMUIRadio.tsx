import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, FormHelperText, RadioProps } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Echo MUI Radio
 * 
 * MUI Radio components styled with Echo design tokens
 */

interface EchoMUIRadioProps extends Omit<RadioProps, 'size' | 'color'> {
  /** Radio button label text */
  label?: string;
  /** Echo size variants */
  size?: 'small' | 'default' | 'large';
  /** Echo color variants */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  /** Validation message */
  message?: string;
}

interface EchoMUIRadioGroupProps {
  /** Group label */
  label?: string;
  /** Radio options */
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
    message?: string;
  }>;
  /** Selected value */
  value?: string;
  /** onChange handler */
  onChange?: (value: string) => void;
  /** Echo size variants */
  size?: 'small' | 'default' | 'large';
  /** Echo color variants */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  /** Layout direction */
  row?: boolean;
  /** Error state */
  error?: boolean;
  /** Validation message */
  message?: string;
  /** Required field */
  required?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Name for form submission */
  name?: string;
}

const StyledRadio = styled(Radio, {
  shouldForwardProp: (prop) => !['echoSize', 'echoVariant'].includes(prop as string),
})<{
  echoSize?: string;
  echoVariant?: string;
}>(({ theme, echoSize = 'default', echoVariant = 'primary' }) => {
  
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

const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  fontFamily: 'var(--type-typeface-archivo)',
  fontSize: 'var(--type-size-base)',
  fontWeight: 'var(--type-weight-medium)',
  color: 'var(--base-black)',
  marginBottom: 'var(--spacing-sizing-8px)',
  
  '&.Mui-focused': {
    color: 'var(--primary-blue-blue)',
  },
  
  '&.Mui-error': {
    color: 'var(--status-red)',
  },
  
  '&.Mui-disabled': {
    color: 'var(--neutral-gray-gray-400)',
  },
}));

const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
  fontFamily: 'var(--type-typeface-roboto-flex)',
  fontSize: 'var(--type-size-sm)',
  marginTop: 'var(--spacing-sizing-4px)',
  marginLeft: 0,
  
  '&.Mui-error': {
    color: 'var(--status-red)',
  },
}));

const StyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
  gap: 'var(--spacing-sizing-8px)',
}));

// Individual Radio Component
export const EchoMUIRadio: React.FC<EchoMUIRadioProps> = ({
  label,
  size = 'default',
  variant = 'primary',
  message,
  value,
  checked,
  disabled,
  onChange,
  ...props
}) => {
  const radio = (
    <StyledRadio
      value={value}
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
        {radio}
        {message && (
          <StyledFormHelperText>
            {message}
          </StyledFormHelperText>
        )}
      </>
    );
  }

  return (
    <>
      <StyledFormControlLabel
        control={radio}
        label={label}
        disabled={disabled}
      />
      {message && (
        <StyledFormHelperText>
          {message}
        </StyledFormHelperText>
      )}
    </>
  );
};

// Radio Group Component
export const EchoMUIRadioGroup: React.FC<EchoMUIRadioGroupProps> = ({
  label,
  options,
  value,
  onChange,
  size = 'default',
  variant = 'primary',
  row = false,
  error = false,
  message,
  required = false,
  disabled = false,
  name,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <FormControl error={error} disabled={disabled}>
      {label && (
        <StyledFormLabel component="legend" required={required}>
          {label}
        </StyledFormLabel>
      )}
      <StyledRadioGroup
        value={value}
        onChange={handleChange}
        name={name}
        row={row}
      >
        {options.map((option) => (
          <StyledFormControlLabel
            key={option.value}
            value={option.value}
            control={
              <StyledRadio
                echoSize={size}
                echoVariant={variant}
                disabled={disabled || option.disabled}
              />
            }
            label={option.label}
            disabled={disabled || option.disabled}
          />
        ))}
      </StyledRadioGroup>
      {message && (
        <StyledFormHelperText>
          {message}
        </StyledFormHelperText>
      )}
    </FormControl>
  );
};

export default EchoMUIRadio;
