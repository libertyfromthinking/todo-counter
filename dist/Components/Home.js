import { Link } from "react-router-dom";
var Home = function () {
    return (React.createElement("div", null,
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement(Link, { to: "/" }, "home")),
            React.createElement("li", null,
                React.createElement(Link, { to: "/todos" }, "Todos")),
            React.createElement("li", null,
                React.createElement(Link, { to: "/counter" }, "counter")))));
};
export default Home;
