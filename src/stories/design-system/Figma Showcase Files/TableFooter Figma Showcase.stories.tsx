import type { Meta, StoryObj } from '@storybook/react';
import { TableFooter } from '../../atoms/TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Design System/Figma Showcase Files/TableFooter Figma Showcase',
  component: TableFooter,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# TableFooter - Figma Design Implementation

This showcase demonstrates the exact implementation of all table footer variants 
from the Figma designs. Each variant matches the specifications pixel-perfectly.

## Design Variants Included

### Footer Types
- **Default**: Full pagination with Previous/Next navigation buttons
- **View More**: Progressive loading with "View more" button
- **Pagination Only**: Just page numbers without navigation buttons
- **No Content**: Empty footer for minimal layouts

### Background Colors
- **Black**: Dark theme with white text and yellow active page indicators
- **Light Gray**: Standard light theme
- **Blue-50**: Subtle blue background variant

### Sizes
- **Small**: Compact footer with smaller pagination buttons (32px)
- **Default**: Standard footer with larger pagination buttons (40px)

## Key Features
- **Smart Pagination**: Automatic ellipsis for large page ranges
- **Active State**: Yellow highlighted active page on dark backgrounds
- **Navigation Controls**: Previous/Next buttons with proper disabled states
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Proper focus states and keyboard navigation
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof TableFooter>;

export const FigmaDesignExact: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '20px', 
      padding: '40px',
      backgroundColor: '#ffffff',
      minHeight: '100vh'
    }}>
      {/* Title Section */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        borderBottom: '2px solid #E5E7EB',
        paddingBottom: '20px'
      }}>
        <h1 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '32px', 
          fontWeight: '700',
          color: '#1C1C1C',
          fontFamily: 'Archivo, -apple-system, sans-serif'
        }}>
          Table Footer - Figma Design Implementation
        </h1>
        <p style={{ 
          margin: '0', 
          fontSize: '18px', 
          color: '#6D7280',
          lineHeight: '1.6',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Exact pixel-perfect implementation of all table footer variants from Figma designs.
          Includes pagination controls, navigation buttons, and various layout types.
        </p>
      </div>

      {/* Default (White) Background Variants */}
      <section>
        <h2 style={{
          margin: '0 0 24px 0',
          fontSize: '24px',
          fontWeight: '600',
          color: '#1C1C1C',
          fontFamily: 'Archivo, -apple-system, sans-serif'
        }}>
          Default (White) Background Variants (from Figma)
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {/* Default Footer with Navigation */}
          <div>
            <TableFooter
              type="default"
              size="default"
              background="default"
              currentPage={1}
              totalPages={10}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default, size=default, bg=default
            </p>
          </div>

          {/* View More Footer */}
          <div>
            <TableFooter
              type="view-more"
              size="default"
              background="default"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=view-more, size=default, bg=default
            </p>
          </div>

          {/* Pagination Only Footer */}
          <div>
            <TableFooter
              type="pagination-only"
              size="default"
              background="default"
              currentPage={1}
              totalPages={10}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=pagination-only, size=default, bg=default
            </p>
          </div>

          {/* No Content Footer */}
          <div>
            <TableFooter
              type="no-content"
              size="default"
              background="default"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=no-content, size=default, bg=default
            </p>
          </div>
        </div>
      </section>

      {/* Small Size - Default (White) Background */}
      <section>
        <h2 style={{
          margin: '0 0 24px 0',
          fontSize: '24px',
          fontWeight: '600',
          color: '#1C1C1C',
          fontFamily: 'Archivo, -apple-system, sans-serif'
        }}>
          Small Size - Default (White) Background (from Figma)
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {/* Small Default Footer */}
          <div>
            <TableFooter
              type="default"
              size="small"
              background="default"
              currentPage={1}
              totalPages={10}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default, size=small, bg=default
            </p>
          </div>

          {/* Small View More Footer */}
          <div>
            <TableFooter
              type="view-more"
              size="small"
              background="default"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=view-more, size=small, bg=default
            </p>
          </div>

          {/* Small Pagination Only Footer */}
          <div>
            <TableFooter
              type="pagination-only"
              size="small"
              background="default"
              currentPage={1}
              totalPages={10}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=pagination-only, size=small, bg=default
            </p>
          </div>

          {/* Small No Content Footer */}
          <div>
            <TableFooter
              type="no-content"
              size="small"
              background="default"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=no-content, size=small, bg=default
            </p>
          </div>
        </div>
      </section>

      {/* Light Gray Background Variants */}
      <section>
        <h2 style={{
          margin: '0 0 24px 0',
          fontSize: '24px',
          fontWeight: '600',
          color: '#1C1C1C',
          fontFamily: 'Archivo, -apple-system, sans-serif'
        }}>
          Light Gray Background Variants (from Figma)
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {/* Default Footer with Navigation */}
          <div>
            <TableFooter
              type="default"
              size="default"
              background="light-gray"
              currentPage={1}
              totalPages={10}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default, size=default, bg=light-gray
            </p>
          </div>

          {/* View More Footer */}
          <div>
            <TableFooter
              type="view-more"
              size="default"
              background="light-gray"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=view-more, size=default, bg=light-gray
            </p>
          </div>

          {/* Pagination Only Footer */}
          <div>
            <TableFooter
              type="pagination-only"
              size="default"
              background="light-gray"
              currentPage={1}
              totalPages={10}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=pagination-only, size=default, bg=light-gray
            </p>
          </div>

          {/* No Content Footer */}
          <div>
            <TableFooter
              type="no-content"
              size="default"
              background="light-gray"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=no-content, size=default, bg=light-gray
            </p>
          </div>
        </div>
      </section>

      {/* Small Size - Light Gray Background */}
      <section>
        <h2 style={{
          margin: '0 0 24px 0',
          fontSize: '24px',
          fontWeight: '600',
          color: '#1C1C1C',
          fontFamily: 'Archivo, -apple-system, sans-serif'
        }}>
          Small Size - Light Gray Background (from Figma)
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {/* Small Default Footer */}
          <div>
            <TableFooter
              type="default"
              size="small"
              background="light-gray"
              currentPage={1}
              totalPages={10}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default, size=small, bg=light-gray
            </p>
          </div>

          {/* Small View More Footer */}
          <div>
            <TableFooter
              type="view-more"
              size="small"
              background="light-gray"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=view-more, size=small, bg=light-gray
            </p>
          </div>

          {/* Small Pagination Only Footer */}
          <div>
            <TableFooter
              type="pagination-only"
              size="small"
              background="light-gray"
              currentPage={1}
              totalPages={10}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=pagination-only, size=small, bg=light-gray
            </p>
          </div>

          {/* Small No Content Footer */}
          <div>
            <TableFooter
              type="no-content"
              size="small"
              background="light-gray"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=no-content, size=small, bg=light-gray
            </p>
          </div>
        </div>
      </section>

      {/* Blue-50 Background Variants */}
      <section>
        <h2 style={{
          margin: '0 0 24px 0',
          fontSize: '24px',
          fontWeight: '600',
          color: '#1C1C1C',
          fontFamily: 'Archivo, -apple-system, sans-serif'
        }}>
          Blue-50 Background Variants (from Figma)
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {/* Default Footer with Navigation */}
          <div>
            <TableFooter
              type="default"
              size="default"
              background="blue-50"
              currentPage={1}
              totalPages={10}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default, size=default, bg=blue-50
            </p>
          </div>

          {/* View More Footer */}
          <div>
            <TableFooter
              type="view-more"
              size="default"
              background="blue-50"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=view-more, size=default, bg=blue-50
            </p>
          </div>

          {/* Pagination Only Footer */}
          <div>
            <TableFooter
              type="pagination-only"
              size="default"
              background="blue-50"
              currentPage={1}
              totalPages={10}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=pagination-only, size=default, bg=blue-50
            </p>
          </div>

          {/* No Content Footer */}
          <div>
            <TableFooter
              type="no-content"
              size="default"
              background="blue-50"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=no-content, size=default, bg=blue-50
            </p>
          </div>
        </div>
      </section>

      {/* Small Size - Blue-50 Background */}
      <section>
        <h2 style={{
          margin: '0 0 24px 0',
          fontSize: '24px',
          fontWeight: '600',
          color: '#1C1C1C',
          fontFamily: 'Archivo, -apple-system, sans-serif'
        }}>
          Small Size - Blue-50 Background (from Figma)
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
          {/* Small Default Footer */}
          <div>
            <TableFooter
              type="default"
              size="small"
              background="blue-50"
              currentPage={1}
              totalPages={10}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=default, size=small, bg=blue-50
            </p>
          </div>

          {/* Small View More Footer */}
          <div>
            <TableFooter
              type="view-more"
              size="small"
              background="blue-50"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=view-more, size=small, bg=blue-50
            </p>
          </div>

          {/* Small Pagination Only Footer */}
          <div>
            <TableFooter
              type="pagination-only"
              size="small"
              background="blue-50"
              currentPage={1}
              totalPages={10}
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=pagination-only, size=small, bg=blue-50
            </p>
          </div>

          {/* Small No Content Footer */}
          <div>
            <TableFooter
              type="no-content"
              size="small"
              background="blue-50"
            />
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
              type=no-content, size=small, bg=blue-50
            </p>
          </div>
        </div>
      </section>

      {/* Different Page States */}
      <section>
        <h2 style={{
          margin: '0 0 24px 0',
          fontSize: '24px',
          fontWeight: '600',
          color: '#1C1C1C',
          fontFamily: 'Archivo, -apple-system, sans-serif'
        }}>
          Pagination States - All Backgrounds
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
          {/* Default (white) pagination states */}
          <div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: '500', color: '#374151' }}>Default (White) Background</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <TableFooter
                  type="default"
                  size="default"
                  background="default"
                  currentPage={1}
                  totalPages={10}
                />
                <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
                  First page with navigation - default white
                </p>
              </div>

              <div>
                <TableFooter
                  type="pagination-only"
                  size="small"
                  background="default"
                  currentPage={1}
                  totalPages={10}
                />
                <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
                  Small pagination only - default white
                </p>
              </div>
            </div>
          </div>

          {/* Light gray pagination states */}
          <div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: '500', color: '#374151' }}>Light Gray Background</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <TableFooter
                  type="default"
                  size="default"
                  background="light-gray"
                  currentPage={5}
                  totalPages={10}
                />
                <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
                  Middle page with full pagination range - light gray
                </p>
              </div>

              <div>
                <TableFooter
                  type="pagination-only"
                  size="small"
                  background="light-gray"
                  currentPage={1}
                  totalPages={10}
                />
                <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
                  Small pagination only - light gray
                </p>
              </div>
            </div>
          </div>

          {/* Blue-50 pagination states */}
          <div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: '500', color: '#374151' }}>Blue-50 Background</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <TableFooter
                  type="default"
                  size="default"
                  background="blue-50"
                  currentPage={1}
                  totalPages={10}
                />
                <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
                  First page with navigation - blue-50
                </p>
              </div>

              <div>
                <TableFooter
                  type="pagination-only"
                  size="small"
                  background="blue-50"
                  currentPage={1}
                  totalPages={10}
                />
                <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#9CA3AF' }}>
                  Small pagination only - blue-50
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Notes */}
      <section style={{ 
        marginTop: '60px',
        padding: '32px',
        backgroundColor: '#F9FAFB',
        borderRadius: '12px',
        border: '1px solid #E5E7EB'
      }}>
        <h3 style={{ 
          margin: '0 0 20px 0', 
          fontSize: '20px', 
          fontWeight: '600',
          color: '#1C1C1C'
        }}>
          Implementation Details
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontWeight: '600', color: '#374151' }}>Pagination Logic</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#6B7280' }}>
              <li>Smart ellipsis placement for large page ranges</li>
              <li>Always shows first and last page</li>
              <li>Configurable sibling count around current page</li>
              <li>Active page highlighting with yellow accent</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontWeight: '600', color: '#374151' }}>Navigation Controls</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#6B7280' }}>
              <li>Previous/Next buttons with proper disabled states</li>
              <li>View more button for progressive loading</li>
              <li>Proper alignment and spacing</li>
              <li>Touch-friendly 44px minimum targets</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontWeight: '600', color: '#374151' }}>Visual Design</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#6B7280' }}>
              <li>Black background: #1F2937</li>
              <li>White text with proper contrast</li>
              <li>Yellow active state: #E8A317 border, #FEF4DA background</li>
              <li>Consistent border radius and spacing</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontWeight: '600', color: '#374151' }}>Responsive Behavior</h4>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#6B7280' }}>
              <li>Adapts to container width gracefully</li>
              <li>Stacks vertically on mobile devices</li>
              <li>Reduces button sizes on small screens</li>
              <li>Maintains accessibility across devices</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: `
**Perfect Figma Implementation**

This story showcases the exact pixel-perfect implementation of all table footer variants 
from the Figma designs. Every detail has been carefully matched including:

- Pagination button sizes and styling
- Active page highlighting with yellow accent
- Navigation button placement and styling
- Background colors and text contrast
- Spacing and alignment
- Responsive behavior

The implementation supports all combinations of:
- **Types**: Default, view-more, pagination-only, no-content
- **Sizes**: Small (32px buttons) and Default (40px buttons)
- **Backgrounds**: Black, light-gray, and blue-50
- **Functionality**: Smart pagination with ellipsis, navigation controls
        `
      }
    }
  }
};

// Combined Table Example
export const CombinedTableExample: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '40px', 
      padding: '40px',
      backgroundColor: '#ffffff'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ 
          margin: '0 0 16px 0', 
          fontSize: '28px', 
          fontWeight: '600',
          color: '#1C1C1C'
        }}>
          Complete Table Example
        </h2>
        <p style={{ 
          margin: '0', 
          fontSize: '16px', 
          color: '#6D7280',
          lineHeight: '1.6'
        }}>
          Headers and footers combined to show complete table interfaces
        </p>
      </div>

      {/* Complete table examples */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Black theme complete table */}
        <div style={{ 
          border: '1px solid #E5E7EB', 
          borderRadius: '12px',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{ borderBottom: 'none' }}>
            <div style={{
              display: 'flex',
              width: '100%',
              padding: '20px 24px',
              alignItems: 'center',
              borderRadius: '12px 12px 0 0',
              border: '1px solid #E5E7EB',
              background: '#1F2937',
              gap: '16px'
            }}>
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '6px',
                flex: '1 0 0',
                alignSelf: 'stretch'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <h2 style={{
                    color: '#FFFFFF',
                    fontFamily: 'Archivo',
                    fontSize: '24px',
                    fontWeight: '500',
                    lineHeight: '24px',
                    letterSpacing: '-0.25px',
                    margin: '0'
                  }}>
                    Customers
                  </h2>
                  <div style={{
                    display: 'flex',
                    padding: '4px 12px',
                    alignItems: 'center',
                    borderRadius: '99999px',
                    border: '1px solid #FCE4A5',
                    background: '#F9C846'
                  }}>
                    <span style={{
                      color: '#1C1C1C',
                      fontFamily: 'Archivo',
                      fontSize: '14px',
                      fontWeight: '500',
                      lineHeight: '17px',
                      letterSpacing: '0.15px'
                    }}>
                      100 items
                    </span>
                  </div>
                </div>
                <div style={{
                  color: '#C5CAED',
                  fontFamily: 'Roboto Flex',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  letterSpacing: '0.05px'
                }}>
                  These companies have purchased in the last 12 months
                </div>
              </div>
            </div>
          </div>
          
          {/* Content area placeholder */}
          <div style={{ 
            height: '200px', 
            background: '#f8f9fa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6c757d',
            fontStyle: 'italic'
          }}>
            Table content would go here...
          </div>
          
          {/* Footer */}
          <TableFooter
            type="default"
            size="default"
            background="black"
            currentPage={1}
            totalPages={10}
          />
        </div>

        {/* Light theme compact table */}
        <div style={{ 
          border: '1px solid #E5E7EB', 
          borderRadius: '12px',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{ borderBottom: 'none' }}>
            <div style={{
              display: 'flex',
              width: '100%',
              padding: '12px 24px',
              alignItems: 'center',
              borderRadius: '12px 12px 0 0',
              border: '1px solid #E5E7EB',
              background: '#F9FAFB',
              minHeight: '54px'
            }}>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flex: '1 0 0'
              }}>
                <h2 style={{
                  color: '#1C1C1C',
                  fontFamily: 'Archivo',
                  fontSize: '19px',
                  fontWeight: '500',
                  lineHeight: '24px',
                  letterSpacing: '-0.15px',
                  margin: '0'
                }}>
                  Team members
                </h2>
                <div style={{
                  display: 'flex',
                  padding: '4px 12px',
                  alignItems: 'center',
                  borderRadius: '99999px',
                  border: '1px solid #3E7CA7',
                  background: '#FFF'
                }}>
                  <span style={{
                    color: '#3E7CA7',
                    fontFamily: 'Archivo',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '17px',
                    letterSpacing: '0.15px'
                  }}>
                    25 items
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content area placeholder */}
          <div style={{ 
            height: '120px', 
            background: '#f8f9fa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6c757d',
            fontStyle: 'italic'
          }}>
            Compact table content...
          </div>
          
          {/* Footer */}
          <TableFooter
            type="view-more"
            size="small"
            background="light-gray"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples showing complete table interfaces with headers and footers combined.'
      }
    }
  }
};
