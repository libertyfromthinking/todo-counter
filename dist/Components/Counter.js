import { decrease, increase, setDiff as setCounterDiff } from "modules/counter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
var Counter = function () {
    var dispatch = useDispatch();
    var _a = useSelector(function (state) { return state.counter; }), counterValue = _a.value, initialDiff = _a.diff;
    var _b = useState(initialDiff), diff = _b[0], setDiff = _b[1];
    var onChange = function (event) {
        event.preventDefault();
        var value = event.target.value;
        setDiff(value);
        dispatch(setCounterDiff(value));
    };
    var onIncrease = function (event) {
        event.preventDefault();
        dispatch(increase());
    };
    var onDecrease = function (event) {
        event.preventDefault();
        dispatch(decrease());
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("h2", null, counterValue)),
        React.createElement("input", { type: "number", placeholder: "type diff", value: diff, onChange: onChange }),
        React.createElement("button", { onClick: onIncrease }, "+"),
        React.createElement("button", { onClick: onDecrease }, "-")));
};
export default Counter;
