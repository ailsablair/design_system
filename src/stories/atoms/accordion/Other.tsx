import React, { useState } from 'react';
import './other.css';

export interface OtherProps {
  /** Accordion type - decorative (with icon), number (with number prefix), or label (with tag) */
  type?: 'decorative' | 'number' | 'label';
  /** State of the accordion */
  open?: boolean;
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Open icon type */
  openIconType?: 'chevron' | 'plus';
  /** Number prefix for number type */
  number?: string;
  /** Title text */
  title?: string;
  /** Tag label text for label type */
  tagLabel?: string;
  /** Content text for open state */
  content?: string;
  /** Additional CSS classes */
  className?: string;
  /** Callback when accordion is toggled */
  onToggle?: (isOpen: boolean) => void;
}

/**
 * Other Accordion Component
 * 
 * A flexible accordion component supporting multiple variants:
 * - Type: decorative (with decorative icon), number (with number prefix), or label (with tag)
 * - Size: small, default, large
 * - State: collapsed or expanded
 * - Open Icon: chevron or plus
 */
export const Other: React.FC<OtherProps> = ({
  type = 'decorative',
  open: controlledOpen,
  size = 'default',
  openIconType = 'chevron',
  number = '01',
  title = 'This is a decorative accordion...',
  tagLabel = 'Label',
  content = 'This is the text under an accordion heading. It can span for as long as needed, but I would suggest not exceeding a height of 600px for this width. If you need something taller, try our default sized accordions.',
  className = '',
  onToggle,
}) => {
  const [internalOpen, setInternalOpen] = useState(controlledOpen ?? false);
  
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const handleToggle = () => {
    const newOpenState = !isOpen;
    if (controlledOpen === undefined) {
      setInternalOpen(newOpenState);
    }
    if (onToggle) {
      onToggle(newOpenState);
    }
  };

  const accordionClasses = [
    'accordion-other',
    `accordion-other--type-${type}`,
    `accordion-other--size-${size}`,
    `accordion-other--${isOpen ? 'open' : 'closed'}`,
    `accordion-other--icon-${openIconType}`,
    className
  ].filter(Boolean).join(' ');

  const renderDecorativeIcon = () => {
    if (type !== 'decorative') return null;

    const iconSize = size === 'small' ? 14 : size === 'large' ? 18 : 18;
    const frameSize = size === 'small' ? 22 : 28;
    
    return (
      <div className="accordion-other__icon-frame">
        <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity={isOpen ? "0.8" : "0.5"}>
            <path d={size === 'small'
              ? "M12.2497 11.0834V11.6667H1.74967V11.0834L2.91634 9.91675V6.41675C2.91634 4.60841 4.10051 3.01591 5.83301 2.50258C5.83301 2.44425 5.83301 2.39175 5.83301 2.33341C5.83301 2.024 5.95592 1.72725 6.17472 1.50846C6.39351 1.28966 6.69026 1.16675 6.99967 1.16675C7.30909 1.16675 7.60584 1.28966 7.82463 1.50846C8.04342 1.72725 8.16634 2.024 8.16634 2.33341C8.16634 2.39175 8.16634 2.44425 8.16634 2.50258C9.89884 3.01591 11.083 4.60841 11.083 6.41675V9.91675L12.2497 11.0834ZM8.16634 12.2501C8.16634 12.5595 8.04342 12.8562 7.82463 13.075C7.60584 13.2938 7.30909 13.4167 6.99967 13.4167C6.69026 13.4167 6.39351 13.2938 6.17472 13.075C5.95592 12.8562 5.83301 12.5595 5.83301 12.2501M11.5205 1.86091L10.6922 2.68925C11.6897 3.67508 12.2497 5.01675 12.2497 6.41675H13.4163C13.4163 4.70758 12.7397 3.06258 11.5205 1.86091ZM0.583008 6.41675H1.74967C1.74967 5.01675 2.30967 3.67508 3.30717 2.68925L2.47884 1.86091C1.25967 3.06258 0.583008 4.70758 0.583008 6.41675Z"
              : "M15.75 14.25V15H2.25V14.25L3.75 12.75V8.25C3.75 5.925 5.2725 3.8775 7.5 3.2175C7.5 3.1425 7.5 3.075 7.5 3C7.5 2.60218 7.65804 2.22064 7.93934 1.93934C8.22064 1.65804 8.60218 1.5 9 1.5C9.39782 1.5 9.77936 1.65804 10.0607 1.93934C10.342 2.22064 10.5 2.60218 10.5 3C10.5 3.075 10.5 3.1425 10.5 3.2175C12.7275 3.8775 14.25 5.925 14.25 8.25V12.75L15.75 14.25ZM10.5 15.75C10.5 16.1478 10.342 16.5294 10.0607 16.8107C9.77936 17.092 9.39782 17.25 9 17.25C8.60218 17.25 8.22064 17.092 7.93934 16.8107C7.65804 16.5294 7.5 16.1478 7.5 15.75M14.8125 2.3925L13.7475 3.4575C15.03 4.725 15.75 6.45 15.75 8.25H17.25C17.25 6.0525 16.38 3.9375 14.8125 2.3925ZM0.75 8.25H2.25C2.25 6.45 2.97 4.725 4.2525 3.4575L3.1875 2.3925C1.62 3.9375 0.75 6.0525 0.75 8.25Z"
            } fill="#2F42BD"/>
          </g>
        </svg>
      </div>
    );
  };

  const renderTag = () => {
    if (type !== 'label') return null;

    return (
      <div className="accordion-other__tag">
        <div className="accordion-other__tag-label">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.6">
              <path d="M3.5 4.02516L2.2575 2.7885L3.08 1.966L4.31667 3.2085L3.5 4.02516ZM7.58333 0.583496V2.3335H6.41667V0.583496H7.58333ZM11.7425 2.7885L10.5 4.02516L9.68333 3.2085L10.92 1.966L11.7425 2.7885ZM2.625 6.12516V7.29183H0.875V6.12516H2.625ZM11.375 6.12516H13.125V7.29183H11.375V6.12516ZM3.5 11.6668H10.5C10.8094 11.6668 11.1062 11.7897 11.325 12.0085C11.5437 12.2273 11.6667 12.5241 11.6667 12.8335H2.33333C2.33333 12.5241 2.45625 12.2273 2.67504 12.0085C2.89383 11.7897 3.19058 11.6668 3.5 11.6668ZM7 2.91683C7.92826 2.91683 8.8185 3.28558 9.47487 3.94196C10.1313 4.59833 10.5 5.48857 10.5 6.41683V11.0835H3.5V6.41683C3.5 5.48857 3.86875 4.59833 4.52513 3.94196C5.1815 3.28558 6.07174 2.91683 7 2.91683Z" fill="white"/>
            </g>
          </svg>
          <span>{tagLabel}</span>
        </div>
      </div>
    );
  };

  const renderOpenCloseIcon = () => {
    const iconSize = size === 'small' ? 16 : size === 'large' ? 28 : 24;
    const buttonSize = size === 'small' ? 22 : size === 'large' ? 28 : 24;

    if (openIconType === 'plus') {
      if (isOpen) {
        // Minus icon when open
        return (
          <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <path d={size === 'small'
                ? "M12.6668 8.66659H3.3335V7.33325H12.6668V8.66659Z"
                : size === 'large'
                ? "M19 13H5V11H19V13Z"
                : "M15.8337 10.8334H4.16699V9.16675H15.8337V10.8334Z"
              } fill="#1C1C1C"/>
            </g>
          </svg>
        );
      }
      // Plus icon when closed
      return (
        <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d={size === 'small'
              ? "M12.6668 8.66683H8.66683V12.6668H7.3335V8.66683H3.3335V7.3335H7.3335V3.3335H8.66683V7.3335H12.6668V8.66683Z"
              : size === 'large'
              ? "M22.1668 15.1668H15.1668V22.1668H12.8335V15.1668H5.8335V12.8335H12.8335V5.8335H15.1668V12.8335H22.1668V15.1668Z"
              : "M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            } fill="#1C1C1C"/>
          </g>
        </svg>
      );
    }

    // Chevron icon
    if (isOpen) {
      return (
        <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d={size === 'small'
              ? "M4.94 10.2733L8 7.21992L11.06 10.2733L12 9.33325L8 5.33325L4 9.33325L4.94 10.2733Z"
              : size === 'large'
              ? "M8.645 17.9783L14 12.6349L19.355 17.9783L21 16.3333L14 9.33325L7 16.3333L8.645 17.9783Z"
              : "M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"
            } fill="#1C1C1C"/>
          </g>
        </svg>
      );
    }
    return (
      <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          <path d={size === 'small'
            ? "M4.94 5.72021L8 8.78022L11.06 5.72021L12 6.66688L8 10.6669L4 6.66688L4.94 5.72021Z"
            : size === 'large'
            ? "M8.645 10.0098L14 15.3648L19.355 10.0098L21 11.6664L14 18.6664L7 11.6664L8.645 10.0098Z"
            : "M7.41 8.58008L12 13.1701L16.59 8.58008L18 10.0001L12 16.0001L6 10.0001L7.41 8.58008Z"
          } fill="#1C1C1C"/>
        </g>
      </svg>
    );
  };

  const renderTitle = () => {
    if (type === 'number') {
      return (
        <div className="accordion-other__title-wrapper">
          <span className="accordion-other__number">{number}</span>
          <h3 className="accordion-other__title">{type === 'number' ? 'This is a numbered accordion list...' : title}</h3>
        </div>
      );
    }

    return <h3 className="accordion-other__title">{type === 'label' ? 'This is a label accordion list...' : title}</h3>;
  };

  return (
    <div className={accordionClasses}>
      <div className="accordion-other__header" onClick={handleToggle}>
        <div className="accordion-other__header-content">
          {renderDecorativeIcon()}
          {renderTitle()}
        </div>
        <div className="accordion-other__header-actions">
          {renderTag()}
          <button 
            className="accordion-other__toggle-button" 
            aria-label={isOpen ? 'Collapse' : 'Expand'}
            onClick={(e) => {
              e.stopPropagation();
              handleToggle();
            }}
          >
            {renderOpenCloseIcon()}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="accordion-other__body">
          <p className="accordion-other__body-text">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Other;
