import React from 'react';
import { Checkbox } from '../Checkbox';
import { Toggle } from '../Toggle';
import { FileIcon, type FileType } from '../FileIcon';
import './fileCell.css';

export interface FileCellProps {
  /** Cell size variant */
  size?: 'small' | 'default';
  /** Cell variant determines the layout and content */
  variant?: 'file-w-select' | 'file-w-select-and-expiry' | 'file-w-toggle' | 'file-w-toggle-and-expiry';
  /** Background variant */
  background?: 'white' | 'alt-gray-50' | 'alt-seafoam-25' | 'hover' | 'disabled';
  /** File name */
  fileName?: string;
  /** File size (e.g., "200 MB") */
  fileSize?: string;
  /** File type for icon */
  fileType?: FileType;
  /** Checkbox checked state */
  checked?: boolean;
  /** Toggle enabled state */
  toggleEnabled?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Width of the cell */
  width?: string;
  /** Additional CSS classes */
  className?: string;
  /** Checkbox change handler */
  onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Toggle change handler */
  onToggleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Click handler for the cell */
  onClick?: () => void;
}

/**
 * File Cell component for displaying file information with selection controls
 * 
 * Supports multiple variants:
 * - file-w-select: Checkbox + file icon + filename
 * - file-w-select-and-expiry: Checkbox + file icon + filename + file size
 * - file-w-toggle: Toggle + file icon + filename
 * - file-w-toggle-and-expiry: Toggle + file icon + filename + file size
 * 
 * Features responsive design and multiple background states matching Figma designs
 */
export const FileCell: React.FC<FileCellProps> = ({
  size = 'default',
  variant = 'file-w-select',
  background = 'white',
  fileName = 'thisisafilename.pdf',
  fileSize = '200 MB',
  fileType = 'pdf',
  checked = false,
  toggleEnabled = true,
  disabled = false,
  width = '320px',
  className = '',
  onCheckboxChange,
  onToggleChange,
  onClick,
}) => {
  const cellClasses = [
    'file-cell-container',
    `file-cell-size-${size}`,
    `file-cell-variant-${variant}`,
    `file-cell-bg-${background}`,
    disabled && 'file-cell-disabled',
    className
  ].filter(Boolean).join(' ');

  const cellStyle = width ? { width } : undefined;

  const showCheckbox = variant === 'file-w-select' || variant === 'file-w-select-and-expiry';
  const showToggle = variant === 'file-w-toggle' || variant === 'file-w-toggle-and-expiry';
  const showFileSize = variant === 'file-w-select-and-expiry' || variant === 'file-w-toggle-and-expiry';

  return (
    <div 
      className={cellClasses}
      style={cellStyle}
      onClick={onClick}
    >
      {showCheckbox && (
        <div className="file-cell-checkbox">
          <Checkbox
            size={size === 'small' ? 'small' : 'default'}
            checked={checked}
            disabled={disabled}
            onChange={onCheckboxChange}
            variant="default"
            shape="square"
          />
        </div>
      )}

      {showToggle && (
        <div className="file-cell-toggle">
          <Toggle
            size={size === 'small' ? 'small' : 'default'}
            enabled={toggleEnabled}
            disabled={disabled}
            onChange={onToggleChange}
            icon={true}
            state={disabled ? 'disabled' : (background === 'hover' ? 'hover' : 'default')}
          />
        </div>
      )}

      <div className="file-cell-file-icon">
        <FileIcon
          type={fileType}
          size={size === 'small' ? 'small' : 'medium'}
        />
      </div>

      <div className="file-cell-content">
        <div className="file-cell-filename">
          {fileName}
        </div>
        {showFileSize && (
          <div className="file-cell-filesize">
            {fileSize}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileCell;
