export interface Pokemon {
  name: string;
  url: string;
}
export interface IScore {
  pokemonList: Pokemon[];
  clickedPokemon: Pokemon[];
  currentScore: number;
  highScore: number;
}
