import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

// const initialState = {
//   status: 'idle',
//   error: null,
//   notifications: [],
// }
export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (_, { getState }) => {
    const allNotifications = selectAllNotifications(getState())
    const [latestNotification] = allNotifications
    const latesTimestamp = latestNotification ? latestNotification.date : ''
    const response = await client.get(
      `/fakeApi/notifications?since=${latesTimestamp}`
    )
    return response.data
  }
)

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {
    allNotificationsRead(state, action) {
      state.forEach((notification) => {
        notification.read = true
      })
    },
  },
  extraReducers(builder) {
    builder
      // .addCase(fetchNotifications.pending, (state, action) => {
      //   state.status = 'loading'
      // })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.push(...action.payload)
        state.forEach((notification) => {
          notification.isNew = !notification.read
        })
        state.sort((a, b) => b.date.localeCompare(a.date))
      })
    // .addCase(fetchNotifications.rejected, (state, action) => {
    //   state.status = 'failed'
    //   state.error = action.error.message
    // })
  },
})

export const { allNotificationsRead } = notificationsSlice.actions
export default notificationsSlice.reducer
export const selectAllNotifications = (state) => state.notifications
