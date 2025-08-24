import React from 'react';
import { Toggle } from './Toggle';
import './userCell.css';

export interface UserCellProps {
  /** Cell size variant */
  size?: 'small' | 'default';
  /** Cell variant determines the layout and content */
  variant?: 'name-only' | 'name-email' | 'name-toggle' | 'name-email-toggle';
  /** Background variant */
  background?: 'white' | 'gray-50' | 'seafoam-25' | 'hover' | 'disabled';
  /** User's name */
  name?: string;
  /** User's email */
  email?: string;
  /** Avatar image source */
  avatarSrc?: string;
  /** Avatar alt text */
  avatarAlt?: string;
  /** Show placeholder avatar when no image */
  showPlaceholder?: boolean;
  /** Toggle enabled state */
  toggleEnabled?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Width of the cell */
  width?: string;
  /** Additional CSS classes */
  className?: string;
  /** Toggle change handler */
  onToggleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Click handler for the cell */
  onClick?: () => void;
}

/**
 * User Cell component for displaying user profile information in lists/tables
 * 
 * Supports multiple variants:
 * - name-only: Avatar + name
 * - name-email: Avatar + name + email
 * - name-toggle: Avatar + name + toggle switch
 * - name-email-toggle: Avatar + name + email + toggle switch
 * 
 * Features responsive design and multiple background states
 */
export const UserCell: React.FC<UserCellProps> = ({
  size = 'default',
  variant = 'name-only',
  background = 'white',
  name = 'Olivia Rhye',
  email = 'olivia@email.com',
  avatarSrc,
  avatarAlt,
  showPlaceholder = true,
  toggleEnabled = true,
  disabled = false,
  width,
  className = '',
  onToggleChange,
  onClick,
}) => {
  const cellClasses = [
    'user-cell-container',
    `user-cell-size-${size}`,
    `user-cell-variant-${variant}`,
    `user-cell-bg-${background}`,
    disabled && 'user-cell-disabled',
    className
  ].filter(Boolean).join(' ');

  const cellStyle = width ? { width } : undefined;

  const showEmail = variant === 'name-email' || variant === 'name-email-toggle';
  const showToggle = variant === 'name-toggle' || variant === 'name-email-toggle';

  const renderAvatar = () => {
    if (avatarSrc) {
      return (
        <img 
          src={avatarSrc} 
          alt={avatarAlt || name}
          className="user-cell-avatar-image"
        />
      );
    }
    
    if (showPlaceholder) {
      return (
        <div className="user-cell-avatar-placeholder">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="user-cell-avatar-icon"
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2ZM12 14C15.7555 14 19.0742 16.168 20.6193 19.3554C21.0892 20.2857 20.4044 21.3571 19.3571 21.3571H4.64286C3.59558 21.3571 2.91081 20.2857 3.38071 19.3554C4.92582 16.168 8.24455 14 12 14Z" 
              fill="currentColor"
            />
          </svg>
        </div>
      );
    }

    return null;
  };

  return (
    <div 
      className={cellClasses}
      style={cellStyle}
      onClick={onClick}
    >
      <div className="user-cell-avatar">
        {renderAvatar()}
      </div>

      <div className="user-cell-content">
        <div className="user-cell-name">
          {name}
        </div>
        {showEmail && (
          <div className="user-cell-email">
            {email}
          </div>
        )}
      </div>

      {showToggle && (
        <div className="user-cell-toggle">
          <Toggle
            size={size === 'small' ? 'small' : 'default'}
            enabled={toggleEnabled}
            disabled={disabled}
            onChange={onToggleChange}
            icon={true}
            state={disabled ? 'disabled' : 'default'}
          />
        </div>
      )}
    </div>
  );
};

export default UserCell;
