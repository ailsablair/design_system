import type { Meta, StoryObj } from '@storybook/react';
import { StarIcon } from './StarIcon';

const meta: Meta = {
  title: 'Atoms/🧱 Building Blocks/Table/Star Icon Showcase',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Star Icon Showcase

Complete showcase of all star icon variants and use cases.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CompleteShowcase: Story = {
  render: () => (
    <div style={{ 
      padding: '3rem',
      background: 'var(--neutral-gray-gray-50, #F9FAFB)',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          margin: '0 0 0.5rem 0', 
          fontFamily: 'var(--type-typeface-archivo, sans-serif)',
          fontSize: '2.5rem',
          fontWeight: 700,
          color: 'var(--neutral-gray-gray-900, #111827)'
        }}>
          ⭐ Star Icon Component
        </h1>
        
        <p style={{
          margin: '0 0 3rem 0',
          fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
          fontSize: '1.125rem',
          color: 'var(--neutral-gray-gray-600, #4B5563)',
          lineHeight: 1.6
        }}>
          A comprehensive star rating component for use in tables and data displays
        </p>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            background: 'var(--base-white, white)',
            border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: 'var(--shadow-shadow-sm-box-shadow, 0px 2px 4px 0px rgba(39, 39, 39, 0.1))'
          }}>
            <h2 style={{ 
              margin: '0 0 1.5rem 0', 
              fontFamily: 'var(--type-typeface-archivo, sans-serif)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--neutral-gray-gray-900, #111827)',
              borderBottom: '2px solid var(--primary-yellow-yellow, #F9C846)',
              paddingBottom: '0.5rem'
            }}>
              All Fill Levels
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {([
                { fill: 'empty', label: 'Empty (0%)' },
                { fill: '5', label: '5% Filled' },
                { fill: '15', label: '15% Filled' },
                { fill: '25', label: '25% Filled' },
                { fill: '40', label: '40% Filled' },
                { fill: '50', label: '50% Filled' },
                { fill: '60', label: '60% Filled' },
                { fill: '75', label: '75% Filled' },
                { fill: '85', label: '85% Filled' },
                { fill: '95', label: '95% Filled' },
                { fill: '100', label: '100% Filled' },
              ] as const).map(({ fill, label }) => (
                <div 
                  key={fill}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem',
                    padding: '0.75rem',
                    background: 'var(--neutral-gray-gray-50, #F9FAFB)',
                    borderRadius: '6px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    <StarIcon fill={fill} size="default" />
                    <StarIcon fill={fill} size="default" />
                    <StarIcon fill={fill} size="default" />
                  </div>
                  <span style={{ 
                    fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--neutral-gray-gray-700, #374151)',
                    flex: 1
                  }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'var(--base-white, white)',
            border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: 'var(--shadow-shadow-sm-box-shadow, 0px 2px 4px 0px rgba(39, 39, 39, 0.1))'
          }}>
            <h2 style={{ 
              margin: '0 0 1.5rem 0', 
              fontFamily: 'var(--type-typeface-archivo, sans-serif)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--neutral-gray-gray-900, #111827)',
              borderBottom: '2px solid var(--primary-yellow-yellow, #F9C846)',
              paddingBottom: '0.5rem'
            }}>
              Size Variations
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                padding: '1rem',
                background: 'var(--neutral-gray-gray-50, #F9FAFB)',
                borderRadius: '6px'
              }}>
                <h3 style={{
                  margin: '0 0 1rem 0',
                  fontFamily: 'var(--type-typeface-archivo, sans-serif)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-800, #1F2937)'
                }}>
                  Small (20px)
                </h3>
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} fill="100" size="small" />
                  ))}
                </div>
              </div>

              <div style={{
                padding: '1rem',
                background: 'var(--neutral-gray-gray-50, #F9FAFB)',
                borderRadius: '6px'
              }}>
                <h3 style={{
                  margin: '0 0 1rem 0',
                  fontFamily: 'var(--type-typeface-archivo, sans-serif)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-800, #1F2937)'
                }}>
                  Default (24px)
                </h3>
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} fill="100" size="default" />
                  ))}
                </div>
              </div>

              <div style={{
                padding: '1rem',
                background: 'var(--neutral-gray-gray-50, #F9FAFB)',
                borderRadius: '6px'
              }}>
                <h3 style={{
                  margin: '0 0 1rem 0',
                  fontFamily: 'var(--type-typeface-archivo, sans-serif)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-800, #1F2937)'
                }}>
                  Large (28px)
                </h3>
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} fill="100" size="large" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          background: 'var(--base-white, white)',
          border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: 'var(--shadow-shadow-sm-box-shadow, 0px 2px 4px 0px rgba(39, 39, 39, 0.1))',
          marginBottom: '2rem'
        }}>
          <h2 style={{ 
            margin: '0 0 1.5rem 0', 
            fontFamily: 'var(--type-typeface-archivo, sans-serif)',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--neutral-gray-gray-900, #111827)',
            borderBottom: '2px solid var(--primary-yellow-yellow, #F9C846)',
            paddingBottom: '0.5rem'
          }}>
            Rating Examples
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {[
              { stars: [100, 100, 100, 100, 100], label: '5.0 - Perfect', color: 'var(--status-green, #96F78D)' },
              { stars: [100, 100, 100, 100, 50], label: '4.5 - Excellent', color: 'var(--primary-seafoam-seafoam, #8BBF9F)' },
              { stars: [100, 100, 100, 100, 'empty'], label: '4.0 - Very Good', color: 'var(--primary-sky-blue-sky-blue, #0BA7EA)' },
              { stars: [100, 100, 100, 50, 'empty'], label: '3.5 - Good', color: 'var(--primary-yellow-yellow, #F9C846)' },
              { stars: [100, 100, 100, 'empty', 'empty'], label: '3.0 - Average', color: 'var(--status-orange, #F4A403)' },
              { stars: [100, 100, 'empty', 'empty', 'empty'], label: '2.0 - Below Average', color: 'var(--status-red, #CE2031)' },
            ].map((rating, idx) => (
              <div 
                key={idx}
                style={{
                  padding: '1rem',
                  background: 'var(--neutral-gray-gray-50, #F9FAFB)',
                  borderRadius: '6px',
                  borderLeft: `4px solid ${rating.color}`
                }}
              >
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.5rem' }}>
                  {rating.stars.map((fill, i) => (
                    <StarIcon key={i} fill={fill as any} size="small" />
                  ))}
                </div>
                <span style={{ 
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-700, #374151)'
                }}>
                  {rating.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: 'var(--primary-yellow-yellow-50, #FEFAED)',
          border: '1px solid var(--primary-yellow-yellow-200, #FDEEC7)',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{
            margin: '0 0 0.5rem 0',
            fontFamily: 'var(--type-typeface-archivo, sans-serif)',
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--primary-yellow-dark-yellow, #E8A317)'
          }}>
            💡 Usage Tips
          </h3>
          <ul style={{
            margin: 0,
            paddingLeft: '1.5rem',
            fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
            fontSize: '0.875rem',
            color: 'var(--neutral-gray-gray-700, #374151)',
            lineHeight: 1.6
          }}>
            <li>Use small size in compact table cells</li>
            <li>Use default size for standard table displays</li>
            <li>Use large size in hero sections or featured content</li>
            <li>Combine multiple stars to show ratings out of 5</li>
            <li>Use partial fills to show decimal ratings (e.g., 4.5 stars)</li>
          </ul>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all star icon variants, sizes, and use cases',
      },
    },
  },
};
