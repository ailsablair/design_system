import React from 'react';
import './accordionHeader.css';

export interface AccordionHeaderProps {
  /** Size of the accordion header - matches Figma variants exactly */
  size?: 'small' | 'default' | 'large';
  /** Icon style for expand/collapse - matches Figma "icon-style" variants */
  iconStyle?: 'plus' | 'default (chevron)';
  /** Position variant affecting visual alignment - matches Figma "position" variants */
  position?: 'default (middle)' | 'top' | 'bottom';
  /** Content type variant - matches Figma "content-type" variants */
  contentType?: 'N/A' | 'header';
  /** Whether the accordion is open - matches Figma "open" variants */
  open?: boolean;
  /** Visual state - matches Figma "state" variants */
  state?: 'default' | 'hover' | 'selected';
  /** Title text content */
  title?: string;
  /** Custom bell notification icon */
  bellIcon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Custom CSS class */
  className?: string;
  /** Accessibility label */
  'aria-label'?: string;
  /** Whether this header is part of a group */
  grouped?: boolean;
}

/**
 * AccordionHeader component implementing exact Figma design specifications
 *
 * Comprehensive accordion header with 72 total variants (3×2×3×2×2×3):
 * - 3 sizes: small (18px), default (19px), large (24px)
 * - 2 icon styles: plus/minus, chevron up/down
 * - 3 positions: default (middle), top, bottom
 * - 2 content types: N/A, header
 * - 2 open states: closed (False), open (True)
 * - 3 interaction states: default, hover, selected
 *
 * Features:
 * - Bell notification icon on the left with opacity styling
 * - Title text with Archivo font family
 * - Toggle icons with proper sizing per variant
 * - Pixel-perfect match to Figma design specifications
 * - Full accessibility and responsive support
 */
export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  size = 'default',
  iconStyle = 'plus',
  position = 'default (middle)',
  contentType = 'N/A',
  open = false,
  state = 'default',
  title = 'This is an accordion section title',
  bellIcon,
  onClick,
  className = '',
  'aria-label': ariaLabel,
  grouped = false,
}) => {
  // Generate CSS classes - matches Figma variant naming exactly
  const normalizedIconStyle = iconStyle === 'default (chevron)' ? 'chevron' : iconStyle;
  const normalizedPosition = position === 'default (middle)' ? 'middle' : position;
  const normalizedContentType = contentType === 'N/A' ? 'default' : contentType;

  const headerClasses = [
    'accordion-header',
    `accordion-header--size-${size}`,
    `accordion-header--icon-${normalizedIconStyle}`,
    `accordion-header--position-${normalizedPosition}`,
    `accordion-header--content-${normalizedContentType}`,
    open ? 'accordion-header--open' : 'accordion-header--closed',
    `accordion-header--state-${state}`,
    grouped && 'accordion-header--grouped',
    onClick && 'accordion-header--interactive',
    className
  ].filter(Boolean).join(' ');

  // Bell notification icon - exact from Figma design with proper sizing per variant
  const BellRingIcon = () => {
    const getIconSize = () => {
      switch (size) {
        case 'small': return { width: 18, height: 18, viewBox: '0 0 18 18' };
        case 'large': return { width: 26, height: 26, viewBox: '0 0 26 26' };
        default: return { width: 22, height: 22, viewBox: '0 0 22 22' };
      }
    };

    const iconProps = getIconSize();

    return (
      <svg
        className="accordion-header__bell-icon"
        width={iconProps.width}
        height={iconProps.height}
        viewBox={iconProps.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path
            d={iconProps.viewBox === '0 0 18 18'
              ? "M15.75 14.25V15H2.25V14.25L3.75 12.75V8.25C3.75 5.925 5.2725 3.8775 7.5 3.2175C7.5 3.1425 7.5 3.075 7.5 3C7.5 2.60218 7.65804 2.22064 7.93934 1.93934C8.22064 1.65804 8.60218 1.5 9 1.5C9.39782 1.5 9.77936 1.65804 10.0607 1.93934C10.342 2.22064 10.5 2.60218 10.5 3C10.5 3.075 10.5 3.1425 10.5 3.2175C12.7275 3.8775 14.25 5.925 14.25 8.25V12.75L15.75 14.25ZM10.5 15.75C10.5 16.1478 10.342 16.5294 10.0607 16.8107C9.77936 17.092 9.39782 17.25 9 17.25C8.60218 17.25 8.22064 17.092 7.93934 16.8107C7.65804 16.5294 7.5 16.1478 7.5 15.75M14.8125 2.3925L13.7475 3.4575C15.03 4.725 15.75 6.45 15.75 8.25H17.25C17.25 6.0525 16.38 3.9375 14.8125 2.3925ZM0.75 8.25H2.25C2.25 6.45 2.97 4.725 4.2525 3.4575L3.1875 2.3925C1.62 3.9375 0.75 6.0525 0.75 8.25Z"
              : iconProps.viewBox === '0 0 26 26'
              ? "M22.7499 20.5832V21.6665H3.24992V20.5832L5.41658 18.4165V11.9165C5.41658 8.55817 7.61575 5.60067 10.8333 4.64734C10.8333 4.539 10.8333 4.4415 10.8333 4.33317C10.8333 3.75853 11.0615 3.20743 11.4679 2.80111C11.8742 2.39478 12.4253 2.1665 12.9999 2.1665C13.5746 2.1665 14.1257 2.39478 14.532 2.80111C14.9383 3.20743 15.1666 3.75853 15.1666 4.33317C15.1666 4.4415 15.1666 4.539 15.1666 4.64734C18.3841 5.60067 20.5833 8.55817 20.5833 11.9165V18.4165L22.7499 20.5832ZM15.1666 22.7498C15.1666 23.3245 14.9383 23.8756 14.532 24.2819C14.1257 24.6882 13.5746 24.9165 12.9999 24.9165C12.4253 24.9165 11.8742 24.6882 11.4679 24.2819C11.0615 23.8756 10.8333 23.3245 10.8333 22.7498M21.3958 3.45567L19.8574 4.994C21.7099 6.82484 22.7499 9.3165 22.7499 11.9165H24.9166C24.9166 8.74234 23.6599 5.68734 21.3958 3.45567ZM1.08325 11.9165H3.24992C3.24992 9.3165 4.28992 6.82484 6.14242 4.994L4.60409 3.45567C2.33992 5.68734 1.08325 8.74234 1.08325 11.9165Z"
              : "M19.2501 17.4168V18.3335H2.75008V17.4168L4.58342 15.5835V10.0835C4.58342 7.24183 6.44425 4.73933 9.16675 3.93266C9.16675 3.841 9.16675 3.7585 9.16675 3.66683C9.16675 3.1806 9.3599 2.71428 9.70372 2.37047C10.0475 2.02665 10.5139 1.8335 11.0001 1.8335C11.4863 1.8335 11.9526 2.02665 12.2964 2.37047C12.6403 2.71428 12.8334 3.1806 12.8334 3.66683C12.8334 3.7585 12.8334 3.841 12.8334 3.93266C15.5559 4.73933 17.4167 7.24183 17.4167 10.0835V15.5835L19.2501 17.4168ZM12.8334 19.2502C12.8334 19.7364 12.6403 20.2027 12.2964 20.5465C11.9526 20.8903 11.4863 21.0835 11.0001 21.0835C10.5139 21.0835 10.0475 20.8903 9.70372 20.5465C9.3599 20.2027 9.16675 19.7364 9.16675 19.2502M18.1042 2.92433L16.8026 4.226C18.3701 5.77516 19.2501 7.8835 19.2501 10.0835H21.0834C21.0834 7.39766 20.0201 4.81266 18.1042 2.92433ZM0.916748 10.0835H2.75008C2.75008 7.8835 3.63008 5.77516 5.19758 4.226L3.89591 2.92433C1.98008 4.81266 0.916748 7.39766 0.916748 10.0835Z"
            }
            fill="#2F42BD"
          />
        </g>
      </svg>
    );
  };

  // Plus icon - size-responsive based on Figma specs
  const PlusIcon = () => {
    const getIconSize = () => {
      switch (size) {
        case 'small': return { width: 20, height: 20, viewBox: '0 0 20 20' };
        case 'large': return { width: 32, height: 32, viewBox: '0 0 32 32' };
        default: return { width: 28, height: 28, viewBox: '0 0 28 28' };
      }
    };

    const iconProps = getIconSize();

    return (
      <svg
        className="accordion-header__toggle-icon"
        width={iconProps.width}
        height={iconProps.height}
        viewBox={iconProps.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={iconProps.viewBox === '0 0 20 20'
            ? "M15.8334 10.8332H10.8334V15.8332H9.16675V10.8332H4.16675V9.1665H9.16675V4.1665H10.8334V9.1665H15.8334V10.8332Z"
            : iconProps.viewBox === '0 0 32 32'
            ? "M25.3334 17.3332H17.3334V25.3332H14.6667V17.3332H6.66675V14.6665H14.6667V6.6665H17.3334V14.6665H25.3334V17.3332Z"
            : "M22.1666 15.1668H15.1666V22.1668H12.8333V15.1668H5.83325V12.8335H12.8333V5.8335H15.1666V12.8335H22.1666V15.1668Z"
          }
          fill="#2F42BD"
        />
      </svg>
    );
  };

  // Minus icon - size-responsive based on Figma specs
  const MinusIcon = () => {
    const getIconSize = () => {
      switch (size) {
        case 'small': return { width: 20, height: 20, viewBox: '0 0 20 20' };
        case 'large': return { width: 32, height: 32, viewBox: '0 0 32 32' };
        default: return { width: 28, height: 28, viewBox: '0 0 28 28' };
      }
    };

    const iconProps = getIconSize();

    return (
      <svg
        className="accordion-header__toggle-icon"
        width={iconProps.width}
        height={iconProps.height}
        viewBox={iconProps.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={iconProps.viewBox === '0 0 20 20'
            ? "M15.8334 10.8332H4.16675V9.1665H15.8334V10.8332Z"
            : iconProps.viewBox === '0 0 32 32'
            ? "M25.3334 17.3332H6.66675V14.6665H25.3334V17.3332Z"
            : "M22.1666 15.1668H5.83325V12.8335H22.1666V15.1668Z"
          }
          fill="#2F42BD"
        />
      </svg>
    );
  };

  // Chevron down icon - size-responsive based on Figma specs
  const ChevronDownIcon = () => {
    const getIconSize = () => {
      switch (size) {
        case 'small': return { width: 20, height: 20, viewBox: '0 0 20 20' };
        case 'large': return { width: 32, height: 32, viewBox: '0 0 32 32' };
        default: return { width: 28, height: 28, viewBox: '0 0 28 28' };
      }
    };

    const iconProps = getIconSize();

    return (
      <svg
        className="accordion-header__toggle-icon"
        width={iconProps.width}
        height={iconProps.height}
        viewBox={iconProps.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={iconProps.viewBox === '0 0 20 20'
            ? "M6.175 7.1499L10 10.9749L13.825 7.1499L15 8.33324L10 13.3332L5 8.33324L6.175 7.1499Z"
            : iconProps.viewBox === '0 0 32 32'
            ? "M9.88 11.4399L16 17.5599L22.12 11.4399L24 13.3333L16 21.3333L8 13.3333L9.88 11.4399Z"
            : "M8.645 10.0098L14 15.3648L19.355 10.0098L21 11.6664L14 18.6664L7 11.6664L8.645 10.0098Z"
          }
          fill="#2F42BD"
        />
      </svg>
    );
  };

  // Chevron up icon - size-responsive based on Figma specs
  const ChevronUpIcon = () => {
    const getIconSize = () => {
      switch (size) {
        case 'small': return { width: 20, height: 20, viewBox: '0 0 20 20' };
        case 'large': return { width: 32, height: 32, viewBox: '0 0 32 32' };
        default: return { width: 28, height: 28, viewBox: '0 0 28 28' };
      }
    };

    const iconProps = getIconSize();

    return (
      <svg
        className="accordion-header__toggle-icon"
        width={iconProps.width}
        height={iconProps.height}
        viewBox={iconProps.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={iconProps.viewBox === '0 0 20 20'
            ? "M6.175 12.8415L10 9.02484L13.825 12.8415L15 11.6665L10 6.6665L5 11.6665L6.175 12.8415Z"
            : iconProps.viewBox === '0 0 32 32'
            ? "M9.88 20.5465L16 14.4398L22.12 20.5465L24 18.6665L16 10.6665L8 18.6665L9.88 20.5465Z"
            : "M8.645 17.9785L14 12.6352L19.355 17.9785L21 16.3335L14 9.3335L7 16.3335L8.645 17.9785Z"
          }
          fill="#2F42BD"
        />
      </svg>
    );
  };

  // Get the appropriate toggle icon based on Figma design
  const getToggleIcon = () => {
    if (iconStyle === 'plus') {
      return open ? <MinusIcon /> : <PlusIcon />;
    }
    // Default is chevron (matches Figma "default (chevron)")
    return open ? <ChevronUpIcon /> : <ChevronDownIcon />;
  };

  // Handle click
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // Handle keyboard interaction
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (onClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={headerClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={ariaLabel || `${title}${open ? ' (expanded)' : ' (collapsed)'}`}
      aria-expanded={onClick ? open : undefined}
    >
      <div className="accordion-header__content">
        {/* Left bell icon */}
        <div className="accordion-header__bell">
          {bellIcon || <BellRingIcon />}
        </div>

        {/* Main content area */}
        <div className="accordion-header__main">
          <div className="accordion-header__title">
            {title}
          </div>
        </div>

        {/* Right toggle icon */}
        <div className="accordion-header__toggle">
          {getToggleIcon()}
        </div>
      </div>
    </div>
  );
};

export default AccordionHeader;
