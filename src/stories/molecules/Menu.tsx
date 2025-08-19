import React from 'react';
import './menu.css';

export interface MenuProps {
  /** Size variant affecting padding and spacing */
  size?: 'small' | 'default' | 'large';
  /** Menu items content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Minimum width of the menu */
  minWidth?: number;
  /** Maximum width of the menu */
  maxWidth?: number;
  /** Whether the menu is open/visible */
  open?: boolean;
  /** Position for dropdown positioning */
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Menu: React.FC<MenuProps> = ({
  size = 'default',
  children,
  className = '',
  minWidth = 140,
  maxWidth = 200,
  open = true,
  position = 'bottom',
}) => {
  if (!open) return null;

  const style = {
    minWidth: `${minWidth}px`,
    maxWidth: `${maxWidth}px`,
  };

  return (
    <div
      className={`menu ${size} ${position} ${className}`}
      style={style}
      role="menu"
      aria-orientation="vertical"
    >
      <div className="menu-content">
        {children}
      </div>
    </div>
  );
};
