import { addTodo, removeTodo, toggleTodo } from "modules/todos";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
var Todos = function () {
    var _a = useState(""), inputValue = _a[0], setInputValue = _a[1];
    var todos = useSelector(function (state) { return state.todos; });
    var dispatch = useDispatch();
    var onChange = function (event) {
        var value = event.target.value;
        setInputValue(value);
        console.log(inputValue);
    };
    var onSubmit = function (event) {
        event.preventDefault();
        dispatch(addTodo(inputValue));
        setInputValue("");
    };
    var onClick = function (id) { return function (event) {
        event.preventDefault();
        dispatch(toggleTodo(id));
    }; };
    var onRemove = function (id) { return function (event) {
        event.preventDefault();
        dispatch(removeTodo(id));
    }; };
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { onSubmit: onSubmit },
            React.createElement("input", { type: "text", onChange: onChange, value: inputValue }),
            React.createElement("input", { type: "submit", value: "submit" })),
        React.createElement("ul", null, todos.map(function (todo) {
            return (React.createElement("div", { key: todo.id },
                React.createElement("li", { onClick: onClick(todo.id), style: { textDecoration: todo.done ? "line-through" : "none" } }, todo.text),
                React.createElement("button", { onClick: onRemove(todo.id) }, "\uC0AD\uC81C")));
        }))));
};
export default Todos;
