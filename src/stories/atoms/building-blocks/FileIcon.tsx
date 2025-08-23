import React from 'react';
import './fileIcon.css';

export type FileType = 
  // Image formats
  | 'img' | 'jpg' | 'jpeg' | 'png' | 'webp' | 'tiff' | 'gif' | 'svg' | 'eps'
  // Document formats
  | 'pdf' | 'doc' | 'docx' | 'txt' | 'csv' | 'xls' | 'xlsx' | 'ppt' | 'pptx'
  // Design formats
  | 'fig' | 'ai' | 'psd' | 'indd' | 'aep'
  // Media formats
  | 'mp3' | 'wav' | 'mp4' | 'mpeg' | 'avi' | 'mkv'
  // Code formats
  | 'html' | 'css' | 'rss' | 'sql' | 'js' | 'json' | 'java' | 'xml' | 'exe' | 'dmg'
  // Archive formats
  | 'zip' | 'rar'
  // Generic formats
  | 'file';

export type FileIconSize = 'small' | 'medium' | 'large';

export interface FileIconProps {
  /**
   * Type of file to display
   */
  type: FileType;
  /**
   * Size of the file icon
   */
  size?: FileIconSize;
  /**
   * Whether to show the file extension label
   */
  showLabel?: boolean;
  /**
   * Custom file extension text (overrides default)
   */
  customLabel?: string;
  /**
   * Additional CSS class names
   */
  className?: string;
  /**
   * Click handler
   */
  onClick?: () => void;
}

// Color mapping for different file types
const getFileTypeColor = (type: FileType): string => {
  const colorMap: Record<FileType, string> = {
    // Image formats - Purple
    'img': '#7F56D9',
    'jpg': '#7F56D9',
    'jpeg': '#7F56D9', 
    'png': '#7F56D9',
    'webp': '#7F56D9',
    'tiff': '#7F56D9',
    'gif': '#7F56D9',
    'svg': '#7F56D9',
    'eps': '#7F56D9',
    
    // Document formats - Red for PDF, Blue for Office
    'pdf': '#D92D20',
    'doc': '#155EEF',
    'docx': '#155EEF',
    'txt': '#232F3E',
    'csv': '#099250',
    'xls': '#099250',
    'xlsx': '#099250',
    'ppt': '#D92D20',
    'pptx': '#D92D20',
    
    // Design formats
    'fig': '#7F56D9',
    'ai': '#D92D20',
    'psd': '#155EEF',
    'indd': '#BA24D5',
    'aep': '#6938EF',
    
    // Media formats
    'mp3': '#DD2590',
    'wav': '#DD2590',
    'mp4': '#155EEF',
    'mpeg': '#155EEF',
    'avi': '#155EEF',
    'mkv': '#155EEF',
    
    // Code formats
    'html': '#444CE7',
    'css': '#444CE7',
    'rss': '#444CE7',
    'sql': '#444CE7',
    'js': '#444CE7',
    'json': '#444CE7',
    'java': '#444CE7',
    'xml': '#444CE7',
    'exe': '#444CE7',
    'dmg': '#444CE7',
    
    // Archive formats
    'zip': '#232F3E',
    'rar': '#232F3E',
    
    // Generic
    'file': '#666D80'
  };
  
  return colorMap[type] || '#666D80';
};

// Get display label for file type
const getFileTypeLabel = (type: FileType): string => {
  const labelMap: Record<FileType, string> = {
    'img': 'IMG',
    'jpg': 'JPG',
    'jpeg': 'JPEG',
    'png': 'PNG',
    'webp': 'WEBP',
    'tiff': 'TIFF',
    'gif': 'GIF',
    'svg': 'SVG',
    'eps': 'EPS',
    'pdf': 'PDF',
    'doc': 'DOC',
    'docx': 'DOCX',
    'txt': 'TXT',
    'csv': 'CSV',
    'xls': 'XLS',
    'xlsx': 'XLSX',
    'ppt': 'PPT',
    'pptx': 'PPTX',
    'fig': 'FIG',
    'ai': 'AI',
    'psd': 'PSD',
    'indd': 'INDD',
    'aep': 'AEP',
    'mp3': 'MP3',
    'wav': 'WAV',
    'mp4': 'MP4',
    'mpeg': 'MPEG',
    'avi': 'AVI',
    'mkv': 'MKV',
    'html': 'HTML',
    'css': 'CSS',
    'rss': 'RSS',
    'sql': 'SQL',
    'js': 'JS',
    'json': 'JSON',
    'java': 'JAVA',
    'xml': 'XML',
    'exe': 'EXE',
    'dmg': 'DMG',
    'zip': 'ZIP',
    'rar': 'RAR',
    'file': 'FILE'
  };
  
  return labelMap[type] || 'FILE';
};

// Get size dimensions for SVG
const getSizeDimensions = (size: FileIconSize): { width: number; height: number } => {
  const dimensions = {
    small: { width: 40, height: 40 },
    medium: { width: 42, height: 42 },
    large: { width: 46, height: 46 }
  };
  return dimensions[size];
};

// Check if file type should show icon overlay
const shouldShowIconOverlay = (type: FileType): boolean => {
  const iconTypes = ['pdf', 'doc', 'docx', 'csv', 'xls', 'xlsx', 'zip', 'rar'];
  return iconTypes.includes(type);
};

// Get overlay icon based on file type
const getOverlayIcon = (type: FileType, color: string): React.ReactNode => {
  switch (type) {
    case 'pdf':
      return (
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" 
              fontSize="8" fontWeight="700" fill={color}>
          PDF
        </text>
      );
    case 'doc':
    case 'docx':
      return (
        <g fill={color}>
          <rect x="14" y="12" width="12" height="1.5" rx="0.5"/>
          <rect x="14" y="15" width="8" height="1.5" rx="0.5"/>
          <rect x="14" y="18" width="10" height="1.5" rx="0.5"/>
        </g>
      );
    case 'csv':
    case 'xls':
    case 'xlsx':
      return (
        <g fill={color}>
          <rect x="12" y="12" width="4" height="4" rx="0.5" strokeWidth="0.5" stroke={color} fill="none"/>
          <rect x="17" y="12" width="4" height="4" rx="0.5" strokeWidth="0.5" stroke={color} fill="none"/>
          <rect x="22" y="12" width="4" height="4" rx="0.5" strokeWidth="0.5" stroke={color} fill="none"/>
          <rect x="12" y="17" width="4" height="4" rx="0.5" strokeWidth="0.5" stroke={color} fill="none"/>
          <rect x="17" y="17" width="4" height="4" rx="0.5" strokeWidth="0.5" stroke={color} fill="none"/>
          <rect x="22" y="17" width="4" height="4" rx="0.5" strokeWidth="0.5" stroke={color} fill="none"/>
        </g>
      );
    case 'zip':
    case 'rar':
      return (
        <g fill={color}>
          <rect x="16" y="12" width="8" height="10" rx="1" strokeWidth="0.5" stroke={color} fill="none"/>
          <rect x="18" y="14" width="4" height="2" rx="0.5"/>
          <rect x="18" y="17" width="4" height="2" rx="0.5"/>
        </g>
      );
    default:
      return null;
  }
};

/**
 * FileIcon component for displaying file type icons with labels using SVG
 */
export const FileIcon: React.FC<FileIconProps> = ({
  type,
  size = 'medium',
  showLabel = true,
  customLabel,
  className = '',
  onClick
}) => {
  const color = getFileTypeColor(type);
  const label = customLabel || getFileTypeLabel(type);
  const hasIconOverlay = shouldShowIconOverlay(type);
  const { width, height } = getSizeDimensions(size);
  
  const baseClasses = [
    'file-icon',
    `file-icon--${size}`,
    onClick ? 'file-icon--clickable' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={baseClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
      aria-label={`${label} file`}
    >
      <div className="file-icon__svg-container">
        <svg 
          width={width} 
          height={height} 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden="true"
          className="file-icon__svg"
        >
          {/* Document background */}
          <path 
            d="M8 6C8 4.89543 8.89543 4 10 4H26L34 12V34C34 35.1046 33.1046 36 32 36H10C8.89543 36 8 35.1046 8 34V6Z" 
            fill="white" 
            stroke="#D0D5DD" 
            strokeWidth="1.5"
          />
          
          {/* Folded corner */}
          <path 
            d="M26 4V10C26 11.1046 26.8954 12 28 12H34L26 4Z" 
            fill="white" 
            stroke="#D0D5DD" 
            strokeWidth="1.5" 
            strokeLinejoin="round"
          />
          
          {/* Corner line */}
          <path 
            d="M26 4L34 12" 
            stroke="#D0D5DD" 
            strokeWidth="1.5"
          />
          
          {/* Overlay icon for specific file types */}
          {hasIconOverlay && (
            <g className="file-icon__overlay">
              {getOverlayIcon(type, color)}
            </g>
          )}
        </svg>
      </div>
      
      {showLabel && (
        <div 
          className="file-icon__label"
          style={{ backgroundColor: color }}
        >
          <span className="file-icon__text">{label}</span>
        </div>
      )}
    </div>
  );
};

export default FileIcon;
