import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconName, IconSize } from './Icon';
import './tokens.css';

const meta: Meta<typeof Icon> = {
  title: 'Foundations/Icons',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Echo Design System icon library provides a consistent set of UI icons with standardized sizing, 
colors, and opacity levels. All icons use design tokens for maximum consistency and customization.

## Icon Library

The following icons are available in the current icon set:

- **alarm**: Bell/notification icon for alerts and reminders
- **close**: Simple X icon for closing dialogs and clearing selections  
- **close-circle**: Circular close icon with background for more prominent close actions
- **chevron-up**: Upward pointing chevron for expanding/collapsing content
- **chevron-down**: Downward pointing chevron for expanding/collapsing content

## Design Tokens

Icons use the following design token system:

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

## Usage Guidelines

- Use **medium** opacity (60%) for most interface icons
- Use **strong** opacity (70%) for primary actions and navigation
- Use **subtle** opacity (40%) for decorative or background icons
- Default size is **md** (16px) for optimal readability
- Icons inherit text color by default (\`currentColor\`)
- Always provide meaningful \`aria-label\` for accessibility

## Color Inheritance

Icons use \`currentColor\` by default, inheriting the text color of their parent element. 
You can override this with specific design tokens:

\`\`\`tsx
// Inherits parent text color
<Icon name="alarm" />

// Uses specific semantic color
<Icon name="close" color="var(--semantic-error-500)" />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['alarm', 'close', 'close-circle', 'chevron-up', 'chevron-down'],
      description: 'The icon to display',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the icon using design tokens',
    },
    color: {
      control: { type: 'text' },
      description: 'Color of the icon (CSS color or design token)',
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

// Default story
export const Default: Story = {
  args: {
    name: 'alarm',
    size: 'md',
    opacity: 'medium',
    'aria-label': 'Alarm notification',
  },
};

// All available icons showcase
export const AllIcons: Story = {
  render: () => {
    const iconNames: IconName[] = ['alarm', 'close', 'close-circle', 'chevron-up', 'chevron-down'];
    
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '24px',
        padding: '24px',
        fontFamily: 'var(--font-family-base)'
      }}>
        {iconNames.map((iconName) => (
          <div 
            key={iconName}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              padding: '16px',
              border: '1px solid var(--neutral-gray-gray-300)',
              borderRadius: 'var(--spacing-radius-8px)',
              backgroundColor: 'var(--base-white)'
            }}
          >
            <Icon 
              name={iconName} 
              size="xl" 
              opacity="strong"
              aria-label={`${iconName} icon`}
              style={{ marginBottom: '12px', color: 'var(--primary-blue-blue-500)' }}
            />
            <h4 style={{ 
              margin: '0 0 8px 0', 
              fontSize: '14px', 
              fontWeight: '600',
              color: 'var(--neutral-gray-gray-900)'
            }}>
              {iconName}
            </h4>
            <code style={{ 
              fontSize: '12px', 
              color: 'var(--neutral-gray-gray-600)',
              backgroundColor: 'var(--neutral-gray-gray-100)',
              padding: '2px 6px',
              borderRadius: 'var(--spacing-radius-4px)'
            }}>
              name="{iconName}"
            </code>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all available icons in the Echo Design System icon library.',
      },
    },
  },
};

// Size variations
export const Sizes: Story = {
  render: () => {
    const sizes: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
    
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '24px',
        padding: '24px',
        fontFamily: 'var(--font-family-base)'
      }}>
        {sizes.map((size) => (
          <div 
            key={size}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '8px'
            }}
          >
            <Icon 
              name="alarm" 
              size={size} 
              color="var(--primary-blue-blue-500)"
              aria-label={`Alarm icon ${size} size`}
            />
            <span style={{ 
              fontSize: '12px', 
              color: 'var(--neutral-gray-gray-600)',
              fontWeight: '500'
            }}>
              {size}
            </span>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All available icon sizes from xs (12px) to 2xl (32px).',
      },
    },
  },
};

// Opacity variations
export const OpacityLevels: Story = {
  render: () => {
    const opacities: Array<'subtle' | 'medium' | 'strong' | 'full'> = ['subtle', 'medium', 'strong', 'full'];
    
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '32px',
        padding: '24px',
        fontFamily: 'var(--font-family-base)'
      }}>
        {opacities.map((opacity) => (
          <div 
            key={opacity}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '8px'
            }}
          >
            <Icon 
              name="alarm" 
              size="xl" 
              opacity={opacity}
              color="var(--primary-blue-blue-500)"
              aria-label={`Alarm icon with ${opacity} opacity`}
            />
            <span style={{ 
              fontSize: '12px', 
              color: 'var(--neutral-gray-gray-600)',
              fontWeight: '500'
            }}>
              {opacity}
            </span>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Different opacity levels: subtle (40%), medium (60%), strong (70%), and full (100%).',
      },
    },
  },
};

// Color variations
export const ColorVariations: Story = {
  render: () => {
    const colors = [
      { name: 'Primary Blue', value: 'var(--primary-blue-blue-500)' },
      { name: 'Error Red', value: 'var(--semantic-error-500)' },
      { name: 'Success Green', value: 'var(--semantic-success-500)' },
      { name: 'Warning Yellow', value: 'var(--semantic-warning-500)' },
      { name: 'Neutral Gray', value: 'var(--neutral-gray-gray-600)' },
      { name: 'Current Color', value: 'currentColor' },
    ];
    
    return (
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
        gap: '24px',
        padding: '24px',
        fontFamily: 'var(--font-family-base)',
        color: 'var(--neutral-gray-gray-700)'
      }}>
        {colors.map((color) => (
          <div 
            key={color.name}
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '8px'
            }}
          >
            <Icon 
              name="alarm" 
              size="lg" 
              color={color.value}
              opacity="strong"
              aria-label={`Alarm icon in ${color.name}`}
            />
            <span style={{ 
              fontSize: '12px', 
              color: 'var(--neutral-gray-gray-600)',
              fontWeight: '500',
              textAlign: 'center'
            }}>
              {color.name}
            </span>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Icons using different semantic colors from the design system.',
      },
    },
  },
};

// Practical usage examples
export const UsageExamples: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px',
      padding: '24px',
      fontFamily: 'var(--font-family-base)'
    }}>
      {/* Button with icon */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 style={{ margin: 0, color: 'var(--neutral-gray-gray-900)' }}>Button with Icon</h4>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 16px',
          backgroundColor: 'var(--primary-blue-blue-500)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--spacing-radius-6px)',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          width: 'fit-content'
        }}>
          <Icon name="alarm" size="sm" opacity="full" aria-label="Notification" />
          Send Notification
        </button>
      </div>

      {/* Input with leading icon */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 style={{ margin: 0, color: 'var(--neutral-gray-gray-900)' }}>Input with Leading Icon</h4>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 16px',
          border: '1px solid var(--neutral-gray-gray-300)',
          borderRadius: 'var(--spacing-radius-6px)',
          width: '240px'
        }}>
          <Icon 
            name="alarm" 
            size="md" 
            color="var(--neutral-gray-gray-600)" 
            opacity="medium"
            aria-label="Search"
          />
          <input 
            type="text" 
            placeholder="Search notifications..." 
            style={{
              border: 'none',
              outline: 'none',
              flex: 1,
              fontSize: '14px',
              color: 'var(--neutral-gray-gray-900)'
            }}
          />
        </div>
      </div>

      {/* Close button */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 style={{ margin: 0, color: 'var(--neutral-gray-gray-900)' }}>Close Button</h4>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          backgroundColor: 'transparent',
          border: '1px solid var(--neutral-gray-gray-300)',
          borderRadius: 'var(--spacing-radius-6px)',
          cursor: 'pointer',
          color: 'var(--neutral-gray-gray-600)'
        }}>
          <Icon name="close" size="md" opacity="strong" aria-label="Close" />
        </button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing how icons integrate with other UI components.',
      },
    },
  },
};
