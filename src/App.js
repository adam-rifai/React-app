import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => alert("you've changed the counter"), [counter]);
  return (
    <div className="App">
      <button onClick={() => setCounter((prev) => Math.max(0, prev - 1))}>
        -
      </button>

      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default App;
