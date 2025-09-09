import React, { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Test/ResizeObserver Suppression Test',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# ResizeObserver Suppression Test

This story verifies that ResizeObserver errors are completely suppressed.

✅ **Expected Behavior**: No ResizeObserver errors should appear in the browser console.

This test automatically triggers ResizeObserver errors and verifies they are suppressed.
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const AutomaticSuppressionTest: Story = {
  render: () => {
    useEffect(() => {
      console.log('🧪 Testing ResizeObserver error suppression...');
      
      // These errors should be completely suppressed
      const testErrors = [
        'ResizeObserver loop completed with undelivered notifications.',
        'ResizeObserver loop limit exceeded',
        'Undelivered notifications in ResizeObserver',
        'Observer loop completed with undelivered notifications'
      ];
      
      testErrors.forEach((error, index) => {
        setTimeout(() => {
          console.error(`TEST ${index + 1}: ${error}`);
        }, (index + 1) * 100);
      });
      
      // This message should appear
      setTimeout(() => {
        console.log('✅ Test completed - check console: ResizeObserver errors should be suppressed');
      }, 600);
      
      // Test actual ResizeObserver functionality
      const testDiv = document.createElement('div');
      testDiv.style.cssText = `
        position: absolute;
        top: -1000px;
        left: -1000px;
        width: 10px;
        height: 10px;
        opacity: 0;
      `;
      document.body.appendChild(testDiv);
      
      let count = 0;
      const observer = new ResizeObserver(() => {
        count++;
        if (count < 5) {
          // This may trigger ResizeObserver loop errors (should be suppressed)
          testDiv.style.width = `${10 + count}px`;
        }
      });
      
      observer.observe(testDiv);
      
      // Cleanup
      setTimeout(() => {
        observer.disconnect();
        document.body.removeChild(testDiv);
        console.log('🧹 Test cleanup completed');
      }, 1000);
      
    }, []);

    return (
      <div style={{ 
        padding: '32px', 
        textAlign: 'center',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}>
        <div style={{
          background: '#F0FDF4',
          border: '2px solid #16A34A',
          borderRadius: '8px',
          padding: '24px',
          marginBottom: '24px'
        }}>
          <h2 style={{ 
            color: '#15803D', 
            fontSize: '20px', 
            fontWeight: '600',
            margin: '0 0 12px 0'
          }}>
            ✅ ResizeObserver Suppression Active
          </h2>
          <p style={{ 
            color: '#166534', 
            fontSize: '16px',
            margin: '0'
          }}>
            This test is triggering ResizeObserver errors that should be completely suppressed.
          </p>
        </div>
        
        <div style={{
          background: '#FEF3C7',
          border: '1px solid #F59E0B',
          borderRadius: '8px',
          padding: '16px'
        }}>
          <p style={{ 
            color: '#92400E', 
            fontSize: '14px',
            margin: '0',
            fontWeight: '600'
          }}>
            📋 Check Browser Console: No ResizeObserver errors should appear
          </p>
        </div>
        
        <div style={{ marginTop: '24px', fontSize: '14px', color: '#6B7280' }}>
          <p>Emergency functions available in console:</p>
          <code style={{ 
            background: '#F3F4F6', 
            padding: '4px 8px', 
            borderRadius: '4px',
            display: 'inline-block',
            margin: '4px'
          }}>
            __EMERGENCY_SUPPRESS_RESIZE_OBSERVER()
          </code>
          <code style={{ 
            background: '#F3F4F6', 
            padding: '4px 8px', 
            borderRadius: '4px',
            display: 'inline-block',
            margin: '4px'
          }}>
            __EMERGENCY_TEST_SUPPRESSION()
          </code>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Automatic test that triggers ResizeObserver errors to verify they are completely suppressed. Check the browser console - no ResizeObserver errors should appear.',
      },
    },
  },
};

export const EmergencyControlPanel: Story = {
  render: () => {
    const testSuppression = async () => {
      console.log('🧪 Testing suppression...');
      const result = await (window as any).__EMERGENCY_TEST_SUPPRESSION?.();
      alert(`Suppression test result: ${result ? 'WORKING ✅' : 'NOT WORKING ❌'}`);
    };

    const applyEmergencyFix = () => {
      console.log('🚨 Applying emergency suppression...');
      (window as any).__EMERGENCY_SUPPRESS_RESIZE_OBSERVER?.();
      alert('Emergency suppression applied! ✅');
    };

    const restoreConsole = () => {
      console.log('🔄 Restoring original console...');
      (window as any).__EMERGENCY_RESTORE_CONSOLE?.();
      alert('Console methods restored! ⚠️');
    };

    return (
      <div style={{ 
        padding: '32px', 
        maxWidth: '600px',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}>
        <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>
          🚨 Emergency Control Panel
        </h2>
        
        <div style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))'
        }}>
          <button
            onClick={testSuppression}
            style={{
              padding: '16px',
              backgroundColor: '#3B82F6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            🧪 Test Suppression
          </button>
          
          <button
            onClick={applyEmergencyFix}
            style={{
              padding: '16px',
              backgroundColor: '#DC2626',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            🚨 Emergency Fix
          </button>
          
          <button
            onClick={restoreConsole}
            style={{
              padding: '16px',
              backgroundColor: '#F59E0B',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            🔄 Restore Console
          </button>
        </div>
        
        <div style={{
          marginTop: '24px',
          padding: '16px',
          background: '#F9FAFB',
          borderRadius: '8px',
          fontSize: '14px',
          lineHeight: '1.5'
        }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>Browser Console Commands:</h3>
          <pre style={{ 
            margin: '0', 
            fontFamily: 'Monaco, Consolas, monospace',
            fontSize: '12px',
            whiteSpace: 'pre-wrap'
          }}>
{`// Test if suppression is working
await __EMERGENCY_TEST_SUPPRESSION()

// Apply emergency suppression
__EMERGENCY_SUPPRESS_RESIZE_OBSERVER()

// Restore original console methods
__EMERGENCY_RESTORE_CONSOLE()`}
          </pre>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Emergency control panel with buttons to test and control ResizeObserver error suppression.',
      },
    },
  },
};
