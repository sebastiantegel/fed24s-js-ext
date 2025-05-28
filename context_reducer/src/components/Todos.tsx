import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { TodoPresentation } from "./TodoPresentation";

export const Todos = () => {
  const { todos } = useContext(TodosContext);

  return (
    <ul>
      {todos.map((t) => (
        <TodoPresentation key={t.id} todo={t} />
      ))}
    </ul>
  );
};
