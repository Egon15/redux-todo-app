"use client";
import { useState, FormEvent, ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/features/todo/todoSlice";

const AddTodo: FC = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim()) {
      dispatch(addTodo({ text: input }));
      setInput("");
    }
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={handleInputChange}
      />
      <button type="submit" className="text-white bg-indigo-500 border-0 py-2">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
