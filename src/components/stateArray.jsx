import { useState } from 'react'

const StateArray = () => {
  const [items, setItems] = useState([])
  const addItem = () => {
    setItems([...items, { id: items.length, value: Math.floor(Math.random() * 10) + 1 }])
  }
  return (
    <div>
      <button onClick={addItem}>Add item</button>
      <button onClick={() => setItems([])}>Reset</button>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {index}:{item.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StateArray
