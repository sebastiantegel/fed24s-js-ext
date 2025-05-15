import { useParams } from "react-router";

export const About = () => {
  const { name } = useParams();

  return (
    <>
      <h1>About: {name}</h1>
    </>
  );
};
