import { useMemo, type ReactNode } from 'react';
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

export const createEchoMUITheme = () => {
  const getColor = (token: string, fallback: string) => getCSSVar(token) || fallback;
  const getSize = (token: string, fallback: string) => getCSSVar(token) || fallback;

  const spacingUnit = getSize('--spacing-sizing-4px', '4px');
  const buttonPaddingSmall = `${getSize('--spacing-sizing-6px', '6px')} ${getSize('--spacing-sizing-12px', '12px')}`;
  const buttonPaddingMedium = `${getSize('--spacing-sizing-8px', '8px')} ${getSize('--spacing-sizing-16px', '16px')}`;
  const buttonPaddingLarge = `${getSize('--spacing-sizing-12px', '12px')} ${getSize('--spacing-sizing-20px', '20px')}`;

  const buttonHeightSmall = getSize('--sizing-button-height-small', '32px');
  const buttonHeightDefault = getSize('--sizing-button-height-default', '40px');
  const buttonHeightLarge = getSize('--sizing-button-height-large', '48px');

  const borderRadiusMd = getSize('--spacing-radius-4px', '4px');
  const borderRadiusLg = getSize('--spacing-radius-8px', '8px');
  const borderRadiusPill = getSize('--spacing-radius-full', '9999px');

  const transitionFast = getSize('--transition-fast', '150ms ease-in-out');

  const shadowNone = 'none';
  const shadowSm = getSize('--shadow-sm', '0px 2px 4px rgba(39, 39, 39, 0.1)');
  const shadowMd = getSize('--shadow-md', '0px 5px 10px rgba(39, 39, 39, 0.1)');
  const shadowLg = getSize('--shadow-lg', '0px 12px 20px rgba(39, 39, 39, 0.15)');
  const shadowXl = getSize('--shadow-xl', '0px 32px 48px rgba(39, 39, 39, 0.2)');
  const shadow2Xl = getSize('--shadow-2xl', '0px 48px 80px rgba(39, 39, 39, 0.25)');

  const shadows: string[] = [shadowNone, shadowSm, shadowMd, shadowLg, shadowXl, shadow2Xl];
  while (shadows.length < 25) {
    shadows.push(shadow2Xl);
  }

  return createTheme({
    palette: {
      primary: {
        main: getColor('--primary-blue-blue', '#2F42BD'),
        light: getColor('--primary-blue-blue-300', '#95A0E5'),
        dark: getColor('--primary-blue-dark-blue', '#191E3C'),
        contrastText: getColor('--base-white', '#FFFFFF'),
      },
      secondary: {
        main: getColor('--primary-seafoam-seafoam', '#8BBF9F'),
        light: getColor('--primary-seafoam-seafoam-100', '#DCECE2'),
        dark: getColor('--primary-seafoam-dark-seafoam', '#4B6D58'),
        contrastText: getColor('--base-white', '#FFFFFF'),
      },
      error: {
        main: getColor('--status-red', '#CE2031'),
        light: getColor('--status-red-light', '#FBEBEB'),
        dark: getColor('--status-red-600', '#B91C1C'),
        contrastText: getColor('--base-white', '#FFFFFF'),
      },
      warning: {
        main: getColor('--status-orange-alt', '#F4A403'),
        light: getColor('--status-orange-light', '#FEF4DA'),
        dark: getColor('--status-dark-orange', '#D07C06'),
        contrastText: getColor('--base-white', '#FFFFFF'),
      },
      success: {
        main: getColor('--status-green', '#70CC67'),
        light: getColor('--status-green-light', '#F2FFF1'),
        dark: getColor('--status-dark-green', '#227F1A'),
        contrastText: getColor('--base-white', '#FFFFFF'),
      },
      info: {
        main: getColor('--primary-sky-blue-sky-blue', '#0BA7EA'),
        light: getColor('--primary-sky-blue-100', '#E0F6FE'),
        dark: getColor('--primary-sky-blue-dark-sky-blue', '#04435E'),
        contrastText: getColor('--base-white', '#FFFFFF'),
      },
      grey: {
        50: getColor('--neutral-gray-gray-50', '#F9FAFB'),
        100: getColor('--neutral-gray-gray-100', '#F3F4F6'),
        200: getColor('--neutral-gray-gray-200', '#E5E7EB'),
        300: getColor('--neutral-gray-gray-300', '#D2D5DA'),
        400: getColor('--neutral-gray-gray-400', '#9CA3AF'),
        500: getColor('--neutral-gray-gray-500', '#6D7280'),
        600: getColor('--neutral-gray-gray-600', '#4B5563'),
        700: getColor('--neutral-gray-gray-700', '#374151'),
        800: getColor('--neutral-gray-gray-800', '#1F2937'),
        900: getColor('--neutral-gray-gray-900', '#111827'),
      },
      background: {
        default: getColor('--base-white', '#FFFFFF'),
        paper: getColor('--base-white', '#FFFFFF'),
      },
      text: {
        primary: getColor('--base-black', '#1C1C1C'),
        secondary: getColor('--neutral-gray-gray-600', '#4B5563'),
        disabled: getColor('--neutral-gray-gray-400', '#9CA3AF'),
      },
    },

    typography: {
      fontFamily: "var(--type-typeface-roboto-flex, 'Roboto Flex')",
      h1: {
        fontFamily: "var(--type-typeface-archivo, 'Archivo')",
        fontSize: 'var(--type-size-4xl)',
        fontWeight: 'var(--type-weight-semibold)',
        lineHeight: 'var(--type-leading-normal)',
      },
      h2: {
        fontFamily: "var(--type-typeface-archivo, 'Archivo')",
        fontSize: 'var(--type-size-3xl)',
        fontWeight: 'var(--type-weight-semibold)',
        lineHeight: 'var(--type-leading-normal)',
      },
      h3: {
        fontFamily: "var(--type-typeface-archivo, 'Archivo')",
        fontSize: 'var(--type-size-2xl)',
        fontWeight: 'var(--type-weight-semibold)',
        lineHeight: 'var(--type-leading-normal)',
      },
      h4: {
        fontFamily: "var(--type-typeface-archivo, 'Archivo')",
        fontSize: 'var(--type-size-xl)',
        fontWeight: 'var(--type-weight-semibold)',
        lineHeight: 'var(--type-leading-normal)',
      },
      h5: {
        fontFamily: "var(--type-typeface-archivo, 'Archivo')",
        fontSize: 'var(--type-size-lg)',
        fontWeight: 'var(--type-weight-medium)',
        lineHeight: 'var(--type-leading-normal)',
      },
      h6: {
        fontFamily: "var(--type-typeface-archivo, 'Archivo')",
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
        fontFamily: "var(--type-typeface-archivo, 'Archivo')",
        fontSize: 'var(--type-size-sm)',
        fontWeight: 'var(--type-weight-medium)',
        textTransform: 'none',
      },
    },

    spacing: (factor: number) => `calc(${factor} * ${spacingUnit})`,

    shape: {
      borderRadius: borderRadiusMd,
    },

    shadows,

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

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: borderRadiusMd,
            textTransform: 'none',
            fontFamily: "var(--type-typeface-archivo, 'Archivo')",
            fontWeight: 'var(--type-weight-medium)',
            transition: `all ${transitionFast}`,
            '&.MuiButton-sizeSmall': {
              padding: buttonPaddingSmall,
              fontSize: 'var(--type-size-sm)',
              minHeight: buttonHeightSmall,
            },
            '&.MuiButton-sizeMedium': {
              padding: buttonPaddingMedium,
              fontSize: 'var(--type-size-sm)',
              minHeight: buttonHeightDefault,
            },
            '&.MuiButton-sizeLarge': {
              padding: buttonPaddingLarge,
              fontSize: 'var(--type-size-base)',
              minHeight: buttonHeightLarge,
            },
          },
          containedPrimary: {
            backgroundColor: getColor('--primary-blue-blue', '#2F42BD'),
            color: getColor('--base-white', '#FFFFFF'),
            '&:hover': {
              backgroundColor: getColor('--primary-blue-blue-600', '#253699'),
            },
            '&:active': {
              backgroundColor: getColor('--primary-blue-blue-700', '#1B2B75'),
            },
          },
          outlinedPrimary: {
            borderColor: getColor('--primary-blue-blue', '#2F42BD'),
            color: getColor('--primary-blue-blue', '#2F42BD'),
            '&:hover': {
              borderColor: getColor('--primary-blue-blue-600', '#253699'),
              backgroundColor: getColor('--primary-blue-blue-50', '#F9F9FE'),
            },
          },
        },
      },

      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: borderRadiusMd,
              fontFamily: "var(--type-typeface-roboto-flex, 'Roboto Flex')",
              '& fieldset': {
                borderColor: getColor('--neutral-gray-gray-300', '#D2D5DA'),
              },
              '&:hover fieldset': {
                borderColor: getColor('--neutral-gray-gray-400', '#9CA3AF'),
              },
              '&.Mui-focused fieldset': {
                borderColor: getColor('--primary-blue-blue', '#2F42BD'),
                borderWidth: getSize('--spacing-stroke-2px', '2px'),
              },
            },
            '& .MuiInputLabel-root': {
              fontFamily: "var(--type-typeface-archivo, 'Archivo')",
              color: getColor('--neutral-gray-gray-600', '#4B5563'),
              '&.Mui-focused': {
                color: getColor('--primary-blue-blue', '#2F42BD'),
              },
            },
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: borderRadiusLg,
            boxShadow: shadowSm,
            border: `1px solid ${getColor('--neutral-gray-gray-200', '#E5E7EB')}`,
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: borderRadiusPill,
            fontFamily: "var(--type-typeface-roboto-flex, 'Roboto Flex')",
            fontSize: 'var(--type-size-sm)',
          },
        },
      },
    },
  });
};

export const echoTheme = createEchoMUITheme();

type EchoMUIThemeProviderProps = {
  children: ReactNode;
};

export const EchoMUIThemeProvider = ({ children }: EchoMUIThemeProviderProps) => {
  const theme = useMemo(() => createEchoMUITheme(), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default EchoMUIThemeProvider;
