import React from 'react';
import { ProgressCircle } from './ProgressCircle';
import './progressBar.css';

export interface ProgressBarProps {
  /** Progress percentage (0-100) */
  progress?: number;
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Total number of milestone circles */
  totalSteps?: number;
  /** Whether to show percentage text */
  showPercentage?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS class */
  className?: string;
  /** ARIA label for accessibility */
  'aria-label'?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  size = 'default',
  totalSteps = 10,
  showPercentage = true,
  disabled = false,
  className = '',
  'aria-label': ariaLabel,
}) => {
  // Clamp progress between 0 and 100
  const clampedProgress = Math.max(0, Math.min(100, progress));
  
  // Calculate how many circles should be filled
  const filledSteps = Math.round((clampedProgress / 100) * totalSteps);
  
  const classes = [
    'progress-bar',
    `progress-bar--${size}`,
    disabled && 'progress-bar--disabled',
    className
  ].filter(Boolean).join(' ');

  const percentageClasses = [
    'progress-bar__percentage',
    `progress-bar__percentage--${size}`,
    disabled && 'progress-bar__percentage--disabled'
  ].filter(Boolean).join(' ');

  const circlesClasses = [
    'progress-bar__circles',
    `progress-bar__circles--${size}`
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      role="progressbar"
      aria-label={ariaLabel || `Progress: ${clampedProgress}% complete`}
      aria-valuenow={clampedProgress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className={circlesClasses}>
        {Array.from({ length: totalSteps }, (_, index) => {
          let circleState: 'default' | 'filled' | 'disabled' = 'default';
          
          if (disabled) {
            circleState = 'disabled';
          } else if (index < filledSteps) {
            circleState = 'filled';
          }

          return (
            <ProgressCircle
              key={index}
              state={circleState}
              size={size}
              aria-label={`Step ${index + 1} of ${totalSteps}${index < filledSteps ? ' (completed)' : ''}`}
            />
          );
        })}
      </div>
      
      {showPercentage && (
        <div className={percentageClasses}>
          {clampedProgress}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
