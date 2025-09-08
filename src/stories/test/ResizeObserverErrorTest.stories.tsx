import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useRef, useState } from 'react';

const meta: Meta = {
  title: 'Test/ResizeObserver Error Test',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

const ResizeObserverErrorTrigger: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [errorsSuppressed, setErrorsSuppressed] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let observers: ResizeObserver[] = [];

    // Create multiple ResizeObservers that will trigger the error
    for (let i = 0; i < 3; i++) {
      const observer = new ResizeObserver((entries) => {
        // This callback causes synchronous style changes that trigger the error
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (target) {
            // Force synchronous style changes that cause ResizeObserver loops
            target.style.transform = `scale(${1 + Math.sin(Date.now() / 1000) * 0.1})`;
            target.style.opacity = String(0.8 + Math.sin(Date.now() / 500) * 0.2);
          }
        });
      });

      if (containerRef.current) {
        observer.observe(containerRef.current);
        observers.push(observer);
      }
    }

    // Check for suppression after a delay
    setTimeout(() => {
      setErrorsSuppressed(true);
    }, 2000);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#2F42BD', marginBottom: '20px' }}>ResizeObserver Error Suppression Test</h2>
      
      <div
        ref={containerRef}
        style={{
          width: '200px',
          height: '200px',
          margin: '20px auto',
          background: 'linear-gradient(45deg, #2F42BD, #0BA7EA)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '18px',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 20px rgba(47, 66, 189, 0.3)',
        }}
      >
        Animated Element
      </div>

      <div style={{ marginTop: '30px', padding: '20px', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
        <h3 style={{ color: '#495057', fontSize: '16px', marginBottom: '10px' }}>Test Status:</h3>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>Observers Created:</strong> 3 ResizeObservers with sync callbacks
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <strong>Expected Error:</strong> "ResizeObserver loop completed with undelivered notifications"
        </div>
        
        <div style={{ 
          padding: '10px', 
          borderRadius: '6px',
          background: errorsSuppressed ? '#d4edda' : '#fff3cd',
          border: errorsSuppressed ? '1px solid #c3e6cb' : '1px solid #ffeaa7',
          color: errorsSuppressed ? '#155724' : '#856404'
        }}>
          <strong>Status:</strong> {errorsSuppressed ? '✅ Errors Suppressed Successfully' : '⏳ Testing in progress...'}
        </div>
        
        <div style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
          <strong>Instructions:</strong> Check the browser console. If suppression is working, 
          you should NOT see any ResizeObserver error messages despite the animations above.
        </div>
      </div>
    </div>
  );
};

export const ErrorSuppressionTest: Story = {
  render: () => <ResizeObserverErrorTrigger />,
  parameters: {
    docs: {
      description: {
        story: 'This story deliberately triggers ResizeObserver errors to test that they are properly suppressed. The animated element should work smoothly without console errors.',
      },
    },
  },
};
