import React, { useState } from 'react';
import AddTodo from './features/todo/todo';
import type { User, Todo } from './app/type';
import Login from './features/auth/auth';
import Language from './features/i18n/lang';
import {
  REACT_APP_SUPABASE_KEY,
  REACT_APP_SUPABASE_URL,
} from './app/constants';

function App(): React.ReactNode {
  const [user, setUser] = useState<User>();
  // const [dark, setDark] = useState(true);

  return (
    <main className="App">
      <Login />
      <div>
        <Language />
        {/* <AddTodo /> */}
        {console.log(REACT_APP_SUPABASE_URL)}
        {REACT_APP_SUPABASE_KEY}
      </div>
    </main>
  );
}

export default App;
