import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IconButton } from './stories/IconButton'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleButtonClick = () => {
    setLoading(true)
    setTimeout(() => {
      setCount((count) => count + 1)
      setLoading(false)
    }, 1000)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Design System Components</h1>
      <div className="card">
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
          <IconButton label="Default" />
          <IconButton label={`Count: ${count}`} loading={loading} onClick={handleButtonClick} />
          <IconButton label="Disabled" disabled={true} />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the buttons above to see the IconButton component in action
      </p>
    </>
  )
}

export default App
