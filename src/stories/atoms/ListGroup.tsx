import React from 'react';
import { ListItem } from './ListItem';
import './listGroup.css';

export interface ListGroupItem {
  /** Unique identifier for the list item */
  id: string;
  /** Text content for the list item */
  label: string;
  /** Optional click handler for individual items */
  onClick?: () => void;
}

export interface ListGroupProps {
  /** Type of list group */
  type?: 'disc' | 'numbers' | 'static-icon' | 'icons' | 'horizontal-dividers' | 'vertical-dividers';
  /** Size variant */
  size?: 'small' | 'default' | 'large' | 'x-large';
  /** Array of list items */
  items?: ListGroupItem[];
  /** Additional CSS class name */
  className?: string;
  /** Click handler for the entire group */
  onClick?: () => void;
}

/**
 * ListGroup component for displaying multiple list items with consistent styling and behavior
 */
export const ListGroup: React.FC<ListGroupProps> = ({
  type = 'disc',
  size = 'default',
  items = [],
  className = '',
  onClick
}) => {
  const groupClassName = [
    'list-group',
    `list-group--${type}`,
    `list-group--${size}`,
    onClick && 'list-group--clickable',
    className
  ].filter(Boolean).join(' ');

  // Determine which elements to show based on type
  const getItemProps = (item: ListGroupItem, index: number) => {
    const baseProps = {
      label: item.label,
      size,
      onClick: item.onClick,
      key: item.id,
    };

    switch (type) {
      case 'disc':
        return {
          ...baseProps,
          showDisc: true,
          showStaticIcon: false,
          showPreText: false,
          showIcon: false,
          showBadge: false,
          showHorizontalDivider: false,
          showVerticalDivider: false,
        };

      case 'numbers':
        return {
          ...baseProps,
          showDisc: false,
          showStaticIcon: false,
          showPreText: true,
          showIcon: false,
          showBadge: false,
          showHorizontalDivider: false,
          showVerticalDivider: false,
          badgeNumber: index + 1, // Use for numbering
        };

      case 'static-icon':
        return {
          ...baseProps,
          showDisc: false,
          showStaticIcon: true,
          showPreText: false,
          showIcon: false,
          showBadge: false,
          showHorizontalDivider: false,
          showVerticalDivider: false,
        };

      case 'icons':
        return {
          ...baseProps,
          showDisc: false,
          showStaticIcon: false,
          showPreText: false,
          showIcon: true,
          showBadge: false,
          showHorizontalDivider: false,
          showVerticalDivider: false,
        };

      case 'horizontal-dividers':
        return {
          ...baseProps,
          showDisc: false,
          showStaticIcon: false,
          showPreText: false,
          showIcon: false,
          showBadge: false,
          showHorizontalDivider: true,
          showVerticalDivider: false,
        };

      case 'vertical-dividers':
        return {
          ...baseProps,
          showDisc: false,
          showStaticIcon: false,
          showPreText: false,
          showIcon: false,
          showBadge: false,
          showHorizontalDivider: false,
          showVerticalDivider: index < items.length - 1, // Don't show on last item
        };

      default:
        return baseProps;
    }
  };

  // For numbers type, we need to override the preText with actual numbers
  const renderListItem = (item: ListGroupItem, index: number) => {
    const itemProps = getItemProps(item, index);
    
    if (type === 'numbers') {
      // For numbers type, we render a custom implementation
      return (
        <div key={item.id} className="list-group__item list-group__item--numbers">
          <div className="list-group__item-content">
            <div className={`list-group__number list-group__number--${size}`}>
              {index + 1}
            </div>
            <div className={`list-group__text list-group__text--${size}`} onClick={item.onClick}>
              {item.label}
            </div>
          </div>
        </div>
      );
    }

    return <ListItem {...itemProps} />;
  };

  return (
    <div className={groupClassName} onClick={onClick}>
      {items.map((item, index) => renderListItem(item, index))}
    </div>
  );
};

export default ListGroup;
