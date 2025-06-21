"use client";
import { useEffect, useState, FormEvent, ChangeEvent, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  updateTodo,
  clearEditingTodo,
} from "@/features/todo/todoSlice";
import { TodoState } from "@/types/TodosType";

const AddTodo: FC = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();

  const editingTodo = useSelector((state: TodoState) => state.editingTodo);

  useEffect(() => {
    if (editingTodo) {
      setInput(editingTodo.text);
    }
  }, [editingTodo]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.trim()) return;

    if (editingTodo) {
      dispatch(updateTodo({ id: editingTodo.id, newText: input }));
      dispatch(clearEditingTodo());
    } else {
      dispatch(addTodo({ text: input }));
    }
    setInput("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-x-3 mt-12 text-xl flex justify-between min-w-md"
    >
      <input
        type="text"
        className="rounded border bg-gray-900 border-gray-800 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8"
        placeholder="Enter a Todo"
        value={input}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="text-white bg-indigo-700 rounded-sm py-2 px-6"
      >
        {editingTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
};

export default AddTodo;
