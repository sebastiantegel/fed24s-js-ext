import { createContext, type Dispatch } from "react";
import type { Todo } from "../models/Todo";
import type { Action } from "../reducers/TodoReducer";

interface ITodosContext {
  todos: Todo[];
  dispatch: Dispatch<Action>;
}

export const TodosContext = createContext<ITodosContext>({
  todos: [],
  dispatch: () => {},
});
