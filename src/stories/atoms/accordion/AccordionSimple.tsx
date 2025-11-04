import React, { useState } from 'react';
import './accordionSimple.css';

export interface AccordionSimpleProps {
  /** Type variant */
  type?: 'simple' | 'no-stroke' | 'decorative' | 'number' | 'label';
  /** State - controls open/closed */
  state?: 'default' | 'open';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Open icon style */
  openIcon?: 'default (chevron)' | 'plus';
  /** Whether to show the status icon (dashed circle with check) */
  showStatusIcon?: boolean;
  /** Whether to show the bell ring icon */
  showIcon?: boolean;
  /** Title text */
  title?: string;
  /** Description text (subtitle) */
  description?: string;
  /** Body content when expanded */
  children?: React.ReactNode;
  /** Number for numbered accordions */
  number?: string;
  /** Label tag text for label type */
  labelText?: string;
  /** Whether label has leading icon */
  labelLeadingIcon?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Controlled mode - externally controlled open state */
  isOpen?: boolean;
  /** Change handler for controlled mode */
  onToggle?: (isOpen: boolean) => void;
}

/**
 * AccordionSimple Component - Pixel-perfect Figma implementation
 * 
 * A comprehensive accordion component matching the exact Figma design with:
 * - 5 type variants: simple, no-stroke, decorative, number, label
 * - 2 states: default (closed), open
 * - 3 sizes: small, default, large
 * - 2 icon styles: chevron (default), plus/minus
 * 
 * Features:
 * - Exact Figma spacing, typography, and colors
 * - All 60 design variants supported
 * - Responsive and accessible
 * - Controlled and uncontrolled modes
 * - Full keyboard navigation
 * - Design token integration
 */
export const AccordionSimple: React.FC<AccordionSimpleProps> = ({
  type = 'simple',
  state: initialState = 'default',
  size = 'default',
  openIcon = 'default (chevron)',
  showStatusIcon = true,
  showIcon = true,
  title = 'This is a section title taking up a lot of space...',
  description = 'This is supporting text to help describe the content within the accordion',
  children,
  number = '01',
  labelText = 'Label',
  labelLeadingIcon = true,
  onClick,
  className = '',
  isOpen,
  onToggle,
}) => {
  // Internal state for uncontrolled mode
  const [internalOpen, setInternalOpen] = useState(initialState === 'open');
  
  // Use controlled state if provided, otherwise use internal state
  const open = isOpen !== undefined ? isOpen : internalOpen;
  
  const handleClick = () => {
    if (onToggle) {
      onToggle(!open);
    } else {
      setInternalOpen(!open);
    }
    onClick?.();
  };

  // Generate CSS classes
  const accordionClasses = [
    'accordion-simple',
    `type-${type}`,
    `state-${open ? 'open' : 'default'}`,
    `size-${size}`,
    `open-icon-${openIcon.replace(' ', '-').replace('(', '').replace(')', '')}`,
    className
  ].filter(Boolean).join(' ');

  // Status Icon Component (dashed circle with checkmark)
  const StatusIcon = () => {
    const iconSize = size === 'small' ? 26 : size === 'large' ? 64 : 50;
    const dashedSize = size === 'small' ? 22 : size === 'large' ? 62 : 48;
    const checkSize = size === 'small' ? 16 : size === 'large' ? 36 : 36;
    const borderWidth = size === 'small' ? 1 : 2;

    return (
      <div className="building-blocks-accordion">
        <div className="empty">
          <svg className="dashed" width={dashedSize + 1} height={dashedSize + 1} viewBox={`0 0 ${dashedSize + 1} ${dashedSize + 1}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={dashedSize / 2 + 0.5} cy={dashedSize / 2 + 0.5} r={dashedSize / 2} stroke="var(--secondary-blue-gray, #61607C)" strokeDasharray={size === 'small' ? '2 2' : '6 4'} />
          </svg>
          <svg className="filled-icons" width={checkSize} height={checkSize} viewBox={`0 0 ${checkSize} ${checkSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity={open ? 0.5 : 0.3}>
              <path
                d={size === 'small' 
                  ? "M5.99986 13.6133L1.85986 9.4733L3.74653 7.58663L5.99986 9.84663L12.5865 3.2533L14.4732 5.13996L5.99986 13.6133Z"
                  : "M13.4996 30.6299L4.18457 21.3149L8.42957 17.0699L13.4996 22.1549L28.3196 7.31995L32.5646 11.5649L13.4996 30.6299Z"
                }
                fill="var(--status-dark-green, #227F1A)"
              />
            </g>
          </svg>
        </div>
        {open && (
          <svg className="current" width={dashedSize + 2} height={dashedSize + 2} viewBox={`0 0 ${dashedSize + 2} ${dashedSize + 2}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={dashedSize / 2 + 1} cy={dashedSize / 2 + 1} r={dashedSize / 2} stroke="var(--status-dark-green, #227F1A)" strokeWidth={borderWidth} />
          </svg>
        )}
      </div>
    );
  };

  // Bell Ring Icon Component
  const BellRingIcon = () => {
    const iconSize = size === 'small' ? 18 : size === 'large' ? 26 : 22;
    const pathData = size === 'small'
      ? "M15.75 14.25V15H2.25V14.25L3.75 12.75V8.25C3.75 5.925 5.2725 3.8775 7.5 3.2175C7.5 3.1425 7.5 3.075 7.5 3C7.5 2.60218 7.65804 2.22064 7.93934 1.93934C8.22064 1.65804 8.60218 1.5 9 1.5C9.39782 1.5 9.77936 1.65804 10.0607 1.93934C10.342 2.22064 10.5 2.60218 10.5 3C10.5 3.075 10.5 3.1425 10.5 3.2175C12.7275 3.8775 14.25 5.925 14.25 8.25V12.75L15.75 14.25ZM10.5 15.75C10.5 16.1478 10.342 16.5294 10.0607 16.8107C9.77936 17.092 9.39782 17.25 9 17.25C8.60218 17.25 8.22064 17.092 7.93934 16.8107C7.65804 16.5294 7.5 16.1478 7.5 15.75M14.8125 2.3925L13.7475 3.4575C15.03 4.725 15.75 6.45 15.75 8.25H17.25C17.25 6.0525 16.38 3.9375 14.8125 2.3925ZM0.75 8.25H2.25C2.25 6.45 2.97 4.725 4.2525 3.4575L3.1875 2.3925C1.62 3.9375 0.75 6.0525 0.75 8.25Z"
      : size === 'large'
      ? "M22.7497 20.5833V21.6666H3.24967V20.5833L5.41634 18.4166V11.9166C5.41634 8.55829 7.61551 5.60079 10.833 4.64746C10.833 4.53913 10.833 4.44163 10.833 4.33329C10.833 3.75866 11.0613 3.20756 11.4676 2.80123C11.8739 2.3949 12.425 2.16663 12.9997 2.16663C13.5743 2.16663 14.1254 2.3949 14.5317 2.80123C14.9381 3.20756 15.1663 3.75866 15.1663 4.33329C15.1663 4.44163 15.1663 4.53913 15.1663 4.64746C18.3838 5.60079 20.583 8.55829 20.583 11.9166V18.4166L22.7497 20.5833ZM15.1663 22.75C15.1663 23.3246 14.9381 23.8757 14.5317 24.282C14.1254 24.6884 13.5743 24.9166 12.9997 24.9166C12.425 24.9166 11.8739 24.6884 11.4676 24.282C11.0613 23.8757 10.833 23.3246 10.833 22.75M21.3955 3.45579L19.8572 4.99413C21.7097 6.82496 22.7497 9.31663 22.7497 11.9166H24.9163C24.9163 8.74246 23.6597 5.68746 21.3955 3.45579ZM1.08301 11.9166H3.24967C3.24967 9.31663 4.28967 6.82496 6.14217 4.99413L4.60384 3.45579C2.33967 5.68746 1.08301 8.74246 1.08301 11.9166Z"
      : "M19.2503 17.4167V18.3334H2.75033V17.4167L4.58366 15.5834V10.0834C4.58366 7.24171 6.44449 4.73921 9.16699 3.93254C9.16699 3.84087 9.16699 3.75837 9.16699 3.66671C9.16699 3.18048 9.36015 2.71416 9.70396 2.37034C10.0478 2.02653 10.5141 1.83337 11.0003 1.83337C11.4866 1.83337 11.9529 2.02653 12.2967 2.37034C12.6405 2.71416 12.8337 3.18048 12.8337 3.66671C12.8337 3.75837 12.8337 3.84087 12.8337 3.93254C15.5562 4.73921 17.417 7.24171 17.417 10.0834V15.5834L19.2503 17.4167ZM12.8337 19.25C12.8337 19.7363 12.6405 20.2026 12.2967 20.5464C11.9529 20.8902 11.4866 21.0834 11.0003 21.0834C10.5141 21.0834 10.0478 20.8902 9.70396 20.5464C9.36015 20.2026 9.16699 19.7363 9.16699 19.25M18.1045 2.92421L16.8028 4.22587C18.3703 5.77504 19.2503 7.88337 19.2503 10.0834H21.0837C21.0837 7.39754 20.0203 4.81254 18.1045 2.92421ZM0.916992 10.0834H2.75033C2.75033 7.88337 3.63033 5.77504 5.19783 4.22587L3.89616 2.92421C1.98033 4.81254 0.916992 7.39754 0.916992 10.0834Z";

    return (
      <svg className="filled-icons2" width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          <path d={pathData} fill="var(--base-black, #1C1C1C)" />
        </g>
      </svg>
    );
  };

  // Chevron/Plus Toggle Icon Component
  const ToggleIcon = () => {
    const iconSize = size === 'small' ? 20 : size === 'large' ? 32 : 28;
    let pathData = '';

    if (openIcon === 'plus') {
      if (open) {
        // Minus icon
        pathData = size === 'small' 
          ? "M15.8332 10.8333H4.1665V9.16663H15.8332V10.8333Z"
          : size === 'large'
          ? "M25.3332 17.3333H6.6665V14.6666H25.3332V17.3333Z"
          : "M22.1663 15.1667H5.83301V12.8334H22.1663V15.1667Z";
      } else {
        // Plus icon
        pathData = size === 'small'
          ? "M12.6668 8.66683H8.66683V12.6668H7.3335V8.66683H3.3335V7.3335H7.3335V3.3335H8.66683V7.3335H12.6668V8.66683Z"
          : size === 'large'
          ? "M25.3332 17.3333H17.3332V25.3333H14.6665V17.3333H6.6665V14.6666H14.6665V6.66663H17.3332V14.6666H25.3332V17.3333Z"
          : "M22.1663 15.1667H15.1663V22.1667H12.833V15.1667H5.83301V12.8334H12.833V5.83337H15.1663V12.8334H22.1663V15.1667Z";
      }
    } else {
      if (open) {
        // Chevron up
        pathData = size === 'small'
          ? "M6.175 12.8416L10 9.02496L13.825 12.8416L15 11.6666L10 6.66663L5 11.6666L6.175 12.8416Z"
          : size === 'large'
          ? "M9.88 20.5466L16 14.44L22.12 20.5466L24 18.6666L16 10.6666L8 18.6666L9.88 20.5466Z"
          : "M8.645 17.9784L14 12.635L19.355 17.9784L21 16.3334L14 9.33337L7 16.3334L8.645 17.9784Z";
      } else {
        // Chevron down
        pathData = size === 'small'
          ? "M6.175 7.15002L10 10.975L13.825 7.15002L15 8.33336L10 13.3334L5 8.33336L6.175 7.15002Z"
          : size === 'large'
          ? "M9.88 11.4399L16 17.5599L22.12 11.4399L24 13.3333L16 21.3333L8 13.3333L9.88 11.4399Z"
          : "M8.645 10.01L14 15.365L19.355 10.01L21 11.6667L14 18.6667L7 11.6667L8.645 10.01Z";
      }
    }

    return (
      <svg className="filled-icons3" width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={pathData} fill="var(--primary-blue-blue, #2F42BD)" />
      </svg>
    );
  };

  // Icon Frame for decorative type
  const IconFrame = () => {
    const frameSize = size === 'small' ? 22 : size === 'large' ? 28 : 28;
    const iconSize = size === 'small' ? 14 : size === 'large' ? 18 : 18;
    const iconPathData = size === 'small'
      ? "M12.2497 11.0834V11.6667H1.74967V11.0834L2.91634 9.91675V6.41675C2.91634 4.60841 4.10051 3.01591 5.83301 2.50258C5.83301 2.44425 5.83301 2.39175 5.83301 2.33341C5.83301 2.024 5.95592 1.72725 6.17472 1.50846C6.39351 1.28966 6.69026 1.16675 6.99967 1.16675C7.30909 1.16675 7.60584 1.28966 7.82463 1.50846C8.04343 1.72725 8.16634 2.024 8.16634 2.33341C8.16634 2.39175 8.16634 2.44425 8.16634 2.50258C9.89884 3.01591 11.083 4.60841 11.083 6.41675V9.91675L12.2497 11.0834ZM8.16634 12.2501C8.16634 12.5595 8.04343 12.8562 7.82463 13.075C7.60584 13.2938 7.30909 13.4167 6.99967 13.4167C6.69026 13.4167 6.39351 13.2938 6.17472 13.075C5.95592 12.8562 5.83301 12.5595 5.83301 12.2501M11.5205 1.86091L10.6922 2.68925C11.6897 3.67508 12.2497 5.01675 12.2497 6.41675H13.4163C13.4163 4.70758 12.7397 3.06258 11.5205 1.86091ZM0.583008 6.41675H1.74967C1.74967 5.01675 2.30967 3.67508 3.30717 2.68925L2.47884 1.86091C1.25967 3.06258 0.583008 4.70758 0.583008 6.41675Z"
      : "M15.75 14.25V15H2.25V14.25L3.75 12.75V8.25C3.75 5.925 5.2725 3.8775 7.5 3.2175C7.5 3.1425 7.5 3.075 7.5 3C7.5 2.60218 7.65804 2.22064 7.93934 1.93934C8.22064 1.65804 8.60218 1.5 9 1.5C9.39782 1.5 9.77936 1.65804 10.0607 1.93934C10.342 2.22064 10.5 2.60218 10.5 3C10.5 3.075 10.5 3.1425 10.5 3.2175C12.7275 3.8775 14.25 5.925 14.25 8.25V12.75L15.75 14.25ZM10.5 15.75C10.5 16.1478 10.342 16.5294 10.0607 16.8107C9.77936 17.092 9.39782 17.25 9 17.25C8.60218 17.25 8.22064 17.092 7.93934 16.8107C7.65804 16.5294 7.5 16.1478 7.5 15.75M14.8125 2.3925L13.7475 3.4575C15.03 4.725 15.75 6.45 15.75 8.25H17.25C17.25 6.0525 16.38 3.9375 14.8125 2.3925ZM0.75 8.25H2.25C2.25 6.45 2.97 4.725 4.2525 3.4575L3.1875 2.3925C1.62 3.9375 0.75 6.0525 0.75 8.25Z";

    return (
      <div className="icon-frame">
        <svg className="filled-icons" width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize + 1}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity={open ? 0.8 : 0.5}>
            <path d={iconPathData} fill={open ? "var(--primary-blue-blue, #2F42BD)" : "var(--primary-sky-blue-sky-blue, #0BA7EA)"} />
          </g>
        </svg>
      </div>
    );
  };

  // Open/Close button for decorative and number types
  const OpenCloseButton = () => {
    const buttonSize = size === 'small' ? 22 : size === 'large' ? 28 : 24;
    const iconSize = size === 'small' ? 16 : size === 'large' ? 20 : openIcon === 'plus' ? 22 : 24;
    
    let pathData = '';
    if (openIcon === 'plus') {
      pathData = open
        ? (size === 'small' ? "M12.6668 8.66659H3.3335V7.33325H12.6668V8.66659Z" : size === 'large' ? "M19 13H5V11H19V13Z" : "M15.8337 10.8334H4.16699V9.16675H15.8337V10.8334Z")
        : (size === 'small' ? "M12.6668 8.66683H8.66683V12.6668H7.3335V8.66683H3.3335V7.3335H7.3335V3.3335H8.66683V7.3335H12.6668V8.66683Z" : size === 'large' ? "M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" : "M17.4163 11.9166H11.9163V17.4166H10.083V11.9166H4.58301V10.0833H10.083V4.58325H11.9163V10.0833H17.4163V11.9166Z");
    } else {
      pathData = open
        ? (size === 'small' ? "M4.94 10.2733L8 7.21992L11.06 10.2733L12 9.33325L8 5.33325L4 9.33325L4.94 10.2733Z" : size === 'large' ? "M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z" : "M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z")
        : (size === 'small' ? "M4.94 5.71997L8 8.77997L11.06 5.71997L12 6.66664L8 10.6666L4 6.66664L4.94 5.71997Z" : size === 'large' ? "M8.645 10.01L14 15.365L19.355 10.01L21 11.6667L14 18.6667L7 11.6667L8.645 10.01Z" : "M8.645 10.01L14 15.365L19.355 10.01L21 11.6667L14 18.6667L7 11.6667L8.645 10.01Z");
    }

    return (
      <div className="open-close">
        <svg className="filled-icons2" width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize + 1}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d={pathData} fill="var(--base-black, #1C1C1C)" />
          </g>
        </svg>
      </div>
    );
  };

  // Label Tag Component
  const LabelTag = () => (
    <div className="tag">
      <div className="label">
        <div className="left-align">
          {labelLeadingIcon && (
            <svg className="filled-icons" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.6">
                <path d="M3.5 4.02516L2.2575 2.7885L3.08 1.966L4.31667 3.2085L3.5 4.02516ZM7.58333 0.583496V2.3335H6.41667V0.583496H7.58333ZM11.7425 2.7885L10.5 4.02516L9.68333 3.2085L10.92 1.966L11.7425 2.7885ZM2.625 6.12516V7.29183H0.875V6.12516H2.625ZM11.375 6.12516H13.125V7.29183H11.375V6.12516ZM3.5 11.6668H10.5C10.8094 11.6668 11.1062 11.7897 11.325 12.0085C11.5437 12.2273 11.6667 12.5241 11.6667 12.8335H2.33333C2.33333 12.5241 2.45625 12.2273 2.67504 12.0085C2.89383 11.7897 3.19058 11.6668 3.5 11.6668ZM7 2.91683C7.92826 2.91683 8.8185 3.28558 9.47487 3.94196C10.1313 4.59833 10.5 5.48857 10.5 6.41683V11.0835H3.5V6.41683C3.5 5.48857 3.86875 4.59833 4.52513 3.94196C5.1815 3.28558 6.07174 2.91683 7 2.91683Z" fill="white"/>
              </g>
            </svg>
          )}
          <div className="label2">{labelText}</div>
        </div>
      </div>
    </div>
  );

  // Render header content based on type
  const renderHeader = () => {
    if (type === 'decorative' || type === 'number' || type === 'label') {
      return (
        <div className="header">
          {type === 'decorative' && (
            <>
              <div className="icon-title">
                <IconFrame />
                <div className="this-is-a-decorative-accordion">{title}</div>
              </div>
              <OpenCloseButton />
            </>
          )}
          {type === 'number' && (
            <>
              <div className="title">
                <div className="_01">{number}</div>
                <div className="this-is-a-numbered-accordion-list">{title}</div>
              </div>
              <OpenCloseButton />
            </>
          )}
          {type === 'label' && (
            <>
              <div className="icon-title">
                <div className="this-is-a-label-accordion">{title}</div>
              </div>
              <LabelTag />
              <OpenCloseButton />
            </>
          )}
        </div>
      );
    }

    // Simple and no-stroke types
    return (
      <div className="heading-icon">
        <div className="content">
          <div className="accordion-title">{title}</div>
          {description && (type === 'simple' || (type === 'no-stroke' && state === 'default')) && (
            <div className="accordion-title2">{description}</div>
          )}
        </div>
        <ToggleIcon />
      </div>
    );
  };

  // Render body content
  const renderBody = () => {
    if (!open || !children) return null;

    if (type === 'decorative' || type === 'number' || type === 'label') {
      return (
        <div className="content">
          {children}
        </div>
      );
    }

    return (
      <div className="content2">
        {children}
      </div>
    );
  };

  return (
    <div className={accordionClasses}>
      <button
        className="accordion-button"
        onClick={handleClick}
        type="button"
        aria-expanded={open}
      >
        {showStatusIcon && (type === 'simple' || type === 'no-stroke') && <StatusIcon />}
        {showIcon && (type === 'simple' || type === 'no-stroke') && <BellRingIcon />}
        {renderHeader()}
      </button>
      {renderBody()}
    </div>
  );
};

export default AccordionSimple;
