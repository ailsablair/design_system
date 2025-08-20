import React from 'react';
import './checkbox.css';

export interface CheckboxProps {
  /** Checkbox label text */
  label?: string;
  /** Checkbox state */
  state?: 'default' | 'checked' | 'indeterminate' | 'error' | 'warning' | 'success' | 'disabled';
  /** Color variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Validation message text */
  message?: string;
  /** Required field indicator */
  required?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Checked state (controlled) */
  checked?: boolean;
  /** Indeterminate state */
  indeterminate?: boolean;
  /** Input ID */
  id?: string;
  /** Input name */
  name?: string;
  /** Input value */
  value?: string;
  /** Additional CSS classes */
  className?: string;
  /** onChange event handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** onFocus event handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** onBlur event handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const CheckIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const iconSize = size === 'small' ? '12' : size === 'large' ? '16' : '14';
  
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M11.6663 3.5L5.24967 9.91667L2.33301 7" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

const IndeterminateIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const iconSize = size === 'small' ? '12' : size === 'large' ? '16' : '14';
  
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M3.5 7H10.5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  state = 'default',
  variant = 'default',
  size = 'default',
  message,
  required = false,
  disabled = false,
  checked = false,
  indeterminate = false,
  id,
  name,
  value,
  className = '',
  onChange,
  onFocus,
  onBlur,
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substring(2, 11)}`;
  
  // Determine the actual state based on props
  const actualState = disabled ? 'disabled' : indeterminate ? 'indeterminate' : checked ? 'checked' : state;
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event);
    }
  };

  return (
    <div className={`checkbox-wrapper ${size} ${className}`}>
      <div className={`checkbox-container ${actualState} ${variant} ${size}`}>
        <input
          id={checkboxId}
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className="checkbox-input"
          aria-checked={indeterminate ? 'mixed' : checked}
        />
        <div className={`checkbox-visual ${actualState} ${variant} ${size}`}>
          {actualState === 'checked' && <CheckIcon size={size} />}
          {actualState === 'indeterminate' && <IndeterminateIcon size={size} />}
        </div>
      </div>
      
      {label && (
        <label htmlFor={checkboxId} className={`checkbox-label ${size} ${disabled ? 'disabled' : ''}`}>
          {label}
        </label>
      )}
    </div>
  );
};
