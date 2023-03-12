import type { User } from '../../app/type';

export default function Header({
  user,
  setUser,
}: {
  user: User;
  setUser: any;
}) {
  const loginHandle = (user: User) => {
    setUser(user);
  };
  const logoutHandle = () => {
    setUser(false);
  };

  return (
    <header>
      <h1>Todo App</h1>
      {user ? (
        <>
          <p>{user.name} olarak giriş yaptınız.</p>
          <button onClick={logoutHandle}>Çıkış Yap!</button>
        </>
      ) : (
        <nav>
          <button onClick={() => loginHandle({ id: 1, name: 'Furkan' })}>
            Furkan Olarak Giriş Yap
          </button>
          <button onClick={() => loginHandle({ id: 2, name: 'Şevval' })}>
            Şevval Olarak Giriş Yap
          </button>
        </nav>
      )}
    </header>
  );
}
