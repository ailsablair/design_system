import React from 'react';
import './menuItem.css';

export interface MenuItemProps {
  /** Menu item label text */
  label: string;
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Position in menu */
  position?: 'top' | 'default' | 'bottom' | 'submenu-top';
  /** Menu item type */
  type?: 'simple' | 'back';
  /** Item state */
  state?: 'default' | 'hover' | 'focus' | 'active' | 'disabled';
  /** Show leading icon */
  showLeadingIcon?: boolean;
  /** Custom icon (if not provided, uses default forum icon) */
  icon?: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** onClick event handler */
  onClick?: () => void;
  /** onMouseEnter event handler */
  onMouseEnter?: () => void;
  /** onMouseLeave event handler */
  onMouseLeave?: () => void;
}

const ForumIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const iconSize = size === 'small' ? '18' : size === 'large' ? '28' : '24';
  
  return (
    <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {size === 'small' ? (
        <path d="M12.75 9V2.25C12.75 2.05109 12.671 1.86032 12.5303 1.71967C12.3897 1.57902 12.1989 1.5 12 1.5H2.25C2.05109 1.5 1.86032 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V12.75L4.5 9.75H12C12.1989 9.75 12.3897 9.67098 12.5303 9.53033C12.671 9.38968 12.75 9.19891 12.75 9ZM15.75 4.5H14.25V11.25H4.5V12.75C4.5 12.9489 4.57902 13.1397 4.71967 13.2803C4.86032 13.421 5.05109 13.5 5.25 13.5H13.5L16.5 16.5V5.25C16.5 5.05109 16.421 4.86032 16.2803 4.71967C16.1397 4.57902 15.9489 4.5 15.75 4.5Z" fill="#6D7280"/>
      ) : size === 'large' ? (
        <path d="M19.8333 13.9999V3.49992C19.8333 3.1905 19.7103 2.89375 19.4915 2.67496C19.2728 2.45617 18.976 2.33325 18.6666 2.33325H3.49992C3.1905 2.33325 2.89375 2.45617 2.67496 2.67496C2.45617 2.89375 2.33325 3.1905 2.33325 3.49992V19.8333L6.99992 15.1666H18.6666C18.976 15.1666 19.2728 15.0437 19.4915 14.8249C19.7103 14.6061 19.8333 14.3093 19.8333 13.9999ZM24.4999 6.99992H22.1666V17.4999H6.99992V19.8333C6.99992 20.1427 7.12284 20.4394 7.34163 20.6582C7.56042 20.877 7.85717 20.9999 8.16658 20.9999H20.9999L25.6666 25.6666V8.16658C25.6666 7.85717 25.5437 7.56042 25.3249 7.34163C25.1061 7.12284 24.8093 6.99992 24.4999 6.99992Z" fill="#6D7280"/>
      ) : (
        <path d="M17 12V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V17L6 13H16C16.2652 13 16.5196 12.8946 16.7071 12.7071C16.8946 12.5196 17 12.2652 17 12ZM21 6H19V15H6V17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18H18L22 22V7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6Z" fill="#6D7280"/>
      )}
    </svg>
  );
};

const BackArrowIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const iconSize = size === 'small' ? '18' : size === 'large' ? '28' : '24';
  
  return (
    <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {size === 'small' ? (
        <path d="M15.0001 8.25006V9.75006H6.00012L10.1251 13.8751L9.06012 14.9401L3.12012 9.00006L9.06012 3.06006L10.1251 4.12506L6.00012 8.25006H15.0001Z" fill="#0BA7EA"/>
      ) : size === 'large' ? (
        <path d="M23.3335 10.4999V17.4999H14.0002V23.1466L4.85352 13.9999L14.0002 4.85327V10.4999H23.3335Z" fill="#0BA7EA"/>
      ) : (
        <path d="M20.0002 8.99991V14.9999H12.0002V19.8399L4.16016 11.9999L12.0002 4.15991V8.99991H20.0002Z" fill="#0BA7EA"/>
      )}
    </svg>
  );
};

export const MenuItem: React.FC<MenuItemProps> = ({
  label,
  size = 'default',
  position = 'default',
  type = 'simple',
  state = 'default',
  showLeadingIcon = true,
  icon,
  disabled = false,
  className = '',
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleMouseEnter = () => {
    if (!disabled && onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && onMouseLeave) {
      onMouseLeave();
    }
  };

  const renderIcon = () => {
    if (!showLeadingIcon) return null;
    
    if (icon) return icon;
    
    if (type === 'back') {
      return <BackArrowIcon size={size} />;
    }
    
    return <ForumIcon size={size} />;
  };

  return (
    <div 
      className={`menu-item ${size} ${position} ${type} ${state} ${disabled ? 'disabled' : ''} ${className}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
    >
      {renderIcon()}
      <div className={`menu-item-label ${size}`}>
        {label}
      </div>
    </div>
  );
};
