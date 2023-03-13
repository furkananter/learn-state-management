import { createSlice, PrepareAction } from '@reduxjs/toolkit';
import { Todo } from '../../app/type';
import { nanoid } from '@reduxjs/toolkit';

const initialState = {
  todo: [
    {
      id: null,
      content: '',
      completed: false,
    },
  ],
  status: 'idle',
  error: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({
        id: nanoid(),
        content: action.payload.content,
        completed: false,
      });
    },
    editTodo: (state, action) => {
      const todo = state.todo.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.content = action.payload.content;
      }
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload.id);
    },
  },
});
/* 
 Şimdi redux toolkit, typescript ve react kullanarak vite eşliğinde bir todo uygulaması geliştiriyorum.
 Bu uygulamanın içerisinde kullanıcı login olmadan todo paylaşılamıyor. Login olması için ise ,
 x ile giriş yap butonuna bastığında bir obje döndürüyor ve {id: 1, username: 'x'} ,
 y ile giriş yap dediğimizde ise {id: 2, username: 'y'} olarak user'ımızı setUser ile kaydediyoruz.
 Bu uygulamayı redux toolkit ve typescript kullanarak geliştirmem için bana rehberlik eder misin?
 neler yapmalıyım aşamaları kod örnekleriyle açıkla 
*/

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
