import React, { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  emergencySuppressionOverride,
  testErrorSuppression,
  getSuppressionStatus,
  restoreOriginalMethods
} from '../../utils/resizeObserverSuppression';

const meta: Meta = {
  title: 'Test/Emergency ResizeObserver Fix',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Emergency ResizeObserver Error Fix Verification

This story immediately triggers ResizeObserver errors to test that they are completely suppressed.

**CRITICAL TEST**: No ResizeObserver errors should appear in the browser console.

If you see ANY ResizeObserver errors, use the Emergency Fix button below.
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const ImmediateSuppressionTest: Story = {
  render: () => {
    // Trigger errors immediately on component mount
    useEffect(() => {
      console.log('🧪 TESTING: Triggering ResizeObserver errors - they should be COMPLETELY SUPPRESSED');
      
      // Fire multiple error patterns that should all be suppressed
      const errorPatterns = [
        'ResizeObserver loop completed with undelivered notifications.',
        'ResizeObserver loop completed with undelivered notifications',
        'ResizeObserver loop limit exceeded',
        'ResizeObserver: loop completed with undelivered notifications',
        'Undelivered notifications in ResizeObserver',
        'Observer loop completed with undelivered notifications',
        'Resize observer loop detected',
        'ResizeObserver callback threw an exception',
        'ResizeObserver callback error',
        'Observer callback failed',
        'Resize loop detected',
        'Observer loop limit exceeded'
      ];
      
      // Trigger as console.error (should be suppressed)
      errorPatterns.forEach((pattern, index) => {
        setTimeout(() => {
          console.error(pattern);
          console.warn(pattern);
        }, index * 10);
      });
      
      // This should appear (normal message)
      setTimeout(() => {
        console.log('✅ NORMAL MESSAGE: This should appear in console');
        console.log('🔍 CHECK CONSOLE: If you see ANY ResizeObserver errors above, click Emergency Fix');
      }, 200);
      
      // Test actual ResizeObserver loop
      setTimeout(() => {
        createActualResizeLoop();
      }, 300);
      
    }, []);

    const createActualResizeLoop = () => {
      console.log('🔄 Creating real ResizeObserver loop...');
      
      const testDiv = document.createElement('div');
      testDiv.style.cssText = `
        width: 50px;
        height: 50px;
        background: #ff0000;
        position: absolute;
        top: -2000px;
        left: -2000px;
        opacity: 0;
        pointer-events: none;
      `;
      document.body.appendChild(testDiv);
      
      let resizeCount = 0;
      const observer = new ResizeObserver(() => {
        resizeCount++;
        if (resizeCount < 30) {
          // This intentionally causes ResizeObserver loops
          testDiv.style.width = `${50 + resizeCount}px`;
          testDiv.style.height = `${50 + resizeCount}px`;
        }
      });
      
      observer.observe(testDiv);
      
      // Cleanup after test
      setTimeout(() => {
        observer.disconnect();
        if (testDiv.parentNode) {
          testDiv.parentNode.removeChild(testDiv);
        }
        console.log('✅ ResizeObserver loop test completed - NO ERRORS should have appeared');
      }, 2000);
    };

    const applyEmergencyFix = () => {
      console.log('🚨 APPLYING EMERGENCY FIX...');
      emergencySuppressionOverride();
      console.log('✅ EMERGENCY FIX APPLIED - All ResizeObserver output suppressed');
    };

    const triggerManualTest = () => {
      console.log('🧪 MANUAL TEST: Triggering more ResizeObserver errors...');
      
      // These should all be suppressed
      console.error('TEST: ResizeObserver loop completed with undelivered notifications.');
      console.warn('TEST: ResizeObserver loop limit exceeded');
      console.error('TEST: Undelivered notifications in ResizeObserver');
      console.warn('TEST: Observer loop completed');
      
      // This should appear
      console.log('✅ Manual test completed - check console');
    };

    const checkSuppressionStatus = () => {
      console.log('🔍 CHECKING SUPPRESSION STATUS...');
      
      // Test if global functions are available
      const hasEmergencyFunc = typeof (window as any).__EMERGENCY_SUPPRESS_RESIZE_OBSERVER === 'function';
      const hasConfigFunc = typeof (window as any).__EMERGENCY_CONFIG_SUPPRESS === 'function';
      
      console.log(`Emergency function available: ${hasEmergencyFunc}`);
      console.log(`Config function available: ${hasConfigFunc}`);
      
      // Trigger test error
      console.error('STATUS TEST: ResizeObserver loop completed with undelivered notifications.');
      console.log('✅ Status check completed');
    };

    return (
      <div style={{
        maxWidth: '800px',
        padding: '32px',
        fontFamily: 'Inter, system-ui, sans-serif',
        textAlign: 'center'
      }}>
        
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: '700', 
            marginBottom: '16px',
            color: '#DC2626'
          }}>
            🚨 Emergency ResizeObserver Fix
          </h1>
          
          <div style={{
            background: '#FEF2F2',
            border: '2px solid #FECACA',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '24px'
          }}>
            <h2 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '12px',
              color: '#DC2626'
            }}>
              CRITICAL TEST IN PROGRESS
            </h2>
            <p style={{ 
              fontSize: '14px', 
              color: '#991B1B',
              marginBottom: '8px',
              fontWeight: '500'
            }}>
              This story is triggering ResizeObserver errors RIGHT NOW.
            </p>
            <p style={{ 
              fontSize: '14px', 
              color: '#991B1B',
              margin: '0'
            }}>
              <strong>CHECK BROWSER CONSOLE - NO ResizeObserver errors should appear!</strong>
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}>
          <button
            onClick={applyEmergencyFix}
            style={{
              padding: '16px 20px',
              backgroundColor: '#DC2626',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            🚨 EMERGENCY FIX
          </button>

          <button
            onClick={triggerManualTest}
            style={{
              padding: '16px 20px',
              backgroundColor: '#F59E0B',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            🧪 Manual Test
          </button>

          <button
            onClick={checkSuppressionStatus}
            style={{
              padding: '16px 20px',
              backgroundColor: '#3B82F6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            🔍 Check Status
          </button>

          <button
            onClick={createActualResizeLoop}
            style={{
              padding: '16px 20px',
              backgroundColor: '#8B5CF6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            🔄 Create Loop
          </button>
        </div>

        <div style={{
          background: '#EFF6FF',
          border: '1px solid #BFDBFE',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'left'
        }}>
          <h3 style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            marginBottom: '12px',
            color: '#1E40AF'
          }}>
            🎯 SUCCESS CRITERIA
          </h3>
          <ul style={{ 
            margin: '0', 
            paddingLeft: '20px', 
            fontSize: '14px', 
            lineHeight: '1.6',
            color: '#1E40AF'
          }}>
            <li><strong>Browser Console:</strong> NO "ResizeObserver" errors visible</li>
            <li><strong>Normal Messages:</strong> Regular console.log messages still appear</li>
            <li><strong>No Popups:</strong> No browser error notifications</li>
            <li><strong>Storybook Works:</strong> Interface remains functional</li>
          </ul>
          
          <div style={{
            marginTop: '16px',
            padding: '12px',
            background: '#FEF2F2',
            border: '1px solid #FECACA',
            borderRadius: '6px'
          }}>
            <p style={{ 
              margin: '0', 
              fontSize: '14px', 
              color: '#DC2626',
              fontWeight: '600'
            }}>
              🚨 IF YOU SEE ANY ResizeObserver ERRORS: Click "EMERGENCY FIX" immediately!
            </p>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Emergency test that immediately triggers ResizeObserver errors to verify complete suppression. Use Emergency Fix if any errors appear.',
      },
    },
  },
};

export const BrowserConsoleCommands: Story = {
  render: () => {
    return (
      <div style={{
        maxWidth: '600px',
        padding: '24px',
        fontFamily: 'Monaco, Consolas, monospace',
        fontSize: '14px',
        background: '#1F2937',
        color: '#F9FAFB',
        borderRadius: '8px'
      }}>
        <h3 style={{ color: '#F9FAFB', marginBottom: '16px' }}>
          Browser Console Emergency Commands
        </h3>
        
        <div style={{ marginBottom: '16px' }}>
          <div style={{ color: '#34D399', marginBottom: '4px' }}>
            // Apply emergency suppression
          </div>
          <div style={{ color: '#F9FAFB' }}>
            __EMERGENCY_SUPPRESS_RESIZE_OBSERVER()
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <div style={{ color: '#34D399', marginBottom: '4px' }}>
            // Apply config-level suppression
          </div>
          <div style={{ color: '#F9FAFB' }}>
            __EMERGENCY_CONFIG_SUPPRESS()
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <div style={{ color: '#34D399', marginBottom: '4px' }}>
            // Test if errors are suppressed (should be silent)
          </div>
          <div style={{ color: '#F9FAFB' }}>
            console.error('ResizeObserver loop completed with undelivered notifications.')
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <div style={{ color: '#34D399', marginBottom: '4px' }}>
            // Manual suppression override
          </div>
          <div style={{ color: '#F9FAFB' }}>
            {`console.error = function(...args) {
  const msg = args.join(' ').toLowerCase();
  if (!msg.includes('resizeobserver')) {
    console.log(...args);
  }
};`}
          </div>
        </div>

        <div style={{ 
          background: '#374151', 
          padding: '12px', 
          borderRadius: '4px',
          marginTop: '16px'
        }}>
          <div style={{ color: '#FCD34D', fontSize: '12px', fontWeight: '600' }}>
            Copy and paste any of these commands into browser console for emergency fixes.
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Browser console commands for emergency ResizeObserver error suppression.',
      },
    },
  },
};
