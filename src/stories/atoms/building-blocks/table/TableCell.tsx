import React from 'react';
import { Checkbox } from '../../Checkbox';
import { Toggle } from '../../Toggle';
import { Avatar } from '../../Avatar';
import { AvatarGroup } from '../../AvatarGroup';
import { PaymentIcon, type PaymentMethod } from '../../PaymentIcon';
import { FileIcon, type FileType } from '../../FileIcon';
import { Star } from '../../Star';
import { Button } from '../../Button';
import { Tag } from '../../Tag';
import { ProgressBar } from '../../ProgressBar';
import { Icon } from '../../../foundations/Icon';
import './tableCell.css';

export interface TableCellProps {
  /** Cell size variant */
  size?: 'small' | 'default';
  /** Cell type determines the layout and content */
  type?:
    | 'avatar-w-title'
    | 'avatar-w-subtext'
    | 'toggle-avatar-w-title'
    | 'toggle-avatar-w-subtext'
    | 'payment-w-select'
    | 'payment-w-select-and-expiry'
    | 'payment-w-toggle'
    | 'payment-w-toggle-and-expiry'
    | 'file-w-select'
    | 'file-w-select-and-expiry'
    | 'file-w-toggle'
    | 'file-w-toggle-and-expiry'
    | 'title'
    | 'text'
    | 'multi-tag'
    | 'group-avatars'
    | 'progress-bar'
    | 'button-group'
    | 'links'
    | 'rating'
    | 'more-actions'
    | 'icon-only'
    | 'icon-group'
    | 'cta-button';
  /** Background variant */
  background?: 'default' | 'disabled' | 'hover' | 'alt-seafoam-25' | 'alt-gray-50';
  /** Lead cell indicates this is a primary/leading cell in the row */
  leadCell?: boolean;
  /** Title text */
  title?: string;
  /** Supporting/subtitle text */
  subtext?: string;
  /** Avatar source URL */
  avatarSrc?: string;
  /** Payment method type */
  paymentMethod?: PaymentMethod;
  /** File type */
  fileType?: FileType;
  /** File name (for file cells) */
  fileName?: string;
  /** File size (for file cells with expiry) */
  fileSize?: string;
  /** Payment expiry (for payment cells with expiry) */
  paymentExpiry?: string;
  /** Checkbox checked state */
  checked?: boolean;
  /** Toggle enabled state */
  enabled?: boolean;
  /** Rating value (for rating cells) - number of filled stars */
  rating?: number;
  /** Maximum rating (for rating cells) */
  maxRating?: number;
  /** Tags for multi-tag cells */
  tags?: Array<{ label: string; variant?: string; showClose?: boolean }>;
  /** Avatar data for group-avatars cells */
  avatars?: Array<{ id?: string; name?: string; src?: string; initial?: string }>;
  /** Progress value (0-100) for progress-bar cells */
  progress?: number;
  /** Additional overflow count for group-avatars */
  overflowCount?: number;
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
  /** Edit action handler (for links cells) */
  onEdit?: () => void;
  /** Delete action handler (for links cells) */
  onDelete?: () => void;
  /** More actions handler (for more-actions and icon-only cells) */
  onMoreActions?: () => void;
}

/**
 * Comprehensive Table Cell component based on Figma designs
 * 
 * Supports all cell variants including:
 * - Avatar cells with checkbox or toggle controls
 * - Payment method cells with checkbox or toggle controls
 * - File cells with checkbox or toggle controls
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
  avatarSrc = 'https://api.builder.io/api/v1/image/assets/TEMP/acb4fa3d49dfd6070fffc9f08acdf9b00172321c',
  paymentMethod = 'visa',
  fileType = 'pdf',
  fileName = 'thisisafilename.pdf',
  fileSize = '200 MB',
  paymentExpiry = 'Expiry 01/2001',
  checked = false,
  enabled = true,
  rating = 5,
  maxRating = 5,
  tags = [{ label: 'Label', variant: 'outline-black', showClose: true }],
  avatars = [],
  progress = 30,
  overflowCount = 4,
  disabled = false,
  width = '320px',
  className = '',
  onCheckboxChange,
  onToggleChange,
  onClick,
  onEdit,
  onDelete,
  onMoreActions,
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
    const isAvatarCell = type.includes('avatar');
    const isPaymentCell = type.includes('payment');
    const isFileCell = type.includes('file');
    const hasCheckbox = type.includes('w-select');
    const hasToggle = type.includes('toggle');
    const hasSubtext = type.includes('subtext') || type.includes('expiry');

    // Simple text cell types
    if (type === 'title') {
      return (
        <>
          {leadCell && (
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
          <div className="table-cell-content">
            <div className="table-cell-title">{title}</div>
          </div>
        </>
      );
    }

    if (type === 'text') {
      return (
        <div className="table-cell-content">
          <div className="table-cell-text">{title}</div>
        </div>
      );
    }

    // Multi-tag cell type
    if (type === 'multi-tag') {
      return (
        <div className="table-cell-multi-tag">
          <div className="table-cell-tags">
            {tags.map((tag, index) => (
              <Tag
                key={index}
                label={tag.label}
                size={size === 'small' ? 'small' : 'default'}
                variant={tag.variant || 'outline-black'}
                showClose={tag.showClose !== false}
                disabled={disabled}
              />
            ))}
            {overflowCount && overflowCount > 0 && (
              <Tag
                label={`+${overflowCount}`}
                size={size === 'small' ? 'small' : 'default'}
                variant="light-gray"
                showClose={false}
                disabled={disabled}
              />
            )}
          </div>
        </div>
      );
    }

    // Group avatars cell type
    if (type === 'group-avatars') {
      return (
        <div className="table-cell-group-avatars">
          <AvatarGroup
            type="default"
            stroke="bordered"
            size={size === 'small' ? 'small' : 'default'}
            avatars={avatars}
            maxCount={5}
            showOverflow={true}
          />
          {overflowCount && overflowCount > 0 && (
            <Tag
              label={`+${overflowCount}`}
              size={size === 'small' ? 'small' : 'default'}
              variant="light-gray"
              showClose={false}
              disabled={disabled}
            />
          )}
        </div>
      );
    }

    // Progress bar cell type
    if (type === 'progress-bar') {
      return (
        <div className="table-cell-progress-bar">
          <ProgressBar
            value={progress || 0}
            size={size === 'small' ? 'small' : 'default'}
            variant="default"
            showPercentage={true}
            labelPosition="outside"
          />
        </div>
      );
    }

    // Button group cell type
    if (type === 'button-group') {
      return (
        <div className="table-cell-button-group">
          <Button
            size={size === 'small' ? 'extra-small' : 'small'}
            type="ghost"
            state={disabled ? 'disabled' : 'default'}
            disabled={disabled}
            onClick={onEdit}
            leadingIcon={<Icon name="edit" size="sm" color="currentColor" opacity={0.6} />}
          >
            Edit
          </Button>
          <Button
            size={size === 'small' ? 'extra-small' : 'small'}
            type="ghost"
            state={disabled ? 'disabled' : 'default'}
            disabled={disabled}
            onClick={onDelete}
            leadingIcon={<Icon name="trash-can" size="sm" color="currentColor" opacity={0.6} />}
          >
            Delete
          </Button>
        </div>
      );
    }

    // Links cell type
    if (type === 'links') {
      return (
        <div className="table-cell-links">
          <button
            className="table-cell-link"
            onClick={onEdit}
            disabled={disabled}
          >
            Edit
          </button>
          <button
            className="table-cell-link"
            onClick={onDelete}
            disabled={disabled}
          >
            Delete
          </button>
        </div>
      );
    }

    // Rating cell type
    if (type === 'rating') {
      return (
        <div className="table-cell-rating">
          <div className="table-cell-stars">
            {Array.from({ length: maxRating || 5 }, (_, index) => (
              <Star
                key={index}
                fill={index < (rating || 0) ? '100%' : 'empty'}
                size={size === 'small' ? 'small' : 'default'}
              />
            ))}
          </div>
        </div>
      );
    }

    // Icon group cell type
    if (type === 'icon-group') {
      return (
        <div className="table-cell-icon-group">
          <Icon name="email" size={size === 'small' ? 'sm' : 'md'} color="#6D7280" opacity={disabled ? 0.5 : 1} />
          <Icon name="edit" size={size === 'small' ? 'sm' : 'md'} color="#6D7280" opacity={disabled ? 0.5 : 1} />
          <Icon name="link" size={size === 'small' ? 'sm' : 'md'} color="#6D7280" opacity={disabled ? 0.5 : 1} />
          <Icon name="share" size={size === 'small' ? 'sm' : 'md'} color="#6D7280" opacity={disabled ? 0.5 : 1} />
        </div>
      );
    }

    // CTA button cell type
    if (type === 'cta-button') {
      return (
        <div className="table-cell-cta-button">
          <Button
            size={size === 'small' ? 'extra-small' : 'small'}
            type="ghost"
            state={disabled ? 'disabled' : (background === 'hover' ? 'hover' : 'default')}
            disabled={disabled}
            onClick={onEdit}
            leadingIcon={<Icon name="edit" size="sm" color="currentColor" opacity={0.6} />}
          >
            Edit
          </Button>
        </div>
      );
    }

    return (
      <>
        {/* Checkbox Control */}
        {hasCheckbox && (
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

        {/* Toggle Control */}
        {hasToggle && (
          <div className="table-cell-toggle">
            <Toggle
              size={size === 'small' ? 'small' : 'default'}
              enabled={enabled}
              disabled={disabled}
              onChange={onToggleChange}
              icon={true}
              state={disabled ? 'disabled' : (background === 'hover' ? 'hover' : 'default')}
            />
          </div>
        )}

        {/* Avatar */}
        {isAvatarCell && (
          <div className="table-cell-avatar">
            <Avatar
              size={size === 'small' ? 'x-small' : 'default'}
              type="empty-state"
              shape="default"
              border={false}
              src={avatarSrc}
              alt={title}
            />
          </div>
        )}

        {/* Payment Icon */}
        {isPaymentCell && (
          <div className="table-cell-payment-icon">
            <PaymentIcon
              method={paymentMethod}
              size={size === 'small' ? 'small' : 'large'}
            />
          </div>
        )}

        {/* File Icon */}
        {isFileCell && (
          <div className="table-cell-file-icon">
            <FileIcon
              type={fileType}
              size={size === 'small' ? 'small' : 'medium'}
            />
          </div>
        )}

        {/* Content */}
        <div className="table-cell-content">
          <div className="table-cell-title">
            {isFileCell ? fileName : isPaymentCell ? `${paymentMethod === 'visa' ? 'Visa' : 'Card'} ending in 1234` : title}
          </div>
          {hasSubtext && (
            <div className="table-cell-subtext">
              {isPaymentCell && type.includes('expiry') ? paymentExpiry :
               isFileCell && type.includes('expiry') ? fileSize :
               subtext}
            </div>
          )}
        </div>
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
