import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
  title: 'Atoms/🧱 Building Blocks/Table/Star Rating',
  component: StarRating,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Star Rating Component

A complete rating display component that automatically calculates partial star fills.

## Features

- **Auto-calculated fills**: Automatically determines star fill levels based on rating
- **Flexible display**: Option to show numeric rating and review count
- **Three sizes**: Small, default, and large
- **Responsive**: Adapts to different screen sizes
- **Accessible**: Proper ARIA labels for screen readers

## Use Cases

- Product ratings in e-commerce tables
- Service quality indicators
- User review scores
- Performance metrics
- Satisfaction ratings

## Examples

\`\`\`tsx
// Basic rating
<StarRating rating={4.5} />

// With numeric value
<StarRating rating={4.8} showValue />

// With review count
<StarRating rating={4.3} reviewCount={1523} />

// Complete display
<StarRating rating={4.7} showValue reviewCount={892} size="large" />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
      description: 'Rating value from 0 to 5',
      table: {
        type: { summary: 'number' },
      },
    },
    maxRating: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Maximum rating value',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size of the star icons',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    showValue: {
      control: 'boolean',
      description: 'Whether to show numeric rating value',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    reviewCount: {
      control: { type: 'number', min: 0 },
      description: 'Number of reviews (optional)',
      table: {
        type: { summary: 'number' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
  args: {
    rating: 4.5,
  },
};

export const WithValue: Story = {
  args: {
    rating: 4.8,
    showValue: true,
  },
};

export const WithReviewCount: Story = {
  args: {
    rating: 4.3,
    reviewCount: 1523,
  },
};

export const Complete: Story = {
  args: {
    rating: 4.7,
    showValue: true,
    reviewCount: 892,
  },
};

export const SmallSize: Story = {
  args: {
    rating: 3.5,
    showValue: true,
    reviewCount: 124,
    size: 'small',
  },
};

export const LargeSize: Story = {
  args: {
    rating: 4.9,
    showValue: true,
    reviewCount: 2456,
    size: 'large',
  },
};

export const AllRatings: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1.5rem',
      padding: '2rem',
      minWidth: '400px'
    }}>
      <h3 style={{ 
        margin: 0, 
        fontFamily: 'var(--type-typeface-archivo, sans-serif)',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: 'var(--neutral-gray-gray-900, #111827)'
      }}>
        Rating Scale Examples
      </h3>
      
      {[5.0, 4.8, 4.5, 4.2, 4.0, 3.7, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.5].map((rating) => (
        <div 
          key={rating}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            padding: '1rem',
            background: 'var(--neutral-gray-gray-50, #F9FAFB)',
            borderRadius: '8px',
            borderLeft: `4px solid ${
              rating >= 4.5 ? 'var(--status-green, #96F78D)' :
              rating >= 3.5 ? 'var(--primary-yellow-yellow, #F9C846)' :
              rating >= 2.5 ? 'var(--status-orange, #F4A403)' :
              'var(--status-red, #CE2031)'
            }`
          }}
        >
          <StarRating 
            rating={rating} 
            showValue 
            reviewCount={Math.floor(Math.random() * 5000) + 100}
          />
          <span style={{
            fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--neutral-gray-gray-600, #4B5563)',
            marginLeft: '1rem'
          }}>
            {rating >= 4.5 ? '⭐ Excellent' :
             rating >= 3.5 ? '👍 Good' :
             rating >= 2.5 ? '😐 Average' :
             '👎 Poor'}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of different rating values from 0.5 to 5.0',
      },
    },
  },
};

export const InProductTable: Story = {
  render: () => (
    <div style={{ 
      padding: '2rem',
      maxWidth: '900px'
    }}>
      <h3 style={{ 
        margin: '0 0 1rem 0', 
        fontFamily: 'var(--type-typeface-archivo, sans-serif)',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: 'var(--neutral-gray-gray-900, #111827)'
      }}>
        Product Ratings Table
      </h3>
      
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: 'var(--base-white, white)',
        border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-shadow-sm-box-shadow, 0px 2px 4px 0px rgba(39, 39, 39, 0.1))'
      }}>
        <thead>
          <tr style={{ 
            background: 'var(--neutral-gray-gray-50, #F9FAFB)',
            borderBottom: '2px solid var(--neutral-gray-gray-200, #E5E7EB)'
          }}>
            <th style={{ 
              padding: '1rem',
              textAlign: 'left',
              fontFamily: 'var(--type-typeface-archivo, sans-serif)',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--neutral-gray-gray-900, #111827)'
            }}>
              Product
            </th>
            <th style={{ 
              padding: '1rem',
              textAlign: 'left',
              fontFamily: 'var(--type-typeface-archivo, sans-serif)',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--neutral-gray-gray-900, #111827)'
            }}>
              Category
            </th>
            <th style={{ 
              padding: '1rem',
              textAlign: 'left',
              fontFamily: 'var(--type-typeface-archivo, sans-serif)',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--neutral-gray-gray-900, #111827)'
            }}>
              Customer Rating
            </th>
            <th style={{ 
              padding: '1rem',
              textAlign: 'right',
              fontFamily: 'var(--type-typeface-archivo, sans-serif)',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--neutral-gray-gray-900, #111827)'
            }}>
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            { product: 'Premium Safety Valve', category: 'Valves', rating: 4.9, reviews: 2341, price: '$1,299' },
            { product: 'Industrial Control Panel', category: 'Controls', rating: 4.7, reviews: 1876, price: '$3,450' },
            { product: 'Pressure Monitor Pro', category: 'Monitoring', rating: 4.5, reviews: 1523, price: '$899' },
            { product: 'Standard Flow Meter', category: 'Meters', rating: 4.2, reviews: 987, price: '$650' },
            { product: 'Basic Sensor Kit', category: 'Sensors', rating: 3.8, reviews: 543, price: '$299' },
            { product: 'Economy Gauge Set', category: 'Gauges', rating: 3.5, reviews: 421, price: '$149' },
          ].map((row, idx) => (
            <tr 
              key={idx}
              style={{ 
                borderBottom: idx < 5 ? '1px solid var(--neutral-gray-gray-200, #E5E7EB)' : 'none',
                transition: 'background-color 0.2s ease'
              }}
            >
              <td style={{ 
                padding: '1rem',
                fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--neutral-gray-gray-900, #111827)'
              }}>
                {row.product}
              </td>
              <td style={{ 
                padding: '1rem',
                fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                fontSize: '0.875rem',
                color: 'var(--neutral-gray-gray-600, #4B5563)'
              }}>
                {row.category}
              </td>
              <td style={{ padding: '1rem' }}>
                <StarRating 
                  rating={row.rating} 
                  showValue 
                  reviewCount={row.reviews}
                  size="small"
                />
              </td>
              <td style={{ 
                padding: '1rem',
                textAlign: 'right',
                fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--neutral-gray-gray-900, #111827)'
              }}>
                {row.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of star ratings used in a product table with reviews and pricing',
      },
    },
  },
};

export const CompactDisplay: Story = {
  render: () => (
    <div style={{ 
      padding: '2rem',
      maxWidth: '600px'
    }}>
      <h3 style={{ 
        margin: '0 0 1rem 0', 
        fontFamily: 'var(--type-typeface-archivo, sans-serif)',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: 'var(--neutral-gray-gray-900, #111827)'
      }}>
        Compact Table Layout
      </h3>
      
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: 'var(--base-white, white)',
        border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <thead>
          <tr style={{ 
            background: 'var(--neutral-gray-gray-50, #F9FAFB)',
            borderBottom: '1px solid var(--neutral-gray-gray-200, #E5E7EB)'
          }}>
            <th style={{ 
              padding: '0.75rem',
              textAlign: 'left',
              fontFamily: 'var(--type-typeface-archivo, sans-serif)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: 'var(--neutral-gray-gray-900, #111827)'
            }}>
              Service
            </th>
            <th style={{ 
              padding: '0.75rem',
              textAlign: 'center',
              fontFamily: 'var(--type-typeface-archivo, sans-serif)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: 'var(--neutral-gray-gray-900, #111827)'
            }}>
              Rating
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            { service: 'Maintenance Quality', rating: 4.8 },
            { service: 'Response Time', rating: 4.6 },
            { service: 'Documentation', rating: 4.3 },
            { service: 'Customer Support', rating: 4.7 },
            { service: 'Value for Money', rating: 4.4 },
          ].map((row, idx) => (
            <tr 
              key={idx}
              style={{ 
                borderBottom: idx < 4 ? '1px solid var(--neutral-gray-gray-200, #E5E7EB)' : 'none'
              }}
            >
              <td style={{ 
                padding: '0.75rem',
                fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                fontSize: '0.8125rem',
                color: 'var(--neutral-gray-gray-700, #374151)'
              }}>
                {row.service}
              </td>
              <td style={{ 
                padding: '0.75rem',
                textAlign: 'center'
              }}>
                <StarRating 
                  rating={row.rating} 
                  showValue
                  size="small"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact table layout using small-sized star ratings',
      },
    },
  },
};
