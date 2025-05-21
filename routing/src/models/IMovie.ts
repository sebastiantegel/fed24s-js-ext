export interface IMovie {
  Title: string;
  imdbID: string;
  Poster: string;
}

export interface IMovieExt extends IMovie {
  Actors: string;
  Director: string;
  Plot: string;
}
