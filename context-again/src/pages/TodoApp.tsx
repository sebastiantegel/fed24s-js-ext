import { useState } from "react";
import { TodosContext, type ITodosContext } from "../contexts/TodosContext";
import { Todo } from "../models/Todo";
import { AddTodo } from "../components/AddTodo";
import { Todos } from "../components/Todos";

export const TodoApp = () => {
  const [contextValue, setContextValue] = useState<ITodosContext>({
    todos: [],
    add: () => {},
    remove: () => {},
    toggle: () => {},
  });

  contextValue.add = (text: string) => {
    setContextValue({
      ...contextValue,
      todos: [...contextValue.todos, new Todo(text)],
    });
  };

  contextValue.remove = (id: number) => {
    setContextValue({
      ...contextValue,
      todos: contextValue.todos.filter((t) => t.id !== id),
    });
  };

  contextValue.toggle = (id: number) => {
    setContextValue({
      ...contextValue,
      todos: contextValue.todos.map((t) => {
        if (t.id === id) return { ...t, isDone: !t.isDone };
        return t;
      }),
    });
  };

  return (
    <TodosContext.Provider value={contextValue}>
      <AddTodo />
      <Todos />
    </TodosContext.Provider>
  );
};
