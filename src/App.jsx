// import React from "react"; //this in old versions of react.
import Nav from "./navbar";
import Home from "./Home";
const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Home />
      </div>
    </div>
  );
};

export default App;
