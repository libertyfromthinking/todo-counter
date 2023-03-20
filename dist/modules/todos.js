import { produce } from "immer";
var ADD_TODO = "todos/ADD_TODO";
var REMOVE_TODO = "todos/REMOVE_TODO";
var TOGGLE_TODO = "todos/TOGGLE_TODO";
var initialState = [
/*
    다음과 같은 객체를 추가
    {
      id: number,
      text: string,
      done: boolean,
    }
*/
];
export var addTodo = function (text) {
    return { type: ADD_TODO, text: text };
};
export var removeTodo = function (id) {
    return { type: REMOVE_TODO, id: id };
};
export var toggleTodo = function (id) {
    return { type: TOGGLE_TODO, id: id };
};
var todos = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ADD_TODO:
            return produce(state, function (draft) {
                draft.unshift({ text: action.text, id: Date.now(), done: false });
            });
        case REMOVE_TODO:
            return produce(state, function (draft) {
                var index = draft.findIndex(function (todo) {
                    return todo.id === action.id;
                });
                draft.splice(index, 1);
            });
        case TOGGLE_TODO:
            return produce(state, function (draft) {
                draft.map(function (todo) {
                    if (todo.id === action.id) {
                        todo.done = true;
                    }
                });
            });
        default:
            return state;
    }
};
export default todos;
