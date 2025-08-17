import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Molecules/Building Blocks/Overview',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Overview of molecular building blocks - reusable UI patterns that combine atoms into more complex interfaces.',
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
        Molecular Building Blocks
      </h1>
      
      <p style={{
        fontSize: '18px',
        color: 'var(--secondary-blue-gray)',
        marginBottom: '32px',
        lineHeight: '1.6'
      }}>
        Molecular building blocks are reusable UI patterns that combine multiple atoms to create 
        more complex interface elements. These components serve as the foundation for larger 
        organisms and complete UI sections.
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
        <li>Complex UI patterns made from multiple atoms</li>
        <li>Reusable interface components</li>
        <li>Data display patterns (tables, cards, lists)</li>
        <li>Navigation patterns (menus, breadcrumbs)</li>
        <li>Form patterns (field groups, multi-step forms)</li>
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
        <li>Molecules should solve specific interface problems</li>
        <li>They should be flexible enough for multiple use cases</li>
        <li>Complex enough to warrant abstraction but simple enough to remain reusable</li>
        <li>Should compose well with other molecules to form organisms</li>
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
          Molecular building blocks maintain consistency with atomic elements while introducing 
          more complex interaction patterns and data handling capabilities.
        </p>
      </div>
    </div>
  ),
};
