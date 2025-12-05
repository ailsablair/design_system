import React from 'react';
import './accordionStatus.css';

export interface AccordionStatusProps {
  /** Status type - matches Figma design */
  type?: 'warning' | 'complete' | 'locked' | 'comments' | 'notifications' | 'error' | 'note';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Disabled state */
  disabled?: boolean;
  /** Show current ring over the dashed empty ring */
  current?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Accordion Status Component - Layered Circle Design
 *
 * Status indicators for accordion components using a layered circle treatment:
 * - An outer dashed "empty" ring
 * - A "current" ring highlighting the active state
 * - A solid "complete" circle behind the icon
 *
 * Supports all status types (warning, complete, locked, comments, notifications, error, note),
 * three sizes (small, default, large) and disabled states while matching the latest Figma design.
 */
export const AccordionStatus: React.FC<AccordionStatusProps> = ({
  type = 'warning',
  size = 'default',
  disabled = false,
  current = false,
  className = '',
}) => {
  const statusClasses = [
    'status-icon',
    `status-icon--${type}`,
    `status-icon--${size}`,
    disabled && 'status-icon--disabled',
    className
  ].filter(Boolean).join(' ');

  const renderIcon = () => {
    const iconColor = disabled ? '#6D7280' : 'white';

    switch (type) {
      case 'complete':
        return (
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5001 30.6301L4.18506 21.3151L8.43006 17.0701L13.5001 22.1551L28.3201 7.32007L32.5651 11.5651L13.5001 30.6301Z" fill={iconColor}/>
          </svg>
        );
      
      case 'warning':
        return (
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 21H16.5V13.5H19.5M19.5 27H16.5V24H19.5M1.5 31.5H34.5L18 3L1.5 31.5Z" fill={iconColor}/>
          </svg>
        );
      
      case 'locked':
        return (
          <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 19.8334C14.6188 19.8334 15.2123 19.5876 15.6499 19.15C16.0875 18.7124 16.3333 18.6189 16.3333 17.5001C16.3333 16.2051 15.2833 15.1667 14 15.1667C13.3811 15.1667 12.7876 15.4126 12.35 15.8502C11.9125 16.2878 11.6666 16.8812 11.6666 17.5001C11.6666 18.1189 11.9125 18.7124 12.35 19.15C12.7876 19.5876 13.3811 19.8334 14 19.8334ZM21 9.33341C21.6188 9.33341 22.2123 9.57925 22.6499 10.0168C23.0875 10.4544 23.3333 11.0479 23.3333 11.6667V23.3334C23.3333 23.9523 23.0875 24.5457 22.6499 24.9833C22.2123 25.4209 21.6188 25.6667 21 25.6667H6.99996C6.38112 25.6667 5.78763 25.4209 5.35004 24.9833C4.91246 24.5457 4.66663 23.9523 4.66663 23.3334V11.6667C4.66663 10.3717 5.71663 9.33341 6.99996 9.33341H8.16663V7.00008C8.16663 5.45299 8.78121 4.46925 9.87517 3.37529C10.9691 2.28133 12.4529 1.66675 14 1.66675C14.766 1.66675 15.5245 1.81763 16.2323 2.11078C16.94 2.40394 17.5831 2.83362 18.1247 3.37529C18.6664 3.91697 19.0961 4.56003 19.3893 5.26776C19.6824 5.97549 19.8333 6.73404 19.8333 7.00008V9.33341H21ZM14 3.50008C13.0717 3.50008 12.1815 3.86883 11.5251 4.52521C10.8687 5.68158 10.5 6.57182 10.5 7.00008V9.33341H17.5V7.00008C17.5 6.07182 17.1312 5.18158 16.4748 4.52521C15.8185 3.86883 14.9282 3.50008 14 3.50008Z" fill={iconColor}/>
          </svg>
        );
      
      case 'comments':
        return (
          <svg viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 26.1666C10.1906 26.1666 9.89388 26.0437 9.67508 25.8249C9.45629 25.6061 9.33337 25.3093 9.33337 24.9999V21.4999H4.66671C4.04787 21.4999 3.45438 21.2541 3.01679 20.8165C2.57921 20.3789 2.33337 19.7854 2.33337 19.1666V5.16659C2.33337 3.87159 3.38337 2.83325 4.66671 2.83325H23.3334C23.9522 2.83325 24.5457 3.07908 24.9833 3.51667C25.4209 3.95425 25.6667 4.54775 25.6667 5.16659V19.1666C25.6667 19.7854 25.4209 20.3789 24.9833 20.8165C24.5457 21.2541 23.9522 21.4999 23.3334 21.4999H16.2167L11.9 25.8283C11.6667 26.0499 11.375 26.1666 11.0834 26.1666H10.5ZM5.83337 6.33325V8.66658H22.1667V6.33325H5.83337ZM5.83337 10.9999V13.3333H15.1667V10.9999H5.83337ZM5.83337 15.6666V17.9999H17.5V15.6666H5.83337Z" fill={iconColor}/>
          </svg>
        );
      
      case 'notifications':
        return (
          <svg viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.5 8.08325C24.5 10.3349 22.6683 12.1666 20.4167 12.1666C18.165 12.1666 16.3333 10.3349 16.3333 8.08325C16.3333 5.83159 18.165 3.99992 20.4167 3.99992C22.6683 3.99992 24.5 5.83159 24.5 8.08325ZM22.1667 14.2549C21.5833 14.4066 21 14.4999 20.4167 14.4999C16.8817 14.4999 14 11.6183 14 8.08325C14 6.36825 14.6767 4.81659 15.75 3.66159C15.3417 3.15992 14.7117 2.83325 14 2.83325C12.7167 2.83325 11.6667 3.88325 11.6667 5.16659V5.50492C8.20167 6.53159 5.83333 9.71659 5.83333 13.3333V20.3333L3.5 22.6666V23.8333H24.5V22.6666L22.1667 20.3333V14.2549ZM14 27.3333C15.295 27.3333 16.3333 26.2949 16.3333 24.9999H11.6667C11.6667 26.2949 12.7167 27.3333 14 27.3333Z" fill={iconColor}/>
          </svg>
        );
      
      case 'error':
        return (
          <svg viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.3333 8.5615L19.9383 5.1665L14 11.1048L8.06163 5.1665L4.66663 8.5615L10.605 14.4998L4.66663 20.4382L8.06163 23.8332L14 17.8948L19.9383 23.8332L23.3333 20.4382L17.395 14.4998L23.3333 8.5615Z" fill={iconColor}/>
          </svg>
        );
      
      case 'note':
        return (
          <svg viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1666 11.0002H21.5833L15.1666 4.5835V11.0002ZM6.99996 2.8335H16.3333L23.3333 9.8335V23.8335C23.3333 24.4523 23.0875 25.0458 22.6499 25.4834C22.2123 25.921 21.6188 26.1668 21 26.1668H6.99996C5.70496 26.1668 4.66663 25.1168 4.66663 23.8335V5.16683C4.66663 3.87183 5.70496 2.8335 6.99996 2.8335ZM17.5 21.5002V19.1668H6.99996V21.5002H17.5ZM21 16.8335V14.5002H6.99996V16.8335H21Z" fill={iconColor}/>
          </svg>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={statusClasses}>
      <div className="status-icon__circle">
        <div className="status-icon__layer status-icon__layer--empty" />
        {current && (
          <div className="status-icon__layer status-icon__layer--current" />
        )}
        <div className="status-icon__layer status-icon__layer--complete" />
        <div className="status-icon__icon">
          {renderIcon()}
        </div>
      </div>
    </div>
  );
};

export default AccordionStatus;
