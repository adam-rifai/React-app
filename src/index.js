import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import "./test.css";
import App from "./components/App";
import Test from "./components/Exercise";
// import { createRoot } from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);
