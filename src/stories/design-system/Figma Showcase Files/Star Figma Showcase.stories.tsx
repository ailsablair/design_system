import type { Meta, StoryObj } from '@storybook/react';
import { Star } from '../../atoms/Star';

const meta = {
  title: 'Design System/Figma Showcase Files/Star Figma Showcase',
  component: Star,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Figma showcase demonstrating all Star variants exactly matching the original Figma design. This includes all fill percentages (empty, 5%, 15%, 25%, 40%, 50%, 60%, 75%, 85%, 95%, 100%) and sizes (small, default, large) as specified in the design system.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Star>;

export default meta;
type Story = StoryObj<typeof meta>;

// Complete Figma showcase matching the original design
export const CompleteFigmaShowcase: Story = {
  render: () => (
    <div style={{ 
      padding: '32px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '12px',
      border: '2px dashed #9f7aea',
      minHeight: '600px',
      position: 'relative'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '8px',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: '700', 
          marginBottom: '32px',
          textAlign: 'center',
          color: '#1a202c'
        }}>
          Star Component - Complete Figma Showcase
        </h1>
        
        {/* Star Grid matching Figma layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'auto repeat(3, 1fr)', 
          gap: '24px 32px', 
          alignItems: 'center',
          justifyItems: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {/* Header row */}
          <div></div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: '#4a5568' }}>Small</div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: '#4a5568' }}>Default</div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: '#4a5568' }}>Large</div>
          
          {/* Fill percentage rows */}
          {[
            { label: 'Empty', fill: 'empty' },
            { label: '5%', fill: '5%' },
            { label: '15%', fill: '15%' },
            { label: '25%', fill: '25%' },
            { label: '40%', fill: '40%' },
            { label: '50%', fill: '50%' },
            { label: '60%', fill: '60%' },
            { label: '75%', fill: '75%' },
            { label: '85%', fill: '85%' },
            { label: '95%', fill: '95%' },
            { label: '100%', fill: '100%' }
          ].map(({ label, fill }) => (
            <>
              <div key={`${fill}-label`} style={{ 
                fontSize: '14px', 
                fontWeight: '500', 
                color: '#2d3748',
                justifySelf: 'start',
                minWidth: '60px'
              }}>
                {label}
              </div>
              <Star key={`${fill}-small`} fill={fill as any} size="small" />
              <Star key={`${fill}-default`} fill={fill as any} size="default" />
              <Star key={`${fill}-large`} fill={fill as any} size="large" />
            </>
          ))}
        </div>
        
        {/* Additional examples */}
        <div style={{ marginTop: '48px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            marginBottom: '24px',
            color: '#2d3748',
            textAlign: 'center'
          }}>
            Interactive Rating Examples
          </h2>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px', 
            alignItems: 'center' 
          }}>
            {[
              { rating: '5.0', stars: ['100%', '100%', '100%', '100%', '100%'] },
              { rating: '4.5', stars: ['100%', '100%', '100%', '100%', '50%'] },
              { rating: '3.8', stars: ['100%', '100%', '100%', '85%', 'empty'] },
              { rating: '2.3', stars: ['100%', '100%', '25%', 'empty', 'empty'] },
              { rating: '1.0', stars: ['100%', 'empty', 'empty', 'empty', 'empty'] }
            ].map(({ rating, stars }) => (
              <div key={rating} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px',
                padding: '12px 20px',
                background: '#f7fafc',
                borderRadius: '8px',
                border: '1px solid #e2e8f0'
              }}>
                <span style={{ 
                  fontSize: '16px', 
                  fontWeight: '600', 
                  color: '#2d3748',
                  minWidth: '40px'
                }}>
                  {rating}
                </span>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {stars.map((fill, index) => (
                    <Star key={index} fill={fill as any} size="default" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Figma badge */}
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        background: '#f0f0f0',
        color: '#666',
        padding: '6px 12px',
        borderRadius: '16px',
        fontSize: '12px',
        fontWeight: '500',
        border: '1px solid #ddd'
      }}>
        🎨 Figma Design
      </div>
    </div>
  )
};

// Figma Grid Layout (matches exact Figma structure)
export const FigmaGridLayout: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '16px', 
      padding: '24px',
      background: '#fafafa',
      borderRadius: '8px',
      border: '1px solid #e2e8f0'
    }}>
      {/* Row 1: Empty, 5%, 15% */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Star fill="empty" size="small" />
        <Star fill="empty" size="default" />
        <Star fill="empty" size="large" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Star fill="5%" size="small" />
        <Star fill="5%" size="default" />
        <Star fill="5%" size="large" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Star fill="15%" size="small" />
        <Star fill="15%" size="default" />
        <Star fill="15%" size="large" />
      </div>
      
      {/* Row 2: 25%, 40%, 50% */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Star fill="25%" size="small" />
        <Star fill="25%" size="default" />
        <Star fill="25%" size="large" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Star fill="40%" size="small" />
        <Star fill="40%" size="default" />
        <Star fill="40%" size="large" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Star fill="50%" size="small" />
        <Star fill="50%" size="default" />
        <Star fill="50%" size="large" />
      </div>
      
      {/* Row 3: 60%, 75%, 85% */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Star fill="60%" size="small" />
        <Star fill="60%" size="default" />
        <Star fill="60%" size="large" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Star fill="75%" size="small" />
        <Star fill="75%" size="default" />
        <Star fill="75%" size="large" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Star fill="85%" size="small" />
        <Star fill="85%" size="default" />
        <Star fill="85%" size="large" />
      </div>
      
      {/* Row 4: 95%, 100%, empty space */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Star fill="95%" size="small" />
        <Star fill="95%" size="default" />
        <Star fill="95%" size="large" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Star fill="100%" size="small" />
        <Star fill="100%" size="default" />
        <Star fill="100%" size="large" />
      </div>
      <div></div>
    </div>
  )
};

// Color and variant showcase
export const ColorVariantShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          Size Progression (75% fill)
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <Star fill="75%" size="small" />
            <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Small (20px)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Star fill="75%" size="default" />
            <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Default (24px)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Star fill="75%" size="large" />
            <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>Large (28px)</div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          Fill Progression (Default size)
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {['empty', '25%', '50%', '75%', '100%'].map((fill) => (
            <div key={fill} style={{ textAlign: 'center' }}>
              <Star fill={fill as any} size="default" />
              <div style={{ marginTop: '4px', fontSize: '11px', color: '#666' }}>{fill}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};
