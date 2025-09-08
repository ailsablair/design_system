import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect, useRef } from 'react';
import { 
  testResizeObserverSupression, 
  quickFixResizeObserverErrors,
  emergencyResizeObserverSuppress 
} from '../../utils/resizeObserverFix';

const meta: Meta = {
  title: 'Test/ResizeObserver Fix Verification',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# ResizeObserver Error Fix Verification

This test verifies that ResizeObserver errors are properly suppressed.
If you see "ResizeObserver loop completed with undelivered notifications" errors in the console,
use the emergency fix button below.

## Expected Behavior
- No ResizeObserver errors should appear in console
- The test should pass (green status)
- Resize operations should work normally without errors
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const VerifyFix: Story = {
  render: () => {
    const [testResult, setTestResult] = useState<boolean | null>(null);
    const [isFixed, setIsFixed] = useState(false);
    const [emergencyUsed, setEmergencyUsed] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      // Run the test when component mounts
      runTest();
    }, []);

    const runTest = async () => {
      setTestResult(null);
      try {
        const result = await testResizeObserverSupression();
        setTestResult(result);
      } catch (error) {
        console.warn('Test error:', error);
        setTestResult(false);
      }
    };

    const applyQuickFix = () => {
      quickFixResizeObserverErrors();
      setIsFixed(true);
      // Re-run test after fix
      setTimeout(runTest, 100);
    };

    const applyEmergencyFix = () => {
      emergencyResizeObserverSuppress();
      setEmergencyUsed(true);
      setIsFixed(true);
      // Re-run test after fix
      setTimeout(runTest, 100);
    };

    const triggerTestError = () => {
      // Deliberately trigger ResizeObserver errors to test suppression
      console.error('TEST: ResizeObserver loop completed with undelivered notifications.');
      console.warn('TEST: ResizeObserver loop limit exceeded');
      console.log('Test errors triggered - they should be suppressed if fix is working');
    };

    const createResizeLoop = () => {
      // Create an element that will trigger ResizeObserver loops
      if (!containerRef.current) return;
      
      const testDiv = document.createElement('div');
      testDiv.style.width = '100px';
      testDiv.style.height = '100px';
      testDiv.style.backgroundColor = '#f0f0f0';
      testDiv.style.border = '1px solid #ccc';
      testDiv.style.margin = '10px';
      testDiv.style.transition = 'all 0.1s';
      
      const observer = new ResizeObserver((entries) => {
        // This will cause a loop by modifying size in response to resize
        for (const entry of entries) {
          if (entry.target instanceof HTMLElement) {
            const currentWidth = parseFloat(entry.target.style.width);
            if (currentWidth < 200) {
              entry.target.style.width = `${currentWidth + 1}px`;
            }
          }
        }
      });
      
      observer.observe(testDiv);
      containerRef.current.appendChild(testDiv);
      
      // Clean up after 2 seconds
      setTimeout(() => {
        observer.disconnect();
        if (testDiv.parentNode) {
          testDiv.parentNode.removeChild(testDiv);
        }
      }, 2000);
    };

    return (
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '24px',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}>
        
        {/* Status Display */}
        <div style={{ 
          marginBottom: '24px',
          padding: '20px',
          background: testResult === true ? '#D1FAE5' : testResult === false ? '#FEE2E2' : '#F3F4F6',
          border: `1px solid ${testResult === true ? '#A7F3D0' : testResult === false ? '#FECACA' : '#D1D5DB'}`,
          borderRadius: '8px'
        }}>
          <h2 style={{ 
            margin: '0 0 12px 0', 
            color: testResult === true ? '#065F46' : testResult === false ? '#991B1B' : '#374151' 
          }}>
            {testResult === true && '✅ ResizeObserver Fix Working'}
            {testResult === false && '❌ ResizeObserver Errors Detected'}
            {testResult === null && '⏳ Testing ResizeObserver Fix...'}
          </h2>
          <p style={{ 
            margin: '0', 
            fontSize: '14px',
            color: testResult === true ? '#065F46' : testResult === false ? '#991B1B' : '#6B7280'
          }}>
            {testResult === true && 'ResizeObserver errors are being properly suppressed. No action needed.'}
            {testResult === false && 'ResizeObserver errors are still appearing. Use the emergency fix below.'}
            {testResult === null && 'Running suppression test...'}
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
            onClick={runTest}
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
            🧪 Run Test
          </button>

          <button
            onClick={triggerTestError}
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
            ⚠️ Trigger Test Errors
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
            onClick={applyQuickFix}
            disabled={isFixed && !emergencyUsed}
            style={{
              padding: '12px 16px',
              backgroundColor: isFixed && !emergencyUsed ? '#9CA3AF' : '#10B981',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: isFixed && !emergencyUsed ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            🔧 Apply Quick Fix
          </button>
        </div>

        {/* Emergency Fix Section */}
        {(testResult === false || emergencyUsed) && (
          <div style={{ 
            marginBottom: '24px',
            padding: '16px',
            background: '#FEF2F2',
            border: '1px solid #FECACA',
            borderRadius: '8px'
          }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600', color: '#DC2626' }}>
              🚨 Emergency Fix Required
            </h3>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#991B1B' }}>
              The standard fix is not working. Click the emergency fix button below to apply the most aggressive error suppression.
            </p>
            <button
              onClick={applyEmergencyFix}
              disabled={emergencyUsed}
              style={{
                padding: '8px 16px',
                backgroundColor: emergencyUsed ? '#9CA3AF' : '#DC2626',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: emergencyUsed ? 'not-allowed' : 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              {emergencyUsed ? '✅ Emergency Fix Applied' : '🚫 Apply Emergency Fix'}
            </button>
          </div>
        )}

        {/* Test Container */}
        <div 
          ref={containerRef}
          style={{ 
            marginBottom: '24px',
            padding: '16px',
            background: '#F9FAFB',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            minHeight: '100px'
          }}
        >
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>
            Test Container
          </h4>
          <p style={{ margin: '0', fontSize: '12px', color: '#6B7280' }}>
            This area will show test elements that trigger ResizeObserver loops when "Create Resize Loop" is clicked.
          </p>
        </div>

        {/* Instructions */}
        <div style={{ 
          background: '#EFF6FF',
          border: '1px solid #BFDBFE',
          borderRadius: '8px',
          padding: '16px'
        }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: '600', color: '#1E40AF' }}>
            🔍 How to Use This Test
          </h3>
          <ol style={{ margin: '0', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6' }}>
            <li><strong>Run Test:</strong> Check if ResizeObserver errors are being suppressed</li>
            <li><strong>Trigger Test Errors:</strong> Manually trigger ResizeObserver errors to see if they appear in console</li>
            <li><strong>Create Resize Loop:</strong> Create actual ResizeObserver loops to test real-world scenarios</li>
            <li><strong>Apply Quick Fix:</strong> If errors are detected, apply the standard fix</li>
            <li><strong>Emergency Fix:</strong> If quick fix doesn't work, apply the most aggressive suppression</li>
          </ol>
          <p style={{ margin: '12px 0 0 0', fontSize: '14px', fontStyle: 'italic', color: '#1E40AF' }}>
            <strong>Expected Result:</strong> No ResizeObserver errors should appear in the browser console.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive test to verify ResizeObserver error suppression is working correctly. Use this to diagnose and fix any remaining ResizeObserver errors.',
      },
    },
  },
};

export const SimpleTest: Story = {
  render: () => {
    const [size, setSize] = useState({ width: 200, height: 200 });
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!elementRef.current) return;

      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          // This should not cause console errors
          console.log('Element resized:', entry.contentRect);
        }
      });

      observer.observe(elementRef.current);

      return () => {
        observer.disconnect();
      };
    }, []);

    const changeSize = () => {
      setSize(prev => ({
        width: prev.width + 10,
        height: prev.height + 5
      }));
    };

    return (
      <div style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: '24px',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}>
        
        <h2 style={{ marginBottom: '16px', color: '#111827' }}>
          Simple ResizeObserver Test
        </h2>
        
        <p style={{ color: '#6B7280', marginBottom: '24px' }}>
          This component uses ResizeObserver to monitor size changes. 
          Click the button to resize the element. No errors should appear in the console.
        </p>

        <button
          onClick={changeSize}
          style={{
            padding: '12px 24px',
            backgroundColor: '#3B82F6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '20px'
          }}
        >
          Resize Element
        </button>

        <div
          ref={elementRef}
          style={{
            width: `${size.width}px`,
            height: `${size.height}px`,
            backgroundColor: '#EBF8FF',
            border: '2px solid #3B82F6',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            fontSize: '14px',
            color: '#1E40AF',
            fontWeight: '500'
          }}
        >
          {size.width} × {size.height}
        </div>

        <p style={{ 
          marginTop: '16px', 
          fontSize: '12px', 
          color: '#6B7280',
          fontStyle: 'italic'
        }}>
          Check the browser console - you should see resize logs but no ResizeObserver errors.
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple test component that uses ResizeObserver. No errors should appear in console when resizing.',
      },
    },
  },
};
