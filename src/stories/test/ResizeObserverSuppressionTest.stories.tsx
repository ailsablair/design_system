import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect, useRef } from 'react';

const meta: Meta = {
  title: 'Test/ResizeObserver Suppression Test',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# ResizeObserver Error Suppression Test

This test verifies that ResizeObserver errors are properly suppressed.
It deliberately triggers ResizeObserver errors to ensure they don't appear in the console.

**Expected Result**: No ResizeObserver errors should appear in the browser console.
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const ErrorSuppressionTest: Story = {
  render: () => {
    const [testResults, setTestResults] = useState<string[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const addResult = (result: string) => {
      setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${result}`]);
    };

    const triggerConsoleErrors = () => {
      addResult('Triggering console ResizeObserver errors...');
      
      // These should be suppressed and not appear in console
      console.error('ResizeObserver loop completed with undelivered notifications.');
      console.warn('ResizeObserver loop limit exceeded');
      console.error('Resize observer callback threw an exception');
      console.warn('ResizeObserver loop completed with undelivered notifications');
      
      // This should appear (non-ResizeObserver error)
      console.log('✅ This normal log message should appear in console');
      
      addResult('Console error test completed - check browser console');
    };

    const createResizeLoop = () => {
      if (!containerRef.current) return;
      
      addResult('Creating ResizeObserver loop...');
      
      const testDiv = document.createElement('div');
      testDiv.style.cssText = `
        width: 100px;
        height: 100px;
        background: linear-gradient(45deg, #3B82F6, #8B5CF6);
        border-radius: 8px;
        margin: 10px;
        transition: all 0.1s ease;
        position: relative;
      `;
      
      let resizeCount = 0;
      const observer = new ResizeObserver((entries) => {
        resizeCount++;
        
        // This will intentionally cause a ResizeObserver loop
        for (const entry of entries) {
          if (entry.target instanceof HTMLElement && resizeCount < 50) {
            const currentWidth = parseFloat(entry.target.style.width);
            entry.target.style.width = `${currentWidth + 1}px`;
            entry.target.style.height = `${currentWidth + 1}px`;
          }
        }
      });
      
      observer.observe(testDiv);
      containerRef.current.appendChild(testDiv);
      
      // Clean up after 3 seconds
      setTimeout(() => {
        observer.disconnect();
        if (testDiv.parentNode) {
          testDiv.parentNode.removeChild(testDiv);
        }
        addResult('ResizeObserver loop test completed');
      }, 3000);
    };

    const testErrorEvent = () => {
      addResult('Triggering error events...');
      
      // Create fake error events that should be suppressed
      const errorEvent = new ErrorEvent('error', {
        message: 'ResizeObserver loop completed with undelivered notifications.',
        filename: 'test.js',
        lineno: 1,
        colno: 1
      });
      
      window.dispatchEvent(errorEvent);
      
      const customEvent = new CustomEvent('unhandledrejection', {
        detail: { reason: 'ResizeObserver loop completed with undelivered notifications.' }
      });
      
      window.dispatchEvent(customEvent);
      
      addResult('Error event test completed');
    };

    const runAllTests = async () => {
      setTestResults([]);
      addResult('Starting comprehensive ResizeObserver suppression tests...');
      
      await new Promise(resolve => setTimeout(resolve, 500));
      triggerConsoleErrors();
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      testErrorEvent();
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      createResizeLoop();
      
      addResult('All tests initiated - monitor console for 3 seconds');
    };

    const checkSuppressionStatus = () => {
      addResult('Checking suppression status...');
      
      // Check if global functions are available
      const hasEmergencyFunctions = typeof (window as any).emergencySuppress === 'function';
      const hasTestFunction = typeof (window as any).testSuppression === 'function';
      
      addResult(`Emergency functions available: ${hasEmergencyFunctions}`);
      addResult(`Test function available: ${hasTestFunction}`);
      
      if (hasTestFunction) {
        (window as any).testSuppression();
        addResult('Global test function executed');
      }
    };

    const manualEmergencyFix = () => {
      addResult('Applying manual emergency fix...');
      
      if (typeof (window as any).emergencySuppress === 'function') {
        (window as any).emergencySuppress();
        addResult('Emergency suppression activated via global function');
      } else {
        // Fallback manual fix
        const originalError = console.error;
        const originalWarn = console.warn;
        
        console.error = function(...args) {
          const message = args.join(' ').toLowerCase();
          if (message.includes('resizeobserver') || message.includes('undelivered notifications')) {
            return; // Suppress
          }
          originalError.apply(console, args);
        };
        
        console.warn = function(...args) {
          const message = args.join(' ').toLowerCase();
          if (message.includes('resizeobserver') || message.includes('undelivered notifications')) {
            return; // Suppress
          }
          originalWarn.apply(console, args);
        };
        
        addResult('Manual fallback suppression applied');
      }
    };

    return (
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '24px',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}>
        
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ marginBottom: '16px', color: '#111827' }}>
            ResizeObserver Error Suppression Test
          </h2>
          <p style={{ color: '#6B7280', marginBottom: '24px' }}>
            This test deliberately triggers ResizeObserver errors to verify they are properly suppressed.
            <strong> No ResizeObserver errors should appear in the browser console.</strong>
          </p>
        </div>

        {/* Control Buttons */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
          marginBottom: '24px'
        }}>
          <button
            onClick={runAllTests}
            style={{
              padding: '12px 16px',
              backgroundColor: '#DC2626',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            🧪 Run All Tests
          </button>

          <button
            onClick={triggerConsoleErrors}
            style={{
              padding: '12px 16px',
              backgroundColor: '#F59E0B',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            ⚠️ Test Console Errors
          </button>

          <button
            onClick={createResizeLoop}
            style={{
              padding: '12px 16px',
              backgroundColor: '#8B5CF6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            🔄 Create Resize Loop
          </button>

          <button
            onClick={checkSuppressionStatus}
            style={{
              padding: '12px 16px',
              backgroundColor: '#3B82F6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            ���� Check Status
          </button>

          <button
            onClick={manualEmergencyFix}
            style={{
              padding: '12px 16px',
              backgroundColor: '#EF4444',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            🚨 Emergency Fix
          </button>

          <button
            onClick={() => setTestResults([])}
            style={{
              padding: '12px 16px',
              backgroundColor: '#6B7280',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            🧹 Clear Log
          </button>
        </div>

        {/* Test Container */}
        <div 
          ref={containerRef}
          style={{ 
            marginBottom: '24px',
            padding: '16px',
            background: '#F9FAFB',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            minHeight: '120px'
          }}
        >
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>
            Test Container
          </h4>
          <p style={{ margin: '0', fontSize: '12px', color: '#6B7280' }}>
            Test elements will appear here during resize loop tests.
          </p>
        </div>

        {/* Test Results Log */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600' }}>
            Test Results Log
          </h3>
          <div style={{ 
            background: '#1F2937',
            color: '#F9FAFB',
            padding: '16px',
            borderRadius: '6px',
            fontFamily: 'Monaco, Consolas, monospace',
            fontSize: '12px',
            lineHeight: '1.5',
            maxHeight: '300px',
            overflowY: 'auto'
          }}>
            {testResults.length === 0 ? (
              <div style={{ color: '#9CA3AF' }}>No test results yet. Click a button to start testing.</div>
            ) : (
              testResults.map((result, index) => (
                <div key={index} style={{ marginBottom: '4px' }}>
                  {result}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Instructions */}
        <div style={{ 
          background: '#FEF2F2',
          border: '1px solid #FECACA',
          borderRadius: '8px',
          padding: '16px'
        }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600', color: '#DC2626' }}>
            🎯 Success Criteria
          </h3>
          <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
            <li><strong>Console Check:</strong> No ResizeObserver errors should appear in browser console</li>
            <li><strong>Normal Logs:</strong> Regular console.log messages should still appear</li>
            <li><strong>No Browser Errors:</strong> No unhandled error popups or notifications</li>
            <li><strong>Smooth Operation:</strong> Storybook should continue working normally</li>
          </ul>
          <p style={{ margin: '12px 0 0 0', fontSize: '14px', fontStyle: 'italic', color: '#DC2626' }}>
            <strong>Monitor the browser console while running tests - ResizeObserver errors should be completely suppressed.</strong>
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive test for ResizeObserver error suppression. Use this to verify that ResizeObserver errors are properly suppressed.',
      },
    },
  },
};

export const QuickTest: Story = {
  render: () => {
    const triggerQuickTest = () => {
      console.log('🧪 Quick ResizeObserver suppression test...');
      
      // These should be suppressed
      console.error('ResizeObserver loop completed with undelivered notifications.');
      console.warn('ResizeObserver loop limit exceeded.');
      
      // This should appear
      console.log('✅ This message should appear - test completed');
    };

    return (
      <div style={{ 
        maxWidth: '400px', 
        margin: '0 auto', 
        padding: '24px',
        textAlign: 'center',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}>
        
        <h2 style={{ marginBottom: '16px', color: '#111827' }}>
          Quick ResizeObserver Test
        </h2>
        
        <p style={{ color: '#6B7280', marginBottom: '24px' }}>
          Click the button below to trigger ResizeObserver errors.
          Check the browser console - no ResizeObserver errors should appear.
        </p>

        <button
          onClick={triggerQuickTest}
          style={{
            padding: '16px 32px',
            backgroundColor: '#DC2626',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          🧪 Test Error Suppression
        </button>

        <p style={{ 
          marginTop: '16px', 
          fontSize: '12px', 
          color: '#6B7280',
          fontStyle: 'italic'
        }}>
          Open browser console and click the button.
          Only the "test completed" message should appear.
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Quick test to verify ResizeObserver error suppression is working.',
      },
    },
  },
};
