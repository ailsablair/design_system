import React from 'react';
import { Button, ButtonProps } from '../atoms/Button';
import './actionBar.css';

export interface ActionItem extends Omit<ButtonProps, 'children'> {
  /** Button label text */
  label: string;
  /** Unique action identifier */
  id: string;
  /** Action handler */
  onAction?: () => void;
}

export interface ActionBarProps {
  /** Array of action items */
  actions: ActionItem[];
  /** Alignment of actions */
  alignment?: 'left' | 'center' | 'right' | 'space-between' | 'space-around';
  /** Size variant for all actions */
  size?: 'extra-small' | 'small' | 'default' | 'large';
  /** Layout direction */
  layout?: 'horizontal' | 'vertical';
  /** Spacing between actions */
  spacing?: 'compact' | 'default' | 'relaxed';
  /** Primary action index (gets primary styling) */
  primaryActionIndex?: number;
  /** Show dividers between actions */
  showDividers?: boolean;
  /** Full width mode */
  fullWidth?: boolean;
  /** Responsive behavior */
  responsive?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const ActionBar: React.FC<ActionBarProps> = ({
  actions,
  alignment = 'left',
  size = 'default',
  layout = 'horizontal',
  spacing = 'default',
  primaryActionIndex,
  showDividers = false,
  fullWidth = false,
  responsive = true,
  className = '',
}) => {
  const actionBarClasses = [
    'action-bar',
    `action-bar--${layout}`,
    `action-bar--${alignment}`,
    `action-bar--spacing-${spacing}`,
    fullWidth ? 'action-bar--full-width' : '',
    responsive ? 'action-bar--responsive' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={actionBarClasses}>
      <div className="action-bar-content">
        {actions.map((action, index) => {
          const { label, id, onAction, ...buttonProps } = action;
          
          // Determine button type
          let buttonType = action.type || 'secondary';
          if (primaryActionIndex === index) {
            buttonType = 'primary';
          }
          
          const handleClick = () => {
            if (onAction) {
              onAction();
            }
            if (action.onClick) {
              action.onClick();
            }
          };

          return (
            <React.Fragment key={id}>
              {showDividers && index > 0 && (
                <div className="action-bar-divider" />
              )}
              
              <div className="action-bar-item">
                <Button
                  {...buttonProps}
                  type={buttonType}
                  size={size}
                  width={fullWidth ? 'full' : 'auto'}
                  onClick={handleClick}
                >
                  {label}
                </Button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
