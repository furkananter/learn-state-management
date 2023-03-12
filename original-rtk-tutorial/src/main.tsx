import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* 
      Provider bizim store'umuzu tüm uygulamamızın içinde kullanabilmemizi sağlayan bir bileşendir. 
      Bu bileşenin içerisine store'u tanımladığımız değişkeni vererek, tüm uygulamamızın içinde
      store'u kullanabilmemizi sağlıyoruz.
    */}
    <Provider store={store}>
      {/*
        App bileşenimizi Provider bileşeninin içerisine yerleştiriyoruz.
        Bu sayede tüm uygulamamızın içinde store'u kullanabilmemizi sağlıyoruz.
      */}
      <App />
    </Provider>
  </React.StrictMode>
);
