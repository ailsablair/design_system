import React from 'react';
import './textarea.css';

export interface TextareaProps {
  /** Textarea label text */
  label?: string;
  /** Textarea placeholder text */
  placeholder?: string;
  /** Textarea value */
  value?: string;
  /** Validation state */
  state?: 'default' | 'error' | 'warning' | 'success';
  /** Validation message text */
  message?: string;
  /** Show close/clear button */
  showClose?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Textarea ID */
  id?: string;
  /** Additional CSS classes */
  className?: string;
  /** Minimum height */
  minHeight?: number;
  /** Maximum height */
  maxHeight?: number;
  /** Resize behavior */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  /** Number of rows */
  rows?: number;
  /** onChange event handler */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** onClose/clear event handler */
  onClose?: () => void;
  /** onFocus event handler */
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** onBlur event handler */
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path
        d="M8 1.33333C11.6867 1.33333 14.6667 4.31333 14.6667 8C14.6667 11.6867 11.6867 14.6667 8 14.6667C4.31333 14.6667 1.33333 11.6867 1.33333 8C1.33333 4.31333 4.31333 1.33333 8 1.33333ZM10.3933 4.66667L8 7.06L5.60667 4.66667L4.66667 5.60667L7.06 8L4.66667 10.3933L5.60667 11.3333L8 8.94L10.3933 11.3333L11.3333 10.3933L8.94 8L11.3333 5.60667L10.3933 4.66667Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const ResizeHandle = () => (
  <div className="textarea-resize-handle">
    <div className="resize-line resize-line-1"></div>
    <div className="resize-line resize-line-2"></div>
    <div className="resize-line resize-line-3"></div>
  </div>
);

export const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder = 'Placeholder text',
  value,
  state = 'default',
  message,
  showClose = true,
  disabled = false,
  size = 'default',
  id,
  className = '',
  minHeight = 80,
  maxHeight,
  resize = 'vertical',
  rows = 4,
  onChange,
  onClose,
  onFocus,
  onBlur,
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  const hasValidationState = state !== 'default';

  return (
    <div className={`textarea-wrapper ${size} ${className}`}>
      {label && (
        <label htmlFor={textareaId} className={`textarea-label ${size}`}>
          {label}
        </label>
      )}
      
      <div className={`textarea-container ${state} ${size} ${disabled ? 'disabled' : ''}`}>
        <textarea
          id={textareaId}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          className={`textarea-field ${size}`}
          style={{
            minHeight: `${minHeight}px`,
            maxHeight: maxHeight ? `${maxHeight}px` : undefined,
            resize,
          }}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        
        {showClose && !disabled && (
          <button
            type="button"
            className={`textarea-close-button ${size}`}
            onClick={onClose}
            aria-label="Clear textarea"
          >
            <CloseIcon />
          </button>
        )}
        
        {resize !== 'none' && <ResizeHandle />}
      </div>
      
      {message && (
        <div className={`textarea-message ${state} ${size}`}>
          {message}
        </div>
      )}
    </div>
  );
};
