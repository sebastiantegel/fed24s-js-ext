import { useContext } from "react";
// import { TestContext } from "../contexts/TestContext";
import { ThemeContext } from "../contexts/ThemeContext";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => {
  const currentTheme = useContext(ThemeContext);

  return (
    <>
      <button
        onClick={onClick}
        style={{
          color: currentTheme.foregroundColor,
          backgroundColor: currentTheme.backgroundColor,
        }}
      >
        {children}
      </button>
    </>
  );
};
