import type { Meta, StoryObj } from '@storybook/react';
import { PaymentIcon, type PaymentIconProps, type PaymentMethod } from './PaymentIcon';

const meta: Meta<typeof PaymentIcon> = {
  title: 'Atoms/PaymentIcon',
  component: PaymentIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The PaymentIcon component displays payment method icons in a consistent, accessible format.
It supports 16 major payment methods with three size variants.

## Features
- **16 Payment Methods**: Comprehensive support for major payment providers
- **3 Sizes**: Small (40×28px), Default (48×32px), and Large (56×36px)
- **Interactive**: Optional click handlers with hover and focus states
- **Accessible**: Full keyboard navigation and screen reader support
- **Responsive**: Adapts gracefully to different screen sizes
- **High Contrast**: Enhanced visibility in high contrast mode

## Payment Methods Supported
- **Credit Cards**: Visa, Mastercard, American Express, Discover, Diners Club, Maestro
- **Digital Wallets**: PayPal, Apple Pay, Google Pay, Shop Pay
- **Payment Services**: Stripe, Klarna, Affirm, Amazon Pay
- **Regional**: Interac, Sofort

## Usage
Payment icons are commonly used in checkout flows, payment method selection,
and billing information displays. The component maintains brand consistency
while providing a unified interface.
        `
      }
    }
  },
  argTypes: {
    method: {
      control: { type: 'select' },
      options: [
        'visa',
        'mastercard',
        'amex',
        'discover',
        'paypal',
        'apple-pay',
        'google-pay',
        'shop-pay',
        'stripe',
        'klarna',
        'affirm',
        'amazon',
        'diners-club',
        'maestro',
        'interac',
        'sofort'
      ],
      description: 'Payment method to display'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size of the payment icon'
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function'
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof PaymentIcon>;

// Default story
export const Default: Story = {
  args: {
    method: 'visa',
    size: 'default'
  }
};

// Interactive example
export const Interactive: Story = {
  args: {
    method: 'mastercard',
    size: 'default',
    onClick: () => alert('Payment method selected!')
  },
  parameters: {
    docs: {
      description: {
        story: 'Payment icons can be made interactive with click handlers. This example shows hover effects and click functionality.'
      }
    }
  }
};

// Size variants
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px' }}>
          <PaymentIcon method="visa" size="small" />
        </div>
        <div style={{ fontSize: '12px', color: '#6B7280' }}>Small (40×28px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px' }}>
          <PaymentIcon method="visa" size="default" />
        </div>
        <div style={{ fontSize: '12px', color: '#6B7280' }}>Default (48×32px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px' }}>
          <PaymentIcon method="visa" size="large" />
        </div>
        <div style={{ fontSize: '12px', color: '#6B7280' }}>Large (56×36px)</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Payment icons come in three sizes to fit different UI contexts. Small for compact layouts, default for general use, and large for emphasis.'
      }
    }
  }
};

// All payment methods showcase
export const AllPaymentMethods: Story = {
  render: () => {
    const paymentMethods: PaymentMethod[] = [
      'visa',
      'mastercard',
      'amex',
      'discover',
      'paypal',
      'apple-pay',
      'google-pay',
      'shop-pay',
      'stripe',
      'klarna',
      'affirm',
      'amazon',
      'diners-club',
      'maestro',
      'interac',
      'sofort'
    ];

    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
        gap: '16px',
        maxWidth: '800px'
      }}>
        {paymentMethods.map((method) => (
          <div key={method} style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '8px' }}>
              <PaymentIcon 
                method={method} 
                size="default"
                onClick={() => console.log(`Selected ${method}`)}
              />
            </div>
            <div style={{ 
              fontSize: '12px', 
              color: '#6B7280',
              textTransform: 'capitalize',
              fontWeight: '500'
            }}>
              {method.replace('-', ' ')}
            </div>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all 16 supported payment methods. Each icon maintains brand consistency while following design system principles.'
      }
    }
  }
};

// Credit cards group
export const CreditCards: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <PaymentIcon method="visa" size="default" />
      <PaymentIcon method="mastercard" size="default" />
      <PaymentIcon method="amex" size="default" />
      <PaymentIcon method="discover" size="default" />
      <PaymentIcon method="diners-club" size="default" />
      <PaymentIcon method="maestro" size="default" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Traditional credit card payment methods including major networks like Visa, Mastercard, and American Express.'
      }
    }
  }
};

// Digital wallets group
export const DigitalWallets: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <PaymentIcon method="apple-pay" size="default" />
      <PaymentIcon method="google-pay" size="default" />
      <PaymentIcon method="paypal" size="default" />
      <PaymentIcon method="shop-pay" size="default" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Modern digital wallet payment methods that provide quick and secure checkout experiences.'
      }
    }
  }
};

// Payment services group
export const PaymentServices: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <PaymentIcon method="stripe" size="default" />
      <PaymentIcon method="klarna" size="default" />
      <PaymentIcon method="affirm" size="default" />
      <PaymentIcon method="amazon" size="default" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Payment processing services and buy-now-pay-later options that enhance checkout flexibility.'
      }
    }
  }
};

// Regional payment methods
export const RegionalMethods: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <PaymentIcon method="interac" size="default" />
      <PaymentIcon method="sofort" size="default" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Regional payment methods popular in specific markets like Interac in Canada and Sofort in Europe.'
      }
    }
  }
};

// Responsive showcase
export const ResponsiveShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))', 
      gap: '8px',
      maxWidth: '400px'
    }}>
      {['visa', 'mastercard', 'amex', 'paypal', 'apple-pay', 'google-pay'].map((method) => (
        <PaymentIcon 
          key={method}
          method={method as PaymentMethod} 
          size="default"
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Payment icons in a responsive grid layout that adapts to different screen sizes. Perfect for checkout flows and payment method displays.'
      }
    }
  }
};

// Checkout flow example
export const CheckoutFlowExample: Story = {
  render: () => (
    <div style={{ 
      maxWidth: '400px',
      padding: '24px',
      border: '1px solid #E5E7EB',
      borderRadius: '8px',
      backgroundColor: '#FFFFFF'
    }}>
      <h3 style={{ 
        margin: '0 0 16px 0', 
        fontSize: '18px', 
        fontWeight: '600',
        color: '#111827'
      }}>
        Choose Payment Method
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[
          { method: 'visa', label: 'Credit Card ending in 1234' },
          { method: 'paypal', label: 'PayPal Account' },
          { method: 'apple-pay', label: 'Apple Pay' }
        ].map(({ method, label }) => (
          <label 
            key={method}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              padding: '12px',
              border: '1px solid #D1D5DB',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'border-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#3B82F6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#D1D5DB';
            }}
          >
            <input 
              type="radio" 
              name="payment-method" 
              value={method}
              style={{ margin: 0 }}
            />
            <PaymentIcon method={method as PaymentMethod} size="small" />
            <span style={{ fontSize: '14px', color: '#374151' }}>{label}</span>
          </label>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of how payment icons can be integrated into a real checkout flow with selectable payment methods.'
      }
    }
  }
};
