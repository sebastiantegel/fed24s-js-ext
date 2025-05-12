import { useEffect, useState } from "react";
import type { IOmdbResponse } from "../models/IOmdbResponse";
import type { IMovie } from "../models/IMovie";

export const useMovies = () => {
  const [hasFetched, setHasFetched] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        "https://omdbapi.com/?apikey=416ed51a&s=star"
      );
      const data: IOmdbResponse = await response.json();
      setMovies(data.Search);
      setHasFetched(true);
    };

    if (hasFetched) return;

    getMovies();
  });

  return { movies, hasFetched };
};
