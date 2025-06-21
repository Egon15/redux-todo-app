// Type representing a single todo item
export type Todo = {
  id: string;
  text: string;
};

// Type representing the shape of the todo-related Redux state
export type TodoState = {
  todos: Todo[];
  editingTodo: Todo | null; // Currently edited todo (null if not editing)
};
