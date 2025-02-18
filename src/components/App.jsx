// import React from "react"; //this in old versions of react.
import Nav from "./navbar";
import Home from "./Home";
import Con from "./container";
import Fun from "./challenge";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Home />
      </div>
      <Con />
      <Fun />
      <footer>&reg; 2025 Rifai Development. All rights reserved</footer>
    </div>
  );
};

export default App;
