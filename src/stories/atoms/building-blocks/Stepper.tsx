import React from 'react';
import './stepper.css';

export interface StepperProps {
  /** Type of step indicator */
  type?: 'number' | 'icon';
  /** Visual state of the step */
  state?: 'default' | 'active' | 'completed';
  /** Size variant */
  size?: 'default' | 'large';
  /** Step number or identifier */
  stepNumber?: string | number;
  /** Label text below the step */
  label?: string;
  /** Whether this is the current step */
  current?: boolean;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
  /** Click handler for interactive steppers */
  onClick?: () => void;
  /** Accessibility label */
  'aria-label'?: string;
  /** Show text label */
  text?: boolean;
}

export const Stepper: React.FC<StepperProps> = ({
  type = 'number',
  state = 'default',
  size = 'default',
  stepNumber = '01',
  label = 'Text',
  current = false,
  className = '',
  style = {},
  onClick,
  'aria-label': ariaLabel,
  text = true,
}) => {
  // Determine the actual state based on props
  const actualState = state === 'completed' ? 'completed' : (current ? 'active' : 'default');
  
  const stepperClasses = [
    'stepper',
    `stepper-type-${type}`,
    `stepper-state-${actualState}`,
    `stepper-size-${size}`,
    current && 'stepper-current',
    onClick && 'stepper-interactive',
    className
  ].filter(Boolean).join(' ');

  const renderStepIndicator = () => {
    if (state === 'completed' || (type === 'icon' && stepNumber === 'check')) {
      return (
        <div className="stepper-indicator stepper-check">
          <svg
            className="stepper-check-icon"
            width={size === 'large' ? '80' : '60'}
            height={size === 'large' ? '80' : '60'}
            viewBox={size === 'large' ? '0 0 80 80' : '0 0 60 60'}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {size === 'large' ? (
              <path
                d="M30 68.0666L9.30005 47.3666L18.7334 37.9333L30 49.2333L62.9334 16.2666L72.3667 25.6999L30 68.0666Z"
                fill="#F9F9FE"
              />
            ) : (
              <path
                d="M22.5001 51.0502L6.9751 35.5252L14.0501 28.4502L22.5001 36.9252L47.2001 12.2002L54.2751 19.2752L22.5001 51.0502Z"
                fill="#F9F9FE"
              />
            )}
          </svg>
        </div>
      );
    }

    return (
      <div className="stepper-indicator stepper-number">
        <span className="stepper-number-text">
          {stepNumber}
        </span>
      </div>
    );
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (onClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={stepperClasses}
      style={style}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      aria-label={ariaLabel || `Step ${stepNumber}: ${label}${current ? ' (current)' : ''}${state === 'completed' ? ' (completed)' : ''}`}
    >
      {renderStepIndicator()}
      {text && (
        <div className="stepper-label">
          {state === 'completed' ? 'Complete' : label}
        </div>
      )}
    </div>
  );
};

export default Stepper;
