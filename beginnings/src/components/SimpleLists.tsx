export const SimpleList = () => {
  const numbers: number[] = [1, 1, 2, 3, 5];

  //   const lis = numbers.map((n, i) => <li key={i}>{n}</li>);

  return (
    <>
      <ul>
        {numbers.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </>
  );
};
