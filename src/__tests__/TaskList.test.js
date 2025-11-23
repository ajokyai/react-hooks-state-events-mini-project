import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../components/TaskList";

test("renders tasks and calls onDeleteTask", () => {
  const tasks = [
    { text: "Task 1", category: "Fun" },
    { text: "Task 2", category: "Work" },
  ];

  const onDeleteTask = jest.fn();

  render(<TaskList tasks={tasks} onDeleteTask={onDeleteTask} />);

  expect(screen.getByText("Task 1")).toBeInTheDocument();
  expect(screen.getByText("Task 2")).toBeInTheDocument();

  const deleteButtons = screen.getAllByText(/x/i);
  fireEvent.click(deleteButtons[0]);

  expect(onDeleteTask).toHaveBeenCalled();
});
