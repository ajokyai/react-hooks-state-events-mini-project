import React from "react";

function Task({ task, onDeleteTask }) {
  return (
    <li>
      <span>{task.text}</span> <span>{task.category}</span>
      <button onClick={() => onDeleteTask(task)}>x</button>
    </li>
  );
}

export default Task;
