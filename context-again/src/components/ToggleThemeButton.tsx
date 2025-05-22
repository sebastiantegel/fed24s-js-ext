import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import type { ButtonProps } from "./Button";

export const ToggleThemeButton = ({ children, type }: ButtonProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type={type}
      onClick={toggleTheme}
      style={{
        backgroundColor: theme.buttonBackground,
        color: theme.foregroundColor,
      }}
    >
      {children}
    </button>
  );
};
