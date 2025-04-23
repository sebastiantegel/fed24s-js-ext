import { useState } from "react";

export const Counter = () => {
  //   let count = 0;
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    // count = count + 1;
    setCount(count + 1);

    // Här är count det "gamla" värdet fortfarande...
  };

  console.log(count);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleClick}>Öka</button>
    </>
  );
};
