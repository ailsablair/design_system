import React from 'react';
import './tokens.css';

// Material UI Icons
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpIcon from '@mui/icons-material/Help';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import RefreshIcon from '@mui/icons-material/Refresh';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

// Material Design Icons from Figma
import { materialDesignIconComponents, MaterialDesignIconName } from './MaterialDesignIcons';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Custom icon names (your existing icons)
export type CustomIconName = 'alarm' | 'close-circle' | 'close-custom' | 'chevron-up-custom' | 'chevron-down-custom';

// Material UI icon names (popular icons)
export type MaterialIconName = 
  | 'home' | 'search' | 'settings' | 'person' | 'notifications' | 'email' | 'phone' 
  | 'location-on' | 'favorite' | 'star' | 'share' | 'download' | 'upload' | 'edit' 
  | 'delete' | 'add' | 'remove' | 'check' | 'close' | 'arrow-back' | 'arrow-forward' 
  | 'arrow-upward' | 'arrow-downward' | 'expand-more' | 'expand-less' | 'menu' 
  | 'more-vert' | 'more-horiz' | 'info' | 'warning' | 'error' | 'check-circle' 
  | 'help' | 'visibility' | 'visibility-off' | 'lock' | 'lock-open' | 'calendar-today' 
  | 'schedule' | 'dashboard' | 'account-circle' | 'exit-to-app' | 'refresh' | 'print' 
  | 'save' | 'folder' | 'insert-drive-file' | 'image' | 'video-library' | 'music-note' 
  | 'attach-file' | 'cloud-upload' | 'cloud-download';

export type IconName = CustomIconName | MaterialIconName | MaterialDesignIconName;

interface IconProps {
  /** Icon name from the icon library (custom, Material UI, or Material Design) */
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

// Material UI icon components mapping
const materialIconComponents = {
  home: HomeIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  person: PersonIcon,
  notifications: NotificationsIcon,
  email: EmailIcon,
  phone: PhoneIcon,
  'location-on': LocationOnIcon,
  favorite: FavoriteIcon,
  star: StarIcon,
  share: ShareIcon,
  download: DownloadIcon,
  upload: UploadIcon,
  edit: EditIcon,
  delete: DeleteIcon,
  add: AddIcon,
  remove: RemoveIcon,
  check: CheckIcon,
  close: CloseIcon,
  'arrow-back': ArrowBackIcon,
  'arrow-forward': ArrowForwardIcon,
  'arrow-upward': ArrowUpwardIcon,
  'arrow-downward': ArrowDownwardIcon,
  'expand-more': ExpandMoreIcon,
  'expand-less': ExpandLessIcon,
  menu: MenuIcon,
  'more-vert': MoreVertIcon,
  'more-horiz': MoreHorizIcon,
  info: InfoIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  'check-circle': CheckCircleIcon,
  help: HelpIcon,
  visibility: VisibilityIcon,
  'visibility-off': VisibilityOffIcon,
  lock: LockIcon,
  'lock-open': LockOpenIcon,
  'calendar-today': CalendarTodayIcon,
  schedule: ScheduleIcon,
  dashboard: DashboardIcon,
  'account-circle': AccountCircleIcon,
  'exit-to-app': ExitToAppIcon,
  refresh: RefreshIcon,
  print: PrintIcon,
  save: SaveIcon,
  folder: FolderIcon,
  'insert-drive-file': InsertDriveFileIcon,
  image: ImageIcon,
  'video-library': VideoLibraryIcon,
  'music-note': MusicNoteIcon,
  'attach-file': AttachFileIcon,
  'cloud-upload': CloudUploadIcon,
  'cloud-download': CloudDownloadIcon,
};

/**
 * Universal Icon component supporting custom SVG icons, Material UI Icons, and Material Design Icons.
 * 
 * The component automatically detects the icon type and applies consistent sizing, color, and opacity
 * using design tokens.
 * 
 * ## Icon Libraries Available:
 * - **Custom Icons** (5): Hand-crafted SVG icons for Echo-specific needs
 * - **Material UI Icons** (45+): Popular interface icons from Google's Material Design
 * - **Material Design Icons** (18+): Additional outline icons from Material Design collection
 * 
 * @example
 * ```tsx
 * // Material UI Icons
 * <Icon name="home" />
 * <Icon name="search" size="lg" color="var(--primary-blue-blue-500)" />
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

  // Check if it's a Material UI icon
  const MaterialIconComponent = materialIconComponents[name as MaterialIconName];
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
    material: Object.keys(materialIconComponents),
    materialDesign: Object.keys(materialDesignIconComponents)
  });
  
  return null;
};

export default Icon;
