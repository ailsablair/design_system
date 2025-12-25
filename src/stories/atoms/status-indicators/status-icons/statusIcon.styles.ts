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
  const numericSize = typeof size === 'number' ? size :
    size === 'small' ? 26 :
    size === 'large' ? 50 :
    size === 'xlarge' ? 64 : 36;

  const scale = 51 / numericSize;
  return `${4 * scale} ${2 * scale}`;
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
  
  // Base neutral tokens
  const neutralRing = 'var(--neutral-gray-gray-300)';
  const neutralGlyph = 'var(--neutral-gray-gray-400)';
  const neutralBg = 'var(--neutral-gray-gray-200)';
  const perimeterColor = 'var(--neutral-gray-gray-200)';

  if (disabled) {
    const isFullState = state === 'complete' || state === 'error';
    return {
      ringColor: neutralRing,
      glyphColor: isFullState ? 'var(--base-white)' : neutralGlyph,
      backgroundColor: isFullState ? neutralBg : 'transparent',
      perimeterColor,
      ringDashArray: state === 'empty' ? getDashArray(size) : undefined,
      strokeWidth,
    };
  }

  // Type-specific tokens
  const typeColors: Record<StatusIconType, string> = {
    alert: 'var(--status-orange)',
    complete: 'var(--status-green)',
    locked: 'var(--neutral-gray-gray-700)',
    comment: 'var(--primary-sky-blue-main)',
    notification: 'var(--primary-blue-main)',
    error: 'var(--status-red)',
    note: 'var(--status-purple)',
  };

  // Notification has a different ring color in 'current' state per plan
  const ringColors: Record<StatusIconType, string> = {
    ...typeColors,
    notification: 'var(--primary-blue-blue-400)',
  };

  const theme: StatusIconTheme = {
    ringColor: ringColors[type],
    glyphColor: typeColors[type],
    strokeWidth,
    perimeterColor,
  };

  if (state === 'empty') {
    theme.ringColor = neutralRing;
    theme.glyphColor = neutralGlyph;
    theme.ringDashArray = getDashArray(size);
  } else if (state === 'complete' || type === 'complete') {
    theme.backgroundColor = typeColors[type];
    theme.glyphColor = 'var(--base-white)';
    // In complete state, ring matches the background color or is subtle
    theme.ringColor = typeColors[type];
  } else if (state === 'error' || type === 'error') {
    theme.backgroundColor = 'var(--status-red)';
    theme.glyphColor = 'var(--base-white)';
    theme.ringColor = 'var(--status-red)';
  }

  return theme;
};
