import type React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="wrapper" style={{ backgroundColor: theme.backgroundColor }}>
      {children}
    </div>
  );
};
