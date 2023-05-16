import React from 'react'

import { useReducer } from 'react'

const initialState = {
  initialCount: 0,
  secondCounter: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, initialCount: state.initialCount + action.value }
    case 'decrement':
      return { ...state, initialCount: state.initialCount - action.value }

    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value }
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value }

    case 'reset':
      return initialState
    default:
      return state
  }
}

const Counter2Reducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <div>
        <div>{count.initialCount}</div>
        <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>

        <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>

      <div>
        <div>{count.secondCounter}</div>
        <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement</button>

        <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </>
  )
}

export default Counter2Reducer
