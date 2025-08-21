// Import and set up ResizeObserver error handling FIRST
import { setupResizeObserverErrorHandler } from './utils/resizeObserverHandler'

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
