import React from "react";
import { useState } from "react";
import "./App.css";
function App() {
  const [disabled, setDisabled] = React.useState(false);
  const [buttonColor, setButtonColor] = useState("red");
  const nextColor = buttonColor === "red" ? "blue" : "red";
  // function handleClick() {
  //   setButtonColor((curColor) => (curColor === "red" ? "blue" : "red"));
  // }
  return (
    <div>
      <button
        disabled={disabled}
        className={buttonColor}
        onClick={() => setButtonColor(nextColor)}
      >
        Change to {nextColor}
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
