import React from 'react';
import './progressCircle.css';

export interface ProgressCircleProps {
  /** Visual state of the progress circle */
  state?: 'default' | 'filled' | 'error' | 'disabled';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Additional CSS class */
  className?: string;
  /** ARIA label for accessibility */
  'aria-label'?: string;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  state = 'default',
  size = 'default',
  className = '',
  'aria-label': ariaLabel,
}) => {
  const classes = [
    'progress-circle',
    `progress-circle--size-${size}`,
    `progress-circle--state-${state}`,
    className
  ].filter(Boolean).join(' ');

  const role = state === 'filled' ? 'progressbar' : 'img';
  const ariaValueNow = state === 'filled' ? 100 : state === 'default' ? 0 : undefined;
  const ariaValueMin = state === 'filled' || state === 'default' ? 0 : undefined;
  const ariaValueMax = state === 'filled' || state === 'default' ? 100 : undefined;

  return (
    <div
      className={classes}
      role={role}
      aria-label={ariaLabel || `Progress circle ${state}`}
      aria-valuenow={ariaValueNow}
      aria-valuemin={ariaValueMin}
      aria-valuemax={ariaValueMax}
    />
  );
};

export default ProgressCircle;
