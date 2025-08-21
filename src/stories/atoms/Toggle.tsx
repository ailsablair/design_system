import React from 'react';
import './toggle.css';

export interface ToggleProps {
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Component state */
  state?: 'default' | 'hover' | 'focused' | 'clicked' | 'disabled' | 'inactive';
  /** Enabled state (controlled) */
  enabled?: boolean;
  /** Show icon inside toggle */
  icon?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Toggle ID */
  id?: string;
  /** Toggle name */
  name?: string;
  /** Additional CSS classes */
  className?: string;
  /** onChange event handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** onClick event handler for better UX */
  onClick?: () => void;
  /** aria-label for accessibility */
  'aria-label'?: string;
}

const CheckIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  if (size === 'small') {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
        <path d="M10.5 3.49992L4.5 9.49992L1.75 6.74992L2.455 6.04492L4.5 8.08492L9.795 2.79492L10.5 3.49992Z" fill="#227F1A" stroke="#227F1A"/>
      </svg>
    );
  } else if (size === 'default') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
        <path d="M15.75 5.24988L6.75 14.2499L2.625 10.1249L3.6825 9.06738L6.75 12.1274L14.6925 4.19238L15.75 5.24988Z" fill="#227F1A" stroke="#227F1A"/>
      </svg>
    );
  } else {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
        <path d="M15.75 5.24988L6.75 14.2499L2.625 10.1249L3.6825 9.06738L6.75 12.1274L14.6925 4.19238L15.75 5.24988Z" fill="#227F1A" stroke="#227F1A"/>
      </svg>
    );
  }
};

const CheckIconClicked = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  if (size === 'small') {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
        <path d="M10.5 3.49992L4.5 9.49992L1.75 6.74992L2.455 6.04492L4.5 8.08492L9.795 2.79492L10.5 3.49992Z" fill="#D6F0FB" stroke="#D6F0FB"/>
      </svg>
    );
  } else if (size === 'default') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
        <path d="M15.75 5.24988L6.75 14.2499L2.625 10.1249L3.6825 9.06738L6.75 12.1274L14.6925 4.19238L15.75 5.24988Z" fill="#D6F0FB" stroke="#D6F0FB"/>
      </svg>
    );
  } else {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
        <path d="M15.75 5.24988L6.75 14.2499L2.625 10.1249L3.6825 9.06738L6.75 12.1274L14.6925 4.19238L15.75 5.24988Z" fill="#D6F0FB" stroke="#D6F0FB"/>
      </svg>
    );
  }
};

const CloseIcon = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  if (size === 'small') {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 3.205L8.795 2.5L6 5.295L3.205 2.5L2.5 3.205L5.295 6L2.5 8.795L3.205 9.5L6 6.705L8.795 9.5L9.5 8.795L6.705 6L9.5 3.205Z" fill="#CE2031" stroke="#CE2031"/>
      </svg>
    );
  } else if (size === 'default') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6668 4.2735L11.7268 3.3335L8.00016 7.06016L4.2735 3.3335L3.3335 4.2735L7.06016 8.00016L3.3335 11.7268L4.2735 12.6668L8.00016 8.94016L11.7268 12.6668L12.6668 11.7268L8.94016 8.00016L12.6668 4.2735Z" fill="#CE2031" stroke="#CE2031"/>
      </svg>
    );
  } else {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="#CE2031" stroke="#CE2031"/>
      </svg>
    );
  }
};

const CloseIconClicked = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  if (size === 'small') {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 3.205L8.795 2.5L6 5.295L3.205 2.5L2.5 3.205L5.295 6L2.5 8.795L3.205 9.5L6 6.705L8.795 9.5L9.5 8.795L6.705 6L9.5 3.205Z" fill="white" stroke="white"/>
      </svg>
    );
  } else if (size === 'default') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6668 4.2735L11.7268 3.3335L8.00016 7.06016L4.2735 3.3335L3.3335 4.2735L7.06016 8.00016L3.3335 11.7268L4.2735 12.6668L8.00016 8.94016L11.7268 12.6668L12.6668 11.7268L8.94016 8.00016L12.6668 4.2735Z" fill="white" stroke="white"/>
      </svg>
    );
  } else {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="white" stroke="white"/>
      </svg>
    );
  }
};

const CloseIconDisabled = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  if (size === 'small') {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 3.205L8.795 2.5L6 5.295L3.205 2.5L2.5 3.205L5.295 6L2.5 8.795L3.205 9.5L6 6.705L8.795 9.5L9.5 8.795L6.705 6L9.5 3.205Z" fill="#D2D5DA" stroke="#D2D5DA"/>
      </svg>
    );
  } else if (size === 'default') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6668 4.2735L11.7268 3.3335L8.00016 7.06016L4.2735 3.3335L3.3335 4.2735L7.06016 8.00016L3.3335 11.7268L4.2735 12.6668L8.00016 8.94016L11.7268 12.6668L12.6668 11.7268L8.94016 8.00016L12.6668 4.2735Z" fill="#D2D5DA" stroke="#D2D5DA"/>
      </svg>
    );
  } else {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="#D2D5DA" stroke="#D2D5DA"/>
      </svg>
    );
  }
};

const CheckIconDisabled = ({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) => {
  if (size === 'small') {
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 3.49992L4.5 9.49992L1.75 6.74992L2.455 6.04492L4.5 8.08492L9.795 2.79492L10.5 3.49992Z" fill="#D2D5DA" stroke="#D2D5DA"/>
      </svg>
    );
  } else if (size === 'default') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.75 5.24988L6.75 14.2499L2.625 10.1249L3.6825 9.06738L6.75 12.1274L14.6925 4.19238L15.75 5.24988Z" fill="#D2D5DA" stroke="#D2D5DA"/>
      </svg>
    );
  } else {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.75 5.24988L6.75 14.2499L2.625 10.1249L3.6825 9.06738L6.75 12.1274L14.6925 4.19238L15.75 5.24988Z" fill="#D2D5DA" stroke="#D2D5DA"/>
      </svg>
    );
  }
};

export const Toggle: React.FC<ToggleProps> = ({
  size = 'default',
  state = 'default',
  enabled = false,
  icon = true,
  disabled = false,
  id,
  name,
  className = '',
  onChange,
  onClick,
  'aria-label': ariaLabel,
}) => {
  const toggleId = id || `toggle-${Math.random().toString(36).substring(2, 11)}`;
  
  // Determine the actual state based on props
  const actualState = disabled ? 'disabled' : state;
  const isActive = enabled && !disabled;
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event);
    }
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  // Render the appropriate icon based on state and enabled status
  const renderIcon = () => {
    if (!icon) return null;
    
    if (disabled) {
      return enabled ? <CheckIconDisabled size={size} /> : <CloseIconDisabled size={size} />;
    }
    
    if (actualState === 'clicked') {
      return enabled ? <CheckIconClicked size={size} /> : <CloseIconClicked size={size} />;
    }
    
    return enabled ? <CheckIcon size={size} /> : <CloseIcon size={size} />;
  };

  return (
    <div 
      className={`toggle-wrapper ${size} ${actualState} ${enabled ? 'enabled' : 'disabled-toggle'} ${className}`}
      onClick={handleClick}
    >
      <div className={`toggle-slide-area ${size} ${actualState} ${enabled ? 'enabled' : 'disabled-toggle'}`}>
        <input
          id={toggleId}
          type="checkbox"
          name={name}
          checked={enabled}
          disabled={disabled}
          onChange={handleChange}
          className="toggle-input"
          aria-label={ariaLabel}
        />
        <div className={`toggle-target-area ${size} ${actualState} ${enabled ? 'enabled' : 'disabled-toggle'}`}>
          <div className={`toggle-switch ${size} ${actualState} ${enabled ? 'enabled' : 'disabled-toggle'}`}>
            {renderIcon()}
          </div>
        </div>
      </div>
    </div>
  );
};
