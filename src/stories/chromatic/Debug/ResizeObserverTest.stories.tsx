import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../atoms/Avatar';
import { useState, useEffect } from 'react';
import { testResizeObserverErrorHandling, checkResizeObserverErrorHandling } from '../../../utils/resizeObserverErrorTest';

const meta: Meta = {
  title: 'Chromatic/Debug/ResizeObserver Test',
  parameters: {
    layout: 'padded',
    // Disable in Chromatic since this has animated content and timers
    chromatic: { disable: true },
    docs: {
      description: {
        component: `
# ResizeObserver Error Testing

This story tests that ResizeObserver errors are properly handled and suppressed.
The enhanced error handling system catches multiple error patterns and timing scenarios.

## Enhanced Error Handling Features
- **Multiple Pattern Detection**: Catches various ResizeObserver error message formats
- **Early Initialization**: Error handler runs immediately when modules load
- **Animation Frame Protection**: Catches errors in requestAnimationFrame callbacks
- **React StrictMode Compatibility**: Works with React's double-rendering in development

## Testing Instructions
1. Open the browser console
2. Click the "Test ResizeObserver Error Handling" button
3. Hover over the avatars rapidly
4. Resize the browser window
5. Check that no ResizeObserver errors appear in console

Any ResizeObserver errors should be automatically suppressed by our enhanced error handler.
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj;

/**
 * Test ResizeObserver error handling with rapid hover interactions
 */
export const RapidHoverTest: Story = {
  render: () => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCount(c => c + 1);
      }, 100);
      
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '24px', 
        padding: '24px' 
      }}>
        <div>
          <h3 style={{ marginBottom: '16px' }}>
            ResizeObserver Error Handling Test (Count: {count})
          </h3>
          <p style={{ marginBottom: '16px', color: 'var(--neutral-gray-gray-600)' }}>
            Hover rapidly over these components. Check console for ResizeObserver errors - they should be suppressed.
          </p>
          <div style={{ marginBottom: '24px' }}>
            <button
              onClick={() => {
                const isHandlerActive = checkResizeObserverErrorHandling();
                console.log(`🔧 ResizeObserver error handler active: ${isHandlerActive}`);
                testResizeObserverErrorHandling();
              }}
              style={{
                padding: '8px 16px',
                backgroundColor: '#0BA7EA',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              🧪 Test ResizeObserver Error Handling
            </button>
            <p style={{ fontSize: '12px', color: 'var(--neutral-gray-gray-500)', marginTop: '8px' }}>
              Click to deliberately trigger ResizeObserver errors. They should be suppressed if the handler is working.
            </p>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {Array.from({ length: 10 }, (_, i) => (
            <Avatar
              key={i}
              size="default"
              type="profile-photo"
              src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
              statusIcon={{ status: 'online', visible: true }}
              onClick={() => console.log(`Avatar ${i} clicked`)}
            />
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {Array.from({ length: 10 }, (_, i) => (
            <Avatar
              key={i + 10}
              size="large"
              type="initial-dark"
              initial="A"
              shape="square"
              border={true}
              statusIcon={{ status: 'verified', visible: true }}
              onClick={() => console.log(`Avatar ${i + 10} clicked`)}
            />
          ))}
        </div>
        
        <div style={{ 
          padding: '16px', 
          backgroundColor: 'var(--status-green-light)', 
          borderRadius: 'var(--spacing-radius-8px)',
          fontSize: '14px'
        }}>
          <strong>✅ Expected Behavior:</strong> No ResizeObserver errors should appear in the console, 
          even with rapid hovering and component updates. The error handler should suppress them silently.
        </div>
        
        <div style={{ 
          padding: '16px', 
          backgroundColor: 'var(--status-orange-light)', 
          borderRadius: 'var(--spacing-radius-8px)',
          fontSize: '14px'
        }}>
          <strong>⚠️ If you see ResizeObserver errors:</strong> The error handler may need adjustment. 
          Check the browser console for any unsuppressed ResizeObserver warnings.
        </div>
      </div>
    );
  }
};

/**
 * Test ResizeObserver with dynamic content changes
 */
export const DynamicContentTest: Story = {
  render: () => {
    const [size, setSize] = useState<'x-small' | 'small' | 'default' | 'large'>('default');
    const [showBorder, setShowBorder] = useState(false);
    
    useEffect(() => {
      const interval = setInterval(() => {
        const sizes: Array<'x-small' | 'small' | 'default' | 'large'> = ['x-small', 'small', 'default', 'large'];
        setSize(sizes[Math.floor(Math.random() * sizes.length)]);
        setShowBorder(Math.random() > 0.5);
      }, 1000);
      
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '24px', 
        padding: '24px' 
      }}>
        <div>
          <h3 style={{ marginBottom: '16px' }}>
            Dynamic Content Test
          </h3>
          <p style={{ marginBottom: '24px', color: 'var(--neutral-gray-gray-600)' }}>
            Components change size and properties automatically. Monitor console for ResizeObserver errors.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Avatar
            size={size}
            type="profile-photo"
            src="https://api.builder.io/api/v1/image/assets/TEMP/d38eb25d58a6fc9f6ee1b96312f4207f75ddac8d?width=92"
            border={showBorder}
            statusIcon={{ status: 'online', visible: true }}
          />
          
          <Avatar
            size={size}
            type="initial-light"
            initial="D"
            border={showBorder}
            statusIcon={{ status: 'away', visible: true }}
          />
          
          <Avatar
            size={size}
            type="initial-dark"
            initial="T"
            border={showBorder}
            statusIcon={{ status: 'verified', visible: true }}
          />
        </div>
        
        <div style={{ 
          fontSize: '14px',
          color: 'var(--neutral-gray-gray-600)'
        }}>
          Current size: <strong>{size}</strong> | Border: <strong>{showBorder ? 'Yes' : 'No'}</strong>
        </div>
      </div>
    );
  }
};
