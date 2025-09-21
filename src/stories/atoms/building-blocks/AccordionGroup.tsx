import React, { useState } from 'react';
import { Accordion, AccordionProps } from './Accordion';
import './accordionGroup.css';

export interface AccordionGroupProps {
  /** Array of accordion configurations */
  accordions: AccordionProps[];
  /** Whether multiple accordions can be open at once */
  allowMultiple?: boolean;
  /** Whether to allow all accordions to be closed */
  allowAllClosed?: boolean;
  /** Default open accordion indices */
  defaultOpenIndices?: number[];
  /** Controlled open indices */
  openIndices?: number[];
  /** Callback when accordion states change */
  onToggle?: (openIndices: number[]) => void;
  /** Additional CSS classes */
  className?: string;
  /** Spacing between accordion items */
  spacing?: 'none' | 'small' | 'medium' | 'large';
  /** Whether to show borders between items */
  showBorders?: boolean;
}

/**
 * AccordionGroup component that manages multiple accordion items
 * 
 * Features:
 * - Single or multi-select behavior
 * - Controlled or uncontrolled state management
 * - Customizable spacing and borders
 * - Full accessibility support
 * - Responsive design
 */
export const AccordionGroup: React.FC<AccordionGroupProps> = ({
  accordions,
  allowMultiple = false,
  allowAllClosed = true,
  defaultOpenIndices = [],
  openIndices: controlledOpenIndices,
  onToggle,
  className = '',
  spacing = 'medium',
  showBorders = false,
}) => {
  const [internalOpenIndices, setInternalOpenIndices] = useState<number[]>(defaultOpenIndices);
  const openIndices = controlledOpenIndices !== undefined ? controlledOpenIndices : internalOpenIndices;

  const handleAccordionToggle = (index: number, isOpen: boolean) => {
    let newOpenIndices: number[];

    if (allowMultiple) {
      // Multi-select mode
      if (isOpen) {
        newOpenIndices = [...openIndices, index];
      } else {
        newOpenIndices = openIndices.filter(i => i !== index);
      }
    } else {
      // Single-select mode
      if (isOpen) {
        newOpenIndices = [index];
      } else {
        newOpenIndices = allowAllClosed ? [] : openIndices;
      }
    }

    if (controlledOpenIndices === undefined) {
      setInternalOpenIndices(newOpenIndices);
    }
    onToggle?.(newOpenIndices);
  };

  const groupClasses = [
    'accordion-group',
    `accordion-group--spacing-${spacing}`,
    showBorders && 'accordion-group--bordered',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={groupClasses} role="group">
      {accordions.map((accordionProps, index) => (
        <div key={index} className="accordion-group__item">
          <Accordion
            {...accordionProps}
            isOpen={openIndices.includes(index)}
            onToggle={(isOpen) => handleAccordionToggle(index, isOpen)}
          />
        </div>
      ))}
    </div>
  );
};

export default AccordionGroup;
