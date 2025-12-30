/**
 * StatusIconwLabel Type Definitions
 * 
 * Supports 8 status types × 3 sizes × 3 steps × 2 states = 144 variants
 */

export type StatusIconwLabelStatus = 
  | 'warning'
  | 'error'
  | 'complete'
  | 'locked'
  | 'comments'
  | 'notifications'
  | 'note'
  | 'edit';

export type StatusIconwLabelStep = 'past' | 'future' | 'current';

export type StatusIconwLabelSize = 'small' | 'default' | 'large';

export interface StatusIconwLabelProps {
  /**
   * The status type determines the icon and color palette.
   * @default 'warning'
   */
  status?: StatusIconwLabelStatus;

  /**
   * The step in the process (past, future, or current).
   * Controls border style, background, and opacity.
   * @default 'current'
   */
  step?: StatusIconwLabelStep;

  /**
   * The size of the component.
   * - small: 22px circle, 16px icon, 10px label
   * - default: 36px circle, 22px icon, 12px label
   * - large: 48px circle, 28px icon, 14px label
   * @default 'default'
   */
  size?: StatusIconwLabelSize;

  /**
   * The label text displayed below or next to the icon.
   * Required.
   */
  label: string;

  /**
   * Whether the component is disabled.
   * Disables the component visually and semantically.
   * @default false
   */
  disabled?: boolean;

  /**
   * Optional className for additional styling.
   */
  className?: string;

  /**
   * Optional aria-label for screen reader accessibility.
   */
  'aria-label'?: string;
}

/**
 * Status color configuration
 */
export interface StatusColorConfig {
  main: string;  // Main color token
  light: string; // Light tint color token
}

/**
 * Theme configuration for a specific step
 */
export interface StepTheme {
  borderColor: string;
  borderWidth: string;
  borderStyle: 'solid' | 'dashed';
  backgroundColor: string;
  iconColor: string;
  iconOpacity: number;
  textColor: string;
  fontWeight: number | string;
}

/**
 * Size configuration
 */
export interface SizeConfig {
  circleDiameter: string;
  iconSize: string;
  gap: string;
  fontSizeToken: string;
  lineHeightToken: string;
  letterSpacingToken: string;
}
