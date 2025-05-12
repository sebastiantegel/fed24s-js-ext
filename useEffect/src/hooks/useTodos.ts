import { useState } from "react";
import type { Todo } from "../models/Todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((m) => {
        if (m.id === id) {
          return { ...m, isDone: !m.isDone };
        }
        return m;
      })
    );
  };

  return { todos, addTodo, removeTodo, toggleTodo };
};
