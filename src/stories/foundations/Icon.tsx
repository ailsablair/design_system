import React from 'react';
import './tokens.css';

// Material UI Icons - Comprehensive Collection
import { 
  materialIconsFilled, 
  materialIconsOutlined, 
  materialIconsTwoTone,
  AllMaterialIconName 
} from './MaterialUIIcons';

// Material Design Icons from Figma
import { materialDesignIconComponents, MaterialDesignIconName } from './MaterialDesignIcons';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Custom icon names (your existing icons)
export type CustomIconName = 'alarm' | 'close-circle' | 'close-custom' | 'chevron-up-custom' | 'chevron-down-custom';

export type IconName = CustomIconName | AllMaterialIconName | MaterialDesignIconName;

interface IconProps {
  /** Icon name from the comprehensive icon library (custom, Material UI, or Material Design) */
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

// Custom SVG icon components (your existing icons)
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

const CloseCircleIconCustom: React.FC<{ size: string; color: string; opacity: string }> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={opacity}>
      <path
        d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm2.5 9L9 11.5 8 10.5 7 11.5 5.5 10 6.5 9 5.5 8 6.5 7 5.5 6 7 4.5 8 5.5 9 4.5 10.5 6 9.5 7 10.5 8 9.5 9z"
        fill={color}
      />
    </g>
  </svg>
);

const CloseIconCustom: React.FC<{ size: string; color: string; opacity: string }> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity={opacity}>
      <path
        d="M12 4.5L11.5 4 8 7.5 4.5 4 4 4.5 7.5 8 4 11.5 4.5 12 8 8.5 11.5 12 12 11.5 8.5 8 12 4.5z"
        fill={color}
      />
    </g>
  </svg>
);

const ChevronUpIconCustom: React.FC<{ size: string; color: string; opacity: string }> = ({ size, color, opacity }) => (
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

const ChevronDownIconCustom: React.FC<{ size: string; color: string; opacity: string }> = ({ size, color, opacity }) => (
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

// Custom icon components mapping
const customIconComponents = {
  alarm: AlarmIcon,
  'close-circle': CloseCircleIconCustom,
  'close-custom': CloseIconCustom,
  'chevron-up-custom': ChevronUpIconCustom,
  'chevron-down-custom': ChevronDownIconCustom,
};

// Combine all Material UI icon mappings
const allMaterialIconComponents = {
  ...materialIconsFilled,
  ...materialIconsOutlined,
  ...materialIconsTwoTone,
};

/**
 * Universal Icon component supporting comprehensive icon libraries.
 * 
 * ## Icon Libraries Available (300+ total icons):
 * - **Custom Icons** (5): Hand-crafted SVG icons for Echo-specific needs
 * - **Material UI Filled** (100+): Standard solid Material Design icons
 * - **Material UI Outlined** (100+): Outlined variant Material Design icons
 * - **Material UI TwoTone** (100+): Two-color variant Material Design icons
 * - **Material Design Icons** (18+): Additional outline icons from Figma collection
 * 
 * ## Icon Variants:
 * - **Filled**: `home`, `search`, `settings`, etc.
 * - **Outlined**: `home-outlined`, `search-outlined`, `settings-outlined`, etc.
 * - **TwoTone**: `home-two-tone`, `search-two-tone`, `settings-two-tone`, etc.
 * 
 * The component automatically detects the icon type and applies consistent sizing, 
 * color, and opacity using design tokens.
 * 
 * @example
 * ```tsx
 * // Material UI Icons - Different Variants
 * <Icon name="home" />                    // Filled (default)
 * <Icon name="home-outlined" />           // Outlined variant
 * <Icon name="home-two-tone" />           // TwoTone variant
 * 
 * // With styling
 * <Icon name="search-outlined" size="lg" color="var(--primary-blue-blue-500)" />
 * 
 * // Custom Icons
 * <Icon name="alarm" />
 * <Icon name="close-circle" size="sm" opacity="strong" />
 * 
 * // Material Design Icons
 * <Icon name="rocket-outline" />
 * <Icon name="chat-plus-outline" size="xl" color="var(--semantic-success-500)" />
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

  // Check if it's a custom icon
  const CustomIconComponent = customIconComponents[name as CustomIconName];
  if (CustomIconComponent) {
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
        <CustomIconComponent 
          size={sizeValue} 
          color={color} 
          opacity={opacityValue}
        />
      </span>
    );
  }

  // Check if it's a Material Design icon from Figma
  const MaterialDesignIconComponent = materialDesignIconComponents[name as MaterialDesignIconName];
  if (MaterialDesignIconComponent) {
    return (
      <span
        className={`echo-icon echo-icon-material-design ${className}`}
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
        <MaterialDesignIconComponent 
          size={sizeValue} 
          color={color} 
          opacity={opacityValue}
        />
      </span>
    );
  }

  // Check if it's a Material UI icon (Filled, Outlined, or TwoTone)
  const MaterialIconComponent = allMaterialIconComponents[name as AllMaterialIconName];
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
  console.warn(`Icon "${name}" not found. Available icons:`, {
    custom: Object.keys(customIconComponents),
    materialFilled: Object.keys(materialIconsFilled),
    materialOutlined: Object.keys(materialIconsOutlined),
    materialTwoTone: Object.keys(materialIconsTwoTone),
    materialDesign: Object.keys(materialDesignIconComponents)
  });
  
  return null;
};

export default Icon;
