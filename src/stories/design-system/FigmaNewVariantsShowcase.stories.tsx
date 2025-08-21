import type { Meta, StoryObj } from '@storybook/react';
import { UserProfile } from '../atoms/UserProfile';
import { ProgressBar } from '../atoms/ProgressBar';
import { PaymentMethod } from '../atoms/PaymentMethod';

const meta: Meta = {
  title: 'Design System/Figma New Variants Showcase',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Comprehensive showcase of all new design system variants added based on Figma designs: UserProfile, ProgressBar, and PaymentMethod components.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Base configurations
const userAvatar = {
  type: 'profile-photo' as const,
  src: 'https://images.unsplash.com/photo-1494790108755-2616b612e1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  alt: 'Olivia Rhye avatar',
};

export const AllNewVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '48px',
      padding: '40px',
      border: '2px dashed #8B5CF6',
      borderRadius: '12px',
      backgroundColor: '#F8FAFC',
      width: 'fit-content',
      minWidth: '400px'
    }}>
      <div style={{
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '16px',
        color: '#1E293B'
      }}>
        🎨 New Figma Design Variants
      </div>
      
      {/* User Profile Section */}
      <section>
        <div style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#475569',
          marginBottom: '20px',
          borderBottom: '2px solid #E2E8F0',
          paddingBottom: '8px'
        }}>
          👤 User Profile Component
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#64748B',
            marginBottom: '8px'
          }}>
            Olivia Rhye (Figma Design Match)
          </div>
          <UserProfile
            name="Olivia Rhye"
            avatar={userAvatar}
          />
          
          <div style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#64748B',
            marginBottom: '8px',
            marginTop: '16px'
          }}>
            Size Variants
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <UserProfile
              size="small"
              name="Olivia Rhye"
              avatar={userAvatar}
            />
            <UserProfile
              size="default"
              name="Olivia Rhye"
              avatar={userAvatar}
            />
            <UserProfile
              size="large"
              name="Olivia Rhye"
              avatar={userAvatar}
            />
          </div>
        </div>
      </section>
      
      {/* Progress Bar Section */}
      <section>
        <div style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#475569',
          marginBottom: '20px',
          borderBottom: '2px solid #E2E8F0',
          paddingBottom: '8px'
        }}>
          📊 Progress Bar Component
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#64748B',
            marginBottom: '8px'
          }}>
            30% Progress (Figma Design Match)
          </div>
          <ProgressBar value={30} />
          
          <div style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#64748B',
            marginBottom: '8px',
            marginTop: '16px'
          }}>
            Different Progress Values
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ProgressBar value={15} />
            <ProgressBar value={45} />
            <ProgressBar value={70} />
            <ProgressBar value={90} variant="success" />
          </div>
          
          <div style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#64748B',
            marginBottom: '8px',
            marginTop: '16px'
          }}>
            Size Variants
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <ProgressBar value={30} size="small" />
            <ProgressBar value={30} size="default" />
            <ProgressBar value={30} size="large" />
          </div>
        </div>
      </section>
      
      {/* Payment Method Section */}
      <section>
        <div style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#475569',
          marginBottom: '20px',
          borderBottom: '2px solid #E2E8F0',
          paddingBottom: '8px'
        }}>
          💳 Payment Method Component
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#64748B',
            marginBottom: '8px'
          }}>
            Visa ending in 1234 (Figma Design Match)
          </div>
          <PaymentMethod method="visa" lastFourDigits="1234" />
          
          <div style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#64748B',
            marginBottom: '8px',
            marginTop: '16px'
          }}>
            Different Payment Methods
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <PaymentMethod method="visa" lastFourDigits="1234" />
            <PaymentMethod method="mastercard" lastFourDigits="5678" />
            <PaymentMethod method="amex" lastFourDigits="9012" />
            <PaymentMethod method="paypal" lastFourDigits="****" customLabel="PayPal Account" />
          </div>
          
          <div style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#64748B',
            marginBottom: '8px',
            marginTop: '16px'
          }}>
            Interactive States
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <PaymentMethod method="visa" lastFourDigits="1234" />
            <PaymentMethod 
              method="visa" 
              lastFourDigits="1234" 
              onClick={() => alert('Payment method clicked!')} 
            />
            <PaymentMethod 
              method="visa" 
              lastFourDigits="1234" 
              selected={true}
              onClick={() => alert('Selected payment method!')} 
            />
          </div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all new design system variants added based on Figma designs, including UserProfile, ProgressBar, and PaymentMethod components with all their variations.',
      },
    },
  },
};

export const FigmaDesignComparison: Story = {
  render: () => (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      padding: '40px',
      backgroundColor: '#F8FAFC',
      borderRadius: '12px',
      border: '2px dashed #8B5CF6'
    }}>
      <div style={{
        gridColumn: '1 / -1',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '24px',
        color: '#1E293B'
      }}>
        📐 Figma Design Implementation Comparison
      </div>
      
      {/* Card 1: User Profile */}
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          marginBottom: '16px',
          color: '#1E293B'
        }}>
          User Profile - Olivia Rhye
        </h3>
        <UserProfile
          name="Olivia Rhye"
          avatar={userAvatar}
        />
        <div style={{
          fontSize: '12px',
          color: '#64748B',
          marginTop: '12px',
          padding: '8px',
          backgroundColor: '#F1F5F9',
          borderRadius: '4px'
        }}>
          ✅ Matches Figma design with avatar + name layout
        </div>
      </div>
      
      {/* Card 2: Progress Bar */}
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          marginBottom: '16px',
          color: '#1E293B'
        }}>
          Progress Bar - 30%
        </h3>
        <ProgressBar value={30} />
        <div style={{
          fontSize: '12px',
          color: '#64748B',
          marginTop: '12px',
          padding: '8px',
          backgroundColor: '#F1F5F9',
          borderRadius: '4px'
        }}>
          ✅ Matches Figma design with 30% progress + percentage label
        </div>
      </div>
      
      {/* Card 3: Payment Method */}
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        border: '1px solid #E2E8F0',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          marginBottom: '16px',
          color: '#1E293B'
        }}>
          Payment Method - Visa ending in 1234
        </h3>
        <PaymentMethod method="visa" lastFourDigits="1234" />
        <div style={{
          fontSize: '12px',
          color: '#64748B',
          marginTop: '12px',
          padding: '8px',
          backgroundColor: '#F1F5F9',
          borderRadius: '4px'
        }}>
          ✅ Matches Figma design with Visa icon + "ending in 1234" text
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison showing how the implemented components match the original Figma designs.',
      },
    },
  },
};

export const ResponsiveShowcase: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: '32px',
      padding: '40px',
      backgroundColor: '#F8FAFC',
      borderRadius: '12px',
      border: '2px dashed #8B5CF6',
      width: '100%',
      maxWidth: '800px'
    }}>
      <div style={{
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '16px',
        color: '#1E293B'
      }}>
        📱 Responsive Behavior Showcase
      </div>
      
      {/* Mobile Layout Simulation */}
      <div style={{
        border: '2px solid #E2E8F0',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: 'white'
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          marginBottom: '16px',
          color: '#475569'
        }}>
          Mobile Layout (Small Sizes)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '280px' }}>
          <UserProfile
            size="small"
            name="Olivia Rhye"
            avatar={userAvatar}
          />
          <ProgressBar value={30} size="small" />
          <PaymentMethod method="visa" lastFourDigits="1234" size="small" />
        </div>
      </div>
      
      {/* Tablet Layout Simulation */}
      <div style={{
        border: '2px solid #E2E8F0',
        borderRadius: '8px',
        padding: '24px',
        backgroundColor: 'white'
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          marginBottom: '16px',
          color: '#475569'
        }}>
          Tablet Layout (Default Sizes)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
          <UserProfile
            name="Olivia Rhye"
            avatar={userAvatar}
          />
          <ProgressBar value={30} />
          <PaymentMethod method="visa" lastFourDigits="1234" />
        </div>
      </div>
      
      {/* Desktop Layout Simulation */}
      <div style={{
        border: '2px solid #E2E8F0',
        borderRadius: '8px',
        padding: '32px',
        backgroundColor: 'white'
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          marginBottom: '16px',
          color: '#475569'
        }}>
          Desktop Layout (Large Sizes)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '500px' }}>
          <UserProfile
            size="large"
            name="Olivia Rhye"
            avatar={userAvatar}
          />
          <ProgressBar value={30} size="large" />
          <PaymentMethod method="visa" lastFourDigits="1234" size="large" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how all new components adapt to different screen sizes and layouts, from mobile to desktop.',
      },
    },
  },
};
