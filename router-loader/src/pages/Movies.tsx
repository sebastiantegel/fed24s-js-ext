import { Link, useLoaderData } from "react-router";
import type { IMovie } from "../models/IMovie";

type LoaderData = {
  movies: IMovie[];
};

export const Movies = () => {
  const { movies } = useLoaderData() as LoaderData;

  return (
    <section>
      {movies.map((m) => (
        <article key={m.imdbID}>
          <h2>{m.Title}</h2>
          <div className="img-container">
            <img src={m.Poster} alt={m.Title} />
          </div>
          <Link to={`/movie/${m.imdbID}`}>Läs mer...</Link>
        </article>
      ))}
    </section>
  );
};
