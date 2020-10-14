import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "./store";
import Calculator from "./components/Calculator";

import "./styles/styles.css";

ReactDOM.render(
  <StoreProvider>
    <Calculator />
  </StoreProvider>,
  document.getElementById("root")
);
