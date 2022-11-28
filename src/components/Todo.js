import { format } from "date-fns";

import { useState } from "react";

export default function Todo(props) {
  return (
    <div>
      <h3>{props.todo.title}</h3>
      <h5>Description</h5>
      <p>{props.todo.description}</p>
      <h5>Due date</h5>
      <p>{format(props.todo.dueDate, "dd/mm/yyyy")}</p>
      <h5>Priority</h5>
      {props.todo.priority}
    </div>
  );
}
