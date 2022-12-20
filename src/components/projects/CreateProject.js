import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateProject(props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Project title cannot be empty");
      return;
    }

    props.handleSubmit(title);
  };

  const handleClose = (e) => {
    e.preventDefault();
    props.setShowCreateProject(false);
  };

  const formLabel = "text-slate-500 md:w-1/3 flex-none";
  const formSection =
    "flex space-x-4 justify-start items-center mb-3 mt-3 ml-5 mr-4";
  const inputStyle = "bg-slate-200 rounded px-2";

  return (
    <div
      className={
        "container mx-auto border-4 max-w-sm flex flex-row rounded-md border-slate-400 text-center absolute left-0 right-0 bg-white " +
        props.isProjectVisible()
      }
    >
      <form>
        <div className={formSection}>
          <label className={formLabel}>Title</label>
          <input
            className={inputStyle}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            required
          ></input>
        </div>
        <div className="flex justify-center m-auto ml-28 w-max mt-0">
          <button
            onClick={handleClose}
            className="hover:bg-red-200 rounded-lg bg-red-300 p-2 pt-1 pb-1 mt-0 mb-2 mx-2"
          >
            Close
          </button>
          <button
            onClick={(e) => props.handleSubmit(e)}
            className="hover:bg-green-200 rounded-lg bg-emerald-300 p-2 pt-1 pb-1 mt-0 mb-2 mx-2"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
