import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Components/Main";
import { StateProvider } from "./state/StateProvider";
import reducer, { initalState } from "./reducer/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initalState={initalState} reducer={reducer}>
      <Main />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
