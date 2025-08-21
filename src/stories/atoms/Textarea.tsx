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
  state?: 'default' | 'error' | 'warning' | 'success' | 'focus' | 'typing' | 'filled';
  /** Validation message text */
  message?: string;
  /** Show close/clear button */
  showClose?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Required field indicator */
  required?: boolean;
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
  /** Maximum character count */
  maxLength?: number;
  /** Show character count */
  showCharacterCount?: boolean;
  /** onChange event handler */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** onClose/clear event handler */
  onClose?: () => void;
  /** onFocus event handler */
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** onBlur event handler */
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

const CloseCircleIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const iconSize = size === 'small' ? '14' : size === 'large' ? '20' : '16';
  const viewBox = size === 'small' ? '0 0 14 14' : size === 'large' ? '0 0 20 20' : '0 0 16 16';

  return (
    <svg 
      width={iconSize} 
      height={iconSize} 
      viewBox={viewBox} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <g opacity="0.6">
        {size === 'small' ? (
          <path d="M7.00008 1.16675C10.2259 1.16675 12.8334 3.77425 12.8334 7.00008C12.8334 10.2259 10.2259 12.8334 7.00008 12.8334C3.77425 12.8334 1.16675 10.2259 1.16675 7.00008C1.16675 3.77425 3.77425 1.16675 7.00008 1.16675ZM9.09425 4.08341L7.00008 6.17758L4.90591 4.08341L4.08341 4.90591L6.17758 7.00008L4.08341 9.09425L4.90591 9.91675L7.00008 7.82258L9.09425 9.91675L9.91675 9.09425L7.82258 7.00008L9.91675 4.90591L9.09425 4.08341Z" fill="#61607C" />
        ) : size === 'large' ? (
          <path d="M10.0001 1.66675C14.6084 1.66675 18.3334 5.39175 18.3334 10.0001C18.3334 14.6084 14.6084 18.3334 10.0001 18.3334C5.39175 18.3334 1.66675 14.6084 1.66675 10.0001C1.66675 5.39175 5.39175 1.66675 10.0001 1.66675ZM12.9917 5.83342L10.0001 8.82508L7.00841 5.83342L5.83342 7.00841L8.82508 10.0001L5.83342 12.9917L7.00841 14.1667L10.0001 11.1751L12.9917 14.1667L14.1667 12.9917L11.1751 10.0001L14.1667 7.00841L12.9917 5.83342Z" fill="#61607C" />
        ) : (
          <path d="M7.99992 1.33325C11.6866 1.33325 14.6666 4.31325 14.6666 7.99992C14.6666 11.6866 11.6866 14.6666 7.99992 14.6666C4.31325 14.6666 1.33325 11.6866 1.33325 7.99992C1.33325 4.31325 4.31325 1.33325 7.99992 1.33325ZM10.3933 4.66659L7.99992 7.05992L5.60659 4.66659L4.66659 5.60659L7.05992 7.99992L4.66659 10.3933L5.60659 11.3333L7.99992 8.93992L10.3933 11.3333L11.3333 10.3933L8.93992 7.99992L11.3333 5.60659L10.3933 4.66659Z" fill="#61607C" />
        )}
      </g>
    </svg>
  );
};

export const Textarea: React.FC<TextareaProps> = ({
  label = 'Input name',
  placeholder = 'Placeholder text',
  value,
  state = 'default',
  message,
  showClose = true,
  disabled = false,
  required = false,
  size = 'default',
  id,
  className = '',
  minHeight = 80,
  maxHeight,
  resize = 'none',
  rows = 4,
  maxLength,
  showCharacterCount = false,
  onChange,
  onClose,
  onFocus,
  onBlur,
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substring(2, 11)}`;
  const isFocused = state === 'focus' || state === 'typing';
  const isTyping = state === 'typing';
  const isFilled = state === 'filled' || (value !== undefined && value !== '');
  const characterCount = value?.length || 0;
  const isOverLimit = maxLength ? characterCount > maxLength : false;
  
  // Handle message text based on state
  const getStateMessage = () => {
    if (message) return message;
    
    switch (state) {
      case 'error':
        return 'This is an error associated with the input';
      case 'warning':
        return 'This is a warning associated with the input';
      case 'success':
        return 'This is a success associated with the input';
      default:
        return undefined;
    }
  };

  const stateMessage = getStateMessage();

  // Handle placeholder and value display for different states
  const getDisplayContent = () => {
    if (state === 'focus' && (!value || value === '')) {
      return { type: 'cursor', content: '|' };
    }
    
    if (state === 'typing' && value?.includes('|')) {
      const parts = value.split('|');
      return { 
        type: 'typing', 
        content: parts[0], 
        cursor: '|' 
      };
    }
    
    if (state === 'typing' && value && !value.includes('|')) {
      return { 
        type: 'typing', 
        content: value.endsWith('n') ? value : 'This is me typin', 
        cursor: '|' 
      };
    }
    
    if (isFilled && value) {
      return { type: 'filled', content: value };
    }
    
    return { type: 'placeholder', content: placeholder };
  };

  const displayContent = getDisplayContent();

  return (
    <div className={`textarea-wrapper ${className}`}>
      {/* Label */}
      {label && (
        <div className={`textarea-label textarea-label--${size}`}>
          <div className="textarea-label__text">
            {label}
            {required && <span className="textarea-label__required">*</span>}
          </div>
        </div>
      )}

      {/* Textarea Container */}
      <div className={`textarea-area textarea-area--${size}`}>
        <div className={`textarea-input textarea-input--${size} textarea-input--${state} ${disabled ? 'textarea-input--disabled' : ''}`}>
          <div className={`textarea-content textarea-content--${size}`}>
            {displayContent.type === 'cursor' ? (
              <div className={`textarea-text textarea-text--${size} textarea-text--cursor`}>
                |
              </div>
            ) : displayContent.type === 'typing' ? (
              <div className={`textarea-text textarea-text--${size}`}>
                <span className="textarea-text__content">{displayContent.content}</span>
                <span className="textarea-text__cursor">|</span>
              </div>
            ) : displayContent.type === 'filled' ? (
              <div className={`textarea-text textarea-text--${size} textarea-text--filled`}>
                {displayContent.content}
              </div>
            ) : (
              <div className={`textarea-text textarea-text--${size} textarea-text--placeholder`}>
                {displayContent.content}
              </div>
            )}
          </div>

          {/* Close Button */}
          {showClose && !disabled && (
            <button
              type="button"
              className={`textarea-close textarea-close--${size}`}
              onClick={onClose}
              aria-label="Clear textarea"
              tabIndex={-1}
            >
              <CloseCircleIcon size={size} />
            </button>
          )}

          {/* Hidden actual textarea for form functionality */}
          <textarea
            id={textareaId}
            value={value || ''}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            rows={rows}
            maxLength={maxLength}
            className="textarea-hidden-input"
            style={{
              position: 'absolute',
              opacity: 0,
              pointerEvents: 'none',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              resize: 'none',
            }}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            aria-describedby={stateMessage ? `${textareaId}-message` : undefined}
            aria-invalid={state === 'error'}
          />
        </div>
      </div>

      {/* Message */}
      {stateMessage && (
        <div 
          id={`${textareaId}-message`}
          className={`textarea-message textarea-message--${size} textarea-message--${state}`}
        >
          {stateMessage}
        </div>
      )}

      {/* Character count */}
      {showCharacterCount && (
        <div className={`textarea-character-count textarea-character-count--${size} ${isOverLimit ? 'textarea-character-count--over-limit' : ''}`}>
          {characterCount}{maxLength ? ` / ${maxLength}` : ''}
        </div>
      )}
    </div>
  );
};

export default Textarea;
