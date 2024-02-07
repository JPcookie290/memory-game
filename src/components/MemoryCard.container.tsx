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
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => response.json())
      .then((json) => setPokemons(json.results))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const pokemonNames = [
      "bulbasaur",
      "charmander",
      "squirtle",
      "pichu",
      "cleffa",
      "budew",
      "togepi",
      "oddish",
      "vulpix",
      "azurill",
      "happiny",
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

  return (
    <>
      <div className="header">
        <h1>Memory Game</h1>
      </div>
      {showGame && <Score currentScore={currentScore} />}
      {showGame && (
        <MemoryCard
          filteredPokemons={filteredPokemons}
          handleClick={handleClick}
        />
      )}
      {!showGame && (
        <div className="wonNotification">
          <h2>You got all {currentScore} points!</h2>
          <button onClick={() => window.location.reload()}>Start Over?</button>
        </div>
      )}
      <div className="Footer">
        Image by{" "}
        <a href="https://www.freepik.com/free-vector/map-background-pirate-ships-flat-design_1124035.htm#query=pokemon%20map&position=2&from_view=search&track=ais&uuid=967a720b-51ea-43f9-956d-ad6848035195">
          Freepik
        </a>
      </div>
    </>
  );
}
