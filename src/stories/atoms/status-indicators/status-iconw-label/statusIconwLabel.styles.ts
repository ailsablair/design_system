import type {
  StatusIconwLabelStatus,
  StatusIconwLabelStep,
  StatusIconwLabelSize,
  StatusColorConfig,
  StepTheme,
  SizeConfig,
} from './statusIconwLabel.types';
import type { StatusIconType } from '../status-icons/statusIcon.assets';

/**
 * Design system tokens for StatusIconwLabel
 * All tokens reference CSS variables - no hard-coded values
 */
export const TOKENS = {
  base: {
    black: 'var(--base-black)',
    white: 'var(--base-white)',
  },
  neutral: {
    g50: 'var(--neutral-gray-gray-50)',
    g300: 'var(--neutral-gray-gray-300)', // Disabled UI elements (borders, backgrounds)
    g400: 'var(--neutral-gray-gray-400)', // Disabled text & icons
    g700: 'var(--neutral-gray-gray-700)', // Past step text
  },
  status: {
    red: 'var(--status-red)',
    redLight: 'var(--status-red-light)',
    orange: 'var(--status-orange)',
    orangeLight: 'var(--status-orange-light)',
    darkGreen: 'var(--status-dark-green)',
    greenLight: 'var(--status-green-light)',
    purple: 'var(--status-purple)',
    purpleLight: 'var(--status-purple-light)',
    infoBlue: 'var(--status-info-blue)',
    infoBlueLight: 'var(--status-info-blue-light)',
  },
  secondary: {
    blueGrayMain: 'var(--secondary-blue-gray-main)',
  },
  primary: {
    skyBlueMain: 'var(--primary-sky-blue-main)',
    skyBlue50: 'var(--primary-sky-blue-sky-blue-50)',
    blueMain: 'var(--primary-blue-main)',
    blue100: 'var(--primary-blue-blue-100)',
  },
  spacing: {
    '6px': 'var(--spacing-sizing-6px)',
    '8px': 'var(--spacing-sizing-8px)',
    '12px': 'var(--spacing-sizing-12px)',
  },
  stroke: {
    '1px': 'var(--spacing-stroke-1px)',
    '2px': 'var(--spacing-stroke-2px)',
    '3px': 'var(--spacing-stroke-3px)',
  },
  type: {
    archivo: 'var(--type-typeface-archivo)',
    weightLight: 'var(--type-weight-light)',     // 300
    weightMedium: 'var(--type-weight-medium)',   // 500
  },
} as const;

/**
 * Color palette mapping for all 8 status types
 */
export const STATUS_COLORS: Record<StatusIconwLabelStatus, StatusColorConfig> = {
  warning: {
    main: TOKENS.status.orange,
    light: TOKENS.status.orangeLight,
  },
  error: {
    main: TOKENS.status.red,
    light: TOKENS.status.redLight,
  },
  complete: {
    main: TOKENS.status.darkGreen,
    light: TOKENS.status.greenLight,
  },
  locked: {
    main: TOKENS.secondary.blueGrayMain,
    light: TOKENS.neutral.g50,
  },
  comments: {
    main: TOKENS.primary.skyBlueMain,
    light: TOKENS.primary.skyBlue50,
  },
  notifications: {
    main: TOKENS.primary.blueMain,
    light: TOKENS.primary.blue100,
  },
  note: {
    main: TOKENS.status.purple,
    light: TOKENS.status.purpleLight,
  },
  edit: {
    main: TOKENS.status.infoBlue,
    light: TOKENS.status.infoBlueLight,
  },
};

/**
 * Maps each status type to its corresponding icon path identifier
 */
export const STATUS_ICON_MAP: Record<StatusIconwLabelStatus, StatusIconType> = {
  warning: 'alert',
  error: 'error',
  complete: 'complete',
  locked: 'locked',
  comments: 'comment',
  notifications: 'notification',
  note: 'note',
  edit: 'edit',
};

/**
 * Gets the size configuration based on the size prop
 * Returns circle diameter, icon size, gap to label, and font size tokens
 */
export function getSizeConfig(size: StatusIconwLabelSize): SizeConfig {
  switch (size) {
    case 'small':
      return {
        circleDiameter: '22px',
        iconSize: '16px',
        gap: TOKENS.spacing['6px'],
        fontSizeToken: '10px', // --type-scale-label-xxs
        lineHeightToken: '14px', // --type-line-height-label-xxs
        letterSpacingToken: '0.15px', // --type-letter-spacing-label-xxs
      };
    case 'default':
      return {
        circleDiameter: '36px',
        iconSize: '22px',
        gap: TOKENS.spacing['8px'],
        fontSizeToken: '12px', // --type-scale-label-xs
        lineHeightToken: '14px', // --type-line-height-label-xs
        letterSpacingToken: '0.15px', // --type-letter-spacing-label-xs
      };
    case 'large':
      return {
        circleDiameter: '48px',
        iconSize: '28px',
        gap: TOKENS.spacing['12px'],
        fontSizeToken: '14px', // --type-scale-label-sm
        lineHeightToken: '16px', // --type-line-height-label-sm
        letterSpacingToken: '0.15px', // --type-letter-spacing-label-sm
      };
  }
}

/**
 * Gets the theme configuration for a specific step and status
 * Handles all visual states: border, background, icon color, opacity, and text color
 */
export function getStepTheme(
  status: StatusIconwLabelStatus,
  step: StatusIconwLabelStep,
  size: StatusIconwLabelSize,
  disabled: boolean
): StepTheme {
  const colors = STATUS_COLORS[status];

  // Get border width based on size
  const getBorderWidth = (): string => {
    if (step === 'future') {
      return size === 'large' ? TOKENS.stroke['3px'] : TOKENS.stroke['2px'];
    }
    if (step === 'current') {
      return size === 'large' ? TOKENS.stroke['2px'] : TOKENS.stroke['1px'];
    }
    // past
    return TOKENS.stroke['1px'];
  };

  // DISABLED STATE: Apply gray palette
  if (disabled) {
    if (step === 'current') {
      return {
        borderColor: TOKENS.neutral.g300,
        borderWidth: getBorderWidth(),
        borderStyle: 'solid',
        backgroundColor: TOKENS.neutral.g300,
        iconColor: TOKENS.base.white,
        iconOpacity: 0.8,
        textColor: TOKENS.neutral.g300,
        fontWeight: TOKENS.weightMedium,
      };
    }

    if (step === 'future') {
      return {
        borderColor: TOKENS.neutral.g300,
        borderWidth: getBorderWidth(),
        borderStyle: 'dashed',
        backgroundColor: 'transparent',
        iconColor: TOKENS.neutral.g400,
        iconOpacity: 1.0,
        textColor: TOKENS.neutral.g300,
        fontWeight: TOKENS.weightLight,
      };
    }

    // past + disabled
    return {
      borderColor: TOKENS.neutral.g300,
      borderWidth: getBorderWidth(),
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      iconColor: TOKENS.neutral.g400,
      iconOpacity: 0.8,
      textColor: TOKENS.neutral.g300,
      fontWeight: TOKENS.weightLight,
    };
  }

  // ENABLED STATES

  // CURRENT: Filled background with status color
  if (step === 'current') {
    return {
      borderColor: colors.main,
      borderWidth: getBorderWidth(),
      borderStyle: 'solid',
      backgroundColor: colors.main,
      iconColor: TOKENS.base.white,
      iconOpacity: 1.0,
      textColor: TOKENS.base.black,
      fontWeight: TOKENS.weightMedium,
    };
  }

  // FUTURE: Dashed border with light tint background
  if (step === 'future') {
    return {
      borderColor: colors.main,
      borderWidth: getBorderWidth(),
      borderStyle: 'dashed',
      backgroundColor: colors.light,
      iconColor: colors.main,
      iconOpacity: 1.0,
      textColor: TOKENS.neutral.g700,
      fontWeight: TOKENS.weightLight,
    };
  }

  // PAST: Solid border with transparent background
  return {
    borderColor: colors.main,
    borderWidth: getBorderWidth(),
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    iconColor: colors.main,
    iconOpacity: 0.4,
    textColor: TOKENS.neutral.g700,
    fontWeight: TOKENS.weightLight,
  };
}
