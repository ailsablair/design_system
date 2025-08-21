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

// Check if file type should show icon overlay (non-text files)
const shouldShowIconOverlay = (type: FileType): boolean => {
  const iconTypes = ['pdf', 'doc', 'docx', 'csv', 'xls', 'xlsx'];
  return iconTypes.includes(type);
};

/**
 * FileIcon component for displaying file type icons with labels
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
    >
      <div className="file-icon__document">
        <div className="file-icon__page" />
        <div className="file-icon__corner" />
        
        {hasIconOverlay && (
          <div className="file-icon__overlay">
            {/* Simple icon representation for certain file types */}
            <div className="file-icon__overlay-content" style={{ color }} />
          </div>
        )}
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
