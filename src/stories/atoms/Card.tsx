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

// Default icons for different types
const DefaultAngleAcuteIcon = () => (
  <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M63.2982 60.0832H12.9863L44.8937 14.0088L50.0798 17.6138L35.7231 38.3583C40.8144 40.983 44.3245 46.2324 44.3245 52.304C44.3245 52.8099 44.3245 53.2843 44.2296 53.7586H63.2982V60.0832ZM25.0662 53.7586H37.8735C37.9999 53.2843 37.9999 52.8099 37.9999 52.304C37.9999 48.3195 35.5966 44.9675 32.1181 43.5761L25.0662 53.7586Z" fill="#0BA7EA"/>
  </svg>
);

const DefaultInboxFullIcon = () => (
  <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M69.5605 54.7724V18.2576H18.4397V54.7724H33.0456C33.0456 60.8339 37.9386 65.7268 44.0001 65.7268C50.0615 65.7268 54.9545 60.8339 54.9545 54.7724H69.5605ZM69.5605 10.9546C73.5771 10.9546 76.8634 14.2409 76.8634 18.2576V69.3783C76.8634 73.395 73.5771 76.6813 69.5605 76.6813H18.4397C14.3865 76.6813 11.1367 73.395 11.1367 69.3783V18.2576C11.1367 14.2409 14.3865 10.9546 18.4397 10.9546H69.5605ZM25.7427 47.4694V40.1665H62.2575V47.4694H25.7427ZM25.7427 32.8635V25.5605H62.2575V32.8635H25.7427Z" fill="#D6F0FB"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#9CA3AF"/>
  </svg>
);

// Simple icons for buttons
const DefaultAlarmIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M3.5 4.02516L2.2575 2.7885L3.08 1.966L4.31667 3.2085L3.5 4.02516ZM7.58333 0.583496V2.3335H6.41667V0.583496H7.58333ZM11.7425 2.7885L10.5 4.02516L9.68333 3.2085L10.92 1.966L11.7425 2.7885ZM2.625 6.12516V7.29183H0.875V6.12516H2.625ZM11.375 6.12516H13.125V7.29183H11.375V6.12516ZM3.5 11.6668H10.5C10.8094 11.6668 11.1062 11.7897 11.325 12.0085C11.5437 12.2273 11.6667 12.5241 11.6667 12.8335H2.33333C2.33333 12.5241 2.45625 12.2273 2.67504 12.0085C2.89383 11.7897 3.19058 11.6668 3.5 11.6668ZM7 2.91683C7.92826 2.91683 8.8185 3.28558 9.47487 3.94196C10.1313 4.59833 10.5 5.48857 10.5 6.41683V11.0835H3.5V6.41683C3.5 5.48857 3.86875 4.59833 4.52513 3.94196C5.1815 3.28558 6.07174 2.91683 7 2.91683Z" fill="white"/>
    </g>
  </svg>
);

const DefaultArrowDownCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M6.41675 3.49984V8.1665L4.37508 6.12484L3.54675 6.95317L7.00008 10.4065L10.4534 6.95317L9.62508 6.12484L7.58341 8.1665V3.49984H6.41675ZM7.00008 12.8332C6.23404 12.8332 5.47549 12.6823 4.76776 12.3891C4.06003 12.096 3.41697 11.6663 2.87529 11.1246C1.78133 10.0307 1.16675 8.54693 1.16675 6.99984C1.16675 5.45274 1.78133 3.96901 2.87529 2.87505C3.96925 1.78109 5.45298 1.1665 7.00008 1.1665C7.76613 1.1665 8.52467 1.31739 9.2324 1.61054C9.94013 1.90369 10.5832 2.33337 11.1249 2.87505C11.6665 3.41672 12.0962 4.05978 12.3894 4.76752C12.6825 5.47525 12.8334 6.23379 12.8334 6.99984C12.8334 8.54693 12.2188 10.0307 11.1249 11.1246C10.0309 12.2186 8.54718 12.8332 7.00008 12.8332Z" fill="white"/>
    </g>
  </svg>
);

export const Card: React.FC<CardProps> = ({
  size = 'default',
  type = 'simple',
  bg = 'default',
  align = 'horizontal',
  dropShadow = true,
  placement = 'default', // Used for future extensibility
  font = 'default',
  showCloseIcon = true,
  showButtonGroup = true,
  showIcon = true, // Used for future extensibility
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

  const cardClasses = [
    'card',
    `card-size-${size}`,
    `card-type-${type}`,
    `card-bg-${bg}`,
    `card-align-${align}`,
    dropShadow ? 'card-shadow' : 'card-no-shadow',
    onClick ? 'card-clickable' : '',
    disabled ? 'card-disabled' : '',
    className
  ].filter(Boolean).join(' ');

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
                      {showCloseIcon && (
                        <button className="card-close-btn" aria-label="Close">
                          <CloseIcon />
                        </button>
                      )}
                    </div>
                    <p className="card-subtitle">{subtitle}</p>
                  </div>
                  <p className="card-body">{bodyText}</p>
                </div>
                {showCloseIcon && align === 'horizontal' && size !== 'small' && (
                  <button className="card-close-btn-horizontal" aria-label="Close">
                    <CloseIcon />
                  </button>
                )}
              </div>
            ) : (
              <div className="card-text">
                <div className="card-headings">
                  <div className="card-header-close">
                    <h3 className="card-title">{title}</h3>
                    {showCloseIcon && (
                      <button className="card-close-btn-vertical" aria-label="Close">
                        <CloseIcon />
                      </button>
                    )}
                  </div>
                  <p className="card-subtitle">{subtitle}</p>
                </div>
                <p className="card-body">{bodyText}</p>
              </div>
            )}
            {showButtonGroup && (
              <div className="card-button-group">
                <button className="card-btn card-btn-primary">
                  <DefaultAlarmIcon />
                  <span>Label</span>
                  <DefaultArrowDownCircleIcon />
                </button>
                <button className="card-btn card-btn-ghost">
                  <DefaultAlarmIcon />
                  <span>Label</span>
                  <DefaultArrowDownCircleIcon />
                </button>
              </div>
            )}
          </>
        );

      case 'icon':
        return (
          <div className="card-icon-content">
            <div className="card-icon-text">
              {icon || <DefaultAngleAcuteIcon />}
              <h3 className="card-icon-title">This is simple text</h3>
            </div>
            <p className="card-body">{bodyText}</p>
          </div>
        );

      case 'empty-state':
        return (
          <div className="card-icon-content">
            <div className="card-icon-text">
              {icon || <DefaultInboxFullIcon />}
              <h3 className="card-icon-title">This is simple text</h3>
            </div>
          </div>
        );

      case 'text-only':
        return (
          <div className="card-text-only">
            <div className="card-icon-text">
              <h3 className="card-text-only-title">This is simple text</h3>
            </div>
            <div className="card-icon-text-stretch">
              <p className="card-text-only-body">{bodyText}</p>
            </div>
          </div>
        );

      case 'stat':
        return (
          <div className="card-stat-content">
            <div className={`card-stat-text ${font !== 'default' ? `card-stat-${font}` : ''}`}>
              <div className="card-stat-value">{statValue}</div>
              <div className="card-stat-label">{statLabel}</div>
            </div>
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
      {renderContent()}
    </div>
  );
};
