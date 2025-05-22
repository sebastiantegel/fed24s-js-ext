import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import { HeadingMedium } from "./HeadingMedium";

export const Todos = () => {
  const { todos, remove, toggle } = useContext(TodosContext);

  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>
          <HeadingMedium>{t.text}</HeadingMedium>
          <button onClick={() => remove(t.id)}>Ta bort</button>
          <button onClick={() => toggle(t.id)}>Ändra</button>
        </li>
      ))}
    </ul>
  );
};
