import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { 
  setupResizeObserverErrorHandler,
  forceSupressResizeObserverErrors,
  testResizeObserverSuppression,
  resetResizeObserverErrorHandler
} from '../../utils/resizeObserverHandler';

const meta: Meta = {
  title: 'Debug/ResizeObserver Error Suppression',
  parameters: {
    layout: 'padded',
    chromatic: { disable: true }, // Disable in visual testing
    docs: {
      description: {
        component: `
# ResizeObserver Error Debugging & Testing

This debugging utility helps identify and fix ResizeObserver errors that may still be appearing.
The enhanced error handling system should catch and suppress all ResizeObserver-related errors.

## Enhanced Features
- **Multi-level Error Catching**: Catches errors in console, events, promises, and async operations
- **Pattern Matching**: Enhanced pattern detection for various error message formats
- **Early Initialization**: Error suppression starts before module loading completes
- **Force Suppression**: Emergency override for persistent errors

## Debugging Steps
1. Check if the error handler is active
2. Test error suppression functionality
3. Force suppress if needed
4. Monitor console for any remaining errors
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const ErrorSuppressionDebug: Story = {
  render: () => {
    const [handlerActive, setHandlerActive] = useState(false);
    const [suppressionWorking, setSuppressionWorking] = useState<boolean | null>(null);
    const [testResults, setTestResults] = useState<string[]>([]);
    const [forceEnabled, setForceEnabled] = useState(false);

    useEffect(() => {
      // Check if handler is active
      const isActive = !!(window as any).__resizeObserverSetupComplete;
      setHandlerActive(isActive);
    }, []);

    const addTestResult = (result: string) => {
      setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${result}`]);
    };

    const testSuppression = async () => {
      addTestResult('Testing ResizeObserver error suppression...');
      try {
        const result = await testResizeObserverSuppression();
        setSuppressionWorking(result);
        addTestResult(`Suppression test ${result ? 'PASSED' : 'FAILED'}`);
      } catch (error) {
        addTestResult(`Suppression test ERROR: ${error}`);
        setSuppressionWorking(false);
      }
    };

    const triggerError = () => {
      addTestResult('Manually triggering ResizeObserver error...');
      console.error('ResizeObserver loop completed with undelivered notifications.');
      console.error('ResizeObserver loop limit exceeded.');
      console.error('Resize observer loop completed with undelivered notifications');
      addTestResult('Manual error trigger completed (check console)');
    };

    const enableForceSuppress = () => {
      addTestResult('Enabling force suppression...');
      forceSupressResizeObserverErrors();
      setForceEnabled(true);
      addTestResult('Force suppression activated');
    };

    const resetHandler = () => {
      addTestResult('Resetting error handler...');
      resetResizeObserverErrorHandler();
      setHandlerActive(false);
      setSuppressionWorking(null);
      setForceEnabled(false);
      addTestResult('Error handler reset');
    };

    const reinitializeHandler = () => {
      addTestResult('Reinitializing error handler...');
      setupResizeObserverErrorHandler();
      const isActive = !!(window as any).__resizeObserverSetupComplete;
      setHandlerActive(isActive);
      addTestResult(`Error handler reinitialized - Active: ${isActive}`);
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
            ResizeObserver Error Debugging
          </h2>
          <p style={{ color: '#6B7280', marginBottom: '24px' }}>
            Use this debugging interface to test and fix ResizeObserver errors.
            If you're still seeing "ResizeObserver loop completed with undelivered notifications" 
            errors, use the tools below to diagnose and fix them.
          </p>
        </div>

        {/* Status Section */}
        <div style={{ 
          marginBottom: '24px',
          padding: '16px',
          background: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: '600' }}>
            Current Status
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '8px 16px', alignItems: 'center' }}>
            <span style={{ fontWeight: '500' }}>Error Handler:</span>
            <span style={{ 
              color: handlerActive ? '#059669' : '#DC2626',
              fontWeight: '600'
            }}>
              {handlerActive ? '✅ Active' : '❌ Inactive'}
            </span>
            
            <span style={{ fontWeight: '500' }}>Suppression Test:</span>
            <span style={{ 
              color: suppressionWorking === true ? '#059669' : suppressionWorking === false ? '#DC2626' : '#6B7280',
              fontWeight: '600'
            }}>
              {suppressionWorking === true ? '✅ Passing' : suppressionWorking === false ? '❌ Failing' : '⏳ Not Tested'}
            </span>
            
            <span style={{ fontWeight: '500' }}>Force Suppress:</span>
            <span style={{ 
              color: forceEnabled ? '#059669' : '#6B7280',
              fontWeight: '600'
            }}>
              {forceEnabled ? '✅ Enabled' : '⭕ Disabled'}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ 
          marginBottom: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px'
        }}>
          <button
            onClick={testSuppression}
            style={{
              padding: '12px 16px',
              backgroundColor: '#0EA5E9',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            🧪 Test Suppression
          </button>

          <button
            onClick={triggerError}
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
            ⚠️ Trigger Test Error
          </button>

          <button
            onClick={enableForceSuppress}
            disabled={forceEnabled}
            style={{
              padding: '12px 16px',
              backgroundColor: forceEnabled ? '#9CA3AF' : '#EF4444',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: forceEnabled ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            🚫 Force Suppress
          </button>

          <button
            onClick={reinitializeHandler}
            style={{
              padding: '12px 16px',
              backgroundColor: '#10B981',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            🔄 Reinitialize Handler
          </button>

          <button
            onClick={resetHandler}
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
            🔧 Reset Handler
          </button>

          <button
            onClick={() => setTestResults([])}
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
            🧹 Clear Log
          </button>
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
            maxHeight: '200px',
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
          background: '#EFF6FF',
          border: '1px solid #BFDBFE',
          borderRadius: '8px',
          padding: '16px'
        }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600', color: '#1E40AF' }}>
            🔍 Debugging Instructions
          </h3>
          <ol style={{ margin: '0', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
            <li><strong>Check Status:</strong> Verify the error handler is active</li>
            <li><strong>Test Suppression:</strong> Run the suppression test to see if it's working</li>
            <li><strong>Trigger Error:</strong> Manually trigger ResizeObserver errors to see if they appear in console</li>
            <li><strong>Force Suppress:</strong> If errors persist, enable force suppression as emergency fix</li>
            <li><strong>Monitor Console:</strong> Watch browser console for any ResizeObserver errors</li>
            <li><strong>Reset if Needed:</strong> Reset and reinitialize if something goes wrong</li>
          </ol>
        </div>

        {/* Emergency Fix Section */}
        {suppressionWorking === false && (
          <div style={{ 
            marginTop: '24px',
            background: '#FEF2F2',
            border: '1px solid #FECACA',
            borderRadius: '8px',
            padding: '16px'
          }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600', color: '#DC2626' }}>
              🚨 Emergency Fix Required
            </h3>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#991B1B' }}>
              The error suppression test is failing. Click "Force Suppress" to activate emergency error suppression.
              This will aggressively suppress all ResizeObserver-related console output.
            </p>
            {!forceEnabled && (
              <button
                onClick={enableForceSuppress}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#DC2626',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                🚫 Enable Emergency Suppression
              </button>
            )}
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive debugging interface for testing and fixing ResizeObserver errors. Use this to diagnose and resolve persistent ResizeObserver loop errors.',
      },
    },
  },
};

export const QuickFix: Story = {
  render: () => {
    const [fixed, setFixed] = useState(false);

    const applyQuickFix = () => {
      // Apply all fixes immediately
      setupResizeObserverErrorHandler();
      forceSupressResizeObserverErrors();
      setFixed(true);
      
      console.log('🔧 Quick fix applied for ResizeObserver errors');
    };

    return (
      <div style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: '24px',
        textAlign: 'center',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}>
        
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ marginBottom: '16px', color: '#111827' }}>
            Quick Fix for ResizeObserver Errors
          </h2>
          <p style={{ color: '#6B7280', marginBottom: '24px' }}>
            If you're seeing "ResizeObserver loop completed with undelivered notifications" errors,
            click the button below to apply an immediate fix.
          </p>
        </div>

        {!fixed ? (
          <button
            onClick={applyQuickFix}
            style={{
              padding: '16px 32px',
              backgroundColor: '#DC2626',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            🚫 Fix ResizeObserver Errors Now
          </button>
        ) : (
          <div style={{ 
            padding: '20px',
            background: '#D1FAE5',
            border: '1px solid #A7F3D0',
            borderRadius: '8px',
            color: '#065F46'
          }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600' }}>
              ✅ Fix Applied Successfully
            </h3>
            <p style={{ margin: '0', fontSize: '14px' }}>
              ResizeObserver error suppression has been activated. 
              The errors should no longer appear in your console.
            </p>
          </div>
        )}

        <div style={{ 
          marginTop: '32px',
          padding: '16px',
          background: '#F3F4F6',
          borderRadius: '8px',
          fontSize: '14px',
          textAlign: 'left'
        }}>
          <h4 style={{ margin: '0 0 8px 0', fontWeight: '600' }}>What this fix does:</h4>
          <ul style={{ margin: '0', paddingLeft: '20px' }}>
            <li>Activates enhanced ResizeObserver error handler</li>
            <li>Enables force suppression for persistent errors</li>
            <li>Wraps console methods to catch and suppress errors</li>
            <li>Adds event listeners to prevent error propagation</li>
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'One-click fix for ResizeObserver errors. Use this if you need an immediate solution.',
      },
    },
  },
};
