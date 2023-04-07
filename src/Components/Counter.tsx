import React, { useState } from "react";
import {
  counterAction,
  decrease,
  decreaseAsync,
  increase,
  increaseAsync,
  setDiff as setCounterDiff,
} from "modules/counter";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

const Counter = (): JSX.Element => {
  const dispatch: Dispatch<counterAction> = useDispatch();
  const {
    value: counterValue,
    diff: initialDiff,
  }: { value: number; diff: number } = useSelector(
    (state: any) => state!.counter,
  );
  const [diff, setDiff] = useState(initialDiff);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const {
      target: { value: stringValue },
    } = event;
    const value = parseInt(stringValue);
    setDiff(value);
    dispatch(setCounterDiff(value, 20));
  };
  const onIncrease = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(increaseAsync());
  };

  const onDecrease = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(decreaseAsync());
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
