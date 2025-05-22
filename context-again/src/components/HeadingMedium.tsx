import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

type HeadingProps = {
  children: React.ReactNode;
};

export const HeadingMedium = ({ children }: HeadingProps) => {
  const { theme } = useContext(ThemeContext);

  return <h3 style={{ color: theme.foregroundColor }}>{children}</h3>;
};
