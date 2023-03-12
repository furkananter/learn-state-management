import React, { useState } from 'react';
import Header from './features/user/Header';
import type { User, Todo } from './app/type';

function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState<User>();
  const [lang, setLang] = useState('tr'); // tr, en
  const [dark, setDark] = useState(true);

  return (
    <main className="App">
      <Header user={user} setUser={setUser} />
      <AddTodo user={user} />
      <TodoList todos={todos} user={user} />
    </main>
  );
}

export default App;
