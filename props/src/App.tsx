import { useState } from "react";
import "./App.css";
import { Parent } from "./components/Parent";
import { ShowPerson } from "./components/ShowPerson";
import { Person } from "./models/Person";

function App() {
  // const me: Person = new Person("Sebastian", 45, true);
  // const [me, setMe] = useState<Person>(new Person("Sebastian", 45, true));
  const [persons, setPersons] = useState<Person[]>([
    new Person("Sebastian", 45, true),
    new Person("Hanna", 45, true),
    new Person("Astrid", 14, false),
  ]);

  return (
    <>
      <Parent />

      <div className="persons">
        {persons.map((p) => (
          <ShowPerson person={p} key={p.id} />
        ))}
      </div>
    </>
  );
}

export default App;
