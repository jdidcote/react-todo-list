import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    todo.id = todos.length;
    setTodos(todos.concat(todo));
    console.log(todos);
  };

  return (
    <div>
      <CreateTodo handleSubmit={handleAddTodo} />
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default App;
