import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import userReducer from '../features/user/userSlice';
import languageReducer from '../features/language/languageSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    user: userReducer,
    lang: languageReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
