import { Routes, Route } from "react-router-dom";
import Home from "Components/Home";
import Counter from "Components/Counter";
import Todos from "Components/Todos";
var App = function () {
    return (React.createElement("div", { className: "App" },
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "/counter", element: React.createElement(Counter, null) }),
            React.createElement(Route, { path: "/todos", element: React.createElement(Todos, null) }))));
};
export default App;
