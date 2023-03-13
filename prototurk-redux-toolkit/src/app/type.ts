interface Todo {
  
  id: string | null;
  title: string | null;
  completed: boolean | null;
}
interface User {
  // yani id number olabilir ve name string olabilir.
  id: number;
  username: string;
}
interface AuthState {
  // yani user null olabilir ya da User olabilir.
  user: User | null;
}
// Devamı gelir belki... Burada interface'lerin kullanımı yapıldı..

export type { Todo, User, AuthState };