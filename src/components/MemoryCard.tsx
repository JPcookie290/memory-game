import { useState, useEffect } from "react";
import { Pokemon } from "./interfaces";

export default function MemoryCard() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((json) => setPokemons(json.results))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const pokemonNames = [
      "bulbasaur",
      "charmander",
      "squirtle",
      "butterfree",
      "pikachu",
      "jigglypuff",
      "chansey",
      "oddish",
      "vulpix",
      "ditto",
      "dratini",
      "mew",
    ];
    const myPokemon = pokemons.filter((pokemon) =>
      pokemonNames.includes(pokemon.name)
    );
    setFilteredPokemons(myPokemon);
  }, [pokemons]);

  return (
    <>
      <h1>Memory Game</h1>
      <div className="memoryCards">
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
      </div>
    </>
  );
}
