import { useState } from "react";
import Projects from "./projects/Projects";
import Todo from "./todos/Todo";

export default function AppTabs() {
  const [selectedTab, setSelectedTab] = useState("projects");

  const [projects, setProjects] = useState([]);
  const [todos, setTodos] = useState([]);

  const activeTabLinkStyle =
    "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500";
  const inactiveTabLinkStyle =
    "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300";
  const tabTitleStyle = "mr-2 list-none";

  return (
    <div onChange={() => console.log(todos)}>
      <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className={tabTitleStyle}>
          <a
            href="#"
            id="projects"
            className={
              selectedTab === "projects"
                ? activeTabLinkStyle
                : inactiveTabLinkStyle
            }
            onClick={(e) => {
              setSelectedTab(e.target.id);
            }}
          >
            Projects
          </a>
        </li>
        <li className={tabTitleStyle}>
          <a
            href="#"
            className={
              selectedTab === "todos"
                ? activeTabLinkStyle
                : inactiveTabLinkStyle
            }
            id="todos"
            onClick={(e) => {
              setSelectedTab(e.target.id);
            }}
          >
            To-dos
          </a>
        </li>
      </div>
      <div>
        <div style={{ display: selectedTab === "projects" ? "block" : "none" }}>
          <Projects
            projects={projects}
            todos={todos}
            setProjects={setProjects}
          ></Projects>
        </div>
        <div style={{ display: selectedTab === "todos" ? "block" : "none" }}>
          <Todo todos={todos} projects={projects} setTodos={setTodos}></Todo>
        </div>
      </div>
    </div>
  );
}
