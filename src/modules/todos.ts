import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";
import { todoArray, todoObject } from "types";

const ADD_TODO = "todos/ADD_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;

export const addTodo = createAction(ADD_TODO);

export const removeTodo = createAction(REMOVE_TODO);

export const toggleTodo = createAction(TOGGLE_TODO);

export type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof toggleTodo>;

const initialState: todoArray = [];

const todos = handleActions(
  {
    [ADD_TODO]: (state = initialState, action: TodoAction) => {
      return produce(state, (draft: todoArray) => {
        draft.unshift({ text: action.payload, id: Date.now(), done: false });
      });
    },
    [REMOVE_TODO]: (state = initialState, action: TodoAction) => {
      return produce(state, (draft: todoArray) => {
        const index = draft.findIndex((todo: todoObject) => {
          return todo.id === action.payload;
        });
        draft.splice(index, 1);
      });
    },
    [TOGGLE_TODO]: (state = initialState, action: TodoAction) => {
      return produce(state, (draft: todoArray) => {
        draft.map((todo: todoObject) => {
          if (todo.id === action.payload) {
            todo.done = !todo.done;
          }
        });
      });
    },
  },
  initialState,
);

export default todos;
