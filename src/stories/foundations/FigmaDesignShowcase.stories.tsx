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
  name: 'Tag/Badge Components - All Color Variants',
  render: () => (
    <div style={{ padding: '24px', fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: '600' }}>Tag Components - All Color Variants</h2>
      
      {/* Small Size Tags */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Small Size</h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '8px',
          alignItems: 'center'
        }}>
          <Tag label="Label" size="small" variant="light-gray" />
          <Tag label="Label" size="small" variant="primary" />
          <Tag label="Label" size="small" variant="secondary" />
          <Tag label="Label" size="small" variant="blue" />
          <Tag label="Label" size="small" variant="cyan" />
          <Tag label="Label" size="small" variant="orange" />
          <Tag label="Label" size="small" variant="gray" />
          <Tag label="Label" size="small" variant="purple" />
          <Tag label="Label" size="small" variant="green" />
          <Tag label="Label" size="small" variant="red" />
          <Tag label="Label" size="small" variant="yellow" />
          <Tag label="Label" size="small" variant="black" />
        </div>
      </div>

      {/* Default Size Tags */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Default Size</h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '8px',
          alignItems: 'center'
        }}>
          <Tag label="Label" size="default" variant="light-gray" />
          <Tag label="Label" size="default" variant="primary" />
          <Tag label="Label" size="default" variant="secondary" />
          <Tag label="Label" size="default" variant="blue" />
          <Tag label="Label" size="default" variant="cyan" />
          <Tag label="Label" size="default" variant="orange" />
          <Tag label="Label" size="default" variant="gray" />
          <Tag label="Label" size="default" variant="purple" />
          <Tag label="Label" size="default" variant="green" />
          <Tag label="Label" size="default" variant="red" />
          <Tag label="Label" size="default" variant="yellow" />
          <Tag label="Label" size="default" variant="black" />
        </div>
      </div>

      {/* Large Size Tags */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Large Size</h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '8px',
          alignItems: 'center'
        }}>
          <Tag label="Label" size="large" variant="light-gray" />
          <Tag label="Label" size="large" variant="primary" />
          <Tag label="Label" size="large" variant="secondary" />
          <Tag label="Label" size="large" variant="blue" />
          <Tag label="Label" size="large" variant="cyan" />
          <Tag label="Label" size="large" variant="orange" />
          <Tag label="Label" size="large" variant="gray" />
          <Tag label="Label" size="large" variant="purple" />
          <Tag label="Label" size="large" variant="green" />
          <Tag label="Label" size="large" variant="red" />
          <Tag label="Label" size="large" variant="yellow" />
          <Tag label="Label" size="large" variant="black" />
        </div>
      </div>

      {/* Tags without close button */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Without Close Button</h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '8px',
          alignItems: 'center'
        }}>
          <Tag label="Label" showClose={false} variant="light-gray" />
          <Tag label="Label" showClose={false} variant="primary" />
          <Tag label="Label" showClose={false} variant="secondary" />
          <Tag label="Label" showClose={false} variant="blue" />
          <Tag label="Label" showClose={false} variant="cyan" />
          <Tag label="Label" showClose={false} variant="orange" />
          <Tag label="Label" showClose={false} variant="gray" />
          <Tag label="Label" showClose={false} variant="purple" />
          <Tag label="Label" showClose={false} variant="green" />
          <Tag label="Label" showClose={false} variant="red" />
          <Tag label="Label" showClose={false} variant="yellow" />
          <Tag label="Label" showClose={false} variant="black" />
        </div>
      </div>

      <h2 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: '600' }}>Status Indicators - All Color Variants</h2>
      
      {/* Small Dots */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Small Indicators (6px)</h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '12px',
          alignItems: 'center'
        }}>
          <Badge variant="dot" size="small" color="blue" />
          <Badge variant="dot" size="small" color="cyan" />
          <Badge variant="dot" size="small" color="orange" />
          <Badge variant="dot" size="small" color="gray" />
          <Badge variant="dot" size="small" color="purple" />
          <Badge variant="dot" size="small" color="green" />
          <Badge variant="dot" size="small" color="red" />
          <Badge variant="dot" size="small" color="yellow" />
          <Badge variant="dot" size="small" color="black" />
        </div>
      </div>

      {/* Medium Dots */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Medium Indicators (8px)</h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '12px',
          alignItems: 'center'
        }}>
          <Badge variant="dot" size="medium" color="blue" />
          <Badge variant="dot" size="medium" color="cyan" />
          <Badge variant="dot" size="medium" color="orange" />
          <Badge variant="dot" size="medium" color="gray" />
          <Badge variant="dot" size="medium" color="purple" />
          <Badge variant="dot" size="medium" color="green" />
          <Badge variant="dot" size="medium" color="red" />
          <Badge variant="dot" size="medium" color="yellow" />
          <Badge variant="dot" size="medium" color="black" />
        </div>
      </div>

      {/* Large Dots */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Large Indicators (12px)</h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '12px',
          alignItems: 'center'
        }}>
          <Badge variant="dot" size="large" color="blue" />
          <Badge variant="dot" size="large" color="cyan" />
          <Badge variant="dot" size="large" color="orange" />
          <Badge variant="dot" size="large" color="gray" />
          <Badge variant="dot" size="large" color="purple" />
          <Badge variant="dot" size="large" color="green" />
          <Badge variant="dot" size="large" color="red" />
          <Badge variant="dot" size="large" color="yellow" />
          <Badge variant="dot" size="large" color="black" />
        </div>
      </div>

      {/* Count Badges */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>Count Badges</h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '12px',
          alignItems: 'center'
        }}>
          <Badge variant="count" count={1} color="blue" />
          <Badge variant="count" count={5} color="cyan" />
          <Badge variant="count" count={12} color="orange" />
          <Badge variant="count" count={25} color="gray" />
          <Badge variant="count" count={99} color="purple" />
          <Badge variant="count" count={150} maxCount={99} color="green" />
          <Badge variant="count" count={999} maxCount={999} color="red" />
          <Badge variant="count" count={1000} maxCount={999} color="yellow" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all Tag and Badge component variants, displaying every color and size combination available in the design system. This matches the comprehensive overview shown in the Figma design.',
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
