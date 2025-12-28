import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Visual Design Guidelines',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Visual Design Guidelines

The Echo Design System is built on foundational visual patterns that guide every design and development decision. These guidelines ensure consistency, accessibility, and scalability across all products and platforms.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const VisualDesignGuidelines: Story = {
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
        marginBottom: '40px',
        color: '#1a1a1a'
      }}>
        🎨 Visual Design Guidelines
      </h1>

      <div style={{ marginBottom: '40px' }}>
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
        story: 'Visual design guidelines for the Echo Design System, covering color usage, typography, and responsive design.',
      },
    },
  },
};
