import { createContext } from "react";

export type Theme = {
  name: string;
  backgroundColor: string;
  foregroundColor: string;
  buttonBackground: string;
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
    buttonBackground: "beige",
  },
  light: {
    name: "Day",
    backgroundColor: "white",
    foregroundColor: "black",
    buttonBackground: "smokewhite",
  },
};

export interface IThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: themes.light,
  toggleTheme: () => {},
});
