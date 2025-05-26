import { useReducer, useState } from "react";
import { ActionTypes, TodoReducer } from "../reducers/TodoReducer";

export const TodoApp = () => {
  //const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, dispatch] = useReducer(TodoReducer, []);
  const [userInput, setUserInput] = useState("");

  const addTodo = () => {
    // setTodos(...)
    dispatch({
      type: ActionTypes.ADDED,
      payload: userInput,
    });

    setUserInput("");
  };

  const removeTodo = (id: number) => {
    dispatch({
      type: ActionTypes.REMOVED,
      payload: id.toString(),
    });
  };

  const toggleTodo = (id: number) => {
    dispatch({
      type: ActionTypes.TOGGLED,
      payload: id.toString(),
    });
  };

  return (
    <>
      <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={addTodo}>Spara</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span className={t.done ? "done" : ""}>{t.text}</span>
            <button onClick={() => removeTodo(t.id)}>Ta bort</button>
            <button onClick={() => toggleTodo(t.id)}>Ändra</button>
          </li>
        ))}
      </ul>
    </>
  );
};
