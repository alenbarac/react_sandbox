import React, { useState, useMemo } from 'react'

const MemoCounter = () => {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  const isEven = useMemo(() => {
    let i = 0
    while (i < 200000000) i++
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <>
      <div>
        <button onClick={incrementOne}>Count one - {counterOne}</button>
        <span>{isEven ? 'even' : 'odd'}</span>
      </div>

      <div>
        <button onClick={incrementTwo}>Count two - {counterTwo}</button>
      </div>
    </>
  )
}

export default MemoCounter
