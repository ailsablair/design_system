import React from 'react';
import './divider.css';

export interface DividerProps {
  /** Line style variant */
  line?: 'solid' | 'dashed' | 'dotted';
  /** Thickness of the divider */
  thickness?: '0.5px' | '1px' | '2px' | '3px' | '4px' | '8px';
  /** Alignment/orientation of the divider */
  alignment?: 'horizontal' | 'vertical';
  /** Custom width for horizontal dividers (in px or any valid CSS unit) */
  width?: string | number;
  /** Custom height for vertical dividers (in px or any valid CSS unit) */
  height?: string | number;
  /** Custom color override */
  color?: string;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** ARIA label for accessibility */
  'aria-label'?: string;
  /** Role for accessibility */
  role?: string;
}

export const Divider: React.FC<DividerProps> = ({
  line = 'solid',
  thickness = '1px',
  alignment = 'horizontal',
  width,
  height,
  color,
  className = '',
  style = {},
  'aria-label': ariaLabel,
  role = 'separator',
}) => {
  const dividerClasses = [
    'divider',
    `divider-line-${line}`,
    `divider-thickness-${thickness.replace('.', '_')}`, // Convert 0.5px to 0_5px for valid CSS class
    `divider-alignment-${alignment}`,
    className
  ].filter(Boolean).join(' ');

  // Default dimensions based on Figma design
  const defaultWidth = alignment === 'horizontal' ? '500px' : undefined;
  const defaultHeight = alignment === 'vertical' ? '306px' : undefined;

  const dividerStyle: React.CSSProperties = {
    ...style,
    ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
    ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
    ...(color && { backgroundColor: color, borderColor: color }),
  };

  // Use default dimensions if no custom dimensions provided
  if (!width && alignment === 'horizontal') {
    dividerStyle.width = defaultWidth;
  }
  if (!height && alignment === 'vertical') {
    dividerStyle.height = defaultHeight;
  }

  return (
    <div
      className={dividerClasses}
      style={dividerStyle}
      role={role}
      aria-label={ariaLabel || `${alignment} ${line} divider`}
      aria-orientation={alignment === 'vertical' ? 'vertical' : 'horizontal'}
    />
  );
};
