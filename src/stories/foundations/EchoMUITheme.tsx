import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

/**
 * Echo Design System + MUI Integration
 * 
 * This theme provider completely overrides MUI's default design tokens 
 * with Echo design system tokens, giving you MUI functionality with 
 * 100% Echo visual design.
 */

// Helper function to extract CSS custom property values
const getCSSVar = (varName: string): string => {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  }
  return '';
};

// Create MUI theme using Echo tokens
const createEchoMUITheme = () => {
  return createTheme({
    palette: {
      // Primary colors from Echo tokens
      primary: {
        main: 'var(--primary-blue-blue)',
        light: 'var(--primary-blue-blue-300)',
        dark: 'var(--primary-blue-dark-blue)',
        contrastText: 'var(--base-white)',
      },
      secondary: {
        main: 'var(--primary-seafoam-seafoam)',
        light: 'var(--primary-seafoam-100)',
        dark: 'var(--primary-seafoam-dark-seafoam)',
        contrastText: 'var(--base-white)',
      },
      error: {
        main: 'var(--status-red)',
        light: 'var(--status-red-light)',
        dark: 'var(--status-dark-red)',
        contrastText: 'var(--base-white)',
      },
      warning: {
        main: 'var(--status-orange)',
        light: 'var(--status-orange-light)',
        dark: 'var(--status-dark-orange)',
        contrastText: 'var(--base-white)',
      },
      success: {
        main: 'var(--status-green)',
        light: 'var(--status-green-light)',
        dark: 'var(--status-dark-green)',
        contrastText: 'var(--base-white)',
      },
      info: {
        main: 'var(--primary-sky-blue-sky-blue)',
        light: 'var(--primary-sky-blue-100)',
        dark: 'var(--primary-sky-blue-dark-sky-blue)',
        contrastText: 'var(--base-white)',
      },
      // Neutral colors
      grey: {
        50: 'var(--neutral-gray-gray-50)',
        100: 'var(--neutral-gray-gray-100)',
        200: 'var(--neutral-gray-gray-200)',
        300: 'var(--neutral-gray-gray-300)',
        400: 'var(--neutral-gray-gray-400)',
        500: 'var(--neutral-gray-gray-500)',
        600: 'var(--neutral-gray-gray-600)',
        700: 'var(--neutral-gray-gray-700)',
        800: 'var(--neutral-gray-gray-800)',
        900: 'var(--neutral-gray-gray-900)',
      },
      // Background colors
      background: {
        default: 'var(--base-white)',
        paper: 'var(--base-white)',
      },
      text: {
        primary: 'var(--base-black)',
        secondary: 'var(--neutral-gray-gray-600)',
        disabled: 'var(--neutral-gray-gray-400)',
      },
    },
    
    typography: {
      // Use Echo font families
      fontFamily: 'var(--type-typeface-roboto-flex)',
      h1: {
        fontFamily: 'var(--type-typeface-archivo)',
        fontSize: 'var(--type-size-4xl)',
        fontWeight: 'var(--type-weight-semibold)',
        lineHeight: 'var(--type-leading-normal)',
      },
      h2: {
        fontFamily: 'var(--type-typeface-archivo)',
        fontSize: 'var(--type-size-3xl)',
        fontWeight: 'var(--type-weight-semibold)',
        lineHeight: 'var(--type-leading-normal)',
      },
      h3: {
        fontFamily: 'var(--type-typeface-archivo)',
        fontSize: 'var(--type-size-2xl)',
        fontWeight: 'var(--type-weight-semibold)',
        lineHeight: 'var(--type-leading-normal)',
      },
      h4: {
        fontFamily: 'var(--type-typeface-archivo)',
        fontSize: 'var(--type-size-xl)',
        fontWeight: 'var(--type-weight-semibold)',
        lineHeight: 'var(--type-leading-normal)',
      },
      h5: {
        fontFamily: 'var(--type-typeface-archivo)',
        fontSize: 'var(--type-size-lg)',
        fontWeight: 'var(--type-weight-medium)',
        lineHeight: 'var(--type-leading-normal)',
      },
      h6: {
        fontFamily: 'var(--type-typeface-archivo)',
        fontSize: 'var(--type-size-base)',
        fontWeight: 'var(--type-weight-medium)',
        lineHeight: 'var(--type-leading-normal)',
      },
      body1: {
        fontSize: 'var(--type-size-base)',
        lineHeight: 'var(--type-leading-relaxed)',
      },
      body2: {
        fontSize: 'var(--type-size-sm)',
        lineHeight: 'var(--type-leading-relaxed)',
      },
      button: {
        fontFamily: 'var(--type-typeface-archivo)',
        fontSize: 'var(--type-size-sm)',
        fontWeight: 'var(--type-weight-medium)',
        textTransform: 'none', // Override MUI's uppercase default
      },
    },
    
    // Override spacing to use Echo tokens
    spacing: (factor: number) => `calc(${factor} * var(--spacing-sizing-4px))`,
    
    shape: {
      borderRadius: 'var(--spacing-radius-4px)',
    },
    
    shadows: [
      'none',
      'var(--shadow-sm)',
      'var(--shadow-md)',
      'var(--shadow-lg)',
      'var(--shadow-xl)',
      'var(--shadow-2xl)',
      // Add more shadow levels as needed
      'var(--shadow-lg)',
      'var(--shadow-xl)',
      'var(--shadow-2xl)',
      'var(--shadow-2xl)',
      'var(--shadow-2xl)',
      'var(--shadow-2xl)',
      'var(--shadow-2xl)',
      'var(--shadow-2xl)',
      'var(--shadow-2xl)',
      'var(--shadow-2xl)',
      'var(--shadow-2xl)',
      'var(--shadow-2xl)',
      'var(--shadow-2xl)',
      'var(--shadow-2xl)',
      'var(--shadow-2xl)',
      'var(--shadow-2xl)',
      'var(--shadow-2xl)',
      'var(--shadow-2xl)',
      'var(--shadow-2xl)',
    ],
    
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
      easing: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
    
    // Component-specific overrides
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 'var(--spacing-radius-4px)',
            textTransform: 'none',
            fontFamily: 'var(--type-typeface-archivo)',
            fontWeight: 'var(--type-weight-medium)',
            transition: 'all var(--transition-fast)',
            
            // Size variants using Echo tokens
            '&.MuiButton-sizeSmall': {
              padding: 'var(--spacing-sizing-6px) var(--spacing-sizing-12px)',
              fontSize: 'var(--type-size-sm)',
              minHeight: 'var(--sizing-button-height-small)',
            },
            '&.MuiButton-sizeMedium': {
              padding: 'var(--spacing-sizing-8px) var(--spacing-sizing-16px)',
              fontSize: 'var(--type-size-sm)',
              minHeight: 'var(--sizing-button-height-default)',
            },
            '&.MuiButton-sizeLarge': {
              padding: 'var(--spacing-sizing-12px) var(--spacing-sizing-20px)',
              fontSize: 'var(--type-size-base)',
              minHeight: 'var(--sizing-button-height-large)',
            },
          },
          containedPrimary: {
            backgroundColor: 'var(--primary-blue-blue)',
            color: 'var(--base-white)',
            '&:hover': {
              backgroundColor: 'var(--primary-blue-blue-600)',
            },
            '&:active': {
              backgroundColor: 'var(--primary-blue-blue-700)',
            },
          },
          outlinedPrimary: {
            borderColor: 'var(--primary-blue-blue)',
            color: 'var(--primary-blue-blue)',
            '&:hover': {
              borderColor: 'var(--primary-blue-blue-600)',
              backgroundColor: 'var(--primary-blue-blue-50)',
            },
          },
        },
      },
      
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 'var(--spacing-radius-4px)',
              fontFamily: 'var(--type-typeface-roboto-flex)',
              
              '& fieldset': {
                borderColor: 'var(--neutral-gray-gray-300)',
              },
              '&:hover fieldset': {
                borderColor: 'var(--neutral-gray-gray-400)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'var(--primary-blue-blue)',
                borderWidth: 'var(--spacing-stroke-2px)',
              },
            },
            '& .MuiInputLabel-root': {
              fontFamily: 'var(--type-typeface-archivo)',
              color: 'var(--neutral-gray-gray-600)',
              '&.Mui-focused': {
                color: 'var(--primary-blue-blue)',
              },
            },
          },
        },
      },
      
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 'var(--spacing-radius-8px)',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--neutral-gray-gray-200)',
          },
        },
      },
      
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 'var(--spacing-radius-full)',
            fontFamily: 'var(--type-typeface-roboto-flex)',
            fontSize: 'var(--type-size-sm)',
          },
        },
      },
      
      // Add more component overrides as needed
    },
  });
};

interface EchoMUIThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Echo MUI Theme Provider
 * 
 * Wrap your app with this provider to use MUI components 
 * styled with Echo design tokens.
 */
export const EchoMUIThemeProvider: React.FC<EchoMUIThemeProviderProps> = ({ children }) => {
  const theme = createEchoMUITheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default EchoMUIThemeProvider;
