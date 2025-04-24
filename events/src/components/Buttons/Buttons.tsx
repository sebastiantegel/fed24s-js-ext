import "./Buttons.css";

export const Buttons = () => {
  const numbers = [1, 2, 3, 4];

  const handleClick = () => {
    console.log("Knapp 1 klickad");
  };

  const loopButtonClick = (n: number) => {
    console.log(n);
  };

  return (
    <div className="buttons">
      <button onClick={handleClick}>Knapp 1</button>
      {numbers.map((n) => (
        <button
          key={n}
          onClick={() => {
            loopButtonClick(n);
          }}
        >
          {n}
        </button>
      ))}
    </div>
  );
};
