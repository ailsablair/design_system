import React, { useEffect, useRef } from 'react';
import './checkbox.css';

export type CheckboxSize = 'small' | 'default' | 'large';
export type CheckboxVariant = 'default' | 'primary' | 'success' | 'warning' | 'error';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: string;
  size?: CheckboxSize;
  variant?: CheckboxVariant;
  state?: 'default' | 'error' | 'warning' | 'success' | 'disabled';
  shape?: 'square' | 'round';
  indeterminate?: boolean;
  message?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  size = 'default',
  variant = 'default',
  state = 'default',
  shape = 'square',
  indeterminate = false,
  disabled,
  message,
  className = '',
  ...inputProps
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const isDisabled = disabled || state === 'disabled';

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const wrapperClasses = [
    'checkbox',
    `checkbox--size-${size}`,
    `checkbox--variant-${variant}`,
    `checkbox--shape-${shape}`,
    state !== 'default' ? `checkbox--state-${state}` : '',
    isDisabled ? 'checkbox--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={wrapperClasses}>
      <span className="checkbox__control">
        <input
          ref={inputRef}
          type="checkbox"
          className="checkbox__input"
          disabled={isDisabled}
          {...inputProps}
        />
        <span className="checkbox__icon" />
      </span>
      {label && <span className="checkbox__label">{label}</span>}
      {message && <span className="checkbox__message">{message}</span>}
    </label>
  );
};

export default Checkbox;
