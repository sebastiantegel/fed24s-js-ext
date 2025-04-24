import "./MyForm.css";
import { useState } from "react";

type Person = {
  name: string;
  age: number;
  isMarried: boolean;
};

export const MyForm = () => {
  const [person, setPerson] = useState<Person>({
    name: "",
    age: 0,
    isMarried: false,
  });

  const handleSubmit = async () => {
    console.log("Submitting stuff", person);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setPerson({ ...person, name: e.target.value });
          }}
          value={person.name}
        />
        <input
          type="number"
          value={person.age}
          onChange={(e) => {
            setPerson({ ...person, age: +e.target.value });
          }}
        />
        <input
          type="checkbox"
          checked={person.isMarried}
          onChange={(e) => {
            setPerson({ ...person, isMarried: e.target.checked });
          }}
        />
        <button>Spara</button>
      </form>
      <p>{JSON.stringify(person)}</p>
    </>
  );
};
