import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.min";
import { Provider } from "react-redux";
import store from "./components/Redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
