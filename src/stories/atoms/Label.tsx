import React, { useState, useRef, useEffect } from 'react';
import './label.css';

export interface LabelMenuItem {
  id: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface LabelProps {
  /** Label text content */
  children: React.ReactNode;
  /** Size variant */
  size?: 'extra-small' | 'small' | 'default' | 'large';
  /** Label type/variant */
  type?: 'default' | 'ghost';
  /** Visual state (for controlled states) */
  state?: 'default' | 'hover' | 'clicked' | 'focused' | 'disabled';
  /** Disabled state */
  disabled?: boolean;
  /** Leading icon */
  leadingIcon?: React.ReactNode;
  /** Trailing icon */
  trailingIcon?: React.ReactNode;
  /** Icon-only variant */
  iconOnly?: boolean;
  /** Icon for icon-only variant */
  icon?: React.ReactNode;
  /** Split variant with dropdown */
  split?: boolean;
  /** Menu items for dropdown (when split=true) */
  menuItems?: LabelMenuItem[];
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** HTML for attribute */
  htmlFor?: string;
  /** Controlled open state for split variant */
  isOpen?: boolean;
  /** Callback when dropdown state changes */
  onToggle?: (isOpen: boolean) => void;
}

// Default icons for the design system
const AlarmIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M3.5 4.02516L2.2575 2.7885L3.08 1.966L4.31667 3.2085L3.5 4.02516ZM7.58333 0.583496V2.3335H6.41667V0.583496H7.58333ZM11.7425 2.7885L10.5 4.02516L9.68333 3.2085L10.92 1.966L11.7425 2.7885ZM2.625 6.12516V7.29183H0.875V6.12516H2.625ZM11.375 6.12516H13.125V7.29183H11.375V6.12516ZM3.5 11.6668H10.5C10.8094 11.6668 11.1062 11.7897 11.325 12.0085C11.5437 12.2273 11.6667 12.5241 11.6667 12.8335H2.33333C2.33333 12.5241 2.45625 12.2273 2.67504 12.0085C2.89383 11.7897 3.19058 11.6668 3.5 11.6668ZM7 2.91683C7.92826 2.91683 8.8185 3.28558 9.47487 3.94196C10.1313 4.59833 10.5 5.48857 10.5 6.41683V11.0835H3.5V6.41683C3.5 5.48857 3.86875 4.59833 4.52513 3.94196C5.1815 3.28558 6.07174 2.91683 7 2.91683Z" fill="currentColor"/>
    </g>
  </svg>
);

const ArrowDownCircleIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M6.41675 3.49984V8.1665L4.37508 6.12484L3.54675 6.95317L7.00008 10.4065L10.4534 6.95317L9.62508 6.12484L7.58341 8.1665V3.49984H6.41675ZM7.00008 12.8332C6.23404 12.8332 5.47549 12.6823 4.76776 12.3891C4.06003 12.096 3.41697 11.6663 2.87529 11.1246C1.78133 10.0307 1.16675 8.54693 1.16675 6.99984C1.16675 5.45274 1.78133 3.96901 2.87529 2.87505C3.96925 1.78109 5.45298 1.1665 7.00008 1.1665C7.76613 1.1665 8.52467 1.31739 9.2324 1.61054C9.94013 1.90369 10.5832 2.33337 11.1249 2.87505C11.6665 3.41672 12.0962 4.05978 12.3894 4.76752C12.6825 5.47525 12.8334 6.23379 12.8334 6.99984C12.8334 8.54693 12.2188 10.0307 11.1249 11.1246C10.0309 12.2186 8.54718 12.8332 7.00008 12.8332Z" fill="currentColor"/>
    </g>
  </svg>
);

const ChevronDownIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M4.3225 5.00488L7 7.68238L9.6775 5.00488L10.5 5.83322L7 9.33322L3.5 5.83322L4.3225 5.00488Z" fill="currentColor"/>
    </g>
  </svg>
);

const ChevronUpIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M4.3225 9.48913L7 6.81746L9.6775 9.48913L10.5 8.66663L7 5.16663L3.5 8.66663L4.3225 9.48913Z" fill="currentColor"/>
    </g>
  </svg>
);

export const Label: React.FC<LabelProps> = ({
  children,
  size = 'default',
  type = 'default',
  state = 'default',
  disabled = false,
  leadingIcon,
  trailingIcon,
  iconOnly = false,
  icon,
  split = false,
  menuItems = [],
  onClick,
  className = '',
  htmlFor,
  isOpen: controlledIsOpen,
  onToggle,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Use controlled or internal state for dropdown
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  
  // Determine the actual state
  const actualState = disabled ? 'disabled' : state;
  
  // Get icon sizes based on label size
  const getIconSize = () => {
    switch (size) {
      case 'extra-small': return 14;
      case 'small': return 14;
      case 'default': return 18;
      case 'large': return 20;
      default: return 18;
    }
  };

  const iconSize = getIconSize();

  // Handle main label click
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  // Handle dropdown toggle for split variant
  const handleDropdownToggle = () => {
    if (disabled) return;
    
    const newIsOpen = !isOpen;
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(newIsOpen);
    }
    if (onToggle) {
      onToggle(newIsOpen);
    }
  };

  // Handle menu item click
  const handleMenuItemClick = (item: LabelMenuItem) => {
    if (!item.disabled && item.onClick) {
      item.onClick();
    }
    // Close dropdown after item click
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(false);
    }
    if (onToggle) {
      onToggle(false);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen || !split) return;

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        if (controlledIsOpen === undefined) {
          setInternalIsOpen(false);
        }
        if (onToggle) {
          onToggle(false);
        }
        break;
      case 'ArrowDown':
        event.preventDefault();
        setFocusedIndex(prev => 
          prev < menuItems.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setFocusedIndex(prev => 
          prev > 0 ? prev - 1 : menuItems.length - 1
        );
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < menuItems.length) {
          handleMenuItemClick(menuItems[focusedIndex]);
        }
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (controlledIsOpen === undefined) {
          setInternalIsOpen(false);
        }
        if (onToggle) {
          onToggle(false);
        }
        setFocusedIndex(-1);
      }
    };

    if (isOpen && split) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, split, controlledIsOpen, onToggle]);

  // Reset focused index when menu closes
  useEffect(() => {
    if (!isOpen) {
      setFocusedIndex(-1);
    }
  }, [isOpen]);

  // For icon-only labels, use icon prop or leadingIcon as fallback
  const iconOnlyContent = icon || leadingIcon;

  if (split) {
    return (
      <div 
        className={`label-container split ${isOpen ? 'open' : ''} ${className}`}
        ref={dropdownRef}
        onKeyDown={handleKeyDown}
      >
        <div className={`label split ${size} ${type} ${actualState}`}>
          {/* Main Label */}
          <div
            className="label-main"
            onClick={handleClick}
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-disabled={disabled}
          >
            <div className="label-content">
              {leadingIcon && (
                <span className="label-icon label-leading-icon">
                  {leadingIcon}
                </span>
              )}
              <span className="label-text">{children}</span>
            </div>
          </div>

          {/* Dropdown Toggle */}
          <div
            className="label-dropdown"
            onClick={handleDropdownToggle}
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-expanded={isOpen}
            aria-haspopup="menu"
            aria-label="Open menu"
            aria-disabled={disabled}
          >
            <span className="label-icon">
              {isOpen ? (
                <ChevronUpIcon size={iconSize} />
              ) : (
                <ChevronDownIcon size={iconSize} />
              )}
            </span>
          </div>
        </div>

        {/* Dropdown Menu */}
        {isOpen && menuItems.length > 0 && (
          <div 
            className={`label-menu ${size}`}
            ref={menuRef}
            role="menu"
            aria-orientation="vertical"
          >
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                className={`label-menu-item ${index === 0 ? 'first' : ''} ${index === menuItems.length - 1 ? 'last' : ''} ${item.disabled ? 'disabled' : ''} ${focusedIndex === index ? 'focused' : ''}`}
                role="menuitem"
                tabIndex={-1}
                onClick={() => handleMenuItemClick(item)}
                aria-disabled={item.disabled}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`label ${size} ${type} ${actualState} ${iconOnly ? 'icon-only' : ''} ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      id={htmlFor ? `label-for-${htmlFor}` : undefined}
    >
      {iconOnly ? (
        <div className="label-icon-only-content">
          {iconOnlyContent && (
            <span className="label-icon">
              {iconOnlyContent}
            </span>
          )}
        </div>
      ) : (
        <div className="label-content">
          {leadingIcon && (
            <span className="label-icon label-leading-icon">
              {leadingIcon}
            </span>
          )}
          {children && <span className="label-text">{children}</span>}
          {trailingIcon && (
            <span className="label-icon label-trailing-icon">
              {trailingIcon}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

// Export default icons for convenience
export { AlarmIcon, ArrowDownCircleIcon, ChevronDownIcon, ChevronUpIcon };
