"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, setEditingTodo } from "@/features/todo/todoSlice";
import { Todo, TodoState } from "@/types/TodosType";
import { MdDelete, MdEdit } from "react-icons/md";

const Todos = () => {
  const todos = useSelector((state: TodoState) => state.todos); // Get list of todos from Redux store
  const dispatch = useDispatch();

  return (
    <div className="min-w-lg p-8 rounded-lg text-lg space-y-8">
      <h1 className="text-3xl font-semibold">Todos</h1>
      <ul className="list-none">
        {todos.map((todo: Todo) => (
          <li
            className="mt-4 flex justify-between items-center border-b border-gray-500 p-3"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <div className="space-x-2 flex justify-center items-center">
              <button
                onClick={() => dispatch(setEditingTodo(todo))}
                className="text-white bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-md"
              >
                <MdEdit />
              </button>
              <button
                onClick={() => dispatch(removeTodo({ id: todo.id }))}
                className="text-white bg-red-700 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <MdDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
