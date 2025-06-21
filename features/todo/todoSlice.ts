import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoState } from "@/types/TodosType";

const initialState: TodoState = {
  todos: [{ id: "1", text: "Hello World" }],
  editingTodo: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string }>) => {
      const todo: Todo = {
        id: nanoid(),
        text: action.payload.text,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: string; newText: string }>
    ) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.newText;
      }
    },
    setEditingTodo: (state, action: PayloadAction<Todo>) => {
      state.editingTodo = action.payload;
    },
    clearEditingTodo: (state) => {
      state.editingTodo = null;
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
