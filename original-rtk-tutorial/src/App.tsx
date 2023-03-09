import reactLogo from './assets/react.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import React, { useState } from 'react';
import {
  incremented,
  decremented,
  amountAdded,
} from './features/counter/counterSlice';
import { useFetchBreedsQuery } from './features/dogs/dogsApiSlice';

function App() {
  const [numDogs, setNumDogs] = useState(0); // [0, (num) => { ... }
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const { data, isFetching } = useFetchBreedsQuery(numDogs);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(incremented())}>
          increment {count}
        </button>
        <button onClick={() => dispatch(decremented())}>
          decrement {count}
        </button>
        <button onClick={() => dispatch(amountAdded(5))}>
          add an amount {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <p>Dogs to fetch: </p>
        <select
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
        >
          <option value="">Seçiniz</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>

      <div>
        <span>Number of breeds: {data ? data.length : 'Loading...'}</span>
        <h2>Dogs</h2>
        {isFetching && <p>Loading...</p>}
        {data && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
