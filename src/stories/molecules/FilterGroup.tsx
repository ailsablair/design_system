import React from 'react';
import { Checkbox } from '../atoms/Checkbox';
import { RadioButton } from '../atoms/RadioButton';
import { Label } from '../atoms/Label';
import './filterGroup.css';

export interface FilterOption {
  /** Option value */
  value: string;
  /** Option label */
  label: string;
  /** Disabled state */
  disabled?: boolean;
  /** Icon or additional content */
  icon?: React.ReactNode;
}

export interface FilterGroupProps {
  /** Group title/label */
  title?: string;
  /** Filter options */
  options: FilterOption[];
  /** Selected values (for checkbox mode) */
  selectedValues?: string[];
  /** Selected value (for radio mode) */
  selectedValue?: string;
  /** Filter type */
  type?: 'checkbox' | 'radio';
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Layout direction */
  layout?: 'vertical' | 'horizontal' | 'grid';
  /** Grid columns (for grid layout) */
  gridColumns?: number;
  /** Color variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  /** Show select all option (for checkbox mode) */
  showSelectAll?: boolean;
  /** Select all label text */
  selectAllLabel?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Selection change handler (checkbox mode) */
  onSelectionChange?: (selectedValues: string[]) => void;
  /** Value change handler (radio mode) */
  onValueChange?: (selectedValue: string) => void;
  /** Select all handler */
  onSelectAll?: (isSelected: boolean) => void;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  options,
  selectedValues = [],
  selectedValue,
  type = 'checkbox',
  size = 'default',
  layout = 'vertical',
  gridColumns = 2,
  variant = 'default',
  showSelectAll = false,
  selectAllLabel = 'Select All',
  disabled = false,
  className = '',
  onSelectionChange,
  onValueChange,
  onSelectAll,
}) => {
  const groupName = `filter-group-${Math.random().toString(36).substring(2, 11)}`;
  
  const groupClasses = [
    'filter-group',
    `filter-group--${layout}`,
    `filter-group--${size}`,
    disabled ? 'filter-group--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  const optionsClasses = [
    'filter-group-options',
    `filter-group-options--${layout}`,
    layout === 'grid' ? `filter-group-options--grid-${gridColumns}` : ''
  ].filter(Boolean).join(' ');

  const handleCheckboxChange = (optionValue: string, isChecked: boolean) => {
    if (disabled || !onSelectionChange) return;
    
    const newSelectedValues = isChecked
      ? [...selectedValues, optionValue]
      : selectedValues.filter(value => value !== optionValue);
    
    onSelectionChange(newSelectedValues);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled || !onValueChange) return;
    onValueChange(event.target.value);
  };

  const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    
    const isChecked = event.target.checked;
    
    if (onSelectAll) {
      onSelectAll(isChecked);
    }
    
    if (onSelectionChange) {
      const newSelectedValues = isChecked 
        ? options.filter(option => !option.disabled).map(option => option.value)
        : [];
      onSelectionChange(newSelectedValues);
    }
  };

  const isAllSelected = options.length > 0 && 
    options.filter(option => !option.disabled).every(option => 
      selectedValues.includes(option.value)
    );
  
  const isSomeSelected = selectedValues.length > 0 && !isAllSelected;

  return (
    <div className={groupClasses}>
      {title && (
        <div className="filter-group-header">
          <Label 
            text={title}
            size={size}
            className="filter-group-title"
          />
        </div>
      )}
      
      <div className={optionsClasses}>
        {showSelectAll && type === 'checkbox' && (
          <div className="filter-group-select-all">
            <Checkbox
              label={selectAllLabel}
              size={size}
              variant={variant}
              checked={isAllSelected}
              indeterminate={isSomeSelected}
              disabled={disabled}
              onChange={handleSelectAllChange}
            />
          </div>
        )}
        
        {options.map((option) => {
          if (type === 'checkbox') {
            return (
              <div key={option.value} className="filter-group-option">
                <Checkbox
                  label={option.label}
                  size={size}
                  variant={variant}
                  checked={selectedValues.includes(option.value)}
                  disabled={disabled || option.disabled}
                  onChange={(event) => handleCheckboxChange(option.value, event.target.checked)}
                />
                {option.icon && (
                  <div className="filter-group-option-icon">
                    {option.icon}
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <div key={option.value} className="filter-group-option">
                <RadioButton
                  label={option.label}
                  size={size}
                  variant={variant}
                  name={groupName}
                  value={option.value}
                  selected={selectedValue === option.value}
                  disabled={disabled || option.disabled}
                  onChange={handleRadioChange}
                />
                {option.icon && (
                  <div className="filter-group-option-icon">
                    {option.icon}
                  </div>
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
