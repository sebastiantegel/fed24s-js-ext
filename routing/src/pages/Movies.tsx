import { useEffect, useState } from "react";
import type { IMovie } from "../models/IMovie";
import { getMovies } from "../services/movieService";
import { Link } from "react-router";

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>(
    JSON.parse(localStorage.getItem("movies") || "[]")
  );
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMovies();
        setMovies(movies);
        localStorage.setItem("movies", JSON.stringify(movies));
      } catch {
        setError("Error getting data from omdb, please try again later");
      }
    };

    if (movies.length > 0 && error !== "") return;

    fetchMovies();
  });

  return (
    <div className="movies">
      {error !== "" ? (
        <div>{error}</div>
      ) : (
        movies.map((m) => (
          <div className="movie" key={m.imdbID}>
            <h3>{m.Title}</h3>
            <div className="img-container">
              <img src={m.Poster} alt={m.Title} />
            </div>
            <Link to={"/movie/" + m.imdbID}>Läs mer...</Link>
          </div>
        ))
      )}
    </div>
  );
};
