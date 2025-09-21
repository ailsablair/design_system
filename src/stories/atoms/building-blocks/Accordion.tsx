import React, { useState } from 'react';
import './accordion.css';

export interface AccordionProps {
  /** Type variant - matches Figma design exactly */
  type?: 'simple' | 'decorative' | 'number' | 'label' | 'no-stroke';
  /** Open/closed state */
  state?: 'default' | 'open';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Icon type for open/close - matches Figma open-icon */
  openIcon?: 'default (chevron)' | 'plus';
  /** Title text */
  title?: string;
  /** Description/supporting text */
  description?: string;
  /** Content text for expanded state */
  content?: string;
  /** Icon to display (for simple and decorative types) */
  icon?: React.ReactNode;
  /** Whether to show icon in simple type */
  showIcon?: boolean;
  /** Number to display (for number type) */
  number?: string;
  /** Label component (for label type) */
  label?: React.ReactNode;
  /** Whether to show status icon */
  showStatusIcon?: boolean;
  /** Status icon variant */
  statusIconType?: 'complete' | 'empty' | 'current';
  /** Controlled open state */
  isOpen?: boolean;
  /** Callback when accordion state changes */
  onToggle?: (isOpen: boolean) => void;
  /** Additional CSS classes */
  className?: string;
  /** Children content (alternative to content prop) */
  children?: React.ReactNode;
}

/**
 * Accordion component matching Figma design specifications exactly
 * 
 * Supports Figma component set "accordion/simple" with all variants:
 * - Types: simple, decorative, number, label, no-stroke
 * - States: default (closed), open
 * - Sizes: small, default, large
 * - Icons: default (chevron), plus
 * 
 * Features:
 * - Exact Figma typography and spacing
 * - Status icons with dashed circles
 * - Responsive design with modern CSS
 * - Full accessibility support
 * - Comprehensive state management
 */
export const Accordion: React.FC<AccordionProps> = ({
  type = 'simple',
  state = 'default',
  size = 'default',
  openIcon = 'default (chevron)',
  title = 'This is a section title taking up a lot of space...',
  description = 'This is supporting text to help describe the content within the accordion',
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  icon,
  showIcon = true,
  number = '01',
  label,
  showStatusIcon = true,
  statusIconType = 'empty',
  isOpen: controlledIsOpen,
  onToggle,
  className = '',
  children,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(state === 'open');
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleToggle = () => {
    const newIsOpen = !isOpen;
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(newIsOpen);
    }
    onToggle?.(newIsOpen);
  };

  // Generate CSS classes - matching Figma data attributes exactly
  const accordionClasses = [
    'accordion',
    `accordion--type-${type}`,
    `accordion--state-${isOpen ? 'open' : 'default'}`,
    `accordion--size-${size}`,
    `accordion--open-icon-${openIcon === 'default (chevron)' ? 'chevron' : openIcon}`,
    className
  ].filter(Boolean).join(' ');

  // Status icon component - exact from Figma design
  const StatusIcon = () => {
    const getStatusIconSize = () => {
      switch (size) {
        case 'small': return { width: 26, height: 26, circle: 24, iconSize: 16 };
        case 'large': return { width: 64, height: 64, circle: 62, iconSize: 36 };
        default: return { width: 50, height: 50, circle: 48, iconSize: 36 };
      }
    };

    const iconProps = getStatusIconSize();

    return (
      <div className="accordion__status-icon">
        <div className="accordion__status-empty">
          {/* Dashed circle - exact from Figma */}
          <svg 
            width={iconProps.width} 
            height={iconProps.height} 
            viewBox={`0 0 ${iconProps.width} ${iconProps.height}`} 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="accordion__status-circle"
          >
            <circle 
              cx={iconProps.width / 2} 
              cy={iconProps.height / 2} 
              r={(iconProps.circle - 2) / 2} 
              stroke="#61607C" 
              strokeDasharray="6 4" 
            />
          </svg>
          
          {/* Check icon - exact from Figma */}
          <svg 
            width={iconProps.iconSize} 
            height={iconProps.iconSize} 
            viewBox={`0 0 ${iconProps.iconSize} ${iconProps.iconSize}`} 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="accordion__status-check"
          >
            <g opacity="0.5">
              <path 
                d={iconProps.iconSize === 36 
                  ? "M13.5001 30.6299L4.18506 21.3149L8.43006 17.0699L13.5001 22.1549L28.3201 7.31995L32.5651 11.5649L13.5001 30.6299Z"
                  : "M6.00011 13.6133L1.86011 9.4733L3.74677 7.58663L6.00011 9.84663L12.5868 3.2533L14.4734 5.13996L6.00011 13.6133Z"
                } 
                fill="#96F78D" 
              />
            </g>
          </svg>
        </div>
      </div>
    );
  };

  // Bell ring icon - exact from Figma design
  const BellRingIcon = () => {
    const getBellIconSize = () => {
      switch (size) {
        case 'small': return { width: 18, height: 18 };
        case 'large': return { width: 26, height: 26 };
        default: return { width: 22, height: 22 };
      }
    };

    const iconProps = getBellIconSize();

    return (
      <svg 
        width={iconProps.width} 
        height={iconProps.height} 
        viewBox={`0 0 ${iconProps.width} ${iconProps.height}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="accordion__bell-icon"
      >
        <g opacity="0.5">
          <path 
            d={iconProps.width === 18
              ? "M15.75 14.25V15H2.25V14.25L3.75 12.75V8.25C3.75 5.925 5.2725 3.8775 7.5 3.2175C7.5 3.1425 7.5 3.075 7.5 3C7.5 2.60218 7.65804 2.22064 7.93934 1.93934C8.22064 1.65804 8.60218 1.5 9 1.5C9.39782 1.5 9.77936 1.65804 10.0607 1.93934C10.342 2.22064 10.5 2.60218 10.5 3C10.5 3.075 10.5 3.1425 10.5 3.2175C12.7275 3.8775 14.25 5.925 14.25 8.25V12.75L15.75 14.25ZM10.5 15.75C10.5 16.1478 10.342 16.5294 10.0607 16.8107C9.77936 17.092 9.39782 17.25 9 17.25C8.60218 17.25 8.22064 17.092 7.93934 16.8107C7.65804 16.5294 7.5 16.1478 7.5 15.75M14.8125 2.3925L13.7475 3.4575C15.03 4.725 15.75 6.45 15.75 8.25H17.25C17.25 6.0525 16.38 3.9375 14.8125 2.3925ZM0.75 8.25H2.25C2.25 6.45 2.97 4.725 4.2525 3.4575L3.1875 2.3925C1.62 3.9375 0.75 6.0525 0.75 8.25Z"
              : iconProps.width === 26
              ? "M22.7499 20.5834V21.6667H3.24992V20.5834L5.41658 18.4167V11.9167C5.41658 8.55842 7.61575 5.60091 10.8333 4.64758C10.8333 4.53925 10.8333 4.44175 10.8333 4.33341C10.8333 3.75878 11.0615 3.20768 11.4679 2.80135C11.8742 2.39502 12.4253 2.16675 12.9999 2.16675C13.5746 2.16675 14.1257 2.39502 14.532 2.80135C14.9383 3.20768 15.1666 3.75878 15.1666 4.33341C15.1666 4.44175 15.1666 4.53925 15.1666 4.64758C18.3841 5.60091 20.5833 8.55842 20.5833 11.9167V18.4167L22.7499 20.5834ZM15.1666 22.7501C15.1666 23.3247 14.9383 23.8758 14.532 24.2821C14.1257 24.6885 13.5746 24.9167 12.9999 24.9167C12.4253 24.9167 11.8742 24.6885 11.4679 24.2821C11.0615 23.8758 10.8333 23.3247 10.8333 22.7501M21.3958 3.45591L19.8574 4.99425C21.7099 6.82508 22.7499 9.31675 22.7499 11.9167H24.9166C24.9166 8.74258 23.6599 5.68758 21.3958 3.45591ZM1.08325 11.9167H3.24992C3.24992 9.31675 4.28992 6.82508 6.14242 4.99425L4.60409 3.45591C2.33992 5.68758 1.08325 8.74258 1.08325 11.9167Z"
              : "M19.2501 17.4167V18.3334H2.75008V17.4167L4.58342 15.5834V10.0834C4.58342 7.24171 6.44425 4.73921 9.16675 3.93254C9.16675 3.84087 9.16675 3.75837 9.16675 3.66671C9.16675 3.18048 9.3599 2.71416 9.70372 2.37034C10.0475 2.02653 10.5139 1.83337 11.0001 1.83337C11.4863 1.83337 11.9526 2.02653 12.2964 2.37034C12.6403 2.71416 12.8334 3.18048 12.8334 3.66671C12.8334 3.75837 12.8334 3.84087 12.8334 3.93254C15.5559 4.73921 17.4167 7.24171 17.4167 10.0834V15.5834L19.2501 17.4167ZM12.8334 19.25C12.8334 19.7363 12.6403 20.2026 12.2964 20.5464C11.9526 20.8902 11.4863 21.0834 11.0001 21.0834C10.5139 21.0834 10.0475 20.8902 9.70372 20.5464C9.3599 20.2026 9.16675 19.7363 9.16675 19.25M18.1042 2.92421L16.8026 4.22587C18.3701 5.77504 19.2501 7.88337 19.2501 10.0834H21.0834C21.0834 7.39754 20.0201 4.81254 18.1042 2.92421ZM0.916748 10.0834H2.75008C2.75008 7.88337 3.63008 5.77504 5.19758 4.22587L3.89591 2.92421C1.98008 4.81254 0.916748 7.39754 0.916748 10.0834Z"
            }
            fill="#1C1C1C" 
          />
        </g>
      </svg>
    );
  };

  // Toggle icons - exact from Figma design
  const ChevronDownIcon = () => {
    const getToggleIconSize = () => {
      switch (size) {
        case 'small': return { width: 20, height: 20 };
        case 'large': return { width: 32, height: 32 };
        default: return { width: 28, height: 28 };
      }
    };

    const iconProps = getToggleIconSize();

    return (
      <svg 
        width={iconProps.width} 
        height={iconProps.height} 
        viewBox={`0 0 ${iconProps.width} ${iconProps.height}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d={iconProps.width === 20
            ? "M6.175 7.15002L10 10.975L13.825 7.15002L15 8.33336L10 13.3334L5 8.33336L6.175 7.15002Z"
            : iconProps.width === 32
            ? "M9.88 11.4399L16 17.5599L22.12 11.4399L24 13.3333L16 21.3333L8 13.3333L9.88 11.4399Z"
            : "M8.645 10.01L14 15.365L19.355 10.01L21 11.6667L14 18.6667L7 11.6667L8.645 10.01Z"
          }
          fill="#2F42BD" 
        />
      </svg>
    );
  };

  const ChevronUpIcon = () => {
    const getToggleIconSize = () => {
      switch (size) {
        case 'small': return { width: 20, height: 20 };
        case 'large': return { width: 32, height: 32 };
        default: return { width: 28, height: 28 };
      }
    };

    const iconProps = getToggleIconSize();

    return (
      <svg 
        width={iconProps.width} 
        height={iconProps.height} 
        viewBox={`0 0 ${iconProps.width} ${iconProps.height}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d={iconProps.width === 20
            ? "M6.175 12.8417L10 9.02508L13.825 12.8417L15 11.6667L10 6.66675L5 11.6667L6.175 12.8417Z"
            : iconProps.width === 32
            ? "M9.88 20.5467L16 14.4401L22.12 20.5467L24 18.6667L16 10.6667L8 18.6667L9.88 20.5467Z"
            : "M8.645 17.9783L14 12.6349L19.355 17.9783L21 16.3333L14 9.33325L7 16.3333L8.645 17.9783Z"
          }
          fill="#2F42BD" 
        />
      </svg>
    );
  };

  const PlusIcon = () => {
    const getToggleIconSize = () => {
      switch (size) {
        case 'small': return { width: 20, height: 20 };
        case 'large': return { width: 32, height: 32 };
        default: return { width: 28, height: 28 };
      }
    };

    const iconProps = getToggleIconSize();

    return (
      <svg 
        width={iconProps.width} 
        height={iconProps.height} 
        viewBox={`0 0 ${iconProps.width} ${iconProps.height}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d={iconProps.width === 20
            ? "M15.8334 10.8333H10.8334V15.8333H9.16675V10.8333H4.16675V9.16663H9.16675V4.16663H10.8334V9.16663H15.8334V10.8333Z"
            : iconProps.width === 32
            ? "M25.3334 17.3334H17.3334V25.3334H14.6667V17.3334H6.66675V14.6667H14.6667V6.66675H17.3334V14.6667H25.3334V17.3334Z"
            : "M22.1666 15.1667H15.1666V22.1667H12.8333V15.1667H5.83325V12.8334H12.8333V5.83337H15.1666V12.8334H22.1666V15.1667Z"
          }
          fill="#2F42BD" 
        />
      </svg>
    );
  };

  const MinusIcon = () => {
    const getToggleIconSize = () => {
      switch (size) {
        case 'small': return { width: 20, height: 20 };
        case 'large': return { width: 32, height: 32 };
        default: return { width: 28, height: 28 };
      }
    };

    const iconProps = getToggleIconSize();

    return (
      <svg 
        width={iconProps.width} 
        height={iconProps.height} 
        viewBox={`0 0 ${iconProps.width} ${iconProps.height}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d={iconProps.width === 20
            ? "M15.8334 10.8334H4.16675V9.16675H15.8334V10.8334Z"
            : iconProps.width === 32
            ? "M25.3334 17.3334H6.66675V14.6667H25.3334V17.3334Z"
            : "M22.1666 15.1666H5.83325V12.8333H22.1666V15.1666Z"
          }
          fill="#2F42BD" 
        />
      </svg>
    );
  };

  // Get the appropriate toggle icon
  const getToggleIcon = () => {
    if (openIcon === 'plus') {
      return isOpen ? <MinusIcon /> : <PlusIcon />;
    }
    return isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />;
  };

  // Render header content based on type - exact Figma layout
  const renderHeader = () => {
    switch (type) {
      case 'simple':
        return (
          <div className="accordion__header">
            {showStatusIcon && <StatusIcon />}
            {showIcon && (icon || <BellRingIcon />)}
            <div className="accordion__heading-content">
              <div className="accordion__title">{title}</div>
              {description && <div className="accordion__description">{description}</div>}
            </div>
            <div className="accordion__toggle-icon">{getToggleIcon()}</div>
          </div>
        );

      case 'no-stroke':
        return (
          <div className="accordion__header">
            {showIcon && (icon || <BellRingIcon />)}
            <div className="accordion__heading-content">
              <div className="accordion__title">{title}</div>
            </div>
            <div className="accordion__toggle-icon">{getToggleIcon()}</div>
          </div>
        );

      case 'decorative':
        return (
          <div className="accordion__header">
            <div className="accordion__icon-frame">
              {icon || <BellRingIcon />}
            </div>
            <div className="accordion__title">{title}</div>
            <div className="accordion__toggle-icon">{getToggleIcon()}</div>
          </div>
        );

      case 'number':
        return (
          <div className="accordion__header">
            <div className="accordion__number">{number}</div>
            <div className="accordion__title">{title}</div>
            <div className="accordion__toggle-icon">{getToggleIcon()}</div>
          </div>
        );

      case 'label':
        return (
          <div className="accordion__header">
            <div className="accordion__title">{title}</div>
            {label && <div className="accordion__label-container">{label}</div>}
            <div className="accordion__toggle-icon">{getToggleIcon()}</div>
          </div>
        );

      default:
        return (
          <div className="accordion__header">
            {showStatusIcon && <StatusIcon />}
            {showIcon && (icon || <BellRingIcon />)}
            <div className="accordion__heading-content">
              <div className="accordion__title">{title}</div>
              {description && <div className="accordion__description">{description}</div>}
            </div>
            <div className="accordion__toggle-icon">{getToggleIcon()}</div>
          </div>
        );
    }
  };

  return (
    <div className={accordionClasses}>
      <button 
        className="accordion__trigger"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${Math.random().toString(36).substr(2, 9)}`}
      >
        {renderHeader()}
      </button>
      
      {isOpen && (
        <div className="accordion__content">
          <div className="accordion__content-inner">
            {children || content}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
