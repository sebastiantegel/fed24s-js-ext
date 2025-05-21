import { useLoaderData } from "react-router";
import type { IMovieExt } from "../models/IMovie";

export const Movie = () => {
  const { movie } = useLoaderData() as { movie: IMovieExt };

  return (
    <article>
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
    </article>
  );
};
