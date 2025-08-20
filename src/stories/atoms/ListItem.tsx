import React from 'react';
import './listItem.css';

export interface ListItemProps {
  /** Text content for the list item */
  label?: string;
  /** Size variant */
  size?: 'small' | 'default' | 'large' | 'x-large';
  /** Show the static icon (checkmark) */
  showStaticIcon?: boolean;
  /** Show the separator dot */
  showDisc?: boolean;
  /** Show the pre-text (forward slash) */
  showPreText?: boolean;
  /** Show the main icon (bell) */
  showIcon?: boolean;
  /** Show the notification badge */
  showBadge?: boolean;
  /** Badge number to display */
  badgeNumber?: number;
  /** Show horizontal divider */
  showHorizontalDivider?: boolean;
  /** Show vertical divider */
  showVerticalDivider?: boolean;
  /** Additional CSS class name */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

const CheckIcon: React.FC<{ size: 'small' | 'default' | 'large' | 'x-large' }> = ({ size }) => {
  const iconSize = size === 'small' ? '18' : size === 'large' ? '18' : size === 'x-large' ? '22' : '18';
  
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.75 5.24988L6.75 14.2499L2.625 10.1249L3.6825 9.06738L6.75 12.1274L14.6925 4.19238L15.75 5.24988Z" fill="#1C1C1C"/>
    </svg>
  );
};

const BellIcon: React.FC<{ size: 'small' | 'default' | 'large' | 'x-large' }> = ({ size }) => {
  if (size === 'small') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 12.6666V13.3333H2V12.6666L3.33333 11.3333V7.33325C3.33333 5.26659 4.68667 3.44659 6.66667 2.85992C6.66667 2.79325 6.66667 2.73325 6.66667 2.66659C6.66667 2.31296 6.80714 1.97382 7.05719 1.72378C7.30724 1.47373 7.64638 1.33325 8 1.33325C8.35362 1.33325 8.69276 1.47373 8.94281 1.72378C9.19286 1.97382 9.33333 2.31296 9.33333 2.66659C9.33333 2.73325 9.33333 2.79325 9.33333 2.85992C11.3133 3.44659 12.6667 5.26659 12.6667 7.33325V11.3333L14 12.6666ZM9.33333 13.9999C9.33333 14.3535 9.19286 14.6927 8.94281 14.9427C8.69276 15.1928 8.35362 15.3333 8 15.3333C7.64638 15.3333 7.30724 15.1928 7.05719 14.9427C6.80714 14.6927 6.66667 14.3535 6.66667 13.9999" fill="#6171DF"/>
      </svg>
    );
  }
  
  if (size === 'large') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 19V20H3V19L5 17V11C5 7.9 7.03 5.17 10 4.29C10 4.19 10 4.1 10 4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4C14 4.1 14 4.19 14 4.29C16.97 5.17 19 7.9 19 11V17L21 19ZM14 21C14 21.5304 13.7893 22.0391 13.4142 22.4142C13.0391 22.7893 12.5304 23 12 23C11.4696 23 10.9609 22.7893 10.5858 22.4142C10.2107 22.0391 10 21.5304 10 21" fill="#6171DF"/>
      </svg>
    );
  }
  
  if (size === 'x-large') {
    return (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.25 23.75V25H3.75V23.75L6.25 21.25V13.75C6.25 9.875 8.7875 6.4625 12.5 5.3625C12.5 5.2375 12.5 5.125 12.5 5C12.5 4.33696 12.7634 3.70107 13.2322 3.23223C13.7011 2.76339 14.337 2.5 15 2.5C15.663 2.5 16.2989 2.76339 16.7678 3.23223C17.2366 3.70107 17.5 4.33696 17.5 5C17.5 5.125 17.5 5.2375 17.5 5.3625C21.2125 6.4625 23.75 9.875 23.75 13.75V21.25L26.25 23.75ZM17.5 26.25C17.5 26.913 17.2366 27.5489 16.7678 28.0178C16.2989 28.4866 15.663 28.75 15 28.75C14.337 28.75 13.7011 28.4866 13.2322 28.0178C12.7634 27.5489 12.5 26.913 12.5 26.25" fill="#6171DF"/>
      </svg>
    );
  }
  
  // Default size
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.75 14.25V15H2.25V14.25L3.75 12.75V8.25C3.75 5.925 5.2725 3.8775 7.5 3.2175C7.5 3.1425 7.5 3.075 7.5 3C7.5 2.60218 7.65804 2.22064 7.93934 1.93934C8.22064 1.65804 8.60218 1.5 9 1.5C9.39782 1.5 9.77936 1.65804 10.0607 1.93934C10.342 2.22064 10.5 2.60218 10.5 3C10.5 3.075 10.5 3.1425 10.5 3.2175C12.7275 3.8775 14.25 5.925 14.25 8.25V12.75L15.75 14.25ZM10.5 15.75C10.5 16.1478 10.342 16.5294 10.0607 16.8107C9.77936 17.092 9.39782 17.25 9 17.25C8.60218 17.25 8.22064 17.092 7.93934 16.8107C7.65804 16.5294 7.5 16.1478 7.5 15.75" fill="#6171DF"/>
    </svg>
  );
};

export const ListItem: React.FC<ListItemProps> = ({
  label = 'List Item',
  size = 'default',
  showStaticIcon = true,
  showDisc = true,
  showPreText = true,
  showIcon = true,
  showBadge = true,
  badgeNumber = 1,
  showHorizontalDivider = true,
  showVerticalDivider = true,
  className = '',
  onClick
}) => {
  const listItemClass = [
    'list-item',
    `list-item--${size}`,
    onClick && 'list-item--clickable',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={listItemClass} onClick={onClick}>
      {showHorizontalDivider && (
        <div className="list-item__divider list-item__divider--horizontal">
          <div className="list-item__divider-line list-item__divider-line--horizontal" />
        </div>
      )}
      
      <div className="list-item__content">
        {showStaticIcon && (
          <div className={`list-item__static-icon list-item__static-icon--${size}`}>
            <div className={`list-item__static-icon-container list-item__static-icon-container--${size}`}>
              <CheckIcon size={size} />
            </div>
          </div>
        )}
        
        <div className="list-item__inner-content">
          {showDisc && <div className="list-item__separator" />}
          
          {showPreText && (
            <div className={`list-item__pre-text list-item__pre-text--${size}`}>
              /
            </div>
          )}
          
          {showIcon && (
            <div className="list-item__icon">
              <BellIcon size={size} />
            </div>
          )}
          
          <div className={`list-item__label list-item__label--${size}`}>
            {label}
          </div>
          
          {showBadge && (
            <div className={`list-item__badge list-item__badge--${size}`}>
              <div className={`list-item__badge-content list-item__badge-content--${size}`}>
                {badgeNumber}
              </div>
            </div>
          )}
        </div>
        
        {showVerticalDivider && (
          <div className={`list-item__divider list-item__divider--vertical list-item__divider--vertical-${size}`}>
            <div className={`list-item__divider-line list-item__divider-line--vertical list-item__divider-line--vertical-${size}`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListItem;
