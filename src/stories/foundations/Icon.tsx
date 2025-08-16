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

export type IconName = AllMaterialIconName | MaterialDesignIconName;

interface IconProps {
  /** Icon name from the comprehensive icon library (Material UI or Material Design) */
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


// Combine all Material UI icon mappings
const allMaterialIconComponents = {
  ...materialIconsFilled,
  ...materialIconsOutlined,
  ...materialIconsTwoTone,
};

/**
 * Universal Icon component supporting comprehensive icon libraries.
 * 
 * ## Icon Libraries Available (295+ total icons):
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
