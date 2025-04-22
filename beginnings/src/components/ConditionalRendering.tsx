export const ConditionalRendering = () => {
  const me = { name: "Zeb", age: 45, isMarried: true };
  const loading = true;

  //   if (me.age >= 45) {
  //     return <div>Some old dude...</div>
  //   }

  //   return <div>The youngster today...</div>;

  return (
    <>
      {loading && <div>Loading data...</div>}
      {me.age >= 45 ? (
        <>
          <div>Some old dude...</div>
          <section></section>
        </>
      ) : (
        <div>The youngster today...</div>
      )}
    </>
  );
};
