import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import todoReducer from '../features/todo/todoSlice';
import languageReducer from '../features/i18n/languageSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
    language: languageReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
