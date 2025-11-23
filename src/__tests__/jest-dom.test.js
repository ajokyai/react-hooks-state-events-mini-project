import "@testing-library/jest-dom";

test("jest-dom loaded", () => {
  expect(document.body).toBeInTheDocument();
});
