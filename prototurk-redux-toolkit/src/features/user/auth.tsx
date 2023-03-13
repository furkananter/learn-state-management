import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setUser, logout } from './authSlice';
const Login: React.FC = () => {
  const handleLogin = (id: number, username: string) => {
    console.log('login yapılacak');
    dispatch(setUser({ id, username }));
    console.log('login yapıldı');
  };
  const handleLogout = () => {
    dispatch(logout());
    console.log('çıkış yapıldı');
  };

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth);
  return (
    <div>
      Login
      <button
        onClick={() => {
          handleLogin(1, 'test');
        }}
      >
        Test olarak giriş yap
      </button>
      <button
        onClick={() => {
          handleLogin(2, 'test2');
        }}
      >
        Test2 olarak giriş yap
      </button>
      <button
        onClick={() => {
          dispatch(logout());
          console.log(user, 'çıkış yapıldı');
        }}
      >
        Çıkış yap
      </button>
      <div>
        {user.user ? (
          <div>
            <p>Hoşgeldin {user.user.username}</p>
            <button onClick={handleLogout}>Çıkış yap</button>
          </div>
        ) : (
          <p>Hoşgeldin misafir</p>
        )}
      </div>
    </div>
  );
};

export default Login;
