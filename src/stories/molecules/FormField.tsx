import React from 'react';
import { Input } from '../atoms/Input';
import type { InputProps } from '../atoms/Input';
import { Label } from '../atoms/Label';
import './formField.css';

export interface FormFieldProps extends Omit<InputProps, 'label' | 'message'> {
  /** Field label text */
  label?: string;
  /** Field description/help text */
  description?: string;
  /** Error message */
  errorMessage?: string;
  /** Success message */
  successMessage?: string;
  /** Warning message */
  warningMessage?: string;
  /** Required field indicator */
  required?: boolean;
  /** Field layout */
  layout?: 'vertical' | 'horizontal';
  /** Label width (for horizontal layout) */
  labelWidth?: string;
  /** Additional CSS classes */
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  description,
  errorMessage,
  successMessage,
  warningMessage,
  required = false,
  layout = 'vertical',
  labelWidth = '120px',
  state = 'default',
  className = '',
  id,
  ...inputProps
}) => {
  const fieldId = id || `form-field-${Math.random().toString(36).substring(2, 11)}`;
  
  // Determine field state based on messages
  let fieldState = state;
  if (errorMessage) fieldState = 'error';
  else if (warningMessage) fieldState = 'warning';
  else if (successMessage) fieldState = 'success';
  
  // Get the appropriate message
  const message = errorMessage || warningMessage || successMessage;
  
  const fieldClasses = [
    'form-field',
    `form-field--${layout}`,
    fieldState !== 'default' ? `form-field--${fieldState}` : '',
    className
  ].filter(Boolean).join(' ');

  const labelElement = label && (
    <div
      className="form-field-label"
      style={layout === 'horizontal' ? { width: labelWidth } : undefined}
    >
      <Label
        size={inputProps.size}
        htmlFor={fieldId}
      >
        {label}
        {required && <span className="form-field-required">*</span>}
      </Label>
      {description && (
        <div className="form-field-description">
          {description}
        </div>
      )}
    </div>
  );

  const inputElement = (
    <div className="form-field-input">
      <Input
        {...inputProps}
        id={fieldId}
        state={fieldState}
        message={message}
      />
    </div>
  );

  if (layout === 'horizontal') {
    return (
      <div className={fieldClasses}>
        {labelElement}
        {inputElement}
      </div>
    );
  }

  return (
    <div className={fieldClasses}>
      {labelElement}
      {inputElement}
    </div>
  );
};
