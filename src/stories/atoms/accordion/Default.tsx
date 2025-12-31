import React, { useState, useId } from 'react';
import './default.css';

export interface DefaultProps {
  /** Accordion type */
  type?: 'simple' | 'no-stroke';
  /** Open/closed state (controlled) */
  open?: boolean;
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Open icon type */
  openIconType?: 'chevron' | 'plus';
  /** Show status icon */
  showStatusIcon?: boolean;
  /** Status icon type */
  statusIconType?: 'complete' | 'future' | 'current';
  /** Show bell/notification icon */
  showBellIcon?: boolean;
  /** Title text */
  title?: string;
  /** Description/supporting text */
  description?: string;
  /** Expandable content text */
  content?: string;
  /** Additional CSS classes */
  className?: string;
  /** Toggle callback */
  onToggle?: (isOpen: boolean) => void;
  /** ARIA label */
  'aria-label'?: string;
}

/**
 * Default Accordion Component
 *
 * A flexible, accessible accordion component for simple accordion type with status indicators.
 *
 * Features:
 * - Three Sizes: Small (compact), Default (standard), Large (prominent)
 * - Status Icons: Visual completion/progress indicators
 * - Notification Bells: Optional alert/notification icon
 * - Toggle Variants: Chevron or plus/minus icons
 * - Fully Responsive
 * - Token-Driven
 * - Accessible (WCAG AA compliant)
 */
export const Default: React.FC<DefaultProps> = ({
  type = 'simple',
  open: controlledOpen,
  size = 'default',
  openIconType = 'chevron',
  showStatusIcon = true,
  statusIconType = 'complete',
  showBellIcon = true,
  title = 'This is a section title taking up a lot of space...',
  description = 'This is supporting text to help describe the content within the accordion',
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  className = '',
  onToggle,
  'aria-label': ariaLabel,
}) => {
  const [internalOpen, setInternalOpen] = useState(controlledOpen ?? false);
  const headingId = useId();
  const contentId = useId();

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
    'accordion-default',
    `accordion-default--type-${type}`,
    `accordion-default--size-${size}`,
    `accordion-default--${isOpen ? 'open' : 'closed'}`,
    className,
  ].filter(Boolean).join(' ');

  // Size-responsive configuration
  const sizeConfig = {
    small: {
      statusCircle: 22,
      statusPadding: 2,
      statusIcon: 16,
      statusBorder: 1,
      bellIcon: 18,
      toggleIcon: 20,
      toggleViewBox: 16,
    },
    default: {
      statusCircle: 36,
      statusPadding: 2,
      statusIcon: 22,
      statusBorder: 2,
      bellIcon: 22,
      toggleIcon: 28,
      toggleViewBox: 24,
    },
    large: {
      statusCircle: 48,
      statusPadding: 4,
      statusIcon: 28,
      statusBorder: 3,
      bellIcon: 26,
      toggleIcon: 32,
      toggleViewBox: 32,
    },
  }[size];

  const renderStatusIcon = () => {
    if (!showStatusIcon) return null;

    // SVG paths for different sizes
    const checkPaths = {
      small: 'M5.99999 13.6134L1.85999 9.47336L3.74665 7.58669L5.99999 9.84669L12.5867 3.25336L14.4733 5.14002L5.99999 13.6134Z',
      default: 'M8.25 18.7183L2.5575 13.0258L5.15166 10.4317L8.25 13.5392L17.3067 4.47333L19.9008 7.06749L8.25 18.7183Z',
      large: 'M10.5 23.8234L3.255 16.5784L6.55667 13.2767L10.5 17.2317L22.0267 5.69336L25.3283 8.99503L10.5 23.8234Z',
    };

    return (
      <div
        className="accordion-default__status-icon-wrapper"
        style={{ padding: `${sizeConfig.statusPadding}px` }}
      >
        <div
          className="accordion-default__status-icon-circle"
          style={{
            width: `${sizeConfig.statusCircle}px`,
            height: `${sizeConfig.statusCircle}px`,
            border: `${sizeConfig.statusBorder}px dashed var(--color-status-dark-green, #227f1a)`,
            background: 'var(--color-status-green-light, #f2fff1)',
          }}
        >
          <svg
            width={sizeConfig.statusIcon}
            height={sizeConfig.statusIcon}
            viewBox={`0 0 ${sizeConfig.statusIcon} ${sizeConfig.statusIcon}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={checkPaths[size]} fill="var(--color-status-dark-green, #227f1a)" />
          </svg>
        </div>
      </div>
    );
  };

  const renderBellIcon = () => {
    if (!showBellIcon) return null;

    const bellPaths = {
      small:
        'M15.75 14.25V15H2.25V14.25L3.75 12.75V8.25C3.75 5.925 5.2725 3.8775 7.5 3.2175C7.5 3.1425 7.5 3.075 7.5 3C7.5 2.60218 7.65804 2.22064 7.93934 1.93934C8.22064 1.65804 8.60218 1.5 9 1.5C9.39782 1.5 9.77936 1.65804 10.0607 1.93934C10.342 2.22064 10.5 2.60218 10.5 3C10.5 3.075 10.5 3.1425 10.5 3.2175C12.7275 3.8775 14.25 5.925 14.25 8.25V12.75L15.75 14.25ZM10.5 15.75C10.5 16.1478 10.342 16.5294 10.0607 16.8107C9.77936 17.092 9.39782 17.25 9 17.25C8.60218 17.25 8.22064 17.092 7.93934 16.8107C7.65804 16.5294 7.5 16.1478 7.5 15.75M14.8125 2.3925L13.7475 3.4575C15.03 4.725 15.75 6.45 15.75 8.25H17.25C17.25 6.0525 16.38 3.9375 14.8125 2.3925ZM0.75 8.25H2.25C2.25 6.45 2.97 4.725 4.2525 3.4575L3.1875 2.3925C1.62 3.9375 0.75 6.0525 0.75 8.25Z',
      default:
        'M19.25 17.4166V18.3333H2.75V17.4166L4.58333 15.5833V10.0833C4.58333 7.24165 6.44416 4.73915 9.16666 3.93248C9.16666 3.84081 9.16666 3.75831 9.16666 3.66665C9.16666 3.18042 9.35981 2.7141 9.70363 2.37028C10.0474 2.02647 10.5138 1.83331 11 1.83331C11.4862 1.83331 11.9525 2.02647 12.2964 2.37028C12.6402 2.7141 12.8333 3.18042 12.8333 3.66665C12.8333 3.75831 12.8333 3.84081 12.8333 3.93248C15.5558 4.73915 17.4167 7.24165 17.4167 10.0833V15.5833L19.25 17.4166ZM12.8333 19.25C12.8333 19.7362 12.6402 20.2025 12.2964 20.5463C11.9525 20.8902 11.4862 21.0833 11 21.0833C10.5138 21.0833 10.0474 20.8902 9.70363 20.5463C9.35981 20.2025 9.16666 19.7362 9.16666 19.25',
      large:
        'M22.75 20.5833V21.6666H3.25V20.5833L5.41667 18.4166V11.9166C5.41667 8.55829 7.61583 5.60079 10.8333 4.64746C10.8333 4.53913 10.8333 4.44163 10.8333 4.33329C10.8333 3.75866 11.0617 3.20756 11.4679 2.80123C11.8742 2.3949 12.4253 2.16663 13 2.16663C13.5747 2.16663 14.1257 2.3949 14.532 2.80123C14.9384 3.20756 15.1667 3.75866 15.1667 4.33329C15.1667 4.44163 15.1667 4.53913 15.1667 4.64746C18.3842 5.60079 20.5833 8.55829 20.5833 11.9166V18.4166L22.75 20.5833ZM15.1667 22.75C15.1667 23.3246 14.9384 23.8757 14.532 24.282C14.1257 24.6884 13.5747 24.9166 13 24.9166C12.4253 24.9166 11.8742 24.6884 11.4679 24.282C11.0617 23.8757 10.8333 23.3246 10.8333 22.75',
    };

    return (
      <svg
        className="accordion-default__bell-icon"
        width={sizeConfig.bellIcon}
        height={sizeConfig.bellIcon}
        viewBox={`0 0 ${sizeConfig.bellIcon} ${sizeConfig.bellIcon}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.5 }}
      >
        <g opacity="0.5">
          <path d={bellPaths[size]} fill="var(--color-primary-blue-blue, #2f42bd)" />
        </g>
      </svg>
    );
  };

  const renderToggleIcon = () => {
    if (openIconType === 'plus') {
      const paths = isOpen
        ? {
            // Minus paths
            small: 'M15.8334 10.8333H4.16675V9.16663H15.8334V10.8333Z',
            default: 'M15.8337 10.8334H4.16699V9.16675H15.8337V10.8334Z',
            large: 'M25.3333 17.3333H6.66663V14.6666H25.3333V17.3333Z',
          }
        : {
            // Plus paths
            small: 'M15.8334 10.8333H10.8334V15.8333H9.16675V10.8333H4.16675V9.16663H9.16675V4.16663H10.8334V9.16663H15.8334V10.8333Z',
            default: 'M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z',
            large: 'M25.3333 17.3333H17.3333V25.3333H14.6666V17.3333H6.66663V14.6666H14.6666V6.66663H17.3333V14.6666H25.3333V17.3333Z',
          };

      return (
        <svg
          width={sizeConfig.toggleIcon}
          height={sizeConfig.toggleIcon}
          viewBox={`0 0 ${sizeConfig.toggleViewBox} ${sizeConfig.toggleViewBox}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={paths[size]} fill="var(--color-primary-blue-blue, #2f42bd)" />
        </svg>
      );
    }

    // Chevron (up when open, down when closed)
    const paths = isOpen
      ? {
          // Chevron Up
          small: 'M6.175 12.8416L10 9.02496L13.825 12.8416L15 11.6666L10 6.66663L5 11.6666L6.175 12.8416Z',
          default: 'M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z',
          large: 'M9.88 20.5466L16 14.44L22.12 20.5466L24 18.6666L16 10.6666L8 18.6666L9.88 20.5466Z',
        }
      : {
          // Chevron Down
          small: 'M6.175 7.15002L10 10.975L13.825 7.15002L15 8.33336L10 13.3334L5 8.33336L6.175 7.15002Z',
          default: 'M7.41 8.58008L12 13.1701L16.59 8.58008L18 10.0001L12 16.0001L6 10.0001L7.41 8.58008Z',
          large: 'M9.88 11.44L16 17.56L22.12 11.44L24 13.3333L16 21.3333L8 13.3333L9.88 11.44Z',
        };

    return (
      <svg
        width={sizeConfig.toggleIcon}
        height={sizeConfig.toggleIcon}
        viewBox={`0 0 ${sizeConfig.toggleViewBox} ${sizeConfig.toggleViewBox}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={paths[size]} fill="var(--color-primary-blue-blue, #2f42bd)" />
      </svg>
    );
  };

  return (
    <div className={accordionClasses} aria-label={ariaLabel}>
      {renderStatusIcon()}
      {renderBellIcon()}

      <div className="accordion-default__content-wrapper">
        <div className="accordion-default__heading-row">
          <div className="accordion-default__text-container">
            <h3 className="accordion-default__title" id={headingId}>
              {title}
            </h3>
            {description && <p className="accordion-default__description">{description}</p>}
          </div>

          <button
            className="accordion-default__toggle-button"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-controls={contentId}
            aria-label={isOpen ? 'Collapse' : 'Expand'}
          >
            {renderToggleIcon()}
          </button>
        </div>

        {isOpen && content && (
          <div
            className="accordion-default__body"
            id={contentId}
            role="region"
            aria-labelledby={headingId}
          >
            <p className="accordion-default__body-text">{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Default;
