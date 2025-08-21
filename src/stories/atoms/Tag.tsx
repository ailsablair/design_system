import React from 'react';
import './tag.css';

export interface TagProps {
  /** Tag label text */
  label: string;
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Color variant */
  variant?: 'light-gray' | 'primary' | 'secondary' | 'blue' | 'cyan' | 'orange' | 'gray' | 'purple' | 'green' | 'red' | 'yellow' | 'black' | 'outline-blue' | 'outline-info-blue';
  /** Show close button */
  showClose?: boolean;
  /** Light style variant (for outline/light background style) */
  light?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** onRemove event handler */
  onRemove?: () => void;
  /** onClick event handler */
  onClick?: () => void;
}

const CloseIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const iconSize = size === 'small' ? '14' : size === 'large' ? '20' : '18';
  
  return (
    <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.7">
        <path
          d={size === 'small' 
            ? "M11.0832 3.73913L10.2607 2.91663L6.99984 6.17746L3.739 2.91663L2.9165 3.73913L6.17734 6.99996L2.9165 10.2608L3.739 11.0833L6.99984 7.82246L10.2607 11.0833L11.0832 10.2608L7.82234 6.99996L11.0832 3.73913Z"
            : size === 'large'
            ? "M15.8332 5.34163L14.6582 4.16663L9.99984 8.82496L5.3415 4.16663L4.1665 5.34163L8.82484 9.99996L4.1665 14.6583L5.3415 15.8333L9.99984 11.175L14.6582 15.8333L15.8332 14.6583L11.1748 9.99996L15.8332 5.34163Z"
            : "M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z"
          }
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export const Tag: React.FC<TagProps> = ({
  label,
  size = 'default',
  variant = 'light-gray',
  showClose = true,
  light = false,
  disabled = false,
  className = '',
  onRemove,
  onClick,
}) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove && !disabled) {
      onRemove();
    }
  };

  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <div
      className={`tag ${size} ${variant} ${light ? 'light' : ''} ${disabled ? 'disabled' : ''} ${onClick ? 'clickable' : ''} ${className}`}
      onClick={handleClick}
    >
      <div className={`tag-label ${size}`}>
        <span className="tag-text">{label}</span>
        {showClose && (
          <button
            type="button"
            className={`tag-close-button ${size}`}
            onClick={handleRemove}
            disabled={disabled}
            aria-label={`Remove ${label} tag`}
          >
            <CloseIcon size={size} />
          </button>
        )}
      </div>
    </div>
  );
};
