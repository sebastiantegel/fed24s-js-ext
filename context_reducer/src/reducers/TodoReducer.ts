import { Todo } from "../models/Todo";

export enum ActionTypes {
  ADDED,
  REMOVED,
  TOGGLED,
}

type Action = {
  type: ActionTypes;
  payload: string;
};

export const TodoReducer = (todos: Todo[], action: Action): Todo[] => {
  //   if (action.type === ActionTypes.ADDED) {
  //     return [...todos, new Todo(action.payload)];
  //   }

  //   if (action.type === ActionTypes.REMOVED) {
  //     return todos.filter((t) => t.id !== +action.payload);
  //   }

  //   if (action.type === ActionTypes.TOGGLED) {
  //     return todos.map((t) => {
  //       return t.id === +action.payload ? { ...t, done: !t.done } : t;
  //     });
  //   }

  switch (action.type) {
    case ActionTypes.ADDED:
      return [...todos, new Todo(action.payload)];

    case ActionTypes.REMOVED:
      return todos.filter((t) => t.id !== +action.payload);

    case ActionTypes.TOGGLED: {
      return todos.map((t) => {
        return t.id === +action.payload ? { ...t, done: !t.done } : t;
      });
    }

    default:
      return todos;
  }

  //   return todos;
};
