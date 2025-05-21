import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { TestContext } from "./contexts/TestContext";
import { ThemeContext, themes, type Theme } from "./contexts/ThemeContext";
import { Child } from "./components/Child";

function App() {
  // const [text, setText] = useState("Lorem ipsum");

  // const handleChangeClick = () => {
  //   setText("Någonting annat");
  // };

  // return (
  //   <>
  //     <TestContext.Provider value={text}>
  //       <Button onClick={handleChangeClick}></Button>
  //     </TestContext.Provider>
  //   </>
  // );

  const [theme, setTheme] = useState<Theme>(themes.light);

  const toggleTheme = () => {
    if (theme.name === themes.light.name) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
    // theme.name === themes.light.name ? setTheme(themes.dark) : setTheme(themes.light);
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Button onClick={toggleTheme}>
          Change to:{" "}
          {theme.name === themes.light.name
            ? themes.dark.name
            : themes.light.name}
        </Button>
        <Child />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
