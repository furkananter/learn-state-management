interface Todo {
  id: number | null;
  title: string | null;
  completed: boolean | null;
}
interface User {
  id: number | any;
  name: string | any;
}
// Devamı gelir belki... Burada interface'lerin kullanımı yapıldı..

export type { Todo, User };