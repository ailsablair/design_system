import React from 'react';
import { AutoSave, type AutoSaveProps } from './AutoSave';
import './autoSaveWithTag.css';

export interface AutoSaveWithTagProps extends Omit<AutoSaveProps, 'className'> {
  /** Timestamp to display in the tag */
  timestamp?: string;
  /** Custom timestamp label prefix (defaults to "Saved") */
  timestampLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

const getStatusModifier = (status: AutoSaveProps['status'] = 'default') => {
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

export const AutoSaveWithTag: React.FC<AutoSaveWithTagProps> = ({
  status = 'default',
  timestamp = '00:00 AM on 00 JAN 2001',
  timestampLabel = 'Saved',
  className = '',
  ...autoSaveProps
}) => {
  const statusModifier = getStatusModifier(status);

  const containerClassName = [
    'autosave-with-tag',
    `autosave-with-tag--${statusModifier}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassName}>
      <AutoSave
        status={status}
        className="autosave-with-tag__autosave"
        {...autoSaveProps}
      />

      <div className="autosave-with-tag__tag">
        <div className="autosave-with-tag__tag-content">
          <span className="autosave-with-tag__tag-label">{timestampLabel}</span>
          <span className="autosave-with-tag__tag-timestamp">{timestamp}</span>
        </div>
      </div>
    </div>
  );
};
