import counter, { counterSaga } from "modules/counter";
import todos from "modules/todos";
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ todos, counter });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export function* rootSaga() {
  yield all([counterSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

sagaMiddleware.run(rootSaga);

export default store;
