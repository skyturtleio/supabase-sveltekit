// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
interface Todo {
  id: string;
  description: string;
  done: boolean;
}

const db = new Map();

export function getTodos(userid: string) {
  return db.get(userid);
}

export function createTodo(userid: string, description: string) {
  if (!db.has(userid)) {
    db.set(userid, []);
  }

  const todos: Todo[] = db.get(userid);

  todos.push({
    id: crypto.randomUUID(),
    description,
    done: false,
  });
}

export function deleteTodo(userid: string, todoid: string) {
  const todos: Todo[] = db.get(userid);
  const index = todos.findIndex((todo) => todo.id === todoid);

  if (index !== -1) {
    todos.splice(index, 1);
  }
}
