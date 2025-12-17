import React from 'react';
import './accordionStatus.css';

export type AccordionStatusType =
  | 'warning'
  | 'complete'
  | 'locked'
  | 'comments'
  | 'notifications'
  | 'error'
  | 'note';

export type AccordionStatusSize = 'small' | 'default' | 'large';

export interface AccordionStatusProps {
  type?: AccordionStatusType;
  size?: AccordionStatusSize;
  disabled?: boolean;
  className?: string;
}

/**
 * Accordion Status building block
 *
 * Renders a single status indicator circle used in accordion headers.
 * Types: warning, complete, locked, comments, notifications, error, note.
 * Sizes: small, default, large. Supports disabled state.
 */
export const AccordionStatus: React.FC<AccordionStatusProps> = ({
  type = 'warning',
  size = 'small',
  disabled = false,
  className = '',
}) => {
  const rootClasses = [
    'accordion-status-icon',
    `accordion-status-icon--${type}`,
    `accordion-status-icon--size-${size}`,
    disabled && 'accordion-status-icon--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const renderIcon = () => {
    switch (type) {
      case 'warning':
        return (
          <svg
            className="accordion-status-icon__svg"
            viewBox="0 0 28 28"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M15.1666 16.3334H12.8333V10.5H15.1666M15.1666 21H12.8333V18.6667H15.1666M1.16663 24.5H26.8333L14 2.33337L1.16663 24.5Z" />
          </svg>
        );
      case 'complete':
        return (
          <svg
            className="accordion-status-icon__svg"
            viewBox="0 0 28 28"
            aria-hidden="true"
            focusable="false"
          >
            <g opacity="0.3">
              <path d="M10.5 23.8234L3.255 16.5784L6.55667 13.2767L10.5 17.2317L22.0267 5.69336L25.3283 8.99503L10.5 23.8234Z" />
            </g>
          </svg>
        );
      case 'locked':
        return (
          <svg
            className="accordion-status-icon__svg"
            viewBox="0 0 28 28"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M14 19.8334C14.6188 19.8334 15.2123 19.5876 15.6499 19.15C16.0875 18.7124 16.3333 18.1189 16.3333 17.5001C16.3333 16.2051 15.2833 15.1667 14 15.1667C13.3811 15.1667 12.7876 15.4126 12.35 15.8502C11.9125 16.2878 11.6666 16.8812 11.6666 17.5001C11.6666 18.1189 11.9125 18.7124 12.35 19.15C12.7876 19.5876 13.3811 19.8334 14 19.8334ZM21 9.33341C21.6188 9.33341 22.2123 9.57925 22.6499 10.0168C23.0875 10.4544 23.3333 11.0479 23.3333 11.6667V23.3334C23.3333 23.9523 23.0875 24.5457 22.6499 24.9833C22.2123 25.4209 21.6188 25.6667 21 25.6667H6.99996C6.38112 25.6667 5.78763 25.4209 5.35004 24.9833C4.91246 24.5457 4.66663 23.9523 4.66663 23.3334V11.6667C4.66663 10.3717 5.71663 9.33341 6.99996 9.33341H8.16663V7.00008C8.16663 5.45299 8.78121 3.96925 9.87517 2.87529C10.9691 1.78133 12.4529 1.16675 14 1.16675C14.766 1.16675 15.5245 1.31763 16.2323 1.61078C16.94 1.90394 17.5831 2.33362 18.1247 2.87529C18.6664 3.41697 19.0961 4.06003 19.3893 4.76776C19.6824 5.47549 19.8333 6.23404 19.8333 7.00008V9.33341H21Z" />
          </svg>
        );
      case 'comments':
        return (
          <svg
            className="accordion-status-icon__svg"
            viewBox="0 0 28 28"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M10.5 25.6666C10.1906 25.6666 9.89388 25.5437 9.67508 25.3249C9.45629 25.1061 9.33337 24.8093 9.33337 24.4999V20.9999H4.66671C4.04787 20.9999 3.45438 20.7541 3.01679 20.3165C2.57921 19.8789 2.33337 19.2854 2.33337 18.6666V4.66659C2.33337 3.37159 3.38337 2.33325 4.66671 2.33325H23.3334C23.9522 2.33325 24.5457 2.57908 24.9833 3.01667C25.4209 3.45425 25.6667 4.04775 25.6667 4.66659V18.6666C25.6667 19.2854 25.4209 19.8789 24.9833 20.3165C24.5457 20.7541 23.9522 20.9999 23.3334 20.9999H16.2167L11.9 25.3283C11.6667 25.5499 11.375 25.6666 11.0834 25.6666H10.5Z" />
          </svg>
        );
      case 'notifications':
        return (
          <svg
            className="accordion-status-icon__svg"
            viewBox="0 0 28 28"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M24.5 7.58325C24.5 9.83492 22.6683 11.6666 20.4167 11.6666C18.165 11.6666 16.3333 9.83492 16.3333 7.58325C16.3333 5.33159 18.165 3.49992 20.4167 3.49992C22.6683 3.49992 24.5 5.33159 24.5 7.58325Z" />
          </svg>
        );
      case 'error':
        return (
          <svg
            className="accordion-status-icon__svg"
            viewBox="0 0 28 28"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M23.3333 8.0615L19.9383 4.6665L14 10.6048L8.06163 4.6665L4.66663 8.0615L10.605 13.9998L4.66663 19.9382L8.06163 23.3332L14 17.3948L19.9383 23.3332L23.3333 19.9382L17.395 13.9998L23.3333 8.0615Z" />
          </svg>
        );
      case 'note':
        return (
          <svg
            className="accordion-status-icon__svg"
            viewBox="0 0 28 28"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M15.1666 10.5002H21.5833L15.1666 4.0835V10.5002ZM6.99996 2.3335H16.3333L23.3333 9.3335V23.3335C23.3333 23.9523 23.0875 24.5458 22.6499 24.9834C22.2123 25.421 21.6188 25.6668 21 25.6668H6.99996C5.70496 25.6668 4.66663 24.6168 4.66663 23.3335V4.66683C4.66663 3.37183 5.70496 2.3335 6.99996 2.3335Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={rootClasses} aria-hidden="true">
      <div className="accordion-status-icon__circle">
        <div className="accordion-status-icon__ring accordion-status-icon__ring--empty" />
        <div className="accordion-status-icon__ring accordion-status-icon__ring--current" />
        <div className="accordion-status-icon__ring accordion-status-icon__ring--complete">
          {renderIcon()}
        </div>
      </div>
    </div>
  );
};

export default AccordionStatus;
