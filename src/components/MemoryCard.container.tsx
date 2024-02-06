import { useState, useEffect } from "react";
import { Pokemon } from "./interfaces";
import MemoryCard from "./MemoryCard";
import Score from "./Score";

export default function MemoryCardContainer() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [pickedPokemons, setPickedPokemons] = useState<Pokemon[]>([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [showGame, setShowGame] = useState(true);

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

  const shuffelList = () => {
    const shuffelArray = [...filteredPokemons];
    for (let i = 0; i < shuffelArray.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffelArray[i], shuffelArray[j]] = [shuffelArray[j], shuffelArray[i]];
    }
    setFilteredPokemons(shuffelArray);
  };

  const handleClick = (pokemon: Pokemon) => {
    shuffelList();
    if (pickedPokemons.includes(pokemon)) {
      setCurrentScore(0);
      setPickedPokemons([]);
    } else {
      setPickedPokemons([...pickedPokemons, pokemon]);
      setCurrentScore(currentScore + 1);
      if (currentScore + 1 === 12) setShowGame(!showGame);
    }
  };

  // const reload = () => {
  //   window.location.reload();
  // };

  return (
    <>
      <h1>Memory Game</h1>
      <Score currentScore={currentScore} />
      {showGame && (
        <MemoryCard
          filteredPokemons={filteredPokemons}
          handleClick={handleClick}
        />
      )}
      {!showGame && (
        <div>
          <h2>You got all {currentScore} points!</h2>
          <button onClick={() => window.location.reload()}>Start Over?</button>
        </div>
      )}
    </>
  );
}
