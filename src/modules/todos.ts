import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";

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

const initialState: Array<{ id: number; text: string; done: boolean }> = [];

const todos = handleActions(
  {
    [ADD_TODO]: (state = initialState, action: TodoAction) => {
      return produce(
        state,
        (draft: Array<{ id: number; text: string; done: boolean }>) => {
          draft.unshift({ text: action.payload, id: Date.now(), done: false });
        },
      );
    },
    [REMOVE_TODO]: (state = initialState, action: TodoAction) => {
      return produce(
        state,
        (draft: Array<{ id: number; text: string; done: boolean }>) => {
          const index = draft.findIndex(
            (todo: { id: number; text: string; done: boolean }) => {
              return todo.id === action.payload;
            },
          );
          draft.splice(index, 1);
        },
      );
    },
    [TOGGLE_TODO]: (state = initialState, action: TodoAction) => {
      return produce(
        state,
        (draft: Array<{ id: number; text: string; done: boolean }>) => {
          draft.map((todo: { id: number; text: string; done: boolean }) => {
            if (todo.id === action.payload) {
              todo.done = !todo.done;
            }
          });
        },
      );
    },
  },
  initialState,
);

export default todos;
