import React from 'react';
import './input.css';
import { Tag } from './Tag';

export interface TagData {
  id: string;
  label: string;
}

export interface InputProps {
  /** Input label text */
  label?: string;
  /** Input placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Validation state */
  state?: 'default' | 'error' | 'warning' | 'success' | 'focus' | 'typing';
  /** Validation message text */
  message?: string;
  /** Show close/clear button */
  showClose?: boolean;
  /** Show leading icon */
  showLeadingIcon?: boolean;
  /** Show dropdown chevron */
  showDropdown?: boolean;
  /** Input variant */
  variant?: 'simple' | 'tags';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Tags for tag input variant */
  tags?: TagData[];
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
  /** onTagRemove event handler */
  onTagRemove?: (tagId: string) => void;
  /** onDropdownToggle event handler */
  onDropdownToggle?: () => void;
  /** onFocus event handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** onBlur event handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const AlarmIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const iconSize = size === 'small' ? '14' : size === 'large' ? '20' : '16';
  const opacity = '0.6';

  return (
    <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity={opacity}>
        {size === 'small' ? (
          <path d="M3.5 4.02498L2.2575 2.78831L3.08 1.96581L4.31667 3.20831L3.5 4.02498ZM7.58333 0.583313V2.33331H6.41667V0.583313H7.58333ZM11.7425 2.78831L10.5 4.02498L9.68333 3.20831L10.92 1.96581L11.7425 2.78831ZM2.625 6.12498V7.29165H0.875V6.12498H2.625ZM11.375 6.12498H13.125V7.29165H11.375V6.12498ZM3.5 11.6666H10.5C10.8094 11.6666 11.1062 11.7896 11.325 12.0084C11.5437 12.2271 11.6667 12.5239 11.6667 12.8333H2.33333C2.33333 12.5239 2.45625 12.2271 2.67504 12.0084C2.89383 11.7896 3.19058 11.6666 3.5 11.6666ZM7 2.91665C7.92826 2.91665 8.8185 3.2854 9.47487 3.94177C10.1313 4.59815 10.5 5.48839 10.5 6.41665V11.0833H3.5V6.41665C3.5 5.48839 3.86875 4.59815 4.52513 3.94177C5.1815 3.2854 6.07174 2.91665 7 2.91665Z" fill="currentColor" />
        ) : size === 'large' ? (
          <path d="M5 5.75004L3.225 3.98337L4.4 2.80837L6.16667 4.58337L5 5.75004ZM10.8333 0.833374V3.33337H9.16667V0.833374H10.8333ZM16.775 3.98337L15 5.75004L13.8333 4.58337L15.6 2.80837L16.775 3.98337ZM3.75 8.75004V10.4167H1.25V8.75004H3.75ZM16.25 8.75004H18.75V10.4167H16.25V8.75004ZM5 16.6667H15C15.442 16.6667 15.8659 16.8423 16.1785 17.1549C16.4911 17.4674 16.6667 17.8913 16.6667 18.3334H3.33333C3.33333 17.8913 3.50893 17.4674 3.82149 17.1549C4.13405 16.8423 4.55797 16.6667 5 16.6667ZM10 4.16671C11.3261 4.16671 12.5979 4.69349 13.5355 5.63117C14.4732 6.56886 15 7.84062 15 9.16671V15.8334H5V9.16671C5 7.84062 5.52678 6.56886 6.46447 5.63117C7.40215 4.69349 8.67392 4.16671 10 4.16671Z" fill="currentColor" />
        ) : (
          <path d="M4 4.59996L2.58 3.18663L3.52 2.24663L4.93333 3.66663L4 4.59996ZM8.66667 0.666626V2.66663H7.33333V0.666626H8.66667ZM13.42 3.18663L12 4.59996L11.0667 3.66663L12.48 2.24663L13.42 3.18663ZM3 6.99996V8.33329H1V6.99996H3ZM13 6.99996H15V8.33329H13V6.99996ZM4 13.3333H12C12.3536 13.3333 12.6928 13.4738 12.9428 13.7238C13.1929 13.9739 13.3333 14.313 13.3333 14.6666H2.66667C2.66667 14.313 2.80714 13.9739 3.05719 13.7238C3.30724 13.4738 3.64638 13.3333 4 13.3333ZM8 3.33329C9.06087 3.33329 10.0783 3.75472 10.8284 4.50487C11.5786 5.25501 12 6.27243 12 7.33329V12.6666H4V7.33329C4 6.27243 4.42143 5.25501 5.17157 4.50487C5.92172 3.75472 6.93913 3.33329 8 3.33329Z" fill="currentColor" />
        )}
      </g>
    </svg>
  );
};

const CloseCircleIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const iconSize = size === 'small' ? '14' : size === 'large' ? '20' : '16';

  return (
    <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        {size === 'small' ? (
          <path d="M7.00008 1.16675C10.2259 1.16675 12.8334 3.77425 12.8334 7.00008C12.8334 10.2259 10.2259 12.8334 7.00008 12.8334C3.77425 12.8334 1.16675 10.2259 1.16675 7.00008C1.16675 3.77425 3.77425 1.16675 7.00008 1.16675ZM9.09425 4.08341L7.00008 6.17758L4.90591 4.08341L4.08341 4.90591L6.17758 7.00008L4.08341 9.09425L4.90591 9.91675L7.00008 7.82258L9.09425 9.91675L9.91675 9.09425L7.82258 7.00008L9.91675 4.90591L9.09425 4.08341Z" fill="currentColor" />
        ) : size === 'large' ? (
          <path d="M10.0001 1.66675C14.6084 1.66675 18.3334 5.39175 18.3334 10.0001C18.3334 14.6084 14.6084 18.3334 10.0001 18.3334C5.39175 18.3334 1.66675 14.6084 1.66675 10.0001C1.66675 5.39175 5.39175 1.66675 10.0001 1.66675ZM12.9917 5.83342L10.0001 8.82508L7.00841 5.83342L5.83342 7.00841L8.82508 10.0001L5.83342 12.9917L7.00841 14.1667L10.0001 11.1751L12.9917 14.1667L14.1667 12.9917L11.1751 10.0001L14.1667 7.00841L12.9917 5.83342Z" fill="currentColor" />
        ) : (
          <path d="M7.99992 1.33325C11.6866 1.33325 14.6666 4.31325 14.6666 7.99992C14.6666 11.6866 11.6866 14.6666 7.99992 14.6666C4.31325 14.6666 1.33325 11.6866 1.33325 7.99992C1.33325 4.31325 4.31325 1.33325 7.99992 1.33325ZM10.3933 4.66659L7.99992 7.05992L5.60659 4.66659L4.66659 5.60659L7.05992 7.99992L4.66659 10.3933L5.60659 11.3333L7.99992 8.93992L10.3933 11.3333L11.3333 10.3933L8.93992 7.99992L11.3333 5.60659L10.3933 4.66659Z" fill="currentColor" />
        )}
      </g>
    </svg>
  );
};

const ChevronUpIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const iconSize = size === 'small' ? '14' : size === 'large' ? '20' : '16';

  return (
    <svg width={iconSize} height={iconSize} viewBox={`0 0 ${iconSize} ${iconSize}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        {size === 'small' ? (
          <path d="M4.3225 8.98913L7 6.31746L9.6775 8.98913L10.5 8.16663L7 4.66663L3.5 8.16663L4.3225 8.98913Z" fill="currentColor" />
        ) : size === 'large' ? (
          <path d="M6.175 12.8416L10 9.02496L13.825 12.8416L15 11.6666L10 6.66663L5 11.6666L6.175 12.8416Z" fill="currentColor" />
        ) : (
          <path d="M4.94 10.2734L8 7.22004L11.06 10.2734L12 9.33337L8 5.33337L4 9.33337L4.94 10.2734Z" fill="currentColor" />
        )}
      </g>
    </svg>
  );
};

export const Input: React.FC<InputProps> = ({
  label,
  placeholder = 'Placeholder text',
  value,
  state = 'default',
  message,
  showClose = true,
  showLeadingIcon = true,
  showDropdown = false,
  variant = 'simple',
  size = 'default',
  tags = [],
  disabled = false,
  type = 'text',
  id,
  className = '',
  onChange,
  onClose,
  onTagRemove,
  onDropdownToggle,
  onFocus,
  onBlur,
}) => {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 11)}`;
  const isFocused = state === 'focus' || state === 'typing';
  const isTyping = state === 'typing';
  const isFilled = variant === 'simple' && (value !== undefined && value !== '');
  const hasLabel = Boolean(label);

  const wrapperClasses = [
    'input-wrapper',
    size,
    variant,
    hasLabel ? 'has-label' : 'no-label',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const getIconColor = () => {
    if (state === 'error') return '#CE2031';
    if (state === 'warning') return '#EE5622';
    if (state === 'success') return '#165858';
    if (isFocused) return '#04435E';
    if (isFilled) return '#0BA7EA';
    return '#61607C';
  };

  return (
    <div className={wrapperClasses}>
      {label && (
        <label htmlFor={inputId} className={`input-label ${size}`}>
          {label}
        </label>
      )}

      <div className={`input-container ${state} ${size} ${variant} ${disabled ? 'disabled' : ''}`}>
        <div className={`input-content ${size}`}>
          {showLeadingIcon && (
            <div className={`input-leading-icon ${size}`} style={{ color: getIconColor() }}>
              <AlarmIcon size={size} />
            </div>
          )}

          {variant === 'tags' && tags.length > 0 && (
            <div className={`input-tags ${size}`}>
              {tags.map((tag) => (
                <Tag
                  key={tag.id}
                  label={tag.label}
                  size={size}
                  variant="light-gray"
                  showClose={true}
                  onRemove={() => onTagRemove?.(tag.id)}
                />
              ))}
            </div>
          )}

          <div className={`input-field-wrapper ${size}`}>
            {variant === 'tags' && isTyping ? (
              <span className={`input-cursor ${size}`}>|</span>
            ) : (
              <input
                id={inputId}
                type={type}
                value={isTyping && variant === 'simple' ? (value || '').split('|')[0] : value}
                placeholder={placeholder}
                disabled={disabled}
                className={`input-field ${size} ${variant}`}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            )}
            {isTyping && variant === 'simple' && value?.includes('|') && (
              <span className={`input-cursor ${size}`}>|</span>
            )}
          </div>
        </div>

        <div className={`input-actions ${size}`}>
          {showClose && !disabled && (
            <button
              type="button"
              className={`input-close-button ${size}`}
              onClick={onClose}
              aria-label="Clear input"
            >
              <CloseCircleIcon size={size} />
            </button>
          )}

          {showDropdown && variant === 'tags' && (
            <button
              type="button"
              className={`input-dropdown-button ${size}`}
              onClick={onDropdownToggle}
              aria-label="Toggle dropdown"
            >
              <ChevronUpIcon size={size} />
            </button>
          )}
        </div>
      </div>

      {message && (
        <div className={`input-message ${state} ${size}`}>
          {message}
        </div>
      )}
    </div>
  );
};
