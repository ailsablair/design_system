import React from 'react';
import './accordionHeadersFigma.css';

export interface AccordionHeaderProps {
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Icon style - plus/minus or chevron */
  iconStyle?: 'plus' | 'default (chevron)';
  /** Position alignment */
  position?: 'default (middle)' | 'top' | 'bottom';
  /** Content type */
  contentType?: 'N/A' | 'header';
  /** Open/closed state */
  open?: boolean;
  /** Interactive state */
  state?: 'default' | 'hover' | 'selected';
  /** Title text */
  title?: string;
  /** Whether to show status icon */
  showStatus?: boolean;
  /** Whether to show content icon (bell ring) */
  showIcon?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * AccordionHeader component matching exact Figma design specifications
 * 
 * Supports all Figma variants:
 * - Sizes: small (18px), default (19px), large (24px)
 * - Icon styles: plus (+/-) or chevron (up/down)
 * - Positions: default (middle), top, bottom
 * - Content types: N/A, header
 * - States: default, open, hover, selected
 * 
 * Features:
 * - Exact Figma typography and spacing
 * - Status indicators with dashed circles
 * - Bell ring icon with hover effects
 * - Toggle icons (plus/minus or chevron)
 * - Responsive design
 * - Full accessibility support
 */
export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  size = 'default',
  iconStyle = 'default (chevron)',
  position = 'default (middle)',
  contentType = 'N/A',
  open = false,
  state = 'default',
  title = 'This is an accordion section title',
  showStatus = true,
  showIcon = true,
  onClick,
  className = '',
}) => {
  // Generate CSS classes
  const headerClasses = [
    'accordion-header',
    `accordion-header--size-${size}`,
    `accordion-header--icon-${iconStyle === 'plus' ? 'plus' : 'chevron'}`,
    `accordion-header--position-${position.replace(' ', '-').replace('(', '').replace(')', '')}`,
    `accordion-header--content-${contentType.toLowerCase().replace('/', '-')}`,
    open ? 'accordion-header--state-open' : '',
    state !== 'default' ? `accordion-header--state-${state}` : '',
    className
  ].filter(Boolean).join(' ');

  // Status icon - dashed circle with checkmark
  const StatusIcon = () => (
    <div className="accordion-header__status">
      <svg 
        className="accordion-header__status-circle"
        width="24" 
        height="23" 
        viewBox="0 0 24 23" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="11.5" r="11" stroke="#61607C" strokeDasharray="2 2"/>
      </svg>
      <svg 
        className="accordion-header__status-check"
        width="16" 
        height="17" 
        viewBox="0 0 16 17" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path d="M6.00011 14.1133L1.86011 9.9733L3.74677 8.08663L6.00011 10.3466L12.5868 3.7533L14.4734 5.63996L6.00011 14.1133Z" fill="#96F78D"/>
        </g>
      </svg>
    </div>
  );

  // Bell ring icon - different sizes for each variant
  const BellRingIcon = () => {
    const iconSize = size === 'small' ? 18 : size === 'large' ? 26 : 22;
    const viewBox = `0 0 ${iconSize} ${iconSize + 1}`;
    
    const pathData = size === 'small' 
      ? "M15.75 14.75V15.5H2.25V14.75L3.75 13.25V8.75C3.75 6.425 5.2725 4.3775 7.5 3.7175C7.5 3.6425 7.5 3.575 7.5 3.5C7.5 3.10218 7.65804 2.72064 7.93934 2.43934C8.22064 2.15804 8.60218 2 9 2C9.39782 2 9.77936 2.15804 10.0607 2.43934C10.342 2.72064 10.5 3.10218 10.5 3.5C10.5 3.575 10.5 3.6425 10.5 3.7175C12.7275 4.3775 14.25 6.425 14.25 8.75V13.25L15.75 14.75ZM10.5 16.25C10.5 16.6478 10.342 17.0294 10.0607 17.3107C9.77936 17.592 9.39782 17.75 9 17.75C8.60218 17.75 8.22064 17.592 7.93934 17.3107C7.65804 17.0294 7.5 16.6478 7.5 16.25M14.8125 2.8925L13.7475 3.9575C15.03 5.225 15.75 6.95 15.75 8.75H17.25C17.25 6.5525 16.38 4.4375 14.8125 2.8925ZM0.75 8.75H2.25C2.25 6.95 2.97 5.225 4.2525 3.9575L3.1875 2.8925C1.62 4.4375 0.75 6.5525 0.75 8.75Z"
      : size === 'large'
      ? "M22.7499 21.0833V22.1666H3.24992V21.0833L5.41658 18.9166V12.4166C5.41658 9.05829 7.61575 6.10079 10.8333 5.14746C10.8333 5.03913 10.8333 4.94163 10.8333 4.83329C10.8333 4.25866 11.0615 3.70756 11.4679 3.30123C11.8742 2.8949 12.4253 2.66663 12.9999 2.66663C13.5746 2.66663 14.1257 2.8949 14.532 3.30123C14.9383 3.70756 15.1666 4.25866 15.1666 4.83329C15.1666 4.94163 15.1666 5.03913 15.1666 5.14746C18.3841 6.10079 20.5833 9.05829 20.5833 12.4166V18.9166L22.7499 21.0833ZM15.1666 23.25C15.1666 23.8246 14.9383 24.3757 14.532 24.782C14.1257 25.1884 13.5746 25.4166 12.9999 25.4166C12.4253 25.4166 11.8742 25.1884 11.4679 24.782C11.0615 24.3757 10.8333 23.8246 10.8333 23.25M21.3958 3.95579L19.8574 5.49413C21.7099 7.32496 22.7499 9.81663 22.7499 12.4166H24.9166C24.9166 9.24246 23.6599 6.18746 21.3958 3.95579ZM1.08325 12.4166H3.24992C3.24992 9.81663 4.28992 7.32496 6.14242 5.49413L4.60408 3.95579C2.33992 6.18746 1.08325 9.24246 1.08325 12.4166Z"
      : "M19.2501 17.9166V18.8333H2.75008V17.9166L4.58342 16.0833V10.5833C4.58342 7.74159 6.44425 5.23909 9.16675 4.43242C9.16675 4.34075 9.16675 4.25825 9.16675 4.16659C9.16675 3.68036 9.3599 3.21404 9.70372 2.87022C10.0475 2.52641 10.5139 2.33325 11.0001 2.33325C11.4863 2.33325 11.9526 2.52641 12.2964 2.87022C12.6403 3.21404 12.8334 3.68036 12.8334 4.16659C12.8334 4.25825 12.8334 4.34075 12.8334 4.43242C15.5559 5.23909 17.4167 7.74159 17.4167 10.5833V16.0833L19.2501 17.9166ZM12.8334 19.7499C12.8334 20.2361 12.6403 20.7025 12.2964 21.0463C11.9526 21.3901 11.4863 21.5833 11.0001 21.5833C10.5139 21.5833 10.0475 21.3901 9.70372 21.0463C9.3599 20.7025 9.16675 20.2361 9.16675 19.7499M18.1042 3.42409L16.8026 4.72575C18.3701 6.27492 19.2501 8.38325 19.2501 10.5833H21.0834C21.0834 7.89742 20.0201 5.31242 18.1042 3.42409ZM0.916748 10.5833H2.75008C2.75008 8.38325 3.63008 6.27492 5.19758 4.72575L3.89592 3.42409C1.98008 5.31242 0.916748 7.89742 0.916748 10.5833Z";

    return (
      <svg 
        className="accordion-header__icon"
        width={iconSize} 
        height={iconSize + 1} 
        viewBox={viewBox} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path d={pathData} fill="#2F42BD"/>
        </g>
      </svg>
    );
  };

  // Toggle icon - plus/minus or chevron up/down
  const ToggleIcon = () => {
    const iconSize = size === 'small' ? 20 : size === 'large' ? 32 : 28;
    const viewBox = `0 0 ${iconSize} ${iconSize + 1}`;
    
    let pathData = '';
    
    if (iconStyle === 'plus') {
      // Plus/Minus icons
      if (open) {
        // Minus icon
        pathData = size === 'small'
          ? "M15.8334 11.3333H4.16675V9.66663H15.8334V11.3333Z"
          : size === 'large'
          ? "M25.3334 17.8333H6.66675V15.1666H25.3334V17.8333Z"
          : "M22.1666 15.6666H5.83325V13.3333H22.1666V15.6666Z";
      } else {
        // Plus icon
        pathData = size === 'small'
          ? "M15.8334 11.3333H10.8334V16.3333H9.16675V11.3333H4.16675V9.66663H9.16675V4.66663H10.8334V9.66663H15.8334V11.3333Z"
          : size === 'large'
          ? "M25.3334 17.8333H17.3334V25.8333H14.6667V17.8333H6.66675V15.1666H14.6667V7.16663H17.3334V15.1666H25.3334V17.8333Z"
          : "M22.1666 15.6666H15.1666V22.6666H12.8333V15.6666H5.83325V13.3333H12.8333V6.33325H15.1666V13.3333H22.1666V15.6666Z";
      }
    } else {
      // Chevron icons
      if (open) {
        // Chevron up
        pathData = size === 'small'
          ? "M6.175 13.3416L10 9.52496L13.825 13.3416L15 12.1666L10 7.16663L5 12.1666L6.175 13.3416Z"
          : size === 'large'
          ? "M9.88 21.0466L16 14.94L22.12 21.0466L24 19.1666L16 11.1666L8 19.1666L9.88 21.0466Z"
          : "M8.645 18.4783L14 13.1349L19.355 18.4783L21 16.8333L14 9.83325L7 16.8333L8.645 18.4783Z";
      } else {
        // Chevron down
        pathData = size === 'small'
          ? "M6.175 7.84163L10 11.6666L13.825 7.84163L15 9.01663L10 14.0166L5 9.01663L6.175 7.84163Z"
          : size === 'large'
          ? "M9.88 11.9399L16 18.0599L22.12 11.9399L24 13.8333L16 21.8333L8 13.8333L9.88 11.9399Z"
          : "M8.645 10.51L14 15.865L19.355 10.51L21 12.1667L14 19.1667L7 12.1667L8.645 10.51Z";
      }
    }

    return (
      <svg 
        className="accordion-header__toggle"
        width={iconSize} 
        height={iconSize + 1} 
        viewBox={viewBox} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={pathData} fill="#2F42BD"/>
      </svg>
    );
  };

  return (
    <button
      className={headerClasses}
      onClick={onClick}
      type="button"
      aria-expanded={open}
    >
      {showStatus && <StatusIcon />}
      {showIcon && <BellRingIcon />}
      <div className="accordion-header__heading-icon">
        <div className="accordion-header__title">{title}</div>
        <ToggleIcon />
      </div>
    </button>
  );
};

export default AccordionHeader;
