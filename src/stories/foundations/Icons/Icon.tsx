import React from 'react';
import './tokens.css';

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

// Material Design Icons from Figma
import { materialDesignIconComponents } from './MaterialDesignIcons';
import type { MaterialDesignIconName } from './MaterialDesignIcons';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type IconName = AllMaterialIconName | MaterialDesignIconName;

// Re-export types for stories
export type { AllMaterialIconName, MaterialIconFilledName, MaterialIconOutlinedName, MaterialIconTwoToneName };
export type { MaterialDesignIconName };

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
 * ## Icon Libraries Available (400+ total icons):
 * - **Material UI Filled** (130+): Standard solid Material Design icons including navigation, actions, communication, content, user management, system status, analytics, commerce, connectivity, media controls, and design tools
 * - **Material UI Outlined** (130+): Outlined variant of all Material Design icons
 * - **Material UI TwoTone** (130+): Two-color variant of all Material Design icons
 * - **Material Design Icons** (18+): Additional outline icons from Figma collection
 *
 * ## Complete Icon Categories:
 *
 * ### Navigation & Layout
 * - **Navigation**: home, menu, dashboard, arrow-back, arrow-forward, arrow-upward, arrow-downward
 * - **Layout**: expand-more, expand-less, directions, map, place, location-on
 *
 * ### Actions & Controls
 * - **Basic Actions**: search, edit, delete, add, remove, close, refresh, save
 * - **File Operations**: download, upload, share, print, build
 * - **Interface**: settings, check, more-vert, more-horiz, filter-list, sort, get-app, clear
 *
 * ### Communication
 * - **Messaging**: email, phone, notifications, chat, comment, forum, send
 * - **Mail Management**: inbox, drafts, mark-email-read, unsubscribe
 *
 * ### Social & Feedback
 * - **Engagement**: thumb-up, thumb-down, star, favorite, bookmark, trending-up
 *
 * ### Content & Media
 * - **Content**: history, assignment, description, list, view-list, view-module, grid-view, table-chart
 * - **Files**: folder, insert-drive-file, image, photo, photo-library, collections
 * - **Media**: video-library, music-note, attach-file, cloud-upload, cloud-download
 *
 * ### User & Account
 * - **User Management**: person, account-circle, account-box, group, work, exit-to-app
 * - **Security**: lock, lock-open, visibility, visibility-off, security, shield, verified
 *
 * ### System & Status
 * - **Feedback**: info, warning, error, check-circle, help
 * - **Development**: bug-report, code
 *
 * ### Time & Calendar
 * - **Time**: calendar-today, schedule, alarm
 *
 * ### Analytics & Charts
 * - **Charts**: bar-chart, pie-chart, timeline
 *
 * ### Commerce
 * - **Shopping**: shopping-cart, payment
 *
 * ### Network & Connectivity
 * - **Network**: language, public, wifi, bluetooth, battery-full, signal-cellular-alt
 *
 * ### Media Controls
 * - **Playback**: play-arrow, pause, stop, skip-next, skip-previous
 * - **Audio/Video**: volume-up, volume-off, mic, mic-off, videocam, videocam-off, camera-alt
 *
 * ### Design & Creative
 * - **Design Tools**: color-lens, palette, brush, format-paint, content-copy
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
 * // Common Interface Icons
 * <Icon name="search" />                  // Search functionality
 * <Icon name="filter-list" />            // Data filtering
 * <Icon name="visibility" />             // Show/hide toggles
 * <Icon name="get-app" />                // Download actions
 *
 * // With styling
 * <Icon name="search-outlined" size="lg" color="var(--primary-blue-blue-500)" />
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
    materialFilled: Object.keys(materialIconsFilled),
    materialOutlined: Object.keys(materialIconsOutlined),
    materialTwoTone: Object.keys(materialIconsTwoTone),
    materialDesign: Object.keys(materialDesignIconComponents)
  });
  
  return null;
};

export default Icon;
