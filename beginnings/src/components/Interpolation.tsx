export const Interpolation = () => {
  const name = "Sebastian";
  const me = { name: "Zeb", age: 45, isMarried: true };

  return (
    <>
      <h2>{name}</h2>
      <div>{me.age}</div>
      <input type="checkbox" checked={me.isMarried} disabled />
    </>
  );
};
