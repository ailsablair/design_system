import React from 'react';
import { Chip } from '@mui/material';
import type { ChipProps } from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import { Close as CloseIcon } from '@mui/icons-material';

/**
 * Echo MUI Tag (Chip)
 * 
 * MUI Chip component styled with Echo design tokens
 */

interface EchoMUITagProps extends Omit<ChipProps, 'size' | 'color' | 'variant'> {
  /** Tag label text */
  label: string;
  /** Echo size variants */
  size?: 'small' | 'default' | 'large';
  /** Echo color variants */
  variant?: 'light-gray' | 'primary' | 'secondary' | 'blue' | 'cyan' | 'orange' | 'gray' | 'purple' | 'green' | 'red' | 'yellow' | 'black' | 'outline-blue' | 'outline-info-blue';
  /** Show close button */
  showClose?: boolean;
  /** Light style variant */
  light?: boolean;
  /** Interactive/clickable */
  clickable?: boolean;
  /** onRemove event handler */
  onRemove?: () => void;
  /** onClick event handler */
  onClick?: () => void;
}

const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => !['echoSize', 'echoVariant', 'echoLight'].includes(prop as string),
})<{
  echoSize?: string;
  echoVariant?: string;
  echoLight?: boolean;
}>(({ theme, echoSize = 'default', echoVariant = 'light-gray', echoLight = false }) => {
  
  // Size variants using Echo tokens
  const sizeStyles = {
    small: {
      height: 'var(--sizing-button-height-extra-small)',
      fontSize: 'var(--type-size-xs)',
      '& .MuiChip-label': {
        padding: '0 var(--spacing-sizing-6px)',
      },
      '& .MuiChip-deleteIcon': {
        width: 'var(--icon-size-xs)',
        height: 'var(--icon-size-xs)',
        marginRight: 'var(--spacing-sizing-2px)',
        marginLeft: 'var(--spacing-sizing-2px)',
      },
    },
    default: {
      height: 'var(--sizing-button-height-small)',
      fontSize: 'var(--type-size-sm)',
      '& .MuiChip-label': {
        padding: '0 var(--spacing-sizing-8px)',
      },
      '& .MuiChip-deleteIcon': {
        width: 'var(--icon-size-sm)',
        height: 'var(--icon-size-sm)',
        marginRight: 'var(--spacing-sizing-2px)',
        marginLeft: 'var(--spacing-sizing-4px)',
      },
    },
    large: {
      height: 'var(--sizing-button-height-default)',
      fontSize: 'var(--type-size-base)',
      '& .MuiChip-label': {
        padding: '0 var(--spacing-sizing-12px)',
      },
      '& .MuiChip-deleteIcon': {
        width: 'var(--icon-size-md)',
        height: 'var(--icon-size-md)',
        marginRight: 'var(--spacing-sizing-4px)',
        marginLeft: 'var(--spacing-sizing-4px)',
      },
    },
  };

  // Variant colors using Echo tokens
  const getVariantStyles = () => {
    
    switch (echoVariant) {
      case 'light-gray':
        return {
          backgroundColor: echoLight ? 'var(--neutral-gray-gray-50)' : 'var(--neutral-gray-gray-100)',
          color: 'var(--neutral-gray-gray-700)',
          borderColor: 'var(--neutral-gray-gray-200)',
        };
      case 'primary':
        return {
          backgroundColor: echoLight ? 'var(--primary-blue-blue-50)' : 'var(--primary-blue-blue)',
          color: echoLight ? 'var(--primary-blue-blue)' : 'var(--base-white)',
          borderColor: 'var(--primary-blue-blue)',
        };
      case 'secondary':
        return {
          backgroundColor: echoLight ? 'var(--primary-seafoam-50)' : 'var(--primary-seafoam-seafoam)',
          color: echoLight ? 'var(--primary-seafoam-seafoam)' : 'var(--base-white)',
          borderColor: 'var(--primary-seafoam-seafoam)',
        };
      case 'blue':
        return {
          backgroundColor: echoLight ? 'var(--primary-sky-blue-50)' : 'var(--primary-sky-blue-sky-blue)',
          color: echoLight ? 'var(--primary-sky-blue-sky-blue)' : 'var(--base-white)',
          borderColor: 'var(--primary-sky-blue-sky-blue)',
        };
      case 'green':
        return {
          backgroundColor: echoLight ? 'var(--status-green-light)' : 'var(--status-green)',
          color: echoLight ? 'var(--status-dark-green)' : 'var(--base-white)',
          borderColor: 'var(--status-green)',
        };
      case 'red':
        return {
          backgroundColor: echoLight ? 'var(--status-red-light)' : 'var(--status-red)',
          color: echoLight ? 'var(--status-dark-red)' : 'var(--base-white)',
          borderColor: 'var(--status-red)',
        };
      case 'orange':
        return {
          backgroundColor: echoLight ? 'var(--status-orange-light)' : 'var(--status-orange)',
          color: echoLight ? 'var(--status-dark-orange)' : 'var(--base-white)',
          borderColor: 'var(--status-orange)',
        };
      case 'yellow':
        return {
          backgroundColor: echoLight ? 'var(--primary-yellow-50)' : 'var(--primary-yellow-yellow)',
          color: echoLight ? 'var(--primary-yellow-dark-yellow)' : 'var(--base-black)',
          borderColor: 'var(--primary-yellow-yellow)',
        };
      case 'purple':
        return {
          backgroundColor: echoLight ? 'var(--primary-purple-50)' : 'var(--primary-purple-purple)',
          color: echoLight ? 'var(--primary-purple-purple)' : 'var(--base-white)',
          borderColor: 'var(--primary-purple-purple)',
        };
      case 'gray':
        return {
          backgroundColor: echoLight ? 'var(--neutral-gray-gray-100)' : 'var(--neutral-gray-gray-600)',
          color: echoLight ? 'var(--neutral-gray-gray-600)' : 'var(--base-white)',
          borderColor: 'var(--neutral-gray-gray-600)',
        };
      case 'black':
        return {
          backgroundColor: echoLight ? 'var(--neutral-gray-gray-100)' : 'var(--base-black)',
          color: echoLight ? 'var(--base-black)' : 'var(--base-white)',
          borderColor: 'var(--base-black)',
        };
      case 'outline-blue':
        return {
          backgroundColor: 'transparent',
          color: 'var(--primary-blue-blue)',
          borderColor: 'var(--primary-blue-blue)',
          border: '1px solid var(--primary-blue-blue)',
        };
      case 'outline-info-blue':
        return {
          backgroundColor: 'transparent',
          color: 'var(--primary-sky-blue-sky-blue)',
          borderColor: 'var(--primary-sky-blue-sky-blue)',
          border: '1px solid var(--primary-sky-blue-sky-blue)',
        };
      default:
        return {
          backgroundColor: 'var(--neutral-gray-gray-100)',
          color: 'var(--neutral-gray-gray-700)',
          borderColor: 'var(--neutral-gray-gray-200)',
        };
    }
  };

  const variantStyles = getVariantStyles();

  return {
    fontFamily: 'var(--type-typeface-roboto-flex)',
    fontWeight: 'var(--type-weight-medium)',
    borderRadius: 'var(--spacing-radius-full)',
    border: '1px solid transparent',
    transition: 'all var(--transition-fast)',
    cursor: 'default',
    
    // Apply variant styles
    ...variantStyles,
    
    // Apply size styles
    ...sizeStyles[echoSize as keyof typeof sizeStyles],
    
    // Clickable states
    '&.MuiChip-clickable': {
      cursor: 'pointer',
      
      '&:hover': {
        opacity: 0.8,
        transform: 'translateY(-1px)',
        boxShadow: 'var(--shadow-sm)',
      },
      
      '&:active': {
        transform: 'translateY(0)',
      },
      
      '&:focus-visible': {
        outline: '2px solid var(--primary-blue-blue)',
        outlineOffset: '2px',
      },
    },
    
    // Disabled state
    '&.Mui-disabled': {
      opacity: 'var(--opacity-disabled)',
      cursor: 'not-allowed',
      backgroundColor: 'var(--neutral-gray-gray-100)',
      color: 'var(--neutral-gray-gray-400)',
      borderColor: 'var(--neutral-gray-gray-200)',
    },
    
    // Delete icon styling
    '& .MuiChip-deleteIcon': {
      color: 'currentColor',
      opacity: 0.7,
      transition: 'all var(--transition-fast)',
      
      '&:hover': {
        opacity: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: '50%',
      },
    },
  };
});

export const EchoMUITag: React.FC<EchoMUITagProps> = ({
  label,
  size = 'default',
  variant = 'light-gray',
  showClose = false,
  light = false,
  clickable = false,
  onRemove,
  onClick,
  disabled = false,
  ...props
}) => {
  const handleDelete = onRemove ? () => onRemove() : undefined;

  return (
    <StyledChip
      label={label}
      clickable={clickable || !!onClick}
      disabled={disabled}
      onDelete={showClose ? handleDelete : undefined}
      deleteIcon={showClose ? <CloseIcon /> : undefined}
      onClick={onClick}
      echoSize={size}
      echoVariant={variant}
      echoLight={light}
      {...props}
    />
  );
};

export default EchoMUITag;
