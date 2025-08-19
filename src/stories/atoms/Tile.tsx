import React from 'react';
import './tile.css';

export interface TileProps {
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Text alignment */
  align?: 'left' | 'centre' | 'right';
  /** Color variant */
  colour?: 'default' | 'blue' | 'yellow' | 'light-gray' | 'info-blue' | 'blue-gray';
  /** Icon to display */
  icon?: React.ReactNode;
  /** Label text */
  children: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
}

// Default Alarm Icon used in the design
const DefaultAlarmIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M7 8.05002L4.515 5.57669L6.16 3.93169L8.63333 6.41669L7 8.05002ZM15.1667 1.16669V4.66669H12.8333V1.16669H15.1667ZM23.485 5.57669L21 8.05002L19.3667 6.41669L21.84 3.93169L23.485 5.57669ZM5.25 12.25V14.5834H1.75V12.25H5.25ZM22.75 12.25H26.25V14.5834H22.75V12.25ZM7 23.3334H21C21.6188 23.3334 22.2123 23.5792 22.6499 24.0168C23.0875 24.4544 23.3333 25.0478 23.3333 25.6667H4.66667C4.66667 25.0478 4.9125 24.4544 5.35008 24.0168C5.78767 23.5792 6.38116 23.3334 7 23.3334ZM14 5.83335C15.8565 5.83335 17.637 6.57085 18.9497 7.88361C20.2625 9.19636 21 10.9768 21 12.8334V22.1667H7V12.8334C7 10.9768 7.7375 9.19636 9.05025 7.88361C10.363 6.57085 12.1435 5.83335 14 5.83335Z" fill="currentColor"/>
    </g>
  </svg>
);

export const Tile: React.FC<TileProps> = ({
  size = 'default',
  align = 'centre',
  colour = 'default',
  icon,
  children,
  onClick,
  className = '',
  disabled = false,
}) => {
  // Get icon size based on tile size
  const getIconSize = () => {
    switch (size) {
      case 'small': return 24;
      case 'default': return 28;
      case 'large': return 32;
      default: return 28;
    }
  };

  const iconSize = getIconSize();

  // Use provided icon or default alarm icon
  const displayIcon = icon || <DefaultAlarmIcon size={iconSize} />;

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`tile ${size} align-${align} colour-${colour} ${disabled ? 'disabled' : ''} ${onClick ? 'clickable' : ''} ${className}`}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      aria-disabled={disabled}
    >
      <div className="tile-content">
        {displayIcon && (
          <div className="tile-icon">
            {displayIcon}
          </div>
        )}
        <div className="tile-label">
          {children}
        </div>
      </div>
    </div>
  );
};

// Export the default icon for convenience
export { DefaultAlarmIcon };
