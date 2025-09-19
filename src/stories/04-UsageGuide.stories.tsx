import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Usage Guide',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Usage Guide

This comprehensive guide helps developers implement the Echo Design System effectively in their projects. Follow these patterns and examples for consistent, accessible, and performant implementations.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const UsageGuide: Story = {
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
        Usage Guide
      </h1>
      
      <p style={{ 
        fontSize: '18px', 
        color: '#666',
        marginBottom: '32px'
      }}>
        This comprehensive guide helps developers implement the Echo Design System effectively in their projects, including the new MUI 6/7 integration for enhanced interactions. Follow these patterns and examples for consistent, accessible, and performant implementations.
      </p>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '24px',
          color: '#1a1a1a' 
        }}>
          🚀 Getting Started
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
              1. Project Setup
            </h3>
            <div style={{ 
              background: '#1f2937',
              color: '#f9fafb',
              padding: '16px',
              borderRadius: '6px',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '13px',
              marginBottom: '12px'
            }}>
              <div># Clone or access the design system</div>
              <div>git clone [repository-url]</div>
              <div>cd design_system</div>
              <div style={{ marginTop: '8px' }}># Install dependencies</div>
              <div>npm install</div>
              <div style={{ marginTop: '8px' }}># Start Storybook for development</div>
              <div>npm run storybook</div>
            </div>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              2. Import Components
            </h3>
            <div style={{ 
              background: '#1f2937',
              color: '#f9fafb',
              padding: '16px',
              borderRadius: '6px',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '13px',
              marginBottom: '12px'
            }}>
              <div>// Import original components</div>
              <div>import &#123; Input, Textarea, Tag &#125; from './components';</div>
              <div style={{ marginTop: '8px' }}>// Import enhanced MUI components</div>
              <div>import &#123; EnhancedButton, EnhancedInput &#125; from './components';</div>
              <div>import &#123; EchoMUIThemeProvider &#125; from './foundations/MUIThemeProvider';</div>
            </div>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              3. Import Design Tokens
            </h3>
            <div style={{ 
              background: '#1f2937',
              color: '#f9fafb',
              padding: '16px',
              borderRadius: '6px',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '13px',
              marginBottom: '12px'
            }}>
              <div>/* Import design tokens in your CSS */</div>
              <div>@import './stories/foundations/tokens.css';</div>
              <div style={{ marginTop: '8px' }}>/* Use tokens in your styles */</div>
              <div>.my-component &#123;</div>
              <div>&nbsp;&nbsp;color: var(--primary-blue-blue);</div>
              <div>&nbsp;&nbsp;padding: var(--spacing-sizing-16px);</div>
              <div>&#125;</div>
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
          🎨 Design Tokens Usage
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
              Primary Colors
            </h3>
            <div style={{ 
              background: '#1f2937',
              color: '#f9fafb',
              padding: '16px',
              borderRadius: '6px',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '13px'
            }}>
              <div>// Use primary colors for brand elements</div>
              <div>&lt;Button style=&#123;&#123; backgroundColor: 'var(--primary-sky-blue-500)' &#125;&#125;&gt;</div>
              <div>&nbsp;&nbsp;Primary Action</div>
              <div>&lt;/Button&gt;</div>
              <div style={{ marginTop: '8px' }}>// Status colors for feedback</div>
              <div>&lt;Alert style=&#123;&#123; borderColor: 'var(--status-green-500)' &#125;&#125;&gt;</div>
              <div>&nbsp;&nbsp;Success message</div>
              <div>&lt;/Alert&gt;</div>
            </div>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #d1fae5',
            borderRadius: '8px',
            background: '#ecfdf5'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Typography Implementation
            </h3>
            <div style={{ 
              background: '#1f2937',
              color: '#f9fafb',
              padding: '16px',
              borderRadius: '6px',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '13px'
            }}>
              <div>/* Headings and labels */</div>
              <div>.heading &#123;</div>
              <div>&nbsp;&nbsp;font-family: var(--type-typeface-archivo);</div>
              <div>&nbsp;&nbsp;font-weight: var(--type-weight-medium);</div>
              <div>&nbsp;&nbsp;font-size: var(--type-archivo-label-lg);</div>
              <div>&#125;</div>
              <div style={{ marginTop: '8px' }}>/* Body text and content */</div>
              <div>.body-text &#123;</div>
              <div>&nbsp;&nbsp;font-family: var(--type-typeface-roboto-flex);</div>
              <div>&nbsp;&nbsp;font-weight: var(--type-weight-regular);</div>
              <div>&#125;</div>
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
          🎯 MUI Integration (v4.0.0+)
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          <div style={{
            padding: '24px',
            border: '1px solid #3b82f6',
            borderRadius: '8px',
            background: '#eff6ff'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Enhanced Components
            </h3>
            <div style={{
              background: '#1f2937',
              color: '#f9fafb',
              padding: '16px',
              borderRadius: '6px',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '13px'
            }}>
              <div>import &#123; EchoMUIThemeProvider &#125; from './foundations/MUIThemeProvider';</div>
              <div>import &#123; EnhancedButton &#125; from './atoms/EnhancedButton';</div>
              <div style={{ marginTop: '8px' }}>&lt;EchoMUIThemeProvider&gt;</div>
              <div>&nbsp;&nbsp;&lt;EnhancedButton</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;type="primary"</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;enhancedInteractions</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;leadingIcon=&#123;&lt;SaveIcon /&gt;&#125;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;tooltip="Save your changes"</div>
              <div>&nbsp;&nbsp;&gt;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;Save Document</div>
              <div>&nbsp;&nbsp;&lt;/EnhancedButton&gt;</div>
              <div>&lt;/EchoMUIThemeProvider&gt;</div>
            </div>
          </div>

          <div style={{
            padding: '24px',
            border: '1px solid #10b981',
            borderRadius: '8px',
            background: '#ecfdf5'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Direct MUI Usage
            </h3>
            <div style={{
              background: '#1f2937',
              color: '#f9fafb',
              padding: '16px',
              borderRadius: '6px',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '13px'
            }}>
              <div>import &#123; Card, CardContent, Button &#125; from '@mui/material';</div>
              <div style={{ marginTop: '8px' }}>// Automatically uses Echo styling via theme</div>
              <div>&lt;Card&gt;</div>
              <div>&nbsp;&nbsp;&lt;CardContent&gt;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Button color="primary"&gt;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MUI Button with Echo styling</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Button&gt;</div>
              <div>&nbsp;&nbsp;&lt;/CardContent&gt;</div>
              <div>&lt;/Card&gt;</div>
            </div>
          </div>

          <div style={{
            padding: '24px',
            border: '1px solid #f59e0b',
            borderRadius: '8px',
            background: '#fffbeb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Progressive Enhancement
            </h3>
            <div style={{ marginBottom: '12px', fontSize: '14px', color: '#666' }}>
              Adopt MUI features gradually while keeping existing components:
            </div>
            <div style={{
              background: '#1f2937',
              color: '#f9fafb',
              padding: '16px',
              borderRadius: '6px',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '13px'
            }}>
              <div>// Existing components work unchanged</div>
              <div>&lt;Button type="primary"&gt;Original&lt;/Button&gt;</div>
              <div style={{ marginTop: '8px' }}>// Enhanced versions available</div>
              <div>&lt;EnhancedButton type="primary" enhancedInteractions&gt;</div>
              <div>&nbsp;&nbsp;Enhanced</div>
              <div>&lt;/EnhancedButton&gt;</div>
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
          🧩 Component Usage Patterns
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
              Input Component
            </h3>
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Basic Implementation</h4>
              <div style={{ 
                background: '#1f2937',
                color: '#f9fafb',
                padding: '16px',
                borderRadius: '6px',
                fontFamily: 'Monaco, Consolas, monospace',
                fontSize: '13px'
              }}>
                <div>&lt;Input</div>
                <div>&nbsp;&nbsp;label="Email Address"</div>
                <div>&nbsp;&nbsp;placeholder="Enter your email"</div>
                <div>&nbsp;&nbsp;size="default"</div>
                <div>&nbsp;&nbsp;state="default"</div>
                <div>/&gt;</div>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Advanced Features</h4>
              <div style={{ 
                background: '#1f2937',
                color: '#f9fafb',
                padding: '16px',
                borderRadius: '6px',
                fontFamily: 'Monaco, Consolas, monospace',
                fontSize: '13px'
              }}>
                <div>&lt;Input</div>
                <div>&nbsp;&nbsp;label="Search"</div>
                <div>&nbsp;&nbsp;variant="tags"</div>
                <div>&nbsp;&nbsp;size="large"</div>
                <div>&nbsp;&nbsp;showLeadingIcon=&#123;true&#125;</div>
                <div>&nbsp;&nbsp;tags=&#123;selectedTags&#125;</div>
                <div>/&gt;</div>
              </div>
            </div>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Textarea Component
            </h3>
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Basic Implementation</h4>
              <div style={{ 
                background: '#1f2937',
                color: '#f9fafb',
                padding: '16px',
                borderRadius: '6px',
                fontFamily: 'Monaco, Consolas, monospace',
                fontSize: '13px'
              }}>
                <div>&lt;Textarea</div>
                <div>&nbsp;&nbsp;label="Description"</div>
                <div>&nbsp;&nbsp;placeholder="Tell us about yourself..."</div>
                <div>&nbsp;&nbsp;rows=&#123;4&#125;</div>
                <div>&nbsp;&nbsp;size="default"</div>
                <div>/&gt;</div>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Enhanced Features</h4>
              <div style={{ 
                background: '#1f2937',
                color: '#f9fafb',
                padding: '16px',
                borderRadius: '6px',
                fontFamily: 'Monaco, Consolas, monospace',
                fontSize: '13px'
              }}>
                <div>&lt;Textarea</div>
                <div>&nbsp;&nbsp;label="Feedback"</div>
                <div>&nbsp;&nbsp;size="large"</div>
                <div>&nbsp;&nbsp;minHeight=&#123;120&#125;</div>
                <div>&nbsp;&nbsp;maxHeight=&#123;300&#125;</div>
                <div>&nbsp;&nbsp;resize="vertical"</div>
                <div>/&gt;</div>
              </div>
            </div>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Tag Component
            </h3>
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Basic Tags</h4>
              <div style={{ 
                background: '#1f2937',
                color: '#f9fafb',
                padding: '16px',
                borderRadius: '6px',
                fontFamily: 'Monaco, Consolas, monospace',
                fontSize: '13px'
              }}>
                <div>&lt;Tag</div>
                <div>&nbsp;&nbsp;label="React"</div>
                <div>&nbsp;&nbsp;variant="primary"</div>
                <div>&nbsp;&nbsp;size="default"</div>
                <div>/&gt;</div>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Removable Tag</h4>
              <div style={{ 
                background: '#1f2937',
                color: '#f9fafb',
                padding: '16px',
                borderRadius: '6px',
                fontFamily: 'Monaco, Consolas, monospace',
                fontSize: '13px'
              }}>
                <div>&lt;Tag</div>
                <div>&nbsp;&nbsp;label="JavaScript"</div>
                <div>&nbsp;&nbsp;variant="light-gray"</div>
                <div>&nbsp;&nbsp;showClose=&#123;true&#125;</div>
                <div>&nbsp;&nbsp;onRemove=&#123;() =&gt; handleRemove()&#125;</div>
                <div>/&gt;</div>
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
          📱 Responsive Implementation
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
              Breakpoint Handling
            </h3>
            <div style={{ 
              background: '#1f2937',
              color: '#f9fafb',
              padding: '16px',
              borderRadius: '6px',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '13px'
            }}>
              <div>/* Mobile-first responsive design */</div>
              <div>.form-container &#123;</div>
              <div>&nbsp;&nbsp;padding: var(--spacing-sizing-16px);</div>
              <div>&#125;</div>
              <div style={{ marginTop: '8px' }}>@media (min-width: 768px) &#123;</div>
              <div>&nbsp;&nbsp;.form-container &#123;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;padding: var(--spacing-sizing-24px);</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;max-width: 600px;</div>
              <div>&nbsp;&nbsp;&#125;</div>
              <div>&#125;</div>
            </div>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Component Size Adaptation
            </h3>
            <div style={{ 
              background: '#1f2937',
              color: '#f9fafb',
              padding: '16px',
              borderRadius: '6px',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '13px'
            }}>
              <div>const useResponsiveSize = () =&gt; &#123;</div>
              <div>&nbsp;&nbsp;const [size, setSize] = useState('default');</div>
              <div style={{ marginTop: '8px' }}>&nbsp;&nbsp;useEffect(() =&gt; &#123;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;const updateSize = () =&gt; &#123;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (window.innerWidth &lt; 768) &#123;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setSize('small');</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&#125;;</div>
              <div>&nbsp;&nbsp;&#125;, []);</div>
              <div>&#125;;</div>
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
          ⚡ Performance Best Practices
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px'
        }}>
          <div style={{ 
            padding: '24px', 
            border: '1px solid #fef3c7',
            borderRadius: '8px',
            background: '#fffbeb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Efficient Rendering
            </h3>
            <div style={{ 
              background: '#1f2937',
              color: '#f9fafb',
              padding: '16px',
              borderRadius: '6px',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '13px'
            }}>
              <div>// Use React.memo for components</div>
              <div>const OptimizedTag = React.memo((&#123; label, onRemove &#125;) =&gt; &#123;</div>
              <div>&nbsp;&nbsp;return (</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Tag</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label=&#123;label&#125;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onRemove=&#123;onRemove&#125;</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;variant="light-gray"</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;/&gt;</div>
              <div>&nbsp;&nbsp;);</div>
              <div>&#125;);</div>
            </div>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #fef3c7',
            borderRadius: '8px',
            background: '#fffbeb'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              CSS Performance
            </h3>
            <div style={{ 
              background: '#1f2937',
              color: '#f9fafb',
              padding: '16px',
              borderRadius: '6px',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '13px'
            }}>
              <div>/* Use CSS containment for better performance */</div>
              <div>.component-container &#123;</div>
              <div>&nbsp;&nbsp;contain: layout style;</div>
              <div>&nbsp;&nbsp;will-change: auto;</div>
              <div>&#125;</div>
              <div style={{ marginTop: '8px' }}>/* Hardware-accelerated animations */</div>
              <div>.animated-element &#123;</div>
              <div>&nbsp;&nbsp;transform: translateZ(0);</div>
              <div>&nbsp;&nbsp;backface-visibility: hidden;</div>
              <div>&#125;</div>
            </div>
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
          🧪 Testing Recommendations
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px'
        }}>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Unit Testing</h4>
            <div style={{ 
              background: '#1f2937',
              color: '#f9fafb',
              padding: '16px',
              borderRadius: '6px',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '13px'
            }}>
              <div>import &#123; render, screen &#125; from '@testing-library/react';</div>
              <div style={{ marginTop: '8px' }}>test('displays error state correctly', () =&gt; &#123;</div>
              <div>&nbsp;&nbsp;render(&lt;Input label="Email" state="error" /&gt;);</div>
              <div>&nbsp;&nbsp;expect(screen.getByLabelText('Email')).toHaveClass('error');</div>
              <div>&#125;);</div>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Accessibility Testing</h4>
            <div style={{ 
              background: '#1f2937',
              color: '#f9fafb',
              padding: '16px',
              borderRadius: '6px',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '13px'
            }}>
              <div>import &#123; axe, toHaveNoViolations &#125; from 'jest-axe';</div>
              <div style={{ marginTop: '8px' }}>test('component is accessible', async () =&gt; &#123;</div>
              <div>&nbsp;&nbsp;const &#123; container &#125; = render(&lt;Input label="Test" /&gt;);</div>
              <div>&nbsp;&nbsp;const results = await axe(container);</div>
              <div>&nbsp;&nbsp;expect(results).toHaveNoViolations();</div>
              <div>&#125;);</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive usage guide for implementing Echo Design System components with patterns, examples, and best practices.',
      },
    },
  },
};
