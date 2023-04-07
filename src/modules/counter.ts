import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

const SET_DIFF = "counter/SET_DIFF" as const;
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_ASYNC = "counter/INCREASE_ASYNC" as const;
const DECREASE_ASYNC = "counter/DECREASE_ASYNC" as const;

export const setDiff = createAction(SET_DIFF);
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseAsync = createAction(INCREASE_ASYNC);
export const decreaseAsync = createAction(DECREASE_ASYNC);

function* increaseSaga() {
  yield delay(1000); // 1초를 기다립니다.
  console.log("increase 사가");
  yield put(increase()); // put은 특정 액션을 디스패치 해줍니다.
}
function* decreaseSaga() {
  yield delay(1000); // 1초를 기[다립니다.
  console.log("decrease 사가");
  yield put(decrease()); // put은 특정 액션을 디스패치 해줍니다.
}

export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리
  yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}
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
