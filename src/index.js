import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./containers/App";

render(
  // alan hameye component ha be store dast resi daran
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
