import React from 'react';
import { AutoSave, AutoSaveProps } from './AutoSave';
import './autoSaveWithTag.css';

export interface AutoSaveWithTagProps extends Omit<AutoSaveProps, 'className'> {
  /** Timestamp to display in the tag */
  timestamp?: string;
  /** Custom timestamp label prefix (defaults to "Saved") */
  timestampLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

export const AutoSaveWithTag: React.FC<AutoSaveWithTagProps> = ({
  status = 'default',
  timestamp = '00:00 AM on 00 JAN 2001',
  timestampLabel = 'Saved',
  className = '',
  ...autoSaveProps
}) => {
  const getButtonStyling = () => {
    switch (status) {
      case 'error-saving':
        return 'error';
      case 'saved':
        return 'saved';
      case 'saving':
        return 'saving';
      case 'disabled':
        return 'disabled';
      default:
        return 'default';
    }
  };

  const buttonStyle = getButtonStyling();

  return (
    <div className={`autosave-with-tag ${buttonStyle} ${className}`}>
      {/* AutoSave Button with styled container */}
      <div className={`autosave-button-container ${buttonStyle}`}>
        <AutoSave 
          status={status}
          className="autosave-button"
          {...autoSaveProps}
        />
      </div>
      
      {/* Timestamp Tag */}
      <div className="autosave-tag">
        <div className="autosave-tag-content">
          <span className="autosave-tag-label">{timestampLabel}</span>
          <span className="autosave-tag-timestamp">{timestamp}</span>
        </div>
      </div>
    </div>
  );
};
