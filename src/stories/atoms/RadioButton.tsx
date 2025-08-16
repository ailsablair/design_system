import React from 'react';
import './radioButton.css';

export interface RadioButtonProps {
  /** Radio button label text */
  label?: string;
  /** Color variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Disabled state */
  disabled?: boolean;
  /** Selected state (controlled) */
  selected?: boolean;
  /** Input ID */
  id?: string;
  /** Input name (for grouping radio buttons) */
  name?: string;
  /** Input value */
  value?: string;
  /** Additional CSS classes */
  className?: string;
  /** onChange event handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioIndicator = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const indicatorSize = size === 'small' ? '6' : size === 'large' ? '10' : '8';
  
  return (
    <div 
      className={`radio-indicator ${size}`}
      style={{
        width: `${indicatorSize}px`,
        height: `${indicatorSize}px`,
      }}
    />
  );
};

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  variant = 'default',
  size = 'default',
  disabled = false,
  selected = false,
  id,
  name,
  value,
  className = '',
  onChange,
}) => {
  const radioId = id || `radio-${Math.random().toString(36).substring(2, 11)}`;
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event);
    }
  };

  return (
    <div className={`radio-wrapper ${size} ${className}`}>
      <div className={`radio-container ${selected ? 'selected' : ''} ${variant} ${size} ${disabled ? 'disabled' : ''}`}>
        <input
          id={radioId}
          type="radio"
          name={name}
          value={value}
          checked={selected}
          disabled={disabled}
          onChange={handleChange}
          className="radio-input"
        />
        <div className={`radio-visual ${selected ? 'selected' : ''} ${variant} ${size} ${disabled ? 'disabled' : ''}`}>
          {selected && <RadioIndicator size={size} />}
        </div>
      </div>
      
      {label && (
        <label htmlFor={radioId} className={`radio-label ${size} ${disabled ? 'disabled' : ''}`}>
          {label}
        </label>
      )}
    </div>
  );
};
