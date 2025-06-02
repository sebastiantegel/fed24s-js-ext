import { useContext } from "react";
import type { Product } from "../models/Product";
import { Button } from "./styled/Buttons";
import { Title } from "./styled/Headings";
import { P } from "./styled/P";
import { MovieWrapper } from "./styled/Wrappers";
import { MoviesContext } from "../contexts/MoviesContext";
import { ActionTypes } from "../reducers/ProductReducer";
import { Link } from "react-router";

type MoviePresentationProps = {
  movie: Product;
};

export const MoviePresentation = ({ movie }: MoviePresentationProps) => {
  const { dispatch } = useContext(MoviesContext);

  return (
    <MovieWrapper selected={movie.selected}>
      <Title>{movie.name}</Title>
      <P>{movie.price}</P>
      <Button
        onClick={() => {
          dispatch({
            type: ActionTypes.SELECTED,
            payload: movie.id.toString(),
          });
        }}
      >
        Välj
      </Button>
      <Link to={`/movie/${movie.id}`}>Läs mer...</Link>
    </MovieWrapper>
  );
};
