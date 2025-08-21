import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';

const meta: Meta = {
  title: 'Chromatic/Debug',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Chromatic Debug Story

This story helps debug Chromatic deployment issues by testing common error scenarios
and providing diagnostic information about the component environment.

## Purpose
- Test component rendering in Chromatic environment
- Identify potential error sources
- Validate that all dependencies are properly loaded
- Check for environmental differences

If this story renders successfully in Chromatic, the basic setup is working correctly.
        `
      }
    },
    // Make sure this story is included in Chromatic
    chromatic: { disable: false }
  }
};

export default meta;
type Story = StoryObj;

/**
 * Basic rendering test to verify Chromatic environment
 */
export const BasicRenderTest: Story = {
  render: () => {
    const [timestamp, setTimestamp] = useState(new Date().toISOString());
    
    useEffect(() => {
      // Test if useEffect works in Chromatic
      const timer = setTimeout(() => {
        setTimestamp(new Date().toISOString());
      }, 100);
      
      return () => clearTimeout(timer);
    }, []);
    
    return (
      <div style={{ 
        padding: '24px', 
        fontFamily: 'var(--type-typeface-archivo, Arial, sans-serif)',
        border: '2px solid var(--status-green, #70CC67)',
        borderRadius: '8px',
        backgroundColor: 'var(--status-green-light, #f0fdf4)'
      }}>
        <h2 style={{ 
          color: 'var(--status-green, #70CC67)', 
          marginBottom: '16px',
          fontSize: '24px'
        }}>
          ✅ Chromatic Debug - Basic Test
        </h2>
        
        <div style={{ marginBottom: '16px' }}>
          <strong>Environment Check:</strong>
          <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
            <li>React rendering: ✅ Working</li>
            <li>CSS variables: {getComputedStyle(document.documentElement).getPropertyValue('--status-green') ? '✅' : '❌'} Status</li>
            <li>UseEffect: ✅ Working</li>
            <li>Timestamp: {timestamp}</li>
          </ul>
        </div>
        
        <div style={{ 
          padding: '12px', 
          backgroundColor: 'rgba(112, 204, 103, 0.1)',
          borderRadius: '4px',
          fontSize: '14px'
        }}>
          <strong>Status:</strong> If you can see this message with green styling, 
          the basic Chromatic environment is working correctly.
        </div>
      </div>
    );
  }
};

/**
 * Test common error scenarios that might cause Chromatic failures
 */
export const ErrorScenarioTest: Story = {
  render: () => {
    return (
      <div style={{ padding: '24px' }}>
        <h2 style={{ marginBottom: '16px' }}>Error Scenario Tests</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Test 1: CSS Variable Access */}
          <div style={{ 
            padding: '12px', 
            border: '1px solid var(--neutral-gray-gray-300, #d1d5db)',
            borderRadius: '4px'
          }}>
            <h3>CSS Variables Test</h3>
            <p>Primary color: <span style={{ color: 'var(--primary-blue-blue, #2563eb)' }}>Should be blue</span></p>
            <p>Text color: <span style={{ color: 'var(--base-black, #000000)' }}>Should be black</span></p>
          </div>
          
          {/* Test 2: Font Loading */}
          <div style={{ 
            padding: '12px', 
            border: '1px solid var(--neutral-gray-gray-300, #d1d5db)',
            borderRadius: '4px',
            fontFamily: 'var(--type-typeface-archivo, Arial, sans-serif)'
          }}>
            <h3>Font Loading Test</h3>
            <p>This text should use Archivo font if loaded properly.</p>
          </div>
          
          {/* Test 3: Component Dependencies */}
          <div style={{ 
            padding: '12px', 
            border: '1px solid var(--neutral-gray-gray-300, #d1d5db)',
            borderRadius: '4px'
          }}>
            <h3>Component Dependencies</h3>
            <p>React version: {React.version}</p>
            <p>Environment: {typeof window !== 'undefined' ? 'Browser' : 'Server'}</p>
          </div>
        </div>
      </div>
    );
  }
};

/**
 * Test story that intentionally uses all major design tokens
 */
export const DesignTokenTest: Story = {
  render: () => {
    const tokens = [
      { name: '--primary-blue-blue', value: 'var(--primary-blue-blue)' },
      { name: '--neutral-gray-gray-700', value: 'var(--neutral-gray-gray-700)' },
      { name: '--status-green', value: 'var(--status-green)' },
      { name: '--status-red', value: 'var(--status-red)' },
      { name: '--base-white', value: 'var(--base-white)' },
      { name: '--base-black', value: 'var(--base-black)' }
    ];
    
    return (
      <div style={{ padding: '24px' }}>
        <h2 style={{ marginBottom: '16px' }}>Design Token Validation</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px'
        }}>
          {tokens.map((token) => (
            <div 
              key={token.name}
              style={{ 
                padding: '12px',
                border: '1px solid var(--neutral-gray-gray-300)',
                borderRadius: '4px',
                backgroundColor: 'var(--neutral-gray-gray-50)'
              }}
            >
              <div style={{ 
                width: '100%',
                height: '24px',
                backgroundColor: token.value,
                marginBottom: '8px',
                border: '1px solid var(--neutral-gray-gray-300)'
              }} />
              <div style={{ fontSize: '12px', fontFamily: 'monospace' }}>
                {token.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

/**
 * Simple story that should never fail - minimal dependencies
 */
export const MinimalTest: Story = {
  render: () => (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center',
      border: '2px solid #00ff00',
      backgroundColor: '#f0fff0'
    }}>
      <h1 style={{ color: '#008000' }}>✅ Minimal Test Success</h1>
      <p>If you see this, basic rendering works in Chromatic.</p>
    </div>
  )
};
