import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Logo Usage Guide',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# ECHO Logo Usage Guide

The ECHO logo is a distinctive brand mark that represents our identity. This guide provides comprehensive instructions for proper logo usage across all applications.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const LogoUsageGuide: Story = {
  render: () => (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'Inter, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      lineHeight: '1.6'
    }}>
      <h1 style={{ 
        fontSize: '32px', 
        fontWeight: '700', 
        marginBottom: '24px',
        color: '#1a1a1a'
      }}>
        ECHO Logo Usage Guide
      </h1>
      
      <p style={{ 
        fontSize: '18px', 
        color: '#666',
        marginBottom: '32px'
      }}>
        The ECHO logo is a distinctive brand mark that represents our identity. This guide provides comprehensive instructions for proper logo usage across all applications.
      </p>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '24px',
          color: '#1a1a1a' 
        }}>
          Logo Variants
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Logomark
            </h3>
            <p style={{ fontSize: '14px', marginBottom: '12px' }}>
              The ECHO logomark is a circular symbol featuring geometric elements that can be used independently when space is limited or when the brand name is well-established in context.
            </p>
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ fontSize: '14px' }}>Best for:</strong>
            </div>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li>Favicon and app icons</li>
              <li>Social media profile images</li>
              <li>Compact navigation elements</li>
              <li>Button icons</li>
              <li>Merchandise and branded items</li>
            </ul>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Wordmark
            </h3>
            <p style={{ fontSize: '14px', marginBottom: '12px' }}>
              The ECHO wordmark consists of clean, modern typography spelling "ECHO" and should be used when the symbol alone might not provide sufficient brand recognition.
            </p>
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ fontSize: '14px' }}>Best for:</strong>
            </div>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li>Text-heavy layouts</li>
              <li>Small horizontal spaces</li>
              <li>Email signatures</li>
              <li>Forms and headers</li>
            </ul>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Full Logo
            </h3>
            <p style={{ fontSize: '14px', marginBottom: '12px' }}>
              The complete logo combines both the logomark and wordmark, providing maximum brand recognition and impact.
            </p>
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ fontSize: '14px' }}>Best for:</strong>
            </div>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li>Primary brand applications</li>
              <li>Marketing materials</li>
              <li>Website headers</li>
              <li>Business cards and letterhead</li>
              <li>Large-format applications</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '24px',
          color: '#1a1a1a' 
        }}>
          Color Variations
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px'
        }}>
          <div style={{ 
            padding: '24px', 
            border: '1px solid #dbeafe',
            borderRadius: '8px',
            background: '#eff6ff'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Brand Colors (Default)
            </h3>
            <p style={{ fontSize: '14px', marginBottom: '16px' }}>
              The multi-color brand version uses our signature color palette:
            </p>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '8px',
                fontSize: '14px'
              }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  backgroundColor: '#0BA7EA',
                  borderRadius: '4px',
                  marginRight: '8px'
                }}></div>
                <strong>Primary</strong>: Sky Blue (#0BA7EA)
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '8px',
                fontSize: '14px'
              }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  backgroundColor: '#3A3282',
                  borderRadius: '4px',
                  marginRight: '8px'
                }}></div>
                <strong>Secondary</strong>: Purple (#3A3282)
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '8px',
                fontSize: '14px'
              }}>
                <div style={{ 
                  width: '20px', 
                  height: '20px', 
                  backgroundColor: '#2F42BD',
                  borderRadius: '4px',
                  marginRight: '8px'
                }}></div>
                <strong>Tertiary</strong>: Blue (#2F42BD)
              </div>
            </div>
            <p style={{ fontSize: '14px', fontStyle: 'italic' }}>
              Use this version whenever possible for maximum brand impact.
            </p>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Single Color Versions
            </h3>
            <p style={{ fontSize: '14px', marginBottom: '16px' }}>
              For situations where full-color reproduction isn't possible:
            </p>
            <div style={{ fontSize: '14px' }}>
              <div style={{ marginBottom: '8px' }}>
                <strong>Dark Blue</strong>: Use on light backgrounds
              </div>
              <div style={{ marginBottom: '8px' }}>
                <strong>Sky Blue</strong>: For brand consistency in monochrome applications
              </div>
              <div style={{ marginBottom: '8px' }}>
                <strong>Black</strong>: For high-contrast applications
              </div>
              <div style={{ marginBottom: '8px' }}>
                <strong>White</strong>: For dark backgrounds and overlays
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '24px',
          color: '#1a1a1a' 
        }}>
          Size Guidelines
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          <div style={{ 
            padding: '24px', 
            border: '1px solid #fef3c7',
            borderRadius: '8px',
            background: '#fffbeb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Minimum Sizes
            </h3>
            <div style={{ fontSize: '14px' }}>
              <div style={{ marginBottom: '8px' }}>
                <strong>Logomark</strong>: 24px minimum width
              </div>
              <div style={{ marginBottom: '8px' }}>
                <strong>Wordmark</strong>: 120px minimum width
              </div>
              <div style={{ marginBottom: '8px' }}>
                <strong>Full Logo</strong>: 160px minimum width
              </div>
            </div>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #d1fae5',
            borderRadius: '8px',
            background: '#ecfdf5'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Recommended Sizes
            </h3>
            <div style={{ fontSize: '14px' }}>
              <div style={{ marginBottom: '8px' }}>
                <strong>Small</strong>: Navigation bars, compact headers
              </div>
              <div style={{ marginBottom: '8px' }}>
                <strong>Medium</strong>: Standard web applications, documents
              </div>
              <div style={{ marginBottom: '8px' }}>
                <strong>Large</strong>: Hero sections, marketing materials
              </div>
            </div>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #e0e7ff',
            borderRadius: '8px',
            background: '#f0f9ff'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Clear Space
            </h3>
            <p style={{ fontSize: '14px' }}>
              Maintain adequate clear space around the logo equal to the height of one "E" in the wordmark. This ensures the logo has proper visual breathing room and isn't crowded by other elements.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '24px',
          color: '#1a1a1a' 
        }}>
          Usage Guidelines
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px'
        }}>
          <div style={{ 
            padding: '24px', 
            border: '2px solid #10b981',
            borderRadius: '8px',
            background: '#ecfdf5'
          }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: '#10b981'
            }}>
              ✅ Do:
            </h3>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li>Use the brand color version whenever possible</li>
              <li>Maintain proper proportions when scaling</li>
              <li>Ensure adequate contrast with background</li>
              <li>Use appropriate variants for different contexts</li>
              <li>Keep sufficient clear space around the logo</li>
            </ul>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '2px solid #ef4444',
            borderRadius: '8px',
            background: '#fee2e2'
          }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: '#ef4444'
            }}>
              ❌ Don't:
            </h3>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li>Stretch or distort the logo proportions</li>
              <li>Use low-resolution versions</li>
              <li>Place on busy or conflicting backgrounds</li>
              <li>Rotate or modify the logo elements</li>
              <li>Use colors not specified in the brand palette</li>
              <li>Place text too close to the logo</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '24px',
          color: '#1a1a1a' 
        }}>
          Background Usage
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#ffffff'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Light Backgrounds
            </h3>
            <p style={{ fontSize: '14px' }}>
              Use dark-blue, black, or brand color versions on light backgrounds with sufficient contrast.
            </p>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #374151',
            borderRadius: '8px',
            background: '#1f2937',
            color: '#ffffff'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Dark Backgrounds
            </h3>
            <p style={{ fontSize: '14px' }}>
              Use the white version on dark backgrounds to ensure proper visibility and contrast.
            </p>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            background: '#f3f4f6'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Photographic Backgrounds
            </h3>
            <p style={{ fontSize: '14px', marginBottom: '12px' }}>
              When placing the logo over photography:
            </p>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li>Use the white version with a subtle drop shadow</li>
              <li>Ensure the background area has sufficient contrast</li>
              <li>Consider using a subtle overlay for better legibility</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '24px',
          color: '#1a1a1a' 
        }}>
          Technical Specifications
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              File Formats
            </h3>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li><strong>SVG</strong>: Preferred for web and scalable applications</li>
              <li><strong>PNG</strong>: Use with transparent backgrounds when SVG isn't supported</li>
              <li><strong>High-resolution</strong>: Always use crisp, high-quality versions</li>
            </ul>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Accessibility
            </h3>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li>Ensure minimum contrast ratios are met (4.5:1 for normal text)</li>
              <li>Provide alternative text for screen readers</li>
              <li>Test visibility across different devices and viewing conditions</li>
              <li>Consider colorblind users when choosing background colors</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ 
        padding: '24px', 
        background: '#f0fdf4',
        border: '1px solid #22c55e',
        borderRadius: '8px'
      }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
          Examples in Context
        </h3>
        <p style={{ fontSize: '16px' }}>
          The logo has been designed to work harmoniously across various applications while maintaining brand consistency and professional appearance. Refer to the Storybook examples to see proper implementation in different scenarios.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive guide for proper ECHO logo usage, including variants, color specifications, sizing guidelines, and best practices.',
      },
    },
  },
};
