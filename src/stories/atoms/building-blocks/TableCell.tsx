import React from 'react';
import { Checkbox } from '../Checkbox';
import { Toggle } from '../Toggle';
import './tableCell.css';

export interface TableCellProps {
  /** Cell size variant */
  size?: 'small' | 'default';
  /** Cell type determines the layout and content */
  type?: 'title' | 'title-subtext' | 'toggle' | 'toggle-w-subtext';
  /** Background variant */
  background?: 'alt-seafoam-25' | 'default' | 'alt-gray-50' | 'disabled' | 'hover';
  /** Lead cell indicates this is a primary/leading cell in the row */
  leadCell?: boolean;
  /** Title text */
  title?: string;
  /** Supporting/subtitle text */
  subtext?: string;
  /** Checkbox checked state */
  checked?: boolean;
  /** Toggle enabled state */
  enabled?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Width of the cell */
  width?: string;
  /** Additional CSS classes */
  className?: string;
  /** Checkbox change handler */
  onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Toggle change handler */
  onToggleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Click handler for the cell */
  onClick?: () => void;
}

/**
 * Table Cell component based on Figma designs
 * 
 * Supports multiple variants:
 * - Checkbox with title only
 * - Checkbox with title and subtext
 * - Toggle switch only
 * - Toggle switch with title and subtext
 * 
 * Features different background states and sizes matching the design system
 */
export const TableCell: React.FC<TableCellProps> = ({
  size = 'default',
  type = 'title',
  background = 'default',
  leadCell = true,
  title = 'Olivia Rhye',
  subtext = 'olivia@email.com',
  checked = false,
  enabled = true,
  disabled = false,
  width,
  className = '',
  onCheckboxChange,
  onToggleChange,
  onClick,
}) => {
  const cellClasses = [
    'table-cell-container',
    `table-cell-size-${size}`,
    `table-cell-type-${type}`,
    `table-cell-bg-${background}`,
    leadCell && 'table-cell-lead',
    disabled && 'table-cell-disabled',
    className
  ].filter(Boolean).join(' ');

  const cellStyle = width ? { width } : undefined;

  const renderContent = () => {
    const showCheckbox = type === 'title' || type === 'title-subtext';
    const showToggle = type === 'toggle' || type === 'toggle-w-subtext';
    const showSubtext = type === 'title-subtext' || type === 'toggle-w-subtext';

    return (
      <>
        {showCheckbox && (
          <div className="table-cell-checkbox">
            <Checkbox
              size={size === 'small' ? 'small' : 'default'}
              checked={checked}
              disabled={disabled}
              onChange={onCheckboxChange}
              variant="default"
              shape="square"
            />
          </div>
        )}

        {showToggle && (
          <div className="table-cell-toggle">
            <Toggle
              size={size === 'small' ? 'small' : 'default'}
              enabled={enabled}
              disabled={disabled}
              onChange={onToggleChange}
              icon={true}
              state={disabled ? 'disabled' : 'default'}
            />
          </div>
        )}

        {(type !== 'toggle') && (
          <div className="table-cell-content">
            <div className="table-cell-title">
              {title}
            </div>
            {showSubtext && (
              <div className="table-cell-subtext">
                {subtext}
              </div>
            )}
          </div>
        )}
      </>
    );
  };

  return (
    <div 
      className={cellClasses}
      style={cellStyle}
      onClick={onClick}
    >
      {renderContent()}
    </div>
  );
};

export default TableCell;
