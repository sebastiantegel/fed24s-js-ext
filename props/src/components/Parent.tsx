import { Child } from "./Child";

export const Parent = () => {
  return (
    <>
      <div></div>
      <Child greeting="God morgon" />
      <Child greeting="God eftermiddag" time={100} />
      <section></section>
    </>
  );
};
