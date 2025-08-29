import React, { useState } from 'react';
import './accordion.css';

export interface AccordionProps {
  /** Type of accordion */
  type?: 'simple' | 'decorative' | 'decorative-plus' | 'number' | 'label';
  /** Open/closed state */
  state?: 'default' | 'open';
  /** Whether accordion has contained styling */
  contained?: boolean;
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Icon type for open/close */
  openIcon?: 'chevron' | 'plus';
  /** Title text */
  title?: string;
  /** Content text */
  content?: string;
  /** Icon to display (for decorative types) */
  icon?: React.ReactNode;
  /** Number to display (for number type) */
  number?: string;
  /** Label component (for label type) */
  label?: React.ReactNode;
  /** Whether to show icon in simple type */
  showIcon?: boolean;
  /** Custom icon for simple type */
  customIcon?: React.ReactNode;
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
 * Accordion component matching Figma design specifications
 * 
 * Supports multiple types:
 * - simple: Basic accordion with optional icon
 * - decorative: Icon with decorative frame
 * - decorative-plus: Same as decorative but with plus/minus icons
 * - number: Numbered accordion items
 * - label: Accordion with label/tag component
 * 
 * Features:
 * - Multiple sizes (small, default, large)
 * - Contained/uncontained variants
 * - Chevron or plus/minus icons
 * - Fully responsive design
 * - Accessibility support
 */
export const Accordion: React.FC<AccordionProps> = ({
  type = 'simple',
  state = 'default',
  contained = true,
  size = 'default',
  openIcon = 'chevron',
  title = 'This is a section title or a long question taking up a lot of space...',
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.',
  icon,
  number = '01',
  label,
  showIcon = true,
  customIcon,
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

  // Generate CSS classes
  const accordionClasses = [
    'accordion',
    `accordion--type-${type}`,
    `accordion--size-${size}`,
    contained ? 'accordion--contained' : 'accordion--uncontained',
    isOpen ? 'accordion--open' : 'accordion--closed',
    `accordion--icon-${openIcon}`,
    className
  ].filter(Boolean).join(' ');

  // Default bell ring icon for decorative types
  const BellRingIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
        <path d="M15.75 14.25V15H2.25V14.25L3.75 12.75V8.25C3.75 5.925 5.2725 3.8775 7.5 3.2175C7.5 3.1425 7.5 3.075 7.5 3C7.5 2.60218 7.65804 2.22064 7.93934 1.93934C8.22064 1.65804 8.60218 1.5 9 1.5C9.39782 1.5 9.77936 1.65804 10.0607 1.93934C10.342 2.22064 10.5 2.60218 10.5 3C10.5 3.075 10.5 3.1425 10.5 3.2175C12.7275 3.8775 14.25 5.925 14.25 8.25V12.75L15.75 14.25ZM10.5 15.75C10.5 16.1478 10.342 16.5294 10.0607 16.8107C9.77936 17.092 9.39782 17.25 9 17.25C8.60218 17.25 8.22064 17.092 7.93934 16.8107C7.65804 16.5294 7.5 16.1478 7.5 15.75M14.8125 2.3925L13.7475 3.4575C15.03 4.725 15.75 6.45 15.75 8.25H17.25C17.25 6.0525 16.38 3.9375 14.8125 2.3925ZM0.75 8.25H2.25C2.25 6.45 2.97 4.725 4.2525 3.4575L3.1875 2.3925C1.62 3.9375 0.75 6.0525 0.75 8.25Z" fill="currentColor"/>
      </g>
    </svg>
  );

  // Chevron down icon
  const ChevronDownIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.645 10.01L14 15.365L19.355 10.01L21 11.6667L14 18.6667L7 11.6667L8.645 10.01Z" fill="currentColor"/>
    </svg>
  );

  // Chevron up icon
  const ChevronUpIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.645 17.9784L14 12.635L19.355 17.9784L21 16.3334L14 9.33337L7 16.3334L8.645 17.9784Z" fill="currentColor"/>
    </svg>
  );

  // Plus icon
  const PlusIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.1666 15.1667H15.1666V22.1667H12.8333V15.1667H5.83325V12.8334H12.8333V5.83337H15.1666V12.8334H22.1666V15.1667Z" fill="currentColor"/>
    </svg>
  );

  // Minus icon
  const MinusIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.1666 15.1666H5.83325V12.8333H22.1666V15.1666Z" fill="currentColor"/>
    </svg>
  );

  // Get the appropriate toggle icon
  const getToggleIcon = () => {
    if (openIcon === 'plus') {
      return isOpen ? <MinusIcon /> : <PlusIcon />;
    }
    return isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />;
  };

  // Render header content based on type
  const renderHeader = () => {
    switch (type) {
      case 'decorative':
      case 'decorative-plus':
        return (
          <div className="accordion__header">
            <div className="accordion__icon-title">
              <div className="accordion__icon-frame">
                {icon || <BellRingIcon />}
              </div>
              <div className="accordion__title">{title}</div>
            </div>
            <div className="accordion__toggle-icon">
              {getToggleIcon()}
            </div>
          </div>
        );

      case 'number':
        return (
          <div className="accordion__header">
            <div className="accordion__number-title">
              <div className="accordion__number">{number}</div>
              <div className="accordion__title">{title}</div>
            </div>
            <div className="accordion__toggle-icon">
              {getToggleIcon()}
            </div>
          </div>
        );

      case 'label':
        return (
          <div className="accordion__header-wrapper">
            {label && <div className="accordion__label">{label}</div>}
            <div className="accordion__header">
              <div className="accordion__title">{title}</div>
              <div className="accordion__toggle-icon">
                {getToggleIcon()}
              </div>
            </div>
          </div>
        );

      case 'simple':
      default:
        return (
          <div className="accordion__header">
            <div className="accordion__heading-icon">
              {showIcon && (customIcon || <BellRingIcon />)}
              <div className="accordion__title">{title}</div>
            </div>
            <div className="accordion__toggle-icon">
              {getToggleIcon()}
            </div>
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
          {children || content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
