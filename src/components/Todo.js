import { format } from "date-fns";

import { useState } from "react";

export default function Todo(props) {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="border-2 flex-col border-black p-2 rounded-lg">
      <p className="text-center font-bold text-xl">{props.todo.title}</p>
      <p className="text-center italic">{props.todo.description}</p>
      <div className="flex flex-row justify-start">
        <p className="mr-4 font-bold text-slate-500">Due</p>
        <p>{format(props.todo.dueDate, "dd/mm/yyyy")}</p>
      </div>
      <div className="flex flex-row justify-start text-slate-500">
        <p className="mr-4 font-bold">Priority</p>
        {props.todo.priority}
      </div>
      <div>
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isComplete}
            onChange={(e) => {
              props.updateTodoStatus(props.todo.id, !isComplete);
              setIsComplete(!isComplete);
            }}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {isComplete ? "complete" : "incomplete"}
          </span>
        </label>
      </div>
    </div>
  );
}
