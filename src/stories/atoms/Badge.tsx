import React from 'react';
import './badge.css';

export interface BadgeProps {
  /** Badge variant */
  variant?: 'dot' | 'count';
  /** Color variant */
  color?: 'blue' | 'cyan' | 'orange' | 'gray' | 'purple' | 'green' | 'red' | 'yellow' | 'black';
  /** Size variant for dots */
  size?: 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl';
  /** Count value for count badges */
  count?: number;
  /** Max count before showing + */
  maxCount?: number;
  /** Show badge */
  show?: boolean;
  /** Light style variant (for outline/light background style) */
  light?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'dot',
  color = 'red',
  size = 'medium',
  count = 0,
  maxCount = 99,
  show = true,
  className = '',
}) => {
  if (!show) return null;

  const displayCount = count > maxCount ? `${maxCount}+` : count.toString();

  return (
    <div 
      className={`badge ${variant} ${color} ${size} ${className}`}
      role={variant === 'count' ? 'status' : undefined}
      aria-label={variant === 'count' ? `${count} notifications` : `${color} status indicator`}
    >
      {variant === 'count' && count > 0 && (
        <span className="badge-count">{displayCount}</span>
      )}
    </div>
  );
};
