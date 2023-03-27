import { produce } from "immer";

const SET_DIFF = "counter/SET_DIFF" as const;
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;

export const setDiff = (diff: number) => {
  return {
    type: SET_DIFF,
    diff,
  };
};
export const increase = () => {
  return { type: INCREASE };
};
export const decrease = () => {
  return { type: DECREASE };
};

export type counterAction =
  | ReturnType<typeof setDiff>
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>;

const initialState: { value: number; diff: number } = {
  value: 0,
  diff: 1,
};

const counter = (state = initialState, action: counterAction) => {
  switch (action.type) {
    case INCREASE:
      return produce(state, (draft) => {
        draft.value += draft.diff;
      });
    case DECREASE:
      return produce(state, (draft) => {
        draft.value -= draft.diff;
      });
    case SET_DIFF:
      return produce(state, (draft) => {
        draft.diff = action.diff;
      });
    default:
      return state;
  }
};

export default counter;
