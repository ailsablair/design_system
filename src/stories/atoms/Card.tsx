import React from 'react';
import './card.css';

export interface CardProps {
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Card type */
  type?: 'simple' | 'icon' | 'text-only' | 'empty-state' | 'stat';
  /** Background color variant */
  bg?: 'default';
  /** Alignment */
  align?: 'horizontal' | 'vertical';
  /** Drop shadow */
  dropShadow?: boolean;
  /** Placement for icon types */
  placement?: 'default' | 'n/a';
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
}

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
}) => {
  // Suppress unused variable warnings for props that are kept for API completeness
  void placement;
  void showIcon;
  
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

  // Determine if close icon should be shown based on card type
  const shouldShowCloseIcon = showCloseIcon && (type === 'simple' || type === 'text-only' || children);

  // If custom children are provided, use them
  if (children) {
    return (
      <div
        className={cardClasses}
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
                    <div className="card-header-close">
                      <div className="card-header">
                        <h3 className="card-title">{title}</h3>
                      </div>
                    </div>
                    <p className="card-subtitle">{subtitle}</p>
                  </div>
                  <p className="card-body">{bodyText}</p>
                </div>
              </div>
            ) : (
              <div className="card-text">
                <div className="card-headings">
                  <div className="card-header-close">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-subtitle">{subtitle}</p>
                  </div>
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
            <div className="card-text-only-header">
              <h3 className="card-text-only-title">This is simple text</h3>
            </div>
            <div className="card-text-only-body-wrapper">
              <p className="card-text-only-body">{bodyText}</p>
            </div>
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
      {renderContent()}
    </div>
  );
};
