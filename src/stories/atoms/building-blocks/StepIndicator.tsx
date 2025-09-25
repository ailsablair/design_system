import React from 'react';
import './stepIndicator.css';

export interface StepIndicatorProps {
  /** Type of step indicator */
  type?: 'warning' | 'locked' | 'comments' | 'complete' | 'notifications' | 'error' | 'note';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Whether the indicator is disabled */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Click handler for interactive indicators */
  onClick?: () => void;
  /** Accessibility label */
  'aria-label'?: string;
  /** Whether this step is complete */
  complete?: boolean;
  /** Whether this is the current step */
  current?: boolean;
}

// Icon components for each type
const WarningIcon: React.FC<{ size: 'small' | 'default' | 'large' }> = ({ size }) => {
  const dimensions = size === 'small' ? { width: 16, height: 16 } : { width: 28, height: 28 };
  
  return (
    <svg 
      {...dimensions}
      viewBox={size === 'small' ? '0 0 16 16' : '0 0 28 28'} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="step-indicator-icon"
    >
      {size === 'small' ? (
        <path 
          d="M8.66675 9.33331H7.33341V5.99998H8.66675M8.66675 12H7.33341V10.6666H8.66675M0.666748 14H15.3334L8.00008 1.33331L0.666748 14Z" 
          fill="#FCE4A5"
        />
      ) : (
        <path 
          d="M15.1667 16.3333H12.8334V10.5H15.1667M15.1667 21H12.8334V18.6666H15.1667M1.16675 24.5H26.8334L14.0001 2.33331L1.16675 24.5Z" 
          fill="#FCE4A5"
        />
      )}
    </svg>
  );
};

const LockIcon: React.FC<{ size: 'small' | 'default' | 'large' }> = ({ size }) => {
  const dimensions = size === 'small' ? { width: 16, height: 16 } : { width: 28, height: 28 };
  
  return (
    <svg 
      {...dimensions}
      viewBox={size === 'small' ? '0 0 16 16' : '0 0 28 28'} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="step-indicator-icon"
    >
      {size === 'small' ? (
        <path 
          d="M8.00008 11.3334C8.3537 11.3334 8.69284 11.1929 8.94289 10.9428C9.19294 10.6928 9.33341 10.3536 9.33341 10C9.33341 9.26002 8.73341 8.66669 8.00008 8.66669C7.64646 8.66669 7.30732 8.80716 7.05727 9.05721C6.80722 9.30726 6.66675 9.6464 6.66675 10C6.66675 10.3536 6.80722 10.6928 7.05727 10.9428C7.30732 11.1929 7.64646 11.3334 8.00008 11.3334ZM12.0001 5.33335C12.3537 5.33335 12.6928 5.47383 12.9429 5.72388C13.1929 5.97393 13.3334 6.31307 13.3334 6.66669V13.3334C13.3334 13.687 13.1929 14.0261 12.9429 14.2762C12.6928 14.5262 12.3537 14.6667 12.0001 14.6667H4.00008C3.64646 14.6667 3.30732 14.5262 3.05727 14.2762C2.80722 14.0261 2.66675 13.687 2.66675 13.3334V6.66669C2.66675 5.92669 3.26675 5.33335 4.00008 5.33335H4.66675V4.00002C4.66675 3.11597 5.01794 2.26812 5.64306 1.643C6.26818 1.01788 7.11603 0.666687 8.00008 0.666687C8.43782 0.666687 8.87127 0.752906 9.27569 0.920422C9.68011 1.08794 10.0476 1.33347 10.3571 1.643C10.6666 1.95253 10.9122 2.31999 11.0797 2.72441C11.2472 3.12883 11.3334 3.56228 11.3334 4.00002V5.33335H12.0001ZM8.00008 2.00002C7.46965 2.00002 6.96094 2.21073 6.58587 2.58581C6.21079 2.96088 6.00008 3.46959 6.00008 4.00002V5.33335H10.0001V4.00002C10.0001 3.46959 9.78937 2.96088 9.41429 2.58581C9.03922 2.21073 8.53051 2.00002 8.00008 2.00002Z" 
          fill="#C8C7D1"
        />
      ) : (
        <path 
          d="M13.9998 19.8334C14.6187 19.8334 15.2122 19.5875 15.6498 19.1499C16.0873 18.7124 16.3332 18.1189 16.3332 17.5C16.3332 16.205 15.2832 15.1667 13.9998 15.1667C13.381 15.1667 12.7875 15.4125 12.3499 15.8501C11.9123 16.2877 11.6665 16.8812 11.6665 17.5C11.6665 18.1189 11.9123 18.7124 12.3499 19.1499C12.7875 19.5875 13.381 19.8334 13.9998 19.8334ZM20.9998 9.33335C21.6187 9.33335 22.2122 9.57919 22.6498 10.0168C23.0873 10.4544 23.3332 11.0478 23.3332 11.6667V23.3334C23.3332 23.9522 23.0873 24.5457 22.6498 24.9833C22.2122 25.4209 21.6187 25.6667 20.9998 25.6667H6.99984C6.381 25.6667 5.78751 25.4209 5.34992 24.9833C4.91234 24.5457 4.6665 23.9522 4.6665 23.3334V11.6667C4.6665 10.3717 5.7165 9.33335 6.99984 9.33335H8.1665V7.00002C8.1665 5.45292 8.78109 3.96919 9.87505 2.87523C10.969 1.78127 12.4527 1.16669 13.9998 1.16669C14.7659 1.16669 15.5244 1.31757 16.2322 1.61072C16.9399 1.90388 17.583 2.33356 18.1246 2.87523C18.6663 3.41691 19.096 4.05997 19.3891 4.7677C19.6823 5.47543 19.8332 6.23398 19.8332 7.00002V9.33335H20.9998ZM13.9998 3.50002C13.0716 3.50002 12.1813 3.86877 11.525 4.52515C10.8686 5.18152 10.4998 6.07176 10.4998 7.00002V9.33335H17.4998V7.00002C17.4998 6.07176 17.1311 5.18152 16.4747 4.52515C15.8183 3.86877 14.9281 3.50002 13.9998 3.50002Z" 
          fill="#C8C7D1"
        />
      )}
    </svg>
  );
};

const CommentIcon: React.FC<{ size: 'small' | 'default' | 'large' }> = ({ size }) => {
  const dimensions = size === 'small' ? { width: 16, height: 17 } : { width: 28, height: 28 };
  
  return (
    <svg 
      {...dimensions}
      viewBox={size === 'small' ? '0 0 16 17' : '0 0 28 28'} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="step-indicator-icon"
    >
      {size === 'small' ? (
        <path 
          d="M5.99992 15.1666C5.82311 15.1666 5.65354 15.0964 5.52851 14.9714C5.40349 14.8464 5.33325 14.6768 5.33325 14.5V12.5H2.66659C2.31296 12.5 1.97382 12.3595 1.72378 12.1095C1.47373 11.8594 1.33325 11.5203 1.33325 11.1666V3.16665C1.33325 2.42665 1.93325 1.83331 2.66659 1.83331H13.3333C13.6869 1.83331 14.026 1.97379 14.2761 2.22384C14.5261 2.47389 14.6666 2.81302 14.6666 3.16665V11.1666C14.6666 11.5203 14.5261 11.8594 14.2761 12.1095C14.026 12.3595 13.6869 12.5 13.3333 12.5H9.26659L6.79992 14.9733C6.66659 15.1 6.49992 15.1666 6.33325 15.1666H5.99992ZM3.33325 3.83331V5.16665H12.6666V3.83331H3.33325ZM3.33325 6.49998V7.83331H8.66659V6.49998H3.33325ZM3.33325 9.16665V10.5H9.99992V9.16665H3.33325Z" 
          fill="#B6E5F9"
        />
      ) : (
        <path 
          d="M10.5002 25.6666C10.1907 25.6666 9.894 25.5437 9.6752 25.3249C9.45641 25.1061 9.3335 24.8094 9.3335 24.5V21H4.66683C4.04799 21 3.4545 20.7541 3.01691 20.3166C2.57933 19.879 2.3335 19.2855 2.3335 18.6666V4.66665C2.3335 3.37165 3.3835 2.33331 4.66683 2.33331H23.3335C23.9523 2.33331 24.5458 2.57915 24.9834 3.01673C25.421 3.45432 25.6668 4.04781 25.6668 4.66665V18.6666C25.6668 19.2855 25.421 19.879 24.9834 20.3166C24.5458 20.7541 23.9523 21 23.3335 21H16.2168L11.9002 25.3283C11.6668 25.55 11.3752 25.6666 11.0835 25.6666H10.5002ZM5.8335 5.83331V8.16665H22.1668V5.83331H5.8335ZM5.8335 10.5V12.8333H15.1668V10.5H5.8335ZM5.8335 15.1666V17.5H17.5002V15.1666H5.8335Z" 
          fill="#B6E5F9"
        />
      )}
    </svg>
  );
};

const CheckIcon: React.FC<{ size: 'small' | 'default' | 'large' }> = ({ size }) => {
  const dimensions = size === 'small' ? { width: 16, height: 16 } : { width: 36, height: 36 };
  
  return (
    <svg 
      {...dimensions}
      viewBox={size === 'small' ? '0 0 16 16' : '0 0 36 36'} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="step-indicator-icon"
    >
      {size === 'small' ? (
        <path 
          d="M6.00011 13.6134L1.86011 9.47336L3.74677 7.58669L6.00011 9.84669L12.5868 3.25336L14.4734 5.14002L6.00011 13.6134Z" 
          fill="#96F78D"
        />
      ) : (
        <path 
          d="M13.5001 30.63L4.18506 21.315L8.43006 17.07L13.5001 22.155L28.3201 7.32001L32.5651 11.565L13.5001 30.63Z" 
          fill="#96F78D"
        />
      )}
    </svg>
  );
};

const NotificationIcon: React.FC<{ size: 'small' | 'default' | 'large' }> = ({ size }) => {
  const dimensions = size === 'small' ? { width: 16, height: 16 } : { width: 28, height: 28 };
  
  return (
    <svg 
      {...dimensions}
      viewBox={size === 'small' ? '0 0 16 16' : '0 0 28 28'} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="step-indicator-icon"
    >
      {size === 'small' ? (
        <path 
          d="M14 4.33331C14 5.61998 12.9533 6.66665 11.6667 6.66665C10.38 6.66665 9.33333 5.61998 9.33333 4.33331C9.33333 3.04665 10.38 1.99998 11.6667 1.99998C12.9533 1.99998 14 3.04665 14 4.33331ZM12.6667 7.85998C12.3333 7.94665 12 7.99998 11.6667 7.99998C9.64667 7.99998 8 6.35331 8 4.33331C8 3.35331 8.38667 2.46665 9 1.80665C8.76667 1.51998 8.40667 1.33331 8 1.33331C7.26667 1.33331 6.66667 1.93331 6.66667 2.66665V2.85998C4.68667 3.44665 3.33333 5.26665 3.33333 7.33331V11.3333L2 12.6666V13.3333H14V12.6666L12.6667 11.3333V7.85998ZM8 15.3333C8.74 15.3333 9.33333 14.74 9.33333 14H6.66667C6.66667 14.74 7.26667 15.3333 8 15.3333Z" 
          fill="#C5CAED"
        />
      ) : (
        <path 
          d="M24.5 7.58331C24.5 9.83498 22.6683 11.6666 20.4167 11.6666C18.165 11.6666 16.3333 9.83498 16.3333 7.58331C16.3333 5.33165 18.165 3.49998 20.4167 3.49998C22.6683 3.49998 24.5 5.33165 24.5 7.58331ZM22.1667 13.755C21.5833 13.9066 21 14 20.4167 14C16.8817 14 14 11.1183 14 7.58331C14 5.86831 14.6767 4.31665 15.75 3.16165C15.3417 2.65998 14.7117 2.33331 14 2.33331C12.7167 2.33331 11.6667 3.38331 11.6667 4.66665V5.00498C8.20167 6.03165 5.83333 9.21665 5.83333 12.8333V19.8333L3.5 22.1666V23.3333H24.5V22.1666L22.1667 19.8333V13.755ZM14 26.8333C15.295 26.8333 16.3333 25.795 16.3333 24.5H11.6667C11.6667 25.795 12.7167 26.8333 14 26.8333Z" 
          fill="#C5CAED"
        />
      )}
    </svg>
  );
};

const ErrorIcon: React.FC<{ size: 'small' | 'default' | 'large' }> = ({ size }) => {
  const dimensions = size === 'small' ? { width: 16, height: 16 } : { width: 28, height: 28 };
  
  return (
    <svg 
      {...dimensions}
      viewBox={size === 'small' ? '0 0 16 16' : '0 0 28 28'} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="step-indicator-icon"
    >
      {size === 'small' ? (
        <path 
          d="M13.3334 4.60669L11.3934 2.66669L8.00008 6.06002L4.60675 2.66669L2.66675 4.60669L6.06008 8.00002L2.66675 11.3934L4.60675 13.3334L8.00008 9.94002L11.3934 13.3334L13.3334 11.3934L9.94008 8.00002L13.3334 4.60669Z" 
          fill="#CE2031"
        />
      ) : (
        <path 
          d="M23.3332 8.06169L19.9382 4.66669L13.9998 10.605L8.0615 4.66669L4.6665 8.06169L10.6048 14L4.6665 19.9384L8.0615 23.3334L13.9998 17.395L19.9382 23.3334L23.3332 19.9384L17.3948 14L23.3332 8.06169Z" 
          fill="#CE2031"
        />
      )}
    </svg>
  );
};

const NoteIcon: React.FC<{ size: 'small' | 'default' | 'large' }> = ({ size }) => {
  const dimensions = size === 'small' ? { width: 14, height: 14 } : { width: 28, height: 28 };
  
  return (
    <svg 
      {...dimensions}
      viewBox={size === 'small' ? '0 0 14 14' : '0 0 28 28'} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="step-indicator-icon"
    >
      {size === 'small' ? (
        <path 
          d="M7.58325 5.25002H10.7916L7.58325 2.04169V5.25002ZM3.49992 1.16669H8.16659L11.6666 4.66669V11.6667C11.6666 11.9761 11.5437 12.2729 11.3249 12.4916C11.1061 12.7104 10.8093 12.8334 10.4999 12.8334H3.49992C2.85242 12.8334 2.33325 12.3084 2.33325 11.6667V2.33335C2.33325 1.68585 2.85242 1.16669 3.49992 1.16669ZM8.74992 10.5V9.33335H3.49992V10.5H8.74992ZM10.4999 8.16669V7.00002H3.49992V8.16669H10.4999Z" 
          fill="#5D2C82"
        />
      ) : (
        <path 
          d="M15.1665 10.5H21.5832L15.1665 4.08331V10.5ZM6.99984 2.33331H16.3332L23.3332 9.33331V23.3333C23.3332 23.9522 23.0873 24.5456 22.6498 24.9832C22.2122 25.4208 21.6187 25.6666 20.9998 25.6666H6.99984C5.70484 25.6666 4.6665 24.6166 4.6665 23.3333V4.66665C4.6665 3.37165 5.70484 2.33331 6.99984 2.33331ZM17.4998 21V18.6666H6.99984V21H17.4998ZM20.9998 16.3333V14H6.99984V16.3333H20.9998Z" 
          fill="#5D2C82"
        />
      )}
    </svg>
  );
};

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  type = 'warning',
  size = 'default',
  disabled = false,
  className = '',
  style = {},
  onClick,
  'aria-label': ariaLabel,
  complete = false,
  current = false,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!disabled && onClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick();
    }
  };

  const getIcon = () => {
    if (type === 'complete' || complete) {
      return <CheckIcon size={size} />;
    }

    switch (type) {
      case 'warning':
        return <WarningIcon size={size} />;
      case 'locked':
        return <LockIcon size={size} />;
      case 'comments':
        return <CommentIcon size={size} />;
      case 'notifications':
        return <NotificationIcon size={size} />;
      case 'error':
        return <ErrorIcon size={size} />;
      case 'note':
        return <NoteIcon size={size} />;
      default:
        return <WarningIcon size={size} />;
    }
  };

  const stepIndicatorClasses = [
    'step-indicator',
    `step-indicator-type-${type}`,
    `step-indicator-size-${size}`,
    disabled && 'step-indicator-disabled',
    complete && 'step-indicator-complete',
    current && 'step-indicator-current',
    onClick && !disabled && 'step-indicator-interactive',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={stepIndicatorClasses}
      style={style}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick && !disabled ? 0 : undefined}
      role={onClick && !disabled ? 'button' : undefined}
      aria-label={ariaLabel || `${type} step indicator${current ? ' (current)' : ''}${complete ? ' (completed)' : ''}${disabled ? ' (disabled)' : ''}`}
    >
      <div className="step-indicator-circle">
        <div className="step-indicator-content">
          {getIcon()}
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
