import { NavLink } from "react-router";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <ul className="navigation">
      <li>
        <NavLink to={"/"}>Hem</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Kontakt</NavLink>
      </li>
      <li>
        <NavLink to={"/about/test"}>Om</NavLink>
      </li>
      <li>
        <NavLink to={"/movies"}>Filmer</NavLink>
      </li>
    </ul>
  );
};
