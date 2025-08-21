import type { Meta, StoryObj } from '@storybook/react';
import { PaymentIcon, type PaymentMethod } from '../../atoms/PaymentIcon';

const meta: Meta<typeof PaymentIcon> = {
  title: 'Design System/Figma Showcase Files/PaymentIcon Figma Showcase',
  component: PaymentIcon,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# PaymentIcon - Complete Figma Showcase

This showcase demonstrates all 16 payment method icons with their 3 size variants (48 total combinations) exactly as specified in the Figma design.

## Features
- **16 Payment Methods**: Visa, Mastercard, Amex, Discover, PayPal, Apple Pay, Google Pay, Shop Pay, Stripe, Klarna, Affirm, Amazon, Diners Club, Maestro, Interac, Sofort
- **3 Sizes**: Small (40×28px), Default (48×32px), Large (56×36px)
- **Pixel Perfect**: Exact implementation matching Figma specifications
- **Brand Accurate**: Official brand colors and styling for each payment method

## Design Specifications
All payment icons match the exact Figma specifications including:
- Precise dimensions and aspect ratios
- Official brand colors and styling
- Consistent border radius and stroke properties
- Proper accessibility features
        `
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof PaymentIcon>;

/**
 * Complete showcase of all 48 payment icon variants as shown in Figma designs
 */
export const CompleteFigmaShowcase: Story = {
  render: () => (
    <div style={{ 
      backgroundColor: '#f8fafc', 
      padding: '40px', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: '700', 
          color: '#1C1C1C', 
          marginBottom: '40px',
          textAlign: 'center' 
        }}>
          Payment Icons - Complete Figma Implementation
        </h1>

        <p style={{ 
          fontSize: '16px', 
          color: '#6B7280',
          marginBottom: '48px',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto 48px auto'
        }}>
          All 16 payment methods × 3 sizes = 48 total variants, pixel-perfect implementation matching Figma designs
        </p>

        {/* CREDIT CARDS SECTION */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            color: '#374151', 
            marginBottom: '24px',
            borderBottom: '2px solid #e5e7eb',
            paddingBottom: '8px'
          }}>
            Credit Cards
          </h2>
          
          {['visa', 'mastercard', 'amex', 'discover', 'diners-club', 'maestro'].map((method) => (
            <div key={method} style={{ marginBottom: '32px' }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '500', 
                marginBottom: '16px',
                textTransform: 'capitalize',
                color: '#4B5563'
              }}>
                {method.replace('-', ' ')}
              </h3>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                  <PaymentIcon method={method as PaymentMethod} size="small" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                  <PaymentIcon method={method as PaymentMethod} size="default" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                  <PaymentIcon method={method as PaymentMethod} size="large" />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* DIGITAL WALLETS SECTION */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            color: '#374151', 
            marginBottom: '24px',
            borderBottom: '2px solid #e5e7eb',
            paddingBottom: '8px'
          }}>
            Digital Wallets
          </h2>
          
          {['apple-pay', 'google-pay', 'paypal', 'shop-pay'].map((method) => (
            <div key={method} style={{ marginBottom: '32px' }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '500', 
                marginBottom: '16px',
                textTransform: 'capitalize',
                color: '#4B5563'
              }}>
                {method.replace('-', ' ')}
              </h3>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                  <PaymentIcon method={method as PaymentMethod} size="small" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                  <PaymentIcon method={method as PaymentMethod} size="default" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                  <PaymentIcon method={method as PaymentMethod} size="large" />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* PAYMENT SERVICES SECTION */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            color: '#374151', 
            marginBottom: '24px',
            borderBottom: '2px solid #e5e7eb',
            paddingBottom: '8px'
          }}>
            Payment Services
          </h2>
          
          {['stripe', 'klarna', 'affirm', 'amazon'].map((method) => (
            <div key={method} style={{ marginBottom: '32px' }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '500', 
                marginBottom: '16px',
                textTransform: 'capitalize',
                color: '#4B5563'
              }}>
                {method}
              </h3>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                  <PaymentIcon method={method as PaymentMethod} size="small" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                  <PaymentIcon method={method as PaymentMethod} size="default" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                  <PaymentIcon method={method as PaymentMethod} size="large" />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* REGIONAL METHODS SECTION */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            color: '#374151', 
            marginBottom: '24px',
            borderBottom: '2px solid #e5e7eb',
            paddingBottom: '8px'
          }}>
            Regional Payment Methods
          </h2>
          
          {['interac', 'sofort'].map((method) => (
            <div key={method} style={{ marginBottom: '32px' }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '500', 
                marginBottom: '16px',
                textTransform: 'capitalize',
                color: '#4B5563'
              }}>
                {method}
              </h3>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Small</p>
                  <PaymentIcon method={method as PaymentMethod} size="small" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Default</p>
                  <PaymentIcon method={method as PaymentMethod} size="default" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Large</p>
                  <PaymentIcon method={method as PaymentMethod} size="large" />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* GRID OVERVIEW */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            color: '#374151', 
            marginBottom: '24px',
            borderBottom: '2px solid #e5e7eb',
            paddingBottom: '8px'
          }}>
            Complete Grid Overview
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', 
            gap: '16px',
            padding: '24px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            {[
              'visa', 'mastercard', 'amex', 'discover', 'paypal', 'apple-pay',
              'google-pay', 'shop-pay', 'stripe', 'klarna', 'affirm', 'amazon',
              'diners-club', 'maestro', 'interac', 'sofort'
            ].map((method) => (
              <div key={method} style={{ textAlign: 'center' }}>
                <PaymentIcon method={method as PaymentMethod} size="default" />
                <div style={{ 
                  fontSize: '10px', 
                  color: '#6B7280',
                  marginTop: '4px',
                  textTransform: 'capitalize',
                  lineHeight: '1.2'
                }}>
                  {method.replace('-', ' ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DESIGN SPECIFICATION NOTES */}
        <section style={{ 
          backgroundColor: '#f8fafc', 
          border: '1px solid #e5e7eb', 
          borderRadius: '8px', 
          padding: '24px',
          marginTop: '48px'
        }}>
          <h2 style={{ 
            fontSize: '18px', 
            fontWeight: '600', 
            color: '#374151', 
            marginBottom: '16px'
          }}>
            Design Specifications
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', fontSize: '14px', color: '#6B7280' }}>
            <div>
              <h4 style={{ fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Dimensions</h4>
              <ul style={{ margin: 0, paddingLeft: '16px' }}>
                <li>Small: 40×28px</li>
                <li>Default: 48×32px</li>
                <li>Large: 56×36px</li>
                <li>Consistent 3:2 aspect ratio</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Styling</h4>
              <ul style={{ margin: 0, paddingLeft: '16px' }}>
                <li>6px border radius</li>
                <li>1px border stroke</li>
                <li>White background</li>
                <li>Brand-accurate colors</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Interactive States</h4>
              <ul style={{ margin: 0, paddingLeft: '16px' }}>
                <li>Hover: Scale and shadow</li>
                <li>Focus: Outline ring</li>
                <li>Active: Scale down effect</li>
                <li>Full keyboard navigation</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Accessibility</h4>
              <ul style={{ margin: 0, paddingLeft: '16px' }}>
                <li>Screen reader labels</li>
                <li>High contrast support</li>
                <li>Reduced motion respect</li>
                <li>WCAG 2.1 AA compliant</li>
              </ul>
            </div>
          </div>
        </section>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '48px', 
          padding: '24px',
          backgroundColor: '#f0f9ff',
          borderRadius: '8px',
          border: '1px solid #0284c7'
        }}>
          <p style={{ 
            fontSize: '16px', 
            color: '#0369a1', 
            margin: 0,
            fontWeight: '500'
          }}>
            ✨ Complete PaymentIcon Implementation
          </p>
          <p style={{ 
            fontSize: '14px', 
            color: '#075985', 
            margin: '8px 0 0 0'
          }}>
            All 48 variants (16 methods × 3 sizes) exactly matching Figma specifications
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all PaymentIcon variants exactly as designed in Figma. This implementation includes all 48 possible combinations of payment methods and sizes, ensuring pixel-perfect replication of the design system specifications.'
      }
    }
  }
};

/**
 * Interactive grid showing all payment methods
 */
export const InteractiveGrid: Story = {
  render: () => (
    <div style={{ 
      backgroundColor: '#ffffff', 
      padding: '40px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        fontSize: '24px', 
        fontWeight: '700', 
        marginBottom: '32px',
        color: '#1C1C1C'
      }}>
        Interactive Payment Methods Grid
      </h1>
      
      <p style={{ 
        textAlign: 'center', 
        fontSize: '14px', 
        color: '#6B7280',
        marginBottom: '32px'
      }}>
        Click any payment method to select it (interactive demo)
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
        gap: '16px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {[
          'visa', 'mastercard', 'amex', 'discover', 'paypal', 'apple-pay',
          'google-pay', 'shop-pay', 'stripe', 'klarna', 'affirm', 'amazon',
          'diners-club', 'maestro', 'interac', 'sofort'
        ].map((method) => (
          <div 
            key={method} 
            style={{ 
              textAlign: 'center',
              padding: '16px',
              borderRadius: '8px',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <div style={{ marginBottom: '8px' }}>
              <PaymentIcon 
                method={method as PaymentMethod} 
                size="default"
                onClick={() => alert(`Selected ${method.replace('-', ' ')}`)}
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
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive grid layout showing all payment methods with click handlers. Perfect for payment method selection interfaces.'
      }
    }
  }
};
