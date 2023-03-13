import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import type { User, Todo } from '../../app/type';

const AddTodo = () => {
  const [todo, setTodo] = React.useState('');

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: nanoid(),
      title: todo,
      completed: false,
    };
    console.log(newTodo);
  };

  return <div>Add</div>;
};

export default AddTodo;
