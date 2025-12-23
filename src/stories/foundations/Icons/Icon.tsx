import React from 'react';
import '../tokens.css';

// Echo-specific Icons
import { echoIconComponents } from './EchoIcons';
import type { EchoIconName } from './EchoIcons';

// Material UI Icons - Comprehensive Collection
import {
  materialIconsFilled,
  materialIconsOutlined,
  materialIconsTwoTone
} from './MaterialUIIcons';
import type {
  AllMaterialIconName,
  MaterialIconFilledName,
  MaterialIconOutlinedName,
  MaterialIconTwoToneName
} from './MaterialUIIcons';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type IconName = EchoIconName | AllMaterialIconName;

// Re-export types for stories
export type { AllMaterialIconName, MaterialIconFilledName, MaterialIconOutlinedName, MaterialIconTwoToneName };
export type { EchoIconName };

interface IconProps {
  /** Icon name from the Echo library or comprehensive MUI library */
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
  return opacityMap[opacity as keyof typeof opacityMap] || opacityMap.medium;
};


// Combine all Material UI icon mappings
const allMaterialIconComponents = {
  ...materialIconsFilled,
  ...materialIconsOutlined,
  ...materialIconsTwoTone,
};

/**
 * Universal Icon component for the Echo Design System.
 * Prioritizes Echo-specific icons and falls back to Material UI.
 *
 * ## Usage Warning:
 * Please do not use any MUI Icons unless you have first checked they do not 
 * exist within the Echo Icon set.
 *
 * @example
 * ```tsx
 * // Echo-specific Icons (Preferred)
 * <Icon name="emoticon-cool-outline" />
 *
 * // MUI Icons (Fallback)
 * <Icon name="home" />
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
  const sizeValue = getSizeValue(size);
  const opacityValue = getOpacityValue(opacity);

  // 1. Check if it's an Echo-specific icon
  const EchoIconComponent = echoIconComponents[name as EchoIconName];
  if (EchoIconComponent) {
    return (
      <span
        className={`echo-icon echo-icon-custom ${className}`}
        role="img"
        aria-label={ariaLabel || `${name} icon`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: sizeValue,
          height: sizeValue,
        }}
        {...props}
      >
        <EchoIconComponent 
          size={sizeValue} 
          color={color} 
          opacity={opacityValue}
        />
      </span>
    );
  }

  // 2. Fallback to Material UI icons
  const MaterialIconComponent = (allMaterialIconComponents as any)[name];
  if (MaterialIconComponent) {
    return (
      <span
        className={`echo-icon echo-icon-material ${className}`}
        role="img"
        aria-label={ariaLabel || `${name} icon`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: sizeValue,
          height: sizeValue,
          color: color,
          opacity: opacityValue,
        }}
        {...props}
      >
        <MaterialIconComponent 
          sx={{ 
            fontSize: sizeValue,
            width: sizeValue,
            height: sizeValue,
          }}
        />
      </span>
    );
  }

  // Icon not found
  if (process.env.NODE_ENV !== 'production') {
    console.warn(`Icon "${name}" not found in Echo or MUI libraries.`);
  }
  
  return null;
};

export default Icon;
