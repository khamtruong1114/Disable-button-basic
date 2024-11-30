import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";

test("button click flow", () => {
  //render app
  render(<App />);
  //find the button
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  //check initial color
  expect(buttonElement).toHaveClass("red");
  //click the butotn
  fireEvent.click(buttonElement);
  //check button text
  expect(buttonElement).toHaveTextContent(/red/i);
  //check button color
  expect(buttonElement).toHaveClass("blue");
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
  //click checkbox again to re-enable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
});
