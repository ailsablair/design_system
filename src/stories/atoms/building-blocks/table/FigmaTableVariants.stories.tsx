import type { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './TableCell';
import './tableCell.css';

const meta: Meta = {
  title: 'Atoms/ZZ 🧱 Building Blocks/Table/Figma Table Variants',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Complete Table Layout Variants from Figma

This showcases complete table implementations based on the exact Figma designs provided. 
Each variant represents a different table configuration with specific sizing, styling, and column arrangements.

## Variants Included

- **Small Seafoam Table**: Compact table with seafoam alternating rows
- **Default Dark Header Table**: Standard table with dark header and yellow accents
- **Compact Table**: Minimal table with tight spacing

Each table includes all the column types: checkboxes, avatars, text, multi-tags, actions, ratings, status, progress, and button groups.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const SmallSeafoamTable: Story = {
  render: () => (
    <div style={{ 
      padding: '24px',
      background: '#F9FAFB',
      minHeight: '100vh'
    }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          margin: '0 0 8px 0',
          color: '#111827'
        }}>
          Small Seafoam Table Variant
        </h1>
        <p style={{ 
          color: '#6B7280', 
          fontSize: '16px',
          margin: '0'
        }}>
          Compact table with seafoam alternating rows - exact Figma implementation
        </p>
      </div>

      <div style={{
        border: '1px solid #E5E7EB',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0px 12px 20px -2px rgba(39, 39, 39, 0.15)',
        background: 'white',
        maxWidth: '1200px'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px 24px',
          background: 'white',
          borderBottom: '1px solid #E5E7EB',
          gap: '12px'
        }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              color: '#232F3E',
              fontSize: '19px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              lineHeight: '24px'
            }}>
              Team members
            </div>
            <div style={{
              padding: '4px 12px',
              background: 'white',
              borderRadius: '99999px',
              border: '1px solid #9CA3AF'
            }}>
              <span style={{
                color: '#1C1C1C',
                fontSize: '14px',
                fontFamily: 'Archivo',
                fontWeight: 500,
                lineHeight: '17px',
                letterSpacing: '0.15px'
              }}>
                100 items
              </span>
            </div>
          </div>
          <button style={{
            width: '30px',
            height: '30px',
            padding: '4px',
            background: 'white',
            borderRadius: '4px',
            border: '0.5px solid #9CA3AF',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '3px',
              height: '12px',
              background: '#1C1C1C',
              opacity: 0.6
            }} />
          </button>
        </div>

        {/* Table Content */}
        <div style={{ display: 'flex' }}>
          {/* Contact Name Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#F9FAFB',
              borderBottom: '1px solid #E5E7EB',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <input 
                type="checkbox" 
                style={{ 
                  width: '22px', 
                  height: '22px',
                  accentColor: '#0BA7EA'
                }}
                defaultChecked
              />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <span style={{
                  color: '#1C1C1C',
                  fontSize: '16px',
                  fontFamily: 'Archivo',
                  fontWeight: 700,
                  lineHeight: '22px',
                  letterSpacing: '0.15px'
                }}>
                  Contact name
                </span>
                <div style={{
                  width: '9.24px',
                  height: '9.24px',
                  background: '#6171DF'
                }} />
              </div>
            </div>

            {/* Rows */}
            <TableCell
              size="small"
              type="title"
              background="default"
              leadCell={true}
              title="Olivia Rhye"
              checked={true}
            />
            <TableCell
              size="small"
              type="title"
              background="alt-seafoam-25"
              leadCell={true}
              title="Olivia Rhye"
              checked={false}
            />
            <TableCell
              size="small"
              type="title"
              background="default"
              leadCell={true}
              title="Olivia Rhye"
              checked={false}
            />
            <TableCell
              size="small"
              type="title"
              background="alt-seafoam-25"
              leadCell={true}
              title="Olivia Rhye"
              checked={false}
            />
          </div>

          {/* Company Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#F9FAFB',
              borderBottom: '1px solid #E5E7EB',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <span style={{
                  color: '#1C1C1C',
                  fontSize: '16px',
                  fontFamily: 'Archivo',
                  fontWeight: 300,
                  lineHeight: '22px',
                  letterSpacing: '0.15px'
                }}>
                  Company
                </span>
                <div style={{
                  width: '13.33px',
                  height: '13.33px',
                  background: '#9CA3AF'
                }} />
              </div>
            </div>

            {/* Rows */}
            <TableCell
              size="small"
              type="text"
              background="default"
              leadCell={false}
              title="Olivia Rhye"
            />
            <TableCell
              size="small"
              type="text"
              background="alt-seafoam-25"
              leadCell={false}
              title="Olivia Rhye"
            />
            <TableCell
              size="small"
              type="text"
              background="default"
              leadCell={false}
              title="Olivia Rhye"
            />
            <TableCell
              size="small"
              type="text"
              background="alt-seafoam-25"
              leadCell={false}
              title="Olivia Rhye"
            />
          </div>

          {/* Preferences Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#F9FAFB',
              borderBottom: '1px solid #E5E7EB',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#1C1C1C',
                fontSize: '16px',
                fontFamily: 'Archivo',
                fontWeight: 300,
                lineHeight: '22px',
                letterSpacing: '0.15px'
              }}>
                Preferences
              </span>
            </div>

            {/* Rows */}
            <TableCell
              size="small"
              type="multi-tag"
              background="default"
              leadCell={false}
              tags={[{ label: 'Label', variant: 'outline-black', showClose: true }]}
              overflowCount={4}
            />
            <TableCell
              size="small"
              type="multi-tag"
              background="alt-seafoam-25"
              leadCell={false}
              tags={[{ label: 'Label', variant: 'outline-black', showClose: true }]}
              overflowCount={4}
            />
            <TableCell
              size="small"
              type="multi-tag"
              background="default"
              leadCell={false}
              tags={[{ label: 'Label', variant: 'outline-black', showClose: true }]}
              overflowCount={4}
            />
            <TableCell
              size="small"
              type="multi-tag"
              background="alt-seafoam-25"
              leadCell={false}
              tags={[{ label: 'Label', variant: 'outline-black', showClose: true }]}
              overflowCount={4}
            />
          </div>

          {/* Actions Column */}
          <div style={{ width: '164px', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#F9FAFB',
              borderBottom: '1px solid #E5E7EB',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#1C1C1C',
                fontSize: '16px',
                fontFamily: 'Archivo',
                fontWeight: 300,
                lineHeight: '22px',
                letterSpacing: '0.15px'
              }}>
                Actions
              </span>
            </div>

            {/* Rows */}
            <TableCell
              size="small"
              type="links"
              background="default"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="small"
              type="links"
              background="alt-seafoam-25"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="small"
              type="links"
              background="default"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="small"
              type="links"
              background="alt-seafoam-25"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
          </div>

          {/* Rating Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#F9FAFB',
              borderBottom: '1px solid #E5E7EB',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#1C1C1C',
                fontSize: '16px',
                fontFamily: 'Archivo',
                fontWeight: 300,
                lineHeight: '22px',
                letterSpacing: '0.15px'
              }}>
                Rating
              </span>
            </div>

            {/* Rows */}
            <TableCell
              size="small"
              type="rating"
              background="default"
              leadCell={false}
              rating={5}
              maxRating={5}
            />
            <TableCell
              size="small"
              type="rating"
              background="alt-seafoam-25"
              leadCell={false}
              rating={5}
              maxRating={5}
            />
            <TableCell
              size="small"
              type="rating"
              background="default"
              leadCell={false}
              rating={5}
              maxRating={5}
            />
            <TableCell
              size="small"
              type="rating"
              background="alt-seafoam-25"
              leadCell={false}
              rating={5}
              maxRating={5}
            />
          </div>

          {/* Status Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#F9FAFB',
              borderBottom: '1px solid #E5E7EB',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#1C1C1C',
                fontSize: '16px',
                fontFamily: 'Archivo',
                fontWeight: 300,
                lineHeight: '22px',
                letterSpacing: '0.15px'
              }}>
                Status
              </span>
            </div>

            {/* Rows */}
            <TableCell
              size="small"
              type="group-avatars"
              background="default"
              leadCell={false}
              avatars={[
                { src: 'https://placehold.co/26x26' },
                { src: 'https://placehold.co/26x26' },
                { src: 'https://placehold.co/26x26' },
                { src: 'https://placehold.co/26x26' },
                { src: 'https://placehold.co/26x26' }
              ]}
              overflowCount={4}
            />
            <TableCell
              size="small"
              type="group-avatars"
              background="alt-seafoam-25"
              leadCell={false}
              avatars={[
                { src: 'https://placehold.co/26x26' },
                { src: 'https://placehold.co/26x26' },
                { src: 'https://placehold.co/26x26' },
                { src: 'https://placehold.co/26x26' },
                { src: 'https://placehold.co/26x26' }
              ]}
              overflowCount={4}
            />
            <TableCell
              size="small"
              type="group-avatars"
              background="default"
              leadCell={false}
              avatars={[
                { src: 'https://placehold.co/26x26' },
                { src: 'https://placehold.co/26x26' },
                { src: 'https://placehold.co/26x26' },
                { src: 'https://placehold.co/26x26' },
                { src: 'https://placehold.co/26x26' }
              ]}
              overflowCount={4}
            />
            <TableCell
              size="small"
              type="group-avatars"
              background="alt-seafoam-25"
              leadCell={false}
              avatars={[
                { src: 'https://placehold.co/26x26' },
                { src: 'https://placehold.co/26x26' },
                { src: 'https://placehold.co/26x26' },
                { src: 'https://placehold.co/26x26' },
                { src: 'https://placehold.co/26x26' }
              ]}
              overflowCount={4}
            />
          </div>

          {/* Progress Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#F9FAFB',
              borderBottom: '1px solid #E5E7EB',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#1C1C1C',
                fontSize: '16px',
                fontFamily: 'Archivo',
                fontWeight: 300,
                lineHeight: '22px',
                letterSpacing: '0.15px'
              }}>
                Progress
              </span>
            </div>

            {/* Rows */}
            <TableCell
              size="small"
              type="progress-bar"
              background="default"
              leadCell={false}
              progress={30}
            />
            <TableCell
              size="small"
              type="progress-bar"
              background="alt-seafoam-25"
              leadCell={false}
              progress={30}
            />
            <TableCell
              size="small"
              type="progress-bar"
              background="default"
              leadCell={false}
              progress={30}
            />
            <TableCell
              size="small"
              type="progress-bar"
              background="alt-seafoam-25"
              leadCell={false}
              progress={30}
            />
          </div>

          {/* Button Group Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header - Empty */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#F9FAFB',
              borderBottom: '1px solid #E5E7EB'
            }} />

            {/* Rows */}
            <TableCell
              size="small"
              type="button-group"
              background="default"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="small"
              type="button-group"
              background="alt-seafoam-25"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="small"
              type="button-group"
              background="default"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="small"
              type="button-group"
              background="alt-seafoam-25"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
          </div>
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px 24px',
          background: 'white',
          borderTop: '1px solid #E5E7EB',
          gap: '12px'
        }}>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <button style={{
              minWidth: '80px',
              height: '30px',
              padding: '4px 12px',
              background: 'white',
              borderRadius: '4px',
              border: '0.5px solid #9CA3AF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontFamily: 'Archivo',
              fontWeight: 300,
              color: '#1C1C1C'
            }}>
              <div style={{
                width: '9.24px',
                height: '9.24px',
                background: '#2F42BD'
              }} />
              Previous
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: '#F9F9FE',
              borderRadius: '8px',
              border: '1px solid #6171DF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontFamily: 'Archivo',
              fontWeight: 700,
              color: '#2F42BD'
            }}>
              1
            </div>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              color: '#6D7280'
            }}>
              2
            </div>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              color: '#6D7280'
            }}>
              3
            </div>
            <div style={{
              width: '18px',
              height: '18px',
              opacity: 0.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '12px',
                height: '3px',
                background: '#6D7280'
              }} />
            </div>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              color: '#6D7280'
            }}>
              8
            </div>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              color: '#6D7280'
            }}>
              9
            </div>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              color: '#6D7280'
            }}>
              10
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <button style={{
              minWidth: '80px',
              height: '30px',
              padding: '4px 12px',
              background: 'white',
              borderRadius: '4px',
              border: '0.5px solid #9CA3AF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontFamily: 'Archivo',
              fontWeight: 300,
              color: '#1C1C1C'
            }}>
              Next
              <div style={{
                width: '9.24px',
                height: '9.24px',
                background: '#2F42BD'
              }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete small table implementation with seafoam alternating rows, exactly matching the first Figma design.',
      },
    },
  },
};

export const DefaultDarkHeaderTable: Story = {
  render: () => (
    <div style={{ 
      padding: '24px',
      background: '#F9FAFB',
      minHeight: '100vh'
    }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          margin: '0 0 8px 0',
          color: '#111827'
        }}>
          Default Dark Header Table
        </h1>
        <p style={{ 
          color: '#6B7280', 
          fontSize: '16px',
          margin: '0'
        }}>
          Standard table with dark header background and yellow accents - exact Figma implementation
        </p>
      </div>

      <div style={{
        border: '1px solid #E5E7EB',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0px 12px 20px -2px rgba(39, 39, 39, 0.15)',
        background: 'white',
        maxWidth: '1200px'
      }}>
        {/* Header */}
        <div style={{
          height: '90px',
          padding: '20px 24px',
          background: '#1F2937',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                color: 'white',
                fontSize: '24px',
                fontFamily: 'Archivo',
                fontWeight: 500,
                lineHeight: '24px'
              }}>
                Customers
              </div>
              <div style={{
                padding: '4px 12px',
                background: '#F9C846',
                borderRadius: '99999px',
                border: '1px solid #FCE4A5'
              }}>
                <span style={{
                  color: '#1C1C1C',
                  fontSize: '14px',
                  fontFamily: 'Archivo',
                  fontWeight: 500,
                  lineHeight: '17px',
                  letterSpacing: '0.15px'
                }}>
                  100 items
                </span>
              </div>
            </div>
            <div style={{
              color: '#C5CAED',
              fontSize: '16px',
              fontFamily: 'Roboto Flex',
              fontWeight: 400,
              lineHeight: '20px',
              letterSpacing: '0.05px'
            }}>
              These companies have purchased in the last 12 months
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button style={{
              minHeight: '42px',
              padding: '4px 16px 4px 8px',
              background: 'white',
              borderRadius: '4px',
              border: '0.5px solid #9CA3AF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '16px',
              fontFamily: 'Archivo',
              fontWeight: 300,
              color: '#1C1C1C'
            }}>
              Label
              <div style={{
                width: '9px',
                height: '5.57px',
                background: '#1C1C1C',
                opacity: 0.6
              }} />
            </button>
            <button style={{
              minHeight: '42px',
              padding: '4px 16px',
              background: 'white',
              borderRadius: '4px',
              border: '0.5px solid #9CA3AF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '16px',
              fontFamily: 'Archivo',
              fontWeight: 300,
              color: '#1C1C1C'
            }}>
              <div style={{
                width: '15.75px',
                height: '15.75px',
                background: '#374151',
                opacity: 0.6
              }} />
              Label
              <div style={{
                width: '15px',
                height: '15px',
                background: '#374151',
                opacity: 0.6
              }} />
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div style={{ display: 'flex' }}>
          {/* Contact Name Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#FEF4DA',
              borderTop: '1px solid #F9C846',
              borderBottom: '1px solid #F9C846',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <input 
                type="checkbox" 
                style={{ 
                  width: '22px', 
                  height: '22px',
                  accentColor: '#0BA7EA'
                }}
                defaultChecked
              />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <span style={{
                  color: '#1C1C1C',
                  fontSize: '16px',
                  fontFamily: 'Archivo',
                  fontWeight: 700,
                  lineHeight: '22px',
                  letterSpacing: '0.15px'
                }}>
                  Contact name
                </span>
                <div style={{
                  width: '9.24px',
                  height: '9.24px',
                  background: '#E8A317'
                }} />
              </div>
            </div>

            {/* Rows */}
            <TableCell
              size="default"
              type="title"
              background="default"
              leadCell={true}
              title="Olivia Rhye"
              checked={true}
            />
            <TableCell
              size="default"
              type="title"
              background="alt-gray-50"
              leadCell={true}
              title="Olivia Rhye"
              checked={false}
            />
            <TableCell
              size="default"
              type="title"
              background="default"
              leadCell={true}
              title="Olivia Rhye"
              checked={false}
            />
            <TableCell
              size="default"
              type="title"
              background="alt-gray-50"
              leadCell={true}
              title="Olivia Rhye"
              checked={false}
            />
          </div>

          {/* Email Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#FEF4DA',
              borderTop: '1px solid #F9C846',
              borderBottom: '1px solid #F9C846',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <span style={{
                  color: '#1C1C1C',
                  fontSize: '16px',
                  fontFamily: 'Archivo',
                  fontWeight: 500,
                  lineHeight: '22px',
                  letterSpacing: '0.15px'
                }}>
                  Email
                </span>
                <div style={{
                  width: '13.33px',
                  height: '13.33px',
                  background: '#9CA3AF'
                }} />
              </div>
            </div>

            {/* Rows */}
            <TableCell
              size="default"
              type="text"
              background="default"
              leadCell={false}
              title="Olivia Rhye"
            />
            <TableCell
              size="default"
              type="text"
              background="alt-gray-50"
              leadCell={false}
              title="Olivia Rhye"
            />
            <TableCell
              size="default"
              type="text"
              background="default"
              leadCell={false}
              title="Olivia Rhye"
            />
            <TableCell
              size="default"
              type="text"
              background="alt-gray-50"
              leadCell={false}
              title="Olivia Rhye"
            />
          </div>

          {/* Preferences Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#FEF4DA',
              borderTop: '1px solid #F9C846',
              borderBottom: '1px solid #F9C846',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#1C1C1C',
                fontSize: '16px',
                fontFamily: 'Archivo',
                fontWeight: 500,
                lineHeight: '22px',
                letterSpacing: '0.15px'
              }}>
                Preferences
              </span>
            </div>

            {/* Rows */}
            <TableCell
              size="default"
              type="multi-tag"
              background="default"
              leadCell={false}
              tags={[{ label: 'Label', variant: 'outline-black', showClose: true }]}
              overflowCount={4}
            />
            <TableCell
              size="default"
              type="multi-tag"
              background="alt-gray-50"
              leadCell={false}
              tags={[{ label: 'Label', variant: 'outline-black', showClose: true }]}
              overflowCount={4}
            />
            <TableCell
              size="default"
              type="multi-tag"
              background="default"
              leadCell={false}
              tags={[{ label: 'Label', variant: 'outline-black', showClose: true }]}
              overflowCount={4}
            />
            <TableCell
              size="default"
              type="multi-tag"
              background="alt-gray-50"
              leadCell={false}
              tags={[{ label: 'Label', variant: 'outline-black', showClose: true }]}
              overflowCount={4}
            />
          </div>

          {/* Actions Column */}
          <div style={{ width: '164px', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#FEF4DA',
              borderTop: '1px solid #F9C846',
              borderBottom: '1px solid #F9C846',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#1C1C1C',
                fontSize: '16px',
                fontFamily: 'Archivo',
                fontWeight: 500,
                lineHeight: '22px',
                letterSpacing: '0.15px'
              }}>
                Actions
              </span>
            </div>

            {/* Rows */}
            <TableCell
              size="default"
              type="links"
              background="default"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="default"
              type="links"
              background="alt-gray-50"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="default"
              type="links"
              background="default"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="default"
              type="links"
              background="alt-gray-50"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
          </div>

          {/* Rating Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#FEF4DA',
              borderTop: '1px solid #F9C846',
              borderBottom: '1px solid #F9C846',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#1C1C1C',
                fontSize: '16px',
                fontFamily: 'Archivo',
                fontWeight: 500,
                lineHeight: '22px',
                letterSpacing: '0.15px'
              }}>
                Rating
              </span>
            </div>

            {/* Rows */}
            <TableCell
              size="default"
              type="rating"
              background="default"
              leadCell={false}
              rating={5}
              maxRating={5}
            />
            <TableCell
              size="default"
              type="rating"
              background="alt-gray-50"
              leadCell={false}
              rating={5}
              maxRating={5}
            />
            <TableCell
              size="default"
              type="rating"
              background="default"
              leadCell={false}
              rating={5}
              maxRating={5}
            />
            <TableCell
              size="default"
              type="rating"
              background="alt-gray-50"
              leadCell={false}
              rating={5}
              maxRating={5}
            />
          </div>

          {/* Status Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#FEF4DA',
              borderTop: '1px solid #F9C846',
              borderBottom: '1px solid #F9C846',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#1C1C1C',
                fontSize: '16px',
                fontFamily: 'Archivo',
                fontWeight: 500,
                lineHeight: '22px',
                letterSpacing: '0.15px'
              }}>
                Status
              </span>
            </div>

            {/* Rows */}
            <TableCell
              size="default"
              type="group-avatars"
              background="default"
              leadCell={false}
              avatars={[
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' }
              ]}
              overflowCount={4}
            />
            <TableCell
              size="default"
              type="group-avatars"
              background="alt-gray-50"
              leadCell={false}
              avatars={[
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' }
              ]}
              overflowCount={4}
            />
            <TableCell
              size="default"
              type="group-avatars"
              background="default"
              leadCell={false}
              avatars={[
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' }
              ]}
              overflowCount={4}
            />
            <TableCell
              size="default"
              type="group-avatars"
              background="alt-gray-50"
              leadCell={false}
              avatars={[
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' }
              ]}
              overflowCount={4}
            />
          </div>

          {/* Progress Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#FEF4DA',
              borderTop: '1px solid #F9C846',
              borderBottom: '1px solid #F9C846',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#1C1C1C',
                fontSize: '16px',
                fontFamily: 'Archivo',
                fontWeight: 500,
                lineHeight: '22px',
                letterSpacing: '0.15px'
              }}>
                Progress
              </span>
            </div>

            {/* Rows */}
            <TableCell
              size="default"
              type="progress-bar"
              background="default"
              leadCell={false}
              progress={30}
            />
            <TableCell
              size="default"
              type="progress-bar"
              background="alt-gray-50"
              leadCell={false}
              progress={30}
            />
            <TableCell
              size="default"
              type="progress-bar"
              background="default"
              leadCell={false}
              progress={30}
            />
            <TableCell
              size="default"
              type="progress-bar"
              background="alt-gray-50"
              leadCell={false}
              progress={30}
            />
          </div>

          {/* Button Group Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header - Empty */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#FEF4DA',
              borderTop: '1px solid #F9C846',
              borderBottom: '1px solid #F9C846'
            }} />

            {/* Rows */}
            <TableCell
              size="default"
              type="button-group"
              background="default"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="default"
              type="button-group"
              background="alt-gray-50"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="default"
              type="button-group"
              background="default"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="default"
              type="button-group"
              background="alt-gray-50"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
          </div>
        </div>

        {/* Footer */}
        <div style={{
          height: '70px',
          padding: '12px 24px',
          background: '#1F2937',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px'
        }}>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <button style={{
              minWidth: '80px',
              height: '42px',
              padding: '4px 16px',
              background: 'white',
              borderRadius: '4px',
              border: '0.5px solid #D2D5DA',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '16px',
              fontFamily: 'Archivo',
              fontWeight: 300,
              color: '#1C1C1C'
            }}>
              <div style={{
                width: '11.88px',
                height: '11.88px',
                background: '#191E3C'
              }} />
              Previous
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: '#FEF4DA',
              borderRadius: '8px',
              border: '3px solid #E8A317',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '19px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              color: '#1C1C1C'
            }}>
              1
            </div>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '19px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              color: 'white'
            }}>
              2
            </div>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '19px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              color: 'white'
            }}>
              3
            </div>
            <div style={{
              width: '24px',
              height: '24px',
              opacity: 0.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '16px',
                height: '4px',
                background: 'white'
              }} />
            </div>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '19px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              color: 'white'
            }}>
              8
            </div>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '19px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              color: 'white'
            }}>
              9
            </div>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '19px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              color: 'white'
            }}>
              10
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <button style={{
              minWidth: '80px',
              height: '42px',
              padding: '4px 16px',
              background: 'white',
              borderRadius: '4px',
              border: '0.5px solid #D2D5DA',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '16px',
              fontFamily: 'Archivo',
              fontWeight: 300,
              color: '#1C1C1C'
            }}>
              Next
              <div style={{
                width: '11.88px',
                height: '11.88px',
                background: '#191E3C'
              }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default size table with dark header background and yellow accents, exactly matching the second Figma design.',
      },
    },
  },
};

export const CompactTable: Story = {
  render: () => (
    <div style={{ 
      padding: '24px',
      background: '#F9FAFB',
      minHeight: '100vh'
    }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          margin: '0 0 8px 0',
          color: '#111827'
        }}>
          Compact Table Variant
        </h1>
        <p style={{ 
          color: '#6B7280', 
          fontSize: '16px',
          margin: '0'
        }}>
          Minimal table with tight spacing and streamlined layout - exact Figma implementation
        </p>
      </div>

      <div style={{
        border: '1px solid #E5E7EB',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0px 12px 20px -2px rgba(39, 39, 39, 0.15)',
        background: 'white',
        maxWidth: '1200px'
      }}>
        {/* Header */}
        <div style={{
          padding: '12px 24px',
          background: '#1F2937',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                color: 'white',
                fontSize: '19px',
                fontFamily: 'Archivo',
                fontWeight: 500,
                lineHeight: '24px'
              }}>
                Customers
              </div>
              <div style={{
                padding: '4px 12px',
                background: '#F9C846',
                borderRadius: '99999px',
                border: '1px solid #FCE4A5'
              }}>
                <span style={{
                  color: '#1C1C1C',
                  fontSize: '14px',
                  fontFamily: 'Archivo',
                  fontWeight: 500,
                  lineHeight: '17px',
                  letterSpacing: '0.15px'
                }}>
                  100 items
                </span>
              </div>
            </div>
            <div style={{
              color: '#C5CAED',
              fontSize: '13px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              lineHeight: '15px',
              letterSpacing: '0.20px'
            }}>
              These companies have purchased in the last 12 months
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button style={{
              minHeight: '30px',
              padding: '4px 12px 4px 6px',
              background: 'white',
              borderRadius: '4px',
              border: '0.5px solid #9CA3AF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '14px',
              fontFamily: 'Archivo',
              fontWeight: 300,
              color: '#1C1C1C'
            }}>
              Label
              <div style={{
                width: '7px',
                height: '4.33px',
                background: '#1C1C1C',
                opacity: 0.6
              }} />
            </button>
            <button style={{
              minHeight: '30px',
              padding: '4px 12px',
              background: 'white',
              borderRadius: '4px',
              border: '0.5px solid #9CA3AF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontFamily: 'Archivo',
              fontWeight: 300,
              color: '#1C1C1C'
            }}>
              <div style={{
                width: '12.25px',
                height: '12.25px',
                background: '#374151',
                opacity: 0.6
              }} />
              Label
              <div style={{
                width: '11.67px',
                height: '11.67px',
                background: '#374151',
                opacity: 0.6
              }} />
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div style={{ display: 'flex', height: '332px' }}>
          {/* Contact Name Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#FEF4DA',
              borderTop: '1px solid #F9C846',
              borderBottom: '1px solid #F9C846',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <input 
                type="checkbox" 
                style={{ 
                  width: '22px', 
                  height: '22px',
                  accentColor: '#0BA7EA'
                }}
                defaultChecked
              />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <span style={{
                  color: '#1C1C1C',
                  fontSize: '16px',
                  fontFamily: 'Archivo',
                  fontWeight: 700,
                  lineHeight: '22px',
                  letterSpacing: '0.15px'
                }}>
                  Contact name
                </span>
                <div style={{
                  width: '9.24px',
                  height: '9.24px',
                  background: '#E8A317'
                }} />
              </div>
            </div>

            {/* Rows */}
            <TableCell
              size="default"
              type="title"
              background="default"
              leadCell={true}
              title="Olivia Rhye"
              checked={true}
            />
            <TableCell
              size="default"
              type="title"
              background="alt-gray-50"
              leadCell={true}
              title="Olivia Rhye"
              checked={false}
            />
            <TableCell
              size="default"
              type="title"
              background="default"
              leadCell={true}
              title="Olivia Rhye"
              checked={false}
            />
            <TableCell
              size="default"
              type="title"
              background="alt-gray-50"
              leadCell={true}
              title="Olivia Rhye"
              checked={false}
            />
          </div>

          {/* Email Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#FEF4DA',
              borderTop: '1px solid #F9C846',
              borderBottom: '1px solid #F9C846',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <span style={{
                  color: '#1C1C1C',
                  fontSize: '16px',
                  fontFamily: 'Archivo',
                  fontWeight: 500,
                  lineHeight: '22px',
                  letterSpacing: '0.15px'
                }}>
                  Email
                </span>
                <div style={{
                  width: '13.33px',
                  height: '13.33px',
                  background: '#9CA3AF'
                }} />
              </div>
            </div>

            {/* Rows */}
            <TableCell
              size="default"
              type="text"
              background="default"
              leadCell={false}
              title="Olivia Rhye"
            />
            <TableCell
              size="default"
              type="text"
              background="alt-gray-50"
              leadCell={false}
              title="Olivia Rhye"
            />
            <TableCell
              size="default"
              type="text"
              background="default"
              leadCell={false}
              title="Olivia Rhye"
            />
            <TableCell
              size="default"
              type="text"
              background="alt-gray-50"
              leadCell={false}
              title="Olivia Rhye"
            />
          </div>

          {/* Preferences Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#FEF4DA',
              borderTop: '1px solid #F9C846',
              borderBottom: '1px solid #F9C846',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#1C1C1C',
                fontSize: '16px',
                fontFamily: 'Archivo',
                fontWeight: 500,
                lineHeight: '22px',
                letterSpacing: '0.15px'
              }}>
                Preferences
              </span>
            </div>

            {/* Rows */}
            <TableCell
              size="default"
              type="multi-tag"
              background="default"
              leadCell={false}
              tags={[{ label: 'Label', variant: 'outline-black', showClose: true }]}
              overflowCount={4}
            />
            <TableCell
              size="default"
              type="multi-tag"
              background="alt-gray-50"
              leadCell={false}
              tags={[{ label: 'Label', variant: 'outline-black', showClose: true }]}
              overflowCount={4}
            />
            <TableCell
              size="default"
              type="multi-tag"
              background="default"
              leadCell={false}
              tags={[{ label: 'Label', variant: 'outline-black', showClose: true }]}
              overflowCount={4}
            />
            <TableCell
              size="default"
              type="multi-tag"
              background="alt-gray-50"
              leadCell={false}
              tags={[{ label: 'Label', variant: 'outline-black', showClose: true }]}
              overflowCount={4}
            />
          </div>

          {/* Actions Column */}
          <div style={{ width: '164px', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#FEF4DA',
              borderTop: '1px solid #F9C846',
              borderBottom: '1px solid #F9C846',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#1C1C1C',
                fontSize: '16px',
                fontFamily: 'Archivo',
                fontWeight: 500,
                lineHeight: '22px',
                letterSpacing: '0.15px'
              }}>
                Actions
              </span>
            </div>

            {/* Rows */}
            <TableCell
              size="default"
              type="links"
              background="default"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="default"
              type="links"
              background="alt-gray-50"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="default"
              type="links"
              background="default"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="default"
              type="links"
              background="alt-gray-50"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
          </div>

          {/* Rating Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#FEF4DA',
              borderTop: '1px solid #F9C846',
              borderBottom: '1px solid #F9C846',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#1C1C1C',
                fontSize: '16px',
                fontFamily: 'Archivo',
                fontWeight: 500,
                lineHeight: '22px',
                letterSpacing: '0.15px'
              }}>
                Rating
              </span>
            </div>

            {/* Rows */}
            <TableCell
              size="default"
              type="rating"
              background="default"
              leadCell={false}
              rating={5}
              maxRating={5}
            />
            <TableCell
              size="default"
              type="rating"
              background="alt-gray-50"
              leadCell={false}
              rating={5}
              maxRating={5}
            />
            <TableCell
              size="default"
              type="rating"
              background="default"
              leadCell={false}
              rating={5}
              maxRating={5}
            />
            <TableCell
              size="default"
              type="rating"
              background="alt-gray-50"
              leadCell={false}
              rating={5}
              maxRating={5}
            />
          </div>

          {/* Status Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#FEF4DA',
              borderTop: '1px solid #F9C846',
              borderBottom: '1px solid #F9C846',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#1C1C1C',
                fontSize: '16px',
                fontFamily: 'Archivo',
                fontWeight: 500,
                lineHeight: '22px',
                letterSpacing: '0.15px'
              }}>
                Status
              </span>
            </div>

            {/* Rows */}
            <TableCell
              size="default"
              type="group-avatars"
              background="default"
              leadCell={false}
              avatars={[
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' }
              ]}
              overflowCount={4}
            />
            <TableCell
              size="default"
              type="group-avatars"
              background="alt-gray-50"
              leadCell={false}
              avatars={[
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' }
              ]}
              overflowCount={4}
            />
            <TableCell
              size="default"
              type="group-avatars"
              background="default"
              leadCell={false}
              avatars={[
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' }
              ]}
              overflowCount={4}
            />
            <TableCell
              size="default"
              type="group-avatars"
              background="alt-gray-50"
              leadCell={false}
              avatars={[
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' },
                { src: 'https://placehold.co/46x46' }
              ]}
              overflowCount={4}
            />
          </div>

          {/* Progress Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#FEF4DA',
              borderTop: '1px solid #F9C846',
              borderBottom: '1px solid #F9C846',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                color: '#1C1C1C',
                fontSize: '16px',
                fontFamily: 'Archivo',
                fontWeight: 500,
                lineHeight: '22px',
                letterSpacing: '0.15px'
              }}>
                Progress
              </span>
            </div>

            {/* Rows */}
            <TableCell
              size="default"
              type="progress-bar"
              background="default"
              leadCell={false}
              progress={30}
            />
            <TableCell
              size="default"
              type="progress-bar"
              background="alt-gray-50"
              leadCell={false}
              progress={30}
            />
            <TableCell
              size="default"
              type="progress-bar"
              background="default"
              leadCell={false}
              progress={30}
            />
            <TableCell
              size="default"
              type="progress-bar"
              background="alt-gray-50"
              leadCell={false}
              progress={30}
            />
          </div>

          {/* Button Group Column */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header - Empty */}
            <div style={{
              height: '44px',
              padding: '12px 24px',
              background: '#FEF4DA',
              borderTop: '1px solid #F9C846',
              borderBottom: '1px solid #F9C846'
            }} />

            {/* Rows */}
            <TableCell
              size="default"
              type="button-group"
              background="default"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="default"
              type="button-group"
              background="alt-gray-50"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="default"
              type="button-group"
              background="default"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
            <TableCell
              size="default"
              type="button-group"
              background="alt-gray-50"
              leadCell={false}
              onEdit={() => console.log('Edit')}
              onDelete={() => console.log('Delete')}
            />
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: '12px 24px',
          background: '#1F2937',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px'
        }}>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <button style={{
              minWidth: '80px',
              height: '30px',
              padding: '4px 12px',
              background: 'white',
              borderRadius: '4px',
              border: '0.5px solid #D2D5DA',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontFamily: 'Archivo',
              fontWeight: 300,
              color: '#1C1C1C'
            }}>
              <div style={{
                width: '9.24px',
                height: '9.24px',
                background: '#191E3C'
              }} />
              Previous
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: '#FEF4DA',
              borderRadius: '8px',
              border: '3px solid #E8A317',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontFamily: 'Archivo',
              fontWeight: 700,
              color: '#1C1C1C'
            }}>
              1
            </div>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              color: 'white'
            }}>
              2
            </div>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              color: 'white'
            }}>
              3
            </div>
            <div style={{
              width: '18px',
              height: '18px',
              opacity: 0.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '12px',
                height: '3px',
                background: 'white'
              }} />
            </div>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              color: 'white'
            }}>
              8
            </div>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              color: 'white'
            }}>
              9
            </div>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontFamily: 'Archivo',
              fontWeight: 500,
              color: 'white'
            }}>
              10
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <button style={{
              minWidth: '80px',
              height: '30px',
              padding: '4px 12px',
              background: 'white',
              borderRadius: '4px',
              border: '0.5px solid #D2D5DA',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontFamily: 'Archivo',
              fontWeight: 300,
              color: '#1C1C1C'
            }}>
              Next
              <div style={{
                width: '9.24px',
                height: '9.24px',
                background: '#191E3C'
              }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact table variant with minimal spacing and streamlined design, exactly matching the third Figma design.',
      },
    },
  },
};
