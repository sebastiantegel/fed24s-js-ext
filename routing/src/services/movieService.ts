import type { IOmdbResponse } from "./../models/IOmdbResponse";
import type { IMovieExt } from "../models/IMovie";
import { get } from "./serviceBase";

export const getMovies = async () => {
  try {
    const response = await get<IOmdbResponse>(
      "https://omdbapi.com/?apikey=416ed51a&s=star"
    );

    return response.Search;
  } catch (error) {
    console.error("Error getting data from omdb");
    throw error;
  }
};

export const getMovie = async (id: string) => {
  const response = await get<IMovieExt>(
    "https://omdbapi.com/?apikey=416ed51a&i=" + id
  );

  return response;
};
