import { Person } from "../models/Person";

type ShowPersonProps = {
  person: Person;
};

export const ShowPerson = (props: ShowPersonProps) => {
  return (
    <div className="person">
      <h3>{props.person.name}</h3>
      <p>{props.person.age}</p>
      <input type="checkbox" checked={props.person.isMarried} />
    </div>
  );
};
