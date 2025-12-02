import React from 'react';
import './autoSave.css';

export type AutoSaveStatus =
  | 'default'
  | 'disabled'
  | 'hover'
  | 'saving'
  | 'auto-saving'
  | 'saved'
  | 'error-saving';

export interface AutoSaveButtonProps {
  status?: AutoSaveStatus;
  onClick?: () => void;
  className?: string;
  size?: 'default';
  saveText?: string;
  savingText?: string;
  autoSavingText?: string;
  savedText?: string;
  errorText?: string;
}

const FloppyDiskIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g opacity="0.6">
      <path
        d="M3.75 2.25C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75H14.25C14.6478 15.75 15.0294 15.592 15.3107 15.3107C15.592 15.0294 15.75 14.6478 15.75 14.25V4.125L13.875 2.25H12.75V6.75C12.75 6.94891 12.671 7.13968 12.5303 7.28033C12.3897 7.42098 12.1989 7.5 12 7.5H6C5.80109 7.5 5.61032 7.42098 5.46967 7.28033C5.32902 7.13968 5.25 6.94891 5.25 6.75V2.25H3.75ZM9 3V6.75H11.25V3H9ZM5.25 9H12.75C12.9489 9 13.1397 9.07902 13.2803 9.21967C13.421 9.36032 13.5 9.55109 13.5 9.75V14.25H4.5V9.75C4.5 9.55109 4.57902 9.36032 4.71967 9.21967C4.86032 9.07902 5.05109 9 5.25 9Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const LoadingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g opacity="0.6">
      <path
        d="M9 3V1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9H3C3 7.4087 3.63214 5.88258 4.75736 4.75736C5.88258 3.63214 7.4087 3.75 9 3.75Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g opacity="0.6">
      <path
        d="M6.75003 15.3152L2.09253 10.6577L4.21503 8.53516L6.75003 11.0777L14.16 3.66016L16.2825 5.78266L6.75003 15.3152Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const ErrorIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g opacity="0.6">
      <path
        d="M15 5.1825L12.8175 3L9 6.8175L5.1825 3L3 5.1825L6.8175 9L3 12.8175L5.1825 15L9 11.1825L12.8175 15L15 12.8175L11.1825 9L15 5.1825Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export const AutoSaveButton: React.FC<AutoSaveButtonProps> = ({
  status = 'default',
  onClick,
  className = '',
  size = 'default',
  saveText = 'Save draft',
  savingText = 'Saving draft',
  autoSavingText = 'Auto-saving',
  savedText = 'Draft saved',
  errorText = 'Unable to save',
}) => {
  const isDisabled = status === 'disabled' || status === 'saving' || status === 'auto-saving';

  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  const getIcon = () => {
    if (status === 'saving' || status === 'auto-saving') {
      return <LoadingIcon className="autosave-icon loading" />;
    }
    if (status === 'saved') {
      return <CheckIcon className="autosave-icon saved" />;
    }
    if (status === 'error-saving') {
      return <ErrorIcon className="autosave-icon error" />;
    }
    return <FloppyDiskIcon className="autosave-icon default" />;
  };

  const getText = () => {
    if (status === 'saving') {
      return savingText;
    }
    if (status === 'auto-saving') {
      return autoSavingText;
    }
    if (status === 'saved') {
      return savedText;
    }
    if (status === 'error-saving') {
      return errorText;
    }
    return saveText;
  };

  const rootClasses = [
    'autosave',
    size,
    status,
    !isDisabled ? 'clickable' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const ariaLabel = getText();

  return (
    <div
      className={rootClasses}
      role={!isDisabled ? 'button' : 'status'}
      tabIndex={!isDisabled ? 0 : -1}
      aria-label={ariaLabel}
      onClick={handleClick}
      onKeyDown={(event) => {
        if (!isDisabled && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="autosave-content">
        {getIcon()}
        <span className="autosave-text">{getText()}</span>
      </div>
    </div>
  );
};

export { FloppyDiskIcon, LoadingIcon, CheckIcon, ErrorIcon };
