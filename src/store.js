import counter from "modules/counter";
import todos from "modules/todos";
import { combineReducers, legacy_createStore as createStore } from "redux";

const rootReducer = combineReducers({ todos });
const store = createStore(rootReducer);

export default store;
