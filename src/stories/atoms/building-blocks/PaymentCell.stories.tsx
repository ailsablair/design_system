import type { Meta, StoryObj } from '@storybook/react';
import { PaymentCell } from './PaymentCell';

const meta: Meta<typeof PaymentCell> = {
  title: 'Atoms/🧱 Building Blocks/PaymentCell',
  component: PaymentCell,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Payment Cell component for displaying payment method information with toggle controls.

Based on Figma designs, supports multiple variants:
- **payment-w-toggle**: Toggle + payment icon + payment name
- **payment-w-toggle-and-expiry**: Toggle + payment icon + payment name + expiry

Features payment method detection, responsive design, and multiple background states.
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default'],
      description: 'Cell size variant',
    },
    variant: {
      control: { type: 'select' },
      options: ['payment-w-toggle', 'payment-w-toggle-and-expiry'],
      description: 'Cell variant determines layout and content',
    },
    background: {
      control: { type: 'select' },
      options: ['white', 'alt-gray-50', 'alt-seafoam-25', 'hover', 'disabled'],
      description: 'Background variant',
    },
    paymentName: {
      control: { type: 'text' },
      description: 'Payment method name',
    },
    paymentExpiry: {
      control: { type: 'text' },
      description: 'Payment expiry',
    },
    paymentMethod: {
      control: { type: 'select' },
      options: ['visa', 'mastercard', 'amex', 'discover', 'paypal', 'apple-pay', 'google-pay', 'shop-pay'],
      description: 'Payment method type for icon',
    },
    toggleEnabled: {
      control: { type: 'boolean' },
      description: 'Toggle enabled state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    width: {
      control: { type: 'text' },
      description: 'Cell width',
    },
  },
  args: {
    size: 'default',
    variant: 'payment-w-toggle',
    background: 'white',
    paymentName: 'Visa ending in 1234',
    paymentExpiry: 'Expiry 01/2001',
    paymentMethod: 'visa',
    toggleEnabled: true,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof PaymentCell>;

// Basic Variants
export const PaymentWithToggle: Story = {
  args: {
    variant: 'payment-w-toggle',
    background: 'white',
  },
};

export const PaymentWithToggleAndExpiry: Story = {
  args: {
    variant: 'payment-w-toggle-and-expiry',
    background: 'white',
  },
};

// Size Variants
export const SmallSize: Story = {
  args: {
    size: 'small',
    variant: 'payment-w-toggle-and-expiry',
    background: 'white',
  },
};

// Background Variants
export const SeafoamBackground: Story = {
  args: {
    variant: 'payment-w-toggle-and-expiry',
    background: 'alt-seafoam-25',
  },
};

export const GrayBackground: Story = {
  args: {
    variant: 'payment-w-toggle-and-expiry',
    background: 'alt-gray-50',
  },
};

export const HoverState: Story = {
  args: {
    variant: 'payment-w-toggle-and-expiry',
    background: 'hover',
    toggleEnabled: true,
  },
};

export const DisabledState: Story = {
  args: {
    variant: 'payment-w-toggle-and-expiry',
    background: 'disabled',
    disabled: true,
    toggleEnabled: false,
  },
};

// Different Payment Methods
export const DifferentPaymentMethods: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Different Payment Methods</h3>
      <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
        <PaymentCell variant="payment-w-toggle-and-expiry" paymentMethod="visa" paymentName="Visa ending in 1234" paymentExpiry="Expiry 12/2025" />
        <PaymentCell variant="payment-w-toggle-and-expiry" paymentMethod="mastercard" paymentName="Mastercard ending in 5678" paymentExpiry="Expiry 08/2024" />
        <PaymentCell variant="payment-w-toggle-and-expiry" paymentMethod="amex" paymentName="American Express ending in 9012" paymentExpiry="Expiry 03/2026" />
        <PaymentCell variant="payment-w-toggle-and-expiry" paymentMethod="paypal" paymentName="PayPal account" paymentExpiry="john@example.com" />
        <PaymentCell variant="payment-w-toggle-and-expiry" paymentMethod="apple-pay" paymentName="Apple Pay" paymentExpiry="Touch ID enabled" />
        <PaymentCell variant="payment-w-toggle-and-expiry" paymentMethod="google-pay" paymentName="Google Pay" paymentExpiry="PIN required" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows different payment methods with their appropriate icons and information.',
      },
    },
  },
};

// Figma Design Showcase
export const FigmaDesignShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Payment Cell Variants - Figma Implementation</h3>
        <p style={{ margin: '0 0 24px 0', color: '#6D7280', fontSize: '14px' }}>
          Pixel-perfect implementation matching the Figma designs
        </p>
      </div>

      {/* Original Figma Designs - Seafoam Background */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '500' }}>Default Size - Seafoam Background</h4>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
          <PaymentCell
            size="default"
            variant="payment-w-toggle"
            background="alt-seafoam-25"
            paymentName="Visa ending in 1234"
            paymentMethod="visa"
            toggleEnabled={true}
          />
          <PaymentCell
            size="default"
            variant="payment-w-toggle-and-expiry"
            background="alt-seafoam-25"
            paymentName="Visa ending in 1234"
            paymentExpiry="Expiry 01/2001"
            paymentMethod="visa"
            toggleEnabled={true}
          />
        </div>
      </div>

      {/* Small Size - Seafoam Background */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '500' }}>Small Size - Seafoam Background</h4>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
          <PaymentCell
            size="small"
            variant="payment-w-toggle"
            background="alt-seafoam-25"
            paymentName="Visa ending in 1234"
            paymentMethod="visa"
            toggleEnabled={true}
          />
          <PaymentCell
            size="small"
            variant="payment-w-toggle-and-expiry"
            background="alt-seafoam-25"
            paymentName="Visa ending in 1234"
            paymentExpiry="Expiry 01/2001"
            paymentMethod="visa"
            toggleEnabled={true}
          />
        </div>
      </div>

      {/* White Background */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '500' }}>Default Size - White Background</h4>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
          <PaymentCell
            size="default"
            variant="payment-w-toggle"
            background="white"
            paymentName="Visa ending in 1234"
            paymentMethod="visa"
            toggleEnabled={true}
          />
          <PaymentCell
            size="default"
            variant="payment-w-toggle-and-expiry"
            background="white"
            paymentName="Visa ending in 1234"
            paymentExpiry="Expiry 01/2001"
            paymentMethod="visa"
            toggleEnabled={true}
          />
        </div>
      </div>

      {/* Gray Background */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '500' }}>Default Size - Gray Background</h4>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
          <PaymentCell
            size="default"
            variant="payment-w-toggle"
            background="alt-gray-50"
            paymentName="Visa ending in 1234"
            paymentMethod="visa"
            toggleEnabled={true}
          />
          <PaymentCell
            size="default"
            variant="payment-w-toggle-and-expiry"
            background="alt-gray-50"
            paymentName="Visa ending in 1234"
            paymentExpiry="Expiry 01/2001"
            paymentMethod="visa"
            toggleEnabled={true}
          />
        </div>
      </div>

      {/* Different States */}
      <div>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '500' }}>Different States</h4>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', maxWidth: '400px' }}>
          <PaymentCell
            variant="payment-w-toggle-and-expiry"
            background="hover"
            paymentName="Visa ending in 1234"
            paymentExpiry="Expiry 01/2001"
            paymentMethod="visa"
            toggleEnabled={true}
          />
          <PaymentCell
            variant="payment-w-toggle-and-expiry"
            background="disabled"
            paymentName="Visa ending in 1234"
            paymentExpiry="Expiry 01/2001"
            paymentMethod="visa"
            toggleEnabled={false}
            disabled={true}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all PaymentCell variants matching the exact Figma designs with all sizes, backgrounds, and interaction states.',
      },
    },
  },
};

// Interactive Examples
export const InteractiveExample: Story = {
  render: () => {
    const [paymentStates, setPaymentStates] = React.useState({
      card1: true,
      card2: false,
      card3: true,
      card4: false,
    });

    const handleToggleChange = (cardId: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setPaymentStates(prev => ({
        ...prev,
        [cardId]: event.target.checked,
      }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>Interactive Payment Methods</h3>
        <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden', maxWidth: '500px' }}>
          <PaymentCell
            variant="payment-w-toggle-and-expiry"
            paymentMethod="visa"
            paymentName="Visa ending in 1234"
            paymentExpiry="Expiry 12/2025"
            toggleEnabled={paymentStates.card1}
            onToggleChange={handleToggleChange('card1')}
          />
          <PaymentCell
            variant="payment-w-toggle-and-expiry"
            background="alt-gray-50"
            paymentMethod="mastercard"
            paymentName="Mastercard ending in 5678"
            paymentExpiry="Expiry 08/2024"
            toggleEnabled={paymentStates.card2}
            onToggleChange={handleToggleChange('card2')}
          />
          <PaymentCell
            variant="payment-w-toggle-and-expiry"
            paymentMethod="amex"
            paymentName="American Express ending in 9012"
            paymentExpiry="Expiry 03/2026"
            toggleEnabled={paymentStates.card3}
            onToggleChange={handleToggleChange('card3')}
          />
          <PaymentCell
            variant="payment-w-toggle-and-expiry"
            background="alt-gray-50"
            paymentMethod="paypal"
            paymentName="PayPal account"
            paymentExpiry="john@example.com"
            toggleEnabled={paymentStates.card4}
            onToggleChange={handleToggleChange('card4')}
          />
        </div>
        <p style={{ fontSize: '14px', color: '#6D7280', margin: '8px 0 0 0' }}>
          Toggle switches are interactive - click them to enable/disable payment methods!
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example demonstrating functional toggle switches with different payment methods.',
      },
    },
  },
};

// Comprehensive Payment Methods
export const AllPaymentMethods: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>All Supported Payment Methods</h3>
        <p style={{ margin: '0 0 16px 0', color: '#6D7280', fontSize: '14px' }}>
          Complete showcase of all supported payment methods
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 400px)', gap: '24px' }}>
        {/* Credit Cards */}
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Credit Cards</h4>
          <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
            <PaymentCell variant="payment-w-toggle-and-expiry" paymentMethod="visa" paymentName="Visa ending in 1234" paymentExpiry="Expiry 12/2025" />
            <PaymentCell variant="payment-w-toggle-and-expiry" paymentMethod="mastercard" paymentName="Mastercard ending in 5678" paymentExpiry="Expiry 08/2024" />
            <PaymentCell variant="payment-w-toggle-and-expiry" paymentMethod="amex" paymentName="American Express ending in 9012" paymentExpiry="Expiry 03/2026" />
            <PaymentCell variant="payment-w-toggle-and-expiry" paymentMethod="discover" paymentName="Discover ending in 3456" paymentExpiry="Expiry 11/2024" />
          </div>
        </div>

        {/* Digital Wallets */}
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '500' }}>Digital Wallets</h4>
          <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', overflow: 'hidden' }}>
            <PaymentCell variant="payment-w-toggle-and-expiry" paymentMethod="paypal" paymentName="PayPal account" paymentExpiry="john@example.com" />
            <PaymentCell variant="payment-w-toggle-and-expiry" paymentMethod="apple-pay" paymentName="Apple Pay" paymentExpiry="Touch ID enabled" />
            <PaymentCell variant="payment-w-toggle-and-expiry" paymentMethod="google-pay" paymentName="Google Pay" paymentExpiry="PIN required" />
            <PaymentCell variant="payment-w-toggle-and-expiry" paymentMethod="shop-pay" paymentName="Shop Pay" paymentExpiry="Auto-fill enabled" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all supported payment methods including credit cards and digital wallets.',
      },
    },
  },
};
