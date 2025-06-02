import { useContext } from "react";
import { MoviesWrapper } from "../components/styled/Wrappers";
import { MoviesContext } from "../contexts/MoviesContext";
import { MoviePresentation } from "../components/MoviePresentation";

export const Movies = () => {
  const { products } = useContext(MoviesContext);

  return (
    <MoviesWrapper>
      {products.map((p) => (
        <MoviePresentation key={p.id} movie={p} />
      ))}
    </MoviesWrapper>
  );
};
