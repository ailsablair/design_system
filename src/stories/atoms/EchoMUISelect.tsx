import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, SelectProps } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Echo MUI Select
 * 
 * MUI Select component styled with Echo design tokens
 */

interface EchoMUISelectProps extends Omit<SelectProps, 'size' | 'color'> {
  /** Select label */
  label?: string;
  /** Echo size variants */
  size?: 'small' | 'default' | 'large';
  /** Echo state variants */
  state?: 'default' | 'error' | 'success' | 'warning';
  /** Validation message */
  message?: string;
  /** Select options */
  options?: Array<{ value: string | number; label: string; disabled?: boolean }>;
  /** Placeholder text */
  placeholder?: string;
  /** Form control ID */
  id?: string;
}

const StyledFormControl = styled(FormControl, {
  shouldForwardProp: (prop) => !['echoSize', 'echoState'].includes(prop as string),
})<{
  echoSize?: string;
  echoState?: string;
}>(({ theme, echoSize = 'default', echoState = 'default' }) => {
  
  // Size variants using Echo tokens
  const sizeStyles = {
    small: {
      '& .MuiInputLabel-root': {
        fontSize: 'var(--type-size-sm)',
      },
      '& .MuiSelect-select': {
        fontSize: 'var(--type-size-sm)',
        minHeight: '20px',
        padding: 'var(--spacing-sizing-6px) var(--spacing-sizing-12px)',
      },
    },
    default: {
      '& .MuiInputLabel-root': {
        fontSize: 'var(--type-size-base)',
      },
      '& .MuiSelect-select': {
        fontSize: 'var(--type-size-base)',
        minHeight: '24px',
        padding: 'var(--spacing-sizing-8px) var(--spacing-sizing-16px)',
      },
    },
    large: {
      '& .MuiInputLabel-root': {
        fontSize: 'var(--type-size-lg)',
      },
      '& .MuiSelect-select': {
        fontSize: 'var(--type-size-lg)',
        minHeight: '28px',
        padding: 'var(--spacing-sizing-12px) var(--spacing-sizing-20px)',
      },
    },
  };

  // State-based styling using Echo tokens
  const getStateStyles = () => {
    switch (echoState) {
      case 'error':
        return {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'var(--status-red)',
            },
            '&:hover fieldset': {
              borderColor: 'var(--status-red)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--status-red)',
              borderWidth: 'var(--spacing-stroke-2px)',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'var(--status-red)',
            '&.Mui-focused': {
              color: 'var(--status-red)',
            },
          },
        };
      case 'success':
        return {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'var(--status-green)',
            },
            '&:hover fieldset': {
              borderColor: 'var(--status-green)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--status-green)',
              borderWidth: 'var(--spacing-stroke-2px)',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'var(--status-green)',
            '&.Mui-focused': {
              color: 'var(--status-green)',
            },
          },
        };
      case 'warning':
        return {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'var(--status-orange)',
            },
            '&:hover fieldset': {
              borderColor: 'var(--status-orange)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--status-orange)',
              borderWidth: 'var(--spacing-stroke-2px)',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'var(--status-orange)',
            '&.Mui-focused': {
              color: 'var(--status-orange)',
            },
          },
        };
      default:
        return {};
    }
  };

  return {
    // Base styles using Echo tokens
    '& .MuiInputLabel-root': {
      fontFamily: 'var(--type-typeface-archivo)',
      fontWeight: 'var(--type-weight-medium)',
      color: 'var(--neutral-gray-gray-600)',
      
      '&.Mui-focused': {
        color: 'var(--primary-blue-blue)',
      },
    },
    
    '& .MuiOutlinedInput-root': {
      fontFamily: 'var(--type-typeface-roboto-flex)',
      borderRadius: 'var(--spacing-radius-4px)',
      transition: 'all var(--transition-fast)',
      backgroundColor: 'var(--base-white)',
      
      '& fieldset': {
        borderColor: 'var(--neutral-gray-gray-300)',
        borderWidth: 'var(--spacing-stroke-1px)',
      },
      
      '&:hover:not(.Mui-disabled):not(.Mui-error) fieldset': {
        borderColor: 'var(--neutral-gray-gray-400)',
      },
      
      '&.Mui-focused fieldset': {
        borderColor: 'var(--primary-blue-blue)',
        borderWidth: 'var(--spacing-stroke-2px)',
      },
      
      '&.Mui-disabled': {
        backgroundColor: 'var(--neutral-gray-gray-50)',
        
        '& fieldset': {
          borderColor: 'var(--neutral-gray-gray-200)',
        },
      },
    },
    
    '& .MuiSelect-select': {
      color: 'var(--base-black)',
      padding: '0 !important', // Remove default padding, use our size styles
      
      '&:disabled': {
        color: 'var(--neutral-gray-gray-400)',
        WebkitTextFillColor: 'var(--neutral-gray-gray-400)',
      },
    },
    
    '& .MuiSelect-icon': {
      color: 'var(--neutral-gray-gray-500)',
      
      '&.Mui-disabled': {
        color: 'var(--neutral-gray-gray-300)',
      },
    },
    
    '& .MuiFormHelperText-root': {
      fontFamily: 'var(--type-typeface-roboto-flex)',
      fontSize: 'var(--type-size-sm)',
      marginTop: 'var(--spacing-sizing-4px)',
      marginLeft: 0,
      
      '&.Mui-error': {
        color: 'var(--status-red)',
      },
    },
    
    // Apply size styles
    ...sizeStyles[echoSize as keyof typeof sizeStyles],
    
    // Apply state styles
    ...getStateStyles(),
  };
});

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: 'var(--type-typeface-roboto-flex)',
  fontSize: 'var(--type-size-base)',
  padding: 'var(--spacing-sizing-8px) var(--spacing-sizing-16px)',
  
  '&:hover': {
    backgroundColor: 'var(--primary-blue-blue-50)',
  },
  
  '&.Mui-selected': {
    backgroundColor: 'var(--primary-blue-blue-100)',
    color: 'var(--primary-blue-blue)',
    
    '&:hover': {
      backgroundColor: 'var(--primary-blue-blue-200)',
    },
  },
  
  '&.Mui-disabled': {
    color: 'var(--neutral-gray-gray-400)',
    opacity: 'var(--opacity-disabled)',
  },
}));

export const EchoMUISelect: React.FC<EchoMUISelectProps> = ({
  label,
  size = 'default',
  state = 'default',
  message,
  options = [],
  placeholder,
  id,
  value,
  onChange,
  disabled = false,
  fullWidth = true,
  error,
  ...props
}) => {
  const isError = state === 'error' || error;
  const controlId = id || `echo-select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <StyledFormControl 
      fullWidth={fullWidth} 
      error={isError}
      disabled={disabled}
      echoSize={size}
      echoState={state}
    >
      {label && (
        <InputLabel id={`${controlId}-label`}>
          {label}
        </InputLabel>
      )}
      <Select
        labelId={label ? `${controlId}-label` : undefined}
        id={controlId}
        value={value}
        onChange={onChange}
        label={label}
        displayEmpty={!!placeholder}
        {...props}
      >
        {placeholder && (
          <StyledMenuItem value="" disabled>
            <span style={{ color: 'var(--neutral-gray-gray-400)' }}>
              {placeholder}
            </span>
          </StyledMenuItem>
        )}
        {options.map((option) => (
          <StyledMenuItem 
            key={option.value} 
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </StyledMenuItem>
        ))}
      </Select>
      {message && (
        <FormHelperText>
          {message}
        </FormHelperText>
      )}
    </StyledFormControl>
  );
};

export default EchoMUISelect;
