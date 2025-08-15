import React from 'react';
import './tokens.css';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IconName = 'alarm' | 'close-circle' | 'close' | 'chevron-up' | 'chevron-down';

interface IconProps {
  /** Icon name from the icon library */
  name: IconName;
  /** Size of the icon */
  size?: IconSize;
  /** Color of the icon (uses CSS custom properties or standard colors) */
  color?: string;
  /** Opacity level */
  opacity?: 'subtle' | 'medium' | 'strong' | 'full' | number;
  /** Additional CSS class name */
  className?: string;
  /** Accessibility label */
  'aria-label'?: string;
}

const getSizeValue = (size: IconSize): string => {
  const sizeMap = {
    xs: 'var(--icon-size-xs)',
    sm: 'var(--icon-size-sm)',
    md: 'var(--icon-size-md)',
    lg: 'var(--icon-size-lg)',
    xl: 'var(--icon-size-xl)',
    '2xl': 'var(--icon-size-2xl)',
  };
  return sizeMap[size];
};

const getOpacityValue = (opacity: 'subtle' | 'medium' | 'strong' | 'full' | number): string => {
  if (typeof opacity === 'number') {
    return opacity.toString();
  }
  
  const opacityMap = {
    subtle: 'var(--icon-opacity-subtle)',
    medium: 'var(--icon-opacity-medium)',
    strong: 'var(--icon-opacity-strong)',
    full: 'var(--icon-opacity-full)',
  };
  return opacityMap[opacity];
};

const AlarmIcon: React.FC<{ size: string; color: string; opacity: string }> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={opacity}>
      <path
        d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6v2.5c0 .828-.672 1.5-1.5 1.5v1h12v-1c-.828 0-1.5-.672-1.5-1.5V6c0-2.485-2.015-4.5-4.5-4.5zM6.5 12.5h3c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5z"
        fill={color}
      />
    </g>
  </svg>
);

const CloseCircleIcon: React.FC<{ size: string; color: string; opacity: string }> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={opacity}>
      <path
        d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm2.5 9L9 11.5 8 10.5 7 11.5 5.5 10 6.5 9 5.5 8 6.5 7 5.5 6 7 4.5 8 5.5 9 4.5 10.5 6 9.5 7 10.5 8 9.5 9z"
        fill={color}
      />
    </g>
  </svg>
);

const CloseIcon: React.FC<{ size: string; color: string; opacity: string }> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={opacity}>
      <path
        d="M12 4.5L11.5 4 8 7.5 4.5 4 4 4.5 7.5 8 4 11.5 4.5 12 8 8.5 11.5 12 12 11.5 8.5 8 12 4.5z"
        fill={color}
      />
    </g>
  </svg>
);

const ChevronUpIcon: React.FC<{ size: string; color: string; opacity: string }> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={opacity}>
      <path
        d="M4 10.5L8 6.5 12 10.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const ChevronDownIcon: React.FC<{ size: string; color: string; opacity: string }> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={opacity}>
      <path
        d="M4 6.5L8 10.5 12 6.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const iconComponents = {
  alarm: AlarmIcon,
  'close-circle': CloseCircleIcon,
  close: CloseIcon,
  'chevron-up': ChevronUpIcon,
  'chevron-down': ChevronDownIcon,
};

/**
 * Icon component for displaying standardized icons throughout the design system.
 * 
 * All icons follow consistent sizing, color, and opacity patterns defined in design tokens.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Icon name="alarm" />
 * 
 * // With custom size and color
 * <Icon 
 *   name="close" 
 *   size="lg" 
 *   color="var(--semantic-error-500)" 
 *   opacity="strong"
 * />
 * ```
 */
export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color = 'currentColor',
  opacity = 'medium',
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  const IconComponent = iconComponents[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found. Available icons: ${Object.keys(iconComponents).join(', ')}`);
    return null;
  }

  const sizeValue = getSizeValue(size);
  const opacityValue = getOpacityValue(opacity);

  return (
    <span
      className={`echo-icon ${className}`}
      role="img"
      aria-label={ariaLabel}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: sizeValue,
        height: sizeValue,
      }}
      {...props}
    >
      <IconComponent 
        size={sizeValue} 
        color={color} 
        opacity={opacityValue}
      />
    </span>
  );
};

export default Icon;
