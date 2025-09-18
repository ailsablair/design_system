import React from 'react';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

/**
 * MUI Theme Configuration using Echo Design Tokens
 * 
 * This theme provider maps Echo design tokens to MUI's theme structure,
 * ensuring that any MUI component used will follow Echo's design system.
 */

declare module '@mui/material/styles' {
  interface Theme {
    echo: {
      colors: {
        primary: typeof echoTokens.colors.primary;
        secondary: typeof echoTokens.colors.secondary;
        semantic: typeof echoTokens.colors.semantic;
        status: typeof echoTokens.colors.status;
        neutral: typeof echoTokens.colors.neutral;
        base: typeof echoTokens.colors.base;
      };
      typography: typeof echoTokens.typography;
      spacing: typeof echoTokens.spacing;
      shadows: typeof echoTokens.shadows;
      borderRadius: typeof echoTokens.borderRadius;
      transitions: typeof echoTokens.transitions;
    };
  }

  interface ThemeOptions {
    echo?: {
      colors?: {
        primary?: typeof echoTokens.colors.primary;
        secondary?: typeof echoTokens.colors.secondary;
        semantic?: typeof echoTokens.colors.semantic;
        status?: typeof echoTokens.colors.status;
        neutral?: typeof echoTokens.colors.neutral;
        base?: typeof echoTokens.colors.base;
      };
      typography?: typeof echoTokens.typography;
      spacing?: typeof echoTokens.spacing;
      shadows?: typeof echoTokens.shadows;
      borderRadius?: typeof echoTokens.borderRadius;
      transitions?: typeof echoTokens.transitions;
    };
  }
}

// Extract Echo design tokens from CSS custom properties
const echoTokens = {
  colors: {
    primary: {
      blue: 'var(--primary-blue-blue)',
      darkBlue: 'var(--primary-blue-dark-blue)',
      blue50: 'var(--primary-blue-blue-50)',
      blue100: 'var(--primary-blue-blue-100)',
      blue200: 'var(--primary-blue-blue-200)',
      blue300: 'var(--primary-blue-blue-300)',
      blue400: 'var(--primary-blue-blue-400)',
      blue500: 'var(--primary-blue-blue-500)',
      blue600: 'var(--primary-blue-blue-600)',
      blue700: 'var(--primary-blue-blue-700)',
      blue800: 'var(--primary-blue-blue-800)',
      blue900: 'var(--primary-blue-blue-900)',
    },
    secondary: {
      skyBlue: 'var(--primary-sky-blue-sky-blue)',
      seafoam: 'var(--primary-seafoam-seafoam)',
      yellow: 'var(--primary-yellow-yellow)',
      purple: 'var(--primary-purple-500)',
    },
    semantic: {
      success: 'var(--semantic-success)',
      warning: 'var(--semantic-warning)',
      error: 'var(--semantic-error)',
      info: 'var(--semantic-info)',
    },
    status: {
      red: 'var(--status-red)',
      orange: 'var(--status-orange)',
      green: 'var(--status-green)',
      purple: 'var(--status-purple)',
      infoBlue: 'var(--status-info-blue)',
    },
    neutral: {
      gray50: 'var(--neutral-gray-gray-50)',
      gray100: 'var(--neutral-gray-gray-100)',
      gray200: 'var(--neutral-gray-gray-200)',
      gray300: 'var(--neutral-gray-gray-300)',
      gray400: 'var(--neutral-gray-gray-400)',
      gray500: 'var(--neutral-gray-gray-500)',
      gray600: 'var(--neutral-gray-gray-600)',
      gray700: 'var(--neutral-gray-gray-700)',
      gray800: 'var(--neutral-gray-gray-800)',
      gray900: 'var(--neutral-gray-gray-900)',
    },
    base: {
      white: 'var(--base-white)',
      black: 'var(--base-black)',
      transparent: 'var(--base-transparent)',
    },
  },
  typography: {
    fontFamily: {
      base: 'var(--font-family-base)',
      heading: 'var(--font-family-heading)',
      archivo: 'var(--type-typeface-archivo)',
      robotoFlex: 'var(--type-typeface-roboto-flex)',
      inter: 'var(--type-typeface-inter)',
    },
    fontSize: {
      xs: 'var(--type-size-xs)',
      sm: 'var(--type-size-sm)',
      base: 'var(--type-size-base)',
      lg: 'var(--type-size-lg)',
      xl: 'var(--type-size-xl)',
      '2xl': 'var(--type-size-2xl)',
      '3xl': 'var(--type-size-3xl)',
      '4xl': 'var(--type-size-4xl)',
      '5xl': 'var(--type-size-5xl)',
      '6xl': 'var(--type-size-6xl)',
    },
    fontWeight: {
      light: 'var(--type-weight-light)',
      regular: 'var(--type-weight-regular)',
      medium: 'var(--type-weight-medium)',
      semibold: 'var(--type-weight-semibold)',
      bold: 'var(--type-weight-bold)',
    },
    lineHeight: {
      tight: 'var(--type-line-height-tight)',
      normal: 'var(--type-line-height-normal)',
      relaxed: 'var(--type-line-height-relaxed)',
    },
  },
  spacing: {
    0: 'var(--spacing-sizing-0)',
    1: 'var(--spacing-sizing-1px)',
    2: 'var(--spacing-sizing-2px)',
    4: 'var(--spacing-sizing-4px)',
    6: 'var(--spacing-sizing-6px)',
    8: 'var(--spacing-sizing-8px)',
    12: 'var(--spacing-sizing-12px)',
    16: 'var(--spacing-sizing-16px)',
    20: 'var(--spacing-sizing-20px)',
    24: 'var(--spacing-sizing-24px)',
    32: 'var(--spacing-sizing-32px)',
    40: 'var(--spacing-sizing-40px)',
    48: 'var(--spacing-sizing-48px)',
    56: 'var(--spacing-sizing-56px)',
    64: 'var(--spacing-sizing-64px)',
    80: 'var(--spacing-sizing-80px)',
  },
  borderRadius: {
    2: 'var(--spacing-radius-2px)',
    4: 'var(--spacing-radius-4px)',
    6: 'var(--spacing-radius-6px)',
    8: 'var(--spacing-radius-8px)',
    12: 'var(--spacing-radius-12px)',
    16: 'var(--spacing-radius-16px)',
    20: 'var(--spacing-radius-20px)',
    24: 'var(--spacing-radius-24px)',
    full: 'var(--spacing-radius-full)',
  },
  shadows: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)',
    '2xl': 'var(--shadow-2xl)',
    inner: 'var(--shadow-inner)',
    focus: 'var(--shadow-focus)',
  },
  transitions: {
    fast: 'var(--transition-fast)',
    normal: 'var(--transition-normal)',
    slow: 'var(--transition-slow)',
    bounce: 'var(--transition-bounce)',
  },
};

// Create MUI theme using Echo tokens
const createEchoMUITheme = (): Theme => {
  const theme = createTheme({
    // Override MUI's default palette with Echo colors
    palette: {
      mode: 'light',
      primary: {
        main: echoTokens.colors.primary.blue,
        dark: echoTokens.colors.primary.darkBlue,
        light: echoTokens.colors.primary.blue300,
        contrastText: echoTokens.colors.base.white,
      },
      secondary: {
        main: echoTokens.colors.secondary.skyBlue,
        dark: echoTokens.colors.primary.blue700,
        light: echoTokens.colors.primary.blue200,
        contrastText: echoTokens.colors.base.white,
      },
      error: {
        main: echoTokens.colors.status.red,
        light: 'var(--status-red-light)',
        dark: 'var(--status-red-700)',
        contrastText: echoTokens.colors.base.white,
      },
      warning: {
        main: echoTokens.colors.status.orange,
        light: 'var(--status-orange-light)',
        dark: 'var(--status-orange-700)',
        contrastText: echoTokens.colors.base.white,
      },
      success: {
        main: echoTokens.colors.status.green,
        light: 'var(--status-green-light)',
        dark: 'var(--status-green-700)',
        contrastText: echoTokens.colors.base.white,
      },
      info: {
        main: echoTokens.colors.status.infoBlue,
        light: 'var(--status-info-blue-light)',
        dark: echoTokens.colors.primary.blue700,
        contrastText: echoTokens.colors.base.white,
      },
      grey: {
        50: echoTokens.colors.neutral.gray50,
        100: echoTokens.colors.neutral.gray100,
        200: echoTokens.colors.neutral.gray200,
        300: echoTokens.colors.neutral.gray300,
        400: echoTokens.colors.neutral.gray400,
        500: echoTokens.colors.neutral.gray500,
        600: echoTokens.colors.neutral.gray600,
        700: echoTokens.colors.neutral.gray700,
        800: echoTokens.colors.neutral.gray800,
        900: echoTokens.colors.neutral.gray900,
      },
      background: {
        default: echoTokens.colors.base.white,
        paper: echoTokens.colors.base.white,
      },
      text: {
        primary: echoTokens.colors.base.black,
        secondary: echoTokens.colors.neutral.gray600,
        disabled: echoTokens.colors.neutral.gray400,
      },
    },
    
    // Override typography with Echo fonts
    typography: {
      fontFamily: echoTokens.typography.fontFamily.robotoFlex,
      h1: {
        fontFamily: echoTokens.typography.fontFamily.archivo,
        fontSize: echoTokens.typography.fontSize['5xl'],
        fontWeight: echoTokens.typography.fontWeight.medium,
        lineHeight: echoTokens.typography.lineHeight.tight,
      },
      h2: {
        fontFamily: echoTokens.typography.fontFamily.archivo,
        fontSize: echoTokens.typography.fontSize['4xl'],
        fontWeight: echoTokens.typography.fontWeight.medium,
        lineHeight: echoTokens.typography.lineHeight.tight,
      },
      h3: {
        fontFamily: echoTokens.typography.fontFamily.archivo,
        fontSize: echoTokens.typography.fontSize['3xl'],
        fontWeight: echoTokens.typography.fontWeight.medium,
        lineHeight: echoTokens.typography.lineHeight.tight,
      },
      h4: {
        fontFamily: echoTokens.typography.fontFamily.archivo,
        fontSize: echoTokens.typography.fontSize['2xl'],
        fontWeight: echoTokens.typography.fontWeight.medium,
        lineHeight: echoTokens.typography.lineHeight.normal,
      },
      h5: {
        fontFamily: echoTokens.typography.fontFamily.archivo,
        fontSize: echoTokens.typography.fontSize.xl,
        fontWeight: echoTokens.typography.fontWeight.medium,
        lineHeight: echoTokens.typography.lineHeight.normal,
      },
      h6: {
        fontFamily: echoTokens.typography.fontFamily.archivo,
        fontSize: echoTokens.typography.fontSize.lg,
        fontWeight: echoTokens.typography.fontWeight.medium,
        lineHeight: echoTokens.typography.lineHeight.normal,
      },
      body1: {
        fontFamily: echoTokens.typography.fontFamily.robotoFlex,
        fontSize: echoTokens.typography.fontSize.base,
        fontWeight: echoTokens.typography.fontWeight.regular,
        lineHeight: echoTokens.typography.lineHeight.normal,
      },
      body2: {
        fontFamily: echoTokens.typography.fontFamily.robotoFlex,
        fontSize: echoTokens.typography.fontSize.sm,
        fontWeight: echoTokens.typography.fontWeight.regular,
        lineHeight: echoTokens.typography.lineHeight.normal,
      },
      button: {
        fontFamily: echoTokens.typography.fontFamily.archivo,
        fontSize: echoTokens.typography.fontSize.base,
        fontWeight: echoTokens.typography.fontWeight.medium,
        textTransform: 'none',
      },
      caption: {
        fontFamily: echoTokens.typography.fontFamily.robotoFlex,
        fontSize: echoTokens.typography.fontSize.xs,
        fontWeight: echoTokens.typography.fontWeight.regular,
        lineHeight: echoTokens.typography.lineHeight.normal,
      },
    },
    
    // Override spacing with Echo spacing tokens
    spacing: (factor: number) => {
      const spacingMap: { [key: number]: string } = {
        0: echoTokens.spacing[0],
        1: echoTokens.spacing[4],
        2: echoTokens.spacing[8],
        3: echoTokens.spacing[12],
        4: echoTokens.spacing[16],
        5: echoTokens.spacing[20],
        6: echoTokens.spacing[24],
        7: echoTokens.spacing[32],
        8: echoTokens.spacing[40],
        9: echoTokens.spacing[48],
        10: echoTokens.spacing[56],
        11: echoTokens.spacing[64],
        12: echoTokens.spacing[80],
      };
      return spacingMap[factor] || `${factor * 4}px`;
    },
    
    // Override shadows with Echo shadows
    shadows: [
      'none',
      echoTokens.shadows.sm,
      echoTokens.shadows.md,
      echoTokens.shadows.lg,
      echoTokens.shadows.xl,
      echoTokens.shadows['2xl'],
      echoTokens.shadows.inner,
      echoTokens.shadows.focus,
      // Extend with additional shadow levels
      '0 3px 14px 2px rgba(0,0,0,0.12)',
      '0 4px 16px 3px rgba(0,0,0,0.12)',
      '0 5px 18px 4px rgba(0,0,0,0.12)',
      '0 6px 20px 5px rgba(0,0,0,0.12)',
      '0 7px 22px 6px rgba(0,0,0,0.12)',
      '0 8px 24px 7px rgba(0,0,0,0.12)',
      '0 9px 26px 8px rgba(0,0,0,0.12)',
      '0 10px 28px 9px rgba(0,0,0,0.12)',
      '0 11px 30px 10px rgba(0,0,0,0.12)',
      '0 12px 32px 11px rgba(0,0,0,0.12)',
      '0 13px 34px 12px rgba(0,0,0,0.12)',
      '0 14px 36px 13px rgba(0,0,0,0.12)',
      '0 15px 38px 14px rgba(0,0,0,0.12)',
      '0 16px 40px 15px rgba(0,0,0,0.12)',
      '0 17px 42px 16px rgba(0,0,0,0.12)',
      '0 18px 44px 17px rgba(0,0,0,0.12)',
      '0 19px 46px 18px rgba(0,0,0,0.12)',
    ],
    
    // Override shape with Echo border radius
    shape: {
      borderRadius: 4, // Default, will be overridden by components
    },
    
    // Override transitions with Echo transitions
    transitions: {
      easing: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
    },

    // Add Echo tokens directly to theme for easy access
    echo: echoTokens,
  });

  // Override component styles
  theme.components = {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: echoTokens.borderRadius[4],
          textTransform: 'none',
          fontFamily: echoTokens.typography.fontFamily.archivo,
          fontWeight: echoTokens.typography.fontWeight.medium,
          transition: echoTokens.transitions.normal,
          '&:hover': {
            transform: 'translateY(-1px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        sizeSmall: {
          padding: `${echoTokens.spacing[4]} ${echoTokens.spacing[12]}`,
          fontSize: echoTokens.typography.fontSize.sm,
          minHeight: 'var(--sizing-button-height-sm)',
        },
        sizeMedium: {
          padding: `${echoTokens.spacing[8]} ${echoTokens.spacing[16]}`,
          fontSize: echoTokens.typography.fontSize.base,
          minHeight: 'var(--sizing-button-height-default)',
        },
        sizeLarge: {
          padding: `${echoTokens.spacing[12]} ${echoTokens.spacing[20]}`,
          fontSize: echoTokens.typography.fontSize.lg,
          minHeight: 'var(--sizing-button-height-lg)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: echoTokens.borderRadius[4],
            fontFamily: echoTokens.typography.fontFamily.robotoFlex,
            '& fieldset': {
              borderColor: echoTokens.colors.neutral.gray300,
            },
            '&:hover fieldset': {
              borderColor: echoTokens.colors.neutral.gray400,
            },
            '&.Mui-focused fieldset': {
              borderColor: echoTokens.colors.primary.blue,
              borderWidth: '2px',
            },
          },
          '& .MuiInputLabel-root': {
            fontFamily: echoTokens.typography.fontFamily.archivo,
            fontWeight: echoTokens.typography.fontWeight.medium,
            '&.Mui-focused': {
              color: echoTokens.colors.primary.blue,
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: echoTokens.borderRadius[4],
          boxShadow: echoTokens.shadows.sm,
          border: `1px solid ${echoTokens.colors.neutral.gray300}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: echoTokens.borderRadius[4],
          fontFamily: echoTokens.typography.fontFamily.archivo,
          fontWeight: echoTokens.typography.fontWeight.medium,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: echoTokens.borderRadius[4],
        },
        elevation1: {
          boxShadow: echoTokens.shadows.sm,
        },
        elevation2: {
          boxShadow: echoTokens.shadows.md,
        },
        elevation3: {
          boxShadow: echoTokens.shadows.lg,
        },
      },
    },
  };

  return theme;
};

interface EchoMUIThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Echo MUI Theme Provider
 * 
 * Wrap your application or components with this provider to ensure
 * all MUI components use Echo design tokens instead of MUI defaults.
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

// Export the theme for use in components
export const echoMUITheme = createEchoMUITheme();

// Export Echo tokens for direct access
export { echoTokens };

export default EchoMUIThemeProvider;
