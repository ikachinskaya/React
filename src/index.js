import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// const element = React.createElement(
//   "h1",
//   { classNames: "heading-title" },
//   "Hello, React!"
// );

// ReactDOM.render(element, document.getElementById("root"));

//аналогично на JSX
const name = "React";

const elem = (
  <h1 className="heading-title">
    <span>
      <a href="https://ru.reactjs.org/">Hello, {name}!</a>
    </span>
  </h1>
);
ReactDOM.render(elem, document.getElementById("root"));
