import React, { useState } from 'react';
import AddTodo from './features/todo/add';
import type { User, Todo } from './app/type';
import Login from './features/user/auth';

function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState<User>();
  const [lang, setLang] = useState('tr'); // tr, en
  const [dark, setDark] = useState(true);

  return (
    <main className="App">
      <Login />
      <AddTodo />
    </main>
  );
}

export default App;
