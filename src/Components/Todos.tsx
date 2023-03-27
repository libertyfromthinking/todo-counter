import React, { useState } from "react";
import { addTodo, removeTodo, TodoAction, toggleTodo } from "modules/todos";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

const Todos = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const todos: Array<{ id: number; text: string; done: boolean }> = useSelector(
    (state: any) => state!.todos,
  );
  const dispatch: Dispatch<TodoAction> = useDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setInputValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  const onClick = (id: number) => (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    dispatch(toggleTodo(id));
  };

  const onRemove =
    (id: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      dispatch(removeTodo(id));
    };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={inputValue} />
        <input type="submit" value="submit" />
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <li
                onClick={onClick(todo.id)}
                style={{ textDecoration: todo.done ? "line-through" : "none" }}
              >
                {todo.text}
              </li>
              <button onClick={onRemove(todo.id)}>삭제</button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
