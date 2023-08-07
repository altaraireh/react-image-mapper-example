import React from "react";
import ReactDOM from "react-dom";
import ImageMapper from "react-image-mapper";

import Example from "./example.jsx";

import "./styles.css";

function App() {
  return <Example />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
