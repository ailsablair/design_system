// ResizeObserver error handling imports (no immediate execution)
import { initImmediateSuppression } from './utils/immediateResizeObserverSuppression'
import { setupResizeObserverErrorHandler, forceSupressResizeObserverErrors, initEarlyErrorSuppression } from './utils/resizeObserverHandler'

// Initialize ResizeObserver error handling after DOM is ready
if (typeof window !== 'undefined') {
  // Wait for DOM ready to avoid build-time side effects
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initEarlyErrorSuppression();
      initImmediateSuppression();
      setupResizeObserverErrorHandler();
      forceSupressResizeObserverErrors();
    });
  } else {
    // DOM already loaded
    initEarlyErrorSuppression();
    initImmediateSuppression();
    setupResizeObserverErrorHandler();
    forceSupressResizeObserverErrors();
  }
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
