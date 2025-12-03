import React, { useState } from 'react';
import './accordionSimple.css';
import AccordionStatus from './AccordionStatus';

export interface AccordionSimpleProps {
  /** Accordion type - simple (with status icon) or no-stroke (title only) */
  type?: 'simple' | 'no-stroke';
  /** State of the accordion */
  state?: 'default' | 'open';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Open icon type */
  openIcon?: 'chevron' | 'plus';
  /** Status type for simple variant */
  statusType?: 'warning' | 'complete' | 'locked' | 'comments' | 'notifications' | 'error' | 'note';
  /** Show notification icon */
  showNotificationIcon?: boolean;
  /** Title text */
  title?: string;
  /** Description text */
  description?: string;
  /** Content text for open state */
  content?: string;
  /** Additional CSS classes */
  className?: string;
  /** Controlled state - if provided, component is controlled */
  isOpen?: boolean;
  /** Callback when accordion is toggled */
  onToggle?: (isOpen: boolean) => void;
}

/**
 * AccordionSimple Component
 * 
 * A flexible accordion component with status indicators, supporting multiple variants:
 * - Type: simple (with status icon) or no-stroke (without status icon)
 * - Size: small, default, large
 * - State: default (collapsed) or open (expanded)
 * - Open Icon: chevron or plus
 */
export const AccordionSimple: React.FC<AccordionSimpleProps> = ({
  type = 'simple',
  state = 'default',
  size = 'default',
  openIcon = 'chevron',
  statusType = 'complete',
  showNotificationIcon = true,
  title = 'This is a section title taking up a lot of space...',
  description = 'This is supporting text to help describe the content within the accordion',
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  className = '',
  isOpen,
  onToggle,
}) => {
  const [internalOpen, setInternalOpen] = useState(state === 'open');
  
  const isControlled = isOpen !== undefined;
  const open = isControlled ? isOpen : internalOpen;

  const handleToggle = () => {
    const newOpenState = !open;
    if (!isControlled) {
      setInternalOpen(newOpenState);
    }
    if (onToggle) {
      onToggle(newOpenState);
    }
  };

  const accordionClasses = [
    'accordion-simple',
    `accordion-simple--type-${type}`,
    `accordion-simple--size-${size}`,
    `accordion-simple--state-${open ? 'open' : 'default'}`,
    `accordion-simple--icon-${openIcon}`,
    className
  ].filter(Boolean).join(' ');

  const renderOpenIcon = () => {
    const iconSize = size === 'small' ? 20 : size === 'large' ? 32 : 28;
    
    if (openIcon === 'plus') {
      if (open) {
        return (
          <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={`M${iconSize * 0.791} ${iconSize * 0.542}H${iconSize * 0.208}V${iconSize * 0.458}H${iconSize * 0.791}V${iconSize * 0.542}Z`} fill="var(--primary-blue-blue, #2F42BD)"/>
          </svg>
        );
      }
      return (
        <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={size === 'small' 
            ? "M15.8332 10.8333H10.8332V15.8333H9.1665V10.8333H4.1665V9.16663H9.1665V4.16663H10.8332V9.16663H15.8332V10.8333Z"
            : size === 'large'
            ? "M25.3332 17.3333H17.3332V25.3333H14.6665V17.3333H6.6665V14.6666H14.6665V6.66663H17.3332V14.6666H25.3332V17.3333Z"
            : "M22.1663 15.1667H15.1663V22.1667H12.833V15.1667H5.83301V12.8334H12.833V5.83337H15.1663V12.8334H22.1663V15.1667Z"
          } fill="var(--primary-blue-blue, #2F42BD)"/>
        </svg>
      );
    }
    
    if (open) {
      return (
        <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={size === 'small'
            ? "M6.175 12.8416L10 9.02496L13.825 12.8416L15 11.6666L10 6.66663L5 11.6666L6.175 12.8416Z"
            : size === 'large'
            ? "M9.88 20.5466L16 14.44L22.12 20.5466L24 18.6666L16 10.6666L8 18.6666L9.88 20.5466Z"
            : "M8.645 17.9784L14 12.635L19.355 17.9784L21 16.3334L14 9.33337L7 16.3334L8.645 17.9784Z"
          } fill="var(--primary-blue-blue, #2F42BD)"/>
        </svg>
      );
    }
    
    return (
      <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={size === 'small'
          ? "M6.175 7.15002L10 10.975L13.825 7.15002L15 8.33336L10 13.3334L5 8.33336L6.175 7.15002Z"
          : size === 'large'
          ? "M9.88 11.4399L16 17.5599L22.12 11.4399L24 13.3333L16 21.3333L8 13.3333L9.88 11.4399Z"
          : "M8.645 10.01L14 15.365L19.355 10.01L21 11.6667L14 18.6667L7 11.6667L8.645 10.01Z"
        } fill="var(--primary-blue-blue, #2F42BD)"/>
      </svg>
    );
  };

  const renderNotificationIcon = () => {
    const iconSize = size === 'small' ? 18 : size === 'large' ? 26 : 22;
    
    return (
      <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          <path d={size === 'small'
            ? "M15.75 14.25V15H2.25V14.25L3.75 12.75V8.25C3.75 5.925 5.2725 3.8775 7.5 3.2175C7.5 3.1425 7.5 3.075 7.5 3C7.5 2.60218 7.65804 2.22064 7.93934 1.93934C8.22064 1.65804 8.60218 1.5 9 1.5C9.39782 1.5 9.77936 1.65804 10.0607 1.93934C10.342 2.22064 10.5 2.60218 10.5 3C10.5 3.075 10.5 3.1425 10.5 3.2175C12.7275 3.8775 14.25 5.925 14.25 8.25V12.75L15.75 14.25ZM10.5 15.75C10.5 16.1478 10.342 16.5294 10.0607 16.8107C9.77936 17.092 9.39782 17.25 9 17.25C8.60218 17.25 8.22064 17.092 7.93934 16.8107C7.65804 16.5294 7.5 16.1478 7.5 15.75M14.8125 2.3925L13.7475 3.4575C15.03 4.725 15.75 6.45 15.75 8.25H17.25C17.25 6.0525 16.38 3.9375 14.8125 2.3925ZM0.75 8.25H2.25C2.25 6.45 2.97 4.725 4.2525 3.4575L3.1875 2.3925C1.62 3.9375 0.75 6.0525 0.75 8.25Z"
            : size === 'large'
            ? "M22.7497 20.5833V21.6666H3.24967V20.5833L5.41634 18.4166V11.9166C5.41634 8.55829 7.61551 5.60079 10.833 4.64746C10.833 4.53913 10.833 4.44163 10.833 4.33329C10.833 3.75866 11.0613 3.20756 11.4676 2.80123C11.8739 2.3949 12.425 2.16663 12.9997 2.16663C13.5743 2.16663 14.1254 2.3949 14.5317 2.80123C14.9381 3.20756 15.1663 3.75866 15.1663 4.33329C15.1663 4.44163 15.1663 4.53913 15.1663 4.64746C18.3838 5.60079 20.583 8.55829 20.583 11.9166V18.4166L22.7497 20.5833ZM15.1663 22.75C15.1663 23.3246 14.9381 23.8757 14.5317 24.282C14.1254 24.6884 13.5743 24.9166 12.9997 24.9166C12.425 24.9166 11.8739 24.6884 11.4676 24.282C11.0613 23.8757 10.833 23.3246 10.833 22.75M21.3955 3.45579L19.8572 4.99413C21.7097 6.82496 22.7497 9.31663 22.7497 11.9166H24.9163C24.9163 8.74246 23.6597 5.68746 21.3955 3.45579ZM1.08301 11.9166H3.24967C3.24967 9.31663 4.28967 6.82496 6.14217 4.99413L4.60384 3.45579C2.33967 5.68746 1.08301 8.74246 1.08301 11.9166Z"
            : "M19.2503 17.4167V18.3334H2.75033V17.4167L4.58366 15.5834V10.0834C4.58366 7.24171 6.44449 4.73921 9.16699 3.93254C9.16699 3.84087 9.16699 3.75837 9.16699 3.66671C9.16699 3.18048 9.36015 2.71416 9.70396 2.37034C10.0478 2.02653 10.5141 1.83337 11.0003 1.83337C11.4866 1.83337 11.9529 2.02653 12.2967 2.37034C12.6405 2.71416 12.8337 3.18048 12.8337 3.66671C12.8337 3.75837 12.8337 3.84087 12.8337 3.93254C15.5562 4.73921 17.417 7.24171 17.417 10.0834V15.5834L19.2503 17.4167ZM12.8337 19.25C12.8337 19.7363 12.6405 20.2026 12.2967 20.5464C11.9529 20.8902 11.4866 21.0834 11.0003 21.0834C10.5141 21.0834 10.0478 20.8902 9.70396 20.5464C9.36015 20.2026 9.16699 19.7363 9.16699 19.25M18.1045 2.92421L16.8028 4.22587C18.3703 5.77504 19.2503 7.88337 19.2503 10.0834H21.0837C21.0837 7.39754 20.0203 4.81254 18.1045 2.92421ZM0.916992 10.0834H2.75033C2.75033 7.88337 3.63033 5.77504 5.19783 4.22587L3.89616 2.92421C1.98033 4.81254 0.916992 7.39754 0.916992 10.0834Z"
          } fill="var(--primary-blue-blue, #2F42BD)"/>
        </g>
      </svg>
    );
  };

  return (
    <div className={accordionClasses}>
      {type === 'simple' && (
        <AccordionStatus 
          type={statusType} 
          size={size} 
        />
      )}
      
      {showNotificationIcon && (
        <div className="accordion-simple__notification-icon">
          {renderNotificationIcon()}
        </div>
      )}
      
      <div className="accordion-simple__content-wrapper">
        <div className="accordion-simple__header" onClick={handleToggle}>
          <div className="accordion-simple__text-content">
            <h3 className="accordion-simple__title">{title}</h3>
            {type === 'simple' && !open && description && (
              <p className="accordion-simple__description">{description}</p>
            )}
            {type === 'simple' && open && description && (
              <p className="accordion-simple__description">{description}</p>
            )}
            {type === 'no-stroke' && (
              <p className="accordion-simple__description-hidden">{description}</p>
            )}
          </div>
          
          <button className="accordion-simple__toggle-button" aria-label={open ? 'Collapse' : 'Expand'}>
            {renderOpenIcon()}
          </button>
        </div>
        
        {open && (
          <div className="accordion-simple__body">
            <p className="accordion-simple__body-text">{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionSimple;
