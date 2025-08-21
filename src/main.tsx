// Import and set up ResizeObserver error handling FIRST\nimport { setupResizeObserverErrorHandler } from './utils/resizeObserverHandler'\n\n// Set up ResizeObserver error handling immediately\nsetupResizeObserverErrorHandler()\n\n// Now import React and other dependencies\nimport { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { setupResizeObserverErrorHandler } from './utils/resizeObserverHandler'

// Set up ResizeObserver error handling
setupResizeObserverErrorHandler()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
