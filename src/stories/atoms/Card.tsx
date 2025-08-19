import React from 'react';
import './card.css';

export interface CardProps {
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Card type */
  type?: 'plain';
  /** Background color variant */
  bg?: 'default' | 'sky-blue' | 'error' | 'success' | 'warning' | 'info-blue' | 'note-purple' | 'light-gray' | 'black' | 'blue' | 'dark-gray';
  /** Color mode */
  mode?: 'light' | 'dark';
  /** Drop shadow */
  dropShadow?: boolean;
  /** Card content */
  children?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
  /** ARIA label for accessibility */
  'aria-label'?: string;
}

export const Card: React.FC<CardProps> = ({
  size = 'default',
  type = 'plain',
  bg = 'default',
  mode = 'light',
  dropShadow = true,
  children,
  onClick,
  className = '',
  disabled = false,
  'aria-label': ariaLabel,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const cardClasses = [
    'card',
    `card-size-${size}`,
    `card-type-${type}`,
    `card-bg-${bg}`,
    `card-mode-${mode}`,
    dropShadow ? 'card-shadow' : 'card-no-shadow',
    onClick ? 'card-clickable' : '',
    disabled ? 'card-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cardClasses}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      onKeyDown={(e) => {
        if (onClick && !disabled && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {children}
    </div>
  );
};
