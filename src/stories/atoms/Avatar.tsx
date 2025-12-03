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
  className = '',
}) => {
  const baseClassName = `avatar-status-icon avatar-status-icon--${status} avatar-status-icon--${size}`;

  if (status === 'verified') {
    if (size === 'default') {
      return (
        <svg
          className={`${baseClassName} ${className}`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.0669 0.870012C9.79776 0.594553 9.47624 0.375673 9.12128 0.226235C8.76632 0.0767976 8.38506 -0.000183105 7.99993 -0.000183105C7.61479 -0.000183105 7.23354 0.0767976 6.87857 0.226235C6.52361 0.375673 6.2021 0.594553 5.93293 0.870012L5.31093 1.50801L4.42093 1.49701C4.03568 1.49245 3.65341 1.56497 3.29659 1.7103C2.93977 1.85563 2.61562 2.07084 2.34319 2.34327C2.07075 2.6157 1.85555 2.93986 1.71022 3.29667C1.56489 3.65349 1.49237 4.03576 1.49693 4.42101L1.50693 5.31101L0.870928 5.93301C0.595468 6.20218 0.376588 6.5237 0.227151 6.87866C0.0777131 7.23362 0.000732422 7.61488 0.000732422 8.00001C0.000732422 8.38515 0.0777131 8.7664 0.227151 9.12137C0.376588 9.47633 0.595468 9.79784 0.870928 10.067L1.50793 10.689L1.49693 11.579C1.49237 11.9643 1.56489 12.3465 1.71022 12.7034C1.85555 13.0602 2.07075 13.3843 2.34319 13.6568C2.61562 13.9292 2.93977 14.1444 3.29659 14.2897C3.65341 14.4351 4.03568 14.5076 4.42093 14.503L5.31093 14.493L5.93293 15.129C6.2021 15.4045 6.52361 15.6234 6.87857 15.7728C7.23354 15.9222 7.61479 15.9992 7.99993 15.9992C8.38506 15.9992 8.76632 15.9222 9.12128 15.7728C9.47624 15.6234 9.79776 15.4045 10.0669 15.129L10.6889 14.492L11.5789 14.503C11.9642 14.5076 12.3465 14.4351 12.7033 14.2897C13.0601 14.1444 13.3842 13.9292 13.6567 13.6568C13.9291 13.3843 14.1443 13.0602 14.2896 12.7034C14.435 12.3465 14.5075 11.9643 14.5029 11.579L14.4929 10.689L15.1289 10.067C15.4044 9.79784 15.6233 9.47633 15.7727 9.12137C15.9221 8.7664 15.9991 8.38515 15.9991 8.00001C15.9991 7.61488 15.9221 7.23362 15.7727 6.87866C15.6233 6.5237 15.4044 6.20218 15.1289 5.93301L14.4929 5.31101L14.5029 4.42101C14.5075 4.03576 14.435 3.65349 14.2896 3.29667C14.1443 2.93986 13.9291 2.6157 13.6567 2.34327C13.3842 2.07084 13.0601 1.85563 12.7033 1.7103C12.3465 1.56497 11.9642 1.49245 11.5789 1.49701L10.6889 1.50801L10.0669 0.870012ZM7.33326 11.3333L3.99993 7.99999L5.17659 6.82332L7.33326 8.97999L11.6666 4.64666L12.8433 5.82332L7.33326 11.3333Z" fill="currentColor" />
        </svg>
      );
    }

    if (size === 'large') {
      return (
        <svg
          className={`${baseClassName} ${className}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.55038 0.652463C7.3485 0.445869 7.10737 0.281709 6.84114 0.169631C6.57492 0.0575524 6.28898 -0.000183105 6.00013 -0.000183105C5.71128 -0.000183105 5.42534 0.0575524 5.15911 0.169631C4.89289 0.281709 4.65176 0.445869 4.44988 0.652463L3.98338 1.13096L3.31588 1.12271C3.02694 1.11929 2.74024 1.17368 2.47263 1.28268C2.20501 1.39168 1.9619 1.55308 1.75757 1.75741C1.55325 1.96173 1.39184 2.20485 1.28284 2.47246C1.17385 2.74007 1.11946 3.02678 1.12288 3.31571L1.13038 3.98321L0.653379 4.44971C0.446784 4.65159 0.282624 4.89273 0.170546 5.15895C0.0584679 5.42517 0.000732422 5.71111 0.000732422 5.99996C0.000732422 6.28882 0.0584679 6.57476 0.170546 6.84098C0.282624 7.1072 0.446784 7.34834 0.653379 7.55021L1.13113 8.01671L1.12288 8.68421C1.11946 8.97315 1.17385 9.25986 1.28284 9.52747C1.39184 9.79508 1.55325 10.0382 1.75757 10.2425C1.9619 10.4468 2.20501 10.6082 2.47263 10.7172C2.74024 10.8262 3.02694 10.8806 3.31588 10.8772L3.98338 10.8697L4.44988 11.3467C4.65176 11.5533 4.89289 11.7175 5.15911 11.8295C5.42534 11.9416 5.71128 11.9994 6.00013 11.9994C6.28898 11.9994 6.57492 11.9416 6.84114 11.8295C7.10737 11.7175 7.3485 11.5533 7.55038 11.3467L8.01688 10.869L8.68438 10.8772C8.97332 10.8806 9.26002 10.8262 9.52763 10.7172C9.79524 10.6082 10.0384 10.4468 10.2427 10.2425C10.447 10.0382 10.6084 9.79508 10.7174 9.52747C10.8264 9.25986 10.8808 8.97315 10.8774 8.68421L10.8699 8.01671L11.3469 7.55021C11.5535 7.34834 11.7176 7.1072 11.8297 6.84098C11.9418 6.57476 11.9995 6.28882 11.9995 5.99996C11.9995 5.71111 11.9418 5.42517 11.8297 5.15895C11.7176 4.89273 11.5535 4.65159 11.3469 4.44971L10.8699 3.98321L10.8774 3.31571C10.8808 3.02678 10.8264 2.74007 10.7174 2.47246C10.6084 2.20485 10.447 1.96173 10.2427 1.75741C10.0384 1.55308 9.79524 1.39168 9.52763 1.28268C9.26002 1.17368 8.97332 1.11929 8.68438 1.12271L8.01688 1.13096L7.55038 0.652463ZM5.50013 8.66663L3.33346 6.49996L4.27696 5.55646L5.50013 6.77963L8.38946 3.89029L9.33296 4.83379L5.50013 8.66663Z" fill="currentColor" />
        </svg>
      );
    }

    return (
      <svg
        className={`${baseClassName} ${className}`}
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.2921 0.543689C6.12387 0.371527 5.92293 0.234727 5.70108 0.141328C5.47922 0.0479298 5.24094 -0.000183105 5.00023 -0.000183105C4.75952 -0.000183105 4.52124 0.0479298 4.29938 0.141328C4.07753 0.234727 3.87659 0.371527 3.70835 0.543689L3.3196 0.942439L2.76335 0.935564C2.52257 0.932714 2.28365 0.978038 2.06064 1.06887C1.83763 1.1597 1.63504 1.29421 1.46477 1.46448C1.2945 1.63475 1.15999 1.83734 1.06916 2.06035C0.978328 2.28336 0.933005 2.52228 0.935854 2.76306L0.942104 3.31931L0.544604 3.70806C0.372442 3.8763 0.235642 4.07724 0.142244 4.29909C0.0488453 4.52095 0.000732422 4.75923 0.000732422 4.99994C0.000732422 5.24065 0.0488453 5.47893 0.142244 5.70078C0.235642 5.92264 0.372442 6.12358 0.544604 6.29181L0.94273 6.68056L0.935854 7.23681C0.933005 7.4776 0.978328 7.71652 1.06916 7.93953C1.15999 8.16254 1.2945 8.36513 1.46477 8.5354C1.63504 8.70567 1.83763 8.84018 2.06064 8.93101C2.28365 9.02184 2.52257 9.06716 2.76335 9.06431L3.3196 9.05806L3.70835 9.45556C3.87659 9.62773 4.07753 9.76453 4.29938 9.85792C4.52124 9.95132 4.75952 9.99944 5.00023 9.99944C5.24094 9.99944 5.47922 9.95132 5.70108 9.85792C5.92293 9.76453 6.12387 9.62773 6.2921 9.45556L6.68085 9.05744L7.2371 9.06431C7.47789 9.06716 7.71681 9.02184 7.93982 8.93101C8.16283 8.84018 8.36542 8.70567 8.53569 8.5354C8.70596 8.36513 8.84047 8.16254 8.9313 7.93953C9.02213 7.71652 9.06745 7.4776 9.0646 7.23681L9.05835 6.68056L9.45585 6.29181C9.62802 6.12358 9.76482 5.92264 9.85821 5.70078C9.95161 5.47893 9.99973 5.24065 9.99973 4.99994C9.99973 4.75923 9.95161 4.52095 9.85821 4.29909C9.76482 4.07724 9.62802 3.8763 9.45585 3.70806L9.05835 3.31931L9.0646 2.76306C9.06745 2.52228 9.02213 2.28336 8.9313 2.06035C8.84047 1.83734 8.70596 1.63475 8.53569 1.46448C8.36542 1.29421 8.16283 1.1597 7.93982 1.06887C7.71681 0.978038 7.47789 0.932714 7.2371 0.935564L6.68085 0.942439L6.2921 0.543689ZM5.25023 7.62494L3.6669 6.04161L4.24273 5.46577L5.25023 6.47327L7.4494 4.27411L8.02523 4.84994L5.25023 7.62494Z" fill="currentColor" />
      </svg>
    );
  }

  const dimensions =
    size === 'default'
      ? { width: 14, height: 14, viewBox: '0 0 14 14', cx: 7, cy: 7, r: 6 }
      : size === 'large'
        ? { width: 10, height: 10, viewBox: '0 0 10 10', cx: 5, cy: 5, r: 4 }
        : { width: 8, height: 8, viewBox: '0 0 8 8', cx: 4, cy: 4, r: 3 };

  return (
    <svg
      className={`${baseClassName} ${className}`}
      width={dimensions.width}
      height={dimensions.height}
      viewBox={dimensions.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={dimensions.cx}
        cy={dimensions.cy}
        r={dimensions.r}
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
  onClick,
}) => {
  const avatarClassName = [
    'avatar',
    `avatar--${size}`,
    `avatar--${type}`,
    `avatar--${shape}`,
    border && 'avatar--bordered',
    onClick && 'avatar--clickable',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const renderAvatarContent = () => {
    if (type === 'profile-photo' || type === 'empty-state') {
      return <img className="avatar__image" src={src} alt={alt} />;
    }

    if (type === 'initial-light' || type === 'initial-dark') {
      return <span className="avatar__initial">{initial}</span>;
    }

    return null;
  };

  const getStatusIconSize = () => {
    switch (size) {
      case 'x-small':
        return 'small';
      case 'small':
        return 'large';
      case 'default':
        return 'default';
      case 'large':
        return 'default';
      default:
        return 'default';
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
