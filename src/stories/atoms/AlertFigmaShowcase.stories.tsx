import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert Figma Showcase',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete implementation of the alert component from Figma designs. This showcase displays all 48 alert variants (3 sizes × 8 colors × 2 border states) matching pixel-perfect Figma specifications including colors, typography, icons, and spacing.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

/**
 * Complete Figma Design Implementation
 * 
 * This showcase displays all alert variants exactly as designed in Figma:
 * 
 * **Sizes:**
 * - Small: 18x18px icons, 13px Archivo text
 * - Default: 28x28px icons, 16px Archivo title, 16px Roboto Flex description
 * - Large: 36x36px icons, 18px Archivo title, 18px Roboto Flex description
 * 
 * **Color Variants:**
 * - Default (Blue): #2F42BD with light blue background
 * - Warning (Orange): #D07C06 with orange background
 * - Light Gray: #1C1C1C on gray background
 * - Navy: #3A3282 with navy background
 * - Error (Red): #CE2031 with red background
 * - Success (Green): #227F1A with green background
 * - Purple: #5D2C82 with purple background
 * - White: #1C1C1C on white background
 * 
 * **Border States:**
 * - With Border: 1px solid border matching color theme
 * - Without Border: No border styling
 */
export const CompleteFigmaShowcase: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      padding: '40px',
      background: '#FFFFFF',
      minHeight: '100vh',
      fontFamily: 'Archivo, -apple-system, sans-serif',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 style={{
          margin: 0,
          fontSize: '32px',
          fontWeight: '600',
          color: '#1C1C1C',
          marginBottom: '12px',
          fontFamily: 'Archivo, -apple-system, sans-serif',
        }}>
          Alert Component - Figma Design System
        </h1>
        <p style={{
          margin: 0,
          fontSize: '16px',
          color: '#6D7280',
          lineHeight: '24px',
        }}>
          Complete implementation of all 48 alert variants from Figma design specifications
        </p>
      </div>

      {/* Small Size - With Border */}
      <section>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1F2937',
          marginBottom: '24px',
          fontFamily: 'Archivo, -apple-system, sans-serif',
        }}>
          Small Size (With Border)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
          <Alert size="small" colour="default" border={true} />
          <Alert size="small" colour="warning" border={true} />
          <Alert size="small" colour="light-gray" border={true} />
          <Alert size="small" colour="navy" border={true} />
          <Alert size="small" colour="error" border={true} />
          <Alert size="small" colour="success" border={true} />
          <Alert size="small" colour="purple" border={true} />
          <Alert size="small" colour="white" border={true} />
        </div>
      </section>

      {/* Small Size - Without Border */}
      <section>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1F2937',
          marginBottom: '24px',
          fontFamily: 'Archivo, -apple-system, sans-serif',
        }}>
          Small Size (Without Border)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
          <Alert size="small" colour="default" border={false} />
          <Alert size="small" colour="warning" border={false} />
          <Alert size="small" colour="light-gray" border={false} />
          <Alert size="small" colour="navy" border={false} />
          <Alert size="small" colour="error" border={false} />
          <Alert size="small" colour="success" border={false} />
          <Alert size="small" colour="purple" border={false} />
          <Alert size="small" colour="white" border={false} />
        </div>
      </section>

      {/* Default Size - With Border */}
      <section>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1F2937',
          marginBottom: '24px',
          fontFamily: 'Archivo, -apple-system, sans-serif',
        }}>
          Default Size (With Border)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
          <Alert size="default" colour="default" border={true} />
          <Alert size="default" colour="warning" border={true} />
          <Alert size="default" colour="light-gray" border={true} />
          <Alert size="default" colour="navy" border={true} />
          <Alert size="default" colour="error" border={true} />
          <Alert size="default" colour="success" border={true} />
          <Alert size="default" colour="purple" border={true} />
          <Alert size="default" colour="white" border={true} />
        </div>
      </section>

      {/* Default Size - Without Border */}
      <section>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1F2937',
          marginBottom: '24px',
          fontFamily: 'Archivo, -apple-system, sans-serif',
        }}>
          Default Size (Without Border)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
          <Alert size="default" colour="default" border={false} />
          <Alert size="default" colour="warning" border={false} />
          <Alert size="default" colour="light-gray" border={false} />
          <Alert size="default" colour="navy" border={false} />
          <Alert size="default" colour="error" border={false} />
          <Alert size="default" colour="success" border={false} />
          <Alert size="default" colour="purple" border={false} />
          <Alert size="default" colour="white" border={false} />
        </div>
      </section>

      {/* Large Size - With Border */}
      <section>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1F2937',
          marginBottom: '24px',
          fontFamily: 'Archivo, -apple-system, sans-serif',
        }}>
          Large Size (With Border)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
          <Alert size="large" colour="default" border={true} />
          <Alert size="large" colour="warning" border={true} />
          <Alert size="large" colour="light-gray" border={true} />
          <Alert size="large" colour="navy" border={true} />
          <Alert size="large" colour="error" border={true} />
          <Alert size="large" colour="success" border={true} />
          <Alert size="large" colour="purple" border={true} />
          <Alert size="large" colour="white" border={true} />
        </div>
      </section>

      {/* Large Size - Without Border */}
      <section>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1F2937',
          marginBottom: '24px',
          fontFamily: 'Archivo, -apple-system, sans-serif',
        }}>
          Large Size (Without Border)
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
          <Alert size="large" colour="default" border={false} />
          <Alert size="large" colour="warning" border={false} />
          <Alert size="large" colour="light-gray" border={false} />
          <Alert size="large" colour="navy" border={false} />
          <Alert size="large" colour="error" border={false} />
          <Alert size="large" colour="success" border={false} />
          <Alert size="large" colour="purple" border={false} />
          <Alert size="large" colour="white" border={false} />
        </div>
      </section>

      {/* Design Specifications */}
      <section style={{
        padding: '32px',
        background: '#F9FAFB',
        borderRadius: '12px',
        border: '1px solid #E5E7EB',
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1F2937',
          marginBottom: '24px',
          fontFamily: 'Archivo, -apple-system, sans-serif',
        }}>
          Design Specifications
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '12px',
              fontFamily: 'Archivo, -apple-system, sans-serif',
            }}>
              Typography
            </h3>
            <ul style={{
              margin: 0,
              padding: '0 0 0 20px',
              fontSize: '14px',
              color: '#6B7280',
              lineHeight: '24px',
            }}>
              <li><strong>Small:</strong> Archivo 13px/15px, Letter spacing 0.2px</li>
              <li><strong>Default:</strong> Archivo 16px/20px (title), Roboto Flex 16px/20px (description)</li>
              <li><strong>Large:</strong> Archivo 18px/24px (title), Roboto Flex 18px/22px (description)</li>
              <li><strong>Weight:</strong> 500 (title), 300 (description)</li>
            </ul>
          </div>

          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '12px',
              fontFamily: 'Archivo, -apple-system, sans-serif',
            }}>
              Layout & Spacing
            </h3>
            <ul style={{
              margin: 0,
              padding: '0 0 0 20px',
              fontSize: '14px',
              color: '#6B7280',
              lineHeight: '24px',
            }}>
              <li><strong>Small:</strong> 8px/12px padding, 12px gap</li>
              <li><strong>Default:</strong> 12px/16px padding, 16px gap</li>
              <li><strong>Large:</strong> 16px/20px padding, 16px gap</li>
              <li><strong>Border radius:</strong> 8px</li>
            </ul>
          </div>

          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '12px',
              fontFamily: 'Archivo, -apple-system, sans-serif',
            }}>
              Icons
            </h3>
            <ul style={{
              margin: 0,
              padding: '0 0 0 20px',
              fontSize: '14px',
              color: '#6B7280',
              lineHeight: '24px',
            }}>
              <li><strong>Small:</strong> 18x18px (leading), 16x16px (close)</li>
              <li><strong>Default:</strong> 28x28px (leading), 18x18px (close)</li>
              <li><strong>Large:</strong> 36x36px (leading), 18x18px (close)</li>
              <li><strong>Opacity:</strong> 0.5 on all icons</li>
            </ul>
          </div>

          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '12px',
              fontFamily: 'Archivo, -apple-system, sans-serif',
            }}>
              Color Palette
            </h3>
            <ul style={{
              margin: 0,
              padding: '0 0 0 20px',
              fontSize: '14px',
              color: '#6B7280',
              lineHeight: '24px',
            }}>
              <li><strong>Default:</strong> #2F42BD (blue theme)</li>
              <li><strong>Warning:</strong> #D07C06 (orange theme)</li>
              <li><strong>Error:</strong> #CE2031 (red theme)</li>
              <li><strong>Success:</strong> #227F1A (green theme)</li>
              <li><strong>Navy:</strong> #3A3282 (navy theme)</li>
              <li><strong>Purple:</strong> #5D2C82 (purple theme)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Examples */}
      <section>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1F2937',
          marginBottom: '24px',
          fontFamily: 'Archivo, -apple-system, sans-serif',
        }}>
          Interactive Examples
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '12px',
              fontFamily: 'Archivo, -apple-system, sans-serif',
            }}>
              With Close Handler
            </h3>
            <Alert 
              size="default" 
              colour="default" 
              border={true}
              onClose={() => alert('Alert closed!')}
              title="Closable alert"
              description="Click the X button to close this alert"
            />
          </div>

          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '12px',
              fontFamily: 'Archivo, -apple-system, sans-serif',
            }}>
              Title Only (No Description)
            </h3>
            <Alert 
              size="default" 
              colour="warning" 
              border={true}
              subtext={false}
              title="This alert has only a title"
            />
          </div>

          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '12px',
              fontFamily: 'Archivo, -apple-system, sans-serif',
            }}>
              Without Leading Icon
            </h3>
            <Alert 
              size="default" 
              colour="error" 
              border={true}
              leadingIcon={false}
              title="Alert without leading icon"
              description="This alert doesn't have a leading icon"
            />
          </div>

          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '12px',
              fontFamily: 'Archivo, -apple-system, sans-serif',
            }}>
              Without Close Button
            </h3>
            <Alert 
              size="default" 
              colour="success" 
              border={true}
              trailingIcon={false}
              title="Alert without close button"
              description="This alert doesn't have a close button"
            />
          </div>
        </div>
      </section>

      {/* Grid View of All Variants */}
      <section>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#1F2937',
          marginBottom: '24px',
          fontFamily: 'Archivo, -apple-system, sans-serif',
        }}>
          All 48 Variants - Grid View
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          maxWidth: '1200px',
        }}>
          {/* Small with border */}
          {['default', 'warning', 'light-gray', 'navy', 'error', 'success', 'purple', 'white'].map((colour) => (
            <Alert 
              key={`small-border-${colour}`}
              size="small" 
              colour={colour as any} 
              border={true}
              title={`Small ${colour} with border`}
              description="Alert description text"
            />
          ))}
          
          {/* Small without border */}
          {['default', 'warning', 'light-gray', 'navy', 'error', 'success', 'purple', 'white'].map((colour) => (
            <Alert 
              key={`small-no-border-${colour}`}
              size="small" 
              colour={colour as any} 
              border={false}
              title={`Small ${colour} without border`}
              description="Alert description text"
            />
          ))}
          
          {/* Default with border */}
          {['default', 'warning', 'light-gray', 'navy', 'error', 'success', 'purple', 'white'].map((colour) => (
            <Alert 
              key={`default-border-${colour}`}
              size="default" 
              colour={colour as any} 
              border={true}
              title={`Default ${colour} with border`}
              description="Alert description text"
            />
          ))}
          
          {/* Default without border */}
          {['default', 'warning', 'light-gray', 'navy', 'error', 'success', 'purple', 'white'].map((colour) => (
            <Alert 
              key={`default-no-border-${colour}`}
              size="default" 
              colour={colour as any} 
              border={false}
              title={`Default ${colour} without border`}
              description="Alert description text"
            />
          ))}
          
          {/* Large with border */}
          {['default', 'warning', 'light-gray', 'navy', 'error', 'success', 'purple', 'white'].map((colour) => (
            <Alert 
              key={`large-border-${colour}`}
              size="large" 
              colour={colour as any} 
              border={true}
              title={`Large ${colour} with border`}
              description="Alert description text"
            />
          ))}
          
          {/* Large without border */}
          {['default', 'warning', 'light-gray', 'navy', 'error', 'success', 'purple', 'white'].map((colour) => (
            <Alert 
              key={`large-no-border-${colour}`}
              size="large" 
              colour={colour as any} 
              border={false}
              title={`Large ${colour} without border`}
              description="Alert description text"
            />
          ))}
        </div>
      </section>
    </div>
  ),
};

/**
 * Compact view showing one of each size and color
 */
export const CompactOverview: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '24px',
      maxWidth: '800px',
    }}>
      <h2 style={{
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '8px',
        fontFamily: 'Archivo, -apple-system, sans-serif',
      }}>
        Alert Sizes Comparison
      </h2>
      <Alert size="small" colour="default" border={true} />
      <Alert size="default" colour="default" border={true} />
      <Alert size="large" colour="default" border={true} />

      <h2 style={{
        fontSize: '20px',
        fontWeight: '600',
        marginTop: '24px',
        marginBottom: '8px',
        fontFamily: 'Archivo, -apple-system, sans-serif',
      }}>
        Alert Colors Comparison
      </h2>
      <Alert size="default" colour="default" border={true} />
      <Alert size="default" colour="warning" border={true} />
      <Alert size="default" colour="light-gray" border={true} />
      <Alert size="default" colour="navy" border={true} />
      <Alert size="default" colour="error" border={true} />
      <Alert size="default" colour="success" border={true} />
      <Alert size="default" colour="purple" border={true} />
      <Alert size="default" colour="white" border={true} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact overview showing size and color comparisons.',
      },
    },
  },
};
