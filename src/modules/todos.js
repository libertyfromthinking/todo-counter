import { produce } from "immer";

const ADD_TODO = "todos/ADD_TODO";
const REMOVE_TODO = "todos/REMOVE_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

const initialState = [
  /*
      다음과 같은 객체를 추가
      {
        id: number,
        text: string,
        done: boolean,
      }
  */
];

export const addTodo = (text) => {
  return { type: ADD_TODO, text };
};

export const removeTodo = (id) => {
  return { type: REMOVE_TODO, id };
};

export const toggleTodo = (id) => {
  return { type: TOGGLE_TODO, id };
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return produce(state, (draft) => {
        draft.unshift({ text: action.text, id: Date.now(), done: false });
      });
    case REMOVE_TODO:
      return produce(state, (draft) => {
        const index = draft.findIndex((todo) => {
          return todo.id === action.id;
        });
        draft.splice(index, 1);
      });
    case TOGGLE_TODO:
      return produce(state, (draft) => {
        draft.map((todo) => {
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
