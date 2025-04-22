export const ObjectList = () => {
  const products = [
    { id: 1, name: "Product A", price: 1000 },
    { id: 2, name: "Product B", price: 2000 },
    { id: 3, name: "Product C", price: 10000 },
  ];

  return (
    <>
      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <span>{p.price}</span>
        </div>
      ))}
    </>
  );
};
