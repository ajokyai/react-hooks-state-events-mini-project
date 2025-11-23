import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Task from "../components/Task";

test("displays the task text and category", () => {
  const mockTask = { text: "Buy rice", category: "Food" };

  render(<Task task={mockTask} onDeleteTask={() => {}} />);

  expect(screen.getByText("Buy rice")).toBeInTheDocument();
  expect(screen.getByText("Food")).toBeInTheDocument();
});

test("calls onDeleteTask when delete button is clicked", () => {
  const mockTask = { text: "Buy rice", category: "Food" };
  const onDeleteTask = jest.fn();

  render(<Task task={mockTask} onDeleteTask={onDeleteTask} />);

  const deleteButton = screen.getByText(/x/i);
  fireEvent.click(deleteButton);

  expect(onDeleteTask).toHaveBeenCalled();
});
