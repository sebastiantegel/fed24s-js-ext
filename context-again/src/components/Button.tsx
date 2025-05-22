import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
};

export const Button = ({ children, onClick, type }: ButtonProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: theme.buttonBackground,
        color: theme.foregroundColor,
      }}
    >
      {children}
    </button>
  );
};
