import React, { useState } from 'react';
import { Input } from '../atoms/Input';
import { EchoMUIButton as Button } from '../atoms/EchoMUIButton';
import './searchBar.css';

export interface SearchBarProps {
  /** Placeholder text for search input */
  placeholder?: string;
  /** Search input value */
  value?: string;
  /** Input size variant */
  size?: 'small' | 'default' | 'large';
  /** Show search button */
  showButton?: boolean;
  /** Search button text */
  buttonText?: string;
  /** Show clear button in input */
  showClear?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Search handler */
  onSearch?: (value: string) => void;
  /** Value change handler */
  onChange?: (value: string) => void;
  /** Clear handler */
  onClear?: () => void;
}

const SearchIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  const iconSize = size === 'small' ? '14' : size === 'large' ? '20' : '16';
  
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.4 2.9C9.85 2.9 11.85 4.9 11.85 7.35C11.85 9.8 9.85 11.8 7.4 11.8C4.95 11.8 2.95 9.8 2.95 7.35C2.95 4.9 4.95 2.9 7.4 2.9ZM7.4 1.55C4.2 1.55 1.6 4.15 1.6 7.35C1.6 10.55 4.2 13.15 7.4 13.15C8.7 13.15 9.9 12.7 10.85 11.95L13.9 15L15 13.9L11.95 10.85C12.7 9.9 13.15 8.7 13.15 7.35C13.15 4.15 10.55 1.55 7.4 1.55Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  value = '',
  size = 'default',
  showButton = true,
  buttonText = 'Search',
  showClear = true,
  disabled = false,
  className = '',
  onSearch,
  onChange,
  onClear,
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const currentValue = onChange ? value : internalValue;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handleSearch = () => {
    if (onSearch && !disabled) {
      onSearch(currentValue);
    }
  };

  const handleClear = () => {
    const newValue = '';
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
    if (onClear) {
      onClear();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`search-bar ${size} ${className}`}>
      <div className="search-bar-input">
        <Input
          placeholder={placeholder}
          value={currentValue}
          size={size}
          disabled={disabled}
          showLeadingIcon={true}
          showClose={showClear && currentValue.length > 0}
          onChange={handleInputChange}
          onClose={handleClear}
          onKeyPress={handleKeyPress}
        />
      </div>
      
      {showButton && (
        <div className="search-bar-button">
          <Button
            size={size}
            type="primary"
            disabled={disabled}
            onClick={handleSearch}
            leadingIcon={<SearchIcon size={size} />}
          >
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};
