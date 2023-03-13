import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addTodo } from './todoSlice';

const EditTodo = () => {
  const dispatch = useAppDispatch();
  // const todos = useAppSelector((state) => state.todo.todos);

  const handleEditTodo = (id: number, content: string) => {
    dispatch(addTodo({ id, content }));
  };

  return (
    <div>
      EditTodo
      <p>
        {/* {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))} */}
      </p>
    </div>
  );
};

export default EditTodo;
