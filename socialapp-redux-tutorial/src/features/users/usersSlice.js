import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = [
  { id: '0', name: 'Furkan' },
  { id: '1', name: 'Sevval' },
  { id: '2', name: 'Omer' },
]

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  return response.data
})

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export const selectAllUsers = (state) => state.users
export const selectUserById = (state, userId) => state.users.find((user) => user.id === userId)


export default userSlice.reducer
