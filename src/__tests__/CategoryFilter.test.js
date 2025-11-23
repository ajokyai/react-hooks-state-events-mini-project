import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import { CATEGORIES } from "../data";

test("displays a button for each category", () => {
  render(
    <CategoryFilter
      categories={CATEGORIES}
      selectedCategory="All"
      onSelectCategory={() => {}}
    />
  );

  CATEGORIES.forEach((category) => {
    expect(screen.getByText(category)).toBeInTheDocument();
  });
});

test("calls onSelectCategory when a button is clicked", () => {
  const onSelectCategory = jest.fn();

  render(
    <CategoryFilter
      categories={CATEGORIES}
      selectedCategory="All"
      onSelectCategory={onSelectCategory}
    />
  );

  const firstButton = screen.getByText(CATEGORIES[1]);
  fireEvent.click(firstButton);

  expect(onSelectCategory).toHaveBeenCalled();
});
