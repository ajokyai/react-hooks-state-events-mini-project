import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

test("adds a new task to the list", () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/new task/i);
  const select = screen.getByRole("combobox");
  const button = screen.getByText(/add task/i);

  fireEvent.change(input, { target: { value: "Buy rice" } });
  fireEvent.change(select, { target: { value: "Food" } });
  fireEvent.click(button);

  expect(screen.getByText(/Buy rice/)).toBeInTheDocument();
});
