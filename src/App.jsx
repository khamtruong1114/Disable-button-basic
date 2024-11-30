import React from "react";
import { useState } from "react";
import "./App.css";
import kebabCaseToTitleCase from "./helpers";
function App() {
  const [disabled, setDisabled] = React.useState(false);
  const [buttonColor, setButtonColor] = useState("red");
  const nextColorClass =
    buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const nextColorTitleCase = kebabCaseToTitleCase(nextColorClass);
  const className = disabled ? "gray" : buttonColor;
  // function handleClick() {
  //   setButtonColor((curColor) => (curColor === "red" ? "blue" : "red"));
  // }
  return (
    <div>
      <button
        className={className}
        disabled={disabled}
        onClick={() => setButtonColor(nextColorClass)}
      >
        Change to {nextColorTitleCase}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
