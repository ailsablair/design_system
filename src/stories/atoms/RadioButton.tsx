import React from 'react';

export type RadioButtonSize = 'small' | 'default' | 'large';
export type RadioButtonVariant = 'default' | 'primary' | 'success' | 'warning' | 'error';

export interface RadioButtonProps {
  label: string;
  name?: string;
  value?: string;
  selected?: boolean;
  disabled?: boolean;
  size?: RadioButtonSize;
  variant?: RadioButtonVariant;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  selected = false,
  disabled = false,
  size = 'default',
  variant = 'default',
  onChange,
}) => {
  const classNames = [
    'radio-button',
    `radio-button--${size}`,
    `radio-button--${variant}`,
    disabled ? 'radio-button--disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={classNames}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        disabled={disabled}
        onChange={onChange}
      />
      <span className="radio-button__label">{label}</span>
    </label>
  );
};

export default RadioButton;
