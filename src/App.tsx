import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Logo } from './stories/foundations/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <Logo variant="full" color="brand" size="large" />
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Echo Design System</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Ready to build your design system components
        </p>
      </div>
      <p className="read-the-docs">
        Your design system is ready for new components
      </p>
    </>
  )
}

export default App
