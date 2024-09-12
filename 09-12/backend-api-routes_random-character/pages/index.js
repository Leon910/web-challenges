import useSWR from "swr";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR("/api/random-character", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error || !data) {
    return <h1>Error: {error}</h1>;
  }

  const { character } = data;

  return (
    <div>
      <h1>Random Character</h1>
      <p>First Name: {character.firstName}</p>
      <p>Last Name: {character.lastName}</p>
      <p>Twitter: {character.twitterName}</p>
      <p>Geohash: {character.geohash}</p>
    </div>
  );
}
