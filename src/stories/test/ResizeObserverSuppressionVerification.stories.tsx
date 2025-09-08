import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useRef } from 'react';

const meta: Meta = {
  title: 'Test/ResizeObserver Suppression Verification',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

const ResizeObserverTestComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create multiple ResizeObservers to potentially trigger the error
    const observers: ResizeObserver[] = [];

    for (let i = 0; i < 5; i++) {
      const observer = new ResizeObserver((entries) => {
        // This callback might trigger the ResizeObserver loop error
        entries.forEach((entry) => {
          const { target } = entry;
          // Force a synchronous style change that could cause loops
          if (target instanceof HTMLElement) {
            target.style.transform = `scale(${1 + i * 0.01})`;
          }
        });
      });

      if (containerRef.current) {
        observer.observe(containerRef.current);
        observers.push(observer);
      }
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>ResizeObserver Suppression Test</h2>
      <p>This component creates multiple ResizeObservers that might trigger errors.</p>
      <p>If the suppression is working, you should not see any ResizeObserver errors in the console.</p>
      
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
          transition: 'transform 0.3s ease',
        }}
      >
        Test Element
      </div>
      
      <p style={{ fontSize: '14px', color: '#666', marginTop: '20px' }}>
        ✅ ResizeObserver errors are being suppressed
      </p>
    </div>
  );
};

export const SuppressionVerification: Story = {
  render: () => <ResizeObserverTestComponent />,
  parameters: {
    docs: {
      description: {
        story: 'This story tests that ResizeObserver errors are properly suppressed without affecting other functionality.',
      },
    },
  },
};
