import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import type { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Clear as ClearIcon } from '@mui/icons-material';

/**
 * Echo MUI Textarea
 * 
 * MUI TextField (multiline) component styled with Echo design tokens
 */

interface EchoMUITextareaProps extends Omit<TextFieldProps, 'size' | 'color' | 'multiline'> {
  /** Echo size variants */
  size?: 'small' | 'default' | 'large';
  /** Echo state variants */
  state?: 'default' | 'error' | 'warning' | 'success' | 'focus' | 'typing' | 'filled';
  /** Validation message */
  message?: string;
  /** Show clear button */
  showClear?: boolean;
  /** Clear button callback */
  onClear?: () => void;
  /** Minimum height in pixels */
  minHeight?: number;
  /** Maximum height in pixels */
  maxHeight?: number;
  /** Default number of rows */
  rows?: number;
  /** Minimum number of rows */
  minRows?: number;
  /** Maximum number of rows */
  maxRows?: number;
}

const StyledEchoTextarea = styled(TextField, {
  shouldForwardProp: (prop) => !['echoState', 'echoSize', 'echoMinHeight', 'echoMaxHeight'].includes(prop as string),
})<{
  echoState?: string;
  echoSize?: string;
  echoMinHeight?: number;
  echoMaxHeight?: number;
}>(({ echoState = 'default', echoSize = 'default', echoMinHeight, echoMaxHeight }) => {
  
  // Size variants using Echo tokens
  const sizeStyles = {
    small: {
      '& .MuiInputBase-root': {
        fontSize: 'var(--type-size-sm)',
        padding: 'var(--spacing-sizing-6px) var(--spacing-sizing-12px)',
      },
      '& .MuiInputLabel-root': {
        fontSize: 'var(--type-size-sm)',
      },
    },
    default: {
      '& .MuiInputBase-root': {
        fontSize: 'var(--type-size-base)',
        padding: 'var(--spacing-sizing-8px) var(--spacing-sizing-16px)',
      },
      '& .MuiInputLabel-root': {
        fontSize: 'var(--type-size-base)',
      },
    },
    large: {
      '& .MuiInputBase-root': {
        fontSize: 'var(--type-size-lg)',
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
      case 'filled':
        return {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#F9FAFB', // --neutral-gray-gray-50
          },
        };
      default:
        return {};
    }
  };

  // Height styles
  const heightStyles = {
    ...(echoMinHeight && {
      '& .MuiInputBase-root': {
        minHeight: `${echoMinHeight}px`,
      },
    }),
    ...(echoMaxHeight && {
      '& .MuiInputBase-root': {
        maxHeight: `${echoMaxHeight}px`,
      },
    }),
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
      alignItems: 'flex-start', // Important for textarea alignment
      
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
    
    '& .MuiInputBase-input': {
      color: '#1C1C1C', // --base-black
      lineHeight: 'var(--type-leading-relaxed)',
      
      '&::placeholder': {
        color: '#9CA3AF', // --neutral-gray-gray-400
        opacity: 1,
      },
      
      '&:disabled': {
        color: '#9CA3AF', // --neutral-gray-gray-400
        WebkitTextFillColor: '#9CA3AF', // --neutral-gray-gray-400
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
    
    // Apply height styles
    ...heightStyles,
  };
});

export const EchoMUITextarea: React.FC<EchoMUITextareaProps> = ({
  size = 'default',
  state = 'default',
  message,
  showClear = false,
  onClear,
  minHeight,
  maxHeight,
  rows = 4,
  minRows,
  maxRows,
  value,
  error,
  helperText,
  ...props
}) => {
  // Handle state-based error prop
  const isError = state === 'error' || error;
  const finalHelperText = message || helperText;

  // Build InputProps for clear button
  const inputProps: TextFieldProps['InputProps'] = {};
  
  if (showClear && value && onClear) {
    inputProps.endAdornment = (
      <InputAdornment position="end" sx={{ alignSelf: 'flex-start', mt: 1 }}>
        <IconButton
          onClick={onClear}
          size="small"
          sx={{
            color: '#6D7280', // --neutral-gray-gray-500
            '&:hover': {
              backgroundColor: '#F3F4F6', // --neutral-gray-gray-100
            },
          }}
        >
          <ClearIcon fontSize="small" />
        </IconButton>
      </InputAdornment>
    );
  }

  return (
    <StyledEchoTextarea
      multiline
      rows={rows}
      minRows={minRows}
      maxRows={maxRows}
      value={value}
      error={isError}
      helperText={finalHelperText}
      InputProps={inputProps}
      echoState={state}
      echoSize={size}
      echoMinHeight={minHeight}
      echoMaxHeight={maxHeight}
      {...props}
    />
  );
};

export default EchoMUITextarea;
