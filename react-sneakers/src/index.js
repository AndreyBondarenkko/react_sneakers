/*******************
 * Default import component
 *******************/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/*******************
 * Styles
 *******************/
import "macro-css";
import "./index.scss";

/*******************
 * start Game :)
 *******************/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
