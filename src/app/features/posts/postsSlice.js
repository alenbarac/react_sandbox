import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
const initialState = [
  { id: '1', title: 'Learning Redux', content: 'First lesson of configuring store and base slice' },
  {
    id: '2',
    title: 'The flux pattern of using redux',
    content: 'Way to implement reducers and using useSelector in components',
  },
]
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        }
      },
    },
  },
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
