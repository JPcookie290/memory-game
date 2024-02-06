import { Pokemon } from "./interfaces";

interface Props {
  filteredPokemons: Pokemon[];
  handleClick: (poke: Pokemon) => void;
}

export default function MemoryCard({ filteredPokemons, handleClick }: Props) {
  return (
    <div className="memoryCards">
      {filteredPokemons.map((pokemon) => (
        <div
          key={pokemon.name}
          className="pokemonCard"
          onClick={() => handleClick(pokemon)}
        >
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.url.split("/")[6]
            }.png`}
            alt={pokemon.name}
          />
          <h3>{pokemon.name}</h3>
        </div>
      ))}
    </div>
  );
}
