import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useRef, useState } from 'react';
import { testResizeObserverSuppression } from '../../utils/immediateResizeObserverFix';

const meta: Meta = {
  title: 'Test/ResizeObserver Fix Verification',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'This story verifies that ResizeObserver errors are properly suppressed and provides manual testing tools.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const ResizeObserverTestComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<string>('Ready');
  const [testResults, setTestResults] = useState<string[]>([]);

  // Create aggressive ResizeObserver scenario
  useEffect(() => {
    if (!containerRef.current) return;

    const observers: ResizeObserver[] = [];
    
    // Create multiple ResizeObservers that could cause loops
    for (let i = 0; i < 3; i++) {
      const observer = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const { target } = entry;
          if (target instanceof HTMLElement) {
            // This could trigger ResizeObserver loops
            target.style.transform = `scale(${1 + (i * 0.001)})`;
            target.style.filter = `hue-rotate(${i * 30}deg)`;
          }
        });
      });

      if (containerRef.current) {
        observer.observe(containerRef.current);
        observers.push(observer);
      }
    }

    setStatus('ResizeObservers active');

    return () => {
      observers.forEach(observer => observer.disconnect());
      setStatus('ResizeObservers disconnected');
    };
  }, []);

  const runManualTest = () => {
    setTestResults([]);
    setStatus('Running manual test...');
    
    const results: string[] = [];
    const originalError = console.error;
    const originalWarn = console.warn;
    const originalLog = console.log;
    
    // Capture console output
    console.error = (...args) => {
      const message = args.join(' ');
      results.push(`❌ ERROR: ${message}`);
      originalError.apply(console, args);
    };
    
    console.warn = (...args) => {
      const message = args.join(' ');
      results.push(`⚠️ WARN: ${message}`);
      originalWarn.apply(console, args);
    };
    
    console.log = (...args) => {
      const message = args.join(' ');
      if (!message.startsWith('🧪') && !message.startsWith('✅') && !message.startsWith('🔍')) {
        results.push(`ℹ️ LOG: ${message}`);
      }
      originalLog.apply(console, args);
    };
    
    // Run the test
    testResizeObserverSuppression();
    
    // Manual error attempts
    console.error('ResizeObserver loop completed with undelivered notifications.');
    console.warn('ResizeObserver loop limit exceeded');
    console.log('This normal message should appear');
    
    // Restore console
    setTimeout(() => {
      console.error = originalError;
      console.warn = originalWarn;
      console.log = originalLog;
      
      setTestResults(results);
      setStatus('Test completed');
    }, 100);
  };

  const triggerResizeObserverError = () => {
    // Attempt to trigger a real ResizeObserver error
    if (containerRef.current) {
      const observer = new ResizeObserver(() => {
        // Immediately modify the observed element to create a loop
        if (containerRef.current) {
          containerRef.current.style.width = '300px';
          containerRef.current.style.height = '250px';
        }
      });
      
      observer.observe(containerRef.current);
      
      // Force a resize
      containerRef.current.style.width = '250px';
      containerRef.current.style.height = '200px';
      
      setTimeout(() => {
        observer.disconnect();
      }, 500);
    }
  };

  const emergencyFix = () => {
    // Apply emergency fix
    if (typeof window !== 'undefined' && (window as any).__IMMEDIATE_RESIZE_OBSERVER_FIX) {
      (window as any).__IMMEDIATE_RESIZE_OBSERVER_FIX();
      setStatus('Emergency fix applied');
    } else {
      setStatus('Emergency fix not available');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', maxWidth: '600px' }}>
      <h2 style={{ color: '#2F42BD', marginBottom: '20px' }}>
        ResizeObserver Fix Verification
      </h2>
      
      <div style={{ marginBottom: '20px' }}>
        <strong>Status: </strong>
        <span style={{ 
          color: status.includes('error') ? '#CE2031' : status.includes('active') ? '#227F1A' : '#366F97' 
        }}>
          {status}
        </span>
      </div>
      
      <div
        ref={containerRef}
        style={{
          width: '200px',
          height: '150px',
          margin: '20px auto',
          background: 'linear-gradient(45deg, #2F42BD, #0BA7EA)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onClick={() => setStatus('Element clicked')}
      >
        Test Element
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={runManualTest}
          style={{
            background: '#2F42BD',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            margin: '0 5px',
          }}
        >
          Run Console Test
        </button>
        
        <button
          onClick={triggerResizeObserverError}
          style={{
            background: '#F4A403',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            margin: '0 5px',
          }}
        >
          Trigger ResizeObserver Error
        </button>
        
        <button
          onClick={emergencyFix}
          style={{
            background: '#CE2031',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            margin: '0 5px',
          }}
        >
          Emergency Fix
        </button>
      </div>
      
      <div style={{ 
        textAlign: 'left', 
        fontSize: '14px', 
        background: '#f5f5f5', 
        padding: '15px', 
        borderRadius: '4px',
        marginBottom: '20px'
      }}>
        <h4 style={{ margin: '0 0 10px 0' }}>Instructions:</h4>
        <ol style={{ margin: 0, paddingLeft: '20px' }}>
          <li>Open browser console (F12)</li>
          <li>Click "Run Console Test" - check that ResizeObserver errors are suppressed</li>
          <li>Click "Trigger ResizeObserver Error" - should not show errors in console</li>
          <li>Normal console messages should still appear</li>
        </ol>
      </div>
      
      {testResults.length > 0 && (
        <div style={{ 
          textAlign: 'left', 
          fontSize: '12px', 
          background: '#f0f0f0', 
          padding: '10px', 
          borderRadius: '4px',
          fontFamily: 'monospace'
        }}>
          <h4 style={{ margin: '0 0 10px 0' }}>Test Results:</h4>
          {testResults.map((result, index) => (
            <div key={index} style={{ marginBottom: '5px' }}>
              {result}
            </div>
          ))}
        </div>
      )}
      
      <div style={{ fontSize: '12px', color: '#666', marginTop: '20px' }}>
        <strong>Expected Result:</strong> No ResizeObserver errors should appear in the browser console.
        Normal console messages should continue to work.
      </div>
    </div>
  );
};

export const FixVerification: Story = {
  render: () => <ResizeObserverTestComponent />,
  parameters: {
    docs: {
      description: {
        story: `
This story provides comprehensive testing for ResizeObserver error suppression:

### What it tests:
- Multiple ResizeObserver instances that could cause loops
- Console error suppression
- Normal console functionality preservation
- Manual error triggering
- Emergency fix application

### How to verify:
1. Open browser console (F12)
2. Click "Run Console Test" 
3. Verify that ResizeObserver error messages are suppressed
4. Verify that normal console messages still appear
5. Click "Trigger ResizeObserver Error" to test real scenarios

### Expected behavior:
- ✅ No "ResizeObserver loop completed with undelivered notifications" errors
- ✅ No "ResizeObserver loop limit exceeded" errors  
- ✅ Normal console.log/error/warn messages still work for non-ResizeObserver content
- ✅ No MaxListenersExceededWarning messages
        `,
      },
    },
  },
};
