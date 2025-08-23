import React from 'react';
import './stepperLine.css';

export interface StepperLineProps {
  /** Line style variant */
  type?: 'solid' | 'dashed' | 'dotted';
  /** Stroke width */
  stroke?: '1px' | '2px' | '3px';
  /** Orientation of the line */
  orientation?: 'horizontal' | 'vertical';
  /** Custom width for horizontal lines */
  width?: string | number;
  /** Custom height for vertical lines */
  height?: string | number;
  /** Custom color override */
  color?: string;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** ARIA label for accessibility */
  'aria-label'?: string;
}

export const StepperLine: React.FC<StepperLineProps> = ({
  type = 'solid',
  stroke = '2px',
  orientation = 'horizontal',
  width,
  height,
  color,
  className = '',
  style = {},
  'aria-label': ariaLabel,
}) => {
  const lineClasses = [
    'stepper-line',
    `stepper-line-type-${type}`,
    `stepper-line-stroke-${stroke}`,
    `stepper-line-orientation-${orientation}`,
    className
  ].filter(Boolean).join(' ');

  // Default dimensions based on Figma design
  const defaultWidth = orientation === 'horizontal' ? '300px' : stroke;
  const defaultHeight = orientation === 'vertical' ? '300px' : stroke;

  const lineStyle: React.CSSProperties = {
    ...style,
    ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
    ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
    ...(color && { 
      backgroundColor: type === 'solid' ? color : 'transparent',
      borderColor: color 
    }),
  };

  // Use default dimensions if no custom dimensions provided
  if (!width && orientation === 'horizontal') {
    lineStyle.width = defaultWidth;
  }
  if (!height && orientation === 'vertical') {
    lineStyle.height = defaultHeight;
  }
  if (!height && orientation === 'horizontal') {
    lineStyle.height = stroke;
  }
  if (!width && orientation === 'vertical') {
    lineStyle.width = stroke;
  }

  return (
    <div
      className={lineClasses}
      style={lineStyle}
      role="separator"
      aria-label={ariaLabel || `${type} ${orientation} line`}
      aria-orientation={orientation}
    />
  );
};

export default StepperLine;
