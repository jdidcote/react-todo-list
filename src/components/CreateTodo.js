import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit({ title, description, dueDate });
  };

  return (
    <div>
      <form>
        <label>Title</label>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        ></input>

        <label>Description</label>
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></input>
        <label> Due date</label>
        <DatePicker
          onChange={(e) => {
            setDueDate(e);
          }}
          selected={dueDate}
        />
        <label>Priority</label>
        <input
          onChange={(e) => {
            setPriority(e.target.value);
          }}
          value={priority}
        ></input>

        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}
