import { useFetch } from "../hooks/useFetch";
import type { IOmdbResponse } from "../models/IOmdbResponse";

export const MoviesApp = () => {
  // const { movies } = useMovies();

  const [loading, response] = useFetch<IOmdbResponse>(
    "https://omdbapi.com/?apikey=416ed51a&s=star"
  );

  //   useEffect(() => {
  //     console.log("Wohooo!!");
  //   }, [movies]);

  console.log(response?.Search);

  return (
    <>
      {loading && <h1>Laddar...</h1>}
      {response?.Search.map((m) => (
        <div key={m.imdbID}>
          <h2>{m.Title}</h2>
          <div className="img-container">
            <img src={m.Poster} alt={m.Title} />
          </div>
        </div>
      ))}
    </>
  );
};
