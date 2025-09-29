import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Foundations/Overview',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Welcome to the Echo Design System foundations. This section contains the core elements that form the foundation of our design language.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1f2937' }}>
        Echo Design System Foundations
      </h1>
      
      <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '3rem', lineHeight: '1.7' }}>
        This section contains the foundational elements of our design system, providing the building blocks
        for consistent and accessible user interfaces across all Echo products.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ 
          padding: '2rem', 
          border: '1px solid #e5e7eb', 
          borderRadius: '12px',
          backgroundColor: '#fff'
        }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            backgroundColor: '#2F42BD', 
            borderRadius: '8px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>🎨</span>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem' }}>Design Tokens</h3>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Core design values including colors, typography, spacing, and other foundational properties
            that ensure consistency across all components.
          </p>
        </div>

        <div style={{ 
          padding: '2rem', 
          border: '1px solid #e5e7eb', 
          borderRadius: '12px',
          backgroundColor: '#fff'
        }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            backgroundColor: '#0BA7EA', 
            borderRadius: '8px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>🎯</span>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem' }}>Color Palette</h3>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Comprehensive color system featuring primary, secondary, neutral, and semantic colors
            with accessibility considerations built in.
          </p>
        </div>

        <div style={{ 
          padding: '2rem', 
          border: '1px solid #e5e7eb', 
          borderRadius: '12px',
          backgroundColor: '#fff'
        }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            backgroundColor: '#3A3282', 
            borderRadius: '8px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>📝</span>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem' }}>Typography</h3>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Font families, sizes, weights, and line heights that create clear hierarchy
            and excellent readability across all devices.
          </p>
        </div>

        <div style={{ 
          padding: '2rem', 
          border: '1px solid #e5e7eb', 
          borderRadius: '12px',
          backgroundColor: '#fff'
        }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            backgroundColor: '#10B981', 
            borderRadius: '8px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>📏</span>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem' }}>Spacing System</h3>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Consistent spacing scale that creates visual rhythm and helps establish
            relationships between interface elements.
          </p>
        </div>

        <div style={{ 
          padding: '2rem', 
          border: '1px solid #e5e7eb', 
          borderRadius: '12px',
          backgroundColor: '#fff'
        }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            backgroundColor: '#F59E0B', 
            borderRadius: '8px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>🏷️</span>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem' }}>Logo & Branding</h3>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Echo brand identity elements including logo variants, usage guidelines,
            and brand colors for consistent representation.
          </p>
        </div>

        <div style={{ 
          padding: '2rem', 
          border: '1px solid #e5e7eb', 
          borderRadius: '12px',
          backgroundColor: '#fff'
        }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            backgroundColor: '#6B7280', 
            borderRadius: '8px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>🌗</span>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem' }}>Shadows & Effects</h3>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Depth and visual effects that add dimension to interfaces while maintaining
            performance and accessibility standards.
          </p>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#f8fafc', 
        padding: '2rem', 
        borderRadius: '12px',
        border: '1px solid #e2e8f0'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Getting Started</h2>
        <p style={{ color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          These foundations serve as the building blocks for all components in the design system. 
          They ensure consistency and maintainability across all user interfaces.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1rem' 
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '1px solid #e2e8f0'
          }}>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>For Designers</h4>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
              Use these foundations as your source of truth when creating new designs and mockups.
            </p>
          </div>
          
          <div style={{ 
            backgroundColor: 'white', 
            padding: '1.5rem', 
            borderRadius: '8px',
            border: '1px solid #e2e8f0'
          }}>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>For Developers</h4>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
              Reference these tokens in your code using CSS custom properties for consistent implementation.
            </p>
          </div>
        </div>
      </div>

      <hr style={{ margin: '3rem 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />
      
      <p style={{ fontSize: '0.875rem', color: '#9ca3af', textAlign: 'center' }}>
        Explore the individual foundation elements using the navigation menu to learn more about each area.
      </p>
    </div>
  ),
};
