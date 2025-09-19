import React from 'react';
import { 
  Card as MUICard, 
  CardContent as MUICardContent,
  CardActions as MUICardActions,
  CardHeader as MUICardHeader,
  Divider as MUIDivider,
  Box,
  Stack as MUIStack,
  Grid as MUIGrid,
  Container as MUIContainer,
  Paper as MUIPaper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Echo MUI Layout Components
 * 
 * Layout components using MUI foundation with Echo design tokens
 */

// Enhanced Card Component
const StyledCard = styled(MUICard)(({ theme }) => ({
  borderRadius: 'var(--spacing-radius-8px)',
  boxShadow: 'var(--shadow-sm)',
  border: '1px solid var(--neutral-gray-gray-200)',
  backgroundColor: 'var(--base-white)',
  transition: 'all var(--transition-fast)',
  
  '&:hover': {
    boxShadow: 'var(--shadow-md)',
    transform: 'translateY(-1px)',
  },
}));

interface EchoMUICardProps {
  children: React.ReactNode;
  elevation?: 'none' | 'small' | 'medium' | 'large';
  interactive?: boolean;
  padding?: 'none' | 'small' | 'medium' | 'large';
  className?: string;
}

export const EchoMUICard: React.FC<EchoMUICardProps> = ({
  children,
  elevation = 'small',
  interactive = false,
  padding = 'medium',
  className,
  ...props
}) => {
  const elevationStyles = {
    none: { boxShadow: 'none', border: '1px solid var(--neutral-gray-gray-200)' },
    small: { boxShadow: 'var(--shadow-sm)' },
    medium: { boxShadow: 'var(--shadow-md)' },
    large: { boxShadow: 'var(--shadow-lg)' },
  };

  const paddingStyles = {
    none: { padding: 0 },
    small: { padding: 'var(--spacing-sizing-12px)' },
    medium: { padding: 'var(--spacing-sizing-16px)' },
    large: { padding: 'var(--spacing-sizing-24px)' },
  };

  return (
    <StyledCard
      className={className}
      sx={{
        ...elevationStyles[elevation],
        ...(interactive && {
          cursor: 'pointer',
          '&:hover': {
            boxShadow: 'var(--shadow-lg)',
            transform: 'translateY(-2px)',
          },
        }),
        '& .MuiCardContent-root': paddingStyles[padding],
      }}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

// Enhanced Divider Component
const StyledDivider = styled(MUIDivider, {
  shouldForwardProp: (prop) => !['echoVariant', 'echoSpacing'].includes(prop as string),
})<{
  echoVariant?: string;
  echoSpacing?: string;
}>(({ theme, echoVariant = 'default', echoSpacing = 'medium' }) => {
  const variantStyles = {
    default: {
      borderColor: 'var(--neutral-gray-gray-200)',
    },
    bold: {
      borderColor: 'var(--neutral-gray-gray-300)',
      borderWidth: '2px',
    },
    light: {
      borderColor: 'var(--neutral-gray-gray-100)',
    },
    primary: {
      borderColor: 'var(--primary-blue-blue)',
    },
  };

  const spacingStyles = {
    none: { margin: 0 },
    small: { margin: 'var(--spacing-sizing-8px) 0' },
    medium: { margin: 'var(--spacing-sizing-16px) 0' },
    large: { margin: 'var(--spacing-sizing-24px) 0' },
  };

  return {
    ...variantStyles[echoVariant as keyof typeof variantStyles],
    ...spacingStyles[echoSpacing as keyof typeof spacingStyles],
  };
});

interface EchoMUIDividerProps {
  variant?: 'default' | 'bold' | 'light' | 'primary';
  spacing?: 'none' | 'small' | 'medium' | 'large';
  orientation?: 'horizontal' | 'vertical';
  textAlign?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
}

export const EchoMUIDivider: React.FC<EchoMUIDividerProps> = ({
  variant = 'default',
  spacing = 'medium',
  orientation = 'horizontal',
  textAlign = 'center',
  children,
  ...props
}) => {
  return (
    <StyledDivider
      orientation={orientation}
      textAlign={textAlign}
      echoVariant={variant}
      echoSpacing={spacing}
      {...props}
    >
      {children}
    </StyledDivider>
  );
};

// Enhanced Stack Component
const StyledStack = styled(MUIStack)(({ theme }) => ({
  '&.echo-stack': {
    gap: 'var(--spacing-sizing-16px)',
  },
}));

interface EchoMUIStackProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  spacing?: 'small' | 'medium' | 'large' | number;
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: boolean;
  className?: string;
}

export const EchoMUIStack: React.FC<EchoMUIStackProps> = ({
  children,
  direction = 'column',
  spacing = 'medium',
  alignItems,
  justifyContent,
  wrap = false,
  className,
  ...props
}) => {
  const spacingMap = {
    small: 'var(--spacing-sizing-8px)',
    medium: 'var(--spacing-sizing-16px)',
    large: 'var(--spacing-sizing-24px)',
  };

  const gapValue = typeof spacing === 'number' ? `${spacing * 4}px` : spacingMap[spacing];

  return (
    <StyledStack
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      className={`echo-stack ${className || ''}`}
      sx={{
        gap: gapValue,
        flexWrap: wrap ? 'wrap' : 'nowrap',
      }}
      {...props}
    >
      {children}
    </StyledStack>
  );
};

// Enhanced Container Component
const StyledContainer = styled(MUIContainer)(({ theme }) => ({
  paddingLeft: 'var(--spacing-sizing-16px)',
  paddingRight: 'var(--spacing-sizing-16px)',
  
  '&.MuiContainer-maxWidthSm': {
    maxWidth: '640px',
  },
  '&.MuiContainer-maxWidthMd': {
    maxWidth: '768px',
  },
  '&.MuiContainer-maxWidthLg': {
    maxWidth: '1024px',
  },
  '&.MuiContainer-maxWidthXl': {
    maxWidth: '1280px',
  },
}));

interface EchoMUIContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false;
  padding?: 'none' | 'small' | 'medium' | 'large';
  centered?: boolean;
  className?: string;
}

export const EchoMUIContainer: React.FC<EchoMUIContainerProps> = ({
  children,
  maxWidth = 'lg',
  padding = 'medium',
  centered = false,
  className,
  ...props
}) => {
  const paddingStyles = {
    none: { padding: 0 },
    small: { padding: 'var(--spacing-sizing-12px)' },
    medium: { padding: 'var(--spacing-sizing-16px)' },
    large: { padding: 'var(--spacing-sizing-24px)' },
  };

  return (
    <StyledContainer
      maxWidth={maxWidth}
      className={className}
      sx={{
        ...paddingStyles[padding],
        ...(centered && {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }),
      }}
      {...props}
    >
      {children}
    </StyledContainer>
  );
};

// Enhanced Paper Component
const StyledPaper = styled(MUIPaper)(({ theme }) => ({
  backgroundColor: 'var(--base-white)',
  borderRadius: 'var(--spacing-radius-8px)',
  border: '1px solid var(--neutral-gray-gray-200)',
}));

interface EchoMUIPaperProps {
  children: React.ReactNode;
  elevation?: 0 | 1 | 2 | 3 | 4;
  padding?: 'none' | 'small' | 'medium' | 'large';
  className?: string;
}

export const EchoMUIPaper: React.FC<EchoMUIPaperProps> = ({
  children,
  elevation = 1,
  padding = 'medium',
  className,
  ...props
}) => {
  const elevationMap = {
    0: 'none',
    1: 'var(--shadow-sm)',
    2: 'var(--shadow-md)',
    3: 'var(--shadow-lg)',
    4: 'var(--shadow-xl)',
  };

  const paddingStyles = {
    none: { padding: 0 },
    small: { padding: 'var(--spacing-sizing-12px)' },
    medium: { padding: 'var(--spacing-sizing-16px)' },
    large: { padding: 'var(--spacing-sizing-24px)' },
  };

  return (
    <StyledPaper
      elevation={0} // Override MUI elevation
      className={className}
      sx={{
        boxShadow: elevationMap[elevation],
        ...paddingStyles[padding],
      }}
      {...props}
    >
      {children}
    </StyledPaper>
  );
};

// Layout Helper Component
interface EchoMUILayoutProps {
  children: React.ReactNode;
  variant?: 'page' | 'section' | 'card';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false;
  spacing?: 'small' | 'medium' | 'large';
  centered?: boolean;
}

export const EchoMUILayout: React.FC<EchoMUILayoutProps> = ({
  children,
  variant = 'section',
  maxWidth = 'lg',
  spacing = 'medium',
  centered = false,
}) => {
  const spacingMap = {
    small: 'var(--spacing-sizing-16px)',
    medium: 'var(--spacing-sizing-24px)',
    large: 'var(--spacing-sizing-32px)',
  };

  if (variant === 'page') {
    return (
      <EchoMUIContainer maxWidth={maxWidth} padding="large" centered={centered}>
        <EchoMUIStack spacing={spacing}>
          {children}
        </EchoMUIStack>
      </EchoMUIContainer>
    );
  }

  if (variant === 'card') {
    return (
      <EchoMUICard padding="large">
        <EchoMUIStack spacing={spacing}>
          {children}
        </EchoMUIStack>
      </EchoMUICard>
    );
  }

  return (
    <Box sx={{ padding: spacingMap[spacing] }}>
      <EchoMUIStack spacing={spacing}>
        {children}
      </EchoMUIStack>
    </Box>
  );
};

// Re-export MUI Grid with Echo styling
export const EchoMUIGrid = styled(MUIGrid)(({ theme }) => ({
  '&.MuiGrid-container': {
    margin: 0,
    width: '100%',
  },
  '&.MuiGrid-item': {
    paddingLeft: 'var(--spacing-sizing-8px)',
    paddingTop: 'var(--spacing-sizing-8px)',
  },
}));

// Re-export enhanced components
export { MUICardContent as EchoMUICardContent };
export { MUICardActions as EchoMUICardActions };
export { MUICardHeader as EchoMUICardHeader };
