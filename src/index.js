import React from "react";
import ReactDOM from "react-dom";
import Autocomplete from "./Autocomplete";

const rootElement = document.getElementById("autocomplete");
ReactDOM.render(
  <React.StrictMode>
    <Autocomplete />
  </React.StrictMode>,
  rootElement
);
