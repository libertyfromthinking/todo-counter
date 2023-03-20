import { produce } from "immer";

const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

const initialState = {
  value: 0,
  diff: 1,
};

export const setDiff = (diff) => {
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

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return produce(state, (draft) => {
        draft.value += parseInt(draft.diff);
      });
    case DECREASE:
      return produce(state, (draft) => {
        draft.value -= parseInt(draft.diff);
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
