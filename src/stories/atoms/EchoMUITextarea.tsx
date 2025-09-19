import React from 'react';
import { TextField, TextFieldProps, InputAdornment, IconButton } from '@mui/material';
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
}>(({ theme, echoState = 'default', echoSize = 'default', echoMinHeight, echoMaxHeight }) => {
  
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
      case 'filled':
        return {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'var(--neutral-gray-gray-50)',
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
      alignItems: 'flex-start', // Important for textarea alignment
      
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
      lineHeight: 'var(--type-leading-relaxed)',
      
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
  const inputProps: any = {};
  
  if (showClear && value && onClear) {
    inputProps.endAdornment = (
      <InputAdornment position="end" sx={{ alignSelf: 'flex-start', mt: 1 }}>
        <IconButton
          onClick={onClear}
          size="small"
          sx={{
            color: 'var(--neutral-gray-gray-500)',
            '&:hover': {
              backgroundColor: 'var(--neutral-gray-gray-100)',
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
