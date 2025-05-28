import { useContext, useState, type FormEvent } from "react";
import { ActionTypes } from "../reducers/TodoReducer";
import { TodosContext } from "../contexts/TodosContext";

export const AddTodo = () => {
  const { dispatch } = useContext(TodosContext);
  const [userInput, setUserInput] = useState("");

  const addTodo = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ActionTypes.ADDED,
      payload: userInput,
    });

    setUserInput("");
  };

  return (
    <form onSubmit={addTodo}>
      <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <button>Spara</button>
    </form>
  );
};
