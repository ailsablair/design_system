import React from 'react';
import { Button, type ButtonVariant } from './Button';
import type { AutoSaveProps } from './AutoSave';
import {
  FloppyDiskIcon,
  LoadingIcon as AutoSaveLoadingIcon,
  CheckIcon,
  ErrorIcon,
} from './AutoSave';
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
  onClick,
  size = 'default',
  saveText = 'Save draft',
  savingText = 'Saving draft',
  autoSavingText = 'Auto-saving',
  savedText = 'Draft saved',
  errorText = 'Unable to save',
}) => {
  let variantClass = 'default';
  let buttonVariant: ButtonVariant = 'secondary';
  let buttonText = saveText;
  let isDisabled = false;

  switch (status) {
    case 'saving':
      variantClass = 'saving';
      buttonText = savingText;
      isDisabled = true;
      break;
    case 'auto-saving':
      variantClass = 'auto-save';
      buttonText = autoSavingText;
      isDisabled = true;
      break;
    case 'saved':
      variantClass = 'saved';
      buttonVariant = 'success';
      buttonText = savedText;
      break;
    case 'error-saving':
      variantClass = 'error';
      buttonVariant = 'error';
      buttonText = errorText;
      break;
    case 'disabled':
      variantClass = 'disabled';
      isDisabled = true;
      break;
    default:
      variantClass = 'default';
      buttonVariant = 'secondary';
      buttonText = saveText;
  }

  const iconClassName =
    status === 'saving' || status === 'auto-saving'
      ? 'autosave-with-tag__icon autosave-with-tag__icon--loading'
      : 'autosave-with-tag__icon';

  const icon = (() => {
    switch (status) {
      case 'saving':
      case 'auto-saving':
        return <AutoSaveLoadingIcon className={iconClassName} />;
      case 'saved':
        return <CheckIcon className={iconClassName} />;
      case 'error-saving':
        return <ErrorIcon className={iconClassName} />;
      default:
        return <FloppyDiskIcon className={iconClassName} />;
    }
  })();

  const containerClassName = [
    'autosave-with-tag',
    `autosave-with-tag--${variantClass}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const buttonClassName = [
    'autosave-with-tag__button',
    `autosave-with-tag__button--${variantClass}`,
  ].join(' ');

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (isDisabled) {
      event.preventDefault();
      return;
    }

    onClick?.();
  };

  const buttonSize = size === 'default' ? 'default' : 'default';

  return (
    <div className={containerClassName}>
      <Button
        variant={buttonVariant}
        size={buttonSize}
        disabled={isDisabled}
        leadingIcon={icon}
        className={buttonClassName}
        onClick={handleClick}
        aria-label={buttonText}
      >
        {buttonText}
      </Button>

      <div className="autosave-with-tag__tag">
        <div className="autosave-with-tag__tag-content">
          <span className="autosave-with-tag__tag-label">{timestampLabel}</span>
          <span className="autosave-with-tag__tag-timestamp">{timestamp}</span>
        </div>
      </div>
    </div>
  );
};
