import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import type { PaginationProps } from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import { 
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight,
  MoreHoriz,
} from '@mui/icons-material';

/**
 * Echo MUI Pagination
 * 
 * MUI Pagination component styled with Echo design tokens
 */

interface EchoMUIPaginationProps extends Omit<PaginationProps, 'size'> {
  /** Current page number (1-based) */
  page?: number;
  /** Total number of pages */
  count?: number;
  /** Echo size variants */
  size?: 'small' | 'default' | 'large';
  /** Show first and last page buttons */
  showFirstLast?: boolean;
  /** Maximum number of page buttons to show */
  siblingCount?: number;
  /** Page change handler */
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Color variant */
  variant?: 'primary' | 'secondary';
}

const StyledPagination = styled(Pagination, {
  shouldForwardProp: (prop) => !['echoSize', 'echoVariant'].includes(prop as string),
})<{
  echoSize?: string;
  echoVariant?: string;
}>(({ echoSize = 'default', echoVariant = 'primary' }) => {
  
  // Size variants using Echo tokens
  const sizeStyles = {
    small: {
      '& .MuiPaginationItem-root': {
        fontSize: 'var(--type-size-sm)',
        minWidth: '28px',
        height: '28px',
        padding: '0 var(--spacing-sizing-6px)',
        margin: '0 var(--spacing-sizing-2px)',
      },
      '& .MuiPaginationItem-icon': {
        fontSize: 'var(--icon-size-sm)',
      },
    },
    default: {
      '& .MuiPaginationItem-root': {
        fontSize: 'var(--type-size-base)',
        minWidth: '32px',
        height: '32px',
        padding: '0 var(--spacing-sizing-8px)',
        margin: '0 var(--spacing-sizing-2px)',
      },
      '& .MuiPaginationItem-icon': {
        fontSize: 'var(--icon-size-md)',
      },
    },
    large: {
      '& .MuiPaginationItem-root': {
        fontSize: 'var(--type-size-lg)',
        minWidth: '40px',
        height: '40px',
        padding: '0 var(--spacing-sizing-12px)',
        margin: '0 var(--spacing-sizing-4px)',
      },
      '& .MuiPaginationItem-icon': {
        fontSize: 'var(--icon-size-lg)',
      },
    },
  };

  // Variant colors using Echo tokens
  const variantColors = {
    primary: {
      main: 'var(--primary-blue-blue)',
      light: 'var(--primary-blue-blue-50)',
      dark: 'var(--primary-blue-blue-600)',
    },
    secondary: {
      main: 'var(--primary-seafoam-seafoam)',
      light: 'var(--primary-seafoam-50)',
      dark: 'var(--primary-seafoam-dark-seafoam)',
    },
  };

  const colors = variantColors[echoVariant as keyof typeof variantColors];

  return {
    '& .MuiPaginationItem-root': {
      fontFamily: 'var(--type-typeface-roboto-flex)',
      fontWeight: 'var(--type-weight-medium)',
      borderRadius: 'var(--spacing-radius-4px)',
      border: '1px solid var(--neutral-gray-gray-300)',
      backgroundColor: 'var(--base-white)',
      color: 'var(--neutral-gray-gray-700)',
      transition: 'all var(--transition-fast)',
      
      '&:hover': {
        backgroundColor: 'var(--neutral-gray-gray-50)',
        borderColor: 'var(--neutral-gray-gray-400)',
      },
      
      '&.Mui-selected': {
        backgroundColor: colors.main,
        borderColor: colors.main,
        color: 'var(--base-white)',
        
        '&:hover': {
          backgroundColor: colors.dark,
          borderColor: colors.dark,
        },
      },
      
      '&.Mui-disabled': {
        opacity: 'var(--opacity-disabled)',
        backgroundColor: 'var(--neutral-gray-gray-100)',
        borderColor: 'var(--neutral-gray-gray-200)',
        color: 'var(--neutral-gray-gray-400)',
        cursor: 'not-allowed',
      },
      
      '&.MuiPaginationItem-ellipsis': {
        border: 'none',
        backgroundColor: 'transparent',
        color: 'var(--neutral-gray-gray-500)',
        
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
    
    // Navigation buttons (previous/next)
    '& .MuiPaginationItem-previousNext': {
      backgroundColor: 'var(--base-white)',
      border: '1px solid var(--neutral-gray-gray-300)',
      
      '&:hover:not(.Mui-disabled)': {
        backgroundColor: colors.light,
        borderColor: colors.main,
        color: colors.main,
      },
      
      '&.Mui-disabled': {
        backgroundColor: 'var(--neutral-gray-gray-100)',
        borderColor: 'var(--neutral-gray-gray-200)',
        color: 'var(--neutral-gray-gray-400)',
      },
    },
    
    // First/Last page buttons
    '& .MuiPaginationItem-firstLast': {
      backgroundColor: 'var(--base-white)',
      border: '1px solid var(--neutral-gray-gray-300)',
      
      '&:hover:not(.Mui-disabled)': {
        backgroundColor: colors.light,
        borderColor: colors.main,
        color: colors.main,
      },
      
      '&.Mui-disabled': {
        backgroundColor: 'var(--neutral-gray-gray-100)',
        borderColor: 'var(--neutral-gray-gray-200)',
        color: 'var(--neutral-gray-gray-400)',
      },
    },
    
    // Apply size styles
    ...sizeStyles[echoSize as keyof typeof sizeStyles],
  };
});

// Custom icons that match Echo design

type CustomPaginationItemProps = React.ComponentProps<typeof PaginationItem>;

const CustomPaginationItem = (props: CustomPaginationItemProps) => {
  const { type, ...other } = props;
  
  const iconMap = {
    'first': <FirstPage />,
    'last': <LastPage />,
    'previous': <ChevronLeft />,
    'next': <ChevronRight />,
    'start-ellipsis': <MoreHoriz />,
    'end-ellipsis': <MoreHoriz />,
  };
  
  return (
    <PaginationItem
      {...other}
      type={type}
      slots={{
        first: () => iconMap['first'],
        last: () => iconMap['last'],
        previous: () => iconMap['previous'],
        next: () => iconMap['next'],
        startEllipsis: () => iconMap['start-ellipsis'],
        endEllipsis: () => iconMap['end-ellipsis'],
      }}
    />
  );
};

export const EchoMUIPagination: React.FC<EchoMUIPaginationProps> = ({
  page = 1,
  count = 10,
  size = 'default',
  showFirstLast = false,
  siblingCount = 1,
  onChange,
  disabled = false,
  variant = 'primary',
  ...props
}) => {
  return (
    <StyledPagination
      page={page}
      count={count}
      onChange={onChange}
      disabled={disabled}
      siblingCount={siblingCount}
      showFirstButton={showFirstLast}
      showLastButton={showFirstLast}
      renderItem={(item) => (
        <CustomPaginationItem {...item} />
      )}
      echoSize={size}
      echoVariant={variant}
      {...props}
    />
  );
};

export default EchoMUIPagination;
