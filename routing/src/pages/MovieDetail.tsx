import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { IMovieExt } from "../models/IMovie";
import { getMovie } from "../services/movieService";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovieExt>();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (id) {
        const movie = await getMovie(id);

        setMovie(movie);
      }
    };

    if (movie) return;

    fetchMovieDetails();
  });

  return (
    <section className="movie-details">
      <h2>{movie?.Title}</h2>
      <p>{movie?.Plot}</p>
      <p>{movie?.Actors}</p>
    </section>
  );
};
