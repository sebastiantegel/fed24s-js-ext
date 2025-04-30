import { useState } from "react";
import { Person } from "../models/Person";
import { AddPerson } from "./AddPerson";
import { Persons } from "./Persons";

export const PersonsApp = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  const addPerson = (newPerson: Person) => {
    setPersons([
      ...persons,
      new Person(newPerson.name, newPerson.age, newPerson.isMarried),
    ]);
  };

  const removePerson = (id: number) => {
    setPersons(persons.filter((p) => p.id !== id));
  };

  return (
    <>
      <AddPerson addPerson={addPerson} />
      <Persons persons={persons} removePerson={removePerson} />
    </>
  );
};
