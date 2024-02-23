import React from "react";

export default function TaskList(props) {
  return (
    <div className="todo-container">
      <li>
        <div className="tasks-list">
          <span className="input-task">{props.item}</span>
        </div>
        <div className="icons">
          <i
            className="fa-solid fa-trash-can icon-delete"
            onClick={(e) => props.delete(props.index)}
          ></i>
        </div>
      </li>
    </div>
  );
}
