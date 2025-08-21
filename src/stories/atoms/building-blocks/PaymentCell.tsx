import React from 'react';
import { Toggle } from '../Toggle';
import { PaymentIcon, type PaymentMethod } from '../PaymentIcon';
import './paymentCell.css';

export interface PaymentCellProps {
  /** Cell size variant */
  size?: 'small' | 'default';
  /** Cell variant determines the layout and content */
  variant?: 'payment-w-toggle' | 'payment-w-toggle-and-expiry';
  /** Background variant */
  background?: 'white' | 'alt-gray-50' | 'alt-seafoam-25' | 'hover' | 'disabled';
  /** Payment method name (e.g., "Visa ending in 1234") */
  paymentName?: string;
  /** Payment expiry (e.g., "Expiry 01/2001") */
  paymentExpiry?: string;
  /** Payment method type for icon */
  paymentMethod?: PaymentMethod;
  /** Toggle enabled state */
  toggleEnabled?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Width of the cell */
  width?: string;
  /** Additional CSS classes */
  className?: string;
  /** Toggle change handler */
  onToggleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Click handler for the cell */
  onClick?: () => void;
}

/**
 * Payment Cell component for displaying payment method information with toggle controls
 * 
 * Supports multiple variants:
 * - payment-w-toggle: Toggle + payment icon + payment name
 * - payment-w-toggle-and-expiry: Toggle + payment icon + payment name + expiry
 * 
 * Features responsive design and multiple background states
 */
export const PaymentCell: React.FC<PaymentCellProps> = ({
  size = 'default',
  variant = 'payment-w-toggle',
  background = 'white',
  paymentName = 'Visa ending in 1234',
  paymentExpiry = 'Expiry 01/2001',
  paymentMethod = 'visa',
  toggleEnabled = true,
  disabled = false,
  width,
  className = '',
  onToggleChange,
  onClick,
}) => {
  const cellClasses = [
    'payment-cell-container',
    `payment-cell-size-${size}`,
    `payment-cell-variant-${variant}`,
    `payment-cell-bg-${background}`,
    disabled && 'payment-cell-disabled',
    className
  ].filter(Boolean).join(' ');

  const cellStyle = width ? { width } : undefined;

  const showExpiry = variant === 'payment-w-toggle-and-expiry';

  return (
    <div 
      className={cellClasses}
      style={cellStyle}
      onClick={onClick}
    >
      <div className="payment-cell-toggle">
        <Toggle
          size={size === 'small' ? 'small' : 'default'}
          enabled={toggleEnabled}
          disabled={disabled}
          onChange={onToggleChange}
          icon={true}
          state={disabled ? 'disabled' : 'default'}
        />
      </div>

      <div className="payment-cell-payment-icon">
        <PaymentIcon
          method={paymentMethod}
          size={size === 'small' ? 'small' : 'large'}
        />
      </div>

      <div className="payment-cell-content">
        <div className="payment-cell-payment-name">
          {paymentName}
        </div>
        {showExpiry && (
          <div className="payment-cell-payment-expiry">
            {paymentExpiry}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentCell;
