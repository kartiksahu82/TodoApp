import React from "react";
import Task from "./task";
import "./App1.css";

function item({ name, date, onDeleteClick }) {
  return (
    <div id="colset">
      <div className="col">
        +
        <div>
          <h1 className="t1">{name}</h1>
        </div>
        <div className="t1 t2">
          <h1>{date}</h1>
        </div>
        <div className="t1 non">
          <button
            type="button"
            onClick={() => onDeleteClick(name)}
            className="focus:outline-none btn text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default item;
