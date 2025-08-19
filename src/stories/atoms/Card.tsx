import React from 'react';
import './card.css';
import { DefaultAlarmIcon, DefaultArrowDownCircleIcon } from '../foundations/Icon';

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

export const Card: React.FC<CardProps> = ({
  size = 'default',
  type = 'simple',
  bg = 'default',
  align = 'horizontal',
  dropShadow = true,
  placement = 'default',
  font = 'default',
  showCloseIcon = true,
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
