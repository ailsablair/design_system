import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Design System/Figma Showcase Files/Tag Figma Showcase',
  component: Tag,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete Tag component showcase matching the Figma design system specifications.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for creating consistent sections
const TagSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '32px' }}>
    <h3 style={{ 
      margin: '0 0 16px 0', 
      fontSize: '16px', 
      fontWeight: '600', 
      color: '#1F2937',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      {title}
    </h3>
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
      gap: '12px',
      alignItems: 'center'
    }}>
      {children}
    </div>
  </div>
);

export const ComprehensiveFigmaShowcase: Story = {
  render: () => (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '24px',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      
      {/* Default Size Tags with Close Icons */}
      <TagSection title="Default Tags with Close Button">
        <Tag label="Tag Label" variant="blue" />
        <Tag label="Tag Label" variant="cyan" />
        <Tag label="Tag Label" variant="purple" />
        <Tag label="Tag Label" variant="orange" />
        <Tag label="Tag Label" variant="green" />
        <Tag label="Tag Label" variant="red" />
        <Tag label="Tag Label" variant="yellow" />
        <Tag label="Tag Label" variant="gray" />
        <Tag label="Tag Label" variant="black" />
        <Tag label="Tag Label" variant="light-gray" />
      </TagSection>

      {/* Default Size Tags without Close Icons */}
      <TagSection title="Default Tags without Close Button">
        <Tag label="Tag Label" variant="blue" showClose={false} />
        <Tag label="Tag Label" variant="cyan" showClose={false} />
        <Tag label="Tag Label" variant="purple" showClose={false} />
        <Tag label="Tag Label" variant="orange" showClose={false} />
        <Tag label="Tag Label" variant="green" showClose={false} />
        <Tag label="Tag Label" variant="red" showClose={false} />
        <Tag label="Tag Label" variant="yellow" showClose={false} />
        <Tag label="Tag Label" variant="gray" showClose={false} />
        <Tag label="Tag Label" variant="black" showClose={false} />
        <Tag label="Tag Label" variant="light-gray" showClose={false} />
      </TagSection>

      {/* Small Size Tags with Close Icons */}
      <TagSection title="Small Tags with Close Button">
        <Tag label="Tag Label" variant="blue" size="small" />
        <Tag label="Tag Label" variant="cyan" size="small" />
        <Tag label="Tag Label" variant="purple" size="small" />
        <Tag label="Tag Label" variant="orange" size="small" />
        <Tag label="Tag Label" variant="green" size="small" />
        <Tag label="Tag Label" variant="red" size="small" />
        <Tag label="Tag Label" variant="yellow" size="small" />
        <Tag label="Tag Label" variant="gray" size="small" />
        <Tag label="Tag Label" variant="black" size="small" />
        <Tag label="Tag Label" variant="light-gray" size="small" />
      </TagSection>

      {/* Small Size Tags without Close Icons */}
      <TagSection title="Small Tags without Close Button">
        <Tag label="Tag Label" variant="blue" size="small" showClose={false} />
        <Tag label="Tag Label" variant="cyan" size="small" showClose={false} />
        <Tag label="Tag Label" variant="purple" size="small" showClose={false} />
        <Tag label="Tag Label" variant="orange" size="small" showClose={false} />
        <Tag label="Tag Label" variant="green" size="small" showClose={false} />
        <Tag label="Tag Label" variant="red" size="small" showClose={false} />
        <Tag label="Tag Label" variant="yellow" size="small" showClose={false} />
        <Tag label="Tag Label" variant="gray" size="small" showClose={false} />
        <Tag label="Tag Label" variant="black" size="small" showClose={false} />
        <Tag label="Tag Label" variant="light-gray" size="small" showClose={false} />
      </TagSection>

      {/* Large Size Tags with Close Icons */}
      <TagSection title="Large Tags with Close Button">
        <Tag label="Tag Label" variant="blue" size="large" />
        <Tag label="Tag Label" variant="cyan" size="large" />
        <Tag label="Tag Label" variant="purple" size="large" />
        <Tag label="Tag Label" variant="orange" size="large" />
        <Tag label="Tag Label" variant="green" size="large" />
        <Tag label="Tag Label" variant="red" size="large" />
        <Tag label="Tag Label" variant="yellow" size="large" />
        <Tag label="Tag Label" variant="gray" size="large" />
        <Tag label="Tag Label" variant="black" size="large" />
        <Tag label="Tag Label" variant="light-gray" size="large" />
      </TagSection>

      {/* Large Size Tags without Close Icons */}
      <TagSection title="Large Tags without Close Button">
        <Tag label="Tag Label" variant="blue" size="large" showClose={false} />
        <Tag label="Tag Label" variant="cyan" size="large" showClose={false} />
        <Tag label="Tag Label" variant="purple" size="large" showClose={false} />
        <Tag label="Tag Label" variant="orange" size="large" showClose={false} />
        <Tag label="Tag Label" variant="green" size="large" showClose={false} />
        <Tag label="Tag Label" variant="red" size="large" showClose={false} />
        <Tag label="Tag Label" variant="yellow" size="large" showClose={false} />
        <Tag label="Tag Label" variant="gray" size="large" showClose={false} />
        <Tag label="Tag Label" variant="black" size="large" showClose={false} />
        <Tag label="Tag Label" variant="light-gray" size="large" showClose={false} />
      </TagSection>

      {/* Light Variants */}
      <TagSection title="Light Variant Tags">
        <Tag label="Tag Label" variant="blue" light />
        <Tag label="Tag Label" variant="cyan" light />
        <Tag label="Tag Label" variant="purple" light />
        <Tag label="Tag Label" variant="orange" light />
        <Tag label="Tag Label" variant="green" light />
        <Tag label="Tag Label" variant="red" light />
        <Tag label="Tag Label" variant="yellow" light />
        <Tag label="Tag Label" variant="gray" light />
      </TagSection>

      {/* Interactive States */}
      <TagSection title="Interactive Tags (Clickable)">
        <Tag 
          label="Clickable Blue" 
          variant="blue" 
          onClick={() => console.log('Blue tag clicked')} 
        />
        <Tag 
          label="Clickable Green" 
          variant="green" 
          onClick={() => console.log('Green tag clicked')} 
        />
        <Tag 
          label="Clickable Red" 
          variant="red" 
          onClick={() => console.log('Red tag clicked')} 
        />
        <Tag 
          label="Clickable Gray" 
          variant="gray" 
          onClick={() => console.log('Gray tag clicked')} 
        />
      </TagSection>

      {/* Disabled States */}
      <TagSection title="Disabled Tags">
        <Tag label="Disabled Blue" variant="blue" disabled />
        <Tag label="Disabled Green" variant="green" disabled />
        <Tag label="Disabled Red" variant="red" disabled />
        <Tag label="Disabled Gray" variant="gray" disabled />
        <Tag label="Disabled Light" variant="light-gray" disabled />
      </TagSection>

      {/* Outline Variants */}
      <TagSection title="Outline Variants">
        <Tag label="Outline Blue" variant="outline-blue" />
        <Tag label="Outline Info" variant="outline-info-blue" />
        <Tag label="Outline Blue" variant="outline-blue" showClose={false} />
        <Tag label="Outline Info" variant="outline-info-blue" showClose={false} />
      </TagSection>

    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all Tag variants, sizes, and states as shown in the Figma design system.',
      },
    },
  },
};

export const ColorMatrix: Story = {
  render: () => (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '24px',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(5, 1fr)', 
        gap: '16px',
        marginBottom: '32px'
      }}>
        {/* Row 1 */}
        <Tag label="Tag Label" variant="blue" />
        <Tag label="Tag Label" variant="cyan" />
        <Tag label="Tag Label" variant="purple" />
        <Tag label="Tag Label" variant="orange" />
        <Tag label="Tag Label" variant="green" />
        
        {/* Row 2 */}
        <Tag label="Tag Label" variant="red" />
        <Tag label="Tag Label" variant="yellow" />
        <Tag label="Tag Label" variant="gray" />
        <Tag label="Tag Label" variant="black" />
        <Tag label="Tag Label" variant="light-gray" />
        
        {/* Row 3 - Without close buttons */}
        <Tag label="Tag Label" variant="blue" showClose={false} />
        <Tag label="Tag Label" variant="cyan" showClose={false} />
        <Tag label="Tag Label" variant="purple" showClose={false} />
        <Tag label="Tag Label" variant="orange" showClose={false} />
        <Tag label="Tag Label" variant="green" showClose={false} />
        
        {/* Row 4 - Without close buttons */}
        <Tag label="Tag Label" variant="red" showClose={false} />
        <Tag label="Tag Label" variant="yellow" showClose={false} />
        <Tag label="Tag Label" variant="gray" showClose={false} />
        <Tag label="Tag Label" variant="black" showClose={false} />
        <Tag label="Tag Label" variant="light-gray" showClose={false} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Grid layout of Tag components exactly matching the Figma design layout.',
      },
    },
  },
};

export const UsageDemonstration: Story = {
  render: () => (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '24px',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ marginBottom: '12px', color: '#374151' }}>Filter Tags</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Tag label="Active" variant="green" showClose={false} />
          <Tag label="Pending" variant="yellow" showClose={false} />
          <Tag label="Inactive" variant="gray" showClose={false} />
          <Tag label="Error" variant="red" showClose={false} />
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ marginBottom: '12px', color: '#374151' }}>Category Tags</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Tag label="Technology" variant="blue" />
          <Tag label="Design" variant="purple" />
          <Tag label="Marketing" variant="orange" />
          <Tag label="Sales" variant="cyan" />
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ marginBottom: '12px', color: '#374151' }}>Priority Tags</h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Tag label="High" variant="red" size="small" />
          <Tag label="Medium" variant="yellow" size="small" />
          <Tag label="Low" variant="green" size="small" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage examples showing how tags can be used in different contexts.',
      },
    },
  },
};
