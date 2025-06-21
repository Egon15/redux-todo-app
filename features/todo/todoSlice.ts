import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoState } from "@/types/TodosType";

const initialState: TodoState = {
  todos: [], // List of todos
  editingTodo: null, // Todo currently being edited
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string }>) => {
      const todo: Todo = {
        id: nanoid(), // Generate unique ID for new todo
        text: action.payload.text,
      };
      state.todos.push(todo); // Add new todo to the list
    },
    removeTodo: (state, action: PayloadAction<{ id: string }>) => {
      // Remove todo with matching ID
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: string; newText: string }>
    ) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.newText; // Update todo text if found
      }
    },
    setEditingTodo: (state, action: PayloadAction<Todo>) => {
      state.editingTodo = action.payload; // Set todo being edited
    },
    clearEditingTodo: (state) => {
      state.editingTodo = null; // Exit editing mode
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  setEditingTodo,
  clearEditingTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
