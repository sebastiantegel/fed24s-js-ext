import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { useParams } from "react-router";
import { MoviePresentation } from "../components/MoviePresentation";

export const Movie = () => {
  const { products } = useContext(MoviesContext);
  const { id } = useParams();

  if (id) {
    const movieToShow = products.find((p) => p.id === +id);

    if (movieToShow) {
      return <MoviePresentation movie={movieToShow}></MoviePresentation>;
    }

    return <>No movie found</>;
  }

  return <>No id found</>;
};
