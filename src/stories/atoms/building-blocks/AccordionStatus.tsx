import React from 'react';
import './accordionStatus.css';

export interface AccordionStatusProps {
  /** Status type - matches Figma design */
  type?: 'warning' | 'complete' | 'locked' | 'comments' | 'notifications' | 'error' | 'note';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Accordion Status Component - Figma Design
 * 
 * Status indicators for accordion components with multiple types:
 * - warning: Triangle alert icon (yellow)
 * - complete: Checkmark with dashed circle (green)
 * - locked: Lock icon (light purple)
 * - comments: Comment bubble icon (light blue)
 * - notifications: Bell icon (light purple)
 * - error: X close icon (red)
 * - note: Document icon (purple)
 * 
 * Each type supports three sizes (small, default, large) and disabled states
 */
export const AccordionStatus: React.FC<AccordionStatusProps> = ({
  type = 'warning',
  size = 'default',
  disabled = false,
  className = '',
}) => {
  const statusClasses = [
    'accordion__status',
    `accordion__status--${type}`,
    disabled && 'accordion__status--disabled',
    className
  ].filter(Boolean).join(' ');

  const containerClasses = [
    'accordion',
    `accordion--size-${size}`
  ].filter(Boolean).join(' ');

  // Icon size calculations based on size prop
  const getIconSize = () => {
    switch (size) {
      case 'small': return { width: 16, height: 16, viewBox: '0 0 16 17' };
      case 'large': return { width: 36, height: 36, viewBox: '0 0 36 37' };
      default: return { width: 28, height: 28, viewBox: '0 0 28 29' };
    }
  };

  const getDashedCircle = () => {
    const circleSize = size === 'small' ? 22 : size === 'large' ? 62 : 48;
    const radius = size === 'small' ? 11 : size === 'large' ? 31 : 24;
    const dashArray = size === 'small' ? '2 2' : '6 4';
    const stroke = disabled ? '#D2D5DA' : '#61607C';

    return (
      <svg 
        className="accordion__status-dashed-circle" 
        width={circleSize + 2} 
        height={circleSize + 1} 
        viewBox={`0 0 ${circleSize + 2} ${circleSize + 1}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle 
          cx={circleSize / 2 + 1} 
          cy={circleSize / 2} 
          r={radius} 
          stroke={stroke} 
          strokeDasharray={dashArray} 
        />
      </svg>
    );
  };

  const renderIcon = () => {
    const iconProps = getIconSize();

    switch (type) {
      case 'warning':
        return (
          <div className="accordion__status-circle">
            <svg 
              width={iconProps.width} 
              height={iconProps.height} 
              viewBox={iconProps.viewBox} 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {size === 'small' ? (
                <path d="M8.66663 9.83337H7.33329V6.50004H8.66663M8.66663 12.5H7.33329V11.1667H8.66663M0.666626 14.5H15.3333L7.99996 1.83337L0.666626 14.5Z" fill="#FCE4A5"/>
              ) : size === 'large' ? (
                <path d="M19.5 21.5H16.5V14H19.5M19.5 27.5H16.5V24.5H19.5M1.5 32H34.5L18 3.5L1.5 32Z" fill="#FCE4A5"/>
              ) : (
                <path d="M15.1666 16.8334H12.8333V11H15.1666M15.1666 21.5H12.8333V19.1667H15.1666M1.16663 25H26.8333L14 2.83337L1.16663 25Z" fill="#FCE4A5"/>
              )}
            </svg>
          </div>
        );

      case 'complete':
        const checkSize = size === 'small' ? 16 : 36;
        const checkViewBox = size === 'small' ? '0 0 16 17' : '0 0 36 37';
        
        return (
          <div className="accordion__status-container">
            {getDashedCircle()}
            <svg 
              className="accordion__status-check"
              width={checkSize} 
              height={checkSize} 
              viewBox={checkViewBox} 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={disabled ? "0.6" : size === 'small' ? "0.5" : size === 'default' ? "0.3" : "0.5"}>
                {size === 'small' ? (
                  <path d="M5.99999 14.1133L1.85999 9.9733L3.74665 8.08663L5.99999 10.3466L12.5867 3.7533L14.4733 5.63996L5.99999 14.1133Z" fill="#96F78D"/>
                ) : (
                  <path d="M13.5001 31.1301L4.18506 21.8151L8.43006 17.5701L13.5001 22.6551L28.3201 7.82007L32.5651 12.0651L13.5001 31.1301Z" fill="#96F78D"/>
                )}
              </g>
            </svg>
          </div>
        );

      case 'locked':
        return (
          <div className="accordion__status-circle">
            <svg 
              width={iconProps.width} 
              height={iconProps.height} 
              viewBox={iconProps.viewBox} 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {disabled && <g opacity="0.7">}
              {size === 'small' ? (
                <path d="M7.99996 11.8334C8.35358 11.8334 8.69272 11.6929 8.94277 11.4429C9.19282 11.1928 9.33329 10.8537 9.33329 10.5001C9.33329 9.76008 8.73329 9.16675 7.99996 9.16675C7.64634 9.16675 7.3072 9.30722 7.05715 9.55727C6.8071 9.80732 6.66663 10.1465 6.66663 10.5001C6.66663 10.8537 6.8071 11.1928 7.05715 11.4429C7.3072 11.6929 7.64634 11.8334 7.99996 11.8334ZM12 5.83341C12.3536 5.83341 12.6927 5.97389 12.9428 6.22394C13.1928 6.47399 13.3333 6.81313 13.3333 7.16675V13.8334C13.3333 14.187 13.1928 14.5262 12.9428 14.7762C12.6927 15.0263 12.3536 15.1667 12 15.1667H3.99996C3.64634 15.1667 3.3072 15.0263 3.05715 14.7762C2.8071 14.5262 2.66663 14.187 2.66663 13.8334V7.16675C2.66663 6.42675 3.26663 5.83341 3.99996 5.83341H4.66663V4.50008C4.66663 3.61603 5.01782 2.76818 5.64294 2.14306C6.26806 1.51794 7.1159 1.16675 7.99996 1.16675C8.4377 1.16675 8.87115 1.25297 9.27557 1.42048C9.67999 1.588 10.0475 1.83353 10.357 2.14306C10.6665 2.45259 10.912 2.82005 11.0796 3.22447C11.2471 3.62889 11.3333 4.06234 11.3333 4.50008V5.83341H12ZM7.99996 2.50008C7.46953 2.50008 6.96082 2.7108 6.58575 3.08587C6.21067 3.46094 5.99996 3.96965 5.99996 4.50008V5.83341H9.99996V4.50008C9.99996 3.96965 9.78925 3.46094 9.41417 3.08587C9.0391 2.7108 8.53039 2.50008 7.99996 2.50008Z" fill="#C8C7D1"/>
              ) : (
                <path d="M14 20.3334C14.6188 20.3334 15.2123 20.0876 15.6499 19.65C16.0875 19.2124 16.3333 18.6189 16.3333 18.0001C16.3333 16.7051 15.2833 15.6667 14 15.6667C13.3811 15.6667 12.7876 15.9126 12.35 16.3502C11.9125 16.7878 11.6666 17.3812 11.6666 18.0001C11.6666 18.6189 11.9125 19.2124 12.35 19.65C12.7876 20.0876 13.3811 20.3334 14 20.3334ZM21 9.83341C21.6188 9.83341 22.2123 10.0792 22.6499 10.5168C23.0875 10.9544 23.3333 11.5479 23.3333 12.1667V23.8334C23.3333 24.4523 23.0875 25.0457 22.6499 25.4833C22.2123 25.9209 21.6188 26.1667 21 26.1667H6.99996C6.38112 26.1667 5.78763 25.9209 5.35004 25.4833C4.91246 25.0457 4.66663 24.4523 4.66663 23.8334V12.1667C4.66663 10.8717 5.71663 9.83341 6.99996 9.83341H8.16663V7.50008C8.16663 5.95298 8.78121 4.46925 9.87517 3.37529C10.9691 2.28133 12.4529 1.66675 14 1.66675C14.766 1.66675 15.5245 1.81763 16.2323 2.11078C16.94 2.40394 17.5831 2.83362 18.1248 3.37529C18.6664 3.91697 19.0961 4.56003 19.3893 5.26776C19.6824 5.97549 19.8333 6.73404 19.8333 7.50008V9.83341H21ZM14 4.00008C13.0717 4.00008 12.1815 4.36883 11.5251 5.02521C10.8687 5.68158 10.5 6.57182 10.5 7.50008V9.83341H17.5V7.50008C17.5 6.57182 17.1312 5.68158 16.4748 5.02521C15.8185 4.36883 14.9282 4.00008 14 4.00008Z" fill="#C8C7D1"/>
              )}
              {disabled && </g>}
            </svg>
          </div>
        );

      case 'comments':
        return (
          <div className="accordion__status-circle">
            <svg 
              width={iconProps.width} 
              height={iconProps.height} 
              viewBox={iconProps.viewBox} 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {disabled && <g opacity="0.7">}
              {size === 'small' ? (
                <path d="M6.00004 14.6666C5.82323 14.6666 5.65366 14.5963 5.52864 14.4713C5.40361 14.3463 5.33337 14.1767 5.33337 13.9999V11.9999H2.66671C2.31309 11.9999 1.97395 11.8594 1.7239 11.6094C1.47385 11.3593 1.33337 11.0202 1.33337 10.6666V2.66659C1.33337 1.92659 1.93337 1.33325 2.66671 1.33325H13.3334C13.687 1.33325 14.0261 1.47373 14.2762 1.72378C14.5262 1.97382 14.6667 2.31296 14.6667 2.66659V10.6666C14.6667 11.0202 14.5262 11.3593 14.2762 11.6094C14.0261 11.8594 13.687 11.9999 13.3334 11.9999H9.26671L6.80004 14.4733C6.66671 14.5999 6.50004 14.6666 6.33337 14.6666H6.00004ZM3.33337 3.33325V4.66659H12.6667V3.33325H3.33337ZM3.33337 5.99992V7.33325H8.66671V5.99992H3.33337ZM3.33337 8.66659V9.99992H10V8.66659H3.33337Z" fill="#B6E5F9"/>
              ) : (
                <path d="M10.5 26.1666C10.1906 26.1666 9.89388 26.0437 9.67508 25.8249C9.45629 25.6061 9.33337 25.3093 9.33337 24.9999V21.4999H4.66671C4.04787 21.4999 3.45438 21.2541 3.01679 20.8165C2.57921 20.3789 2.33337 19.7854 2.33337 19.1666V5.16659C2.33337 3.87159 3.38337 2.83325 4.66671 2.83325H23.3334C23.9522 2.83325 24.5457 3.07908 24.9833 3.51667C25.4209 3.95425 25.6667 4.54775 25.6667 5.16659V19.1666C25.6667 19.7854 25.4209 20.3789 24.9833 20.8165C24.5457 21.2541 23.9522 21.4999 23.3334 21.4999H16.2167L11.9 25.8283C11.6667 26.0499 11.375 26.1666 11.0834 26.1666H10.5ZM5.83337 6.33325V8.66658H22.1667V6.33325H5.83337ZM5.83337 10.9999V13.3333H15.1667V10.9999H5.83337ZM5.83337 15.6666V17.9999H17.5V15.6666H5.83337Z" fill="#B6E5F9"/>
              )}
              {disabled && </g>}
            </svg>
          </div>
        );

      case 'notifications':
        return (
          <div className="accordion__status-circle">
            <svg 
              width={iconProps.width} 
              height={iconProps.height} 
              viewBox={iconProps.viewBox} 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {size === 'small' ? (
                <path d="M14 4.83325C14 6.11992 12.9533 7.16659 11.6667 7.16659C10.38 7.16659 9.33333 6.11992 9.33333 4.83325C9.33333 3.54659 10.38 2.49992 11.6667 2.49992C12.9533 2.49992 14 3.54659 14 4.83325ZM12.6667 8.35992C12.3333 8.44659 12 8.49992 11.6667 8.49992C9.64667 8.49992 8 6.85325 8 4.83325C8 3.85325 8.38667 2.96659 9 2.30659C8.76667 2.01992 8.40667 1.83325 8 1.83325C7.26667 1.83325 6.66667 2.43325 6.66667 3.16659V3.35992C4.68667 3.94659 3.33333 5.76659 3.33333 7.83325V11.8333L2 13.1666V13.8333H14V13.1666L12.6667 11.8333V8.35992ZM8 15.8333C8.74 15.8333 9.33333 15.2399 9.33333 14.4999H6.66667C6.66667 15.2399 7.26667 15.8333 8 15.8333Z" fill="#C5CAED"/>
              ) : (
                <path d="M24.5 8.08325C24.5 10.3349 22.6683 12.1666 20.4167 12.1666C18.165 12.1666 16.3333 10.3349 16.3333 8.08325C16.3333 5.83159 18.165 3.99992 20.4167 3.99992C22.6683 3.99992 24.5 5.83159 24.5 8.08325ZM22.1667 14.2549C21.5833 14.4066 21 14.4999 20.4167 14.4999C16.8817 14.4999 14 11.6183 14 8.08325C14 6.36825 14.6767 4.81659 15.75 3.66159C15.3417 3.15992 14.7117 2.83325 14 2.83325C12.7167 2.83325 11.6667 3.88325 11.6667 5.16659V5.50492C8.20167 6.53159 5.83333 9.71659 5.83333 13.3333V20.3333L3.5 22.6666V23.8333H24.5V22.6666L22.1667 20.3333V14.2549ZM14 27.3333C15.295 27.3333 16.3333 26.2949 16.3333 24.9999H11.6667C11.6667 26.2949 12.7167 27.3333 14 27.3333Z" fill="#C5CAED"/>
              )}
            </svg>
          </div>
        );

      case 'error':
        return (
          <div className="accordion__status-circle">
            <svg 
              width={iconProps.width} 
              height={iconProps.height} 
              viewBox={iconProps.viewBox} 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={disabled ? "1" : "0.25"}>
                {size === 'small' ? (
                  <path d="M13.3333 5.1065L11.3933 3.1665L7.99996 6.55984L4.60663 3.1665L2.66663 5.1065L6.05996 8.49984L2.66663 11.8932L4.60663 13.8332L7.99996 10.4398L11.3933 13.8332L13.3333 11.8932L9.93996 8.49984L13.3333 5.1065Z" fill="#CE2031"/>
                ) : (
                  <path d="M23.3333 8.5615L19.9383 5.1665L14 11.1048L8.06163 5.1665L4.66663 8.5615L10.605 14.4998L4.66663 20.4382L8.06163 23.8332L14 17.8948L19.9383 23.8332L23.3333 20.4382L17.395 14.4998L23.3333 8.5615Z" fill="#CE2031"/>
                )}
              </g>
            </svg>
          </div>
        );

      case 'note':
        const noteIconSize = size === 'small' ? 14 : 28;
        const noteViewBox = size === 'small' ? '0 0 14 15' : '0 0 28 29';
        
        return (
          <div className="accordion__status-circle">
            <svg 
              width={noteIconSize} 
              height={noteIconSize} 
              viewBox={noteViewBox} 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={disabled ? "1" : "0.4"}>
                {size === 'small' ? (
                  <path d="M7.58337 5.74984H10.7917L7.58337 2.5415V5.74984ZM3.50004 1.6665H8.16671L11.6667 5.1665V12.1665C11.6667 12.4759 11.5438 12.7727 11.325 12.9915C11.1062 13.2103 10.8095 13.3332 10.5 13.3332H3.50004C2.85254 13.3332 2.33337 12.8082 2.33337 12.1665V2.83317C2.33337 2.18567 2.85254 1.6665 3.50004 1.6665ZM8.75004 10.9998V9.83317H3.50004V10.9998H8.75004ZM10.5 8.6665V7.49984H3.50004V8.6665H10.5Z" fill="#5D2C82"/>
                ) : (
                  <path d="M15.1666 11.0002H21.5833L15.1666 4.5835V11.0002ZM6.99996 2.8335H16.3333L23.3333 9.8335V23.8335C23.3333 24.4523 23.0875 25.0458 22.6499 25.4834C22.2123 25.921 21.6188 26.1668 21 26.1668H6.99996C5.70496 26.1668 4.66663 25.1168 4.66663 23.8335V5.16683C4.66663 3.87183 5.70496 2.8335 6.99996 2.8335ZM17.5 21.5002V19.1668H6.99996V21.5002H17.5ZM21 16.8335V14.5002H6.99996V16.8335H21Z" fill="#5D2C82"/>
                )}
              </g>
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={containerClasses}>
      <div className={statusClasses}>
        {renderIcon()}
      </div>
    </div>
  );
};

export default AccordionStatus;