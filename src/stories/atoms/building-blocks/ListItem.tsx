import React from 'react';
import './listItem.css';

export interface TagProps {
  label: string;
  color: 'yellow' | 'outline-gray';
  icon?: React.ReactNode;
}

export interface ListItemProps {
  /** Work Order number */
  woNumber?: string;
  /** Work Request number */  
  wrNumber?: string;
  /** Description text */
  description?: string;
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** State variant */
  state?: 'default' | 'selected';
  /** Tags to display */
  tags?: TagProps[];
  /** Timestamp text */
  timestamp?: string;
  /** Custom icon */
  icon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS class */
  className?: string;
}

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M12.7501 4.58324L5.75008 11.5832L2.54175 8.37491L3.36425 7.55241L5.75008 9.93241L11.9276 3.76074L12.7501 4.58324Z" fill="currentColor"/>
    </g>
  </svg>
);

const AlarmIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const dimensions = {
    small: { width: 24, height: 24 },
    default: { width: 32, height: 32 },
    large: { width: 44, height: 44 }
  };
  
  const { width, height } = dimensions[size];
  
  return (
    <svg width={width} height={height} viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 13.1502L7.595 9.2635L10.18 6.6785L14.0667 10.5835L11.5 13.1502ZM24.3333 2.3335V7.8335H20.6667V2.3335H24.3333ZM37.405 9.2635L33.5 13.1502L30.9333 10.5835L34.82 6.6785L37.405 9.2635ZM8.75 19.7502V23.4168H3.25V19.7502H8.75ZM36.25 19.7502H41.75V23.4168H36.25V19.7502ZM11.5 37.1668H33.5C34.4725 37.1668 35.4051 37.5531 36.0927 38.2408C36.7804 38.9284 37.1667 39.861 37.1667 40.8335H7.83333C7.83333 39.861 8.21964 38.9284 8.90728 38.2408C9.59491 37.5531 10.5275 37.1668 11.5 37.1668ZM22.5 9.66683C25.4174 9.66683 28.2153 10.8258 30.2782 12.8887C32.3411 14.9516 33.5 17.7494 33.5 20.6668V35.3335H11.5V20.6668C11.5 17.7494 12.6589 14.9516 14.7218 12.8887C16.7847 10.8258 19.5826 9.66683 22.5 9.66683Z" fill="#2F42BD"/>
    </svg>
  );
};

const Tag = ({ label, color, icon }: TagProps) => {
  return (
    <div className={`list-item-tag list-item-tag--${color}`}>
      <div className="list-item-tag__content">
        {icon && <span className="list-item-tag__icon">{icon}</span>}
        <span className="list-item-tag__label">{label}</span>
      </div>
    </div>
  );
};

export const ListItem = ({
  woNumber = "000000",
  wrNumber = "000000", 
  description = "This is a description or piece of text to help identify the search result to the user. This can be up to three lines of body or H5 text for the user to get enough context.",
  size = 'default',
  state = 'default',
  tags = [
    { label: "Applied", color: "yellow", icon: <CheckIcon /> },
    { label: "Evaluated", color: "outline-gray", icon: <CheckIcon /> }
  ],
  timestamp = "Last updated 3 mins ago",
  icon,
  onClick,
  className = ''
}: ListItemProps) => {
  const classes = [
    'list-item',
    `list-item--${size}`,
    `list-item--${state}`,
    className
  ].filter(Boolean).join(' ');

  const defaultIcon = <AlarmIcon size={size} />;

  return (
    <div className={classes} onClick={onClick}>
      <div className="list-item__content">
        <div className="list-item__header">
          <div className="list-item__title-section">
            {(icon || defaultIcon) && (
              <span className="list-item__icon">
                {icon || defaultIcon}
              </span>
            )}
            <span className="list-item__wo-title">WO {woNumber}</span>
          </div>
          <span className="list-item__separator">|</span>
          <span className="list-item__wr-title">WR {wrNumber}</span>
        </div>
        {description && (
          <div className="list-item__description">
            {description}
          </div>
        )}
      </div>
      <div className="list-item__footer">
        {tags && tags.length > 0 && (
          <div className="list-item__tags">
            {tags.map((tag, index) => (
              <Tag key={index} {...tag} />
            ))}
          </div>
        )}
        {timestamp && (
          <div className="list-item__timestamp">
            {timestamp}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListItem;
