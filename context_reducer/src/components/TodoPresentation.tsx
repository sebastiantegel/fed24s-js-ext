import { useContext } from "react";
import { ActionTypes } from "../reducers/TodoReducer";
import { TodosContext } from "../contexts/TodosContext";
import type { Todo } from "../models/Todo";

type TodoPresentationProps = {
  todo: Todo;
};

export const TodoPresentation = ({ todo }: TodoPresentationProps) => {
  const { dispatch } = useContext(TodosContext);

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
    <li key={todo.id}>
      <span className={todo.done ? "done" : ""}>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>Ta bort</button>
      <button onClick={() => toggleTodo(todo.id)}>Ändra</button>
    </li>
  );
};
