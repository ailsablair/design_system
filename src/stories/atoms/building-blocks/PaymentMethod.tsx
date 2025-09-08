import React from 'react';
import { PaymentIcon, type PaymentMethod as PaymentMethodType, type PaymentIconSize } from './PaymentIcon';
import './paymentMethod.css';

export type PaymentMethodSize = 'small' | 'default' | 'large';

export interface PaymentMethodProps {
  /** Payment method type */
  method: PaymentMethodType;
  /** Last 4 digits of the card */
  lastFourDigits: string;
  /** Size of the payment method display */
  size?: PaymentMethodSize;
  /** Whether to show the full card number (masked) */
  showMaskedNumber?: boolean;
  /** Custom label override */
  customLabel?: string;
  /** Additional CSS class name */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Whether the payment method is selected */
  selected?: boolean;
}

/**
 * PaymentMethod component for displaying payment card information with icons
 */
export const PaymentMethod: React.FC<PaymentMethodProps> = ({
  method,
  lastFourDigits,
  size = 'default',
  showMaskedNumber = false,
  customLabel,
  className = '',
  onClick,
  selected = false,
}) => {
  const paymentMethodClassName = [
    'payment-method',
    `payment-method--${size}`,
    onClick && 'payment-method--clickable',
    selected && 'payment-method--selected',
    className
  ].filter(Boolean).join(' ');

  const getIconSize = (): PaymentIconSize => {
    switch (size) {
      case 'small': return 'small';
      case 'default': return 'default';
      case 'large': return 'large';
      default: return 'default';
    }
  };

  const getMethodDisplayName = (method: PaymentMethodType): string => {
    const displayNames: Record<PaymentMethodType, string> = {
      'visa': 'Visa',
      'mastercard': 'Mastercard',
      'amex': 'American Express',
      'discover': 'Discover',
      'paypal': 'PayPal',
      'apple-pay': 'Apple Pay',
      'google-pay': 'Google Pay',
      'shop-pay': 'Shop Pay',
      'stripe': 'Stripe',
      'klarna': 'Klarna',
      'affirm': 'Affirm',
      'amazon': 'Amazon Pay',
      'diners-club': 'Diners Club',
      'maestro': 'Maestro',
      'interac': 'Interac',
      'sofort': 'Sofort',
    };
    return displayNames[method] || method;
  };

  const formatCardNumber = () => {
    if (showMaskedNumber) {
      return `•••• •••• •••• ${lastFourDigits}`;
    }
    return lastFourDigits;
  };

  const getDisplayText = () => {
    if (customLabel) {
      return customLabel;
    }
    
    const methodName = getMethodDisplayName(method);
    const cardNumber = formatCardNumber();
    
    if (showMaskedNumber) {
      return (
        <>
          <span className="payment-method__method-name">{methodName}</span>
          <span className="payment-method__card-number">{cardNumber}</span>
        </>
      );
    }
    
    return `${methodName} ending in ${cardNumber}`;
  };

  return (
    <div 
      className={paymentMethodClassName}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      <PaymentIcon 
        method={method}
        size={getIconSize()}
        className="payment-method__icon"
      />
      <span className="payment-method__text">
        {getDisplayText()}
      </span>
    </div>
  );
};

export default PaymentMethod;
