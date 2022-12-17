import { format } from "date-fns";

import { useState } from "react";

export default function Todo(props) {
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
    </div>
  );
}
