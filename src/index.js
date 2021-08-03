import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Hooks from "./Hooks";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Hooks />
  </StrictMode>,
  rootElement
);
