import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { describe, expect } from "vitest";
import kebabCaseToTitleCase from "./helpers";

test("button click flow", () => {
  //render app
  render(<App />);
  //find the button
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  //check initial color
  expect(buttonElement).toHaveClass("medium-violet-red");
  expect(checkboxElement);
  //click the button
  fireEvent.click(buttonElement);
  //check button text
  expect(buttonElement).toHaveTextContent(/red/i);
  //check button color
  expect(buttonElement).toHaveClass("midnight-blue");
});

test("checkbox flow", () => {
  render(<App />);
  //find elements
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  //check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  //click checkbox to disable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass("gray");

  //click checkbox again to re-enable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass("medium-violet-red");
});
test("checkbox flow after button clicked", () => {
  render(<App />);
  //find elements
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  //click button to change to blue
  fireEvent.click(buttonElement);
  //click checkbox to disable button
  expect(buttonElement).toBeDisabled();
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toHaveClass("gray");

  //click checkbox to re-enbale button
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass("midnight-blue");
});

describe("kebabCaseToTitleCase", () => {
  test("works for no hyphen", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("works for one hyphen", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("works for multiple hyphens", () => {
    expect(kebabCaseToTitleCase("medium-vilolet-red")).toBe(
      "Medium Violet Red"
    );
  });
});
