import React from "react";
import ReactDOM from "react-dom/client";
import "./index1.css";
import App1 from "./components/App1";
// import { createRoot } from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>
);
