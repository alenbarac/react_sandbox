import { useState } from 'react'
const StateObject = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' })
  return (
    <form action="">
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h3>your Firstname is - {name.firstName}</h3>
      <h3>your LastName is - {name.lastName}</h3>
    </form>
  )
}

export default StateObject
