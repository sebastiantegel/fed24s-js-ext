import { Outlet } from "react-router";
import { Header } from "../components/Header";
import {
  ThemeContext,
  themes,
  type IThemeContext,
} from "../contexts/ThemeContext";
import { useState } from "react";
import { Wrapper } from "../components/Wrapper";

export const Layout = () => {
  const [currentTheme, setCurrentTheme] = useState<IThemeContext>({
    theme: themes.light,
    toggleTheme: () => {},
  });

  currentTheme.toggleTheme = () => {
    if (currentTheme.theme.name === themes.dark.name) {
      setCurrentTheme({ ...currentTheme, theme: themes.light });
    } else {
      setCurrentTheme({ ...currentTheme, theme: themes.dark });
    }
  };

  return (
    <ThemeContext.Provider value={currentTheme}>
      <Wrapper>
        <Header />
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </Wrapper>
    </ThemeContext.Provider>
  );
};
