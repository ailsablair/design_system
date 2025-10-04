import React, { useState, useEffect } from 'react';
import './counter.css';

export interface CounterProps {
  /** Counter type - default shows label, simple is compact */
  type?: 'default' | 'simple';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** State variant */
  state?: 'default' | 'focus' | 'clicked' | 'disabled' | 'filled';
  /** Current count value */
  value?: number;
  /** Label text for default type */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** onChange callback */
  onChange?: (value: number) => void;
  /** Additional CSS classes */
  className?: string;
  /** ARIA label for accessibility */
  'aria-label'?: string;
}

// Icon components
const PlusIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const dimension = size === 'small' ? 18 : size === 'large' ? 26 : 22;
  
  return (
    <svg width={dimension} height={dimension} viewBox={`0 0 ${dimension} ${dimension}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d={size === 'small' 
          ? "M12.75 9.75H9.75V12.75H8.25V9.75H5.25V8.25H8.25V5.25H9.75V8.25H12.75M14.25 2.25H3.75C2.9175 2.25 2.25 2.9175 2.25 3.75V14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75H14.25C14.6478 15.75 15.0294 15.592 15.3107 15.3107C15.592 15.0294 15.75 14.6478 15.75 14.25V3.75C15.75 2.9175 15.075 2.25 14.25 2.25Z"
          : size === 'large'
          ? "M18.4167 14.0833H14.0833V18.4167H11.9167V14.0833H7.58333V11.9167H11.9167V7.58333H14.0833V11.9167H18.4167M20.5833 3.25H5.41667C4.21417 3.25 3.25 4.21417 3.25 5.41667V20.5833C3.25 21.158 3.47827 21.7091 3.8846 22.1154C4.29093 22.5217 4.84203 22.75 5.41667 22.75H20.5833C21.158 22.75 21.7091 22.5217 22.1154 22.1154C22.5217 21.7091 22.75 21.158 22.75 20.5833V5.41667C22.75 4.21417 21.775 3.25 20.5833 3.25Z"
          : "M15.5833 11.9167H11.9167V15.5833H10.0833V11.9167H6.41667V10.0833H10.0833V6.41667H11.9167V10.0833H15.5833M17.4167 2.75H4.58333C3.56583 2.75 2.75 3.56583 2.75 4.58333V17.4167C2.75 17.9029 2.94315 18.3692 3.28697 18.713C3.63079 19.0568 4.0971 19.25 4.58333 19.25H17.4167C17.9029 19.25 18.3692 19.0568 18.713 18.713C19.0568 18.3692 19.25 17.9029 19.25 17.4167V4.58333C19.25 3.56583 18.425 2.75 17.4167 2.75Z"
        }
        fill="currentColor"
      />
    </svg>
  );
};

const MinusIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const dimension = size === 'small' ? 18 : size === 'large' ? 26 : 22;
  
  return (
    <svg width={dimension} height={dimension} viewBox={`0 0 ${dimension} ${dimension}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d={size === 'small'
          ? "M12.75 9.75H5.25V8.25H12.75M14.25 2.25H3.75C2.9175 2.25 2.25 2.9175 2.25 3.75V14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75H14.25C14.6478 15.75 15.0294 15.592 15.3107 15.3107C15.592 15.0294 15.75 14.6478 15.75 14.25V3.75C15.75 2.9175 15.075 2.25 14.25 2.25Z"
          : size === 'large'
          ? "M18.4167 14.0833H7.58333V11.9167H18.4167M20.5833 3.25H5.41667C4.21417 3.25 3.25 4.21417 3.25 5.41667V20.5833C3.25 21.158 3.47827 21.7091 3.8846 22.1154C4.29093 22.5217 4.84203 22.75 5.41667 22.75H20.5833C21.158 22.75 21.7091 22.5217 22.1154 22.1154C22.5217 21.7091 22.75 21.158 22.75 20.5833V5.41667C22.75 4.21417 21.775 3.25 20.5833 3.25Z"
          : "M15.5833 11.9167H6.41667V10.0833H15.5833M17.4167 2.75H4.58333C3.56583 2.75 2.75 3.56583 2.75 4.58333V17.4167C2.75 17.9029 2.94315 18.3692 3.28697 18.713C3.63079 19.0568 4.0971 19.25 4.58333 19.25H17.4167C17.9029 19.25 18.3692 19.0568 18.713 18.713C19.0568 18.3692 19.25 17.9029 19.25 17.4167V4.58333C19.25 3.56583 18.425 2.75 17.4167 2.75Z"
        }
        fill="currentColor"
      />
    </svg>
  );
};

const TrashIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const dimension = size === 'small' ? 18 : size === 'large' ? 26 : 22;
  
  return (
    <svg width={dimension} height={dimension} viewBox={`0 0 ${dimension} ${dimension}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d={size === 'small'
          ? "M6.75 2.25V3H3V4.5H3.75V14.25C3.75 14.6478 3.90804 15.0294 4.18934 15.3107C4.47064 15.592 4.85218 15.75 5.25 15.75H12.75C13.1478 15.75 13.5294 15.592 13.8107 15.3107C14.092 15.0294 14.25 14.6478 14.25 14.25V4.5H15V3H11.25V2.25H6.75ZM6.75 6H8.25V12.75H6.75V6ZM9.75 6H11.25V12.75H9.75V6Z"
          : size === 'large'
          ? "M9.74992 3.25V4.33333H4.33325V6.5H5.41659V20.5833C5.41659 21.158 5.64486 21.7091 6.05119 22.1154C6.45752 22.5217 7.00862 22.75 7.58325 22.75H18.4166C18.9912 22.75 19.5423 22.5217 19.9486 22.1154C20.355 21.7091 20.5833 21.158 20.5833 20.5833V6.5H21.6666V4.33333H16.2499V3.25H9.74992ZM9.74992 8.66667H11.9166V18.4167H9.74992V8.66667ZM14.0833 8.66667H16.2499V18.4167H14.0833V8.66667Z"
          : "M8.25008 2.75V3.66667H3.66675V5.5H4.58341V17.4167C4.58341 17.9029 4.77657 18.3692 5.12039 18.713C5.4642 19.0568 5.93052 19.25 6.41675 19.25H15.5834C16.0696 19.25 16.536 19.0568 16.8798 18.713C17.2236 18.3692 17.4167 17.9029 17.4167 17.4167V5.5H18.3334V3.66667H13.7501V2.75H8.25008ZM8.25008 7.33333H10.0834V15.5833H8.25008V7.33333ZM11.9167 7.33333H13.7501V15.5833H11.9167V7.33333Z"
        }
        fill="#CE2031"
      />
    </svg>
  );
};

export const Counter: React.FC<CounterProps> = ({
  type = 'simple',
  size = 'default',
  state = 'default',
  value: externalValue,
  label,
  placeholder = 'Standard licence',
  disabled = false,
  min = 0,
  max = 999,
  onChange,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const [internalValue, setInternalValue] = useState(externalValue ?? 0);

  useEffect(() => {
    if (externalValue !== undefined) {
      setInternalValue(externalValue);
    }
  }, [externalValue]);

  const handleIncrement = () => {
    if (disabled) return;
    const newValue = Math.min(internalValue + 1, max);
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleDecrement = () => {
    if (disabled || internalValue === 0) return;
    const newValue = Math.max(internalValue - 1, min);
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const containerClasses = [
    'counter',
    `counter--${type}`,
    `counter--${size}`,
    `counter--${state}`,
    disabled && 'counter--disabled',
    className,
  ].filter(Boolean).join(' ');

  const isMinusDisabled = disabled || internalValue === 0;
  const isPlusDisabled = disabled || internalValue >= max;

  return (
    <div className={containerClasses}>
      {type === 'default' && label && (
        <label className="counter__label">
          {label}
        </label>
      )}
      
      <div className="counter__container">
        {type === 'default' && (
          <div className="counter__placeholder">
            {placeholder}
          </div>
        )}
        
        <div className="counter__controls">
          <button
            type="button"
            className={`counter__button counter__button--minus ${isMinusDisabled ? 'counter__button--disabled' : ''}`}
            onClick={handleDecrement}
            disabled={isMinusDisabled}
            aria-label="Decrease"
          >
            {internalValue === 1 ? (
              <TrashIcon size={size} />
            ) : (
              <MinusIcon size={size} />
            )}
          </button>
          
          <div className="counter__value" aria-label={ariaLabel || `Count: ${internalValue}`}>
            {internalValue}
          </div>
          
          <button
            type="button"
            className={`counter__button counter__button--plus ${isPlusDisabled ? 'counter__button--disabled' : ''}`}
            onClick={handleIncrement}
            disabled={isPlusDisabled}
            aria-label="Increase"
          >
            <PlusIcon size={size} />
          </button>
        </div>
      </div>
    </div>
  );
};
