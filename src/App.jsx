import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateObject from './components/stateObject'

function App() {
  const [count, setCount] = useState(0)

  const initial_value = 0

  return (
    <>
      <h1>React sandbox</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>increment </button>
        <button onClick={() => setCount((count) => initial_value)}>Reset</button>
        <button onClick={() => setCount((count) => count - 1)}>Decrement </button>
        <div>{count}</div>

        <StateObject />
      </div>
    </>
  )
}

export default App
