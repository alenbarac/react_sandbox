import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateObject from './components/stateObject'
import StateArray from './components/stateArray'
import HookMouse from './components/hookMouse'
import MouseContainer from './components/MouseContainer'
import IntervalCount from './components/intervalCount'
import DataFetching from './components/DataFetching'
import CounterReducer from './components/CounterReducer'
import Counter2Reducer from './components/Counter2Reducer'
import DataFetchReducer from './components/DataFetchReducer'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  const initial_value = 0

  useEffect(() => {
    console.log('update title value')
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <>
      <h1>React sandbox</h1>
      <div className="card">
        <DataFetchReducer />
        {/* <Counter2Reducer /> */}
      </div>
      {/* <div className="card">
        <IntervalCount />
      </div> */}
      {/* <div className="card">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>increment </button>
        <button onClick={() => setCount((count) => initial_value)}>Reset</button>
        <button onClick={() => setCount((count) => count - 1)}>Decrement </button>
        <div>{count}</div>
        <hr />
        STATE OBJECT
        <StateObject />
        <hr />
        STATE ARRAY
        <StateArray />
        <MouseContainer />
      </div> */}
    </>
  )
}

export default App
