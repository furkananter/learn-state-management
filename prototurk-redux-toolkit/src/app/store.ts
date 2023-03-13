import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/user/authSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    // todos: todosReducer,
    // user: userReducer,
    // language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
