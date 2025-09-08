import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/🧱 Building Blocks/Overview',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Overview of foundational building blocks - the core design principles, tokens, and systems that support all components.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Overview: Story = {
  render: () => (
    <div style={{
      padding: '40px',
      fontFamily: 'var(--type-typeface-archivo)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: '32px',
        fontWeight: '600',
        color: 'var(--base-black)',
        marginBottom: '24px'
      }}>
        Foundational Building Blocks
      </h1>
      
      <p style={{
        fontSize: '18px',
        color: 'var(--secondary-blue-gray)',
        marginBottom: '32px',
        lineHeight: '1.6'
      }}>
        Foundational building blocks are the core design principles, design tokens, and 
        fundamental systems that underpin the entire design system. These elements ensure 
        consistency, accessibility, and maintainability across all components.
      </p>

      <h2 style={{
        fontSize: '24px',
        fontWeight: '500',
        color: 'var(--base-black)',
        marginBottom: '16px',
        marginTop: '32px'
      }}>
        What Goes Here
      </h2>
      
      <ul style={{
        fontSize: '16px',
        color: 'var(--base-black)',
        lineHeight: '1.6',
        marginBottom: '32px'
      }}>
        <li>Design tokens (colors, typography, spacing, shadows)</li>
        <li>Color systems and accessibility guidelines</li>
        <li>Typography scales and font systems</li>
        <li>Spacing and layout principles</li>
        <li>Icon systems and usage guidelines</li>
        <li>Brand elements (logos, imagery guidelines)</li>
      </ul>

      <h2 style={{
        fontSize: '24px',
        fontWeight: '500',
        color: 'var(--base-black)',
        marginBottom: '16px'
      }}>
        Usage Guidelines
      </h2>
      
      <ul style={{
        fontSize: '16px',
        color: 'var(--base-black)',
        lineHeight: '1.6'
      }}>
        <li>Foundations should be referenced by all other components</li>
        <li>Changes to foundations affect the entire system</li>
        <li>Must maintain backwards compatibility when possible</li>
        <li>Should follow accessibility and usability best practices</li>
        <li>Documentation should include clear usage examples</li>
      </ul>

      <div style={{
        marginTop: '40px',
        padding: '24px',
        backgroundColor: 'var(--neutral-gray-gray-50)',
        borderRadius: 'var(--spacing-radius-8px)',
        border: '1px solid var(--neutral-gray-gray-200)'
      }}>
        <p style={{
          fontSize: '14px',
          color: 'var(--secondary-blue-gray)',
          margin: 0,
          fontStyle: 'italic'
        }}>
          Foundational building blocks are the bedrock of the design system. Every component 
          relies on these core principles and tokens for consistency and maintainability.
        </p>
      </div>
    </div>
  ),
};
