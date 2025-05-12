import { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import { Todo } from "../models/Todo";
import { Button } from "./Button";

export const TodosApp = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodos();
  const [userInput, setUserInput] = useState("");

  return (
    <>
      <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      {/* <button onClick={() => addTodo(new Todo(userInput, false))}>Spara</button> */}
      <Button onClick={() => addTodo(new Todo(userInput, false))}>Spara</Button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span className={t.isDone ? "done" : ""}>{t.text}</span>
            <Button onClick={() => removeTodo(t.id)}>Ta bort</Button>
            <Button onClick={() => toggleTodo(t.id)}>Ändra</Button>
          </li>
        ))}
      </ul>
    </>
  );
};
