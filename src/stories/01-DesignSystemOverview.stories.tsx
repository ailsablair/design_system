import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Overview',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Echo Design System Overview

The Echo Design System is a comprehensive, scalable design foundation built with React, TypeScript, and modern CSS practices.

## 🧩 Components

### AccordionHeader
- **72 Complete Variants**: All Figma design variations implemented
- **Size Options**: Small (18px), Default (19px), Large (24px) typography
- **Icon Styles**: Plus/minus and chevron expand/collapse icons
- **Interactive States**: Default, hover, selected with proper color changes

### Performance Optimizations
- **Memory Management**: 8GB heap allocation for large builds
- **Bundle Splitting**: Optimized chunk sizes
- **ResizeObserver**: Error suppression implemented
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Overview: Story = {
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
        Echo Design System
      </h1>
      
      <p style={{ 
        fontSize: '18px', 
        color: '#666',
        marginBottom: '32px'
      }}>
        A comprehensive, scalable design foundation built with React, TypeScript, and modern CSS practices.
      </p>

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
            🧩 Components
          </h3>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li><strong>AccordionHeader</strong>: 72 Figma variants implemented</li>
            <li><strong>Input & Textarea</strong>: Comprehensive form components</li>
            <li><strong>Tag</strong>: Interactive tag components</li>
            <li><strong>Avatar</strong>: User profile components</li>
          </ul>
        </div>

        <div style={{ 
          padding: '24px', 
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          background: '#f9fafb'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
            🎨 Design Tokens
          </h3>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li><strong>67 Color Tokens</strong>: Professional color scales</li>
            <li><strong>Typography</strong>: Archivo and Roboto Flex fonts</li>
            <li><strong>Spacing</strong>: 8px grid-based system</li>
            <li><strong>Shadows</strong>: Standardized elevation</li>
          </ul>
        </div>

        <div style={{ 
          padding: '24px', 
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          background: '#f9fafb'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
            ⚡ Performance
          </h3>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li><strong>Memory Optimized</strong>: 8GB heap builds</li>
            <li><strong>Bundle Splitting</strong>: Efficient loading</li>
            <li><strong>Error Handling</strong>: ResizeObserver fixes</li>
            <li><strong>Build Optimization</strong>: Fast CI/CD</li>
          </ul>
        </div>

        <div style={{ 
          padding: '24px', 
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          background: '#f9fafb'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
            ♿ Accessibility
          </h3>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li><strong>WCAG Compliance</strong>: AA-level contrast</li>
            <li><strong>Keyboard Navigation</strong>: Full support</li>
            <li><strong>Screen Readers</strong>: Semantic HTML</li>
            <li><strong>Focus Management</strong>: Clear indicators</li>
          </ul>
        </div>
      </div>

      <div style={{ 
        padding: '24px', 
        background: '#eff6ff',
        border: '1px solid #bfdbfe',
        borderRadius: '8px'
      }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
          🚀 Getting Started
        </h3>
        <div style={{ 
          background: '#1f2937',
          color: '#f9fafb',
          padding: '16px',
          borderRadius: '4px',
          fontFamily: 'Monaco, Consolas, monospace',
          fontSize: '14px',
          overflow: 'auto'
        }}>
          <div>npm install</div>
          <div>npm run storybook</div>
          <div style={{ marginTop: '8px', color: '#9ca3af' }}># Optimized builds:</div>
          <div>npm run build-storybook:fast</div>
          <div>npm run build-storybook:memory</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete overview of the Echo Design System with all features and optimizations.',
      },
    },
  },
};
