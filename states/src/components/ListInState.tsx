import { useState } from "react";
import { Person } from "../models/Person";

export const ListInState = () => {
  const [persons, setPersons] = useState<Person[]>([
    new Person("Sebastian", 45, true, 1),
    new Person("Hanna", 44, true, 2),
    new Person("Alvar", 14, false, 3),
  ]);

  // Lägg till i listan
  const addPerson = () => {
    setPersons([
      ...persons,
      new Person("Astrid", 14, false, persons.length + 1),
    ]);
  };

  // Ta bort ur listan
  const removePerson = (id: number) => {
    setPersons(persons.filter((p) => p.id !== id));
  };

  // Ändra i listan
  const changePerson = (id: number) => {
    setPersons(
      persons.map((p) => {
        if (p.id === id) {
          return { ...p, age: p.age + 1 };
        }
        return p;
      }),
    );
  };

  return (
    <>
      <button onClick={addPerson}>Lägg till</button>
      {persons.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.age}</p>
          <button
            onClick={() => {
              changePerson(p.id);
            }}
          >
            Fyller år
          </button>
          <button
            onClick={() => {
              removePerson(p.id);
            }}
          >
            Ta bort
          </button>
        </div>
      ))}
    </>
  );
};
