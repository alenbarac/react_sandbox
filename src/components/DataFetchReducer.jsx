import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  error: '',
  post: {},
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { loading: false, post: action.payload, error: '' }

    case 'FETCH_ERROR':
      return { loading: false, post: {}, error: 'Something went wrong.' }
  }
}

export const DataFetchReducer = () => {
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        console.log(response.data)
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERROR' })
      })
  }, [])

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      {state.loading ? 'Loading' : state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchReducer
