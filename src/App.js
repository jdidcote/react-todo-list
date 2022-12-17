import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [showCreateTodo, setShowCreateTodo] = useState(false);

  const handleDisplayCreateTodo = () => {
    return showCreateTodo ? "block" : "hidden";
  };

  const handleAddTodo = (todo) => {
    todo.id = todos.length;
    setTodos(todos.concat(todo));
    console.log(todos);
  };

  return (
    <div className="font-poppins">
      <header className="container mx-auto p-6">
        <h1 className="flex items-center justify-center text-4xl font-medium">
          To-do App
        </h1>
        <div className="flex items-center justify-center">
          <button
            className="hover:bg-blue-200 rounded-lg bg-blue-300 p-2 pt-1 pb-1 mt-4 ml-2 mr-2"
            onClick={() => setShowCreateTodo(true)}
          >
            Add item
          </button>
        </div>
      </header>
      <CreateTodo
        handleSubmit={handleAddTodo}
        isTodoVisible={handleDisplayCreateTodo}
        setShowCreateTodo={setShowCreateTodo}
      />
      <div className="grid grid-cols-4 gap-4">
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
