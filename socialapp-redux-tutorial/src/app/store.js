import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'


console.log('postsReducer', postsReducer)

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
})
