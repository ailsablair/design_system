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

      <ColorPalette
        title="Sky Blue Palette"
        description="Sky blue is used for focus states, active elements, and interactive feedback in the Echo design system."
        colors={[
          { name: 'Sky Blue', color: '#0BA7EA', cssVar: 'var(--primary-sky-blue-sky-blue)', description: 'Primary focus and interactive state color' },
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
        title="Status Colors (Echo Specific)"
        description="Echo-specific status colors for validation states and feedback"
        colors={[
          { name: 'Status Red', color: '#CE2031', cssVar: 'var(--status-red)', description: 'Error validation state' },
          { name: 'Status Orange', color: '#EE5622', cssVar: 'var(--status-orange)', description: 'Warning validation state' },
          { name: 'Status Green', color: '#70CC67', cssVar: 'var(--status-green)', description: 'Success validation state' },
          { name: 'Status Dark Green', color: '#227F1A', cssVar: 'var(--status-dark-green)', description: 'Success message text' },
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
          { name: 'Black', color: '#1C1C1C', cssVar: 'var(--base-black)', description: 'Updated Echo black for text and interfaces' },
        ]}
      />

      <ColorPalette
        title="Secondary Colors"
        description="Secondary colors for subtle elements and support content"
        colors={[
          { name: 'Blue Gray', color: '#61607C', cssVar: 'var(--secondary-blue-gray)', description: 'Placeholder text and secondary content' },
        ]}
      />
    </div>
  ),
};

export const ExtendedStatusColors: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Extended Status Colors</h2>

      <ColorPalette
        title="Red Status Palette"
        description="Complete red palette for error states, danger zones, and critical alerts"
        colors={[
          { name: 'Red 50', color: '#FEF2F2', cssVar: 'var(--status-red-50)' },
          { name: 'Red 100', color: '#FEE2E2', cssVar: 'var(--status-red-100)' },
          { name: 'Red 200', color: '#FECACA', cssVar: 'var(--status-red-200)' },
          { name: 'Red 300', color: '#FCA5A5', cssVar: 'var(--status-red-300)' },
          { name: 'Red 400', color: '#F87171', cssVar: 'var(--status-red-400)' },
          { name: 'Red 500', color: '#CE2031', cssVar: 'var(--status-red-500)', description: 'Primary error color' },
          { name: 'Red 600', color: '#B91C1C', cssVar: 'var(--status-red-600)' },
          { name: 'Red 700', color: '#991B1B', cssVar: 'var(--status-red-700)' },
          { name: 'Red 800', color: '#7F1D1D', cssVar: 'var(--status-red-800)' },
          { name: 'Red 900', color: '#701A1A', cssVar: 'var(--status-red-900)' },
        ]}
      />

      <ColorPalette
        title="Orange Status Palette"
        description="Complete orange palette for warning states and attention-requiring elements"
        colors={[
          { name: 'Orange 50', color: '#FFF7ED', cssVar: 'var(--status-orange-50)' },
          { name: 'Orange 100', color: '#FFEDD5', cssVar: 'var(--status-orange-100)' },
          { name: 'Orange 200', color: '#FED7AA', cssVar: 'var(--status-orange-200)' },
          { name: 'Orange 300', color: '#FDBA74', cssVar: 'var(--status-orange-300)' },
          { name: 'Orange 400', color: '#FB923C', cssVar: 'var(--status-orange-400)' },
          { name: 'Orange 500', color: '#EE5622', cssVar: 'var(--status-orange-500)', description: 'Primary warning color' },
          { name: 'Orange 600', color: '#EA580C', cssVar: 'var(--status-orange-600)' },
          { name: 'Orange 700', color: '#C2410C', cssVar: 'var(--status-orange-700)' },
          { name: 'Orange 800', color: '#9A3412', cssVar: 'var(--status-orange-800)' },
          { name: 'Orange 900', color: '#7C2D12', cssVar: 'var(--status-orange-900)' },
        ]}
      />

      <ColorPalette
        title="Green Status Palette"
        description="Complete green palette for success states, confirmations, and positive feedback"
        colors={[
          { name: 'Green 50', color: '#F0FDF4', cssVar: 'var(--status-green-50)' },
          { name: 'Green 100', color: '#DCFCE7', cssVar: 'var(--status-green-100)' },
          { name: 'Green 200', color: '#BBF7D0', cssVar: 'var(--status-green-200)' },
          { name: 'Green 300', color: '#86EFAC', cssVar: 'var(--status-green-300)' },
          { name: 'Green 400', color: '#4ADE80', cssVar: 'var(--status-green-400)' },
          { name: 'Green 500', color: '#70CC67', cssVar: 'var(--status-green-500)', description: 'Primary success color' },
          { name: 'Green 600', color: '#227F1A', cssVar: 'var(--status-green-600)', description: 'Success text color' },
          { name: 'Green 700', color: '#15803D', cssVar: 'var(--status-green-700)' },
          { name: 'Green 800', color: '#166534', cssVar: 'var(--status-green-800)' },
          { name: 'Green 900', color: '#14532D', cssVar: 'var(--status-green-900)' },
        ]}
      />
    </div>
  ),
};

// ⛔ REJECTED STORY - DO NOT REINSTALL
// The "UsageGuidelines" story was permanently rejected in Chromatic Build 21
// See REJECTED_STORIES.md for full documentation
// export const UsageGuidelines: Story = { ... } // ❌ BANNED
