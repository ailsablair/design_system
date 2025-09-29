import React from 'react';
import './search.css';

export interface SearchProps {
  /** Search input label text */
  label?: string;
  /** Search input placeholder text */
  placeholder?: string;
  /** Search input value */
  value?: string;
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Disabled state */
  disabled?: boolean;
  /** Show clear/close button */
  showClear?: boolean;
  /** Search input ID */
  id?: string;
  /** Additional CSS classes */
  className?: string;
  /** onChange event handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** onSearch event handler (when search button is clicked or Enter is pressed) */
  onSearch?: (value: string) => void;
  /** onClear event handler */
  onClear?: () => void;
  /** onFocus event handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** onBlur event handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

// Magnifying glass icon for search
const MagnifyIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const iconSize = size === 'small' ? '14' : size === 'large' ? '20' : '16';
  const viewBox = size === 'small' ? '0 0 14 14' : size === 'large' ? '0 0 20 20' : '0 0 16 16';
  
  return (
    <svg width={iconSize} height={iconSize} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        {size === 'small' ? (
          <path d="M5.54167 1.75C6.54728 1.75 7.5117 2.14948 8.22278 2.86055C8.93386 3.57163 9.33333 4.53605 9.33333 5.54167C9.33333 6.48083 8.98917 7.34417 8.42333 8.00917L8.58083 8.16667H9.04167L11.9583 11.0833L11.0833 11.9583L8.16667 9.04167V8.58083L8.00917 8.42333C7.34417 8.98917 6.48083 9.33333 5.54167 9.33333C4.53605 9.33333 3.57163 8.93386 2.86055 8.22278C2.14948 7.5117 1.75 6.54728 1.75 5.54167C1.75 4.53605 2.14948 3.57163 2.86055 2.86055C3.57163 2.14948 4.53605 1.75 5.54167 1.75ZM5.54167 2.91667C4.08333 2.91667 2.91667 4.08333 2.91667 5.54167C2.91667 7 4.08333 8.16667 5.54167 8.16667C7 8.16667 8.16667 7 8.16667 5.54167C8.16667 4.08333 7 2.91667 5.54167 2.91667Z" fill="#61607C" />
        ) : size === 'large' ? (
          <path d="M7.91667 2.5C9.35326 2.5 10.731 3.07068 11.7468 4.0865C12.7627 5.10233 13.3333 6.48008 13.3333 7.91667C13.3333 9.25833 12.8417 10.4917 12.0333 11.4417L12.2583 11.6667H12.9167L17.0833 15.8333L15.8333 17.0833L11.6667 12.9167V12.2583L11.4417 12.0333C10.4917 12.8417 9.25833 13.3333 7.91667 13.3333C6.48008 13.3333 5.10233 12.7627 4.0865 11.7468C3.07068 10.731 2.5 9.35326 2.5 7.91667C2.5 6.48008 3.07068 5.10233 4.0865 4.0865C5.10233 3.07068 6.48008 2.5 7.91667 2.5ZM7.91667 4.16667C5.83333 4.16667 4.16667 5.83333 4.16667 7.91667C4.16667 10 5.83333 11.6667 7.91667 11.6667C10 11.6667 11.6667 10 11.6667 7.91667C11.6667 5.83333 10 4.16667 7.91667 4.16667Z" fill="#61607C" />
        ) : (
          <path d="M6.33333 2C7.4826 2 8.58481 2.45655 9.39746 3.2692C10.2101 4.08186 10.6667 5.18406 10.6667 6.33333C10.6667 7.40667 10.2733 8.39333 9.62667 9.15333L9.80667 9.33333H10.3333L13.6667 12.6667L12.6667 13.6667L9.33333 10.3333V9.80667L9.15333 9.62667C8.39333 10.2733 7.40667 10.6667 6.33333 10.6667C5.18406 10.6667 4.08186 10.2101 3.2692 9.39746C2.45655 8.58481 2 7.4826 2 6.33333C2 5.18406 2.45655 4.08186 3.2692 3.2692C4.08186 2.45655 5.18406 2 6.33333 2ZM6.33333 3.33333C4.66667 3.33333 3.33333 4.66667 3.33333 6.33333C3.33333 8 4.66667 9.33333 6.33333 9.33333C8 9.33333 9.33333 8 9.33333 6.33333C9.33333 4.66667 8 3.33333 6.33333 3.33333Z" fill="#61607C" />
        )}
      </g>
    </svg>
  );
};

// Close circle icon for clear functionality
const CloseCircleIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const iconSize = size === 'small' ? '14' : size === 'large' ? '20' : '16';
  const viewBox = size === 'small' ? '0 0 14 14' : size === 'large' ? '0 0 20 20' : '0 0 16 16';

  return (
    <svg width={iconSize} height={iconSize} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        {size === 'small' ? (
          <path d="M7.00008 1.16699C10.2259 1.16699 12.8334 3.77449 12.8334 7.00033C12.8334 10.2262 10.2259 12.8337 7.00008 12.8337C3.77425 12.8337 1.16675 10.2262 1.16675 7.00033C1.16675 3.77449 3.77425 1.16699 7.00008 1.16699ZM9.09425 4.08366L7.00008 6.17783L4.90591 4.08366L4.08341 4.90616L6.17758 7.00033L4.08341 9.09449L4.90591 9.91699L7.00008 7.82283L9.09425 9.91699L9.91675 9.09449L7.82258 7.00033L9.91675 4.90616L9.09425 4.08366Z" fill="#61607C" />
        ) : size === 'large' ? (
          <path d="M10.0001 1.66699C14.6084 1.66699 18.3334 5.39199 18.3334 10.0003C18.3334 14.6087 14.6084 18.3337 10.0001 18.3337C5.39175 18.3337 1.66675 14.6087 1.66675 10.0003C1.66675 5.39199 5.39175 1.66699 10.0001 1.66699ZM12.9917 5.83366L10.0001 8.82533L7.00841 5.83366L5.83341 7.00866L8.82508 10.0003L5.83341 12.992L7.00841 14.167L10.0001 11.1753L12.9917 14.167L14.1667 12.992L11.1751 10.0003L14.1667 7.00866L12.9917 5.83366Z" fill="#61607C" />
        ) : (
          <path d="M7.99992 1.33301C11.6866 1.33301 14.6666 4.31301 14.6666 7.99967C14.6666 11.6863 11.6866 14.6663 7.99992 14.6663C4.31325 14.6663 1.33325 11.6863 1.33325 7.99967C1.33325 4.31301 4.31325 1.33301 7.99992 1.33301ZM10.3933 4.66634L7.99992 7.05967L5.60659 4.66634L4.66659 5.60634L7.05992 7.99967L4.66659 10.393L5.60659 11.333L7.99992 8.93967L10.3933 11.333L11.3333 10.393L8.93992 7.99967L11.3333 5.60634L10.3933 4.66634Z" fill="#61607C" />
        )}
      </g>
    </svg>
  );
};

export const Search: React.FC<SearchProps> = ({
  label = 'Search',
  placeholder = 'Search Echo',
  value = '',
  size = 'default',
  disabled = false,
  showClear = true,
  id,
  className = '',
  onChange,
  onSearch,
  onClear,
  onFocus,
  onBlur,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  };

  const handleSearchClick = () => {
    onSearch?.(value);
  };

  const handleClearClick = () => {
    onClear?.();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  const searchClasses = [
    'search-wrapper',
    size,
    disabled ? 'disabled' : '',
    className
  ].filter(Boolean).join(' ');

  const inputContainerClasses = [
    'search-input-container',
    size
  ].filter(Boolean).join(' ');

  const searchButtonClasses = [
    'search-button',
    size
  ].filter(Boolean).join(' ');

  return (
    <div className={searchClasses}>
      {/* Label */}
      <label className={`search-label ${size}`} htmlFor={id}>
        {label}
      </label>

      {/* Search Container */}
      <div className="search-container">
        {/* Input Container */}
        <div className={inputContainerClasses}>
          {/* Leading magnify icon */}
          <div className="search-leading-icon">
            <MagnifyIcon size={size} />
          </div>

          {/* Input field */}
          <input
            id={id}
            type="text"
            className={`search-input ${size}`}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={handleInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={handleKeyDown}
          />

          {/* Trailing clear icon */}
          {showClear && value && (
            <button
              type="button"
              className="search-clear-button"
              onClick={handleClearClick}
              disabled={disabled}
              aria-label="Clear search"
            >
              <CloseCircleIcon size={size} />
            </button>
          )}
        </div>

        {/* Search Button */}
        <button
          type="button"
          className={searchButtonClasses}
          onClick={handleSearchClick}
          disabled={disabled}
          aria-label="Search"
        >
          <span className={`search-button-text ${size}`}>Search</span>
        </button>
      </div>
    </div>
  );
};

export default Search;
