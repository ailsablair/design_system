import React from 'react';
import './tableHeader.css';
import { Tag } from './Tag';
import { Button } from './Button';

export interface TableHeaderProps {
  /** Header title text */
  title?: string;
  /** Subtitle/description text */
  subtitle?: string;
  /** Count value */
  count?: number;
  /** Count label (e.g., "items", "members") */
  countLabel?: string;
  /** Size variant */
  size?: 'small' | 'default';
  /** Background variant */
  background?: 'light-gray' | 'blue-50' | 'black';
  /** Header type/layout variant */
  type?: 'default' | 'default-w-subtext' | 'default-w-buttons' | 'default-w-subtext-and-buttons';
  /** Show count tag */
  showCount?: boolean;
  /** Show action menu button */
  showActionMenu?: boolean;
  /** Action buttons for button variants */
  actionButtons?: React.ReactNode[];
  /** Additional CSS classes */
  className?: string;
  /** Action menu click handler */
  onActionMenuClick?: () => void;
  /** Action button group props */
  buttonGroupProps?: {
    size?: 'small' | 'default';
  };
}

// Action menu icon (dots vertical)
const DotsVerticalIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M9 12C9.39782 12 9.77936 12.158 10.0607 12.4393C10.342 12.7206 10.5 13.1022 10.5 13.5C10.5 13.8978 10.342 14.2794 10.0607 14.5607C9.77936 14.842 9.39782 15 9 15C8.60218 15 8.22064 14.842 7.93934 14.5607C7.65804 14.2794 7.5 13.8978 7.5 13.5C7.5 13.1022 7.65804 12.7206 7.93934 12.4393C8.22064 12.158 8.60218 12 9 12ZM9 7.5C9.39782 7.5 9.77936 7.65804 10.0607 7.93934C10.342 8.22064 10.5 8.60218 10.5 9C10.5 9.39783 10.342 9.77936 10.0607 10.0607C9.77936 10.342 9.39782 10.5 9 10.5C8.60218 10.5 8.22064 10.342 7.93934 10.0607C7.65804 9.77936 7.5 9.39783 7.5 9C7.5 8.60218 7.65804 8.22064 7.93934 7.93934C8.22064 7.65804 8.60218 7.5 9 7.5ZM9 3C9.39782 3 9.77936 3.15804 10.0607 3.43934C10.342 3.72064 10.5 4.10218 10.5 4.5C10.5 4.89782 10.342 5.27936 10.0607 5.56066C9.77936 5.84196 9.39782 6 9 6C8.60218 6 8.22064 5.84196 7.93934 5.56066C7.65804 5.27936 7.5 4.89782 7.5 4.5C7.5 4.10218 7.65804 3.72064 7.93934 3.43934C8.22064 3.15804 8.60218 3 9 3Z" fill="#1C1C1C"/>
    </g>
  </svg>
);

// Alarm icon for default buttons
const AlarmIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M3.5 4.02492L2.2575 2.78825L3.08 1.96575L4.31667 3.20825L3.5 4.02492ZM7.58333 0.583252V2.33325H6.41667V0.583252H7.58333ZM11.7425 2.78825L10.5 4.02492L9.68333 3.20825L10.92 1.96575L11.7425 2.78825ZM2.625 6.12492V7.29158H0.875V6.12492H2.625ZM11.375 6.12492H13.125V7.29158H11.375V6.12492ZM3.5 11.6666H10.5C10.8094 11.6666 11.1062 11.7895 11.325 12.0083C11.5437 12.2271 11.6667 12.5238 11.6667 12.8333H2.33333C2.33333 12.5238 2.45625 12.2271 2.67504 12.0083C2.89383 11.7895 3.19058 11.6666 3.5 11.6666ZM7 2.91659C7.92826 2.91659 8.8185 3.28533 9.47487 3.94171C10.1313 4.59809 10.5 5.48833 10.5 6.41658V11.0833H3.5V6.41658C3.5 5.48833 3.86875 4.59809 4.52513 3.94171C5.1815 3.28533 6.07174 2.91659 7 2.91659Z" fill="#374151"/>
    </g>
  </svg>
);

// Arrow down icon for default buttons
const ArrowDownIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M6.41675 3.50008V8.16675L4.37508 6.12508L3.54675 6.95341L7.00008 10.4067L10.4534 6.95341L9.62508 6.12508L7.58341 8.16675V3.50008H6.41675ZM7.00008 12.8334C6.23404 12.8334 5.47549 12.6825 4.76776 12.3894C4.06003 12.0962 3.41697 11.6665 2.87529 11.1249C1.78133 10.0309 1.16675 8.54718 1.16675 7.00008C1.16675 5.45298 1.78133 3.96925 2.87529 2.87529C3.96925 1.78133 5.45298 1.16675 7.00008 1.16675C7.76613 1.16675 8.52467 1.31763 9.2324 1.61078C9.94013 1.90394 10.5832 2.33362 11.1249 2.87529C11.6665 3.41697 12.0962 4.06003 12.3894 4.76776C12.6825 5.47549 12.8334 6.23404 12.8334 7.00008C12.8334 8.54718 12.2188 10.0309 11.1249 11.1249C10.0309 12.2188 8.54718 12.8334 7.00008 12.8334Z" fill="#374151"/>
    </g>
  </svg>
);

export const TableHeader: React.FC<TableHeaderProps> = ({
  title = 'Team members',
  subtitle,
  count = 100,
  countLabel = 'items',
  size = 'small',
  background = 'light-gray',
  type = 'default',
  showCount = true,
  showActionMenu = true,
  actionButtons,
  className = '',
  onActionMenuClick,
  buttonGroupProps = { size: 'small' },
}) => {
  const headerClasses = [
    'table-header',
    `table-header--${size}`,
    `table-header--${background}`,
    `table-header--${type}`,
    className
  ].filter(Boolean).join(' ');

  const hasSubtext = type.includes('subtext');
  const hasButtons = type.includes('buttons');

  // Format count label
  const formatCountLabel = () => {
    return `${count} ${countLabel}`;
  };

  // Determine tag variant based on background
  const getTagVariant = () => {
    if (background === 'blue-50') {
      return 'light-gray'; // White tag on blue background
    } else if (background === 'black') {
      return 'yellow'; // Yellow tag on black background
    }
    return 'outline-info-blue'; // Blue outline tag on light gray
  };

  // Default action buttons if none provided
  const getDefaultActionButtons = () => {
    const iconSize = buttonGroupProps.size === 'default' ? 18 : 14;
    return [
      <Button
        key="filter1"
        size={buttonGroupProps.size}
        type="ghost"
        leadingIcon={<AlarmIcon size={iconSize} />}
        trailingIcon={<ArrowDownIcon size={iconSize} />}
      >
        Label
      </Button>,
      <Button
        key="filter2"
        size={buttonGroupProps.size}
        type="ghost"
        leadingIcon={<AlarmIcon size={iconSize} />}
        trailingIcon={<ArrowDownIcon size={iconSize} />}
      >
        Label
      </Button>
    ];
  };

  return (
    <div className={headerClasses}>
      <div className="table-header__content">
        {/* Main header row */}
        <div className="table-header__main">
          <div className="table-header__title-group">
            <h2 className={`table-header__title table-header__title--${size}`}>
              {title}
            </h2>
            
            {showCount && (
              <div className="table-header__count">
                <Tag
                  label={formatCountLabel()}
                  variant={getTagVariant()}
                  size="small"
                  showClose={false}
                />
              </div>
            )}
          </div>
        </div>

        {/* Subtitle if present */}
        {hasSubtext && subtitle && (
          <div className="table-header__subtitle">
            {subtitle}
          </div>
        )}
      </div>

      {/* Action section */}
      <div className="table-header__actions">
        {/* Action buttons for button variants */}
        {hasButtons && (
          <div className="table-header__button-group">
            {actionButtons || getDefaultActionButtons()}
          </div>
        )}

        {/* Action menu button */}
        {showActionMenu && (
          <Button
            size={size}
            type="ghost"
            iconOnly
            icon={<DotsVerticalIcon size={size === 'default' ? 22 : 18} />}
            onClick={onActionMenuClick}
            className="table-header__action-menu"
          />
        )}
      </div>
    </div>
  );
};

export default TableHeader;
