import type { Meta, StoryObj } from '@storybook/react';
import { StarIcon } from './StarIcon';

const meta: Meta<typeof StarIcon> = {
  title: 'Atoms/🧱 Building Blocks/Table/Star Icon',
  component: StarIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Star Icon Component

A flexible star icon component designed for use in table cells to display ratings and scores.

## Features

- **Multiple Fill Levels**: 11 fill percentages from empty to 100%
- **Three Sizes**: Small (20px), Default (24px), Large (28px)
- **Responsive**: Adapts to mobile and tablet screens
- **Accessible**: Includes proper ARIA labels
- **Design System Colors**: Uses yellow from design tokens

## Usage in Tables

Perfect for:
- Product ratings
- Review scores
- Quality indicators
- Satisfaction levels
- Performance metrics

## Customization

The component uses CSS variables for colors:
- Background: \`--neutral-gray-gray-200\`
- Fill: \`--primary-yellow-yellow\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    fill: {
      control: 'select',
      options: ['empty', '5', '15', '25', '40', '50', '60', '75', '85', '95', '100'],
      description: 'Fill percentage of the star',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '100' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Size of the star icon',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Custom ARIA label for accessibility',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StarIcon>;

export const Default: Story = {
  args: {
    fill: '100',
    size: 'default',
  },
};

export const Empty: Story = {
  args: {
    fill: 'empty',
    size: 'default',
  },
};

export const HalfFilled: Story = {
  args: {
    fill: '50',
    size: 'default',
  },
};

export const Small: Story = {
  args: {
    fill: '100',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    fill: '100',
    size: 'large',
  },
};

export const AllFillLevels: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1.5rem',
      padding: '2rem'
    }}>
      <h3 style={{ 
        margin: 0, 
        fontFamily: 'var(--type-typeface-archivo, sans-serif)',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: 'var(--neutral-gray-gray-900, #111827)'
      }}>
        All Fill Levels - Default Size
      </h3>
      
      {(['empty', '5', '15', '25', '40', '50', '60', '75', '85', '95', '100'] as const).map((fillLevel) => (
        <div 
          key={fillLevel}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            padding: '0.75rem',
            background: 'var(--neutral-gray-gray-50, #F9FAFB)',
            borderRadius: '8px'
          }}
        >
          <StarIcon fill={fillLevel} size="default" />
          <span style={{ 
            fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--neutral-gray-gray-700, #374151)',
            minWidth: '80px'
          }}>
            {fillLevel === 'empty' ? 'Empty' : `${fillLevel}% filled`}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1.5rem',
      padding: '2rem'
    }}>
      <h3 style={{ 
        margin: 0, 
        fontFamily: 'var(--type-typeface-archivo, sans-serif)',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: 'var(--neutral-gray-gray-900, #111827)'
      }}>
        All Sizes - 100% Filled
      </h3>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem',
        padding: '0.75rem',
        background: 'var(--neutral-gray-gray-50, #F9FAFB)',
        borderRadius: '8px'
      }}>
        <StarIcon fill="100" size="small" />
        <span style={{ 
          fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--neutral-gray-gray-700, #374151)'
        }}>
          Small (20px)
        </span>
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem',
        padding: '0.75rem',
        background: 'var(--neutral-gray-gray-50, #F9FAFB)',
        borderRadius: '8px'
      }}>
        <StarIcon fill="100" size="default" />
        <span style={{ 
          fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--neutral-gray-gray-700, #374151)'
        }}>
          Default (24px)
        </span>
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem',
        padding: '0.75rem',
        background: 'var(--neutral-gray-gray-50, #F9FAFB)',
        borderRadius: '8px'
      }}>
        <StarIcon fill="100" size="large" />
        <span style={{ 
          fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--neutral-gray-gray-700, #374151)'
        }}>
          Large (28px)
        </span>
      </div>
    </div>
  ),
};

export const RatingDisplay: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '2rem',
      padding: '2rem'
    }}>
      <h3 style={{ 
        margin: 0, 
        fontFamily: 'var(--type-typeface-archivo, sans-serif)',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: 'var(--neutral-gray-gray-900, #111827)'
      }}>
        Rating Display Examples
      </h3>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          padding: '1rem',
          background: 'var(--base-white, white)',
          border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)',
          borderRadius: '8px'
        }}>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            <StarIcon fill="100" size="default" />
            <StarIcon fill="100" size="default" />
            <StarIcon fill="100" size="default" />
            <StarIcon fill="100" size="default" />
            <StarIcon fill="100" size="default" />
          </div>
          <span style={{ 
            fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
            fontSize: '0.875rem',
            color: 'var(--neutral-gray-gray-600, #4B5563)',
            marginLeft: '0.5rem'
          }}>
            5.0 (Perfect)
          </span>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          padding: '1rem',
          background: 'var(--base-white, white)',
          border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)',
          borderRadius: '8px'
        }}>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            <StarIcon fill="100" size="default" />
            <StarIcon fill="100" size="default" />
            <StarIcon fill="100" size="default" />
            <StarIcon fill="100" size="default" />
            <StarIcon fill="50" size="default" />
          </div>
          <span style={{ 
            fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
            fontSize: '0.875rem',
            color: 'var(--neutral-gray-gray-600, #4B5563)',
            marginLeft: '0.5rem'
          }}>
            4.5 (Excellent)
          </span>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          padding: '1rem',
          background: 'var(--base-white, white)',
          border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)',
          borderRadius: '8px'
        }}>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            <StarIcon fill="100" size="default" />
            <StarIcon fill="100" size="default" />
            <StarIcon fill="100" size="default" />
            <StarIcon fill="60" size="default" />
            <StarIcon fill="empty" size="default" />
          </div>
          <span style={{ 
            fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
            fontSize: '0.875rem',
            color: 'var(--neutral-gray-gray-600, #4B5563)',
            marginLeft: '0.5rem'
          }}>
            3.6 (Good)
          </span>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          padding: '1rem',
          background: 'var(--base-white, white)',
          border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)',
          borderRadius: '8px'
        }}>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            <StarIcon fill="100" size="default" />
            <StarIcon fill="100" size="default" />
            <StarIcon fill="50" size="default" />
            <StarIcon fill="empty" size="default" />
            <StarIcon fill="empty" size="default" />
          </div>
          <span style={{ 
            fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
            fontSize: '0.875rem',
            color: 'var(--neutral-gray-gray-600, #4B5563)',
            marginLeft: '0.5rem'
          }}>
            2.5 (Average)
          </span>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem',
          padding: '1rem',
          background: 'var(--base-white, white)',
          border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)',
          borderRadius: '8px'
        }}>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            <StarIcon fill="100" size="default" />
            <StarIcon fill="empty" size="default" />
            <StarIcon fill="empty" size="default" />
            <StarIcon fill="empty" size="default" />
            <StarIcon fill="empty" size="default" />
          </div>
          <span style={{ 
            fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
            fontSize: '0.875rem',
            color: 'var(--neutral-gray-gray-600, #4B5563)',
            marginLeft: '0.5rem'
          }}>
            1.0 (Poor)
          </span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of how star icons can be combined to display ratings from 1.0 to 5.0',
      },
    },
  },
};

export const InTableCell: Story = {
  render: () => (
    <div style={{ 
      padding: '2rem',
      maxWidth: '800px'
    }}>
      <h3 style={{ 
        margin: '0 0 1rem 0', 
        fontFamily: 'var(--type-typeface-archivo, sans-serif)',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: 'var(--neutral-gray-gray-900, #111827)'
      }}>
        Star Icons in Table Context
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
              padding: '0.75rem 1rem',
              textAlign: 'left',
              fontFamily: 'var(--type-typeface-archivo, sans-serif)',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--neutral-gray-gray-900, #111827)'
            }}>
              Product
            </th>
            <th style={{ 
              padding: '0.75rem 1rem',
              textAlign: 'left',
              fontFamily: 'var(--type-typeface-archivo, sans-serif)',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--neutral-gray-gray-900, #111827)'
            }}>
              Rating
            </th>
            <th style={{ 
              padding: '0.75rem 1rem',
              textAlign: 'left',
              fontFamily: 'var(--type-typeface-archivo, sans-serif)',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--neutral-gray-gray-900, #111827)'
            }}>
              Reviews
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            { product: 'Premium Widget', rating: '100', reviews: 1234 },
            { product: 'Standard Widget', rating: '85', reviews: 856 },
            { product: 'Basic Widget', rating: '75', reviews: 432 },
            { product: 'Economy Widget', rating: '60', reviews: 287 },
          ].map((row, idx) => (
            <tr 
              key={idx}
              style={{ 
                borderBottom: idx < 3 ? '1px solid var(--neutral-gray-gray-200, #E5E7EB)' : 'none'
              }}
            >
              <td style={{ 
                padding: '1rem',
                fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                fontSize: '0.875rem',
                color: 'var(--neutral-gray-gray-700, #374151)'
              }}>
                {row.product}
              </td>
              <td style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
                  {Array.from({ length: 5 }).map((_, starIdx) => {
                    const fillPercentage = Math.min(100, Math.max(0, parseInt(row.rating) - (starIdx * 20)));
                    let fill: any = 'empty';
                    if (fillPercentage === 100) fill = '100';
                    else if (fillPercentage >= 95) fill = '95';
                    else if (fillPercentage >= 85) fill = '85';
                    else if (fillPercentage >= 75) fill = '75';
                    else if (fillPercentage >= 60) fill = '60';
                    else if (fillPercentage >= 50) fill = '50';
                    else if (fillPercentage >= 40) fill = '40';
                    else if (fillPercentage >= 25) fill = '25';
                    else if (fillPercentage >= 15) fill = '15';
                    else if (fillPercentage >= 5) fill = '5';
                    
                    return <StarIcon key={starIdx} fill={fill} size="small" />;
                  })}
                </div>
              </td>
              <td style={{ 
                padding: '1rem',
                fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                fontSize: '0.875rem',
                color: 'var(--neutral-gray-gray-600, #4B5563)'
              }}>
                {row.reviews.toLocaleString()}
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
        story: 'Demonstration of star icons being used within a table to display product ratings',
      },
    },
  },
};
