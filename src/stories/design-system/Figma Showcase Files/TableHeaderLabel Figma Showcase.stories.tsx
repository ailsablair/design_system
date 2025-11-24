import type { Meta, StoryObj } from '@storybook/react';
import { TableHeaderLabel } from '../../atoms/building-blocks/table/TableHeaderLabel';

const meta: Meta<typeof TableHeaderLabel> = {
  title: 'Design System/🎨 Figma Showcase/Table Header Label',
  component: TableHeaderLabel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Table Header Label - Figma Design Implementation

This showcase demonstrates the pixel-perfect implementation of the Table Header Label component from Figma.

## Design Specifications

- **Component Path**: building-blocks/table/header/label
- **Variants**: 12 total (3 sizes × 2 states × 2 arrow directions)
- **Typography**: Archivo font family
- **Colors**: Base Black, Neutral Gray 400, Primary Blue 400

## Variant Properties

### Size
- **Small**: 14px font, 14px help icon, 12px arrow
- **Default**: 16px font, 16px help icon, 14px arrow  
- **Large**: 18px font, 18px help icon, 16px arrow

### State
- **Default**: Light (300) font weight, gray icons
- **Hover**: Bold (700) font weight, blue icons

### Arrow Direction
- **Up**: Ascending sort indicator
- **Down**: Descending sort indicator

## Design Tokens Used

\`\`\`css
--base-black: #1C1C1C
--neutral-gray-gray-400: #9CA3AF
--primary-blue-blue-400: #6171DF
--type-typeface-archivo: Archivo
--type-weight-light: 300
--type-weight-bold: 700
--type-archivo-label-sm: 14px
--type-archivo-label: 16px
--type-archivo-label-lg: 18px
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TableHeaderLabel>;

export const FigmaAllVariants: Story = {
  render: () => (
    <div style={{
      padding: '3rem',
      background: 'var(--neutral-gray-gray-50, #F9FAFB)',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontFamily: 'var(--type-typeface-archivo, sans-serif)',
          fontSize: '2rem',
          fontWeight: 700,
          color: 'var(--base-black, #1C1C1C)',
          marginBottom: '0.5rem'
        }}>
          Table Header Label - All Figma Variants
        </h1>
        
        <p style={{
          fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
          fontSize: '1rem',
          color: 'var(--neutral-gray-gray-600, #4B5563)',
          marginBottom: '3rem'
        }}>
          All 12 variants from the Figma design component set
        </p>

        <div style={{
          display: 'grid',
          gap: '3rem'
        }}>
          <section style={{
            background: 'var(--base-white, white)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)'
          }}>
            <h2 style={{
              fontFamily: 'var(--type-typeface-archivo, sans-serif)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--base-black, #1C1C1C)',
              marginBottom: '1.5rem'
            }}>
              Large Size
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
            }}>
              <div>
                <p style={{
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-500, #6D7280)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Default - Arrow Up
                </p>
                <TableHeaderLabel 
                  label="Company" 
                  size="large"
                  arrowDirection="up"
                />
              </div>
              
              <div>
                <p style={{
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-500, #6D7280)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Hover - Arrow Up
                </p>
                <TableHeaderLabel 
                  label="Company" 
                  size="large"
                  arrowDirection="up"
                  hover
                />
              </div>
              
              <div>
                <p style={{
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-500, #6D7280)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Default - Arrow Down
                </p>
                <TableHeaderLabel 
                  label="Company" 
                  size="large"
                  arrowDirection="down"
                />
              </div>
              
              <div>
                <p style={{
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-500, #6D7280)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Hover - Arrow Down
                </p>
                <TableHeaderLabel 
                  label="Company" 
                  size="large"
                  arrowDirection="down"
                  hover
                />
              </div>
            </div>
          </section>

          <section style={{
            background: 'var(--base-white, white)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)'
          }}>
            <h2 style={{
              fontFamily: 'var(--type-typeface-archivo, sans-serif)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--base-black, #1C1C1C)',
              marginBottom: '1.5rem'
            }}>
              Default Size
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
            }}>
              <div>
                <p style={{
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-500, #6D7280)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Default - Arrow Up
                </p>
                <TableHeaderLabel 
                  label="Company" 
                  size="default"
                  arrowDirection="up"
                />
              </div>
              
              <div>
                <p style={{
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-500, #6D7280)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Hover - Arrow Up
                </p>
                <TableHeaderLabel 
                  label="Company" 
                  size="default"
                  arrowDirection="up"
                  hover
                />
              </div>
              
              <div>
                <p style={{
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-500, #6D7280)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Default - Arrow Down
                </p>
                <TableHeaderLabel 
                  label="Company" 
                  size="default"
                  arrowDirection="down"
                />
              </div>
              
              <div>
                <p style={{
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-500, #6D7280)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Hover - Arrow Down
                </p>
                <TableHeaderLabel 
                  label="Company" 
                  size="default"
                  arrowDirection="down"
                  hover
                />
              </div>
            </div>
          </section>

          <section style={{
            background: 'var(--base-white, white)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)'
          }}>
            <h2 style={{
              fontFamily: 'var(--type-typeface-archivo, sans-serif)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--base-black, #1C1C1C)',
              marginBottom: '1.5rem'
            }}>
              Small Size
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
            }}>
              <div>
                <p style={{
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-500, #6D7280)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Default - Arrow Up
                </p>
                <TableHeaderLabel 
                  label="Company" 
                  size="small"
                  arrowDirection="up"
                />
              </div>
              
              <div>
                <p style={{
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-500, #6D7280)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Hover - Arrow Up
                </p>
                <TableHeaderLabel 
                  label="Company" 
                  size="small"
                  arrowDirection="up"
                  hover
                />
              </div>
              
              <div>
                <p style={{
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-500, #6D7280)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Default - Arrow Down
                </p>
                <TableHeaderLabel 
                  label="Company" 
                  size="small"
                  arrowDirection="down"
                />
              </div>
              
              <div>
                <p style={{
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--neutral-gray-gray-500, #6D7280)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Hover - Arrow Down
                </p>
                <TableHeaderLabel 
                  label="Company" 
                  size="small"
                  arrowDirection="down"
                  hover
                />
              </div>
            </div>
          </section>
        </div>

        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'var(--base-white, white)',
          borderRadius: '12px',
          border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)'
        }}>
          <h2 style={{
            fontFamily: 'var(--type-typeface-archivo, sans-serif)',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--base-black, #1C1C1C)',
            marginBottom: '1.5rem'
          }}>
            In Table Context
          </h2>
          
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)',
            borderRadius: '8px'
          }}>
            <thead>
              <tr style={{ 
                background: 'var(--neutral-gray-gray-50, #F9FAFB)',
                borderBottom: '1px solid var(--neutral-gray-gray-200, #E5E7EB)'
              }}>
                <th style={{ padding: '1rem', textAlign: 'left' }}>
                  <TableHeaderLabel label="Company" size="default" arrowDirection="up" />
                </th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>
                  <TableHeaderLabel label="Industry" size="default" arrowDirection="none" />
                </th>
                <th style={{ padding: '1rem', textAlign: 'left' }}>
                  <TableHeaderLabel label="Revenue" size="default" arrowDirection="down" hover />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--neutral-gray-gray-200, #E5E7EB)' }}>
                <td style={{ 
                  padding: '1rem',
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.875rem'
                }}>
                  Acme Corporation
                </td>
                <td style={{ 
                  padding: '1rem',
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.875rem'
                }}>
                  Technology
                </td>
                <td style={{ 
                  padding: '1rem',
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.875rem'
                }}>
                  $2.5M
                </td>
              </tr>
              <tr>
                <td style={{ 
                  padding: '1rem',
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.875rem'
                }}>
                  Beta Industries
                </td>
                <td style={{ 
                  padding: '1rem',
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.875rem'
                }}>
                  Manufacturing
                </td>
                <td style={{ 
                  padding: '1rem',
                  fontFamily: 'var(--type-typeface-roboto-flex, sans-serif)',
                  fontSize: '0.875rem'
                }}>
                  $5.1M
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ),
};

export const FigmaComparisonGrid: Story = {
  render: () => (
    <div style={{
      padding: '3rem',
      background: 'var(--base-white, white)'
    }}>
      <h1 style={{
        fontFamily: 'var(--type-typeface-archivo, sans-serif)',
        fontSize: '2rem',
        fontWeight: 700,
        color: 'var(--base-black, #1C1C1C)',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        Figma Design Grid - 3×3 Layout
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '2rem',
        background: 'var(--neutral-gray-gray-50, #F9FAFB)',
        borderRadius: '12px',
        border: '2px dashed var(--neutral-gray-gray-300, #D2D5DA)'
      }}>
        {[
          { size: 'large' as const, arrow: 'up' as const, hover: false },
          { size: 'large' as const, arrow: 'up' as const, hover: true },
          { size: 'large' as const, arrow: 'down' as const, hover: false },
          { size: 'default' as const, arrow: 'down' as const, hover: true },
          { size: 'default' as const, arrow: 'up' as const, hover: false },
          { size: 'default' as const, arrow: 'up' as const, hover: true },
          { size: 'small' as const, arrow: 'down' as const, hover: true },
          { size: 'small' as const, arrow: 'down' as const, hover: false },
          { size: 'small' as const, arrow: 'up' as const, hover: false },
        ].map((config, idx) => (
          <div 
            key={idx}
            style={{
              padding: '1.5rem',
              background: 'var(--base-white, white)',
              borderRadius: '8px',
              border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <TableHeaderLabel 
              label="Company" 
              size={config.size}
              arrowDirection={config.arrow}
              hover={config.hover}
            />
          </div>
        ))}
      </div>
    </div>
  ),
};
