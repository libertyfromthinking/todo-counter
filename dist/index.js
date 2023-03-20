import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "store";
import App from "./App";
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
// <React.StrictMode>
React.createElement(BrowserRouter, null,
    React.createElement(Provider, { store: store },
        React.createElement(App, null))));
