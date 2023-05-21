import React, { useState, useEffect, useRef } from 'react'

const RefTimer = () => {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div>
      Ref Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>Clear Interval</button>
    </div>
  )
}

export default RefTimer
