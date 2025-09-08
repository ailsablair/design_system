import React, { useEffect } from 'react';

/**
 * Story decorator that applies ResizeObserver error suppression
 * This runs only when stories are rendered, not during Storybook startup
 */
export const withResizeObserverSuppression = (StoryFn: React.ComponentType) => {
  const ResizeObserverSuppressor: React.FC = () => {
    useEffect(() => {
      // Only run in browser environment
      if (typeof window === 'undefined') return;

      // Store original console methods
      const originalError = console.error;
      let suppressionApplied = false;

      if (!suppressionApplied) {
        // Override console.error to suppress ResizeObserver errors
        console.error = function(...args: any[]) {
          const message = args.join(' ');
          if (message.includes('ResizeObserver loop completed with undelivered notifications')) {
            return; // Suppress ResizeObserver errors
          }
          originalError.apply(console, args);
        };

        // Add global error handler
        const errorHandler = (event: ErrorEvent) => {
          if (event.message?.includes('ResizeObserver loop completed with undelivered notifications')) {
            event.preventDefault();
            return false;
          }
        };

        window.addEventListener('error', errorHandler, true);

        suppressionApplied = true;

        // Cleanup function
        return () => {
          console.error = originalError;
          window.removeEventListener('error', errorHandler, true);
        };
      }
    }, []);

    return <StoryFn />;
  };

  return <ResizeObserverSuppressor />;
};
