import type { StatusIconType } from './statusIcon.assets';

export type StatusIconState = 'empty' | 'current' | 'complete' | 'error';
export type StatusIconSize = 'small' | 'default' | 'medium' | 'large' | 'xlarge' | number;

export interface StatusIconTheme {
  ringColor: string;
  glyphColor: string;
  backgroundColor?: string;
  perimeterColor?: string;
  ringDashArray?: string;
  strokeWidth: number;
}

/**
 * Maps sizes to exact screen-pixel equivalents based on a 51x51 viewBox.
 */
export const getStrokeWidth = (size: StatusIconSize): number => {
  if (typeof size === 'number') {
    // Proportional scaling for custom sizes
    return 2 * (51 / size);
  }

  switch (size) {
    case 'small':
      return 1 * (51 / 26); // 1px on 26px footprint
    case 'medium':
    case 'default':
      return 2 * (51 / 36); // 2px on 36px footprint
    case 'large':
      return 2.5 * (51 / 50); // ~2.5px on 50px footprint
    case 'xlarge':
      return 3 * (51 / 64); // 3px on 64px footprint
    default:
      return 2 * (51 / 36);
  }
};

/**
 * Gets the dash array for the 'empty' state.
 * Pattern: 4px dash, 2px gap on screen.
 */
export const getDashArray = (size: StatusIconSize): string => {
  const numericSize = typeof size === 'number'
    ? size
    : size === 'small'
      ? 26
      : size === 'large'
        ? 50
        : size === 'xlarge'
          ? 64
          : 36;

  const scale = 51 / numericSize;
  return `${4 * scale} ${2 * scale}`;
};

const TOKENS = {
  base: {
    black: 'var(--base-black)',
    white: 'var(--base-white)',
  },
  neutral: {
    g100: 'var(--neutral-gray-gray-100)',
    g200: 'var(--neutral-gray-gray-200)',
    g300: 'var(--neutral-gray-gray-300)',
    g400: 'var(--neutral-gray-gray-400)',
    g500: 'var(--neutral-gray-gray-500)',
  },
  status: {
    red: 'var(--status-red)',
    orange: 'var(--status-orange)',
    purple: 'var(--status-purple)',
    darkGreen: 'var(--status-dark-green)',
  },
  primary: {
    skyBlue: 'var(--primary-sky-blue-main)',
    blue: 'var(--primary-blue-main)',
  },
  secondary: {
    navy: 'var(--secondary-navy-main)',
  },
} as const;

const CURRENT_BG_BY_TYPE: Record<StatusIconType, string> = {
  alert: TOKENS.status.orange,
  complete: TOKENS.status.darkGreen,
  locked: TOKENS.secondary.navy,
  comment: TOKENS.primary.skyBlue,
  notification: TOKENS.primary.blue,
  error: TOKENS.status.red,
  note: TOKENS.status.purple,
};

const CURRENT_GLYPH_BY_TYPE: Record<StatusIconType, string> = {
  alert: TOKENS.base.white,
  complete: TOKENS.base.white,
  locked: TOKENS.neutral.g200,
  comment: TOKENS.base.white,
  notification: TOKENS.base.white,
  error: TOKENS.base.white,
  note: TOKENS.base.white,
};

/**
 * Maps types and states to design tokens.
 */
export const getStatusIconTheme = (
  type: StatusIconType,
  state: StatusIconState,
  disabled: boolean,
  size: StatusIconSize
): StatusIconTheme => {
  const strokeWidth = getStrokeWidth(size);

  const defaultPerimeter = TOKENS.neutral.g200;

  if (disabled) {
    if (state === 'current') {
      return {
        ringColor: TOKENS.neutral.g300,
        glyphColor: TOKENS.neutral.g500,
        backgroundColor: TOKENS.neutral.g300,
        perimeterColor: TOKENS.neutral.g300,
        strokeWidth,
      };
    }

    if (state === 'complete' || state === 'error') {
      return {
        ringColor: TOKENS.neutral.g400,
        glyphColor: TOKENS.neutral.g400,
        backgroundColor: TOKENS.neutral.g100,
        perimeterColor: TOKENS.neutral.g400,
        strokeWidth,
      };
    }

    // empty + disabled
    return {
      ringColor: TOKENS.neutral.g300,
      glyphColor: type === 'comment' ? TOKENS.neutral.g300 : TOKENS.neutral.g400,
      backgroundColor: 'transparent',
      perimeterColor: TOKENS.neutral.g300,
      ringDashArray: getDashArray(size),
      strokeWidth,
    };
  }

  if (state === 'current') {
    const bg = CURRENT_BG_BY_TYPE[type];
    return {
      ringColor: bg,
      glyphColor: CURRENT_GLYPH_BY_TYPE[type],
      backgroundColor: bg,
      perimeterColor: defaultPerimeter,
      strokeWidth,
    };
  }

  if (state === 'complete') {
    return {
      ringColor: TOKENS.status.darkGreen,
      glyphColor: TOKENS.base.white,
      backgroundColor: TOKENS.status.darkGreen,
      perimeterColor: defaultPerimeter,
      strokeWidth,
    };
  }

  if (state === 'error') {
    return {
      ringColor: TOKENS.status.red,
      glyphColor: TOKENS.base.white,
      backgroundColor: TOKENS.status.red,
      perimeterColor: defaultPerimeter,
      strokeWidth,
    };
  }

  // empty
  return {
    ringColor: TOKENS.neutral.g300,
    glyphColor: type === 'comment' ? TOKENS.base.black : TOKENS.neutral.g400,
    backgroundColor: 'transparent',
    perimeterColor: defaultPerimeter,
    ringDashArray: getDashArray(size),
    strokeWidth,
  };
};
