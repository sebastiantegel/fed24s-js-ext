import { createContext } from "react";

export type Theme = {
  name: string;
  backgroundColor: string;
  foregroundColor: string;
};

type Themes = {
  dark: Theme;
  light: Theme;
};

export const themes: Themes = {
  dark: {
    name: "Night",
    backgroundColor: "maroon",
    foregroundColor: "white",
  },
  light: {
    name: "Day",
    backgroundColor: "white",
    foregroundColor: "black",
  },
};

export const ThemeContext = createContext<Theme>(themes.light);
