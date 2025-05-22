import { useContext, useState } from "react";
import { TodosContext } from "../contexts/TodosContext";

export const AddTodo = () => {
  const [userInput, setUserInput] = useState("");
  const { add } = useContext(TodosContext);

  return (
    <>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={() => add(userInput)}>Spara</button>
    </>
  );
};
