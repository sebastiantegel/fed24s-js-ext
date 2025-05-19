import type { LoaderFunctionArgs } from "react-router";
import { getMovieById } from "../services/movieService";

export const movieLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.id) {
    throw new Error("Missing movie ID parameter");
  }

  const movie = await getMovieById(params.id);
  return { movie };
};
