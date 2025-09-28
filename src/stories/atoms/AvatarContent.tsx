import React from 'react';
import { Avatar } from './Avatar';
import type { AvatarProps } from './Avatar';
import './avatarContent.css';

export type AvatarContentType = 'default' | 'w-subtext' | 'name-only';
export type AvatarContentSize = 'x-small' | 'small' | 'default' | 'large';

export interface AvatarContentProps {
  /** Type of content layout */
  type?: AvatarContentType;
  /** Size of the avatar and content */
  size?: AvatarContentSize;
  /** Avatar configuration */
  avatar?: Partial<AvatarProps>;
  /** Primary name/title text */
  name?: string;
  /** Email or secondary text */
  email?: string;
  /** Additional subtext (e.g., role, department) */
  subtext?: string;
  /** Whether to show the subtext */
  showSubtext?: boolean;
  /** Custom name font family override */
  nameFont?: 'archivo' | 'roboto-flex';
  /** Custom email font family override */
  emailFont?: 'archivo' | 'roboto-flex';
  /** Additional CSS class name */
  className?: string;
  /** Click handler for the content */
  onClick?: () => void;
}

/**
 * AvatarContent component for displaying avatar with associated text content
 */
export const AvatarContent: React.FC<AvatarContentProps> = ({
  type = 'default',
  size = 'default',
  avatar = {},
  name = 'User Name',
  email,
  subtext = 'Additional subtext (e.g role)',
  showSubtext = true,
  nameFont = 'archivo',
  emailFont = 'archivo',
  className = '',
  onClick
}) => {
  // Determine avatar size based on content size
  const getAvatarSize = (): AvatarProps['size'] => {
    switch (size) {
      case 'x-small':
        return 'x-small';
      case 'small':
        return 'small';
      case 'default':
        return 'default';
      case 'large':
        return 'large';
      default:
        return 'default';
    }
  };

  // Get font size classes for name based on type and size
  const getNameClassName = () => {
    const baseClass = 'avatar-content__name';
    const fontClass = nameFont === 'roboto-flex' ? 'avatar-content__name--roboto' : 'avatar-content__name--archivo';
    const sizeClass = `avatar-content__name--${size}`;
    const typeClass = `avatar-content__name--${type}`;
    
    return `${baseClass} ${fontClass} ${sizeClass} ${typeClass}`;
  };

  // Get font size classes for email based on size
  const getEmailClassName = () => {
    const baseClass = 'avatar-content__email';
    const fontClass = emailFont === 'roboto-flex' ? 'avatar-content__email--roboto' : 'avatar-content__email--archivo';
    const sizeClass = `avatar-content__email--${size}`;
    
    return `${baseClass} ${fontClass} ${sizeClass}`;
  };

  // Get subtext class
  const getSubtextClassName = () => {
    return `avatar-content__subtext avatar-content__subtext--${size}`;
  };

  const contentClassName = [
    'avatar-content',
    `avatar-content--${type}`,
    `avatar-content--${size}`,
    onClick && 'avatar-content--clickable',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={contentClassName}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <Avatar
        size={getAvatarSize()}
        type={avatar.type ?? 'profile-photo'}
        shape={avatar.shape ?? 'default'}
        border={avatar.border ?? false}
        src={avatar.src}
        alt={name}
        initial={avatar.initial || (name ? name.charAt(0).toUpperCase() : 'U')}
        statusIcon={avatar.statusIcon}
        className="avatar-content__avatar"
      />
      
      <div className="avatar-content__text">
        <div className="avatar-content__main">
          <div className={getNameClassName()}>
            {name}
          </div>
          {email && (type === 'default' || type === 'w-subtext') && (
            <div className={getEmailClassName()}>
              {email}
            </div>
          )}
        </div>
        
        {showSubtext && subtext && type === 'w-subtext' && (
          <div className={getSubtextClassName()}>
            {subtext}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarContent;
