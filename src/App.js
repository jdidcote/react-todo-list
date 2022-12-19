import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [showCreateTodo, setShowCreateTodo] = useState(false);

  const updateTodoStatus = (todoId, completionStatus) => {
    const idToModify = todos.filter((todo) => todo.id == todoId);

    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isComplete: completionStatus };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const handleDisplayCreateTodo = () => {
    return showCreateTodo ? "block" : "hidden";
  };

  const isNewTodoTitleUnique = (todo) => {
    // Checks if the title for the new todo already exists
    let isUnique = true;
    todos.map((item) => {
      if (todo.title === item.title) {
        isUnique = false;
      }
    });
    return isUnique;
  };

  const handleAddTodo = (todo) => {
    if (!isNewTodoTitleUnique(todo)) {
      alert("Todo titles need to be unique");
      return;
    }
    todo.id = todos.length;
    setTodos(todos.concat(todo));
    setShowCreateTodo(false);
  };

  return (
    <div className="font-poppins container md m-auto">
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
      <div className="flex flex-col w-2/6 m-auto">
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              updateTodoStatus={updateTodoStatus}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
