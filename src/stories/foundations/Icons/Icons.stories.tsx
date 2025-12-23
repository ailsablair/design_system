import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';
import { echoIconComponents } from './EchoIcons';
import type { EchoIconName } from './EchoIcons';
import '../tokens.css';

const meta: Meta<typeof Icon> = {
  title: 'Foundations/Icons',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Echo Design System features a primary set of hand-crafted icons designed specifically for our industry context. 
All icons use standardized sizing, colors, and opacity levels through design tokens.

### Usage Warning:
**Please do not use any MUI Icons unless you have first checked they do not exist within the Echo Icon set.**

## Design Tokens

### Sizes
- **xs**: 12px - Very small icons for compact interfaces
- **sm**: 14px - Small icons for dense layouts  
- **md**: 16px - Default size for most use cases
- **lg**: 20px - Large icons for prominence
- **xl**: 24px - Extra large for headers and emphasis
- **2xl**: 32px - Maximum size for hero elements

### Opacity Levels
- **subtle**: 40% opacity for background elements
- **medium**: 60% opacity for secondary content (default)
- **strong**: 70% opacity for primary interactive elements
- **full**: 100% opacity for maximum visibility
        `,
      },
    },
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.keys(echoIconComponents),
      description: 'Icon name from the Echo-specific set',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size using design tokens',
    },
    color: {
      control: { type: 'text' },
      description: 'Color (CSS color or design token)',
    },
    opacity: {
      control: { type: 'select' },
      options: ['subtle', 'medium', 'strong', 'full'],
      description: 'Opacity level using design tokens',
    },
    'aria-label': {
      control: { type: 'text' },
      description: 'Accessibility label for screen readers',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

const IconGrid = ({ icons }: { icons: EchoIconName[] }) => (
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', 
    gap: '16px',
    padding: '24px',
    fontFamily: 'var(--font-family-base)'
  }}>
    {icons.map((name) => (
      <div 
        key={name}
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          padding: '16px',
          border: '1px solid var(--neutral-gray-gray-200)',
          borderRadius: 'var(--spacing-radius-8px)',
          backgroundColor: 'var(--base-white)'
        }}
      >
        <Icon 
          name={name} 
          size="lg" 
          color="var(--primary-blue-blue-500)"
          opacity="strong"
          aria-label={`${name} icon`}
          style={{ marginBottom: '12px' }}
        />
        <span style={{ 
          fontSize: '12px', 
          color: 'var(--neutral-gray-gray-600)',
          fontWeight: '500',
          lineHeight: '1.2',
          wordBreak: 'break-all'
        }}>
          {name}
        </span>
      </div>
    ))}
  </div>
);

export const Outlined: Story = {
  render: () => {
    const outlinedIcons = Object.keys(echoIconComponents).filter(name => name.endsWith('-outline')) as EchoIconName[];
    return <IconGrid icons={outlinedIcons} />;
  },
};

export const Filled: Story = {
  render: () => {
    const filledIcons = Object.keys(echoIconComponents).filter(name => name.endsWith('-filled')) as EchoIconName[];
    return <IconGrid icons={filledIcons} />;
  },
};

export const MUIFallback: Story = {
  render: () => (
    <div style={{ padding: '32px', fontFamily: 'var(--font-family-base)', maxWidth: '800px' }}>
      <h2 style={{ color: 'var(--neutral-gray-gray-900)' }}>MUI Icon Fallback Guide</h2>
      <p style={{ color: 'var(--neutral-gray-gray-600)', lineHeight: '1.6' }}>
        Echo Design System provides a fallback mechanism to the Material UI icon library for generic UI needs.
      </p>
      
      <div style={{ 
        padding: '20px', 
        backgroundColor: 'var(--semantic-warning-light)', 
        border: '1px solid var(--semantic-warning)',
        borderRadius: 'var(--spacing-radius-8px)',
        marginBottom: '24px'
      }}>
        <h4 style={{ margin: '0 0 8px 0', color: 'var(--neutral-gray-gray-900)' }}>⚠️ Usage Warning</h4>
        <p style={{ margin: 0, fontSize: '14px' }}>
          Please do not use any MUI Icons unless you have first checked they do not exist within the Echo Icon set. 
          Standardizing on Echo icons ensures visual consistency across the platform.
        </p>
      </div>

      <h3>Installation</h3>
      <p>If you need to use MUI icons in your local development, ensure you have the following package installed:</p>
      <pre style={{ 
        backgroundColor: 'var(--neutral-gray-gray-100)', 
        padding: '12px', 
        borderRadius: '4px',
        fontSize: '14px'
      }}>
        npm install @mui/icons-material
      </pre>

      <h3>Usage Example</h3>
      <pre style={{ 
        backgroundColor: 'var(--neutral-gray-gray-100)', 
        padding: '12px', 
        borderRadius: '4px',
        fontSize: '14px'
      }}>
{`import { Icon } from './foundations/Icons/Icon';

// This will automatically fallback to MUI 'home' icon
<Icon name="home" />`}
      </pre>
    </div>
  )
};
