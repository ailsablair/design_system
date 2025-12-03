import React from 'react';
import './tag.css';

export type TagSize = 'small' | 'default' | 'large';

export type TagVariant =
  | 'light-gray'
  | 'primary'
  | 'secondary'
  | 'blue'
  | 'cyan'
  | 'orange'
  | 'gray'
  | 'purple'
  | 'green'
  | 'red'
  | 'yellow'
  | 'black'
  | 'outline-blue'
  | 'outline-black'
  | 'outline-sky-blue'
  | 'outline-gray'
  | 'outline-info-blue';

export interface TagProps {
  label: string;
  size?: TagSize;
  variant?: TagVariant;
  shape?: 'rounded' | 'pill';
  showClose?: boolean;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onRemove?: () => void;
  onClick?: () => void;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  label,
  size = 'default',
  variant = 'light-gray',
  shape = 'pill',
  showClose = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  onRemove,
  onClick,
  className = '',
}) => {
  const rootElement: 'button' | 'span' = onClick && !disabled ? 'button' : 'span';

  const classes = [
    'tag',
    `tag--size-${size}`,
    `tag--variant-${variant}`,
    `tag--shape-${shape}`,
    disabled ? 'tag--disabled' : '',
    onClick && !disabled ? 'tag--clickable' : '',
    showClose ? 'tag--closable' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleRootClick = (event: React.MouseEvent) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    if (onClick) {
      onClick();
    }
  };

  const handleRemoveClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (disabled) {
      return;
    }
    onRemove?.();
  };

  const Root = rootElement as any;

  return (
    <Root
      type={rootElement === 'button' ? 'button' : undefined}
      className={classes}
      onClick={rootElement === 'button' ? handleRootClick : undefined}
    >
      {leadingIcon && <span className="tag__icon tag__icon--leading">{leadingIcon}</span>}
      <span className="tag__label">{label}</span>
      {trailingIcon && <span className="tag__icon tag__icon--trailing">{trailingIcon}</span>}
      {showClose && (
        <button
          type="button"
          className="tag__close-button"
          onClick={handleRemoveClick}
          aria-label={`Remove ${label}`}
        >
          <span className="tag__close-icon">×</span>
        </button>
      )}
    </Root>
  );
};

export type TagVariantType = TagVariant;

export default Tag;
