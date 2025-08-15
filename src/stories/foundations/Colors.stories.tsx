import type { Meta, StoryObj } from '@storybook/react';
import './tokens.css';

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Our design system uses a carefully crafted color palette that ensures accessibility, consistency, and visual hierarchy across all interfaces.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ 
  name, 
  color, 
  cssVar, 
  description 
}: { 
  name: string; 
  color: string; 
  cssVar?: string; 
  description?: string; 
}) => (
  <div style={{ 
    border: '1px solid #e5e7eb', 
    borderRadius: '8px', 
    overflow: 'hidden',
    backgroundColor: '#fff',
    minWidth: '200px'
  }}>
    <div style={{ 
      width: '100%', 
      height: '80px', 
      backgroundColor: color,
      border: color === '#FFFFFF' ? '1px solid #e5e7eb' : 'none'
    }} />
    <div style={{ padding: '1rem' }}>
      <div style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.25rem' }}>
        {name}
      </div>
      {description && (
        <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem' }}>
          {description}
        </div>
      )}
      <div style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'monospace' }}>
        {color}
      </div>
      {cssVar && (
        <div style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'monospace' }}>
          {cssVar}
        </div>
      )}
    </div>
  </div>
);

const ColorPalette = ({ 
  title, 
  description, 
  colors 
}: { 
  title: string; 
  description?: string; 
  colors: { name: string; color: string; cssVar?: string; description?: string; }[];
}) => (
  <div style={{ marginBottom: '3rem' }}>
    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>{title}</h3>
    {description && (
      <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>{description}</p>
    )}
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
      gap: '1rem' 
    }}>
      {colors.map((item) => (
        <ColorSwatch key={item.name} {...item} />
      ))}
    </div>
  </div>
);

export const PrimaryColors: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Primary Colors</h2>
      
      <ColorPalette
        title="Primary Blue Palette"
        description="The primary blue palette is the foundation of our brand identity and is used for primary actions, links, and key interface elements."
        colors={[
          { name: 'Blue 900', color: '#0A142D', cssVar: 'var(--primary-blue-blue-900)' },
          { name: 'Blue 800', color: '#121F51', cssVar: 'var(--primary-blue-blue-800)' },
          { name: 'Blue 700', color: '#1B2B75', cssVar: 'var(--primary-blue-blue-700)' },
          { name: 'Blue 600', color: '#253699', cssVar: 'var(--primary-blue-blue-600)' },
          { name: 'Blue 500', color: '#2F42BD', cssVar: 'var(--primary-blue-blue-500)' },
          { name: 'Blue 400', color: '#6171DF', cssVar: 'var(--primary-blue-blue-400)' },
          { name: 'Blue 300', color: '#95A0E5', cssVar: 'var(--primary-blue-blue-300)' },
          { name: 'Blue 200', color: '#C5CAED', cssVar: 'var(--primary-blue-blue-200)' },
          { name: 'Blue 100', color: '#E8EBFA', cssVar: 'var(--primary-blue-blue-100)' },
          { name: 'Dark Blue', color: '#191E3C', cssVar: 'var(--primary-blue-dark-blue)' },
        ]}
      />
    </div>
  ),
};

export const NeutralColors: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Neutral Colors</h2>
      
      <ColorPalette
        title="Neutral Grays"
        description="Neutral grays provide the foundation for text, backgrounds, and subtle interface elements."
        colors={[
          { name: 'Gray 900', color: '#111827', cssVar: 'var(--neutral-gray-gray-900)' },
          { name: 'Gray 800', color: '#1F2937', cssVar: 'var(--neutral-gray-gray-800)' },
          { name: 'Gray 700', color: '#374151', cssVar: 'var(--neutral-gray-gray-700)' },
          { name: 'Gray 600', color: '#4B5563', cssVar: 'var(--neutral-gray-gray-600)' },
          { name: 'Gray 500', color: '#6B7280', cssVar: 'var(--neutral-gray-gray-500)' },
          { name: 'Gray 400', color: '#9CA3AF', cssVar: 'var(--neutral-gray-gray-400)' },
          { name: 'Gray 300', color: '#D2D5DA', cssVar: 'var(--neutral-gray-gray-300)' },
          { name: 'Gray 200', color: '#E5E7EB', cssVar: 'var(--neutral-gray-gray-200)' },
          { name: 'Gray 100', color: '#F3F4F6', cssVar: 'var(--neutral-gray-gray-100)' },
          { name: 'Gray 50', color: '#F9FAFB', cssVar: 'var(--neutral-gray-gray-50)' },
        ]}
      />
    </div>
  ),
};

export const SemanticColors: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Semantic Colors</h2>
      
      <ColorPalette
        title="Success Colors"
        description="Positive states and confirmations"
        colors={[
          { name: 'Success', color: '#10B981', cssVar: 'var(--semantic-success)' },
          { name: 'Success Light', color: '#D1FAE5', cssVar: 'var(--semantic-success-light)' },
        ]}
      />
      
      <ColorPalette
        title="Warning Colors"
        description="Caution and attention states"
        colors={[
          { name: 'Warning', color: '#F59E0B', cssVar: 'var(--semantic-warning)' },
          { name: 'Warning Light', color: '#FEF3C7', cssVar: 'var(--semantic-warning-light)' },
        ]}
      />
      
      <ColorPalette
        title="Error Colors"
        description="Error states and destructive actions"
        colors={[
          { name: 'Error', color: '#EF4444', cssVar: 'var(--semantic-error)' },
          { name: 'Error Light', color: '#FEE2E2', cssVar: 'var(--semantic-error-light)' },
        ]}
      />
      
      <ColorPalette
        title="Info Colors"
        description="Informational content and neutral actions"
        colors={[
          { name: 'Info', color: '#3B82F6', cssVar: 'var(--semantic-info)' },
          { name: 'Info Light', color: '#DBEAFE', cssVar: 'var(--semantic-info-light)' },
        ]}
      />
    </div>
  ),
};

export const BaseColors: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Base Colors</h2>
      
      <ColorPalette
        title="Base Colors"
        description="Pure colors for high contrast"
        colors={[
          { name: 'White', color: '#FFFFFF', cssVar: 'var(--base-white)' },
          { name: 'Black', color: '#000000', cssVar: 'var(--base-black)' },
        ]}
      />
    </div>
  ),
};
