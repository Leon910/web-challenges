import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
        setPrevious(data.previous);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  function handleNextPage() {
    setOffset(offset + 20);
    console.log(offset);
  }

  function handlePreviousPage() {
    setOffset(offset - 20);
    console.log(offset);
  }

  return (
    <main>
      {previous && (
        <button type="button" onClick={handlePreviousPage}>
          Previous Page
        </button>
      )}

      <button type="button" onClick={handleNextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
