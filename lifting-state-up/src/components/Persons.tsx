import { Person } from "../models/Person";
import { ShowPerson } from "./ShowPerson";
import "./../styles/Persons.css";

type PersonsProps = {
  persons: Person[];
  removePerson: (id: number) => void;
};

export const Persons = ({ persons, removePerson }: PersonsProps) => {
  return (
    <div className="persons">
      {persons.map((p) => (
        <ShowPerson person={p} key={p.id} removePerson={removePerson} />
      ))}
    </div>
  );
};
