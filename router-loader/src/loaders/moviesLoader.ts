import { getMovies } from "../services/movieService";

export const moviesLoader = async () => {
  const movies = await getMovies();

  return { movies };
};

// return { movies } === return { movies: movies } ===
// return { movies: [{...}, {...}, ...]}
