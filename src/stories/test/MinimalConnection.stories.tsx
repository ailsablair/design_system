import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Test/Minimal Connection',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Connection Test</h2>
      <p>If you can see this, the preview connection is working!</p>
      <button 
        onClick={() => alert('Interactive elements work!')}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Test Button
      </button>
    </div>
  ),
};
