import { nanoid } from '@reduxjs/toolkit';
import React, { ChangeEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { addTodo } from './todoSlice';

const TodoEkle = () => {
  const [todo, setTodo] = React.useState<String>('');
  const [completed, setCompleted] = React.useState<Boolean>(false);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const todos = useAppSelector((state) => state.todo);

  const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   dispatch(addTodo({ id: nanoid(), content: 'todo 1', compsleted: false }));
  //   console.log('todo eklendi');
  // };
  const handleSubmit = (e: HTMLFormElement) => {
    e.preventDefault();
    dispatch(addTodo({ id: nanoid(), content: todo, completed: false }));
    console.log('todo eklendi', todo, user, completed);
  };

  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            handleChangeTodo(e);
          }}
          type="text"
        />
        <button disabled={user ? false : true} onClick={() => handleSubmit}>
          Ekle
        </button>
      </div>
      <div>
        <h2>Todolar</h2>
        <ul>
          {todos.map((todox) => (
            <li key={todox.id}>
              {todox.content}
              <button>Sil</button>
              {/* {todox.completed ? (
                <button
                  onClick={() => {
                    useAppSelector(
                      (state) =>
                        state.todos.completed === !state.todos.completed
                    );
                  }}
                >
                  Yapıldı
                </button>
              ) : (
                <button>Yapılmadı</button>
              )} */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoEkle;
