import type { Meta, StoryObj } from '@storybook/react';
import './tokens.css';

const meta: Meta = {
  title: 'Design System/Foundations/Design Tokens',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Design tokens are the foundation of our design system. They define consistent values for colors, spacing, typography, and other design properties.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const TokenGrid = ({ title, tokens, type = 'color' }: { title: string, tokens: string[], type?: string }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>{title}</h3>
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: type === 'spacing' ? 'repeat(auto-fit, minmax(120px, 1fr))' : 'repeat(auto-fit, minmax(200px, 1fr))', 
      gap: '1rem' 
    }}>
      {tokens.map((token) => {
        const cssVar = `var(${token})`;
        const value = getComputedStyle(document.documentElement).getPropertyValue(token).trim();
        
        return (
          <div key={token} style={{ 
            border: '1px solid #e5e7eb', 
            borderRadius: '8px', 
            padding: '1rem',
            backgroundColor: '#fff'
          }}>
            {type === 'color' && (
              <div style={{ 
                width: '100%', 
                height: '60px', 
                backgroundColor: cssVar, 
                borderRadius: '4px',
                marginBottom: '0.5rem',
                border: '1px solid #e5e7eb'
              }} />
            )}
            {type === 'spacing' && (
              <div style={{ 
                width: cssVar, 
                height: cssVar, 
                backgroundColor: '#3B82F6', 
                borderRadius: '2px',
                marginBottom: '0.5rem',
                minWidth: '8px',
                minHeight: '8px'
              }} />
            )}
            {type === 'shadow' && (
              <div style={{ 
                width: '100%', 
                height: '40px', 
                backgroundColor: '#f8fafc', 
                borderRadius: '4px',
                marginBottom: '0.5rem',
                boxShadow: cssVar
              }} />
            )}
            <div style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>
              {token.replace('--', '')}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'monospace' }}>
              {value || cssVar}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export const Colors: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: '700' }}>Color Tokens</h2>
      
      <TokenGrid 
        title="Primary Blue Palette" 
        type="color"
        tokens={[
          '--primary-blue-dark-blue',
          '--primary-blue-blue',
          '--primary-blue-blue-100',
          '--primary-blue-blue-200',
          '--primary-blue-blue-300',
          '--primary-blue-blue-400',
          '--primary-blue-blue-500',
          '--primary-blue-blue-600',
          '--primary-blue-blue-700',
          '--primary-blue-blue-800',
          '--primary-blue-blue-900'
        ]}
      />
      
      <TokenGrid 
        title="Neutral Gray Palette" 
        type="color"
        tokens={[
          '--neutral-gray-gray-50',
          '--neutral-gray-gray-100',
          '--neutral-gray-gray-200',
          '--neutral-gray-gray-300',
          '--neutral-gray-gray-400',
          '--neutral-gray-gray-500',
          '--neutral-gray-gray-600',
          '--neutral-gray-gray-700',
          '--neutral-gray-gray-800',
          '--neutral-gray-gray-900'
        ]}
      />
      
      <TokenGrid 
        title="Base Colors" 
        type="color"
        tokens={[
          '--base-white',
          '--base-black'
        ]}
      />
      
      <TokenGrid 
        title="Semantic Colors" 
        type="color"
        tokens={[
          '--semantic-success',
          '--semantic-success-light',
          '--semantic-warning',
          '--semantic-warning-light',
          '--semantic-error',
          '--semantic-error-light',
          '--semantic-info',
          '--semantic-info-light'
        ]}
      />
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: '700' }}>Spacing Tokens</h2>
      
      <TokenGrid 
        title="Sizing Scale" 
        type="spacing"
        tokens={[
          '--spacing-sizing-2px',
          '--spacing-sizing-4px',
          '--spacing-sizing-8px',
          '--spacing-sizing-12px',
          '--spacing-sizing-16px',
          '--spacing-sizing-20px',
          '--spacing-sizing-24px',
          '--spacing-sizing-32px',
          '--spacing-sizing-40px',
          '--spacing-sizing-48px',
          '--spacing-sizing-56px',
          '--spacing-sizing-64px'
        ]}
      />
      
      <TokenGrid 
        title="Border Radius" 
        type="spacing"
        tokens={[
          '--spacing-radius-2px',
          '--spacing-radius-4px',
          '--spacing-radius-6px',
          '--spacing-radius-8px',
          '--spacing-radius-12px',
          '--spacing-radius-16px'
        ]}
      />
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: '700' }}>Typography Tokens</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>Font Families</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <div style={{ fontFamily: 'var(--type-typeface-archivo)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              Archivo Font Family
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>
              --type-typeface-archivo
            </div>
          </div>
          <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <div style={{ fontFamily: 'var(--type-typeface-inter)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              Inter Font Family
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace' }}>
              --type-typeface-inter
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>Font Sizes</h3>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          {[
            { token: '--type-size-xs', label: 'Extra Small' },
            { token: '--type-size-sm', label: 'Small' },
            { token: '--type-size-base', label: 'Base' },
            { token: '--type-size-lg', label: 'Large' },
            { token: '--type-size-xl', label: 'Extra Large' },
            { token: '--type-size-2xl', label: '2X Large' },
            { token: '--type-size-3xl', label: '3X Large' },
            { token: '--type-size-4xl', label: '4X Large' },
            { token: '--type-size-5xl', label: '5X Large' },
            { token: '--type-size-6xl', label: '6X Large' }
          ].map(({ token, label }) => (
            <div key={token} style={{ 
              padding: '1rem', 
              border: '1px solid #e5e7eb', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ fontSize: `var(${token})`, fontWeight: '500' }}>
                {label} - The quick brown fox
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'monospace' }}>
                {token}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>Font Weights</h3>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          {[
            { token: '--type-weight-light', label: 'Light (300)' },
            { token: '--type-weight-regular', label: 'Regular (400)' },
            { token: '--type-weight-medium', label: 'Medium (500)' },
            { token: '--type-weight-semibold', label: 'Semibold (600)' },
            { token: '--type-weight-bold', label: 'Bold (700)' },
            { token: '--type-weight-extrabold', label: 'Extra Bold (800)' }
          ].map(({ token, label }) => (
            <div key={token} style={{ 
              padding: '1rem', 
              border: '1px solid #e5e7eb', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ fontWeight: `var(${token})`, fontSize: '1.125rem' }}>
                {label} - The quick brown fox
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'monospace' }}>
                {token}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const Shadows: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: '700' }}>Shadow Tokens</h2>
      
      <TokenGrid 
        title="Shadow Scale" 
        type="shadow"
        tokens={[
          '--shadow-sm',
          '--shadow-md',
          '--shadow-lg',
          '--shadow-xl',
          '--shadow-2xl',
          '--shadow-inner'
        ]}
      />
    </div>
  ),
};
