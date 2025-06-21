import AddTodo from "@/components/AddTodo"; // Component to add a new todo item
import Todos from "@/components/Todos"; // Component to display list of todos

export default function Home() {
  return (
    <section className="flex flex-col items-center min-h-screen space-y-16 py-20">
      <h1 className="text-6xl font-bold">This is the todolist app</h1>
      <div className="flex flex-col w-full h-fit items-center justify-center space-y-8">
        <AddTodo />
        <Todos />
      </div>
    </section>
  );
}
