import React, { useState } from "react";

import CreateTodo from "./CreateTodo";
import TodoCard from "./TodoCard";

export default function Todo(props) {
  const [showCreateTodo, setShowCreateTodo] = useState(false);

  const updateTodoStatus = (todoId, completionStatus) => {
    const idToModify = props.todos.filter((todo) => todo.id == todoId);

    const newTodos = props.todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isComplete: completionStatus };
      } else {
        return todo;
      }
    });
    props.setTodos(newTodos);
  };

  const handleDisplayCreateTodo = () => {
    return showCreateTodo ? "block" : "hidden";
  };

  const isNewTodoTitleUnique = (todo) => {
    // Checks if the title for the new todo already exists
    let isUnique = true;
    props.todos.map((item) => {
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
    todo.id = props.todos.length;
    props.setTodos(props.todos.concat(todo));
    setShowCreateTodo(false);
  };

  const getAssociatedTodos = (projectID = null) => {
    if (projectID === null) {
      return props.todos;
    }
    // Gets a list of todos associated with a certain project
    return props.todos.filter((todo) => todo.projectID == projectID);
  };

  return (
    <div
      className="font-poppins container md m-auto"
      onChange={() => console.log(getAssociatedTodos(props.selectedProject))}
    >
      <header className="container mx-auto p-6">
        <h1 className="flex items-center justify-center text-4xl font-medium">
          To-dos
        </h1>
        <div className="flex items-center justify-center">
          <button
            className="hover:bg-blue-200 rounded-lg bg-blue-300 p-2 pt-1 pb-1 mt-4 ml-2 mr-2"
            onClick={() => {
              if (props.projects.length == 0) {
                alert("Create a project before adding to-dos");
                return;
              }
              setShowCreateTodo(true);
            }}
          >
            Add item
          </button>
        </div>
      </header>
      <CreateTodo
        handleSubmit={handleAddTodo}
        isTodoVisible={handleDisplayCreateTodo}
        setShowCreateTodo={setShowCreateTodo}
        projects={props.projects}
      />
      <div className="flex flex-col w-2/6 m-auto">
        {getAssociatedTodos(props.selectedProject).map((todo) => {
          return (
            <TodoCard
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
