import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Brand Portal',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
};

export default meta;
type Story = StoryObj;

const BrandCard = ({ 
  name, 
  description, 
  primaryColor, 
  secondaryColor, 
  headingFont, 
  bodyFont, 
  command,
  isActive 
}: { 
  name: string; 
  description: string; 
  primaryColor: string; 
  secondaryColor: string; 
  headingFont: string; 
  bodyFont: string; 
  command: string;
  isActive?: boolean;
}) => (
  <div style={{
    background: 'var(--base-white)',
    border: `1px solid ${isActive ? primaryColor : 'var(--neutral-gray-gray-200)'}`,
    borderRadius: 'var(--spacing-radius-12px)',
    padding: 'var(--spacing-sizing-32px)',
    boxShadow: isActive ? `0 0 0 2px ${primaryColor}22, var(--shadow-dropdown)` : 'var(--shadow-dropdown)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    position: 'relative',
    overflow: 'hidden'
  }}>
    {isActive && (
      <div style={{
        position: 'absolute',
        top: '12px',
        right: '12px',
        background: primaryColor,
        color: 'white',
        padding: '4px 12px',
        borderRadius: 'var(--spacing-radius-9999px)',
        fontSize: 'var(--type-size-xs)',
        fontWeight: 'var(--type-weight-bold)',
        textTransform: 'uppercase'
      }}>
        Active
      </div>
    )}
    
    <div style={{ marginBottom: 'var(--spacing-sizing-24px)' }}>
      <h2 style={{ 
        fontSize: 'var(--type-size-3xl)', 
        fontWeight: 'var(--type-weight-bold)', 
        color: 'var(--base-black)',
        marginBottom: '8px',
        fontFamily: 'var(--type-typeface-archivo)'
      }}>
        {name}
      </h2>
      <p style={{ color: 'var(--neutral-gray-gray-600)', fontSize: 'var(--type-size-base)' }}>
        {description}
      </p>
    </div>

    <div style={{ display: 'flex', gap: '12px', marginBottom: 'var(--spacing-sizing-24px)' }}>
      <div style={{ flex: 1 }}>
        <span style={{ fontSize: 'var(--type-size-xs)', color: 'var(--neutral-gray-gray-400)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Primary</span>
        <div style={{ height: '48px', background: primaryColor, borderRadius: 'var(--spacing-radius-4px)', marginTop: '4px' }} />
      </div>
      <div style={{ flex: 1 }}>
        <span style={{ fontSize: 'var(--type-size-xs)', color: 'var(--neutral-gray-gray-400)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Secondary</span>
        <div style={{ height: '48px', background: secondaryColor, borderRadius: 'var(--spacing-radius-4px)', marginTop: '4px' }} />
      </div>
    </div>

    <div style={{ marginBottom: 'var(--spacing-sizing-24px)', borderTop: '1px solid var(--neutral-gray-gray-100)', paddingTop: 'var(--spacing-sizing-16px)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ color: 'var(--neutral-gray-gray-500)', fontSize: 'var(--type-size-sm)' }}>Headings</span>
        <span style={{ fontWeight: 'var(--type-weight-semibold)', fontSize: 'var(--type-size-sm)' }}>{headingFont}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ color: 'var(--neutral-gray-gray-500)', fontSize: 'var(--type-size-sm)' }}>Body</span>
        <span style={{ fontSize: 'var(--type-size-sm)' }}>{bodyFont}</span>
      </div>
    </div>

    <div style={{ marginTop: 'auto' }}>
      <code style={{
        display: 'block',
        background: 'var(--neutral-gray-gray-50)',
        padding: '12px',
        borderRadius: 'var(--spacing-radius-4px)',
        fontSize: 'var(--type-size-xs)',
        color: 'var(--neutral-gray-gray-800)',
        border: '1px solid var(--neutral-gray-gray-200)',
        marginBottom: '16px'
      }}>
        {command}
      </code>
      <button 
        disabled={isActive}
        style={{
          width: '100%',
          padding: '12px',
          background: isActive ? 'var(--neutral-gray-gray-200)' : primaryColor,
          color: 'white',
          border: 'none',
          borderRadius: 'var(--spacing-radius-4px)',
          fontWeight: 'var(--type-weight-bold)',
          cursor: isActive ? 'default' : 'pointer',
          transition: 'opacity 0.2s'
        }}
        onClick={() => alert(`To switch to ${name}, run "${command}" in your terminal.`)}
      >
        {isActive ? 'Currently Active' : `Switch to ${name}`}
      </button>
    </div>
  </div>
);

export const BrandPortal: Story = {
  render: () => {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'var(--neutral-gray-gray-50)', 
        fontFamily: 'var(--type-typeface-roboto-flex)',
        padding: '80px 40px'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <header style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h1 style={{ 
              fontSize: '48px', 
              fontWeight: 'var(--type-weight-bold)', 
              color: 'var(--base-black)',
              marginBottom: '16px',
              fontFamily: 'var(--type-typeface-archivo)',
              letterSpacing: '-0.02em'
            }}>
              Brand Portal
            </h1>
            <p style={{ 
              fontSize: 'var(--type-size-xl)', 
              color: 'var(--neutral-gray-gray-600)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Welcome to the Echo White-Label Design System. Access and manage visual identities across all platform brands.
            </p>
          </header>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '32px' 
          }}>
            <BrandCard 
              name="Echo"
              description="The flagship brand identity. Professional, reliable, and optimized for high-density nuclear power data."
              primaryColor="#2F42BD"
              secondaryColor="#0BA7EA"
              headingFont="Archivo"
              bodyFont="Roboto Flex"
              command="npm run tokens:echo"
              isActive={true}
            />
            <BrandCard 
              name="Alpha"
              description="A vibrant, modern identity for specialized project teams. Bold purples and premium typography."
              primaryColor="#5D2C82"
              secondaryColor="#F4A403"
              headingFont="Ginger Pro"
              bodyFont="SF Pro Display"
              command="npm run tokens:alpha"
            />
          </div>

          <footer style={{ marginTop: '80px', borderTop: '1px solid var(--neutral-gray-gray-200)', paddingTop: '40px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '40px' 
            }}>
              <div>
                <h4 style={{ fontWeight: 'var(--type-weight-bold)', marginBottom: '12px' }}>White-Labeling Architecture</h4>
                <p style={{ fontSize: 'var(--type-size-sm)', color: 'var(--neutral-gray-gray-600)', lineHeight: '1.5' }}>
                  Our system uses a JSON-First token architecture. Brand-specific tokens are merged with global foundations at build time to generate the CSS variable layer.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 'var(--type-weight-bold)', marginBottom: '12px' }}>Zero Breaking Changes</h4>
                <p style={{ fontSize: 'var(--type-size-sm)', color: 'var(--neutral-gray-gray-600)', lineHeight: '1.5' }}>
                  A compatibility alias layer maps new brand variables to legacy CSS names, ensuring existing components work across all brands without modification.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 'var(--type-weight-bold)', marginBottom: '12px' }}>Figma Integration</h4>
                <p style={{ fontSize: 'var(--type-size-sm)', color: 'var(--neutral-gray-gray-600)', lineHeight: '1.5' }}>
                  Tokens are synced directly from Figma JSON exports, allowing designers to update brand identities without touching the codebase.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
};
