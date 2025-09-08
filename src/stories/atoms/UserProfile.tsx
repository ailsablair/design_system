import React from 'react';
import { Avatar, type AvatarProps } from './Avatar';
import './userProfile.css';

export type UserProfileSize = 'small' | 'default' | 'large';

export interface UserProfileProps {
  /** Size of the user profile */
  size?: UserProfileSize;
  /** User's display name */
  name: string;
  /** Avatar configuration */
  avatar: Omit<AvatarProps, 'size'>;
  /** Additional CSS class name */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * UserProfile component that combines an avatar with a user name
 */
export const UserProfile: React.FC<UserProfileProps> = ({
  size = 'default',
  name,
  avatar,
  className = '',
  onClick
}) => {
  const userProfileClassName = [
    'user-profile',
    `user-profile--${size}`,
    onClick && 'user-profile--clickable',
    className
  ].filter(Boolean).join(' ');

  const getAvatarSize = () => {
    switch (size) {
      case 'small': return 'small';
      case 'default': return 'default';
      case 'large': return 'large';
      default: return 'default';
    }
  };

  return (
    <div 
      className={userProfileClassName}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      <Avatar 
        {...avatar}
        size={getAvatarSize()}
        className="user-profile__avatar"
      />
      <span className="user-profile__name">
        {name}
      </span>
    </div>
  );
};

export default UserProfile;
