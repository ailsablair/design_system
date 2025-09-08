import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Atoms/Building Blocks/Table/Overview',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Table Components Overview

This section contains all table-related components and building blocks for the design system.

## Components Included

### 🗂️ Main Table Components
- **FigmaTable**: Complete table implementation matching exact Figma designs
- **Table**: Original table component with basic functionality
- **TableCell**: Individual cell component with multiple variants

### 📊 Table Cell Variants
- **UserCell**: User profile display cells
- **FileCell**: File display cells with icons and metadata
- **PaymentCell**: Payment status and amount cells

### 🎨 Design Showcases
- **FigmaTableVariants**: Complete table layouts from Figma
- **AllTableCellVariants**: All available cell types
- **ComprehensiveTableCells**: Detailed cell showcases
- **NewTableCellVariants**: Latest cell implementations

## Features

### 🎯 Table Functionality
- **Multiple cell types**: title, text, multi-tag, links, rating, group-avatars, progress-bar, button-group
- **Two size variants**: default and small
- **Interactive features**: sorting, selection, pagination
- **Header and footer**: with title, subtitle, count badge, and action buttons
- **Responsive design**: adapts to different screen sizes
- **Accessibility**: full keyboard navigation and screen reader support

### 🎨 Theme Support
- **Blue themes**: Professional blue color schemes
- **Seafoam theme**: Green-tinted theme matching Figma designs
- **Yellow theme**: Bright, energetic yellow accents
- **Black theme**: Dark theme with yellow highlights

### 📱 Responsive Design
- Mobile-optimized layouts
- Touch-friendly interactions
- Adaptive spacing and typography
- Collapsible columns for small screens

## Usage Guidelines

1. **Choose the right component**: Use FigmaTable for new implementations, Table for basic needs
2. **Consider cell types**: Select appropriate cell variants for your data
3. **Plan for responsiveness**: Test table layouts across different screen sizes
4. **Accessibility first**: Ensure proper ARIA labels and keyboard navigation

## File Organization

All table components are organized in this folder with their corresponding CSS files and documentation.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Welcome to the Table Components section
 */
export const Introduction: Story = {
  render: () => (
    <div style={{ 
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'var(--type-typeface-inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
      lineHeight: 1.6
    }}>
      <h1 style={{ 
        fontSize: '2.5rem',
        fontWeight: 700,
        marginBottom: '1rem',
        color: 'var(--neutral-gray-gray-900, #111827)'
      }}>
        📊 Table Components
      </h1>
      
      <div style={{
        background: 'var(--primary-blue-blue-50, #F9F9FE)',
        border: '1px solid var(--primary-blue-blue-200, #C5CAED)',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem'
      }}>
        <h2 style={{ 
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '0.5rem',
          color: 'var(--primary-blue-blue-900, #1A1B3E)'
        }}>
          🎯 Quick Start
        </h2>
        <p style={{ margin: 0, color: 'var(--primary-blue-blue-700, #3A4B99)' }}>
          Navigate through the table components in the sidebar to explore all available options. 
          Start with <strong>FigmaTable</strong> for the most comprehensive implementation.
        </p>
      </div>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: 'var(--base-white, white)',
          border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)',
          borderRadius: '8px',
          padding: '1.5rem'
        }}>
          <h3 style={{ 
            fontSize: '1.125rem',
            fontWeight: 600,
            marginBottom: '0.75rem',
            color: 'var(--neutral-gray-gray-900, #111827)'
          }}>
            🗂️ Main Components
          </h3>
          <ul style={{ 
            listStyle: 'none',
            padding: 0,
            margin: 0,
            color: 'var(--neutral-gray-gray-600, #4B5563)'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>• FigmaTable - Complete implementation</li>
            <li style={{ marginBottom: '0.5rem' }}>• Table - Basic table component</li>
            <li>• TableCell - Individual cell building blocks</li>
          </ul>
        </div>

        <div style={{
          background: 'var(--base-white, white)',
          border: '1px solid var(--neutral-gray-gray-200, #E5E7EB)',
          borderRadius: '8px',
          padding: '1.5rem'
        }}>
          <h3 style={{ 
            fontSize: '1.125rem',
            fontWeight: 600,
            marginBottom: '0.75rem',
            color: 'var(--neutral-gray-gray-900, #111827)'
          }}>
            🎨 Cell Variants
          </h3>
          <ul style={{ 
            listStyle: 'none',
            padding: 0,
            margin: 0,
            color: 'var(--neutral-gray-gray-600, #4B5563)'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>• UserCell - Profile displays</li>
            <li style={{ marginBottom: '0.5rem' }}>• FileCell - File information</li>
            <li>• PaymentCell - Payment data</li>
          </ul>
        </div>
      </div>

      <div style={{
        background: 'var(--primary-seafoam-seafoam-25, #F9FCFA)',
        border: '1px solid var(--primary-seafoam-seafoam-200, #A0D4B8)',
        borderRadius: '8px',
        padding: '1.5rem'
      }}>
        <h3 style={{ 
          fontSize: '1.125rem',
          fontWeight: 600,
          marginBottom: '0.75rem',
          color: 'var(--primary-seafoam-dark-seafoam, #4B6D58)'
        }}>
          ✨ Featured: FigmaTable
        </h3>
        <p style={{ 
          margin: 0,
          color: 'var(--primary-seafoam-extra-dark-seafoam, #384C40)'
        }}>
          Our most comprehensive table component with exact Figma design implementation, 
          multiple themes, responsive design, and full accessibility support.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Introduction to the table components section with navigation guidance and feature highlights.',
      },
    },
  },
};
