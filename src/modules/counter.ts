import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";

const SET_DIFF = "counter/SET_DIFF" as const;
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;

export const setDiff = createAction(SET_DIFF);
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export type counterAction =
  | ReturnType<typeof setDiff>
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>;

const initialState: { value: number; diff: number } = {
  value: 0,
  diff: 1,
};

const counter = handleActions(
  {
    [INCREASE]: (state = initialState) => {
      return produce(state, (draft) => {
        draft.value += draft.diff;
      });
    },
    [DECREASE]: (state = initialState) => {
      return produce(state, (draft) => {
        draft.value -= draft.diff;
      });
    },
    [SET_DIFF]: (state = initialState, action: counterAction) => {
      return produce(state, (draft) => {
        console.log("드래프트", action);
        draft.diff = action.payload;
      });
    },
  },
  initialState,
);

export default counter;
