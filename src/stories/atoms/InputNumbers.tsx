import React, { useState, useRef } from 'react';
import './inputNumbers.css';

export interface InputNumbersProps {
  /** Label text */
  label?: string;
  /** Component type variant */
  type?: 'default' | 'simple';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Current state */
  state?: 'default' | 'focus' | 'pressed' | 'disabled';
  /** Current number value */
  value?: number;
  /** Minimum allowed value */
  min?: number;
  /** Maximum allowed value */
  max?: number;
  /** Step increment/decrement */
  step?: number;
  /** Placeholder text for input field (default type only) */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** onChange event handler */
  onChange?: (value: number) => void;
  /** onIncrement event handler */
  onIncrement?: () => void;
  /** onDecrement event handler */
  onDecrement?: () => void;
  /** Additional CSS classes */
  className?: string;
}

const MinusIcon = ({ size = 'default', disabled = false }: { size?: 'small' | 'default' | 'large'; disabled?: boolean }) => {
  const iconSize = size === 'small' ? '18' : size === 'large' ? '26' : '22';
  const fillColor = disabled ? '#9CA3AF' : '#2F42BD';
  const opacity = disabled ? '0.3' : '1';

  return (
    <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity={opacity}>
        <path 
          d={size === 'small' 
            ? "M12.75 9.75H5.25V8.25H12.75M14.25 2.25H3.75C2.9175 2.25 2.25 2.9175 2.25 3.75V14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75H14.25C14.6478 15.75 15.0294 15.592 15.3107 15.3107C15.592 15.0294 15.75 14.6478 15.75 14.25V3.75C15.75 2.9175 15.075 2.25 14.25 2.25Z"
            : size === 'large'
            ? "M18.4167 14.0833H7.58333V11.9167H18.4167M20.5833 3.25H5.41667C4.21417 3.25 3.25 4.21417 3.25 5.41667V20.5833C3.25 21.158 3.47827 21.7091 3.8846 22.1154C4.29093 22.5217 4.84203 22.75 5.41667 22.75H20.5833C21.158 22.75 21.7091 22.5217 22.1154 22.1154C22.5217 21.7091 22.75 21.158 22.75 20.5833V5.41667C22.75 4.21417 21.775 3.25 20.5833 3.25Z"
            : "M15.5833 11.9167H6.41667V10.0833H15.5833M17.4167 2.75H4.58333C3.56583 2.75 2.75 3.56583 2.75 4.58333V17.4167C2.75 17.9029 2.94315 18.3692 3.28697 18.713C3.63079 19.0568 4.0971 19.25 4.58333 19.25H17.4167C17.9029 19.25 18.3692 19.0568 18.713 18.713C19.0568 18.3692 19.25 17.9029 19.25 17.4167V4.58333C19.25 3.56583 18.425 2.75 17.4167 2.75Z"
          } 
          fill={fillColor} 
        />
      </g>
    </svg>
  );
};

const PlusIcon = ({ size = 'default', disabled = false, focused = false, pressed = false }: { 
  size?: 'small' | 'default' | 'large'; 
  disabled?: boolean;
  focused?: boolean;
  pressed?: boolean;
}) => {
  const iconSize = size === 'small' ? '18' : size === 'large' ? '26' : '22';
  const fillColor = disabled ? '#9CA3AF' : '#2F42BD';
  const strokeColor = focused ? '#0BA7EA' : pressed ? '#04435E' : undefined;
  const opacity = disabled ? '0.3' : '1';

  if (focused || pressed) {
    const adjustedSize = size === 'small' ? '20' : size === 'large' ? '30' : '26';
    return (
      <svg width={adjustedSize} height={adjustedSize} viewBox={`0 0 ${adjustedSize} ${adjustedSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d={size === 'small'
            ? "M4 1V2H16V1V0H4V1ZM19 4H18V16H19H20V4H19ZM16 19V18H4V19V20H16V19ZM1 16H2V4H1H0V16H1ZM4 19V18C2.89543 18 2 17.1046 2 16H1H0C0 18.2091 1.79086 20 4 20V19ZM19 16H18C18 17.1046 17.1046 18 16 18V19V20C18.2091 20 20 18.2091 20 16H19ZM16 1V2C17.1046 2 18 2.89543 18 4H19H20C20 1.79086 18.2091 0 16 0V1ZM4 1V0C1.79086 0 0 1.79086 0 4H1H2C2 2.89543 2.89543 2 4 2V1Z"
            : size === 'large'
            ? "M6 2V3.5H24V2V0.5H6V2ZM28 6H26.5V24H28H29.5V6H28ZM24 28V26.5H6V28V29.5H24V28ZM2 24H3.5V6H2H0.5V24H2ZM6 28V26.5C4.61929 26.5 3.5 25.3807 3.5 24H2H0.5C0.5 27.0376 2.96243 29.5 6 29.5V28ZM28 24H26.5C26.5 25.3807 25.3807 26.5 24 26.5V28V29.5C27.0376 29.5 29.5 27.0376 29.5 24H28ZM24 2V3.5C25.3807 3.5 26.5 4.61929 26.5 6H28H29.5C29.5 2.96243 27.0376 0.5 24 0.5V2ZM6 2V0.5C2.96243 0.5 0.5 2.96243 0.5 6H2H3.5C3.5 4.61929 4.61929 3.5 6 3.5V2Z"
            : "M6 2V3.5H20V2V0.5H6V2ZM24 6H22.5V20H24H25.5V6H24ZM20 24V22.5H6V24V25.5H20V24ZM2 20H3.5V6H2H0.5V20H2ZM6 24V22.5C4.61929 22.5 3.5 21.3807 3.5 20H2H0.5C0.5 23.0376 2.96243 25.5 6 25.5V24ZM24 20H22.5C22.5 21.3807 21.3807 22.5 20 22.5V24V25.5C23.0376 25.5 25.5 23.0376 25.5 20H24ZM20 2V3.5C21.3807 3.5 22.5 4.61929 22.5 6H24H25.5C25.5 2.96243 23.0376 0.5 20 0.5V2ZM6 2V0.5C2.96243 0.5 0.5 2.96243 0.5 6H2H3.5C3.5 4.61929 4.61929 3.5 6 3.5V2Z"
          }
          fill={strokeColor} 
        />
        <path 
          d={size === 'small'
            ? "M13.75 10.75H10.75V13.75H9.25V10.75H6.25V9.25H9.25V6.25H10.75V9.25H13.75M15.25 3.25H4.75C3.9175 3.25 3.25 3.9175 3.25 4.75V15.25C3.25 15.6478 3.40804 16.0294 3.68934 16.3107C3.97064 16.592 4.35218 16.75 4.75 16.75H15.25C15.6478 16.75 16.0294 16.592 16.3107 16.3107C16.592 16.0294 16.75 15.6478 16.75 15.25V4.75C16.75 3.9175 16.075 3.25 15.25 3.25Z"
            : size === 'large'
            ? "M20.4167 16.0833H16.0833V20.4167H13.9167V16.0833H9.58333V13.9167H13.9167V9.58333H16.0833V13.9167H20.4167M22.5833 5.25H7.41667C6.21417 5.25 5.25 6.21417 5.25 7.41667V22.5833C5.25 23.158 5.47827 23.7091 5.8846 24.1154C6.29093 24.5217 6.84203 24.75 7.41667 24.75H22.5833C23.158 24.75 23.7091 24.5217 24.1154 24.1154C24.5217 23.7091 24.75 23.158 24.75 22.5833V7.41667C24.75 6.21417 23.775 5.25 22.5833 5.25Z"
            : "M17.5833 13.9167H13.9167V17.5833H12.0833V13.9167H8.41667V12.0833H12.0833V8.41667H13.9167V12.0833H17.5833M19.4167 4.75H6.58333C5.56583 4.75 4.75 5.56583 4.75 6.58333V19.4167C4.75 19.9029 4.94315 20.3692 5.28697 20.713C5.63079 21.0568 6.0971 21.25 6.58333 21.25H19.4167C19.9029 21.25 20.3692 21.0568 20.713 20.713C21.0568 20.3692 21.25 19.9029 21.25 19.4167V6.58333C21.25 5.56583 20.425 4.75 19.4167 4.75Z"
          }
          fill={fillColor} 
        />
      </svg>
    );
  }

  return (
    <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity={opacity}>
        <path 
          d={size === 'small'
            ? "M12.75 9.75H9.75V12.75H8.25V9.75H5.25V8.25H8.25V5.25H9.75V8.25H12.75M14.25 2.25H3.75C2.9175 2.25 2.25 2.9175 2.25 3.75V14.25C2.25 14.6478 2.40804 15.0294 2.68934 15.3107C2.97064 15.592 3.35218 15.75 3.75 15.75H14.25C14.6478 15.75 15.0294 15.592 15.3107 15.3107C15.592 15.0294 15.75 14.6478 15.75 14.25V3.75C15.75 2.9175 15.075 2.25 14.25 2.25Z"
            : size === 'large'
            ? "M18.4167 14.0833H14.0833V18.4167H11.9167V14.0833H7.58333V11.9167H11.9167V7.58333H14.0833V11.9167H18.4167M20.5833 3.25H5.41667C4.21417 3.25 3.25 4.21417 3.25 5.41667V20.5833C3.25 21.158 3.47827 21.7091 3.8846 22.1154C4.29093 22.5217 4.84203 22.75 5.41667 22.75H20.5833C21.158 22.75 21.7091 22.5217 22.1154 22.1154C22.5217 21.7091 22.75 21.158 22.75 20.5833V5.41667C22.75 4.21417 21.775 3.25 20.5833 3.25Z"
            : "M15.5833 11.9167H11.9167V15.5833H10.0833V11.9167H6.41667V10.0833H10.0833V6.41667H11.9167V10.0833H15.5833M17.4167 2.75H4.58333C3.56583 2.75 2.75 3.56583 2.75 4.58333V17.4167C2.75 17.9029 2.94315 18.3692 3.28697 18.713C3.63079 19.0568 4.0971 19.25 4.58333 19.25H17.4167C17.9029 19.25 18.3692 19.0568 18.713 18.713C19.0568 18.3692 19.25 17.9029 19.25 17.4167V4.58333C19.25 3.56583 18.425 2.75 17.4167 2.75Z"
          } 
          fill={fillColor} 
        />
      </g>
    </svg>
  );
};

const TrashIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const iconSize = size === 'small' ? '18' : size === 'large' ? '26' : '22';
  
  return (
    <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
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

export const InputNumbers: React.FC<InputNumbersProps> = ({
  label,
  type = 'simple',
  size = 'default',
  state = 'default',
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  placeholder = 'Standard licence',
  disabled = false,
  onChange,
  onIncrement,
  onDecrement,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Use effect to sync with external state prop
  React.useEffect(() => {
    setIsFocused(state === 'focus');
    setIsPressed(state === 'pressed');
  }, [state]);

  // Sync internal value with prop value to prevent conflicts
  React.useEffect(() => {
    if (value !== undefined && value !== internalValue) {
      setInternalValue(value);
    }
  }, [value, internalValue]);

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const currentValue = value !== undefined ? value : internalValue;
  const isAtMin = currentValue <= min;
  const isAtMax = currentValue >= max;
  const showTrashIcon = currentValue === 1;

  const handleIncrement = React.useCallback(() => {
    if (disabled || isAtMax) return;
    const newValue = Math.min(currentValue + step, max);
    setInternalValue(newValue);
    if (onChange) onChange(newValue);
    if (onIncrement) onIncrement();
  }, [disabled, isAtMax, currentValue, step, max, onChange, onIncrement]);

  const handleDecrement = React.useCallback(() => {
    if (disabled || isAtMin) return;
    const newValue = Math.max(currentValue - step, min);
    setInternalValue(newValue);
    if (onChange) onChange(newValue);
    if (onDecrement) onDecrement();
  }, [disabled, isAtMin, currentValue, step, min, onChange, onDecrement]);

  const handleFocus = React.useCallback(() => {
    if (!disabled && state !== 'focus') {
      setIsFocused(true);
    }
  }, [disabled, state]);

  const handleBlur = React.useCallback(() => {
    if (state !== 'focus') {
      setIsFocused(false);
    }
  }, [state]);

  const handleMouseDown = React.useCallback(() => {
    if (!disabled && state !== 'pressed') {
      setIsPressed(true);
    }
  }, [disabled, state]);

  const handleMouseUp = React.useCallback(() => {
    if (state !== 'pressed') {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setIsPressed(false);
      }, 10); // Small delay to prevent rapid state changes
    }
  }, [state]);

  const getStateClass = () => {
    if (disabled) return 'disabled';
    if (isPressed || state === 'pressed') return 'pressed';
    if (isFocused || state === 'focus') return 'focus';
    if (currentValue > 0) return 'filled';
    return 'default';
  };

  return (
    <div className={`input-numbers-wrapper ${size} ${type} ${className}`}>
      {label && (
        <label className={`input-numbers-label ${size}`}>
          {label}
        </label>
      )}
      
      <div 
        className={`input-numbers-container ${getStateClass()} ${size} ${type}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {type === 'default' && (
          <div className={`input-numbers-text ${size}`}>
            {placeholder}
          </div>
        )}
        
        <div className={`input-numbers-controls ${size}`}>
          <button
            type="button"
            className={`input-numbers-button minus ${size}`}
            onClick={handleDecrement}
            disabled={disabled || isAtMin}
            aria-label="Decrease value"
          >
            {showTrashIcon ? (
              <TrashIcon size={size} />
            ) : (
              <MinusIcon size={size} disabled={disabled || isAtMin} />
            )}
          </button>
          
          <div className={`input-numbers-value ${size}`}>
            {currentValue}
          </div>
          
          <button
            type="button"
            className={`input-numbers-button plus ${size}`}
            onClick={handleIncrement}
            disabled={disabled || isAtMax}
            aria-label="Increase value"
          >
            <PlusIcon 
              size={size} 
              disabled={disabled || isAtMax}
              focused={isFocused || state === 'focus'}
              pressed={isPressed || state === 'pressed'}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
