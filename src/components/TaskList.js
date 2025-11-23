import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.text + task.category} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </ul>
  );
}

export default TaskList;
