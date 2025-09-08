import React from 'react';
import './divider.css';

export interface DividerProps {
  /** Line style variant */
  line?: 'solid' | 'dashed' | 'dotted';
  /** Thickness of the divider */
  thickness?: '0.5px' | '1px' | '2px' | '3px' | '4px' | '8px';
  /** Alignment/orientation of the divider */
  alignment?: 'horizontal' | 'vertical';
  /** Text label to display with the divider */
  label?: string;
  /** Position of the text label - matches Figma design alignment options */
  textAlign?: 'none' | 'left' | 'centre' | 'center' | 'right' | 'middle' | 'top' | 'bottom';
  /** Text style variant */
  textStyle?: 'none' | 'label-sm' | 'title';
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
  thickness = '0.5px',
  alignment = 'horizontal',
  label,
  textAlign = 'none',
  textStyle = 'none',
  width,
  height,
  color,
  className = '',
  style = {},
  'aria-label': ariaLabel,
  role = 'separator',
}) => {
  // Normalize textAlign - 'center' and 'centre' are equivalent
  const normalizedTextAlign = textAlign === 'center' ? 'centre' : textAlign;

  // If there's a label and textAlign is not 'none', render labeled divider
  if (label && textStyle !== 'none' && normalizedTextAlign !== 'none') {
    const isHorizontalWithText = alignment === 'horizontal' && ['left', 'centre', 'right'].includes(normalizedTextAlign);
    const isVerticalWithText = alignment === 'vertical' && ['top', 'middle', 'bottom'].includes(normalizedTextAlign);

    if (isHorizontalWithText) {
      return (
        <div
          className={`divider-with-text divider-with-text-${normalizedTextAlign} ${className}`}
          style={{
            ...style,
            ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
          }}
          role={role}
          aria-label={ariaLabel || `${line} divider with ${label}`}
          aria-orientation="horizontal"
        >
          <div
            className={`divider-line divider-line-${line} divider-thickness-${thickness.replace('.', '_')}`}
            style={{
              ...(color && { backgroundColor: line === 'solid' ? color : 'transparent', borderColor: color }),
            }}
          />
          <div className={`divider-label divider-label-${textStyle}`}>
            {label}
          </div>
        </div>
      );
    }

    if (isVerticalWithText) {
      return (
        <div
          className={`divider-with-text-vertical divider-with-text-vertical-${normalizedTextAlign} ${className}`}
          style={{
            ...style,
            ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
          }}
          role={role}
          aria-label={ariaLabel || `${line} divider with ${label}`}
          aria-orientation="vertical"
        >
          <div
            className={`divider-line-vertical divider-line-${line} divider-thickness-${thickness.replace('.', '_')}`}
            style={{
              width: thickness,
              height: height ? (typeof height === 'number' ? `${height}px` : height) : '306px',
              ...(color && { backgroundColor: line === 'solid' ? color : 'transparent', borderColor: color }),
            }}
          />
          <div className={`divider-label-vertical divider-label-${textStyle} divider-label-${normalizedTextAlign}`}>
            {label}
          </div>
        </div>
      );
    }
  }

  // Standard divider without text
  const dividerClasses = [
    'divider',
    `divider-line-${line}`,
    `divider-thickness-${thickness.replace('.', '_')}`, // Convert 0.5px to 0_5px for valid CSS class
    `divider-alignment-${alignment}`,
    className
  ].filter(Boolean).join(' ');

  // Default dimensions based on Figma design
  const defaultWidth = alignment === 'horizontal' ? '1220px' : undefined;
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
