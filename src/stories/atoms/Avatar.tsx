import React from 'react';
import './avatar.css';

export type AvatarSize = 'x-small' | 'small' | 'default' | 'large';
export type AvatarType = 'empty-state' | 'profile-photo' | 'initial-light' | 'initial-dark';
export type AvatarShape = 'default' | 'square';
export type StatusType = 'online' | 'offline' | 'away' | 'do-not-disturb' | 'verified';
export type StatusSize = 'small' | 'large' | 'default';

export interface StatusIconProps {
  status: StatusType;
  size?: StatusSize;
  className?: string;
}

export interface AvatarProps {
  /** Size of the avatar */
  size?: AvatarSize;
  /** Type/style of the avatar */
  type?: AvatarType;
  /** Shape of the avatar */
  shape?: AvatarShape;
  /** Whether to show a border around the avatar */
  border?: boolean;
  /** Source URL for avatar image (for profile-photo and empty-state types) */
  src?: string;
  /** Alt text for avatar image */
  alt?: string;
  /** Initial letter to display (for initial-light and initial-dark types) */
  initial?: string;
  /** Status icon configuration */
  statusIcon?: {
    status: StatusType;
    visible?: boolean;
  };
  /** Additional CSS class name */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * StatusIcon component for avatar status indicators
 */
export const StatusIcon: React.FC<StatusIconProps> = ({ 
  status, 
  size = 'default',
  className = '' 
}) => {
  const baseClassName = `avatar-status-icon avatar-status-icon--${status} avatar-status-icon--${size}`;
  
  if (status === 'verified') {
    return (
      <svg 
        className={`${baseClassName} ${className}`}
        viewBox="0 0 16 16" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.0669 0.870012C9.79776 0.594553 9.47624 0.375673 9.12128 0.226235C8.76632 0.0767976 8.38506 -0.000183105 7.99993 -0.000183105C7.61479 -0.000183105 7.23354 0.0767976 6.87857 0.226235C6.52361 0.375673 6.2021 0.594553 5.93293 0.870012L5.31093 1.50801L4.42093 1.49701C4.03568 1.49245 3.65341 1.56497 3.29659 1.7103C2.93977 1.85563 2.61562 2.07084 2.34319 2.34327C2.07075 2.6157 1.85555 2.93986 1.71022 3.29667C1.56489 3.65349 1.49237 4.03576 1.49693 4.42101L1.50693 5.31101L0.870928 5.93301C0.595468 6.20218 0.376588 6.5237 0.227151 6.87866C0.0777131 7.23362 0.000732422 7.61488 0.000732422 8.00001C0.000732422 8.38515 0.0777131 8.7664 0.227151 9.12137C0.376588 9.47633 0.595468 9.79784 0.870928 10.067L1.50793 10.689L1.49693 11.579C1.49237 11.9643 1.56489 12.3465 1.71022 12.7034C1.85555 13.0602 2.07075 13.3843 2.34319 13.6568C2.61562 13.9292 2.93977 14.1444 3.29659 14.2897C3.65341 14.4351 4.03568 14.5076 4.42093 14.503L5.31093 14.493L5.93293 15.129C6.2021 15.4045 6.52361 15.6234 6.87857 15.7728C7.23354 15.9222 7.61479 15.9992 7.99993 15.9992C8.38506 15.9992 8.76632 15.9222 9.12128 15.7728C9.47624 15.6234 9.79776 15.4045 10.0669 15.129L10.6889 14.492L11.5789 14.503C11.9642 14.5076 12.3465 14.4351 12.7033 14.2897C13.0601 14.1444 13.3842 13.9292 13.6567 13.6568C13.9291 13.3843 14.1443 13.0602 14.2896 12.7034C14.435 12.3465 14.5075 11.9643 14.5029 11.579L14.4929 10.689L15.1289 10.067C15.4044 9.79784 15.6233 9.47633 15.7727 9.12137C15.9221 8.7664 15.9991 8.38515 15.9991 8.00001C15.9991 7.61488 15.9221 7.23362 15.7727 6.87866C15.6233 6.5237 15.4044 6.20218 15.1289 5.93301L14.4919 5.31101L14.5029 4.42101C14.5075 4.03576 14.435 3.65349 14.2896 3.29667C14.1443 2.93986 13.9291 2.6157 13.6567 2.34327C13.3842 2.07084 13.0601 1.85563 12.7033 1.7103C12.3465 1.56497 11.9642 1.49245 11.5789 1.49701L10.6889 1.50701L10.0669 0.870012ZM10.3539 6.85401L7.35393 9.85401C7.30748 9.90058 7.25231 9.93752 7.19156 9.96272C7.13082 9.98793 7.06569 10.0009 6.99993 10.0009C6.93416 10.0009 6.86904 9.98793 6.80829 9.96272C6.74755 9.93752 6.69237 9.90058 6.64593 9.85401L5.14593 8.35401C5.09944 8.30752 5.06256 8.25234 5.0374 8.1916C5.01224 8.13086 4.9993 8.06576 4.9993 8.00001C4.9993 7.93427 5.01224 7.86917 5.0374 7.80843C5.06256 7.74769 5.09944 7.6925 5.14593 7.64601C5.19242 7.59952 5.2476 7.56265 5.30834 7.53749C5.36908 7.51233 5.43418 7.49938 5.49993 7.49938C5.56567 7.49938 5.63077 7.51233 5.69151 7.53749C5.75225 7.56265 5.80744 7.59952 5.85393 7.64601L6.99993 8.79301L9.64593 6.14601C9.73981 6.05213 9.86715 5.99938 9.99993 5.99938C10.1327 5.99938 10.26 6.05213 10.3539 6.14601C10.4478 6.2399 10.5006 6.36724 10.5006 6.50001C10.5006 6.63279 10.4478 6.76013 10.3539 6.85401Z" fill="#0BA7EA"/>
      </svg>
    );
  }
  
  // For other status types (online, offline, away, do-not-disturb)
  return (
    <svg 
      className={`${baseClassName} ${className}`}
      viewBox="0 0 14 14" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle 
        cx="7" 
        cy="7" 
        r="6" 
        className={`avatar-status-icon__circle avatar-status-icon__circle--${status}`}
      />
    </svg>
  );
};

/**
 * Avatar component with multiple variants, sizes, and status indicators
 */
export const Avatar: React.FC<AvatarProps> = ({
  size = 'default',
  type = 'empty-state',
  shape = 'default',
  border = false,
  src,
  alt = 'Avatar',
  initial = 'A',
  statusIcon,
  className = '',
  onClick
}) => {
  const avatarClassName = [
    'avatar',
    `avatar--${size}`,
    `avatar--${type}`,
    `avatar--${shape}`,
    border && 'avatar--bordered',
    onClick && 'avatar--clickable',
    className
  ].filter(Boolean).join(' ');

  const renderAvatarContent = () => {
    if (type === 'profile-photo' || type === 'empty-state') {
      return (
        <img 
          className="avatar__image"
          src={src} 
          alt={alt}
        />
      );
    }
    
    if (type === 'initial-light' || type === 'initial-dark') {
      return (
        <span className="avatar__initial">
          {initial}
        </span>
      );
    }
    
    return null;
  };

  const getStatusIconSize = () => {
    switch (size) {
      case 'x-small': return 'small';
      case 'small': return 'large';
      case 'default': return 'default';
      case 'large': return 'default';
      default: return 'default';
    }
  };

  return (
    <div className="avatar-container">
      <div 
        className={avatarClassName}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        {renderAvatarContent()}
      </div>
      
      {statusIcon?.visible !== false && statusIcon?.status && (
        <StatusIcon 
          status={statusIcon.status}
          size={getStatusIconSize() as StatusSize}
          className={`avatar-container__status-icon avatar-container__status-icon--${size} avatar-container__status-icon--${shape}`}
        />
      )}
    </div>
  );
};

export default Avatar;

// Explicit re-exports to ensure they're available
export type { AvatarProps, StatusIconProps, AvatarSize, AvatarType, AvatarShape, StatusType, StatusSize };
