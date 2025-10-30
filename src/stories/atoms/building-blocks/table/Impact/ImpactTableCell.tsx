import React from 'react';
import './impactTableCell.css';

export interface ImpactTableCellProps {
  /** Role of the cell */
  role?: 'cell' | 'cell-0' | 'row';
  /** Type of cell content */
  type?: 'dropdown' | 'header' | 'input' | 'total' | 'header-w-subtext' | 'populated' | 'locked' | 'impact';
  /** Width variant */
  width?: 'lg' | 'sm';
  /** State of the cell */
  state?: 'default' | 'empty' | 'filled' | 'decimal' | 'text' | 'scale';
  /** Hover state */
  hover?: boolean;
  /** Disabled state (separate from state prop) */
  disabled?: boolean;
  /** Cell content/text */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Custom title for row cells */
  title?: string;
  /** Subtitle for header-w-subtext */
  subtitle?: string;
  /** Category name for header cells */
  category?: string;
  /** Show lock icon */
  showLock?: boolean;
}

/**
 * ImpactTableCell component - A flexible table cell for the Impact table
 * Supports multiple variants: dropdown, input, header, total, populated, locked
 */
export const ImpactTableCell: React.FC<ImpactTableCellProps> = ({
  role = 'cell',
  type = 'input',
  width = 'sm',
  state = 'default',
  hover = false,
  disabled = false,
  children,
  className = '',
  title,
  subtitle,
  category,
  showLock = false,
}) => {
  const cellClasses = [
    'building-blocks-table-impact',
    `role-${role}`,
    `type-${type}`,
    `width-${width}`,
    `state-${state}`,
    hover ? 'hover-true' : 'hover-false',
    disabled ? 'disabled-true' : 'disabled-false',
    className
  ].filter(Boolean).join(' ');

  const isDisabled = disabled;

  // Render dropdown cell
  if (type === 'dropdown') {
    return (
      <div className={cellClasses} aria-disabled={isDisabled}>
        <div className="simple">
          <div className="placeholder">
            {children && <div className="placeholder-text">{children}</div>}
            <svg className="filled-icons" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
              <g opacity="0.6">
                <path d="M4.3225 5.00488L7 7.68238L9.6775 5.00488L10.5 5.83322L7 9.33322L3.5 5.83322L4.3225 5.00488Z" fill="var(--secondary-blue-gray, #61607C)"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // Render input cell
  if (type === 'input') {
    return (
      <div className={cellClasses} aria-disabled={isDisabled}>
        <div className="simple">
          <div className="placeholder">
            {children && <div className="placeholder-text">{children}</div>}
          </div>
        </div>
      </div>
    );
  }

  // Render total cell
  if (type === 'total') {
    return (
      <div className={cellClasses} aria-disabled={isDisabled}>
        <div className="simple">
          <div className="placeholder">
            {children && <div className="placeholder-text">{children}</div>}
          </div>
        </div>
      </div>
    );
  }

  // Render populated cell
  if (type === 'populated') {
    return (
      <div className={cellClasses} aria-disabled={isDisabled}>
        <div className="simple">
          <div className="placeholder">
            {children && <div className="placeholder-text">{children}</div>}
          </div>
        </div>
      </div>
    );
  }

  // Render locked cell
  if (type === 'locked') {
    return (
      <div className={cellClasses} aria-disabled={isDisabled}>
        <div className="simple">
          <div className="placeholder">
            {children && <div className="placeholder-text">{children}</div>}
            <svg className="filled-icons" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
              <g opacity="0.6">
                <path d="M6.99967 9.91634C7.30909 9.91634 7.60584 9.79342 7.82463 9.57463C8.04343 9.35584 8.16634 9.05909 8.16634 8.74967C8.16634 8.10217 7.64134 7.58301 6.99967 7.58301C6.69026 7.58301 6.39351 7.70592 6.17472 7.92472C5.95592 8.14351 5.83301 8.44026 5.83301 8.74967C5.83301 9.05909 5.95592 9.35584 6.17472 9.57463C6.39351 9.79342 6.69026 9.91634 6.99967 9.91634ZM10.4997 4.66634C10.8091 4.66634 11.1058 4.78926 11.3246 5.00805C11.5434 5.22684 11.6663 5.52359 11.6663 5.83301V11.6663C11.6663 11.9758 11.5434 12.2725 11.3246 12.4913C11.1058 12.7101 10.8091 12.833 10.4997 12.833H3.49967C3.19026 12.833 2.89351 12.7101 2.67472 12.4913C2.45592 12.2725 2.33301 11.9758 2.33301 11.6663V5.83301C2.33301 5.18551 2.85801 4.66634 3.49967 4.66634H4.08301V3.49967C4.08301 2.72613 4.3903 1.98426 4.93728 1.43728C5.48426 0.890299 6.22613 0.583008 6.99967 0.583008C7.3827 0.583008 7.76197 0.65845 8.11583 0.805026C8.4697 0.951602 8.79123 1.16644 9.06207 1.43728C9.33291 1.70812 9.54775 2.02965 9.69432 2.38351C9.8409 2.73738 9.91634 3.11665 9.91634 3.49967V4.66634H10.4997ZM6.99967 1.74967C6.53555 1.74967 6.09043 1.93405 5.76224 2.26224C5.43405 2.59043 5.24967 3.03555 5.24967 3.49967V4.66634H8.74967V3.49967C8.74967 3.03555 8.5653 2.59043 8.23711 2.26224C7.90892 1.93405 7.4638 1.74967 6.99967 1.74967Z" fill="var(--secondary-blue-gray, #61607C)"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // Render impact cell (same as total but different semantics)
  if (type === 'impact') {
    if (role === 'row') {
      return (
        <div className={cellClasses}>
          <div className="content">
            <div className="title">{title || children || 'Impact title'}</div>
            {subtitle && <div className="this-is-subtext">{subtitle}</div>}
          </div>
        </div>
      );
    }
    return (
      <div className={cellClasses} aria-disabled={isDisabled}>
        <div className="simple">
          <div className="placeholder">
            {children && <div className="placeholder-text">{children}</div>}
          </div>
        </div>
      </div>
    );
  }

  // Render header cell
  if (type === 'header') {
    if (role === 'cell-0') {
      return (
        <div className={cellClasses}>
          <div className="content">
            <div className="header-value">{children || '0A'}</div>
          </div>
        </div>
      );
    }
    if (width === 'sm') {
      return (
        <div className={cellClasses}>
          <div className="u-1">{children || 'U1'}</div>
        </div>
      );
    }
    return (
      <div className={cellClasses}>
        <div className="content">
          <div className="category-lock">
            <div className="category">{category || children || 'Category'}</div>
            {showLock && (
              <svg className="filled-icons" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
                <path d="M9 12.75C9.39782 12.75 9.77936 12.592 10.0607 12.3107C10.342 12.0294 10.5 11.6478 10.5 11.25C10.5 10.4175 9.825 9.75 9 9.75C8.60218 9.75 8.22064 9.90804 7.93934 10.1893C7.65804 10.4706 7.5 10.8522 7.5 11.25C7.5 11.6478 7.65804 12.0294 7.93934 12.3107C8.22064 12.592 8.60218 12.75 9 12.75ZM13.5 6C13.8978 6 14.2794 6.15804 14.5607 6.43934C14.842 6.72064 15 7.10218 15 7.5V15C15 15.3978 14.842 15.7794 14.5607 16.0607C14.2794 16.342 13.8978 16.5 13.5 16.5H4.5C4.10218 16.5 3.72064 16.342 3.43934 16.0607C3.15804 15.7794 3 15.3978 3 15V7.5C3 6.6675 3.675 6 4.5 6H5.25V4.5C5.25 3.50544 5.64509 2.55161 6.34835 1.84835C7.05161 1.14509 8.00544 0.75 9 0.75C9.49246 0.75 9.98009 0.846997 10.4351 1.03545C10.89 1.22391 11.3034 1.50013 11.6517 1.84835C11.9999 2.19657 12.2761 2.60997 12.4645 3.06494C12.653 3.51991 12.75 4.00754 12.75 4.5V6H13.5ZM9 2.25C8.40326 2.25 7.83097 2.48705 7.40901 2.90901C6.98705 3.33097 6.75 3.90326 6.75 4.5V6H11.25V4.5C11.25 3.90326 11.0129 3.33097 10.591 2.90901C10.169 2.48705 9.59674 2.25 9 2.25Z" fill="var(--neutral-gray-gray-700, #374151)"/>
              </svg>
            )}
          </div>
          {subtitle && <div className="this-is-a-subtitle">{subtitle}</div>}
        </div>
      </div>
    );
  }

  // Render header-w-subtext cell
  if (type === 'header-w-subtext') {
    if (width === 'sm') {
      if (role === 'cell-0') {
        return (
          <div className={cellClasses}>
            <div className="content">
              <div className="_2025">{children || subtitle || '2025'}</div>
              <div className="_0-a">{category || '0A'}</div>
            </div>
          </div>
        );
      }
      return (
        <div className={cellClasses}>
          <div className="content">
            <div className="_2025">{subtitle || children || '2025'}</div>
            <div className="_0-a">{category || '0A'}</div>
          </div>
        </div>
      );
    }
    return (
      <div className={cellClasses}>
        <div className="content">
          <div className="category-lock">
            <div className="category">{category || children || 'Category name'}</div>
            {showLock && (
              <svg className="filled-icons" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
                <path d="M9 12.75C9.39782 12.75 9.77936 12.592 10.0607 12.3107C10.342 12.0294 10.5 11.6478 10.5 11.25C10.5 10.4175 9.825 9.75 9 9.75C8.60218 9.75 8.22064 9.90804 7.93934 10.1893C7.65804 10.4706 7.5 10.8522 7.5 11.25C7.5 11.6478 7.65804 12.0294 7.93934 12.3107C8.22064 12.592 8.60218 12.75 9 12.75ZM13.5 6C13.8978 6 14.2794 6.15804 14.5607 6.43934C14.842 6.72064 15 7.10218 15 7.5V15C15 15.3978 14.842 15.7794 14.5607 16.0607C14.2794 16.342 13.8978 16.5 13.5 16.5H4.5C4.10218 16.5 3.72064 16.342 3.43934 16.0607C3.15804 15.7794 3 15.3978 3 15V7.5C3 6.6675 3.675 6 4.5 6H5.25V4.5C5.25 3.50544 5.64509 2.55161 6.34835 1.84835C7.05161 1.14509 8.00544 0.75 9 0.75C9.49246 0.75 9.98009 0.846997 10.4351 1.03545C10.89 1.22391 11.3034 1.50013 11.6517 1.84835C11.9999 2.19657 12.2761 2.60997 12.4645 3.06494C12.653 3.51991 12.75 4.00754 12.75 4.5V6H13.5ZM9 2.25C8.40326 2.25 7.83097 2.48705 7.40901 2.90901C6.98705 3.33097 6.75 3.90326 6.75 4.5V6H11.25V4.5C11.25 3.90326 11.0129 3.33097 10.591 2.90901C10.169 2.48705 9.59674 2.25 9 2.25Z" fill="var(--neutral-gray-gray-700, #374151)"/>
              </svg>
            )}
          </div>
          <div className="this-is-a-subtitle">{subtitle || 'This is a subtitle'}</div>
        </div>
      </div>
    );
  }

  // Render row cell
  if (role === 'row') {
    if (type === 'header-w-subtext' || type === 'total') {
      return (
        <div className={cellClasses}>
          <div className="content">
            <div className="title">{title || children || 'Total amount ($M)'}</div>
            {subtitle && <div className="this-is-subtext">{subtitle}</div>}
          </div>
        </div>
      );
    }
    return (
      <div className={cellClasses}>
        <div className="title">{title || children || 'Row title goes here'}</div>
      </div>
    );
  }

  // Default render
  return (
    <div className={cellClasses}>
      {children}
    </div>
  );
};

export default ImpactTableCell;
