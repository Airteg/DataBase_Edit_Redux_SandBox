import React from "react";
import { render } from "react-dom";

import "./styles.css";
import App from "./components/App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import initialState from "./store/initialState";

const store = createStore(rootReducer, initialState);
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
render(
  <React.StrictMode>
    <Provider store={store}>{app}</Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
