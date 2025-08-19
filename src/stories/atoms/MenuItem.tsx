import React from 'react';
import './menuItem.css';

export interface MenuItemProps {
  /** Content type/position in menu */
  type?: 'top' | 'default' | 'bottom';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Interactive state */
  state?: 'default' | 'hover' | 'clicked' | 'disabled';
  /** Menu item text content */
  children: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  type = 'default',
  size = 'default',
  state = 'default',
  children,
  onClick,
  className = '',
  disabled = false,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const computedState = disabled ? 'disabled' : state;

  return (
    <div
      className={`menu-item ${type} ${size} ${computedState} ${className}`}
      onClick={handleClick}
      role="menuitem"
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <span className="menu-item-text">{children}</span>
    </div>
  );
};
