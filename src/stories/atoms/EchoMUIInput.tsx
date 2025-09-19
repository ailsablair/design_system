import React from 'react';
import { TextField, TextFieldProps, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Echo MUI Input Example
 * 
 * This shows how to migrate your existing Input component to use MUI TextField
 * as foundation while maintaining all Echo design tokens and functionality.
 */

interface EchoMUIInputProps extends Omit<TextFieldProps, 'size' | 'color'> {
  /** Echo input states */
  state?: 'default' | 'error' | 'success' | 'warning' | 'focus';
  /** Echo size variants */
  size?: 'small' | 'default' | 'large';
  /** Show leading icon */
  showLeadingIcon?: boolean;
  /** Custom leading icon */
  leadingIcon?: React.ReactNode;
  /** Show clear button */
  showClear?: boolean;
  /** Clear button callback */
  onClear?: () => void;
  /** Validation message */
  message?: string;
}

const StyledEchoInput = styled(TextField, {
  shouldForwardProp: (prop) => !['echoState', 'echoSize'].includes(prop as string),
})<{
  echoState?: string;
  echoSize?: string;
}>(({ theme, echoState = 'default', echoSize = 'default' }) => {
  
  // Size variants using Echo tokens
  const sizeStyles = {
    small: {
      '& .MuiInputBase-root': {
        fontSize: 'var(--type-size-sm)',
        minHeight: '36px',
        padding: 'var(--spacing-sizing-6px) var(--spacing-sizing-12px)',
      },
      '& .MuiInputLabel-root': {
        fontSize: 'var(--type-size-sm)',
      },
    },
    default: {
      '& .MuiInputBase-root': {
        fontSize: 'var(--type-size-base)',
        minHeight: '44px',
        padding: 'var(--spacing-sizing-8px) var(--spacing-sizing-16px)',
      },
      '& .MuiInputLabel-root': {
        fontSize: 'var(--type-size-base)',
      },
    },
    large: {
      '& .MuiInputBase-root': {
        fontSize: 'var(--type-size-lg)',
        minHeight: '52px',
        padding: 'var(--spacing-sizing-12px) var(--spacing-sizing-20px)',
      },
      '& .MuiInputLabel-root': {
        fontSize: 'var(--type-size-lg)',
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
    
    '& .MuiInputBase-input': {
      color: 'var(--base-black)',
      padding: '0 !important', // Remove default padding, use our size styles
      
      '&::placeholder': {
        color: 'var(--neutral-gray-gray-400)',
        opacity: 1,
      },
      
      '&:disabled': {
        color: 'var(--neutral-gray-gray-400)',
        WebkitTextFillColor: 'var(--neutral-gray-gray-400)',
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

// Default search icon (from your existing Input component pattern)
const SearchIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M6.5 11.5C9.26142 11.5 11.5 9.26142 11.5 6.5C11.5 3.73858 9.26142 1.5 6.5 1.5C3.73858 1.5 1.5 3.73858 1.5 6.5C1.5 9.26142 3.73858 11.5 6.5 11.5Z" 
      stroke="currentColor" 
      strokeWidth="1.17" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12.5 12.5L10.1 10.1" 
      stroke="currentColor" 
      strokeWidth="1.17" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const ClearIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" 
      stroke="currentColor" 
      strokeWidth="1.17" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const EchoMUIInput: React.FC<EchoMUIInputProps> = ({
  state = 'default',
  size = 'default',
  showLeadingIcon = false,
  leadingIcon,
  showClear = false,
  onClear,
  message,
  value,
  error,
  helperText,
  ...props
}) => {
  const iconSize = size === 'small' ? 14 : size === 'large' ? 18 : 16;

  // Handle state-based error prop
  const isError = state === 'error' || error;
  const finalHelperText = message || helperText;

  // Build InputProps for icons
  const inputProps: any = {};
  
  if (showLeadingIcon || leadingIcon) {
    inputProps.startAdornment = (
      <InputAdornment position="start">
        {leadingIcon || <SearchIcon size={iconSize} />}
      </InputAdornment>
    );
  }
  
  if (showClear && value && onClear) {
    inputProps.endAdornment = (
      <InputAdornment position="end">
        <button
          type="button"
          onClick={onClear}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 'var(--spacing-sizing-4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--spacing-radius-2px)',
            color: 'var(--neutral-gray-gray-500)',
            transition: 'all var(--transition-fast)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--neutral-gray-gray-100)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <ClearIcon size={iconSize} />
        </button>
      </InputAdornment>
    );
  }

  return (
    <StyledEchoInput
      echoState={state}
      echoSize={size}
      value={value}
      error={isError}
      helperText={finalHelperText}
      InputProps={inputProps}
      {...props}
    />
  );
};

export default EchoMUIInput;
