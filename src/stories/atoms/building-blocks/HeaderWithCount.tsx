import React from 'react';
import './headerWithCount.css';
import { Tag } from '../Tag';

export interface HeaderWithCountProps {
  /** Header title text */
  title?: string;
  /** Count value */
  count?: number;
  /** Count label (e.g., "items", "members") */
  countLabel?: string;
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Tag color variant */
  tagVariant?: 'primary' | 'blue' | 'outline-blue' | 'secondary' | 'gray';
  /** Show count tag */
  showCount?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

export const HeaderWithCount: React.FC<HeaderWithCountProps> = ({
  title = 'Team members',
  count = 100,
  countLabel = 'items',
  size = 'default',
  tagVariant = 'outline-blue',
  showCount = true,
  className = '',
  onClick,
}) => {
  const headerClasses = [
    'header-with-count',
    `header-with-count--${size}`,
    onClick ? 'header-with-count--clickable' : '',
    className
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if ((event.key === 'Enter' || event.key === ' ') && onClick) {
      event.preventDefault();
      onClick();
    }
  };

  // Format count label
  const formatCountLabel = () => {
    return `${count} ${countLabel}`;
  };

  return (
    <div
      className={headerClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : -1}
      role={onClick ? 'button' : undefined}
      aria-label={onClick ? `${title} - ${formatCountLabel()}` : undefined}
    >
      <h2 className={`header-with-count__title header-with-count__title--${size}`}>
        {title}
      </h2>
      
      {showCount && (
        <div className="header-with-count__count">
          <Tag
            label={formatCountLabel()}
            variant={tagVariant}
            size="small"
            showClose={false}
            light={false}
          />
        </div>
      )}
    </div>
  );
};

export default HeaderWithCount;
