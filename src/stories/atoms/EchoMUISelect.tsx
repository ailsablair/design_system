import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import type { SelectProps } from '@mui/material/Select';
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
}>(({ echoSize = 'default', echoState = 'default' }) => {
  
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
              borderColor: '#CE2031', // --status-red
            },
            '&:hover fieldset': {
              borderColor: '#CE2031', // --status-red
            },
            '&.Mui-focused fieldset': {
              borderColor: '#CE2031', // --status-red
              borderWidth: 'var(--spacing-stroke-2px)',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#CE2031', // --status-red
            '&.Mui-focused': {
              color: '#CE2031', // --status-red
            },
          },
        };
      case 'success':
        return {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#70CC67', // --status-green
            },
            '&:hover fieldset': {
              borderColor: '#70CC67', // --status-green
            },
            '&.Mui-focused fieldset': {
              borderColor: '#70CC67', // --status-green
              borderWidth: 'var(--spacing-stroke-2px)',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#70CC67', // --status-green
            '&.Mui-focused': {
              color: '#70CC67', // --status-green
            },
          },
        };
      case 'warning':
        return {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#F4A403', // --status-orange-alt
            },
            '&:hover fieldset': {
              borderColor: '#F4A403', // --status-orange-alt
            },
            '&.Mui-focused fieldset': {
              borderColor: '#F4A403', // --status-orange-alt
              borderWidth: 'var(--spacing-stroke-2px)',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#F4A403', // --status-orange-alt
            '&.Mui-focused': {
              color: '#F4A403', // --status-orange-alt
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
      color: '#4B5563', // --neutral-gray-gray-600

      '&.Mui-focused': {
        color: '#2F42BD', // --primary-blue-blue
      },
    },
    
    '& .MuiOutlinedInput-root': {
      fontFamily: 'var(--type-typeface-roboto-flex)',
      borderRadius: 'var(--spacing-radius-4px)',
      transition: 'all var(--transition-fast)',
      backgroundColor: '#FFFFFF', // --base-white

      '& fieldset': {
        borderColor: '#D2D5DA', // --neutral-gray-gray-300
        borderWidth: 'var(--spacing-stroke-1px)',
      },
      
      '&:hover:not(.Mui-disabled):not(.Mui-error) fieldset': {
        borderColor: '#9CA3AF', // --neutral-gray-gray-400
      },
      
      '&.Mui-focused fieldset': {
        borderColor: '#2F42BD', // --primary-blue-blue
        borderWidth: 'var(--spacing-stroke-2px)',
      },
      
      '&.Mui-disabled': {
        backgroundColor: '#F9FAFB', // --neutral-gray-gray-50

        '& fieldset': {
          borderColor: '#E5E7EB', // --neutral-gray-gray-200
        },
      },
    },
    
    '& .MuiSelect-select': {
      color: '#1C1C1C', // --base-black
      padding: '0 !important', // Remove default padding, use our size styles
      
      '&:disabled': {
        color: '#9CA3AF', // --neutral-gray-gray-400
        WebkitTextFillColor: '#9CA3AF', // --neutral-gray-gray-400
      },
    },
    
    '& .MuiSelect-icon': {
      color: '#6D7280', // --neutral-gray-gray-500

      '&.Mui-disabled': {
        color: '#D2D5DA', // --neutral-gray-gray-300
      },
    },
    
    '& .MuiFormHelperText-root': {
      fontFamily: 'var(--type-typeface-roboto-flex)',
      fontSize: 'var(--type-size-sm)',
      marginTop: 'var(--spacing-sizing-4px)',
      marginLeft: 0,
      
      '&.Mui-error': {
        color: '#CE2031', // --status-red
      },
    },
    
    // Apply size styles
    ...sizeStyles[echoSize as keyof typeof sizeStyles],
    
    // Apply state styles
    ...getStateStyles(),
  };
});

const StyledMenuItem = styled(MenuItem)(() => ({
  fontFamily: 'var(--type-typeface-roboto-flex)',
  fontSize: 'var(--type-size-base)',
  padding: 'var(--spacing-sizing-8px) var(--spacing-sizing-16px)',
  
  '&:hover': {
    backgroundColor: '#F9F9FE', // --primary-blue-blue-50
  },
  
  '&.Mui-selected': {
    backgroundColor: '#E8EBFA', // --primary-blue-blue-100
    color: '#2F42BD', // --primary-blue-blue

    '&:hover': {
      backgroundColor: '#C5CAED', // --primary-blue-blue-200
    },
  },
  
  '&.Mui-disabled': {
    color: '#9CA3AF', // --neutral-gray-gray-400
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
        variant="outlined"
        {...props}
      >
        {placeholder && (
          <StyledMenuItem value="" disabled>
            <span style={{ color: '#9CA3AF' }}> {/* --neutral-gray-gray-400 */}
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
