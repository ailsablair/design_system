import React from 'react';
import { Avatar } from './Avatar';
import type { AvatarProps } from './Avatar';
import './avatarGroup.css';

export type AvatarGroupType = 'default' | 'grid' | 'initials-light' | 'initials-dark';
export type AvatarGroupStroke = 'default' | 'bordered';
export type AvatarGroupSize = 'default' | 'small';

export interface AvatarGroupProps {
  /** Type/layout of the avatar group */
  type?: AvatarGroupType;
  /** Stroke/border style for avatars */
  stroke?: AvatarGroupStroke;
  /** Size of the avatar group */
  size?: AvatarGroupSize;
  /** Array of avatar data */
  avatars?: Array<Partial<AvatarProps> & { 
    id?: string; 
    name?: string; 
    src?: string; 
    initial?: string; 
  }>;
  /** Maximum number of avatars to display before showing overflow */
  maxCount?: number;
  /** Show count indicator for overflow */
  showOverflow?: boolean;
  /** Additional CSS class name */
  className?: string;
  /** Click handler for the group */
  onClick?: () => void;
}

/**
 * AvatarGroup component for displaying multiple avatars in various layouts
 */
export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  type = 'default',
  stroke = 'default',
  size = 'default',
  avatars = [],
  maxCount,
  showOverflow = true,
  className = '',
  onClick
}) => {
  // Determine avatar size based on group size
  const getAvatarSize = () => {
    if (size === 'small') {
      return 'x-small';
    }
    return 'default';
  };

  // Determine avatar type based on group type
  const getAvatarType = (avatar: any, index: number) => {
    if (type === 'initials-light') return 'initial-light';
    if (type === 'initials-dark') return 'initial-dark';
    return avatar.type || 'profile-photo';
  };

  // Get avatars to display based on maxCount
  const getDisplayAvatars = () => {
    if (!maxCount || avatars.length <= maxCount) {
      return avatars;
    }
    return avatars.slice(0, maxCount);
  };

  // Get overflow count
  const getOverflowCount = () => {
    if (!maxCount || avatars.length <= maxCount) {
      return 0;
    }
    return avatars.length - maxCount;
  };

  const displayAvatars = getDisplayAvatars();
  const overflowCount = getOverflowCount();
  
  const groupClassName = [
    'avatar-group',
    `avatar-group--${type}`,
    `avatar-group--${stroke}`,
    `avatar-group--${size}`,
    onClick && 'avatar-group--clickable',
    className
  ].filter(Boolean).join(' ');

  // Special handling for grid layout
  if (type === 'grid') {
    const rows = [];
    const itemsPerRow = 3;
    
    for (let i = 0; i < displayAvatars.length; i += itemsPerRow) {
      const rowAvatars = displayAvatars.slice(i, i + itemsPerRow);
      rows.push(rowAvatars);
    }

    return (
      <div 
        className={groupClassName}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        <div className="avatar-group__grid">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="avatar-group__grid-row">
              {row.map((avatar, avatarIndex) => (
                <Avatar
                  key={avatar.id || `${rowIndex}-${avatarIndex}`}
                  size={getAvatarSize() as any}
                  type={getAvatarType(avatar, avatarIndex) as any}
                  shape={avatar.shape || 'default'}
                  border={stroke === 'bordered'}
                  src={avatar.src}
                  alt={avatar.name || 'Avatar'}
                  initial={avatar.initial || (avatar.name ? avatar.name.charAt(0).toUpperCase() : 'A')}
                  statusIcon={avatar.statusIcon}
                  className="avatar-group__avatar"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default overlapping layout
  return (
    <div 
      className={groupClassName}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="avatar-group__list">
        {displayAvatars.map((avatar, index) => (
          <Avatar
            key={avatar.id || index}
            size={getAvatarSize() as any}
            type={getAvatarType(avatar, index) as any}
            shape={avatar.shape || 'default'}
            border={stroke === 'bordered'}
            src={avatar.src}
            alt={avatar.name || 'Avatar'}
            initial={avatar.initial || (avatar.name ? avatar.name.charAt(0).toUpperCase() : 'A')}
            statusIcon={avatar.statusIcon}
            className="avatar-group__avatar"
          />
        ))}
        
        {overflowCount > 0 && showOverflow && (
          <div className="avatar-group__overflow">
            <Avatar
              size={getAvatarSize() as any}
              type="initial-light"
              shape="default"
              border={stroke === 'bordered'}
              initial={`+${overflowCount}`}
              className="avatar-group__overflow-avatar"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarGroup;
