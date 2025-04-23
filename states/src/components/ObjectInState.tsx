import { useState } from "react";
import { Person } from "../models/Person";

export const ObjectInState = () => {
  const [person, setPerson] = useState<Person>(
    new Person("Sebastian", 45, true),
  );

  const handleClick = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <div className="person">
      <h3>{person.name}</h3>
      <p>{person.age}</p>
      <input type="checkbox" checked={person.isMarried} disabled />
      <button onClick={handleClick}>Fyller år</button>
    </div>
  );
};
