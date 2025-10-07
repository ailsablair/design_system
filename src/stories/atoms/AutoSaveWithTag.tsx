import React from 'react';
import { AutoSave } from './AutoSave';
import type { AutoSaveProps } from './AutoSave';
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
  const getButtonType = () => {
    switch (status) {
      case 'auto-saving':
        return 'auto-save';
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

  const buttonType = getButtonType();

  return (
    <div className={`autosave-with-tag autosave-with-tag--${buttonType} ${className}`}>
      {/* AutoSave Button */}
      <AutoSave
        status={status}
        className="autosave-with-tag__button"
        {...autoSaveProps}
      />

      {/* Timestamp Tag */}
      <div className="autosave-with-tag__tag">
        <div className="autosave-with-tag__tag-content">
          <span className="autosave-with-tag__tag-label">{timestampLabel}</span>
          <span className="autosave-with-tag__tag-timestamp">{timestamp}</span>
        </div>
      </div>
    </div>
  );
};
