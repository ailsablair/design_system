import React from 'react';
import './card.css';

export interface CardProps {
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Card type */
  type?: 'simple' | 'icon' | 'text-only' | 'empty-state' | 'stat' | 'warning' | 'error' | 'info' | 'success' | 'image' | 'contained-image';
  /** Background color variant */
  bg?: 'default';
  /** Alignment */
  align?: 'horizontal' | 'vertical';
  /** Drop shadow */
  dropShadow?: boolean;
  /** Placement for icon types and image cards */
  placement?: 'default' | 'n/a' | 'left' | 'right';
  /** Font type for stat cards */
  font?: 'default' | 'roboto-flex' | 'archivo';
  /** Show close icon */
  showCloseIcon?: boolean;
  /** Close icon click handler */
  onCloseClick?: () => void;
  /** Show button group */
  showButtonGroup?: boolean;
  /** Show icon */
  showIcon?: boolean;
  /** Card title */
  title?: string;
  /** Card subtitle */
  subtitle?: string;
  /** Card body text */
  bodyText?: string;
  /** Stat value (for stat type) */
  statValue?: string;
  /** Stat label (for stat type) */
  statLabel?: string;
  /** Icon component (for icon and empty-state types) */
  icon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
  /** ARIA label for accessibility */
  'aria-label'?: string;
  /** Custom children (overrides default content) */
  children?: React.ReactNode;
  /** Image source for image card types */
  imageSrc?: string;
  /** Image alt text */
  imageAlt?: string;
}

// Semantic icons for warning, error, and info cards
const WarningIcon = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36.8333 39.667H31.1666V25.5003H36.8333M36.8333 51.0003H31.1666V45.3337H36.8333M2.83325 59.5003H65.1666L33.9999 5.66699L2.83325 59.5003Z" fill="#F4A403"/>
  </svg>
);

const ErrorIcon = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.0001 5.66699C49.6684 5.66699 62.3334 18.332 62.3334 34.0003C62.3334 49.6687 49.6684 62.3337 34.0001 62.3337C18.3317 62.3337 5.66675 49.6687 5.66675 34.0003C5.66675 18.332 18.3317 5.66699 34.0001 5.66699ZM44.1717 19.8337L34.0001 30.0053L23.8284 19.8337L19.8334 23.8287L30.0051 34.0003L19.8334 44.172L23.8284 48.167L34.0001 37.9953L44.1717 48.167L48.1667 44.172L37.9951 34.0003L48.1667 23.8287L44.1717 19.8337Z" fill="#CE2031"/>
  </svg>
);

const InfoIcon = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36.8334 25.5003H31.1667V19.8337H36.8334M36.8334 48.167H31.1667V31.167H36.8334M34.0001 5.66699C30.2793 5.66699 26.5949 6.39986 23.1574 7.82374C19.7198 9.24762 16.5964 11.3346 13.9654 13.9656C8.65186 19.2792 5.66675 26.4859 5.66675 34.0003C5.66675 41.5148 8.65186 48.7215 13.9654 54.035C16.5964 56.666 19.7198 58.753 23.1574 60.1769C26.5949 61.6008 30.2793 62.3337 34.0001 62.3337C41.5145 62.3337 48.7212 59.3485 54.0348 54.035C59.3483 48.7215 62.3334 41.5148 62.3334 34.0003C62.3334 30.2795 61.6006 26.5952 60.1767 23.1576C58.7528 19.7201 56.6658 16.5966 54.0348 13.9656C51.4038 11.3346 48.2803 9.24762 44.8428 7.82374C41.4052 6.39986 37.7209 5.66699 34.0001 5.66699Z" fill="#366F97"/>
  </svg>
);

const SuccessIcon = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.0001 5.66699C18.4167 5.66699 5.66675 18.417 5.66675 34.0003C5.66675 49.5837 18.4167 62.3337 34.0001 62.3337C49.5834 62.3337 62.3334 49.5837 62.3334 34.0003C62.3334 18.417 49.5834 5.66699 34.0001 5.66699ZM28.3334 48.167L14.1667 34.0003L18.1617 30.0053L28.3334 40.1487L49.8384 18.6437L53.8334 22.667L28.3334 48.167Z" fill="#70CC67"/>
  </svg>
);

// Icon components for different card types and sizes
const AngleAcuteIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const dimensions = size === 'small' ? '66' : size === 'large' ? '98' : '76';
  const viewBox = size === 'small' ? '0 0 66 66' : size === 'large' ? '0 0 99 98' : '0 0 76 76';
  
  if (size === 'small') {
    return (
      <svg width={dimensions} height={dimensions} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M54.9087 52.0334H11.3374L38.97 12.1318L43.4613 15.2539L31.028 33.2192C35.4372 35.4922 38.4771 40.0383 38.4771 45.2964C38.4771 45.7346 38.4771 46.1454 38.3949 46.5562H54.9087V52.0334ZM21.7989 46.5562H32.8903C32.9998 46.1454 32.9998 45.7346 32.9998 45.2964C32.9998 41.8458 30.9185 38.9429 27.906 37.7379L21.7989 46.5562Z" fill="#0BA7EA"/>
      </svg>
    );
  }
  
  if (size === 'large') {
    return (
      <svg width={dimensions} height={dimensions} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M82.1598 77.5672H17.2075L58.3998 18.0854L65.095 22.7395L46.5606 49.5206C53.1334 52.909 57.6649 59.686 57.6649 67.5243C57.6649 68.1775 57.6649 68.7899 57.5424 69.4023H82.1598V77.5672ZM32.8026 69.4023H49.3367C49.5 68.7899 49.5 68.1775 49.5 67.5243C49.5 62.3804 46.3973 58.053 41.9065 56.2567L32.8026 69.4023Z" fill="#0BA7EA"/>
      </svg>
    );
  }
  
  return (
    <svg width={dimensions} height={dimensions} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M63.2982 60.0832H12.9863L44.8937 14.0088L50.0798 17.6138L35.7231 38.3583C40.8144 40.983 44.3245 46.2324 44.3245 52.304C44.3245 52.8099 44.3245 53.2843 44.2296 53.7586H63.2982V60.0832ZM25.0662 53.7586H37.8735C37.9999 53.2843 37.9999 52.8099 37.9999 52.304C37.9999 48.3195 35.5966 44.9675 32.1181 43.5761L25.0662 53.7586Z" fill="#0BA7EA"/>
    </svg>
  );
};

const InboxFullIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const dimensions = size === 'small' ? '66' : size === 'large' ? '98' : '88';
  const viewBox = size === 'small' ? '0 0 66 66' : size === 'large' ? '0 0 99 98' : '0 0 88 88';
  
  if (size === 'small') {
    return (
      <svg width={dimensions} height={dimensions} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M52.1703 41.0792V13.693H13.8298V41.0792H24.7842C24.7842 45.6253 28.454 49.295 33.0001 49.295C37.5462 49.295 41.2159 45.6253 41.2159 41.0792H52.1703ZM52.1703 8.21582C55.1828 8.21582 57.6476 10.6806 57.6476 13.693V52.0336C57.6476 55.0461 55.1828 57.5108 52.1703 57.5108H13.8298C10.7899 57.5108 8.35254 55.0461 8.35254 52.0336V13.693C8.35254 10.6806 10.7899 8.21582 13.8298 8.21582H52.1703ZM19.307 35.6019V30.1247H46.6931V35.6019H19.307ZM19.307 24.6475V19.1703H46.6931V24.6475H19.307Z" fill="#D6F0FB"/>
      </svg>
    );
  }
  
  if (size === 'large') {
    return (
      <svg width={dimensions} height={dimensions} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M78.0775 61.2374V20.4125H20.9228V61.2374H37.2527C37.2527 68.0143 42.7232 73.4848 49.5002 73.4848C56.2771 73.4848 61.7476 68.0143 61.7476 61.2374H78.0775ZM78.0775 12.2476C82.5683 12.2476 86.2425 15.9218 86.2425 20.4125V77.5673C86.2425 82.058 82.5683 85.7322 78.0775 85.7322H20.9228C16.3912 85.7322 12.7578 82.058 12.7578 77.5673V20.4125C12.7578 15.9218 16.3912 12.2476 20.9228 12.2476H78.0775ZM29.0877 53.0724V44.9074H69.9126V53.0724H29.0877ZM29.0877 36.7425V28.5775H69.9126V36.7425H29.0877Z" fill="#D6F0FB"/>
      </svg>
    );
  }
  
  return (
    <svg width={dimensions} height={dimensions} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M69.5605 54.7724V18.2576H18.4397V54.7724H33.0456C33.0456 60.8339 37.9386 65.7268 44.0001 65.7268C50.0615 65.7268 54.9545 60.8339 54.9545 54.7724H69.5605ZM69.5605 10.9546C73.5771 10.9546 76.8634 14.2409 76.8634 18.2576V69.3783C76.8634 73.395 73.5771 76.6813 69.5605 76.6813H18.4397C14.3865 76.6813 11.1367 73.395 11.1367 69.3783V18.2576C11.1367 14.2409 14.3865 10.9546 18.4397 10.9546H69.5605ZM25.7427 47.4694V40.1665H62.2575V47.4694H25.7427ZM25.7427 32.8635V25.5605H62.2575V32.8635H25.7427Z" fill="#D6F0FB"/>
    </svg>
  );
};

// Button icons
const AlarmIcon = ({ size = 'small' }: { size?: 'small' | 'default' | 'large' }) => {
  const dimensions = size === 'small' ? '14' : size === 'large' ? '20' : '18';
  
  return (
    <svg width={dimensions} height={dimensions} viewBox={`0 0 ${dimensions} ${dimensions}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path d="M3.5 4.02516L2.2575 2.7885L3.08 1.966L4.31667 3.2085L3.5 4.02516ZM7.58333 0.583496V2.3335H6.41667V0.583496H7.58333ZM11.7425 2.7885L10.5 4.02516L9.68333 3.2085L10.92 1.966L11.7425 2.7885ZM2.625 6.12516V7.29183H0.875V6.12516H2.625ZM11.375 6.12516H13.125V7.29183H11.375V6.12516ZM3.5 11.6668H10.5C10.8094 11.6668 11.1062 11.7897 11.325 12.0085C11.5437 12.2273 11.6667 12.5241 11.6667 12.8335H2.33333C2.33333 12.5241 2.45625 12.2273 2.67504 12.0085C2.89383 11.7897 3.19058 11.6668 3.5 11.6668ZM7 2.91683C7.92826 2.91683 8.8185 3.28558 9.47487 3.94196C10.1313 4.59833 10.5 5.48857 10.5 6.41683V11.0835H3.5V6.41683C3.5 5.48857 3.86875 4.59833 4.52513 3.94196C5.1815 3.28558 6.07174 2.91683 7 2.91683Z" fill="currentColor"/>
      </g>
    </svg>
  );
};

const ArrowDownCircleIcon = ({ size = 'small' }: { size?: 'small' | 'default' | 'large' }) => {
  const dimensions = size === 'small' ? '14' : size === 'large' ? '20' : '18';

  return (
    <svg width={dimensions} height={dimensions} viewBox={`0 0 ${dimensions} ${dimensions}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path d="M6.41675 3.49984V8.1665L4.37508 6.12484L3.54675 6.95317L7.00008 10.4065L10.4534 6.95317L9.62508 6.12484L7.58341 8.1665V3.49984H6.41675ZM7.00008 12.8332C6.23404 12.8332 5.47549 12.6823 4.76776 12.3891C4.06003 12.096 3.41697 11.6663 2.87529 11.1246C1.78133 10.0307 1.16675 8.54693 1.16675 6.99984C1.16675 5.45274 1.78133 3.96901 2.87529 2.87505C3.96925 1.78109 5.45298 1.1665 7.00008 1.1665C7.76613 1.1665 8.52467 1.31739 9.2324 1.61054C9.94013 1.90369 10.5832 2.33337 11.1249 2.87505C11.6665 3.41672 12.0962 4.05978 12.3894 4.76752C12.6825 5.47525 12.8334 6.23379 12.8334 6.99984C12.8334 8.54693 12.2188 10.0307 11.1249 11.1246C10.0309 12.2186 8.54718 12.8332 7.00008 12.8332Z" fill="currentColor"/>
      </g>
    </svg>
  );
};

// Close icon component
const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12M4 4L12 12" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CardImagePlaceholder = ({
  className,
  width = '90',
  height = '90',
}: {
  className?: string;
  width?: string | number;
  height?: string | number;
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 90 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    preserveAspectRatio="xMidYMid slice"
  >
    <path d="M62.5 52.5L50 67.5L32.5 45L10 75H80M0 80V10C0 4.45 4.5 0 10 0H80C82.6522 0 85.1957 1.05357 87.0711 2.92893C88.9464 4.8043 90 7.34784 90 10V80C90 82.6522 88.9464 85.1957 87.0711 87.0711C85.1957 88.9464 82.6522 90 80 90H10C7.34784 90 4.8043 88.9464 2.92893 87.0711C1.05357 85.1957 0 82.6522 0 80Z" fill="#9CA3AF"/>
  </svg>
);

export const Card: React.FC<CardProps> = ({
  size = 'default',
  type = 'simple',
  bg = 'default',
  align = 'horizontal',
  dropShadow = true,
  placement = 'default',
  font = 'default',
  showCloseIcon = false,
  onCloseClick,
  showButtonGroup = true,
  showIcon = true,
  title = 'This is a heading',
  subtitle = 'This is a subheading',
  bodyText = 'This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card. This is body text that can span multiple lines within the card.',
  statValue = '23%',
  statLabel = 'awesomeness',
  icon,
  onClick,
  className = '',
  disabled = false,
  'aria-label': ariaLabel,
  children,
  imageSrc,
  imageAlt = 'Card image',
}) => {
  // Suppress unused variable warnings for props that are kept for API completeness
  void showIcon;

  const placementAttribute = placement !== 'default' ? placement : undefined;

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when close is clicked
    if (onCloseClick) {
      onCloseClick();
    }
  };

  const cardClasses = [
    'card',
    `card-size-${size}`,
    `card-type-${type}`,
    `card-bg-${bg}`,
    `card-align-${align}`,
    dropShadow ? 'card-shadow' : 'card-no-shadow',
    onClick ? 'card-clickable' : '',
    disabled ? 'card-disabled' : '',
    font !== 'default' ? `card-font-${font}` : '',
    className
  ].filter(Boolean).join(' ');

  // Show close icon on all card types when requested
  const shouldShowCloseIcon = showCloseIcon;

  // If custom children are provided, use them
  if (children) {
    return (
      <div
        className={cardClasses}
        data-placement={placementAttribute}
        onClick={handleClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick && !disabled ? 0 : undefined}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        onKeyDown={(e) => {
          if (onClick && !disabled && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        {shouldShowCloseIcon && (
          <button
            className="card-close-icon"
            onClick={handleCloseClick}
            aria-label="Close card"
            type="button"
          >
            <CloseIcon />
          </button>
        )}
        {children}
      </div>
    );
  }

  // Render different content based on type
  const renderContent = () => {
    switch (type) {
      case 'simple':
        return (
          <>
            {align === 'horizontal' ? (
              <div className="card-content-horizontal">
                <div className="card-text">
                  <div className="card-headings">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-subtitle">{subtitle}</p>
                  </div>
                  <p className="card-body">{bodyText}</p>
                </div>
              </div>
            ) : (
              <div className="card-text">
                <div className="card-headings">
                  <h3 className="card-title">{title}</h3>
                  <p className="card-subtitle">{subtitle}</p>
                </div>
                <p className="card-body">{bodyText}</p>
              </div>
            )}
            {showButtonGroup && (
              <div className="card-button-group">
                <button className="card-btn card-btn-primary">
                  <AlarmIcon size={size} />
                  <span>Label</span>
                  <ArrowDownCircleIcon size={size} />
                </button>
                <button className="card-btn card-btn-ghost">
                  <AlarmIcon size={size} />
                  <span>Label</span>
                  <ArrowDownCircleIcon size={size} />
                </button>
              </div>
            )}
          </>
        );

      case 'warning':
        return (
          <>
            <div className="card-semantic-content">
              <div className="card-semantic-icon">
                <WarningIcon />
              </div>
              <div className="card-semantic-text">
                <h3 className="card-semantic-title">{title}</h3>
                <p className="card-body">{bodyText}</p>
              </div>
            </div>
            {showButtonGroup && (
              <div className="card-button-group">
                <button className="card-btn card-btn-warning">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                      <path d="M7.58325 8.16699H6.41659V5.25033H7.58325M7.58325 10.5003H6.41659V9.33366H7.58325M0.583252 12.2503H13.4166L6.99992 1.16699L0.583252 12.2503Z" fill="white"/>
                    </g>
                  </svg>
                  <span>Warning button</span>
                </button>
                <button className="card-btn card-btn-ghost">
                  <AlarmIcon size={size} />
                  <span>Label</span>
                  <ArrowDownCircleIcon size={size} />
                </button>
              </div>
            )}
          </>
        );

      case 'error':
        return (
          <>
            <div className="card-semantic-content">
              <div className="card-semantic-icon">
                <ErrorIcon />
              </div>
              <div className="card-semantic-text">
                <h3 className="card-semantic-title">{title}</h3>
                <p className="card-body">{bodyText}</p>
              </div>
            </div>
            {showButtonGroup && (
              <div className="card-button-group">
                <button className="card-btn card-btn-error">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                      <path d="M7.00008 1.16699C10.2259 1.16699 12.8334 3.77449 12.8334 7.00033C12.8334 10.2262 10.2259 12.8337 7.00008 12.8337C3.77425 12.8337 1.16675 10.2262 1.16675 7.00033C1.16675 3.77449 3.77425 1.16699 7.00008 1.16699ZM9.09425 4.08366L7.00008 6.17783L4.90591 4.08366L4.08341 4.90616L6.17758 7.00033L4.08341 9.09449L4.90591 9.91699L7.00008 7.82283L9.09425 9.91699L9.91675 9.09449L7.82258 7.00033L9.91675 4.90616L9.09425 4.08366Z" fill="white"/>
                    </g>
                  </svg>
                  <span>Error button</span>
                </button>
                <button className="card-btn card-btn-ghost">
                  <AlarmIcon size={size} />
                  <span>Label</span>
                  <ArrowDownCircleIcon size={size} />
                </button>
              </div>
            )}
          </>
        );

      case 'info':
        return (
          <>
            <div className="card-semantic-content">
              <div className="card-semantic-icon">
                <InfoIcon />
              </div>
              <div className="card-semantic-text">
                <h3 className="card-semantic-title">{title}</h3>
                <p className="card-body">{bodyText}</p>
              </div>
            </div>
            {showButtonGroup && (
              <div className="card-button-group">
                <button className="card-btn card-btn-info">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                      <path d="M7.58341 5.25033H6.41675V4.08366H7.58341M7.58341 9.91699H6.41675V6.41699H7.58341M7.00008 1.16699C6.23404 1.16699 5.47549 1.31788 4.76776 1.61103C4.06003 1.90418 3.41697 2.33386 2.87529 2.87554C1.78133 3.9695 1.16675 5.45323 1.16675 7.00033C1.16675 8.54742 1.78133 10.0312 2.87529 11.1251C3.41697 11.6668 4.06003 12.0965 4.76776 12.3896C5.47549 12.6828 6.23404 12.8337 7.00008 12.8337C8.54718 12.8337 10.0309 12.2191 11.1249 11.1251C12.2188 10.0312 12.8334 8.54742 12.8334 7.00033C12.8334 6.23428 12.6825 5.47574 12.3894 4.76801C12.0962 4.06027 11.6665 3.41721 11.1249 2.87554C10.5832 2.33386 9.94013 1.90418 9.2324 1.61103C8.52467 1.31788 7.76613 1.16699 7.00008 1.16699Z" fill="white"/>
                    </g>
                  </svg>
                  <span>Info button</span>
                </button>
                <button className="card-btn card-btn-ghost">
                  <AlarmIcon size={size} />
                  <span>Label</span>
                  <ArrowDownCircleIcon size={size} />
                </button>
              </div>
            )}
          </>
        );

      case 'image':
        return (
          <>
            <div className="card-content">
              <div className="card-top-content">
                <div className="card-text">
                  <div className="card-header">
                    <h3 className="card-title">{title}</h3>
                  </div>
                  <p className="card-body">{bodyText}</p>
                </div>
                {shouldShowCloseIcon && (
                  <button
                    className="card-close-icon"
                    onClick={handleCloseClick}
                    aria-label="Close card"
                    type="button"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 6.41L6.41 5L12 10.59L17.59 5L19 6.41L13.41 12L19 17.59L17.59 19L12 13.41L6.41 19L5 17.59L10.59 12L5 6.41Z" fill="#9CA3AF"/>
                    </svg>
                  </button>
                )}
              </div>
              {showButtonGroup && (
                <div className="card-button-group">
                  <button className="card-btn card-btn-primary">
                    <AlarmIcon size={size} />
                    <span>Label</span>
                    <ArrowDownCircleIcon size={size} />
                  </button>
                  <button className="card-btn card-btn-ghost">
                    <AlarmIcon size={size} />
                    <span>Label</span>
                    <ArrowDownCircleIcon size={size} />
                  </button>
                </div>
              )}
            </div>
            <div className="card-image-container">
              <div className="card-image-wrapper">
                <svg className="card-image" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M62.5 52.5L50 67.5L32.5 45L10 75H80M0 80V10C0 4.45 4.5 0 10 0H80C82.6522 0 85.1957 1.05357 87.0711 2.92893C88.9464 4.8043 90 7.34784 90 10V80C90 82.6522 88.9464 85.1957 87.0711 87.0711C85.1957 88.9464 82.6522 90 80 90H10C7.34784 90 4.8043 88.9464 2.92893 87.0711C1.05357 85.1957 0 82.6522 0 80Z" fill="#9CA3AF"/>
                </svg>
              </div>
            </div>
          </>
        );

      case 'contained-image':
        return (
          <>
            <div className="card-contained-image-container">
              <div className="card-contained-image-wrapper">
                {/* Placeholder image - replace with actual image if needed */}
              </div>
            </div>
            <div className="card-content">
              <div className="card-top-content">
                <div className="card-text">
                  <div className="card-header">
                    <h3 className="card-title">{title}</h3>
                  </div>
                  <p className="card-body">{bodyText}</p>
                </div>
                {shouldShowCloseIcon && (
                  <button
                    className="card-close-icon"
                    onClick={handleCloseClick}
                    aria-label="Close card"
                    type="button"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 6.41L6.41 5L12 10.59L17.59 5L19 6.41L13.41 12L19 17.59L17.59 19L12 13.41L6.41 19L5 17.59L10.59 12L5 6.41Z" fill="#9CA3AF"/>
                    </svg>
                  </button>
                )}
              </div>
              {showButtonGroup && (
                <div className="card-button-group">
                  <button className="card-btn card-btn-primary">
                    <AlarmIcon size={size} />
                    <span>Label</span>
                    <ArrowDownCircleIcon size={size} />
                  </button>
                  <button className="card-btn card-btn-ghost">
                    <AlarmIcon size={size} />
                    <span>Label</span>
                    <ArrowDownCircleIcon size={size} />
                  </button>
                </div>
              )}
            </div>
          </>
        );

      case 'success':
        return (
          <>
            <div className="card-semantic-content">
              <div className="card-semantic-icon">
                <SuccessIcon />
              </div>
              <div className="card-semantic-text">
                <h3 className="card-semantic-title">{title}</h3>
                <p className="card-body">{bodyText}</p>
              </div>
            </div>
            {showButtonGroup && (
              <div className="card-button-group">
                <button className="card-btn card-btn-success">
                  <AlarmIcon size={size} />
                  <span>Label</span>
                  <ArrowDownCircleIcon size={size} />
                </button>
                <button className="card-btn card-btn-ghost">
                  <AlarmIcon size={size} />
                  <span>Label</span>
                  <ArrowDownCircleIcon size={size} />
                </button>
              </div>
            )}
          </>
        );

      case 'icon':
        return (
          <>
            <div className="card-icon-text">
              {icon || <AngleAcuteIcon size={size} />}
              <h3 className="card-icon-title">This is simple text</h3>
            </div>
            <p className="card-body">{bodyText}</p>
          </>
        );

      case 'empty-state':
        return (
          <div className="card-icon-text">
            {icon || <InboxFullIcon size={size} />}
            <h3 className="card-icon-title">This is simple text</h3>
          </div>
        );

      case 'text-only':
        return (
          <div className="card-text-only">
            <h3 className="card-text-only-title">This is simple text</h3>
            <p className="card-text-only-body">{bodyText}</p>
          </div>
        );

      case 'stat':
        return (
          <div className="card-stat-content">
            <div className="card-stat-value">{statValue}</div>
            <div className="card-stat-label">{statLabel}</div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={cardClasses}
      data-placement={placementAttribute}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      data-placement={placement}
      onKeyDown={(e) => {
        if (onClick && !disabled && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* For non-image cards, show close icon in top-right corner */}
      {shouldShowCloseIcon && type !== 'image' && type !== 'contained-image' && (
        <button
          className="card-close-icon"
          onClick={handleCloseClick}
          aria-label="Close card"
          type="button"
        >
          <CloseIcon />
        </button>
      )}
      {renderContent()}
    </div>
  );
};
