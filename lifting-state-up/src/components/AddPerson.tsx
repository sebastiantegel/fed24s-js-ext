import { ChangeEvent, FormEvent, useState } from "react";
import { defaultValue, Person } from "../models/Person";
import "./../styles/AddPerson.css";

type AddPersonProps = {
  addPerson: (p: Person) => void;
};

export const AddPerson = (props: AddPersonProps) => {
  const [person, setPerson] = useState<Person>(defaultValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "text") {
      setPerson({ ...person, [e.target.id]: e.target.value });
    }

    if (e.target.type === "number") {
      setPerson({ ...person, [e.target.id]: +e.target.value });
    }

    if (e.target.type === "checkbox") {
      setPerson({ ...person, [e.target.id]: e.target.checked });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Spara personen i listan
    props.addPerson(person);

    setPerson(defaultValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Namn</label>
        <input
          type="text"
          id="name"
          value={person.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="age">Ålder</label>
        <input
          type="number"
          id="age"
          value={person.age}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="isMarried">Gift</label>
        <input
          type="checkbox"
          id="isMarried"
          checked={person.isMarried}
          onChange={handleChange}
        />
      </div>

      <button>Spara</button>
    </form>
  );
};
