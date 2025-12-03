import React from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, FormHelperText } from '@mui/material';
import type { RadioProps } from '@mui/material/Radio';
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
}>(({ echoSize = 'default', echoVariant = 'primary' }) => {
  
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
    default: '#4B5563', // --neutral-gray-gray-600
    primary: '#2F42BD', // --primary-blue-blue
    success: '#70CC67', // --status-green
    warning: '#F4A403', // --status-orange-alt
    error: '#CE2031', // --status-red
  };

  const activeColor = variantColors[echoVariant as keyof typeof variantColors];

  return {
    color: '#D2D5DA', // --neutral-gray-gray-300
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
      color: '#E5E7EB', // --neutral-gray-gray-200
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

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  margin: 0,
  alignItems: 'flex-start',
  
  '& .MuiFormControlLabel-label': {
    fontFamily: 'var(--type-typeface-roboto-flex)',
    fontSize: 'var(--type-size-base)',
    color: '#1C1C1C', // --base-black
    marginLeft: 'var(--spacing-sizing-8px)',
    lineHeight: 'var(--type-leading-relaxed)',
    
    '&.Mui-disabled': {
      color: '#9CA3AF', // --neutral-gray-gray-400
    },
  },
}));

const StyledFormLabel = styled(FormLabel)(() => ({
  fontFamily: 'var(--type-typeface-archivo)',
  fontSize: 'var(--type-size-base)',
  fontWeight: 'var(--type-weight-medium)',
  color: '#1C1C1C', // --base-black
  marginBottom: 'var(--spacing-sizing-8px)',

  '&.Mui-focused': {
    color: '#2F42BD', // --primary-blue-blue
  },

  '&.Mui-error': {
    color: '#CE2031', // --status-red
  },

  '&.Mui-disabled': {
    color: '#9CA3AF', // --neutral-gray-gray-400
  },
}));

const StyledFormHelperText = styled(FormHelperText)(() => ({
  fontFamily: 'var(--type-typeface-roboto-flex)',
  fontSize: 'var(--type-size-sm)',
  marginTop: 'var(--spacing-sizing-4px)',
  marginLeft: 0,
  
  '&.Mui-error': {
    color: '#CE2031', // --status-red
  },
}));

const StyledRadioGroup = styled(RadioGroup)(() => ({
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
