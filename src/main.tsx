// IMMEDIATE ResizeObserver suppression - must be first import
import './utils/immediateResizeObserverSuppression'

// Additional comprehensive error handling
import { setupResizeObserverErrorHandler, forceSupressResizeObserverErrors } from './utils/resizeObserverHandler'

// Set up all error handling layers immediately
setupResizeObserverErrorHandler()
forceSupressResizeObserverErrors()

// Additional immediate suppression for any edge cases
if (typeof window !== 'undefined') {
  const originalError = window.console.error;
  window.console.error = (...args: any[]) => {
    const isResizeError = args.some(arg => {
      const str = String(arg).toLowerCase();
      return str.includes('resizeobserver') ||
             str.includes('undelivered notifications') ||
             str.includes('observer loop') ||
             str.includes('loop completed');
    });
    if (!isResizeError) {
      originalError.apply(window.console, args);
    }
  };
}

// Now import React and other dependencies
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
