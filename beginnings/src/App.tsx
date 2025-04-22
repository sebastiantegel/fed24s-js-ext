import "./App.css";
import { ConditionalRendering } from "./components/ConditionalRendering";
import { Interpolation } from "./components/Interpolation";
import { ObjectList } from "./components/ObjectList";
import { SimpleList } from "./components/SimpleLists";

function App() {
  let x = 10;

  const handleClick = () => {
    x = x + 1;
    console.log(x);
  };

  return (
    <>
      <h2>{x}</h2>
      <button onClick={handleClick}>Ändra</button>

      <Interpolation />
      <ConditionalRendering />
      <SimpleList />
      <ObjectList />
    </>
  );
}

export default App;
