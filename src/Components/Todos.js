import { addTodo, removeTodo } from "modules/todos";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todos = () => {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setInputValue(value);
    console.log(inputValue);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  const onRemove = (id) => (event) => {
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
              <li key={todo.id}>{todo.text}</li>
              <button onClick={onRemove(todo.id)}>삭제</button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
