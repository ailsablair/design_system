import React from 'react';
import { MenuItem, MenuItemProps } from '../atoms/MenuItem';
import './dropdownMenu.css';

export interface DropdownMenuProps {
  /** Menu items */
  items: Omit<MenuItemProps, 'position' | 'size'>[];
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Menu type */
  type?: 'default' | 'submenu';
  /** Width of the menu */
  width?: number;
  /** Show menu */
  isVisible?: boolean;
  /** Menu position */
  position?: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
  /** Additional CSS classes */
  className?: string;
  /** onClose event handler */
  onClose?: () => void;
  /** onItemClick event handler */
  onItemClick?: (index: number, item: Omit<MenuItemProps, 'position' | 'size'>) => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  size = 'default',
  type = 'default',
  width = 276,
  isVisible = true,
  position,
  className = '',
  onClose,
  onItemClick,
}) => {
  const getBorderRadius = () => {
    switch (size) {
      case 'small':
        return 'var(--spacing-radius-4px)';
      case 'large':
        return 'var(--spacing-radius-8px)';
      default:
        return 'var(--spacing-radius-6px)';
    }
  };

  const getMenuItemPosition = (index: number): MenuItemProps['position'] => {
    if (items.length === 1) {
      return type === 'submenu' ? 'submenu-top' : 'top';
    }
    
    if (index === 0) {
      return type === 'submenu' ? 'submenu-top' : 'top';
    }
    
    if (index === items.length - 1) {
      return 'bottom';
    }
    
    return 'default';
  };

  const handleItemClick = (index: number, item: Omit<MenuItemProps, 'position' | 'size'>) => {
    if (onItemClick) {
      onItemClick(index, item);
    }
  };

  const handleBackClick = () => {
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) {
    return null;
  }

  const menuStyle: React.CSSProperties = {
    width: `${width}px`,
    borderRadius: getBorderRadius(),
    ...position
  };

  return (
    <div 
      className={`dropdown-menu ${size} ${type} ${className}`}
      style={menuStyle}
      role="menu"
      aria-orientation="vertical"
    >
      {items.map((item, index) => {
        const itemPosition = getMenuItemPosition(index);
        const isBackButton = type === 'submenu' && index === 0 && item.type === 'back';
        
        return (
          <MenuItem
            key={index}
            {...item}
            size={size}
            position={itemPosition}
            onClick={() => {
              if (isBackButton) {
                handleBackClick();
              } else if (item.onClick) {
                item.onClick();
              }
              handleItemClick(index, item);
            }}
          />
        );
      })}
    </div>
  );
};
