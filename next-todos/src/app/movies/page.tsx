import Link from "next/link";
import Image from "next/image";

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
            <Image
              src={movie.Poster}
              alt={movie.Title}
              width={200}
              height={300}
            />
          </div>

          <Link href={`/movies/${movie.imdbID}`}>View more</Link>
        </div>
      ))}
    </>
  );
}
