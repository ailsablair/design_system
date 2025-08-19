import React, { useState, useRef, useEffect } from 'react';
import './splitButton.css';

export interface MenuItem {
  id: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface SplitButtonProps {
  /** Button text content */
  children: React.ReactNode;
  /** Size variant */
  size?: 'extra-small' | 'small' | 'default' | 'large';
  /** Button type/variant */
  type?: 'primary' | 'secondary' | 'ghost';
  /** Visual state (for controlled states) */
  state?: 'default' | 'hover' | 'clicked' | 'focused' | 'loading' | 'disabled';
  /** Loading state */
  loading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Leading icon */
  leadingIcon?: React.ReactNode;
  /** Main button click handler */
  onClick?: () => void;
  /** Menu items for dropdown */
  menuItems?: MenuItem[];
  /** Additional CSS classes */
  className?: string;
  /** HTML button type */
  htmlType?: 'button' | 'submit' | 'reset';
  /** Width style */
  width?: 'auto' | 'full';
  /** Controlled open state */
  isOpen?: boolean;
  /** Callback when dropdown state changes */
  onToggle?: (isOpen: boolean) => void;
}

// ChevronDown icon for dropdown
const ChevronDownIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M4.3225 5.00488L7 7.68238L9.6775 5.00488L10.5 5.83322L7 9.33322L3.5 5.83322L4.3225 5.00488Z" fill="currentColor"/>
    </g>
  </svg>
);

// ChevronUp icon for dropdown
const ChevronUpIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M4.3225 9.48913L7 6.81746L9.6775 9.48913L10.5 8.66663L7 5.16663L3.5 8.66663L4.3225 9.48913Z" fill="currentColor"/>
    </g>
  </svg>
);

// Loading icon
const LoadingIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="split-button-loading-icon">
    <path d="M7.99992 2.66665V1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998H2.66659C2.66659 6.58549 3.22849 5.22894 4.22868 4.22874C5.22888 3.22855 6.58543 2.66665 7.99992 2.66665Z" fill="currentColor"/>
  </svg>
);

export const SplitButton: React.FC<SplitButtonProps> = ({
  children,
  size = 'default',
  type = 'primary',
  state = 'default',
  loading = false,
  disabled = false,
  leadingIcon,
  onClick,
  menuItems = [],
  className = '',
  htmlType = 'button',
  width = 'auto',
  isOpen: controlledIsOpen,
  onToggle,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Use controlled or internal state
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  
  // Determine the actual state
  const actualState = disabled ? 'disabled' : (loading ? 'loading' : state);
  
  // Get icon sizes based on button size
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

  // Handle main button click
  const handleMainClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  // Handle dropdown toggle
  const handleDropdownToggle = () => {
    if (disabled || loading) return;
    
    const newIsOpen = !isOpen;
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(newIsOpen);
    }
    if (onToggle) {
      onToggle(newIsOpen);
    }
  };

  // Handle menu item click
  const handleMenuItemClick = (item: MenuItem) => {
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
    if (!isOpen) return;

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

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, controlledIsOpen, onToggle]);

  // Reset focused index when menu closes
  useEffect(() => {
    if (!isOpen) {
      setFocusedIndex(-1);
    }
  }, [isOpen]);

  return (
    <div 
      className={`split-button-container ${isOpen ? 'open' : ''} ${className}`}
      ref={dropdownRef}
      onKeyDown={handleKeyDown}
    >
      <div className={`split-button ${size} ${type} ${actualState} ${width === 'full' ? 'full-width' : ''}`}>
        {/* Main Button */}
        <button
          type={htmlType}
          className="split-button-main"
          onClick={handleMainClick}
          disabled={disabled || loading}
          aria-label={loading ? 'Loading...' : undefined}
        >
          {loading ? (
            <div className="split-button-loading-content">
              <LoadingIcon size={iconSize} />
            </div>
          ) : (
            <div className="split-button-content">
              {leadingIcon && (
                <span className="split-button-icon split-button-leading-icon">
                  {leadingIcon}
                </span>
              )}
              <span className="split-button-text">{children}</span>
            </div>
          )}
        </button>

        {/* Dropdown Toggle Button */}
        <button
          type="button"
          className="split-button-dropdown"
          onClick={handleDropdownToggle}
          disabled={disabled || loading}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          aria-label="Open menu"
        >
          <span className="split-button-icon">
            {isOpen ? (
              <ChevronUpIcon size={iconSize} />
            ) : (
              <ChevronDownIcon size={iconSize} />
            )}
          </span>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && menuItems.length > 0 && (
        <div 
          className={`split-button-menu ${size}`}
          ref={menuRef}
          role="menu"
          aria-orientation="vertical"
        >
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className={`split-button-menu-item ${index === 0 ? 'first' : ''} ${index === menuItems.length - 1 ? 'last' : ''} ${item.disabled ? 'disabled' : ''} ${focusedIndex === index ? 'focused' : ''}`}
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
};

// Export icons for convenience
export { ChevronDownIcon, ChevronUpIcon, LoadingIcon };
