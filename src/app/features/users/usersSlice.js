import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'Dude Lebowski' },
  { id: '2', name: 'Mickey Mouse' },
  { id: '3', name: 'Ivan Drago' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer
