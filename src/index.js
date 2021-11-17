//import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "../reducers/index";
import WebPage from "../components/WebPage";

const store = createStore(allReducers);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <WebPage />
  </Provider>,
  rootElement
);
