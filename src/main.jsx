import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
import Stopwatch from "./watch.jsx";
import { CRUD } from "./Todo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Stopwatch/>
    <CRUD />
  </React.StrictMode>
);
