export interface IMovie {
  Title: string;
  Poster: string;
  imdbID: string;
}

export interface IMovieExt extends IMovie {
  Director: string;
  Actors: string;
  Plot: string;
}
