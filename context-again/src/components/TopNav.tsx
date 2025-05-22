import { NavLink } from "react-router";
import "./../styles/TopNav.css";

export const TopNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Hem</NavLink>
        </li>
        <li>
          <NavLink to={"/todos"}>Att göra</NavLink>
        </li>
        <li>
          <NavLink to={"/movies"}>Filmer</NavLink>
        </li>
      </ul>
    </nav>
  );
};
