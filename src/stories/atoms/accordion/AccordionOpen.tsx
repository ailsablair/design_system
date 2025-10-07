import React from 'react';
import './accordionOpenFigma.css';

export interface AccordionOpenProps {
  /** Position type for stacking accordions */
  type?: 'contained' | 'top' | 'middle' | 'bottom';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Title text */
  title?: string;
  /** Body content */
  content?: string;
  /** Show status icon */
  showStatusIcon?: boolean;
  /** Show bell icon */
  showBellIcon?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Children content (alternative to content prop) */
  children?: React.ReactNode;
}

/**
 * AccordionOpen component for creating stacked/grouped accordions
 * 
 * Position types:
 * - contained: Standalone accordion with full border radius
 * - top: First in a stack (radius on top only)
 * - middle: Middle of stack (no radius, connects top and bottom)
 * - bottom: Last in stack (radius on bottom only)
 * 
 * Features:
 * - Exact Figma design specifications
 * - Status icons with dashed circles
 * - Bell notification icons
 * - Chevron indicators (always up for open state)
 * - Responsive design
 * - Full accessibility support
 */
export const AccordionOpen: React.FC<AccordionOpenProps> = ({
  type = 'contained',
  size = 'default',
  title = 'This is an accordion section title',
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  showStatusIcon = true,
  showBellIcon = true,
  className = '',
  children,
}) => {
  // Generate CSS classes
  const accordionClasses = [
    'accordion-open',
    `accordion-open--type-${type}`,
    `accordion-open--size-${size}`,
    className
  ].filter(Boolean).join(' ');

  // Status icon with dashed circle and check
  const StatusIcon = () => (
    <div className="accordion-open__status-icon">
      <svg 
        className="accordion-open__status-circle"
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle 
          cx="12" 
          cy="12" 
          r="11" 
          stroke="#61607C" 
          strokeDasharray="2 2"
        />
      </svg>
      <svg 
        className="accordion-open__status-check"
        width="16" 
        height="16" 
        viewBox="0 0 16 16" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path 
            d="M5.99938 13.6133L1.85938 9.4733L3.74604 7.58663L5.99938 9.84663L12.586 3.2533L14.4727 5.13996L5.99938 13.6133Z" 
            fill="#96F78D"
          />
        </g>
      </svg>
    </div>
  );

  // Bell icon based on size
  const BellIcon = () => {
    const getBellSize = () => {
      switch (size) {
        case 'small': return { width: 18, height: 18 };
        case 'large': return { width: 26, height: 26 };
        default: return { width: 22, height: 22 };
      }
    };

    const iconSize = getBellSize();

    return (
      <svg 
        className="accordion-open__bell-icon"
        width={iconSize.width} 
        height={iconSize.height} 
        viewBox={`0 0 ${iconSize.width} ${iconSize.height}`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path 
            d={iconSize.width === 18
              ? "M15.75 14.25V15H2.25V14.25L3.75 12.75V8.25C3.75 5.925 5.2725 3.8775 7.5 3.2175C7.5 3.1425 7.5 3.075 7.5 3C7.5 2.60218 7.65804 2.22064 7.93934 1.93934C8.22064 1.65804 8.60218 1.5 9 1.5C9.39782 1.5 9.77936 1.65804 10.0607 1.93934C10.342 2.22064 10.5 2.60218 10.5 3C10.5 3.075 10.5 3.1425 10.5 3.2175C12.7275 3.8775 14.25 5.925 14.25 8.25V12.75L15.75 14.25ZM10.5 15.75C10.5 16.1478 10.342 16.5294 10.0607 16.8107C9.77936 17.092 9.39782 17.25 9 17.25C8.60218 17.25 8.22064 17.092 7.93934 16.8107C7.65804 16.5294 7.5 16.1478 7.5 15.75M14.8125 2.3925L13.7475 3.4575C15.03 4.725 15.75 6.45 15.75 8.25H17.25C17.25 6.0525 16.38 3.9375 14.8125 2.3925ZM0.75 8.25H2.25C2.25 6.45 2.97 4.725 4.2525 3.4575L3.1875 2.3925C1.62 3.9375 0.75 6.0525 0.75 8.25Z"
              : iconSize.width === 26
              ? "M22.7506 20.5833V21.6666H3.25065V20.5833L5.41732 18.4166V11.9166C5.41732 8.55829 7.61648 5.60079 10.834 4.64746C10.834 4.53913 10.834 4.44163 10.834 4.33329C10.834 3.75866 11.0623 3.20756 11.4686 2.80123C11.8749 2.3949 12.426 2.16663 13.0007 2.16663C13.5753 2.16663 14.1264 2.3949 14.5327 2.80123C14.939 3.20756 15.1673 3.75866 15.1673 4.33329C15.1673 4.44163 15.1673 4.53913 15.1673 4.64746C18.3848 5.60079 20.584 8.55829 20.584 11.9166V18.4166L22.7506 20.5833ZM15.1673 22.75C15.1673 23.3246 14.939 23.8757 14.5327 24.282C14.1264 24.6884 13.5753 24.9166 13.0007 24.9166C12.426 24.9166 11.8749 24.6884 11.4686 24.282C11.0623 23.8757 10.834 23.3246 10.834 22.75M21.3965 3.45579L19.8582 4.99413C21.7106 6.82496 22.7506 9.31663 22.7506 11.9166H24.9173C24.9173 8.74246 23.6606 5.68746 21.3965 3.45579ZM1.08398 11.9166H3.25065C3.25065 9.31663 4.29065 6.82496 6.14315 4.99413L4.60482 3.45579C2.34065 5.68746 1.08398 8.74246 1.08398 11.9166Z"
              : "M19.2494 17.4166V18.3333H2.74935V17.4166L4.58268 15.5833V10.0833C4.58268 7.24159 6.44352 4.73909 9.16602 3.93242C9.16602 3.84075 9.16602 3.75825 9.16602 3.66659C9.16602 3.18036 9.35917 2.71404 9.70299 2.37022C10.0468 2.02641 10.5131 1.83325 10.9993 1.83325C11.4856 1.83325 11.9519 2.02641 12.2957 2.37022C12.6395 2.71404 12.8327 3.18036 12.8327 3.66659C12.8327 3.75825 12.8327 3.84075 12.8327 3.93242C15.5552 4.73909 17.416 7.24159 17.416 10.0833V15.5833L19.2494 17.4166ZM12.8327 19.2499C12.8327 19.7361 12.6395 20.2025 12.2957 20.5463C11.9519 20.8901 11.4856 21.0833 10.9993 21.0833C10.5131 21.0833 10.0468 20.8901 9.70299 20.5463C9.35917 20.2025 9.16602 19.7361 9.16602 19.2499M18.1035 2.92409L16.8019 4.22575C18.3694 5.77492 19.2494 7.88325 19.2494 10.0833H21.0827C21.0827 7.39742 20.0194 4.81242 18.1035 2.92409ZM0.916016 10.0833H2.74935C2.74935 7.88325 3.62935 5.77492 5.19685 4.22575L3.89518 2.92409C1.97935 4.81242 0.916016 7.39742 0.916016 10.0833Z"
            }
            fill="#2F42BD"
          />
        </g>
      </svg>
    );
  };

  // Chevron up icon based on size
  const ChevronIcon = () => {
    const getChevronSize = () => {
      switch (size) {
        case 'small': return { width: 20, height: 20 };
        case 'large': return { width: 32, height: 32 };
        default: return { width: 28, height: 28 };
      }
    };

    const iconSize = getChevronSize();

    return (
      <svg 
        className="accordion-open__chevron"
        width={iconSize.width} 
        height={iconSize.height} 
        viewBox={`0 0 ${iconSize.width} ${iconSize.height}`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d={iconSize.width === 20
            ? "M6.175 12.8416L10 9.02496L13.825 12.8416L15 11.6666L10 6.66663L5 11.6666L6.175 12.8416Z"
            : iconSize.width === 32
            ? "M9.88 20.5466L16 14.44L22.12 20.5466L24 18.6666L16 10.6666L8 18.6666L9.88 20.5466Z"
            : "M8.645 17.9783L14 12.6349L19.355 17.9783L21 16.3333L14 9.33325L7 16.3333L8.645 17.9783Z"
          }
          fill="#2F42BD"
        />
      </svg>
    );
  };

  // Get body icon space size
  const getBodyIconSize = () => {
    switch (size) {
      case 'small': return { width: 18, height: 18 };
      case 'large': return { width: 26, height: 26 };
      default: return { width: 22, height: 22 };
    }
  };

  const bodyIconSize = getBodyIconSize();

  return (
    <div className={accordionClasses}>
      {/* Header Section */}
      <div className="accordion-open__header">
        {showStatusIcon && <StatusIcon />}
        {showBellIcon && <BellIcon />}
        <div className="accordion-open__heading-wrapper">
          <div className="accordion-open__title">{title}</div>
          <ChevronIcon />
        </div>
      </div>

      {/* Body Section */}
      <div className="accordion-open__body">
        <div 
          className="accordion-open__body-icon-space"
          style={{ width: bodyIconSize.width, height: bodyIconSize.height }}
        />
        <div className="accordion-open__body-text">
          {children || content}
        </div>
      </div>
    </div>
  );
};

export default AccordionOpen;
