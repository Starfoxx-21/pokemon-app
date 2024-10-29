import './App.css';
import { useState, useEffect } from 'react';
import DisplayPokemon from './DisplayPokemon';
import BrowsingPokemon from './BrowsingPokemon';

const pokemonURL = "https://pokeapi.co/api/v2/pokemon/"

function App() {
  const [currentPokemon, setCurrentPokemon] = useState();
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(1);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${pokemonURL}${currentPokemonIndex}`);
      const data = await response.json();
      setCurrentPokemon(data);
      console.log(data);
    }
    fetchPokemon();
  }, [currentPokemonIndex])

  return (
    <div className="App">
      <DisplayPokemon pokemon={currentPokemon} />
      <br />
      <BrowsingPokemon currentPokemonIndex={currentPokemonIndex} setCurrentPokemonIndex={setCurrentPokemonIndex}/>
    </div>
  );
}

export default App;
