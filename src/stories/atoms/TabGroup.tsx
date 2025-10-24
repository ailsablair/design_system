import React from 'react';
import { Tab, TabProps } from './Tab';
import './tabGroup.css';

export interface TabGroupProps {
  /** Tab items to render */
  tabs?: TabProps[];
  /** Children (alternative to tabs prop) */
  children?: React.ReactNode;
  /** Layout direction */
  direction?: 'horizontal-narrow' | 'horizontal-wide' | 'vertical';
  /** Size variant applied to all tabs */
  size?: 'small' | 'default' | 'large';
  /** Type variant applied to all tabs */
  type?: 'default' | 'secondary' | 'contained' | 'dark-contained';
  /** Currently active tab index */
  activeTab?: number;
  /** Callback when a tab is clicked */
  onTabClick?: (index: number) => void;
  /** Additional CSS classes */
  className?: string;
}

export const TabGroup: React.FC<TabGroupProps> = ({
  tabs,
  children,
  direction = 'horizontal-narrow',
  size = 'small',
  type = 'default',
  activeTab = 0,
  onTabClick,
  className = '',
}) => {
  // If tabs prop is provided, use it; otherwise use children
  const renderTabs = () => {
    if (tabs && tabs.length > 0) {
      return tabs.map((tab, index) => (
        <Tab
          key={index}
          size={size}
          type={type}
          active={index === activeTab}
          onClick={() => onTabClick?.(index)}
          {...tab}
        >
          {tab.children}
        </Tab>
      ));
    }
    
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && child.type === Tab) {
        return React.cloneElement(child as React.ReactElement<TabProps>, {
          size,
          type,
          active: index === activeTab,
          onClick: () => onTabClick?.(index),
        });
      }
      return child;
    });
  };

  return (
    <div
      className={`tab-group ${direction} size-${size} type-${type} ${className}`}
      role="tablist"
      aria-orientation={direction === 'vertical' ? 'vertical' : 'horizontal'}
    >
      {renderTabs()}
    </div>
  );
};
