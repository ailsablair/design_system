import React from 'react';
import { statusIconPaths } from './statusIcon.assets';
import type { StatusIconType } from './statusIcon.assets';
import type {
  StatusIconState,
  StatusIconSize,
} from './statusIcon.styles';
import { getStatusIconTheme } from './statusIcon.styles';
import './statusIcon.css';

export interface StatusIconProps {
  /** The semantic type of the icon */
  type: StatusIconType;
  /** The current visual state */
  state?: StatusIconState;
  /** Whether the indicator is in a disabled/grayscale state */
  disabled?: boolean;
  /** Size variant */
  size?: StatusIconSize;
  /** Optional custom class name */
  className?: string;
  /** ARIA label for accessibility */
  'aria-label'?: string;
}

/**
 * StatusIcon - A standalone atom for status indicators used in steppers, timelines, and accordions.
 * Brand-agnostic and follows the Echo Design System specifications.
 */
export const StatusIcon: React.FC<StatusIconProps> = ({
  type,
  state = 'empty',
  disabled = false,
  size = 'default',
  className = '',
  'aria-label': ariaLabel,
}) => {
  const theme = getStatusIconTheme(type, state, disabled, size);
  
  // Combine classes
  const containerClasses = [
    'status-icon',
    `status-icon--${size}`,
    `status-icon--type-${type}`,
    `status-icon--state-${state}`,
    disabled && 'status-icon--disabled',
    className,
  ].filter(Boolean).join(' ');

  // Determine glyph to render
  const glyphType = type;

  const viewBoxSize = 51;
  const center = viewBoxSize / 2;
  const radius = center - theme.strokeWidth / 2;
  
  // Glyph scaling and centering
  // Glyph paths are 24x24. We center them in the 51x51 viewBox.
  const glyphOffset = (viewBoxSize - 24) / 2;

  return (
    <div 
      className={containerClasses}
      role="img"
      aria-label={ariaLabel || `${state} ${type} status indicator`}
    >
      <svg 
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Perimeter Layer (Subtle neutral outer ring) */}
        <circle 
          cx={center} 
          cy={center} 
          r={25} 
          stroke={theme.perimeterColor} 
          strokeWidth={0.5} 
          className="status-icon__perimeter"
        />

        {/* Background Layer (Solid fill for complete/error) */}
        {theme.backgroundColor && theme.backgroundColor !== 'transparent' && (
          <circle 
            cx={center} 
            cy={center} 
            r={center} 
            fill={theme.backgroundColor} 
            className="status-icon__background"
          />
        )}

        {/* Ring Layer */}
        <circle 
          cx={center} 
          cy={center} 
          r={radius} 
          stroke={theme.ringColor} 
          strokeWidth={theme.strokeWidth} 
          strokeDasharray={theme.ringDashArray}
          className="status-icon__ring"
        />

        {/* Glyph Layer */}
        <g 
          transform={`translate(${glyphOffset}, ${glyphOffset})`} 
          fill={theme.glyphColor}
          className="status-icon__glyph"
        >
          {statusIconPaths[glyphType]}
        </g>
      </svg>
    </div>
  );
};

export default StatusIcon;
