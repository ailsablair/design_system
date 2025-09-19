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
      // Primary colors from Echo tokens (using actual color values for MUI compatibility)
      primary: {
        main: '#2F42BD', // --primary-blue-blue
        light: '#95A0E5', // --primary-blue-blue-300
        dark: '#191E3C', // --primary-blue-dark-blue
        contrastText: '#FFFFFF', // --base-white
      },
      secondary: {
        main: '#8BBF9F', // --primary-seafoam-seafoam
        light: '#DCECE2', // --primary-seafoam-seafoam-100
        dark: '#4B6D58', // --primary-seafoam-dark-seafoam
        contrastText: '#FFFFFF', // --base-white
      },
      error: {
        main: '#CE2031', // --status-red
        light: '#FBEBEB', // --status-red-light
        dark: '#B91C1C', // --status-red-600
        contrastText: '#FFFFFF', // --base-white
      },
      warning: {
        main: '#F4A403', // --status-orange-alt
        light: '#FEF4DA', // --status-orange-light
        dark: '#D07C06', // --status-dark-orange
        contrastText: '#FFFFFF', // --base-white
      },
      success: {
        main: '#70CC67', // --status-green
        light: '#F2FFF1', // --status-green-light
        dark: '#227F1A', // --status-dark-green
        contrastText: '#FFFFFF', // --base-white
      },
      info: {
        main: '#0BA7EA', // --primary-sky-blue-sky-blue
        light: '#E0F6FE', // --primary-sky-blue-100
        dark: '#04435E', // --primary-sky-blue-dark-sky-blue
        contrastText: '#FFFFFF', // --base-white
      },
      // Neutral colors (using actual values for better MUI compatibility)
      grey: {
        50: '#F9FAFB', // --neutral-gray-gray-50
        100: '#F3F4F6', // --neutral-gray-gray-100
        200: '#E5E7EB', // --neutral-gray-gray-200
        300: '#D2D5DA', // --neutral-gray-gray-300
        400: '#9CA3AF', // --neutral-gray-gray-400
        500: '#6D7280', // --neutral-gray-gray-500
        600: '#4B5563', // --neutral-gray-gray-600
        700: '#374151', // --neutral-gray-gray-700
        800: '#1F2937', // --neutral-gray-gray-800
        900: '#111827', // --neutral-gray-gray-900
      },
      // Background colors
      background: {
        default: '#FFFFFF', // --base-white
        paper: '#FFFFFF', // --base-white
      },
      text: {
        primary: '#1C1C1C', // --base-black
        secondary: '#4B5563', // --neutral-gray-gray-600
        disabled: '#9CA3AF', // --neutral-gray-gray-400
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
            backgroundColor: '#2F42BD', // --primary-blue-blue
            color: '#FFFFFF', // --base-white
            '&:hover': {
              backgroundColor: '#253699', // --primary-blue-blue-600
            },
            '&:active': {
              backgroundColor: '#1B2B75', // --primary-blue-blue-700
            },
          },
          outlinedPrimary: {
            borderColor: '#2F42BD', // --primary-blue-blue
            color: '#2F42BD', // --primary-blue-blue
            '&:hover': {
              borderColor: '#253699', // --primary-blue-blue-600
              backgroundColor: '#F9F9FE', // --primary-blue-blue-50
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
                borderColor: '#D2D5DA', // --neutral-gray-gray-300
              },
              '&:hover fieldset': {
                borderColor: '#9CA3AF', // --neutral-gray-gray-400
              },
              '&.Mui-focused fieldset': {
                borderColor: '#2F42BD', // --primary-blue-blue
                borderWidth: 'var(--spacing-stroke-2px)',
              },
            },
            '& .MuiInputLabel-root': {
              fontFamily: 'var(--type-typeface-archivo)',
              color: '#4B5563', // --neutral-gray-gray-600
              '&.Mui-focused': {
                color: '#2F42BD', // --primary-blue-blue
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
            border: '1px solid #E5E7EB', // --neutral-gray-gray-200
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
