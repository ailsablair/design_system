import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Overview',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Echo Design System Overview

The Echo Design System is a comprehensive, scalable design foundation built with React, TypeScript, and modern CSS practices. Recently enhanced with improved design token implementation and component consistency.

## 🧩 Components

### Recently Enhanced Components
- **Stepper**: Fully migrated to design tokens, improved spacing consistency
- **Toggle**: Complete tokenization with proper track and thumb sizing
- **Card**: Enhanced with tokenized dimensions and display typography
- **Avatar**: Consistent sizing tokens across all variants
- **DataTable**: Improved shadow system and visual consistency

### Performance Optimizations
- **Memory Management**: 8GB heap allocation for large builds
- **Bundle Splitting**: Optimized chunk sizes
- **ResizeObserver**: Error suppression implemented
- **CSS Containment**: Enhanced rendering performance
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Overview: Story = {
  render: () => (
    <>
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-10000px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
        onFocus={(e) => {
          e.target.style.left = '0';
          e.target.style.width = 'auto';
          e.target.style.height = 'auto';
          e.target.style.padding = '8px';
          e.target.style.background = 'var(--primary-blue-blue)';
          e.target.style.color = 'white';
          e.target.style.textDecoration = 'none';
          e.target.style.borderRadius = '4px';
        }}
        onBlur={(e) => {
          e.target.style.left = '-10000px';
          e.target.style.width = '1px';
          e.target.style.height = '1px';
          e.target.style.padding = '0';
        }}
      >
        Skip to main content
      </a>
      <main
        id="main-content"
        style={{
          padding: '40px',
          fontFamily: 'var(--font-family-base)',
          maxWidth: '1200px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}
      >
      <h1 style={{ 
        fontSize: 'var(--type-size-4xl)', 
        fontWeight: 'var(--type-weight-bold)', 
        marginBottom: 'var(--spacing-sizing-24px)',
        color: 'var(--base-black)',
        fontFamily: 'var(--font-family-heading)'
      }}>
        Echo Design System
      </h1>
      
      <p style={{ 
        fontSize: 'var(--type-size-lg)', 
        color: 'var(--neutral-gray-gray-600)',
        marginBottom: 'var(--spacing-sizing-32px)'
      }}>
        A comprehensive, scalable design foundation built with React, TypeScript, and modern CSS practices. 
        Recently enhanced with improved design token implementation and component consistency.
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--spacing-sizing-24px)',
        marginBottom: 'var(--spacing-sizing-40px)'
      }}>
        <div style={{ 
          padding: 'var(--spacing-sizing-24px)', 
          border: '1px solid var(--neutral-gray-gray-200)',
          borderRadius: 'var(--spacing-radius-8px)',
          background: 'var(--neutral-gray-gray-50)'
        }}>
          <h3 style={{ 
            fontSize: 'var(--type-size-xl)', 
            fontWeight: 'var(--type-weight-semibold)', 
            marginBottom: 'var(--spacing-sizing-16px)',
            fontFamily: 'var(--font-family-heading)'
          }}>
            🧩 Components
          </h3>
          <ul style={{ margin: 0, paddingLeft: 'var(--spacing-sizing-20px)' }}>
            <li><strong>Stepper</strong>: ✅ Fully tokenized sizing and spacing</li>
            <li><strong>Toggle</strong>: ✅ Complete design token migration</li>
            <li><strong>Card</strong>: ✅ Enhanced with display typography tokens</li>
            <li><strong>Avatar</strong>: ✅ Consistent sizing across all variants</li>
            <li><strong>DataTable</strong>: ✅ Improved shadows and consistency</li>
          </ul>
        </div>

        <div style={{ 
          padding: 'var(--spacing-sizing-24px)', 
          border: '1px solid var(--neutral-gray-gray-200)',
          borderRadius: 'var(--spacing-radius-8px)',
          background: 'var(--neutral-gray-gray-50)'
        }}>
          <h3 style={{ 
            fontSize: 'var(--type-size-xl)', 
            fontWeight: 'var(--type-weight-semibold)', 
            marginBottom: 'var(--spacing-sizing-16px)',
            fontFamily: 'var(--font-family-heading)'
          }}>
            🎨 Design Tokens
          </h3>
          <ul style={{ margin: 0, paddingLeft: 'var(--spacing-sizing-20px)' }}>
            <li><strong>295+ Design Tokens</strong>: Comprehensive token system</li>
            <li><strong>Component Sizing</strong>: Avatar, toggle dimensions</li>
            <li><strong>Display Typography</strong>: Large statistical values (48px-82px)</li>
            <li><strong>Font Aliases</strong>: Consistent typography references</li>
            <li><strong>Gradient System</strong>: Tokenized placeholder backgrounds</li>
            <li><strong>Shadow Scale</strong>: Standardized elevation system</li>
          </ul>
        </div>

        <div style={{ 
          padding: 'var(--spacing-sizing-24px)', 
          border: '1px solid var(--neutral-gray-gray-200)',
          borderRadius: 'var(--spacing-radius-8px)',
          background: 'var(--neutral-gray-gray-50)'
        }}>
          <h3 style={{ 
            fontSize: 'var(--type-size-xl)', 
            fontWeight: 'var(--type-weight-semibold)', 
            marginBottom: 'var(--spacing-sizing-16px)',
            fontFamily: 'var(--font-family-heading)'
          }}>
            ⚡ Performance
          </h3>
          <ul style={{ margin: 0, paddingLeft: 'var(--spacing-sizing-20px)' }}>
            <li><strong>Memory Optimized</strong>: 8GB heap builds</li>
            <li><strong>CSS Containment</strong>: Enhanced rendering performance</li>
            <li><strong>Hardware Acceleration</strong>: Optimized transforms</li>
            <li><strong>Error Handling</strong>: ResizeObserver fixes</li>
            <li><strong>Bundle Splitting</strong>: Efficient loading</li>
            <li><strong>Build Optimization</strong>: Fast CI/CD pipeline</li>
          </ul>
        </div>

        <div style={{ 
          padding: 'var(--spacing-sizing-24px)', 
          border: '1px solid var(--neutral-gray-gray-200)',
          borderRadius: 'var(--spacing-radius-8px)',
          background: 'var(--neutral-gray-gray-50)'
        }}>
          <h3 style={{ 
            fontSize: 'var(--type-size-xl)', 
            fontWeight: 'var(--type-weight-semibold)', 
            marginBottom: 'var(--spacing-sizing-16px)',
            fontFamily: 'var(--font-family-heading)'
          }}>
            ♿ Accessibility
          </h3>
          <ul style={{ margin: 0, paddingLeft: 'var(--spacing-sizing-20px)' }}>
            <li><strong>WCAG Compliance</strong>: AA-level contrast ratios</li>
            <li><strong>Keyboard Navigation</strong>: Full support across components</li>
            <li><strong>Screen Readers</strong>: Semantic HTML structure</li>
            <li><strong>Focus Management</strong>: Clear visual indicators</li>
            <li><strong>Touch Targets</strong>: Minimum 44px sizing</li>
            <li><strong>Reduced Motion</strong>: Respects user preferences</li>
          </ul>
        </div>
      </div>

      <div style={{ 
        padding: 'var(--spacing-sizing-24px)', 
        background: 'var(--primary-blue-blue-50)',
        border: '1px solid var(--primary-blue-blue-200)',
        borderRadius: 'var(--spacing-radius-8px)',
        marginBottom: 'var(--spacing-sizing-40px)'
      }}>
        <h3 style={{ 
          fontSize: 'var(--type-size-xl)', 
          fontWeight: 'var(--type-weight-semibold)', 
          marginBottom: 'var(--spacing-sizing-16px)',
          fontFamily: 'var(--font-family-heading)'
        }}>
          🆕 Recent Improvements
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 'var(--spacing-sizing-16px)'
        }}>
          <div>
            <h4 style={{
              fontSize: 'var(--type-size-base)',
              fontWeight: 'var(--type-weight-semibold)',
              marginBottom: 'var(--spacing-sizing-8px)'
            }}>
              Component Token Migration
            </h4>
            <div style={{ fontSize: 'var(--type-size-sm)', color: 'var(--neutral-gray-gray-700)' }}>
              Stepper, Toggle, Card, and Avatar components now use design tokens exclusively,
              eliminating hardcoded values and improving maintainability.
            </div>
          </div>
          <div>
            <h4 style={{ 
              fontSize: 'var(--type-size-base)', 
              fontWeight: 'var(--type-weight-semibold)', 
              marginBottom: 'var(--spacing-sizing-8px)' 
            }}>
              Enhanced Typography System
            </h4>
            <div style={{ fontSize: 'var(--type-size-sm)', color: 'var(--neutral-gray-gray-700)' }}>
              Added display typography tokens for large statistical values and font family aliases 
              for consistent typography usage across components.
            </div>
          </div>
          <div>
            <h4 style={{
              fontSize: 'var(--type-size-base)',
              fontWeight: 'var(--type-weight-semibold)',
              marginBottom: 'var(--spacing-sizing-8px)'
            }}>
              Component Sizing Standards
            </h4>
            <div style={{ fontSize: 'var(--type-size-sm)', color: 'var(--neutral-gray-gray-700)' }}>
              Standardized avatar sizes and toggle dimensions with
              dedicated component tokens for consistent UI scaling.
            </div>
          </div>
          <div>
            <h4 style={{ 
              fontSize: 'var(--type-size-base)', 
              fontWeight: 'var(--type-weight-semibold)', 
              marginBottom: 'var(--spacing-sizing-8px)' 
            }}>
              Visual Consistency Improvements
            </h4>
            <div style={{ fontSize: 'var(--type-size-sm)', color: 'var(--neutral-gray-gray-700)' }}>
              Replaced hardcoded shadows, gradients, and spacing values with tokenized 
              alternatives for better Figma design alignment.
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        padding: 'var(--spacing-sizing-24px)', 
        background: 'var(--primary-seafoam-50)',
        border: '1px solid var(--primary-seafoam-200)',
        borderRadius: 'var(--spacing-radius-8px)'
      }}>
        <h3 style={{ 
          fontSize: 'var(--type-size-xl)', 
          fontWeight: 'var(--type-weight-semibold)', 
          marginBottom: 'var(--spacing-sizing-16px)',
          fontFamily: 'var(--font-family-heading)'
        }}>
          🚀 Getting Started
        </h3>
        <pre
          style={{
            background: 'var(--neutral-gray-gray-800)',
            color: 'var(--base-white)',
            padding: 'var(--spacing-sizing-16px)',
            borderRadius: 'var(--spacing-radius-4px)',
            fontFamily: 'Monaco, Consolas, monospace',
            fontSize: 'var(--type-size-sm)',
            overflow: 'auto',
            margin: 0
          }}
          role="region"
          aria-label="Installation and setup commands"
        ><code>npm install
npm run storybook

<span style={{ color: 'var(--neutral-gray-gray-400)' }}># Import design tokens and MUI theme:</span>
@import './stories/foundations/tokens.css';

<span style={{ color: 'var(--neutral-gray-gray-400)' }}># Optimized builds:</span>
npm run build-storybook:fast
npm run build-storybook:memory</code></pre>

        <div style={{ 
          marginTop: 'var(--spacing-sizing-16px)', 
          padding: 'var(--spacing-sizing-16px)',
          background: 'var(--base-white)',
          borderRadius: 'var(--spacing-radius-4px)',
          border: '1px solid var(--primary-seafoam-200)'
        }}>
          <h4 style={{ 
            fontSize: 'var(--type-size-base)', 
            fontWeight: 'var(--type-weight-semibold)', 
            marginBottom: 'var(--spacing-sizing-8px)',
            fontFamily: 'var(--font-family-heading)'
          }}>
            Design Token Usage
          </h4>
          <pre
            style={{
              background: 'var(--neutral-gray-gray-800)',
              color: 'var(--base-white)',
              padding: 'var(--spacing-sizing-12px)',
              borderRadius: 'var(--spacing-radius-4px)',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: 'var(--type-size-sm)',
              margin: 0
            }}
            role="region"
            aria-label="CSS design token usage example"
          ><code><span style={{ color: 'var(--neutral-gray-gray-400)' }}>/* Traditional token usage */</span>
.my-component {'{'}
  color: var(--primary-blue-blue);
  padding: var(--spacing-sizing-16px);
{'}'}</code></pre>
        </div>
      </div>
      </main>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete overview of the Echo Design System with recent enhancements, improved design token implementation, and component consistency improvements.',
      },
    },
  },
};
