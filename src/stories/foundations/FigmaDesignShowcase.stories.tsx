import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../atoms/Badge';
import { Tag } from '../atoms/Tag';

const meta: Meta = {
  title: 'Foundations/Figma Design Showcase',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete showcase of all component variants as shown in the Figma design system.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const TagVariantsShowcase: Story = {
  name: 'Tag/Badge Components - Exact Figma Design',
  render: () => (
    <div style={{ padding: '24px', fontFamily: 'Archivo, sans-serif', backgroundColor: '#FFFFFF' }}>
      <h2 style={{ marginBottom: '32px', fontSize: '18px', fontWeight: '600', color: '#1F2937' }}>Tag Components - Exact Figma Design</h2>
      
      {/* Row 1: Small Filled Tags */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Small Filled Tags</h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '6px',
          alignItems: 'center'
        }}>
          <Tag label="Label" size="small" variant="blue" showClose={false} />
          <Tag label="Label" size="small" variant="cyan" showClose={false} />
          <Tag label="Label" size="small" variant="yellow" showClose={false} />
          <Tag label="Label" size="small" variant="black" showClose={false} />
          <Tag label="Label" size="small" variant="blue" />
          <Tag label="Label" size="small" variant="purple" showClose={false} />
          <Tag label="Label" size="small" variant="cyan" />
          <Tag label="Label" size="small" variant="blue" />
          <Tag label="Label" size="small" variant="cyan" />
          <Tag label="Label" size="small" variant="yellow" />
          <Tag label="Label" size="small" variant="black" />
          <Tag label="Label" size="small" variant="purple" />
          <Tag label="Label" size="small" variant="cyan" />
          <Tag label="Label" size="small" variant="green" showClose={false} />
          <Tag label="Label" size="small" variant="red" showClose={false} />
        </div>
      </div>

      {/* Row 2: Default Filled Tags */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Default Filled Tags</h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '6px',
          alignItems: 'center'
        }}>
          <Tag label="Label" size="default" variant="blue" showClose={false} />
          <Tag label="Label" size="default" variant="cyan" showClose={false} />
          <Tag label="Label" size="default" variant="yellow" showClose={false} />
          <Tag label="Label" size="default" variant="black" showClose={false} />
          <Tag label="Label" size="default" variant="blue" />
          <Tag label="Label" size="default" variant="purple" showClose={false} />
          <Tag label="Label" size="default" variant="cyan" />
          <Tag label="Label" size="default" variant="blue" />
          <Tag label="Label" size="default" variant="cyan" />
          <Tag label="Label" size="default" variant="yellow" />
          <Tag label="Label" size="default" variant="black" />
          <Tag label="Label" size="default" variant="purple" />
          <Tag label="Label" size="default" variant="cyan" />
          <Tag label="Label" size="default" variant="green" showClose={false} />
          <Tag label="Label" size="default" variant="red" showClose={false} />
        </div>
      </div>

      {/* Row 3: Large Filled Tags */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Large Filled Tags</h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '6px',
          alignItems: 'center'
        }}>
          <Tag label="Label" size="large" variant="blue" showClose={false} />
          <Tag label="Label" size="large" variant="cyan" showClose={false} />
          <Tag label="Label" size="large" variant="yellow" showClose={false} />
          <Tag label="Label" size="large" variant="black" showClose={false} />
          <Tag label="Label" size="large" variant="blue" />
          <Tag label="Label" size="large" variant="purple" showClose={false} />
          <Tag label="Label" size="large" variant="cyan" />
          <Tag label="Label" size="large" variant="blue" />
          <Tag label="Label" size="large" variant="cyan" />
          <Tag label="Label" size="large" variant="yellow" />
          <Tag label="Label" size="large" variant="black" />
          <Tag label="Label" size="large" variant="purple" />
          <Tag label="Label" size="large" variant="cyan" />
          <Tag label="Label" size="large" variant="green" showClose={false} />
          <Tag label="Label" size="large" variant="red" showClose={false} />
        </div>
      </div>

      {/* Row 4: Small Light Tags */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Small Light Tags</h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '6px',
          alignItems: 'center'
        }}>
          <Tag label="Label" size="small" variant="blue" light showClose={false} />
          <Tag label="Label" size="small" variant="cyan" light showClose={false} />
          <Tag label="Label" size="small" variant="yellow" light showClose={false} />
          <Tag label="Label" size="small" variant="gray" light showClose={false} />
          <Tag label="Label" size="small" variant="blue" light />
          <Tag label="Label" size="small" variant="purple" light showClose={false} />
          <Tag label="Label" size="small" variant="cyan" light />
          <Tag label="Label" size="small" variant="blue" light />
          <Tag label="Label" size="small" variant="cyan" light />
          <Tag label="Label" size="small" variant="yellow" light />
          <Tag label="Label" size="small" variant="gray" light />
          <Tag label="Label" size="small" variant="purple" light />
          <Tag label="Label" size="small" variant="cyan" light />
          <Tag label="Label" size="small" variant="green" light showClose={false} />
          <Tag label="Label" size="small" variant="red" light showClose={false} />
        </div>
      </div>

      {/* Row 5: Default Light Tags */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Default Light Tags</h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '6px',
          alignItems: 'center'
        }}>
          <Tag label="Label" size="default" variant="blue" light showClose={false} />
          <Tag label="Label" size="default" variant="cyan" light showClose={false} />
          <Tag label="Label" size="default" variant="yellow" light showClose={false} />
          <Tag label="Label" size="default" variant="gray" light showClose={false} />
          <Tag label="Label" size="default" variant="blue" light />
          <Tag label="Label" size="default" variant="purple" light showClose={false} />
          <Tag label="Label" size="default" variant="cyan" light />
          <Tag label="Label" size="default" variant="blue" light />
          <Tag label="Label" size="default" variant="cyan" light />
          <Tag label="Label" size="default" variant="yellow" light />
          <Tag label="Label" size="default" variant="gray" light />
          <Tag label="Label" size="default" variant="purple" light />
          <Tag label="Label" size="default" variant="cyan" light />
          <Tag label="Label" size="default" variant="green" light showClose={false} />
          <Tag label="Label" size="default" variant="red" light showClose={false} />
        </div>
      </div>

      <h2 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: '600', color: '#1F2937' }}>Status Indicators - Exact Figma Design</h2>
      
      {/* Dot indicators matching Figma layout */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Extra Small Dots (4px)</h3>
        <div style={{ 
          display: 'flex', 
          gap: '16px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <Badge variant="dot" size="xs" color="blue" />
          <Badge variant="dot" size="xs" color="cyan" />
          <Badge variant="dot" size="xs" color="green" />
          <Badge variant="dot" size="xs" color="gray" />
          <Badge variant="dot" size="xs" color="yellow" />
          <Badge variant="dot" size="xs" color="orange" />
          <Badge variant="dot" size="xs" color="black" />
          <Badge variant="dot" size="xs" color="gray" light />
          <Badge variant="dot" size="xs" color="gray" light />
          <Badge variant="dot" size="xs" color="gray" light />
          <Badge variant="dot" size="xs" color="gray" light />
          <Badge variant="dot" size="xs" color="gray" light />
          <Badge variant="dot" size="xs" color="gray" light />
          <Badge variant="dot" size="xs" color="gray" light />
          <Badge variant="dot" size="xs" color="red" />
          <Badge variant="dot" size="xs" color="green" />
          <Badge variant="dot" size="xs" color="orange" />
          <Badge variant="dot" size="xs" color="blue" />
          <Badge variant="dot" size="xs" color="purple" />
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Small Dots (6px)</h3>
        <div style={{ 
          display: 'flex', 
          gap: '16px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <Badge variant="dot" size="small" color="blue" />
          <Badge variant="dot" size="small" color="cyan" />
          <Badge variant="dot" size="small" color="green" />
          <Badge variant="dot" size="small" color="gray" />
          <Badge variant="dot" size="small" color="yellow" />
          <Badge variant="dot" size="small" color="orange" />
          <Badge variant="dot" size="small" color="black" />
          <Badge variant="dot" size="small" color="gray" light />
          <Badge variant="dot" size="small" color="gray" light />
          <Badge variant="dot" size="small" color="gray" light />
          <Badge variant="dot" size="small" color="gray" light />
          <Badge variant="dot" size="small" color="gray" light />
          <Badge variant="dot" size="small" color="gray" light />
          <Badge variant="dot" size="small" color="gray" light />
          <Badge variant="dot" size="small" color="red" />
          <Badge variant="dot" size="small" color="green" />
          <Badge variant="dot" size="small" color="orange" />
          <Badge variant="dot" size="small" color="blue" />
          <Badge variant="dot" size="small" color="purple" />
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Medium Dots (8px)</h3>
        <div style={{ 
          display: 'flex', 
          gap: '16px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <Badge variant="dot" size="medium" color="blue" />
          <Badge variant="dot" size="medium" color="cyan" />
          <Badge variant="dot" size="medium" color="green" />
          <Badge variant="dot" size="medium" color="gray" />
          <Badge variant="dot" size="medium" color="yellow" />
          <Badge variant="dot" size="medium" color="orange" />
          <Badge variant="dot" size="medium" color="black" />
          <Badge variant="dot" size="medium" color="gray" light />
          <Badge variant="dot" size="medium" color="gray" light />
          <Badge variant="dot" size="medium" color="gray" light />
          <Badge variant="dot" size="medium" color="gray" light />
          <Badge variant="dot" size="medium" color="gray" light />
          <Badge variant="dot" size="medium" color="gray" light />
          <Badge variant="dot" size="medium" color="gray" light />
          <Badge variant="dot" size="medium" color="red" />
          <Badge variant="dot" size="medium" color="green" />
          <Badge variant="dot" size="medium" color="orange" />
          <Badge variant="dot" size="medium" color="blue" />
          <Badge variant="dot" size="medium" color="purple" />
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Large Dots (12px)</h3>
        <div style={{ 
          display: 'flex', 
          gap: '16px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <Badge variant="dot" size="large" color="blue" />
          <Badge variant="dot" size="large" color="cyan" />
          <Badge variant="dot" size="large" color="green" />
          <Badge variant="dot" size="large" color="gray" />
          <Badge variant="dot" size="large" color="yellow" />
          <Badge variant="dot" size="large" color="orange" />
          <Badge variant="dot" size="large" color="black" />
          <Badge variant="dot" size="large" color="gray" light />
          <Badge variant="dot" size="large" color="gray" light />
          <Badge variant="dot" size="large" color="gray" light />
          <Badge variant="dot" size="large" color="gray" light />
          <Badge variant="dot" size="large" color="gray" light />
          <Badge variant="dot" size="large" color="gray" light />
          <Badge variant="dot" size="large" color="gray" light />
          <Badge variant="dot" size="large" color="red" />
          <Badge variant="dot" size="large" color="green" />
          <Badge variant="dot" size="large" color="orange" />
          <Badge variant="dot" size="large" color="blue" />
          <Badge variant="dot" size="large" color="purple" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase matching the exact Figma design with all Tag and Badge component variants. Shows both filled and light tag variants plus all dot indicator sizes and colors as specified in the design system.',
      },
    },
  },
};

export const ResponsiveShowcase: Story = {
  name: 'Responsive Layout Example',
  render: () => (
    <div style={{ 
      padding: '24px', 
      fontFamily: 'Inter, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h2 style={{ marginBottom: '32px', fontSize: '24px', fontWeight: '600' }}>Responsive Component Grid</h2>
      
      {/* Mobile-first responsive grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        marginBottom: '32px'
      }}>
        <div style={{
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          backgroundColor: '#F9FAFB'
        }}>
          <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '500' }}>Status Indicators</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Badge variant="dot" color="green" />
            <Badge variant="dot" color="red" />
            <Badge variant="dot" color="orange" />
            <Badge variant="dot" color="blue" />
          </div>
        </div>

        <div style={{
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          backgroundColor: '#F9FAFB'
        }}>
          <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '500' }}>Category Tags</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Tag label="Design" variant="blue" showClose={false} />
            <Tag label="Development" variant="green" showClose={false} />
            <Tag label="Research" variant="purple" showClose={false} />
          </div>
        </div>

        <div style={{
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          backgroundColor: '#F9FAFB'
        }}>
          <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '500' }}>Notifications</h3>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Messages</span>
              <Badge variant="count" count={5} color="red" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Updates</span>
              <Badge variant="count" count={12} color="blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of how the Badge and Tag components work together in a responsive layout. This demonstrates real-world usage patterns with modern CSS Grid and Flexbox.',
      },
    },
  },
};
