import { decrease, increase, setDiff as setCounterDiff } from "modules/counter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const { value: counterValue, diff: initialDiff } = useSelector(
    (state) => state.counter,
  );
  const [diff, setDiff] = useState(initialDiff);

  const onChange = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setDiff(value);
    dispatch(setCounterDiff(value));
  };
  const onIncrease = (event) => {
    event.preventDefault();
    dispatch(increase());
  };

  const onDecrease = (event) => {
    event.preventDefault();
    dispatch(decrease());
  };

  return (
    <>
      <div>
        <h2>{counterValue}</h2>
      </div>
      <input
        type="number"
        placeholder="type diff"
        value={diff}
        onChange={onChange}
      />
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  );
};

export default Counter;
