import React from 'react';
import './alert.css';

export interface AlertProps {
  /** Size of the alert */
  size?: 'small' | 'default' | 'large';
  /** Color theme of the alert */
  colour?: 'default' | 'warning' | 'light-gray' | 'navy' | 'error' | 'success' | 'purple' | 'white';
  /** Whether to show border */
  border?: boolean;
  /** Whether to show leading icon */
  leadingIcon?: boolean;
  /** Whether to show trailing close icon */
  trailingIcon?: boolean;
  /** Whether to show subtext/description */
  subtext?: boolean;
  /** Main alert message */
  title?: string;
  /** Optional description text */
  description?: string;
  /** Custom icon component */
  icon?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Callback when close button is clicked */
  onClose?: () => void;
  /** ARIA label for accessibility */
  'aria-label'?: string;
}

// Icon components based on Figma design
const BullseyeIcon: React.FC<{ size: 'small' | 'default' | 'large' }> = ({ size }) => {
  const iconSize = size === 'small' ? '16px' : size === 'default' ? '22px' : '28px';
  const viewBoxSize = size === 'small' ? 16 : size === 'default' ? 22 : 28;
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="alert-icon">
      <g opacity="var(--icon-opacity-medium)">
        {size === 'small' && (
          <path d="M9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9C1.5 10.9891 2.29018 12.8968 3.6967 14.3033C4.39314 14.9997 5.21993 15.5522 6.12987 15.9291C7.03982 16.306 8.01509 16.5 9 16.5C10.9891 16.5 12.8968 15.7098 14.3033 14.3033C15.7098 12.8968 16.5 10.9891 16.5 9C16.5 8.01509 16.306 7.03982 15.9291 6.12987C15.5522 5.21993 14.9997 4.39314 14.3033 3.6967C13.6069 3.00026 12.7801 2.44781 11.8701 2.0709C10.9602 1.69399 9.98491 1.5 9 1.5ZM9 3C10.5913 3 12.1174 3.63214 13.2426 4.75736C14.3679 5.88258 15 7.4087 15 9C15 10.5913 14.3679 12.1174 13.2426 13.2426C12.1174 14.3679 10.5913 15 9 15C7.4087 15 5.88258 14.3679 4.75736 13.2426C3.63214 12.1174 3 10.5913 3 9C3 7.4087 3.63214 5.88258 4.75736 4.75736C5.88258 3.63214 7.4087 3 9 3ZM9 4.5C7.80653 4.5 6.66193 4.97411 5.81802 5.81802C4.97411 6.66193 4.5 7.80653 4.5 9C4.5 10.1935 4.97411 11.3381 5.81802 12.182C6.66193 13.0259 7.80653 13.5 9 13.5C10.1935 13.5 11.3381 13.0259 12.182 12.182C13.0259 11.3381 13.5 10.1935 13.5 9C13.5 7.80653 13.0259 6.66193 12.182 5.81802C11.3381 4.97411 10.1935 4.5 9 4.5ZM9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6ZM9 7.5C8.60218 7.5 8.22064 7.65804 7.93934 7.93934C7.65804 8.22064 7.5 8.60218 7.5 9C7.5 9.39782 7.65804 9.77936 7.93934 10.0607C8.22064 10.342 8.60218 10.5 9 10.5C9.39782 10.5 9.77936 10.342 10.0607 10.0607C10.342 9.77936 10.5 9.39782 10.5 9C10.5 8.60218 10.342 8.22064 10.0607 7.93934C9.77936 7.65804 9.39782 7.5 9 7.5Z" fill="currentColor"/>
        )}
        {size === 'default' && (
          <path d="M13.9999 2.33331C12.4678 2.33331 10.9507 2.63508 9.53528 3.22139C8.11981 3.80769 6.83369 4.66705 5.75034 5.7504C3.56242 7.93832 2.33325 10.9058 2.33325 14C2.33325 17.0942 3.56242 20.0616 5.75034 22.2496C6.83369 23.3329 8.11981 24.1923 9.53528 24.7786C10.9507 25.3649 12.4678 25.6666 13.9999 25.6666C17.0941 25.6666 20.0616 24.4375 22.2495 22.2496C24.4374 20.0616 25.6666 17.0942 25.6666 14C25.6666 12.4679 25.3648 10.9508 24.7785 9.53534C24.1922 8.11987 23.3328 6.83375 22.2495 5.7504C21.1661 4.66705 19.88 3.80769 18.4646 3.22139C17.0491 2.63508 15.532 2.33331 13.9999 2.33331ZM13.9999 4.66665C16.4753 4.66665 18.8492 5.64998 20.5996 7.40032C22.3499 9.15066 23.3333 11.5246 23.3333 14C23.3333 16.4753 22.3499 18.8493 20.5996 20.5996C18.8492 22.35 16.4753 23.3333 13.9999 23.3333C11.5246 23.3333 9.15059 22.35 7.40026 20.5996C5.64992 18.8493 4.66659 16.4753 4.66659 14C4.66659 11.5246 5.64992 9.15066 7.40026 7.40032C9.15059 5.64998 11.5246 4.66665 13.9999 4.66665ZM13.9999 6.99998C12.1434 6.99998 10.3629 7.73748 9.05017 9.05023C7.73742 10.363 6.99992 12.1435 6.99992 14C6.99992 15.8565 7.73742 17.637 9.05017 18.9497C10.3629 20.2625 12.1434 21 13.9999 21C15.8564 21 17.6369 20.2625 18.9497 18.9497C20.2624 17.637 20.9999 15.8565 20.9999 14C20.9999 12.1435 20.2624 10.363 18.9497 9.05023C17.6369 7.73748 15.8564 6.99998 13.9999 6.99998ZM13.9999 9.33331C15.2376 9.33331 16.4246 9.82498 17.2998 10.7001C18.1749 11.5753 18.6666 12.7623 18.6666 14C18.6666 15.2377 18.1749 16.4246 17.2998 17.2998C16.4246 18.175 15.2376 18.6666 13.9999 18.6666C12.7622 18.6666 11.5753 18.175 10.7001 17.2998C9.82492 16.4246 9.33325 15.2377 9.33325 14C9.33325 12.7623 9.82492 11.5753 10.7001 10.7001C11.5753 9.82498 12.7622 9.33331 13.9999 9.33331ZM13.9999 11.6666C13.3811 11.6666 12.7876 11.9125 12.35 12.3501C11.9124 12.7876 11.6666 13.3811 11.6666 14C11.6666 14.6188 11.9124 15.2123 12.35 15.6499C12.7876 16.0875 13.3811 16.3333 13.9999 16.3333C14.6188 16.3333 15.2122 16.0875 15.6498 15.6499C16.0874 15.2123 16.3333 14.6188 16.3333 14C16.3333 13.3811 16.0874 12.7876 15.6498 12.3501C15.2122 11.9125 14.6188 11.6666 13.9999 11.6666Z" fill="currentColor"/>
        )}
        {size === 'large' && (
          <path d="M18 3C16.0302 3 14.0796 3.38799 12.2597 4.14181C10.4399 4.89563 8.78628 6.00052 7.3934 7.3934C4.58035 10.2064 3 14.0218 3 18C3 21.9782 4.58035 25.7936 7.3934 28.6066C8.78628 29.9995 10.4399 31.1044 12.2597 31.8582C14.0796 32.612 16.0302 33 18 33C21.9782 33 25.7936 31.4196 28.6066 28.6066C31.4196 25.7936 33 21.9782 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM18 6C21.1826 6 24.2348 7.26428 26.4853 9.51472C28.7357 11.7652 30 14.8174 30 18C30 21.1826 28.7357 24.2348 26.4853 26.4853C24.2348 28.7357 21.1826 30 18 30C14.8174 30 11.7652 28.7357 9.51472 26.4853C7.26428 24.2348 6 21.1826 6 18C6 14.8174 7.26428 11.7652 9.51472 9.51472C11.7652 7.26428 14.8174 6 18 6ZM18 9C15.6131 9 13.3239 9.94821 11.636 11.636C9.94821 13.3239 9 15.6131 9 18C9 20.3869 9.94821 22.6761 11.636 24.364C13.3239 26.0518 15.6131 27 18 27C20.3869 27 22.6761 26.0518 24.364 24.364C26.0518 22.6761 27 20.3869 27 18C27 15.6131 26.0518 13.3239 24.364 11.636C22.6761 9.94821 20.3869 9 18 9ZM18 12C19.5913 12 21.1174 12.6321 22.2426 13.7574C23.3679 14.8826 24 16.4087 24 18C24 19.5913 23.3679 21.1174 22.2426 22.2426C21.1174 23.3679 19.5913 24 18 24C16.4087 24 14.8826 23.3679 13.7574 22.2426C12.6321 21.1174 12 19.5913 12 18C12 16.4087 12.6321 14.8826 13.7574 13.7574C14.8826 12.6321 16.4087 12 18 12ZM18 15C17.2044 15 16.4413 15.3161 15.8787 15.8787C15.3161 16.4413 15 17.2044 15 18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15Z" fill="currentColor"/>
        )}
      </g>
    </svg>
  );
};

const AlertTriangleIcon: React.FC<{ size: 'small' | 'default' | 'large' }> = ({ size }) => {
  const iconSize = size === 'small' ? '16px' : size === 'default' ? '22px' : '28px';
  const viewBoxSize = size === 'small' ? 16 : size === 'default' ? 22 : 28;
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="alert-icon">
      <g opacity="var(--icon-opacity-medium)">
        {size === 'small' && (
          <path d="M9.75 10.5H8.25V6.75H9.75M9.75 13.5H8.25V12H9.75M0.75 15.75H17.25L9 1.5L0.75 15.75Z" fill="currentColor"/>
        )}
        {size === 'default' && (
          <path d="M15.1667 16.3333H12.8334V10.5H15.1667M15.1667 21H12.8334V18.6666H15.1667M1.16675 24.5H26.8334L14.0001 2.33331L1.16675 24.5Z" fill="currentColor"/>
        )}
        {size === 'large' && (
          <path d="M19.5 21H16.5V13.5H19.5M19.5 27H16.5V24H19.5M1.5 31.5H34.5L18 3L1.5 31.5Z" fill="currentColor"/>
        )}
      </g>
    </svg>
  );
};

const InformationIcon: React.FC<{ size: 'small' | 'default' | 'large' }> = ({ size }) => {
  const iconSize = size === 'small' ? '16px' : size === 'default' ? '22px' : '28px';
  const viewBoxSize = size === 'small' ? 16 : size === 'default' ? 22 : 28;
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="alert-icon">
      <g opacity="var(--icon-opacity-medium)">
        {size === 'small' && (
          <path d="M9.75 6.75H8.25V5.25H9.75M9.75 12.75H8.25V8.25H9.75M9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9C1.5 10.9891 2.29018 12.8968 3.6967 14.3033C4.39314 14.9997 5.21993 15.5522 6.12987 15.9291C7.03982 16.306 8.01509 16.5 9 16.5C10.9891 16.5 12.8968 15.7098 14.3033 14.3033C15.7098 12.8968 16.5 10.9891 16.5 9C16.5 8.01509 16.306 7.03982 15.9291 6.12987C15.5522 5.21993 14.9997 4.39314 14.3033 3.6967C13.6069 3.00026 12.7801 2.44781 11.8701 2.0709C10.9602 1.69399 9.98491 1.5 9 1.5Z" fill="currentColor"/>
        )}
        {size === 'default' && (
          <path d="M15.1666 10.5H12.8333V8.16665H15.1666M15.1666 19.8333H12.8333V12.8333H15.1666M13.9999 2.33331C12.4678 2.33331 10.9507 2.63508 9.53528 3.22139C8.11981 3.80769 6.83369 4.66705 5.75034 5.7504C3.56242 7.93832 2.33325 10.9058 2.33325 14C2.33325 17.0942 3.56242 20.0616 5.75034 22.2496C6.83369 23.3329 8.11981 24.1923 9.53528 24.7786C10.9507 25.3649 12.4678 25.6666 13.9999 25.6666C17.0941 25.6666 20.0616 24.4375 22.2495 22.2496C24.4374 20.0616 25.6666 17.0942 25.6666 14C25.6666 12.4679 25.3648 10.9508 24.7785 9.53534C24.1922 8.11987 23.3328 6.83375 22.2495 5.7504C21.1661 4.66705 19.88 3.80769 18.4646 3.22139C17.0491 2.63508 15.532 2.33331 13.9999 2.33331Z" fill="currentColor"/>
        )}
        {size === 'large' && (
          <path d="M19.5 13.5H16.5V10.5H19.5M19.5 25.5H16.5V16.5H19.5M18 3C16.0302 3 14.0796 3.38799 12.2597 4.14181C10.4399 4.89563 8.78628 6.00052 7.3934 7.3934C4.58035 10.2064 3 14.0218 3 18C3 21.9782 4.58035 25.7936 7.3934 28.6066C8.78628 29.9995 10.4399 31.1044 12.2597 31.8582C14.0796 32.612 16.0302 33 18 33C21.9782 33 25.7936 31.4196 28.6066 28.6066C31.4196 25.7936 33 21.9782 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3Z" fill="currentColor"/>
        )}
      </g>
    </svg>
  );
};

const CloseThickIcon: React.FC<{ size: 'small' | 'default' | 'large' }> = ({ size }) => {
  const iconSize = size === 'small' ? '16px' : size === 'default' ? '22px' : '28px';
  const viewBoxSize = size === 'small' ? 16 : size === 'default' ? 22 : 28;
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="alert-icon">
      <g opacity="var(--icon-opacity-medium)">
        {size === 'small' && (
          <path d="M15 5.1825L12.8175 3L9 6.8175L5.1825 3L3 5.1825L6.8175 9L3 12.8175L5.1825 15L9 11.1825L12.8175 15L15 12.8175L11.1825 9L15 5.1825Z" fill="currentColor"/>
        )}
        {size === 'default' && (
          <path d="M23.3332 8.06169L19.9382 4.66669L13.9998 10.605L8.0615 4.66669L4.6665 8.06169L10.6048 14L4.6665 19.9384L8.0615 23.3334L13.9998 17.395L19.9382 23.3334L23.3332 19.9384L17.3948 14L23.3332 8.06169Z" fill="currentColor"/>
        )}
        {size === 'large' && (
          <path d="M30 10.365L25.635 6L18 13.635L10.365 6L6 10.365L13.635 18L6 25.635L10.365 30L18 22.365L25.635 30L30 25.635L22.365 18L30 10.365Z" fill="currentColor"/>
        )}
      </g>
    </svg>
  );
};

const CheckBoldIcon: React.FC<{ size: 'small' | 'default' | 'large' }> = ({ size }) => {
  const iconSize = size === 'small' ? '16px' : size === 'default' ? '22px' : '28px';
  const viewBoxSize = size === 'small' ? 16 : size === 'default' ? 22 : 28;
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="alert-icon">
      <g opacity="var(--icon-opacity-medium)">
        {size === 'small' && (
          <path d="M6.74979 15.315L2.09229 10.6575L4.21479 8.53497L6.74979 11.0775L14.1598 3.65997L16.2823 5.78247L6.74979 15.315Z" fill="currentColor"/>
        )}
        {size === 'default' && (
          <path d="M10.4999 23.8234L3.25488 16.5784L6.55655 13.2767L10.4999 17.2317L22.0266 5.69336L25.3282 8.99503L10.4999 23.8234Z" fill="currentColor"/>
        )}
        {size === 'large' && (
          <path d="M13.5001 30.6299L4.18506 21.3149L8.43006 17.0699L13.5001 22.1549L28.3201 7.31995L32.5651 11.5649L13.5001 30.6299Z" fill="currentColor"/>
        )}
      </g>
    </svg>
  );
};

const FileDocumentIcon: React.FC<{ size: 'small' | 'default' | 'large' }> = ({ size }) => {
  const iconSize = size === 'small' ? '16px' : size === 'default' ? '22px' : '28px';
  const viewBoxSize = size === 'small' ? 16 : size === 'default' ? 22 : 28;
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="alert-icon">
      <g opacity="var(--icon-opacity-medium)">
        {size === 'small' && (
          <path d="M9.75 6.75H13.875L9.75 2.625V6.75ZM4.5 1.5H10.5L15 6V15C15 15.3978 14.842 15.7794 14.5607 16.0607C14.2794 16.342 13.8978 16.5 13.5 16.5H4.5C3.6675 16.5 3 15.825 3 15V3C3 2.1675 3.6675 1.5 4.5 1.5ZM11.25 13.5V12H4.5V13.5H11.25ZM13.5 10.5V9H4.5V10.5H13.5Z" fill="currentColor"/>
        )}
        {size === 'default' && (
          <path d="M15.1665 10.5H21.5832L15.1665 4.08331V10.5ZM6.99984 2.33331H16.3332L23.3332 9.33331V23.3333C23.3332 23.9522 23.0873 24.5456 22.6498 24.9832C22.2122 25.4208 21.6187 25.6666 20.9998 25.6666H6.99984C5.70484 25.6666 4.6665 24.6166 4.6665 23.3333V4.66665C4.6665 3.37165 5.70484 2.33331 6.99984 2.33331ZM17.4998 21V18.6666H6.99984V21H17.4998ZM20.9998 16.3333V14H6.99984V16.3333H20.9998Z" fill="currentColor"/>
        )}
        {size === 'large' && (
          <path d="M19.5 13.5H27.75L19.5 5.25V13.5ZM9 3H21L30 12V30C30 30.7956 29.6839 31.5587 29.1213 32.1213C28.5587 32.6839 27.7956 33 27 33H9C7.335 33 6 31.65 6 30V6C6 4.335 7.335 3 9 3ZM22.5 27V24H9V27H22.5ZM27 21V18H9V21H27Z" fill="currentColor"/>
        )}
      </g>
    </svg>
  );
};

const CloseIcon: React.FC<{ size: 'small' | 'default' | 'large' }> = ({ size }) => {
  const iconSize = size === 'small' ? '14px' : size === 'default' ? '16px' : '18px';
  const viewBoxSize = size === 'small' ? 14 : size === 'default' ? 16 : 18;
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="alert-close-icon">
      <g opacity="var(--icon-opacity-medium)">
        {size === 'small' && (
          <path d="M11.0834 3.73919L10.2609 2.91669L7.00008 6.17752L3.73925 2.91669L2.91675 3.73919L6.17758 7.00002L2.91675 10.2609L3.73925 11.0834L7.00008 7.82252L10.2609 11.0834L11.0834 10.2609L7.82258 7.00002L11.0834 3.73919Z" fill="currentColor"/>
        )}
        {size === 'default' && (
          <path d="M12.6666 4.27331L11.7266 3.33331L7.99992 7.05998L4.27325 3.33331L3.33325 4.27331L7.05992 7.99998L3.33325 11.7266L4.27325 12.6666L7.99992 8.93998L11.7266 12.6666L12.6666 11.7266L8.93992 7.99998L12.6666 4.27331Z" fill="currentColor"/>
        )}
        {size === 'large' && (
          <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="currentColor"/>
        )}
      </g>
    </svg>
  );
};

const getLeadingIcon = (colour: string, size: 'small' | 'default' | 'large') => {
  switch (colour) {
    case 'warning':
      return <AlertTriangleIcon size={size} />;
    case 'navy':
      return <InformationIcon size={size} />;
    case 'error':
      return <CloseThickIcon size={size} />;
    case 'success':
      return <CheckBoldIcon size={size} />;
    case 'purple':
      return <FileDocumentIcon size={size} />;
    default:
      return <BullseyeIcon size={size} />;
  }
};

export const Alert: React.FC<AlertProps> = ({
  size = 'default',
  colour = 'default',
  border = true,
  leadingIcon = true,
  trailingIcon = true,
  subtext = true,
  title = 'This is an alert banner for the Echo app',
  description = 'This is a description for an alert banner in the Echo app',
  icon,
  className = '',
  onClose,
  'aria-label': ariaLabel,
}) => {
  return (
    <div
      className={`alert alert--${size} alert--${colour} ${border ? 'alert--border' : 'alert--no-border'} ${className}`}
      role="alert"
      aria-label={ariaLabel}
    >
      <div className="alert__content">
        {leadingIcon && (
          <div className="alert__leading-icon">
            {icon || getLeadingIcon(colour, size)}
          </div>
        )}
        
        <div className="alert__text">
          <div className="alert__title">
            {title}
          </div>
          {subtext && description && (
            <div className="alert__description">
              {description}
            </div>
          )}
        </div>
        
        {trailingIcon && (
          <button 
            className="alert__close-button"
            onClick={onClose}
            aria-label="Close alert"
            type="button"
          >
            <CloseIcon size={size} />
          </button>
        )}
      </div>
    </div>
  );
};
