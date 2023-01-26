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

// const count = (str) => {
//   const arr = str.toLowerCase().split("");
//   const obj = new Set(arr);
//   const resultObj = {};

//   obj.forEach((el) => {
//     const arrFilter = arr.filter((item) => item === el);
//     resultObj[el] = arrFilter.length;
//   });

//   return Object.values(resultObj).filter((num) => num > 1).length;
// };

// console.log(count("aabbcde"));
