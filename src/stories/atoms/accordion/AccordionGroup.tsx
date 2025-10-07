import React from 'react';
import './accordionGroupFigma.css';

export interface AccordionGroupItem {
  /** Unique identifier for the accordion item */
  id: string;
  /** Title text */
  title?: string;
  /** Whether to show status icon */
  showStatusIcon?: boolean;
  /** Whether to show bell icon */
  showBellIcon?: boolean;
  /** Click handler for the item */
  onClick?: () => void;
}

export interface AccordionGroupProps {
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Type of grouping */
  type?: 'attached' | 'gap';
  /** Array of accordion items */
  items?: AccordionGroupItem[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * AccordionGroup component for creating grouped accordions
 * 
 * Based on exact Figma design specifications with two types:
 * - attached: Accordions seamlessly connected with shared borders
 * - gap: Accordions with spacing between them
 * 
 * Features:
 * - Automatic border and radius management for stacked items
 * - Three size variants (small, default, large)
 * - Responsive layout with flexbox
 * - Accessible keyboard navigation
 * - Follows Echo design system tokens
 */
export const AccordionGroup: React.FC<AccordionGroupProps> = ({
  size = 'default',
  type = 'attached',
  items = [
    { id: '1', title: 'This is an accordion section title' },
    { id: '2', title: 'This is an accordion section title' },
    { id: '3', title: 'This is an accordion section title' },
    { id: '4', title: 'This is an accordion section title' },
    { id: '5', title: 'This is an accordion section title' },
  ],
  className = '',
}) => {
  const groupClasses = [
    'accordion-group',
    `accordion-group--size-${size}`,
    `accordion-group--type-${type}`,
    className
  ].filter(Boolean).join(' ');

  // Determine position type for each item based on group type
  const getPositionType = (index: number, total: number): string => {
    if (type === 'gap') {
      return 'default'; // Each item in gap type is standalone
    }
    
    // For attached type
    if (total === 1) return 'default'; // Single item
    if (index === 0) return 'top'; // First item
    if (index === total - 1) return 'bottom'; // Last item
    return 'middle'; // Middle items
  };

  // Status icon component
  const StatusIcon = () => (
    <div className="accordion-group__status-icon">
      <svg 
        className="accordion-group__status-circle"
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="11" stroke="#61607C" strokeDasharray="2 2"/>
      </svg>
      <svg 
        className="accordion-group__status-check"
        width="16" 
        height="16" 
        viewBox="0 0 16 16" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path d="M5.99938 13.6133L1.85938 9.4733L3.74604 7.58663L5.99938 9.84663L12.586 3.2533L14.4727 5.13996L5.99938 13.6133Z" fill="#96F78D"/>
        </g>
      </svg>
    </div>
  );

  // Bell icon based on size
  const BellIcon = ({ itemSize }: { itemSize: string }) => {
    const iconSize = itemSize === 'small' ? 18 : itemSize === 'large' ? 26 : 22;
    
    const pathData = itemSize === 'small'
      ? "M15.75 14.25V15H2.25V14.25L3.75 12.75V8.25C3.75 5.925 5.2725 3.8775 7.5 3.2175C7.5 3.1425 7.5 3.075 7.5 3C7.5 2.60218 7.65804 2.22064 7.93934 1.93934C8.22064 1.65804 8.60218 1.5 9 1.5C9.39782 1.5 9.77936 1.65804 10.0607 1.93934C10.342 2.22064 10.5 2.60218 10.5 3C10.5 3.075 10.5 3.1425 10.5 3.2175C12.7275 3.8775 14.25 5.925 14.25 8.25V12.75L15.75 14.25ZM10.5 15.75C10.5 16.1478 10.342 16.5294 10.0607 16.8107C9.77936 17.092 9.39782 17.25 9 17.25C8.60218 17.25 8.22064 17.092 7.93934 16.8107C7.65804 16.5294 7.5 16.1478 7.5 15.75M14.8125 2.3925L13.7475 3.4575C15.03 4.725 15.75 6.45 15.75 8.25H17.25C17.25 6.0525 16.38 3.9375 14.8125 2.3925ZM0.75 8.25H2.25C2.25 6.45 2.97 4.725 4.2525 3.4575L3.1875 2.3925C1.62 3.9375 0.75 6.0525 0.75 8.25Z"
      : itemSize === 'large'
      ? "M22.7506 20.5834V21.6667H3.25065V20.5834L5.41732 18.4167V11.9167C5.41732 8.55841 7.61648 5.60091 10.834 4.64758C10.834 4.53925 10.834 4.44175 10.834 4.33341C10.834 3.75878 11.0623 3.20768 11.4686 2.80135C11.8749 2.39502 12.426 2.16675 13.0007 2.16675C13.5753 2.16675 14.1264 2.39502 14.5327 2.80135C14.939 3.20768 15.1673 3.75878 15.1673 4.33341C15.1673 4.44175 15.1673 4.53925 15.1673 4.64758C18.3848 5.60091 20.584 8.55841 20.584 11.9167V18.4167L22.7506 20.5834ZM15.1673 22.7501C15.1673 23.3247 14.939 23.8758 14.5327 24.2821C14.1264 24.6885 13.5753 24.9167 13.0007 24.9167C12.426 24.9167 11.8749 24.6885 11.4686 24.2821C11.0623 23.8758 10.834 23.3247 10.834 22.7501M21.3965 3.45591L19.8582 4.99425C21.7106 6.82508 22.7506 9.31675 22.7506 11.9167H24.9173C24.9173 8.74258 23.6606 5.68758 21.3965 3.45591ZM1.08398 11.9167H3.25065C3.25065 9.31675 4.29065 6.82508 6.14315 4.99425L4.60482 3.45591C2.34065 5.68758 1.08398 8.74258 1.08398 11.9167Z"
      : "M19.2494 17.4167V18.3334H2.74935V17.4167L4.58268 15.5834V10.0834C4.58268 7.24171 6.44352 4.73921 9.16602 3.93254C9.16602 3.84087 9.16602 3.75837 9.16602 3.66671C9.16602 3.18048 9.35917 2.71416 9.70299 2.37034C10.0468 2.02653 10.5131 1.83337 10.9993 1.83337C11.4856 1.83337 11.9519 2.02653 12.2957 2.37034C12.6395 2.71416 12.8327 3.18048 12.8327 3.66671C12.8327 3.75837 12.8327 3.84087 12.8327 3.93254C15.5552 4.73921 17.416 7.24171 17.416 10.0834V15.5834L19.2494 17.4167ZM12.8327 19.25C12.8327 19.7363 12.6395 20.2026 12.2957 20.5464C11.9519 20.8902 11.4856 21.0834 10.9993 21.0834C10.5131 21.0834 10.0468 20.8902 9.70299 20.5464C9.35917 20.2026 9.16602 19.7363 9.16602 19.25M18.1035 2.92421L16.8019 4.22587C18.3694 5.77504 19.2494 7.88337 19.2494 10.0834H21.0827C21.0827 7.39754 20.0194 4.81254 18.1035 2.92421ZM0.916016 10.0834H2.74935C2.74935 7.88337 3.62935 5.77504 5.19685 4.22587L3.89518 2.92421C1.97935 4.81254 0.916016 7.39754 0.916016 10.0834Z";

    return (
      <svg 
        className="accordion-group__bell-icon"
        width={iconSize} 
        height={iconSize} 
        viewBox={`0 0 ${iconSize} ${iconSize}`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path d={pathData} fill="#2F42BD"/>
        </g>
      </svg>
    );
  };

  // Chevron down icon based on size
  const ChevronIcon = ({ itemSize }: { itemSize: string }) => {
    const iconSize = itemSize === 'small' ? 20 : itemSize === 'large' ? 32 : 28;
    
    const pathData = itemSize === 'small'
      ? "M6.175 7.1499L10 10.9749L13.825 7.1499L15 8.33324L10 13.3332L5 8.33324L6.175 7.1499Z"
      : itemSize === 'large'
      ? "M9.88 11.4399L16 17.5599L22.12 11.4399L24 13.3333L16 21.3333L8 13.3333L9.88 11.4399Z"
      : "M8.645 10.01L14 15.365L19.355 10.01L21 11.6667L14 18.6667L7 11.6667L8.645 10.01Z";

    return (
      <svg 
        className="accordion-group__chevron"
        width={iconSize} 
        height={iconSize} 
        viewBox={`0 0 ${iconSize} ${iconSize}`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={pathData} fill="#2F42BD"/>
      </svg>
    );
  };

  return (
    <div className={groupClasses} role="group">
      {items.map((item, index) => {
        const position = getPositionType(index, items.length);
        const itemClasses = [
          'accordion-group__item',
          `accordion-group__item--position-${position}`,
          `accordion-group__item--size-${size}`,
        ].join(' ');

        return (
          <button
            key={item.id}
            className={itemClasses}
            onClick={item.onClick}
            type="button"
            aria-expanded="false"
          >
            {(item.showStatusIcon !== false) && <StatusIcon />}
            {(item.showBellIcon !== false) && <BellIcon itemSize={size} />}
            <div className="accordion-group__heading-wrapper">
              <div className="accordion-group__title">
                {item.title || 'This is an accordion section title'}
              </div>
              <ChevronIcon itemSize={size} />
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default AccordionGroup;
