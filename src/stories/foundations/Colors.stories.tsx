import type { Meta, StoryObj } from '@storybook/react';
import './tokens.css';

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Echo Design System Color Foundation

Our comprehensive color system includes **151 design tokens** organized into semantic palettes that ensure accessibility, consistency, and visual hierarchy across all interfaces.

## Color System Overview

### 🎨 Primary Palettes (110 tokens)
- **Blue Palette**: Traditional brand colors (10 tokens)
- **Sky Blue Palette**: Interactive states and focus indicators (24 tokens)
- **Yellow Palette**: Attention, highlights, and warnings (25 tokens)
- **Seafoam Green Palette**: Nature, growth, and positive actions (24 tokens)
- **Dark Blue**: Accent brand color (1 token)

### 🔘 Neutral & Base Colors (17 tokens)
- **Neutral Grays**: Professional neutral palette (10 tokens)
- **Extended Base Grays**: Additional neutral variations (11 tokens)
- **Pure Base Colors**: High contrast colors (3 tokens)
- **Peach Cream Base**: Warm neutral variations (3 tokens)

### ⚠️ Status & Feedback Colors (43 tokens)
- **Echo Status Colors**: Branded validation colors (4 tokens)
- **Extended Red Palette**: Error states and critical alerts (10 tokens)
- **Extended Orange Palette**: Warning states and attention (10 tokens)
- **Extended Green Palette**: Success states and confirmations (10 tokens)
- **Semantic Colors**: Additional feedback colors (8 tokens)
- **Info Colors**: Informational content (2 tokens)

## Design Token Architecture

All colors follow consistent naming conventions:

\`\`\`css
/* Primary color palettes */
--primary-[color]-[weight]     /* 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 */

/* Base and neutral colors */
--base-gray-[weight]           /* Extended neutral grays */
--neutral-gray-gray-[weight]   /* Standard neutral grays */

/* Status and feedback */
--status-[color]-[weight]      /* Extended status palettes */
--semantic-[type]              /* Standard semantic colors */
\`\`\`

## Accessibility Standards

✅ **WCAG 2.1 AA Compliance**: All color combinations meet minimum contrast ratios
✅ **Color Independence**: Information is never conveyed through color alone
✅ **Focus Indicators**: High contrast focus states for keyboard navigation
✅ **Screen Reader Support**: Semantic color naming and proper markup

## Usage Guidelines

### When to Use Each Palette

- **Primary Colors**: Brand elements, key actions, navigation
- **Status Colors**: Form validation, alerts, feedback messages
- **Neutral Colors**: Text, backgrounds, borders, subtle elements
- **Extended Palettes**: Themed interfaces, data visualization, complex states

### Color Token Selection

- **50-200**: Light backgrounds, subtle accents
- **300-400**: Secondary elements, disabled states
- **500-600**: Primary elements, default states
- **700-800**: High emphasis, dark themes
- **900-950**: Maximum contrast, text on light backgrounds
        `,
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

export const ColorSystemOverview: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Complete Color System Overview</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        <div style={{
          padding: '1.5rem',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          backgroundColor: '#f9fafb'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
            🎨 Primary Palettes
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.875rem' }}>
            110 tokens for brand identity and key interface elements with comprehensive tints and shades
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
              <strong>Blue:</strong> Traditional brand colors (10 tokens)
            </li>
            <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
              <strong>Sky Blue:</strong> Interactive states with extensive tints (24 tokens)
            </li>
            <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
              <strong>Yellow:</strong> Attention & highlights with full spectrum (25 tokens)
            </li>
            <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
              <strong>Seafoam Green:</strong> Growth & nature with complete range (24 tokens)
            </li>
            <li style={{ fontSize: '0.875rem' }}>
              <strong>Dark Blue:</strong> Accent color (1 token)
            </li>
          </ul>
        </div>

        <div style={{
          padding: '1.5rem',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          backgroundColor: '#f9fafb'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
            🔘 Neutral & Base Colors
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.875rem' }}>
            17 tokens for text, backgrounds, and structural elements
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
              <strong>Neutral Grays:</strong> Standard grays (10 tokens)
            </li>
            <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
              <strong>Base Grays:</strong> Extended neutrals (11 tokens)
            </li>
            <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
              <strong>Pure Colors:</strong> High contrast (3 tokens)
            </li>
            <li style={{ fontSize: '0.875rem' }}>
              <strong>Peach Cream:</strong> Warm neutrals (3 tokens)
            </li>
          </ul>
        </div>

        <div style={{
          padding: '1.5rem',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          backgroundColor: '#f9fafb'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
            ⚠️ Status & Feedback
          </h3>
          <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.875rem' }}>
            43 tokens for validation states and user feedback
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
              <strong>Echo Status:</strong> Branded validation (4 tokens)
            </li>
            <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
              <strong>Extended Red:</strong> Error states (10 tokens)
            </li>
            <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
              <strong>Extended Orange:</strong> Warnings (10 tokens)
            </li>
            <li style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>
              <strong>Extended Green:</strong> Success states (10 tokens)
            </li>
            <li style={{ fontSize: '0.875rem' }}>
              <strong>Semantic & Info:</strong> Additional feedback (9 tokens)
            </li>
          </ul>
        </div>
      </div>

      <div style={{
        padding: '2rem',
        backgroundColor: '#0f172a',
        borderRadius: '12px',
        color: 'white',
        marginBottom: '2rem'
      }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: 'white' }}>
          🏗️ Design Token Architecture
        </h3>
        <div style={{
          fontFamily: 'Monaco, Consolas, "Lucida Console", monospace',
          fontSize: '0.875rem',
          lineHeight: '1.6'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#94a3b8', marginBottom: '0.25rem' }}>/* Primary color palettes */</div>
            <div style={{ color: '#38bdf8' }}>--primary-[color]-[weight]</div>
            <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Example: --primary-sky-blue-500</div>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#94a3b8', marginBottom: '0.25rem' }}>/* Base and neutral colors */</div>
            <div style={{ color: '#38bdf8' }}>--base-gray-[weight]</div>
            <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Example: --base-gray-500</div>
          </div>
          <div>
            <div style={{ color: '#94a3b8', marginBottom: '0.25rem' }}>/* Status and feedback */</div>
            <div style={{ color: '#38bdf8' }}>--status-[color]-[weight]</div>
            <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Example: --status-red-500</div>
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        padding: '1.5rem',
        backgroundColor: '#f0f9ff',
        borderRadius: '8px',
        border: '1px solid #0ea5e9'
      }}>
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0c4a6e' }}>
            ✅ Accessibility Standards
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', color: '#0c4a6e' }}>
            <li style={{ marginBottom: '0.25rem' }}>WCAG 2.1 AA Compliance</li>
            <li style={{ marginBottom: '0.25rem' }}>4.5:1 minimum contrast ratios</li>
            <li style={{ marginBottom: '0.25rem' }}>Color-independent design</li>
            <li>High contrast focus states</li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0c4a6e' }}>
            🎯 Usage Guidelines
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', color: '#0c4a6e' }}>
            <li style={{ marginBottom: '0.25rem' }}>50-200: Light backgrounds</li>
            <li style={{ marginBottom: '0.25rem' }}>300-400: Secondary elements</li>
            <li style={{ marginBottom: '0.25rem' }}>500-600: Primary elements</li>
            <li>700-950: High emphasis text</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};

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
        title="Sky Blue Palette (Extended Tints & Shades)"
        description="Comprehensive sky blue palette with extensive tints and shades for interactive states, focus indicators, and themed interfaces."
        colors={[
          { name: 'Sky Blue 25', color: '#F8FEFF', cssVar: 'var(--primary-sky-blue-25)', description: 'Lightest tint for backgrounds' },
          { name: 'Sky Blue 50', color: '#F0FBFF', cssVar: 'var(--primary-sky-blue-50)', description: 'Very light backgrounds' },
          { name: 'Sky Blue 100', color: '#E0F6FE', cssVar: 'var(--primary-sky-blue-100)', description: 'Light backgrounds' },
          { name: 'Sky Blue 200', color: '#BAEAFD', cssVar: 'var(--primary-sky-blue-200)', description: 'Subtle accents' },
          { name: 'Sky Blue 300', color: '#7DD3FC', cssVar: 'var(--primary-sky-blue-300)', description: 'Light interactive elements' },
          { name: 'Sky Blue 400', color: '#38BDF8', cssVar: 'var(--primary-sky-blue-400)', description: 'Hover states' },
          { name: 'Sky Blue 500', color: '#0BA7EA', cssVar: 'var(--primary-sky-blue-500)', description: 'Primary interactive color' },
          { name: 'Sky Blue 600', color: '#0284C7', cssVar: 'var(--primary-sky-blue-600)', description: 'Pressed states' },
          { name: 'Sky Blue 700', color: '#0369A1', cssVar: 'var(--primary-sky-blue-700)', description: 'Dark themes' },
          { name: 'Sky Blue 800', color: '#075985', cssVar: 'var(--primary-sky-blue-800)', description: 'Deep emphasis' },
          { name: 'Sky Blue 900', color: '#0C4A6E', cssVar: 'var(--primary-sky-blue-900)', description: 'Darkest usable shade' },
          { name: 'Sky Blue 950', color: '#082F49', cssVar: 'var(--primary-sky-blue-950)', description: 'Maximum contrast' },
        ]}
      />

      <ColorPalette
        title="Yellow Palette (Complete Spectrum)"
        description="Full spectrum yellow palette with comprehensive tints and shades for attention, highlights, warnings, and themed interfaces."
        colors={[
          { name: 'Yellow 25', color: '#FFFEF5', cssVar: 'var(--primary-yellow-25)', description: 'Lightest warm tint' },
          { name: 'Yellow 50', color: '#FEFCE8', cssVar: 'var(--primary-yellow-50)', description: 'Very light yellow backgrounds' },
          { name: 'Yellow 100', color: '#FEF9C3', cssVar: 'var(--primary-yellow-100)', description: 'Light yellow accents' },
          { name: 'Yellow 200', color: '#FEF08A', cssVar: 'var(--primary-yellow-200)', description: 'Subtle yellow highlights' },
          { name: 'Yellow 300', color: '#FDE047', cssVar: 'var(--primary-yellow-300)', description: 'Light attention color' },
          { name: 'Yellow 400', color: '#FACC15', cssVar: 'var(--primary-yellow-400)', description: 'Medium yellow emphasis' },
          { name: 'Yellow 500', color: '#EAB308', cssVar: 'var(--primary-yellow-500)', description: 'Primary yellow warning color' },
          { name: 'Yellow 600', color: '#CA8A04', cssVar: 'var(--primary-yellow-600)', description: 'Darker yellow states' },
          { name: 'Yellow 700', color: '#A16207', cssVar: 'var(--primary-yellow-700)', description: 'Deep yellow emphasis' },
          { name: 'Yellow 800', color: '#854D0E', cssVar: 'var(--primary-yellow-800)', description: 'Dark yellow text' },
          { name: 'Yellow 900', color: '#713F12', cssVar: 'var(--primary-yellow-900)', description: 'Darkest yellow shade' },
          { name: 'Yellow 950', color: '#422006', cssVar: 'var(--primary-yellow-950)', description: 'Maximum contrast' },
        ]}
      />

      <ColorPalette
        title="Seafoam Green Palette (Complete Range)"
        description="Comprehensive seafoam green palette with full tints and shades for nature themes, growth indicators, and positive actions. Centered around the correct base color #8BBF9F."
        colors={[
          { name: 'Seafoam 25', color: '#F7FBF9', cssVar: 'var(--primary-seafoam-25)', description: 'Lightest seafoam tint' },
          { name: 'Seafoam 50', color: '#EFF7F3', cssVar: 'var(--primary-seafoam-50)', description: 'Very light seafoam backgrounds' },
          { name: 'Seafoam 100', color: '#DFEEE7', cssVar: 'var(--primary-seafoam-100)', description: 'Light seafoam accents' },
          { name: 'Seafoam 200', color: '#CFE5DB', cssVar: 'var(--primary-seafoam-200)', description: 'Subtle seafoam highlights' },
          { name: 'Seafoam 300', color: '#BFDDCF', cssVar: 'var(--primary-seafoam-300)', description: 'Light nature color' },
          { name: 'Seafoam 400', color: '#AFD4C3', cssVar: 'var(--primary-seafoam-400)', description: 'Medium seafoam emphasis' },
          { name: 'Seafoam 500', color: '#8BBF9F', cssVar: 'var(--primary-seafoam-500)', description: 'Primary seafoam/nature color' },
          { name: 'Seafoam 600', color: '#73A78D', cssVar: 'var(--primary-seafoam-600)', description: 'Darker seafoam states' },
          { name: 'Seafoam 700', color: '#5B8F7B', cssVar: 'var(--primary-seafoam-700)', description: 'Deep seafoam emphasis' },
          { name: 'Seafoam 800', color: '#437769', cssVar: 'var(--primary-seafoam-800)', description: 'Dark seafoam text' },
          { name: 'Seafoam 900', color: '#2B5F57', cssVar: 'var(--primary-seafoam-900)', description: 'Darkest seafoam shade' },
          { name: 'Seafoam 950', color: '#134745', cssVar: 'var(--primary-seafoam-950)', description: 'Maximum contrast' },
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
        title="Standard Neutral Grays"
        description="Core neutral grays for text, backgrounds, and interface elements with proven contrast ratios."
        colors={[
          { name: 'Gray 900', color: '#111827', cssVar: 'var(--neutral-gray-gray-900)', description: 'Primary text on light backgrounds' },
          { name: 'Gray 800', color: '#1F2937', cssVar: 'var(--neutral-gray-gray-800)', description: 'Secondary text, emphasized content' },
          { name: 'Gray 700', color: '#374151', cssVar: 'var(--neutral-gray-gray-700)', description: 'Muted text, form labels' },
          { name: 'Gray 600', color: '#4B5563', cssVar: 'var(--neutral-gray-gray-600)', description: 'Subdued text, icons' },
          { name: 'Gray 500', color: '#6B7280', cssVar: 'var(--neutral-gray-gray-500)', description: 'Placeholder text, subtle borders' },
          { name: 'Gray 400', color: '#9CA3AF', cssVar: 'var(--neutral-gray-gray-400)', description: 'Disabled elements, light borders' },
          { name: 'Gray 300', color: '#D2D5DA', cssVar: 'var(--neutral-gray-gray-300)', description: 'Form borders, dividers' },
          { name: 'Gray 200', color: '#E5E7EB', cssVar: 'var(--neutral-gray-gray-200)', description: 'Subtle backgrounds, table borders' },
          { name: 'Gray 100', color: '#F3F4F6', cssVar: 'var(--neutral-gray-gray-100)', description: 'Light backgrounds, hover states' },
          { name: 'Gray 50', color: '#F9FAFB', cssVar: 'var(--neutral-gray-gray-50)', description: 'Lightest backgrounds, page backgrounds' },
        ]}
      />

      <ColorPalette
        title="Extended Base Grays"
        description="Additional neutral variations for complex interfaces and enhanced design flexibility."
        colors={[
          { name: 'Base Gray 950', color: '#020617', cssVar: 'var(--base-gray-950)', description: 'Maximum contrast, dark themes' },
          { name: 'Base Gray 900', color: '#0F172A', cssVar: 'var(--base-gray-900)', description: 'Near black, high contrast text' },
          { name: 'Base Gray 800', color: '#1E293B', cssVar: 'var(--base-gray-800)', description: 'Dark backgrounds, cards' },
          { name: 'Base Gray 700', color: '#334155', cssVar: 'var(--base-gray-700)', description: 'Dark theme text, emphasized elements' },
          { name: 'Base Gray 600', color: '#475569', cssVar: 'var(--base-gray-600)', description: 'Medium contrast text' },
          { name: 'Base Gray 500', color: '#64748B', cssVar: 'var(--base-gray-500)', description: 'Balanced neutral, icons' },
          { name: 'Base Gray 400', color: '#94A3B8', cssVar: 'var(--base-gray-400)', description: 'Lighter text, subtle elements' },
          { name: 'Base Gray 300', color: '#CBD5E1', cssVar: 'var(--base-gray-300)', description: 'Light borders, separators' },
          { name: 'Base Gray 200', color: '#E2E8F0', cssVar: 'var(--base-gray-200)', description: 'Subtle backgrounds' },
          { name: 'Base Gray 100', color: '#F1F5F9', cssVar: 'var(--base-gray-100)', description: 'Very light backgrounds' },
          { name: 'Base Gray 50', color: '#F8FAFC', cssVar: 'var(--base-gray-50)', description: 'Lightest possible backgrounds' },
        ]}
      />
    </div>
  ),
};

export const SemanticColors: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Semantic & Status Colors</h2>

      <div style={{
        padding: '1.5rem',
        backgroundColor: '#fef3c7',
        borderRadius: '8px',
        marginBottom: '2rem',
        border: '1px solid #f59e0b'
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#92400e' }}>
          💡 Usage Guidelines for Status Colors
        </h3>
        <p style={{ color: '#92400e', fontSize: '0.875rem', margin: 0 }}>
          Use <strong>Echo Status Colors</strong> for form validation and UI feedback. Use <strong>Extended Status Palettes</strong> for themed interfaces, data visualization, and complex state management.
        </p>
      </div>
      
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
        title="Echo Status Colors (Primary Validation)"
        description="Core branded status colors for form validation, alerts, and user feedback in the Echo design system."
        colors={[
          { name: 'Status Red', color: '#CE2031', cssVar: 'var(--status-red)', description: 'Primary error state for form validation' },
          { name: 'Status Red Light', color: '#FBEBEB', cssVar: 'var(--status-red-light)', description: 'Light error backgrounds and subtle alerts' },
          { name: 'Status Orange', color: '#EE5622', cssVar: 'var(--status-orange)', description: 'Primary warning state for cautions' },
          { name: 'Status Orange Alt', color: '#F4A403', cssVar: 'var(--status-orange-alt)', description: 'Alternative warning color for variety' },
          { name: 'Status Dark Orange', color: '#D07C06', cssVar: 'var(--status-dark-orange)', description: 'Deeper warning emphasis and text' },
          { name: 'Status Green', color: '#70CC67', cssVar: 'var(--status-green)', description: 'Primary success state for confirmations' },
          { name: 'Status Green Light', color: '#F2FFF1', cssVar: 'var(--status-green-light)', description: 'Light success backgrounds and subtle confirmations' },
          { name: 'Status Dark Green', color: '#227F1A', cssVar: 'var(--status-dark-green)', description: 'Success message text and emphasis' },
          { name: 'Status Purple', color: '#5D2C82', cssVar: 'var(--status-purple)', description: 'Special status for features and highlights' },
          { name: 'Status Purple Light', color: '#FBF7FF', cssVar: 'var(--status-purple-light)', description: 'Light purple backgrounds for feature sections' },
          { name: 'Status Info Blue', color: '#366F97', cssVar: 'var(--status-info-blue)', description: 'Informational content and neutral messages' },
          { name: 'Status Info Blue Light', color: '#F5FCFF', cssVar: 'var(--status-info-blue-light)', description: 'Light info backgrounds and help sections' },
        ]}
      />

      <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Standard Semantic Colors</h3>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Traditional semantic colors for general purpose feedback and information.</p>
      </div>
      
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
        title="Peach Cream Base Colors"
        description="Warm neutral colors for softer backgrounds and subtle design elements"
        colors={[
          { name: 'Peach Cream 50', color: '#FFFAF2', cssVar: 'var(--base-peach-cream-50)', description: 'Warmest light background, subtle sections' },
          { name: 'Peach Cream 100', color: '#FFF4E5', cssVar: 'var(--base-peach-cream-100)', description: 'Warm background, cards, containers' },
          { name: 'Peach Cream 200', color: '#E6DCCE', cssVar: 'var(--base-peach-cream-200)', description: 'Warm borders, dividers, subtle emphasis' },
        ]}
      />

      <ColorPalette
        title="Secondary Colors"
        description="Secondary colors for subtle elements, support content, and alternative themes"
        colors={[
          { name: 'Blue Gray', color: '#61607C', cssVar: 'var(--secondary-blue-gray)', description: 'Placeholder text and secondary content' },
          { name: 'Blue Gray Light', color: '#C8C7D1', cssVar: 'var(--secondary-blue-gray-light)', description: 'Light backgrounds and subtle borders' },
          { name: 'Navy', color: '#294086', cssVar: 'var(--secondary-navy)', description: 'Professional dark blue for headers and emphasis' },
          { name: 'Navy Light', color: '#C8D2E4', cssVar: 'var(--secondary-navy-light)', description: 'Light navy backgrounds and accents' },
          { name: 'Teal Light', color: '#BDE3ED', cssVar: 'var(--secondary-teal-light)', description: 'Calm accent color for info sections' },
          { name: 'Teal Very Light', color: '#E8F5F5', cssVar: 'var(--secondary-teal-very-light)', description: 'Subtle background tint for calm sections' },
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

export const DesignTokensUsage: Story = {
  render: () => (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Design Tokens Usage Examples</h2>

      <div style={{
        padding: '1.5rem',
        backgroundColor: '#fef3c7',
        borderRadius: '8px',
        marginBottom: '2rem',
        border: '1px solid #f59e0b'
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#92400e' }}>
          💡 Implementation Guide
        </h3>
        <p style={{ color: '#92400e', fontSize: '0.875rem', margin: 0 }}>
          These examples show how to use the 67 design tokens in real CSS and components. Copy the patterns below for consistent theming.
        </p>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem' }}>CSS Implementation Examples</h3>

        <div style={{
          backgroundColor: '#0f172a',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          fontFamily: 'Monaco, Consolas, "Lucida Console", monospace',
          fontSize: '0.875rem',
          lineHeight: '1.6',
          marginBottom: '2rem',
          overflow: 'auto'
        }}>
          <div style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>/* Primary button using Sky Blue palette */</div>
          <div><span style={{ color: '#f1c40f' }}>.btn-primary</span> {'{'}</div>
          <div style={{ paddingLeft: '1rem' }}>
            <div><span style={{ color: '#38bdf8' }}>background:</span> <span style={{ color: '#10b981' }}>var(--primary-sky-blue-500)</span>;</div>
            <div><span style={{ color: '#38bdf8' }}>color:</span> <span style={{ color: '#10b981' }}>var(--base-white)</span>;</div>
            <div><span style={{ color: '#38bdf8' }}>border:</span> <span style={{ color: '#10b981' }}>1px solid var(--primary-sky-blue-600)</span>;</div>
          </div>
          <div>{'}'}</div>

          <div style={{ marginTop: '1rem', color: '#94a3b8', marginBottom: '0.5rem' }}>/* Success using Extended Green palette */</div>
          <div><span style={{ color: '#f1c40f' }}>.alert-success</span> {'{'}</div>
          <div style={{ paddingLeft: '1rem' }}>
            <div><span style={{ color: '#38bdf8' }}>background:</span> <span style={{ color: '#10b981' }}>var(--status-green-50)</span>;</div>
            <div><span style={{ color: '#38bdf8' }}>border:</span> <span style={{ color: '#10b981' }}>1px solid var(--status-green-200)</span>;</div>
            <div><span style={{ color: '#38bdf8' }}>color:</span> <span style={{ color: '#10b981' }}>var(--status-green-800)</span>;</div>
          </div>
          <div>{'}'}</div>
        </div>

        <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>Live Token Examples</h4>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div style={{
            padding: '1.5rem',
            backgroundColor: 'var(--primary-sky-blue-50)',
            border: '1px solid var(--primary-sky-blue-200)',
            borderRadius: '8px'
          }}>
            <h5 style={{
              color: 'var(--primary-sky-blue-800)',
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              🎨 Sky Blue Theme
            </h5>
            <p style={{
              color: 'var(--primary-sky-blue-700)',
              fontSize: '0.875rem',
              marginBottom: '1rem'
            }}>
              Using --primary-sky-blue-* tokens.
            </p>
            <button style={{
              backgroundColor: 'var(--primary-sky-blue-500)',
              color: 'var(--base-white)',
              border: '1px solid var(--primary-sky-blue-600)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              fontSize: '0.875rem',
              cursor: 'pointer'
            }}>
              Primary Action
            </button>
          </div>

          <div style={{
            padding: '1.5rem',
            backgroundColor: 'var(--status-green-50)',
            border: '1px solid var(--status-green-200)',
            borderRadius: '8px'
          }}>
            <h5 style={{
              color: 'var(--status-green-800)',
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              ✅ Success State
            </h5>
            <p style={{
              color: 'var(--status-green-700)',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Using --status-green-* extended palette for success feedback.
            </p>
          </div>

          <div style={{
            padding: '1.5rem',
            backgroundColor: 'var(--primary-yellow-50)',
            border: '1px solid var(--primary-yellow-200)',
            borderRadius: '8px'
          }}>
            <h5 style={{
              color: 'var(--primary-yellow-800)',
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              ⚡ Yellow Accent
            </h5>
            <p style={{
              color: 'var(--primary-yellow-700)',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Using --primary-yellow-* palette for attention-grabbing elements.
            </p>
          </div>

          <div style={{
            padding: '1.5rem',
            backgroundColor: 'var(--base-peach-cream-50)',
            border: '1px solid var(--base-peach-cream-200)',
            borderRadius: '8px'
          }}>
            <h5 style={{
              color: 'var(--neutral-gray-gray-800)',
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              🧡 Peach Cream Base
            </h5>
            <p style={{
              color: 'var(--neutral-gray-gray-700)',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Using --base-peach-cream-* palette for warm, subtle backgrounds.
            </p>
          </div>

          <div style={{
            padding: '1.5rem',
            backgroundColor: 'var(--secondary-navy-light)',
            border: '1px solid var(--secondary-navy)',
            borderRadius: '8px'
          }}>
            <h5 style={{
              color: 'var(--secondary-navy)',
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              🔷 Secondary Navy
            </h5>
            <p style={{
              color: 'var(--secondary-navy)',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Using --secondary-navy-* palette for professional themes.
            </p>
          </div>

          <div style={{
            padding: '1.5rem',
            backgroundColor: 'var(--status-purple-light)',
            border: '1px solid var(--status-purple)',
            borderRadius: '8px'
          }}>
            <h5 style={{
              color: 'var(--status-purple)',
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              💜 Status Purple
            </h5>
            <p style={{
              color: 'var(--status-purple)',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Using --status-purple-* for special features and highlights.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

// ⛔ REJECTED STORY - DO NOT REINSTALL
// The "UsageGuidelines" story was permanently rejected in Chromatic Build 21
// See REJECTED_STORIES.md for full documentation
// export const UsageGuidelines: Story = { ... } // ❌ BANNED
