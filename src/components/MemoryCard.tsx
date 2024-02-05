import { useState, useEffect } from "react";
import { Pokemon } from "./interfaces";

export default function MemoryCard() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const pickedPokemons: Pokemon[] = pokemons.filter(
      (pokemon, i) =>
        i === 0 ||
        i === 3 ||
        i === 6 ||
        i === 11 ||
        i === 24 ||
        i === 38 ||
        i === 42 ||
        i === 76 ||
        i === 112 ||
        i === 131 ||
        i === 147 ||
        i === 150
    );
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((json) => setPokemons(json.results))
      .then((_) => {
        setFilteredPokemons(pickedPokemons);
      })
      .catch((error) => console.error(error));
  }, [pokemons]);

  return (
    <>
      <h1>Memory Game</h1>

      {filteredPokemons.map((pokemon) => (
        <div key={pokemon.name}>
          <p>{pokemon.name}</p>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.url.split("/")[6]
            }.png`}
            alt={pokemon.name}
          />
        </div>
      ))}
    </>
  );
}
