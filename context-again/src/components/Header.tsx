import { TopNav } from "./TopNav";
import "./../styles/Header.css";
import { HeadingMedium } from "./HeadingMedium";
import { Button } from "./Button";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <HeadingMedium>Title goes here</HeadingMedium>
      <TopNav />
      <Button
        type="button"
        onClick={() => {
          toggleTheme();
        }}
      >
        Ändra tema
      </Button>
    </header>
  );
};
