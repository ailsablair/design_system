import React from 'react';
import './tableHeader.css';
import { Tag } from './Tag';
import { Button, AlarmIcon, ArrowDownIcon } from './Button';

// Dots vertical icon component
const DotsVerticalIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 18, 
  className = '' 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 18 18" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g opacity="0.6">
      <path 
        d="M9 12C9.39782 12 9.77936 12.158 10.0607 12.4393C10.342 12.7206 10.5 13.1022 10.5 13.5C10.5 13.8978 10.342 14.2794 10.0607 14.5607C9.77936 14.842 9.39782 15 9 15C8.60218 15 8.22064 14.842 7.93934 14.5607C7.65804 14.2794 7.5 13.8978 7.5 13.5C7.5 13.1022 7.65804 12.7206 7.93934 12.4393C8.22064 12.158 8.60218 12 9 12ZM9 7.5C9.39782 7.5 9.77936 7.65804 10.0607 7.93934C10.342 8.22064 10.5 8.60218 10.5 9C10.5 9.39783 10.342 9.77936 10.0607 10.0607C9.77936 10.342 9.39782 10.5 9 10.5C8.60218 10.5 8.22064 10.342 7.93934 10.0607C7.65804 9.77936 7.5 9.39783 7.5 9C7.5 8.60218 7.65804 8.22064 7.93934 7.93934C8.22064 7.65804 8.60218 7.5 9 7.5ZM9 3C9.39782 3 9.77936 3.15804 10.0607 3.43934C10.342 3.72064 10.5 4.10218 10.5 4.5C10.5 4.89782 10.342 5.27936 10.0607 5.56066C9.77936 5.84196 9.39782 6 9 6C8.60218 6 8.22064 5.84196 7.93934 5.56066C7.65804 5.27936 7.5 4.89782 7.5 4.5C7.5 4.10218 7.65804 3.72064 7.93934 3.43934C8.22064 3.15804 8.60218 3 9 3Z" 
        fill="currentColor"
      />
    </g>
  </svg>
);

export interface TableHeaderProps {
  /** Header title text */
  title?: string;
  /** Count value for the tag */
  count?: number;
  /** Count label (e.g., "items", "members") */
  countLabel?: string;
  /** Subtext description */
  subtext?: string;
  /** Header type/variant */
  type?: 'default' | 'default-w-subtext' | 'default-w-button' | 'default-w-subtext-and-buttons';
  /** Size variant */
  size?: 'default' | 'small';
  /** Background variant */
  background?: 'default' | 'light-gray';
  /** Tag color variant */
  tagVariant?: 'outline-blue' | 'outline-info-blue';
  /** Show action buttons */
  showActions?: boolean;
  /** Action buttons configuration */
  actionButtons?: Array<{
    label: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    onClick?: () => void;
  }>;
  /** Show dots menu button */
  showDotsMenu?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Dots menu click handler */
  onDotsMenuClick?: () => void;
  /** Title click handler */
  onTitleClick?: () => void;
}

/**
 * Comprehensive Table Header component matching Figma design specifications
 * 
 * Supports:
 * - Multiple layout types (basic, with subtext, with buttons, combined)
 * - Two size variants (default, small)
 * - Background variants (white, light gray)
 * - Flexible action buttons
 * - Count tags with different color variants
 * - Optional dots menu
 * - Full responsive design
 */
export const TableHeader: React.FC<TableHeaderProps> = ({
  title = 'Team members',
  count = 100,
  countLabel = 'items',
  subtext,
  type = 'default',
  size = 'default',
  background = 'default',
  tagVariant = 'outline-blue',
  showActions = false,
  actionButtons = [
    {
      label: 'Label',
      leadingIcon: <AlarmIcon size={size === 'small' ? 14 : 18} />,
      trailingIcon: <ArrowDownIcon size={size === 'small' ? 14 : 18} />
    }
  ],
  showDotsMenu = true,
  className = '',
  onDotsMenuClick,
  onTitleClick,
}) => {
  const headerClasses = [
    'table-header',
    `table-header--${type}`,
    `table-header--${size}`,
    `table-header--bg-${background}`,
    className
  ].filter(Boolean).join(' ');

  const hasSubtext = type.includes('subtext');
  const hasButtons = type.includes('button');

  // Determine button size based on header size
  const buttonSize = size === 'small' ? 'small' : 'default';
  const iconSize = size === 'small' ? 14 : 18;

  // Format count label
  const formatCountLabel = () => {
    return `${count} ${countLabel}`;
  };

  return (
    <div className={headerClasses}>
      <div className="table-header__content">
        <div className="table-header__main">
          <div 
            className={`table-header__title-section ${onTitleClick ? 'table-header__title-section--clickable' : ''}`}
            onClick={onTitleClick}
          >
            <h2 className={`table-header__title table-header__title--${size}`}>
              {title}
            </h2>
            
            <div className="table-header__tag">
              <Tag
                label={formatCountLabel()}
                variant={tagVariant}
                size="small"
                showClose={false}
                light={false}
              />
            </div>
          </div>

          {hasSubtext && subtext && (
            <p className={`table-header__subtext table-header__subtext--${size}`}>
              {subtext}
            </p>
          )}
        </div>

        {hasButtons && showActions && (
          <div className="table-header__actions">
            {actionButtons.map((button, index) => (
              <Button
                key={index}
                type="ghost"
                size={buttonSize}
                leadingIcon={button.leadingIcon}
                trailingIcon={button.trailingIcon}
                onClick={button.onClick}
              >
                {button.label}
              </Button>
            ))}
          </div>
        )}

        {showDotsMenu && (
          <Button
            type="ghost"
            size={buttonSize}
            iconOnly
            icon={<DotsVerticalIcon size={iconSize} />}
            onClick={onDotsMenuClick}
            aria-label="More actions"
          />
        )}
      </div>
    </div>
  );
};

export default TableHeader;
