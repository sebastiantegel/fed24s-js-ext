import Link from "next/link";

type OmdbResponse = {
  Search: Movie[];
};

type Movie = {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
};

export default async function Movies() {
  const response = await fetch("https://omdbapi.com/?apikey=416ed51a&s=star");
  const movies: OmdbResponse = await response.json();

  return (
    <>
      {movies.Search.map((movie) => (
        <div key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <div>
            <img src={movie.Poster} alt={movie.Title} />
          </div>

          <Link href={`/movies/${movie.imdbID}`}>View more</Link>
        </div>
      ))}
    </>
  );
}
