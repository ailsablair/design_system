import React from 'react';
import type { ListItemProps } from './ListItem';
import { ListItem } from './ListItem';
import './listGroup.css';

export interface ListGroupProps {
  /** Array of list items to display */
  items?: ListItemProps[];
  /** Size variant for all items */
  size?: 'small' | 'default' | 'large';
  /** Maximum number of items to display */
  maxItems?: number;
  /** Show loading state */
  loading?: boolean;
  /** Empty state message */
  emptyMessage?: string;
  /** Custom header content */
  header?: React.ReactNode;
  /** Custom footer content */
  footer?: React.ReactNode;
  /** Additional CSS class */
  className?: string;
  /** Callback when an item is clicked */
  onItemClick?: (item: ListItemProps, index: number) => void;
}

const LoadingSkeleton = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => (
  <div className={`list-group__skeleton list-group__skeleton--${size}`}>
    <div className="list-group__skeleton-header">
      <div className="list-group__skeleton-icon"></div>
      <div className="list-group__skeleton-title"></div>
      <div className="list-group__skeleton-separator"></div>
      <div className="list-group__skeleton-title"></div>
    </div>
    <div className="list-group__skeleton-description"></div>
    <div className="list-group__skeleton-footer">
      <div className="list-group__skeleton-tags">
        <div className="list-group__skeleton-tag"></div>
        <div className="list-group__skeleton-tag"></div>
      </div>
      <div className="list-group__skeleton-timestamp"></div>
    </div>
  </div>
);

export const ListGroup = ({
  items = [],
  size = 'default',
  maxItems,
  loading = false,
  emptyMessage = "No items to display",
  header,
  footer,
  className = '',
  onItemClick
}: ListGroupProps) => {
  const classes = [
    'list-group',
    `list-group--${size}`,
    className
  ].filter(Boolean).join(' ');

  const displayItems = maxItems ? items.slice(0, maxItems) : items;

  const handleItemClick = (item: ListItemProps, index: number) => {
    if (onItemClick) {
      onItemClick(item, index);
    }
  };

  if (loading) {
    return (
      <div className={classes}>
        {header && <div className="list-group__header">{header}</div>}
        <div className="list-group__content">
          {[...Array(3)].map((_, index) => (
            <LoadingSkeleton key={index} size={size} />
          ))}
        </div>
        {footer && <div className="list-group__footer">{footer}</div>}
      </div>
    );
  }

  if (displayItems.length === 0) {
    return (
      <div className={classes}>
        {header && <div className="list-group__header">{header}</div>}
        <div className="list-group__empty">
          <div className="list-group__empty-message">{emptyMessage}</div>
        </div>
        {footer && <div className="list-group__footer">{footer}</div>}
      </div>
    );
  }

  return (
    <div className={classes}>
      {header && <div className="list-group__header">{header}</div>}
      <div className="list-group__content">
        {displayItems.map((item, index) => (
          <ListItem
            key={index}
            {...item}
            size={size}
            onClick={() => handleItemClick(item, index)}
          />
        ))}
      </div>
      {footer && <div className="list-group__footer">{footer}</div>}
      {maxItems && items.length > maxItems && (
        <div className="list-group__show-more">
          <button className="list-group__show-more-button">
            Show {items.length - maxItems} more items
          </button>
        </div>
      )}
    </div>
  );
};

export default ListGroup;
