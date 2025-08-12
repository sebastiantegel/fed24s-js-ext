export default async function MovieDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch("https://omdbapi.com/?apikey=416ed51a&i=" + id);
  const movie = await response.json();

  return <>{JSON.stringify(movie)}</>;
}
