import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Molecules/🧱 Building Blocks/Overview',
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
        Available Components
      </h2>

      <div style={{
        display: 'grid',
        gap: '16px',
        marginBottom: '32px'
      }}>
        <div style={{
          padding: '16px',
          border: '1px solid var(--neutral-gray-gray-200)',
          borderRadius: 'var(--spacing-radius-8px)',
          backgroundColor: 'var(--base-white)'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: 'var(--base-black)',
            marginBottom: '8px',
            margin: 0
          }}>
            📊 DataTable
          </h3>
          <p style={{
            fontSize: '14px',
            color: 'var(--neutral-gray-gray-600)',
            margin: '8px 0 0 0',
            lineHeight: '1.5'
          }}>
            Comprehensive table component with multiple cell types, selection, sorting, and pagination.
            Perfect for data display, user management, and admin interfaces.
          </p>
        </div>

        <div style={{
          padding: '16px',
          border: '1px solid var(--neutral-gray-gray-200)',
          borderRadius: 'var(--spacing-radius-8px)',
          backgroundColor: 'var(--base-white)'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: 'var(--base-black)',
            marginBottom: '8px',
            margin: 0
          }}>
            🍔 DropdownMenu
          </h3>
          <p style={{
            fontSize: '14px',
            color: 'var(--neutral-gray-gray-600)',
            margin: '8px 0 0 0',
            lineHeight: '1.5'
          }}>
            Flexible dropdown menu system with support for nested items, icons, and keyboard navigation.
          </p>
        </div>

        <div style={{
          padding: '16px',
          border: '1px solid var(--neutral-gray-gray-200)',
          borderRadius: 'var(--spacing-radius-8px)',
          backgroundColor: 'var(--base-white)'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: 'var(--base-black)',
            marginBottom: '8px',
            margin: 0
          }}>
            📋 Menu
          </h3>
          <p style={{
            fontSize: '14px',
            color: 'var(--neutral-gray-gray-600)',
            margin: '8px 0 0 0',
            lineHeight: '1.5'
          }}>
            Context menu and navigation menu patterns with various styling options.
          </p>
        </div>
      </div>

      <h2 style={{
        fontSize: '24px',
        fontWeight: '500',
        color: 'var(--base-black)',
        marginBottom: '16px',
        marginTop: '32px'
      }}>
        Component Categories
      </h2>

      <ul style={{
        fontSize: '16px',
        color: 'var(--base-black)',
        lineHeight: '1.6',
        marginBottom: '32px'
      }}>
        <li><strong>Data Display:</strong> Tables, cards, lists with complex data patterns</li>
        <li><strong>Navigation:</strong> Menus, breadcrumbs, pagination controls</li>
        <li><strong>Form Patterns:</strong> Field groups, multi-step forms, form sections</li>
        <li><strong>Interactive Elements:</strong> Dropdowns, modals, tooltips</li>
        <li><strong>Content Layouts:</strong> Media objects, content cards, timeline patterns</li>
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
