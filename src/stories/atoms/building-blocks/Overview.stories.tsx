import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Atoms/Building Blocks/Overview',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Overview of atomic building blocks - the smallest, most fundamental UI elements.',
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
        Atomic Building Blocks
      </h1>
      
      <p style={{
        fontSize: '18px',
        color: 'var(--secondary-blue-gray)',
        marginBottom: '32px',
        lineHeight: '1.6'
      }}>
        Atomic building blocks are the smallest, most fundamental UI elements that serve as components 
        for larger atoms or molecules. These elements are typically used internally by other components 
        rather than directly in applications.
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
        <li>Sub-components used by larger atoms</li>
        <li>Internal UI elements that don't stand alone</li>
        <li>Primitive elements that combine to form complete components</li>
        <li>Visual separators like dividers and spacers</li>
        <li>Layout helpers and structural elements</li>
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
        <li>Building blocks should be simple and focused on a single purpose</li>
        <li>They should be designed to work together seamlessly</li>
        <li>Most building blocks are not intended for direct use in applications</li>
        <li>They serve as the foundation for more complex components</li>
      </ul>

      <h2 style={{
        fontSize: '24px',
        fontWeight: '500',
        color: 'var(--base-black)',
        marginBottom: '16px'
      }}>
        Available Building Blocks
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '32px'
      }}>
        <div style={{
          padding: '16px',
          backgroundColor: 'var(--neutral-gray-gray-50)',
          borderRadius: 'var(--spacing-radius-4px)',
          border: '1px solid var(--neutral-gray-gray-200)'
        }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '500' }}>Dividers</h4>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>
            Visual separators with multiple line styles and thicknesses
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ height: '1px', background: 'var(--neutral-gray-gray-300)', width: '100%' }} />
            <div style={{
              height: '2px',
              background: 'var(--neutral-gray-gray-300)',
              width: '80%',
              borderStyle: 'dashed',
              borderWidth: '1px 0 0 0',
              borderColor: 'var(--neutral-gray-gray-300)',
              background: 'transparent'
            }} />
          </div>
        </div>

        <div style={{
          padding: '16px',
          backgroundColor: 'var(--neutral-gray-gray-50)',
          borderRadius: 'var(--spacing-radius-4px)',
          border: '1px solid var(--neutral-gray-gray-200)'
        }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '500' }}>Sliders</h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
            Interactive range input controls
          </p>
        </div>
      </div>

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
          Building blocks maintain the same design token standards and accessibility requirements
          as all other components in the system.
        </p>
      </div>
    </div>
  ),
};
