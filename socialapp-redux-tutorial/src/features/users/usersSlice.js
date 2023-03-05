import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Furkan' },
  { id: '1', name: 'Sevval' },
  { id: '2', name: 'Omer' },
]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  // extraReducers(builder) {},
})

export default userSlice.reducer
