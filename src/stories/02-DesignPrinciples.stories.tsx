import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Design Principles',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Design Principles & Guidelines

The Echo Design System is built on foundational principles that guide every design and development decision. These principles ensure consistency, accessibility, and scalability across all products and platforms.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const DesignPrinciples: Story = {
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
        Design Principles & Guidelines
      </h1>
      
      <p style={{ 
        fontSize: '18px', 
        color: '#666',
        marginBottom: '32px'
      }}>
        The Echo Design System is built on foundational principles that guide every design and development decision. These principles ensure consistency, accessibility, and scalability across all products and platforms.
      </p>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: '600', 
          marginBottom: '24px',
          color: '#1a1a1a' 
        }}>
          🎯 Core Principles
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
              1. Consistency
            </h3>
            <p style={{ marginBottom: '12px', fontWeight: '600' }}>
              Every interaction should feel familiar and predictable.
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.5' }}>
              <li><strong>Visual Consistency</strong>: Use the same colors, typography, and spacing patterns across all components</li>
              <li><strong>Behavioral Consistency</strong>: Similar actions should work the same way everywhere</li>
              <li><strong>Terminology</strong>: Use consistent language and labels throughout the interface</li>
            </ul>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
              2. Accessibility
            </h3>
            <p style={{ marginBottom: '12px', fontWeight: '600' }}>
              Design for everyone, regardless of ability or technology.
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.5' }}>
              <li><strong>WCAG 2.1 AA Compliance</strong>: Meet or exceed accessibility standards</li>
              <li><strong>Keyboard Navigation</strong>: Full functionality without a mouse</li>
              <li><strong>Screen Reader Support</strong>: Proper semantic HTML and ARIA attributes</li>
              <li><strong>Color Contrast</strong>: Minimum 4.5:1 contrast ratio for text</li>
            </ul>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
              3. Performance
            </h3>
            <p style={{ marginBottom: '12px', fontWeight: '600' }}>
              Fast, efficient, and responsive at any scale.
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.5' }}>
              <li><strong>Minimal Bundle Size</strong>: Optimize for the smallest possible footprint</li>
              <li><strong>Lazy Loading</strong>: Load components and assets only when needed</li>
              <li><strong>Hardware Acceleration</strong>: Use GPU acceleration for smooth animations</li>
              <li><strong>Efficient Rendering</strong>: Minimize layout thrashing and repaints</li>
            </ul>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
              4. Scalability
            </h3>
            <p style={{ marginBottom: '12px', fontWeight: '600' }}>
              Built to grow with your product and team.
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.5' }}>
              <li><strong>Token-Based Architecture</strong>: Change themes and styles through design tokens</li>
              <li><strong>Component Composition</strong>: Build complex interfaces from simple, reusable parts</li>
              <li><strong>Documentation-First</strong>: Every component is documented before it's used</li>
              <li><strong>Version Control</strong>: Clear versioning and migration paths</li>
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
          🎨 Visual Design Guidelines
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
              Color Usage
            </h3>
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Primary Colors</h4>
              <p style={{ fontSize: '14px', marginBottom: '8px' }}>Use primary colors sparingly for the most important actions and elements:</p>
              <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
                <li><strong>Sky Blue (#0BA7EA)</strong>: Primary actions, links, focus states</li>
                <li><strong>Blue (#2F42BD)</strong>: Brand elements, secondary actions</li>
                <li><strong>Yellow (#EAB308)</strong>: Warnings, highlights, attention-getting elements</li>
                <li><strong>Seafoam Green (#10B981)</strong>: Success states, positive actions</li>
              </ul>
            </div>
          </div>

          <div style={{ 
            padding: '24px', 
            border: '1px solid #d1fae5',
            borderRadius: '8px',
            background: '#ecfdf5'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Typography
            </h3>
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Font Hierarchy</h4>
              <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
                <li><strong>Archivo</strong>: Headings, labels, and UI text (medium weight)</li>
                <li><strong>Roboto Flex</strong>: Body text, descriptions, content (regular weight)</li>
              </ul>
              <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', marginTop: '16px' }}>Size Scale</h4>
              <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
                <li><strong>Small (14px)</strong>: Captions, footnotes, secondary information</li>
                <li><strong>Default (16px)</strong>: Body text, form inputs, primary content</li>
                <li><strong>Large (18px)</strong>: Subheadings, emphasized content</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        padding: '24px', 
        background: '#f3f4f6',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        marginBottom: '40px'
      }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
          📱 Responsive Design
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px'
        }}>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Breakpoint Strategy</h4>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li><strong>Mobile (320px+)</strong>: Core functionality</li>
              <li><strong>Tablet (768px+)</strong>: Enhanced layouts</li>
              <li><strong>Desktop (1024px+)</strong>: Full feature set</li>
              <li><strong>Large (1440px+)</strong>: Wide layouts</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Content Adaptation</h4>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li><strong>Progressive Enhancement</strong>: Add features as screen size increases</li>
              <li><strong>Content Prioritization</strong>: Most important content visible on smallest screens</li>
              <li><strong>Touch-Friendly</strong>: Minimum 44px touch targets on mobile</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ 
        padding: '24px', 
        background: '#fef7cd',
        border: '1px solid #fbbf24',
        borderRadius: '8px'
      }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
          🚀 Implementation Checklist
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>For Designers</h4>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li>Use design tokens for all color and spacing values</li>
              <li>Test designs at multiple screen sizes</li>
              <li>Verify color contrast ratios</li>
              <li>Consider keyboard navigation in layouts</li>
              <li>Document design decisions and rationale</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>For Developers</h4>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li>Use semantic HTML elements</li>
              <li>Implement proper ARIA attributes</li>
              <li>Test with keyboard navigation</li>
              <li>Verify screen reader compatibility</li>
              <li>Add comprehensive prop documentation</li>
              <li>Include visual regression tests</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>For Product Teams</h4>
            <ul style={{ fontSize: '14px', margin: 0, paddingLeft: '20px' }}>
              <li>Validate accessibility requirements</li>
              <li>Test on real devices and networks</li>
              <li>Gather user feedback on interfaces</li>
              <li>Monitor performance metrics</li>
              <li>Plan for internationalization needs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive design principles and guidelines for the Echo Design System, covering consistency, accessibility, performance, and scalability.',
      },
    },
  },
};
