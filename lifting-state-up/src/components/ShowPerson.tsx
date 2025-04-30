import { Person } from "../models/Person";
import "./../styles/ShowPerson.css";

type ShowPersonProps = {
  person: Person;
  removePerson: (id: number) => void;
};

export const ShowPerson = ({ person, removePerson }: ShowPersonProps) => {
  return (
    <div className="person">
      <h3>{person.name}</h3>
      <p>{person.age}</p>
      <div
        className={person.isMarried ? "status married" : "status not-married"}
      ></div>
      <div className="buttons">
        <button
          onClick={() => {
            removePerson(person.id);
          }}
        >
          Ta bort
        </button>
      </div>
    </div>
  );
};
