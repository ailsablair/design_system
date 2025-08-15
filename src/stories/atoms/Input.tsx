import React from 'react';
import './input.css';

export interface InputProps {
  /** Input label text */
  label?: string;
  /** Input placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Validation state */
  state?: 'default' | 'error' | 'warning' | 'success';
  /** Validation message text */
  message?: string;
  /** Show close/clear button */
  showClose?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number';
  /** Input ID */
  id?: string;
  /** Additional CSS classes */
  className?: string;
  /** onChange event handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** onClose/clear event handler */
  onClose?: () => void;
}

const AlertIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 1C6.61553 1 5.26215 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53284 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7379 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1Z"
      fill="currentColor"
    />
    <path
      d="M8 11.5C8.55228 11.5 9 11.0523 9 10.5C9 9.94772 8.55228 9.5 8 9.5C7.44772 9.5 7 9.94772 7 10.5C7 11.0523 7.44772 11.5 8 11.5Z"
      fill="white"
    />
    <path
      d="M8 4.5V8.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 4L4 12M4 4L12 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Input: React.FC<InputProps> = ({
  label,
  placeholder = 'This is a filled input',
  value,
  state = 'default',
  message,
  showClose = true,
  disabled = false,
  type = 'text',
  id,
  className = '',
  onChange,
  onClose,
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const hasValidationState = state !== 'default';

  return (
    <div className={`input-wrapper ${className}`}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      
      <div className={`input-container ${state} ${disabled ? 'disabled' : ''}`}>
        {hasValidationState && (
          <div className="input-icon">
            <AlertIcon />
          </div>
        )}
        
        <input
          id={inputId}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          className="input-field"
          onChange={onChange}
        />
        
        {showClose && !disabled && (
          <button
            type="button"
            className="input-close-button"
            onClick={onClose}
            aria-label="Clear input"
          >
            <CloseIcon />
          </button>
        )}
      </div>
      
      {message && (
        <div className={`input-message ${state}`}>
          {message}
        </div>
      )}
    </div>
  );
};
