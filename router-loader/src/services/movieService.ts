import type { IMovieExt } from "../models/IMovie";
import type { IOmdbResponse } from "../models/IOmdbResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://omdbapi.com/?apikey=416ed51a&";

export const getMovies = async () => {
  const response = await get<IOmdbResponse>(`${BASE_URL}s=star`);

  return response.Search;
};

export const getMovieById = async (id: string) => {
  const response = await get<IMovieExt>(`${BASE_URL}i=${id}`);

  return response;
};

// [{...}, {...},...] -> { movies: [{...}, {...}, ...] }
