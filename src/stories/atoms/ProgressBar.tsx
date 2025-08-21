import React from 'react';
import './progressBar.css';

export type ProgressBarSize = 'small' | 'default' | 'large';
export type ProgressBarVariant = 'default' | 'success' | 'warning' | 'error';

export interface ProgressBarProps {
  /** Progress value (0-100) */
  value: number;
  /** Maximum value (default: 100) */
  max?: number;
  /** Size of the progress bar */
  size?: ProgressBarSize;
  /** Visual variant */
  variant?: ProgressBarVariant;
  /** Whether to show the percentage text */
  showPercentage?: boolean;
  /** Custom label to display instead of percentage */
  label?: string;
  /** Position of the label */
  labelPosition?: 'inside' | 'outside' | 'none';
  /** Additional CSS class name */
  className?: string;
  /** ARIA label for accessibility */
  'aria-label'?: string;
}

/**
 * ProgressBar component for displaying progress with percentage indicators
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  size = 'default',
  variant = 'default',
  showPercentage = true,
  label,
  labelPosition = 'outside',
  className = '',
  'aria-label': ariaLabel,
}) => {
  // Ensure value is within bounds
  const clampedValue = Math.max(0, Math.min(value, max));
  const percentage = Math.round((clampedValue / max) * 100);
  
  const progressBarClassName = [
    'progress-bar',
    `progress-bar--${size}`,
    `progress-bar--${variant}`,
    `progress-bar--label-${labelPosition}`,
    className
  ].filter(Boolean).join(' ');

  const displayLabel = label || (showPercentage ? `${percentage}%` : '');
  const defaultAriaLabel = ariaLabel || `Progress: ${percentage}%`;

  return (
    <div className={progressBarClassName}>
      <div 
        className="progress-bar__container"
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={defaultAriaLabel}
      >
        <div 
          className="progress-bar__fill"
          style={{ width: `${percentage}%` }}
        >
          {labelPosition === 'inside' && displayLabel && (
            <span className="progress-bar__label progress-bar__label--inside">
              {displayLabel}
            </span>
          )}
        </div>
      </div>
      
      {labelPosition === 'outside' && displayLabel && (
        <span className="progress-bar__label progress-bar__label--outside">
          {displayLabel}
        </span>
      )}
    </div>
  );
};

export default ProgressBar;
