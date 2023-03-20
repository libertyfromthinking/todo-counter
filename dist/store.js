import counter from "modules/counter";
import todos from "modules/todos";
import { combineReducers, legacy_createStore as createStore } from "redux";
var rootReducer = combineReducers({ todos: todos, counter: counter });
var store = createStore(rootReducer);
export default store;
