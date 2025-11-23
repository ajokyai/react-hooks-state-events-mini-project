import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";

test("calls onTaskFormSubmit with text and category", () => {
  const onTaskFormSubmit = jest.fn();
  render(<NewTaskForm onTaskFormSubmit={onTaskFormSubmit} />);

  const textInput = screen.getByPlaceholderText(/new task/i);
  const categorySelect = screen.getByRole("combobox");
  const submitButton = screen.getByText(/add task/i);

  fireEvent.change(textInput, { target: { value: "Buy rice" } });
  fireEvent.change(categorySelect, { target: { value: "Food" } });
  fireEvent.click(submitButton);

  expect(onTaskFormSubmit).toHaveBeenCalledWith({
    text: "Buy rice",
    category: "Food",
  });
});
