import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '../../atoms/Image';

const meta: Meta<typeof Image> = {
  title: 'Design System/Figma Showcase Files/Image Figma Showcase',
  component: Image,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete Image component showcase matching Figma design specifications with all 8 variants.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ padding: '24px', backgroundColor: '#f9fafb' }}>
      <h2 style={{ marginBottom: '32px', fontSize: '24px', fontWeight: '500' }}>Image Component - All Figma Variants</h2>
      
      {/* Small Size Variants */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Small Size (64px)</h3>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="small" 
              shape="square" 
              showIcon={true}
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Small - Square</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="small" 
              shape="default" 
              showIcon={true}
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Small - Rounded</span>
          </div>
        </div>
      </div>

      {/* Default Size Variants */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Default Size (120px)</h3>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="default" 
              shape="square" 
              showIcon={true}
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Default - Square</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="default" 
              shape="default" 
              showIcon={true}
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Default - Rounded</span>
          </div>
        </div>
      </div>

      {/* Large Size Variants */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Large Size (200px)</h3>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="large" 
              shape="square" 
              showIcon={true}
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Large - Square</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="large" 
              shape="default" 
              showIcon={true}
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Large - Rounded</span>
          </div>
        </div>
      </div>

      {/* Extra Large Size Variants */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Extra Large Size (320px)</h3>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="extra-large" 
              shape="square" 
              showIcon={true}
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Extra Large - Square</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="extra-large" 
              shape="default" 
              showIcon={true}
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Extra Large - Rounded</span>
          </div>
        </div>
      </div>

      {/* With Images */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>With Sample Images</h3>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="small" 
              shape="square" 
              src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=200&h=200&fit=crop"
              alt="Nature"
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Small with Image</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="default" 
              shape="default" 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop"
              alt="Nature"
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Default with Image</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="large" 
              shape="square" 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
              alt="Landscape"
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Large with Image</span>
          </div>
        </div>
      </div>

      {/* Interactive Examples */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Interactive Examples</h3>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="default" 
              shape="default" 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=400&fit=crop"
              alt="Interactive"
              onClick={() => alert('Image clicked!')}
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Clickable Image</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="default" 
              shape="square" 
              showIcon={true}
              onClick={() => alert('Placeholder clicked!')}
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Clickable Placeholder</span>
          </div>
        </div>
        
        <p style={{ fontSize: '14px', color: '#6D7280', marginTop: '8px' }}>
          Click the images above to see interaction behavior
        </p>
      </div>

      {/* Different Object Fit Examples */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Object Fit Variations</h3>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="default" 
              shape="square" 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
              objectFit="cover"
              alt="Cover fit"
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Cover</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="default" 
              shape="square" 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
              objectFit="contain"
              alt="Contain fit"
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Contain</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="default" 
              shape="square" 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
              objectFit="scale-down"
              alt="Scale down fit"
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Scale Down</span>
          </div>
        </div>
      </div>

      {/* Error State */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: '500' }}>Error State</h3>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <Image 
              size="default" 
              shape="default" 
              src="https://invalid-url-that-will-fail.jpg"
              alt="Broken image"
            />
            <span style={{ fontSize: '12px', color: '#6D7280' }}>Broken Image URL</span>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all Image component variants as specified in the Figma design, including all combinations of size and shape options.',
      },
    },
  },
};

export const ComponentGrid: Story = {
  render: () => (
    <div style={{ 
      padding: '24px', 
      display: 'grid', 
      gridTemplateColumns: 'repeat(4, 1fr)', 
      gap: '24px',
      maxWidth: '800px'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <h4 style={{ fontSize: '14px', fontWeight: '500', margin: 0 }}>Small</h4>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Image size="small" shape="square" />
          <Image size="small" shape="default" />
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <h4 style={{ fontSize: '14px', fontWeight: '500', margin: 0 }}>Default</h4>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Image size="default" shape="square" />
          <Image size="default" shape="default" />
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <h4 style={{ fontSize: '14px', fontWeight: '500', margin: 0 }}>Large</h4>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Image size="large" shape="square" />
          <Image size="large" shape="default" />
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <h4 style={{ fontSize: '14px', fontWeight: '500', margin: 0 }}>Extra Large</h4>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Image size="extra-large" shape="square" />
          <Image size="extra-large" shape="default" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Grid view of all 8 Image variants, systematically showing every combination of size and shape properties.',
      },
    },
  },
};

export const UsageExamples: Story = {
  render: () => (
    <div style={{ padding: '24px', backgroundColor: '#f9fafb' }}>
      <h2 style={{ marginBottom: '32px', fontSize: '24px', fontWeight: '500' }}>Image Component Usage Examples</h2>
      
      {/* Gallery Grid */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '500' }}>Photo Gallery Grid</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
          gap: '12px',
          maxWidth: '600px'
        }}>
          {Array.from({ length: 12 }, (_, i) => (
            <Image 
              key={i}
              size="default" 
              shape="square"
              src={i % 3 === 0 ? `https://images.unsplash.com/photo-${1447752875215 + i}?w=200&h=200&fit=crop` : undefined}
              alt={`Gallery item ${i + 1}`}
              onClick={() => console.log(`Clicked gallery item ${i + 1}`)}
            />
          ))}
        </div>
      </div>

      {/* Profile Cards */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '500' }}>Profile Card Avatars</h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '8px',
              padding: '16px',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e5e7eb'
            }}>
              <Image 
                size="large" 
                shape="default"
                src={`https://images.unsplash.com/photo-${1494790108755 + i * 100}?w=200&h=200&fit=crop&face`}
                alt={`Profile ${i + 1}`}
              />
              <span style={{ fontSize: '14px', fontWeight: '500' }}>User {i + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div style={{ marginBottom: '48px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '500' }}>Product Showcase</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '16px',
          maxWidth: '800px'
        }}>
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} style={{ 
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <Image 
                size="large" 
                shape="square"
                src={i % 2 === 0 ? `https://images.unsplash.com/photo-${1505740420928 + i * 50}?w=300&h=300&fit=crop` : undefined}
                alt={`Product ${i + 1}`}
                onClick={() => console.log(`Clicked product ${i + 1}`)}
              />
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '500', margin: '0 0 4px 0' }}>Product {i + 1}</h4>
                <p style={{ fontSize: '14px', color: '#6D7280', margin: 0 }}>Sample product description</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage examples showing how the Image component can be used in different contexts like galleries, profiles, and product showcases.',
      },
    },
  },
};
