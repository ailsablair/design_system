import React from 'react';
import './slider.css';

export interface SliderProps {
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Whether track is filled (shows progress) */
  filled?: boolean;
  /** Show start number */
  showStart?: boolean;
  /** Show end number */
  showEnd?: boolean;
  /** Show numbers on dots */
  showNumber?: boolean;
  /** Start value */
  startValue?: number;
  /** End value */
  endValue?: number;
  /** Current value (for controlled component) */
  value?: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step size */
  step?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Slider ID */
  id?: string;
  /** Slider name */
  name?: string;
  /** Additional CSS classes */
  className?: string;
  /** onChange event handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** onInput event handler for real-time updates */
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  /** aria-label for accessibility */
  'aria-label'?: string;
}

export const Slider: React.FC<SliderProps> = ({
  size = 'default',
  filled = false,
  showStart = true,
  showEnd = true,
  showNumber = true,
  startValue = 0,
  endValue = 1,
  value = 0,
  min = 0,
  max = 1,
  step = 0.1,
  disabled = false,
  id,
  name,
  className = '',
  onChange,
  onInput,
  'aria-label': ariaLabel,
}) => {
  const sliderId = id || `slider-${Math.random().toString(36).substring(2, 11)}`;
  const [sliderValue, setSliderValue] = React.useState(value);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      const newValue = parseFloat(event.target.value);
      setSliderValue(newValue);
      if (onChange) {
        onChange(event);
      }
    }
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    if (!disabled && onInput) {
      onInput(event);
    }
  };

  const handleDotClick = (dotValue: number) => {
    if (!disabled) {
      setSliderValue(dotValue);
      // Create a synthetic event for onChange
      const event = {
        target: { value: dotValue.toString() }
      } as React.ChangeEvent<HTMLInputElement>;
      if (onChange) {
        onChange(event);
      }
    }
  };

  // Calculate percentage for styling
  const percentage = ((sliderValue - min) / (max - min)) * 100;

  return (
    <div className={`slider-container ${size} ${filled ? 'filled' : 'unfilled'} ${disabled ? 'disabled' : ''} ${className}`}>
      {showStart && showNumber && (
        <div className={`slider-number start ${size}`}>
          <span className={`number-text ${size} ${filled ? 'filled' : 'unfilled'}`}>
            {startValue}
          </span>
          <button
            type="button"
            className={`number-dot start ${size} ${disabled ? 'disabled' : ''}`}
            onClick={() => handleDotClick(min)}
            disabled={disabled}
            aria-label={`Set slider to ${startValue}`}
          />
        </div>
      )}
      
      <div className={`slider-track-container ${size}`}>
        <div className={`slider-track ${size} ${filled ? 'filled' : 'unfilled'}`}></div>
        <input
          id={sliderId}
          type="range"
          name={name}
          min={min}
          max={max}
          step={step}
          value={sliderValue}
          disabled={disabled}
          onChange={handleChange}
          onInput={handleInput}
          className={`slider-input ${size} ${filled ? 'filled' : 'unfilled'}`}
          aria-label={ariaLabel}
        />
      </div>
      
      {showEnd && showNumber && (
        <div className={`slider-number end ${size}`}>
          <span className={`number-text ${size} ${filled ? 'filled' : 'unfilled'}`}>
            {endValue}
          </span>
          <button
            type="button"
            className={`number-dot end ${size} ${disabled ? 'disabled' : ''}`}
            onClick={() => handleDotClick(max)}
            disabled={disabled}
            aria-label={`Set slider to ${endValue}`}
          />
        </div>
      )}
    </div>
  );
};
