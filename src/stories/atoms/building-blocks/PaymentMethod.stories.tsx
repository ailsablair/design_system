import type { Meta, StoryObj } from '@storybook/react';
import { PaymentMethod } from './PaymentMethod';

const meta: Meta<typeof PaymentMethod> = {
  title: 'Atoms/Payment Method',
  component: PaymentMethod,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'PaymentMethod component for displaying payment card information with icons, matching the Figma design specifications.',
      },
    },
  },
  argTypes: {
    method: {
      control: { type: 'select' },
      options: [
        'visa', 'mastercard', 'amex', 'discover', 'paypal', 
        'apple-pay', 'google-pay', 'shop-pay', 'stripe', 
        'klarna', 'affirm', 'amazon', 'diners-club', 'maestro', 
        'interac', 'sofort'
      ],
      description: 'Payment method type',
    },
    lastFourDigits: {
      control: { type: 'text' },
      description: 'Last 4 digits of the card',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'Size of the payment method display',
    },
    showMaskedNumber: {
      control: { type: 'boolean' },
      description: 'Whether to show the full card number (masked)',
    },
    selected: {
      control: { type: 'boolean' },
      description: 'Whether the payment method is selected',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PaymentMethod>;

export const Default: Story = {
  args: {
    method: 'visa',
    lastFourDigits: '1234',
  },
};

export const FigmaDesignMatch: Story = {
  args: {
    method: 'visa',
    lastFourDigits: '1234',
  },
  parameters: {
    docs: {
      description: {
        story: 'Exact match of the Figma design showing "Visa ending in 1234".',
      },
    },
  },
};

export const Small: Story = {
  args: {
    method: 'visa',
    lastFourDigits: '1234',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    method: 'visa',
    lastFourDigits: '1234',
    size: 'large',
  },
};

export const WithMaskedNumber: Story = {
  args: {
    method: 'visa',
    lastFourDigits: '1234',
    showMaskedNumber: true,
  },
};

export const Selected: Story = {
  args: {
    method: 'visa',
    lastFourDigits: '1234',
    selected: true,
  },
};

export const Clickable: Story = {
  args: {
    method: 'visa',
    lastFourDigits: '1234',
    onClick: () => alert('Payment method clicked!'),
  },
};

export const Mastercard: Story = {
  args: {
    method: 'mastercard',
    lastFourDigits: '5678',
  },
};

export const AmericanExpress: Story = {
  args: {
    method: 'amex',
    lastFourDigits: '9012',
  },
};

export const PayPal: Story = {
  args: {
    method: 'paypal',
    lastFourDigits: '****',
    customLabel: 'PayPal Account',
  },
};

export const ApplePay: Story = {
  args: {
    method: 'apple-pay',
    lastFourDigits: '1234',
  },
};

export const AllPaymentMethods: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
      <PaymentMethod method="visa" lastFourDigits="1234" />
      <PaymentMethod method="mastercard" lastFourDigits="5678" />
      <PaymentMethod method="amex" lastFourDigits="9012" />
      <PaymentMethod method="discover" lastFourDigits="3456" />
      <PaymentMethod method="paypal" lastFourDigits="****" customLabel="PayPal Account" />
      <PaymentMethod method="apple-pay" lastFourDigits="7890" />
      <PaymentMethod method="google-pay" lastFourDigits="2468" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of different payment method types.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Small</h4>
        <PaymentMethod method="visa" lastFourDigits="1234" size="small" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <PaymentMethod method="visa" lastFourDigits="1234" size="default" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <PaymentMethod method="visa" lastFourDigits="1234" size="large" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available sizes.',
      },
    },
  },
};

export const InteractiveStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Default State</h4>
        <PaymentMethod method="visa" lastFourDigits="1234" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Clickable</h4>
        <PaymentMethod 
          method="visa" 
          lastFourDigits="1234" 
          onClick={() => alert('Clicked!')} 
        />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Selected</h4>
        <PaymentMethod 
          method="visa" 
          lastFourDigits="1234" 
          selected={true}
          onClick={() => alert('Selected!')} 
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different interactive states of the payment method.',
      },
    },
  },
};

export const CardNumberFormats: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Ending in Format</h4>
        <PaymentMethod method="visa" lastFourDigits="1234" />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Masked Number</h4>
        <PaymentMethod method="visa" lastFourDigits="1234" showMaskedNumber={true} />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>Custom Label</h4>
        <PaymentMethod 
          method="paypal" 
          lastFourDigits="****" 
          customLabel="PayPal Account (john@example.com)" 
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different ways to display card number information.',
      },
    },
  },
};

export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px',
      padding: '40px',
      border: '2px dashed #8B5CF6',
      borderRadius: '8px',
      backgroundColor: '#F8FAFC',
      width: 'fit-content'
    }}>
      <div style={{
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '16px',
        color: '#1E293B'
      }}>
        Figma Design - Payment Method Variants
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '320px' }}>
        <div>
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#64748B',
            marginBottom: '12px'
          }}>
            Visa ending in 1234 (Figma Design Match)
          </div>
          <PaymentMethod method="visa" lastFourDigits="1234" />
        </div>
        
        <div>
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#64748B',
            marginBottom: '12px'
          }}>
            Different Payment Methods
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <PaymentMethod method="visa" lastFourDigits="1234" />
            <PaymentMethod method="mastercard" lastFourDigits="5678" />
            <PaymentMethod method="amex" lastFourDigits="9012" />
            <PaymentMethod method="paypal" lastFourDigits="****" customLabel="PayPal Account" />
          </div>
        </div>
        
        <div>
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#64748B',
            marginBottom: '12px'
          }}>
            Size Variants
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <PaymentMethod method="visa" lastFourDigits="1234" size="small" />
            <PaymentMethod method="visa" lastFourDigits="1234" size="default" />
            <PaymentMethod method="visa" lastFourDigits="1234" size="large" />
          </div>
        </div>
        
        <div>
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#64748B',
            marginBottom: '12px'
          }}>
            Interactive States
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <PaymentMethod method="visa" lastFourDigits="1234" />
            <PaymentMethod 
              method="visa" 
              lastFourDigits="1234" 
              onClick={() => alert('Clicked!')} 
            />
            <PaymentMethod 
              method="visa" 
              lastFourDigits="1234" 
              selected={true}
              onClick={() => alert('Selected!')} 
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase matching the Figma design with "Visa ending in 1234" and various configurations.',
      },
    },
  },
};
