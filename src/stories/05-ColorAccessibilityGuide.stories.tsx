import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Color Accessibility Guide',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Color Accessibility Guide

This guide helps designers and developers choose color combinations that meet WCAG 2.1 accessibility standards, ensuring our products are usable by everyone, including users with visual impairments.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const ColorAccessibilityGuide: Story = {
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
        Color Accessibility Guide
      </h1>
      
      <p style={{ 
        fontSize: '18px', 
        color: '#666',
        marginBottom: '32px'
      }}>
        This guide helps designers and developers choose color combinations that meet WCAG 2.1 accessibility standards, ensuring our products are usable by everyone, including users with visual impairments.
      </p>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '24px',
          color: '#1a1a1a' 
        }}>
          WCAG 2.1 Standards Overview
        </h2>

        <div style={{ 
          background: '#f8fafc', 
          border: '1px solid #cbd5e1',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '24px'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
            Contrast Ratio Requirements
          </h3>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            fontSize: '14px'
          }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Level</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Normal Text</th>
                <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Large Text</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '12px', fontWeight: '600' }}>AA (Minimum)</td>
                <td style={{ padding: '12px' }}>4.5:1</td>
                <td style={{ padding: '12px' }}>3:1</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', fontWeight: '600' }}>AAA (Enhanced)</td>
                <td style={{ padding: '12px' }}>7:1</td>
                <td style={{ padding: '12px' }}>4.5:1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ 
          background: '#eff6ff', 
          border: '1px solid #bfdbfe',
          borderRadius: '8px',
          padding: '24px'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
            Text Size Definitions
          </h3>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
            <li><strong>Normal Text</strong>: Under 18pt (24px) regular or under 14pt (18.5px) bold</li>
            <li><strong>Large Text</strong>: 18pt (24px) regular or 14pt (18.5px) bold and larger</li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '24px',
          color: '#1a1a1a' 
        }}>
          Quick Reference: Safe Color Combinations
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
              ✅ Always Safe (AAA Compliant)
            </h3>
            <p style={{ fontSize: '14px', marginBottom: '12px' }}>
              These combinations exceed WCAG AAA standards and are recommended for all text content:
            </p>
            <div style={{ fontSize: '13px', lineHeight: '1.5' }}>
              <div style={{ 
                marginBottom: '8px', 
                padding: '8px', 
                background: '#ffffff', 
                color: '#1c1c1c',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                fontFamily: 'monospace'
              }}>
                Black (#1C1C1C) on White (#FFFFFF) - 15.4:1
              </div>
              <div style={{ 
                marginBottom: '8px', 
                padding: '8px', 
                background: '#ffffff', 
                color: '#191E3C',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                fontFamily: 'monospace'
              }}>
                Primary Blue Dark (#191E3C) on White - 13.8:1
              </div>
              <div style={{ 
                marginBottom: '8px', 
                padding: '8px', 
                background: '#ffffff', 
                color: '#111827',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                fontFamily: 'monospace'
              }}>
                Gray 900 (#111827) on White - 16.7:1
              </div>
            </div>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '2px solid #3b82f6',
            borderRadius: '8px',
            background: '#eff6ff'
          }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: '#3b82f6'
            }}>
              ✅ AA Compliant (Good for Most Use Cases)
            </h3>
            <p style={{ fontSize: '14px', marginBottom: '12px' }}>
              These meet WCAG AA standards and are suitable for most text content:
            </p>
            <div style={{ fontSize: '13px', lineHeight: '1.5' }}>
              <div style={{ 
                marginBottom: '8px', 
                padding: '8px', 
                background: '#ffffff', 
                color: '#374151',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                fontFamily: 'monospace'
              }}>
                Gray 700 (#374151) on White - 8.9:1
              </div>
              <div style={{ 
                marginBottom: '8px', 
                padding: '8px', 
                background: '#ffffff', 
                color: '#1F2937',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                fontFamily: 'monospace'
              }}>
                Gray 800 (#1F2937) on White - 12.2:1
              </div>
              <div style={{ 
                marginBottom: '8px', 
                padding: '8px', 
                background: '#ffffff', 
                color: '#2F42BD',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                fontFamily: 'monospace'
              }}>
                Primary Blue (#2F42BD) on White - 6.1:1
              </div>
            </div>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '2px solid #f59e0b',
            borderRadius: '8px',
            background: '#fef3c7'
          }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: '#f59e0b'
            }}>
              ⚠️ Use with Caution
            </h3>
            <p style={{ fontSize: '14px', marginBottom: '12px' }}>
              These combinations meet AA standards for large text but not for normal text:
            </p>
            <div style={{ fontSize: '13px', lineHeight: '1.5' }}>
              <div style={{ 
                marginBottom: '8px', 
                padding: '8px', 
                background: '#ffffff', 
                color: '#4B5563',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                fontFamily: 'monospace'
              }}>
                Gray 600 (#4B5563) on White - 4.1:1
              </div>
              <div style={{ 
                marginBottom: '8px', 
                padding: '8px', 
                background: '#ffffff', 
                color: '#0BA7EA',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                fontFamily: 'monospace'
              }}>
                Sky Blue (#0BA7EA) on White - 3.2:1
              </div>
            </div>
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
              ❌ Avoid for Text
            </h3>
            <p style={{ fontSize: '14px', marginBottom: '12px' }}>
              These combinations fail WCAG AA standards:
            </p>
            <div style={{ fontSize: '13px', lineHeight: '1.5' }}>
              <div style={{ 
                marginBottom: '8px', 
                padding: '8px', 
                background: '#ffffff', 
                color: '#F9C846',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                fontFamily: 'monospace'
              }}>
                Yellow (#F9C846) on White - 1.8:1
              </div>
              <div style={{ 
                marginBottom: '8px', 
                padding: '8px', 
                background: '#ffffff', 
                color: '#9CA3AF',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                fontFamily: 'monospace'
              }}>
                Gray 400 (#9CA3AF) on White - 2.8:1
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
          Color Usage Guidelines
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px'
        }}>
          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Status and Semantic Colors
            </h3>
            
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ 
                fontSize: '16px', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#10b981'
              }}>
                ✅ Success Messages
              </h4>
              <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
                <li>Success Green (#8BBF9F) text: Use on light backgrounds only for large text</li>
                <li><strong>Recommended</strong>: Success Green background with White or Dark text</li>
                <li><strong>Background</strong>: Success Light (#EFF7F3) with Dark text</li>
              </ul>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ 
                fontSize: '16px', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#f59e0b'
              }}>
                ⚠️ Warning Messages
              </h4>
              <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
                <li>Warning Yellow (#F59E0B): Better contrast than primary yellow</li>
                <li><strong>Recommended</strong>: Warning background with Dark text</li>
                <li><strong>Background</strong>: Warning Light (#FEF3C7) with Dark text</li>
              </ul>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ 
                fontSize: '16px', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#ef4444'
              }}>
                ❌ Error Messages
              </h4>
              <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
                <li>Error Red (#EF4444): Good contrast on light backgrounds</li>
                <li><strong>Recommended</strong>: Error background with White text for critical alerts</li>
                <li><strong>Background</strong>: Error Light (#FEE2E2) with Dark text</li>
              </ul>
            </div>

            <div>
              <h4 style={{ 
                fontSize: '16px', 
                fontWeight: '600', 
                marginBottom: '8px',
                color: '#3b82f6'
              }}>
                ℹ️ Info Messages
              </h4>
              <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
                <li>Info Blue (#3B82F6): Excellent contrast on light backgrounds</li>
                <li><strong>Background</strong>: Info Light (#DBEAFE) with Dark text</li>
              </ul>
            </div>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Design System Recommendations
            </h3>
            
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                For Designers
              </h4>
              <ol style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
                <li><strong>Always test contrast</strong> before finalizing designs</li>
                <li><strong>Use the provided safe combinations</strong> as your starting point</li>
                <li><strong>Consider user context</strong> - critical information needs higher contrast</li>
                <li><strong>Test with actual content</strong> - lorem ipsum doesn't represent real-world usage</li>
                <li><strong>Account for different devices</strong> - mobile screens may appear dimmer</li>
              </ol>
            </div>

            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                For Developers
              </h4>
              <ol style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
                <li><strong>Use CSS custom properties</strong> from our design tokens</li>
                <li><strong>Implement focus indicators</strong> with adequate contrast</li>
                <li><strong>Test programmatically</strong> using browser dev tools or accessibility testing tools</li>
                <li><strong>Consider user preferences</strong> like dark mode and high contrast settings</li>
                <li><strong>Validate in different lighting conditions</strong></li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        padding: '24px', 
        background: '#fef2f2',
        border: '1px solid #fca5a5',
        borderRadius: '8px',
        marginBottom: '40px'
      }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
          Common Mistakes to Avoid
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#dc2626' }}>
              ❌ Don't
            </h4>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li>Use light gray text on white backgrounds for body text</li>
              <li>Rely solely on color to convey information</li>
              <li>Use yellow or light colors for text on white backgrounds</li>
              <li>Place text over complex background images without adequate contrast</li>
              <li>Assume that "it looks fine" means it's accessible</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#16a34a' }}>
              ✅ Do
            </h4>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li>Test all color combinations with actual content</li>
              <li>Provide alternative ways to convey information beyond color</li>
              <li>Use sufficient contrast ratios for all text</li>
              <li>Consider users with color vision deficiencies</li>
              <li>Test in various lighting conditions and devices</li>
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
          Implementation Checklist
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px'
        }}>
          <div>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li>All text meets minimum AA contrast requirements (4.5:1)</li>
              <li>Large text meets minimum AA contrast requirements (3:1)</li>
              <li>Critical text meets AAA contrast requirements (7:1) when possible</li>
              <li>Interactive elements have adequate contrast in all states</li>
            </ul>
          </div>
          <div>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li>Focus indicators are clearly visible</li>
              <li>Information is not conveyed by color alone</li>
              <li>Color combinations work for users with color vision deficiencies</li>
              <li>Designs are tested with real content, not placeholder text</li>
              <li>Automated accessibility testing is in place</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive guide for choosing accessible color combinations that meet WCAG 2.1 standards, including contrast ratio requirements and usage guidelines.',
      },
    },
  },
};
