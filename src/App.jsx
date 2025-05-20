import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const colors = JSON.parse(localStorage.getItem("Color"));
  let [r, setR] = useState(colors && colors.r ? colors.r : 0);
  let [g, setG] = useState(colors && colors.g ? colors.g : 0);
  let [b, setB] = useState(colors && colors.b ? colors.b : 0);

  let save = () => {
    console.log("Saved");
    localStorage.setItem("Color", JSON.stringify({ r, g, b }));
  };

  return (
    <>
      <h1>Color Mixer</h1>
      <div
        style={{
          backgroundColor: "rgb(" + r + "," + g + "," + b + ")",
          height: "200px",
          width: "200px",
          border: "2px solid black",
        }}
      ></div>
      <label htmlFor="">Red</label>
      <input
        type="range"
        min={0}
        max={255}
        value={r}
        onChange={(event) => setR(event.target.value)}
      />{" "}
      <br />
      <br />
      <label htmlFor="">Green</label>
      <input
        type="range"
        min={0}
        max={255}
        value={g}
        onChange={(event) => setG(event.target.value)}
      />{" "}
      <br />
      <br />
      <label htmlFor="">Blue</label>
      <input
        type="range"
        min={0}
        max={255}
        value={b}
        onChange={(event) => setB(event.target.value)}
      />{" "}
      <br />
      <br />
      <button onClick={save}>Save Color Combination</button>
    </>
  );
}

export default App;
