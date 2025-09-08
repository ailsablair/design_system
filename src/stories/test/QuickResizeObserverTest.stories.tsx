import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Test/Quick ResizeObserver Error Test',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Quick ResizeObserver Error Test

This test immediately triggers ResizeObserver errors to verify they are suppressed.
**Expected Result**: No ResizeObserver errors should appear in the browser console.
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const ImmediateTest: Story = {
  render: () => {
    // Trigger ResizeObserver errors immediately when component renders
    React.useEffect(() => {
      console.log('🧪 Triggering ResizeObserver errors for suppression test...');
      
      // These should be completely suppressed
      console.error('ResizeObserver loop completed with undelivered notifications.');
      console.warn('ResizeObserver loop completed with undelivered notifications.');
      console.error('ResizeObserver loop limit exceeded');
      console.warn('ResizeObserver: Undelivered notifications');
      console.error('Observer loop completed');
      console.warn('Resize loop detected');
      
      // This should appear (normal message)
      console.log('✅ Normal message - this should appear in console');
      console.log('🔍 Check console - only normal messages should be visible');
      
      setTimeout(() => {
        console.log('✅ ResizeObserver suppression test completed');
      }, 100);
    }, []);

    const triggerMoreErrors = () => {
      console.log('🧪 Manual trigger of ResizeObserver errors...');
      
      // Trigger various ResizeObserver error patterns
      const errorPatterns = [
        'ResizeObserver loop completed with undelivered notifications.',
        'ResizeObserver loop limit exceeded',
        'Undelivered notifications in ResizeObserver',
        'Observer loop completed with undelivered notifications',
        'Resize observer loop detected',
        'ResizeObserver callback error'
      ];
      
      errorPatterns.forEach((pattern, index) => {
        setTimeout(() => {
          console.error(pattern);
          console.warn(pattern);
        }, index * 50);
      });
      
      setTimeout(() => {
        console.log('✅ Manual error trigger completed - check console');
      }, 500);
    };

    const createActualResizeLoop = () => {
      console.log('🔄 Creating actual ResizeObserver loop...');
      
      const testDiv = document.createElement('div');
      testDiv.style.cssText = `
        width: 100px;
        height: 100px;
        background: #ff4444;
        position: absolute;
        top: -1000px;
        left: -1000px;
      `;
      document.body.appendChild(testDiv);
      
      let count = 0;
      const observer = new ResizeObserver(() => {
        count++;
        if (count < 20) {
          // This will cause ResizeObserver loops
          testDiv.style.width = `${100 + count}px`;
        }
      });
      
      observer.observe(testDiv);
      
      setTimeout(() => {
        observer.disconnect();
        document.body.removeChild(testDiv);
        console.log('✅ ResizeObserver loop test completed');
      }, 2000);
    };

    const testGlobalFunction = () => {
      if (typeof (window as any).emergencyResizeObserverSuppress === 'function') {
        console.log('🚨 Global emergency function available - triggering...');
        (window as any).emergencyResizeObserverSuppress();
        console.log('✅ Emergency suppression activated');
      } else {
        console.log('⚠️ Global emergency function not available');
      }
    };

    return (
      <div style={{ 
        maxWidth: '600px', 
        padding: '24px',
        fontFamily: 'Inter, system-ui, sans-serif',
        textAlign: 'center'
      }}>
        
        <h2 style={{ marginBottom: '16px', color: '#111827' }}>
          ResizeObserver Error Suppression Test
        </h2>
        
        <p style={{ color: '#6B7280', marginBottom: '24px', fontSize: '14px' }}>
          This test triggers ResizeObserver errors immediately when loaded.
          <br />
          <strong style={{ color: '#DC2626' }}>
            Check browser console - NO ResizeObserver errors should appear!
          </strong>
        </p>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
          marginBottom: '24px'
        }}>
          <button
            onClick={triggerMoreErrors}
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
            🧪 Trigger Errors
          </button>

          <button
            onClick={createActualResizeLoop}
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
            🔄 Create Loop
          </button>

          <button
            onClick={testGlobalFunction}
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
            🚨 Emergency Fix
          </button>
        </div>

        <div style={{ 
          background: '#FEF2F2',
          border: '1px solid #FECACA',
          borderRadius: '8px',
          padding: '16px',
          fontSize: '14px'
        }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#DC2626' }}>
            🎯 Expected Results:
          </h4>
          <ul style={{ margin: '0', paddingLeft: '20px', textAlign: 'left' }}>
            <li>No "ResizeObserver" errors in browser console</li>
            <li>Normal log messages still appear</li>
            <li>No error popups or notifications</li>
            <li>Storybook continues working normally</li>
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Immediate test that triggers ResizeObserver errors when the story loads. Check browser console to verify suppression.',
      },
    },
  },
};

// Need to import React for useEffect
import React from 'react';
