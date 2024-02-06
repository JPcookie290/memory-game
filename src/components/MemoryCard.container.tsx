import { useState, useEffect } from "react";
import { Pokemon } from "./interfaces";
import MemoryCard from "./MemoryCard";
import Score from "./Score";

export default function MemoryCardContainer() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [pickedPokemons, setPickedPokemons] = useState<Pokemon[]>([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  //const [showGame, setShowGame] = useState(true);

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

  const handleClick = (poke: Pokemon) => {
    if (!pickedPokemons.length) {
      setPickedPokemons((prevPokemon) => [...prevPokemon, poke]);
      setCurrentScore(currentScore + 1);
    }

    pickedPokemons.forEach((pokemon) => {
      if (!pokemon.name.includes(poke.name)) {
        setPickedPokemons((prevPokemon) => [...prevPokemon, poke]);
        setCurrentScore(currentScore + 1);
        // if (currentScore + 1 === 12) setShowGame(!showGame);
      } else {
        if (currentScore > highScore) setHighScore(currentScore);
        setCurrentScore(0);
        setPickedPokemons([]);
      }
    });
  };

  //   const reload = () => {
  //     window.location.reload();
  //   };

  return (
    <>
      <Score currentScore={currentScore} highScore={highScore} />

      <MemoryCard
        filteredPokemons={filteredPokemons}
        handleClick={handleClick}
      />
    </>
  );
}
