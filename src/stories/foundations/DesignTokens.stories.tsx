import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useEffect, useMemo, useState } from 'react';
import './tokens.css';

const useCssVarValues = (tokens: string[]) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const stableTokens = useMemo(() => [...tokens], [tokens]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const computed = window.getComputedStyle(document.documentElement);
    const resolved: Record<string, string> = {};

    stableTokens.forEach((token) => {
      resolved[token] = computed.getPropertyValue(token).trim();
    });

    setValues(resolved);
  }, [stableTokens]);

  return values;
};

const meta: Meta = {
  title: 'Foundations/Design Tokens',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Design tokens are the foundation of our design system. They define consistent values for colors, spacing, typography, and other design properties. Our tokens ensure Figma design specifications are faithfully implemented across all components. Now enhanced with complete MUI 7 theme integration for superior interactions while maintaining Echo visual consistency.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const TokenGrid = ({ title, tokens, type = 'color' }: { title: string, tokens: string[], type?: string }) => {
  const tokenValues = useCssVarValues(tokens);

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>{title}</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: type === 'spacing' ? 'repeat(auto-fit, minmax(120px, 1fr))' : 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {tokens.map((token) => {
          const cssVar = `var(${token})`;
          const value = tokenValues[token];
          const displayValue = value || cssVar;

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
                {displayValue}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

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
          '--primary-blue-blue-50',
          '--primary-blue-blue-100',
          '--primary-blue-blue-200',
          '--primary-blue-blue-300',
          '--primary-blue-blue-400'
        ]}
      />
      
      <TokenGrid 
        title="Sky Blue Palette (Main Brand)" 
        type="color"
        tokens={[
          '--primary-sky-blue-sky-blue',
          '--primary-sky-blue-dark-sky-blue',
          '--primary-sky-blue-25',
          '--primary-sky-blue-50',
          '--primary-sky-blue-100',
          '--primary-sky-blue-200',
          '--primary-sky-blue-300',
          '--primary-sky-blue-400'
        ]}
      />
      
      <TokenGrid 
        title="Seafoam Green Palette" 
        type="color"
        tokens={[
          '--primary-seafoam-seafoam',
          '--primary-seafoam-dark-seafoam',
          '--primary-seafoam-extra-dark-seafoam',
          '--primary-seafoam-25',
          '--primary-seafoam-50',
          '--primary-seafoam-100',
          '--primary-seafoam-200',
          '--primary-seafoam-300'
        ]}
      />
      
      <TokenGrid 
        title="Yellow Palette" 
        type="color"
        tokens={[
          '--primary-yellow-yellow',
          '--primary-yellow-dark-yellow',
          '--primary-yellow-50',
          '--primary-yellow-100',
          '--primary-yellow-200',
          '--primary-yellow-300',
          '--primary-yellow-400'
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
        title="Status Colors" 
        type="color"
        tokens={[
          '--status-red',
          '--status-red-light',
          '--status-green',
          '--status-dark-green',
          '--status-green-light',
          '--status-orange',
          '--status-dark-orange',
          '--status-orange-light',
          '--status-info-blue',
          '--status-info-blue-light'
        ]}
      />
      
      <TokenGrid 
        title="Base Colors" 
        type="color"
        tokens={[
          '--base-white',
          '--base-black',
          '--base-overlay'
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
        title="Sizing Scale (8px Grid System)" 
        type="spacing"
        tokens={[
          '--spacing-sizing-2px',
          '--spacing-sizing-4px',
          '--spacing-sizing-6px',
          '--spacing-sizing-8px',
          '--spacing-sizing-12px',
          '--spacing-sizing-16px',
          '--spacing-sizing-20px',
          '--spacing-sizing-24px',
          '--spacing-sizing-28px',
          '--spacing-sizing-32px',
          '--spacing-sizing-36px',
          '--spacing-sizing-40px',
          '--spacing-sizing-48px',
          '--spacing-sizing-56px',
          '--spacing-sizing-64px',
          '--spacing-sizing-80px'
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
          '--spacing-radius-16px',
          '--spacing-radius-20px',
          '--spacing-radius-24px',
          '--spacing-radius-99999px'
        ]}
      />
      
      <TokenGrid 
        title="Stroke Widths" 
        type="spacing"
        tokens={[
          '--spacing-stroke-0-5px',
          '--spacing-stroke-1px',
          '--spacing-stroke-2px',
          '--spacing-stroke-3px',
          '--spacing-stroke-4px'
        ]}
      />
    </div>
  ),
};

export const ComponentSizing: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: '700' }}>Component Sizing Tokens</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>Button Dimensions</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {[
            { size: 'Extra Small', height: '--sizing-button-height-xs', width: '--sizing-button-min-width-xs' },
            { size: 'Small', height: '--sizing-button-height-sm', width: '--sizing-button-min-width-sm' },
            { size: 'Default', height: '--sizing-button-height-default', width: '--sizing-button-min-width-default' },
            { size: 'Large', height: '--sizing-button-height-lg', width: '--sizing-button-min-width-lg' }
          ].map(({ size, height, width }) => (
            <div key={size} style={{ 
              padding: '1rem', 
              border: '1px solid #e5e7eb', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{
                height: `var(${height})`,
                minWidth: `var(${width})`,
                backgroundColor: '#3B82F6',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                {size} Button
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'monospace' }}>
                height: {height}<br/>
                min-width: {width}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>Avatar Dimensions</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {[
            { size: 'Extra Small', token: '--components-avatar-avatar-xs' },
            { size: 'Small', token: '--components-avatar-avatar-small' },
            { size: 'Default', token: '--components-avatar-avatar' },
            { size: 'Large', token: '--components-avatar-avatar-large' }
          ].map(({ size, token }) => (
            <div key={size} style={{ 
              padding: '1rem', 
              border: '1px solid #e5e7eb', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{
                width: `var(${token})`,
                height: `var(${token})`,
                backgroundColor: '#10B981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: '500'
              }}>
                {size[0]}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'monospace' }}>
                {token}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>Toggle Dimensions</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {[
            { size: 'Small', width: '--sizing-toggle-small-width', height: '--sizing-toggle-small-height' },
            { size: 'Default', width: '--sizing-toggle-default-width', height: '--sizing-toggle-default-height' },
            { size: 'Large', width: '--sizing-toggle-large-width', height: '--sizing-toggle-large-height' }
          ].map(({ size, width, height }) => (
            <div key={size} style={{ 
              padding: '1rem', 
              border: '1px solid #e5e7eb', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{
                width: `var(${width})`,
                height: `var(${height})`,
                backgroundColor: '#0BA7EA',
                borderRadius: '99999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '2px'
              }}>
                <div style={{
                  width: `calc(var(${height}) - 4px)`,
                  height: `calc(var(${height}) - 4px)`,
                  backgroundColor: 'white',
                  borderRadius: '50%'
                }}/>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'monospace' }}>
                {size} Toggle<br/>
                {width} × {height}
              </div>
            </div>
          ))}
        </div>
      </div>
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
            <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
              --type-typeface-archivo (Headings, Labels)
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Used for: Headings, labels, and UI text that needs emphasis
            </div>
          </div>
          <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <div style={{ fontFamily: 'var(--type-typeface-roboto-flex)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              Roboto Flex Font Family
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', fontFamily: 'monospace', marginBottom: '0.5rem' }}>
              --type-typeface-roboto-flex (Body Text)
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Used for: Body text, paragraphs, and readable content
            </div>
          </div>
          <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: '#f0fdf4' }}>
            <div style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              🆕 Font Family Aliases
            </div>
            <div style={{ fontSize: '0.875rem', color: '#059669', fontFamily: 'monospace' }}>
              --font-family-base: var(--type-typeface-roboto-flex)<br/>
              --font-family-heading: var(--type-typeface-archivo)
            </div>
            <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>
              Use these aliases for consistent typography across components
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

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>🆕 Display Typography (Large Values)</h3>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          {[
            { token: '--type-size-display-sm', label: 'Display Small (48px)', usage: 'Card stats, metrics' },
            { token: '--type-size-display-md', label: 'Display Medium (64px)', usage: 'Dashboard values' },
            { token: '--type-size-display-lg', label: 'Display Large (82px)', usage: 'Hero statistics' }
          ].map(({ token, label, usage }) => (
            <div key={token} style={{ 
              padding: '1rem', 
              border: '1px solid #e5e7eb', 
              borderRadius: '8px',
              backgroundColor: '#f0fdf4'
            }}>
              <div style={{ fontSize: `var(${token})`, fontWeight: '700', lineHeight: '1', marginBottom: '0.5rem' }}>
                123
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                {label}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'monospace', marginBottom: '0.25rem' }}>
                {token}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#059669' }}>
                Usage: {usage}
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
        title="Standard Shadow Scale" 
        type="shadow"
        tokens={[
          '--shadow-xs',
          '--shadow-sm',
          '--shadow-default',
          '--shadow-med',
          '--shadow-lg',
          '--shadow-xl'
        ]}
      />

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>🆕 Component-Specific Shadows</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ 
            padding: '1rem', 
            border: '1px solid #e5e7eb', 
            borderRadius: '8px',
            backgroundColor: '#f0fdf4'
          }}>
            <div style={{ 
              width: '100%', 
              height: '60px', 
              backgroundColor: '#f8fafc', 
              borderRadius: '8px',
              marginBottom: '0.5rem',
              boxShadow: 'var(--shadow-dropdown)'
            }} />
            <div style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>
              Dropdown Shadow
            </div>
            <div style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'monospace', marginBottom: '0.25rem' }}>
              --shadow-dropdown
            </div>
            <div style={{ fontSize: '0.75rem', color: '#059669' }}>
              Used for: Dropdown menus, popovers, floating elements
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>🆕 Gradient Tokens</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ 
            padding: '1rem', 
            border: '1px solid #e5e7eb', 
            borderRadius: '8px',
            backgroundColor: '#f0fdf4'
          }}>
            <div style={{ 
              width: '100%', 
              height: '60px', 
              background: 'var(--gradient-placeholder)', 
              borderRadius: '8px',
              marginBottom: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6b7280',
              fontSize: '0.875rem'
            }}>
              Placeholder Content
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>
              Placeholder Gradient
            </div>
            <div style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'monospace', marginBottom: '0.25rem' }}>
              --gradient-placeholder
            </div>
            <div style={{ fontSize: '0.75rem', color: '#059669' }}>
              Used for: Image placeholders, loading states, empty content areas
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const UsageExamples: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: '700' }}>Design Token Usage Examples</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>CSS Implementation</h3>
        <div style={{ 
          background: '#1f2937',
          color: '#f9fafb',
          padding: '1.5rem',
          borderRadius: '8px',
          fontFamily: 'Monaco, Consolas, monospace',
          fontSize: '14px',
          overflow: 'auto'
        }}>
          <div style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>/* Import design tokens */</div>
          <div>@import './stories/foundations/tokens.css';</div>
          <div style={{ marginTop: '1rem', color: '#9ca3af' }}>/* Use tokens in your component styles */</div>
          <div>.button &#123;</div>
          <div>&nbsp;&nbsp;font-family: var(--font-family-heading);</div>
          <div>&nbsp;&nbsp;font-size: var(--type-size-base);</div>
          <div>&nbsp;&nbsp;font-weight: var(--type-weight-medium);</div>
          <div>&nbsp;&nbsp;padding: var(--spacing-sizing-12px) var(--spacing-sizing-20px);</div>
          <div>&nbsp;&nbsp;border-radius: var(--spacing-radius-4px);</div>
          <div>&nbsp;&nbsp;background: var(--primary-sky-blue-sky-blue);</div>
          <div>&nbsp;&nbsp;color: var(--base-white);</div>
          <div>&nbsp;&nbsp;box-shadow: var(--shadow-sm);</div>
          <div>&#125;</div>
          <div style={{ marginTop: '1rem' }}>.card &#123;</div>
          <div>&nbsp;&nbsp;width: var(--sizing-width-334);</div>
          <div>&nbsp;&nbsp;padding: var(--spacing-sizing-24px);</div>
          <div>&nbsp;&nbsp;border-radius: var(--spacing-radius-12px);</div>
          <div>&nbsp;&nbsp;background: var(--gradient-placeholder);</div>
          <div>&#125;</div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>Component Token Categories</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem'
        }}>
          <div style={{ padding: '1rem', border: '1px solid #dbeafe', borderRadius: '8px', background: '#eff6ff' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>🎨 Color Tokens</h4>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Use semantic color tokens for consistent theming and accessibility compliance.
            </div>
          </div>
          <div style={{ padding: '1rem', border: '1px solid #dcfce7', borderRadius: '8px', background: '#f0fdf4' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>📐 Spacing Tokens</h4>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Follow the 8px grid system for consistent spacing and visual rhythm.
            </div>
          </div>
          <div style={{ padding: '1rem', border: '1px solid #fef3c7', borderRadius: '8px', background: '#fffbeb' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>✍️ Typography Tokens</h4>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Use Archivo for headings and Roboto Flex for body text to maintain hierarchy.
            </div>
          </div>
          <div style={{ padding: '1rem', border: '1px solid #fce7f3', borderRadius: '8px', background: '#fdf2f8' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>🧩 Component Tokens</h4>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Use component-specific sizing tokens for buttons, avatars, and form elements.
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        padding: '1.5rem', 
        background: '#ecfdf5',
        border: '1px solid #22c55e',
        borderRadius: '8px'
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
          ✅ Design Token Best Practices
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem'
        }}>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>DO</h4>
            <ul style={{ fontSize: '0.875rem', margin: 0, paddingLeft: '1.25rem' }}>
              <li>Use semantic color tokens (--primary-sky-blue-sky-blue)</li>
              <li>Follow the 8px spacing grid (--spacing-sizing-8px)</li>
              <li>Use component-specific sizing tokens</li>
              <li>Implement proper font family aliases</li>
              <li>Apply shadows and gradients via tokens</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>DON'T</h4>
            <ul style={{ fontSize: '0.875rem', margin: 0, paddingLeft: '1.25rem' }}>
              <li>Use hardcoded pixel values (padding: 12px)</li>
              <li>Use hardcoded colors (#0BA7EA)</li>
              <li>Create custom spacing outside the grid</li>
              <li>Mix font families inconsistently</li>
              <li>Use arbitrary shadows or gradients</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};
