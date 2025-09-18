import React, { useState } from 'react';
import { TextField, InputAdornment, Chip, Autocomplete, FormHelperText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { echoTokens } from '../foundations/MUIThemeProvider';

// Import MUI icons
import {
  SearchIcon,
  CloseIcon,
  VisibilityIcon,
  VisibilityOffIcon,
  ErrorOutlineIcon,
  CheckCircleIcon,
  WarningAmberIcon,
  InfoOutlinedIcon,
  ExpandMoreIcon,
} from '../foundations/MaterialUIIcons';

export interface TagData {
  id: string;
  label: string;
}

export interface EnhancedInputProps {
  /** Input label text */
  label?: string;
  /** Input placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Validation state */
  state?: 'default' | 'error' | 'warning' | 'success' | 'focus' | 'typing';
  /** Validation message text */
  message?: string;
  /** Show clear button */
  showClear?: boolean;
  /** Show leading icon */
  showLeadingIcon?: boolean;
  /** Custom leading icon */
  leadingIcon?: React.ReactNode;
  /** Input variant */
  variant?: 'simple' | 'tags' | 'autocomplete' | 'password';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Tags for tag input variant */
  tags?: TagData[];
  /** Options for autocomplete variant */
  options?: string[];
  /** Disabled state */
  disabled?: boolean;
  /** Input type */
  type?: 'text' | 'email' | 'number' | 'url';
  /** Input ID */
  id?: string;
  /** Additional CSS classes */
  className?: string;
  /** Full width */
  fullWidth?: boolean;
  /** Required field */
  required?: boolean;
  /** Enable enhanced MUI interactions */
  enhancedInteractions?: boolean;
  /** onChange event handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** onClear event handler */
  onClear?: () => void;
  /** onTagAdd event handler */
  onTagAdd?: (tag: TagData) => void;
  /** onTagRemove event handler */
  onTagRemove?: (tagId: string) => void;
  /** onFocus event handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** onBlur event handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

// Styled TextField using Echo design tokens
const StyledEchoTextField = styled(TextField, {
  shouldForwardProp: (prop) => 
    !['echoSize', 'echoState'].includes(prop as string),
})<{
  echoSize: 'small' | 'default' | 'large';
  echoState: 'default' | 'error' | 'warning' | 'success' | 'focus' | 'typing';
}>(({ theme, echoSize, echoState }) => {
  
  // Size-based styles
  const sizeStyles = {
    small: {
      '& .MuiInputBase-root': {
        fontSize: echoTokens.typography.fontSize.sm,
        minHeight: '36px',
        padding: `${echoTokens.spacing[6]} ${echoTokens.spacing[12]}`,
      },
      '& .MuiInputLabel-root': {
        fontSize: echoTokens.typography.fontSize.sm,
      },
    },
    default: {
      '& .MuiInputBase-root': {
        fontSize: echoTokens.typography.fontSize.base,
        minHeight: '44px',
        padding: `${echoTokens.spacing[8]} ${echoTokens.spacing[16]}`,
      },
      '& .MuiInputLabel-root': {
        fontSize: echoTokens.typography.fontSize.base,
      },
    },
    large: {
      '& .MuiInputBase-root': {
        fontSize: echoTokens.typography.fontSize.lg,
        minHeight: '52px',
        padding: `${echoTokens.spacing[12]} ${echoTokens.spacing[20]}`,
      },
      '& .MuiInputLabel-root': {
        fontSize: echoTokens.typography.fontSize.lg,
      },
    },
  };

  // State-based colors
  const getStateColors = () => {
    switch (echoState) {
      case 'error':
        return {
          borderColor: echoTokens.colors.status.red,
          focusColor: echoTokens.colors.status.red,
          labelColor: echoTokens.colors.status.red,
          iconColor: echoTokens.colors.status.red,
        };
      case 'warning':
        return {
          borderColor: echoTokens.colors.status.orange,
          focusColor: echoTokens.colors.status.orange,
          labelColor: echoTokens.colors.status.orange,
          iconColor: echoTokens.colors.status.orange,
        };
      case 'success':
        return {
          borderColor: echoTokens.colors.status.green,
          focusColor: echoTokens.colors.status.green,
          labelColor: echoTokens.colors.status.green,
          iconColor: echoTokens.colors.status.green,
        };
      default:
        return {
          borderColor: echoTokens.colors.neutral.gray300,
          focusColor: echoTokens.colors.primary.blue,
          labelColor: echoTokens.colors.neutral.gray600,
          iconColor: echoTokens.colors.neutral.gray500,
        };
    }
  };

  const stateColors = getStateColors();

  return {
    ...sizeStyles[echoSize],
    
    '& .MuiInputLabel-root': {
      fontFamily: echoTokens.typography.fontFamily.archivo,
      fontWeight: echoTokens.typography.fontWeight.medium,
      color: stateColors.labelColor,
      
      '&.Mui-focused': {
        color: stateColors.focusColor,
      },
      
      '&.Mui-error': {
        color: echoTokens.colors.status.red,
      },
    },
    
    '& .MuiOutlinedInput-root': {
      fontFamily: echoTokens.typography.fontFamily.robotoFlex,
      borderRadius: echoTokens.borderRadius[4],
      transition: echoTokens.transitions.normal,
      
      '& fieldset': {
        borderColor: stateColors.borderColor,
        borderWidth: '1px',
      },
      
      '&:hover:not(.Mui-disabled):not(.Mui-error) fieldset': {
        borderColor: echoTokens.colors.neutral.gray400,
      },
      
      '&.Mui-focused fieldset': {
        borderColor: stateColors.focusColor,
        borderWidth: '2px',
        boxShadow: `0 0 0 1px ${stateColors.focusColor}20`,
      },
      
      '&.Mui-error fieldset': {
        borderColor: echoTokens.colors.status.red,
      },
      
      '&.Mui-disabled': {
        opacity: 'var(--opacity-disabled)',
        
        '& fieldset': {
          borderColor: echoTokens.colors.neutral.gray200,
        },
      },
    },
    
    '& .MuiInputBase-input': {
      padding: '0 !important',
      color: echoTokens.colors.base.black,
      
      '&::placeholder': {
        color: echoTokens.colors.neutral.gray400,
        opacity: 1,
      },
      
      '&:disabled': {
        color: echoTokens.colors.neutral.gray400,
        WebkitTextFillColor: echoTokens.colors.neutral.gray400,
      },
    },
    
    '& .MuiInputAdornment-root': {
      color: stateColors.iconColor,
      
      '& .MuiSvgIcon-root': {
        fontSize: echoSize === 'small' ? '18px' : echoSize === 'large' ? '24px' : '20px',
      },
    },
    
    '& .MuiFormHelperText-root': {
      fontFamily: echoTokens.typography.fontFamily.robotoFlex,
      fontSize: echoTokens.typography.fontSize.sm,
      marginTop: echoTokens.spacing[4],
      marginLeft: 0,
      
      '&.Mui-error': {
        color: echoTokens.colors.status.red,
      },
    },
  };
});

// Styled Chip for tags
const StyledEchoChip = styled(Chip)(({ theme }) => ({
  fontFamily: echoTokens.typography.fontFamily.archivo,
  fontSize: echoTokens.typography.fontSize.sm,
  borderRadius: echoTokens.borderRadius[4],
  backgroundColor: echoTokens.colors.neutral.gray100,
  color: echoTokens.colors.base.black,
  border: `1px solid ${echoTokens.colors.neutral.gray300}`,
  
  '& .MuiChip-deleteIcon': {
    color: echoTokens.colors.neutral.gray500,
    fontSize: '16px',
    
    '&:hover': {
      color: echoTokens.colors.neutral.gray700,
    },
  },
  
  '&:hover': {
    backgroundColor: echoTokens.colors.neutral.gray200,
  },
}));

export const EnhancedInput: React.FC<EnhancedInputProps> = ({
  label,
  placeholder = 'Enter text...',
  value,
  state = 'default',
  message,
  showClear = true,
  showLeadingIcon = false,
  leadingIcon,
  variant = 'simple',
  size = 'default',
  tags = [],
  options = [],
  disabled = false,
  type = 'text',
  id,
  className = '',
  fullWidth = true,
  required = false,
  enhancedInteractions = true,
  onChange,
  onClear,
  onTagAdd,
  onTagRemove,
  onFocus,
  onBlur,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [autocompleteValue, setAutocompleteValue] = useState('');

  // Get state icon
  const getStateIcon = () => {
    switch (state) {
      case 'error':
        return <ErrorOutlineIcon />;
      case 'warning':
        return <WarningAmberIcon />;
      case 'success':
        return <CheckCircleIcon />;
      default:
        return null;
    }
  };

  // Get leading icon
  const getLeadingIcon = () => {
    if (leadingIcon) return leadingIcon;
    if (showLeadingIcon) return <SearchIcon />;
    return null;
  };

  // Handle clear
  const handleClear = () => {
    if (onClear) {
      onClear();
    }
  };

  // Handle password visibility toggle
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Handle tag deletion
  const handleTagDelete = (tagId: string) => {
    if (onTagRemove) {
      onTagRemove(tagId);
    }
  };

  // Render based on variant
  if (variant === 'tags') {
    return (
      <div className={className}>
        <StyledEchoTextField
          echoSize={size}
          echoState={state}
          label={label}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          required={required}
          fullWidth={fullWidth}
          error={state === 'error'}
          variant="outlined"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          InputProps={{
            startAdornment: (
              <>
                {getLeadingIcon() && (
                  <InputAdornment position="start">
                    {getLeadingIcon()}
                  </InputAdornment>
                )}
                {tags.length > 0 && (
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: echoTokens.spacing[4],
                    marginRight: echoTokens.spacing[8],
                  }}>
                    {tags.map((tag) => (
                      <StyledEchoChip
                        key={tag.id}
                        label={tag.label}
                        size={size === 'small' ? 'small' : 'medium'}
                        onDelete={() => handleTagDelete(tag.id)}
                        deleteIcon={<CloseIcon />}
                      />
                    ))}
                  </div>
                )}
              </>
            ),
            endAdornment: (
              <>
                {getStateIcon() && (
                  <InputAdornment position="end">
                    {getStateIcon()}
                  </InputAdornment>
                )}
                {showClear && value && !disabled && (
                  <InputAdornment position="end">
                    <CloseIcon 
                      onClick={handleClear}
                      style={{ cursor: 'pointer' }}
                    />
                  </InputAdornment>
                )}
              </>
            ),
          }}
          helperText={message}
        />
      </div>
    );
  }

  if (variant === 'autocomplete') {
    return (
      <div className={className}>
        <Autocomplete
          options={options}
          value={autocompleteValue}
          onChange={(event, newValue) => setAutocompleteValue(newValue || '')}
          disabled={disabled}
          fullWidth={fullWidth}
          renderInput={(params) => (
            <StyledEchoTextField
              {...params}
              echoSize={size}
              echoState={state}
              label={label}
              placeholder={placeholder}
              required={required}
              error={state === 'error'}
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <>
                    {getLeadingIcon() && (
                      <InputAdornment position="start">
                        {getLeadingIcon()}
                      </InputAdornment>
                    )}
                    {params.InputProps.startAdornment}
                  </>
                ),
                endAdornment: (
                  <>
                    {getStateIcon() && (
                      <InputAdornment position="end">
                        {getStateIcon()}
                      </InputAdornment>
                    )}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
              helperText={message}
            />
          )}
        />
      </div>
    );
  }

  // Default simple input or password input
  return (
    <div className={className}>
      <StyledEchoTextField
        echoSize={size}
        echoState={state}
        label={label}
        placeholder={placeholder}
        value={value}
        type={variant === 'password' ? (showPassword ? 'text' : 'password') : type}
        disabled={disabled}
        required={required}
        fullWidth={fullWidth}
        error={state === 'error'}
        variant="outlined"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        InputProps={{
          startAdornment: getLeadingIcon() && (
            <InputAdornment position="start">
              {getLeadingIcon()}
            </InputAdornment>
          ),
          endAdornment: (
            <>
              {variant === 'password' && (
                <InputAdornment position="end">
                  {showPassword ? (
                    <VisibilityOffIcon 
                      onClick={handleTogglePassword}
                      style={{ cursor: 'pointer' }}
                    />
                  ) : (
                    <VisibilityIcon 
                      onClick={handleTogglePassword}
                      style={{ cursor: 'pointer' }}
                    />
                  )}
                </InputAdornment>
              )}
              {getStateIcon() && (
                <InputAdornment position="end">
                  {getStateIcon()}
                </InputAdornment>
              )}
              {showClear && value && !disabled && variant !== 'password' && (
                <InputAdornment position="end">
                  <CloseIcon 
                    onClick={handleClear}
                    style={{ cursor: 'pointer' }}
                  />
                </InputAdornment>
              )}
            </>
          ),
        }}
        helperText={message}
      />
    </div>
  );
};

export default EnhancedInput;
