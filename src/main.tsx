// Import and set up ResizeObserver error handling FIRST
import { setupResizeObserverErrorHandler } from './utils/resizeObserverHandler'

// Emergency early suppression before full setup
if (typeof window !== 'undefined') {
  const originalError = window.console.error;
  window.console.error = (...args: any[]) => {
    const isResizeError = args.some(arg =>
      String(arg).toLowerCase().includes('resizeobserver') ||
      String(arg).toLowerCase().includes('undelivered notifications')
    );
    if (!isResizeError) {
      originalError.apply(window.console, args);
    }
  };
}

// Set up ResizeObserver error handling immediately
setupResizeObserverErrorHandler()

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
